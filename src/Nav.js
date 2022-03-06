
import  {useContext} from 'react'
import "./index.css"
import { BookContext } from './context/BookContext'


const Nav = () =>{
    const {books}=useContext(BookContext)
    return (
        <nav className="navbar">
            <h1 className="navbar-brand mx-auto ">Quincy Reading Lists
            <br/>
            <p>Currently you have {books.length} books</p>

            
             </h1>
        </nav>
    )
}

export default Nav
