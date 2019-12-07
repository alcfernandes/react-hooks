import React, { useState, useEffect } from 'react'

function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)

    // Esse return é executado no unmount
    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords
    console.log(latitude, longitude)
    setLocation({ latitude, longitude })
  }

  return (
    <>
      Latidude: {location.latitude}
      <br />
      Longitude: {location.longitude}
    </>
  )
}

export default App
