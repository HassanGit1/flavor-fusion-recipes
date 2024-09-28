import { getMeal } from "@/lib/meals";
import Image from "next/image";

interface Meal {
    title: string;
    summary: string;
    instructions: string;
    image: string;
    creator: string;
    creator_email: string;
}

export default function MealsDetailPage({ params }: any) {
    const meal = getMeal(params.slug) as Meal;

    // Replace newline characters with <br/> for HTML rendering
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

    return (
        <div className="min-h-screen p-4 flex flex-col items-center bg-gray-100">
            <header className="flex flex-col lg:flex-row gap-8 py-8 px-4 max-w-6xl w-full mx-auto shadow-2xl rounded-lg bg-white transition-transform duration-300 hover:scale-105">
                <div className='relative w-full lg:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg'>
                    <Image className="object-cover transition-transform duration-500 hover:scale-105" src={meal.image} alt={meal.title} fill />
                </div>
                <div className="flex flex-col justify-center text-center lg:text-left p-6">
                    <h1 className="text-5xl mb-4 font-extrabold uppercase text-teal-800 drop-shadow-lg">{meal.title}</h1>
                    <p className="text-lg mb-2 italic">
                        by <a className="text-teal-600 hover:underline" href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className="text-md mb-6 text-gray-700">{meal.summary}</p>
                </div>
            </header>
            <main className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full mx-auto my-8 transition-shadow duration-300 hover:shadow-2xl">
                <h2 className="text-3xl font-semibold mb-4 text-teal-600">Instructions</h2>
                <div className="bg-teal-50 p-6 rounded-lg shadow-md">
                    <div className="prose lg:prose-xl text-gray-800" dangerouslySetInnerHTML={{ __html: meal.instructions }}></div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="text-teal-600 font-bold">Tips:</div>
                        <div className="text-sm text-gray-500 italic">Always taste as you go!</div>
                    </div>
                </div>
            </main>
            <footer className="mt-8 w-full max-w-6xl mx-auto">
                <hr className="border-gray-300 my-6" />
                <p className="text-center text-gray-600 text-sm">© {new Date().getFullYear()} Flavour Fusion. All rights reserved.</p>
            </footer>
        </div>
    );
}
