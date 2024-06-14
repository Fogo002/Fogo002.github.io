import * as React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './MenuDropdown.css'; // Importa o arquivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';

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
        setIsDropdownOpen(false); // Fecha o dropdown após a navegação
    };

    return (
        <Dropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            show={isDropdownOpen}
            style={{ height: "100%" }}
        >
            <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-toggle">
                {titulo}
            </Dropdown.Toggle>

            <Dropdown.Menu className={isDropdownOpen ? 'show' : ''}>
                {itens.map((item: Item, index: number) => (
                    <Dropdown.Item
                        key={index}
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
