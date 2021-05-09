import {Component,React} from 'react';

import folderAndFileStructureImage from '../assets/images/folderAndFileStructure.png';
 
 
export class FolderAndFileDetailsComponent extends Component{

    render(){

        return(

        <div className="row col-md-12">
            <div className="col-md-4"> <img className="folderAndFileStructureImage" src={folderAndFileStructureImage} alt="folder and file structure" /> </div>
            <div className="col-md-8 "> 
               <p> Once you create an app with the help of create-react-app package and open that folder in IDE you will see this file and folder structure. <br /><i>  (This screenshot also includes some custom folders. will expalin further.) </i></p>
                <p> <b style={{"color":"Purple"}}> node_modules: </b>  This is the folder which holds all the packages.</p>
                <p> <b> public: </b>  This is the folder info. <br />
                 &nbsp; &nbsp; &nbsp;  <b> favicon.ico: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> index.html: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> manifest.json: </b>  This is the file info.  <br />
                </p>
                <p> <b> src: </b>  This is the folder info. <br /> 
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> assets: </b>  This is the folder info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> components: </b>  This is the folder info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> App.js: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b> App.css: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b> App.test.js: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> index.css: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> index.js: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b> logo.svg: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b> reportWebVitals.js: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> Route.js: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b> setupTests.js.js: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> .gitignore: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> package-lock.json: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b style={{"color":"Purple"}}> package.json: </b>  This is the file info.  <br />
                 &nbsp; &nbsp; &nbsp;  <b> README.md: </b>  This is the file info.  <br />
                 
              
              </p>
            
            </div>
        
          </div>
        )
    }
}