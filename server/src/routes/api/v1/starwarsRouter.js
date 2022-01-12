import express from "express"
import fetch from "node-fetch"

const starwarsRouter = new express.Router()

const fetchStarwarsData = async () => {
  
  try {
    const response = await fetch("https://swapi.dev/api/people/")
    
    if (!response.ok) {
      const errorMessage = `${response.status} - ${response.statusText}`
      const error = new Error(errorMessage)
      throw error
    }
    
    const swData = await response.json()
    debugger
    return swData
    
  } catch (error) {
    debugger
    console.error(`Error in fetch: ${error}`)
  }
}

starwarsRouter.get("/", (req, res) => {
  debugger
  const swdata = fetchStarwarsData()
  res.status(201).json({banana: "banana"})
})

export default starwarsRouter
