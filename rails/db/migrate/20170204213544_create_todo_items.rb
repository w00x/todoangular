class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :desc
      t.boolean :done

      t.timestamps null: false
    end
  end
end
