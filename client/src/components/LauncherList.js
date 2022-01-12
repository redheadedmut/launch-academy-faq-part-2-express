import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LauncherList = props => {
  const [launchers, setLaunchers] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      if (!response.ok) {
        const error = new Error(`${response.status} - ${response.statusText}`)
        throw error
      }

      const launchersData = await response.json()
      setLaunchers(launchersData.launchers)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const launcherList = launchers.map(launcher => {
    // return <li key={launcher.id}>{launcher.name}</li>
    return (
      <Link key={launcher.id} to={`/launchers/${launcher.id}`}>
        <li>{launcher.name}</li>
      </Link>
    )
  })

  return (
    <div>
      <h1>Launcher List</h1>
      <ul className='launcher-list'>{launcherList}</ul>
    </div>
  )
}

export default LauncherList
