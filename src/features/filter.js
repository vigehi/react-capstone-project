import { useSelector } from 'react-redux';

const handleSearch = (event) => {
  const posts = useSelector((state) => state.myred);
  const value = event.target.value.toLowerCase();
  let result = [];
  result = posts.filter((data) => data.title.search(value) !== -1);

  return result;
};

export default handleSearch;
