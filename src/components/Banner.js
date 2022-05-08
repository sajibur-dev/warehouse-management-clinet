import { useEffect, useState } from 'react';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';

const Banner = () => {
  // const imgSrc = ['https://i.ibb.co/k0pqm2Z/banner1.jpg','https://i.ibb.co/k0pqm2Z/banner1.jpg','https://i.ibb.co/k0pqm2Z/banner1.jpg'] 
  const imgSrcContainer = [banner1,banner2,banner3]
  const [imgSrc,setImgSrc] = useState(0);
  useEffect(() => {
    const inverval = setInterval(() => {
      if (imgSrc >= imgSrcContainer?.length - 1) {
        setImgSrc(0);
      } else {
        setImgSrc(imgSrc + 1);
      }
    }, 2000);
    return () => {
      clearInterval(inverval);
    };
  }, [imgSrc, imgSrcContainer?.length]);
  return (
    <div className='h-96'>
      <div className='w-full h-full md:flex md:justify-center md:items-center'>
        <img className='h-full w-full' src={imgSrcContainer[imgSrc]} alt="" />
      </div>
    </div>
  );
};

export default Banner;
