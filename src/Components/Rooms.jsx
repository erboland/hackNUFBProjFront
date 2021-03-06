import React, {useState} from 'react';
import './rooms.css';
import {useHistory} from 'react-router-dom';

function Rooms() {
  const history = useHistory();
  const rooms = ["10", "123", "321", "12334", "12341234", "123435", "34645", "43643"];
  const [search, setSearch] = useState('');
  const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  return (
    <div className="containerRoom">
      <div className="search">
        <h1>Find your room 🔎</h1>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <div className="roomsList">
        {rooms.map(value=>{

          return value.toString().startsWith(search) ?
            <div className="room" style={{color: colors[Math.floor(Math.random()*Math.floor(colors.length))]}}>
              {value}
            </div>
          : null
        })}
      </div>
      <div className="curl" onClick = {()=>history.push('/')}>
        <div>Main</div>
      </div>
    </div>
  )

}

export default Rooms
