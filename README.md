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

## 3. 재활용 컴포넌트로 제작하기

```jsx
import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
function Slide() {
  // js 자리
  const Button = styled.button`
    display: flex;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: ${props => (props.size === "lg" ? "50px" : "25px")};
    color: #ff00ff;
    background-color: ${props =>
      props.variant === "primary" ? "#97c9ff" : "#ff7777"};
    &&:hover {
      background-color: ${props =>
        props.variant === "primary" ? "#0084ff" : "#ff0000"};
      color: ${props => (props.variant === "primary" ? "#ffffff" : "#000000")};
    }
  `;
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <Button
        variant="primary"
        size="lg"
        onClick={() => alert("짱 큰 버튼 클릭!")}
      >
        기본버튼 : Large 사이즈
      </Button>
      <Button variant="primary" onClick={() => alert("기본 버튼 클릭!")}>
        기본버튼
      </Button>
      <Button
        variant="danger"
        size="lg"
        onClick={() => alert("짱 큰 위험 버튼 클릭!")}
      >
        위험 : Large
      </Button>
      <Button variant="danger" onClick={() => alert("위험 버튼 클릭!")}>
        위험
      </Button>
    </div>
  );
}

export default Slide;
```

- 3차 최종버전
- Slide.jsx

```jsx
import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
import Button from "./ui/Button";
function Slide() {
  // js 자리
  const Button_ = styled.button`
    display: flex;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: ${props => {
      switch (props.size) {
        case "lg":
          return "50px";
        default:
          return "25px";
      }
    }};
    color: #ff00ff;
    background-color: ${props => {
      switch (props.variant) {
        case "primary":
          return "#97c9ff";
        case "danger":
          return "#ff7777";
        default:
          return "#ffffff";
      }
    }};
    opacity: ${props => (props.disabled ? 0.6 : 1)};
    &&:hover {
      background-color: ${props => {
        switch (props.variant) {
          case "primary":
            return "#0084ff";
          case "danger":
            return "#ff0000";
          default:
            return "#ffffff";
        }
      }};
    }
  `;
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <Button size="lg" disabled>
        기본버튼 : Large 사이즈
      </Button>
      <Button disabled>기본버튼</Button>
      <Button size="lg">기본버튼 : Large 사이즈</Button>
      <Button>기본버튼</Button>
      <Button variant="primary" size="lg">
        기본버튼 : Large 사이즈
      </Button>
      <Button variant="primary">기본버튼</Button>
      <Button variant="danger" size="lg">
        위험 : Large
      </Button>
      <Button variant="danger">위험</Button>
    </div>
  );
}

export default Slide;
```

- Button.jsx

```JSX
import React from "react";
import styled from "@emotion/styled";

function Button(props) {
  const StyledButton = styled.button`
    display: flex;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: ${props => {
      switch (props.size) {
        case "lg":
          return "50px";
        default:
          return "25px";
      }
    }};
    color: #ff00ff;
    background-color: ${props => {
      switch (props.variant) {
        case "primary":
          return "#97c9ff";
        case "danger":
          return "#ff7777";
        default:
          return "#ffffff";
      }
    }};
    opacity: ${props => (props.disabled ? 0.6 : 1)};
    &&:hover {
      background-color: ${props => {
        switch (props.variant) {
          case "primary":
            return "#0084ff";
          case "danger":
            return "#ff0000";
          default:
            return "#ffffff";
        }
      }};
    }
  `;

  return (
    <StyledButton
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;

```

- Button.jsx 업그레이드 버전

