import { Grid, Menu, Segment, Icon, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical style={{ padding: '5em 0em', backgroundColor: 'snow', marginTop: 'auto' }}>
    <Header as='h2' textAlign='center' style={{ color: 'coral', textTransform: 'uppercase' }}>
      Edward's Pizza
    </Header>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={4}>
          <Header as='h3' textAlign='center' content='About' />
          <Menu pointing secondary size='small'>
            <Menu.Item as='a' href='#'>
              About Us
            </Menu.Item>
            <Menu.Item as='a' href='#'>
              Contact Us
            </Menu.Item>
            <Menu.Item as='a' href='#'>
              Privacy Policy
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column width={8}>
          <Header as='h3' textAlign='center'>
            Footer Header
          </Header>
          <p style={{ textAlign: 'center' }}>
            Extra space for a call to action inside the footer that could help re-engage users.
          </p>
        </Grid.Column>

        <Grid.Column width={4}>
          <Header as='h3' textAlign='center' content='Follow Us' />
          <a href='#'>
            <Icon name='facebook' size='big' />
          </a>
          <a href='#'>
            <Icon name='twitter' size='big' />
          </a>
          <a href='#'>
            <Icon name='linkedin' size='big' />
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Footer;
