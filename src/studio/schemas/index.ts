import site from './site';
import seo from './seo';
import link from './link';
import menuItem from './menuItem';
import pages from './page';

export const schemaTypes = [...site, ...pages, seo, link, menuItem];
