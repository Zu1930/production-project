import React from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { AppLink, AppLnikTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLnikTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLnikTheme.SECONDARY} to={'/about'}>
          О Сайте
        </AppLink>
      </div>
    </div>
  );
};
