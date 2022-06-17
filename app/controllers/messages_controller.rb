class MessagesController < ApplicationController
    def chatroom_messages
        chatroom = Chatroom.find_by(id: params[:id])
        if chatroom
            messages = chatroom.messages
            render json: messages
        else
            render json: {errors: ['Not Found']}, status: :not_found
        end
    end

    def create

    end
end
