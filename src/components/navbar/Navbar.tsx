import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const {handleLogout} = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Encerrando a sessão...')
    navigate('/')
  }

  return (
    <>
      <div className="w-full flex justify-center py-4 bg-stone-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to='/home' className='hover:underline'>Blog Pessoal</Link>

          <div className="flex gap-4">
            Postagens
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
            Perfil
            <Link to='' onClick={logout}>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar