import axios from "axios";

const BASE_URL = "http://127.0.0.1:7071";

export default function apiService() {
    return new APIService();
}

class APIService {
    async apiValidateIsbn(isbn) {
        try {
            const response = await axios.get(BASE_URL + "/api/validateIsbn?isbn=" + isbn, {
                validateStatus: function (status) {
                    return status <= 400;
                }
            });
            return response.data;
        } catch (error) {
            alert(error.message);
        }
    }

    async apiCreateProof(isbn) {
        try {
            const response = await axios.get(BASE_URL + "/api/calculateCheckDigit?isbn=" + isbn, {
                validateStatus: function (status) {
                    return status <= 400;
                }
            });
            return response.data;
        } catch (error) {
            alert(error.message);
        }
    }

    async apiCreateIsbn(input) {
        try {
            const response = await axios.get(BASE_URL + "/api/createIsbn?gnumber=" + input.groupNr 
                                                        + "&vnumber=" + input.publisherNr 
                                                        + "&tnumber=" + input.titelNr, {
                validateStatus: function (status) {
                    return status <= 400;
                }
            });
            return response.data;
        } catch (error) {
            alert(error.message);
        }
    }
}
