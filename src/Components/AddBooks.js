import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddBooks = () => {
  const navigate = useNavigate()
  const[book, setBook] = useState({
    bname: '',
    author: '',
    student: '',
    dateOfBorrowed: '',
    dateOfReturn: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value

    setBook({
        ...book,
        [name]: val
    })
  }

  const submitData = async(e) => {
    const {bname, author, student, dateOfBorrowed, dateOfReturn} = book
    e.preventDefault()
    console.log(book)
    try {
        const result = await fetch("/add_books", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({bname, author, student, dateOfBorrowed, dateOfReturn})
        })
        const data = await result.json()
        console.log(data)
        alert("Book borrowed successfully...")
        navigate('/')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='add_books'>
        <h1>Add Book Details</h1>
        <form>
            <div className="form_input">
                <label>Book Name</label>
                <input type="text" name='bname' value={book.bname} onChange={handleChange} required/>
            </div>
            <div className="form_input">
                <label>Author</label>
                <input type="text" name='author' value={book.author} onChange={handleChange} required/>
            </div>
            <div className="form_input">
                <label>Student Name</label>
                <input type="text" name='student' value={book.student} onChange={handleChange} required/>
            </div>
            <div className="form_input">
                <label>Date Borrowed</label>
                <input type="date" name='dateOfBorrowed' onChange={handleChange} required/>
            </div>
            <div className="form_input">
                <label>Date to Return</label>
                <input type="date" name='dateOfReturn' onChange={handleChange} required/>
            </div>
            <button onClick={submitData}>Submit</button>
        </form>
    </div>
  )
}

export default AddBooks