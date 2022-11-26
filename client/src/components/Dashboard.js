import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import "../scss/components/_dashboard.scss"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from "react-hot-toast"
import fetchPosts from '../store/asyncMethods/fetchPosts';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import Loading from './Loading.js';
import Sidebar from './Sidebar';


function Dashboard() {
    const dispatch = useDispatch();
    const { redirect, message } = useSelector(state => state.PostReducer);
    const { user, loading } = useSelector(state => state.authReducer);
    const { posts } = useSelector(state => state.fetchReducer);
    const _id = user._id;


    useEffect(() => {
        if (redirect)
            dispatch({ type: "REDIRECT_FALSE" })
        if (message.length !== 0) {
            toast.success(message)
            dispatch({ type: "REMOVE_MESSAGE" });
        }
        dispatch(fetchPosts(_id))
    }, [message, redirect])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
            <div className='dash-container bg-grey'>
                <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                <div className='dash-left'>
                {loading ? '' : <Sidebar/> }
                </div>
                <div className='dash-right'>
                    <div className='grid-container'>
                        {loading ? <Loading/> : posts.length > 0 ?
                            posts.map((content) =>
                                <div className='grid-items'>
                                    {content.title}
                                    <div>
                                        <Link><AiOutlineEdit className='link'/></Link>
                                        <Link><AiFillDelete className='link' /></Link>
                                    </div>
                                </div>
                            ) : <Loading/>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard