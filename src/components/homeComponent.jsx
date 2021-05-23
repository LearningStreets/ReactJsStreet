import {Component,React} from 'react';
// import logo from '../assets/images/logo/learningStreetsLogo.png';
// import reactStreetLogo from '../assets/images/logo/reactStreetLogo.png';
import routeData from '../assets/constantFiles/routeConstants';
 
export class HomeComponent extends Component{
    render(){
        return(
          <div>
                <div className="homePage-welcome-div col-md-12 pd0">
                  <div className="homePage-welcome-text"> 
                      <div > 
                        {/* <img src={reactStreetLogo} alt="Learning Streets" />    */}
                      </div>  
                      
                      <div id="heading">  
                        <p>  Welcome to  </p>   <br />
                          ReactJs  <br />
                        <b> Street </b> <br /> 
                        <b id="motto"> Learn &#124; Share | Help  </b>
                        </div>   
        
                    
                    </div> 
                </div> 

                <div  > 
                   <div className="homePage-quotes-div">
                    <p> 
                        <q>This street will make you understand the basics of <b> ReactJs</b> and help you to begin with it.</q>  
                    </p> 
                  </div> 

                  <div className="homePage-content-div row col-md-12 pd0">
                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> About Street</p>
                        <p className="hpcc-description"> 
                          Our goal is that each and every one who is interested to learn new things should get it without any cost.
                          Towards this we are doing a bit from our side such that our knowledge and experience could be shared among all those who are seeking for it.
                        </p>
                      </div>

                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Your Takeaway</p>
                        <p className="hpcc-description"> 
                          We are just like you with lots of zeal to learn new things. We are always ready for learning.
                          In our family we have many people to contribute and we also welcome you to in our family.  
                        </p>
                      </div>

                      <div className="homePage-content-card col-md-4">
                        <p className="hpcc-heading"> Our Expectation</p>
                        <p className="hpcc-description"> 
                          Always have a zeal to <b>Learn</b>. 
                          Whatever you know it's good to <b>Share</b> with people and <b>Help</b> them whenever they need it.
                          We will not loose anything by sharing something especially 'knowledge'.
                        </p>
                      </div>
                  </div>

                  <div className="homePage-content-div col-md-12 pd0">
                      <div className="homePage-content-card">
                        <p className="hpcc-heading"> Learning Content </p>
                        <div className="hpcc-learningContent">  
                          {routeData.map(_item => 
                              <div className="row col-md-12 pd0" key={_item.routeKey}>
                                <div className="pageText col-md-4"> {_item.routeLinkText} </div> 
                                <div className="col-md-8"> {_item.routeLinkDescription} </div> 
                              </div> 
                          )}

                          <br /> 
                          <i >
                            <b> Note</b> : Kindly use above <code> Menu Icon (<i className="bi bi-list"></i>)</code> at top-left corner to read more about the content.
                          </i>
                         </div>   
                      </div>
                  </div>
                </div>
          </div>
        )
    }


    // goToSiteContent = () =>{

    //   <Route render={({ history}) => (
    //     <button
    //       type='button'
    //       onClick={() => { history.push('/new-location') }}
    //     >
    //       Click Me!
    //     </button>
    //   )} />

    // }
}