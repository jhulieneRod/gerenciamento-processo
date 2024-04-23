import React from 'react';
import Card from './Card';
import './Dashboard.css';

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Card
        title="Card 1"
        icon="users"
        count={100}
        description="Descrição do Card 1"
        onClick={props.onCardClick}
        color='#2ecc71'
      />
      <Card
        title="Card 2"
        icon="chart-bar"
        count={200}
        description="Descrição do Card 2"
        onClick={props.onCardClick}
        color='#3498db'
      />
      <Card
        title="Card 3"
        icon="dollar-sign"
        count={300}
        description="Descrição do Card 3"
        onClick={props.onCardClick}
        color='#e7cd3c'
      />
      <Card
        title="Card 4"
        icon="shopping-cart"
        count={400}
        description="Descrição do Card 4"
        onClick={props.onCardClick}
        color='#e7803c'
      />
      <Card
        title="Card 5"
        icon="calendar-alt"
        count={500}
        description="Descrição do Card 5"
        onClick={props.onCardClick}
        color='#e73c3c'
      />
    </div>
  );
}

export default Dashboard;
