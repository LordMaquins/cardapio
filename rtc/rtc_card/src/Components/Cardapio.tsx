import React, { useState } from 'react';
import './style.css'; // Certifique-se de que o CSS seja importado corretamente

const Cardapio: React.FC = () => {
  const [showBebidasMenu, setShowBebidasMenu] = useState(false);
  const [showComidasMenu, setShowComidasMenu] = useState(false);
  const [showDrinksMenu, setShowDrinksMenu] = useState(false);

  const toggleMenu = (menu: string) => {
    if (menu === 'bebidas') setShowBebidasMenu(!showBebidasMenu);
    if (menu === 'comidas') setShowComidasMenu(!showComidasMenu);
    if (menu === 'drinks') setShowDrinksMenu(!showDrinksMenu);
  };

  return (
    <div>
      <header>
        <div className="logo"><img src="./img/Logo_maninhos.jpg" /></div>
        <div className="nav-links">
        </div>
      </header>

      <div className="container">
        <div className="menu-section" id="cardapio">
          <h2 className="menu-title" onClick={() => toggleMenu('bebidas')}>
            Cervejas
          </h2>
          <div className={`menu-items ${showBebidasMenu ? 'active' : ''}`} id="bebidas-menu">
            <div className="menu-item">
              <h3>Brahma......................................10,50</h3>
              <p>600ml</p>
              <p>1 Litro</p>
            </div>
            <div className="menu-item">
              <h3>Skol......................................10,00</h3>
              <p>1 Litro</p>
              <p>600ml</p>
            </div>
            {/* Continue com os outros itens */}
          </div>
        </div>

        <div className="menu-section" id="quem-somos">
          <h2 className="menu-title" onClick={() => toggleMenu('comidas')}>
            Porções
          </h2>
          <div className={`menu-items ${showComidasMenu ? 'active' : ''}`} id="comidas-menu">
            <div className="menu-item">
              <h3>Coxinha......................................24,00</h3>
              <p>Deliciosas coxinhas 12 unidades.</p>
              <p>Escolha entre Carne ou Frango</p>
            </div>
            <div className="menu-item">
              <h3>Frango a Passarinho......................................45,00</h3>
              <p>Asinhas de Frango temperadas, e fritas ao ponto crocante.</p>
            </div>
            {/* Continue com os outros itens */}
          </div>
        </div>

        <div className="menu-section" id="drinks">
          <h2 className="menu-title" onClick={() => toggleMenu('drinks')}>
            Drinks
          </h2>
          <div className={`menu-items ${showDrinksMenu ? 'active' : ''}`} id="drinks-menu">
            <div className="menu-item">
              <h3>Caipirinha Limão c/ Cachaça...............................15,00</h3>
            </div>
            <div className="menu-item">
              <h3>Caipirinha Limão c/ Vodka................................18,00</h3>
            </div>
            {/* Continue com os outros itens */}
          </div>
        </div>

        <footer>
          <p>Rua João Batista Marinho, 447 - Marília SP.</p>
        </footer>
      </div>
    </div>
  );
};

export default Cardapio;
