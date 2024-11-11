import {
  ConfirmButtonLayout,
  Divider,
  Layout,
  TopLayout,
} from 'src/pages/CharacterModify/CharacterModify.styled'
import { CheckListModify, ModifyInfo, SingleButton } from 'src/components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAuthorization } from 'src/api/commonAPI'
import { getCharacterDetail } from 'src/api/characterAPI'
import { getTodoList, updateTodoList } from 'src/api/todoAPI'

const CharacterModify = props => {
  //TODO: 추가모드, 수정모드에 따라서 view 약간 변경
  // border 크기 동적으로 설정되도록
  const [characterInfo, setCharacterInfo] = useState()
  const [dailyList, setDailyList] = useState(null)
  const [weeklyList, setWeeklyList] = useState(null)
  const [monthlyList, setMonthlyList] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const characterId = location.state.characterId || null

  useEffect(() => {
    const loginToken = getAuthorization()
    if (loginToken === null) {
      alert('로그인 정보가 존재하지 않습니다.')
      navigate('/login')
      return
    }

    if (characterId === null) {
      alert('잘못된 접근입니다.')
      navigate('/character')
      return
    }

    getCharacterDetail(loginToken, characterId)
      .then(data => {
        setCharacterInfo(data)
      })
      .catch(error => {
        alert('캐릭터 정보를 불러오지 못했습니다.')
        navigate('/character')
      })

    getTodoList(loginToken, characterId)
      .then(data => {
        setDailyList(data.dailyList)
        setWeeklyList(data.weeklyList)
        setMonthlyList(data.monthlyList)
      })
      .catch(error => {
        console.log(error)
        alert('체크리스트를 불러오지 못했습니다.')
        navigate('/character')
      })
  }, [])

  const onClickConfirmButton = () => {
    if (!window.confirm('정말 수정하시겠습니까?')) {
      return
    }
    const loginToken = getAuthorization()
    updateTodoList(loginToken, characterId, dailyList, weeklyList, monthlyList)
      .then(data => {
        alert('성공적으로 수정되었습니다.')
        navigate('/detail', {
          state: {
            characterId: characterId,
          },
        })
      })
      .catch(error => {
        console.log(error)
        alert('수정에 실패하였습니다.')
      })
  }

  const onClickCancelButton = () => {
    if (window.confirm('작성중인 데이터는 사라집니다.\n정말 취소하시겠습니까?')) {
      navigate('/detail', {
        state: {
          characterId: characterId,
        },
      })
    }
  }

  return (
    <Layout>
      <TopLayout>캐릭터 수정</TopLayout>
      {characterInfo && <ModifyInfo mode={'modify'} characterInfo={characterInfo} />}
      <Divider />
      <TopLayout>
        체크리스트
        {/*TODO: 체크리스트 불러오기 기능*/}
        {/*<DoubleButton />*/}
      </TopLayout>
      <TopLayout>
        {dailyList && (
          <CheckListModify
            type={'Daily'}
            checkList={dailyList}
            characterSearchFlag={true}
            setCheckList={setDailyList}
          />
        )}
        {weeklyList && (
          <CheckListModify
            type={'Weekly'}
            checkList={weeklyList}
            characterSearchFlag={true}
            setCheckList={setWeeklyList}
          />
        )}
        {monthlyList && (
          <CheckListModify
            type={'Monthly'}
            checkList={monthlyList}
            characterSearchFlag={true}
            setCheckList={setMonthlyList}
          />
        )}
      </TopLayout>
      <ConfirmButtonLayout>
        <SingleButton type={'confirm'} onClick={onClickConfirmButton} />
        <SingleButton type={'cancel'} onClick={onClickCancelButton} />
      </ConfirmButtonLayout>
    </Layout>
  )
}
export default CharacterModify
