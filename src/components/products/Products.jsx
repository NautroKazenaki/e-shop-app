import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './product/Product'

const products = [
    { id: 1, name: 'Keyboard', description: 'a gaming keyboard ', price: '10$', image: 'https://kotofoto.ru/product_img/2659/412061/412061_klaviatura_razer_cynosa_lite_rz03_02741500_r3r1m.jpg?v=1611309795' },
    { id: 2, name: 'Mouse', description: 'a gaming mouse ', price: '8$', image: 'https://shop-device.ru/upload/iblock/6e6/01idw65zy607k05rb9t76frucjqtosza/rz01.jpg' }
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products