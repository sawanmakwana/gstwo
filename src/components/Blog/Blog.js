import React from "react";
import "./blog.scss"
import { Grid, Header, Placeholder } from "semantic-ui-react";

const Blog = (props) => {
  const { index } = props;

  return (
    <div className="section blog">
      <Grid>
        <Grid.Row
          columns={2}
          style={{ flexDirection: index % 2 !== 0 ? "row-reverse" : "" }}
        >
          <Grid.Column width={10}>
            {" "}
            <Placeholder>
              <Placeholder.Image style={{ height: 300, width: 1000 }} />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3">New Alert Games</Header>
            <p>
              Where we help businesses grow by creating digital products and
              services that matter.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Blog;
