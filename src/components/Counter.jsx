import { useState, useRef, useEffect } from "react";

import { Button } from "../style/Buttons";
export const Counter = () => {
     const [counter, setCounter] = useState(0);
     const ref = useRef(null);
     const [theme, setTheme] = useState("light");
     useEffect(() => {
       startTimer();
     }, []);

     const startTimer = () => {
       ref.current = setInterval(() => {
         setCounter((p) => p + 1);
       }, 1000);
     };

     return (
       <div className="App">
         <h3 className="h4">Counter:{counter}</h3>
         <Button
           theme={theme}
           onClick={() => {
             clearInterval(ref.current);
           }}
         >
           Stop
         </Button>

         <Button theme={theme} onClick={startTimer}>
           Start
         </Button>

         <Button
           theme={theme}
           onClick={() => {
             clearInterval(ref.current);
             setCounter(0);
           }}
         >
           Reset
         </Button>
         <Button
           onClick={() => {
             setTheme(theme === "light" ? "dark" : "light");
           }}
         >
           Change Theme
         </Button>
       </div>
     );
}