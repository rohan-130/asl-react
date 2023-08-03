import Controls from "../components/Controls"
import Footer from "../components/Footer"
import MemberList from "../components/MemberList"
import NavBar from "../components/NavBar"
import Video from "../components/Video"

const Test = () => {
  return (
    <div style={{backgroundColor: "#121212", color: "#B2BEB5", fontFamily: "monospace", height: "10%"}}>
      <NavBar name=""/>
      <div className="hstack" style={{height: "100%", textAlign: "center"}}>
        <Video />
        <div className="vstack" style={{height: "100%", marginLeft: "2%", marginRight: "1%", textAlign: "center"}}>
          <h2 style={{textAlign: "center", width: "50%", marginTop: "50%", marginBottom: "45.5%", marginLeft: "25%"}}>Prediction</h2>
          <Controls />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Test