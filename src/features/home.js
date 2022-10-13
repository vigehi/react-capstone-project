import React, { useEffect, useState } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
// import { AiOutlineSearch } from 'react-icons/ai';
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

  // const setLocation = () => {
  //   console.log('hello');
  // };
  return (
    <>
      {/* console.log(countries); */}
      <h2>STATS BY COUNTRY</h2>
      <div className="search">
        {/* <h2 className="h2Search">
          Search by Country
          <AiOutlineSearch className="search-icon" />
        </h2> */}
        {/* <AiOutlineSearch
          className="input-search"
          placeholder="Search by Country"
          value={location}
          onChange={(e) => { setLocation(e.target.value); }}
        /> */}
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
                   {/* <BsArrowRightCircle /> */}
                   <a href="/details">
                     {' '}
                     <BsArrowRightCircle />
                   </a>
                   <p>{rendered.rendered}</p>
                 </div>
               </div>
             ))
           )
        }
        {/* <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div>
        <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div>
        <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div>
        <div className="innerdiv">
          <p>COUNTRY NAME</p>
          <p>1234 </p>
          <a href="/details">To details</a>
        </div> */}
      </div>
    </>
  );
};

export default Home;
