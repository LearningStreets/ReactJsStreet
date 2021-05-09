import { React, Component} from 'react';


class AppFooterComponent extends Component{

    render() {
        const _template = (
        <div>
            <footer className="App-footer">
            <div className="row col-md-12">
                    <div  className="col-md-5">
                    <br />
                        <span className="footer-subheading">   Pleased to listen from you </span> 
                        <input type="text" className="feedback-inputBox" placeholder="Please write your good name" maxLength="25" />
                        <textarea className="feedback-textarea" placeholder="Please share your feedback" maxLength="350"   />   
                        
                    </div>
                    <div  className="col-md-1" style={{'textAlign':'left', 'alignSelf':'end', 'marginBottom':'2rem'}}>  
                    <div   className="feedback-sendBtn1"> 
                            <div className="feedback-sendBtn2"> 
                            </div>
                        </div> 
                    </div> 
                
                    <div  className="row col-md-6">
                    <div className="col-md-6 otherStreet"> 
                    <br />
                    <span className="footer-subheading">   Other Streets </span> 

                    <ul>
                        <li>
                            <a  href="https://learningstreets.github.io/ReactJsStreet" target="_blank" rel="noreferrer">
                            ReactJs Street
                            </a>
                        </li>
                        <li>
                            <a  href="https://learningstreets.github.io/ReactJsStreet" target="_blank" rel="noreferrer">
                            Angular Street
                            </a>
                        </li>
                        <li>
                            <a  href="https://learningstreets.github.io/ReactJsStreet" target="_blank" rel="noreferrer">
                            Dot Net Core Street
                            </a>
                        </li>
                        <li>
                            <a  href="https://learningstreets.github.io/ReactJsStreet" target="_blank" rel="noreferrer">
                            Python Street
                            </a>
                        </li>
                        <li>
                            <a href="https://learningstreets.github.io/ReactJsStreet" target="_blank" rel="noreferrer">
                            Java Street
                            </a>
                        </li>
                        <li>
                            <a href="https://learningstreets.github.io/ReactJsStreet" target="_blank" rel="noreferrer">
                            C# Street
                            </a>
                        </li>
                    </ul>
                    
                    </div>
                    <div className="col-md-6 contactUs"> 
                    <br />
                    <span  className="footer-subheading">   Contact Us </span> 

                    <ul>
                        <li>
                            +91-90xxxxxxx
                        </li>
                        <li>
                            streetsxxxxx@gmail.com
                        </li>
                    </ul>
                    </div>
                </div> 
                </div> 
                <div className="col-md-12" style={{'textAlign':'center', 'padding': '3rem', 'backgroundColor':'#21232b'}}> 
                    <a className="sourceCode-button" href="https://github.com/LearningStreets/ReactJsStreet/tree/main" target="_blank" rel="noreferrer">
                        Get the source code &#60; / &#62;   
                    </a> 
                </div> 
            </footer>
        </div>
        )

        return _template;
    }


    

   // addFeedback = () => {
    //const editJsonFile = require("edit-json-file");
    // If the file doesn't exist, the content will be an empty object by default.
    //let file = editJsonFile('../assets/feedbackData.json');

    //var fs = require('browserify-fs');
   // fs.readFile('../assets/feedbackData.json');

    //You can even append objects
    //file.append("feedbackData", { userName: "From Form", userFeedback: "Good" });
    //console.log(fs);

    //if you want to remove the last element from an array use pop
    //file.pop("classes")
    // Save the data to the disk
    //file.save();
    // Output the whole thing
    //console.log(file.toObject());

   // }
}



export default AppFooterComponent

 