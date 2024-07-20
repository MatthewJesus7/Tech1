import React from 'react';
import Colors from '../items/Colors'

const Card = ({ link, target, rel, type, customclass, backgroundImage, typeInner, title, price, colors }) => {

  const typeInnerCard = () => {
    if (typeInner === 'product') {
      return <Colors colors={colors}/>;
    }
  };

  return (
    <a href={link} target={target} rel={rel}>
      <div
        className={`${type} bg-white ${customclass}`}
        style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className={typeInner}>
          {typeInnerCard()}
          <h3 className="text-xl">{title}</h3>
          <p className="text-lg mt-1.5">{price}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
