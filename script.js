let isDragging = false;
let initialY = 0;
let currentY = 0;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialY = e.clientY;
  currentY = window.scrollY;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - initialY;
  window.scrollTo(0, currentY - deltaY);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
});
