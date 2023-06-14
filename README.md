# unicon-backend
# 44기 1차 프로젝트 : Unicon 팀

<img src="https://user-images.githubusercontent.com/37966668/231990989-8fcaec4a-bf09-435d-b47a-36296dd16ac0.png" />

## 구현 웹페이지

- 위케아 홈페이지를 기반으로 가구 e-commerce 모델링 코딩 프로젝트.
- 이 프로젝트는 Wecode 부트캠프 커리큘럼의 일부로써 제작되었습니다.

## 프로젝트 정보

### 프로젝트 기간

2023/04/03 ~ 2023/04/14 (약 2주)

### Front-end

- 김정환(Product Manager) <a href="https://github.com/ggkim0614"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- 최선영 <a href="https://github.com/suny0ung"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>
  
  
### Back-end

- 김민서(Project Manager) <a href="https://github.com/minseoya"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- 임성근 <a href="https://github.com/lsg622"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- 최상현 <a href="https://github.com/Dongrang072"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>

### 서비스 소개
<br />
- 온라인에서 오프라인 환경처럼 구매 가능한 가구 e-commerce 제공 플랫폼.
- 제품과 사용자를 연결시켜주는 매개체 역할을 하는 플랫폼
- 다양한 제품 이미지와 쇼룸을 활용하여 오프라인 매장에서 경험 할 수 있는 제품 경험 기회를 온라인으로 제공.
- 타겟층 : 오프라인 환경이 아닌 온라인에서의 가구 쇼핑을 추구하는 고객.


## 협업 툴

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>
<br/>

# 👨‍💻 구현 페이지 목록
1. 로그인 페이지 (임성근)
2. 메인 페이지 
3. 상품 리스트 페이지 (김민서)
4. 상품 상세 페이지 / 리뷰 (김민서)
5. 쇼룸 페이지 (김민서)
6. 구매한 상품 페이지 (김민서)
7. 장바구니 페이지 (최상현)
8. 주문/결제 페이지 (최상현/임성근)

<br />

## ERD 구조

![Untitled (2)](https://github.com/minseoya/unicon-backend/assets/119482288/609f2625-145d-4b49-8e21-408b948145c7)

## 주요 기능 설명
### [BACKEND]

### ** 0. products **

이케아라는 브랜드를 떠올렸을때 가장 먼저 생각나는 오프라인 쇼룸을 모티브로 프로덕트의 주 방향으로 잡았습니다. <br />
오프라인 쇼룸에서 여러 제품이 어우러진 인테리어를 감상하고, 해당 브랜드의 제품을 실제로 접촉하고 경험하면서 소비자들과 소통하는 이케아의 강점을 홈페이지에 녹아내고자 하였습니다. <br />
온라인 쇼룸 페이지를 통해서 인테리어 이미지와 관련 제품들을 나열하여 이케아의 장점을 살리고자 하였고, 제품 나열페이지에서는 호버되는 이미지들을 통해서 실제로 접촉하여 제품을 느꼈을때 다 방면으로 바라보는 시선을 구현하고자 하였습니다. <br />
그 외에도 검색기능을 사용자의 편리를 위해 카테고리와 제품의 이름에서 검색단어를 서칭해오게 구현하였고, 구매 제품에 대한 리뷰를 소비자가 편리하게 게시하기위해서 구매이력 확인 페이지까지 소비자의 편의를 고민하며 구현에 집중하였습니다. 

<br />
<br />

#### 1. 메인 페이지
<br />
- 가구, 조명, 쇼파 검색 기능
- 장르별 제품 리스트 출력
- 쇼룸을 통해 해당 제품의 디테일 페이지로 손쉽게 이동
<br />
<img src ="https://user-images.githubusercontent.com/119482288/233228246-1cd42c62-939e-427a-8140-c5738ae38896.mov"/>


#### 2. Nav(검색)
<br />
- 소비자가 원하는 검색단어를 포함한 메인카테고리 서브카테고리, 제품이름을 모두 서칭하여 보여주는 API를 구현.
<br />
<img src="https://user-images.githubusercontent.com/119482288/233228434-40dd427f-cd12-4254-9670-e73eaf769521.mov"/>



#### 3. 상세 리스트 / 제품 페이지
<br />
- 하나의 페이지에서 소비자가 구매하는 제품에 대한 모든 정보를 볼수 있게 소비자의 니즈를 충족
- 제품리스트API의 재활용성을 위해 필터에 대한 조건(카테고리, 가격순차)을API class(쿼리빌더)화 시켜서 리소스를 줄이고 효율성을 극대화.
<br />
<img src = "https://user-images.githubusercontent.com/37966668/232383804-1432ed20-cad6-4cf0-b63b-40c0a642b446.mov"/>
<img src="https://user-images.githubusercontent.com/37966668/232384212-2c71ce5b-e667-4e98-97e5-1034e97962fe.mov"/>


#### 4. 별점 & 리뷰
<br />
- DB에 남은 구매자의 주문번호와 영수증 테이블을 체크하여 해당상품을 구매한 구매자만 구매할수 있도록 로직을 구연하여 리뷰에 대한 신뢰성을 높였다.
- 또한 구매상품 확인 페이지를 만들어 구매자가 구매한 상품을 리뷰를 남기게 쉽게 구현하였다.

<br />

<img src="https://user-images.githubusercontent.com/119482288/233230411-81a67737-9668-4751-bed4-2912a754397d.mov"/>
<br />


<img src = "https://user-images.githubusercontent.com/119482288/233228939-86c12f85-8764-49fb-9065-313eb993c0be.mov"/>

<br />

<img src = "https://user-images.githubusercontent.com/119482288/233228992-329d4bc0-f8f2-4e16-b9ea-82647eabbb9b.mov"/>

<br />
#### 5. 쇼룸
<br />
-쇼룸과 함께 안에 있는 관련상품을 쇼룸넘버로 그룹화하여 리스트로 보여주면서 사용자의 구매를 유도하였음
<br />
<img src = "https://user-images.githubusercontent.com/119482288/233228619-48639ee6-581d-4d3a-befd-d9bb9842b34e.mov"/>


 

















#### Reference

- 이 프로젝트는 위케아 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
