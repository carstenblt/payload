import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'
import { BlocksFeature, lexicalEditor } from '../../../../packages/richtext-lexical/src'
import { TestBlock } from '../../blocks/Test'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      access: {
        create: () => true,
        update: () => false,
      },
      relationTo: mediaSlug,
      type: 'upload',
    },
    {
      name: 'test',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures.filter((feature) => feature.key !== 'upload'),
          BlocksFeature({
            blocks: [TestBlock],
          }),
        ],
      }),
    },
  ],
  slug: postsSlug,
}
