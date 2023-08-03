const InputWordName = () => {
    const inputStyle = {
        borderRadius: "0",
        border: "0",
        fontSize: 13,
        height: 42,
        backgroundColor: "lightgrey",
        marginBottom: "0.5%"
    };
    return (
        <>
            <input type="text" className="form-control" placeholder="Enter word name" style={inputStyle}/>
        </>
    )
}

export default InputWordName