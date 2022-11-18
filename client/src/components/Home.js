import React from 'react'
import '../scss/components/_home.scss'
import { Helmet } from 'react-helmet'
function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <div className='home-container'>Home</div>
    </>
  )
}

export default Home