import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadPostsRequest } from '@/reducers/post/getAllPosts';
import { useRootState } from '@/hooks/useRootState';

interface homeProps {}

const Home: React.FC<homeProps> = ({}) => {
  const { allPosts } = useRootState((state) => state.post); //all post useSelector
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsRequest()); //post dispatch example
  }, [dispatch]);

  return (
    <>
      <div>test</div>
    </>
  );
};

export default Home;
