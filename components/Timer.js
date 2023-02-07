import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = ({ timeInSeconds }) => {

    const [time, setTime] = useState(timeInSeconds);
    const [minutes, setMinutes] = useState(Math.floor(time / 60));
    const [seconds, setSeconds] = useState(time % 60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (time >= 0) {
                setTime(time - 1);
                setMinutes(Math.floor(time / 60));
                setSeconds(time % 60);
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [time]);

    return (
        <View>
            <Text style={{color: 'white'}}>
                {minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Timer;