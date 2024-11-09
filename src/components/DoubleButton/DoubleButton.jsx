import { ReactComponent as MultiButton } from 'src/assets/multiButton.svg'
import { Element, InnerLayout, Layout } from 'src/components/DoubleButton/DoubleButton.styled'
import { ReactComponent as Divider } from 'src/assets/buttonDivider.svg'

const DoubleButton = () => {
  return (
    <Layout>
      <InnerLayout>
        <MultiButton />
      </InnerLayout>
      <InnerLayout>
        <Element>초기화</Element>
        <Divider />
        <Element>불러오기</Element>
      </InnerLayout>
    </Layout>
  )
}

export default DoubleButton
