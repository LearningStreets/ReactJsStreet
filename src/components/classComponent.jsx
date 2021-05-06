import { Component, React} from 'react';


class ClassComponent extends Component{
    render() {
        const _htmlString = (
`        import { Component, React } from 'react';
        import logo from '../logo.svg';
        
        class ClassComponent extends Component {
            render() {
                const _template = ( <div > This is code snippet for class component</div> )
                return _template;
            }
        }
            `
        )


const _template = (
    <div> 
        <h3 className="content-heading"> Class Component Code Snippet </h3> 
        <p> Class component is component which contains functions.</p>

        <h3 className="content-heading"> Code Snippet </h3>  
        <textarea className="code-snippet-textarea"  readOnly value={_htmlString} /> <br /> <br /> 

        <h3 className="content-heading"> Code Explanation </h3>  
        <p> <code>  import &#123; Component, React &#125;  from 'react';  </code>: We have to import this and this will help to render the dom.</p>
        <p> <code>  class ClassComponent extends Component &#123; ..... &#125;   </code>: Function </p>
        <p> <code>  const _template = ( ..... )  </code>: constant that is holding the html tag along with js</p>
        <p> <code> export default ClassComponent  </code>: Exporting</p>
    </div>

)

     return  _template ; 
}
}

export default ClassComponent

 