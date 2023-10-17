import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './style.css'

function ProductDetails() {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true);
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(cartItems);

    const theme = useTheme();
    const { id } = useParams()
    // console.log(id);

    const fetchData = async () => {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let result = await response.json()
        setProduct(result)
        setLoader(false)
        // console.log(product);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div style={{ backgroundColor: 'rgb(244, 248, 252)' }} className='py-5 px-1 '>
            {!loader ?
                <Card className=' shadow productCard'>
                    <img className='shadow-lg cardImg p-4' src={product?.image} alt="" />
                    <Box className="" sx={{ display: 'flex', }}>
                        <CardContent className='cardContent'>
                            <Typography component="div" variant="h5">
                                {product?.title}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" component="div">
                                $ {product?.price}
                            </Typography>
                            <Typography component="div" variant="h5">
                                {product?.category}
                            </Typography>
                            <Typography style={{ textAlign: 'start' }} variant="h6" color="text.secondary" component="div">
                                ${product?.description}
                            </Typography>
                            <Button onClick={() => dispatch(addToCart(product))} variant="contained">Add to cart</Button>
                        </CardContent>
                    </Box>
                </Card> : <Loader />
            }
        </div >
    )
}

export default ProductDetails