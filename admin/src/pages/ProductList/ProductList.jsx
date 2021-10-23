import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DeleteOutline} from "@material-ui/icons";
import {DataGrid} from "@mui/x-data-grid";
import "./styles.css";
import {deleteProducts, fetchProducts} from "../../redux/api";

const ProductList = () => {
	const dispatch = useDispatch();
	const  products = useSelector(state => state.product.products);

	useEffect(() => {
		fetchProducts(dispatch)
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteProducts(id, dispatch);
	};

	const columns = [
		{ field: '_id', headerName: 'ID', width: 220 },
		{
			field: 'product',
			headerName: 'Product',
			width: 250,
			editable: true,
			renderCell: (params) => {
				return (
					<div className={"productListItem"}>
						<img className={"productListImg"} src={params.row.image} alt={"Avatar"}/>
						{params.row.title}
					</div>
				);
			}
		},
		{
			field: 'inStock',
			headerName: 'Stock',
			width: 150,
			editable: true,
		},
		{
			field: 'price',
			headerName: 'Price',
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
						<Link to={`/product/${params.row.id}`}>
							<button className={"productListEdit"}>Edit</button>
						</Link>
						<DeleteOutline className={"productListDelete"} onClick={() => handleDelete(params.row._id)}/>
					</>
				);
			}
		}
	];

	return (
		<div className={"productList"}>
			<DataGrid columns={columns} rows={products} getRowId={row => row._id} pageSize={10}
			          rowsPerPageOptions={[5, 10, 20, {value: products.length, label: 'All'}]} pagination
			          checkboxSelection disableSelectionOnClick/>
		</div>
	);
};

export default ProductList;