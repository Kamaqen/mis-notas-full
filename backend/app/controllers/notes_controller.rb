class NotesController < ApplicationController
  def index
    notes = Note.order(created_at: :desc)
    render json: notes, status: 200
  end

  def show
    note = Note.find_by(id: params[:id])
    if note
      render json: note, status: 200
    else
      render json: {
        error: 'Note Not Found'
      }
    end
  end

  def create
    note = Note.new(note_params)
    note.user = current_user

    if note.save
      render json: note, status: 200
    else
      render json: {
        errors: note.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def update
    note = Note.find_by(id: params[:id])
    if note
      note.update(
        title: params[:title],
        body: params[:body],
        category: params[:category],
        user_id: params[:user_id],
        is_active: params[:is_active]
      )
      render json: note
    else
      render json: {
        error: 'Note Not Found'
      }
    end
  end

  def destroy
    note = Note.find_by(id: params[:id])
    return unless note

    note.destroy
    render json: 'Note Has Been Deleted.'
  end

  private

  def note_params
    params.permit(%i[
                    title
                    body
                    category
                    user_id
                    is_active
                  ])
  end
end