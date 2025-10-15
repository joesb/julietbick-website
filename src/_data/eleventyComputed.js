export default {
  meta: {
    title: (data) => data.title,
    description: (data) => data.description ? data.description : "",
    author: {
      name: (data) =>  data.metadata.author.name,
    },
    published: (data) => data.page.date.toISOString()
  }
};