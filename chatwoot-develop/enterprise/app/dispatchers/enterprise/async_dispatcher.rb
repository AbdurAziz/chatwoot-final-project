module Enterprise::AsyncDispatcher
  def listeners
    super + [
      AI AgentListener.instance
    ]
  end
end
