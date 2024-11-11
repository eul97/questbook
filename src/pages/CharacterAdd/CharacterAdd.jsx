import {
  ConfirmButtonLayout,
  Divider,
  Layout,
  TopLayout,
} from 'src/pages/CharacterAdd/CharacterAdd.styled'
import { CheckListModify, ModifyInfo, SingleButton } from 'src/components'
import { useEffect, useState } from 'react'
import { getAuthorization } from 'src/api/commonAPI'
import { createCharacter, getCharacterInfo } from 'src/api/characterAPI'
import { useNavigate } from 'react-router-dom'

const CharacterAdd = props => {
  const navigate = useNavigate()
  const [characterSearchFlag, setCharacterSearchFlag] = useState(false)
  const [characterNameInput, setCharacterNameInput] = useState('')
  const [characterInfo, setCharacterInfo] = useState()
  const [dailyList, setDailyList] = useState([])
  const [weeklyList, setWeeklyList] = useState([])
  const [monthlyList, setMonthlyList] = useState([])

  useEffect(() => {
    const loginToken = getAuthorization()
    if (loginToken === null) {
      alert('로그인 정보가 존재하지 않습니다.')
      navigate('/login')
    }
  }, [])
  const onClickSearchButton = () => {
    const loginToken = getAuthorization()
    if (loginToken === null) {
      alert('로그인 정보가 존재하지 않습니다.')
      navigate('/login')
    } else {
      getCharacterInfo(characterNameInput, loginToken)
        .then(data => {
          setCharacterInfo(data)
          setCharacterSearchFlag(true)
        })
        .catch(error => {
          console.log(error)
          alert('캐릭터명을 확인하세요!')
        })
    }
  }

  const onClickCancelButton = () => {
    if (window.confirm('작성중인 데이터는 사라집니다.\n정말 취소하시겠습니까?')) {
      navigate('/character')
    }
  }

  const onClickConfirmButton = () => {
    if (!characterSearchFlag) {
      alert('캐릭터를 입력해주세요')
      return
    }
    const auth = getAuthorization()

    createCharacter(auth, characterInfo, dailyList, weeklyList, monthlyList)
      .then(data => {
        alert('성공적으로 생성되었습니다.')
        navigate('/character')
      })
      .catch(error => {
        console.log(error)
        alert('캐릭터를 생성하지 못했습니다.')
      })
  }

  const onPressEnterOnCharacterSearchField = event => {
    console.log('keyDown : 엔터')
    if (event.key === 'Enter') {
      console.log('keyDown : 엔터')
      onClickSearchButton()
    }
  }

  return (
    <Layout>
      <TopLayout>캐릭터 등록</TopLayout>
      <ModifyInfo
        mode={'add'}
        characterNameInput={characterNameInput}
        setCharacterNameInput={setCharacterNameInput}
        onClickSearchButton={onClickSearchButton}
        characterInfo={characterInfo}
        characterSearchFlag={characterSearchFlag}
      />
      <Divider />
      <TopLayout>
        체크리스트
        {/*TODO: 기능 미구현으로 추후 보여주기*/}
        {/*<DoubleButton />*/}
      </TopLayout>
      <TopLayout>
        <CheckListModify
          type={'Daily'}
          characterSearchFlag={characterSearchFlag}
          checkList={dailyList}
          setCheckList={setDailyList}
        />
        <CheckListModify
          type={'Weekly'}
          characterSearchFlag={characterSearchFlag}
          checkList={weeklyList}
          setCheckList={setWeeklyList}
        />
        <CheckListModify
          type={'Monthly'}
          characterSearchFlag={characterSearchFlag}
          checkList={monthlyList}
          setCheckList={setMonthlyList}
        />
      </TopLayout>
      <ConfirmButtonLayout>
        <SingleButton type={'confirm'} onClick={onClickConfirmButton} />
        <SingleButton type={'cancel'} onClick={onClickCancelButton} />
      </ConfirmButtonLayout>
    </Layout>
  )
}

export default CharacterAdd
