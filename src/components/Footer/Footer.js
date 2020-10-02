import React from "react";
import { Grid, Header, Placeholder } from "semantic-ui-react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="section footer">
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width={4}>
            <Header as="h2">Join Us</Header>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={4}>
            {" "}
            <Header as="h2">What's new ?</Header>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid>
              <Grid.Row>
                {Array.from({ length: 4 }, () => (
                  <Grid.Column>
                    <Placeholder style={{ height: 25, width: 25 }}>
                      <Placeholder.Image />
                    </Placeholder>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="full" />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="full" />
                <Placeholder.Line length="medium" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
