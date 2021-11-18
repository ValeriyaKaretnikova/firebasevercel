// REACT EVENTS 
// REAT STATE

import React, { useState } from 'react';
import { GoogleProvider } from 'components/auth/providers/google';

function index() {
  return (
    <div>
      <GoogleProvider />
    </div>
  )
}

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

export default index