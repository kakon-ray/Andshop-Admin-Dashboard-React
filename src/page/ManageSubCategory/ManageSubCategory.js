/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import CreateIcon from '../../component/Icon/CreateIcon'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const ManageSubCategory = () => {

    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-12 table-responsive">
                    <table id="VisitorDt" class="table table-bordered" cellspacing="0" width="100%">
                        <thead class="table-dark ">
                            <tr>
                                <th class="th-sm text-center">ID</th>
                                <th class="th-sm text-center">Sub Category Name</th>
                                <th class="th-sm text-center">Sub Category Slug</th>
                                <th class="th-sm text-center">Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr class="text-center">
                                <td class="th-sm ">1</td>
                                <td class="th-sm ">Sub Category Name</td>
                                <td class="th-sm ">Sub Category Slug</td>

                                <td class="th-sm d-flex gap-3 justify-content-center">
                                    <a href="#" type="button"
                                        class="btn btn-info btn-circle btn-sm m-1"  data-toggle="modal" data-target="#updatecategory"><i class="fas fa-edit"></i></a>

                                    <a type="button" class="btn btn-danger btn-circle btn-sm m-1"><i class="fas fa-trash"></i></a>
                                    <a type="button" class="btn btn-info btn-circle btn-sm m-1" data-toggle="modal" data-target="#exampleModalCenter" style={{ fontSize: '25px', paddingBottom: '10px' }} onClick={() => setOpenModal(true)}><i class="bi bi-plus"></i></a>

                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>

                {/* create  modal */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Create Subcategory</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="POST" action="" enctype="multipart/form-data">
                                    <div className="row pb-3">
                                        <div class="col-lg-12 py-2">
                                            <label>Subcategory Name</label>
                                            <input required type="text" class="form-control" name="category_name" placeholder="Enter Subcategory Name" />
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

                {/* update modal */}
                <div class="modal fade" id="updatecategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Update Subcategory</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="POST" action="" enctype="multipart/form-data">
                                    <div className="row pb-3">
                                        <div class="col-lg-12 py-2">
                                            <label>Subcategory Name</label>
                                            <input required type="text" class="form-control" name="category_name" placeholder="Enter Subcategory Name" />
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

export default ManageSubCategory;