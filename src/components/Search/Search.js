import React, {Component} from 'react';
import   './Search.css';
//import './App.css';

 export default class Search extends Component {
     render(){
         return (
    
        <div class="actions-panel-mobile card d-flex d-lg-none">
            <div class="card-body">
                <div class="input-group mr-2">
                    <input type="text" class="form-control" placeholder="Search students"/>
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <i class="fas fa-search" aria-label="Search"></i>
                        </span>
                    </div>
                </div>
                <button class="btn btn-secondary collapsed" type="button" data-toggle="drawer"
                    data-target=".actions-panel-collapse" aria-controls="actions-panel-collapse"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-fw fa-list" aria-hidden="true"></i>
                    More actions
                </button>
            </div>
        </div>
  


 //---------------------------------------------
 
  )
     }
 }