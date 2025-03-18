import grainImage from "@/assets/images/grain.jpg"
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge"
export const Card = ( {
    className,
    children,
    ...other
} : ComponentPropsWithoutRef <"div">) => {
    return (
        <div
            className= {twMerge(" bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none after:outline-white/20 p-6 ", className)}
            {...other
            }
        > 
            <div className=" absolute inset-0 opacity-5 -z-10" style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}></div>
                {children}
        </div>
    )
} 