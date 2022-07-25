import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookComponent from './BookComponent'
import axios from "axios"
import { setProducts } from '../Redux/features/actions'

const ProductListing = () => {
  return (
    <div className='product_list'>
        <BookComponent />
    </div>
  )
}

export default ProductListing