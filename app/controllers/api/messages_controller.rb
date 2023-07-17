class Api::MessagesController < ApplicationController
    def index
      @messages = Message.order("RANDOM()").limit(1)
      render json: @messages.as_json(only: [:message_content])
    end
  end
  