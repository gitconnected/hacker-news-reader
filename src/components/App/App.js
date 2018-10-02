import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Nav from 'components/Nav';
import List from 'components/List';
import Grid from 'components/Grid';
import Loader from 'components/Loader';
import { layouts, themes } from 'store/app/utils';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper, Title, TitleWrapper, GithubLink, SocialLink } from './styles';

class Home extends Component {
  static defaultProps = {
    stories: [],
  };

  state = {
    storyIds: this.props.storyIds || [],
    stories: this.props.stories || [],
    page: this.props.page || 0,
  };

  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, layout, theme, hasMoreStores } = this.props;
    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <div>
          <Nav />
          <Wrapper>
            <TitleWrapper>
              <Title>
                // Hacker News Reader{' '}
                <GithubLink href="https://github.com/gitconnected" target="_blank">
                  (build your own)
                </GithubLink>
              </Title>
              <div>
                <SocialLink href="https://twitter.com/gitconnected" target="blank">
                  <i className="fab fa-twitter" />
                </SocialLink>
                <SocialLink href="https://community.gitconnected.com" target="blank">
                  <i className="fab fa-slack-hash" />
                </SocialLink>
                <SocialLink href="https://levelup.gitconnected.com" target="blank">
                  <i className="fab fa-medium-m" />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/gitconnectednetwork" target="blank">
                  <i className="fab fa-facebook" />
                </SocialLink>
                <SocialLink href="https://gitconnected.com" target="blank">
                  <i className="fas fa-link" />
                </SocialLink>
              </div>
            </TitleWrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStores}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              {layout === layouts.list ? <List stories={stories} /> : <Grid stories={stories} />}
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default Home;
