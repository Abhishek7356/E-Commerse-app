import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cartCount.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartCount() {

    const cartItems = useSelector((state) => state.cart.cartItems)
    // console.log(cartItems);
    let totalAmount = 0;
    cartItems.forEach((value) => {
        totalAmount += value.price * value.itemCount;
    })
    // console.log(totalAmount);

    return (
        <div className='outerBox'>
            <Card className='' style={{ width: '100%' }}>
                <CardContent>
                    <Typography className='fw-bold' variant="h5" component="div">
                        PRODUCT DETAILS
                    </Typography>
                    <hr />
                    <Typography variant="h6" className='d-flex justify-content-between text-dark pt-4' color="text.secondary">
                        <span>ITEMS</span> <span>{cartItems?.length} - ITEMS</span>
                    </Typography>
                    <Typography variant="h6" className='d-flex justify-content-between text-dark pt-4' color="text.secondary">
                        <span>DELIVERY CHARGES</span> <span>FREE</span>
                    </Typography>
                    <hr />
                    <Typography variant="h6" className='d-flex fw-bold justify-content-between text-dark pt-4' color="text.secondary">
                        <span>TOTAL AMOUNT</span> <span>${totalAmount.toFixed(2)}</span>
                    </Typography>
                    <Link to={'/'} ><Button variant="contained" className='mt-4'>Continue shopping</Button></Link>

                </CardContent>
            </Card>
        </div>
    )
}

export default CartCount