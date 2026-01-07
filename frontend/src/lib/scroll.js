// Simple lightweight scroll parallax utility
// Finds elements with `data-scroll-speed` and applies translateY based on window scroll
export function initParallax(root = document) {
  if (typeof window === 'undefined') return () => {};

  const elements = Array.from(root.querySelectorAll('[data-scroll-speed]'));
  let rafId = null;

  function update() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-scroll-speed') || '0');
      // smaller speed = slower movement; positive values move opposite scroll
      const y = Math.round(scrollY * speed * 100) / 100;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
      el.style.willChange = 'transform';
    });
    rafId = null;
  }

  function onScroll() {
    if (rafId == null) rafId = requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // run once to set initial positions
  onScroll();

  return () => {
    window.removeEventListener('scroll', onScroll);
    if (rafId) cancelAnimationFrame(rafId);
    // cleanup inline styles
    elements.forEach((el) => {
      el.style.transform = '';
      el.style.willChange = '';
    });
  };
}
