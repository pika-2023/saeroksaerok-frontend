# 새록새록 🍀

회상 요법을 통해 치매를 예방하는 서비스 '새록새록'입니다. <br />
STT, AI image generator를 활용해 음성만으로 손쉽게 추억을 기록하고 그림으로 남길 수 있습니다.<br />
새록새록 떠올린 그날의 추억을 그림으로 간직하거나 친구와 공유하며 나눠보세요. <br /> <br />
더 자세한 소개는 [초록초록 팀 리드미](https://github.com/pika-2023)에서 확인하실 수 있습니다!<br />
실행 화면이 궁금하다면? 👉 [데모 영상 보러가기](https://youtu.be/1UAefrn8aKo) 

 <br />

# 서비스 살펴보기

![PRODUCT OVERVIEW](https://github.com/pika-2023/.github/assets/90823532/b476ae4b-262d-47ec-aec4-1811d2770ceb)

> 본 프로젝트는 2023년 05월 14일 일요일부터 06월 16일 금요일까지 구름 그리고 서울경제진흥원에서 주최하여 진행한 제 1회 새싹톤(SeSACTHON) 출품작입니다.

## 목차 :books:

- [Intro :tada: ](#도입-tada)
  - [Team](#Team)
  - [Background](#Background)
  - [Service](#Service)
  - [Demo](#Demo)
- [Architecture :rocket:](#Architecture-rocket)
  - [Design](#Design)
  - [Frontend-Dev](#Frontend-Dev)
  - [Backend-Dev](#Backend-Dev)
- [Licence :scroll:](#Licence-scroll)

### 도입 :tada:

#### Team

안녕하세요! **팀 초록초록**입니다.

저희는 기획자 1명, 디자이너 1명, 프론트엔드 2명, 백엔드 1명으로 구성되어 있습니다.

각 팀원에 대한 정보는 아래 이미지 혹은 텍스트를 클릭하여 확인 가능합니다.

<table>
<tr>
    <td align="center"><a href="깃허브url"><img src="https://github.com/pika-2023/saeroksaerok-frontend/assets/71865277/6c7cb32b-02c0-4139-a9f9-7e67de10eb6c" width="100px;" alt=""/><br /><sub><b>기획자 : 손수빈</b></sub></a></td>
    <td align="center"><a href="https://www.behance.net/gabinyun"><img src="https://mir-s3-cdn-cf.behance.net/user/230/424e3b1364243537.642c2adc47002.jpg" width="100px;" alt=""/><br /><sub><b>디자이너 : 윤가빈</b></sub></a></td>
    <td align="center"><a href="https://github.com/jangjia01234"><img src="https://avatars.githubusercontent.com/u/71865277?v=4" width="100px;" alt=""/><br /><sub><b>프론트엔드 : 장지아</b></sub></a></td>
    <td align="center"><a href="https://github.com/HongTaeHoon"><img src="https://avatars.githubusercontent.com/u/122140479?v=4" width="100px;" alt=""/><br /><sub><b>프론트엔드 : 홍태훈</b></sub></a></td>
    <td align="center"><a href="https://github.com/hgene0929"><img src="https://avatars.githubusercontent.com/u/90823532?v=4" width="100px;" alt=""/><br /><sub><b>백엔드 : 이현진</b></sub></a></td>

</tr>
</table>

#### Background

<b>노인 우울증과 치매 간의 상관관계</b>

노인 우울증으로 인한 인지 저하에 따라 치매 발병 위험이 12배에서 46배로 증가하며, 노인 우울증 조기 발견 후 치료시 완치율이 80%에 달하는 것으로 파악되었습니다. 또한, 연령에 따른 우울 증상 조사의 결과 노년층의 대부분을 차지하는 증상이 **기억력 저하**와 **외로움**인 것을 확인할 수 있었습니다.

![BACKGROUND](https://github.com/pika-2023/.github/assets/90823532/e887692b-7306-47b3-9b6e-3228e1eaf0c7)
![BACKGROUND (1)](https://github.com/pika-2023/.github/assets/90823532/b8e0b103-0646-4999-8796-259ee1dfa3a5)

<b>인지중재피료법의 한계점</b>

위와 같은 사회적 현상을 해소하기 위한 대표적인 방안인 인지중재치료는 30% 이상의 감소효과를 가지지만, **개인 맞춤화된 치료 필요** 및 **일상 속 지속적인 치료의 어려움** 등의 한계점을 동시에 가지는 것으로 나타났습니다.

![BACKGROUND (2)](https://github.com/pika-2023/.github/assets/90823532/7ecdcf40-8ee1-42bd-96d5-c5b627afdefb)

<b>외로움</b>

뿐만 아니라 고연령층의 특성에 따른 낮은 사회활동과 소통 횟수는 노인의 우울증을 야기하는데 비해 **소통 기반 서비스**의 사용으로 개인적 만족도와 자아존중감을 높일 수 있는 것으로 확인되었습니다.

![BACKGROUND (3)](https://github.com/pika-2023/.github/assets/90823532/105b2dd4-3342-442a-8eae-c04a0ae3390b)

#### Service

이에 저의 초록초록팀은 **회상요법**을 통한 **치매예방**서비스 **새록새록**을 그에 대한 솔루션으로 제시합니다.

![PRODUCT OVERVIEW (1)](https://github.com/pika-2023/.github/assets/90823532/fcc65418-3172-449d-bc0d-145e4e582de5)
![SOLUTION](https://github.com/pika-2023/.github/assets/90823532/7158478b-a9b3-4bb7-9f1e-5a40b4f47167)
![SOLUTION (1)](https://github.com/pika-2023/.github/assets/90823532/d8e0c4bf-968e-4498-a622-708453befdc4)
![DISTINCTION](https://github.com/pika-2023/.github/assets/90823532/fb18d103-1d8d-4d61-8c63-cbf76adc5150)

#### Demo 

전체 서비스 시연 영상은 [여기](https://youtu.be/1UAefrn8aKo)를 클릭하여 확인하실 수 있습니다.

#### 구현 기능

구현된 기능은 아래와 같습니다.

- :sparkles: 랜덤 키워드를 통한 회상요법
- :sparkles: 친구와 추억을 공유할 수 있는 커뮤니티
- :sparkles: Speech-to-Text 기능을 통해 키보드 프리하게 글을 작성할 수 있는 음성 기반 피드

![USER JOURNEY MAP](https://github.com/pika-2023/.github/assets/90823532/522fa784-eb88-4657-8acd-a1f1534b949e)

### Architecture :rocket:

#### Design

> 더 자세한 UI 작업물은 [피그마](https://www.figma.com/file/vv0OYNixPv2pL1pFThJ9Ad/%EC%83%88%EB%A1%9D%EC%83%88%EB%A1%9D?type=design&node-id=0-1&t=Gst40xWQ0W1mBxBF-0)에서 확인 가능합니다.

#### Frontend-Dev

> 더 자세한 소스코드는 [FRONTEND 디렉토리](https://github.com/pika-2023/saeroksaerok-frontend) 파일에서 확인 가능합니다.

사용한 기술 스택은 아래와 같습니다.

- 기술스택

#### Backend-Dev

> 더 자세한 소스코드는 [BACKEND 디렉토리](https://github.com/pika-2023/saeroksaerok-backend) 파일에서 확인 가능합니다.

사용한 기술 스택은 아래와 같습니다.

- Laguage/Framework: Java/Spring Framework
- Database: MySql, Redis, AWS S3, ElasticSearch
- API: OpenAi API
- Server: Apache Tomcat
- Deploy: Github Actions, AWS EC2, AWS S3, AWS CodeDeploy

### Licence :scroll:

[MIT 라이선스](./LICENSE)를 준수합니다.
