import React,{useState} from "react";

//create your first component



const Home = () => {
	const [inputValue,SetInputValue]=useState(" ");
	const [ToDos,setToDos ] = useState([]);
	return (
		<div className="container">
				<h1> My ToDos</h1>
				<ul>
					<li>
						<input
						type="text"
						onChange={(e)=> SetInputValue(e.target.value)}
						value={inputValue}
						onkeypress={(e) => {
							if (e.key==="Enter") {
								setToDos(ToDos.concat([inputValue]));
								SetInputValue (" ");
							}
						}}
						placeholder= "What should i do now?"> </input>
					</li>
					 {ToDos.map((item, index)=> 
					 <li>{item}{""} <i class="basurar"   onClick={() => setToDos(ToDos.filter((T, currentIndex) => index != currentIndex ))
					 }></i>
				 </li> 				
				)}
			</ul>				   
	     <div>[ToDos.length] task </div>	
		</div>  
    	);
	};				
 export default Home;
