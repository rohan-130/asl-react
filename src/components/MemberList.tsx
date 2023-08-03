const MemberList = () => {
    const members = ["A", "B", "C", "D", "E"];
    const memberList = members.map((name) => (<li>{name}</li>));
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col" style={{padding: "150px"}}>
                <div className="card h-100">
                <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" className="card-img-top" style={{height: "100px", width: "100px", borderRadius: "50px"}} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default MemberList