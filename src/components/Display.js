import {useEffect} from 'react'
import axios  from 'axios'



const Display = () => {

  useEffect(()=> {
    const fetchData = async () => {
      const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1")
      console.log(data.data.results)
    }
    fetchData()
  },[])

  return (
    <div>

    </div>
  )
}

export default Display
