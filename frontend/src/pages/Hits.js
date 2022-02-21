import Newhit from './Newhit'
import {useState} from 'react'



const Hits = () => {
  
 const [formData, updateFormData] = useState([])


  const addHit = newHit => {
   updateFormData(...formData, newHit)
 }
 
console.log(addHit)
  return (
    <div className="container">
   <p>  {formData.companyName} </p>
    </div>
  )
}

export default Hits

