import ImageSlideshow from "@/components/Image-Slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 justify-center mb-28 my-12 mx-auto max-w-6xl">
        <div className="w-[1000px] h-[400px]">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[#062a4d] text-2xl">
            <h1 className="text-4xl mt-12 mb-4 font-extrabold tracking-widest uppercase">
              Flavour Fusion for NextLevel Foodies
            </h1>
            <p className="text-gray-800 text-xl">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="text-xl mt-4 flex gap-4">
            <Link
              className="inline-block py-3 px-5 text-lg font-semibold rounded-full
              border border-[#062a4d] text-[#062a4d] transition duration-300
              hover:bg-[#062a4d] hover:text-white shadow-md hover:shadow-lg"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="inline-block py-3 px-6 text-lg font-semibold rounded-full 
              bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] text-white shadow-lg
              hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-black
              transition duration-300 transform hover:-translate-y-1"
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="bg-white">
        <section className="flex flex-col text-[#062a4d] text-2xl max-w-3xl w-11/12 my-8 mx-auto text-center">
          <h2 className="font-bold mb-8 text-3xl">How it works</h2>
          <p className="text-gray-600">
              Flavour Fusion is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p className="text-gray-600">
          Flavour Fusion is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>
        <section className="flex flex-col text-[#062a4d] text-2xl max-w-3xl w-11/12 my-8 mx-auto text-center">
          <h2 className="font-bold mb-8 text-3xl">Why NextLevel Food?</h2>
          <p className="text-gray-600">
          Flavour Fusion is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p className="text-gray-600">
          Flavour Fusion is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
