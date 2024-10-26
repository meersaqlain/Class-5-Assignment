export default  function Navbar(){
    return(
        <nav className="grid grid-cols-12 grid-rows-none justify-center bg-white  h-full gap-6  " >
            <div></div>
         <div className=" col-span-3 bg-red-700 w-96 h-72 m-4 rounded-lg" ></div>
           <div className="col-span-3 bg-green-700 w-96 h-72 m-4 rounded-lg" ></div>
            <div className="col-span-3  bg-blue-700  w-96 h-72 m-4 rounded-lg"></div>
          <div className="col-span-3"></div>
         
          
           <div className="col-span-3  bg-purple-700 w-96 h-72 m-4 rounded-lg "></div>
           <div className="col-span-3  bg-yellow-700 w-96 h-72 m-4 rounded-lg"></div>
           
        </nav>
    )
       
}