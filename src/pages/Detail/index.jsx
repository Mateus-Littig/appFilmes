/* eslint-disable no-const-assign */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import {
  Container,
  Header,
  HeaderButton,
  Banner,
  ButtonLink,
  Title,
  ContentArea,
  Rate,
  ListGenres,
  Description
} from './styles'

import { ScrollView, Modal } from 'react-native'

import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'
import Stars from 'react-native-stars'
import Genres from '../../components/Genres'
import ModalLink from '../../components/ModalLink'

function Detail () {
  const navigation = useNavigation()
  const route = useRoute()

  const [movie, setMovie] = useState({})
  const [openLink, setOpenLink] = useState(false)

  useEffect(() => {
    const isActive = true

    async function getMovie () {
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
          language: 'pt-BR'
        }
      }) // buscando as informações da api, caso não tenha virá como null
      .catch((err) => {
        console.log(err)
      })
      if (isActive) {
        setMovie(response.data) // passa para useState o filme que ele recebeu
        // console.log(response.data)
      }
    }
    if (isActive) {
      getMovie()
    }
    return () => {
      isActive = false
    }
  }, [])
  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={ () => navigation.goBack() } >
          <Feather
            name="arrow-left"
            size={28}
            color='#FFF'
          />
        </HeaderButton>

        <HeaderButton>
          <Ionicons
            name="bookmark"
            size={28}
            color='#FFF'
          />
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod='resize' // enquadra a imagem, caso ela seja muito grande
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
      />

      <ButtonLink onPress= {() => setOpenLink(true)}>
        <Feather
          name="link"
          size={24}
          color="#FFF"
        />
      </ButtonLink>

      <Title numberOflines={2}>{movie.title}</Title>
      {/* numberOflines serve para deixar apenas uma linha no titulo */}

      <ContentArea>
        <Stars
          default={movie.vote_average}
          count={10} // qtd. de estrelas
          half={true} // se pode ter estrelas pela metade
          starSize={20}
          fullStar={ <Ionicons name="md-star" size={24} color="#E7A74E" />}
          emptyStar={ <Ionicons name="md-star-outline" size={24} color="#E7A74E" />} // caso não tenha preenchido a estrela
          halfStar={ <Ionicons name="md-star-half" size={24} color="#E7A74E" /> }
          disable={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Genres data={item}/> } // qual componente ira renderizar cada item
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descrição</Title>
        <Description>{movie?.overview}</Description>
      </ScrollView>

      <Modal animationType='slide' transparent={true} visible={openLink}>
        <ModalLink
          link={movie?.homepage}
          title={movie?.title}
          closeModal={ () => setOpenLink(false)}
        />
      </Modal>
    </Container>
  )
}

export default Detail
