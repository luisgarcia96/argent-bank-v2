const API_URL = import.meta.env.VITE_API_URL;

const login = async (email, password) => {
	try {
		const response = await fetch(`${API_URL}/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		if (!response.ok) {
			throw new Error("Login failed. Please try again.");
		}
		return await response.json();
	} catch (error) {
		throw new Error("Login failed. Please try again.");
	}
};

const signup = async (username, password) => {
	try {
		const response = await fetch(`${API_URL}/user/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (!response.ok) {
			throw new Error("Signup failed. Please try again.");
		}
		return await response.json();
	} catch (error) {
		throw new Error("Signup failed. Please try again.");
	}
};

export { login, signup };
