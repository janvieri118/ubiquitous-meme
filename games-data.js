// Contest data shared by games.html (list) and index.html (squares board). Prototype data.
// Team: [code, city/school, name, badge color, short label (optional, defaults to name)]
// Grid: price per square, grid number, squares already sold by other players
window.SQUARES_GAMES = [
  // ===== NFL =====
  { id: "tb-dal", league: "NFL", date: "Thu, Oct 8 | 8:15 PM",
    home: ["TB", "Tampa Bay", "Buccaneers", "#d50a0a"], away: ["DAL", "Dallas", "Cowboys", "#003594"],
    grids: [{ price: 1, grid: 1, sold: 70 }, { price: 5, grid: 2, sold: 37 }, { price: 5, grid: 3, sold: 37 }] },
  { id: "bal-cin", league: "NFL", date: "Thu, Oct 8 | 8:15 PM",
    home: ["BAL", "Baltimore", "Ravens", "#8611cf"], away: ["CIN", "Cincinnati", "Bengals", "#e58d00"],
    grids: [{ price: 5, grid: 1, sold: 37 }, { price: 5, grid: 2, sold: 37 }] },
  { id: "kc-buf", league: "NFL", date: "Thu, Oct 29 | 8:15 PM",
    home: ["KC", "Kansas City", "Chiefs", "#e31837"], away: ["BUF", "Buffalo", "Bills", "#00338d"],
    grids: [{ price: 5, grid: 1, sold: 82 }, { price: 10, grid: 2, sold: 45 }, { price: 25, grid: 3, sold: 12 }] },
  { id: "phi-sf", league: "NFL", date: "Sun, Nov 1 | 4:25 PM",
    home: ["PHI", "Philadelphia", "Eagles", "#004c54"], away: ["SF", "San Francisco", "49ers", "#aa0000"],
    grids: [{ price: 1, grid: 1, sold: 100 }, { price: 5, grid: 2, sold: 58 }, { price: 10, grid: 3, sold: 21 }] },
  { id: "gb-chi", league: "NFL", date: "Sun, Nov 1 | 1:00 PM",
    home: ["GB", "Green Bay", "Packers", "#203731"], away: ["CHI", "Chicago", "Bears", "#0b162a"],
    grids: [{ price: 5, grid: 1, sold: 64 }, { price: 10, grid: 2, sold: 30 }] },
  { id: "mia-nyj", league: "NFL", date: "Mon, Nov 2 | 8:15 PM",
    home: ["MIA", "Miami", "Dolphins", "#008e97"], away: ["NYJ", "New York", "Jets", "#125740"],
    grids: [{ price: 5, grid: 1, sold: 18 }] },

  // ===== NCAAF =====
  { id: "ala-uga", league: "NCAAF", date: "Sat, Oct 31 | 3:30 PM",
    home: ["ALA", "Alabama", "Crimson Tide", "#9e1b32", "Alabama"], away: ["UGA", "Georgia", "Bulldogs", "#ba0c2f", "Georgia"],
    grids: [{ price: 5, grid: 1, sold: 76 }, { price: 10, grid: 2, sold: 40 }, { price: 25, grid: 3, sold: 9 }] },
  { id: "osu-mic", league: "NCAAF", date: "Sat, Oct 31 | 12:00 PM",
    home: ["OSU", "Ohio State", "Buckeyes", "#bb0000", "Ohio State"], away: ["MIC", "Michigan", "Wolverines", "#00274c", "Michigan"],
    grids: [{ price: 5, grid: 1, sold: 91 }, { price: 10, grid: 2, sold: 52 }] },
  { id: "tex-ou", league: "NCAAF", date: "Sat, Nov 7 | 7:30 PM",
    home: ["TEX", "Texas", "Longhorns", "#bf5700", "Texas"], away: ["OU", "Oklahoma", "Sooners", "#841617", "Oklahoma"],
    grids: [{ price: 1, grid: 1, sold: 33 }, { price: 5, grid: 2, sold: 15 }] },
  { id: "lsu-ore", league: "NCAAF", date: "Sat, Nov 7 | 8:00 PM",
    home: ["LSU", "LSU", "Tigers", "#461d7c", "LSU"], away: ["ORE", "Oregon", "Ducks", "#154733", "Oregon"],
    grids: [{ price: 5, grid: 1, sold: 27 }] },

  // ===== NBA =====
  { id: "lal-bos", league: "NBA", date: "Wed, Oct 28 | 7:30 PM",
    home: ["LAL", "Los Angeles", "Lakers", "#552583"], away: ["BOS", "Boston", "Celtics", "#007a33"],
    grids: [{ price: 5, grid: 1, sold: 88 }, { price: 10, grid: 2, sold: 47 }, { price: 25, grid: 3, sold: 20 }] },
  { id: "gsw-den", league: "NBA", date: "Thu, Oct 29 | 10:00 PM",
    home: ["GSW", "Golden State", "Warriors", "#1d428a"], away: ["DEN", "Denver", "Nuggets", "#0e2240"],
    grids: [{ price: 5, grid: 1, sold: 61 }, { price: 10, grid: 2, sold: 24 }] },
  { id: "mia-nyk", league: "NBA", date: "Fri, Oct 30 | 7:30 PM",
    home: ["MIA", "Miami", "Heat", "#98002e"], away: ["NYK", "New York", "Knicks", "#f58426"],
    grids: [{ price: 1, grid: 1, sold: 54 }, { price: 5, grid: 2, sold: 22 }] },
  { id: "dal-phx", league: "NBA", date: "Tue, Nov 3 | 9:00 PM",
    home: ["DAL", "Dallas", "Mavericks", "#00538c"], away: ["PHX", "Phoenix", "Suns", "#1d1160"],
    grids: [{ price: 5, grid: 1, sold: 12 }] },

  // ===== NCAAB =====
  { id: "duk-unc", league: "NCAAB", date: "Wed, Nov 4 | 9:00 PM",
    home: ["DUK", "Duke", "Blue Devils", "#003087", "Duke"], away: ["UNC", "North Carolina", "Tar Heels", "#13294b", "UNC"],
    grids: [{ price: 5, grid: 1, sold: 73 }, { price: 10, grid: 2, sold: 38 }] },
  { id: "ku-uk", league: "NCAAB", date: "Tue, Nov 3 | 7:00 PM",
    home: ["KU", "Kansas", "Jayhawks", "#0051ba", "Kansas"], away: ["UK", "Kentucky", "Wildcats", "#0033a0", "Kentucky"],
    grids: [{ price: 5, grid: 1, sold: 49 }, { price: 10, grid: 2, sold: 17 }] },
  { id: "zag-bay", league: "NCAAB", date: "Fri, Nov 6 | 8:00 PM",
    home: ["ZAG", "Gonzaga", "Bulldogs", "#041e42", "Gonzaga"], away: ["BAY", "Baylor", "Bears", "#154734", "Baylor"],
    grids: [{ price: 1, grid: 1, sold: 29 }, { price: 5, grid: 2, sold: 11 }] }
];

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
