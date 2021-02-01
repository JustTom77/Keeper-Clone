import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
import notes from "../notes"

// function createNote(notation){
//   return(
//   <Note
//   key = {notation.id}
//   title = {notation.title}
//   content = {notation.content}
//   />)
// }

function App (){
return (<div>
  <Header />
  {notes.map((notation) => (
  <Note
  key = {notation.key}
  title = {notation.title}
  content = {notation.content}
  />))
}
  <Footer />
  
</div>
)


}
export default App;