import eventMetaData from '../../data/event-metadata.json'

export default class Schema {
  constructor(awsSchema, rules) {
    const { Content = {}, SchemaName, SchemaVersion } = awsSchema
    const source = Content['x-amazon-events-source']
    const detailType = Content['x-amazon-events-detail-type']
    this.source = source
    this.detailType = detailType
    this.schemaName = SchemaName
    this.schema = Content
    this.rules = rules
    this.version = SchemaVersion
    this.description = eventMetaData?.[source]?.metadata?.title || ''
    this.properties = eventMetaData?.[source]?.events?.[detailType]?.properties || {}
    this.example = eventMetaData?.[source]?.events?.[detailType]?.example
  }
}
