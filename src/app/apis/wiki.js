const LOAD = 'reactcapstone/apis/LOAD';

const init = [
];

export function load(rendered) {
  return {
    type: LOAD,
    rendered,
  };
}

const getApiData = async () => {
  const res = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed');
  const data = await res.json();

  // console.log(data);
  return data;
};

export const displayposts = () => async (dispatch) => {
  const postss = await getApiData();

  const postsArray = postss.map((ele) => ({
    id: ele.id,
    rendered: ele.title.rendered,
    jetpack_featured_media_url: ele.jetpack_featured_media_url,
  }));

  dispatch(load(postsArray));
};

export default function myReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      return action.rendered;
    default:
      return state;
  }
}
