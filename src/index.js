import React from 'react';
import { render } from 'react-dom';
import products from './products';
import {FilterableProductTable} from './filterable-product-table'

render(
    <FilterableProductTable products={products} />,
    document.getElementById('container')
);
