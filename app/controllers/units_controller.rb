class UnitsController < ApplicationController
  before_action :set_unit, only: %i[show update destroy]
  before_action :authorize_request

  # GET /units
  def index
    @property = Property.find(params[:property_id])
    @units = Unit.where(property_id: @property.id, owner_id: @current_owner.id)

    render json: @units.as_json(include: { property: { include: :owner } }),
           status: :ok
  end

  # GET /units/1
  def show
    if @unit.owner_id == @current_owner.id &&
         @unit.property_id == Property.find(params[:property_id]).id
      render json: @unit
    else
      render json: { status: 404, Message: 'Record not Found!' }
    end
  end

  # POST /units
  def create
    @unit = Unit.new(unit_params)
    @unit.owner = @current_owner
    @unit.property_id = params[:property_id]

    if @unit.save
      render json: @unit, status: :created
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /units/1
  def update
    if @unit.owner_id == @current_owner.id &&
         @unit.property_id == Property.find(params[:property_id]).id &&
         @unit.update(unit_params)
      render json: @unit
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /units/1
  def destroy
    @unit.destroy if @unit.owner_id == @current_owner.id
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_unit
    @unit = Unit.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def unit_params
    params
      .require(:unit)
      .permit(:unit_number, :beds, :baths, :sq_ft, :monthly_rent, :occupied)
  end
end
