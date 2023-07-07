import { classNames } from 'helpers/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
};
