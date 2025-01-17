import axiosClient from "../../api/axiosClient";
import { Entry } from "../../shared/types/entities/Entry";

class EntryService {
    static async createEntry(email: string): Promise<number> {
        const params = new URLSearchParams();
        params.append('email', email);
        const response = await axiosClient.post(`/entry/?${params}`)
        return response.data.entryId;
    }

    static async finishEntry(entryId: number): Promise<void> {
        await axiosClient.put(`/entry/finish/${entryId}`);
    }

    static async getTopEntries(): Promise<Entry[]> {
        const response = await axiosClient.get('/entry/top');
        return response.data.topEntries;
    }
}

export default EntryService;