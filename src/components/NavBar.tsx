import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const NavBar = (props: { name: string }) => {
    const pages = ["Train Cam", "Test Cam"];
    const urls = {"Train Cam": "train", "Test Cam": "test"};
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" style={{color: "#B2BEB5", fontSize: 15}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{color: "#B2BEB5", fontSize: 17, marginLeft: "0.7%"}}>ASL Recognition</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{marginLeft: "74%"}}>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="train" style={{color: "#B2BEB5"}}>Train Cam</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="test" style={{color: "#B2BEB5"}}>Test Cam</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://github.com/rohan-130/sign-language-recognition" target="_blank" style={{color: "#B2BEB5"}}>Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://github.com/rohan-130/sign-language-recognition/blob/main/README.md" target="_blank" style={{color: "#B2BEB5"}}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar