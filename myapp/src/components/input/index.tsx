import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export function Input({...rest}: TextInputProps) {
    return <TextInput placeholderTextColor="#7F58FF" style={styles.input} {...rest} />
} 