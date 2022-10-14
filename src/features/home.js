import React, { useEffect, useState } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { BsArrowRightCircle } from 'react-icons/bs';
import { displayposts } from '../app/apis/wiki';

const Home = () => {
  const postss = useSelector((state) => state.myred);
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const filtered = postss.filter((item) => item.rendered.toLowerCase()
    .includes(location.toLowerCase()));

  useEffect(() => {
    if (postss.length === 0) {
      dispatch(displayposts());
    }
  }, []);
  return (
    <>
      <h2>Posts</h2>
      <div className="search">
        <input
          className="input-search"
          placeholder="Search by post name"
          value={location}
          onChange={(e) => { setLocation(e.target.value); }}
        />
      </div>
      <div className="holder">
        {
           !filtered.length ? (
             <div className="heading">Enter a post</div>
           ) : (
             filtered.map((rendered) => (
               <div key="{rendered.id}" className="innerdiv">
                 <img className="flag" src={`${rendered.jetpack_featured_media_url}`} alt="hello" />
                 <div className="detailer">
                   <Link className="icon" to={`${rendered.id}`}>info</Link>
                   <p>{rendered.rendered}</p>
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
