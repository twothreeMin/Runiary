import styled from 'styled-components';

export const Modal = styled.div`
  & {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }

  & button {
    outline: none;
    cursor: pointer;
    border: 0;
  }

  &.openModal {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
`;
