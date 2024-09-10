import React from "react";
import Slide from "slide/Slide";
import {
  Container,
  InfoSlide,
  ImgWrap,
  InfoText,
  TechWrap,
  InfoTitle,
  ProjectWrap,
} from "./StyledUser";
import KeyValue from "keyValue/KeyValue";

const UserContainer: React.FC = () => {
  return (
    <Container>
      <InfoText>
        안녕하세요. 함께 일 하고 싶은 동료 윤도원입니다.
        <br /> 실무에서 HTML, CSS, jQuery, SCSS, Javascript, Typescript, Vue.js,
        React.js 를 사용한 경험이 있습니다.
        <br /> 앞으로도 퍼블리싱 및 개발에 대한 꾸준한 이해와 학습을 통해
        성장하는 인재가 되고 싶습니다.
      </InfoText>

      <Slide showPagination={true}>
        <InfoSlide>
          <InfoTitle>Info</InfoTitle>
          <ImgWrap>
            <img src={"public/yoon.jpg"} alt="info" />
          </ImgWrap>
          <KeyValue keyLabel="Username" value="YOON DO WON" textAlign="right" />
          <KeyValue
            keyLabel="Email"
            value="yoondw7832@gmail.com"
            textAlign="right"
          />
          <KeyValue keyLabel="Tel" value="010-9242-9907" textAlign="right" />
        </InfoSlide>
        <InfoSlide>
          <TechWrap>
            <InfoTitle>Tech Stack</InfoTitle>
            <KeyValue
              keyLabel="HTML"
              value={
                <>
                  - 웹 표준 준수 <br />
                  - 크로스 브라우징 가능 <br />- 웹 앱, 웹사이트 구축 경험
                </>
              }
            />
            <KeyValue
              keyLabel="CSS"
              value={
                <>
                  - 클래스 네이밍 규칙의 이해와 활용 <br />
                  - 스타일 가이드와 컴포넌트화에 대한 이해와 경험 <br />- CSS,
                  SCSS를 사용한 유지보수 용이한 스타일링 <br />- 미디어 쿼리를
                  사용한 반응형 웹 고도화
                </>
              }
            />
            <KeyValue
              keyLabel="JavaScript, TypeScript, React.js, Vue.js"
              value={
                <>
                  - jQuery와 JavaScript를 사용한 DOM 조작 <br />
                  - TypeScript를 사용한 코드 안정성 유지 <br />- React.js /
                  Vue.js 프레임워크 사용을 통한 구축 경험
                </>
              }
            />
            <KeyValue
              keyLabel="ETC"
              value={
                <>
                  - Figma, Zeplin을 활용한 디자인 툴 사용 경험 <br />
                  - Slack, Git, Github, Git Extensions를 이용한 협업툴 사용 경험
                  <br />- DatePicker, Chart, Swiper 등 다양한 라이브러리 사용
                  경험
                </>
              }
            />
          </TechWrap>
        </InfoSlide>
        <InfoSlide>
          <ProjectWrap>
            <InfoTitle>Project</InfoTitle>
            <KeyValue
              keyLabel="현대 글로벌 EVPlatform CCI (웹뷰)"
              value="2024.05 ~ 2024.09"
              textAlign="right"
            />
            <KeyValue
              keyLabel="하나캐피탈 Vue 리뉴얼 (PC, Mobile)"
              value="2023.03 ~ 2023.12"
              textAlign="right"
            />
            <KeyValue
              keyLabel="SK ON vision ai inspection (PC)"
              value="2024.01 ~ 2024.05"
              textAlign="right"
            />
            <KeyValue
              keyLabel="SK DX X-Caliber 고도화 (PC, Mobile, Tablet)"
              value="2023.03 ~ 2024.09"
              textAlign="right"
            />
            <KeyValue
              keyLabel="신한 The Next 차세대 프로젝트 (PC)"
              value="2022.12 ~ 2024.01"
              textAlign="right"
            />
          </ProjectWrap>
        </InfoSlide>
      </Slide>
    </Container>
  );
};

export default UserContainer;
