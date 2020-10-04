import moment from 'moment'
import React from 'react'

function Notifications({notifications}) {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            {notifications && notifications.map(notification => (
              <li key={notification.id} style={{marginTop: 24}}>
                <span className="indigo-text">{notification.user}</span>
                <span> {notification.content}</span>
                <div className="grey-text note-date">
                  {moment(notification.time.toDate()).fromNow()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
