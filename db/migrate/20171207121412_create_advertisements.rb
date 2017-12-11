class CreateAdvertisements < ActiveRecord::Migration
  def change
    create_table :advertisements do |t|
      t.string :title
      t.text :content
      t.string :email

      t.timestamps null: false
    end
  end
end
