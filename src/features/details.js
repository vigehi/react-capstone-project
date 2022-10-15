import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { displayPostInfo } from '../app/apis/details';
import './details.css';

const Details = () => {
  const param = useParams();
  const postss = useSelector((store) => store.details);
  const filtered = postss.filter((item) => item.rendered === param.rendered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayPostInfo());
  }, []);
  return (
    <>
      <div className="box">
        {filtered.map((rendered) => (
          <div key="{rendered.id}">
            <div className="upperpart">
              <img className="flag" src={`${rendered.jetpack_featured_media_url}`} alt="number" />
            </div>
            <div className="box">
              <p>
                Post:
                {' '}
                {rendered.rendered}
              </p>
              <p>
                News:
                {' '}
                {rendered.news}
              </p>
            </div>

          </div>
        ))}

      </div>
    </>
  );
};

export default Details;
