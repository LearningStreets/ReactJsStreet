import {Component,React} from 'react';

import folderAndFileStructureImage from '../assets/images/folderAndFileStructure.png';
 
 
export class FolderAndFileDetailsComponent extends Component{

    render(){

        return(

        <div className="row col-md-12">
          <div className="col-md-12">
          <p> Once you create an app with the help of create-react-app package and open that folder in IDE you will see this file and folder structure. 
            <br /><small>  (This screenshot also includes some custom folders. will explain further.) </small></p>
          </div>
            <div className="col-md-4">
              <img className="folderAndFileStructureImage" src={folderAndFileStructureImage} alt="folder and file structure" />
              </div>
            <div className="col-md-8 "> 
               
                <div> 
                  <span className="code-cursor"> &#187; </span>
                  <b className="theme-color-text"> node_modules: </b> This is the folder which holds all the packages. <br />  
                  
                  <span className="code-cursor"> &#187; </span>
                  <b className="theme-color-text"> node_modules: </b> This is the folder which holds all the packages. <br />    

                  <span className="code-cursor"> &#187; </span>    
                  <b className="theme-color-text"> public: </b>  This is the folder info. <br />
                  
                  <div className="pd1-5rem-left"> 
                  <span className="code-cursor"> &#187; </span>    
                  <b> favicon.ico: </b>  This is the file info.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> index.html: </b>  This is the file info.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> manifest.json: </b>  manifest.json provides metadata used when your web app is installed on a user's mobile device or desktop.  <br />
                  </div>

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> src: </b>  This is the folder info. <br /> 

                  <div className="pd1-5rem-left">  
                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> assets: </b>  This is the folder info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> components: </b>  This is the folder info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> App.js: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> App.css: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> App.test.js: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> index.css: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> index.js: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> logo.svg: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> reportWebVitals.js: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b className="theme-color-text"> Route.js: </b>  This is the file info.  <br />

                    <span className="code-cursor"> &#187; </span>   
                    <b> setupTests.js.js: </b>  This is the file info.  <br />
                  </div>

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> .gitignore: </b>  This is the file info.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> package-lock.json: </b>  This is the file info.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b className="theme-color-text"> package.json: </b>  This is the file info.  <br />

                  <span className="code-cursor"> &#187; </span>   
                  <b> README.md: </b>  This is the file info.  <br />
                  
                  
                </div>
            
            </div>
        
          </div>
        )
    }
}