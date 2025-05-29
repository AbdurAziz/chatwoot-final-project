module Enterprise::Account::ConversationsResolutionSchedulerJob
  def perform
    super

    resolve_aiagent_conversations
  end

  private

  def resolve_aiagent_conversations
    AI AgentInbox.all.find_each(batch_size: 100) do |aiagent_inbox|
      inbox = aiagent_inbox.inbox

      next if inbox.email?

      AI Agent::InboxPendingConversationsResolutionJob.perform_later(
        inbox
      )
    end
  end
end
