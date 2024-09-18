import React from 'react';
import Colors from '../items/Colors'

const Card = ({ link, target, rel, type, customclass, customtitle, backgroundImage, title, price, totalPrice, colors, handleOnClick }) => {

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
            <h3 className={`text-gray-700 -mb-0.5 ${customtitle} `}>{title}</h3>

            <p className="text-lg font-semibold text-gray-700">{price}</p>
            
            <p className="text-sm text-gray-600 mb-1.5">{totalPrice}</p>
        </div>
        
        <div className=' w-full h-full '

        style={{ backgroundImage: backgroundImage, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></div>

      </div>
    </a>
  );
};

export default Card;
