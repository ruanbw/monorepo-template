import { requestClient } from '@/api/request'

import type { UserInfo } from '@lon/types'

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info')
}
