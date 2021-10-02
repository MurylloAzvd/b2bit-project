import { logout } from "../services/auth";
import b2bitLogo from '../assets/b2bit-logo.png'

function Home() {

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img src={b2bitLogo} alt="Logo" />
            <h1 className="text-white font-bold text-4xl mb-8 text-center">Parabéns, você foi logado com sucesso!</h1>
            <button
                className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded"
                onClick={() => {
                    logout();
                }}>Sair</button>
        </div>
    )
}

export default Home;