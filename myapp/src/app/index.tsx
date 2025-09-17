import { View, Text, Alert, KeyboardAvoidingView, Platform } from "react-native"
import { router } from "expo-router"
import { useState } from "react"
import { Button } from "@/components/button"
import { styles } from "./styles"
import { Logo } from "@/components/logo"
import { Input } from "@/components/input"

export default function Index() {

    const [name, setName] = useState<string>("")

    function handleNavigation(){
        router.navigate("/dashboard")
    }


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <Logo />
                <Text style={styles.title}>Hello {name}!</Text>
                <Input placeholder="Digite seu nome"  onChangeText={setName}/>
                <Input placeholder="Digite seu e-mail" keyboardType="email-address" />
                <Input placeholder="Cole aqui a URL do seu perfil"  keyboardType="url" />
                <Button title="Continuar >" onPress={handleNavigation} />
            </View>
        </KeyboardAvoidingView>
        
    )
}
