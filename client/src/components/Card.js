import React from 'react';
import "./Card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
const Cardd = ({post}) => {
  return (
     
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={post.avatar} style={{ width: '100%', height: 'auto' }} />
    <Card.Body>
      <Card.Title>{post.id}</Card.Title>
      <Card.Text>
        {post.first_name} {post.last_name}
      </Card.Text>
       
      <Card.Text>
        {post.gender}
      </Card.Text>
      
      <Card.Text>
      Available: {post.available ? 'Yes' : 'No'}      
      </Card.Text>
      <Button variant="primary">View Profile</Button>
      <p></p>
      <Button variant="primary">Add to Team</Button>

    </Card.Body>
  </Card>
  )
}

export default Cardd;
