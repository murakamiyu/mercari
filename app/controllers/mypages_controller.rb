class MypagesController < ApplicationController

def index
	render action: 'mypage-sidebar'
end

end
