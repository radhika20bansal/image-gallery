import React from 'react';
import { Card } from 'react-bootstrap';

const Photo = ({ id }) => {
  return (
    <Card className="photo">
      <Card.Img
        variant="top"
        src={`https://image-gallery-app1111.herokuapp.com/photos/${id}`}
        alt="Photo"
      />
    </Card>
  );
};

export default Photo;