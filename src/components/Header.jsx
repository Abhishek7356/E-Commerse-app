import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const addToCartCount = useSelector((state) => state.cart.cartItems)
    console.log(addToCartCount);

    return (
        <div><Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <IconButton className='fw-bold'
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='fw-bold text-light' style={{ textAlign: 'start' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/'} className='text-light'> Shoppy</Link>
                    </Typography>
                    <Badge color="secondary" className='me-3' badgeContent={addToCartCount?.length} >
                        <Link className='text-light' to={'/cart-items'} ><i style={{ cursor: 'pointer' }} class="fa-solid fa-cart-plus fs-4"></i></Link>
                    </Badge>
                    <Button color="inherit" className='fw-bold'>Login</Button>
                </Toolbar>
            </AppBar>
        </Box></div>
    )
}

export default Header