FactoryBot.define do
  factory :aiagent_inbox, class: 'AI AgentInbox' do
    association :aiagent_assistant, factory: :aiagent_assistant
    association :inbox
  end
end
