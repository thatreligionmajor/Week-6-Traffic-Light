import React, { useState } from "react";

const TrafficLight = () => {
    const [chosenColor, setChosenColor] = useState("")
    return (
        <>
            <div className="trafficLightStem"></div>
            <div className="trafficLightBody">
                <div 
                className={chosenColor === "red" ? "light redLight redGlow" : "light redLight"}
                onClick={
                    chosenColor === "red" ? 
                    () => setChosenColor("") : () => setChosenColor("red")}
                ></div>

                <div 
                className={chosenColor === "yellow" ? "light yellowLight yellowGlow" : "light yellowLight"}
                onClick={
                    chosenColor === "yellow" ? () => setChosenColor("") : () => setChosenColor("yellow")}
                ></div>

                <div 
                className={chosenColor === "green" ? "light greenLight greenGlow" : "light greenLight"}
                onClick={
                    chosenColor === "green" ? () => setChosenColor("") : () => setChosenColor("green")}
                ></div>

                <p class="text-muted text-center">chi va piano va sano e va lontano, chi va forte va incontro alla morte</p>
            </div>
        </>
    );
};

export default TrafficLight;
