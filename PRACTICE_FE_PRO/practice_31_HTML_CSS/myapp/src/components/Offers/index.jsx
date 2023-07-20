import React from 'react'
import { list } from './data'
import OfferItem from '../OfferItem'
import s from './style.module.css'

export default function Offers() {
  console.log(s);
  return (
    <div className={s.offers}>
        <h2 className={s.h2}>Актуальные спецпредложения</h2>
    <div className={s.offers_list}>
            {
                list.map(item => <OfferItem key={item.id} {...item} />)
            }
        </div>
    </div>
  )
}

// создать компонент OfferItem который имеет следующую структуру
{/* <div> */}
//   <p>наименование предложения</p>
// </div>

// пройтись циклом по list и сгенерировать OfferItem на каждый объект
