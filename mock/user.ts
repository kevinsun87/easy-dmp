import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/api/user',
    method: 'post',
    response: ({ body }) => {
      if (body.username !== body.password) {
        return {
          code: 1,
          message: '密码错误',
          data: {
            username: '',
            role: [],
            accessToken: ''
          }
        }
      }
      if (body.username === 'admin') {
        return {
          code: 0,
          message: '登录成功',
          data: {
            username: 'admin',
            roles: ['admin'],
            accessToken: 'admin'
          }
        }
      } else {
        return {
          code: 0,
          message: '登录成功',
          data: {
            username: 'common',
            roles: ['common'],
            accessToken: 'common'
          }
        }
      }
    }
  }
] as MockMethod[]