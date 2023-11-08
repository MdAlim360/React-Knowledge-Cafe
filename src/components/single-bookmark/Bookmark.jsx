
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div >
             <h3 className='bg-slate-400 w-72 mb-2 p-3 rounded-lg mt-2 ml-4 '>{title}</h3>

            
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object}
export default Bookmark;