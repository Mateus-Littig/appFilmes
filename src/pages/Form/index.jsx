/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { onChange } from 'react-native-reanimated'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required('Informe seu nome'),
  email: yup.string().email('Email inválido').required('Informe seu email'),
  password: yup.string().min(6, 'A senha deve conter pelo menos 6 digitos').required('Informe sua senha')
})

export default function Form () {
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleForm (data) {
    console.log(data)
  }

  return (
  <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
    <View style={styles.container}>
      <StatusBar backgroundColor='#191A30' translucent={false} />

      <Image style={{ width: 200, height: 200 }} source={require('../../assets/login.png')} />

      <Controller
        control={control}
        name='username'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Digite seu nome completo"
            style={[styles.textInput, {
              borderWidth: errors.email && 1,
              borderColor: '#ff375b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur} // É chamado quando o TextInput é tocado.
            value={value}
          />
        )}
      />
      {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Digite seu email"
            style={[styles.textInput, {
              borderWidth: errors.email && 1,
              borderColor: '#ff375b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur} // É chamado quando o TextInput é tocado.
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Digite sua senha"
            style={[styles.textInput, {
              borderWidth: errors.email && 1,
              borderColor: '#ff375b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur} // É chamado quando o TextInput é tocado.
            value={value}
          />
        )}
      />
      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <View style={styles.boxBtn}>
          <TouchableOpacity style={styles.btnCadastro} onPress={handleSubmit(handleForm)} >
          <Text style={styles.textBtn}>Register!</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}
