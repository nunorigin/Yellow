import React,{useState} from "react";
import {Button,Toast,ToastHeader,ToastBody} from "reactstrap";

const Toasts =() =>{

  const [isOpen,setisOpen]=useState(false);

  const noRefCheck =(e)=>{
    setisOpen(!isOpen)
    }
   
    return(
        <div>
          <h1>Toast</h1>

        <Button
          color="primary"
          onClick={(e)=> {noRefCheck(e)}}
        >
          Click Me
        </Button>
        <br />
        <br />
        <Toast isOpen={isOpen}>
          <ToastHeader onClick={(e)=> {noRefCheck(e)}}>
            Toast title
          </ToastHeader>
          <ToastBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ToastBody>
        </Toast>
      </div>
    )
}
export default Toasts;