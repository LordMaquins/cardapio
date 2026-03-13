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
        <div className="logo"><img src="./public/Logo_maninhos.jpg" /></div>
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
              <h3>Brahma</h3>
              <p>600ml ......................................10,50</p>
              <p>1 Litro ......................................12,00</p>
            </div>  
            <div className="menu-item">
              <h3>Skol</h3>
              <p>600ml ......................................10,00</p>
              <p>1 Litro ......................................12,00 </p>
            </div>
            <div className="menu-item">
              <h3>Subzero</h3>
              <p>600ml ......................................10,00</p>
              <p>1 Litro ......................................12,00</p>
            </div> 
            <div className="menu-item">
              <h3>Amstel</h3>
              <p>600ml ......................................10,00</p>
              <p>1 Litro ......................................12,00</p>
            </div> 
            <div className="menu-item">
              <h3>Moinho</h3>
              <p>600ml ......................................10,00</p>
              <p>1 Litro ......................................11,00</p>
            </div> 
            <div className="menu-item">
              <h3>Stella</h3>
              <p>600ml ......................................12,00</p>
            </div> 
            <div className="menu-item">
              <h3>Original</h3>
              <p>600ml ......................................12,00</p>
            </div> 
            <div className="menu-item">
              <h3>Heineken</h3>
              <p>600ml ......................................14,00</p>
            </div> 
            <div className="menu-item">
              <h3>Spaten</h3>
              <p>600ml ......................................11,00</p>
            </div>
            <div className="menu-item">
              <h3>Brahma Duplo Malte</h3>
              <p>600ml ......................................11,00</p>
            </div>
            <div className="menu-item">
              <h3>Império</h3>
              <p>600ml ......................................10,00</p>
            </div>
            <div className="menu-item">
              <h3>Petra</h3>
              <p>600ml ......................................8,00</p>
            </div>
            <div className="menu-item">
              <h3>Budweiser</h3>
              <p>1 Litro ......................................12,00</p>
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
              <p> 12 unidades.</p>
              <p> Carne ou Frango</p>
            </div>
            <div className="menu-item">
              <h3>Frango a Passarinho......................................45,00</h3>
            </div>
            <div className="menu-item">
              <h3>Panceta......................................30,00</h3>
            </div>
            <div className="menu-item">
              <h3>Frango Crocante......................................65,00 
              </h3>
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
