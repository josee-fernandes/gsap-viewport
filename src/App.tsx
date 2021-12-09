import React from 'react'

import { List } from './components/List'

export function App() {
  const list1 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7'
  ]

  const list2 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const list3 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]

  return (
    <div>
      <List items={list1} />
      <List items={list2} />
      <List items={list3} />
      <List items={list1} />
      <List items={list2} />
      <List items={list3} />
    </div>
  ) 
}
