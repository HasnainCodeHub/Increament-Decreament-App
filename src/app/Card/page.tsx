"use client"
import { useState } from "react"
import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";

export default function Card() {
    const [count, setCount] = useState(0)
    const increament = () => {
        setCount(count + 1)
    }
    const decreament = () => {
        count > 0 ? setCount(count - 1): null
    }
    const reset = () => {
        setCount(0)
    }
    const increamentByfive= () => {
        setCount(count +    5)
    }   
    const decreamentByfive = () => {
        // count > 0? setCount(count - 5): null
        if(count <= 0){
            setCount(0)
        }
        else{
            setCount(count - 5)
        }
    }   

    return (
        <main>
<div className="flex justify-center items-center text-center ">
    <h1 className="text-white p-[100px] text-6xl rounded-lg animate-pulse">Welcome To Hasnain's <br />Coding World</h1>
</div>
<div className="flex justify-center items-center  ">
            <div className="h-[550px] w-[600px] bg-slate-100 bg-opacity-70 shadow-slate-900 rounded-lg p-10 ">
                
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl">Increament And Decreament App</h1>
                </div>

                <div className="flex justify-center p-5">
                    <h1 className="text-5xl font-bold">Value = {count}</h1>
                </div>

                <div className="flex gap-5 p-5 justify-center">
                    <button onClick={increament} className="bg-black text-white p-2 rounded-lg transition-transform duration-300 hover:scale-110">Increament + </button>
                    <button onClick= {decreament} className="bg-black text-white p-2 rounded-lg transition-transform duration-300 hover:scale-110">Decreament - </button>
                </div>
                <div className="flex gap-5 p-5 justify-center">
                    <button onClick= {increamentByfive} className="bg-black text-white p-2 rounded-lg transition-transform duration-300 hover:scale-110">Increament By Five +5</button>
                    <button onClick= {decreamentByfive} className="bg-black text-white p-2 rounded-lg transition-transform duration-300 hover:scale-110">Decreament By Five -5</button>
                </div>
                <div className="flex gap-5 p-5 justify-center">
                <button onClick={reset} className="bg-red-700 text-white p-2 rounded-lg w-[100px] transition-transform duration-300 hover:scale-110">Reset</button>

                </div>
                <div>
                <p className="text-center font-serif"> {'<'}For More Projects{'>'}</p>

                </div>
                <div className="flex justify-center ">
        <FaGithubSquare
          size={55}
          className=" "
        />
        <button className=" bg-black rounded-xl text-white text-2xl font-serif p-1 transition-transform duration-300 hover:scale-110">
          <Link
            href="https://github.com/HasnainCodeHub?tab=repositories"
            target="_blank"
          >
            Github Account
          </Link>
        </button>
      </div>
      <div>
                </div>

                <p className="text-center font-serif ml-4 mt-8">{'<'}Developed By Hasnain{'>'}</p>


                </div>

            </div>
        </main>
    )
}