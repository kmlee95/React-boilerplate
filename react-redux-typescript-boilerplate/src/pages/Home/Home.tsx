import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadPostsRequest } from '@/reducers/post/getAllPosts';
import { useRootState } from '@/hooks/useRootState';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { allPosts } = useRootState((state) => state.post); //all post useSelector
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsRequest()); //post dispatch example
  }, [dispatch]);

  return <div>dat1a</div>;
};

export default Home;
