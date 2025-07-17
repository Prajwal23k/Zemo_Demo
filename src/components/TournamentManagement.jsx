import React from 'react';

function TournamentManagement() {
  return (
    <div className="tournament-management">
      <h1>Tournament Management Instructions</h1>
      <p>
        Welcome to the Tournament Management page! Follow these steps to manage your tournament effectively:
      </p>
      <ol>
        <li>Log in to your account and navigate to the tournament dashboard.</li>
        <li>Create a new tournament by filling in the required details such as name, date, and venue.</li>
        <li>Invite participants and assign roles (e.g., players, referees).</li>
        <li>Set up the tournament schedule and brackets.</li>
        <li>Track live scores and update results in real-time.</li>
        <li>Generate certificates for participants and winners.</li>
        <li>Publish tournament results and share updates with the community.</li>
      </ol>
      <p>
        For more assistance, contact our support team at <a href="mailto:support@zemo.co.in">support@zemo.co.in</a>.
      </p>
    </div>
  );
}

export default TournamentManagement;