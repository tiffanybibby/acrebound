class UnitsController < ApplicationController
  before_action :authorize_request
  before_action :get_property, except: :index
  before_action :require_permission_units, only: %i[update destroy]
  before_action :set_unit, only: %i[update destroy]

  # GET /units
  def index
    @units = Unit.where(owner_id: @current_owner.id)
    render json: @units
  end

  # POST /units
  def create
    @unit = @property.units.new(unit_params)
    @unit.owner = @current_owner

    if @unit.save
      render json: @unit,
             status: :created,
             Message: 'Unit was successfully created.'
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /units/1
  def update
    if @unit.update(unit_params)
      render json: @unit, status: :ok, Message: 'Unit was successfully updated.'
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /units/1
  def destroy
    @unit.destroy if @unit.owner_id == @current_owner.id
    render json: { Message: 'Unit was successfully destroyed.' }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_unit
    @unit = @property.units.find(params[:id])
    return unless @unit.owner_id != @current_owner.id
    render json: { Message: 'Unauthorized' }, status: :unauthorized
  end

  def get_property
    @property = Property.find(params[owner_id: @current_owner.id])
  end

  # Only allow a list of trusted parameters through.
  def unit_params
    params
      .require(:unit)
      .permit(:unit_number, :beds, :baths, :sq_ft, :monthly_rent, :occupied)
  end
end
