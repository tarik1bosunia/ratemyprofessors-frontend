export default function translateEntityName(entityName: string, locale: string): string {
    const entityTranslations: Record<string, Record<string, string>> = {
      en: {
        schools: 'schools',
        professors: 'professors'
      },
      bn: {
        schools: 'স্কুল',
        professors: 'প্রফেসর'
      }
    };
  
    return entityTranslations[locale]?.[entityName] || entityName;
  }