"use client";

import { useState } from "react";
import Time from "./components/time";

const largeCenter = "text-xl text-center";

export default function Home() {
  const [count, setCount] = useState([{ elem: <Time /> }]);

  return (
    <main>
      <div className="absolute right-20 top-7">Dark</div>
      <div className="text-center mt-5">
        <h1 className="text-5xl font-medium">Welcome to JS-Time</h1>
        <h3 className={largeCenter}>Where you can play with javascript time.</h3>
      </div>
      <div className="flex gap-6 justify-center mt-5">
        <div>
          <button
            className="py-2 px-3 border-2 border-green-600 text-green-500 hover:bg-green-700 rounded-md hover:border-green-700 hover:text-white"
            onClick={() => {
              setCount([...count, { elem: <Time /> }]);
            }}
          >
            Add Time Component
          </button>
        </div>
        <div>
          <button
            className="py-2 px-3 border-2 border-red-600 text-red-500 hover:bg-red-700 rounded-md hover:border-red-700 hover:text-white"
            onClick={() => {
              if (count.length > 1) {
                count.pop();
                setCount([...count]);
              }
            }}
          >
            Add Time Component
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap mx-6">
        {count.map((ct, index) => {
          return (
            <div className="flex gap-1 w-1/2" key={index}>
              {ct.elem}
            </div>
          );
        })}
      </div>
    </main>
  );
}
