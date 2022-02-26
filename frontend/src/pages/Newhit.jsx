import { useState, useContext } from 'react';
import { useHitsDispatch } from '../context/Hits';
import { useNavigate} from 'react-router-dom'

export default function AddHit() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    jobTitle: '',
    companySite: '',
    appliedYes: false
  });

  const dispatch = useHitsDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    dispatch({
      type: 'addHit',
      newHit: formData
    })
    navigate('/hits')
  };

  const handleReset = () => {
      // clear the form
    setFormData({
        companyName: '',
        contactEmail: '',
        jobTitle: '',
        companySite: '',
        appliedYes: false
      });
  }

  return (
    <>
      <form>
      <div>
        <label>
          Company Name:
          <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange}/>
        </label>
      
      </div>
      <div>
        <label htmlFor="email" >Contact Email: </label>
        <input type="email" name="contactEmail" placeholder="Contact Email" onChange={handleChange}/>

      </div>

      <div>
        <label>
          Job Title:
          <input type="text" name="jobTitle" placeholder='Job Title' onChange={handleChange} />
        </label>
      
      </div>
      <div>
        <label>
          Company Website:
          <input type="text" name="companySite" placeholder="Company Site" onChange={handleChange}/>
        </label>
      
      </div>

      <div>
        <label>Did you Apply?</label>
        <input type="checkbox" name="appliedYes" onChange={handleChange}/>

      </div>
      <button
        type="button"
        onClick={handleReset}

        className="btn btn-reverse btn-block bambi"
      >
        Reset
      </button>
      <button className="btn btn-block bambi"type="submit" onClick={handleSubmit}>
        Submit
      </button>
      </form>
    </>
  )
}