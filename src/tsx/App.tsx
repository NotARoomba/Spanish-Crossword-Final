// import { useState } from 'react'
// import Crossword from '@jaredreisinger/react-crossword'

export default function App () {
  // const [count, setCount] = useState(0)
  return (
    <div className="w-full h-full flex flex-col">
      <p className="mt-10 text-4xl mx-auto font-bold ">El Extraño Caso del Dr. Jekyll y Mr. Hyde</p>
      <p className="text-2xl mx-auto font-bold text-blue-500">Hecho por Nathan Alspaugh</p>
      {/* <div className='w-1/2 h-1/2'> */}
        {/* <Crossword data={data} /> */}
        <iframe width={window.innerWidth} height={window.innerHeight} className=' m-auto block bg-transparent border-none' src="https://crosswordlabs.com/embed/2024-03-01-693"></iframe>
      {/* </div> */}
    </div>
  )
}
