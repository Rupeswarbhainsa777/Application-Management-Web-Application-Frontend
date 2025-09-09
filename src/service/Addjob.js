import axios from "axios";

export const addJob = async (jobData) => {
    try {
        const response = await axios.post(
            "http://localhost:8089/job/add",
            jobData, // request body
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error adding job:", error);
        throw error;
    }
};
