const fs = require('fs')
const path = require('path')
const { assert } = require('chai')

const render = require('../lib/render')
const rssItemLinkRenderer = require('../lib/renderers/rss-item-link')
const htmlBeautify = require('../lib/html-beautify')
const { RSS_ITEM_LINK_RENDERER_KEY } = require('../lib/constants')

const basicInput = require('./stubs/render/rss-item-link-basic--input')
const basicOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item-link-basic--output.xml'), 'utf8'))

describe('rss-item-link renderer', () => {
  const renderersMap = {
    [RSS_ITEM_LINK_RENDERER_KEY]: rssItemLinkRenderer
  }

  it('renders wrapper for rss item url', () => {
    let html = render(basicInput, renderersMap)

    assert.deepEqual(html, basicOutput)
  })
})
