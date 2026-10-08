// Highlighter: swipe each mark in the first time it scrolls into view.
const marks = document.querySelectorAll('mark:not(.todo)');

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-on');
      reveal.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -12% 0px' });
  marks.forEach((mark) => reveal.observe(mark));

  // Table of contents: highlight the section currently being read.
  const tocLinks = new Map(
    [...document.querySelectorAll('.toc a')].map((a) => [a.hash.slice(1), a])
  );
  let current = null;

  const setCurrent = (id) => {
    if (id === current) return;
    tocLinks.get(current)?.removeAttribute('aria-current');
    tocLinks.get(id)?.setAttribute('aria-current', 'location');
    current = id;
  };

  const spy = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) setCurrent(entry.target.id);
    }
  }, { rootMargin: '-20% 0px -75% 0px' });
  document.querySelectorAll('#uvod, main section[id]').forEach((s) => spy.observe(s));

  // The last sections are too short to reach the trigger line.
  const lastId = [...tocLinks.keys()].at(-1);
  addEventListener('scroll', () => {
    const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) setCurrent(lastId);
  }, { passive: true });
} else {
  marks.forEach((mark) => mark.classList.add('is-on'));
}
