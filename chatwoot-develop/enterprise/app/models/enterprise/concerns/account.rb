module Enterprise::Concerns::Account
  extend ActiveSupport::Concern

  included do
    has_many :sla_policies, dependent: :destroy_async
    has_many :applied_slas, dependent: :destroy_async
    has_many :custom_roles, dependent: :destroy_async

    has_many :aiagent_assistants, dependent: :destroy_async, class_name: 'AI Agent::Assistant'
    has_many :aiagent_assistant_responses, dependent: :destroy_async, class_name: 'AI Agent::AssistantResponse'
    has_many :aiagent_documents, dependent: :destroy_async, class_name: 'AI Agent::Document'

    has_many :copilot_threads, dependent: :destroy_async
  end
end
