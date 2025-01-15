import axiosClient from "../../api/axiosClient";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";

class EntryAnswerService {
    static async addEntryAnswers(
        entryAnswers:EntryAnswer[]
    ) : Promise<number> {
        const response = await axiosClient.post('/entryanswer', entryAnswers);
        return response.data;
    }
}

export default EntryAnswerService;