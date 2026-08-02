(() => {
  "use strict";
  const expectedBanner = "Synthetic Observation Only — No Live, Production, Financial, or External Execution Authority";
  function readSnapshot() {
    const node = document.getElementById("sentinel-snapshot-data");
    if (!node) throw new Error("missing deterministic snapshot payload");
    return JSON.parse(node.textContent);
  }
  function assertBoundary(snapshot) {
    const banner = document.getElementById("fixed-banner");
    if (!banner || banner.textContent.trim() !== expectedBanner) throw new Error("fixed banner changed");
    if (snapshot.latest_verified_boundary !== "T1754") throw new Error("snapshot boundary drift detected");
    if (snapshot.external_effect !== "None") throw new Error("external effect boundary changed");
  }
  function bindPrintSummary() {
    const button = document.getElementById("print-summary");
    if (button) button.addEventListener("click", () => window.print());
  }
  document.addEventListener("DOMContentLoaded", () => {
    const snapshot = Object.freeze(readSnapshot());
    assertBoundary(snapshot);
    bindPrintSummary();
    document.documentElement.dataset.sentinelSnapshotDigest = snapshot.snapshot_digest_short;
  });
})();
