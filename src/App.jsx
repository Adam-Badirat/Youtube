import React from 'react'
import Sidebar from '../components/Sidebar'

const App = () => {
  return (
    <>
      <header className="header">
      <div className="logo">
        {/* <span className="youtube-icon">▶</span> */}
        <h2>YouTube</h2>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />

      <button className="search-button">Search</button>

      <div className="profile">A</div>
    </header>

    <Sidebar/>
    </>
  )
}

export default App