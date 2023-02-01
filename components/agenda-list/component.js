import { LitElement, html, css } from "lit";
import sharedStyles from "./style";

class AgendaList extends LitElement {
  static get properties() {
    return {
      events: { type: Array }
    };
  }

  constructor() {
    super();

    this.events = [
      { id: "1", title: "Titre1", name: "Nom court", date: "date ou période", thumbnail: "thumbnail.png", alt: "image", selected: false },
      { id: "2", title: "Titre2", name: "Séance", date: "10.01.2023", thumbnail: "thumbnail.png", alt: "image", selected: false },
      { id: "3", title: "Titre3", name: "Séance", date: "10.01.2023", thumbnail: "thumbnail.png", alt: "image", selected: false },
      { id: "4", title: "Titre4", name: "Séance", date: "10.01.2023", thumbnail: "thumbnail.png", alt: "image", selected: false }
    ];
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <section id="agenda-cards">
        ${this.events.map((event) => html`
          <div class="card" @mouseover=${this._handleMouseover} @mouseout=${this._handleMouseout} @click=${()=>this._openModal(event)}>
            <agenda-thumbnail .src=${event.thumbnail} .alt=${event.alt}></agenda-thumbnail>
            <div class="card-text">
              <p>${event.title}</p>
              <p>${event.name}</p>
              <p>${event.date}</p>
            </div>
          </div>
          <agenda-modal .id=${event.id} .selected=${event.selected}></agenda-modal>
        `)}
      </section>
    `;
  }

  _handleMouseover(e) {
    e.currentTarget.classList.add('active');
  }

  _handleMouseout(e) {
    e.currentTarget.classList.remove('active');
  }

  _openModal(e) {
    e.selected = !e.selected;
    this.requestUpdate();
  }
}

customElements.define("agenda-list", AgendaList);

class AgendaThumbnail extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      alt: { type: String }
    };
  }

  static get styles() {
    return css`
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <img class="card-image" src="/icons/${this.src}" alt=${this.alt} />
    `;
  }
}

customElements.define("agenda-thumbnail", AgendaThumbnail);

export default AgendaList;
