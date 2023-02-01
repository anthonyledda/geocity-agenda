import { LitElement, html } from "lit";
import sharedStyles from "./style";

class AgendaBody extends LitElement {
  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <div id="agenda-wrapper">
        <div id="navigation">
          <slot name="left-input"></slot>
          <slot name="right-input"></slot>
        </div>
        <slot name="events-list"></slot>
        <slot name="modal"></slot>
      </div>
    `;
  }
}

customElements.define("agenda-body", AgendaBody);

export default AgendaBody;
