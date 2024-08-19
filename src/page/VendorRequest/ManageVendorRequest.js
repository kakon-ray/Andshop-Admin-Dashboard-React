import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../../features/userDetailsSlice';
import { toast } from 'react-toastify';

const ManageVendorRequest = () => {

    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.users);
    const user = JSON.parse(localStorage.getItem('admin'));
    const token = user?.token;

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    const handleVendorActive = async (id, value) => {
        const data = { id, value };

        const response = await fetch(
            `http://127.0.0.1:8000/api/admin/role/request/accepted`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + token,
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            if (result.success) {
                toast.success(result.msg);
                dispatch(showUser()); // Refresh the user list after updating status
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="row">
            <div className="col-lg-12 table-responsive">
                <table id="VisitorDt" className="table table-bordered" cellSpacing="0" width="100%">
                    <thead className="table-dark">
                        <tr>
                            <th className="th-sm text-center">ID</th>
                            <th className="th-sm text-center">Image</th>
                            <th className="th-sm text-center">Name</th>
                            <th className="th-sm text-center">Phone</th>
                            <th className="th-sm text-center">Email</th>
                            <th className="th-sm text-center">Role</th>
                            <th className="th-sm text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item) => (
                                <tr className="text-center" key={item?.id}>
                                    <td className="th-sm">{item?.id}</td>
                                    <td className="th-sm">
                                        <img src={item?.image} style={{ height: '50px' }} alt="" />
                                    </td>
                                    <td className="th-sm">{item?.name}</td>
                                    <td className="th-sm">{item?.phone}</td>
                                    <td className="th-sm">{item?.email}</td>
                                    <td className="th-sm">
                                        <span className="badge badge-primary">{item?.role}</span>
                                    </td>
                                    <td className="th-sm d-flex gap-3 justify-content-center">
                                        <div className="form-check form-switch">
                                            <input 
                                                className="form-check-input" 
                                                checked={parseInt(item?.status) === 1} // Make sure '1' is for active state
                                                style={{ cursor: 'pointer' }} 
                                                type="checkbox" 
                                                onChange={(e) => handleVendorActive(item?.id, e.target.checked)} 
                                                role="switch" 
                                                id="flexSwitchCheckDefault" 
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageVendorRequest;
