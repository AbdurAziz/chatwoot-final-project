import CopilotThreadsAPI from 'dashboard/api/aiagent/copilotThreads';
import { createStore } from './storeFactory';

export default createStore({
  name: 'CopilotThreads',
  API: CopilotThreadsAPI,
});
