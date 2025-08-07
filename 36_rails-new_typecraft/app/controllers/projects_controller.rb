class ProjectsController < ApplicationController
  # GET /projects or /projects.json
  def index
    @projects = Project.all
  end
end
