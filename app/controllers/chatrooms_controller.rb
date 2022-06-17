class ChatroomsController < ApplicationController
    wrap_parameters format: []

    def index
        chatrooms = Chatroom.all
        render json: chatrooms
    end

    def show 
        chatroom = Chatroom.find_by(id: params[:id])
        if chatroom
            render json: chatroom
        else 
            render json: {errors: ['Chatroom not found']}, status: :not_found
        end
    end

    def create
        current_user = User.find_by(id:session[:user_id])
        if current_user
            chatroom = Chatroom.create!(chatroom_params)
            render json: chatroom
        else
            render json: {errors: ['Not Authorized']}, status: :unauthorized
        end
    end

    def destroy
        current_user = User.find_by(id:session[:user_id])
        if current_user.id == 1
            chatroom = Chatroom.find_by(id: params[:id])
            if chatroom
                chatroom.destroy
                render json: {}
            else
                render json: {errors: ['Chatroom not found']}, status: :not_found
            end
        else
            render json: {errors: ['Not Authorized']}, status: :unauthorized
        end
    end

    private

    def chatroom_params
        params.permit(:name)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end


end
