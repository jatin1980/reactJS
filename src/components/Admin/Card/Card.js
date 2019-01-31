import React, {Component} from 'react';
import   './Card.css';
//import './App.css';

 export default class Card extends Component {
     render(){
         return (
               
<div class="card test1">
  <img class="card-img-top" src="https://placeimg.com/150/150/any" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title test2">Card title</h5>
    <p class="card-text">
	 <span>Timing ill goes here </span>
	 </p>
	  <p class="card-text">
	  Location ill goes here
	  
	  </p>
    <p class="text-center">
     ScanTicketButton ill goes here
    </p>
       
  </div>
</div>
 
 
  )
     }
 }