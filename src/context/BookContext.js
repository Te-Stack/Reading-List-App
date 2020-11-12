import React, {createContext,useState,useEffect} from 'react'
import {v1 as uuid} from 'uuid'

export const BookContext = createContext()
/*const bookReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_BOOK':
            return [
                ...state,{
                    title:action.book.title,
                    author:action.book.title,
                    id:uuid()
                }
            ]
        case 'REMOVE_BOOK':
            return state.filter(book=> book.id !== action.id)
        default:
            return state
    }
}*/

const BookContextProvider = (props)=>{
    const [books,setBooks]=useState(()=>{
        const localData = localStorage.getItem("books")
        return localData ? JSON.parse(localData): []
    })

    const addBook=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}])
    }
    const removeBook=id=>{
        setBooks(books.filter(book=>{
           return book.id!== id
        }))
    }

    useEffect(()=>{
        localStorage.setItem("books",JSON.stringify(books))

    },[books])

    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
