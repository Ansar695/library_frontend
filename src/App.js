import { useSelector, useDispatch } from 'react-redux'
import Header from './Components/Header'
import {NavLink, Routes, Route} from "react-router-dom"
import BookList from "./Components/BookList"
import AddBooks from './Components/AddBooks'
import BookDetails from "./Components/BookDetails"
import UpdateBook from './Components/UpdateBook'


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <Header />
          <BookList />
        </>}/>
        <Route path='/add-books' element={<>
          <Header />
          <AddBooks />
        </>} />
        <Route path='/book-details/:id' element={<>
          <Header />
          <BookDetails />
        </>} />
        <Route path='/update-book/:id' element={<>
          <Header />
          <UpdateBook />
        </>} />
      </Routes>
    </> 
  )
}

export default App