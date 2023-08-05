import { Fragment, useEffect } from 'react';
import { useSelector } from 'redux/store/store';
import './MainDashboard.css';

export default function Main() {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.main.userInfo,
  }));

  useEffect(() => {
    console.log('userInfo', userInfo);
  }, [userInfo]);
  return <Fragment></Fragment>;
}
