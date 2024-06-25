"use client";
import { useEffect, useRef, useState } from "react";

import Time from "./components/time";
import DarkMode from "./components/toggleButton";

const largeCenter = "text-xl text-center";

export default function Home() {
  const [count, setCount] = useState([{ elem: <Time /> }]);
  const [darkState, setDarkState] = useState(false);
  const darkRef = useRef(true);
  useEffect(() => {
    if (darkRef.current === true) {
      darkRef.current = false;
      const localDarkState = localStorage.getItem("darkState");
      if (localDarkState) {
        const actualLocalDarkStateValue = (localDarkState === "true");
        if(actualLocalDarkStateValue){
          setDarkState(true);
        }else{
          setDarkState(false);
        }
      } else {
        const systemTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (systemTheme) {
          setDarkState(true);
        } else {
          setDarkState(false);
        }
      }
    }
  }, []);
  useEffect(() => {
    if (darkRef.current === false) {
      console.log("system", window.matchMedia("(prefers-color-scheme: dark)"));
      const html = document.querySelector("html");
      if (darkState) {
        html?.classList.add("dark");
        localStorage.setItem("darkState", "true");
      } else {
        html?.classList.remove("dark");
        localStorage.setItem("darkState", "false");
      }
    }
  }, [darkState]);

  const themeToggler = () => {
    const html = document.querySelector("html");
    if (html?.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  };

  return (
    <main className="text-black dark:text-white">
      <div className="absolute right-20 top-7 hover:cursor-pointer">
        <DarkMode
          darkState={typeof darkState === "boolean" ? darkState : true}
          clickHandler={setDarkState}
        />
      </div>
      <div className="text-center mt-5">
        <h1 className="text-5xl font-medium">Welcome to JS-Time</h1>
        <h3 className={largeCenter}>
          Where you can play with javascript time and date object.
        </h3>
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
            Remove Time Component
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
      <footer className="text-right">
        <h5 className="text-sm">Made by Krish Marsonia and Vimal Sonara</h5>
      </footer>
    </main>
  );
}
