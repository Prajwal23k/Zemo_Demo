import React, { useState } from 'react';
import './Tournament.css';

function Tournament() {
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: 'Basketball Championship 2024',
      date: '2024-03-15',
      status: 'upcoming',
      participants: 24,
      sport: 'Basketball',
      location: 'Mumbai Sports Complex'
    },
    {
      id: 2,
      name: 'Cricket Premier League',
      date: '2024-03-20',
      status: 'upcoming',
      participants: 16,
      sport: 'Cricket',
      location: 'Delhi Cricket Ground'
    },
    {
      id: 3,
      name: 'Football League 2024',
      date: '2024-02-15',
      status: 'ongoing',
      participants: 32,
      sport: 'Football',
      location: 'Bangalore Football Stadium'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTournaments = tournaments.filter(tournament => {
    if (filter === 'all') return true;
    return tournament.status === filter;
  });

  return (
    <div className="tournament-container">
      <div className="tournament-header">
        <h1>Tournaments</h1>
        <div className="tournament-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'upcoming' ? 'active' : ''} 
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={filter === 'ongoing' ? 'active' : ''} 
            onClick={() => setFilter('ongoing')}
          >
            Ongoing
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        <button className="create-tournament-btn">Create Tournament</button>
      </div>

      <div className="tournament-grid">
        {filteredTournaments.map(tournament => (
          <div key={tournament.id} className="tournament-card">
            <div className="tournament-status" data-status={tournament.status}>
              {tournament.status}
            </div>
            <h3>{tournament.name}</h3>
            <div className="tournament-details">
              <p><strong>Date:</strong> {tournament.date}</p>
              <p><strong>Sport:</strong> {tournament.sport}</p>
              <p><strong>Location:</strong> {tournament.location}</p>
              <p><strong>Participants:</strong> {tournament.participants}</p>
            </div>
            <div className="tournament-actions">
              <button className="view-btn">View Details</button>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournament; 