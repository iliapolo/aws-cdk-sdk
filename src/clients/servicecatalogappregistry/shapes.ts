/**
 * @schema ServiceCatalogAppRegistryAssociateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryAssociateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryAssociateAttributeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryAssociateAttributeGroupRequest(obj: ServiceCatalogAppRegistryAssociateAttributeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'attributeGroup': obj.attributeGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryAssociateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryAssociateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateAttributeGroupResponse#attributeGroupArn
   */
  readonly attributeGroupArn?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryAssociateAttributeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryAssociateAttributeGroupResponse(obj: ServiceCatalogAppRegistryAssociateAttributeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationArn': obj.applicationArn,
    'attributeGroupArn': obj.attributeGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryAssociateResourceRequest
 */
export interface ServiceCatalogAppRegistryAssociateResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryAssociateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryAssociateResourceRequest(obj: ServiceCatalogAppRegistryAssociateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'resourceType': obj.resourceType,
    'resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryAssociateResourceResponse
 */
export interface ServiceCatalogAppRegistryAssociateResourceResponse {
  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAssociateResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryAssociateResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryAssociateResourceResponse(obj: ServiceCatalogAppRegistryAssociateResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationArn': obj.applicationArn,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryCreateApplicationRequest
 */
export interface ServiceCatalogAppRegistryCreateApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryCreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryCreateApplicationRequest(obj: ServiceCatalogAppRegistryCreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryCreateApplicationResponse
 */
export interface ServiceCatalogAppRegistryCreateApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryCreateApplicationResponse#application
   */
  readonly application?: ServiceCatalogAppRegistryApplication;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryCreateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryCreateApplicationResponse(obj: ServiceCatalogAppRegistryCreateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': toJson_ServiceCatalogAppRegistryApplication(obj.application),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryCreateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#name
   */
  readonly name: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#attributes
   */
  readonly attributes: string;

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupRequest#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryCreateAttributeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryCreateAttributeGroupRequest(obj: ServiceCatalogAppRegistryCreateAttributeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'attributes': obj.attributes,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryCreateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryCreateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryCreateAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: ServiceCatalogAppRegistryAttributeGroup;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryCreateAttributeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryCreateAttributeGroupResponse(obj: ServiceCatalogAppRegistryCreateAttributeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroup': toJson_ServiceCatalogAppRegistryAttributeGroup(obj.attributeGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDeleteApplicationRequest
 */
export interface ServiceCatalogAppRegistryDeleteApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryDeleteApplicationRequest#application
   */
  readonly application: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDeleteApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDeleteApplicationRequest(obj: ServiceCatalogAppRegistryDeleteApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDeleteApplicationResponse
 */
export interface ServiceCatalogAppRegistryDeleteApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryDeleteApplicationResponse#application
   */
  readonly application?: ServiceCatalogAppRegistryApplicationSummary;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDeleteApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDeleteApplicationResponse(obj: ServiceCatalogAppRegistryDeleteApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': toJson_ServiceCatalogAppRegistryApplicationSummary(obj.application),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDeleteAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryDeleteAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryDeleteAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDeleteAttributeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDeleteAttributeGroupRequest(obj: ServiceCatalogAppRegistryDeleteAttributeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroup': obj.attributeGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDeleteAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryDeleteAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryDeleteAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: ServiceCatalogAppRegistryAttributeGroupSummary;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDeleteAttributeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDeleteAttributeGroupResponse(obj: ServiceCatalogAppRegistryDeleteAttributeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroup': toJson_ServiceCatalogAppRegistryAttributeGroupSummary(obj.attributeGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryDisassociateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDisassociateAttributeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDisassociateAttributeGroupRequest(obj: ServiceCatalogAppRegistryDisassociateAttributeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'attributeGroup': obj.attributeGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryDisassociateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateAttributeGroupResponse#attributeGroupArn
   */
  readonly attributeGroupArn?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDisassociateAttributeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDisassociateAttributeGroupResponse(obj: ServiceCatalogAppRegistryDisassociateAttributeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationArn': obj.applicationArn,
    'attributeGroupArn': obj.attributeGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDisassociateResourceRequest
 */
export interface ServiceCatalogAppRegistryDisassociateResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDisassociateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDisassociateResourceRequest(obj: ServiceCatalogAppRegistryDisassociateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'resourceType': obj.resourceType,
    'resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryDisassociateResourceResponse
 */
export interface ServiceCatalogAppRegistryDisassociateResourceResponse {
  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistryDisassociateResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryDisassociateResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryDisassociateResourceResponse(obj: ServiceCatalogAppRegistryDisassociateResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationArn': obj.applicationArn,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryGetApplicationRequest
 */
export interface ServiceCatalogAppRegistryGetApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryGetApplicationRequest#application
   */
  readonly application: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryGetApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryGetApplicationRequest(obj: ServiceCatalogAppRegistryGetApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryGetApplicationResponse
 */
export interface ServiceCatalogAppRegistryGetApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#associatedResourceCount
   */
  readonly associatedResourceCount?: number;

  /**
   * @schema ServiceCatalogAppRegistryGetApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryGetApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryGetApplicationResponse(obj: ServiceCatalogAppRegistryGetApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'associatedResourceCount': obj.associatedResourceCount,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryGetAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryGetAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryGetAttributeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryGetAttributeGroupRequest(obj: ServiceCatalogAppRegistryGetAttributeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroup': obj.attributeGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryGetAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#attributes
   */
  readonly attributes?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryGetAttributeGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryGetAttributeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryGetAttributeGroupResponse(obj: ServiceCatalogAppRegistryGetAttributeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'attributes': obj.attributes,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListApplicationsRequest
 */
export interface ServiceCatalogAppRegistryListApplicationsRequest {
  /**
   * @schema ServiceCatalogAppRegistryListApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListApplicationsRequest(obj: ServiceCatalogAppRegistryListApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListApplicationsResponse
 */
export interface ServiceCatalogAppRegistryListApplicationsResponse {
  /**
   * @schema ServiceCatalogAppRegistryListApplicationsResponse#applications
   */
  readonly applications?: ServiceCatalogAppRegistryApplicationSummary[];

  /**
   * @schema ServiceCatalogAppRegistryListApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListApplicationsResponse(obj: ServiceCatalogAppRegistryListApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applications': obj.applications?.map(y => toJson_ServiceCatalogAppRegistryApplicationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest
 */
export interface ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest(obj: ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse
 */
export interface ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse#attributeGroups
   */
  readonly attributeGroups?: string[];

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse(obj: ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroups': obj.attributeGroups?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest
 */
export interface ServiceCatalogAppRegistryListAssociatedResourcesRequest {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListAssociatedResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListAssociatedResourcesRequest(obj: ServiceCatalogAppRegistryListAssociatedResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListAssociatedResourcesResponse
 */
export interface ServiceCatalogAppRegistryListAssociatedResourcesResponse {
  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesResponse#resources
   */
  readonly resources?: ServiceCatalogAppRegistryResourceInfo[];

  /**
   * @schema ServiceCatalogAppRegistryListAssociatedResourcesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListAssociatedResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListAssociatedResourcesResponse(obj: ServiceCatalogAppRegistryListAssociatedResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resources': obj.resources?.map(y => toJson_ServiceCatalogAppRegistryResourceInfo(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListAttributeGroupsRequest
 */
export interface ServiceCatalogAppRegistryListAttributeGroupsRequest {
  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListAttributeGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListAttributeGroupsRequest(obj: ServiceCatalogAppRegistryListAttributeGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListAttributeGroupsResponse
 */
export interface ServiceCatalogAppRegistryListAttributeGroupsResponse {
  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsResponse#attributeGroups
   */
  readonly attributeGroups?: ServiceCatalogAppRegistryAttributeGroupSummary[];

  /**
   * @schema ServiceCatalogAppRegistryListAttributeGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListAttributeGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListAttributeGroupsResponse(obj: ServiceCatalogAppRegistryListAttributeGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroups': obj.attributeGroups?.map(y => toJson_ServiceCatalogAppRegistryAttributeGroupSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListTagsForResourceRequest
 */
export interface ServiceCatalogAppRegistryListTagsForResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListTagsForResourceRequest(obj: ServiceCatalogAppRegistryListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryListTagsForResourceResponse
 */
export interface ServiceCatalogAppRegistryListTagsForResourceResponse {
  /**
   * @schema ServiceCatalogAppRegistryListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryListTagsForResourceResponse(obj: ServiceCatalogAppRegistryListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistrySyncResourceRequest
 */
export interface ServiceCatalogAppRegistrySyncResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistrySyncResourceRequest#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema ServiceCatalogAppRegistrySyncResourceRequest#resource
   */
  readonly resource: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistrySyncResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistrySyncResourceRequest(obj: ServiceCatalogAppRegistrySyncResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistrySyncResourceResponse
 */
export interface ServiceCatalogAppRegistrySyncResourceResponse {
  /**
   * @schema ServiceCatalogAppRegistrySyncResourceResponse#applicationArn
   */
  readonly applicationArn?: string;

  /**
   * @schema ServiceCatalogAppRegistrySyncResourceResponse#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ServiceCatalogAppRegistrySyncResourceResponse#actionTaken
   */
  readonly actionTaken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistrySyncResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistrySyncResourceResponse(obj: ServiceCatalogAppRegistrySyncResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationArn': obj.applicationArn,
    'resourceArn': obj.resourceArn,
    'actionTaken': obj.actionTaken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryTagResourceRequest
 */
export interface ServiceCatalogAppRegistryTagResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ServiceCatalogAppRegistryTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryTagResourceRequest(obj: ServiceCatalogAppRegistryTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ServiceCatalogAppRegistryTagResourceResponse
 */
export interface ServiceCatalogAppRegistryTagResourceResponse {
}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryTagResourceResponse(obj: ServiceCatalogAppRegistryTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryUntagResourceRequest
 */
export interface ServiceCatalogAppRegistryUntagResourceRequest {
  /**
   * @schema ServiceCatalogAppRegistryUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ServiceCatalogAppRegistryUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryUntagResourceRequest(obj: ServiceCatalogAppRegistryUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ServiceCatalogAppRegistryUntagResourceResponse
 */
export interface ServiceCatalogAppRegistryUntagResourceResponse {
}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryUntagResourceResponse(obj: ServiceCatalogAppRegistryUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryUpdateApplicationRequest
 */
export interface ServiceCatalogAppRegistryUpdateApplicationRequest {
  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationRequest#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryUpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryUpdateApplicationRequest(obj: ServiceCatalogAppRegistryUpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'name': obj.name,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryUpdateApplicationResponse
 */
export interface ServiceCatalogAppRegistryUpdateApplicationResponse {
  /**
   * @schema ServiceCatalogAppRegistryUpdateApplicationResponse#application
   */
  readonly application?: ServiceCatalogAppRegistryApplication;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryUpdateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryUpdateApplicationResponse(obj: ServiceCatalogAppRegistryUpdateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': toJson_ServiceCatalogAppRegistryApplication(obj.application),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest
 */
export interface ServiceCatalogAppRegistryUpdateAttributeGroupRequest {
  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#attributeGroup
   */
  readonly attributeGroup: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupRequest#attributes
   */
  readonly attributes?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryUpdateAttributeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryUpdateAttributeGroupRequest(obj: ServiceCatalogAppRegistryUpdateAttributeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroup': obj.attributeGroup,
    'name': obj.name,
    'description': obj.description,
    'attributes': obj.attributes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryUpdateAttributeGroupResponse
 */
export interface ServiceCatalogAppRegistryUpdateAttributeGroupResponse {
  /**
   * @schema ServiceCatalogAppRegistryUpdateAttributeGroupResponse#attributeGroup
   */
  readonly attributeGroup?: ServiceCatalogAppRegistryAttributeGroup;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryUpdateAttributeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryUpdateAttributeGroupResponse(obj: ServiceCatalogAppRegistryUpdateAttributeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeGroup': toJson_ServiceCatalogAppRegistryAttributeGroup(obj.attributeGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryApplication
 */
export interface ServiceCatalogAppRegistryApplication {
  /**
   * @schema ServiceCatalogAppRegistryApplication#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplication#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryApplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryApplication(obj: ServiceCatalogAppRegistryApplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryAttributeGroup
 */
export interface ServiceCatalogAppRegistryAttributeGroup {
  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroup#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryAttributeGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryAttributeGroup(obj: ServiceCatalogAppRegistryAttributeGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryApplicationSummary
 */
export interface ServiceCatalogAppRegistryApplicationSummary {
  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryApplicationSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryApplicationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryApplicationSummary(obj: ServiceCatalogAppRegistryApplicationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryAttributeGroupSummary
 */
export interface ServiceCatalogAppRegistryAttributeGroupSummary {
  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ServiceCatalogAppRegistryAttributeGroupSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryAttributeGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryAttributeGroupSummary(obj: ServiceCatalogAppRegistryAttributeGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAppRegistryResourceInfo
 */
export interface ServiceCatalogAppRegistryResourceInfo {
  /**
   * @schema ServiceCatalogAppRegistryResourceInfo#name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogAppRegistryResourceInfo#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAppRegistryResourceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAppRegistryResourceInfo(obj: ServiceCatalogAppRegistryResourceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
