import React,{useContext} from 'react'
import { BookContext } from './context/BookContext'
import BookDetails from "./BookDetail"
import NewBookForm from './BookForm'

const Booklist =()=>{
    const {books}=useContext(BookContext)
    return books.length ?(
        <div className="list container mt-5">
            <div className="row">
                <div className="col-xl-6 col-sm-6 col-lg-6">
                    <ul>
                        {books.map(book=>{
                            return (<BookDetails book={book} key ={book.id}/>)
                        })}
                    </ul>
                </div>
                <div className="col-xl-6 col-sm-6 col-lg-6">
                    <NewBookForm/>
                </div>
            </div>
        </div>

    ): (

        <div className=" mt-5 container">
            <div className="row">
                <div className=" empty col-xl-6 col-sm-6 col-lg-6">
                No books to read . Hello Free Day:)
                </div>
                <div className="col-xl-6 col-sm-6 col-lg-6">
                <NewBookForm/>
                </div>
            </div>
            
        </div>
    )
}

export default Booklist