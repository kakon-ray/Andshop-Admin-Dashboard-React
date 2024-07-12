/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ManageProduct = () => {
    return (
        <div className='container-fluid'>
            <div class="col-lg-12 table-responsive">
                <table id="VisitorDt" class="table table-bordered" cellspacing="0" width="100%">
                    <thead class="table-dark ">
                        <tr>
                            <th class="th-sm text-center">ID</th>
                            <th class="th-sm text-center">Title</th>
                            <th class="th-sm text-center">Image</th>
                            <th class="th-sm text-center">Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr class="text-center">
                            <td class="th-sm ">1</td>
                            <td class="th-sm ">Titla Details</td>
                            <td class="th-sm ">
                                <img src="" style={{ height: '50px' }} alt="Course Image" />
                            </td>


                            <td class="th-sm d-flex gap-3">
                                <a href="{{ route('admin.edit.services', ['id' => $item->id]) }}" type="button"
                                    class="btn btn-info btn-circle btn-sm"><i class="fas fa-edit"></i></a>
                                <a type="button" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>
                            </td>

                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;