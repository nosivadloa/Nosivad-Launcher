const pages = [
  ["index.html", "Knowledge Base", "Browse player guides by category"],
  ["getting-started.html", "Getting Started", "First steps, Eldeir Village, controls"],
  ["adventurer-levels.html", "Adventurer Progress", "Levels, grades, experience"],
  ["skills-stats.html", "Skills and Stats", "Skill caps, attributes, mana, Barding"],
  ["necromancy.html", "Necromancy", "Necromancer profession, spells, Inscription and skeleton summons"],
  ["armory.html", "Weapons and Abilities", "Weapon types and combat abilities"],
  ["vocation-renown.html", "Gathering and Crafting Progress", "Vocation, Insights, surveys, commissions"],
  ["professions-crafting.html", "Professions and Crafting", "Ranks, recipes, repair, enchanting"],
  ["housing-mounts.html", "Housing, Storage and Mounts", "Homes, secure storage, mounts"],
  ["adventurer-npcs.html", "Adventurer Companions", "Travelers, contracts, companion controls"],
  ["rifts.html", "Planar Rifts", "Scrolls, anchors, rift encounters"],
  ["breach-gates.html", "Rift Breach", "The Fallen Realm and planar marks"],
  ["regional-events.html", "Regional Events", "Regional activities and rewards"],
  ["world-bosses.html", "World Bosses", "Rare boss encounters"],
  ["creatures.html", "Creatures and Enemies", "Creature ranks and mutations"],
  ["taming-pets.html", "Taming and Pets", "Pet controls, growth and storage"],
  ["loot-relics.html", "Loot and Relics", "Riftborn equipment and planar rewards"],
  ["shrines-lore.html", "Shrines and Lore", "Shrines, blessings and regional lore"],
  ["story-discovery.html", "Story and Discovery", "The Unseen Thread"],
  ["bounties.html", "Bounty Boards", "Contracts and rewards"],
  ["renown-bards.html", "Renown and Bards", "Regional standing and music"],
  ["player-marketplace.html", "Player Marketplace", "Regional buy and sell orders"],
  ["reference.html", "Commands and Quick Reference", "Player commands and common terms"],
  ["recent-updates.html", "Recent Changes", "Player-facing changes that are live"],
  ["roadmap.html", "Roadmap", "Broad development directions"]
];

function currentFile() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function setupSearch() {
  const input = document.querySelector("[data-search]");
  const results = document.querySelector("[data-search-results]");
  const resultList = document.querySelector("[data-search-list]");
  if (!input || !results || !resultList) return;

  input.setAttribute("aria-label", "Search player guides");
  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    resultList.replaceChildren();
    if (term.length < 2) {
      results.classList.remove("visible");
      return;
    }
    const matches = pages.filter((page) => page.join(" ").toLowerCase().includes(term));
    matches.forEach(([href, title, summary]) => {
      const link = document.createElement("a");
      link.className = "search-result";
      link.href = href;
      const heading = document.createElement("strong");
      heading.textContent = title;
      const description = document.createElement("span");
      description.textContent = summary;
      link.append(heading, description);
      resultList.append(link);
    });
    if (!matches.length) {
      const empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent = "No matching guides. Try a broader topic such as skills, crafting, rifts or housing.";
      resultList.append(empty);
    }
    results.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === currentFile()) link.classList.add("active");
  });
  setupSearch();
});
