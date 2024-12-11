import { useState } from 'react';
import styles from './index.module.scss';
import { IoMdSearch } from "react-icons/io";

export default function SearchBox({changeValue}) {

  const [inputValue, setInputValue] = useState('')

  const changeInputValue = (e) => {
    e.preventDefault()
    changeValue(inputValue)
  }

  return (
    <form className={styles.searchBox} onSubmit={changeInputValue}>
      <input type="text" placeholder='Pesquisar por localidade' onChange={(e) => setInputValue(e.target.value)}/>
      <button type='submit' onClick={changeInputValue}>
        <IoMdSearch size={30} color='#C2BFF4'/>
      </button>
    </form>
  );
}
