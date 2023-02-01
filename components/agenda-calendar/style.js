import { css } from "lit";

const sharedStyles = css`
  #calendarbox {
    height: 100%;
    box-sizing: border-box;
  }

  #calendar {
    font-size: 1rem;
    outline: none;
    border: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 0.8rem;
    color: var(--primary);
  }
`;

export default sharedStyles;
