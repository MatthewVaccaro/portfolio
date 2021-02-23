import React from 'react'

function Header() {
    return (
        <div className="mt-20  sm:mt-40" >
            <div className="flex mb-8" >
            <span className="mr-3 H2 " > 🤙 </span> <h2>What’s up!</h2>
            </div>
            <h1 className="mb-8 "> I’m Matt, a full stack engineer with deep knowledge of product & business goals. </h1>
            <div className="flex items-center ">
                <div className="w-4 h-4 bg-green rounded mr-2 "/>
            <p className=" text-lg" >Senior Designer <a className="text-black text-lg" target="_blank" href="https://www.redfin.com/" >@Redfin</a></p>
            </div>
            
        </div>
    )
}

export default Header
