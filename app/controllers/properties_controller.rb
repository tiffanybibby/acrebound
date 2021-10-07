# frozen_string_literal: true

# Controllers for properties
class PropertiesController < ApplicationController
  before_action :authorize_request
  before_action :set_property, only: %i[show update destroy]
  

  # GET /properties
  def index
    @properties = Property.where(owner_id: @current_owner.id)

    render json: @properties, include: :units, status: :ok
  end

  # GET /properties/1
  def show
    if @property.owner_id == @current_owner.id
      render json: @property, include: :units
    else
      render json: { status: 404, Message: 'Record not Found!' }
    end
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
    if @property.owner_id == @current_owner.id &&
         @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy if @property.owner_id == @current_owner.id
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_property
    @property = Property.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def property_params
    params
      .require(:property)
      .permit(:nickname, :address, :units, :img, :sq_ft, :price)
  end
end
