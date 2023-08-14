import React from 'react';

const BasketTable = ({product}) => {
    return (
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="px-6 py-4">
                <img src={product.image} alt=""/>
            </td>
            <td className="px-6 py-4">
                {product.description}
            </td>
            <td className="px-6 py-4">
                $ {product.price}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
};

export default BasketTable;