import React from 'react'

function DarkButton(properties) {
    console.log("Writing in button " + properties.text)
    return (
    <div className=' ml-16 bg-zinc-800 w-fit px-3 py-1 rounded-full drop-shadow-lg shadow-black hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer'>
        <h1> {properties.text} </h1>
    </div>
  )
}

export { DarkButton }