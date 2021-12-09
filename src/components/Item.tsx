import React from 'react'

interface IItem {
   name: string
}

export const Item: React.FC<IItem> = ({ name }) => {
   return (
      <div
         style={{
            minWidth: 150,
            minHeight: 100,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: 10,
            boxShadow: '0 7px 10px 0 rgba(0,0,0,0.5)',
            color: '#1b1b1b'
         }}
      >
         {name}
      </div>
   )
}