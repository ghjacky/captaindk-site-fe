import axios from 'axios'
import { serviceAddr, apiPrefix } from '@/settings'

function request(path) {
  const serviceUrlPrefix = serviceAddr + apiPrefix
  return serviceUrlPrefix + path
}

export function adminLogin(loginForm) {
  // return new Promise()
  return axios.get('http://localhost:8080')
}

export function blogAddArticle(article) {
  return axios.post(request('/articles'), article)
}

export function fetchArticles(pageQuery) {
  return axios.get(request(
    `/articles?author=${pageQuery.author}&category=${pageQuery.category}&year=${pageQuery.year}&month=${pageQuery.month}&order_by=${pageQuery.order_by}&order_type=${pageQuery.order_type}&page=${pageQuery.page}&limit=${pageQuery.limit}`
  ))
}

export function removeFile(fid) {
  return axios.delete(request(`/files/remove/${fid}`))
}

export function fetchCategories(isTree) {
  return axios.get(request(`/categories?tree=${isTree}`))
}

export function deleteArticle(fid) {
  return axios.delete(request(`/articles/${fid}`))
}

export function addCategory(category) {
  return axios.post(request('/categories'), category)
}

export function updateCategory(category) {
  return axios.put(request('/categories'), category)
}

export function deleteCategory(cid) {
  return axios.delete(request(`/categories/${cid}`))
}
