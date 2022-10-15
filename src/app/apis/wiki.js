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
  return data;
};

export const displayPosts = () => async (dispatch) => {
  const posts = await getApiData();

  const postArray = posts.map((ele) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: ele.id,
    rendered: ele.title.rendered,
    jetpack_featured_media_url: ele.jetpack_featured_media_url,
  }));

  dispatch(load(postArray));
};

export default function myReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      return action.rendered;
    default:
      return state;
  }
}
