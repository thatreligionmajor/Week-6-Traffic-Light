import React, { useState } from "react";

const TrafficLight = () => {
    const [chosenColor, setChosenColor] = useState("")
    return (
        <>
            <div className="trafficLightStem"></div>
            <div className="trafficLightBody">
                <div 
                className={chosenColor === "red" ? "light redLight redGlow" : "light redLight"}
                onClick={() => setChosenColor("red")}
                ></div>

                <div 
                className={chosenColor === "yellow" ? "light yellowLight yellowGlow" : "light yellowLight"}
                onClick={() => setChosenColor("yellow")}
                ></div>

                <div 
                className={chosenColor === "green" ? "light greenLight greenGlow" : "light greenLight"}
                onClick={() => setChosenColor("green")}
                ></div>

                <p class="text-muted text-center">chi va piano va sano e va lontano, chi va forte va incontro alla morte</p>
            </div>
        </>
    );
};

export default TrafficLight;