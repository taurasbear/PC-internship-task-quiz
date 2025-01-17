import axiosClient from "../../api/axiosClient";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";

class EntryAnswerService {
    static async addEntryAnswers(entryAnswers: EntryAnswer[]): Promise<number> {
        const response = await axiosClient.post('/entryanswer', entryAnswers);
        return response.data.nextQuestionId;
    }

    static async updateEntryAnswers(entryAnswers: EntryAnswer[]): Promise<number> {
        const response = await axiosClient.put('/entryanswer', entryAnswers);
        return response.data.nextQuestionId;
    }

    static async deleteEntryAnswers(entryAnswerIds: number[]) : Promise<void> {
    await axiosClient.delete('/entryanswer', {data: entryAnswerIds});
    }
}

export default EntryAnswerService;