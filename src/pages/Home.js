import { logout } from "../services/auth";

function Home() {

    return (
        <>
            <h1>Você foi logado com sucesso!</h1>
            <button onClick={() => {
                logout();
                window.location.reload();
            }}>Logout</button>
        </>
    )
}

export default Home;