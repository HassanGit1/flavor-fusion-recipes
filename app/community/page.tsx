// app/community/page.tsx
import Image from "next/image";
import Link from "next/link";

import community1Img from '@/app/assests/community-1.jpg';
import community2Img from '@/app/assests/community-2.jpg';
import community3Img from '@/app/assests/community-3.jpg';
// import community4Img from '@/app/assests/community-4.jpg';
const communityImages = [
  { src: community1Img, alt: "Foodies Gathering", title: "Foodies Gathering" },
  { src: community2Img, alt: "Recipe Sharing", title: "Recipe Sharing" },
  { src: community3Img, alt: "Cooking Class", title: "Cooking Class" },
//   { src: community4Img, alt: "Food Festival", title: "Food Festival" },
  // Add more images as needed
];

export default function CommunityPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900">
    <header className="py-12 text-center">
      <h1 className="text-4xl font-extrabold uppercase tracking-wider text-[#062a4d]">
        Join Our Foodies Community
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Connect, share, and explore delicious recipes with fellow food lovers.
      </p>
    </header>
    
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 mb-12">
      {communityImages.map((image, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <Image 
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-[#062a4d] bg-opacity-70 p-2 rounded">
            {image.title}
          </h3>
        </div>
      ))}
    </section>
    
    <section className="px-4 md:px-16 mb-12 text-center">
      <h2 className="text-3xl font-bold text-[#062a4d] mb-4">Why Join Us?</h2>
      <p className="mt-4 text-lg text-gray-600">
        At NextLevel Food, we believe that food brings people together. By joining our community, you can:
      </p>
      <ul className="mt-4 space-y-2 text-lg text-gray-600">
        <li>🍽️ <span className="font-semibold">Discover new recipes</span> that excite your taste buds.</li>
        <li>🤝 <span className="font-semibold">Share your culinary creations</span> and inspire others.</li>
        <li>🌍 <span className="font-semibold">Connect with food enthusiasts</span> from around the world.</li>
        <li>❤️ <span className="font-semibold">Participate in fun food challenges</span> and events.</li>
        <li>🧑‍🍳 <span className="font-semibold">Learn from others and grow</span> your cooking skills!</li>
      </ul>
    </section>
    
    <section className="px-4 md:px-16 mb-12 text-center">
      <h2 className="text-3xl font-bold text-[#062a4d] mb-4">Join the Conversation!</h2>
      <p className="mt-4 text-lg text-gray-600">
        Whether you're a seasoned chef or just starting, there's a place for you here. Join us to share your passion for food and make lasting friendships.
      </p>
      <Link href="/meals" className="inline-block bg-gradient-to-r mt-4 from-[#2a4d69] to-[#4b86b4] text-white text-lg font-semibold py-2 px-6 
            rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition-colors duration-300 ease-in-out">
        Explore Meals
      </Link>
    </section>
  </main>
  );
}
