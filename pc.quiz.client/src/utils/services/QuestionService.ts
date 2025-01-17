import axiosClient from "../../api/axiosClient";
import { Question } from "../../shared/types/entities/Question";

class QuestionService {
    static async getAll(): Promise<Question[]> {
        const response = await axiosClient.get('/question');
        return response.data;
    }

    static async getQuestionDetails(questionId: number, entryId: number): Promise<Question[]> {
        const params = new URLSearchParams();
        params.append('questionId', questionId.toString());
        params.append('entryId', entryId.toString());
        const response = await axiosClient.get(`/question/?${params}`);
        return response.data;
    }
}

export default QuestionService;