```jsx
import React from "react";
import styled from "@emotion/styled";

function Button({ children, variant, size, disabled }) {
  const Button = styled.button`
    display: flex;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: ${props => {
      switch (props.size) {
        case "lg":
          return "50px";
        default:
          return "25px";
      }
    }};
    color: #ff00ff;
    background-color: ${props => {
      switch (props.variant) {
        case "primary":
          return "#97c9ff";
        case "danger":
          return "#ff7777";
        default:
          return "#ffffff";
      }
    }};
    opacity: ${props => (props.disabled ? 0.6 : 1)};
    &&:hover {
      background-color: ${props => {
        switch (props.variant) {
          case "primary":
            return "#0084ff";
          case "danger":
            return "#ff0000";
          default:
            return "#ffffff";
        }
      }};
    }
  `;

  return (
    <Button variant={variant} size={size} disabled={disabled}>
      {children}
    </Button>
  );
}

export default Button;
```

- 응용 예제

```js
import styled from "@emotion/styled";
import React from "react";

function Tag({ children, variant = "default", rounded = false, size = "md" }) {
  // js 자리
  const StyleTag = styled.span`
    display: inline-block;
    background-color: ${props => {
      switch (props.variant) {
        case "success":
          return "#28a745";
        case "warning":
          return "#ffc107";
        case "danger":
          return "#dc3545";
        case "info":
          return "#17a2b8";
        default:
          return "#6c757d";
      }
    }};
    color: #fff;
    border-radius: ${props => (props.rounded ? "10px" : "3px")};
    padding: ${props => (props.size === "lg" ? "6px 12px" : "4px 8px")};
    font-size: ${props => (props.size === "lg" ? "14px" : "12px")};
    margin-right: 6px;
    margin-top: 6px;
    margin-bottom: 6px;
  `;

  // jsx 자리
  return (
    <StyleTag variant={variant} rounded={rounded} size={size}>
      # {children}
    </StyleTag>
  );
}

export default Tag;
```

- Avart 예제

```jsx
import styled from "@emotion/styled";
import React from "react";

function Avatar({
  src = "https://i.pravatar.cc/100",
  alt = "avatar",
  size = "40px",
  shadow = true,
}) {
  // js 자리
  const StyledAvatar = styled.img`
    border-radius: 50%;
    width: ${props => props.size};
    height: ${props => props.size};
    object-fit: cover;
    border: 3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, ${props => (props.shadow ? 0.3 : 0)});
  `;

  // jsx 자리
  return <StyledAvatar src={src} alt={alt} size={size} shadow={shadow} />;
}

export default Avatar;
```

- Toast 샘플

```js
import styled from "@emotion/styled";
import React from "react";

function Toast({ message = "Please Message", bg = "#ccc" }) {
  // js 자리
  const StyledToast = styled.div`
    z-index: 999999;
    position: fixed;
    bottom: 120px;
    right: 120px;
    background-color: ${props => props.bg};
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  `;

  // jsx 자리
  return <StyledToast bg={bg}>{message}</StyledToast>;
}

export default Toast;
```

- Alert 샘플

```js
import styled from "@emotion/styled";
import React from "react";

function Alert({ children, type = "default" }) {
  // js 자리
  const StyledAlert = styled.div`
    background-color: ${props => {
      switch (props.type) {
        case "success":
          return "#d4edda";
        case "error":
          return "#f8d7da";
        case "warning":
          return "#fff3cd";
        case "info":
          return "#d1ecf1";
        default:
          return "#e2e3e5";
      }
    }};

    color: ${props => {
      switch (props.type) {
        case "success":
          return "#155724";
        case "error":
          return "#721c24";
        case "warning":
          return "#856404";
        case "info":
          return "#0c5460";
        default:
          return "#383d41";
      }
    }};
    padding: 12px 16px;
    border-radius: 4px;
    margin: 10px 0;
    border: 1px solid transparent;
  `;

  // jsx 자리
  return <StyledAlert type={type}>{children}</StyledAlert>;
}

export default Alert;
```

- Chip 예제

```js
import styled from "@emotion/styled";
import React from "react";

function Chip({ label = "Label" }) {
  // js 자리
  const StyledChip = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    background-color: #e0e0e0;
    border-radius: 16px;
    font-size: 14px;
    margin: 4px;

    span {
      margin-right: 8px;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      font-weight: bold;
      color: #555;
    }
  `;
  // jsx 자리
  return (
    <StyledChip>
      <span>{label}</span>
      <button>x</button>
    </StyledChip>
  );
}

