import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Title = (props) => {
    return (
        <Fragment>
            <h1 className='text-warning display-3 mb-5'>{props.name} <span className="badge badge-secondary">V{props.version}</span></h1>
        </Fragment>
    )
}

Title.defaultProps = {
    name: 'Expenses Calculator',
    version: '1'
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
}

export default Title
