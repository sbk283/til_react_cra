# JSX 1.

- React 에서 사용하는 html 태그
- 용도 : 컴포넌트 만들기

## 1. Component 란?

- HTML 태그 형태를 리턴하는 함수
- 화살표(`rafce`) 이든, 일반함수(`rfce`) 이든 `HTML 태그를 리턴`하면 인정.
- JSX 는 `반드시 하나의 태그`에 `포함되도록 배치`하여야 한다.
- `<></>` 를 `Fragment` 라고 합니다.
- 파일명 및 컴포넌트 함수는 반드시 `파스칼` 이어야 한다.

## 2. Component 와 Page 폴더 구분(관례상)

- `폴더명은 반드시 소문자`로 하여야 한다.
- 각 화면단위로 구성한다면 `pages 폴더`에 저장
- `하나의 html 을 완성하기 위한 배치 요소`라면 `components 폴더`에 저장
- `/src/components/소문자컴포넌트/대문자컴포넌트.jsx`
- `/src/components/소문자컴포넌트/대문자컴포넌트.css`
-

# css

## 1. JSX 에 css 추가하기

- 일반적으로 src 폴더 하단에 `css 폴더`를 생성함.
- css 파일은 모두 이곳에 배치한다.
- css 파일명은 컴포넌트명과 동일하게 파스칼케이스를 사용한다.
- 예) Header.css, Footer.css, Slide.css
- 예) header.css, footer.css, slide.css

## 2. css 사용하기

### src/index.css

- 기본적인 css 적용
- index.js 에 적용되는 css
- css 를 불러들이는 import 형태 확인

```js
import "./index.css";
```

### src/pages/StartPage.jsx

- src/css/StartPage.css 파일 생성
- css 파일 불러들이기

```jsx
import "../css/StartPage.css";
```

- Footer.jsx

```jsx
import "../css/Footer.css";
```

- Header.jsx

```jsx
import "../css/Header.css";
```

- Slide.jsx

```jsx
import "../css/Slide.css";
```

## 3. 외부 css 라이브러리 사용하기

### 3.1. 링크 방식

- 위 처럼 리액트에서 활용은 추천하지 않습니다.
- 일반 웹 퍼블리싱에서만 활용하시길 추천
- reset.css : https://meyerweb.com/eric/tools/css/reset/
- normalize.css : https://necolas.github.io/normalize.css/8.0.1/normalize.css
- fontAwsome : https://cdnjs.com/libraries/font-awesome
- 구글 폰트 : https://fonts.google.com

- public/index.html 파일에 추가

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="마인드 다이어리 서비스입니다." />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>마인드 다이어리</title>
    <!-- reset.css -->
    <link
      rel="stylesheet"
      href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"
    />
    <!-- normalize.css -->
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <!-- font-awsome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- 구글 폰트 -->
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 3.2. npm 설치 방식 권장

```bash
npm i normalize --force
npm i font-awesome --force
npm i reset-css --force
npm install react-icons --save --force
```

### 3.3. 폰트는 `index.css 에서 작성` 권장

