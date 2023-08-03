import {
    HandLandmarker,
    FilesetResolver
  } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";
  let handLandmarker = undefined;
  let runningMode = "IMAGE";
  let enableWebcamButton = HTMLButtonElement;
  let webcamRunning = false;
  var landmarksArray = [];
  var count = 0;
  var newCount = 0;
  var result = "";
  var element = document.getElementById("info");
  const createHandLandmarker = async () => {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );
    handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: "GPU"
      },
      runningMode: runningMode,
      numHands: 2
    });
  };
  createHandLandmarker();
  const video = document.getElementById("webcam");
  const canvasElement = document.getElementById(
    "output_canvas"
  );
  const canvasCtx = canvasElement.getContext("2d");

  // Check if webcam access is supported.
  const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;

  // If webcam supported, add event listener to button for when user
  // wants to activate it.
  if (hasGetUserMedia()) {
    enableWebcamButton = document.getElementById("webcamButton");
    enableWebcamButton.addEventListener("click", enableCam);
  } else {
    console.warn("getUserMedia() is not supported by your browser");
  }

  // Enable the live webcam view and start detection.
  function enableCam(event) {
    if (!handLandmarker) {
      console.log("Wait! objectDetector not loaded yet.");
      element.innerHTML = "start";
      return;
    }

    if (webcamRunning === true) {
      webcamRunning = false;
      enableWebcamButton.innerText = "Predictions On";
    } else {
      webcamRunning = true;
      enableWebcamButton.innerText = "Disable Webcam";
    }

    // getUsermedia parameters.
    const constraints = {
      video: true
    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.addEventListener("loadeddata", predictWebcam);
    });
  }

  let lastVideoTime = -1;
  let results = undefined;
  async function predictWebcam() {
    canvasElement.style.width = video.videoWidth;;
    canvasElement.style.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;

    // Now let's start detecting the stream.
    if (runningMode === "IMAGE") {
      runningMode = "VIDEO";
      await handLandmarker.setOptions({ runningMode: "VIDEO" });
    }
    let startTimeMs = performance.now();
    if (lastVideoTime !== video.currentTime) {
      lastVideoTime = video.currentTime;
      results = handLandmarker.detectForVideo(video, startTimeMs);
    }

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (results.landmarks) {
      for (const landmarks of results.landmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: "#2F4F4F",
          lineWidth: 2.5
        });
        drawLandmarks(canvasCtx, landmarks, { color: "white", lineWidth: 5, radius: 0.5 });
        if (count < 100) {
          if (count % 17 == 0) {
              element.innerHTML =  Math.floor((100 - count) / 20);
          }
          count += 1;
        } else if (count < 250) {
          element.innerHTML = [landmarks[8].x*100, landmarks[8].y*100];
          if (count % 5 == 0) {
              landmarksArray[newCount] = [landmarks[8].x*100, landmarks[8].y*100];
              newCount += 1;
          }
          count += 1;
        } else {
          console.log("Starting for loop");
          for (var j=0; j<newCount-1; j++) {
              landmarksArray[j] = [landmarksArray[j + 1][0] - landmarksArray[j][0], landmarksArray[j + 1][1] - landmarksArray[j][1]];
          }
          console.log(landmarksArray);
          var wordName = document.getElementById("wordName").value;
          $.ajax({
             type: 'POST',
             url: 'http://127.0.0.1:8000/train-word/',
             data: { vector: landmarksArray, count: newCount, wordName: wordName  },
             success: function(res){
                     console.log(res);
                     var element = document.getElementById("para");
                     element.innerHTML = res.success;
             },
             error: function(error) {
                 callbackErr(error,self)
             }
         })
         landmarksArray = [];
         count = 0;
         newCount = 0;
        }
      }
    }
    canvasCtx.restore();

    // Call this function again to keep predicting when the browser is ready.
    if (webcamRunning === true) {
      window.requestAnimationFrame(predictWebcam);
    }
  }
