import React, { Component } from 'react';
import { layouts, themes } from 'store/app/utils';

import { Header, Spacer, NavSection, Content, Icon, Logo, ExternalLink, Text } from './styles';

class Nav extends Component {
  trackToggle(id) {
    try {
      // eslint-disable-next-line
      gtag('event', 'clicked', {
        event_label: id,
        event_category: 'toggle',
      });
    } catch (err) {}
  }

  render() {
    const { layout, theme, setLayout, setTheme } = this.props;
    return (
      <div>
        <Header>
          <Content>
            <NavSection>
              <ExternalLink href="https://gitconnected.com" target="_blank">
                <Logo src="https://gitconnected.com/public/meta/favicon/gc-fav.png" /> gitconnected
              </ExternalLink>
            </NavSection>
            <NavSection>
              <Text>TOGGLE</Text>
              {layout === layouts.list ? (
                <Icon
                  onClick={e => {
                    setLayout(layouts.grid);
                    this.trackToggle(e.target.id);
                  }}
                  id="layout-toggle-grid"
                >
                  <i className="fas fa-th-large" />
                </Icon>
              ) : (
                <Icon
                  onClick={e => {
                    setLayout(layouts.list);
                    this.trackToggle(e.target.id);
                  }}
                  id="layout-toggle-list"
                >
                  <i className="fas fa-th-list" />
                </Icon>
              )}
              {theme === themes.light ? (
                <Icon
                  onClick={e => {
                    setTheme(themes.dark);
                    this.trackToggle(e.target.id);
                  }}
                  id="theme-toggle-night"
                >
                  <i className="fas fa-moon" />
                </Icon>
              ) : (
                <Icon
                  onClick={e => {
                    setTheme(themes.light);
                    this.trackToggle(e.target.id);
                  }}
                  id="theme-toggle-day"
                >
                  <i className="fas fa-sun" />
                </Icon>
              )}
            </NavSection>
          </Content>
        </Header>
        <Spacer />
      </div>
    );
  }
}

export default Nav;
