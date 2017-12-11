class AdvertisementsController < ApplicationController
  def index
    @adv = Advertisement.all
  end

  def new
    @adv = Advertisement.new
  end

  def create
    @adv = Advertisement.new(adv_params)

    if @adv.save
      if params[:images]
        params[:images].each { |image|
          @adv.images.create(image: image)
        }
      end
      redirect_to @adv
    else
      render 'new'
    end
  end

  def edit
    @adv = Advertisement.find(params[:id])
  end

  def update
    @adv = Advertisement.find(params[:id])
    if @adv.update_attributes(adv_params)
      if params[:images]
        params[:images].each { |image|
          @adv.images.create(image: image)
        }
      end
      redirect_to @adv
    else
      render 'edit'
    end
  end

  def show
    @adv = Advertisement.find(params[:id])
    @img = @adv.images
  end

  def destroy
    @adv = Advertisement.find(params[:id])
    @adv.destroy
    redirect_to root_path
  end

  private

  def adv_params
    params.require(:advertisement).permit(:title, :content, :email, :price, :currency, :images)
  end
end
