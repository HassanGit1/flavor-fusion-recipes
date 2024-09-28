'use client'

import { useFormStatus } from 'react-dom'

export default function MealFormSubmit() {
    const { pending } = useFormStatus()

    return <button  className="inline-block py-3 px-6 text-lg font-semibold rounded-full 
    bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] text-white shadow-lg
    hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-black
    transition duration-300 transform hover:-translate-y-1"
         disabled = {pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}