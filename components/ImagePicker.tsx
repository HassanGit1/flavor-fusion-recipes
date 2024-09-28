'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa";

export default function ImagePicker({ label, name }: any) {
    const [pickedImage, setPickedImage] = useState<any>(null);
    const imageInput = useRef<any>();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event: any) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className="flex flex-col items-center justify-center">
        <div
            onClick={handlePickClick}
            className="relative w-full h-52 bg-gradient-to-r from-gray-800 to-black border-2 
            border-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-slate-400 rounded-lg 
            flex items-center justify-center cursor-pointer group"
        >
            {!pickedImage ? (
                <div className="flex flex-col justify-center items-center gap-2">
                    {/* Text and icon color changes on hover using group-hover */}
                    <p className="text-sm text-white font-semibold group-hover:text-black transition-colors">
                        Upload an Image
                    </p>
                    <FaImage className="text-white text-3xl group-hover:text-black transition-colors" />
                </div>
            ) : (
                <Image
                    className="object-cover rounded-lg"
                    src={pickedImage}
                    alt="Selected Image"
                    fill
                />
            )}
        </div>
    
        <input
            className="hidden"
            type="file"
            id={name}
            accept="image/png, image/jpg, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
        />
    </div>    
    );
}
