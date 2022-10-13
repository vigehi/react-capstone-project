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
  // const countriesArray = [];

  // Object.keys(countries).forEach((country) => {
  //   countriesArray.push({
  //     id: countries[country].id,
  //     name: countries[country].name,
  //   });
  // });

  // id: ele.countryInfo._id,
  //   country: ele.country,
  //   cases: ele.cases,
  //   image: ele.countryInfo.flag,

  const postsArray = postss.map((ele) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: ele.id,
    rendered: ele.title.rendered,
    // author: ele.cases,
    jetpack_featured_media_url: ele.jetpack_featured_media_url,
  }));

  // console.log(countriesArray);
  dispatch(load(postsArray));
};

export default function myReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      // console.log('I am here!');
      return action.rendered;
    default:
      return state;
  }
}
