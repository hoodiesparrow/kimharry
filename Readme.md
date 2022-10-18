# 유니네 공부방 출석체크봇 김해리

> 출석체크 채널에 메세지를 보내면 자동으로 출석체크를 해주는 고양이



hoodiesparrow :: NNrmJxVENsYVkW4o



1. 봇 셋업

2. state

   `/checkin` => create a document in mongoDB, containing user information and so on

   - 인사말(Math.random?)
   - username - add command!
     - if there is no registered username, require username first
   - check if there is another study ongoing

   `/checkout`

   1. how to pass arguments
   2. how to connect to mongoDB
   3. how to collect study time

   - 인사말
   - check if there is a study ongoing

3. deploy



### Refs

- [How To Make A Discord Bot(Fusion Terror)_Youtube](https://www.youtube.com/playlist?list=PLv0io0WjFNn9LDsv1W4fOWygNFzY342Jm)



# October, 17th

1. DB
   1. create db ✅
   2. build scheme
   3. connection in code
2. notion
   1. create page/db
   2. figure out how to write to 1.
   3. args settings



# October, 18th

1. deploy via AWS
   1. VPC, Subnet, SG, IGW
2. Testing

