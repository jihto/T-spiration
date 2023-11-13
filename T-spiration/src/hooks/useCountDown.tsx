import moment from "moment";
import { useEffect, useState } from "react";

//2h

const useCountDown: (timeHours: number)=> string = (
    timeHours: number
) => {
    const timeStart = new Date().getTime(); 
    const timeEnd = new Date().getTime() + timeHours*60; 
    

    const [countDown, setCountDown] = useState(
        timeStart - new Date().getTime()
    );
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(new Date().getTime());
        }, 1000);
    
        return () => clearInterval(interval);
    },[countDown]); 
    return moment(countDown).format('h:mm:ss a');
}

export { useCountDown }