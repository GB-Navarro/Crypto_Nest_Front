import axios from "axios";

function formatData(event, email: string, password: string) {
    event.preventDefault();

    const data = {
        email: email,
        password: password
    }

    return data;
}

async function login(data, navigate) {
    const localStorageKey = "&E)H@McQfTjWnZr4"

    try {
        const token: any = await axios.post("http://localhost:5000/sign-in", data);

        localStorage.setItem(localStorageKey, token);

        navigate("/user");
    } catch (error) {
        console.log("The following error has ben ocurred \n", error);
    }
}

const signInUtils = {
    formatData,
    login
}

export default signInUtils;