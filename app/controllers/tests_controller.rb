class TestsController < ApplicationController

  def index
  end

  def item_detail
  end

  def order_status
  end

  def purchase_pre_confirmation
  render :layout => false
  end

  def purchase_confirmation
  render :layout => false
  end

  def putting_item
    render :layout => nil
  end

end
