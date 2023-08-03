import Controls from "../components/Controls"
import Footer from "../components/Footer"
import InputWordName from "../components/InputWordName"
import NavBar from "../components/NavBar"
import Video from "../components/Video"

const Home = () => {
    return (
        <div style={{backgroundColor: "#121212", color: "#B2BEB5", fontFamily: "monospace", height: "10%"}}>
            <NavBar name=""/>
            <div className="hstack">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT566Dk_KIuZ1UHMc0a7a347l2jOj1IlqWjSgdjLG3JypRCWaZgxi5W&usqp=CAE&s" style={{width: "20%", margin: "13%"}} />
                <h2>Sign Language Recognition</h2>
            </div>
            <div className="card bg-transparent" style={{width: "70%", marginLeft: "15%"}}>
                <div className="card-body">
                    sign-language-recognition is a web app that uses Hidden Markov Models to train and predict gestures. It uses a multidimensional Viterbi Trellis to predict a word using hand landmark data from MediaPipe. Words can be trained through the REST API implemented to access the Viterbi Trellis and the algorithm that divides training vectors into states. The API is used in the static webpages in django/templates using AJAX. For the first training vector of each word, the number of states that returns the highest probability is used.
                </div>
            </div>
            <div className="card bg-transparent" style={{width: "70%", marginLeft: "15%", marginTop: "10%"}}>
                <div className="card-body">
                    <video src="https://user-images.githubusercontent.com/82863394/253632147-03717661-28a6-40c6-b113-dda1c6e4519b.mov" style={{width: "70%", border:"solid 0.1px", marginLeft: "15%"}} autoPlay muted loop/>
                </div>
            </div>
            <div className="hstack" style={{marginLeft: "33%", marginTop: "10%", marginBottom: "10%"}}>
                <a className="text-decoration-none" href="/test" style={{color: "white"}}>
                <div className="card bg-transparent" style={{width: "15%", height: "20%", marginRight: "17%"}}>
                    <div className="hstack">
                    <img style={{height: "20%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNG9kHKbKuZIZbKsfZjKo0bdXlKaZUIEeuQiYeKyZpLYQ4aP4-hRtH&usqp=CAE&s" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Start Training</h4>
                        </div>
                    </div>   
                </div>
                </a>
                <a className="text-decoration-none" href="/test" style={{color: "white"}}>
                    <div className="card bg-transparent" style={{width: "15%", height: "20%"}}>
                        <div className="hstack">
                        <img style={{height: "20%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNG9kHKbKuZIZbKsfZjKo0bdXlKaZUIEeuQiYeKyZpLYQ4aP4-hRtH&usqp=CAE&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Predict Words</h4>
                            </div>
                        </div>   
                    </div>
                </a>
            </div>

            <Footer />
        </div>
    )
}

export default Home