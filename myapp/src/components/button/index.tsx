import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

type Props = {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress } : Props) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={onPress}>
            <Text  style={styles.buttonText} >{title}</Text>
        </TouchableOpacity>
    )
}