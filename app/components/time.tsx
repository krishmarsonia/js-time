import React, { useEffect, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Time = () => {
  const [realDate, setRealDate] = useState(new Date());
  const [year, setYear] = useState(realDate.getFullYear());
  const [month, setMonth] = useState(realDate.getMonth() + 1);
  const [day, setDay] = useState(realDate.getDate());
  const [hours, setHours] = useState(realDate.getHours());
  const [minutes, setMinutes] = useState(realDate.getMinutes());
  const [seconds, setSeconds] = useState(realDate.getSeconds());
  const [milliseconds, setMilliseconds] = useState(realDate.getTime());
  const [isMounted, setIsMounted] = useState(false);

  const largeCenter = "text-xl text-center";
  const inputFieldClass = "text-black h-8 text-lg w-48";
  const divRow = "flex w-1/2 justify-around items-center mt-5 gap-5";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //   useEffect(() => {
  //     setYear(realDate.getFullYear());
  //     setMonth(realDate.getMonth() + 1);
  //     setDay(realDate.getDate());
  //     setHours(realDate.getHours());
  //     setMinutes(realDate.getMinutes());
  //     setSeconds(realDate.getSeconds());
  //     setMilliseconds(realDate.getTime());
  //   }, [year, month, day, hours, milliseconds, minutes, seconds, realDate]);

  useEffect(() => {
    console.log("Year");
    if (year > 1969) {
      setYear(realDate.getFullYear());
      setMonth(realDate.getMonth());
      setDay(realDate.getDate());
      setHours(realDate.getHours());
      setMinutes(realDate.getMinutes());
      setSeconds(realDate.getSeconds());
      setMilliseconds(realDate.getTime());
    }
  }, [year, realDate]);

  useEffect(() => {
    console.log("month");
    if (month > -1 && month < 12) {
      setYear(realDate.getFullYear());
      setMonth(realDate.getMonth());
      setDay(realDate.getDate());
      setHours(realDate.getHours());
      setMinutes(realDate.getMinutes());
      setSeconds(realDate.getSeconds());
      setMilliseconds(realDate.getTime());
    }
  }, [month, realDate]);

  useEffect(() => {
    console.log("day");
    if (day > 0 && day < 32) {
      setYear(realDate.getFullYear());
      setMonth(realDate.getMonth());
      setDay(realDate.getDate());
      setHours(realDate.getHours());
      setMinutes(realDate.getMinutes());
      setSeconds(realDate.getSeconds());
      setMilliseconds(realDate.getTime());
    }
  }, [day, realDate]);

  useEffect(() => {
    console.log("hours");
    if (hours > -1 && hours < 24) {
      setYear(realDate.getFullYear());
      setMonth(realDate.getMonth());
      setDay(realDate.getDate());
      setHours(realDate.getHours());
      setMinutes(realDate.getMinutes());
      setSeconds(realDate.getSeconds());
      setMilliseconds(realDate.getTime());
    }
  }, [hours, realDate]);

  useEffect(() => {
    console.log("minutes");
    if (minutes > -1 && minutes < 60) {
      setYear(realDate.getFullYear());
      setMonth(realDate.getMonth());
      setDay(realDate.getDate());
      setHours(realDate.getHours());
      setMinutes(realDate.getMinutes());
      setSeconds(realDate.getSeconds());
      setMilliseconds(realDate.getTime());
    }
  }, [minutes, realDate]);

  useEffect(() => {
    console.log("seconds");

    if (seconds > -1 && seconds < 60) {
      setYear(realDate.getFullYear());
      setMonth(realDate.getMonth());
      setDay(realDate.getDate());
      setHours(realDate.getHours());
      setMinutes(realDate.getMinutes());
      setSeconds(realDate.getSeconds());
      setMilliseconds(realDate.getTime());
    }
  }, [seconds, realDate]);

  useEffect(() => {
    console.log("milliseconds");

    setYear(realDate.getFullYear());
    setMonth(realDate.getMonth());
    setDay(realDate.getDate());
    setHours(realDate.getHours());
    setMinutes(realDate.getMinutes());
    setSeconds(realDate.getSeconds());
    setMilliseconds(realDate.getTime());
  }, [milliseconds, realDate]);

  if (!isMounted) return null;
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-4 w-full">
        <div className="mt-5">
          <p className="text-xl text-center">Milliseconds</p>
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
        <div className="flex w-full justify-around items-center mt-5 gap-5">
          <div>
            <p className="text-xl text-center">Year</p>
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
            <p className="text-xl text-center">Month</p>
            <input
              type="number"
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
        <div className="flex w-full justify-around items-center mt-5 gap-5">
          <div>
            <p className="text-xl text-center">Day</p>
            <input
              type="number"
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
            <p className="text-xl text-center">Hours</p>
            <input
              type="number"
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
        <div className="flex w-full justify-around items-center mt-5 gap-5">
          <div>
            <p className="text-xl text-center">Minutes</p>
            <input
              type="number"
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
            <p className="text-xl text-center">Seconds</p>
            <input
              type="number"
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
              {realDate.getDate()} {months[realDate.getMonth()]}{" "}
              {realDate.getFullYear()}
            </span>
            .
          </p>
          <p>
            The day of the week is{" "}
            <span className="font-semibold">{weeks[realDate.getDay()]}</span>.
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
      </div>
      {/* <div className="border-l border-solid border-green-400 h-96 mt-10"></div> */}
    </>
  );
};

export default Time;
