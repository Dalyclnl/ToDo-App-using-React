import React,{useState} from "react";

//create your first component
const Home = () => {
	const [inputValue,SetInputValue]=useState(" ");
	const [ToDo,setToDos ] = useState([]);
	return (
		<div className="container">
			<h1> My ToDos</h1>
		 <ul>
			<li>
				<input
				 type="text"
			      onChange={(e)=> SetInputValue(e.target.value)}
				  value ={inputValue}
				  oneKeyPress ={(e) => {
					if (e.key==="Enter") {
						setToDos(todos.concat([inputValue]));
						SetInputValue (" ");
					}
				  }}
			placeholder= "What shoul i do now?"></input>
			</li>
			{todos.map((item, index)=> (

			) )}

			</li>
			
			</ul>
		
		<div> 20 task </div>
	</div>	
	);
};

export default Home;
