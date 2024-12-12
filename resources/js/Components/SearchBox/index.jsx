import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { IoMdSearch } from "react-icons/io";

export default function SearchBox({ changeValue }) {

  const [inputValue, setInputValue] = useState('')
  const [possiveisBuscas, setPossiveisBuscas] = useState('')
  const [loading, setLoading] = useState()

  const changeInputValue = (e,value) => {
    e.preventDefault()
    changeValue(value)
    setInputValue('')
  }

  useEffect(() => {
    if (inputValue != '') {
      if (inputValue.length >=3 ) {
        setLoading(true)

        const timeout = setTimeout(() => {
          fetch(route(`weather.getAutoCompleteLocation`, { search: inputValue }), {
            method: 'GET',
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setPossiveisBuscas(data)
            })
            .catch(error => console.error('Error:', error));
        }, 500)

          setLoading(false)
          return () => clearTimeout(timeout)

      }
    } else {
      setPossiveisBuscas('')
    }

  }, [inputValue])

  return (
    <form className={styles.searchBox} onSubmit={(e) => changeInputValue(e,inputValue)}>
      <input type="text" placeholder='Pesquisar por localidade' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {
        possiveisBuscas && (
          <div className={styles.boxCities}>
            {possiveisBuscas.map((op) => (
              <button key={op.id} onClick={(e) => changeInputValue(e,`${op.name} ${op.region}`)}>{`${op.name}, ${op.region} - ${op.country}`}</button>
            ))}
          </div>
        )
      }
      <button type='submit' onClick={(e) => changeInputValue(e,inputValue)}>
        <IoMdSearch size={30} color='#C2BFF4' />
      </button>
    </form>
  );
}
