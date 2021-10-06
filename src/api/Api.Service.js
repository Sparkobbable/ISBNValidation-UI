import axios from "axios";

const BASE_URL = "127.0.0.1";

export default function apiService() {
    return new APIService();
}

class APIService {
    async apiValidateIsbn(isbn) {
        try {
            const response = await axios.get(BASE_URL + "/validateIsbn?isbn=" + isbn, {
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
            const response = await axios.get(BASE_URL + "/createProof?isbn=" + isbn, {
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
            const response = await axios.get(BASE_URL + "/createIsbn?groupNr=" + input.groupNr 
                                                        + "&publisherNr=" + input.publisherNr 
                                                        + "&titelNr=" + input.titelNr, {
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
