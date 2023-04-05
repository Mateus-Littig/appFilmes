/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-newline */
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
export default function SignIn () {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <View style={styles.container}>
        <StatusBar backgroundColor='#191A30' translucent={false} />

        <Text style={styles.welcome}>Bem-Vindo (a)!</Text>
          <Image
            source={require('../../assets/logo.png')}
            style={{ width: 200, height: 200, marginBottom: 50 }}
          />

        <TextInput
          placeholder='Endereço de email'
          style={styles.input}
        />

        <TextInput
          secureTextEntry={true}
          placeholder='Digite sua senha'
          style={styles.input}
        />

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={ () => navigation.navigate('Home') }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.entrar}>Logar com</Text>

        <View style={styles.buttonLogin}>

          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome5 name="facebook" size={25} color='#399FFF' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome5 name="google" size={25} color='#e94a4a' />
          </TouchableOpacity>
        </View>

        <View style={styles.divisor}>
          <View style={styles.divisorLine}></View>
          <Text style={{ marginHorizontal: '3%', color: 'white' }}>Ou</Text>
          <View style={styles.divisorLine}></View>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={ () => navigation.navigate('Form') }>
            <Text style={styles.signUpButton}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
