export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de2ddcc9e61a549d6207296',
                  title: 'Sanity Studio',
                  name: 'vm-studio',
                  apiId: '81b5a1e1-389d-4d1d-9669-755c1b749ea2'
                },
                {
                  buildHookId: '5de2ddcd07c968b9843dabc7',
                  title: 'Portfolio Website',
                  name: 'vm-web',
                  apiId: '1368952a-892d-46d4-84a5-7baa781702bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmiroshnikov/vm',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://vm-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Стихи', order: '_createdAt desc', types: ['poem']},
      layout: {width: 'medium'}
    }
  ]
}
