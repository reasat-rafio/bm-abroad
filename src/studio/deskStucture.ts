import type { StructureBuilder } from 'sanity/desk';
import type { IconType } from 'react-icons/lib';
import { FaSitemap } from 'react-icons/fa';
import {
  FcAbout,
  FcContacts,
  FcHome,
  FcNews,
  FcRules,
  FcServices,
} from 'react-icons/fc';
import { GrEdit } from 'react-icons/gr';
import { RiPagesLine, RiTeamFill } from 'react-icons/ri';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { ConfigContext } from 'sanity';
import { GiIsland } from 'react-icons/gi';
import { BiSolidBusiness } from 'react-icons/bi';
import { MdPolicy } from 'react-icons/md';

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
                schemaType: 'touristsPage',
                id: 'touristsPage',
                title: 'Tourists Hub',
                icon: GiIsland,
              }),
              pageItem(S, {
                schemaType: 'partnerInstitutionsPage',
                id: 'partnerInstitutionsPage',
                title: 'Partner Institutions',
                icon: BiSolidBusiness,
              }),
              pageItem(S, {
                schemaType: 'servicesPage',
                id: 'servicesPage',
                title: 'Services',
                icon: FcServices,
              }),
              pageItem(S, {
                schemaType: 'teamPage',
                id: 'teamPage',
                title: 'Team',
                icon: RiTeamFill,
              }),
              pageItem(S, {
                schemaType: 'blogsPage',
                id: 'blogsPage',
                title: 'Blogs',
                icon: FcNews,
              }),
              pageItem(S, {
                schemaType: 'contactUsPage',
                id: 'contactUsPage',
                title: 'Contact Us',
                icon: FcContacts,
              }),
              pageItem(S, {
                schemaType: 'privacyPolicyPage',
                id: 'privacyPolicyPage',
                title: 'Privacy Policy',
                icon: MdPolicy,
              }),
              pageItem(S, {
                schemaType: 'termsAndConditionsPage',
                id: 'termsAndConditionsPage',
                title: 'Terms And Conditions',
                icon: FcRules,
              }),
            ]),
        ),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'blog',
        S,
        context,
        title: 'Blog',
        icon: FcNews,
      }),
    ]);
