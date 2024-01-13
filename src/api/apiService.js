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

const getUser = async (token) => {
	try {
		const response = await fetch(`${API_URL}/user/profile`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status !== 200) {
			throw new Error("User not found.");
		}
		return await response.json();
	} catch (error) {
		throw new Error("User not found.");
	}
};

const editUserName = async (token, data) => {
	try {
		const response = await fetch(`${API_URL}/user/profile`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		});
		if (response.status !== 200) {
			throw new Error("User not found.");
		}
		return await response.json();
	} catch (error) {
		throw new Error("User not found.");
	}
};

export { login, signup, getUser, editUserName };
