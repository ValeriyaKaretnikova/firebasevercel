import React, { useState, useContext, useEffect, useReducer, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import useSWR from 'swr';
import { GoogleProvider } from 'components/auth/providers/google';
import styled from 'styled-components';
import {Button} from 'ui/buttons';
import {List, ListItem} from 'classcomp/Present';

const Wrapper = styled.div`
    padding: 6rem 0 0;
    text-align: center;
    button{
      width: 40%;
    }
    p{
      font-size: 4.25rem
    }
`;

const fetcher = (...args) => fetch(...args).then(res => res.json());


function index(props) {
  // function onHandleClick() {
  //   console.log("Event Trigger");
  // }

  const [isValidUser, setValidUser] = useState(false);
  const router = useRouter();
  function onRequestSignIn() {
    setValidUser(true);

    if (isValidUser){
      router.push('http://www.apple.ca')
    }
  }

  const {data, error} = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

  if (!data) return <div>loading...</div>
  if (error) return <div>oops! somrthing went wrong</div>

  // function handleClick() {
  //   setCount(count + 1);  
  // }
  
  return (
    <Wrapper>
      {/* <List>
        {todoData.map((todo, index) => <ListItem key={index}>{todo.name}</ListItem>)}
      </List> */}
      {/* <ListItem onClick={onHandleClick}>Make me interactive</ListItem> */}

      {/* <p>{count}</p> */}
      <Button onClick={onRequestSignIn}>Login</Button>
    </Wrapper>
  )
}

export default index

// useState
// use-- hook -function()

// function Counter(props) {
//   const [count, setCount] = useState(12);

//   function handleClick(e){
//     setCount(count+1)
//   }

//   return ( 
//     <div>
//       <div>{count}</div>
//       <button onClick={handleClick}>increment</button>      
//     </div>
//   )
// }
  
  
  
// export default Counter