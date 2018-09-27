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
|credit_card_id|references|null: false, foreign_key: true|

### Association
- has_many :points
- has_many :user_evaluations
- belongs_to :area
- has_many :likes
- has_many :comments
- has_many :comment2s
- has_many :allocations
- has_many :messages, through: :allocations
- has_many :todos
- has_many :items
