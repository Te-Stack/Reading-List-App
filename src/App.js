import React from 'react'
import Booklist from './BookList';
import BookContextProvider from './context/BookContext';
import Nav from "./components/Nav"
function App() {
  return (
    <div>
      <BookContextProvider>
        <Nav/>
        <Booklist/>
        
      </BookContextProvider>

    </div>
  );
}

export default App;
