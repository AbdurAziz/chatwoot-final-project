FactoryBot.define do
  factory :aiagent_inbox, class: 'AI AgentInbox' do
    association :aiagent_topic, factory: :aiagent_topic
    association :inbox
  end
end
