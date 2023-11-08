import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'; 
const Blog = ({blog, addBookMarksHandle,addTimeHandle}) => {
    // console.log(blog)
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtag}=blog

    return (
        <div className=''>
            <img className='rounded-lg w-[600px] pt-4 ' src={cover} alt="" />
            <div className='flex justify-between'>
            <div className='flex gap-2 pt-6 pb-3'>
                <div>
                <img className='w-14' src={author_img} alt="" />
                </div>
                <div>
                    <h1>{author}</h1>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <div>
                <p className='pt-4 pb-4'>{reading_time} min</p>
                </div> 
                 <div>
                 <button onClick={()=>addBookMarksHandle(blog)}  className='text-red-600 pt-6 pb-4 hover:text-gray-500'><FaBookmark></FaBookmark></button>
                 </div>
            </div>
            </div>
            <h2 className='text-3xl font-medium pb-4'>{title}</h2>
            {hashtag.map((hash,idx) => <span className='text-gray-600' key={idx}>#{hash}</span>)}; <br />
            <button onClick={()=>addTimeHandle(reading_time,id)} className='text-blue-600 underline' href="">Mark as read</button>
        </div>
            
        
    );
    
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    addBookMarksHandle:PropTypes.func,
    addTimeHandle:PropTypes.func}



export default Blog;