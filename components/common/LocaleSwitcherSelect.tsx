'use client';

import cn from 'clsx';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Locale} from '@/types';
import { setUserLocale } from '@/services/locale';

import styles from '@/components/common/localswither.module.css'

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const [isPending, startTransition] = useTransition();


  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(nextLocale)
    });
  }

  return (
<label
  className={cn(
    'relative text-gray-400 flex items-center',
    isPending && 'transition-opacity [&:disabled]:opacity-30'
  )}
>
  <p className="sr-only">{label}</p>
  
  <select
    className={`${styles.hide_default_arrow}  bg-transparent py-1 pl-2 pr-6 border border-gray-300 rounded cursor-pointer dark:text-white dark:bg-slate-500 text-sm`}
    defaultValue={defaultValue}
    disabled={isPending}
    onChange={onSelectChange}
  
    
  >
    {children}
  </select>
  <span className="pointer-events-none absolute right-2 top-0 text-2xl dark:text-white">⌄</span>
</label>

  );
}