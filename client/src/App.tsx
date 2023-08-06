import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [country, setCountry] = useState('');
	const [position, setPosition] = useState('');
	const [wage, setWage] = useState(0);
	const addHooman = () => {
		axios
			.post('https://localhost:6969/create', {
				name: name,
				age: age,
				country: country,
				position: position,
				wage: wage
			})
			.then(() => console.log('Success'));
	};

	return (
		<>
			<div>
				<h3>Name: {name}</h3>
				<input
					onChange={(e) => setName(e.target.value)}
					type='text'
				/>
				<h3>Age: {age}</h3>
				<input
					onChange={(e) => setAge(e.target.value)}
					type='number'
				/>
				<h3>Country: {country}</h3>
				<input
					onChange={(e) => setCountry(e.target.value)}
					type='text'
				/>
				<h3>Position: {position}</h3>
				<input
					onChange={(e) => setPosition(e.target.value)}
					type='text'
				/>
				<h3>Wage: {wage}</h3>
				<input
					onChange={(e) => setWage(e.target.value)}
					type='number'
				/>
			</div>
			<div>
				<button onClick={addHooman}>Submit</button>
			</div>
		</>
	);
}

export default App;
