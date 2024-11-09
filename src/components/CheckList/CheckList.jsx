import {
  CheckBox,
  ElementLayout,
  Layout,
  ListLayout,
  Progress,
  Title,
  Todo,
} from 'src/components/CheckList/CheckList.styled'
import { ReactComponent as Border } from 'src/assets/checkListBorder.svg'

const CheckList = props => {
  const displayCheckList = props.checkList.map((todo, index) => (
    <ElementLayout
      key={index}
      onClick={() => {
        props.onClickTodo(props.type, todo.listId)
      }}
    >
      <CheckBox checked={todo.completed} />
      <Todo checked={todo.completed}>{todo.content}</Todo>
    </ElementLayout>
  ))

  const getProgress = () => {
    const total = props.checkList.length
    const checked = props.checkList.filter(todo => todo.completed === true).length
    return checked + ' / ' + total
  }

  return (
    <Layout>
      <Border />
      <Title>{props.type}</Title>
      <Progress>{getProgress()}</Progress>
      <ListLayout>{displayCheckList}</ListLayout>
    </Layout>
  )
}
export default CheckList
