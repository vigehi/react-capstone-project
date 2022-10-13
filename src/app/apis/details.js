const LOAD = 'reactcapstone/apis/LOAD';

const init = [];

export function load(rendered) {
  return {
    type: LOAD,
    rendered,
  };
}

const getApipost = async () => {
  const resp = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed');
  const data = resp.json();

  return data;
};

export const displayPostInfo = () => async (dispatch) => {
  const postData = await getApipost();

  const postsArray = postData.map((ele) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: ele.id,
    info: ele.title.rendered,
    jetpack_featured_media_url: ele.jetpack_featured_media_url,
    news: ele.excerpt.rendered,
    // date: ele.parselyMeta.parsely-pub-date,
    // author: ele.parselyMeta.parsely-author,
    // section: ele.parselsection,yMeta.parsely-
  }));

  console.log(postsArray);
  dispatch(load(postsArray));
};

export default function detailsReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      return action.rendered;
    default:
      return state;
  }
}
