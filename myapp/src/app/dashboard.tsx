import { View, Text } from "react-native";
import { styles } from "./styles"
import { Button } from "@/components/button";
import { router } from "expo-router";
import { LogoAnimated } from "@/components/logoAnimated";

export default function Dashboard() {
    return(
        <View style={styles.container}>
            <LogoAnimated />
            <Text style={styles.title}>Dashboard :)</Text>
            <Button title="< Voltar" onPress={() => router.back()}/>
        </View>
    )
}