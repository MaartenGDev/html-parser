// @flow

export type JsonNode = {
  type: string,
  value: string,
  attributes: Object,
  children: Array<JsonNode>
}