import axios from "axios";

function formatData(event, name: string, email: string, password: string, confirmedPassword: string) {

    event.preventDefault();

    const data = {
        name: name,
        email: email,
        password: password,
        confirmedPassword: confirmedPassword
    }

    return data;
}

async function register(data) {

    try {
        await axios.post("http://localhost:5000/sign-up", data);
    } catch (error) {
        console.log("The following error has ben ocurred \n", error);
    }
}

const signUpUtils = {
    formatData,
    register
}

export default signUpUtils;