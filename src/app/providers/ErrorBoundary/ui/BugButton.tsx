import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/className/classNames';

import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}
// компонент для тестирования
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>throw error</Button>;
};
