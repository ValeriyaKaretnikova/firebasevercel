import Link from "next/link";

function index(props) {
  return (
    <Link href="/login">
      <a>Login</a>
    </Link>
  );
}

export default index;

// import { useEffect, useState } from "react";
// import { collection, getDocs } from 'firebase/firestore';
// import {db} from 'libs/firebase';

// function UserProfile({ age, fullName, address, ...props }) {
//   return (
//     <ul>
//       <li>{fullName}</li>
//       <li>{age}</li>
//       <li>{address.city}</li>
//     </ul>
//   );
// }

// function Index(props){
//     const [users, setUsers] = useState([]);

//     useEffect(()=>{
//         async function getFirebaseDoc() {
//             const ref = collection(db, 'users');
//             const userSnapshot = await getDocs(ref)

//             userSnapshot.forEach(doc => {
//                 setUsers(doc.data())
//             })
//         }

//         getFirebaseDoc();
//     }, [])

//     if (users) {
//     // return <div><UserProfile {...userProfile}/></div>
//         return <div>Getting a group of documents</div>;
//     } else {
//     // return <div>{output}</div>
//         return <div>Getting a group of documents</div>;
//     }
// }

// export default Index;
