export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      description: 'title For article (required*)',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      description: 'slug For article (auto generation recommended)',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'authorName',
      description: 'author name is required*',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'description',
      description: '(minimum 1 line recommended)',
      title: 'Article Description',
      type: 'string',
    },
    {
      name: 'keywords',
      description: 'Kewords(s) are comma-separated (minimum 1 keyword recommended)',
      title: 'SEO Keywords',
      type: 'string',
    },
    {
      name: 'mainImage',
      description: '(required*)',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
