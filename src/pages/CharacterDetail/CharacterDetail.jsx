import { Layout, TopLayout } from 'src/pages/CharacterDetail/CharacterDetail.styled'
import { CheckList, Summary, TripleButton } from 'src/components'
import { useEffect, useState } from 'react'
import { getAuthorization } from 'src/api/commonAPI'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteCharacter, getCharacterDetail } from 'src/api/characterAPI'
import { checkTodo, getTodoList } from 'src/api/todoAPI'

const CharacterDetail = props => {
  const [character, setCharacter] = useState(null)
  const [dailyList, setDailyList] = useState(null)
  const [weeklyList, setWeeklyList] = useState(null)
  const [monthlyList, setMonthlyList] = useState(null)
  const [updateStateFlag, setUpdateStateFlag] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const characterId = location.state.characterId || null

  useEffect(() => {
    updateDetail()
  }, [updateStateFlag])

  const updateDetail = () => {
    const loginToken = getAuthorization()
    if (loginToken === null) {
      alert('로그인 정보가 존재하지 않습니다.')
      props.setLoginState(false)
      navigate('/login')
      return
    }

    if (characterId === null) {
      alert('잘못된 접근입니다.')
      navigate('/character')
      return
    }

    console.log('updateList 호출')
    getTodoList(loginToken, characterId)
      .then(data => {
        setDailyList(data.dailyList)
        setWeeklyList(data.weeklyList)
        setMonthlyList(data.monthlyList)
        console.log(dailyList)
      })
      .catch(error => {
        console.log(error)
        alert('체크리스트를 불러오지 못했습니다.')
      })

    getCharacterDetail(loginToken, characterId)
      .then(data => {
        setCharacter(data)
        console.log(data)
      })
      .catch(error => {
        console.log(error)
        alert('캐릭터 정보를 불러오지 못했습니다.')
      })
  }

  const clickCheckTodo = (type, listId) => {
    const loginToken = getAuthorization()
    checkTodo(loginToken, type, listId)
      .then(() => {
        console.log('체크리스트 선택')
        setUpdateStateFlag(!updateStateFlag)
      })
      .catch(error => {
        console.log(error)
        alert('체크리스트 선택에 실패하였습니다.')
      })
  }

  const onClickListButton = () => {
    navigate('/character')
  }

  const onClickModifyButton = () => {
    navigate('/modify', {
      state: {
        characterId: characterId,
      },
    })
  }

  const onClickDeleteButton = () => {
    if (window.confirm('정말로 삭제하시겠습니까?\n삭제된 정보는 복구되지 않습니다')) {
      deleteCharacter(getAuthorization(), characterId)
        .then(data => {
          alert('성공적으로 삭제되었습니다.')
          navigate('/character')
        })
        .catch(error => {
          console.log(error)
          alert('캐릭터 삭제에 실패했습니다.')
        })
    }
  }

  return (
    <Layout>
      <TopLayout>
        캐릭터 정보
        <TripleButton
          onClickDeleteButton={onClickDeleteButton}
          onClickModifyButton={onClickModifyButton}
          onClickListButton={onClickListButton}
        />
      </TopLayout>
      {character && <Summary character={character} type={'detail'} />}
      <TopLayout>
        {dailyList && (
          <CheckList type={'Daily'} onClickTodo={clickCheckTodo} checkList={dailyList} />
        )}
        {weeklyList && (
          <CheckList type={'Weekly'} onClickTodo={clickCheckTodo} checkList={weeklyList} />
        )}
        {monthlyList && (
          <CheckList type={'Monthly'} onClickTodo={clickCheckTodo} checkList={monthlyList} />
        )}
      </TopLayout>
    </Layout>
  )
}

export default CharacterDetail
