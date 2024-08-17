import React from 'react';
import Colors from '../items/Colors'

const Card = ({ link, target, rel, type, customclass, backgroundImage, typeInner, title, price, totalPrice, colors }) => {

  const typeInnerCard = () => {
    if (typeInner === 'product') {
      return <Colors colors={colors}/>;
    }
  };

  return (
    <a href={link} target={target || "_blank"} rel={rel}>
      <div
        className={`${type} bg-white flex-col-reverse justify-end ${customclass}`}
      >

        <div className={`${typeInner} `}>
            {typeInnerCard()}
            <h3 className="text-xl text-gray-800">{title}</h3>
            <p className="text-lg">{price}</p>
            <p className="text-sm -mt- text-gray-500">{totalPrice}</p>
        </div>
        
        <div className=' w-full h-full '

        style={{ backgroundImage: backgroundImage, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></div>

      </div>
    </a>
  );
};

export default Card;
