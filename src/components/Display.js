import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./animals";
import '../App.css';
import { Loader } from "./Loader";



const Display = () => {
  const dispatch = useDispatch()
  const animals = useSelector((state) => state.animals.animals.animalDescription)
  const loading = useSelector((state) => state.animals.animals.isLoading)
useEffect(() => {
  dispatch(fetchData())
}, [])


  return (
    <div>
  
{ loading ? <Loader/> : 
animals?.map(animal => {
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