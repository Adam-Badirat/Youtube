import React from 'react'

const Sidebar = () => {
  return (
    <>
     <aside className="sidebar">
      <nav>
        <div className="sidebar-item active">
          <p>Home</p>
        </div>

        <div className="sidebar-item">
          <p>Shorts</p>
        </div>

        <div className="sidebar-item">
          <p>Subscriptions</p>
        </div>

        <hr />

        <h4>You</h4>

        <div className="sidebar-item">
          <p>History</p>
        </div>

        <div className="sidebar-item">
          <p>Your videos</p>
        </div>

        <div className="sidebar-item">
          <p>Watch later</p>
        </div>

        <div className="sidebar-item">
          <p>Liked videos</p>
        </div>

        <hr />

        <h4>Explore</h4>

        <div className="sidebar-item">
          <p>Trending</p>
        </div>

        <div className="sidebar-item">
          <p>Music</p>
        </div>

        <div className="sidebar-item">
          <p>Gaming</p>
        </div>

        <div className="sidebar-item">
          <p>Sports</p>
        </div>
      </nav>
    </aside>
    </>
  )
}

export default Sidebar