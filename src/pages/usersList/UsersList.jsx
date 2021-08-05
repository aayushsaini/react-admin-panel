import { React, useState } from 'react';
import "./usersList.scss";
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { userList } from "../../data/userList";
import { Link } from 'react-router-dom';

const UsersList = () => {

    const [data, setData] = useState(userList);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        console.log(data[id]);
    };

    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 120 
        },
        {
            field: 'user',
            headerName: 'User Name',
            width: 200,
            renderCell: (params) => {
                return(
                    <div className="user">
                        <img 
                        className="user-img"
                        src={params.row.avatar} 
                        alt="" 
                        />
                        {params.row.userName}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
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
                    {params.row.status === "Active" ?
                        <button disabled className="status active">Active</button>
                        :
                        <button disabled className="status inactive">Inactive</button>
                    }
                    </>
                )
            }
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/users/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                         className="userListDelete"
                         onClick={() => handleDelete(params.row.id)} 
                        />
                    </>
                )
            }
        }
    ];

    return (
        <div className="usersList">
            <DataGrid
                rows={ data }
                columns={columns}
                pageSize={12}
                checkboxSelection
                disableSelectionOnClick
                
            />
        </div>
    )
}

export default UsersList
