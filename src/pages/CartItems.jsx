import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import CartCount from '../components/CartCount';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { deleteItem, itemCount } from '../redux/cartSlice';
import Card from '@mui/material/Card';
import './style.css'


function CartItems() {
    const navigate = useNavigate()
    const [count, setCount] = useState(1);
    console.log(count);
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems);

    let allCartItems = cartItems?.map((item, key) => {
        return (
            <Card  className=' cartItemContainer'>
                <img onClick={() => navigate(`/product-details/${item.id}`)} src={item?.image} alt="" />
                <div className='ms-4' style={{ flex: '1' }}>
                    <h4 className='text-start'>{item?.title}</h4>
                    <h5 className='text-start'>{item?.category}</h5>
                    <h5 className='text-start'>${item?.price}</h5>
                    <div className='d-flex justify-content-between mt-3'>
                        <select value={item?.itemCount} onChange={(e) => dispatch(itemCount({ count: e.target.value, key }))} style={{ width: '60px',height:'40px' }} class="form-select" aria-label="Default select example">
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                        </select>
                        <div>
                            <Button variant="contained" className='me-2 mb-2'>Buy now</Button>
                            <Button className='mb-2' onClick={() => dispatch(deleteItem({ key: key }))} variant="contained">Remove from cart</Button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    })

    return (
        <div className='container' style={{ minHeight: '70vh' }}>
            <h3 className='text-center mt-5'>Cart items</h3>
            {cartItems.length != 0 ? <div>{allCartItems} <CartCount /> </div> :
                <div className='d-flex flex-column justify-content-center mt-5 p-5 align-items-center'>
                    <h4 className='text-danger mb-4'>There is no cart item to show !</h4>
                    <Link to={'/'}><Button variant="contained">Add cart items</Button></Link>
                </div>
            }

        </div>
    )
}

export default CartItems