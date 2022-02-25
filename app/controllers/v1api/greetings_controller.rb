# frozen_string_literal: true
module v1api
  class GreetingsController < ApplicationController
  def index
   render json: { greetings: Greetings.random }
  end
  end
end
