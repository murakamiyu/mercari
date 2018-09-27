## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|introduction|text|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|postal_code|string|null: false|
|area_id|references|null: false, foreign_key: true|
|city|string|null: false|
|address1|string|null: false|
|address2|string||
|telephone|integer|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|birthday|date|null: false|

### Association
- has_many :points, dependent: :destroy
- has_one :transfer_to, dependent: :destroy
- has_one :credit_card, dependent: :destroy
- has_many :user_evaluations
- belongs_to :area
- has_many :likes, dependent: :destroy
- has_many :comments, dependent: :destroy
- has_many :personal_comments, dependent: :destroy
- has_many :allocations, dependent: :destroy
- has_many :messages, through: :allocations
- has_many :todos, dependent: :destroy
- has_many :items, dependent: :destroy
