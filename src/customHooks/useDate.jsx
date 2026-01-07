import { useState, useEffect } from "react";
export default function useDate() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const myInterval = setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);
  useEffect(() => {
    myInterval;
    return clearInterval(myInterval);
  }, []);

  return [currentDate];
}
