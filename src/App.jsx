
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmark/Bookmarks'
import Head from './components/header/Head'

function App() {

  const [bookmarks, setBookMarks]= useState([]);

  const [addtimes, setAddTimes] = useState(0);


  const addBookMarksHandle = blog => {
    console.log(blog);
    const newBookMark = [...bookmarks, blog];
    setBookMarks(newBookMark);

  }

  const addTimeHandle = (time,id) => {

    setAddTimes(addtimes + time);
    // ............remove the bookmarks item..............//
    const removeBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(removeBookMarks);

  }
   

  return (
    <>
       
      <Head className=''></Head>
      <div className='md:flex '>
      <Blogs addBookMarksHandle={addBookMarksHandle} addTimeHandle={addTimeHandle}></Blogs>
      <Bookmarks bookmarks={bookmarks} addtimes = {addtimes}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
