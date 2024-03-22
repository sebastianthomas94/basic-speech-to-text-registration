import { postData } from "../services/apiService";




const url = "http://localhost:8000/understand-language";

export const checkAndPost = async (questianNumber, transcript, callback) => {
    let res;

    try {
        switch (questianNumber) {
            case 1:
                res = await postData(url, { data: transcript, field: "name" });
                callback(res.value.split(" ")[0]);
                break;
            case 2:
                res = await postData(url, { data: transcript, field: "dateofbirth" });
                break;
            case 3:
                res = await postData(url, { data: transcript, field: "email" });
                break;
            case 4:
                res = await postData(url, { data: transcript, field: "phone" });
                break;
            default:
                res = {};
                break;
        }
        console.log(res);
        return res;
    } catch (error) {
        throw error;
    }
   
};
