[![Azure Static Web Apps CI/CD](https://github.com/TeamChamomile/chamomile/actions/workflows/azure-static-web-apps-agreeable-ground-0cb02be00.yml/badge.svg)](https://github.com/TeamChamomile/chamomile/actions/workflows/azure-static-web-apps-agreeable-ground-0cb02be00.yml)

# Chamomile 라이브 데모
Azure Static Web App, Azure Functions, 그리고 GitHub Actions로 만들어졌습니다. [캐모마일 페이지](https://agreeable-ground-0cb02be00.azurestaticapps.net/about)에 놀러오세요.

# Chamomile 소개
안녕하세요, 여러분. 갑작스럽게 찾아온 전세계 역병으로 매일의 일상이 온전히 바뀌었습니다. 혹자는 2025년으로 예상되었던 산업의 발전이 코로나로 인해 10년 당겨졌다고 평가하고, 뉴노멀이 나쁘지 않다는 이야기도 삼삼히 들립니다. 하지만, 매일 아침 맞이하는 우리의 일상은 조금 더 작아진 생활 반경과 공동체 안에서 답답하기만 합니다. 

실제로 OECD 국가 별 불안과 불안 증세를 코로나19 발병 전인 전년도와 2020년 초기를 비교했을 때 증가폭을 보였으니 개인의 문제는 아닌 것이 분명합니다. 마음이 찡한 부분은 한국이 다른 OECD 나라 비교군 중에서 최고 증가폭인 36.8%를 기록했다는 점입니다. 
![image](https://user-images.githubusercontent.com/37167493/129480634-1f45292d-e349-4c1a-a907-f9d41b45ae0e.png)
_OECD 나라 별 불안과 불안 증세를 2019년과 2020년 초기를 비교한 자료입니다. (출처: OECD)_
[_"S. Korea hit hardest by COVID-19 blues among OECD nations"_](
https://english.hani.co.kr/arti/english_edition/e_national/996602.html)

각자의 자리에서 고군분투하고 있는 우리 스스로에게 잘하고 있다고 위로해볼까요? 여러 분 안에서 응원의 말을 꺼내기 어렵다면 저희가 도와드릴게요. 매일 아침 마음의 비타민을 건내주는 따뜻한 캐모마일 페이지를 소개합니다.

# 로컬에서 실행하는 방법
1. 리포지토리 Clone.
    ```git clone https://github.com/TeamChamomile/chamomile/.git```
1. /chamomile/react-app 으로 이동해서 npm 패키지를 다운로드.
    ```npm install```
1. Azure Functions Core Tools 설치.
[Azure Functions Core Tools 다운로드](https://docs.microsoft.com/ko-kr/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash)
1. /chamomile/api 아래 local.settings.json 파일을 생성하여 다음 내용 추가.
    ```
    {
        "Host": {
          "CORS": "http://localhost:3000"
        }
    }
    ```
1. /chamomile/api 로 이동해서 Azure functions 시작.
```func start```
1. /chamomile/react-app 으로 이동해서 npm 시작.
```npm start```

# Credits
이 페이지는 Microsoft Learn의 Azure Static Web Apps와 GitHub Actions 모듈을 차근히 완료한 페이지입니다. 여러분도 [Hackalearn 클라우드 도전과제](https://docs.microsoft.com/ko-kr/learn/challenges?id=eae8a699-e376-419f-b837-3661ed77b239&WT.mc_id=devcloud-33673-juyoo&ocid=AID3035096)로 쉽게 만들어보세요. 
