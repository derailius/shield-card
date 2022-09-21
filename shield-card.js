const LitElement = Object.getPrototypeOf(
  customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;
import {
mdiPower,
mdiPowerOn,
mdiPowerOff,
mdiArrowLeft,
mdiVideoInputHdmi,
mdiHome,
mdiArrowUp,
mdiTelevisionGuide,
mdiArrowDown,
mdiChevronUp,
mdiChevronLeft,
mdiCheckboxBlankCircle,
mdiChevronRight,
mdiChevronDown,
mdiRewind,
mdiPlayPause,
mdiFastForward,
mdiVolumeMute,
mdiVolumeMinus,
mdiVolumePlus,
mdiRestart,
mdiYoutube,
mdiMenu,
mdiRemote,
mdiKodi,
mdiPlex,
} from "https://unpkg.com/@mdi/js@6.4.95/mdi.js?module"

// Taken from mdi v5.9.55
const AMAZON_ICON_PATH = "M15.93,17.09C15.75,17.25 15.5,17.26 15.3,17.15C14.41,16.41 14.25,16.07 13.76,15.36C12.29,16.86 11.25,17.31 9.34,17.31C7.09,17.31 5.33,15.92 5.33,13.14C5.33,10.96 6.5,9.5 8.19,8.76C9.65,8.12 11.68,8 13.23,7.83V7.5C13.23,6.84 13.28,6.09 12.9,5.54C12.58,5.05 11.95,4.84 11.4,4.84C10.38,4.84 9.47,5.37 9.25,6.45C9.2,6.69 9,6.93 8.78,6.94L6.18,6.66C5.96,6.61 5.72,6.44 5.78,6.1C6.38,2.95 9.23,2 11.78,2C13.08,2 14.78,2.35 15.81,3.33C17.11,4.55 17,6.18 17,7.95V12.12C17,13.37 17.5,13.93 18,14.6C18.17,14.85 18.21,15.14 18,15.31L15.94,17.09H15.93M13.23,10.56V10C11.29,10 9.24,10.39 9.24,12.67C9.24,13.83 9.85,14.62 10.87,14.62C11.63,14.62 12.3,14.15 12.73,13.4C13.25,12.47 13.23,11.6 13.23,10.56M20.16,19.54C18,21.14 14.82,22 12.1,22C8.29,22 4.85,20.59 2.25,18.24C2.05,18.06 2.23,17.81 2.5,17.95C5.28,19.58 8.75,20.56 12.33,20.56C14.74,20.56 17.4,20.06 19.84,19.03C20.21,18.87 20.5,19.27 20.16,19.54M21.07,18.5C20.79,18.14 19.22,18.33 18.5,18.42C18.31,18.44 18.28,18.26 18.47,18.12C19.71,17.24 21.76,17.5 22,17.79C22.24,18.09 21.93,20.14 20.76,21.11C20.58,21.27 20.41,21.18 20.5,21C20.76,20.33 21.35,18.86 21.07,18.5Z";
const KODI_ICON_PATH = "M12.03,1C11.82,1 11.6,1.11 11.41,1.31C10.56,2.16 9.72,3 8.88,3.84C8.66,4.06 8.6,4.18 8.38,4.38C8.09,4.62 7.96,4.91 7.97,5.28C8,6.57 8,7.84 8,9.13C8,10.46 8,11.82 8,13.16C8,13.26 8,13.34 8.03,13.44C8.11,13.75 8.31,13.82 8.53,13.59C9.73,12.39 10.8,11.3 12,10.09C13.36,8.73 14.73,7.37 16.09,6C16.5,5.6 16.5,5.15 16.09,4.75C14.94,3.6 13.77,2.47 12.63,1.31C12.43,1.11 12.24,1 12.03,1M18.66,7.66C18.45,7.66 18.25,7.75 18.06,7.94C16.91,9.1 15.75,10.24 14.59,11.41C14.2,11.8 14.2,12.23 14.59,12.63C15.74,13.78 16.88,14.94 18.03,16.09C18.43,16.5 18.85,16.5 19.25,16.09C20.36,15 21.5,13.87 22.59,12.75C22.76,12.58 22.93,12.42 23,12.19V11.88C22.93,11.64 22.76,11.5 22.59,11.31C21.47,10.19 20.37,9.06 19.25,7.94C19.06,7.75 18.86,7.66 18.66,7.66M4.78,8.09C4.65,8.04 4.58,8.14 4.5,8.22C3.35,9.39 2.34,10.43 1.19,11.59C0.93,11.86 0.93,12.24 1.19,12.5C1.81,13.13 2.44,13.75 3.06,14.38C3.6,14.92 4,15.33 4.56,15.88C4.72,16.03 4.86,16 4.94,15.81C5,15.71 5,15.58 5,15.47C5,14.29 5,13.37 5,12.19C5,11 5,9.81 5,8.63C5,8.55 5,8.45 4.97,8.38C4.95,8.25 4.9,8.14 4.78,8.09M12.09,14.25C11.89,14.25 11.66,14.34 11.47,14.53C10.32,15.69 9.18,16.87 8.03,18.03C7.63,18.43 7.63,18.85 8.03,19.25C9.14,20.37 10.26,21.47 11.38,22.59C11.54,22.76 11.71,22.93 11.94,23H12.22C12.44,22.94 12.62,22.79 12.78,22.63C13.9,21.5 15.03,20.38 16.16,19.25C16.55,18.85 16.5,18.4 16.13,18C14.97,16.84 13.84,15.69 12.69,14.53C12.5,14.34 12.3,14.25 12.09,14.25Z"
class TVCardServices extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _apps: {}
    };
  }

  //  static async getConfigElement() {
  //    await import("./shield-card-editor.js");
  //    return document.createElement("shield-card-editor");
  //  }

  static getStubConfig() {
    return {};
  }

  getCardSize() {
    return 7;
  }

  setConfig(config) {
    if (!config.entity) {
      console.log("Invalid configuration");
      return;
    }

    this._config = { theme: "default", ...config };
  }

  render() {
    if (!this._config || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];

    const emptyButton = html`
      <ha-icon-button
        .action="${""}"
        @click="${this.handleActionClick}"
        icon=""
        title=""
      ></ha-icon-button>
    `;

    return html`
      ${this.renderStyle()}
      <ha-card .header="${this._config.name}">
          <div class="row">
          </div>
          ${
            this._config.tv && this._config.power
              ? html`
                  <div class="row">
                    <ha-icon-button
                      .action="${"power"}"
                      @click="${this.handleActionClick}"
                      icon="mdi:power"
                      .path=${mdiPower}
                      title="Power"
                    ></ha-icon-button>
                  </div>
                `
              : ""
          }
          ${
            this._config.tv && !(this._config.power) && (this._config.power_on || this._config.power_off)
              ? html`
                  <div class="row">
                    <ha-icon-button
                      .action="${"power_on"}"
                      @click="${this.handleActionClick}"
                      icon="mdi:power-on"
                      .path=${mdiPowerOn}
                      title="Power on"
                    ></ha-icon-button>
                    ${emptyButton}
                    <ha-icon-button
                      .action="${"power_off"}"
                      @click="${this.handleActionClick}"
                      icon="mdi:power-off"
                      .path=${mdiPowerOff}
                      title="Power off"
                    ></ha-icon-button>
                  </div>
                `
              : ""
          }
                 
          ${
            this._config.back || this._config.home || this._config.menu
              ? html`
                  <div class="row">
                    ${this._config.back
                      ? html`
                          <ha-icon-button
                            .action="${"back"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:arrow-left"
                            .path=${mdiArrowLeft}
                            title="Back"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.home
                      ? html`
                          <ha-icon-button
                            .action="${"home"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:video-input-hdmi"
                            .path=${mdiHome}
                            title="Home"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.menu
                      ? html`
                          <ha-icon-button
                            .action="${"menu"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:menu"
                            .path=${mdiMenu}
                            title="Menu"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          <div class="row">
            <ha-icon-button
              .action="${"up"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-up"
              .path=${mdiChevronUp}
              title="Up"
            ></ha-icon-button>
          </div>
          <div class="row">
            <ha-icon-button
              .action="${"left"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-left"
              .path=${mdiChevronLeft}
              title="Left"
            ></ha-icon-button>
            <ha-icon-button
              .action="${"select"}"
              @click="${this.handleActionClick}"
              icon="mdi:checkbox-blank-circle"
              .path=${mdiCheckboxBlankCircle}
              title="Select"
            ></ha-icon-button>
            <ha-icon-button
              .action="${"right"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-right"
              .path=${mdiChevronRight}
              title="Right"
            ></ha-icon-button>
          </div>
           <div class="row">
            <ha-icon-button
              .action="${"down"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-down"
              .path=${mdiChevronDown}
              title="Down"
            ></ha-icon-button>
          </div>
          ${
            this._config.reverse || this._config.play || this._config.forward
              ? html`
                  <div class="row">
                    ${this._config.reverse
                      ? html`
                          <ha-icon-button
                            .action="${"reverse"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:rewind"
                            .path=${mdiRewind}
                            title="Rewind"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.play
                      ? html`
                          <ha-icon-button
                            .action="${"play"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:play-pause"
                            .path=${mdiPlayPause}
                            title="Play/Pause"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.forward
                      ? html`
                          <ha-icon-button
                            .action="${"forward"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:fast-forward"
                            .path=${mdiFastForward}
                            title="Fast-Forward"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          ${
            this._config.youtube ||
            this._config.kodi ||
            this._config.prime_video
              ? html`
                  <div class="row">
                    ${this._config.youtube ?
                      html`
                        <ha-icon-button
                          .action="${"youtube"}"
                          @click="${this.handleActionClick}"
                          icon="mdi:youtube"
                          .path=${mdiYoutube}
                          title="YouTube"
                        ></ha-icon-button>
                      `
                    : emptyButton}
                    ${this._config.kodi ?
                      html`
                        <ha-icon-button
                          .action="${"kodi"}"
                          @click="${this.handleActionClick}"
                          icon="mdi:kodi"
                          .path=${mdiKodi}
                          title="Kodi"
                        ></ha-icon-button>
                      `
                    : emptyButton}
                    ${this._config.prime_video ?
                      html`
                        <ha-icon-button
                          .action="${"prime_video"}"
                          @click="${this.handleActionClick}"
                          icon="mdi:amazon"
                          .path=${AMAZON_ICON_PATH}
                          title="Prime Video"
                        ></ha-icon-button>
                      `
                    : emptyButton}
                  </div>
                `
              : ""
          }
          
          ${
            this._config.restart ||
            this._config.plex ||
            this._config.finder
              ? html`
                  <div class="row">
                    ${this._config.restart
                      ? html`
                          <ha-icon-button
                            .action="${"restart"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:restart"
                            .path=${mdimdiRestart}
                            title="mdiRestart"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.plex
                      ? html`
                          <ha-icon-button
                            .action="${"plex"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:plex"
                            .path=${mdiPlex}
                            title="Plex"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.finder
                      ? html`
                          <ha-icon-button
                            .action="${"finder"}"
                            @click="${this.handleActionClick}"
                            icon="mdi:remote"
                            .path=${mdiRemote}
                            title="Remote Finder"
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          
          ${
            this._config.tv && (
            this._config.volume_up ||
            this._config.volume_down ||
            this._config.volume_mute )
              ? html`
                  <div class="row">
                    <ha-icon-button
                      .action="${"volume_mute"}"
                      @click="${this.handleActionClick}"
                      icon="mdi:volume-mute"
                      .path=${mdiVolumeMute}
                      title="Volume Mute"
                    ></ha-icon-button>
                    <ha-icon-button
                      .action="${"volume_down"}"
                      @click="${this.handleActionClick}"
                      icon="mdi:volume-minus"
                      .path=${mdiVolumeMinus}
                      title="Volume Down"
                    ></ha-icon-button>
                    <ha-icon-button
                      .action="${"volume_up"}"
                      @click="${this.handleActionClick}"
                      icon="mdi:volume-plus"
                      .path=${mdiVolumePlus}
                      title="Volume Up"
                    ></ha-icon-button>
                  </div>
                `
              : ""
          }
        </div>
      </ha-card>
    `;
  }

  updated(changedProps) {
    if (!this._config) {
      return;
    }

    const oldHass = changedProps.get("hass");
    if (!oldHass || oldHass.themes !== this.hass.themes) {
      this.applyThemesOnElement(this, this.hass.themes, this._config.theme);
    }
  }

  renderStyle() {
    return html`
      <style>
        .remote {
          padding: 16px 0px 16px 0px;
        }
        img,
        ha-icon-button {
          width: 64px;
          height: 64px;
          cursor: pointer;
          --mdc-icon-size: 100%;
        }
        .row {
          display: flex;
          padding: 8px 36px 8px 36px;
          justify-content: space-evenly;
        }
        .diagonal {
          background-color: var(--light-primary-color);
        }
      </style>
    `;
  }

  launchApp(e) {
    this.hass.callService("media_player", "select_source", {
      entity_id: this._config.entity,
      source: e.currentTarget.value
    });
  }

  handleActionClick(e) {
    const custom_services = [
      "power",
      "power_on",
      "power_off",
      "volume_up",
      "volume_down",
      "volume_mute",
      "back",
      "source",
      "info",
      "home",
      "channelup",
      "channeldown",
      "up",
      "left",
      "select",
      "right",
      "down",
      "reverse",
      "play",
      "forward",
      "netflix",
      "prime_video",
      "youtube",
      "menu",
      "finder",
      "plex",
      "kodi",
    ];

    if (
      custom_services.indexOf(e.currentTarget.action) >= 0 &&
      this._config[e.currentTarget.action]
    ) {
      const [domain, service] = this._config[
        e.currentTarget.action
      ].service.split(".", 2);
      this.hass.callService(
        domain,
        service,
        this._config[e.currentTarget.action].service_data
          ? this._config[e.currentTarget.action].service_data
          : null
      );
    } else {
      const [domain, service] = this._config[
        e.currentTarget.action
      ].service.split(".", 2);
      this.hass.callService(
        domain,
        service,
        this._config[e.currentTarget.action].service_data
          ? this._config[e.currentTarget.action].service_data
          : null
      );
    }
  }

  applyThemesOnElement(element, themes, localTheme) {
    if (!element._themes) {
      element._themes = {};
    }
    let themeName = themes.default_theme;
    if (localTheme === "default" || (localTheme && themes.themes[localTheme])) {
      themeName = localTheme;
    }
    const styles = Object.assign({}, element._themes);
    if (themeName !== "default") {
      var theme = themes.themes[themeName];
      Object.keys(theme).forEach(key => {
        var prefixedKey = "--" + key;
        element._themes[prefixedKey] = "";
        styles[prefixedKey] = theme[key];
      });
    }
    if (element.updateStyles) {
      element.updateStyles(styles);
    } else if (window.ShadyCSS) {
      // implement updateStyles() method of Polemer elements
      window.ShadyCSS.styleSubtree(
        /** @type {!HTMLElement} */ (element),
        styles
      );
    }

    const meta = document.querySelector("meta[name=theme-color]");
    if (meta) {
      if (!meta.hasAttribute("default-content")) {
        meta.setAttribute("default-content", meta.getAttribute("content"));
      }
      const themeColor =
        styles["--primary-color"] || meta.getAttribute("default-content");
      meta.setAttribute("content", themeColor);
    }
  }
}

customElements.define("shield-card", TVCardServices);
