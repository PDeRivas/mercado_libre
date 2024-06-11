import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { CheckIcon} from '@heroicons/react/20/solid'
import { useState, useEffect} from 'react'

const fetchApi = async (valorBuscado) => {
  try {
      let respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBuscado}`)
      let json = await respuesta.json()

      return json.data
  } catch (error) {
      console.error('Error:', error)
  }
}

export default function Combo() {
  const [listado, setListado] = useState([])
  const people = [
    { id: 1, name: 'Tom Cook' },
    { id: 2, name: 'Wade Cooper' },
    { id: 3, name: 'Tanya Fox' },
    { id: 4, name: 'Arlene Mccoy' },
    { id: 5, name: 'Devon Webb' },
  ]
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(people[1])

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="mx-auto w-52">
      <Combobox value={selected} onChange={(value) => setSelected(value)} __demoMode>
        <div className="relative">
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ComboboxInput
            className='shadow block rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          </ComboboxButton>
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <ComboboxOptions
            anchor="bottom"
            className="w-[var(--input-width)] rounded-xl border border-white/5 bg-gray-500 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none bg-black/2 data-[focus]:bg-black/10"
              >
                <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
                <div className="text-sm/6 text-black">{person.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  )
}
