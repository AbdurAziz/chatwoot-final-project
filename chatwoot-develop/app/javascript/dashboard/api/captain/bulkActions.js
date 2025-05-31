import ApiClient from '../ApiClient';

class AI AgentBulkActionsAPI extends ApiClient {
  constructor() {
    super('aiagent/bulk_actions', { accountScoped: true });
  }
}

export default new AI AgentBulkActionsAPI();
