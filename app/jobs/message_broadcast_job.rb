class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    
  end
end
