
import {useHits} from '../context/Hits'

const HitsList = () => {
  const hits = useHits()
  return (
    <>
    { hits.map((hit )=> (
      <ul>
        <li>Company Name: {hit.companyName.key} </li>
        <li>Contact Email: {hit.contactEmail} </li>
        <li>Job Title: {hit.jobTitle} </li>
        <li>Company Website {hit.companySite} </li>
        <li>Have you applied?  {hit.appliedYes ? "Yes" : "No"} </li>
      </ul>
    )) }
    </>
    
  );
}

export default HitsList