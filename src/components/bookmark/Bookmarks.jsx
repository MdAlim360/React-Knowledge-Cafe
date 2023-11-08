
import Bookmark from "../single-bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, addtimes}) => {
    
    return (
        
        <div className='w-1/3 bg-gray-200 rounded-lg mt-8'>
            <div>
                <h1 className='p-3 bg-pink-400 rounded-xl'>Read Times:{addtimes} min</h1>
            </div>
            
             <h1 className='text-center pt-2 text-2xl font-medium pb-4'>Bookmarked Blogs: {bookmarks.length}</h1>
             {
                bookmarks.map((bookmark,idx) => 
                    <Bookmark key={idx} bookmark={bookmark}></Bookmark>
                )
             }
             
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    addtimes:PropTypes.object}
export default Bookmarks;