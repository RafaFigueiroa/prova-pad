import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Todo } from '../../components/Todo'
import { AddTask } from '../../store/tasks'

import {Container, Header, HeaderText, Form, FormTitle, Input, SubmitButton, ButtonText} from './styles'

export function Home() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  
  const [content, setContent] = useState('')
  
  function createTodo() {
    dispatch(AddTask({ title: tasks.length, content }))
  }
  
  return (
    <Container>
      <Header>
        <HeaderText>Aplicativo ToDo list</HeaderText>
      </Header>

      <Form>
        <FormTitle>Adicione aqui uma tarefa</FormTitle>
        
        <Input placeholder="tarefa" onChangeText={(e) => setContent(e)} />

        <SubmitButton onPress={createTodo}>
          <ButtonText>ADICIONAR TAREFA</ButtonText>
        </SubmitButton>
      </Form>
      
      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {tasks.map(task => (
          <Todo key={task.id} task={task} />
        ))}
      </ScrollView>
    </Container>
  )
}