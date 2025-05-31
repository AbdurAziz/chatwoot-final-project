/* global axios */
import ApiClient from '../ApiClient';

class CopilotMessages extends ApiClient {
  constructor() {
    super('aiagent/copilot_threads', { accountScoped: true });
  }

  get(threadId) {
    return axios.get(`${this.url}/${threadId}/copilot_messages`);
  }

  create({ threadId, ...rest }) {
    return axios.post(`${this.url}/${threadId}/copilot_messages`, rest);
  }
}

export default new CopilotMessages();
