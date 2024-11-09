import { commonAPI } from 'src/api/commonAPI'

export const getTodoList = async (auth, characterId) => {
  const response = await commonAPI.get('/api/v1/list', {
    params: { characterId: characterId },
    headers: { Authorization: auth },
  })
  return response.data
}

export const updateTodoList = async (auth, characterId, dailyList, weeklyList, monthlyList) => {
  const todoList = {
    dailyList: dailyList.map(({ content, completed }) => ({
      content,
      completed,
    })),
    weeklyList: weeklyList.map(({ content, completed }) => ({
      content,
      completed,
    })),
    monthlyList: monthlyList.map(({ content, completed }) => ({
      content,
      completed,
    })),
  }
  console.log(todoList)
  console.log(characterId)
  const response = await commonAPI.put('/api/v1/list', todoList, {
    params: { characterId: characterId },
    headers: { Authorization: auth },
  })
  return response.data
}

export const checkTodo = async (auth, type, todoId) => {
  const data = {
    type: type,
    listId: todoId,
  }
  console.log(auth)
  const response = await commonAPI.patch('api/v1/list', data, {
    headers: { Authorization: auth },
  })

  return response.data
}
