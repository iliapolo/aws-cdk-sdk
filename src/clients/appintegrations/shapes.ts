/**
 * @schema AppIntegrationsCreateEventIntegrationRequest
 */
export interface AppIntegrationsCreateEventIntegrationRequest {
  /**
   * @schema AppIntegrationsCreateEventIntegrationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppIntegrationsCreateEventIntegrationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppIntegrationsCreateEventIntegrationRequest#EventFilter
   */
  readonly eventFilter?: AppIntegrationsEventFilter;

  /**
   * @schema AppIntegrationsCreateEventIntegrationRequest#EventBridgeBus
   */
  readonly eventBridgeBus?: string;

  /**
   * @schema AppIntegrationsCreateEventIntegrationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppIntegrationsCreateEventIntegrationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppIntegrationsCreateEventIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsCreateEventIntegrationRequest(obj: AppIntegrationsCreateEventIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'EventFilter': toJson_AppIntegrationsEventFilter(obj.eventFilter),
    'EventBridgeBus': obj.eventBridgeBus,
    'ClientToken': obj.clientToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsCreateEventIntegrationResponse
 */
export interface AppIntegrationsCreateEventIntegrationResponse {
  /**
   * @schema AppIntegrationsCreateEventIntegrationResponse#EventIntegrationArn
   */
  readonly eventIntegrationArn?: string;

}

/**
 * Converts an object of type 'AppIntegrationsCreateEventIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsCreateEventIntegrationResponse(obj: AppIntegrationsCreateEventIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventIntegrationArn': obj.eventIntegrationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsDeleteEventIntegrationRequest
 */
export interface AppIntegrationsDeleteEventIntegrationRequest {
  /**
   * @schema AppIntegrationsDeleteEventIntegrationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppIntegrationsDeleteEventIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsDeleteEventIntegrationRequest(obj: AppIntegrationsDeleteEventIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsDeleteEventIntegrationResponse
 */
export interface AppIntegrationsDeleteEventIntegrationResponse {
}

/**
 * Converts an object of type 'AppIntegrationsDeleteEventIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsDeleteEventIntegrationResponse(obj: AppIntegrationsDeleteEventIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsGetEventIntegrationRequest
 */
export interface AppIntegrationsGetEventIntegrationRequest {
  /**
   * @schema AppIntegrationsGetEventIntegrationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppIntegrationsGetEventIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsGetEventIntegrationRequest(obj: AppIntegrationsGetEventIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsGetEventIntegrationResponse
 */
export interface AppIntegrationsGetEventIntegrationResponse {
  /**
   * @schema AppIntegrationsGetEventIntegrationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema AppIntegrationsGetEventIntegrationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema AppIntegrationsGetEventIntegrationResponse#EventIntegrationArn
   */
  readonly eventIntegrationArn?: string;

  /**
   * @schema AppIntegrationsGetEventIntegrationResponse#EventBridgeBus
   */
  readonly eventBridgeBus?: string;

  /**
   * @schema AppIntegrationsGetEventIntegrationResponse#EventFilter
   */
  readonly eventFilter?: AppIntegrationsEventFilter;

  /**
   * @schema AppIntegrationsGetEventIntegrationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppIntegrationsGetEventIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsGetEventIntegrationResponse(obj: AppIntegrationsGetEventIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'EventIntegrationArn': obj.eventIntegrationArn,
    'EventBridgeBus': obj.eventBridgeBus,
    'EventFilter': toJson_AppIntegrationsEventFilter(obj.eventFilter),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsListEventIntegrationAssociationsRequest
 */
export interface AppIntegrationsListEventIntegrationAssociationsRequest {
  /**
   * @schema AppIntegrationsListEventIntegrationAssociationsRequest#EventIntegrationName
   */
  readonly eventIntegrationName?: string;

  /**
   * @schema AppIntegrationsListEventIntegrationAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppIntegrationsListEventIntegrationAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppIntegrationsListEventIntegrationAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsListEventIntegrationAssociationsRequest(obj: AppIntegrationsListEventIntegrationAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventIntegrationName': obj.eventIntegrationName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsListEventIntegrationAssociationsResponse
 */
export interface AppIntegrationsListEventIntegrationAssociationsResponse {
  /**
   * @schema AppIntegrationsListEventIntegrationAssociationsResponse#EventIntegrationAssociations
   */
  readonly eventIntegrationAssociations?: AppIntegrationsEventIntegrationAssociation[];

  /**
   * @schema AppIntegrationsListEventIntegrationAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppIntegrationsListEventIntegrationAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsListEventIntegrationAssociationsResponse(obj: AppIntegrationsListEventIntegrationAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventIntegrationAssociations': obj.eventIntegrationAssociations?.map(y => toJson_AppIntegrationsEventIntegrationAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsListEventIntegrationsRequest
 */
export interface AppIntegrationsListEventIntegrationsRequest {
  /**
   * @schema AppIntegrationsListEventIntegrationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppIntegrationsListEventIntegrationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppIntegrationsListEventIntegrationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsListEventIntegrationsRequest(obj: AppIntegrationsListEventIntegrationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsListEventIntegrationsResponse
 */
export interface AppIntegrationsListEventIntegrationsResponse {
  /**
   * @schema AppIntegrationsListEventIntegrationsResponse#EventIntegrations
   */
  readonly eventIntegrations?: AppIntegrationsEventIntegration[];

