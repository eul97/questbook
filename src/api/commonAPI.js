import axios from 'axios'

export const commonAPI = axios.create({
  headers: {
    Authorization: '',
  },
})

export const getAuthorization = () => {
  const key = sessionStorage.getItem('loginToken')
  if (key === null || key === '') {
    return null
  }
  return key
}

export const getCharacterKeyHeaders = auth => {
  return {
    'Content-Type': 'application/json',
    Authorization: auth,
  }
}
