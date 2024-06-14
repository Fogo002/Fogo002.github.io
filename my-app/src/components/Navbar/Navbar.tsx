import { Link } from 'react-router-dom'
import './Navbar.css'
import icon from '../../assets/todos-icon.jpg'
import MenuDropdown from '../MenuDropdown/MenuDropdown'

const Navbar = () => {
    interface Item {
        nome: string;
        link: string;
    }
    
    const Item1:Item = {
        nome: 'Atividades',
        link: '/atividades'
    }
    const Item2:Item = {
        nome: 'Jogos',
        link: '/jogos'
    }


    return (
        <>

            <div className='Navbar'>
                <nav className='navbar'>
                    <ul>
                        <li><Link className='button-nav-icon' to={'/'} ><img src={icon} alt="" /></Link></li>
                        <li><Link className='button-nav-icon' to={'/'} > Página Inicial</Link></li>
                        <li><MenuDropdown itens={[Item1,Item2]} titulo={'Dinâmica'} ></MenuDropdown></li>
                        <li><Link className='button-nav-icon' to={'/contacto'} > Contacto</Link></li>
                    </ul>

                </nav>
            </div>
        </>

    )
}
export default Navbar