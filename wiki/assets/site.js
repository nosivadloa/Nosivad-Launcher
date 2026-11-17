const pages = [
  [
    "index.html",
    "Home",
    "Overview and quick links"
  ],
  [
    "whats-new.html",
    "What's New",
    "Recent live changes"
  ],
  [
    "getting-started.html",
    "Getting Started",
    "First hour and starter contracts"
  ],
  [
    "adventurer-levels.html",
    "Adventurer Levels",
    "XP and equipment grades"
  ],
  [
    "skills-stats.html",
    "Skills and Stats",
    "Caps and attributes"
  ],
  [
    "professions.html",
    "Professions",
    "Fourteen profession chains and trainer ranks"
  ],
  [
    "vocation.html",
    "Vocation Renown",
    "Gathering, crafting, Trade Insights and commissions"
  ],
  [
    "pets.html",
    "Pets and Companions",
    "Pet levels, abilities and hireable adventurers"
  ],
  [
    "story.html",
    "Story and Investigation",
    "Clues, Pip and regional leaders"
  ],
  [
    "town-renown.html",
    "Town Renown",
    "Regional standing and rank rewards"
  ],
  [
    "markets.html",
    "Markets and Crafting",
    "Player markets, orders, salvage and forge"
  ],
  [
    "magic.html",
    "Magic and Spellbooks",
    "Six schools, spellbooks and summons"
  ],
  [
    "regional-events.html",
    "Regional Events",
    "Threats, objectives and participation"
  ],
  [
    "rifts.html",
    "Planar Rifts",
    "Anchors, waves and sigils"
  ],
  [
    "breach-gates.html",
    "Breach Gates",
    "Expedition ladder and rewards"
  ],
  [
    "world-bosses.html",
    "World Bosses",
    "Rare rift events"
  ],
  [
    "creatures.html",
    "Creatures",
    "Enemy rarity and mutations"
  ],
  [
    "loot-relics.html",
    "Loot and Relics",
    "Graded gear and planar equipment"
  ],
  [
    "shrines-lore.html",
    "Shrines and Lore",
    "Blessings and gods"
  ],
  [
    "bounties.html",
    "Bounty Boards",
    "Contracts and rewards"
  ],
  [
    "reference.html",
    "Reference",
    "Commands and terms"
  ]
];

function currentFile() {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
}

function markActiveNav() {
  const file = currentFile();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === file) {
      link.classList.add("active");
    }
  });
}

function setupSearch() {
  const input = document.querySelector("[data-search]");
  const results = document.querySelector("[data-search-results]");
  const resultList = document.querySelector("[data-search-list]");
  if (!input || !results || !resultList) return;

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    resultList.innerHTML = "";
    if (term.length < 2) {
      results.classList.remove("visible");
      return;
    }

    const matches = pages.filter((page) => {
      return page.join(" ").toLowerCase().includes(term);
    });

    matches.forEach(([href, title, summary]) => {
      const a = document.createElement("a");
      a.className = "search-result";
      a.href = href;
      a.innerHTML = `<strong>${title}</strong><span>${summary}</span>`;
      resultList.appendChild(a);
    });

    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-result";
      empty.innerHTML = "<strong>No matches yet</strong><span>Try rift, relic, shrine, Eldeir, grade, boss, or bounty.</span>";
      resultList.appendChild(empty);
    }

    results.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  setupSearch();
});
