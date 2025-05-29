<script>
import AgentMessage from 'widget/components/AgentMessage.vue';
import UserMessage from 'widget/components/UserMessage.vue';
import { mapGetters } from 'vuex';
import { MESSAGE_TYPE } from 'widget/helpers/constants';

export default {
  components: {
    AgentMessage,
    UserMessage,
  },
  props: {
    message: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      allMessages: 'conversation/getConversation',
    }),
    isUserMessage() {
      return this.message.message_type === MESSAGE_TYPE.INCOMING;
    },
    replyTo() {
      const replyTo = this.message?.content_attributes?.in_reply_to;
      return replyTo ? this.allMessages[replyTo] : null;
    },
  },
};
</script>

<template>
  <UserMessage
    v-if="isUserMessage"
    :id="`cwmsg-${message.id}`"
    :message="message"
    :reply-to="replyTo"
  />
  <AgentMessage
    v-else
    :id="`cwmsg-${message.id}`"
    :message="message"
    :reply-to="replyTo"
  />
  <div class="content-attributes">
    <span class="tag">Sentiment: {{ message.contentAttributes?.sentiment }}</span>
    <span class="tag">Source: {{ message.contentAttributes?.source }}</span>
    <span class="tag">Urgency: {{ message.contentAttributes?.urgency }}</span>
  </div>
</template>

<style scoped lang="scss">
.message-wrap {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  max-width: 90%;
}
</style>
