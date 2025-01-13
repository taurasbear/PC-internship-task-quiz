import axiosClient from "../../api/axiosClient";
import { ApiError } from "../../shared/types/ApiError";

class QuestionService {
    static async getAll(): Promise<any> {
        const response = await axiosClient.get('/question');
        return response.data;
    }
}

export default QuestionService;