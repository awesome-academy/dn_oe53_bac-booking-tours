class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by email: params[:session][:email].downcase
    if user&.authenticate(params[:session][:password])
      log_in user
      redirect_to root_path
    else
      flash[:danger] = t ".flash"
      render :new
    end
  end

  def destroy
    session.delete :user_id
    @current_user = nil
    redirect_to root_path
    flash[:success] = t ".flash"
  end
end
