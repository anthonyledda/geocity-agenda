import { LitElement, html } from "lit";
import sharedStyles from "./style";

class AgendaCalendar extends LitElement {
  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <div id="calendarbox">
        <input id="calendar" type="date" />
      </div>
    `;
  }
}

customElements.define("agenda-calendar", AgendaCalendar);

export default AgendaCalendar;
