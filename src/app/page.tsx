import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/i18n/language-switcher';

export default function PageName() {
  const t = useTranslations('HomePage');
  
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <LanguageSwitcher />
      </div>
      <p className="text-lg text-gray-600 mb-6">{t('description')}</p>
      <div className="flex gap-4">
        <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded">
          {t('startBuilding')}
        </button>
        <button type="button" className="border border-gray-300 px-6 py-2 rounded">
          {t('requestDemo')}
        </button>
      </div>
    </div>
  )
}