import React from 'react'
import DigitalClock from './code/digital-clock'
import Dropdown from './code/dropdown.jsx'
import "./App.css"
import Cart from './code/cart.jsx'
import Pagination from './code/pagination.jsx'
import InfiniteScroll from './code/infinite-scroll.jsx'
import Debouncethrottle from './code/debounce+throttle.jsx'
import Check from './code/hoc.jsx'
export default function App() {
  return (
    <div className='space-y-12 p-2 flex flex-wrap gap-4'>
      <DigitalClock/>
      <Dropdown/>
      <Cart/>
      <Pagination/>
      <InfiniteScroll/>
      <Debouncethrottle/>
      <Check/>
    </div>
  )
}
