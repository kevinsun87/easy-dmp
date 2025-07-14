export const exceptionStatus = (status: number | string) => {
  let message = ''
  switch(status) {
    case 400:
      message = '请求错误'
      break
    case 401:
      message = '未授权'
      break
    case 403:
      message = '拒绝访问'
      break
    case 404:
      message = '请求不存在'
      break
    case 500:
      message = '服务器错误'
      break
    case 503:
      message = '服务器不可用'
      break
    default: 
      message = '连接出错'
  }

  return message
}