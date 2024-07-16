import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const getUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch(
            "http://127.0.0.1:8000/api/user_login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );

        try {
            const result = await response.json();
            localStorage.setItem('admin',JSON.stringify(result));
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <div className='row'>
            <div className='col-lg-6 mx-auto'>
                <div className='card p-4 m-5'>
                    <h2 className="pb-3 text-center">Admin Signin</h2>
                    <form onSubmit={handleSubmit}>

                        <div class="my-3">
                            <label for="" id="loginemail">Enter Your Email</label>
                            <input id="email" type="email" class="form-control" name="email" required
                                autocomplete="email" placeholder="Email" onChange={getUser} />
                        </div>


                        <div class="my-3">
                            <label for="" id="loginpassword">Enter Password</label>
                            <input id="admin_password_login" type="password" class="form-control" name="password"
                                required autocomplete="new-password" placeholder="Password" onChange={getUser} />
                        </div>



                        <button id="login" class="btn btn-facebook btn-user btn-block">
                            Login
                        </button>

                        <div class="mt-3 text-center">
                            <p class="small">Forget Password? <Link class="text-primary"
                                to="sign-in">Reset Your Password</Link></p>
                            {/* <p class="small">Do not have any account?<Link class="ml-2"
                                to="/sign-up">Go to Registration</Link></p> */}

                        </div>
                    </form >
                </div>

            </div>
        </div >
    );
};

export default SignIn;