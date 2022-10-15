import React, { useEffect, useState } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { displayPosts } from '../app/apis/wiki';
// import handleSearch from './filter';

const Home = () => {
  const postss = useSelector((state) => state.myred);
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const filtered = postss.filter((item) => item.rendered.toLowerCase()
    .includes(location.toLowerCase()));

  useEffect(() => {
    if (postss.length === 0) {
      dispatch(displayPosts());
    }
  }, []);

  return (
    <>
      <div className="uppediv">
        <h4 style={{ width: '50%' }}>More info</h4>
      </div>
      <div className="searchitems">
        <h4 className="headtext">Explanaton</h4>
        <div className="search">
          <input
            className="input-search"
            placeholder="Search by post"
            value={location}
            onChange={(e) => { setLocation(e.target.value); }}
          />
        </div>
      </div>
      <div className="holder">
        {
           !filtered.length ? (
             <div className="heading">Enter a valid post!</div>
           ) : (
             filtered.map((rendered) => (
               <div key="{rendered.id}" className="innerdiv">
                 <div className="insidediv">
                   <Link to={`/Details/${rendered.rendered}`} style={{ color: '#fff' }}>
                     <BsArrowRightCircle />
                   </Link>
                 </div>
                 <img className="flag" src={`${rendered.jetpack_featured_media_url}`} alt="home" />
                 <div className="detailer">
                   <p className="postname">{rendered.rendered}</p>
                 </div>
               </div>
             ))
           )
        }
      </div>
    </>
  );
};

export default Home;
