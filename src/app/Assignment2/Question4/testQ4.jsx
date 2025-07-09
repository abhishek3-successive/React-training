'use client'

import { useState } from "react"

export default function RandomNumberGenerator(){
    const [random , setrandom] = useState()
    
    const generateno = ()=>{
        const no = (Math.floor(Math.random()*100)+1)
        setrandom(no)
    }
    return(
        <>
        <h1> {random}</h1>
        <button
        onClick={generateno}
        >generate</button>
        </>
    );
}