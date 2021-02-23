import React from 'react'




function Tag({background, color, title, icon}) {
    return (

    <div className="mr-3 mb-3 sm:mr-6 sm:mb-0" >
        <div className={`flex items-center bg-${background} px-3 py-3 rounded-lg`} >
            { icon? <img className="mr-3" src={icon} alt="language icon"/> : ""}
            <p className={`text-${color} font-bold uppercase` } >{title}</p>
        </div>
    </div>
    )
}

export default Tag
