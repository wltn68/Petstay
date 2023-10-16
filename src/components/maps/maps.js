import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect, useState } from 'react';
import * as NaverMap from 'react-naver-maps';

const Maps = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <NaverMap
        mapDivId={'map'}
        style={{ width: '100%', height: '100%' }}
        defaultCenter={{ lat: 37.5665, lng: 126.9780 }} // 기본 위치 설정 (서울시청)
        defaultZoom={13}
      >
        {currentPosition && (
          <NaverMap.Marker
            key="currentPosition"
            position={currentPosition}
            animation={2}
          />
        )}
      </NaverMap>
    </div>
  );
};

export default Maps;