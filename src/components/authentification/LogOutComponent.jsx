const LogoutOutComponent = () => {
    fetch("http://localhost:3001/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        console.log("response", response);
        window.location.href = "/";
    }, (error) => {
        console.log("error", error);
    }
    );
}

export default LogoutOutComponent;