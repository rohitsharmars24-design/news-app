import './app.css'; 
import React, { useState, Component } from 'react';
import Navbar from './components/Navbar';
import Newbar from './components/Newbar';
import LoadingBar from "react-top-loading-bar";
import Alert from './components/alert';
import TextForm from './components/textForm';
import {HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


// class AppComp extends Component {
//     render() {
//       return (
//         <div>
//           <Newbar show={showAlert} progress={Progressive} mode={myMode} />
//         </div>
//       )
//     }
//   }


function App() {
  const [myMode,setMyMode]=useState('light');// whether dark mode is enabled or not
  const [myStyle,setMyStyle]= useState({
     backgroundColor:'white',
     color:'black'
  });
  const [myBtnText,setMyBtnText]= useState('Enable Dark Mode');




  const togglefunc=(e)=>{
    if(myMode==='light' && myStyle.backgroundColor ==='white'){
      setMyMode('dark');
      setMyBtnText("Enable Light Mode")
       setMyStyle({
       backgroundColor:'black',
       color:'white'
       })
       
        document.body.style.backgroundColor="#000000";
         showAlert("alert-primary","Dark Mode  ","Dark Mode is Enable ...carry on your work in Dark theme");
        document.body.style.backgroundColor="#000000";
      //  setInterval(() => {
      //    document.title="Install dark mode";
      //  },1500);
    
         document.title='Dark mode enable';
       
    }
    else{
      setMyMode('light');
      setMyBtnText("Enable Dark Mode")
      setMyStyle({
     backgroundColor:'white',
     color:'black'
    })
    // setMyBtnText('Disable Dark Mode');
      document.title='Light mode enable';
      document.body.style.backgroundColor="#ffffff";
      showAlert("alert-success","Light Mode    ","light Mode is Enable ...carry on your work in Light theme");
    }
    
    //  setInterval(() => {
        
    //    },1500);
  }
  const [progress, setProgress] = useState(0);
  function Progressive(progresse){
    setProgress(progresse)
  }

  const[alert,setAlert]=useState(null);
  let showAlert=(type,heading,message)=>{
    setAlert({Type:type,
      heading:heading,
      Message:message
    })
     setTimeout(() => {
     setAlert(null)
    }, 2000);
  }

    return (
      <div> 
         {/* <h1 class="text-3xl font-bold text-blue-600 underline">
    Tailwind works!
      </h1> */}
        
        <LoadingBar
        color="#f11946"
        progress={progress}
        height={6}
        // onLoaderFinished={() => setProgress(10)}
      />
         {/* <AppComp /> */}
        <Router>
      <Navbar title="Deadpool" atitle="Click me" name="Dev Rohit" mode={myMode} togglefun={togglefunc} chngmode={myBtnText}/>
      { alert && <Alert alert={alert} type={alert.Type} heading={alert.heading} message={alert.Message}/>}
      
      <Routes>
        <Route path="/click" element={ <TextForm heading="This is the sample form" textup="convert to UpperCase" stylemodi= {myStyle} mode={myMode} showAlert={showAlert} />}/>
         <Route path="/" element={ <Newbar show={showAlert} iprogress={Progressive} key="everything"mode={myMode} stylemodi={myStyle} country="everything?domains=wsj.com" title="NewsTrigger-Top news website in world"/>}/>
         <Route path="/america" element={ <Newbar show={showAlert} iprogress={Progressive} key="america" mode={myMode} stylemodi={myStyle} country="top-headlines?&country=us" title="America"/>}/>
         <Route path="/india" element={ <Newbar show={showAlert} iprogress={Progressive} key="india" mode={myMode} stylemodi={myStyle} country="top-headlines?&country=in" title="India"/>}/>
         <Route path="/canada" element={ <Newbar show={showAlert} iprogress={Progressive} key="canada" mode={myMode} stylemodi={myStyle} country="top-headlines?&country=ca" title="Canada"/>}/>
         <Route path="/australia" element={ <Newbar show={showAlert} iprogress={Progressive} key="australia" mode={myMode} stylemodi={myStyle} country="top-headlines?&country=au" title="Australia"/>}/>
        
      </Routes>
   </Router>
      </div> 
    )
  }

  export default App;

  
  
   
  

