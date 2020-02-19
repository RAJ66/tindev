import styled from "styled-components";
import { ThemeContext } from "styled-components";

export const MainContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
`;

export const Line = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const Footer = styled.footer`
  flex: 1;
  background: ${props => props.theme.colors.backgroundFooter};
  border: 1px solid ${props => props.theme.colors.borderFooter};
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;
`;

export const Strong = styled.strong`
  font-size: 16px;
  color: ${props => props.theme.colors.textTitleFooter};
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.textDescFooter};
  margin-top: 5px;
`;

export const Buttons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Button = styled.button`
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  ::hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
`;

export const Empty = styled.div`
  font-size: 32px;
  color: #999;
  font-weight: bold;
  margin: 300px;
`;

export const MatchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px 0;
`;

export const MatchStrong = styled.strong`
  font-size: 32px;
  color: #fff;
`;

export const MatchParagraph = styled.p`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MatchButton = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;
