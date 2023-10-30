document.addEventListener("click", function (){
    showUserStats()
});

function showUserStats(){
    fetch("https://api.chess.com/pub/player/{username}/stats")
    .then(res => res.json())
    .then(stats => function (){
        randomUserStats()
    });
};


document.addEventListener("DOMContentLoaded", function (){

    document.querySelector("#searchbutton").addEventListener("click", function (){
        const username = document.querySelector("#container").value;

        if (username.trim() === ""){
            alert("Please enter a valid username.");
            return;
        }
        
        const apiUrl = `https://api.chess.com/pub/player/${username}/stats`
        showUserStats(apiUrl);
    });
});

function showUserStats(apiUrl){
    fetch(apiUrl)
    .then(res => res.json())
    .then((stats) => {
        randomUserStats(stats);
    })
    .catch((error) => {
        console.error("Error fetching data: " + error);
    });
}

function randomUserStats(stats){
    const mystats = document.querySelector("#statsHolder");
    mystats.innerHTML = "";
  
      const showStats = document.createElement("div");
      showStats.innerHTML =`
      <h4 id="chess">My Stats</h4>
      <h5>Blitz</h5>
      <ul>
        <li>Last Rating: ${stats.chess_blitz.last.rating}</li>
        <li>Last Date: ${new Date(stats.chess_blitz.last.date * 1000)}</li>
        <li>Last RD: ${stats.chess_blitz.last.rd}</li>
      </ul>
      <ul>
        <li>Best Rating: ${stats.chess_blitz.best.rating}</li>
        <li>Best Date: ${new Date(stats.chess_blitz.best.date * 1000)}</li>
        <li>Best Game: <a href="${stats.chess_blitz.best.game}">Live game link</a></li>
      </ul>
      <ul>
        <li>Record (Blitz):</li>
        <li>Wins: ${stats.chess_blitz.record.win}</li>
        <li>Losses: ${stats.chess_blitz.record.loss}</li>
        <li>Draws: ${stats.chess_blitz.record.draw}</li>
      </ul>
      <h5>Bullet:</h5>
      <ul>
        <li>Last Rating: ${stats.chess_bullet.last.rating}</li>
        <li>Last Date: ${new Date(stats.chess_bullet.last.date * 1000)}</li>
        <li>Last RD: ${stats.chess_bullet.last.rd}</li>
      </ul>
      <ul>
        <li>Best Rating: ${stats.chess_bullet.best.rating}</li>
        <li>Best Date: ${new Date(stats.chess_bullet.best.date * 1000)}</li>
        <li>Best Game: <a href="${stats.chess_bullet.best.game}">Live game link</a></li>
      </ul>
      <ul>
        <li>Record (Bullet):</li>
        <li>Wins: ${stats.chess_bullet.record.win}</li>
        <li>Losses: ${stats.chess_bullet.record.loss}</li>
        <li>Draws: ${stats.chess_bullet.record.draw}</li>
      </ul>
  
      <h5>Rapid:</h5>
      <ul>
        <li>Last Rating: ${stats.chess_rapid.last.rating}</li>
        <li>Last Date: ${new Date(stats.chess_rapid.last.date * 1000)}</li>
        <li>Last RD: ${stats.chess_rapid.last.rd}</li>
      </ul>
      <ul>
        <li>Best Rating: ${stats.chess_rapid.best.rating}</li>
        <li>Best Date: ${new Date(stats.chess_rapid.best.date * 1000)}</li>
        <li>Best Game: <a href="${stats.chess_rapid.best.game}">Live game link</a></li>
      </ul>
      <ul>
        <li>Record (Rapid):</li>
        <li>Wins: ${stats.chess_rapid.record.win}</li>
        <li>Losses: ${stats.chess_rapid.record.loss}</li>
        <li>Draws: ${stats.chess_rapid.record.draw}</li>
      </ul>
      
      <h5>Daily:</h5>
      <ul>
        <li>Last Rating: ${stats.chess_daily.last.rating}</li>
        <li>Last Date: ${new Date(stats.chess_daily.last.date * 1000)}</li>
        <li>Last rd: ${stats.chess_daily.last.rd}</li>
      </ul>
      <ul>
        <li>Wins: ${stats.chess_daily.record.win}</li>
        <li>Losses: ${stats.chess_daily.record.loss}</li>
        <li>Draws: ${stats.chess_daily.record.draw}</li>
      </ul>
  
      <h5>Puzzle Rush:</h5>
      <ul>
        <li>Total attempts: ${stats.puzzle_rush.best.total_attempts}</li>
        <li>Score: ${stats.puzzle_rush.best.score}</li>
      </ul>
  
      <h5>Tactics:</h5>
      <ul>
        <li>Rating: ${stats.tactics.highest.rating}</li>
        <li>Date: ${new Date(stats.tactics.highest.date * 1000)}</li>
      </ul>
  
      `;
      mystats.appendChild(showStats);
  };
