
import {useHits} from '../context/Hits'


const Hits = () => {
 const hits = useHits()

  console.log(hits)

  return (

    
    <div className="container">
   <p>  {hits} </p>
    </div>
  )
}

export default Hits

