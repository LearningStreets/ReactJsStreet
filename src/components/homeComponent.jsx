import {Component,React} from 'react'

 
export class HomeComponent extends Component{
    render(){
        return(
          <div>
              {/* <h4 style={{ "text-align":'center' }} > This is the 'Hello React' application.  </h4> */}
                <h4 className="content-heading"> About ReactJs </h4> 
                <p> 
                <span className="code-cursor"> &#187; </span>  <code> React </code> is a JavaScript library for building user interface.   <br />
                <span className="code-cursor"> &#187; </span>  <code> React </code>  is used to build single page applications.   <br />  
                <span className="code-cursor"> &#187; </span>  <code> React </code>  is rich in terms of reusability.
                </p>
                <p>  Reference Link:  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> reactjs</a>  <br />
                  <small> 
                    (check out the link to get more info about reactjs and to learn basic concepts. Anyhow this site also covers some important concepts such that you can start with React.)
                  </small>
                </p>
                <br /> 

                <h5 className="content-heading"> Why ReactJs? </h5> 
                <p> 
                <code> React </code> is very beneficial in terms of rendering, understandability, performance and manageability.
                </p>

                <p> 
                <span className="code-cursor"> &#187; </span>  <code> Virtual DOM </code>:
                  What is DOM? DOM stands for <code> Document Object Model</code>. As name says; 
                  A Model which holds all the Objects of all the elements of an HTML document.
                  So, this DOM gives a power to JavaScript such that it can access and change all the HTML elements. 
                  Same logic is being used in <code> React </code>, but here we have Virtual DOM, which helps in fast rendering. 
                  How? As application loads, a DOM gets created, Traditionally if any changes happens to HTML element, accordingly full DOM gets updated but 
                  in the case of React it only updates the required portion rest of the DOM remains same.    <br />
                <span className="code-cursor"> &#187; </span>  <code> Reusable Components </code>:  <code> React </code> has a ability to have many small components which helps to modular programming and enhance the reusability.   <br />  
                <span className="code-cursor"> &#187; </span>  <code> Traditional JavaScript </code>: <code> React </code> uses tradtional JavaScript hence it is easy to learn but its recommandable to use <code> JSX </code> which is advanced version of JavaScript.
                </p>
                <br /> 

                <h5 className="content-heading"> Installation Guide </h5> 
                <p> Lets install <code> NodeJs </code> such that we can work with that and also it will install <code> npm (Node Package Manager)</code> which will help us to install react packages.  </p>
                <p> <span className="code-cursor"> &#187; </span>  Reference Link:  <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> nodejs</a> <br />
                <small>(check out the link to get more about nodejs and installation setup.) </small>
                </p>
                <p> To begin with Reactjs we need a package manager (which we already installed - npm) such that we can install required packages. So to begin with we have to install below package to create a new React app.  </p>
                <p> <span className="code-cursor"> &#187; </span> Package Name: <a href="https://www.npmjs.com/package/create-react-app" target="_blank" rel="noreferrer"> create-react-app</a> <br />
                    <small> (As we are new in React hence we are using this package to create the React App. Once will get to know about the basic requirements of React App then we should be able to create it without help of this package.)</small>
                </p>
                <p>  <span className="code-cursor"> &#187; </span>  Reference Link: <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noreferrer"> create-a-new-react-app</a> </p>
                <p>  <span className="code-cursor"> &#187; </span>  IDE: We can use any IDE which supports reactJs development. Here we are using light weighted IDE <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a>.
                <br /><small> (Once you install the VS Code, do add these extenions: Simple React Snippets, Prettier - Code formatter) </small>
                 </p>
                <br /> 

                <h5 className="content-heading"> Helpful Commands </h5> 
                <p> Run the below comamnds over cmd and point to the working directory.  </p>
                <p>  <span className="code-cursor"> &#187; </span><b> npm install create-react-app : </b> This package installation will help to create a react js app.</p>
                <p>  <span className="code-cursor"> &#187; </span><b> create-react-app hello-react: </b> Here we are creating a react app with the name of 'hello-react'.</p>
                <p>  <span className="code-cursor"> &#187; </span><b> hello-react&gt; npm start : </b> Starting the newly created react app which will run on the 3000 port. <a href="http://localhost:3000" target="_blank" rel="noreferrer"> localhost:3000</a></p>
                <br />
                <p>  <b> Note : </b> We can also create reactjs app without create-react-app package and for that we have to manually add all the required files.</p>
                <br /><br />
          </div>
        )
    }
}