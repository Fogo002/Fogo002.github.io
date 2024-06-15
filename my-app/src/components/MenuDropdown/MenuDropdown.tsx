import * as React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './MenuDropdown.css'; // Importa o arquivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from '@mui/material';

interface Item {
    nome: string;
    link: string;
}

interface MenuDropdownProps {
    itens: Item[];
    titulo: string;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ itens, titulo }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Estado para verificar se é um dispositivo móvel

    const navigate = useNavigate();

    useEffect(() => {
        const checkIfMobile = () => {
            const mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(mobileDevice);
        };

        checkIfMobile();

        // Adiciona um event listener para verificar alterações no tamanho da janela
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsDropdownOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsDropdownOpen(false);
        }
    };

    const handleMenuItemClick = (link: string) => {
        navigate(link);
        setIsDropdownOpen(false); // Fecha o dropdown após a navegação
    };

    const handleToggleClick = () => {
        if (isMobile) {
            setIsDropdownOpen(!isDropdownOpen); // Inverte o estado do dropdown no clique para dispositivos móveis
        }
    };

    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


    return (
        <Dropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleClick} // Adiciona onClick para dispositivos móveis
            show={isDropdownOpen}
            style={{ height: "100%" }}
        >
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle">
                {titulo}
            </Dropdown.Toggle>

            <Dropdown.Menu
                className={isDropdownOpen ? 'show' : ''}
                style={{ width: isSmallScreen ?( windowWidth + 5) : '500px !important', marginLeft: "-1px", borderRadius: isSmallScreen ? 0 : '5px' }}
                
                >
                {itens.map((item: Item, index: number) => (
                    <Dropdown.Item
                        key={index}
                        style={{ width: isSmallScreen ? (windowWidth + 5) : '500px !important'}}

                        onClick={() => handleMenuItemClick(item.link)}
                    >
                        {item.nome}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MenuDropdown;
