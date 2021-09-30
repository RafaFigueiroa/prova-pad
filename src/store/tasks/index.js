export function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      const { task } = action.payload
      
      return [
        ...state,
        {
          id: new Date().toISOString(),
          ...task
        }
      ]
  
    case 'DELETE_TASK':
      const { task_id } = action.payload

      const filteredTask = state.filter(task => task.id !== task_id)

      return filteredTask

    default:
      return state
  }
}

export function AddTask(task) {
  return {
    type: 'ADD_TASK',
    payload: {
      task
    }
  }
}

export function DeleteTask(task_id) {
  return {
    type: 'DELETE_TASK',
    payload: {
      task_id
    }
  }
}