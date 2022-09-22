import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import axios  from 'axios'
import { addAnimals } from './animals'
import '../App.css';


const Display = () => {

  const animals = useSelector((state) => state.animals.animals.animalDescription)
  const dispatch = useDispatch()


  useEffect(()=> {
    const fetchData = async () => {
      const data = await axios.get(("https://zoo-animal-api.herokuapp.com/animals/rand/10"))
      dispatch(addAnimals(data.data))
    }
    fetchData()
  },[])
 

  return (
    <div>
{ animals.map(animal => {
   const img = animal.image_link
    return(
        <div className='span' key={animal.id}>
            <h1>Name: {animal.name}</h1>
            <h2>Type: {animal.animal_type}</h2>
            <h3>Diet: {animal.diet}</h3>
            <img id='img' src={img} alt='slika'></img>
        </div>
    )
} )}
    </div>
  )
}

export default Display
