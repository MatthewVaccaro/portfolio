import React from 'react'

function TwoCol({titleOne, contentOne, titleTwo, contentTwo,buttonOne, buttonTwo}) {
    return (
        <div className="flex flex-col sm:flex-row justify-between mt-20 sm:mt-64 sm:mb-24">
            <div className="mb-12 sm:w-1/2 sm:mr-6 sm:mb-0" >
            <h2> {titleOne} </h2>
            <h3 className="my-6" > {contentOne} </h3>
            {buttonOne}
            </div>
            <div className=" mt-6 sm:mt-0 sm:w-1/2 sm:ml-6">
            <h2> {titleTwo} </h2>
            <h3 className="my-6"> {contentTwo} </h3>
            {buttonTwo}
            </div>

            
        </div>
    )
}

export default TwoCol
