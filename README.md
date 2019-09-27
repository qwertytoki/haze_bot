# ヘイズ指数お知らせくん

肺が弱いためシンガポールのヘイズの影響が心配です。
なので、ヘイズ指数お知らせ用LINE botをつくりました。

ヘイズ指数お知らせくん
https://t.co/PhRyp5oMvC?amp=1

政府公式で通知してくれるmyENVってアプリもあるんですが、LINEよく開くし、、、って方いらっしゃればぜひ友達登録してみてください

<img src="https://github.com/qwertytoki/haze_bot/blob/master/image/bot_home.png" width=320px>
<img src="https://github.com/qwertytoki/haze_bot/blob/master/image/bot_example.png" width=320px>

<img src="https://github.com/qwertytoki/haze_bot/blob/master/image/bot_QR.png" width=80px>

# haze_bot
notify haze level by using LINE bot, and GAS

## how to get haze value 
haze value is got from https://api.data.gov.sg/v1/environment/psi
I use PSI in this app.

## function list
* notify you when haze value is over 100,200,300,400
* notify you when haze value is under 100
* reply you if you ask haze level 

## tecninal spec

used GAS, LINE bot
It records to spreadsheet on every 30 mins.
compare with previous and current, 


previous  | current  | action
|:-------:|:--------:|:---------:|
under 99  | over 100 | notify
over 100  | under 99 | notify
over 100  | over 100 | do nothing 
over 100  | over 200 | notify
over 200  | under199 | notify
over 200  | over 200 | do nothing 

## how to run [get haze value] every time 
it's easy to do if you use GAS triggers

