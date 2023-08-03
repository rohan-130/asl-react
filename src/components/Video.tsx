const Video = () => {
    return (
    <>
        <div style={{position: "relative"}}>
            <video id="webcam" style={{position: "absolute", marginLeft: "2%", marginTop: "4%", width: "850px", height: "600px", border: "0.1px", backgroundColor: "#3c4447"}}></video>
            <canvas className="output_canvas" id="output_canvas" style={{position: "relative", marginLeft: "2%", marginTop: "4%", width: "850px", height: "600px", border: "0.1px", marginBottom: "5%"}}></canvas>
        </div>
    </>
    );
}

export default Video