class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email
      t.boolean :organization
      t.string :img_url
      t.string :location
      t.string :summary

      t.timestamps
    end

    add_index :users, :username, unique: true
    # add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
