import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [ currentTime, setCurrentTime] = useState(new Date().toTimeString());
    useEffect(
      () => {
        //this function will be executed whenever the component is initialized / updated
        console.log('timer mounted');
        const timerId = setInterval(() => {
          setCurrentTime(new Date().toTimeString());
        }, 1000);

        return () => {
          //this function will be executed whenever the component is unmounted
          if (timerId) {
            clearInterval(timerId);
          }
          console.log('timer unmounted');
        };
      },
      [] /* list the data which when changed the component has to be updated */
    );
    return (<div>{currentTime}</div>)
}

const TimerContainer = () => {
    const [showTimer, setShowTimer ] = useState(true);
    return (
        <div>
            {showTimer ? (<Timer/>) : null}
            <input 
                type="button" 
                value={showTimer ? 'Hide' : 'Show'} 
                onClick={ () => setShowTimer(!showTimer) } 
            />
        </div>
    )
}

export default TimerContainer;