// this helps to specify type
import PropTypes from 'prop-types'


function Header({text}) {
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

// put in possible scenario when no props are passed to the component
Header.defaultProps = {
    text:'Feedback UI'
}

// this is optional and deprecated if using typescript
Header.propTypes = {
    text: PropTypes.string
}

export default Header

