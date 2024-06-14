"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const largeCenter = "text-xl text-center";
  const [realDate, setRealDate] = useState(new Date());
  const [year, setYear] = useState(realDate.getFullYear());
  const [month, setMonth] = useState(realDate.getMonth() + 1);
  const [day, setDay] = useState(realDate.getDate());
  const [hours, setHours] = useState(realDate.getHours());
  const [minutes, setMinutes] = useState(realDate.getMinutes());
  const [seconds, setSeconds] = useState(realDate.getSeconds());
  const [milliseconds, setMilliseconds] = useState(realDate.getTime());
  useEffect(() => {
    setYear(realDate.getFullYear());
    setMonth(realDate.getMonth() + 1);
    setDay(realDate.getDate());
    setHours(realDate.getHours());
    setMinutes(realDate.getMinutes());
    setSeconds(realDate.getSeconds());
    setMilliseconds(realDate.getTime());
  }, [year, month, day, hours, milliseconds, minutes, seconds, realDate]);
  return (
    <main className="flex justify-center items-center flex-col mt-6">
      <div>
        <h1 className="text-5xl font-medium">Welcome to JS-Time</h1>
        <h3 className={largeCenter}>Where you can easily deal with time.</h3>
      </div>
      <div className="mt-5">
        <p className={largeCenter}>Milliseconds</p>
        <input
          type="number"
          name="milliseconds"
          id="milliseconds"
          className="text-black h-8 text-lg w-48"
          value={milliseconds}
          onChange={(e) => {
            const milli = Number(e.target.value);
            realDate.setTime(milli);
            setRealDate(realDate);
            setMilliseconds(milli);
          }}
        />
      </div>
      <div className="flex w-1/2 justify-around items-center mt-5">
        <div>
          <p className={largeCenter}>Year</p>
          <input
            type="number"
            name="years"
            id="years"
            className="text-black h-8 text-lg w-48"
            value={year}
            onChange={(e) => {
              const yrs = Number(e.target.value);
              if (yrs > 1969) {
                realDate.setFullYear(yrs);
                setRealDate(realDate);
              }
              setYear(yrs);
            }}
          />
        </div>
        <div>
          <p className={largeCenter}>Month</p>
          <input
            type="text"
            name="months"
            id="months"
            className="text-black h-8 text-lg w-48"
            value={month}
            onChange={(e) => {
              const mth = Number(e.target.value);
              if (mth > -1 && mth < 12) {
                realDate.setMonth(mth);
                setRealDate(realDate);
              }
              setMonth(mth);
            }}
          />
        </div>
      </div>
      <div className="flex w-1/2 justify-around items-center mt-5">
        <div>
          <p className={largeCenter}>Day</p>
          <input
            type="text"
            name="day"
            id="day"
            className="text-black h-8 text-lg w-48"
            value={day}
            onChange={(e) => {
              const dy = Number(e.target.value);
              if (dy > 0 && dy < 32) {
                realDate.setDate(dy);
                setRealDate(realDate);
              }
              setDay(dy);
            }}
          />
        </div>
        <div>
          <p className={largeCenter}>Hours</p>
          <input
            type="text"
            name="hour"
            id="hour"
            className="text-black h-8 text-lg w-48"
            value={hours}
            onChange={(e) => {
              const hrs = Number(e.target.value);
              if (hrs > -1 && hrs < 24) {
                realDate.setHours(hrs);
              }
              setHours(hrs);
            }}
          />
        </div>
      </div>
      <div className="flex w-1/2 justify-around items-center mt-5">
        <div>
          <p className={largeCenter}>Minutes</p>
          <input
            type="text"
            name="minutes"
            id="minutes"
            className="text-black h-8 text-lg w-48"
            value={minutes}
            onChange={(e) => {
              const mts = Number(e.target.value);
              if (mts > -1 && mts < 60) {
                realDate.setMinutes(mts);
                setRealDate(realDate);
              }
              setMinutes(mts);
            }}
          />
        </div>
        <div>
          <p className={largeCenter}>Seconds</p>
          <input
            type="text"
            name="seconds"
            id="seconds"
            className="text-black h-8 text-lg w-48"
            value={seconds}
            onChange={(e) => {
              const sec = Number(e.target.value);
              if (sec > -1 && sec < 60) {
                realDate.setSeconds(sec);
              }
              setSeconds(sec);
            }}
          />
        </div>
      </div>
      <div className="mt-9">
        <p>
          The entered date is{" "}
          <span className="font-semibold">
            {realDate.getDate()} {realDate.getMonth() + 1}{" "}
            {realDate.getFullYear()}
          </span>
          .
        </p>
        <p>
          The day of the week is{" "}
          <span className="font-semibold">{realDate.getDay()}</span>.
        </p>
        <p>
          The current Time is{" "}
          <span>
            {(realDate.getHours() > 12
              ? realDate.getHours() - 12
              : realDate.getHours()) < 10
              ? "0" +
                (realDate.getHours() > 12
                  ? realDate.getHours() - 12
                  : realDate.getHours())
              : realDate.getHours() > 12
              ? realDate.getHours() - 12
              : realDate.getHours()}
            :
            {realDate.getMinutes() < 10
              ? "0" + realDate.getMinutes()
              : realDate.getMinutes()}
            :{realDate.getSeconds()} {realDate.getHours() > 12 ? "PM" : "AM"}
          </span>
          .
        </p>
      </div>
    </main>
  );
}
