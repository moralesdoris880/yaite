class MessagesController < ApplicationController
    def chatroom_messages
        chatroom = Chatroom.find_by(id:params[:id])
        if chatroom
            messages = chatroom.messages
            render json: messages
        else
            render json: {errors: ['Not Found']}, status: :not_found
        end
    end

    def create
        current_user = User.find_by(id:session[:id])
        if current_user
            chatroom = Chatroom.find_by(id:params[:id])
            if chatroom 
                message = Chatroom.messages.create!(message_params)
                render json: message
            else
                render json: {errors: ['Not found']}, status: :not_found
            end
        else
            render json: {errors: ['Not Authorized']}, status: :unauthorized
        end
    end

    def update 
        current_user = User.find_by(id:session[:id])
        if current_user
            message = current_user.messages.find_by(id:params[:id])
            if message
                message.update(message_params)
                render json: message
            else
                render json: {errors: ['Not Found']}, status: :not_found
            end
        else
            render json: {errors:['Not Authorized']}, status: :unauthorized
        end
    end

    def destroy
        current_user = User.find_by(id:session[:id])
        if current_user.id == 1
            message = Message.find_by(id:params[:id])
            message.destroy
            render json: {}
        else
            render json: {errors: ['Not Authorized']}, status: :unauthorized
        end
    end
end
