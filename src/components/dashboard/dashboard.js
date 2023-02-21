import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export default function Dashboard() {
    return(
        <div className='app'>
            <Link to='/todolist'>
                    <button className='reroute-button'>Todo-list</button>
            </Link>
            <div className='dash-wrapper'>
                <h2>Dashboard</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis, neque eu fringilla efficitur, sem urna gravida nisi, in vestibulum est felis non justo. Suspendisse ut velit metus. Praesent elementum scelerisque aliquet. Vestibulum in ante pellentesque lacus consectetur mattis vel quis ex. Sed dignissim, mi et malesuada auctor, magna arcu fringilla ipsum, sit amet tincidunt ante odio id felis. Phasellus at mauris non augue aliquet cursus. Vestibulum rutrum non dolor pellentesque consectetur. Suspendisse et iaculis dolor. Mauris quis urna et eros eleifend euismod at eget turpis. Maecenas elementum nibh pretium dignissim egestas.
                </p>
                <p>Donec eu neque vel libero varius faucibus. In tincidunt massa sit amet tortor aliquam, ut lobortis nunc aliquet. Phasellus sodales sed enim nec fermentum. Nam feugiat elementum ipsum a tempor. Pellentesque lacinia sodales orci, vitae pretium eros porttitor nec. Donec tellus metus, mollis et metus vitae, aliquam posuere leo. In a nisl id arcu venenatis dictum at ac neque. Sed non gravida erat, ut ultrices justo. Praesent at felis eget felis cursus sagittis nec et libero.
                </p>
                <p>Proin eu ipsum vestibulum, laoreet est et, ullamcorper purus. Nunc id molestie turpis, a bibendum ipsum. Donec ut sapien ac risus venenatis ultrices eu eu lacus. Pellentesque gravida elit quis auctor sagittis. Cras tempus mi lectus, quis pellentesque dolor varius nec. Ut luctus sed nunc ut sodales. Nunc tincidunt felis volutpat nisi rhoncus, in maximus purus venenatis. Phasellus id aliquam orci. Donec diam nibh, auctor a mauris vel, vehicula mattis tortor. Nulla fermentum, dui ut dictum placerat, enim purus dictum arcu, vel congue magna purus eget augue. Proin sit amet mi rhoncus, consectetur neque sed, luctus risus. In quis bibendum turpis.
                    
                </p>
            </div>
        </div>
    )
}