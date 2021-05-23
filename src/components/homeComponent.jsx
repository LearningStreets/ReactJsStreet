import {Component,React} from 'react';
import logo from '../assets/images/logo/learningStreetsLogo.png'
import { Route, HashRouter as Router } from 'react-router-dom'
 
export class HomeComponent extends Component{
    render(){
        return(
          <div>
                <div className="homePage-welcome-div col-md-12 pd0">
                  <div className="homePage-welcome-text"> 
                      <div > 
                        <img src={logo} alt="Learning Streets" />   
                      </div>  
                      
                      <div id="heading">  
                        Learning  <br />
                        <b> Streets </b> <br />
                        <b id="motto"> Learn &#124; Share | Help  </b>
                        </div>   
        
                    
                    </div> 
                </div> 

                <div className="content-width" > 
            
                   <div className="homePage-quotes-div">
                    
                    <p> 
                        <q>Never stop Learning, because life never stops teaching.</q> 
                        <em> ~Anonymous </em>
                    </p>

                    <p> 
                        <q>Share your knowledge. It is a way to achieve immortality.</q>  
                        <em> ~Dalai Lama </em>
                    </p>

                    <p> 
                        <q>We can't help everyone, but everyone can Help  someone.</q>  
                        <em> ~Ronald Reagan </em>
                    </p>

                </div> 

                  <div className="homePage-content-div row col-md-12 pd0">
                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Who Are We?</p>
                        <p className="hpcc-description"> 
                          We are just like you with lots of zeal to learn new things. We are always ready for learning.
                          In our family we have many people to contribute and we also welcome you to in our family.  
                        </p>
                      </div>

                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Our Ambition</p>
                        <p className="hpcc-description"> 
                          Our goal is that each and every one who is interested to learn new things should get it without any cost.
                          Towards this we are doing a bit from our side such that our knowledge and experience could be shared among all those who are seeking for it.
                        </p>
                      </div>

                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Learn | Share | Help</p>
                        <p className="hpcc-description"> 
                          Always have a zeal to <b>Learn</b>. 
                          Whatever you know it's good to <b>Share</b> with people and <b>Help</b> them whenever they need it.
                          We will not loose anything by sharing something especially 'knowledge'.
                        </p>
                      </div>
                  </div>
                </div>
          </div>
        )
    }


    goToSiteContent = () =>{

      <Route render={({ history}) => (
        <button
          type='button'
          onClick={() => { history.push('/new-location') }}
        >
          Click Me!
        </button>
      )} />

    }
}