"use client";
import { useState } from "react";
import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";

export default function Card() {
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount(count + 1);
    };
    const decreament = () => {
        count > 0 ? setCount(count - 1) : null;
    };
    const reset = () => {
        setCount(0);
    };
    const increamentByfive = () => {
        setCount(count + 5);
    };
    const decreamentByfive = () => {
        count > 0 ? setCount(count - 5) : setCount(0);
    };

    return (
        <main>
            <div className="flex justify-center items-center text-center p-4">
                <h1 className="text-white text-4xl md:text-6xl rounded-lg animate-pulse">
                    Welcome To Hasnain's <br /> Coding World
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="h-auto max-w-3xl w-full bg-slate-100 bg-opacity-70 shadow-lg rounded-lg p-6 md:p-10"> {/* Increased max-w to 3xl */}
                    <div className="flex justify-center mb-4">
                        <h1 className="font-bold text-2xl md:text-3xl">Increment And Decrement App</h1>
                    </div>

                    <div className="flex justify-center p-5">
                        <h1 className="text-4xl md:text-5xl font-bold">Value = {count}</h1>
                    </div>

                    <div className="flex gap-4 p-5 justify-center flex-wrap">
                        <button onClick={increament} className="bg-black text-white p-3 rounded-lg transition-transform duration-300 hover:scale-110">Increment +</button>
                        <button onClick={decreament} className="bg-black text-white p-3 rounded-lg transition-transform duration-300 hover:scale-110">Decrement -</button>
                    </div>
                    <div className="flex gap-4 p-5 justify-center flex-wrap">
                        <button onClick={increamentByfive} className="bg-black text-white p-3 rounded-lg transition-transform duration-300 hover:scale-110">Increment By Five +5</button>
                        <button onClick={decreamentByfive} className="bg-black text-white p-3 rounded-lg transition-transform duration-300 hover:scale-110">Decrement By Five -5</button>
                    </div>
                    <div className="flex gap-4 p-5 justify-center flex-wrap">
                        <button onClick={reset} className="bg-red-700 text-white p-3 rounded-lg transition-transform duration-300 hover:scale-110">Reset</button>
                    </div>
                    <div>
                        <p className="text-center font-serif">{'<'}For More Projects{'>'}</p>
                    </div>
                    <div className="flex justify-center mb-4">
                        <FaGithubSquare size={55} />
                        <button className="bg-black rounded-xl text-white text-xl font-serif p-1 ml-2 transition-transform duration-300 hover:scale-110">
                            <Link href="https://github.com/HasnainCodeHub?tab=repositories" target="_blank">Github Account</Link>
                        </button>
                    </div>
                    <p className="text-center font-serif mt-8">{'<'}Developed By Hasnain{'>'}</p>
                </div>
            </div>
        </main>
    );
}
