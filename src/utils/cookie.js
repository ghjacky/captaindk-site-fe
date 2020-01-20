import Cookies from 'js-cookie'

export function setNavBarActiveIndex(index) {
  Cookies.set('NavBarActiveIndex', index)
}

export function getNavBarActiveIndex() {
  return Cookies.get('NavBarActiveIndex')
}

export function removeNavBarActiveIndex() {
  return Cookies.remove('NavBarActiveIndex')
}

export function setAdminSidebarActiveIndex(index) {
  Cookies.set('AdminSidebarActiveIndex', index)
}

export function getAdminSidebarActiveIndex() {
  return Cookies.get('AdminSidebarActiveIndex')
}

export function removeAdminSidebarActiveIndex() {
  return Cookies.remove('AdminSidebarActiveIndex')
}
