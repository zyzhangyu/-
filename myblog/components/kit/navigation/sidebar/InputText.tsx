import React from "react";
import styles from "./InputText.module.css";
interface Props {
    icon?: JSX.Element;
    placeholder?:string;
}

const InputText = (props:Props) => {
    return (

        <div className={`rounded-xl ${styles.bg}`}>
        <div className={styles.container}>
         
            <input type="text" placeholder={props.placeholder}
                className={`${styles.search}`}
            // rounded-l  左侧圆角
            // flex-1
            // appearance-none 去除浏览器默认样式
            // className={
            //     "rounded-l rounded-r-ld flex-1 appearance-none border-gray-300 w-full py-2 px-4 bg-gray-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline foucus:ring-2 focus:ring-purple-600 focus:border-transparent border-transparent"
            // }
            ></input>
          <span 
               className={styles.icons}
            //    className={" mr-8 bg-blue-400 rounded-l-md inline-flex items-center px-3 border  text-gray-400 shadow-sm text-sm"}>
            >
                {props.icon}
            </span>
        </div>
       
        </div>
    )
}

export default InputText;