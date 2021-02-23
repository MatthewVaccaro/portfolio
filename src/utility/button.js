import React from 'react'
import { motion } from 'framer-motion';

function Button({text, image, color}) {
    return (
        <button className={`w-full sm:w-auto flex items-center justify-center bg-${color} text-white`} >
            {text}
            <img className="ml-3" src={image}/>
        </button>
    )
}

export default Button
