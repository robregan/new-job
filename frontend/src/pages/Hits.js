
import {useHits} from '../context/Hits'


const Hits = () => {
 const hits = useHits()


  console.log(hits)
  console.log(hits[0].companyName)
  return (

    
    <div className="container">
      <h1> My current hits </h1>
      
    { hits.map((hit, i )=> (
      <ul>
        <li>Company Name: {hit.companyName} </li>
        <li>Contact Email: {hit.contactEmail} </li>
        <li>Job Title: {hit.jobTitle} </li>
        <li>Company Website {hit.companySite} </li>
        <li>Have you applied?  {hit.appliedYes ? "Yes" : "No"} </li>
      </ul>
    )) }
    
    </div>
  )
}

export default Hits

