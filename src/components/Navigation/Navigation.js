import React, {Component} from 'react';
//import Cards1 from  '../Common/Cards';
//import Search1 from '../Search/Search';
//import StudentEventlist from  '../Student/Event/Event';

 export default class Navigation extends Component {
          

     render(){
         return (
            <div class="sidebar-container flex-column flex-lg-row">
        <div class="navbar navbar-expand-lg navbar-dark bg-primary text-light navbar-sidebar flex-column">
        
        <div class="d-lg-flex flex-column w-100 h-100">
                <div class="d-flex flex-row my-1 my-lg-0">
    <a class="navbar-brand d-flex flex-row align-items-center" href="/">
        <img class="mr-3" src="/assets/img/careerhub-logo.svg" />
        <div>Chubby</div>
    </a>
    <button class="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse" data-target=".adminNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <div class="icon-bar"></div>
        <div class="icon-bar"></div>
        <div class="icon-bar"></div>
    </button>
</div>
<ul class="nav flex-column navbar-nav w-100 adminNav navbar-collapse collapse"><li class="nav-item ">
        <a class="nav-link d-flex flex-row align-items-center" href="/docs/getting-started/introduction/">
            <div class="nav-link-icon">
                
                        <i class="fas fa-fw fa-play"></i>
                    
            </div>
            Getting started
        </a>
    </li><li class="nav-item ">
        <a class="nav-link d-flex flex-row align-items-center" href="/docs/layout/overview/">
            <div class="nav-link-icon">
                
                        <i class="fas fa-fw fa-object-group"></i>
                    
            </div>
            Layout
        </a>
    </li><li class="nav-item ">
        <a class="nav-link d-flex flex-row align-items-center" href="/docs/content/reboot/">
            <div class="nav-link-icon">
                
                        <i class="fas fa-fw fa-images"></i>
                    
            </div>
            Content
        </a>
    </li><li class="nav-item active ">
        <a class="nav-link d-flex flex-row align-items-center" href="/docs/components/actions/">
            <div class="nav-link-icon">
                
                        <i class="fas fa-fw fa-puzzle-piece"></i>
                    
            </div>
            Components
        </a>
    </li><li class="nav-item ">
        <a class="nav-link d-flex flex-row align-items-center" href="/docs/utilities/borders/">
            <div class="nav-link-icon">
                
                        <i class="fas fa-fw fa-toolbox"></i>
                    
            </div>
            Utilities
        </a>
    </li></ul>
            </div>





        </div>

        <div class="w-100 bg-main h-100 d-flex flex-column">
        
       
       
       
     
        </div>}



            </div>

         );
     }
    }