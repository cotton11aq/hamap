# はまっぷグルメ

<strong>愛媛県八幡浜市のグルメ紹介サイトのリニューアル</strong>

知人が運営する愛媛県八幡浜市のグルメ紹介サイト「Hamap」をリニューアルしました。  
ジャンルやエリア別で探しやすい構成にするとともに、地域外の方に楽しんでいただけるサイトを目指しました。

![hamap – 16](https://user-images.githubusercontent.com/70832534/104080828-c120d780-526d-11eb-81c3-96a4cac55ecf.jpg)  

## URL 
<https://hamap-gourmet.com>
<br />
<br />

## 使用技術
<strong>フロントエンド</strong>  
HTML / CSS(Sass) / JavaScript / React   

<strong>インフラ</strong>  
AWS（S3 / Route53 / CloudFront / AWS Certificate Manager）  
<br />
Amazon S3の静的Webサイトホスティング機能を利用してインターネットに公開しました。  
CloudFront、Route53、ACMといったサービスを組み合わせて、最終的には独自ドメインかつHTTPSでアクセスできるようにしました。
<br />
<br />
<br />

## サイト概要
![hamap – 17](https://user-images.githubusercontent.com/70832534/103212836-4d1e2f80-494f-11eb-8401-d4e1e9593764.jpg)
<br />
<br />
<br />

### トップページから直接各カテゴリーへ
トップページから直接ジャンル、エリア別でお店リストを見られるよう改善しました。  
アイコンを使用することで、直感的に認識できるよう工夫しており、サイトを訪れた人に考えさせないことを目指しています。  
</br>
![hamap – 11](https://user-images.githubusercontent.com/70832534/103165290-2a115400-4859-11eb-891d-5e4aa01dcfcd.jpg)  
<br />
<br />
<br />

### お店リストとマップを並列で表示
マップで位置を確認しながらお店のリストを並行することで、ご自身の当日の行動に合わせたお店が選びやすくなりました。  
また、GoogleMapへのリンクにより、気になったお店をそのままお気に入りなどに登録することができます。
<br />
![hamap – 12](https://user-images.githubusercontent.com/70832534/103165294-2ed60800-4859-11eb-8f2a-26a1e6d45d76.jpg)  
<br />
<br />
<br />

### 各エリアの情報を追加
地域外の方を主なターゲットにしているため、八幡浜市の各エリアについての概要説明を追加しました。  
説明とともに地図イラストと写真を載せることで、より八幡浜市に興味を持っていただけるよう工夫しました。  
<br />
<br />
![hamap – 13](https://user-images.githubusercontent.com/70832534/103181126-e3ffd300-48e0-11eb-879b-990840cfa748.jpg)
<br />
<br />
<br />

### インスタ投稿者との連携
八幡浜市のグルメに関する投稿をされている方にお写真のご提供を依頼しました。  
より多くの方と一緒になって地域を活性化したいと思い、地元の方やゆかりのある方にご協力いただきました。
<br />
![hamap – 14](https://user-images.githubusercontent.com/70832534/103165715-7d39d580-485e-11eb-8174-e17c5d15d375.jpg)
