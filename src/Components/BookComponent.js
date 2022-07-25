import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const ProductComponent = () => {
    const navigate = useNavigate();
    const[books, setBooks] = useState()
    const getBooks = async(e) => {
        try {
            const result = await fetch("/get_books", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
                credentials: "include"
            })
            const data = await result.json()
            setBooks(data)
        } catch (error) {
            console.log(error)
        }
      }

      const navigateToDetails = (e) => {
        const id = e.target.id;
        navigate(`book-details/${id}`)
      } 

      const deleteRecord = async(e) => {
        const id = e.target.id
        console.log(id)
        let confirmDel = window.confirm("Are You Sure")
        try {
            if(confirmDel){
                const result = await fetch("/delete_book", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({id})
                })
                const data = await result.json()
                getBooks()
            }
        } catch (error) {
            console.log(error)
        }
      }

      const updateRecord = async(e) => {
        const id = e.target.id
        navigate(`/update-book/${id}`)
      }

      useEffect(() => {
        getBooks()
      }, [])

  return (
    <div className='booksList'>
      <h1>Books List</h1>
        <NavLink to='/add-books' className='navlink'><button>Borrow Books</button></NavLink>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Student Name</th>
                        <th>Date of Borrow</th>
                        <th>Date of Return</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books&&books.map((book) => (
                        <>
                            <tr>
                                <td>{book.bname}</td>
                                <td>{book.author}</td>
                                <td>{book.student}</td>
                                <td>{book.dateOfBorrowed}</td>
                                <td>{book.dateOfReturn}</td>
                                <td>
                                    <button id={book._id} onClick={navigateToDetails}>View</button>
                                    <button className='btn2' id={book._id} onClick={deleteRecord}>Delete</button>
                                    <button className='btn3' id={book._id} onClick={updateRecord}>Update</button>
                                </td>
                            </tr>  
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductComponent