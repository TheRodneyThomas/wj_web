const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const copyBtn = document.getElementById('copyIpBtn');
const ipEl = document.getElementById('serverIp');
const copyStatus = document.getElementById('copyStatus');

if (copyBtn && ipEl && copyStatus) {
  copyBtn.addEventListener('click', async () => {
    const ip = ipEl.textContent?.trim() ?? '';
    if (!ip) return;

    try {
      await navigator.clipboard.writeText(ip);
      copyStatus.textContent = 'Server IP copied — see you in WARJORN.';
    } catch {
      copyStatus.textContent = 'Copy failed. Please copy manually from the box.';
    }
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
