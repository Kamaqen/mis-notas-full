class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # POST /login
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      user.regenerate_token
      render json: { token: user.token, id: user.id }
    else
      respond_unauthorized("Incorrect email or password")
    end
  end

  # GET /logout
  def destroy
    # current_user.invalidate:token
    head :ok
  end

end
