module Enterprise::Concerns::Inbox
  extend ActiveSupport::Concern

  included do
    has_one :aiagent_inbox, dependent: :destroy, class_name: 'AI AgentInbox'
    has_one :aiagent_topic,
            through: :aiagent_inbox,
            class_name: 'AI Agent::Topic'
  end
end
