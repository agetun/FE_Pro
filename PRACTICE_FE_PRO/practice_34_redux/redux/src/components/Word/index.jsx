import React from 'react'

export default function Word({id, value}) {
  return (
    <div>
      <p>{value}</p>
      <button>Удалить</button>
    </div>
  )
}
