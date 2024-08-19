import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../slices/authSlice';

function Home() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && parsed.user && parsed.token) {
        dispatch(setAuth({ user: parsed.user, token: parsed.token }));
      }
    }
  }, [dispatch]); // Only run on mount

  return (
    <>
      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
      <div>Home</div>
    </>
  );
}

export default Home;
