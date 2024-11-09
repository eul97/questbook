import {
  BlurText,
  Layout,
  ListLayout,
  TopLayout,
} from 'src/pages/CharacterSelect/CharacterSelect.styled'
import { ReactComponent as AddButton } from 'src/assets/addButton.svg'
import { Summary } from 'src/components'
import { useEffect, useState } from 'react'
import { getCharacterList } from 'src/api/characterAPI'
import { useNavigate } from 'react-router-dom'
import { getAuthorization } from 'src/api/commonAPI'

const CharacterSelect = props => {
  const [characterList, setCharacterList] = useState([])
  const navigate = useNavigate()

  const updateCharacterList = () => {
    console.log('called!')
    const loginToken = getAuthorization()
    if (loginToken === null) {
      alert('로그인 정보가 존재하지 않습니다.')
      props.setLoginState(false)
      navigate('/login')
    } else {
      getCharacterList(loginToken).then(data => {
        console.log(data)
        setCharacterList(data)
      })
    }
  }

  useEffect(() => {
    updateCharacterList()
  }, [])

  const onClickAddCharacterButton = () => {
    console.log('onClickAddCharacterButton')
    navigate('/add')
  }

  const onClickSummary = characterId => {
    console.log('CharacterSelect : onClickSummary! ' + characterId)
    navigate('/detail', {
      state: {
        characterId: characterId,
      },
    })
  }

  const displayCharacterList = characterList.map((character, index) => (
    <Summary character={character} key={index} type={'select'} onClickSummary={onClickSummary} />
  ))

  //TODO: 실제 데이터 입력 후 삭제
  const character = {
    nickname: '이름',
    world: '엘리시움',
    level: '250',
    job: '직업',
    dailyRate: '50',
    weeklyRate: '75',
    monthlyRate: '100',
    type: 'select',
  }

  return (
    <Layout>
      <TopLayout>
        <BlurText>캐릭터 선택</BlurText>
        <AddButton cursor={'pointer'} onClick={onClickAddCharacterButton} />
      </TopLayout>
      <ListLayout>{displayCharacterList}</ListLayout>
    </Layout>
  )
}
export default CharacterSelect
