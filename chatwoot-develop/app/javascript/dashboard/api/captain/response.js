/* global axios */
import ApiClient from '../ApiClient';

class AI AgentResponses extends ApiClient {
  constructor() {
    super('aiagent/assistant_responses', { accountScoped: true });
  }

  get({ page = 1, searchKey, assistantId, documentId, status } = {}) {
    return axios.get(this.url, {
      params: {
        page,
        searchKey,
        assistant_id: assistantId,
        document_id: documentId,
        status,
      },
    });
  }
}

export default new AI AgentResponses();
