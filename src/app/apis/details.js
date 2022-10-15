const LOAD = 'reactcapstone/apis/LOAD';

const init = [];

export function load(rendered) {
  return {
    type: LOAD,
    rendered,
  };
}

const getApiPost = async () => {
  const resp = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed');
  const data = resp.json();

  return data;
};

export const displayPostInfo = () => async (dispatch) => {
  const postData = await getApiPost();

  const postArray = postData.map((ele) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: ele.id,
    rendered: ele.title.rendered,
    jetpack_featured_media_url: ele.jetpack_featured_media_url,
    news: ele.excerpt.rendered,
  }));

  dispatch(load(postArray));
};

export default function detailsReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      return action.rendered;
    default:
      return state;
  }
}
