import React, { useState, useEffect, Fragment } from 'react';

const Countdown = (props) => {
    const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const targetTime = new Date(props.targetTime).getTime();
        const timeDifference = targetTime - now;
        return Math.max(0, timeDifference);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const timeRemaining = calculateTimeRemaining();
            setRemainingTime(timeRemaining);

            if (timeRemaining <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []); // Empty dependency array to run effect only once

    function formatTime(milliseconds) {
        if (milliseconds <= 0) {
            return;
        }

        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
        const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

        return `${hours}h ${minutes}m ${seconds}s`;
    }

    if (remainingTime <= 0) {
        props.setEventClosed && props.setEventClosed(true);
        return <h3 style={{ color: 'red', marginTop:'10px' }}>We are sorry! Tickets are all sold</h3>
    } else if (remainingTime <= 24 * 60 * 60 * 1000) {
        return <h3>Ticket selling closes in: {formatTime(remainingTime)}</h3>
    } else {
        return
    }
};

export default Countdown;