  /**
   * @schema AppIntegrationsListEventIntegrationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppIntegrationsListEventIntegrationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsListEventIntegrationsResponse(obj: AppIntegrationsListEventIntegrationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventIntegrations': obj.eventIntegrations?.map(y => toJson_AppIntegrationsEventIntegration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsListTagsForResourceRequest
 */
export interface AppIntegrationsListTagsForResourceRequest {
  /**
   * @schema AppIntegrationsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'AppIntegrationsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsListTagsForResourceRequest(obj: AppIntegrationsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsListTagsForResourceResponse
 */
export interface AppIntegrationsListTagsForResourceResponse {
  /**
   * @schema AppIntegrationsListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppIntegrationsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsListTagsForResourceResponse(obj: AppIntegrationsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsTagResourceRequest
 */
export interface AppIntegrationsTagResourceRequest {
  /**
   * @schema AppIntegrationsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppIntegrationsTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'AppIntegrationsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsTagResourceRequest(obj: AppIntegrationsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsTagResourceResponse
 */
export interface AppIntegrationsTagResourceResponse {
}

/**
 * Converts an object of type 'AppIntegrationsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsTagResourceResponse(obj: AppIntegrationsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsUntagResourceRequest
 */
export interface AppIntegrationsUntagResourceRequest {
  /**
   * @schema AppIntegrationsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppIntegrationsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'AppIntegrationsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsUntagResourceRequest(obj: AppIntegrationsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsUntagResourceResponse
 */
export interface AppIntegrationsUntagResourceResponse {
}

/**
 * Converts an object of type 'AppIntegrationsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsUntagResourceResponse(obj: AppIntegrationsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsUpdateEventIntegrationRequest
 */
export interface AppIntegrationsUpdateEventIntegrationRequest {
  /**
   * @schema AppIntegrationsUpdateEventIntegrationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppIntegrationsUpdateEventIntegrationRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AppIntegrationsUpdateEventIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsUpdateEventIntegrationRequest(obj: AppIntegrationsUpdateEventIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsUpdateEventIntegrationResponse
 */
export interface AppIntegrationsUpdateEventIntegrationResponse {
}

/**
 * Converts an object of type 'AppIntegrationsUpdateEventIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsUpdateEventIntegrationResponse(obj: AppIntegrationsUpdateEventIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsEventFilter
 */
export interface AppIntegrationsEventFilter {
  /**
   * @schema AppIntegrationsEventFilter#Source
   */
  readonly source?: string;

}

/**
 * Converts an object of type 'AppIntegrationsEventFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsEventFilter(obj: AppIntegrationsEventFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': obj.source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsEventIntegrationAssociation
 */
export interface AppIntegrationsEventIntegrationAssociation {
  /**
   * @schema AppIntegrationsEventIntegrationAssociation#EventIntegrationAssociationArn
   */
  readonly eventIntegrationAssociationArn?: string;

  /**
   * @schema AppIntegrationsEventIntegrationAssociation#EventIntegrationAssociationId
   */
  readonly eventIntegrationAssociationId?: string;

  /**
   * @schema AppIntegrationsEventIntegrationAssociation#EventIntegrationName
   */
  readonly eventIntegrationName?: string;

  /**
   * @schema AppIntegrationsEventIntegrationAssociation#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema AppIntegrationsEventIntegrationAssociation#EventBridgeRuleName
   */
  readonly eventBridgeRuleName?: string;

  /**
   * @schema AppIntegrationsEventIntegrationAssociation#ClientAssociationMetadata
   */
  readonly clientAssociationMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppIntegrationsEventIntegrationAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsEventIntegrationAssociation(obj: AppIntegrationsEventIntegrationAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventIntegrationAssociationArn': obj.eventIntegrationAssociationArn,
    'EventIntegrationAssociationId': obj.eventIntegrationAssociationId,
    'EventIntegrationName': obj.eventIntegrationName,
    'ClientId': obj.clientId,
    'EventBridgeRuleName': obj.eventBridgeRuleName,
    'ClientAssociationMetadata': ((obj.clientAssociationMetadata) === undefined) ? undefined : (Object.entries(obj.clientAssociationMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppIntegrationsEventIntegration
 */
export interface AppIntegrationsEventIntegration {
  /**
   * @schema AppIntegrationsEventIntegration#EventIntegrationArn
   */
  readonly eventIntegrationArn?: string;

  /**
   * @schema AppIntegrationsEventIntegration#Name
   */
  readonly name?: string;

  /**
   * @schema AppIntegrationsEventIntegration#Description
   */
  readonly description?: string;

  /**
   * @schema AppIntegrationsEventIntegration#EventFilter
   */
  readonly eventFilter?: AppIntegrationsEventFilter;

  /**
   * @schema AppIntegrationsEventIntegration#EventBridgeBus
   */
  readonly eventBridgeBus?: string;

  /**
   * @schema AppIntegrationsEventIntegration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppIntegrationsEventIntegration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppIntegrationsEventIntegration(obj: AppIntegrationsEventIntegration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventIntegrationArn': obj.eventIntegrationArn,
    'Name': obj.name,
    'Description': obj.description,
    'EventFilter': toJson_AppIntegrationsEventFilter(obj.eventFilter),
    'EventBridgeBus': obj.eventBridgeBus,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
