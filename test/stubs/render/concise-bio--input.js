const {
  BIO_CONTEXT,
  BIO_LINE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: BIO_CONTEXT,
  content: [
    {
      type: BIO_LINE_CONTEXT,
      content: 'John Doe'
    },
    {
      type: BIO_LINE_CONTEXT,
      content: '(Software Engineer)'
    }
  ]
}