export default Chip;
```

- Modal 예제

```js
import styled from "@emotion/styled";
import React from "react";

function Modal({ children }) {
  // js 자리
  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ModalBox = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    min-width: 400px;
    min-height: 200px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  `;
  // jsx 자리
  return (
    <Overlay>
      <ModalBox>{children}</ModalBox>
    </Overlay>
  );
}

export default Modal;
```

- ProgressBar 예제

```jsx
import styled from "@emotion/styled";
import React from "react";

function ProgressBar({ percent = 0, color = "#000" }) {
  // js 자리
  const BarWrapper = styled.div`
    background-color: #eee;
    height: 16px;
    width: 100%;
    border-radius: 8px;
    margin: 10px 0;
    overflow: hidden;
  `;
  const BarInner = styled.div`
    height: 100%;
    background-color: ${props => props.color};
    width: ${props => props.percent}%;
    transition: all 0.5s;
  `;
  // jsx 자리
  return (
    <BarWrapper>
      <BarInner percent={percent} color={color} />
    </BarWrapper>
  );
}

export default ProgressBar;
```

- Skeleton 예제 : https://cssgradient.io/

```jsx
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

function Skeleton({ width = "100%", height = "20px" }) {
  // js 코딩자리
  // keyframes css 애니메이션
  const mov = keyframes`
    0% { background-position: -400px 0}
    100% { background-position: 400px 0}
  `;

  const SkeletonBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    background: linear-gradient(90deg, #eeeeee 25%, #dddddd 37%, #eeeeee 63%);
    background-size: 800px 100%;
    animation: ${mov} 1.2s infinite linear;
    margin: 10px 0;
  `;

  // jsx 코딩자리
  return <SkeletonBox width={width} height={height} />;
}

export default Skeleton;
```

- Tooltip 예제

```jsx
import styled from "@emotion/styled";
import React from "react";

function Tooltip({ children, text }) {
  // js 자리
  const TooltipWrap = styled.div`
    position: relative;
    display: inline-block;

    &:hover .bubble {
      visibility: visible;
      opacity: 1;
    }
  `;

  const TooltipBubble = styled.div`
    position: absolute;
    left: 50%;
    bottom: 120%;
    transform: translateX(-50%);
    white-space: nowrap;
    background-color: #333;
    color: #fff;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `;
  // jsx 자리
  return (
    <TooltipWrap>
      {children}
      <TooltipBubble className="bubble">{text}</TooltipBubble>
    </TooltipWrap>
  );
}

export default Tooltip;
```

# useState

- 리액트에서 변수를 만드는 법
- `변수의 값이 변하면 웹브라우저의 화면도 변한다.`

```jsx
const [변수명, set변수명] = useState(초기값);
```

# JSX 의 조건문

## 1. 기본 문법

- falshy 한 값 종류 : `false, null, undefined, 0, NaN, ""`
- if 문

```js
if (조건) {
  // 참일때 실행
} else {
  // 거짓일때 실행
}
```

```js
if (조건) {
  // 참일때 실행
} else if (조건) {
  // 참일때 실행
} else {
  // 거짓일때 실행
}
```

- 3항 연산자

```js
const res = 조건 ? 참일때리턴 : 거짓일때리턴;
```

- 논리 연산자

```js
const res = 조건 && 결과 리턴;
const res = 조건 || 결과 리턴;
```

```jsx
isLogin && <div>결과</div>;
```

- Optional(`?`) Chaining(`.`) : `객체 ?.속성명`

```js
const user = {
  age: 10,
  job: "개발자",
};

