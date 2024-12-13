import styles from './index.module.scss';
import Pin from '@/assets/image-4.png';
import BoxConditions from '../BoxConditions';
import { changeToAcronym } from '@/utils/location';
import { useState, useEffect, useCallback } from 'react';
import { fetchDataWeather } from '@/api/weather';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Swal from 'sweetalert2'

export default function MainBox({ search }) {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const requisitionFetchData = useCallback (async (search) => {
    setLoading(true)
    const data = await fetchDataWeather(search)

    if (data && data.error) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
        footer: "Try again!"
      });
    }

    setWeatherInfo(data)
    setLoading(false)
  },[])

  useEffect(() => {
    requisitionFetchData(search)
  }, [search]);

  return (
    <div className={styles.boxInfo}>
      <div className={styles.city}>
        <img src={Pin} alt="Ícone de Pin" />
        {loading ? (
          <Skeleton width={100} baseColor="#b995db61"/>
        ) : (
          `${weatherInfo?.location?.name}, ${changeToAcronym(weatherInfo?.location?.region)}`
        )}
      </div>
      <div className={styles.temperature}>
        {loading ? (
          <Skeleton width={100} height={100} baseColor="#b995db61"/>
        ) : (
          <>
            <span className={styles.number}>
              {weatherInfo?.current?.temp_c && Math.trunc(weatherInfo?.current?.temp_c)}
            </span>
            <span className={styles.measurement}>°C</span>
          </>
        )}
      </div>

      <div className={styles.containerConditions}>
        {loading ? (
          <>
            <Skeleton height={60} baseColor="#b995db61"/>
            <Skeleton height={60} baseColor="#b995db61"/>
            <Skeleton height={60} baseColor="#b995db61"/>
          </>
        ) : (
          <>
            <BoxConditions name="Vento" value={weatherInfo?.current?.wind_kph} />
            <BoxConditions name="Umidade" value={weatherInfo?.current?.humidity} />
            <BoxConditions name="Chuva" value={weatherInfo?.current?.cloud} />
          </>
        )}
      </div>
    </div>
  );
}
