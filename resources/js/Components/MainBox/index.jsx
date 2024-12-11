import styles from './index.module.scss';
import Pin from '@/assets/image-4.png';
import BoxConditions from '../BoxConditions';
import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function MainBox({search}) {

  const [data, setData] = useState({})

  const handleSave = async () => {

    fetch(route(`weather.getWeather`, { search: search }), {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    handleSave()
  }, [search])

  return (
    <div className={styles.boxInfo}>
      <div className={styles.city}>
        <img src={Pin} alt="Ícone de Pin" />
        {data?.location?.name}, {data?.location?.region}
      </div>

      <div className={styles.temperatura}>
        <span className={styles.numero}>{data?.current?.temp_c}</span>
        <span className={styles.medicao}>°C</span>
      </div>

      <div className={styles.containerConditions}>
        <BoxConditions name="Vento" value={data?.current?.wind_kph} />
        <BoxConditions name="Umidade" value={data?.current?.humidity} />
        <BoxConditions name="Chuva" value={data?.current?.cloud} />
      </div>
    </div>
  );
}
