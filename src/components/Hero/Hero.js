import React, { useState } from "react";
import {
  Menu,
  Placeholder,
  Grid,
  Header,
} from "semantic-ui-react";
import "./hero.scss";

const Hero = () => {
  const [activeItem, setActiveItem] = useState("google");

  const HeroItems = [
    { id: "google" },
    { id: "facebook" },
    { id: "linkedIn" },
    { id: "lego" },
    { id: "deep mind" },
  ];

  const handleNav = (e, { name }) => {
    setActiveItem(name);
  };

  const renderBanner = () => {
    return (
      <Grid className="hero-banner">
        <Grid.Row columns={2}>
          <Grid.Column width={6} className="col">
            <Header as="h2">{activeItem}</Header>
            <Placeholder>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={10} className="col">
            {" "}
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Placeholder>
                    <Placeholder.Image style={{ height: 500 }} />
                  </Placeholder>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Placeholder>
                    <Placeholder.Image style={{ height: 500 }} />
                  </Placeholder>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };

  return (
    <div className="section hero">
      {renderBanner()}

      <Menu pointing secondary className="hero-menu">
        {HeroItems.map((item) => (
          <Menu.Item
            name={item.id}
            active={activeItem === item.id}
            onClick={handleNav}
          />
        ))}
      </Menu>
    </div>
  );
};

export default Hero;
