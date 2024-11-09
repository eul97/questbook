import axios from 'axios'

const apiUrl = process.env.REACT_APP_COMMON_API_URL
export const commonAPI = axios.create({
  headers: {
    Authorization: '',
  },
  baseURL: apiUrl,
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
