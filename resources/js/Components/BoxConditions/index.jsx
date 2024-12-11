import { conditions } from '@/constants/conditions';
import styles from './index.module.scss';

export default function BoxConditions({name, value}) {

  return (
    <div className={styles.boxSecondInfo}>
      <img src={conditions[name].imgSrc} alt={`ícone de ${name}`} />

      <div className={styles.words}>
        <span className={styles.name}>{name}</span>
        <span className={styles.value}>{value}<small>{conditions[name].label}</small></span>
      </div>
    </div>
  );
}
