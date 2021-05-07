import { React} from 'react';
import  githubLogo from '../assets/images/githubLogo.jpg';

function AppFooterComponent(){

    const _template = (
    <div>
        <footer className="App-footer row col-md-12">
            
            <div  className="col-md-5">
            <br />
                <h3>   Pleased to listen from you </h3> 
                <input type="text" className="feedback-inputBox" placeholder="Please write your good name" maxLength="30" />
                <textarea className="feedback-textarea" placeholder="Please share your feedback" maxLength="350"   />   
                
            </div>
            <div  className="col-md-1" style={{'textAlign':'left', 'alignSelf':'end', 'marginBottom':'2rem'}}>  
            <div  onClick={()=> alert("Thank you for sharing feedback")}  className="feedback-sendBtn1"> 
                    <div className="feedback-sendBtn2"> 
                    </div>
                </div> 
            </div> 
           
            <div  className="row col-md-5">
                <div className="col-md-6"> 
                <br />
                <h5>   Other Streets </h5> 
                </div>
                <div className="col-md-6"> 
                <br />
                <h5>   Contact Us </h5> 
                </div>

                <div className="col-md-12"> 
                <br />
                <span>  Get the source code from here <span> &#187;  </span> </span>  
                <a href="https://github.com/LearningStreets/ReactJsStreet/tree/main" target="_blank" rel="noreferrer">
                     <img src={githubLogo} className="githubLogo" alt="Get the source code"></img>
                     </a> 
                </div>
            </div> 
        </footer>
    </div>
    )

    return _template;
}

export default AppFooterComponent

 