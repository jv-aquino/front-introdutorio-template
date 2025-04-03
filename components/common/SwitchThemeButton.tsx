import { Moon, Sun } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface SwitchThemeButtonProps {
  className: string;
  iconClassName: string;
  theme: 'dark' | 'default';
  setTheme: Dispatch<SetStateAction<string>>;
}

function SwitchThemeButton({ className, iconClassName, theme, setTheme }: SwitchThemeButtonProps) {
  return ( 
    <button 
        className={'transition-colors'}
        onClick={() => {
          setTheme(theme === 'dark' ? 'default' : 'dark');
        }}
      >
        {theme === 'dark' ? <Moon className={iconClassName} /> : <Sun className={iconClassName} />}
      </button>
   );
}

export default SwitchThemeButton;