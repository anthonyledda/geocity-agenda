import { css } from "lit";

const sharedStyles = css`
  #agenda-wrapper {
    margin: auto;
    max-width: var(--max-width);
    padding: 24px;
    border: solid #797979 2px;
  }

  #navigation {
    height: 3rem;
    margin: var(--element-margin) 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ::slotted(.input) {
    flex: 0 1 47%;
    height: 100%;
    border: var(--light-border);
    background : transparent;
  }
`;

export default sharedStyles;
