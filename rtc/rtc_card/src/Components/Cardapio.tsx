import React, { useState } from 'react';
import './style.css'; // Certifique-se de que o CSS seja importado corretamente

const Cardapio: React.FC = () => {
const [showBebidasMenu, setShowBebidasMenu] = useState(true);
const [showComidasMenu, setShowComidasMenu] = useState(true);
const [showDrinksMenu, setShowDrinksMenu] = useState(true);

  const toggleMenu = (menu: string) => {
    if (menu === 'bebidas') setShowBebidasMenu(!showBebidasMenu);
    if (menu === 'comidas') setShowComidasMenu(!showComidasMenu);
    if (menu === 'drinks') setShowDrinksMenu(!showDrinksMenu);
  };

  return (
    <div>
      <header>
        <div className="logo"><img src="/Logo_maninhos.jpg" /></div>
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
              <h3>BRAHMA</h3>
              <p>600ml ......................................11,00</p>
              <p>1L ......................................13,00</p>
            </div>  
            <div className="menu-item">
              <h3>SKOL</h3>
              <p>600ml ......................................11,00</p>
              <p>1L ......................................13,00 </p>
            </div>
            <div className="menu-item">
              <h3>BOA</h3>
              <p>600ml ......................................11,00</p>
              <p>1L ......................................13,00</p>
            </div> 
            <div className="menu-item">
              <h3>AMSTEL</h3>
              <p>600ml ......................................11,00</p>
              <p>1L ......................................13,00</p>
            </div> 
            <div className="menu-item">
              <h3>MOINHO</h3>
              <p>600ml ......................................10,00</p>
              <p>1L ......................................11,00</p>
            </div> 
            <div className="menu-item">
              <h3>STELLA</h3>
              <p>600ml ......................................13,00</p>
            </div> 
            <div className="menu-item">
              <h3>ORIGINAL</h3>
              <p>600ml ......................................13,00</p>
            </div> 
            <div className="menu-item">
              <h3>HEINEKEN</h3>
              <p>600ml ......................................15,00</p>
            </div> 
            <div className="menu-item">
              <h3>SPATEN</h3>
              <p>600ml ......................................13,00</p>
            </div>
            <div className="menu-item">
              <h3>IMPÉRIO</h3>
              <p>600ml ......................................11,00</p>
            </div>
            <div className="menu-item">
              <h3>BUDWEISER</h3>
              <p>1L ......................................13,00</p>
            </div>
          </div>
        </div>

        <div className="menu-section" id="quem-somos">
          <h2 className="menu-title" onClick={() => toggleMenu('comidas')}>
            Porções
          </h2>
          <div className={`menu-items ${showComidasMenu ? 'active' : ''}`} id="comidas-menu">
            <div className="menu-item">
              <h3>COXINHA......................................30,00</h3>
              <p> 12 UNIDADES</p>
              <p> CARNE ou FRANGO</p>
            </div>
            <div className="menu-item">
              <h3>FRANGO A PASSARINHO......................................45,00</h3>
              <p>1 KG</p>
            </div>
            <div className="menu-item">
              <h3>PANCETA......................................37,00</h3>
              <p>500G</p>
            </div>
            <div className="menu-item">
              <h3>ISCA DE TILÁPIA......................................60,00 </h3>
              <p>500G</p>
            </div>
            <div className="menu-item">
              <h3>PASTELZINHO QUEJIO c/REQUEIJÃO......................................32,00 </h3>
              <p>24 UNIDADES</p>
            </div>
            <div className="menu-item">
              <h3>BOLINHO DE CARNE......................................35,00 </h3>
              <p>6 UNIDADES</p>
            </div>
            <div className="menu-item">
              <h3>BOLINHO DE LINGUIÇA......................................35,00 </h3>
              <p>10 UNIDADES</p>
            </div>
            <div className="menu-item">
              <h3>CALABRESA......................................40,00 </h3>
              <p>500G</p>
            </div>
            <div className="menu-item">
              <h3>BATATA FRITA......................................30,00 </h3>
              <p>500G</p>
            </div>
            <div className="menu-item">
              <h3>BOLINHA DE QUEIJO......................................30,00 </h3>
              <p>12 UNIDADES</p>
            </div>
            <div className="menu-item">
              <h3>RISOLES......................................32,00 </h3>
              <p>12 UNIDADES</p>
            </div>
            <div className="menu-item">
              <h3>KIBE......................................30,00 </h3>
              <p>12 UNIDADES</p>
            </div>
                     <div className="menu-item">
              <h3>MANDIOCA FRITA......................................15,00 </h3>
            </div>
                        <div className="menu-item">
              <h3>MAJUBINHA......................................40,00 </h3>
            </div>
          </div>
        </div>
       
        <div className="menu-section" id="drinks">
          <h2 className="menu-title" onClick={() => toggleMenu('drinks')}>
            PASTÉIS
          </h2>
          <div className={`menu-items ${showDrinksMenu ? 'active' : ''}`} id="drinks-menu">
            <div className="menu-item">
              <h3>CARNE.......................................................15,00</h3>
            </div>
            <div className="menu-item">
              <h3>QUEIJO......................................................15,00</h3>
            </div>
            <div className="menu-item">
              <h3>PIZZA.........................................................17,00</h3>
            </div>
             <div className="menu-item">
              <h3>CARNE c/QUEIJO.....................................17,00</h3>
            </div>
          </div>
        </div>

        <div className="menu-section" id="drinks">
          <h2 className="menu-title" onClick={() => toggleMenu('drinks')}>
            Drinks
          </h2>
          <div className={`menu-items ${showDrinksMenu ? 'active' : ''}`} id="drinks-menu">
            <div className="menu-item">
              <h3>CAIPIRINHA LIMÃO c/ VELHO BARREIRO................................................18,00</h3>
            </div>
            <div className="menu-item">
              <h3>CAIPIRINHA LIMÃO c/ VODKA......................................................20,00</h3>
            </div>
            <div className="menu-item">
              <h3>CAIPIRINHA MORANGO c/ YAKULT.....................................................25,00</h3>
            </div>
             <div className="menu-item">
              <h3>CAIPIRINHA TANGERINA c/ PIMENTA..................................................20,00</h3>
            </div>
          </div>
        </div>

        <div className="menu-section" id="drinks">
          <h2 className="menu-title" onClick={() => toggleMenu('drinks')}>
            REFRIGERANTES E SUCOS
          </h2>
          <div className={`menu-items ${showDrinksMenu ? 'active' : ''}`} id="drinks-menu">
            <div className="menu-item">
              <h3>COCA-COLA</h3>
              <p>290ML .................................................5,00</p>
              <p>350ML .................................................6,00</p>
              <p>600ML .................................................8,00</p>
              <p>1L ........................................................9,00</p>
              <p>2L ........................................................12,00</p>
            </div>
            <div className="menu-item">
              <h3>FANTA</h3>
              <p>350ML ....................................................6,00</p>
            </div>
            <div className="menu-item">
              <h3>SPRITE</h3>
              <p>350ML .....................................6,00</p>
            </div>
            <div className="menu-item">
              <h3>POTY</h3>
              <p>2L ....................................................6,00</p>
            </div>
            <div className="menu-item">
              <h3>ROLLER</h3>
              <p>2L....................................................6,00</p>
            </div>
            <div className="menu-item">
              <h3>ÁGUA</h3>
              <p>s/GÁS....................................................2,50</p>
              <p>c/GÁS....................................................3,50</p>
            </div>
            <div className="menu-item">
              <h3>FANTA</h3>
              <p>350ML....................................................6,00</p>
            </div>
            <div className="menu-item">
              <h3>PRATS</h3>
              <p>LARANJA 300ML....................................................9,00</p>
              <p>LARANJA 900ML....................................................15,00</p>
            </div>
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
