import { Link } from 'react-router-dom'
import './Navbar.css'
import icon from '../../assets/todos-icon.jpg'

const Navbar = () => {



    return (
        <>
            <div className='nav'>
                <nav className='navbar'>
                    <ul>
                        <li><Link className='button-nav-icon' to={'/'} ><img src={icon} alt="" /></Link></li>
                        <li><Link className='button-nav-icon' to={'/'} > Página Inicial</Link></li>
                        <li><Link className='button-nav-icon' to={'/produtos'} > Produtos</Link></li>
                        <li><Link className='button-nav-icon' to={'/sobre'} > Sobre</Link></li>
                        <li><Link className='button-nav-icon' to={'/contacto'} > Contacto</Link></li>
                    </ul>

                </nav>
            </div>
        </>

    )
}
export default Navbar