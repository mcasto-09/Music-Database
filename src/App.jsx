import { useState } from "react";
import reactLogo from "./assets/react.svg";


function App() {
 
  
  return (
    <div>
      <div className="font-display flex justify-between p-3 text-xl ">
        <p>Discover</p> 
        <p>Login | Create Account</p>
      </div>
      {/* <div className="flex justify-end pr-20">
        Login | Create Account
      </div> */}
      <div className='font-display text-center pt-72 text-4xl pb-4'>
        <h1>The Music Database </h1>
      </div> 
      <div className="flex justify-center font-display text-center text-lg border-solid border-2 w-[25rem] mx-auto" > 
        <input className="w-full" type="text" placeholder="search" name="search"></input>
    </div>
    </div>
  );
}

export default App;
