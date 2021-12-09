import React from 'react'

import { gsap } from 'gsap'

import { useInViewport } from 'react-in-viewport'

import { Item } from './Item'

interface IList {
   items: string[]
}

export const List: React.FC<IList> = ({ items }) => {
   const listRef = React.useRef<HTMLDivElement>(null)

   const { inViewport, enterCount, leaveCount } = useInViewport(listRef)

   React.useEffect(() => {
      if(listRef?.current && inViewport && enterCount === 1) {
         gsap.from(listRef.current.children, {
            duration: 1,
            opacity: 0,
            x: 100,
            stagger: 0.2,
         })
      }
   }, [inViewport])

   return (
      <div>
         <h1
            style={{
               margin: '1rem',
               padding: '2rem'
            }}
         >
            List ({ items.length }) | enterCount: {enterCount} | leaveCount: {leaveCount}
         </h1>
         <div 
            ref={listRef}
            style={{
               display: 'flex',
               gap: '1rem',
               margin: '1rem',
               overflowY: 'hidden',
               overflowX: 'auto',
               flexWrap: 'nowrap',
               padding: '2rem'
            }}
         >
            {items.map((item, index) => (
               <Item key={index} name={item} />
            ))}
         </div>
      </div>
   )
}