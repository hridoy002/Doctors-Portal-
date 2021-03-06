import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from "react-router-dom";
import useToken from '../Hooks/useToken';



const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // redirect 
    const from = location.state?.from?.pathname || '/'
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || googleUser); 

    useEffect(() => {
        if (token) {
            // console.log(user || googleUser);

            navigate(from, { replace: true });
        }
    }, [token , from, navigate])

    // error 
    let errorMessage;
    if (error || googleError) {
        errorMessage = <p>{error?.message || googleError?.message}</p>
    }

    // loading 
    if (loading || googleLoading) {
        return <Loading />;
    }

    // login form handle 
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='h-full flex justify-center items-center'>
            <div className="my-24 card w-96 bg-base-100 shadow-xl flex ">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    {/********** log in form  ***************/}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            {/*********************** email field ********************* */}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/*********************** Password field ********************* */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {errorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    <p><small> New In Doctors Portal? <Link to="/register" className='text-secondary'> Create New Account</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;