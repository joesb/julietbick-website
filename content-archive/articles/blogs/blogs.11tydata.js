export default {
  // Format permalinks for articles
  //  * for blogs:
  //     * include date in title, if a date is used
	permalink: function ({ title, date, tags }) {
    if (tags && tags.includes('blog')) {
      return `/articles/` + (date ? `${formatDate(date)}-${this.slugify(title)}/` : `${this.slugify(title)}/`);
    }
    return;
	}
};

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};