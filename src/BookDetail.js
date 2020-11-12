import React,{useContext} from 'react'
import { BookContext } from './context/BookContext'

const BookDetails=({book})=>{
    const {removeBook}= useContext(BookContext)
    return(
        <li onClick={()=>removeBook(book.id)}>
            <div  className="title list-group-item">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}

export default BookDetails
