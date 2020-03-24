import { html } from 'htm/preact';
import { Component } from 'preact';
import { router } from '../router.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { Expandable } from './Expandable.js';

const info = new URL('../assets/icons/info.svg', import.meta.url).href;
const settings = new URL('../assets/icons/settings.svg', import.meta.url).href;
const refresh = new URL('../assets/icons/refresh.svg', import.meta.url).href;
const add = new URL('../assets/icons/circle-plus.svg', import.meta.url).href;

const renderMenu = menuItem => {
  switch (menuItem) {
    case 'info':
      return html`
        info
      `;
    case 'settings':
      return html`
        settings
      `;
    case 'contribute':
      return html`
        <${Expandable}
          toggle=${'Sources'}
          detail=${html`
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          `}
        />
        <${Expandable}
          toggle=${'Credits'}
          detail=${html`
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          `}
        />
      `;
    case 'ticker':
      return html`
        ticker
      `;
    default:
      return html``;
  }
};

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'settings',
      isMobile: true
    };
  }

  componentDidMount() {
    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
      this.setState({
        isMobile: !matches
      });
    });
  }

  switchContent(val) {
    const country = router.url.searchParams.get('country');

    if (country) {
      router.setPath(`${val}?country=${country}`);
    } else {
      router.setPath(val);
    }

    if (this.state.isMobile) {
      router.setSearchParam('country', null);
      this.props.change(renderMenu(val));
    }

    this.setState({
      activeItem: val
    });
  }

  render(_, { activeItem }) {
    return html`
      <div class="ld-menu">
        <div class="ld-menu-nav">
          <nav>
            <ul>
              <li>
                <button onClick=${() => this.switchContent('settings')}>
                  <img src="${settings}" alt="settings" />
                  <p>SETTINGS</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('info')}>
                  <img src="${info}" alt="info" />
                  <p>INFO</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('contribute')}>
                  <img src="${refresh}" alt="contribute" />
                  <p>CONTRIBUTE</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('ticker')}>
                  <img src="${add}" alt="ticker" />
                  <p>TICKER</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="ld-menu--content">
          <div class="mb-only">
            <div class="ld-menu--header">
              <h1>${activeItem}</h1>
            </div>
          </div>
          ${renderMenu(activeItem)}
        </div>
      </div>
    `;
  }
}
