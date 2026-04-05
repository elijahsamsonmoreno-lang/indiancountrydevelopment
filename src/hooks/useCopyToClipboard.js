import { useState, useRef, useEffect } from 'react';

const TOAST_DURATION = 2000;

export function useCopyToClipboard() {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), TOAST_DURATION);
  };

  const copy = (text, successMsg = 'Copied') => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast(successMsg),
        () => showToast('Unable to copy')
      );
    }
  };

  return { copy, toast };
}
