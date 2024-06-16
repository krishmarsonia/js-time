import { number, z } from "zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const schema = z.object({
  year: z.number().min(1970),
  month: z.number().min(0).max(11),
  day: z.number().min(1).max(31),
  hours: z.number().min(0).max(23),
  minutes: z.number().min(0).max(60),
  seconds: z.number().min(0).max(60),
  milliseconds: z.number().min(0),
});

type formFields = z.infer<typeof schema>;

const Time = () => {
  const [realDate, setRealDate] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<formFields>({
    defaultValues: {
      milliseconds: realDate.getTime(),
      seconds: realDate.getSeconds(),
      minutes: realDate.getMinutes(),
      hours: realDate.getHours(),
      day: realDate.getDate(),
      month: realDate.getMonth(),
      year: realDate.getFullYear(),
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const formYears = watch("year");
  const formMonth = watch("month");
  const formDay = watch("day");
  const formHours = watch("hours");
  const formMinutes = watch("minutes");
  const formSeconds = watch("seconds");
  const formMilliseconds = watch("milliseconds");

  const largeCenter = "text-xl text-center";
  const inputFieldClass = "text-black h-8 text-lg w-48";
  const divRow = "flex w-full justify-around items-center mt-5 gap-5";

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    console.log("Year");
    console.log(formMilliseconds);
    if (
      formYears > 1969 &&
      formMonth > -1 &&
      formMonth < 12 &&
      formDay > 0 &&
      formDay < 32 &&
      formHours > -1 &&
      formHours < 24 &&
      formMinutes > -1 &&
      formMinutes < 60 &&
      formSeconds > -1 &&
      formSeconds < 60 &&
      formMilliseconds > -1
    ) {
      setValue("year", realDate.getFullYear());
      setValue("month", realDate.getMonth());
      setValue("day", realDate.getDate());
      setValue("hours", realDate.getHours());
      setValue("minutes", realDate.getMinutes());
      setValue("seconds", realDate.getSeconds());
      setValue("milliseconds", realDate.getTime());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formYears,
    formMonth,
    formDay,
    formHours,
    formMinutes,
    formSeconds,
    formMilliseconds,
    realDate,
  ]);

  if (!isMounted) return null;
  return (
    <div className="flex justify-center items-center flex-col mt-4 w-full">
      <form>
        <div className="mt-5 flex flex-col justify-center items-center">
          <p className={largeCenter}>Milliseconds</p>
          <input
            type="number"
            id="milliseconds"
            className={inputFieldClass}
            {...register("milliseconds")}
            onChange={(e) => {
              const milli = Number(e.target.value);
              if (milli > -1) {
                realDate.setTime(milli);
                setRealDate(realDate);
              }
              register("milliseconds", { valueAsNumber: true }).onChange(e);
            }}
          />
        </div>
        <div className={divRow}>
          <div>
            <p className={largeCenter}>Year</p>
            <input
              type="number"
              id="year"
              className={inputFieldClass}
              {...register("year")}
              onChange={(e) => {
                console.log("hellloo");
                const yrs = Number(e.target.value);
                if (yrs > 1969) {
                  realDate.setFullYear(yrs);
                  setRealDate(realDate);
                }
                register("year", { valueAsNumber: true }).onChange(e);
              }}
            />
          </div>
          <div>
            <p className={largeCenter}>Month</p>
            <input
              type="number"
              id="month"
              className={inputFieldClass}
              {...register("month")}
              onChange={(e) => {
                const mth = Number(e.target.value);
                if (mth > -1 && mth < 12) {
                  realDate.setMonth(mth);
                  setRealDate(realDate);
                }
                register("month", { valueAsNumber: true }).onChange(e);
              }}
            />
          </div>
        </div>
        <div className={divRow}>
          <div>
            <p className={largeCenter}>Day</p>
            <input
              type="number"
              id="day"
              className={inputFieldClass}
              {...register("day")}
              onChange={(e) => {
                const dy = Number(e.target.value);
                if (dy > 0 && dy < 32) {
                  realDate.setDate(dy);
                  setRealDate(realDate);
                }
                register("day", { valueAsNumber: true }).onChange(e);
              }}
            />
          </div>
          <div>
            <p className={largeCenter}>Hours</p>
            <input
              type="number"
              id="hours"
              className={inputFieldClass}
              {...register("hours")}
              onChange={(e) => {
                const hrs = Number(e.target.value);
                if (hrs > -1 && hrs < 24) {
                  realDate.setHours(hrs);
                  setRealDate(realDate);
                }
                register("hours", { valueAsNumber: true }).onChange(e);
              }}
            />
          </div>
        </div>
        <div className={divRow}>
          <div>
            <p className={largeCenter}>Minutes</p>
            <input
              type="number"
              id="minutes"
              className={inputFieldClass}
              {...register("minutes")}
              onChange={(e) => {
                const mts = Number(e.target.value);
                if (mts > -1 && mts < 60) {
                  realDate.setMinutes(mts);
                  setRealDate(realDate);
                }
                register("minutes", { valueAsNumber: true }).onChange(e);
              }}
            />
          </div>
          <div>
            <p className={largeCenter}>Seconds</p>
            <input
              type="number"
              id="seconds"
              className={inputFieldClass}
              {...register("seconds")}
              onChange={(e) => {
                const sec = Number(e.target.value);
                if (sec > -1 && sec < 60) {
                  realDate.setSeconds(sec);
                }
                register("seconds", { valueAsNumber: true }).onChange(e);
              }}
            />
          </div>
        </div>
        <div className="mt-9 text-center">
          <p className="text-red-500">{errors.year && errors.year.message}</p>
          <p className="text-red-500">{errors.month && errors.month.message}</p>
          <p className="text-red-500">{errors.day && errors.day.message}</p>
          <p className="text-red-500">{errors.hours && errors.hours.message}</p>
          <p className="text-red-500">
            {errors.minutes && errors.minutes.message}
          </p>
          <p className="text-red-500">
            {errors.seconds && errors.seconds.message}
          </p>
          <p className="text-red-500">
            {errors.milliseconds && errors.milliseconds.message}
          </p>

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
      </form>
    </div>
  );
};

export default Time;
