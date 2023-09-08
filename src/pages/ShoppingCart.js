import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faStar } from '@fortawesome/free-solid-svg-icons'


const ShoppingCart = () => {
 
  
  return (
    <div><h1>ShoppingCart</h1>
    <FontAwesomeIcon icon="fa-regular fa-star" size="2xl" />
    <FontAwesomeIcon icon={faEnvelope} />
    <FontAwesomeIcon icon={faStar} />

    </div>
  )
}

export default ShoppingCart