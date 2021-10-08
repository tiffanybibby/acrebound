class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @owner = Owner.find_by(email: login_params[:email])
    if @owner.authenticate(login_params[:password])
      #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({ id: @owner.id })
      render json:
        {
          owner: @owner.attributes.except('password_digest'),
          token: token
        },
      status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @current_owner.attributes.except('password_digest'), status: :ok
  end

  private

  def login_params
    params.require(:authentication).permit(:email, :password)
  end
end
