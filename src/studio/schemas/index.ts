import site from './site';
import seo from './seo';
import link from './link';
import menuItem from './menuItem';
import pages from './page';
import service from './service';
import tagline from './tagline';
import cta from './cta';
import blog from './blog';

export const schemaTypes = [
  ...site,
  ...pages,
  seo,
  link,
  menuItem,
  service,
  tagline,
  cta,
  blog,
];
