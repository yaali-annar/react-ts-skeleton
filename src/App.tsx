import React, { FC, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Routes from '@routes/index'
import globalStyle from '@styles/globalStyle'

const App: FC = () => { 
  useEffect(() => {
    const loadingOverlay = window.document.getElementById('loading-overlay')
    if (!loadingOverlay) {
      return
    }
    loadingOverlay.parentNode.removeChild(loadingOverlay)
  }, [])

  return (
  <HelmetProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className={globalStyle}>
    <Routes />
    </div>
  </HelmetProvider>
)}

export default App
