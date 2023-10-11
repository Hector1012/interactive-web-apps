import { LitElement, html, css } from 'lit';

class TallyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
    }

    button {
      font-size: 1.5rem;
      margin: 0 10px;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <h1>Tally App</h1>
      <p>Count: ${this.count}</p>
      <button @click=${this.increment}>Increment</button>
      <button @click=${this.decrement}>Decrement</button>
    `;
  }

  increment() {
    this.count++;
    this.requestUpdate('count');
  }

  decrement() {
    this.count--;
    this.requestUpdate('count');
  }
}

customElements.define('tally-app', TallyApp);
