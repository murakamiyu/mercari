# README

## Transfersテーブル

|Column|Type|Options|
|------|----|-------|
|bank_name|string|null: false|
|account_type|string|null: false|
|branch_code|integer|null: false|
|account_num|integer|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|address_fullname|string|null: false|
|birthdate|string|null: false|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to : user


## Sales_accountsテーブル

|Column|Type|Options|
|------|----|-------|
|type|integer|null: false|
|sales|integer|null: false|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|

### Association
- belongs_to : user


## user_evaluationsテーブル

|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|rate|integer|null: false|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|

### Association
- belongs_to : user
- belongs_to : item


## transactionsテーブル

|Column|Type|Options|
|------|----|-------|
|created_at|integer|null: false|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|

### Association
- belongs_to : item
- belongs_to : user


## pointsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|point|integer|null: false|
|limits|integer|null: false|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to : user

