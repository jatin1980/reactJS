import React, {Component} from 'react';
import   './Event.css';
//import './App.css';

 export default class Event extends Component {
     

    constructor() {
        super();
    
        this.state = {person: []};
    }

    



    
    componentDidMount() {

        fetch('https://test.careerhub.com.au/Events-ICT1/api/jobseeker/v1/events')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))




        /*
        fetch('https://test.careerhub.com.au/Events-ICT1/api/jobseeker/v1/events')
        .then(response => { response.json();})
        .then(resData => {
           //console.log(JSON.stringify(resData))
           //do your logic here       
           //let person = resData.results
           this.setState({ person: resData.results }); //this is an asynchronous function
        })
        */
    }
    

    render(){

        return(
        <div>
          { 
            this.state.person.map((personRecord) => {
              return <div key={personRecord.id.value}> {personRecord.title} </div>
            })
          }
        </div>
        )
      }
               

 }