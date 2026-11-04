/* BLOG PAGE — filtering and expandable article controls */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = Array.from(document.querySelectorAll(".filter-pill"));
  const postCards = Array.from(document.querySelectorAll(".post-card"));
  const postCount = document.getElementById("postCount");
  const emptyState = document.getElementById("emptyState");

  function applyFilter(filter) {
    let visibleCount = 0;

    postCards.forEach((card) => {
      const cardTag = card.dataset.tag || "";
      const isVisible = filter === "all" || cardTag === filter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (postCount) {
      postCount.textContent = `${visibleCount} ${visibleCount === 1 ? "article" : "articles"}`;
    }

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.filter || "all");
    });
  });

  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", () => {
      const postCard = button.closest(".post-card");
      if (!postCard) return;

      const articleBody = postCard.querySelector(
        ".post-content, .article-content, .post-full",
      );
      if (!articleBody) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      articleBody.hidden = isExpanded;

      const label = button.dataset.moreLabel || "Read more";
      const lessLabel = button.dataset.lessLabel || "Show less";
      button.textContent = isExpanded ? label : lessLabel;
    });
  });

  // Set the initial filter and article count.
  applyFilter("all");
});
