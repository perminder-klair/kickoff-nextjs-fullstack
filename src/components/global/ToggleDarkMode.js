import 'twin.macro';
import { useTheme } from 'next-themes';

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      tw="p-1 text-white text-xs mt-1"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      DarkMode
    </button>
  );
}
