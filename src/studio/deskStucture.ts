import type { StructureBuilder } from 'sanity/desk';
import type { IconType } from 'react-icons/lib';
import { FaSitemap } from 'react-icons/fa';
import {
  FcAbout,
  FcContacts,
  FcHome,
  FcNews,
  FcServices,
} from 'react-icons/fc';
import { GrEdit } from 'react-icons/gr';
import { RiPagesLine } from 'react-icons/ri';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { ConfigContext } from 'sanity';

interface PageItemProps {
  schemaType: string;
  id: string;
  title: string;
  icon?: IconType;
  slug?: string;
}

const pageItem = (
  S: StructureBuilder,
  { schemaType, id, title, icon = GrEdit }: PageItemProps,
) =>
  S.documentListItem({ schemaType, id, title, icon }).child(
    S.editor()
      .schemaType(schemaType)
      .views([S.view.form().icon(icon)]),
  );

const singleItem = (
  S: StructureBuilder,
  { schemaType, id, title, icon }: PageItemProps,
) =>
  S.listItem({ schemaType, title, id, icon }).child(
    S.editor().id(id).title(title).schemaType(schemaType),
  );

export const AppStructure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title('Content')
    .id('__root__')
    .items([
      S.listItem()
        .title('Site')
        .icon(FaSitemap)
        .child(
          S.list()
            .title('Site')
            .items([
              singleItem(S, {
                schemaType: 'site.logos',
                id: 'siteLogos',
                title: 'Logos',
              }),
              singleItem(S, {
                schemaType: 'site.nav',
                id: 'siteNav',
                title: 'Navigation',
              }),
              singleItem(S, {
                schemaType: 'site.contact',
                id: 'siteContacs',
                title: 'Contacts',
              }),
              singleItem(S, {
                schemaType: 'site.footer',
                id: 'siteFooter',
                title: 'Footer',
              }),
            ]),
        ),
      S.divider(),

      S.listItem()
        .title('Pages')
        .icon(RiPagesLine)
        .child(
          S.list()
            .title('Pages')
            .items([
              pageItem(S, {
                schemaType: 'landingPage',
                id: 'landingPage',
                title: 'Landing',
                icon: FcHome,
              }),
              pageItem(S, {
                schemaType: 'aboutPage',
                id: 'aboutPage',
                title: 'About Us',
                icon: FcAbout,
              }),
              pageItem(S, {
                schemaType: 'contactUsPage',
                id: 'contactUsPage',
                title: 'Contact Us',
                icon: FcContacts,
              }),
            ]),
        ),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'service',
        S,
        context,
        title: 'Services',
        icon: FcServices,
      }),
      orderableDocumentListDeskItem({
        type: 'blog',
        S,
        context,
        title: 'Blog',
        icon: FcNews,
      }),
    ]);
