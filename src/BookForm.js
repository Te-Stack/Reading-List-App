import React, {useContext, useState}from 'react'
import { BookContext } from './context/BookContext'

const NewBookForm = ()=>{
   const {addBook} = useContext(BookContext)
   const [title, setTitle]=useState("")
   const [author,setAuthor]=useState("")

   const handleSubmit=(e)=>{
       e.preventDefault()
       addBook(title,author)
       setTitle("")
       setAuthor("")
       
   }
   return(
       <form className="form-group " onSubmit={handleSubmit}>
           <input className="form-control" type="text" placeholder="Book Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
           <br/>
           <input className="form-control" type="text" placeholder="Author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
           <br/>
           <input className="btn btn-primary" type="submit" value="add book"/>
       </form>
   )
}

export default NewBookForm
