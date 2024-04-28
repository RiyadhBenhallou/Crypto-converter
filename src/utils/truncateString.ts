export default function truncateString(str: string, limit: number) {
      if (str.length > limit) {
          return str.substring(0, limit) + '...';
      } else {
          return str;
      }
  }