import styles from './index.module.scss';

export default function Loading() {

  return (
    <div className={styles.loading}>
      <svg className={styles.orange}>
        <g fill="none">
          <rect x="2" y="2" width="50" height="50" />
        </g>
      </svg>
      <svg className={styles.grey}>
        <g fill="none">
          <rect x="5" y="5" width="44" height="44" stroke="#ccc" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
