import {useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./styles.css";
import {userRows} from "../../boilerplateData";

const UserList = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter(item => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'username',
			headerName: 'Username',
			width: 150,
			editable: true,
			renderCell: (params) => {
				return (
					<div className={"userListUser"}>
						<img className={"userListImg"} src={params.row.avatar} alt={"Avatar"}/>
						{params.row.username}
					</div>
				);
			}
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 150,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 150,
			editable: true,
		},
		{
			field: 'transaction',
			headerName: 'Transaction Volume',
			width: 200,
			editable: true,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			editable: true,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/user/${params.row.id}`}>
							<button className={"userListEdit"}>Edit</button>
						</Link>
						<DeleteOutline className={"userListDelete"} onClick={() => handleDelete(params.row.id)}/>
					</>
				);
			}
		}
	];

	return (
		<div className={"userList"}>
			<DataGrid columns={columns} rows={data} pageSize={8} checkboxSelection disableSelectionOnClick/>
		</div>
	);
};

export default UserList;