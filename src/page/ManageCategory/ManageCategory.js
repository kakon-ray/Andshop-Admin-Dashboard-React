/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from 'react';
import CreateIcon from '../../component/Icon/CreateIcon'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'react-bootstrap';
import { createCategory, showCategory } from '../../features/categoryDetailsSlice';

const ManageCategory = () => {


    const [category, setCategory] = useState({})
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const getCategory = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(category)
        dispatch(createCategory(category))
        setShow(false)
    }


    const { categories, loading } = useSelector((state) => state.app);
    console.log(categories)

    useEffect(() => {
        dispatch(showCategory())
    }, [])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-end pb-4'>
                <button type="button" class="btn btn-info" onClick={handleShow}>Create Category<i class="bi bi-plus"></i></button>
            </div>
            <div className="row">

                <div className="col-lg-12 table-responsive">
                    <table id="VisitorDt" class="table table-bordered" cellspacing="0" width="100%">
                        <thead class="table-dark ">
                            <tr>
                                <th class="th-sm text-center">ID</th>
                                <th class="th-sm text-center">Category Name</th>
                                <th class="th-sm text-center">Category Slug</th>
                                <th class="th-sm text-center">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((item) => {
                                    return (
                                        <tr class="text-center" key={item.id}>
                                            <td class="th-sm ">{item.id}</td>
                                            <td class="th-sm ">{item.category_name}</td>
                                            <td class="th-sm ">{item.category_name}</td>

                                            <td class="th-sm d-flex gap-3 justify-content-center">
                                                <a href="#" type="button"
                                                    class="btn btn-info btn-circle btn-sm m-1" data-toggle="modal" data-target="#updatecategory"><i class="fas fa-edit"></i></a>

                                                <a type="button" class="btn btn-danger btn-circle btn-sm m-1"><i class="fas fa-trash"></i></a>


                                            </td>

                                        </tr>
                                    )
                                })
                            }




                        </tbody>
                    </table>
                </div>

                {/* create  modal */}
                <Modal show={show} onHide={handleClose}>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-primary btn-sm' onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h2 className="text-center">Create Category</h2>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="row pb-3">
                                <div class="col-lg-12 py-2">
                                    <label>Category Name</label>
                                    <input required type="text" class="form-control" name="category_name" placeholder="Enter Category Name" onChange={getCategory} />
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>

                        </form>
                    </Modal.Body>

                </Modal>


                {/* update modal */}
                <div class="modal fade" id="updatecategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Update Category</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="POST" action="" enctype="multipart/form-data">
                                    <div className="row pb-3">
                                        <div class="col-lg-12 py-2">
                                            <label>Category Name</label>
                                            <input required type="text" class="form-control" name="category_name" placeholder="Enter Category Name" />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">
                                        Submit
                                    </button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ManageCategory;