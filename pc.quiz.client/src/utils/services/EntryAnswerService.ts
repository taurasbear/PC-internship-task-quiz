import axiosClient from "../../api/axiosClient";

class EntryAnswerService {
    static async addEntryAnswerSingle(
        questionId: number,
        answerOptionId: number,
        entryId?: number
    ) : Promise<number> {
        const params = new URLSearchParams();
        params.append('questionId', questionId.toString());
        params.append('answerOptionId', answerOptionId.toString());
        if (entryId) {
            params.append('entryId', entryId.toString());
        }
        const response = await axiosClient.post(`/entryanswer?${params.toString()}`);
        return response.data;
    }
}

export default EntryAnswerService;