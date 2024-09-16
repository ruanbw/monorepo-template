import { authenticateResponseInterceptor, errorMessageResponseInterceptor, RequestClient } from '@lon/request'

const apiURL = ''

function createRequestClient(baseURL: string) {
  const client = new RequestClient({
    baseURL,
  })

  /**
   * 重新认证逻辑
   */
  async function doReAuthenticate() {
    console.warn('Access token or refresh token is invalid or expired. ')
  }

  /**
   * 刷新token逻辑
   */
  async function doRefreshToken() {
    return new Promise<string>().then('ok')
  }

  function formatToken(token: null | string) {
    return token ? `Bearer ${token}` : null
  }

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async (config) => {
      config.headers.Authorization = formatToken('accessStore.accessToken')
      config.headers['Accept-Language'] = 'zh-CN'
      return config
    },
  })

  // response数据解构
  client.addResponseInterceptor({
    fulfilled: (response) => {
      const { data: responseData, status } = response

      const { code, data, message: msg } = responseData
      if (status >= 200 && status < 400 && code === 0) {
        return data
      }
      throw new Error(`Error ${status}: ${msg}`)
    },
  })

  // token过期的处理
  client.addResponseInterceptor(
    authenticateResponseInterceptor({
      client,
      doReAuthenticate,
      doRefreshToken,
      enableRefreshToken: preferences.app.enableRefreshToken,
      formatToken,
    }),
  )

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(
    errorMessageResponseInterceptor((msg: string) => message.error(msg)),
  )

  return client
}

export const requestClient = createRequestClient(apiURL)

export const baseRequestClient = new RequestClient({ baseURL: apiURL })
