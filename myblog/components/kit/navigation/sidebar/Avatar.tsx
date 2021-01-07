import React from "react";

interface Props {
    withBorder?: boolean;
    withInfo?: boolean;
    img?: string;
    size?: "small" | "normal" | "big" | "monster";
    type?: "square" | "rounded" | "full";
}

const Avatar = ({withBorder, size, withInfo, type, img} : Props) => {
    const effectClasses =  "hover:scale-150 hover:z-10 transform ease-in-out transition duration-500";
    let sizeClasses = "h-16 w-16";
    if (size && size !== "normal") {
        sizeClasses = size === "small" ? "h-10 w-10" : "h-20 w-20";
        if (size === "monster"){
            sizeClasses = "h-40 w-40";
        }
    }

    return (
        <div className={" relative flex -space-x-2"}>
        <a href="#"
        className={`${effectClasses}`}>
            <img src={img} alt="profil" 
          className={`inline-block ${sizeClasses} rounded-full object-cover ring-2 ring-white`}
          />

            {/* {withInfo && (
                <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-gray-500 rounded-full"></span>
            )} */}
        </a>
        </div>
    );
};

export default Avatar;