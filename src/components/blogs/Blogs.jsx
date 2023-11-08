import { useEffect, useState } from "react";
import Blog from "../blogs-item/Blog";
import PropTypes from 'prop-types';


const Blogs = ({addBookMarksHandle,addTimeHandle}) => {
    const [blogs, setBlogs]= useState([]);
    useEffect(()=>{
        fetch('../../../public/Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='max-w-7xl mx-auto mt-8 text-2xl font-medium '>
            <h1 className='text-center mt-2 bg-gray-200 rounded-lg py-2'>Blogs: {blogs.length}</h1>

            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}  
                    addBookMarksHandle={addBookMarksHandle}
                    addTimeHandle={addTimeHandle}>
                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    addBookMarksHandle:PropTypes.func,
    addTimeHandle:PropTypes.func}
export default Blogs;