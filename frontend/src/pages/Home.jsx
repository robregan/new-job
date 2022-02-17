import { Link } from 'react-router-dom'
import { FaRegPlusSquare, FaRegListAlt } from 'react-icons/fa'


function Home() {
  return (
    <>
      <section className='heading'>
        <h1 className="text-white">Lets git it!</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-hit' className='btn btn-reverse btn-block wutang'>
        <FaRegPlusSquare /> Create New Hit
      </Link>

      <Link to='/hits' className='btn btn-block wutang'>
        <FaRegListAlt /> View My Hitlist
      </Link>
    </>
  )
}

export default Home