import { ReactComponent as Border } from 'src/assets/border.svg'
import {
  ArrowLeft,
  ArrowRight,
  ArrowWrapper,
  BlurText,
  BorderLayout,
  ContentLayout,
  Detail,
  Layout,
  SlideLayout,
  Title,
} from 'src/pages/Home/Home.styled'
import { useState } from 'react'

const Home = () => {
  const [page, setPage] = useState(0)
  const totalPage = 3

  const display = () => {
    if (page === 0) {
      return (
        <ContentLayout>
          <BlurText>QuestBook 서비스 이용 안내</BlurText>
          <Title>메이플스토리 유저를 위한 체크리스트 서비스</Title>
          <Title>“게임을 즐기면서, 할 일도 잊지 마세요!”</Title>
          <Detail>
            저희 서비스는 메이플스토리를 즐기는 유저들을 위해 개발된 체크리스트 서비스입니다.
          </Detail>
          <Detail>
            메이플스토리에서 매일, 매주, 매월 반복되는 다양한 할 일을 체크리스트 형식으로 관리할 수
            있으며
          </Detail>
          <Detail>이를 통해 더욱 효율적이고 즐거운 게임 생활을 지원합니다.</Detail>
        </ContentLayout>
      )
    } else if (page === 1) {
      return (
        <ContentLayout>
          <BlurText>QuestBook 서비스 이용 안내</BlurText>
          <Title>주요 기능 설명</Title>
          <Detail>
            캐릭터 등록 : 메이플스토리 캐릭터를 등록하고, 그에 맞춰 할 일을 관리할 수 있습니다.
          </Detail>
          <Detail>
            3종류의 체크리스트 : 매일, 매주, 매월 반복되는 할 일을 종류별로 추가하고 체크할 수
            있습니다.
          </Detail>
          <Detail>
            주기적인 초기화: 각 할일은 주기가 지나면 자동으로 미완료로 변경됩니다. 사용자가 매번
            초기화할 필요가 없습니다.
          </Detail>
          <Detail>이력 보기(추가 예정) : 지금까지 할일 수행 이력을 확인할 수 있습니다.</Detail>
        </ContentLayout>
      )
    } else if (page === 2) {
      return (
        <ContentLayout>
          <BlurText>QuestBook 서비스 이용 안내</BlurText>
          <Title>피드백은 환영입니다</Title>
          <Detail>
            저희는 이 서비스를 그저 게임을 하면서 느낀 불편함을 기반으로 만든것이기에, 완벽하지 않을
            수 있습니다.
          </Detail>
          <Detail>
            사용 중에 불편함이 생기거나 기능상의 개선/추가가 됐으면 좋겠는 부분은 언제든
            말씀해주세요.
          </Detail>
          <Detail>피드백을 주신 점에 대해서는 최선을 다해 개선하려고 노력하겠습니다.</Detail>
          <Detail>
            여러분이 이 서비스를 통해 좀 더 편리하게 메이플스토리를 즐기실 수 있기를 바랍니다. 😊
          </Detail>
          <Detail>email : questbookservice@gmail.com</Detail>
        </ContentLayout>
      )
    }
  }

  const onClickLeftArrow = () => {
    setPage(page - 1)
  }

  const onClickRightArrow = () => {
    setPage(page + 1)
  }

  return (
    <Layout>
      <BorderLayout>
        <Border />
      </BorderLayout>
      <SlideLayout>
        <ArrowWrapper isVisible={page !== 0} onClick={onClickLeftArrow}>
          <ArrowLeft />
        </ArrowWrapper>
        {display()}
        <ArrowWrapper isVisible={page !== totalPage - 1} onClick={onClickRightArrow}>
          <ArrowRight />
        </ArrowWrapper>
      </SlideLayout>
    </Layout>
  )
}
export default Home
