// Dependencies
import { useTheme, ThemeSetting } from '@lib/main';
import { Button } from '@lib/main';

// Styles
import * as styles from './index.css';

export default function Page() {
  const { theme, themeSetting, setThemeSetting } = useTheme();

  function handleChangeThemeSetting(themeSetting: ThemeSetting) {
    console.log('Change theme setting to', themeSetting);
    setThemeSetting(themeSetting);
  }

  return (
    <div className={styles.Page({ theme })}>
      <select value={themeSetting} onChange={(e) => handleChangeThemeSetting(e.target.value as ThemeSetting)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <Button variant="primary" size="large">Button</Button>
    </div>
  );
}