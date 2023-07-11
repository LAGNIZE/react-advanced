import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './BugButton.module.scss';

interface BugButtonProps {
  className?: string;
  }

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <Button onClick={throwError} className={classNames(cls.BugButton, {}, [className])}>{t('Тест ошибки')}</Button>
  );
};
