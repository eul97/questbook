import { Element, InnerLayout, Layout } from 'src/components/TripleButton/TripleButton.styled'
import { ReactComponent as MultiButton } from 'src/assets/multiButton.svg'
import { ReactComponent as Divider } from 'src/assets/buttonDivider.svg'

const TripleButton = props => {
  //TODO: Double 버튼과 합쳐서 멀티버튼으로 수정, 2개짜리 3개짜리 같이 받도록
  return (
    <Layout>
      <InnerLayout>
        <MultiButton />
      </InnerLayout>
      <InnerLayout>
        <Element onClick={props.onClickListButton}>목록</Element>
        <Divider />
        <Element onClick={props.onClickModifyButton}>수정</Element>
        <Divider />
        <Element onClick={props.onClickDeleteButton}>삭제</Element>
      </InnerLayout>
    </Layout>
  )
}

export default TripleButton
