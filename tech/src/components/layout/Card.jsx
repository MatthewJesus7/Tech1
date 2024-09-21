import { useState } from 'react';
import Colors from '../items/Colors'
import Notes from '../items/Notes';

const Card = ({ link, target, rel, type, customclass, customtitle, backgroundImage, title, price, totalPrice, colors, handleOnClick, custo_beneficio, hardware, camera, tela, desempenho, menuValue, changeMenuValue}) => {

  const [isAnimating, setIsAnimating] = useState(false);

  const menuIsOpen = menuValue;

  const typeInnerCard = () => {
    if (type === 'product') {
      return <Colors colors={colors}/>;
    }
  };

  const toggleMenu = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
      if (menuValue) {
          setIsAnimating(true);
          setTimeout(() => {
              setIsAnimating(false);
              changeMenuValue(false);
          }, 500);
      } else {
        changeMenuValue(true);
          setTimeout(() => {
              setIsAnimating(true);
          }, 0);
      }
  }

  return (
    <a href={link} target={target || "_blank"} rel={rel}>
      <div
        className={` ${type} bg-white flex-col-reverse justify-end ${customclass}
        transform transition-all duration-500
        `}
        onClick={handleOnClick}
      >

        <div>
            {typeInnerCard()}
            <h3 className={`text-gray-700 -mb-0.5 ${customtitle}  `}>{title}</h3>
            {/* text-nowrap text-ellipsis overflow-hidden */}

            <p className="text-lg font-semibold text-gray-700">{price}</p>
            
            <p className="text-sm text-gray-600 mb-1.5">{totalPrice}</p>
        </div>
        
        <div 
        className={` w-full h-full 
        flex flex-col items-end
        text-sm `}
        style={{ 
          backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' }}
        >
          <button 
          onClick={toggleMenu}
          className={`dark_button button animated
          p-0.5 px-1.5 mb-1
          relative
          transform transition-all duration-1000
          ${menuIsOpen == true ?
           '-mt-9'
           : 'mt-0'}`
           }>
            Notas
          </button>

          <Notes 
          customclass={`w-[160px]
            transform transition-all duration-1000 ${
            menuIsOpen
                ? isAnimating
                    ? 'translate-y-1 h-[103%]'
                    : 'translate-y-1 h-[103%]'
                : isAnimating
                ? '-translate-y-1 h-[0px]'
                : '-translate-y-1 h-[0px] border-none'
          }`}
          handleOnClick={toggleMenu}
          custo_beneficio={custo_beneficio}
          hardware={hardware}
          camera={camera}
          tela={tela}
          desempenho={desempenho}
          ></Notes>
        </div>

      </div>
    </a>
  );
};

export default Card;
