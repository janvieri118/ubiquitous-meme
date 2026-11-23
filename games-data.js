// Contest data shared by games.html (list) and index.html (squares board). Prototype data.
// Team: [code, city/school, name, badge color, short label (optional, defaults to name)]
// Grids: G([price, sold], ...) - squares already sold by other players. Each grid gets a unique id
// (used in URLs and saved purchases); the number people see restarts at #1 for each price.
const G = (...list) => list.map(([price, sold], i) => ({ price, grid: i + 1, sold }));
window.SQUARES_PRICES = [1, 3, 5];
window.SQUARES_GAMES = [
  // ===== NFL =====
  { id: "tb-dal", league: "NFL", date: "Thu, Oct 8 | 8:15 PM",
    home: ["TB", "Tampa Bay", "Buccaneers", "#d50a0a"], away: ["DAL", "Dallas", "Cowboys", "#003594"],
    grids: G([1, 70], [5, 37], [5, 37], [3, 20], [1, 45], [1, 12]) },   // grid id 2 is the Figma board
  { id: "bal-cin", league: "NFL", date: "Thu, Oct 8 | 8:15 PM",
    home: ["BAL", "Baltimore", "Ravens", "#8611cf"], away: ["CIN", "Cincinnati", "Bengals", "#e58d00"],
    grids: G([1, 37], [3, 37], [5, 22]) },
  { id: "kc-buf", league: "NFL", date: "Thu, Oct 29 | 8:15 PM",
    home: ["KC", "Kansas City", "Chiefs", "#e31837"], away: ["BUF", "Buffalo", "Bills", "#00338d"],
    grids: G([1, 82], [1, 64], [1, 51], [1, 40], [1, 33], [1, 21], [1, 9], [3, 45], [5, 12]) },
  { id: "phi-sf", league: "NFL", date: "Sun, Nov 1 | 4:25 PM",
    home: ["PHI", "Philadelphia", "Eagles", "#004c54"], away: ["SF", "San Francisco", "49ers", "#aa0000"],
    grids: G([1, 100], [1, 58], [3, 21], [5, 30]) },   // $1 grid #1 sold out (demo)
  { id: "gb-chi", league: "NFL", date: "Sun, Nov 1 | 1:00 PM",
    home: ["GB", "Green Bay", "Packers", "#203731"], away: ["CHI", "Chicago", "Bears", "#0b162a"],
    grids: G([1, 100], [3, 100], [5, 100]) },   // sold out (demo)
  { id: "mia-nyj", league: "NFL", date: "Mon, Nov 2 | 8:15 PM",
    home: ["MIA", "Miami", "Dolphins", "#008e97"], away: ["NYJ", "New York", "Jets", "#125740"],
    grids: G([1, 100], [3, 100], [5, 100]) },   // sold out (demo)

  // ===== NCAAF =====
  { id: "ala-uga", league: "NCAAF", date: "Sat, Oct 31 | 3:30 PM",
    home: ["ALA", "Alabama", "Crimson Tide", "#9e1b32", "Alabama"], away: ["UGA", "Georgia", "Bulldogs", "#ba0c2f", "Georgia"],
    grids: G([1, 92], [1, 88], [1, 81], [1, 77], [1, 70], [1, 62], [1, 55], [1, 47], [1, 39], [1, 30], [1, 18], [1, 6], [3, 40], [5, 9]) },
  { id: "osu-mic", league: "NCAAF", date: "Sat, Oct 31 | 12:00 PM",
    home: ["OSU", "Ohio State", "Buckeyes", "#bb0000", "Ohio State"], away: ["MICH", "Michigan", "Wolverines", "#00274c", "Michigan"],
    grids: G([1, 91], [3, 52], [5, 20]) },
  { id: "tex-ou", league: "NCAAF", date: "Sat, Nov 7 | 7:30 PM",
    home: ["TEX", "Texas", "Longhorns", "#bf5700", "Texas"], away: ["OU", "Oklahoma", "Sooners", "#841617", "Oklahoma"],
    grids: G([1, 33], [3, 15], [5, 8]) },
  { id: "lsu-ore", league: "NCAAF", date: "Sat, Nov 7 | 8:00 PM",
    home: ["LSU", "LSU", "Tigers", "#461d7c", "LSU"], away: ["ORE", "Oregon", "Ducks", "#154733", "Oregon"],
    grids: G([1, 27], [3, 10], [5, 4]) },

  // ===== NBA =====
  { id: "lal-bos", league: "NBA", date: "Wed, Oct 28 | 7:30 PM",
    home: ["LAL", "Los Angeles", "Lakers", "#552583"], away: ["BOS", "Boston", "Celtics", "#007a33"],
    grids: G([1, 88], [1, 47], [3, 20], [5, 15]) },
  { id: "gsw-den", league: "NBA", date: "Thu, Oct 29 | 10:00 PM",
    home: ["GSW", "Golden State", "Warriors", "#1d428a"], away: ["DEN", "Denver", "Nuggets", "#0e2240"],
    grids: G([1, 61], [1, 40], [1, 22], [1, 14], [1, 5], [3, 24], [5, 10]) },
  { id: "mia-nyk", league: "NBA", date: "Fri, Oct 30 | 7:30 PM",
    home: ["MIA", "Miami", "Heat", "#98002e"], away: ["NYK", "New York", "Knicks", "#f58426"],
    grids: G([1, 54], [3, 22], [5, 11]) },
  { id: "dal-phx", league: "NBA", date: "Tue, Nov 3 | 9:00 PM",
    home: ["DAL", "Dallas", "Mavericks", "#00538c"], away: ["PHX", "Phoenix", "Suns", "#1d1160"],
    grids: G([1, 12], [3, 6], [5, 3]) },

  // ===== NCAAB =====
  { id: "duk-unc", league: "NCAAB", date: "Wed, Nov 4 | 9:00 PM",
    home: ["DUKE", "Duke", "Blue Devils", "#003087", "Duke"], away: ["UNC", "North Carolina", "Tar Heels", "#13294b", "UNC"],
    grids: G([1, 73], [1, 38], [3, 30], [5, 12]) },
  { id: "ku-uk", league: "NCAAB", date: "Tue, Nov 3 | 7:00 PM",
    home: ["KU", "Kansas", "Jayhawks", "#0051ba", "Kansas"], away: ["UK", "Kentucky", "Wildcats", "#0033a0", "Kentucky"],
    grids: G([1, 49], [3, 17], [5, 8]) },
  { id: "zag-bay", league: "NCAAB", date: "Fri, Nov 6 | 8:00 PM",
    home: ["ZAG", "Gonzaga", "Bulldogs", "#041e42", "Gonzaga"], away: ["BAY", "Baylor", "Bears", "#154734", "Baylor"],
    grids: G([1, 29], [3, 11], [5, 5]) }
];
// Grid number shown to people: position among the game's grids at the same price (#1, #2, ...)
window.SQUARES_GRID_NO = (game, grid) => game.grids.filter(c => c.price === grid.price).indexOf(grid) + 1;

// Purchases made in the prototype, kept in this browser so both pages show the same numbers.
// Add ?reset to either page's URL to clear them.
window.SQUARES_STORE = (() => {
  const PREFIX = "squares:";
  const read = (key, fallback) => { try { const v = localStorage.getItem(PREFIX + key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* storage unavailable: keep in memory only */ } };
  if (new URLSearchParams(location.search).has("reset")) {
    try { Object.keys(localStorage).filter(k => k.startsWith(PREFIX)).forEach(k => localStorage.removeItem(k)); } catch { /* nothing stored */ }
  }
  return {
    owned: (game, grid) => read(`owned:${game}:${grid}`, []),
    setOwned: (game, grid, keys) => write(`owned:${game}:${grid}`, keys),
    cash: () => read("cash", 3670.25),
    setCash: value => write("cash", value)
  };
})();
