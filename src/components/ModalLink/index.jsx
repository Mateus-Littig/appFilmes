/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react'

import { BackButton, Name } from './styles'
import { Feather } from '@expo/vector-icons'

import { WebView } from 'react-native-webview'
function ModalLink ({ link, title, closeModal }) {
  return (
    // fragmento
    <>
      <BackButton onPress={closeModal}>
        <Feather name='x' size={35} color="#FFF" />
        <Name numerOflines={1}>{title}</Name>
      </BackButton>

      <WebView
        source={{ uri: link }}
      />
    </>
  )
}

export default ModalLink
