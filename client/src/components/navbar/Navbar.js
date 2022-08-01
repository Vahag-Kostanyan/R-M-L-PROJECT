
const Navbar = () => {


    const logOut = (e) => {
        e.preventDefault();

        sessionStorage.removeItem("token")

        window.location.assign("login")
    }

    return (
            <nav class="navbar navbar-dark bg-primary" style={{width: "100vw"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="home">Home</a>
                    <form class="d-flex" role="search">
                    <button type="button" class="btn btn-dark" style={{fontSize: "13px"}} onClick = {logOut} >Log out</button>
                    </form>
                </div>
            </nav>
    )
}

export default Navbar