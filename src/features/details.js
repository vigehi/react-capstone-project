import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { displayPostInfo } from '../app/apis/details';
import './details.css';

const Details = () => {
  const param = useParams();
  const posts = useSelector((store) => store.details);
  const filtered = posts.filter((item) => item.rendered === param.rendered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayPostInfo());
  }, []);
  return (
    <>
      <div className="box">
        {filtered.map((rendered) => (
          <div key="{rendered.id}">
            <div className="top">
              <img
                className="image"
                src={`${rendered.jetpack_featured_media_url}`}
                alt="hello"
              />
            </div>
            <p>
              Title:
              {' '}
              {rendered.info}
            </p>
            <h3> More info on the post</h3>
            <p>
              Explanation:
              {' '}
              {rendered.news}
              <Link to="/">
                <BsArrowRightCircle className="arrow" />
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
