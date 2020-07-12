import styled, { css }from 'styled-components';
import { FaBirthdayCake, MdLocationOn } from '../../styles/Icons';
import Button from '../Button';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;

  ::-webkit-srcollbar {
    display: none;
  }
`;


export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;

`;
export const   Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;

    > h1 {
      font-weight: bold;
      font-size: 19px;
    }
    > h2 {
      font-weight: normal;
      font-size: 15px;
      color: var(--gray);
    }
    > p {
      font-weight: bold;
      font-size: 15px;
      margin-top: 11px;
    }
  > ul {
    margin-top: 10px;
    margin-bottom: 10px;

      > li {
        font-size: 15px;
        color: var(--gray);
        
        > svg {
          fill: var(--gray);
        }
      }
    }
`;

export const EditButton = styled(Button)`
  position:absolute;
  top: 2vh;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const iconsCss = css`
  width:20px;
  height:20px;

  color: var(--gray);
  margin-right: 5px;

`;

export const   LocationIcon = styled(MdLocationOn)`${iconsCss}`;

export const   CakeIcon = styled(FaBirthdayCake)`${iconsCss}`;

export const   Followage = styled.div`
  display: flex;
  > span {
    color: var(--gray);
    font-size: 15px;

    & + span {
      margin-left: 20px;
    }
  }
`;