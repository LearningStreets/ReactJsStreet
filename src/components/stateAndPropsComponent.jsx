import { Component, React} from 'react';

class  StateAndPropsComponent extends Component {
    
    // added state property which will holds the data for this component
    state = {

        // adding below msg property which will store a text to display on UI
         msg : 'This is the text from state property.'
    }

   

    render() { 

        const { msg } = this.state; // extracting msg property from state property to avoid writing long expression
        const _stateHtmlString = ( 
            `      class  StateAndPropsComponent extends Component {
        
                // added state property which will holds the data for this component
                    state = {
                        // adding below msg property which will store a text to display on UI
                        msg : 'This is the text from state property.'
                    }
                    
                    // use of state property inside the template 
                    render() {

                        const { msg } = this.state; // extracting msg property from state property to avoid writing long expression

                        const _template = ( 
                            <p> Displaying text from state property: <span className="important-text"> { this.state.msg } </span> </p> 
                            <p> Alternate way to display the content of state property: <span className="important-text"> { msg } </span> </p>
                            )
                        return _template;
                    }
                    `
            )

            const _propsHtmlString = ( 
                `      import { React } from 'react'; 
            
                        function FunctionComponent() {
                            const _template = (
                            <div > This is code snippet for function component</div>
                            )
                            return _template;
                        }
                    export default FunctionComponent`
                )
                
        
        const _template = (
            <div> 
                <h4 className="content-heading"> What is state? </h4> 
                <p> state is a property which holds the data for its component and can change over time. We can assign an object to it 
                    and add multiple properties inside that. Let's see how it works: </p>
                <p> Displaying text from state property: <span className="important-text"> { this.state.msg } </span> </p>
                <p> Alternate way to display the content of state property: <span className="important-text"> { msg } </span> </p>
        
                <h4 className="content-heading"> Code Snippet </h4>  
                <textarea className="code-snippet-textarea"  readOnly value={_stateHtmlString} /> <br /> <br /> 
        
                <h4 className="content-heading"> Code Explanation </h4>  
                <p> <code>    state =  &#123; ...... &#125;   </code>: This is the declaration of state property inside the class. We can add n number of properties inside this state.
                It helps to store any property-value which get used into the current component.</p>
                <p> <code>   &#123; this.state.msg &#125;   </code>: This is one type of expression to read the value of any property from state property.  </p>
                <p> <code>  const &#123; msg &#125;  = this.state;  </code>: An alternate way to extract the value of a property. 
                Create a constant with the same name of the property which is declared inside the state proprty and store the data into it.
                To use of the const we can directly use like this: <code>  &#123; msg &#125;  </code> </p>

                <br />
                <h4 className="content-heading"> What is props? </h4> 
                <p> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.
                    It allows passing data from one component to other components.</p>
        
                <h4 className="content-heading"> Code Snippet </h4>  
                <textarea className="code-snippet-textarea"  readOnly value={_propsHtmlString} /> <br /> <br /> 


                <h4 className="content-heading"> Code Explanation </h4>  
                <p> <code>  import &#123; React &#125;  from 'react';  </code>: We have to import this and this will help to render the dom.</p>
                <p> <code>  function FunctionComponent() &#123; ..... &#125;   </code>: Function </p>
                <p> <code>  const _template = ( ..... )  </code>: constant that is holding the html tag along with js</p>
                <p> <code> export default FunctionComponent  </code>: Exporting</p>
            </div>
        )
                return  _template ; 
    }
}

export default StateAndPropsComponent

 