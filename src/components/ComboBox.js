import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { CheckIcon} from '@heroicons/react/20/solid'
import { useState, useEffect, useSyncExternalStore} from 'react'



export default function Combo() {
  let [buscador, setBuscador] = useState('')

  const handleChange = (event) => {
    const value = event.target.value;
    setBuscador(value);
  };

  return (
    <div className="mx-auto w-52">
      <label></label>
      <input type="text" onChange={handleChange} value={buscador}/>
    </div>
  )
}
