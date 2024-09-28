"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

import pizzaImg from '@/app/assests/pizza.jpg';
import avocadoImg from '@/app/assests/avocado.jpg';
import biryaniImg from '@/app/assests/biryani.jpg';
import saladImg from '@/app/assests/salad.jpg';
import coffeeImg from '@/app/assests/coffee.jpg';
import butterchickenImg from '@/app/assests/butterchicken.jpg';
import icecreamImg from '@/app/assests/icecream.jpg';

const images = [
  { image: pizzaImg, alt: 'A delicious, juicy burger' },
  { image: avocadoImg, alt: 'A delicious, spicy curry' },
  { image: biryaniImg, alt: 'Steamed dumplings' },
  { image: saladImg, alt: 'Mac and cheese' },
  { image: coffeeImg , alt: 'A delicious pizza' },
  { image: butterchickenImg, alt: 'A delicious schnitzel' },
  { image: icecreamImg, alt: 'A delicious schnitzel' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-full rounded-2xl overflow-hidden shadow-2xl'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          alt={image.alt}
          layout="fill" // Ensures the image takes up the full container
        />
      ))}
    </div>
  );
}
