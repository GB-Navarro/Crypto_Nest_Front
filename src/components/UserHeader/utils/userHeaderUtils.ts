import axios from "axios";

async function logout(token: string, navigate) {
    console.log("aaaaaaa");
    const url = "https://crypto-nest-api.herokuapp.com/sign-out"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promisse = await axios.post(url, {}, config);
    console.log("logout response => ", promisse);
    navigate("/");
}

const userHeaderUtils = {
    logout
}

export default userHeaderUtils;