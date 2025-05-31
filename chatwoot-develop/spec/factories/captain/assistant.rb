FactoryBot.define do
  factory :aiagent_topic, class: 'AI Agent::Topic' do
    sequence(:name) { |n| "Topic #{n}" }
    description { 'Test description' }
    association :account
  end
end