- index.css 에 모든 페이지에 적용되는 기본 파일이므로
- link 방식 보다는 @import url 방식 권장

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
ul,
ol {
  list-style: none;
}
html {
}
body {
}
```

## 4. 일반 css 적용해 보기

- css : `import "../css/StartPage.css";`
- jsx : `<div className="box">로고</div>`
- css 내용 : `.box {  background-color: red;}`

- StartPage.jsx

```jsx
import React from "react";
// css
import "../css/StartPage.css";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <>
      <div className="box">로고</div>
      {/* 헤더 컴포넌트 */}
      <Header></Header>
      {/* 슬라이드 컴포넌트 */}
      <Slide></Slide>
      {/* 분류메뉴 컴포넌트 */}
      {/* 공지 컴포넌트 */}
      {/* 추천 컴포넌트 */}
      {/* 새목록 컴포넌트 */}
      {/* 앱설치 안내 컴포넌트 */}
      {/* 하단 컴포넌트 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
```

- StartPage.css

```css
.box {
  background-color: red;
}
```

## 5. `module.css` 적용해 보기

- index.css : 공통 적용 내용. (클래스 명 충돌 가능성)
- StartPage.css 를 파일명 변경 : `StartPage.module.css`
- css 가 아니라 module.css 를 불러들임.

```jsx
// import from "../css/StartPage.css"
import styles from "../css/StartPage.module.css";
```

```jsx
// <div className="box">로고</div>
<div className={styles.box}>로고</div>
```

## 6. scss 활용하기

- 소스 가독성이 상당히 좋다.
- css 를 체계적으로 생성 및 관리

### 6.1. scss 설치하기

```bash
npm i sass -D --force
```

## 6.2. 기본 폴더 생성

- src/scss 폴더 생성 권장
- src/scss/test.scss 파일 생성
- `Watching Sass...` 실행

### 6.3. 중첩(Nesting)

```scss
.wrap {
  position: relative;
}
.wrap .notice {
  width: 800px;
  height: 400px;
}
.wrap a {
  display: block;
}
.wrap:hover {
  background-color: red;
}
.wrap span {
  display: block;
}
```

### 6.4. 변수(Variable)

- 변수는 `$` 를 사용한다.
- 가능하면 외부파일로 생성하시길 권장
- 변수만 모은 파일명은 `_파일명.scss` 은 `css 생성을 하지 않는게` 좋다.

```scss
$width-800: 800px;
$height-400: 400px;
$red: red;

.wrap {
  position: relative;
  .notice {
    width: $width-800;
    height: $height-400;
  }
  a {
    display: block;
  }
  &:hover {
    background-color: $red;
  }
  span {
    display: block;
  }
}
```

- 변수만 모은 `_val.scss`, `_color.scss` 파일 생성

```scss
// _val.scss
$width-800: 800px;
$height-400: 400px;

// _color.scss
$red: red;
```

### 6.5. 함수 (mixin)

- `파일명은 _ 붙이고 생성`, css 생성되지 않도록
- `src/scss/_mixins.scss` 파일 생성

```scss
@mixin flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin border-line($num, $cc) {
  border: $num solid $cc;
}
```

```scss
// test.scss
@import "val";
@import "color";
@import "mixins";

.wrap {
  position: relative;
  @include flex-center-center;
  .notice {
    @include flex-center-center;
    @include border-line(5px, red);
    width: $width-800;
    height: $height-400;
  }
  a {
    display: block;
  }
  &:hover {
    background-color: $red;
  }
  span {
    display: block;
  }
}
```

### 6.6. `react에서 scss` 쓰기로 했다면?

- 반드시 `npm i sass -D --force` 로 설치가 되었다는 전제로 진행
- `Watching Sass...` 끄고 작업하기.
- pages/StartPage.scss 파일 생성

```jsx
import "./StartPage.scss";
```

- pages/StartPage`.module.scss` 파일명 수정

```jsx
import styles from "./StartPage.module.scss";

return (
  <div className={styles.wrap}>
    <div className={styles.box}>로고</div>
  </div>
);
```

# JSX 2.

## 1. JSX 에서 변수 사용하기

- 값의 종류 : 글자, 숫자, null, undefined, boolean, [], {}, 함수 등
- 보간법(`{}`)을 이용하기 : 중괄호 표현법.

```jsx
import React from "react";

function Header() {
  // js 코드자리
  const title = "웹 서비스 제목";
  const version = "1.0.0";

  function say() {
    return " 하하하";
  }
  // 아래는 html 코드자리
  return (
    <div>
      <div>{title}</div>
      <div>버전: {version}</div>
      <div>{say()}</div>
    </div>
  );
}

export default Header;
```

## 2. style 태그에 `css 객체` 넣기

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  // html jsx 코드 자리
  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          color: "#fff",
          border: "5px solid hotpink",
        }}
      >
        {title}
      </div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 아래처럼 변수에 담아서 전달하는걸 추천

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const bgObj = {
    backgroundColor: "green",
    color: "#fff",
    border: "5px solid hotpink",
  };

  // html jsx 코드 자리
  return (
    <div>
      <div style={bgObj}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 응용 버전

```jsx
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const isLogin = true;

  const bgObj = {
    backgroundColor: "green",
    color: "#fff",
    border: "5px solid hotpink",
  };
  const bgObjRed = {
    backgroundColor: "red",
    color: "#fff",
    border: "5px solid hotpink",
  };

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? bgObj : bgObjRed}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

## 3. css 의 객체를 별도로 모아서 관리하기

- 위의 css 객체를 `객체 리터럴 오브젝트 방식` 으로 칭함.
- 관례상 css 객체는 `파스칼 케이스`를 쓴다.
- /components/bg.js 파일 생성

```js
export const BgObj = {
  backgroundColor: "green",
  color: "#fff",
  border: "5px solid hotpink",
};
export const BgObjRed = {
  backgroundColor: "red",
  color: "#fff",
  border: "5px solid hotpink",
};
```

```jsx
import React from "react";
import { BgObj, BgObjRed } from "./bg";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const isLogin = true;

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? BgObj : BgObjRed}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

# CSS-in-JS

- Styled Components
- Emotion

## 1. 환경설정

```bash
npm install @emotion/react@emotion/styled --force
```

## 2.2 왜 필요한가?

- 태그처럼 생겼다.(내가만든 태그: 시멘틱처럼 사용가능)
- 태그가 내용을 설명하도록 구성한다.
- css 같이 배치 가능(VSCode 플러그인: `vscode-styled-components`)
- props 도 전달해서 다양한 결과를 보여줄 수 있다.
- props 는 객체라서 `.`으로 접근 가능
- props 는 객체라서 `객체 구조분해 할당` 가능
- 확장(Extends) 가능
- export 를 통해서 외부로 내보낼 수 있다.
- import 해서 사용할 수 있다.

- Emotion 기본형과 props 전달의 예제

```jsx
import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
function Slide() {
  // js 자리
  // Emotion 관련
  // 기본형
  const BasicButton = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s;
    /* SCSS 적용 가능 */
    &:hover {
      background-color: #0056b3;
    }
  `;
  // css 추가형
  const BasicUpButton = styled.button`
    background-color: ${props => props.bg};
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s;

    /* SCSS 적용 가능 */
    &:hover {
      background-color: red;
    }
  `;

  // props 로 동적인 즉, 실시간 스타일 변경하기
  const Box = styled.div`
    background-color: ${props => props.bg};
    width: ${props => props.width};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.m}px 0;
    border: ${props => props.b}px solid yellowgreen;
  `;

  const LoginBox = styled(Box)`
    width: 200px;
    height: 100px;
    background-color: #f0f0f0;
    color: #333;
    font-size: 18px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  `;

  const LogoutBox = styled(Box)`
    width: 200px;
    height: 100px;
    background-color: #ffcccc;
    color: #900;
    font-size: 18px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #ff9999;
      cursor: pointer;
    }
  `;

  let UserType = false;

  const getLoginUser = () => {
    if (UserType === true) {
      alert("이미 로그인 상태입니다.");
    } else {
      alert("로그인 완료!");
    }
    UserType = true;
    console.log("로그인 상태:", UserType);
    return UserType;
  };

  const getLogoutUser = () => {
    if (UserType === false) {
      alert("이미 로그아웃 상태입니다.");
    } else {
      alert("로그아웃 완료!");
    }
    UserType = false;
    console.log("로그인 상태:", UserType);
    return UserType;
  };

  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <BasicButton onClick={() => alert("기본버튼 클릭!")}>
        기본버튼
      </BasicButton>
      <br />
      <br />
      <BasicUpButton onClick={() => alert("CSS적용버튼 클릭!")}>
        CSS적용버튼
      </BasicUpButton>
      <br />
      <br />
      <Box bg="violet" width="300px" b="30" m="50">
        첫번째 박스
      </Box>
      <Box bg="blue" width="600px" b="10" m="100">
        두번째 박스
      </Box>
      <br />
      <br />
      <LoginBox onClick={getLoginUser}>로그인 박스</LoginBox>
      <br />
      <LogoutBox onClick={getLogoutUser}>로그아웃 박스</LogoutBox>
      <br />
      <br />
      <Box>세번째 박스</Box>
    </div>
  );
}

export default Slide;
```

- 기본 스타일 확장

```jsx
import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
function Slide() {
  // js 자리
  const BasicButton = styled.button`
    background-color: orange;
    font-size: 50px;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    &:hover {
      background-color: skyblue;
    }
  `;
  const DangerButton = styled(BasicButton)`
    background-color: red;
    color: white;
    &:hover {
      background-color: darkred;
    }
  `;
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <BasicButton onClick={() => alert("버튼 클릭!")}>
        기본
        <br />
        버튼
      </BasicButton>
      <DangerButton onClick={() => alert("위험!버튼 클릭!")}>
        위험한
        <br />
        기본
        <br />
        버튼
      </DangerButton>
    </div>
  );
}

export default Slide;
```

-

```jsx

```

-
