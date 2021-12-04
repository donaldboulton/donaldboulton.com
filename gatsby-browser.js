/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import './src/styles/global.css'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const shouldUpdateScroll = ({
  routerProps: { location, transitionDelay },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => {
      // console.log('scroll to top')
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // feel free to use or not
      })
    }, transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    const top = savedPosition[1]
    window.setTimeout(() => {
      // console.log('scroll to saved position')
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }, transitionDelay)
  }
  return false
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
