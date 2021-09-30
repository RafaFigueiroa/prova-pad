import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Main, Header, Title, Content } from './styles'

import menuImg from '../../assets/storage.png'
import closeImg from '../../assets/close.png'
import { useDispatch } from 'react-redux'
import { DeleteTask } from '../../store/tasks'
import { useNavigation } from '@react-navigation/core'


function Todo({ task }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function removeTodo() {
    dispatch(DeleteTask(task.id))
  }

  function redirecionar() {
    navigation.navigate('Todo', { task })
  }

  return (
    <Main onPress={redirecionar}>
      <Header>
        <Image source={menuImg} />
        <Title>Tarefa#{task.title}</Title>
        <TouchableOpacity onPress={removeTodo}>
          <Image source={closeImg} />
        </TouchableOpacity>
      </Header>

      <Content>{task.content}</Content>
    </Main>
  )
}

export { Todo }