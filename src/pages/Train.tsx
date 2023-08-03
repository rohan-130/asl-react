import Controls from "../components/Controls"
import NavBar from "../components/NavBar"
import Video from "../components/Video"
import InputWordName from "../components/InputWordName"
import Footer from "../components/Footer"

const Train = () => {
  return (
    <div style={{backgroundColor: "#121212", color: "#B2BEB5", fontFamily: "monospace"}}>
      <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet" />
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script type="module" src=""/>
      <NavBar name=""/>
      <div className="hstack" style={{textAlign: "center"}}>
        <Video />
        <div className="vstack" style={{marginLeft: "2%", marginRight: "1%", textAlign: "center"}}>
          <h2 style={{textAlign: "center", width: "50%", marginTop: "50%", marginBottom: "37.5%", marginLeft: "25%"}}>Train</h2>
          <InputWordName />
          <Controls />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Train