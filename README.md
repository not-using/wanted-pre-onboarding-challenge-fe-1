# TO-DO !

### 1. 프로젝트 요약
- 구현내용 : 회원가입, 로그인 및 todo CRUD 프론트 화면 구현
- 참여인원 : 1인 ([notusing11](https://github.com/notusing11) 프론트)
- 기술스택 : React, CRA


### 2. 프로젝트 요구사항
 - [원티드 프리온보딩 챌린지 사전 미션](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)


### 3. 구현 기능
3-1. 로그인 및 회원가입

<img width="600" alt="스크린샷 2023-01-05 오후 11 13 30" src="https://user-images.githubusercontent.com/74622889/210800196-c8aae66d-0af0-4deb-aafa-19e4135d0ff9.png"><img width="600" alt="로그인 성공" src="https://user-images.githubusercontent.com/74622889/210799708-a72fc65a-aab9-4e86-a989-230ab67adf2f.png">

- 입력된 값이 이메일과 비밀번호 규칙에 맞는지 확인하고 사용자에게 알립니다
- 규칙에 맞는 입력값을 서버로 전달, 로그인한 토큰을 저장합니다. 
- 로그인 하지 않은 사용자는 다시 로그인할 수 있도록 리다이렉트 합니다.

3-2. 할일 목록 

<img width="600" alt="스크린샷 2023-01-05 오후 11 13 06" src="https://user-images.githubusercontent.com/74622889/210800124-e2f93933-d058-484d-bc1a-435da6496f76.png">
<img width="600" alt="스크린샷 2023-01-05 오후 11 03 45" src="https://user-images.githubusercontent.com/74622889/210799775-f243e3e6-cd2b-4b3c-ab57-c9347013e115.png">
<img width="600" alt="스크린샷 2023-01-05 오후 11 27 56" src="https://user-images.githubusercontent.com/74622889/210803174-519a89c8-ed54-481f-a150-2e10d19930e1.png">

- 할일 목록을 조회하고 개별 내용을 추가, 수정, 삭제할 수 있습니다.
- 새로고침 시에도 내용이 유지되고, 개별 할일 내용을 조회 순서에 따라 뒤로가기로 조회할 수 있습니다.
- 새로고침을 하지 않아도 변경사항을 확인할 수 있습니다.

### 4. 실행 방법
[서버역할을 하는 백엔드 코드](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)를 clone 받은 후 실행합니다
 ```
yarn && yarn start
```
이 프론트 코드를 clone 받은 후 실행합니다
```
npm i && npm start
```

### 5. 프로젝트 기술스택
- 프레임워크 : Create-React-App
- 라이브러리 : axios, react-router-dom

### 6. 프로젝트 진행 일정 상세
6-1. 1차 요구사항 MVP 구현
- 구현내용 : 회원가입, 로그인 및 todo CRUD 프론트 화면 디자인 및 구현
- 진행시기 : 2023.01.03 ~ 2023.01.05 (3일간)
- 참여인원 : 1인 ([notusing11](https://github.com/notusing11) 프론트)

6-2. 과제검토 및 개선 (예정)
- 과제 설명 및 개선방향에 대한 의견을 듣고 필요에 따라 수정
- 진행시기 : 2023.01.09 ~ 2023.01.20 (예정)
- 검토자 : 원티드 프리온보딩 특강 연사 (예정)


