interface Product {
  id: number;
  featuresTitle: string;
  features: string[];
  competitionsTitle: string;
  competition: string[];
  title: string;
  description: string;
}

interface News {
  id: string;
  title: string;
  description: string;
  photos: string[];
  poster: string;
  category: string;
}
interface Application {
  title: string;
  description: string;
  gallery: string[];
  poster: string;
}
interface TitleItem {
  title: string;
  [key: string]: any;
}
export function createUrlSlug(title: string) {
  // Convert the string to lowercase
  let slug = title.toLowerCase();

  // Remove special characters like®
  slug = slug.replace(/[^a-z0-9\s]/g, "");

  // Replace spaces and non-alphanumeric characters with hyphens
  slug = slug.replace(/\s+/g, "-");

  // Remove any leading or trailing hyphens
  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
}
export function checkPathNameWithTitle<T extends TitleItem>(
  pathname: string,
  dataAr: T[]
): T | null {
  const selected = dataAr.find((item) => {
    const slug = createUrlSlug(item.title);
    return slug === pathname;
  });

  return selected || null;
}
