💪건강능력평가
=============
## ❓배경
* 요즘 [스마일 테스트](https://ktestone.com/kapable.github.io/smileColorTest/), [mbti 테스트](https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC)
같이 결과를 공유하는 간단한 테스트가 유행 중이다.
* 청소년들은 주변 인물에 특히 영향을 많이 받으므로 자신이 속한 집단에서 자신이 어느 정도인지 가늠하고 싶어한다.
* 이 흐름에 맞춰 공공 데이터 포털에 있는 [교육부_학교건강검사 표본조사결과(건강조사)](https://www.data.go.kr/tcs/dss/selectFileDataDetailView.do?publicDataPk=15051012) 
오픈 API를 이용하여 학생들의 조사 결과를 평균과 비교하여 나타내어주는 **건강능력평가**를 제작하게 되었다.

## 🧑‍🎓대상
* 각종 테스트에 관심이 많은 **청소년**

## 🧑‍💻프레임워크
* FRONT : <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
* BACK : <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">

## 〰️상세 설명
* 0교시부터 5교시까지 나누어 실제 시험을 보는 듯한 느낌을 내주었다.
  * **0교시** : 이름, 성별, 교육과정(초등학생, 중학생, 고등학생) 영역
  * **1교시** : 식습관 영역. 총 5문항
  * **2교시** : 생활 영역. 총 4문항
  * **3교시** : 안전 영역. 총 5문항
  * **4교시** : 인터넷 영역. 총 3문항
  * **5교시** : 금단 영역. 총 3문항

## 📸시연
<div style={{float: "left"}}>
  <img width="20%" alt="image" src="https://user-images.githubusercontent.com/64712993/211264850-f519babf-f622-458c-b834-d186e3e9e7d9.png">
  <img width="20%" alt="image" src="https://user-images.githubusercontent.com/64712993/211264882-06c3487c-73a7-4376-a3f6-712fce10bfda.png">
  <img width="20%" alt="image" src="https://user-images.githubusercontent.com/64712993/211264950-3ab5f0ab-f68b-41de-ae00-f00204ce9bba.png">
  <img width="20%" alt="image" src="https://user-images.githubusercontent.com/64712993/211265412-0c8def4b-5ae0-4a96-a17c-a88fef22ec90.png">
</div>

------------
### 🖼️UI/UX
* Wireframe : [Figma](https://www.figma.com/file/qY506RjIQMBP8WRpvrHz9U/%EC%B0%B0%EB%96%A1%EC%BD%A9%EB%96%A1%ED%95%B4%EC%BB%A4%ED%86%A4?node-id=0%3A1&t=6bkHlNL7flp53ro7-0)
* 이미지 : [Unsplash](https://unsplash.com/)

### 😁발전한 점
* 폰트, 애니메이션 적용을 처음 해보았고 각종 라이브러리를 더 능숙하게 다룰 수 있게 되었다.
* 정한 기간 내에 프로젝트를 완수하였다.
* 프론트, 백 모두 직접 개발해보면서 풀스택에 한 발짝(?) 가까워졌다.
* 오픈 API를 이용하는 방법을 알게 되었다.

### 🥲아쉬웠던 점
* 오픈 API를 이용하였지만 유의미하게 적용이 되는 것은 없었다. 문항 수가 적은 탓에 등급을 세분화하기 어려워 1~5등급으로 조정하였고,
교육과정에 따라 설문조사 결과가 없기도 했기 때문에 결과를 계산하는 데에 매우 적은 문항을 이용하기도 했다. (중학생인 경우 금단 영역에서 
1개의 문항으로 등급이 계산된다.)
* 해당 성별/교육과정의 평균을 도출하여 방사형 그래프로 출력하여 사용자와 비교하려고 했으나, 평균을 도출할 적절한 식을 찾지
못해 평균 방사형 그래프는 결국 구현하지 못했다.
* 결과를 공유하는 페이지를 제작하고 싶었으나 그러지 못했다.
* FRONT와 BACK 코드를 합치는 과정에서 지금까지 해왔던 커밋 메세지들이 다 덮어씌워졌다.🥲
* FRONT 
  * 질문이 넘어갈 때마다 애니메이션을 적용하고 싶었는데 영역이 바뀔 때만 애니메이션이 적용되었다.
  * 반응형 웹사이트가 아니라서 항상 화면 크기가 고정되어있어 불편하였다.

* BACK
  * DB를 활용하지 않고 단순 데이터를 가공하여 프론트에 보내는 반쪽짜리 Backend 개발이었다.
