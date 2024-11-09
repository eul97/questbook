import {
  Button,
  InnerLayout,
  InputLayout,
  LabelLayout,
  Layout,
  TextLayout,
} from 'src/components/ModifyInfo/ModifyInfo.styled'
import { ReactComponent as ModifyBorder } from 'src/assets/modifyBorder.svg'

const ModifyInfo = props => {
  const onChangeCharacterNameInput = e => {
    props.setCharacterNameInput(e.target.value)
  }

  const onPressEnter = event => {
    if (event.key === 'Enter') {
      props.onClickSearchButton()
    }
  }

  const displaySearch = () => (
    <InnerLayout>
      <TextLayout>캐릭터명</TextLayout>
      <InputLayout
        value={props.characterNameInput}
        onChange={onChangeCharacterNameInput}
        onKeyDown={onPressEnter}
      ></InputLayout>
      <Button onClick={props.onClickSearchButton}>검색</Button>
    </InnerLayout>
  )

  const displayNormal = () => (
    <InnerLayout>
      <TextLayout>캐릭터명</TextLayout>
      <LabelLayout>{props.characterInfo.nickname}</LabelLayout>
      <TextLayout>레벨</TextLayout>
      <LabelLayout>{props.characterInfo.level}</LabelLayout>
      <TextLayout>월드</TextLayout>
      <LabelLayout>{props.characterInfo.world}</LabelLayout>
      <TextLayout>직업</TextLayout>
      <LabelLayout>{props.characterInfo.job}</LabelLayout>
    </InnerLayout>
  )

  return (
    <Layout>
      <ModifyBorder />
      <InnerLayout>
        {props.mode === 'add' && !props.characterSearchFlag ? displaySearch() : displayNormal()}
      </InnerLayout>
    </Layout>
  )
}
export default ModifyInfo
