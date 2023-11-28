import { MainMenuContext } from './main-menu-context.model';

export interface MainMenuItem {
  title: string;
  subtitle?: string;
  url?: string;
  callback?: (context: MainMenuContext) => void;
  subitems?: MainMenuItem[];
}
