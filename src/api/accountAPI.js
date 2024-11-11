import { commonAPI, getCharacterKeyHeaders } from 'src/api/commonAPI'

const headers = {
  Authorization: '',
}

export const singIn = async (email, password) => {
  const request = {
    email: email,
    password: password,
  }
  const response = await commonAPI.post('/api/v1/register', request, {
    headers,
  })

  return response.data
}

export const emailRegister = async email => {
  const request = {
    email: email,
  }
  const response = await commonAPI.post('api/v1/send-email', request, {
    headers,
  })

  return response.data
}

export const test = async () => {
  const headers = {
    Authorization: '',
  }
  const response = await commonAPI.get('api/v1/test', {
    headers,
  })

  return response.data
}

export const verifyEmail = async (email, code) => {
  const request = {
    email: email,
    code: code,
  }

  const response = await commonAPI.post('api/v1/verify-email', request)

  return response.data
}

export const login = async (email, password) => {
  const request = {
    email: email,
    password: password,
  }

  const response = await commonAPI.post('api/v1/login', request)

  return response.data
}

export const logout = async auth => {
  const response = await commonAPI.post(
    'api/v1/member/logout',
    {},
    {
      headers: {
        Authorization: auth,
      },
    },
  )

  return response.data
}

export const changePassword = async (password, newPassword, auth) => {
  const request = {
    password: password,
    changePassword: newPassword,
  }

  const headers = {
    Authorization: auth,
  }

  const response = await commonAPI.patch('api/v1/member/change-pwd', request, { headers })

  return response.data
}

export const initPassword = async auth => {
  const response = await commonAPI.patch('api/v1/member/reset-pwd', getCharacterKeyHeaders(auth))

  return response.data
}

//TODO: 계정 삭제
