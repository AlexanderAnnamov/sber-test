export function generateName() {
    const firstNames = [
        'Сергей',
        'Антон',
        'Александр',
        'Владимир',
        'Георгий',
        'Максим',
        'Владислав',
        'Андрей',
        'Нуржан',
        'Михаил',
        'Алексей',
        'Руслан',
    ];
    const lastNames = [
      'Удовенко',
      'Сидоров',
      '',
      'Владимир',
      'Георгий',
      'Максим',
      'Владислав',
      'Андрей',
      'Нуржан',
      'Михаил',
      'Алексей',
      'Руслан',
    ];

    const randomFirstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
        lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}
