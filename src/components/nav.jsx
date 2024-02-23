import React from 'react'
import { DataContext } from '../contexts/Contexts';

export default function nav() {

    const { page , setPage } = useContext(DataContext);

  return (
    <div>nav</div>
  )
}
