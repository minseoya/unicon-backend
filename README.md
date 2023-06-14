# 🦄Unicon-backend

<img src="https://user-images.githubusercontent.com/37966668/231990989-8fcaec4a-bf09-435d-b47a-36296dd16ac0.png" />



## 프로젝트 정보
-  가구 e-commerce 모델링 프로젝트.
<br/>

###  0. products 

이케아라는 브랜드를 떠올렸을때 가장 먼저 생각나는 오프라인 쇼룸을 모티브로 프로덕트의 주 방향으로 잡았습니다. <br />
오프라인 쇼룸에서 여러 제품이 어우러진 인테리어를 감상하고, 해당 브랜드의 제품을 실제로 접촉하고 경험하면서 소비자들과 소통하는 이케아의 강점을 홈페이지에 녹아내고자 하였습니다. 
또한 온라인 쇼룸 페이지를 통해서 인테리어 이미지와 관련 제품들을 나열하여 이케아의 장점을 살리고자 하였습니다.<br />
그 외에도 검색기능을 사용자의 편리를 위해 카테고리와 제품의 이름에서 검색단어를 서칭해오게 구현하였고, 구매 제품에 대한 리뷰를 소비자가 편리하게 게시하기위해서 구매이력 확인 페이지까지 소비자의 편의를 고민하며 구현에 집중하였습니다. 
### 프로젝트 기간

2023/04/03 ~ 2023/04/14 (약 2주)

### Front-end

- 김정환(Product Manager) <a href="https://github.com/ggkim0614"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- 최선영 <a href="https://github.com/suny0ung"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

  
### Back-end

- 김민서(Project Manager) <a href="https://github.com/minseoya"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- 임성근 <a href="https://github.com/lsg622"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- 최상현 <a href="https://github.com/Dongrang072"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="52" height="52" /><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="52" height="52" /></div>



## 협업 툴

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>
<br/>

<br />

## ERD 구조

![Untitled (2)](https://github.com/minseoya/unicon-backend/assets/119482288/609f2625-145d-4b49-8e21-408b948145c7)


# 주요 기능 설명
### [BACKEND]
## 👨‍💻 구현 기능 목록
1. 1. 로그인 / 회원가입
2. Nav(검색)
3. 상세 리스트 / 제품 페이지
4. 장바구니
5. 주문
6. 결제
7. 별점 & 리뷰
8. 쇼룸
<br/>
영상 : [결과물 시연 영상 링크](https://tv.kakao.com/v/437291521)
    : [검색 영상 링크](https://tv.kakao.com/v/437333759) 



<br />

#### 1. 로그인 / 회원가입

- 로그인 api 이용한 로그인/ 회원가입 기능 구현
- 로그인시 DB에 저장된 email, password를 입력된 값과 비교하여 확인하는 로그인 인증절차를 거침.
- 주문, 결제, 장바구니 등등 각 과정에서 인가 권한을 확인 할 수 있는 JWT를 로그인시 부여함.
- 회원가입시 구매에 필요한 포인트 부여, 개인정보 보호를 위한 비밀번호 암호화 처리

<img src = "https://user-images.githubusercontent.com/119482288/233228105-da7b8b93-1e2b-48b8-87de-6c39ce68cda8.mov"/>




<img src = "https://user-images.githubusercontent.com/119482288/233230201-a77531b5-521a-4bf6-b30c-6e01786ecee3.mov"/>

#### 2. Nav(검색)

- 소비자가 원하는 검색단어를 포함한 메인카테고리 서브카테고리, 제품이름을 모두 서칭하여 보여주는 API를 구현.

<img src="https://user-images.githubusercontent.com/119482288/233228387-6c172a2b-e80c-4b5c-bce6-e0c1ca37e322.mov"/>



#### 3. 상세 리스트 / 제품 페이지

- 하나의 페이지에서 소비자가 구매하는 제품에 대한 모든 정보를 볼수 있게 소비자의 니즈를 충족
- 제품리스트API의 재활용성을 위해 필터에 대한 조건(카테고리, 가격순차)을API class(쿼리빌더)화 시켜서 리소스를 줄이고 효율성을 극대화.
- 열람한 도서의 비슷한 장르를 평점대로 나열하여 추천 리스트 작성해 로그인 기능구현

<img src = "https://user-images.githubusercontent.com/37966668/232383804-1432ed20-cad6-4cf0-b63b-40c0a642b446.mov"/>
<img src="https://user-images.githubusercontent.com/37966668/232384212-2c71ce5b-e667-4e98-97e5-1034e97962fe.mov"/>

#### 4. 장바구니

- 구매하고자 하는 제품 장바구니에 저장
- 장바구니 목록에 담은 상품들을 주문 목록에 반영하기 위해 장바구니에만 한정되는 CRUD를 구현.
- 모든 기능은 인증인가를 필수로 요구.
- 삭제는 개별적인 물품에 삭제 엔드포인트를 이용.
- 업데이트는 목록에 있는 모든 상품에, 장바구니 생성은 상세 페이지에, 장바구니 리스트를 불러오는것은 메인페이지에서 구현함.

#### 5. 주문
  
- 주문 페이지 내에서 직접 주문목록 및 수량을 수정하는것이 아니라, 장바구니 페이지에서 수정 가능하게 구현함.
- 주문 페이지에서는 구매 자체에만 집중을 할 수 있도록 유도.
- 개인정보 보호를 위해 보안상 구매자의 구매번호 난수화 적용.

#### 6. 결제

- 제품 가격에 따라 보유 포인트 차감
- 결제 이후 장바구니 초기화
- 주문시, Jwt를 통해 해당 유저만 주문 할 수 있도록 확인 절차 이후, 주문과정에서 생성된 난수화된 주문번호를 통해 해당 구매자와 수량을 파악 할 수 있도록 구성함. 결제 과정에서 문제가 발생하면, 이전 과정을 취소 할 수 있도록 transaction 기능도 적용됨. 최종 결제 이후 장바구니가 삭제, 포인트 사용량이 업데이트 되도록 구성함.

<img src = "https://user-images.githubusercontent.com/119482288/233228689-4d05f29f-515c-4c36-9708-8ff612acdc3c.mov"/>


#### 7. 별점 & 리뷰

- DB에 남은 구매자의 주문번호와 영수증 테이블을 체크하여 해당상품을 구매한 구매자만 구매할수 있도록 로직을 구연하여 리뷰에 대한 신뢰성을 높였다.
- 또한 구매상품 확인 페이지를 만들어 구매자가 구매한 상품을 리뷰를 남기게 쉽게 구현하였다.

<img src="https://user-images.githubusercontent.com/119482288/233230411-81a67737-9668-4751-bed4-2912a754397d.mov"/>



<img src = "https://user-images.githubusercontent.com/119482288/233228939-86c12f85-8764-49fb-9065-313eb993c0be.mov"/>



<img src = "https://user-images.githubusercontent.com/119482288/233228992-329d4bc0-f8f2-4e16-b9ea-82647eabbb9b.mov"/>


#### 8. 쇼룸

- 쇼룸과 함께 안에 있는 관련상품을 쇼룸넘버로 그룹화하여 리스트로 보여주면서 사용자의 구매를 유도하였음

 
<img src = "https://user-images.githubusercontent.com/119482288/233228619-48639ee6-581d-4d3a-befd-d9bb9842b34e.mov"/>


















#### Reference

- 이 프로젝트는 위케아 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
