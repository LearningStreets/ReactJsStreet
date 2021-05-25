
import { AboutReactJsComponent } from  '../../components/aboutReactJsComponent';
import { FirstReactAppComponent }  from '../../components/firstReactAppComponent';
import { HowReactWorksComponent } from '../../components/howReactWorksComponent';
import  FunctionComponent   from '../../components/functionComponent';
import ClassComponent  from '../../components/classComponent';
import { StateAndPropsComponent } from '../../components/stateAndPropsComponent';
import { BestCodingPracticesComponent } from '../../components/bestCodingPracticesComponent';
import { ReactFundamentalsComponent } from '../../components/reactFundamentalsComponent';
import { EventHandlingComponent } from '../../components/eventHandlingComponent';
import { PassingDataBetweenComponent } from '../../components/passingDataComponent';
import { FeedBackComponent } from '../../components/feedbackComponent';
import { JSXComponent } from '../../components/jsxComponent';
import { HelloWorldComponent } from '../../components/helloWorldComponent';
import { ReactLifecycleComponent } from '../../components/reactLifecycleComponent';
import { ReactAPIComponent } from '../../components/reactAPIComponent';

const routeData = [
    {
        routeKey:"AboutReactJs",
        routePath:"/AboutReactJs",
        routeLinkText:"What is ReactJs?",
        routeLinkDescription:"In this you will understand about basics of ReactJs",
        routeComponent: AboutReactJsComponent
    },
    {
        routeKey:"FirstReactApp",
        routePath:'/FirstReactApp',
        routeLinkText:"My First React App",
        routeLinkDescription:"Let's create our First React App",
        routeComponent: FirstReactAppComponent
    },
    {
        routeKey:"HowReactWorks",
        routePath:'/HowReactWorks',
        routeLinkText:"How React works?",
        routeLinkDescription:"Let's understand how React works",
        routeComponent: HowReactWorksComponent
    },
    {
        routeKey:"JSX",
        routePath:'/JSX',
        routeLinkText:"What is JSX",
        routeLinkDescription:"Get it familiar with JSX",
        routeComponent: JSXComponent
    },
    {
        routeKey:"HelloWorld",
        routePath:'/HelloWorld',
        routeLinkText:"Legendary 'Hello World' Program",
        routeLinkDescription:"Understand the 'Hello World' program",
        routeComponent: HelloWorldComponent
    },
    {
        routeKey:"ReactFundamentals",
        routePath:'/ReactFundamentals',
        routeLinkText:"React Terminology and Fundamentals",
        routeLinkDescription:"It's good to get familiar with React terminology and fundamentals",
        routeComponent: ReactFundamentalsComponent
    },
    {
        routeKey:"BestCodingPractices",
        routePath:'/BestCodingPractices',
        routeLinkText:"Best Coding Practices",
        routeLinkDescription:"This will always help us in every language",
        routeComponent: BestCodingPracticesComponent
    },
    {
        routeKey:"FunctionComponent",
        routePath:'/FunctionComponent',
        routeLinkText:"Function Component",
        routeLinkDescription:"This will let you know how we can create function component",
        routeComponent: FunctionComponent
    },
    {
        routeKey:"ClassComponent",
        routePath:'/ClassComponent',
        routeLinkText:"Class Component",
        routeLinkDescription:"This will let you know how we can create class component",
        routeComponent: ClassComponent
    },
    {
        routeKey:"ReactLifecycle",
        routePath:'/ReactLifecycle',
        routeLinkText:"React Lifecycle",
        routeLinkDescription:"It's good to know about React Lifecycle",
        routeComponent: ReactLifecycleComponent
    },
    {
        routeKey:"StateAndProps",
        routePath:'/StateAndProps',
        routeLinkText:"State and Props",
        routeLinkDescription:"Let's prepare for passing the data between components",
        routeComponent: StateAndPropsComponent
    },
    {
        routeKey:"EventHandling",
        routePath:'/EventHandling',
        routeLinkText:"Event Handling",
        routeLinkDescription:"This will let you know about handling the various events",
        routeComponent: EventHandlingComponent
    },
    {
        routeKey:"PassingDataBetweenComponents",
        routePath:'/PassingDataBetweenComponents',
        routeLinkText:"Passing Data Between Components",
        routeLinkDescription:"Let's pass the data between components",
        routeComponent: PassingDataBetweenComponent
    },
    {
        routeKey:"FeedBack",
        routePath:'/FeedBack',
        routeLinkText:"FeedBack",
        routeLinkDescription:"Feedback",
        routeComponent: FeedBackComponent
    },
    {
        routeKey:"ReactAPI",
        routePath:'/ReactAPI',
        routeLinkText:"React API",
        routeLinkDescription:"Let's communicate with other servers through APIs",
        routeComponent: ReactAPIComponent
    }
    // {
    //     routeKey:"1",
    //     routePath:'/',
    //     routeLinkText:"Conditions/Loops",
    //     routeLinkDescription:"",
       
    // },
    // {
    //     routeKey:"2",
    //     routePath:'/',
    //     routeLinkText:"Routing",
    //     routeLinkDescription:"",
       
    // },
    // {
    //     routeKey:"3",
    //     routePath:'/',
    //     routeLinkText:"Forms",
    //     routeLinkDescription:"",
         
    // },
    // {
    //     routeKey:"4",
    //     routePath:'/',
    //     routeLinkText:"API",
    //     routeLinkDescription:"",
        
    // }
    

 ]

 export default routeData
    
