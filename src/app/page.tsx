import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/i18n/language-switcher';

export default function PageName() {
  const t = useTranslations('HomePage');
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <LanguageSwitcher />
      </div>
      
      <p className="text-lg text-gray-600 mb-8">{t('description')}</p>
      
      <div className="flex gap-4 mb-12">
        <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          {t('startBuilding')}
        </button>
        <button type="button" className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50">
          {t('requestDemo')}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t('features.title')}</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {t('features.responsive')}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {t('features.performance')}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {t('features.security')}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {t('features.support')}
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t('about.title')}</h2>
          <p className="text-gray-700 leading-relaxed">{t('about.content')}</p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
        <div className="flex justify-center gap-4">
          <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            {t('contact.email')}
          </button>
          <button type="button" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            {t('contact.phone')}
          </button>
        </div>
      </div>
    </div>
  )
}