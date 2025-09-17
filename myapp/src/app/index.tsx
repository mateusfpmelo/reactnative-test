import { View, Text, Alert, KeyboardAvoidingView, Platform } from "react-native"
import { useState } from "react"
import { Button } from "@/components/button"
import { styles } from "./styles"
import { Logo } from "@/components/logo"
import { LogoAnimated } from "@/components/logoAnimated"
import { Input } from "@/components/input"

export default function Index() {

    const [name, setName] = useState<string>("")

    function handleMessage(){
        //const name = "Mateus"
        Alert.alert(name)
    }


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <LogoAnimated />
                <Logo />
                <Text style={styles.title}>Hello {name}!</Text>
                <Input placeholder="Digite seu nome"  onChangeText={setName}/>
                <Input placeholder="Digite seu e-mail" keyboardType="email-address" />
                <Input placeholder="Cole aqui a URL do seu perfil"  keyboardType="url" />
                <Button title="Clique aqui" onPress={handleMessage} />
            </View>
        </KeyboardAvoidingView>
        
    )
}
