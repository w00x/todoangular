class AddUserToTodoItem < ActiveRecord::Migration
  def change
    add_reference :todo_items, :user, index: true, foreign_key: true
  end
end
