// Handle fan story submission
document.getElementById('fan-submission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const story = document.getElementById('fan-story').value;
    if (story) {
        alert('Thank you for your submission!');
        document.getElementById('fan-story').value = ''; // Clear the text area
    } else {
        alert('Please enter your story.');
    }
});

// Voting for the greatest player
let votes = {
    'Player 1': 0,
    'Player 2': 0,
    'Player 3': 0
};

function vote(player) {
    votes[player]++;
    document.getElementById('vote-result').innerText = `${player} now has ${votes[player]} votes!`;
}
