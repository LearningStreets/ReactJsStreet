import {Component, React} from 'react'; 

export class EventHandlingComponent extends Component{
  
    state = {
        counter : 0
    }

    // below  method is not required if using arrrow function
    // constructor() {

    //     super(); // We are calling this to use constructor
    //   //  console.log(this)

    //   // binding the method such that we can use 'this' keyword inside the body of 'IncrementCounter' method 
    //   this.IncrementCounter = this.IncrementCounter.bind(this);
    // }

    render(){

        const _eventHandlingHtmlString_1 = (
` // tag to display counter
  <strong>Currently Counter is: </strong>  { this.formatCount() }  

  // adding button for counter increment and decrement
  <button className="btn btn-primary form-control" type="button" onClick={this.IncrementCounter}> Increment</button> 
  <button className="btn btn-danger form-control" type="button" onClick={ () => {this.setState({counter : this.state.counter - 1})}}> Decrement</button>
               
  // Adding arrow functon for Increasing counter value. By this arrow function we can avoid binding in constructor
  IncrementCounter = () => {
  // we have to tell the react that something got changed such that react can update the dom  
  this.setState({counter : this.state.counter + 1}); 
  }

  // Adding the another func to format the counter value
  formatCount() {
    const { counter } = this.state; // taking out the value of counter from state object and saving into another constant
    return counter === 0 ? <span className="text-warning fs3rem">  Zero  </span>: counter > 0 ? <span className="text-success fs3rem"> {counter} </span> : <span className="text-danger fs3rem">{counter} </span> ;
}
`
)

        return (
            <div> 
                <h4 className="content-heading"> Event Handling </h4> 
                    <p> Event handling is an event to handle the action. An Action could be anything such as user cliked on a button, mousehover,
                        mousefocus etc. </p>

                <div className="row col-md-12">
                    <div className="col-md-3 form-group pd10"> 
                        <strong>Currently Counter is: </strong> <br /> { this.formatCount() }  
                        <br/>  <br/>
                        <button className="btn btn-primary form-control" type="button" onClick={this.IncrementCounter}> Increment</button> 
                        <br/> <br/>
                        <button className="btn btn-danger  form-control" type="button" onClick={ () => {this.setState({counter : this.state.counter - 1})}}> Decrement</button>
                    </div> 

                    <div className="col-md-9 form-group pd10"> 
                        {/* <input className="form-control"  type="text"></input>  <br/>
                        <button  className="btn btn-primary" type="button"> Click Me</button> */}
                        <textarea className="code-snippet-textarea"  readOnly value={_eventHandlingHtmlString_1} /> <br /> <br /> 
                    </div> 
                </div>
                
                <h4 className="content-heading"> Code Explanation </h4> 
                <p> <span className="code-cursor"> &#187; </span>   <code>  &#123; this.formatCount()  &#125;   </code>: An expression which calls custom method to get the count along with some custom formatting.</p>
                <p> <span className="code-cursor"> &#187; </span>    <code>  onClick=&#123; this.IncrementCounter &#125;   </code>: A click event of a button which calls non-parameterized method  'IncrementCounter' </p>
                <p> <span className="code-cursor"> &#187; </span>    <code>  IncrementCounter = () = &#62; &#123; 
                            this.setState(&#123; counter : this.state.counter + 1 &#125;); &#125;  </code>: This is the body of the 'IncrementCounter' method which will increase the counter.
                            Here we have used 'Arrow function' <code> () = &#62; &#123; ...... &#125;</code> concept. By using this no need to bind the <code>'this'  </code> object with the method. Means in React we can not use 'this' object directly.
                            Hence to use it we have to bind it inside the 'constructor' like below: <br/>
                            <code> constructor() &#123;  <br/>
                                    // binding the method such that we can use 'this' keyword inside the body of 'IncrementCounter' method  <br/>
                                    this.IncrementCounter = this.IncrementCounter.bind(this);  <br/>
                                     &#125;  </code>
                            if we don't do this, we will not be able to access 'this' it will simply throw 'undefined' error.  </p>
                <p> <span className="code-cursor"> &#187; </span>
                <strong> Inside <code> 'IncrementCounter' </code>  method why not simply doing this  </strong> <code>this.state.counter + 1  </code>   instead of 
                <code> this.setState(&#123; counter : this.state.counter + 1 &#125;); &#125;  </code> ?:
                 Okay so, this is because React is a JavaScript not a template engine. So we have to tell the React that something got changed so update the DOM. </p>


                 <p> <span className="code-cursor"> &#187; </span> <code> this.setState( .... ) </code> : 'setState' method will set the new value to the objects. By doing this React understands that current DOM requires some updation.
                 Hence as a result it compares the Current Vs New DOM and updates only required part not the full DOM.</p>
            </div>
        );
    }

    // IncrementCounter(){
    //     alert('IncrementCounter Clicked');
    //         console.log(this);
    //     // we can not use directly this.state.counter and we can not increase the counter simply
    //     // Because this is undefined here in this method. to use this we have to bind it on constructor

    //     // to avoid the binding we have to use arrow function because it don't rebind it instead it inherited it
    // }

    // Arrow functon
    IncrementCounter = () => {
        this.setState({counter : this.state.counter + 1}); // we have to tell the react that something got changed such that react can update the dom  
    }

    // Arrow functon
   DecrementCounter = () => {
        this.setState({counter : this.state.counter - 1}); // we have to tell the react that something got changed such that react can update the dom  
    }

    // Adding the another func to format the counter value
    formatCount() {
        const { counter } = this.state;
        return counter === 0 ? <span className="text-warning fs3rem">  Zero  </span>: counter > 0 ? <span className="text-success fs3rem"> {counter} </span> : <span className="text-danger fs3rem">{counter} </span> ;
    }
}