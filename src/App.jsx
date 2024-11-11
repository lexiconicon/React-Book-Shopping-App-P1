/* importing all necessary files and components */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './BookList'
import booksData from './BooksData'
import BookCart from './BookCart'
import Header from './Header'


function App() {
/* this is the main function for my project that sets up the organization */
  return (
  <div className='container'> {/* using JSX to set up the organization of the project */}
    <Header /> {/* header component */}
    <div className='row section-container'>
      {/* contains the main shop section with avail. book selection */}
      <div className='col-8 shop-container'>
          <BookList books={booksData}/> {/* passing in BookList component with booksData prop */}
      </div>
      <div className='col cart-container border'>
        {/* contains cart section of project */}
        <div className='col card-div'>
          <BookCart /> {/* BookCart component showing books in customer cart */}
        </div>
        <div className='button-div d-flex gap-3'>
          {/* contains buttons for eventual Update & Delete capabilities */}
          <button className='btn btn-danger'>Remove Book</button>
          <button className ='btn btn-primary'>Adjust Quantity</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
