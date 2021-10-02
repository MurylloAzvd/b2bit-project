import { logout } from "../services/auth";

function Home() {

    return (
        <>
            <h1>Você foi logado com sucesso!</h1>
            <button onClick={() => {
                logout();
            }}>Logout</button>
        </>
    )
}

export default Home;