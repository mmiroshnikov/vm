import {format} from 'date-fns'
import axios from 'axios';

export default {
  name: 'poem',
  title: 'Poems',
  type: 'document',
  // initialValue: {
    // members: {_type: 'object', _ref: 'cef27bc7-43aa-4f03-b5c5-0f11469b935c'},
    // members: {type: 'projectMember'},
  // },
  // initialValue: async () => {
  //   debugger
  //   const response = await axios.get('https://bnu7ijsr.api.sanity.io/v1/graphql/production/default')
  //   return {members: response.data[0]}
  // },
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Ссылка',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'body',
      title: 'Стих',
      type: 'projectPortableText'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    // {
    //   name: 'excerpt',
    //   title: 'Excerpt',
    //   type: 'simplePortableText'
    // },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'projectMember'}]
    },
    // {
    //   name: 'startedAt',
    //   title: 'Started at',
    //   type: 'datetime'
    // },
    // {
    //   name: 'endedAt',
    //   title: 'Ended at',
    //   type: 'datetime'
    // },
    // {
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'figure'
    // },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },

    // {
    //   name: 'relatedProjects',
    //   title: 'Related projects',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'poem'}}]
    // }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
