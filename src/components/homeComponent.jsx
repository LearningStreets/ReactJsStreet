import {Component,React} from 'react'

 
export class HomeComponent extends Component{
    render(){
        return(
          <div>
              {/* <h3 style={{ "text-align":'center' }} > This is the 'Hello React' application.  </h3> */}
                <h3 className="content-heading"> Introduction </h3> 
                <p> React is a JavaScript library for building user interface.  </p>
                <p>  Reference Link:  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> reactjs</a> (check out the link to get more info about reactjs and to learn basic concepts.)
                </p>
                <br /><br />

                <h3 className="content-heading"> Installation Guide </h3  > 
                <p> Lets install NodeJs such that we can work with that and also it will install npm (Node Package Manager) which will help us to install react packages.  </p>
                <p>   Reference Link:  <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> nodejs</a> (check out the link to get more about nodejs and installation setup.) </p>
                <p> To begin with reactjs we need a package manager (which we already installed) such that we can install required packages. So we will install below package to create a new react app.  </p>
                <p> Package Name: <a href="https://www.npmjs.com/package/create-react-app" target="_blank" rel="noreferrer"> create-react-app</a> </p>
                <p>   Reference Link: <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noreferrer"> create-a-new-react-app</a> </p>
                <p>   IDE: We can use any IDE which supports reactJs development. Here we are using light weighted IDE <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a> <br/>
                Once you install the VS Code, do add these extenions: Simple React Snippets, Prettier - Code formatter
                 </p>
                <br /><br />

                <h3 className="content-heading"> Helpful Commands </h3> 
                <p> Run the below comamnds over cmd and point to the working directory.  </p>
                <p>  <b> &gt; npm install create-react-app : </b> This package installation will help to create a react js app.</p>
                <p>  <b> &gt; create-react-app hello-react: </b> Here we are creating a react app with the name of 'hello-react'.</p>
                <p>  <b> hello-react&gt; npm start : </b> Starting the newly created react app which will run on the 3000 port. <a href="http://localhost:3000" target="_blank" rel="noreferrer"> localhost:3000</a></p>
                <br />
                <p>  <b> Note : </b> We can also create reactjs app without create-react-app package and for that we have to manually add all the required files.</p>
                <br /><br />
          </div>
        )
    }
}