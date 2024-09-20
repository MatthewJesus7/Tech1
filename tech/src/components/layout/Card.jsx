import React from 'react';
import Colors from '../items/Colors'
import Notes from '../items/Notes';

const Card = ({ link, target, rel, type, customclass, customtitle, backgroundImage, title, price, totalPrice, colors, handleOnClick, custo_beneficio, hardware, camera, tela, desempenho }) => {

  const typeInnerCard = () => {
    if (type === 'product') {
      return <Colors colors={colors}/>;
    }
  };

  return (
    <a href={link} target={target || "_blank"} rel={rel}>
      <div
        className={` ${type} bg-white flex-col-reverse justify-end ${customclass}`}
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
        className=' w-full h-full 
        flex flex-col items-end
        text-sm'
        style={{ 
          backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' }}
        >
          <button 
          className='dark_button button animated
          p-0.5 px-1.5 mb-1
          -mt-8'>
            Notas
          </button>
          <Notes 
          customclass="w-[105px]"
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
