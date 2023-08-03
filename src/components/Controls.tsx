const Controls = () => {
    const buttonStyle = {
        width: "100%",
        marginBottom: "0.5%",
        borderRadius: "0",    
        fontSize: 14    
    };
    return (
        <>
            <button type="button" id="webcamButton" className="btn btn-secondary bg-dark" disabled style={buttonStyle}>Start Webcam</button>
            <button type="button" className="btn btn-secondary bg-dark" disabled style={buttonStyle}>Pause Hand Landmarks</button>
        </>
    )
}

export default Controls