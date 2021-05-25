
import React from 'react';

import { googlePublicAPI } from '../assets/constantFiles/appConstants';

export class ReactAPIComponent extends React.Component{

    state= {
        apiData : []
    }


render(){
    
    const {apiData} = this.state;
    return(
    <div> 

        <h1> Here we will create API calls</h1> <br />
        {/* {apiData.map(_data => 
            <div className="col-md-2" key={_data._id}> 
                <strong> User Id:</strong>  {_data.userID} <br/> 
                <strong> User Name:</strong>  {_data.userName} <br/>  
                <strong> User Contact:</strong>  {_data.userContact} <br/> <br/> 
            </div>
        )} */}

        <br />
        <button type="button" onClick={this.callPublicAPI}> Call Public API</button>
    </div>
    )
}



// componentDidMount(){

    
//     fetch('http://localhost:3005/api/users')
//     .then(res => res.json())
//     .then((_data) => {
//         console.log(_data);
//         this.setState({apiData:_data});
//     },
//     (error) => {
//         console.log("Some error has occurred");
//     });
// }

// method will call the public api
callPublicAPI =() => {
    
    fetch(googlePublicAPI)
    .then(res => res.json())
    .then((_data) => {
            console.log("Google Public API ", _data);

    });
 
}

}



