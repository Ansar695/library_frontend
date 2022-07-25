import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const BookDetails = () => {
  const id = useParams()
  const[book, setBook] = useState()

  const getBooks = async(e) => {
    try {
        const result = await fetch("/get_book", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({_id:id.id})
        })
        const data = await result.json()
        setBook(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className='details_main'>
        <div className="card_wrapper">
              <div className="left">
                <img src="/book.png" alt="" />
              </div>
              <div className="right">
                <div className="details">
                  {book&& (
                    <>
                      <h2>{book.bname}</h2>
                      <p><strong>Author: </strong>{book.author}</p>
                      <p><strong>Borrowed By:</strong>{book.student}</p>
                      <p><strong>Date Of Borrow: </strong>{book.dateOfBorrowed}</p>
                      <p><strong>Date Of Return: </strong>{book.dateOfReturn}</p>
                    </>
                  )}
                </div>
                <NavLink to="/" className="navlink">Back To Records</NavLink>
            </div>
        </div>
    </div>
  )
}

export default BookDetails