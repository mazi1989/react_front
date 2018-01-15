import React, { Component } from 'react';

class ProductList extends Component {

    render () {
        const { products } = this.props;
        const listItems = products.map(product =>
            <li key={product.name}>{product.name} {product.category} {product.price}</li>
        );

        return (
            <div><ul>{listItems}</ul></div>
        );
    }
}

export default ProductList;
