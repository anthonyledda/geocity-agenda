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
      { title: "Titre", name: "Nom court", date: "date ou période", thumbnail: "thumbnail.png", alt: "image" },
      { title: "Exemple", name: "Séance", date: "10.01.2023", thumbnail: "thumbnail.png", alt: "image" },
      { title: "Exemple", name: "Séance", date: "10.01.2023", thumbnail: "thumbnail.png", alt: "image" },
      { title: "Exemple", name: "Séance", date: "10.01.2023", thumbnail: "thumbnail.png", alt: "image" }
    ];
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <section id="agenda-cards">
        ${this.events.map(this._eventTemplate)}
      </section>
    `;
  }

  _eventTemplate(event) {
    return html`
      <article class="card">
        <agenda-thumbnail .src=${event.thumbnail} .alt=${event.alt}></agenda-thumbnail>
        <div>
          <p>${event.title}</p>
          <p>${event.name}</p>
          <p>${event.date}</p>
        </div>
      </article>
    `;
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
