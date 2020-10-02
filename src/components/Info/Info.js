import React from "react";
import "./info.scss";
import { Grid, Header } from "semantic-ui-react";

const Info = () => {
  return (
    <div className="section info">
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            {" "}
            <Header as="h1">Creativity is our greatest tool</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>
              With it, we create beautiful, useful products that change
              behaviour for the better. We find new uses for emerging
              technologies, deliver games that spark emotions, and help others
              to build something meaningful.
            </p>

            <p>
              {" "}
              People are at the centre of everything we do, and for us
              technology should work in service of people, not the other way
              around.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            {" "}
            <Header as="h2">
              ustwo is a B Corp company with three distinct parts:
            </Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h2">Studios</Header>
            <p>
              Where we help businesses grow by creating digital products and
              services that matter.
            </p>
            <Header as="h2">Games</Header>
            <p>
              Where we create our own games that feel meaningful and are
              accessible to everyone.
            </p>

            <Header as="h2">Adventure</Header>
            <p>
              Where we invest to help creative-minded founders build the
              businesses they believe in.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Info;
