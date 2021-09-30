import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask} from '../../store/tasks'

import { Container, Header, HeaderText, Task,Title,Content, ButtonDelete,ButtonEdit, ButtonsText } from './styles'

export function Todo({ route }) {
  const { task } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remove() {
    dispatch(DeleteTask(task.id))
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <HeaderText>Aplicativo ToDo list</HeaderText>
      </Header>
      
      <Task>
        <Title>Tarefa#{task.title}</Title>
        <Content>{task.content}</Content>
      </Task>

      <ButtonEdit>
        <ButtonsText>EDITAR TAREFA</ButtonsText>
      </ButtonEdit>

      <ButtonDelete onPress={remove}>
        <ButtonsText>REMOVER TAREFA</ButtonsText>
      </ButtonDelete>
    </Container>
  )
}