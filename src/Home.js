import { logout } from "./auth";

function Home() {

    return (
        <div>
            <h1>Você foi logado com sucesso!</h1>
            <button onClick={() => {
                logout();
                window.location.reload();
            }}>Logout</button>
        </div>
    )
}

export default Home;