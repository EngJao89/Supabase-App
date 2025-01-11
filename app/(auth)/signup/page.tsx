import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/colors";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState();

  function handleSignUp() {
    console.log({
      name,
      email,
      password
    });
  }

  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.zinc }}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color={Colors.white}/>
            </Pressable>
            <Text style={styles.logoText}>
              Dev<Text style={{color: Colors.green}}>App</Text>
            </Text>

            <Text style={styles.slogan}>
              Criar uma conta
            </Text>
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Nome Completo</Text>
              <TextInput 
                placeholder='Digite seu nome...' 
                value={name}
                onChangeText={setName}
                style={styles.input} 
              />
            </View>

            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput 
                placeholder='Digite seu email...' 
                value={email}
                onChangeText={setEmail}
                style={styles.input} 
              />
            </View>

            <View>
              <Text style={styles.label}>Senha</Text>
              <TextInput 
                placeholder='Digite sua senha...' 
                secureTextEntry 
                value={password}
                onChangeText={setPassword}
                style={styles.input} 
              />
            </View>

            <Pressable style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    backgroundColor: Colors.zinc
  },
  header: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 8,
  },
  slogan: {
    fontSize: 24,
    color: Colors.white,
    marginBottom: 34,
  },
  form: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 24,
    paddingLeft: 14,
    paddingRight: 14,
  },
  label: {
    color: Colors.black,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 14,
  },
  button: {
    backgroundColor: Colors.green,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.zinc,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    alignSelf: "flex-start",
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  }
});