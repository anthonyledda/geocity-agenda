import { LitElement, html } from "lit";
import sharedStyles from "./style";

class AgendaSearch extends LitElement {
  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <div id="searchbox">
        <input id="search" length="20" maxlength="1000" autocomplete="off" autocorrect="off" placeholder="Search..." />
        <a id="searchIcon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        <div id="results"></div>
      </div>
    `;
  }
}

customElements.define("agenda-search", AgendaSearch);

export default AgendaSearch;
