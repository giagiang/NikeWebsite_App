import React from 'react';
import { useNavigate } from 'react-router-dom';
import { star } from 'src/assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${name}`);
  };

  return (
    <div className='flex flex-col flex-1 w-full cursor-pointer max-sm:w-full' onClick={handleClick}>
      <img 
        src={imgURL} alt={name} className="w-[280px] h-[280-px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat">(5.0)</p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold leading-normal font-montserrat text-coral-red text-2lx'>{price}</p>
    </div>
  );
};

export default PopularProductCard;