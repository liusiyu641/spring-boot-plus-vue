import request from '@/utils/request'

const sysUserApi = {

}

/**
 * 获取系统用户分页列表
 * @param data
 * @returns {AxiosPromise}
 */
sysUserApi.getPageList = data => {
  return request({
    url: '/sysUser/getPageList',
    method: 'post',
    data
  })
}

/**
 * 系统用户详情
 * @param data
 * @returns {AxiosPromise}
 */
sysUserApi.detail = id => {
  return request({
    url: '/sysUser/info/' + id,
    method: 'get'
  })
}

/**
 * 新增系统用户
 * @param data
 * @returns {AxiosPromise}
 */
sysUserApi.add = data => {
  return request({
    url: '/sysUser/add',
    method: 'post',
    data
  })
}

/**
 * 修改系统用户
 * @param data
 * @returns {AxiosPromise}
 */
sysUserApi.update = data => {
  return request({
    url: '/sysUser/update',
    method: 'post',
    data
  })
}

/**
 * 修改系统用户
 * @param data
 * @returns {AxiosPromise}
 */
sysUserApi.delete = id => {
  return request({
    url: '/sysUser/delete/' + id,
    method: 'post'
  })
}

export default sysUserApi
