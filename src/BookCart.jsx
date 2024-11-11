
import React from 'react'

function BookCart() {

    /* Hard-coded list of books in the cart for this week until 
    I learn how to implement state*/
const cartData = [
    {id: 1, title: 'Game of Thrones', quantity: 2, price: 14.99},
    {id: 2, title: 'Dune', quantity: 2, price: 15.99},
    {id: 3, title: 'Dracula', quantity: 2, price: 9.99},
]
/* wanted customers to be able to see total price of their purchases */
const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div>
        <h3 className='your-cart mt-4 mb-3'>Your Cart</h3>
        <div>
            {/* set up organization for each card/book in the cart */}
            {cartData.map((item) =>
                <div className='card m-4 cart-card border shadow-sm' key={item.id}>
                <div className='card-body'> 
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text text-muted'>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                </div>
                </div>
            )}
        </div>
        <h4 className='total mb-3'>Total: ${totalPrice}</h4>
    </div>
  )
}

export default BookCart
