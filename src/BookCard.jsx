import React from 'react'

/* takes in title, author, and price to create a card */
function BookCard({title, author, price}) {
  return (
    <div className='card m-3 border shadow-sm my-book' style={{ width: '18rem'}}>
        {/* set up for each book card in the shop with bootstrap */}
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
            <p className="card-text">{price}</p>
            <button className="btn btn-primary">Add to Cart</button>
            {/* button for eventual adding book to cart capabilities
            once I learn more about state */}
        </div>
    </div>
    
  )
}

export default BookCard
