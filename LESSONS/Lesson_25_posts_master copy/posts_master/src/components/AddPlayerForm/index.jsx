import React, { useContext } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'

export default function AddPlayerForm() {

  const { teams, add_player } = useContext(Context)

    const submit = e => {
        e.preventDefault();
        const { player, team } = e.target
        const new_player = {
          id: Date.now(),
          player: player.value,
          team: team.value
        }
        add_player(new_player)
        e.target.reset()
    }

  return (
    <div>
         <form onSubmit={submit} className={s.add_player_form}>
        <label>
            <p>Add user</p>
            <input type="text" 
            placeholder='Player`s name' 
            name='player' />
        </label>
        <Select options={teams} name='team' />
        <button>Add user</button>        
                    
    </form>
    </div>
  )
}
