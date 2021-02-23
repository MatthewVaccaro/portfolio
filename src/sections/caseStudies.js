import React from 'react'

function CaseStudies({linkOne, imageOne, titleOne, subInfoOne, linkTwo, imageTwo, titleTwo, subInfoTwo}) {
    return (
        <div className="sm:flex sm:flex-col sm:items-center" >
            <h2> Design Case Studies</h2>
            <p className=" text-lg mt-2 mb-6" > These are my current favorites, view all of my case studies  <a className="text-black text-lg" href="https://medium.com/@Matt.Forerunner" target="blank" > @Medium </a> </p>

            <div className="flex justify-between sm:justify-start">
                <div className="flex-col sm:mr-20">
                <a href={linkOne} target="blank" >
                    <img className="" src={imageOne} alt={`${titleOne} logo`}/>
                    <h2 className="mt-2"> {titleOne} </h2>
                    <p> {subInfoOne}</p>
                </a>
                </div>
                <div className="flex-col">
                <a href={linkTwo} target="blank" >
                    <img className="" src={imageTwo} alt={`${titleTwo} logo`}/>
                    <h2 className="mt-2"> {titleTwo} </h2>
                    <p> {subInfoTwo}</p>
                </a>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies
