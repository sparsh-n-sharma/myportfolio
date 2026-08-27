import { chromium } from "playwright";

const outputPath = "c:/Users/visha/OneDrive/Desktop/Sparsh/docs/website-full-page-screenshot.png";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.addInitScript(() => {
  sessionStorage.setItem("sparsh-loaded", "true");
  sessionStorage.setItem("sparsh-contact-prompt", "dismissed");
});

await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

await page.evaluate(async () => {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const max = document.documentElement.scrollHeight;
  const step = Math.max(300, Math.floor(window.innerHeight * 0.6));

  for (let y = 0; y <= max; y += step) {
    window.scrollTo(0, y);
    await delay(350);
  }

  window.scrollTo(0, max);
  await delay(1200);
});

await page.evaluate(() => {
  const style = document.createElement("style");
  style.id = "screenshot-reveal-all";
  style.textContent = `
    *, *::before, *::after {
      opacity: 1 !important;
      visibility: visible !important;
      clip-path: none !important;
      -webkit-clip-path: none !important;
      transform: none !important;
    }
  `;
  document.head.appendChild(style);
});

await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);

await page.screenshot({ path: outputPath, fullPage: true });

await browser.close();
console.log("Saved:", outputPath);
