import { useState } from 'react';
import Colors from '../items/Colors'
import Notes from '../items/Notes';

const Card = ({ link, target, rel, type, customclass, customtitle, image_url, title, price, total_price, colors, onClick, custo_beneficio, hardware, camera, tela, desempenho, menuValue, changeMenuValue, brand, showNotes }) => {

  const [notes, setNotes] = useState(showNotes || true);

  const toggleNotes = () => {
    setNotes(!notes); // Alterna o estado de `notes`
  }

  

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
        className={` ${type} bg-white  ${customclass}
        transform transition-all duration-500
        `}
        onClick={onClick}
      >

        <div id='info'>
            {typeInnerCard()}
            <h3 className={`text-gray-700 -mb-0.5 ${customtitle} `}
            // data-first-wrap={title}
            >{title}</h3>
            {/* text-nowrap text-ellipsis overflow-hidden */}

            <p className="text-lg font-semibold text-gray-700 price">{price}</p>
            
            <p className="text-sm text-gray-600 mb-1.5">{total_price}</p>
        </div>
        
        <div id='image_notes'
        className={` w-full h-full 
        flex justify-between
        text-sm `}
        style={{ 
          backgroundImage: `url(${image_url})`, backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' }}
        >
            <p className='text-base sm:text-lg w-1 text-gray-300 price mix-blend-difference'>{brand}</p>

          { notes &&
            <div id="notes"
            className='flex flex-col items-end '>

            <button
            onClick={toggleMenu}
            className={`dark_button button animated
            p-0.5 px-1.5
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
          </div>}
        </div>

      </div>
    </a>
  );
};

export default Card;
