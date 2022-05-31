import request from '@/utils/request'

/**
 * 登录
 */

interface IResponseType<P = unknown> {
  code?: number
  status: number
  msg: string
  data: P
}

interface ILogin {
  token: string
  expires: number
}

export const login = (username: string, password: string) => {
  return request<IResponseType<ILogin>>({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
