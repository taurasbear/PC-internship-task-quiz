import axiosClient from "../../api/axiosClient";
import { Question } from "../../shared/types/entities/Question";

class QuestionService {
    static async getAll(): Promise<Question[]> {
        const response = await axiosClient.get('/question');
        return response.data;
    }
}

export default QuestionService;