"use client";

import React, { useEffect, useState } from 'react'

const ProductList = ({category}: {category: string }) => {
    const [product, setProducts] = useState<string[]>([])

    // useEffect(() => {
    //     fetch('/api/products')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProduct(data)
    //         })
    // }, [])

    useEffect(() => {
        console.log('ProductList mounted')
        setProducts(['Soap', 'Toothbrush', 'Razor'])
    }, [category])
   
  return (
    <div>ProductList</div>
  )
}

export default ProductList