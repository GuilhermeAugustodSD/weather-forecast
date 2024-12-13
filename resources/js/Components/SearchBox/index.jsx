import { useCallback, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { IoMdSearch } from "react-icons/io";
import { autoCompleteRequisition } from '@/api/weather';

export default function SearchBox({ changeValue }) {

  const [inputValue, setInputValue] = useState('')
  const [listCities, setListCities] = useState([])
  const [loading, setLoading] = useState(false)

  const changeInputValue = useCallback((event,value) => {
    event.preventDefault()
    if (value) {
      changeValue(value)
      setInputValue('')
    }
    setListCities([])
  },[])

  useEffect(() => {
    if (inputValue != '') {
      if (inputValue.length >= 3 ) {
        setLoading(true)

        const timeout = setTimeout( async () => {
          let cities = await autoCompleteRequisition(inputValue)
          setListCities(cities)
        }, 500)

        setLoading(false)
        return () => clearTimeout(timeout)
      }
    } else {
      setListCities([])
    }
  }, [inputValue])

  return (
    <form className={styles.searchBox} onSubmit={(event) => changeInputValue(event,inputValue)}>
      <input type="text" placeholder='Pesquisar por localidade' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {
        listCities.length > 0 && (
          <div className={styles.boxCities}>
            {listCities.map((city) => (
              <button key={city.id} onClick={(event) => changeInputValue(event,`${city.name} ${city.region}`)}>{`${city.name}, ${city.region} - ${city.country}`}</button>
            ))}
          </div>
        )
      }
      <button type='submit' onClick={(event) => changeInputValue(event,inputValue)}>
        <IoMdSearch size={30} color='#C2BFF4' />
      </button>
    </form>
  );
}
