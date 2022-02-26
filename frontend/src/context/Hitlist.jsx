import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Newhit = () => {
  const [formData, setFormData] = useState('');
  const navigate = useNavigate()

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
    
   setFormData({
     ...formData
   })
  navigate('/hits')
  };

  const handleReset = () => {
      // clear the form
  }

};
export default Newhit