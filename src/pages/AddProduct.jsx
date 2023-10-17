import React, { useState } from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

function AddProduct() {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = () => {
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                image: image,
                category: category
            })
        }).then(res => res.json())
            .then(json => console.log(json))

    }

    return (
        <div style={{ height: '75vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <h3 className='mb-4'>Add product</h3>
            <form style={{ width: '370px' }}>
                <MDBInput className='mb-4' type='text' id='form1Example1' label='Enter product title' />
                <MDBInput className='mb-4' type='number' id='form1Example1' label='Enter product price' />
                <MDBInput className='mb-4' type='text' id='form1Example1' label='Enter product category' />
                <MDBInput className='mb-4' type='text' id='form1Example1' label='Enter product description' />
                <MDBInput className='mb-4' type='text' id='form1Example1' label='Enter product image url' />

                <MDBBtn onClick={handleSubmit} type='submit' block>
                    Add Product
                </MDBBtn>
            </form>
        </div>
    )
}

export default AddProduct