https://twitter.com/workoutholic1/status/1177526212106670080


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

