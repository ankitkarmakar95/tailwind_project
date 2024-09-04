import React from "react";

function Card(){
    return(
        <>
        <div className="flex justify-center items-center  mb-10 m-20 p-10 rounded-xl h-[400px] w-[400px] bg-green-400">
            <img className='flex justify-center items-center mb-4 h-[300px] w-[400px] ' src='pexels-karolina-grabowska-4207908.jpg' alt="picture" />
            <h1 className='flex justify-center items-center mx-auto max-w-2xl sm:text-center text-b'>Gach Lagao Pran Bachao</h1>
            <br />
            <p className='flex justify-center items-center mx-auto max-w-2xl sm:text-center'>We are a on a close verdict of global destruction as the 
                planet is loosing its lungs. That is the greeneries.</p>
        </div>
        </>
    )
}

export default Card