import {useTranslations} from 'next-intl';
import {Link} from '@/src/i18n/routing';

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('linkDescription')}</Link>
    </>
  );
}
