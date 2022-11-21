import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import "../scss/components/_create.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Create() {

    const [state,setState] = useState("");
    const [value, setValue] = useState('');
    const handlefile = (e) =>
    {
        // console.log(e)
        let path = e.target.value.slice(12);
        // path = path.; 
        setState(path);
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
            <div className='create_main bg-grey'>
                <div className='main_left'>
                    <div className='create_form'>
                    <h3>Create a new post</h3>
                    <form >
                        <div className='input_title'>
                        <label htmlFor="post_title">Post Title</label>
                        <input className="bg-grey" type="text"  id='post_title' placeholder="Post Title..."></input>
                        </div>
                        <div className='input_file'>
                        <label htmlFor="post_pic">{state ? state : "Choose Image.."}</label>
                        <input className="bg-grey" type="file"  id='post_pic' onChange={handlefile}></input>
                        </div>
                    </form>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>
                <div className='main_right'>
                    {/* right */}
                </div>
            </div>
        </>
    )
}

export default Create