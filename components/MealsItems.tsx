import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }: any) {
  return (
    <article className="flex flex-col justify-between w-full h-full rounded-lg overflow-hidden 
      bg-white shadow-lg transform transition-transform duration-500 ease-in-out  cursor-pointer">
      <header className="relative">
        <div className="relative h-60 w-full overflow-hidden rounded-t-lg"> {/* Increased height */}
          <Image 
            className="object-cover transition-opacity duration-500 ease-in-out hover:opacity-80" 
            src={image} 
            alt={title} 
            fill 
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 backdrop-blur-md rounded-tl-lg rounded-tr-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-1 truncate">{title}</h2>
          <p className="text-gray-700 text-sm">by <span className="font-semibold text-gray-900">{creator}</span></p>
        </div>
      </header>

      <div className="flex flex-col justify-between p-4 h-full">
        <p className="text-gray-800 text-base leading-relaxed mb-4 line-clamp-3">
          {summary}
        </p>

        <div className="text-right">
          <Link 
            href={`/meals/${slug}`} 
            className="inline-block bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] text-white text-lg font-semibold py-2 px-6 
            rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition-colors duration-300 ease-in-out">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
