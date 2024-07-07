import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assurez-vous d'importer votre fichier CSS

function CardPlayers({ players }) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {players.map((player, index) => (
        <Card 
          key={index} 
          style={{ width: '18rem', margin: '10px' }} 
          className={player.name === "Lionel Messi(goat)" ? 'gold-card' : ''}
        >
          <Card.Img variant="top" src={player.imageUrl} alt={player.name} />
          <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <Card.Text>
              <strong>Team:</strong> {player.team}<br />
              <strong>Nationality:</strong> {player.nationality}<br />
              <strong>Jersey Number:</strong> {player.jerseyNumber}<br />
              <strong>Age:</strong> {player.age}
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPlayers;