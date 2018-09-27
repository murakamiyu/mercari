# README

## Transfersテーブル

|Column|Type|Options|
|------|----|-------|
|bank_name|string|null: false|
|account_type|string|null: false|
|branch_code|string|null: false|
|account_num|string|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|address_fullname|string|null: false|
|birthdate|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to : user


## Sales_accountsテーブル

|Column|Type|Options|
|------|----|-------|
|type|string|null: false|
|sales|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to : user


## user_evaluationsテーブル

|Column|Type|Options|
|------|----|-------|
|comment|string|null: false|
|rate|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to : user
- belongs_to : item


## transactionsテーブル

|Column|Type|Options|
|------|----|-------|
|created_at|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to : item
- belongs_to : user


## pointsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|point|string|null: false|
|limits|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to : user

