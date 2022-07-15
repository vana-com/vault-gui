import { apply } from 'twind'

// const shadowValue =
//   // "0 10px 30px rgba(27, 29, 31, 0.1), 0 5px 15px rgba(27, 29, 31, 0.04)";
//   "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";

const shadow =
  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'

// bg-white-100
export const root = apply`
  flex flex-col rounded-md shadow-xl
  min-h-[195px] h-full overflow-hidden
`

export const inner = apply`
  flex 
  flex-1
  rounded-md 
  p-3 lg:p-6
`
