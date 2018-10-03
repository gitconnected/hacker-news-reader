import React from 'react';
import { layouts, themes } from 'store/app/utils';

import { Header, Spacer, NavSection, Content, Icon, Logo, ExternalLink, Text } from './styles';

const Nav = ({ layout, theme, setLayout, setTheme }) => (
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
            <Icon onClick={() => setLayout(layouts.grid)}>
              <i className="fas fa-th-large" />
            </Icon>
          ) : (
            <Icon onClick={() => setLayout(layouts.list)}>
              <i className="fas fa-th-list" />
            </Icon>
          )}
          {theme === themes.light ? (
            <Icon onClick={() => setTheme(themes.dark)}>
              <i className="fas fa-moon" />
            </Icon>
          ) : (
            <Icon onClick={() => setTheme(themes.light)}>
              <i className="fas fa-sun" />
            </Icon>
          )}
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </div>
);

export default Nav;
