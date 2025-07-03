// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'
import { create } from 'react-test-renderer'
import { doc } from 'prettier'

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {document.body.innerHTML = ''})  

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  //
  // 🐨 use createRoot to render the <Counter /> to the div
  // 🐨 get a reference to the increment and decrement buttons:
  const div = document.createElement('div')
  document.body.append(div)
  const root = createRoot(div)  
  // 
  // w
  // console.log(root, "root body")


    act(()=>{
      root.render(<Counter /> )})
  // console.log(div.innerHTML, "test")  
  // console.log(div.firstElementChild, "first child")
   const buttons = div.querySelectorAll("button")
const message = div.firstChild.querySelector('div')
   expect(message.textContent).toBe('Current count: 0')

   console.log(buttons[0].innerHTML, "buttons")
   console.log(buttons[1].innerHTML, "buttons")
 
   const decrement = buttons[0]
   const increment = buttons[1]
     act(()=>{
      decrement.dispatchEvent(new MouseEvent( 'click',{  cancelable: true, bubbles: true,  button: 0,}))})
 //    message = div.firstChild.querySelector('div')
      console.log(message.textContent, "message text content--")
      //console.log(message, "message")
      expect(message.textContent).toBe('Current count: -1')

     act(()=>{
      increment.dispatchEvent(new MouseEvent( 'click',{   cancelable: true,bubbles: true,   button: 0,}))})
     
   //  message = div.firstChild.querySelector('div')
       console.log(message.textContent, "message text content++")
      //console.log(message, "message++")
      expect(message.textContent).toBe('Current count: 0')


  div.remove()


  //   💰 div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 act(() => increment.click()))
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