const result = user?.age;
```

- Null 병합 연산자(`??`) : null 또는 undefined 일때만 기본값 사용

```js
const result = user?.gogo ?? "없어요";
```

- switch 문

```js
switch (결과값) {
  case 비교값1:
    // 값1 일때 실행
    break;
  case 비교값2:
    // 값2 일때 실행
    break;
  default:
    break;
  // 위의 값이 아닐때 실행
}
```

## 2. JSX 에서의 활용

- `JS 자리`에 if 문과 switch 문을 사용할 수 있음.

- `JSX 자리`에 if 문과 switch 문을 사용할 수 없음.
- if 문과 switch 문 대신에 `3 항 연산자`가 가장 많이 사용됨.
- `JSX 자리`에 falshy 한 값은 출력이 안됩니다.

### 2.1. if 문 활용

```jsx
import React from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ isLogin }) {
  // js 자리
  if (isLogin) {
    return <div>반가워요</div>;
  }
  // jsx 자리
  return <div>안녕</div>;
}

function Test() {
  // js 자리
  // jsx 자리
  return <Hi isLogin={true}>Test</Hi>;
}

export default Test;
```

### 2.2. jsx 에서 3항 연산자

```jsx
import React from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ isLogin }) {
  // js 자리
  // jsx 자리
  return <div>{isLogin ? "반가워요" : "로그인하세요."}</div>;
}

function Test() {
  // js 자리
  // jsx 자리
  return <Hi isLogin={true}>Test</Hi>;
}

export default Test;
```

### 2.3. jsx 에서 && 연산자 활용

```jsx
import React from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ isLogin, msg }) {
  // js 자리
  // jsx 자리
  return (
    <div>
      {isLogin ? "반가워요" : "로그인하세요."}
      <div>{msg && "메시지가 있습니다."}</div>
    </div>
  );
}

function Test() {
  // js 자리
  // jsx 자리
  return (
    <Hi isLogin={true} msg={"새로운메시지"}>
      Test
    </Hi>
  );
}

export default Test;
```

### 2.4. jsx 에서 ?. 연산자 사용

- `객체?.속성명`
- 객체가 null 이거나 undefined 이면 리액트 오류
- 복잡한 if문 대신 Optional Chaining(`?.`) 을 사용하면 좋다.

```jsx
import React from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ isLogin, msg, user }) {
  // js 자리
  // jsx 자리
  return (
    <div>
      {isLogin ? "반가워요" : "로그인하세요."}
      <div>{msg && "메시지가 있습니다."}</div>
      <div>
        {user?.name} : {user?.age ? user?.age : "나이가 없어요"}
      </div>
      <div>
        {user?.name} : {user?.age || "나이가 없어요"}
      </div>
    </div>
  );
}

function Test() {
  // js 자리
  // jsx 자리
  return (
    <Hi isLogin={true} msg={"새로운메시지"} user={{ name: "홍길동" }}>
      Test
    </Hi>
  );
}

export default Test;
```

# JSX 의 반복문

## 1. map 의 이해

- 일반적으로 가장 많이 사용함
- 컴포넌트 또는 html 태그를 반복 출력시 사용
- 반드시 대상은 `배열` 입니다.
- 반드시 `key 속성 즉, props` 가 있어야함.

```jsx
import React, { useState } from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ data }) {
  // js 자리
  // jsx 자리
  return <div>안녕 {data?.name}!</div>;
}

function Test() {
  // js 자리
  const [userData, setUserData] = useState([
    {
      name: "Hong",
      age: 20,
    },
    {
      name: "Kim",
      age: 30,
    },
    {
      name: "Lee",
      age: 40,
    },
    {
      name: "Song",
      age: 27,
    },
  ]);
  // jsx 자리
  return (
    <div>
      {userData.map((item, index) => (
        <Hi key={index} data={item} />
      ))}
    </div>
  );
}

export default Test;
```

## 2. filter 의 이해

- 대상은 반드시 `배열` 입니다.
- 조건에 맞는 요소만 JSX 로 출력가능.
