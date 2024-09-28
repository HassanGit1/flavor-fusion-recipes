'use client';
import MealFormSubmit from '@/components/FormSubmit';
import ImagePicker from '@/components/ImagePicker';
import { ShareMeal } from '@/lib/action';
import Image from 'next/image';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
    const [state, formAction] = useFormState(ShareMeal, { message: null });

    return (
        <>
            <header className="mt-12 mb-20 mx-auto w-full max-w-3xl text-[#062a4d] text-2xl text-center">
                <h1 className="font-extrabold text-6xl mb-1 tracking-tight leading-tight">
                    Share your <span className="text-green-600 animate-pulse">favorite meal</span>
                </h1>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                    Or any other meal you feel needs sharing!
                </p>
            </header>

            <main className="w-full max-w-3xl my-12 mx-auto">
                <form
                    className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-3xl shadow-2xl space-y-6"
                    action={formAction}
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Name Field */}
                        <div className="w-full">
                            <label
                                className="block mb-2 text-lg uppercase font-bold text-gray-700"
                                htmlFor="name"
                            >
                                Your name
                            </label>
                            <input
                                className="block w-full py-2 px-4 rounded-xl text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-900 transition duration-300 ease-in-out transform hover:shadow-lg"
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        {/* Email Field */}
                        <div className="w-full">
                            <label
                                className="block mb-2 text-lg uppercase font-bold text-gray-700"
                                htmlFor="email"
                            >
                                Your email
                            </label>
                            <input
                                className="block w-full py-2 px-4 rounded-xl text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-900 transition duration-300 ease-in-out transform hover:shadow-lg"
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                    </div>

                    {/* Title Field */}
                    <div className="w-full">
                        <label
                            className="block mb-2 text-lg uppercase font-bold text-gray-700"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="block w-full py-2 px-4 rounded-xl text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-900 transition duration-300 ease-in-out transform hover:shadow-lg"
                            type="text"
                            id="title"
                            name="title"
                            required
                        />
                    </div>

                    {/* Summary Field */}
                    <div className="w-full">
                        <label
                            className="block mb-2 text-lg uppercase font-bold text-gray-700"
                            htmlFor="summary"
                        >
                            Short Summary
                        </label>
                        <input
                            className="block w-full py-2 px-4 rounded-xl text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-900 transition duration-300 ease-in-out transform hover:shadow-lg"
                            type="text"
                            id="summary"
                            name="summary"
                            required
                        />
                    </div>

                    {/* Instructions Field */}
                    <div className="w-full">
                        <label
                            className="block mb-2 text-lg uppercase font-bold text-gray-700"
                            htmlFor="instructions"
                        >
                            Instructions
                        </label>
                        <textarea
                            className="block w-full py-2 px-4 rounded-xl text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-100 text-gray-900 transition duration-300 ease-in-out transform hover:shadow-lg"
                            id="instructions"
                            name="instructions"
                            rows="2"
                            required
                        ></textarea>
                    </div>

                    {/* Image Picker */}
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-300 cursor-pointer">
                        <ImagePicker name="image" label="Upload an image" />
                    </div>

                    {/* Message Display */}
                    {state.message && (
                        <p className="text-xl font-semibold mt-4 text-right text-green-600">
                            {state.message}
                        </p>
                    )}

                    {/* Submit Button */}
                    <div className="text-right mt-4">
                        <MealFormSubmit />
                    </div>
                </form>
            </main>
        </>
    );
}
