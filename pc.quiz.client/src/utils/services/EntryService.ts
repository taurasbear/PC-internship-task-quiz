import axiosClient from "../../api/axiosClient";

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
}

export default EntryService;