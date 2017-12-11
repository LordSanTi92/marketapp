class AddPriceToAdvertisements < ActiveRecord::Migration
  def change
    add_column :advertisements, :price, :integer
    add_column :advertisements, :currency, :string
  end
end
