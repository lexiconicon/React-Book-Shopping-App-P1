/* Receive the list of books as a prop, displaying each book with a static add to cart button */
import React from 'react'
import BookCard from './BookCard'
/* passing in books prop from BookCard so that each card in the list is filled with the 
books from BooksData */
function BookList({books}) {
  return (
    <div className='row'>
      {books.map((book) => (
        <div className='col-6 col-med-4' key={book.id}>
        <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
        />
        </div>
      ))}
    </div>
  )
}

export default BookList
