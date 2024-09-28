import React from 'react';
import { useSpring, animated } from 'react-spring';

const MenuSection = ({ title, items, showMenu, toggleMenu }) => {
    const style = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: showMenu ? 1 : 0, transform: showMenu ? 'translateY(0)' : 'translateY(-20px)' },
    });

    return (
        <div className="menu-section">
            <h2 className="menu-title" onClick={toggleMenu}>
                {title}
            </h2>
            <animated.div className={`menu-items ${showMenu ? 'active' : ''}`} style={style}>
                {items.map((item, index) => (
                    <div className="menu-item" key={index}>
                        <h3>{item.name}......................................{item.price}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </animated.div>
        </div>
    );
};

const Menu = () => {
    const [showBebidasMenu, setShowBebidasMenu] = React.useState(false);
    const [showComidasMenu, setShowComidasMenu] = React.useState(false);
    const [showDrinksMenu, setShowDrinksMenu] = React.useState(false);

    const toggleMenu = (menu) => {
        if (menu === 'bebidas') setShowBebidasMenu(!showBebidasMenu);
        if (menu === 'comidas') setShowComidasMenu(!showComidasMenu);
        if (menu === 'drinks') setShowDrinksMenu(!showDrinksMenu);
    };

    const bebidas = [
        { name: 'Brahma', price: '10,50', description: '600ml' },
        { name: 'Skol', price: '10,00', description: '1 Litro, 600ml' },
        // Adicione novos itens aqui
    ];

    const comidas = [
        { name: 'Coxinha', price: '24,00', description: 'Deliciosas coxinhas 12 unidades.' },
        { name: 'Frango a Passarinho', price: '45,00', description: 'Asinhas de Frango temperadas.' },
        // Adicione novos itens aqui
    ];

    const drinks = [
        { name: 'Caipirinha Limão c/ Cachaça', price: '15,00' },
        { name: 'Caipirinha Limão c/ Vodka', price: '18,00' },
        // Adicione novos itens aqui
    ];

    return (
        <div className="container">
            <MenuSection title="Cervejas" items={bebidas} showMenu={showBebidasMenu} toggleMenu={() => toggleMenu('bebidas')} />
            <MenuSection title="Porções" items={comidas} showMenu={showComidasMenu} toggleMenu={() => toggleMenu('comidas')} />
            <MenuSection title="Drinks" items={drinks} showMenu={showDrinksMenu} toggleMenu={() => toggleMenu('drinks')} />
            <footer>
                <p>Rua João Batista Marinho, 447 - Marília SP.</p>
            </footer>
        </div>
    );
};

export default Menu;
