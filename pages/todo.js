import { useAuth } from "libs/hooks/useAuth";

import { AppBar } from "components/appbar";
import {Title} from "ui/title"


function ToDoPage(props) {
  const user = useAuth()

  if (!user){
    return (
    <>
      <AppBar />
      <Title> Please Go Away</Title>
    </>
  )}
   
  return(
    <>
      <AppBar />
      <Title> Render the User's Todos List</Title>
    </>
  )
  
}

export default ToDoPage;
