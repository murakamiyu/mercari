# README

## 最終課題アプリ
mercari(フリーマーケットアプリ)

## 実装機能予定
### 共通機能
→ユーザー情報登録(ニックネーム、紹介文、フルネーム、住所、e-mail、電話番号、パスワード、生年月日など)、サインイン、サインアウト、クレジットカード登録、取引評価(出品者と購入者双方)、商品に対するコメント

### 出品側機能
→商品情報登録機能(名前、画像、説明、カテゴリー、サイズ、ブランド、配送方法、配送料、発送地域、商品状態、価格、売買状況など)、出品機能、売上管理(売上計上、売上金振込口座登録)

### 購入側機能
→売上計上、いいね機能(商品に対して)、取引評価(出品者と購入者双方)、ポイント管理(ポイント計上、有効期限管理)


## transfersテーブル

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


## sales_accountsテーブル

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


## allocationsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|message_id|references|null: false, foreign_key: true|

### Association
- belongs_to : user
- belongs_to : message


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|text|string|null: false|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|

### Association
- has_many : allocations
- has_many : users, through: :allocations
- belongs_to : item
