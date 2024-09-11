import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: ${(props) => props.theme.color.bgSurface};
  position: relative;
  margin: auto;
  margin-top: 90px;
  padding: 30px 100px;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 600px) {
    padding: 30px 40px;
  }
`;

export const InfoSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey100};
  margin-bottom: 50px;
`;

export const TechWrap = styled.div`
  width: 100%;
`;

export const InfoTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.color.grey100};
  margin-bottom: 20px;
`;

export const ProjectWrap = styled.div`
  width: 100%;
`;
