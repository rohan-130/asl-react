const Footer = () => {
    return ( 
        <div className="bg-dark" style={{marginBottom: -100}}>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/train" className="nav-link px-2 text-muted">Train Cam</a></li>
                    <li className="nav-item"><a href="/test" className="nav-link px-2 text-muted">Test Cam</a></li>
                    <li className="nav-item"><a href="https://github.com/rohan-130/sign-language-recognition" target="_blank" className="nav-link px-2 text-muted">GitHub</a></li>
                    <li className="nav-item"><a href="https://github.com/rohan-130/sign-language-recognition/blob/main/README.md" target="_blank" className="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p className="text-center text-muted">&copy; 2023 Github, rohan-130</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer