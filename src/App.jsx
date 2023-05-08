
import './App.css'
import Square from './Components/Square'


export default function Board () {
  return <>
    <h1>Tres el raya</h1>
    
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </> 
}