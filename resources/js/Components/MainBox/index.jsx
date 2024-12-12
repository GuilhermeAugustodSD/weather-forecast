import styles from './index.module.scss';
import Pin from '@/assets/image-4.png';
import BoxConditions from '../BoxConditions';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { regions } from '@/constants/regions';

export default function MainBox({ search }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSave = async () => {
    setLoading(true)
    fetch(route(`weather.getWeather`, { search: search }), {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  };

  const changeToAcronym = (region) => {
    if (regions[region]) return regions[region];
    return region;
  };

  useEffect(() => {
    handleSave();
  }, [search]);

  return (
    <div className={styles.boxInfo}>
      <div className={styles.city}>
        <img src={Pin} alt="Ícone de Pin" />
        {loading ? (
          <Skeleton width={100} baseColor="#b995db61"/>
        ) : (
          `${data?.location?.name}, ${changeToAcronym(data?.location?.region)}`
        )}
      </div>
      <div className={styles.temperatura}>
        {loading ? (
          <Skeleton width={100} height={100} baseColor="#b995db61"/>
        ) : (
          <>
            <span className={styles.numero}>
              {data?.current?.temp_c && Math.trunc(data?.current?.temp_c)}
            </span>
            <span className={styles.medicao}>°C</span>
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
            <BoxConditions name="Vento" value={data?.current?.wind_kph} />
            <BoxConditions name="Umidade" value={data?.current?.humidity} />
            <BoxConditions name="Chuva" value={data?.current?.cloud} />
          </>
        )}
      </div>
    </div>
  );
}
