import React, { Component } from 'react';

import { Item, Card, Image, Content, Title, Source, Favicon } from './styles';

const HN_LOGO = 'https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png';
const HN_FAV = 'https://pbs.twimg.com/profile_images/469397708986269696/iUrYEOpJ_400x400.png';
const HN_HOST = 'news.ycombinator.com';
const DEFAULT_IMAGE = 'https://gitconnected.com/public/images/social-meta/social-logo.png';
const DEFAULT_FAV = 'https://gitconnected.com/public/meta/favicon/gc-fav.png';

class GridItem extends Component {
  state = {
    hasImageError: false,
    hasFavError: false,
  };

  handleImageError = () => this.setState({ hasImageError: true });
  handleFavError = () => this.setState({ hasFavError: true });

  getImage() {
    const { image, site } = this.props;
    let src = image;

    if (site === HN_HOST) {
      src = HN_LOGO;
    } else if (this.state.hasImageError || !src) {
      src = DEFAULT_IMAGE;
    }

    return src;
  }

  getFav() {
    const { favicon, site } = this.props;
    let src = favicon;

    if (site === HN_HOST) {
      src = HN_FAV;
    } else if (this.state.hasFavError || !src) {
      src = DEFAULT_FAV;
    }

    return src;
  }

  render() {
    const { url, title, site } = this.props;
    const fav = this.getFav();
    const image = this.getImage();

    return (
      <a href={url} target="_blank" rel="nofollow noreferrer nofollow">
        <Item>
          <Card>
            <Image src={image} onError={this.handleImageError} />
            <Content>
              <Title>{title}</Title>
              <Source>
                <Favicon src={fav} onError={this.handleFavError} /> // {site}
              </Source>
            </Content>
          </Card>
        </Item>
      </a>
    );
  }
}

export default GridItem;
