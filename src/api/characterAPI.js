import { commonAPI } from 'src/api/commonAPI'

export const getCharacterInfo = async (nickname, auth) => {
  const params = {
    nickname: nickname,
  }

  const headers = {
    Authorization: auth,
  }

  const response = await commonAPI.get('api/v1/character/nexon/info', {
    params: params,
    headers: headers,
  })

  return response.data
}

export const createCharacter = async (auth, characterInfo, dailyList, weeklyList, monthlyList) => {
  const params = {
    characterDto: characterInfo,
    checkList: {
      dailyList: dailyList.map(todo => todo.content),
      weeklyList: weeklyList.map(todo => todo.content),
      monthlyList: monthlyList.map(todo => todo.content),
    },
  }

  const response = await commonAPI.post('api/v1/character', params, {
    headers: {
      Authorization: auth,
    },
  })

  return response.data
}

export const getCharacterList = async auth => {
  const response = await commonAPI.get('api/v1/character', {
    headers: {
      Authorization: auth,
    },
  })
  return response.data
}

export const getCharacterDetail = async (auth, characterId) => {
  const response = await commonAPI.get('api/v1/character/' + characterId, {
    headers: {
      Authorization: auth,
    },
  })
  return response.data
}

export const deleteCharacter = async (auth, characterId) => {
  const response = await commonAPI.delete('api/v1/character/withdraw/' + characterId, {
    headers: {
      Authorization: auth,
    },
  })
  return response.data
}
