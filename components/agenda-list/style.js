import { css } from "lit";

const sharedStyles = css`
  #agenda-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }

  .card {
    flex: 0 1 31%;
    box-sizing: border-box;
    border: var(--light-border);
    margin-bottom: var(--element-margin);
  }

  .card:not(:nth-child(3n+1)) {
    margin-left: var(--element-margin);
  }

  .card > .card-text {
    width: calc(100% / 3 * 2);
    height: 100%;
    float: right;
    border-left: var(--light-border);
    padding: 1.2rem 1rem;
    box-sizing: border-box;
  }

  .card > .card-text p:first-child {
    font-weight: bold;
  }

  .card > agenda-thumbnail {
    float: left;
    width: calc(100% / 3);
    height: 100%;
    box-sizing: border-box;
  }

  .card.active {
    box-shadow: inset 0 -0.2rem var(--primary);
  }

  .card.active > .card-text p:first-child {
    color: var(--primary);
  }

  .card:hover {
    cursor: pointer;
  }
`;

export default sharedStyles;
