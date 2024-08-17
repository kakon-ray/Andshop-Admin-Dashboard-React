/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showProduct } from '../../features/productsDetailsSlice';
import { toast } from 'react-toastify';

const ManageProduct = () => {

    const dispatch = useDispatch();

    // start read category
    const { products, loading } = useSelector((state) => state.products);

    const user = JSON.parse(localStorage.getItem('admin'));
    const token = user?.token

    useEffect(() => {
        dispatch(showProduct())
    }, [])


    const handleStatusChage = async (id,value) => {

        const data = {id,value}

        const response = await fetch(
            `http://127.0.0.1:8000/api/admin/product/approved`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer' + ' ' + token,
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            if(result.success){
                toast.success("Product Status Chnaged");
                dispatch(showProduct())
            }

        } catch (error) {
          console.log(error)
        }

    }

    const handleDelete = async (id) => {
       

        const response = await fetch(
            `http://127.0.0.1:8000/api/admin/product/delete`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer' + ' ' + token,
                },
                body: JSON.stringify({id}),
            }
        );

        try {
            const result = await response.json();
            if(result.success){
                toast.success("Product deleted successfully");
                dispatch(showProduct())
            }

        } catch (error) {
          console.log(error)
        }
    }


    return (
        <div className='container-fluid'>
            <div className="d-flex justify-content-between py-4">
                <h2>Manage Product</h2>
                <Link to='/product/add'>
                    <button className='btn btn-info'>Create Product +</button>
                </Link>
            </div>
            <div className="row">
                <div class="col-lg-12 table-responsive">
                    <table id="VisitorDt" class="table table-bordered" cellspacing="0" width="100%">
                        <thead class="table-dark ">
                            <tr>
                                <th class="th-sm text-center">ID</th>
                                <th class="th-sm text-center">Image</th>
                                <th class="th-sm text-center">Title</th>
                                <th class="th-sm text-center">Code</th>
                                <th class="th-sm text-center">View Count</th>
                                <th class="th-sm text-center">Sell Count</th>
                                <th class="th-sm text-center">Tags</th>
                                <th class="th-sm text-center">Purchase Price</th>
                                <th class="th-sm text-center">Selling Price</th>
                                <th class="th-sm text-center">Discount</th>
                                <th class="th-sm text-center">Quantity</th>
                                <th class="th-sm text-center">Status</th>
                                <th class="th-sm text-center">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => {
                                    return <tr class="text-center" key={item?.id}>
                                        <td class="th-sm ">{index + 1}</td>
                                        <td class="th-sm ">
                                            <img src={item?.thumbnail} alt="Product Image" style={{ height: "100px" }} />
                                        </td>
                                        <td class="th-sm ">{item?.name}</td>
                                        <td class="th-sm ">{item?.code}</td>
                                        <td class="th-sm ">{item?.view_count}</td>
                                        <td class="th-sm ">{item?.sell_count}</td>
                                        <td class="th-sm ">{item?.tags}</td>
                                        <td class="th-sm ">{item?.purchase_price}</td>
                                        <td class="th-sm ">{item?.selling_price}</td>
                                        <td class="th-sm ">{item?.discount_price}</td>
                                        <td class="th-sm ">{item?.stock_quantity}</td>
                                        <td class="th-sm ">{item?.status == 0 ? <span class="badge badge-danger">Dactive</span> : <span class="badge badge-success">{item?.status}</span>}</td>


                                        <td class="th-sm d-flex align-items-center">
                                            <div className="d-flex gap-3">
                                                <select class="form-select" aria-label="Default select example" onChange={(e) => handleStatusChage(item.id, e.target.value)}>
                                                    <option selected>Select Status</option>
                                                    <option value="0" selected={item?.status === '0'}>Dactive</option>
                                                    <option value="NEW ARRIVAL" selected={item?.status === 'NEW ARRIVAL'}>NEW ARRIVAL</option>
                                                    <option value="TRENDING" selected={item?.status === 'TRENDING'}>TRENDING</option>
                                                    <option value="BEST SELLERS" selected={item?.status === 'BEST SELLERS'}>BEST SELLERS</option>
                                                    <option value="FEATURED" selected={item?.status === 'FEATURED'}>FEATURED</option>
                                                </select>
                                                <a type="button" onClick={()=>handleDelete(item.id)} class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>
                                            </div>
                                        </td>

                                    </tr>
                                })
                            }




                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageProduct;