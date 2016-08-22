import React from 'react';
import { render } from 'react-dom';

const ProductCategoryRow = (props) => {
    return (<tr><th colSpan="2">{props.category}</th></tr>);
}

const ProductRow = (props) => {
    let name = props.product.stocked ?
                    props.product.name :
                    (<span style={{color: 'red'}}>
                        {props.product.name}
                    </span>);
    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

const ProductTable = (props) => {
    let rows = [];
    let lastCategory = null;
    props.products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

const SearchBar = (props) => {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <p>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </p>
        </form>
    );
}

const FilterableProductTable = (props) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={props.products} />
        </div>
    );
}

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
);
