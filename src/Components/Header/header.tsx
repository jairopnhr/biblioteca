import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
function Header() {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={logo} alt="Logo da biblioteca" className="h-8" />
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <Link to ="/livros"  ><a href="#" className="hover:text-gray-300">Biblioteca</a></Link>
                        <Link to="/"><a href="#" className="hover:text-gray-300">Sobre Nós</a></Link>
                        <Link to="/livros"><a href="#" className="hover:text-gray-300">Consulta de livros disponíveis</a></Link>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <img src="perfil.png" alt="Ícone de perfil" className="h-8 rounded-full" />
                    <input type="text" placeholder="Pesquisar" className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:border-blue-400" />
                </div>
            </div>
        </header>
    );
}

export default Header;
