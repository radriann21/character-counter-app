export const calculateReadTime = (text: string, excludeSpaces: boolean = false) => {
  const wordsPerMinute = 250;
  if (text.length === 0) return 0;
  const words = excludeSpaces ? text.replace(/\s+/g, '').length : text.split(' ').length;
  return words / wordsPerMinute;
}
