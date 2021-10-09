class PropertiesController < ApplicationController
  before_action :authorize_request
  before_action :require_permission, only: %i[show update destroy]
  before_action :set_property, only: %i[show update destroy]
  

  # GET /properties
  def index
    @properties = Property.where(owner_id: @current_owner.id)

    render json: @properties, include: :units, status: :ok
  end

  # GET /properties/1
  def show
      render json: @property
  end

  # POST /properties
  def create
    @property = Property.new(property_params)
    @property.owner = @current_owner

    if @property.save
      render json: @property, status: :created
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
    render json: { Message: 'Property was successfully destroyed.' }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_property
    @property = Property.find(params[:id])
  end

  def require_permission
    @property = Property.find(params[:id])

    return unless @property.owner_id != @current_owner.id

    render json: { Message: 'Unauthorized' }, status: :unauthorized
  end

  # Only allow a list of trusted parameters through.
  def property_params
    params
      .require(:property)
      .permit(:nickname, :address, :units_num, :img, :sq_ft, :price)
  end
end
