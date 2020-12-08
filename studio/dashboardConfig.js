export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fcf509f45a30d9cf27a8396',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-35owsz1z',
                  apiId: '6ab6826a-4778-4ea4-a1f2-e29d07c90641'
                },
                {
                  buildHookId: '5fcf509fc4b7f995fa74d742',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-43mi7kcn',
                  apiId: '09c58e74-5337-451b-b8f9-69a7c23da09f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuanama13/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-43mi7kcn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
