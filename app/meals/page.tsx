
import Loader from "@/components/Loader";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";


export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community. ",
};


async function Meals() {    
  const meals = await getMeals()
  return  <MealsGrid meals={meals}/>
}

export default function MealsPage() {
    return (
     <>
 <header className="mt-12 mb-20 mx-auto w-full max-w-7xl text-[#062a4d] text-2xl text-center">
        <h1 className="font-extrabold text-6xl mb-1 tracking-tight leading-tight">
          Delicious Meals, created 
          <span className="text-green-600 animate-pulse"> by you</span>
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="mt-6">
          <Link 
            href="/meals/share"
            className="inline-block py-3 px-6 text-lg font-semibold rounded-full 
            bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] text-white shadow-lg
            hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-black
            transition duration-300 transform hover:-translate-y-1">
            Share Your Favorite Recipe
          </Link>
        </div>
      </header>

      <main>
        <Suspense
         fallback={<Loader/>
          }>
       <Meals/>
       </Suspense>
      </main>
     </>
    )
}