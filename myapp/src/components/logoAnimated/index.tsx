import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { styles } from "./styles";

export function LogoAnimated() {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <Animated.Image
            source={require("../../../assets/images/logo.png")}
            style={[styles.logo, { transform: [{ rotate: spin }] }]}
        />
    );
}