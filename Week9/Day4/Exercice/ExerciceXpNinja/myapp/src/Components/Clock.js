import { useState, useEffect } from "react";

const Clock = (props) => {
  const time = new Date();
  const [currentDate, setCurrentDate] = useState({
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  });

  const tick = () => {
    const interval = setInterval(() => {
      setCurrentDate({
        hours:
          time.getHours() < 10
            ? "0" + time.getHours().toString()
            : time.getHours().toString() + "",
        minutes:
          time.getMinutes() < 10
            ? "0" + time.getMinutes().toString()
            : time.getMinutes().toString() + "",
        seconds:
          time.getSeconds() < 10
            ? "0" + time.getSeconds().toString()
            : time.getSeconds().toString() + "",
      });
    }, 1000);

    return () => clearInterval(interval)
  };

  useEffect(() => {
    return tick();
  });

  //   tick();

  return (
    <>
      <h1>
        {currentDate.hours}:{currentDate.minutes}:{currentDate.seconds}
      </h1>
    </>
  );
};

export default Clock;
