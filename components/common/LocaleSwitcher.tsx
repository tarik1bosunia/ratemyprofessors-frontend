import {useLocale, useTranslations} from 'next-intl';
import {LocaleSwitcherSelect} from '@/components/common';
import {locales} from '@/config';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur} className='cursor-pointer  dark:text-white'>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
