import React, { useState, useEffect }  from "react";

const StarwarsShow = props => {
  const [swCharacters, setSwCharacters] = useState([]);

  const fetchStarwars = async () =>{
    try {
      const response = await fetch(`/api/v1/space`)
      if(!response.ok){
        const errorMessage = `${response.status} - ${response.statusText}`
        const error = new Error(errorMessage)
        throw error;
      }
      const fetchedData = await response.json();
      debugger
      setSwCharacters(fetchedData)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() =>{
    fetchStarwars();
  }, [])


  return(
    <h1>StarwarsShow</h1>
  )
}

export default StarwarsShow