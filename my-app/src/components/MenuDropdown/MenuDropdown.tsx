import * as React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import './MenuDropdown.css'; // Importa o arquivo CSS
import { useNavigate } from "react-router-dom";


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

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);
    const navigate = useNavigate();

    const handleMenuItemClick = (link: string) => {
        navigate(link);
    };
    
    return (
        <>
            <Dropdown 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                show={isDropdownOpen}
            >
                <Dropdown.Toggle 
                    id="dropdown-basic" 
                    className="custom-dropdown-toggle"
                >
                    {titulo}
                </Dropdown.Toggle>

                <Dropdown.Menu 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    show={isDropdownOpen}
                >
                    {itens.map((item: Item, index: number) => (
                    <Dropdown.Item key={index} onClick={() => handleMenuItemClick(item.link)}>
                        {item.nome}
                    </Dropdown.Item>
                ))}

                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default MenuDropdown;
