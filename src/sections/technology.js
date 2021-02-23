import React from 'react'
import {lightIcon, darkIcon} from "../utility/icon"
import Tag from "../utility/tag"

function Technology() {
    return (
        <div>
            <div className="flex bg-black_100 py-2 justify-center rounded">
                <div className="flex mr-6 " >
                    <div className="w-4 h-4 mr-2 bg-purple rounded"/>
                    <p> Expert </p>
                </div>
                <div className="flex mr-6" >
                    <div className="w-4 h-4 mr-2 bg-orange rounded"/>
                    <p> Proficient </p>
                </div>
                <div className="flex" >
                    <div className="w-4 h-4 mr-2 bg-red rounded"/>
                    <p> Learning </p>
                </div>
            </div>
                <div className="flex flex-wrap my-10" >
                    <h2 className=" mr-9 mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}} >Languages:</h2>
                    <div className="flex flex-wrap">
                        <Tag background="purple" icon={lightIcon.js} title="Javascript" color="white"/>

                        <Tag background="purple" icon={lightIcon.python} title="Python" color="white"/>

                        <Tag background="purple" icon={lightIcon.node} title="Node" color="white"/>

                        <Tag background="red" icon={lightIcon.ts} title="TypeScript" color="white"/>

                        <Tag background="red" icon={lightIcon.c} title="C Sharp" color="white"/>
                    </div>
                </div>

                <div className="flex my-10 flex-wrap" >
                    <h2 className=" mr-9  mb-4 sm:mb-0sm:text-right" style={{width: "210px"}}>Frameworks:</h2>
                    <div className="flex  flex-wrap">
                        <Tag background="purple" icon={lightIcon.react} title="React" color="white"/>

                        <Tag background="purple" icon={lightIcon.express} title="Express" color="white"/>

                        <Tag background="red" icon={lightIcon.django} title="Django" color="white"/>

                        <Tag background="red" icon={lightIcon.net} title=".Net Core" color="white"/>
                    </div>
                </div>

                <div className="flex my-10 flex-wrap" >
                    <h2 className=" mr-9 mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}}>Libraries:</h2>
                    <div className="flex flex-wrap">
                        <Tag background="purple" icon={lightIcon.redux} title="Redux" color="white"/>

                        <Tag background="orange" icon={darkIcon.puppeteer} title="Puppeteer" color="black"/>

                        <Tag background="orange" icon={darkIcon.framer} title="Framer Motion" color="black"/>

                        <Tag background="red" icon={lightIcon.react} title="React Query" color="white"/>
                    </div>
                </div>

                <div className="flex my-10 flex-wrap" >
                    <h2 className=" mr-9 mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}}>Database:</h2>
                    <div className="flex flex-wrap">
                        <Tag background="purple" icon={lightIcon.knex} title="Knex" color="white"/>

                        <Tag background="orange" icon={darkIcon.pg} title="Posgres SQl" color="black"/>

                    </div>
                </div>
            
        </div>
    )
}

export default Technology
