export function useTabKeyboard(items, setActiveId) {
  return (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + dir + items.length) % items.length;
      setActiveId(items[nextIndex].id);
    }
  };
}
