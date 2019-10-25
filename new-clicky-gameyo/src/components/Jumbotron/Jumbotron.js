import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <img src="https://fanart.tv/fanart/tv/84912/hdtvlogo/parks-and-recreation-5419df561622e.png"></img>
          {/* <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;