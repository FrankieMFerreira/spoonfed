class Api::V1::EventsController < ApplicationController

	def index
		@events= Event.all
		render json: @events
	end

	def create
		id = Auth.decode(response.request.env["HTTP_AUTHORIZATION"])[0]['user_id']
		@event = Event.new(event_params)
		@event.user_id = id
		if @event.save
			render json: @event
		end
	end

	def show
			@event = Event.find(params[:id])
			render json: @event
	end


	def update
		id = params["event"]["id"]
		@event = Event.find(id)
		if @event.update(event_params)
			render json: @event
		end
	end

	def destroy
		@event = Event.find(params[:id])
		@event.destroy
	end

	end


	private

	def event_params
		params.permit(:title, :description, :num_attendees, :party_template_id, :date, :start_time, :end_time)
	end
