import React, { useState, useEffect } from "react"

const ShowLauncher = (props) => {
  const [launcher, setLauncher] = useState({ name: "", bio: "" })
  const id = props.match.params.id

  const fetchLauncher = async () => {
    try {
      const response = await fetch(`/api/v1/launchers/${id}`)
      if (!response.ok) {
        const error = new Error(`${response.status} - ${response.statusText}`)
        throw error
      }

      const launcherData = await response.json()
      setLauncher(launcherData.launcher)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLauncher()
  }, [])

  return (
    <div>
      <p> Name: {launcher.name}</p>
      <p> Bio: {launcher.bio}</p>
    </div>
  )
}

export default ShowLauncher
