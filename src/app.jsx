import { useEffect, useState } from 'preact/hooks'

import './app.css'

export function App() {

  const [timeLeft, setTimeLeft] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)

  let timeInterval = null
  let notification = null

  const logoutHandler = () => {
    if (timeInterval) clearInterval(timeInterval)
    if (notification) notification.close();

    setLoggedIn(false)
    new Notification('You have been logged out', {
      body: 'You have been successfully logged out',
      tag: 'logout',
    });
    document.removeEventListener('visibilitychange', visibilityChangeHandler);
    alert('You have been logged out')
  }

  const loginHandler = () => {
    setLoggedIn(true)
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        console.log('Notification permission granted.');
        new Notification('notification with Notification API', {
          body: 'This is the body text of the notification.',
        });
      }
    });
    alert('logged in');
    document.addEventListener('visibilitychange', visibilityChangeHandler);
  }


  const visibilityChangeHandler = (e) => {
    if (document.visibilityState === 'visible') {
      if (timeInterval) clearInterval(timeInterval)
      if (notification) notification.close()
      setTimeLeft(() => 0)
    } else {
      setTimeLeft(() => {
        const time = 15
        return time
      })
      timeInterval = setInterval(() => {
        setTimeLeft(timeLeft => {
          notification = new Notification('inactivity', {
            body: `You have been inactive for ${timeLeft} seconds`,
            tag: 'notify-inactivity'
          });
          console.log(timeLeft, 'timeleft')
          if (timeLeft <= 0) {
            logoutHandler()
          }
          return timeLeft - 1
        }
        )
      }, 1000);
    }
  }


  return (
    <div>
      <h1 >Logged {loggedIn ? 'In' : 'Out'}</h1>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}
