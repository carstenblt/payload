import type { Block } from '../../../../packages/payload/types'

export const TestBlock: Block = {
  slug: 'Image',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}
