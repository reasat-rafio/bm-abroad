import { defineConfig, type SchemaTypeDefinition } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { AppStructure } from './deskStucture';
import { table } from '@sanity/table';

export default defineConfig([
  {
    name: 'bm-abroad-production-workspace',
    title: 'BM-Abroad Production',

    basePath: '/studio/production',

    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',

    plugins: [
      deskTool({
        structure: AppStructure,
      }),
      visionTool(),
      table(),
    ],
    schema: {
      types: schemaTypes as SchemaTypeDefinition[],
    },
  },
  // {
  //   name: 'bm-abroad-staging-workspace',
  //   title: 'BM-Abroad Staging',

  //   basePath: '/studio/staging',

  //   projectId: PUBLIC_SANITY_PROJECT_ID,
  //   dataset: 'staging',

  //   plugins: [
  //     deskTool({
  //       structure: AppStructure,
  //     }),
  //     visionTool(),
  //     table(),
  //   ],
  //   schema: {
  //     types: schemaTypes as SchemaTypeDefinition[],
  //   },
  // },
]);
