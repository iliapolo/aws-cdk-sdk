/**
 * @schema IoTThingsGraphAssociateEntityToThingRequest
 */
export interface IoTThingsGraphAssociateEntityToThingRequest {
  /**
   * @schema IoTThingsGraphAssociateEntityToThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTThingsGraphAssociateEntityToThingRequest#entityId
   */
  readonly entityId: string;

  /**
   * @schema IoTThingsGraphAssociateEntityToThingRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphAssociateEntityToThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphAssociateEntityToThingRequest(obj: IoTThingsGraphAssociateEntityToThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'entityId': obj.entityId,
    'namespaceVersion': obj.namespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphAssociateEntityToThingResponse
 */
export interface IoTThingsGraphAssociateEntityToThingResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphAssociateEntityToThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphAssociateEntityToThingResponse(obj: IoTThingsGraphAssociateEntityToThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphCreateFlowTemplateRequest
 */
export interface IoTThingsGraphCreateFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphCreateFlowTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphCreateFlowTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphCreateFlowTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphCreateFlowTemplateRequest(obj: IoTThingsGraphCreateFlowTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'compatibleNamespaceVersion': obj.compatibleNamespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphCreateFlowTemplateResponse
 */
export interface IoTThingsGraphCreateFlowTemplateResponse {
  /**
   * @schema IoTThingsGraphCreateFlowTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphFlowTemplateSummary;

}

/**
 * Converts an object of type 'IoTThingsGraphCreateFlowTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphCreateFlowTemplateResponse(obj: IoTThingsGraphCreateFlowTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphFlowTemplateSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphCreateSystemInstanceRequest
 */
export interface IoTThingsGraphCreateSystemInstanceRequest {
  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#tags
   */
  readonly tags?: IoTThingsGraphTag[];

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#target
   */
  readonly target: string;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#greengrassGroupName
   */
  readonly greengrassGroupName?: string;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#metricsConfiguration
   */
  readonly metricsConfiguration?: IoTThingsGraphMetricsConfiguration;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#flowActionsRoleArn
   */
  readonly flowActionsRoleArn?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphCreateSystemInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphCreateSystemInstanceRequest(obj: IoTThingsGraphCreateSystemInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_IoTThingsGraphTag(y)),
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'target': obj.target,
    'greengrassGroupName': obj.greengrassGroupName,
    's3BucketName': obj.s3BucketName,
    'metricsConfiguration': toJson_IoTThingsGraphMetricsConfiguration(obj.metricsConfiguration),
    'flowActionsRoleArn': obj.flowActionsRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphCreateSystemInstanceResponse
 */
export interface IoTThingsGraphCreateSystemInstanceResponse {
  /**
   * @schema IoTThingsGraphCreateSystemInstanceResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemInstanceSummary;

}

/**
 * Converts an object of type 'IoTThingsGraphCreateSystemInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphCreateSystemInstanceResponse(obj: IoTThingsGraphCreateSystemInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemInstanceSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphCreateSystemTemplateRequest
 */
export interface IoTThingsGraphCreateSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphCreateSystemTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphCreateSystemTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphCreateSystemTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphCreateSystemTemplateRequest(obj: IoTThingsGraphCreateSystemTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'compatibleNamespaceVersion': obj.compatibleNamespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphCreateSystemTemplateResponse
 */
export interface IoTThingsGraphCreateSystemTemplateResponse {
  /**
   * @schema IoTThingsGraphCreateSystemTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemTemplateSummary;

}

/**
 * Converts an object of type 'IoTThingsGraphCreateSystemTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphCreateSystemTemplateResponse(obj: IoTThingsGraphCreateSystemTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemTemplateSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteFlowTemplateRequest
 */
export interface IoTThingsGraphDeleteFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphDeleteFlowTemplateRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeleteFlowTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteFlowTemplateRequest(obj: IoTThingsGraphDeleteFlowTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteFlowTemplateResponse
 */
export interface IoTThingsGraphDeleteFlowTemplateResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphDeleteFlowTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteFlowTemplateResponse(obj: IoTThingsGraphDeleteFlowTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteNamespaceRequest
 */
export interface IoTThingsGraphDeleteNamespaceRequest {
}

/**
 * Converts an object of type 'IoTThingsGraphDeleteNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteNamespaceRequest(obj: IoTThingsGraphDeleteNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteNamespaceResponse
 */
export interface IoTThingsGraphDeleteNamespaceResponse {
  /**
   * @schema IoTThingsGraphDeleteNamespaceResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphDeleteNamespaceResponse#namespaceName
   */
  readonly namespaceName?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeleteNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteNamespaceResponse(obj: IoTThingsGraphDeleteNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespaceArn': obj.namespaceArn,
    'namespaceName': obj.namespaceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteSystemInstanceRequest
 */
export interface IoTThingsGraphDeleteSystemInstanceRequest {
  /**
   * @schema IoTThingsGraphDeleteSystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeleteSystemInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteSystemInstanceRequest(obj: IoTThingsGraphDeleteSystemInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteSystemInstanceResponse
 */
export interface IoTThingsGraphDeleteSystemInstanceResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphDeleteSystemInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteSystemInstanceResponse(obj: IoTThingsGraphDeleteSystemInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteSystemTemplateRequest
 */
export interface IoTThingsGraphDeleteSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphDeleteSystemTemplateRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeleteSystemTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteSystemTemplateRequest(obj: IoTThingsGraphDeleteSystemTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeleteSystemTemplateResponse
 */
export interface IoTThingsGraphDeleteSystemTemplateResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphDeleteSystemTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeleteSystemTemplateResponse(obj: IoTThingsGraphDeleteSystemTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeploySystemInstanceRequest
 */
export interface IoTThingsGraphDeploySystemInstanceRequest {
  /**
   * @schema IoTThingsGraphDeploySystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeploySystemInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeploySystemInstanceRequest(obj: IoTThingsGraphDeploySystemInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeploySystemInstanceResponse
 */
export interface IoTThingsGraphDeploySystemInstanceResponse {
  /**
   * @schema IoTThingsGraphDeploySystemInstanceResponse#summary
   */
  readonly summary: IoTThingsGraphSystemInstanceSummary;

  /**
   * @schema IoTThingsGraphDeploySystemInstanceResponse#greengrassDeploymentId
   */
  readonly greengrassDeploymentId?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeploySystemInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeploySystemInstanceResponse(obj: IoTThingsGraphDeploySystemInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemInstanceSummary(obj.summary),
    'greengrassDeploymentId': obj.greengrassDeploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeprecateFlowTemplateRequest
 */
export interface IoTThingsGraphDeprecateFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphDeprecateFlowTemplateRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeprecateFlowTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeprecateFlowTemplateRequest(obj: IoTThingsGraphDeprecateFlowTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeprecateFlowTemplateResponse
 */
export interface IoTThingsGraphDeprecateFlowTemplateResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphDeprecateFlowTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeprecateFlowTemplateResponse(obj: IoTThingsGraphDeprecateFlowTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeprecateSystemTemplateRequest
 */
export interface IoTThingsGraphDeprecateSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphDeprecateSystemTemplateRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDeprecateSystemTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeprecateSystemTemplateRequest(obj: IoTThingsGraphDeprecateSystemTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDeprecateSystemTemplateResponse
 */
export interface IoTThingsGraphDeprecateSystemTemplateResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphDeprecateSystemTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDeprecateSystemTemplateResponse(obj: IoTThingsGraphDeprecateSystemTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDescribeNamespaceRequest
 */
export interface IoTThingsGraphDescribeNamespaceRequest {
  /**
   * @schema IoTThingsGraphDescribeNamespaceRequest#namespaceName
   */
  readonly namespaceName?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDescribeNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDescribeNamespaceRequest(obj: IoTThingsGraphDescribeNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespaceName': obj.namespaceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDescribeNamespaceResponse
 */
export interface IoTThingsGraphDescribeNamespaceResponse {
  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#trackingNamespaceName
   */
  readonly trackingNamespaceName?: string;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#trackingNamespaceVersion
   */
  readonly trackingNamespaceVersion?: number;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphDescribeNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDescribeNamespaceResponse(obj: IoTThingsGraphDescribeNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespaceArn': obj.namespaceArn,
    'namespaceName': obj.namespaceName,
    'trackingNamespaceName': obj.trackingNamespaceName,
    'trackingNamespaceVersion': obj.trackingNamespaceVersion,
    'namespaceVersion': obj.namespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDissociateEntityFromThingRequest
 */
export interface IoTThingsGraphDissociateEntityFromThingRequest {
  /**
   * @schema IoTThingsGraphDissociateEntityFromThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTThingsGraphDissociateEntityFromThingRequest#entityType
   */
  readonly entityType: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDissociateEntityFromThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDissociateEntityFromThingRequest(obj: IoTThingsGraphDissociateEntityFromThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'entityType': obj.entityType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDissociateEntityFromThingResponse
 */
export interface IoTThingsGraphDissociateEntityFromThingResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphDissociateEntityFromThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDissociateEntityFromThingResponse(obj: IoTThingsGraphDissociateEntityFromThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetEntitiesRequest
 */
export interface IoTThingsGraphGetEntitiesRequest {
  /**
   * @schema IoTThingsGraphGetEntitiesRequest#ids
   */
  readonly ids: string[];

  /**
   * @schema IoTThingsGraphGetEntitiesRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphGetEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetEntitiesRequest(obj: IoTThingsGraphGetEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'namespaceVersion': obj.namespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetEntitiesResponse
 */
export interface IoTThingsGraphGetEntitiesResponse {
  /**
   * @schema IoTThingsGraphGetEntitiesResponse#descriptions
   */
  readonly descriptions?: IoTThingsGraphEntityDescription[];

}

/**
 * Converts an object of type 'IoTThingsGraphGetEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetEntitiesResponse(obj: IoTThingsGraphGetEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'descriptions': obj.descriptions?.map(y => toJson_IoTThingsGraphEntityDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetFlowTemplateRequest
 */
export interface IoTThingsGraphGetFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphGetFlowTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetFlowTemplateRequest#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphGetFlowTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetFlowTemplateRequest(obj: IoTThingsGraphGetFlowTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'revisionNumber': obj.revisionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetFlowTemplateResponse
 */
export interface IoTThingsGraphGetFlowTemplateResponse {
  /**
   * @schema IoTThingsGraphGetFlowTemplateResponse#description
   */
  readonly description?: IoTThingsGraphFlowTemplateDescription;

}

/**
 * Converts an object of type 'IoTThingsGraphGetFlowTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetFlowTemplateResponse(obj: IoTThingsGraphGetFlowTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': toJson_IoTThingsGraphFlowTemplateDescription(obj.description),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest
 */
export interface IoTThingsGraphGetFlowTemplateRevisionsRequest {
  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphGetFlowTemplateRevisionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetFlowTemplateRevisionsRequest(obj: IoTThingsGraphGetFlowTemplateRevisionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetFlowTemplateRevisionsResponse
 */
export interface IoTThingsGraphGetFlowTemplateRevisionsResponse {
  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsResponse#summaries
   */
  readonly summaries?: IoTThingsGraphFlowTemplateSummary[];

  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphGetFlowTemplateRevisionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetFlowTemplateRevisionsResponse(obj: IoTThingsGraphGetFlowTemplateRevisionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IoTThingsGraphFlowTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetNamespaceDeletionStatusRequest
 */
export interface IoTThingsGraphGetNamespaceDeletionStatusRequest {
}

/**
 * Converts an object of type 'IoTThingsGraphGetNamespaceDeletionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetNamespaceDeletionStatusRequest(obj: IoTThingsGraphGetNamespaceDeletionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse
 */
export interface IoTThingsGraphGetNamespaceDeletionStatusResponse {
  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphGetNamespaceDeletionStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetNamespaceDeletionStatusResponse(obj: IoTThingsGraphGetNamespaceDeletionStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespaceArn': obj.namespaceArn,
    'namespaceName': obj.namespaceName,
    'status': obj.status,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetSystemInstanceRequest
 */
export interface IoTThingsGraphGetSystemInstanceRequest {
  /**
   * @schema IoTThingsGraphGetSystemInstanceRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTThingsGraphGetSystemInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetSystemInstanceRequest(obj: IoTThingsGraphGetSystemInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetSystemInstanceResponse
 */
export interface IoTThingsGraphGetSystemInstanceResponse {
  /**
   * @schema IoTThingsGraphGetSystemInstanceResponse#description
   */
  readonly description?: IoTThingsGraphSystemInstanceDescription;

}

/**
 * Converts an object of type 'IoTThingsGraphGetSystemInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetSystemInstanceResponse(obj: IoTThingsGraphGetSystemInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': toJson_IoTThingsGraphSystemInstanceDescription(obj.description),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetSystemTemplateRequest
 */
export interface IoTThingsGraphGetSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphGetSystemTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetSystemTemplateRequest#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphGetSystemTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetSystemTemplateRequest(obj: IoTThingsGraphGetSystemTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'revisionNumber': obj.revisionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetSystemTemplateResponse
 */
export interface IoTThingsGraphGetSystemTemplateResponse {
  /**
   * @schema IoTThingsGraphGetSystemTemplateResponse#description
   */
  readonly description?: IoTThingsGraphSystemTemplateDescription;

}

/**
 * Converts an object of type 'IoTThingsGraphGetSystemTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetSystemTemplateResponse(obj: IoTThingsGraphGetSystemTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': toJson_IoTThingsGraphSystemTemplateDescription(obj.description),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest
 */
export interface IoTThingsGraphGetSystemTemplateRevisionsRequest {
  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphGetSystemTemplateRevisionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetSystemTemplateRevisionsRequest(obj: IoTThingsGraphGetSystemTemplateRevisionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetSystemTemplateRevisionsResponse
 */
export interface IoTThingsGraphGetSystemTemplateRevisionsResponse {
  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsResponse#summaries
   */
  readonly summaries?: IoTThingsGraphSystemTemplateSummary[];

  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphGetSystemTemplateRevisionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetSystemTemplateRevisionsResponse(obj: IoTThingsGraphGetSystemTemplateRevisionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IoTThingsGraphSystemTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetUploadStatusRequest
 */
export interface IoTThingsGraphGetUploadStatusRequest {
  /**
   * @schema IoTThingsGraphGetUploadStatusRequest#uploadId
   */
  readonly uploadId: string;

}

/**
 * Converts an object of type 'IoTThingsGraphGetUploadStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetUploadStatusRequest(obj: IoTThingsGraphGetUploadStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uploadId': obj.uploadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphGetUploadStatusResponse
 */
export interface IoTThingsGraphGetUploadStatusResponse {
  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#uploadStatus
   */
  readonly uploadStatus: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#namespaceVersion
   */
  readonly namespaceVersion?: number;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#failureReason
   */
  readonly failureReason?: string[];

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#createdDate
   */
  readonly createdDate: string;

}

/**
 * Converts an object of type 'IoTThingsGraphGetUploadStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphGetUploadStatusResponse(obj: IoTThingsGraphGetUploadStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uploadId': obj.uploadId,
    'uploadStatus': obj.uploadStatus,
    'namespaceArn': obj.namespaceArn,
    'namespaceName': obj.namespaceName,
    'namespaceVersion': obj.namespaceVersion,
    'failureReason': obj.failureReason?.map(y => y),
    'createdDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphListFlowExecutionMessagesRequest
 */
export interface IoTThingsGraphListFlowExecutionMessagesRequest {
  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesRequest#flowExecutionId
   */
  readonly flowExecutionId: string;

  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphListFlowExecutionMessagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphListFlowExecutionMessagesRequest(obj: IoTThingsGraphListFlowExecutionMessagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowExecutionId': obj.flowExecutionId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphListFlowExecutionMessagesResponse
 */
export interface IoTThingsGraphListFlowExecutionMessagesResponse {
  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesResponse#messages
   */
  readonly messages?: IoTThingsGraphFlowExecutionMessage[];

  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphListFlowExecutionMessagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphListFlowExecutionMessagesResponse(obj: IoTThingsGraphListFlowExecutionMessagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messages': obj.messages?.map(y => toJson_IoTThingsGraphFlowExecutionMessage(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphListTagsForResourceRequest
 */
export interface IoTThingsGraphListTagsForResourceRequest {
  /**
   * @schema IoTThingsGraphListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTThingsGraphListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTThingsGraphListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphListTagsForResourceRequest(obj: IoTThingsGraphListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'resourceArn': obj.resourceArn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphListTagsForResourceResponse
 */
export interface IoTThingsGraphListTagsForResourceResponse {
  /**
   * @schema IoTThingsGraphListTagsForResourceResponse#tags
   */
  readonly tags?: IoTThingsGraphTag[];

  /**
   * @schema IoTThingsGraphListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphListTagsForResourceResponse(obj: IoTThingsGraphListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_IoTThingsGraphTag(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchEntitiesRequest
 */
export interface IoTThingsGraphSearchEntitiesRequest {
  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#entityTypes
   */
  readonly entityTypes: string[];

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#filters
   */
  readonly filters?: IoTThingsGraphEntityFilter[];

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchEntitiesRequest(obj: IoTThingsGraphSearchEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entityTypes': obj.entityTypes?.map(y => y),
    'filters': obj.filters?.map(y => toJson_IoTThingsGraphEntityFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'namespaceVersion': obj.namespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchEntitiesResponse
 */
export interface IoTThingsGraphSearchEntitiesResponse {
  /**
   * @schema IoTThingsGraphSearchEntitiesResponse#descriptions
   */
  readonly descriptions?: IoTThingsGraphEntityDescription[];

  /**
   * @schema IoTThingsGraphSearchEntitiesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchEntitiesResponse(obj: IoTThingsGraphSearchEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'descriptions': obj.descriptions?.map(y => toJson_IoTThingsGraphEntityDescription(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchFlowExecutionsRequest
 */
export interface IoTThingsGraphSearchFlowExecutionsRequest {
  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#systemInstanceId
   */
  readonly systemInstanceId: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#flowExecutionId
   */
  readonly flowExecutionId?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchFlowExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchFlowExecutionsRequest(obj: IoTThingsGraphSearchFlowExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'systemInstanceId': obj.systemInstanceId,
    'flowExecutionId': obj.flowExecutionId,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchFlowExecutionsResponse
 */
export interface IoTThingsGraphSearchFlowExecutionsResponse {
  /**
   * @schema IoTThingsGraphSearchFlowExecutionsResponse#summaries
   */
  readonly summaries?: IoTThingsGraphFlowExecutionSummary[];

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchFlowExecutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchFlowExecutionsResponse(obj: IoTThingsGraphSearchFlowExecutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IoTThingsGraphFlowExecutionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchFlowTemplatesRequest
 */
export interface IoTThingsGraphSearchFlowTemplatesRequest {
  /**
   * @schema IoTThingsGraphSearchFlowTemplatesRequest#filters
   */
  readonly filters?: IoTThingsGraphFlowTemplateFilter[];

  /**
   * @schema IoTThingsGraphSearchFlowTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchFlowTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchFlowTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchFlowTemplatesRequest(obj: IoTThingsGraphSearchFlowTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_IoTThingsGraphFlowTemplateFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchFlowTemplatesResponse
 */
export interface IoTThingsGraphSearchFlowTemplatesResponse {
  /**
   * @schema IoTThingsGraphSearchFlowTemplatesResponse#summaries
   */
  readonly summaries?: IoTThingsGraphFlowTemplateSummary[];

  /**
   * @schema IoTThingsGraphSearchFlowTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchFlowTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchFlowTemplatesResponse(obj: IoTThingsGraphSearchFlowTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IoTThingsGraphFlowTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchSystemInstancesRequest
 */
export interface IoTThingsGraphSearchSystemInstancesRequest {
  /**
   * @schema IoTThingsGraphSearchSystemInstancesRequest#filters
   */
  readonly filters?: IoTThingsGraphSystemInstanceFilter[];

  /**
   * @schema IoTThingsGraphSearchSystemInstancesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchSystemInstancesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchSystemInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchSystemInstancesRequest(obj: IoTThingsGraphSearchSystemInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_IoTThingsGraphSystemInstanceFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchSystemInstancesResponse
 */
export interface IoTThingsGraphSearchSystemInstancesResponse {
  /**
   * @schema IoTThingsGraphSearchSystemInstancesResponse#summaries
   */
  readonly summaries?: IoTThingsGraphSystemInstanceSummary[];

  /**
   * @schema IoTThingsGraphSearchSystemInstancesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchSystemInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchSystemInstancesResponse(obj: IoTThingsGraphSearchSystemInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IoTThingsGraphSystemInstanceSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchSystemTemplatesRequest
 */
export interface IoTThingsGraphSearchSystemTemplatesRequest {
  /**
   * @schema IoTThingsGraphSearchSystemTemplatesRequest#filters
   */
  readonly filters?: IoTThingsGraphSystemTemplateFilter[];

  /**
   * @schema IoTThingsGraphSearchSystemTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchSystemTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchSystemTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchSystemTemplatesRequest(obj: IoTThingsGraphSearchSystemTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_IoTThingsGraphSystemTemplateFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchSystemTemplatesResponse
 */
export interface IoTThingsGraphSearchSystemTemplatesResponse {
  /**
   * @schema IoTThingsGraphSearchSystemTemplatesResponse#summaries
   */
  readonly summaries?: IoTThingsGraphSystemTemplateSummary[];

  /**
   * @schema IoTThingsGraphSearchSystemTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchSystemTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchSystemTemplatesResponse(obj: IoTThingsGraphSearchSystemTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IoTThingsGraphSystemTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchThingsRequest
 */
export interface IoTThingsGraphSearchThingsRequest {
  /**
   * @schema IoTThingsGraphSearchThingsRequest#entityId
   */
  readonly entityId: string;

  /**
   * @schema IoTThingsGraphSearchThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTThingsGraphSearchThingsRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchThingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchThingsRequest(obj: IoTThingsGraphSearchThingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entityId': obj.entityId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'namespaceVersion': obj.namespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSearchThingsResponse
 */
export interface IoTThingsGraphSearchThingsResponse {
  /**
   * @schema IoTThingsGraphSearchThingsResponse#things
   */
  readonly things?: IoTThingsGraphThing[];

  /**
   * @schema IoTThingsGraphSearchThingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSearchThingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSearchThingsResponse(obj: IoTThingsGraphSearchThingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'things': obj.things?.map(y => toJson_IoTThingsGraphThing(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphTagResourceRequest
 */
export interface IoTThingsGraphTagResourceRequest {
  /**
   * @schema IoTThingsGraphTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTThingsGraphTagResourceRequest#tags
   */
  readonly tags: IoTThingsGraphTag[];

}

/**
 * Converts an object of type 'IoTThingsGraphTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphTagResourceRequest(obj: IoTThingsGraphTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_IoTThingsGraphTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphTagResourceResponse
 */
export interface IoTThingsGraphTagResourceResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphTagResourceResponse(obj: IoTThingsGraphTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUndeploySystemInstanceRequest
 */
export interface IoTThingsGraphUndeploySystemInstanceRequest {
  /**
   * @schema IoTThingsGraphUndeploySystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphUndeploySystemInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUndeploySystemInstanceRequest(obj: IoTThingsGraphUndeploySystemInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUndeploySystemInstanceResponse
 */
export interface IoTThingsGraphUndeploySystemInstanceResponse {
  /**
   * @schema IoTThingsGraphUndeploySystemInstanceResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemInstanceSummary;

}

/**
 * Converts an object of type 'IoTThingsGraphUndeploySystemInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUndeploySystemInstanceResponse(obj: IoTThingsGraphUndeploySystemInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemInstanceSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUntagResourceRequest
 */
export interface IoTThingsGraphUntagResourceRequest {
  /**
   * @schema IoTThingsGraphUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTThingsGraphUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IoTThingsGraphUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUntagResourceRequest(obj: IoTThingsGraphUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTThingsGraphUntagResourceResponse
 */
export interface IoTThingsGraphUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTThingsGraphUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUntagResourceResponse(obj: IoTThingsGraphUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUpdateFlowTemplateRequest
 */
export interface IoTThingsGraphUpdateFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphUpdateFlowTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphUpdateFlowTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphUpdateFlowTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphUpdateFlowTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUpdateFlowTemplateRequest(obj: IoTThingsGraphUpdateFlowTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'compatibleNamespaceVersion': obj.compatibleNamespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUpdateFlowTemplateResponse
 */
export interface IoTThingsGraphUpdateFlowTemplateResponse {
  /**
   * @schema IoTThingsGraphUpdateFlowTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphFlowTemplateSummary;

}

/**
 * Converts an object of type 'IoTThingsGraphUpdateFlowTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUpdateFlowTemplateResponse(obj: IoTThingsGraphUpdateFlowTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphFlowTemplateSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUpdateSystemTemplateRequest
 */
export interface IoTThingsGraphUpdateSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphUpdateSystemTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphUpdateSystemTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphUpdateSystemTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphUpdateSystemTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUpdateSystemTemplateRequest(obj: IoTThingsGraphUpdateSystemTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'compatibleNamespaceVersion': obj.compatibleNamespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUpdateSystemTemplateResponse
 */
export interface IoTThingsGraphUpdateSystemTemplateResponse {
  /**
   * @schema IoTThingsGraphUpdateSystemTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemTemplateSummary;

}

/**
 * Converts an object of type 'IoTThingsGraphUpdateSystemTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUpdateSystemTemplateResponse(obj: IoTThingsGraphUpdateSystemTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemTemplateSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUploadEntityDefinitionsRequest
 */
export interface IoTThingsGraphUploadEntityDefinitionsRequest {
  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsRequest#document
   */
  readonly document?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsRequest#syncWithPublicNamespace
   */
  readonly syncWithPublicNamespace?: boolean;

  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsRequest#deprecateExistingEntities
   */
  readonly deprecateExistingEntities?: boolean;

}

/**
 * Converts an object of type 'IoTThingsGraphUploadEntityDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUploadEntityDefinitionsRequest(obj: IoTThingsGraphUploadEntityDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'document': toJson_IoTThingsGraphDefinitionDocument(obj.document),
    'syncWithPublicNamespace': obj.syncWithPublicNamespace,
    'deprecateExistingEntities': obj.deprecateExistingEntities,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphUploadEntityDefinitionsResponse
 */
export interface IoTThingsGraphUploadEntityDefinitionsResponse {
  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsResponse#uploadId
   */
  readonly uploadId: string;

}

/**
 * Converts an object of type 'IoTThingsGraphUploadEntityDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphUploadEntityDefinitionsResponse(obj: IoTThingsGraphUploadEntityDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uploadId': obj.uploadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDefinitionDocument
 */
export interface IoTThingsGraphDefinitionDocument {
  /**
   * @schema IoTThingsGraphDefinitionDocument#language
   */
  readonly language: string;

  /**
   * @schema IoTThingsGraphDefinitionDocument#text
   */
  readonly text: string;

}

/**
 * Converts an object of type 'IoTThingsGraphDefinitionDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDefinitionDocument(obj: IoTThingsGraphDefinitionDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'language': obj.language,
    'text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphFlowTemplateSummary
 */
export interface IoTThingsGraphFlowTemplateSummary {
  /**
   * @schema IoTThingsGraphFlowTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphFlowTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphFlowTemplateSummary#revisionNumber
   */
  readonly revisionNumber?: number;

  /**
   * @schema IoTThingsGraphFlowTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphFlowTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphFlowTemplateSummary(obj: IoTThingsGraphFlowTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'revisionNumber': obj.revisionNumber,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphTag
 */
export interface IoTThingsGraphTag {
  /**
   * @schema IoTThingsGraphTag#key
   */
  readonly key: string;

  /**
   * @schema IoTThingsGraphTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'IoTThingsGraphTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphTag(obj: IoTThingsGraphTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphMetricsConfiguration
 */
export interface IoTThingsGraphMetricsConfiguration {
  /**
   * @schema IoTThingsGraphMetricsConfiguration#cloudMetricEnabled
   */
  readonly cloudMetricEnabled?: boolean;

  /**
   * @schema IoTThingsGraphMetricsConfiguration#metricRuleRoleArn
   */
  readonly metricRuleRoleArn?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphMetricsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphMetricsConfiguration(obj: IoTThingsGraphMetricsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cloudMetricEnabled': obj.cloudMetricEnabled,
    'metricRuleRoleArn': obj.metricRuleRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSystemInstanceSummary
 */
export interface IoTThingsGraphSystemInstanceSummary {
  /**
   * @schema IoTThingsGraphSystemInstanceSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#target
   */
  readonly target?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#greengrassGroupName
   */
  readonly greengrassGroupName?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#greengrassGroupVersionId
   */
  readonly greengrassGroupVersionId?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSystemInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSystemInstanceSummary(obj: IoTThingsGraphSystemInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'status': obj.status,
    'target': obj.target,
    'greengrassGroupName': obj.greengrassGroupName,
    'createdAt': obj.createdAt,
    'updatedAt': obj.updatedAt,
    'greengrassGroupId': obj.greengrassGroupId,
    'greengrassGroupVersionId': obj.greengrassGroupVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSystemTemplateSummary
 */
export interface IoTThingsGraphSystemTemplateSummary {
  /**
   * @schema IoTThingsGraphSystemTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphSystemTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphSystemTemplateSummary#revisionNumber
   */
  readonly revisionNumber?: number;

  /**
   * @schema IoTThingsGraphSystemTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSystemTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSystemTemplateSummary(obj: IoTThingsGraphSystemTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'revisionNumber': obj.revisionNumber,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphEntityDescription
 */
export interface IoTThingsGraphEntityDescription {
  /**
   * @schema IoTThingsGraphEntityDescription#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#type
   */
  readonly type?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

}

/**
 * Converts an object of type 'IoTThingsGraphEntityDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphEntityDescription(obj: IoTThingsGraphEntityDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'type': obj.type,
    'createdAt': obj.createdAt,
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphFlowTemplateDescription
 */
export interface IoTThingsGraphFlowTemplateDescription {
  /**
   * @schema IoTThingsGraphFlowTemplateDescription#summary
   */
  readonly summary?: IoTThingsGraphFlowTemplateSummary;

  /**
   * @schema IoTThingsGraphFlowTemplateDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphFlowTemplateDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphFlowTemplateDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphFlowTemplateDescription(obj: IoTThingsGraphFlowTemplateDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphFlowTemplateSummary(obj.summary),
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'validatedNamespaceVersion': obj.validatedNamespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSystemInstanceDescription
 */
export interface IoTThingsGraphSystemInstanceDescription {
  /**
   * @schema IoTThingsGraphSystemInstanceDescription#summary
   */
  readonly summary?: IoTThingsGraphSystemInstanceSummary;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#metricsConfiguration
   */
  readonly metricsConfiguration?: IoTThingsGraphMetricsConfiguration;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#validatedDependencyRevisions
   */
  readonly validatedDependencyRevisions?: IoTThingsGraphDependencyRevision[];

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#flowActionsRoleArn
   */
  readonly flowActionsRoleArn?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphSystemInstanceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSystemInstanceDescription(obj: IoTThingsGraphSystemInstanceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemInstanceSummary(obj.summary),
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    's3BucketName': obj.s3BucketName,
    'metricsConfiguration': toJson_IoTThingsGraphMetricsConfiguration(obj.metricsConfiguration),
    'validatedNamespaceVersion': obj.validatedNamespaceVersion,
    'validatedDependencyRevisions': obj.validatedDependencyRevisions?.map(y => toJson_IoTThingsGraphDependencyRevision(y)),
    'flowActionsRoleArn': obj.flowActionsRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSystemTemplateDescription
 */
export interface IoTThingsGraphSystemTemplateDescription {
  /**
   * @schema IoTThingsGraphSystemTemplateDescription#summary
   */
  readonly summary?: IoTThingsGraphSystemTemplateSummary;

  /**
   * @schema IoTThingsGraphSystemTemplateDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphSystemTemplateDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphSystemTemplateDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSystemTemplateDescription(obj: IoTThingsGraphSystemTemplateDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_IoTThingsGraphSystemTemplateSummary(obj.summary),
    'definition': toJson_IoTThingsGraphDefinitionDocument(obj.definition),
    'validatedNamespaceVersion': obj.validatedNamespaceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphFlowExecutionMessage
 */
export interface IoTThingsGraphFlowExecutionMessage {
  /**
   * @schema IoTThingsGraphFlowExecutionMessage#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionMessage#eventType
   */
  readonly eventType?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionMessage#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionMessage#payload
   */
  readonly payload?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphFlowExecutionMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphFlowExecutionMessage(obj: IoTThingsGraphFlowExecutionMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
    'eventType': obj.eventType,
    'timestamp': obj.timestamp,
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphEntityFilter
 */
export interface IoTThingsGraphEntityFilter {
  /**
   * @schema IoTThingsGraphEntityFilter#name
   */
  readonly name?: string;

  /**
   * @schema IoTThingsGraphEntityFilter#value
   */
  readonly value?: string[];

}

/**
 * Converts an object of type 'IoTThingsGraphEntityFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphEntityFilter(obj: IoTThingsGraphEntityFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphFlowExecutionSummary
 */
export interface IoTThingsGraphFlowExecutionSummary {
  /**
   * @schema IoTThingsGraphFlowExecutionSummary#flowExecutionId
   */
  readonly flowExecutionId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#systemInstanceId
   */
  readonly systemInstanceId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#flowTemplateId
   */
  readonly flowTemplateId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphFlowExecutionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphFlowExecutionSummary(obj: IoTThingsGraphFlowExecutionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowExecutionId': obj.flowExecutionId,
    'status': obj.status,
    'systemInstanceId': obj.systemInstanceId,
    'flowTemplateId': obj.flowTemplateId,
    'createdAt': obj.createdAt,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphFlowTemplateFilter
 */
export interface IoTThingsGraphFlowTemplateFilter {
  /**
   * @schema IoTThingsGraphFlowTemplateFilter#name
   */
  readonly name: string;

  /**
   * @schema IoTThingsGraphFlowTemplateFilter#value
   */
  readonly value: string[];

}

/**
 * Converts an object of type 'IoTThingsGraphFlowTemplateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphFlowTemplateFilter(obj: IoTThingsGraphFlowTemplateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSystemInstanceFilter
 */
export interface IoTThingsGraphSystemInstanceFilter {
  /**
   * @schema IoTThingsGraphSystemInstanceFilter#name
   */
  readonly name?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceFilter#value
   */
  readonly value?: string[];

}

/**
 * Converts an object of type 'IoTThingsGraphSystemInstanceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSystemInstanceFilter(obj: IoTThingsGraphSystemInstanceFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphSystemTemplateFilter
 */
export interface IoTThingsGraphSystemTemplateFilter {
  /**
   * @schema IoTThingsGraphSystemTemplateFilter#name
   */
  readonly name: string;

  /**
   * @schema IoTThingsGraphSystemTemplateFilter#value
   */
  readonly value: string[];

}

/**
 * Converts an object of type 'IoTThingsGraphSystemTemplateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphSystemTemplateFilter(obj: IoTThingsGraphSystemTemplateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphThing
 */
export interface IoTThingsGraphThing {
  /**
   * @schema IoTThingsGraphThing#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IoTThingsGraphThing#thingName
   */
  readonly thingName?: string;

}

/**
 * Converts an object of type 'IoTThingsGraphThing' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphThing(obj: IoTThingsGraphThing | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingArn': obj.thingArn,
    'thingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTThingsGraphDependencyRevision
 */
export interface IoTThingsGraphDependencyRevision {
  /**
   * @schema IoTThingsGraphDependencyRevision#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphDependencyRevision#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * Converts an object of type 'IoTThingsGraphDependencyRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTThingsGraphDependencyRevision(obj: IoTThingsGraphDependencyRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'revisionNumber': obj.revisionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
