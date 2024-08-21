export function formatDate(date: string): string {
  const newDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const [month, day, year] = newDate.toLocaleDateString('en-US', options).split(' ');

  function daySuffix(n: number): string {
    if (n % 10 === 1 && n % 100 !== 11) return 'st';
    if (n % 10 === 2 && n % 100 !== 12) return 'nd';
    if (n % 10 === 3 && n % 100 !== 13) return 'rd';
    return 'th';
  }

  return `${parseInt(day)}${daySuffix(parseInt(day))} ${month}, ${year}`;
}
