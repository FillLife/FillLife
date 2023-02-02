import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Diary from './Diary';
import Header from './Header';

export default function DiaryStyle() {
  const [tempData, setTempData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cityName = 'Seoul';
    const API_KEY = '9ee15f4b701050d4006958620f3cedec';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        setTempData(data.main.temp - 273.15);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const temp = tempData;

  if (loading) {
    return <p>Loading</p>;
  } else if (temp <= 5) {
    return (
      <>
        <Header />
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 10) {
    return (
      <>
        <Header />
        <div
          style={{
            background: 'linear-gradient(135deg, #96b9da6f, #7850c9',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 12) {
    return (
      <>
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 17) {
    return (
      <>
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 20) {
    return (
      <>
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 23) {
    return (
      <>
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 27) {
    return (
      <>
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 100) {
    return (
      <>
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: 'calc(100vh - 66px)',
          }}
        >
          <Diary />
        </div>
      </>
    );
  }
}