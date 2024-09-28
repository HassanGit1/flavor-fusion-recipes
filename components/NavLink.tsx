"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();
    const isActive = path.startsWith(href);

    return (
        <Link 
            href={href}
            className={`
                relative text-lg font-semibold transition-all duration-300 ease-in-out
                ${isActive ? "text-white" : "text-white"}
                hover:text-white hover:scale-105
                before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-[-4px] before:left-0 
                ${isActive ? "before:bg-white before:scale-x-100" : "before:scale-x-0"}
                hover:before:scale-x-100 before:transition-transform before:duration-300
            `}
        >
            {children}
        </Link>
    );
}
