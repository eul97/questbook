import {
  DeleteIcon,
  ElementLayout,
  Input,
  InputLayout,
  Layout,
  ListLayout,
  Progress,
  Title,
  Todo,
} from 'src/components/CheckListModify/CheckListModify.styled'
import { ReactComponent as Border } from 'src/assets/checkListBorder.svg'
import { useState } from 'react'

const CheckListModify = props => {
  const [todoInput, setTodoInput] = useState('')

  const displayCheckList = props.checkList.map((todo, index) => (
    <ElementLayout
      key={index}
      onClick={() => {
        onClickTodo(index)
      }}
    >
      <DeleteIcon />
      <Todo checked={false} title={todo.content}>
        {todo.content}
      </Todo>
    </ElementLayout>
  ))

  const handleInputChange = event => {
    setTodoInput(event.target.value)
  }

  const handleKeyDown = event => {
    if (event.key !== 'Enter' || todoInput === '') {
      return
    }
    let alreadyExist = false
    for (let i = 0; i < props.checkList.length; i++) {
      if (props.checkList[i].content === todoInput) {
        alreadyExist = true
        break
      }
    }

    if (alreadyExist) {
      alert('중복된 입력입니다.')
      return
    }
    const newTodo = {
      content: todoInput,
      completed: false,
      listId: null,
    }

    props.setCheckList([...props.checkList, newTodo])
    setTodoInput('')
  }

  const onClickTodo = removeIndex => {
    const updatedList = props.checkList.filter((item, index) => index !== removeIndex)
    props.setCheckList(updatedList)
  }

  return (
    <Layout>
      <Border />
      <Title>{props.type}</Title>
      <Progress>{props.checkList.length}</Progress>
      <ListLayout>
        <InputLayout>
          <Input
            placeholder={'할일 입력'}
            value={todoInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyDown}
            disabled={!props.characterSearchFlag}
            maxLength={30}
          />
        </InputLayout>
        {displayCheckList}
      </ListLayout>
    </Layout>
  )
}

export default CheckListModify
