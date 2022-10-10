import axios from "axios";

async function logout(token: string, navigate) {
    const url = "https://crypto-nest-api.herokuapp.com/sign-out"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promisse = await axios.post(url, {}, config);
    navigate("/");
}

const userHeaderUtils = {
    logout
}

export default userHeaderUtils;