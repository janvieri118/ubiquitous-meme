// Contest data shared by games.html (list) and index.html (squares board). Prototype data.
// Team: [code, city, name, badge color]
window.SQUARES_GAMES = [
  { id: "tb-dal", league: "NFL", date: "Thu, Oct 8 | 8:15 PM",
    home: ["TB", "Tampa Bay", "Buccaneers", "#d50a0a"], away: ["DAL", "Dallas", "Cowboys", "#003594"],
    grids: [{ price: 1, grid: 1, sold: 70 }, { price: 5, grid: 2, sold: 37 }, { price: 5, grid: 3, sold: 37 }] },
  { id: "bal-cin", league: "NFL", date: "Thu, Oct 8 | 8:15 PM",
    home: ["BAL", "Baltimore", "Ravens", "#8611cf"], away: ["CIN", "Cincinnati", "Bengals", "#e58d00"],
    grids: [{ price: 5, grid: 1, sold: 37 }, { price: 5, grid: 2, sold: 37 }] }
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
