import styled from 'styled-components';

export const RuniaryForm = styled.form`
  background: #ffffff;

  & label {
    display: inline-block;
    margin: 0.4rem;
  }

  .runiaryForm {
    width: 35vw;
  }

  & .inputForm {
    text-align: center;
  }

  & .runTime {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & #distanceForm {
    width: 30rem;
  }

  & #anythingForm {
    width: 30rem;
  }

  & .buttons {
    display: flex;
    justify-content: flex-end;

    padding-top: 0.4rem;
  }
`;

export const GuideSpan = styled.span`
  display: ${({ valid }) => (valid ? 'block' : 'none')};
  color: red;
`;
