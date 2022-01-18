import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        {/* instead of a tag, use link to avoid page refresh */}
      {/* there are other parameters to add to Link to */}
      <Link to='/about'> 
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink