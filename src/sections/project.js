import React from 'react'
import Button from "../utility/button"
import githubLogo from "../assets/devAssets/githubLogo.svg"
import Tag from "../utility/tag"


function Project({image,title,info,content,icons,link}) {
    return (
        <div className="flex flex-col items-start my-12 sm:my-24 sm:flex-row" >
            <img src={image} className=" w-12 h-12 sm:w-20 sm:h-20 mr-9" alt="proejct logo"/>
            <div className="flex flex-col">
            <div className="flex flex-col mb-4 sm:mb-0 sm:flex-row sm:justify-between" >
                <div className="h-20 flex flex-col justify-center mb-2 sm:mb-6 " >
                <h2 className="mb-2" > {title} </h2>
                <p> {info} </p>
                </div>
                <a target="blank" href={link} >
                <Button text="View Repo" image={githubLogo} color="black"  />
                </a>

            </div>
            <h3 className="mb-6" > {content} </h3>
            <div className=" flex flex-wrap" >
                { icons ? icons.map(cv =>{
                    var name = cv
                    return <Tag background="black_100" color="black" title={name.split('Logo')[0].split('/')[3]} icon={cv} />
                }) : "" }
        
            </div>
            </div>
        </div>
    )
}

export default Project
