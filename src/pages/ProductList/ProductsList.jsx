import React, { useState } from 'react';
import "./products.scss";
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { productData } from "../../data/productData";
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState(productData);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 120 
        },
        {
            field: 'user',
            headerName: 'Product Name',
            width: 300,
            renderCell: (params) => {
                return(
                    <div className="product">
                        <img 
                        className="product-img"
                        src={params.row.img} 
                        alt="" 
                        />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <>
                    {params.row.status === "active" ?
                        <button disabled className="status active">Available</button>
                        :
                        <button disabled className="status inactive">Out of Stock</button>
                    }
                    </>
                )
            }
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                         className="productListDelete"
                         onClick={() => handleDelete(params.row.id)} 
                        />
                    </>
                )
            }
        }
    ];

    return (
        <div className="products">
            <DataGrid
                rows={ data }
                columns={columns}
                pageSize={11}
                checkboxSelection
                disableSelectionOnClick
                
            />  
        </div>
    )
}

export default Products
