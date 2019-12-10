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
