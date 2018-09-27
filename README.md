# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, index: true|
|text|text||
|image_id|integer|null: false, foreign_key: true|
|category_id|integer|null: false, foreign_key: true|
|size_id|integer|foreign_key: true|
|brand_id|integer|foreign_key: true|
|price|integer|null: false|
|condition|integer|null: false|
|shipping_payer|integer|null: false|
|shipping_method_id|integer|null: false, foreign_key: true|
|area_id|integer|null: false, foreign_key: true|
|days_to_ship|string|null: false|
|likes_count|integer|null: false|
|trading_status|integer|null: false|
|shipping_fee|integer|null: false|
|seller_id|integer|null: false, foreign_key: true|
|buyer_id|integer|foreign_key: true|
|created_at|datetime|null: false|
|updeated_at|datetime|null: false|


### Association
- has_many :images
- belongs_to :category
- belongs_to :size
- belongs_to :brand
- belongs_to :shipping_method
- belongs_to :area
- belongs_to :seller, class_name: "User"
- has_one :buyer, class_name: "User"
- has_many :likes, dependent: :destroy
- has_many :comments
- has_many :personal_comments
- has_many :messages
- has_many :todos


## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string||
|img_num|integer||
|created_at|datetime||
|updated_at|datetime||

### Association
- belongs_to :item


## categoriesテーブル

|Column|Type|Options|
|------|----|-------|
|category|text||

### Association
- has_many :items


## brandsテーブル

|Column|Type|Options|
|------|----|-------|
|brand|text||

### Association
- has_many :items


## sizesテーブル

|Column|Type|Options|
|------|----|-------|
|size|text||

### Association
- has_many :items


## shipping_methodsテーブル

|Column|Type|Options|
|------|----|-------|
|method|text||

### Association
- has_many :items


## areasテーブル

|Column|Type|Options|
|------|----|-------|
|area|text||

### Association
- has_many :items
- has_many :users


## likesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :items


## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :item



## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|item_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :item
- belongs_to :user


## personal commentsテーブル

|Column|Type|Options|
|------|----|-------|
|item_id|integer|null: false, foreign_key: true|
|seller_id|integer|null: false, foreign_key: true|
|buyer_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :item
- belongs_to :seller, class_name: "User", through: :items
- belongs_to :buyer, class_name: "User", through: :items


