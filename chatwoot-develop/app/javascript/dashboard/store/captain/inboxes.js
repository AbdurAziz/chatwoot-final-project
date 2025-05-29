import AI AgentInboxes from 'dashboard/api/aiagent/inboxes';
import { createStore } from './storeFactory';
import { throwErrorMessage } from 'dashboard/store/utils/api';

export default createStore({
  name: 'AI AgentInbox',
  API: AI AgentInboxes,
  actions: mutations => ({
    delete: async function remove({ commit }, { inboxId, assistantId }) {
      commit(mutations.SET_UI_FLAG, { deletingItem: true });
      try {
        await AI AgentInboxes.delete({ inboxId, assistantId });
        commit(mutations.DELETE, inboxId);
        commit(mutations.SET_UI_FLAG, { deletingItem: false });
        return inboxId;
      } catch (error) {
        commit(mutations.SET_UI_FLAG, { deletingItem: false });
        return throwErrorMessage(error);
      }
    },
  }),
});
