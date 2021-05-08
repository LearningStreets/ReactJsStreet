import {Component, React} from 'react';
import {ChildClassComponent} from './passingDataComponent';

export class HowReactWorksComponent extends Component{

    state ={

        msgToChild: "This is the message to the child from parent"
    }

render(){

    
    return (
    <div>
         <h3> This is how react works page</h3>
        <ChildClassComponent parentText="Text from another componet" />
        <ChildClassComponent parentText={this.state.msgToChild}/>
    </div>
       
        );
}

}