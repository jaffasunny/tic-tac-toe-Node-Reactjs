import React, { useState } from "react";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const logIn = () => {};

	return (
		<div className="login">
			<label>Login</label>

			<input
				type="text"
				placeholder="Username"
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<button onClick={logIn}>Login</button>
		</div>
	);
}

export default Login;
