import { LitElement, html } from "lit";
import sharedStyles from "./style";

class AgendaModal extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      selected: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  static get styles() {
    return sharedStyles;
  }

  updated(changedProperties) {
    if (changedProperties.has('selected') && this.selected) {
      this._openModal(this.id);
    }
  }

  render() {
    return html`
      <div id="modal-${this.id}" class="modal hidden">
        <div class="modal-content">
          <span class="close" @click=${() => this._closeModal(this.id)}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    `;
  }

  _openModal(id) {
    const modal = this.shadowRoot.getElementById(`modal-${id}`);
    modal.classList.remove('hidden');
  }

  _closeModal(id) {
    const modal = this.shadowRoot.getElementById(`modal-${id}`);
    modal.classList.add('hidden');
  }
}

customElements.define("agenda-modal", AgendaModal);

export default AgendaModal;
