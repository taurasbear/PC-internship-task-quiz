import axiosClient from "../../api/axiosClient";
import { Question } from "../../shared/types/entities/Question";

class QuestionService {
    static async getQuestionDetails(questionId: number, entryId: number): Promise<Question[]> {
        const params = new URLSearchParams();
        params.append('questionId', questionId.toString());
        params.append('entryId', entryId.toString());
        const response = await axiosClient.get(`/question/?${params}`);
        return response.data;
    }

    static async getPreviousQuestionId(questionId: number): Promise<number> {
        const response = await axiosClient.get(`/question/previous/${questionId}`);
        return response.data.previousQuestionId;
    }

    static async getQuestionCount(): Promise<number> {
        const response = await axiosClient.get('/question/count');
        return response.data.questionCount;
    }
}

export default QuestionService;