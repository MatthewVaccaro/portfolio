import React from 'react'
import {lightIcon, darkIcon} from "../utility/icon"
import Tag from "../utility/tag"

function Technology() {
    return (
        <div>
            <h1 className="mb-6 mt-12 sm:mb-12" > Technology</h1>
            
                <div className="flex flex-wrap my-10" >
                    <h2 className=" mr-9 mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}} >Languages:</h2>
                    <div className="flex flex-wrap">
                        <Tag background="black_100" icon={darkIcon.js} title="Javascript" color="black"/>

                        <Tag background="black_100" icon={darkIcon.node} title="Node" color="black"/>
                        
                        <Tag background="black_100" icon={darkIcon.python} title="Python" color="black"/>
                    </div>
                </div>

                <div className="flex my-10 flex-wrap" >
                    <h2 className=" mr-9  mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}}>Frameworks:</h2>
                    <div className="flex  flex-wrap">
                        <Tag background="black_100" icon={darkIcon.react} title="React" color="black"/>

                        <Tag background="black_100" icon={darkIcon.express} title="Express" color="black"/>
                       

                    </div>
                </div>

               

                <div className="flex my-10 flex-wrap" >
                    <h2 className=" mr-9 mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}}>Database:</h2>
                    <div className="flex flex-wrap">
                        <Tag background="black_100" icon={darkIcon.knex} title="Knex" color="black"/>

                        <Tag background="black_100" icon={darkIcon.pg} title="Posgres SQl" color="black"/>

                    </div>
                </div>

                <div className="flex my-10 flex-wrap" >
                    <h2 className=" mr-9 mb-4 sm:mb-0 sm:text-right" style={{width: "210px"}}>Learning:</h2>
                    <div className="flex flex-wrap">
                    <Tag background="black_100" icon={darkIcon.go} title="Golang" color="black"/>

                    <Tag background="black_100" icon={darkIcon.gin} title="Gin Gonic" color="black"/>

                        <Tag background="black_100" icon={darkIcon.puppeteer} title="Puppeteer" color="black"/>

                        <Tag background="black_100" icon={darkIcon.framer} title="Framer" color="black"/>
                    </div>
                </div>
            
        </div>
    )
}

export default Technology
