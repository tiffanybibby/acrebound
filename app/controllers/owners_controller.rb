class OwnersController < ApplicationController
  # POST /users
  def create
    @owner = Owner.new(owner_params)

    if @owner.save
      @token = encode({ id: @owner.id })
      render json: {
               owner: @owner.attributes.except('password_digest'),
               token: @token
             }, status: :created
    else
      render json: @owner.errors, status: :unprocessable_entity
    end
  end

  private

  def owner_params
    params.require(:owner).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
