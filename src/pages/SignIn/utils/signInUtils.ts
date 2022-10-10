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
    try {
        const response: any = await axios.post("https://crypto-nest-api.herokuapp.com/sign-in", data);
        const { name, email, token } = response.data;
        
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_NAME_KEY, name);
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_EMAIL_KEY, email);
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_KEY, token);

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