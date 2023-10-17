import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import './style.css'

function ProductList() {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const fetchData = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        let result = await response.json()
        setProducts(result)
        setLoader(false)
        console.log(products);
    }

    useEffect(() => {
        fetchData();
    }, [])

    let allProducts = products?.map((item) => {
        return (

            <Card className='cardBox' onClick={() => navigate(`/product-details/${item.id}`)}>
                <img src={item?.image} style={{ height: '200px', width: '100%', objectFit: 'contain', padding: '10px' }} alt="" />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {item?.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                        $ {item?.price}
                    </Typography>
                </CardContent>
            </Card>

        )
    })

    return (
        <div>
            {!loader ? <div>
                <img className='' style={{ width: '100%', height: '80vh', objectFit: 'cover', objectPosition: 'top' }} src="https://i.pinimg.com/originals/e1/ff/c8/e1ffc80f2c87f340ba6b9345498c87b0.jpg" alt="" />
                <div className="py-5 allProductContainer" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {allProducts}
                </div>
            </div> : <Loader />}

        </div>
    )
}

export default ProductList