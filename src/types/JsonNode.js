// @flow

export type JsonNode = {
  type: string,
  value: string | number,
  attributes: Object,
  children: Array<JsonNode>
};
