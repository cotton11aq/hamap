# はまっぷグルメ

愛媛県八幡浜市のグルメ紹介サイトのリニューアル

知人が運営する愛媛県八幡浜市のグルメ紹介サイト「Hamap」をリニューアルしました。  
ジャンルやエリア別で探しやすい構成にするとともに、地域外の方に楽しんでいただけるサイトを目指しました。

![rectangle_large_type_2_a80ca0bcb7e96333c7f6e7a19cff695a](https://user-images.githubusercontent.com/70832534/103057299-7141df80-45e2-11eb-8e63-b54f683afdf4.jpg)  

## URL 
<https://hamap-gourmet.com>
</br>
</br>

## 使用技術
<strong>フロントエンド</strong>  
HTML / CSS(Sass) / JavaScript / React   

<strong>インフラ</strong>  
AWS（S3 / Route53 / CloudFront / AWS Certificate Manager）  
</br>

## AWS構成図
Amazon S3の静的Webサイトホスティング機能を利用してインターネットに公開しました。  
CloudFront、Route53、ACMといったサービスを組み合わせて、最終的には独自ドメインかつHTTPSでアクセスできるようにしました。
</br>
![Untitled Diagram](https://user-images.githubusercontent.com/70832534/102887843-f91cd200-449a-11eb-90d1-9dec4ce42378.png)  
</br>

## サイト概要
![hamap – 17](https://user-images.githubusercontent.com/70832534/103169644-06fa9a80-4881-11eb-9776-94ae144008cb.jpg)

<!--![hamap – 15](https://user-images.githubusercontent.com/70832534/103165772-09e49380-485f-11eb-9d95-b9b031ad9ea9.jpg)
</br>
</br>
![hamap – 16](https://user-images.githubusercontent.com/70832534/103165774-0d781a80-485f-11eb-8190-fcaa9e3c97c7.jpg)
</br>
</br>-->
<!--
### 現状
<strong>地域外の方向けの説明が不足しており、かつ、情報がまとまっていない。</strong>  

* お店の位置を示すマップがなく、具体的な位置が俯瞰で見れない。  
* グルメと関係が薄い情報が掲載されており、情報が散らばっている。  
* トップページから各カテゴリーの詳細情報までが遠い。  
* 地域についての説明がなく、内向きになっている。  
</br>
</br>

### 改善と方針
<strong>地域外の方にもわかりやすく情報を届けるために、簡単に情報にたどり着ける構造にするとともに、八幡浜市についての情報も追加する。</strong>  

* お店の位置を示すマップがなく、具体的な位置が俯瞰で見れない。  
* グルメと関係が薄い情報が掲載されており、情報が散らばっている。  
* トップページから各カテゴリーの詳細情報までが遠い。  
</br>
</br>

<strong>目的</strong>  
地域外からの新規顧客を増やす  
<strong>目標</strong>  
当サイトを経由してお店の予約がなされる  
<strong>ターゲット</strong>  
20〜40代の男女で、旅行や地域のグルメが好きなフットワークが軽い方  
</br>
-->

### トップページから直接各カテゴリーへ
トップページからと直接ジャンル、エリア別でお店リストを見られるよう改善しました。  
アイコンを使用することで、直感的に認識できるよう工夫しており、サイトを訪れた人に考えさせないことを目指しています。  
</br>
![hamap – 11](https://user-images.githubusercontent.com/70832534/103165290-2a115400-4859-11eb-891d-5e4aa01dcfcd.jpg)  
</br>
</br>
### お店リストとマップを並列で表示
マップで位置を確認しながらお店のリストを並行することで、ご自身の当日の行動に合わせたお店が選びやすくなりました。  
また、GoogleMapへのリンクにより、気になったお店をそのままお気に入りなどに登録することができます。
</br>
![hamap – 12](https://user-images.githubusercontent.com/70832534/103165294-2ed60800-4859-11eb-8f2a-26a1e6d45d76.jpg)  
</br>
</br>
### 各エリアの情報を追加
トップページから直接ジャンル、エリア別でお店リストを見られるよう改善しました。  
アイコンを使用することで、直感的に認識できるよう工夫し、サイトを訪れた人に考えさせないことを目指しています。
</br>
![hamap – 13](https://user-images.githubusercontent.com/70832534/103165295-2f6e9e80-4859-11eb-9544-57b0d0bf1289.jpg)  
</br>
</br>
### インスタ投稿者との連携
八幡浜市のグルメに関する投稿をされている方にお写真のご提供を依頼させていただきました。  
より多くの方と一緒になって地域を活性化したいと想い、地元の方やゆかりのある方にご協力いただきました。
</br>
![hamap – 14](https://user-images.githubusercontent.com/70832534/103165715-7d39d580-485e-11eb-8174-e17c5d15d375.jpg)
