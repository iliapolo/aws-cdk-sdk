/**
 * @schema Route53RecoveryReadinessCreateCellRequest
 */
export interface Route53RecoveryReadinessCreateCellRequest {
  /**
   * @schema Route53RecoveryReadinessCreateCellRequest#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateCellRequest#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessCreateCellRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateCellRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateCellRequest(obj: Route53RecoveryReadinessCreateCellRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellName': obj.cellName,
    'Cells': obj.cells?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateCellResponse
 */
export interface Route53RecoveryReadinessCreateCellResponse {
  /**
   * @schema Route53RecoveryReadinessCreateCellResponse#CellArn
   */
  readonly cellArn?: string;

  /**
   * @schema Route53RecoveryReadinessCreateCellResponse#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateCellResponse#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessCreateCellResponse#ParentReadinessScopes
   */
  readonly parentReadinessScopes?: string[];

  /**
   * @schema Route53RecoveryReadinessCreateCellResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateCellResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateCellResponse(obj: Route53RecoveryReadinessCreateCellResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellArn': obj.cellArn,
    'CellName': obj.cellName,
    'Cells': obj.cells?.map(y => y),
    'ParentReadinessScopes': obj.parentReadinessScopes?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest
 */
export interface Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest {
  /**
   * @schema Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest#CrossAccountAuthorization
   */
  readonly crossAccountAuthorization?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest(obj: Route53RecoveryReadinessCreateCrossAccountAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossAccountAuthorization': obj.crossAccountAuthorization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateCrossAccountAuthorizationResponse
 */
export interface Route53RecoveryReadinessCreateCrossAccountAuthorizationResponse {
  /**
   * @schema Route53RecoveryReadinessCreateCrossAccountAuthorizationResponse#CrossAccountAuthorization
   */
  readonly crossAccountAuthorization?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateCrossAccountAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateCrossAccountAuthorizationResponse(obj: Route53RecoveryReadinessCreateCrossAccountAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossAccountAuthorization': obj.crossAccountAuthorization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateReadinessCheckRequest
 */
export interface Route53RecoveryReadinessCreateReadinessCheckRequest {
  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckRequest#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckRequest#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateReadinessCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateReadinessCheckRequest(obj: Route53RecoveryReadinessCreateReadinessCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceSetName': obj.resourceSetName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateReadinessCheckResponse
 */
export interface Route53RecoveryReadinessCreateReadinessCheckResponse {
  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckResponse#ReadinessCheckArn
   */
  readonly readinessCheckArn?: string;

  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckResponse#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckResponse#ResourceSet
   */
  readonly resourceSet?: string;

  /**
   * @schema Route53RecoveryReadinessCreateReadinessCheckResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateReadinessCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateReadinessCheckResponse(obj: Route53RecoveryReadinessCreateReadinessCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckArn': obj.readinessCheckArn,
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceSet': obj.resourceSet,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateRecoveryGroupRequest
 */
export interface Route53RecoveryReadinessCreateRecoveryGroupRequest {
  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupRequest#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupRequest#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateRecoveryGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateRecoveryGroupRequest(obj: Route53RecoveryReadinessCreateRecoveryGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => y),
    'RecoveryGroupName': obj.recoveryGroupName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateRecoveryGroupResponse
 */
export interface Route53RecoveryReadinessCreateRecoveryGroupResponse {
  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupResponse#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupResponse#RecoveryGroupArn
   */
  readonly recoveryGroupArn?: string;

  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupResponse#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateRecoveryGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateRecoveryGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateRecoveryGroupResponse(obj: Route53RecoveryReadinessCreateRecoveryGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => y),
    'RecoveryGroupArn': obj.recoveryGroupArn,
    'RecoveryGroupName': obj.recoveryGroupName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateResourceSetRequest
 */
export interface Route53RecoveryReadinessCreateResourceSetRequest {
  /**
   * @schema Route53RecoveryReadinessCreateResourceSetRequest#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetRequest#ResourceSetType
   */
  readonly resourceSetType?: string;

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetRequest#Resources
   */
  readonly resources?: Route53RecoveryReadinessResource[];

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateResourceSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateResourceSetRequest(obj: Route53RecoveryReadinessCreateResourceSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetName': obj.resourceSetName,
    'ResourceSetType': obj.resourceSetType,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResource(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCreateResourceSetResponse
 */
export interface Route53RecoveryReadinessCreateResourceSetResponse {
  /**
   * @schema Route53RecoveryReadinessCreateResourceSetResponse#ResourceSetArn
   */
  readonly resourceSetArn?: string;

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetResponse#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetResponse#ResourceSetType
   */
  readonly resourceSetType?: string;

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetResponse#Resources
   */
  readonly resources?: Route53RecoveryReadinessResource[];

  /**
   * @schema Route53RecoveryReadinessCreateResourceSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCreateResourceSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCreateResourceSetResponse(obj: Route53RecoveryReadinessCreateResourceSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetArn': obj.resourceSetArn,
    'ResourceSetName': obj.resourceSetName,
    'ResourceSetType': obj.resourceSetType,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResource(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDeleteCellRequest
 */
export interface Route53RecoveryReadinessDeleteCellRequest {
  /**
   * @schema Route53RecoveryReadinessDeleteCellRequest#CellName
   */
  readonly cellName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessDeleteCellRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDeleteCellRequest(obj: Route53RecoveryReadinessDeleteCellRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellName': obj.cellName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest
 */
export interface Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest {
  /**
   * @schema Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest#CrossAccountAuthorization
   */
  readonly crossAccountAuthorization?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest(obj: Route53RecoveryReadinessDeleteCrossAccountAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossAccountAuthorization': obj.crossAccountAuthorization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDeleteCrossAccountAuthorizationResponse
 */
export interface Route53RecoveryReadinessDeleteCrossAccountAuthorizationResponse {
}

/**
 * Converts an object of type 'Route53RecoveryReadinessDeleteCrossAccountAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDeleteCrossAccountAuthorizationResponse(obj: Route53RecoveryReadinessDeleteCrossAccountAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDeleteReadinessCheckRequest
 */
export interface Route53RecoveryReadinessDeleteReadinessCheckRequest {
  /**
   * @schema Route53RecoveryReadinessDeleteReadinessCheckRequest#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessDeleteReadinessCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDeleteReadinessCheckRequest(obj: Route53RecoveryReadinessDeleteReadinessCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckName': obj.readinessCheckName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDeleteRecoveryGroupRequest
 */
export interface Route53RecoveryReadinessDeleteRecoveryGroupRequest {
  /**
   * @schema Route53RecoveryReadinessDeleteRecoveryGroupRequest#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessDeleteRecoveryGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDeleteRecoveryGroupRequest(obj: Route53RecoveryReadinessDeleteRecoveryGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryGroupName': obj.recoveryGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDeleteResourceSetRequest
 */
export interface Route53RecoveryReadinessDeleteResourceSetRequest {
  /**
   * @schema Route53RecoveryReadinessDeleteResourceSetRequest#ResourceSetName
   */
  readonly resourceSetName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessDeleteResourceSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDeleteResourceSetRequest(obj: Route53RecoveryReadinessDeleteResourceSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetName': obj.resourceSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetArchitectureRecommendationsRequest
 */
export interface Route53RecoveryReadinessGetArchitectureRecommendationsRequest {
  /**
   * @schema Route53RecoveryReadinessGetArchitectureRecommendationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessGetArchitectureRecommendationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetArchitectureRecommendationsRequest#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetArchitectureRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetArchitectureRecommendationsRequest(obj: Route53RecoveryReadinessGetArchitectureRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RecoveryGroupName': obj.recoveryGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetArchitectureRecommendationsResponse
 */
export interface Route53RecoveryReadinessGetArchitectureRecommendationsResponse {
  /**
   * @schema Route53RecoveryReadinessGetArchitectureRecommendationsResponse#LastAuditTimestamp
   */
  readonly lastAuditTimestamp?: string;

  /**
   * @schema Route53RecoveryReadinessGetArchitectureRecommendationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetArchitectureRecommendationsResponse#Recommendations
   */
  readonly recommendations?: Route53RecoveryReadinessRecommendation[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetArchitectureRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetArchitectureRecommendationsResponse(obj: Route53RecoveryReadinessGetArchitectureRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastAuditTimestamp': obj.lastAuditTimestamp,
    'NextToken': obj.nextToken,
    'Recommendations': obj.recommendations?.map(y => toJson_Route53RecoveryReadinessRecommendation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetCellRequest
 */
export interface Route53RecoveryReadinessGetCellRequest {
  /**
   * @schema Route53RecoveryReadinessGetCellRequest#CellName
   */
  readonly cellName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetCellRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetCellRequest(obj: Route53RecoveryReadinessGetCellRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellName': obj.cellName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetCellResponse
 */
export interface Route53RecoveryReadinessGetCellResponse {
  /**
   * @schema Route53RecoveryReadinessGetCellResponse#CellArn
   */
  readonly cellArn?: string;

  /**
   * @schema Route53RecoveryReadinessGetCellResponse#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessGetCellResponse#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessGetCellResponse#ParentReadinessScopes
   */
  readonly parentReadinessScopes?: string[];

  /**
   * @schema Route53RecoveryReadinessGetCellResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetCellResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetCellResponse(obj: Route53RecoveryReadinessGetCellResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellArn': obj.cellArn,
    'CellName': obj.cellName,
    'Cells': obj.cells?.map(y => y),
    'ParentReadinessScopes': obj.parentReadinessScopes?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetCellReadinessSummaryRequest
 */
export interface Route53RecoveryReadinessGetCellReadinessSummaryRequest {
  /**
   * @schema Route53RecoveryReadinessGetCellReadinessSummaryRequest#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessGetCellReadinessSummaryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessGetCellReadinessSummaryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetCellReadinessSummaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetCellReadinessSummaryRequest(obj: Route53RecoveryReadinessGetCellReadinessSummaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellName': obj.cellName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetCellReadinessSummaryResponse
 */
export interface Route53RecoveryReadinessGetCellReadinessSummaryResponse {
  /**
   * @schema Route53RecoveryReadinessGetCellReadinessSummaryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetCellReadinessSummaryResponse#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessGetCellReadinessSummaryResponse#ReadinessChecks
   */
  readonly readinessChecks?: Route53RecoveryReadinessReadinessCheckSummary[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetCellReadinessSummaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetCellReadinessSummaryResponse(obj: Route53RecoveryReadinessGetCellReadinessSummaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Readiness': obj.readiness,
    'ReadinessChecks': obj.readinessChecks?.map(y => toJson_Route53RecoveryReadinessReadinessCheckSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetReadinessCheckRequest
 */
export interface Route53RecoveryReadinessGetReadinessCheckRequest {
  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckRequest#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetReadinessCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetReadinessCheckRequest(obj: Route53RecoveryReadinessGetReadinessCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckName': obj.readinessCheckName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetReadinessCheckResponse
 */
export interface Route53RecoveryReadinessGetReadinessCheckResponse {
  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResponse#ReadinessCheckArn
   */
  readonly readinessCheckArn?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResponse#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResponse#ResourceSet
   */
  readonly resourceSet?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetReadinessCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetReadinessCheckResponse(obj: Route53RecoveryReadinessGetReadinessCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckArn': obj.readinessCheckArn,
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceSet': obj.resourceSet,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest
 */
export interface Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest {
  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest(obj: Route53RecoveryReadinessGetReadinessCheckResourceStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceIdentifier': obj.resourceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse
 */
export interface Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse {
  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse#Rules
   */
  readonly rules?: Route53RecoveryReadinessRuleResult[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse(obj: Route53RecoveryReadinessGetReadinessCheckResourceStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Readiness': obj.readiness,
    'Rules': obj.rules?.map(y => toJson_Route53RecoveryReadinessRuleResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetReadinessCheckStatusRequest
 */
export interface Route53RecoveryReadinessGetReadinessCheckStatusRequest {
  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusRequest#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetReadinessCheckStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetReadinessCheckStatusRequest(obj: Route53RecoveryReadinessGetReadinessCheckStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ReadinessCheckName': obj.readinessCheckName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetReadinessCheckStatusResponse
 */
export interface Route53RecoveryReadinessGetReadinessCheckStatusResponse {
  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusResponse#Messages
   */
  readonly messages?: Route53RecoveryReadinessMessage[];

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusResponse#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessGetReadinessCheckStatusResponse#Resources
   */
  readonly resources?: Route53RecoveryReadinessResourceResult[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetReadinessCheckStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetReadinessCheckStatusResponse(obj: Route53RecoveryReadinessGetReadinessCheckStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Messages': obj.messages?.map(y => toJson_Route53RecoveryReadinessMessage(y)),
    'NextToken': obj.nextToken,
    'Readiness': obj.readiness,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResourceResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetRecoveryGroupRequest
 */
export interface Route53RecoveryReadinessGetRecoveryGroupRequest {
  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupRequest#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetRecoveryGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetRecoveryGroupRequest(obj: Route53RecoveryReadinessGetRecoveryGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryGroupName': obj.recoveryGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetRecoveryGroupResponse
 */
export interface Route53RecoveryReadinessGetRecoveryGroupResponse {
  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupResponse#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupResponse#RecoveryGroupArn
   */
  readonly recoveryGroupArn?: string;

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupResponse#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetRecoveryGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetRecoveryGroupResponse(obj: Route53RecoveryReadinessGetRecoveryGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => y),
    'RecoveryGroupArn': obj.recoveryGroupArn,
    'RecoveryGroupName': obj.recoveryGroupName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest
 */
export interface Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest {
  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest(obj: Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RecoveryGroupName': obj.recoveryGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse
 */
export interface Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse {
  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse#ReadinessChecks
   */
  readonly readinessChecks?: Route53RecoveryReadinessReadinessCheckSummary[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse(obj: Route53RecoveryReadinessGetRecoveryGroupReadinessSummaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Readiness': obj.readiness,
    'ReadinessChecks': obj.readinessChecks?.map(y => toJson_Route53RecoveryReadinessReadinessCheckSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetResourceSetRequest
 */
export interface Route53RecoveryReadinessGetResourceSetRequest {
  /**
   * @schema Route53RecoveryReadinessGetResourceSetRequest#ResourceSetName
   */
  readonly resourceSetName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetResourceSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetResourceSetRequest(obj: Route53RecoveryReadinessGetResourceSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetName': obj.resourceSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessGetResourceSetResponse
 */
export interface Route53RecoveryReadinessGetResourceSetResponse {
  /**
   * @schema Route53RecoveryReadinessGetResourceSetResponse#ResourceSetArn
   */
  readonly resourceSetArn?: string;

  /**
   * @schema Route53RecoveryReadinessGetResourceSetResponse#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessGetResourceSetResponse#ResourceSetType
   */
  readonly resourceSetType?: string;

  /**
   * @schema Route53RecoveryReadinessGetResourceSetResponse#Resources
   */
  readonly resources?: Route53RecoveryReadinessResource[];

  /**
   * @schema Route53RecoveryReadinessGetResourceSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessGetResourceSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessGetResourceSetResponse(obj: Route53RecoveryReadinessGetResourceSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetArn': obj.resourceSetArn,
    'ResourceSetName': obj.resourceSetName,
    'ResourceSetType': obj.resourceSetType,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResource(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListCellsRequest
 */
export interface Route53RecoveryReadinessListCellsRequest {
  /**
   * @schema Route53RecoveryReadinessListCellsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessListCellsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListCellsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListCellsRequest(obj: Route53RecoveryReadinessListCellsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListCellsResponse
 */
export interface Route53RecoveryReadinessListCellsResponse {
  /**
   * @schema Route53RecoveryReadinessListCellsResponse#Cells
   */
  readonly cells?: Route53RecoveryReadinessCellOutput[];

  /**
   * @schema Route53RecoveryReadinessListCellsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListCellsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListCellsResponse(obj: Route53RecoveryReadinessListCellsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => toJson_Route53RecoveryReadinessCellOutput(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListCrossAccountAuthorizationsRequest
 */
export interface Route53RecoveryReadinessListCrossAccountAuthorizationsRequest {
  /**
   * @schema Route53RecoveryReadinessListCrossAccountAuthorizationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessListCrossAccountAuthorizationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListCrossAccountAuthorizationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListCrossAccountAuthorizationsRequest(obj: Route53RecoveryReadinessListCrossAccountAuthorizationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListCrossAccountAuthorizationsResponse
 */
export interface Route53RecoveryReadinessListCrossAccountAuthorizationsResponse {
  /**
   * @schema Route53RecoveryReadinessListCrossAccountAuthorizationsResponse#CrossAccountAuthorizations
   */
  readonly crossAccountAuthorizations?: string[];

  /**
   * @schema Route53RecoveryReadinessListCrossAccountAuthorizationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListCrossAccountAuthorizationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListCrossAccountAuthorizationsResponse(obj: Route53RecoveryReadinessListCrossAccountAuthorizationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossAccountAuthorizations': obj.crossAccountAuthorizations?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListReadinessChecksRequest
 */
export interface Route53RecoveryReadinessListReadinessChecksRequest {
  /**
   * @schema Route53RecoveryReadinessListReadinessChecksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessListReadinessChecksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListReadinessChecksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListReadinessChecksRequest(obj: Route53RecoveryReadinessListReadinessChecksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListReadinessChecksResponse
 */
export interface Route53RecoveryReadinessListReadinessChecksResponse {
  /**
   * @schema Route53RecoveryReadinessListReadinessChecksResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessListReadinessChecksResponse#ReadinessChecks
   */
  readonly readinessChecks?: Route53RecoveryReadinessReadinessCheckOutput[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListReadinessChecksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListReadinessChecksResponse(obj: Route53RecoveryReadinessListReadinessChecksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ReadinessChecks': obj.readinessChecks?.map(y => toJson_Route53RecoveryReadinessReadinessCheckOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListRecoveryGroupsRequest
 */
export interface Route53RecoveryReadinessListRecoveryGroupsRequest {
  /**
   * @schema Route53RecoveryReadinessListRecoveryGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessListRecoveryGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListRecoveryGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListRecoveryGroupsRequest(obj: Route53RecoveryReadinessListRecoveryGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListRecoveryGroupsResponse
 */
export interface Route53RecoveryReadinessListRecoveryGroupsResponse {
  /**
   * @schema Route53RecoveryReadinessListRecoveryGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessListRecoveryGroupsResponse#RecoveryGroups
   */
  readonly recoveryGroups?: Route53RecoveryReadinessRecoveryGroupOutput[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListRecoveryGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListRecoveryGroupsResponse(obj: Route53RecoveryReadinessListRecoveryGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RecoveryGroups': obj.recoveryGroups?.map(y => toJson_Route53RecoveryReadinessRecoveryGroupOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListResourceSetsRequest
 */
export interface Route53RecoveryReadinessListResourceSetsRequest {
  /**
   * @schema Route53RecoveryReadinessListResourceSetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessListResourceSetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListResourceSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListResourceSetsRequest(obj: Route53RecoveryReadinessListResourceSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListResourceSetsResponse
 */
export interface Route53RecoveryReadinessListResourceSetsResponse {
  /**
   * @schema Route53RecoveryReadinessListResourceSetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessListResourceSetsResponse#ResourceSets
   */
  readonly resourceSets?: Route53RecoveryReadinessResourceSetOutput[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListResourceSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListResourceSetsResponse(obj: Route53RecoveryReadinessListResourceSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ResourceSets': obj.resourceSets?.map(y => toJson_Route53RecoveryReadinessResourceSetOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListRulesRequest
 */
export interface Route53RecoveryReadinessListRulesRequest {
  /**
   * @schema Route53RecoveryReadinessListRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryReadinessListRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessListRulesRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListRulesRequest(obj: Route53RecoveryReadinessListRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListRulesResponse
 */
export interface Route53RecoveryReadinessListRulesResponse {
  /**
   * @schema Route53RecoveryReadinessListRulesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryReadinessListRulesResponse#Rules
   */
  readonly rules?: Route53RecoveryReadinessListRulesOutput[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListRulesResponse(obj: Route53RecoveryReadinessListRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Rules': obj.rules?.map(y => toJson_Route53RecoveryReadinessListRulesOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListTagsForResourcesRequest
 */
export interface Route53RecoveryReadinessListTagsForResourcesRequest {
  /**
   * @schema Route53RecoveryReadinessListTagsForResourcesRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListTagsForResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListTagsForResourcesRequest(obj: Route53RecoveryReadinessListTagsForResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListTagsForResourcesResponse
 */
export interface Route53RecoveryReadinessListTagsForResourcesResponse {
  /**
   * @schema Route53RecoveryReadinessListTagsForResourcesResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListTagsForResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListTagsForResourcesResponse(obj: Route53RecoveryReadinessListTagsForResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessTagResourceRequest
 */
export interface Route53RecoveryReadinessTagResourceRequest {
  /**
   * @schema Route53RecoveryReadinessTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Route53RecoveryReadinessTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessTagResourceRequest(obj: Route53RecoveryReadinessTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessTagResourceResponse
 */
export interface Route53RecoveryReadinessTagResourceResponse {
}

/**
 * Converts an object of type 'Route53RecoveryReadinessTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessTagResourceResponse(obj: Route53RecoveryReadinessTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUntagResourceRequest
 */
export interface Route53RecoveryReadinessUntagResourceRequest {
  /**
   * @schema Route53RecoveryReadinessUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Route53RecoveryReadinessUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUntagResourceRequest(obj: Route53RecoveryReadinessUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateCellRequest
 */
export interface Route53RecoveryReadinessUpdateCellRequest {
  /**
   * @schema Route53RecoveryReadinessUpdateCellRequest#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateCellRequest#Cells
   */
  readonly cells?: string[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateCellRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateCellRequest(obj: Route53RecoveryReadinessUpdateCellRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellName': obj.cellName,
    'Cells': obj.cells?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateCellResponse
 */
export interface Route53RecoveryReadinessUpdateCellResponse {
  /**
   * @schema Route53RecoveryReadinessUpdateCellResponse#CellArn
   */
  readonly cellArn?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateCellResponse#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateCellResponse#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessUpdateCellResponse#ParentReadinessScopes
   */
  readonly parentReadinessScopes?: string[];

  /**
   * @schema Route53RecoveryReadinessUpdateCellResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateCellResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateCellResponse(obj: Route53RecoveryReadinessUpdateCellResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellArn': obj.cellArn,
    'CellName': obj.cellName,
    'Cells': obj.cells?.map(y => y),
    'ParentReadinessScopes': obj.parentReadinessScopes?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateReadinessCheckRequest
 */
export interface Route53RecoveryReadinessUpdateReadinessCheckRequest {
  /**
   * @schema Route53RecoveryReadinessUpdateReadinessCheckRequest#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateReadinessCheckRequest#ResourceSetName
   */
  readonly resourceSetName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateReadinessCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateReadinessCheckRequest(obj: Route53RecoveryReadinessUpdateReadinessCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceSetName': obj.resourceSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateReadinessCheckResponse
 */
export interface Route53RecoveryReadinessUpdateReadinessCheckResponse {
  /**
   * @schema Route53RecoveryReadinessUpdateReadinessCheckResponse#ReadinessCheckArn
   */
  readonly readinessCheckArn?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateReadinessCheckResponse#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateReadinessCheckResponse#ResourceSet
   */
  readonly resourceSet?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateReadinessCheckResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateReadinessCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateReadinessCheckResponse(obj: Route53RecoveryReadinessUpdateReadinessCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckArn': obj.readinessCheckArn,
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceSet': obj.resourceSet,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateRecoveryGroupRequest
 */
export interface Route53RecoveryReadinessUpdateRecoveryGroupRequest {
  /**
   * @schema Route53RecoveryReadinessUpdateRecoveryGroupRequest#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessUpdateRecoveryGroupRequest#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateRecoveryGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateRecoveryGroupRequest(obj: Route53RecoveryReadinessUpdateRecoveryGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => y),
    'RecoveryGroupName': obj.recoveryGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateRecoveryGroupResponse
 */
export interface Route53RecoveryReadinessUpdateRecoveryGroupResponse {
  /**
   * @schema Route53RecoveryReadinessUpdateRecoveryGroupResponse#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessUpdateRecoveryGroupResponse#RecoveryGroupArn
   */
  readonly recoveryGroupArn?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateRecoveryGroupResponse#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateRecoveryGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateRecoveryGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateRecoveryGroupResponse(obj: Route53RecoveryReadinessUpdateRecoveryGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => y),
    'RecoveryGroupArn': obj.recoveryGroupArn,
    'RecoveryGroupName': obj.recoveryGroupName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateResourceSetRequest
 */
export interface Route53RecoveryReadinessUpdateResourceSetRequest {
  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetRequest#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetRequest#ResourceSetType
   */
  readonly resourceSetType?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetRequest#Resources
   */
  readonly resources?: Route53RecoveryReadinessResource[];

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateResourceSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateResourceSetRequest(obj: Route53RecoveryReadinessUpdateResourceSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetName': obj.resourceSetName,
    'ResourceSetType': obj.resourceSetType,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessUpdateResourceSetResponse
 */
export interface Route53RecoveryReadinessUpdateResourceSetResponse {
  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetResponse#ResourceSetArn
   */
  readonly resourceSetArn?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetResponse#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetResponse#ResourceSetType
   */
  readonly resourceSetType?: string;

  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetResponse#Resources
   */
  readonly resources?: Route53RecoveryReadinessResource[];

  /**
   * @schema Route53RecoveryReadinessUpdateResourceSetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessUpdateResourceSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessUpdateResourceSetResponse(obj: Route53RecoveryReadinessUpdateResourceSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetArn': obj.resourceSetArn,
    'ResourceSetName': obj.resourceSetName,
    'ResourceSetType': obj.resourceSetType,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResource(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessResource
 */
export interface Route53RecoveryReadinessResource {
  /**
   * @schema Route53RecoveryReadinessResource#ComponentId
   */
  readonly componentId?: string;

  /**
   * @schema Route53RecoveryReadinessResource#DnsTargetResource
   */
  readonly dnsTargetResource?: Route53RecoveryReadinessDnsTargetResource;

  /**
   * @schema Route53RecoveryReadinessResource#ReadinessScopes
   */
  readonly readinessScopes?: string[];

  /**
   * @schema Route53RecoveryReadinessResource#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessResource(obj: Route53RecoveryReadinessResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComponentId': obj.componentId,
    'DnsTargetResource': toJson_Route53RecoveryReadinessDnsTargetResource(obj.dnsTargetResource),
    'ReadinessScopes': obj.readinessScopes?.map(y => y),
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessRecommendation
 */
export interface Route53RecoveryReadinessRecommendation {
  /**
   * @schema Route53RecoveryReadinessRecommendation#RecommendationText
   */
  readonly recommendationText?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessRecommendation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessRecommendation(obj: Route53RecoveryReadinessRecommendation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecommendationText': obj.recommendationText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessReadinessCheckSummary
 */
export interface Route53RecoveryReadinessReadinessCheckSummary {
  /**
   * @schema Route53RecoveryReadinessReadinessCheckSummary#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessReadinessCheckSummary#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessReadinessCheckSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessReadinessCheckSummary(obj: Route53RecoveryReadinessReadinessCheckSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Readiness': obj.readiness,
    'ReadinessCheckName': obj.readinessCheckName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessRuleResult
 */
export interface Route53RecoveryReadinessRuleResult {
  /**
   * @schema Route53RecoveryReadinessRuleResult#LastCheckedTimestamp
   */
  readonly lastCheckedTimestamp?: string;

  /**
   * @schema Route53RecoveryReadinessRuleResult#Messages
   */
  readonly messages?: Route53RecoveryReadinessMessage[];

  /**
   * @schema Route53RecoveryReadinessRuleResult#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessRuleResult#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessRuleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessRuleResult(obj: Route53RecoveryReadinessRuleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastCheckedTimestamp': obj.lastCheckedTimestamp,
    'Messages': obj.messages?.map(y => toJson_Route53RecoveryReadinessMessage(y)),
    'Readiness': obj.readiness,
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessMessage
 */
export interface Route53RecoveryReadinessMessage {
  /**
   * @schema Route53RecoveryReadinessMessage#MessageText
   */
  readonly messageText?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessMessage(obj: Route53RecoveryReadinessMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageText': obj.messageText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessResourceResult
 */
export interface Route53RecoveryReadinessResourceResult {
  /**
   * @schema Route53RecoveryReadinessResourceResult#ComponentId
   */
  readonly componentId?: string;

  /**
   * @schema Route53RecoveryReadinessResourceResult#LastCheckedTimestamp
   */
  readonly lastCheckedTimestamp?: string;

  /**
   * @schema Route53RecoveryReadinessResourceResult#Readiness
   */
  readonly readiness?: string;

  /**
   * @schema Route53RecoveryReadinessResourceResult#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessResourceResult(obj: Route53RecoveryReadinessResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComponentId': obj.componentId,
    'LastCheckedTimestamp': obj.lastCheckedTimestamp,
    'Readiness': obj.readiness,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessCellOutput
 */
export interface Route53RecoveryReadinessCellOutput {
  /**
   * @schema Route53RecoveryReadinessCellOutput#CellArn
   */
  readonly cellArn?: string;

  /**
   * @schema Route53RecoveryReadinessCellOutput#CellName
   */
  readonly cellName?: string;

  /**
   * @schema Route53RecoveryReadinessCellOutput#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessCellOutput#ParentReadinessScopes
   */
  readonly parentReadinessScopes?: string[];

  /**
   * @schema Route53RecoveryReadinessCellOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessCellOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessCellOutput(obj: Route53RecoveryReadinessCellOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CellArn': obj.cellArn,
    'CellName': obj.cellName,
    'Cells': obj.cells?.map(y => y),
    'ParentReadinessScopes': obj.parentReadinessScopes?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessReadinessCheckOutput
 */
export interface Route53RecoveryReadinessReadinessCheckOutput {
  /**
   * @schema Route53RecoveryReadinessReadinessCheckOutput#ReadinessCheckArn
   */
  readonly readinessCheckArn?: string;

  /**
   * @schema Route53RecoveryReadinessReadinessCheckOutput#ReadinessCheckName
   */
  readonly readinessCheckName?: string;

  /**
   * @schema Route53RecoveryReadinessReadinessCheckOutput#ResourceSet
   */
  readonly resourceSet?: string;

  /**
   * @schema Route53RecoveryReadinessReadinessCheckOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessReadinessCheckOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessReadinessCheckOutput(obj: Route53RecoveryReadinessReadinessCheckOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadinessCheckArn': obj.readinessCheckArn,
    'ReadinessCheckName': obj.readinessCheckName,
    'ResourceSet': obj.resourceSet,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessRecoveryGroupOutput
 */
export interface Route53RecoveryReadinessRecoveryGroupOutput {
  /**
   * @schema Route53RecoveryReadinessRecoveryGroupOutput#Cells
   */
  readonly cells?: string[];

  /**
   * @schema Route53RecoveryReadinessRecoveryGroupOutput#RecoveryGroupArn
   */
  readonly recoveryGroupArn?: string;

  /**
   * @schema Route53RecoveryReadinessRecoveryGroupOutput#RecoveryGroupName
   */
  readonly recoveryGroupName?: string;

  /**
   * @schema Route53RecoveryReadinessRecoveryGroupOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessRecoveryGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessRecoveryGroupOutput(obj: Route53RecoveryReadinessRecoveryGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cells': obj.cells?.map(y => y),
    'RecoveryGroupArn': obj.recoveryGroupArn,
    'RecoveryGroupName': obj.recoveryGroupName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessResourceSetOutput
 */
export interface Route53RecoveryReadinessResourceSetOutput {
  /**
   * @schema Route53RecoveryReadinessResourceSetOutput#ResourceSetArn
   */
  readonly resourceSetArn?: string;

  /**
   * @schema Route53RecoveryReadinessResourceSetOutput#ResourceSetName
   */
  readonly resourceSetName?: string;

  /**
   * @schema Route53RecoveryReadinessResourceSetOutput#ResourceSetType
   */
  readonly resourceSetType?: string;

  /**
   * @schema Route53RecoveryReadinessResourceSetOutput#Resources
   */
  readonly resources?: Route53RecoveryReadinessResource[];

  /**
   * @schema Route53RecoveryReadinessResourceSetOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'Route53RecoveryReadinessResourceSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessResourceSetOutput(obj: Route53RecoveryReadinessResourceSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceSetArn': obj.resourceSetArn,
    'ResourceSetName': obj.resourceSetName,
    'ResourceSetType': obj.resourceSetType,
    'Resources': obj.resources?.map(y => toJson_Route53RecoveryReadinessResource(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessListRulesOutput
 */
export interface Route53RecoveryReadinessListRulesOutput {
  /**
   * @schema Route53RecoveryReadinessListRulesOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Route53RecoveryReadinessListRulesOutput#RuleDescription
   */
  readonly ruleDescription?: string;

  /**
   * @schema Route53RecoveryReadinessListRulesOutput#RuleId
   */
  readonly ruleId?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessListRulesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessListRulesOutput(obj: Route53RecoveryReadinessListRulesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'RuleDescription': obj.ruleDescription,
    'RuleId': obj.ruleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessDnsTargetResource
 */
export interface Route53RecoveryReadinessDnsTargetResource {
  /**
   * @schema Route53RecoveryReadinessDnsTargetResource#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53RecoveryReadinessDnsTargetResource#HostedZoneArn
   */
  readonly hostedZoneArn?: string;

  /**
   * @schema Route53RecoveryReadinessDnsTargetResource#RecordSetId
   */
  readonly recordSetId?: string;

  /**
   * @schema Route53RecoveryReadinessDnsTargetResource#RecordType
   */
  readonly recordType?: string;

  /**
   * @schema Route53RecoveryReadinessDnsTargetResource#TargetResource
   */
  readonly targetResource?: Route53RecoveryReadinessTargetResource;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessDnsTargetResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessDnsTargetResource(obj: Route53RecoveryReadinessDnsTargetResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'HostedZoneArn': obj.hostedZoneArn,
    'RecordSetId': obj.recordSetId,
    'RecordType': obj.recordType,
    'TargetResource': toJson_Route53RecoveryReadinessTargetResource(obj.targetResource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessTargetResource
 */
export interface Route53RecoveryReadinessTargetResource {
  /**
   * @schema Route53RecoveryReadinessTargetResource#NLBResource
   */
  readonly nlbResource?: Route53RecoveryReadinessNlbResource;

  /**
   * @schema Route53RecoveryReadinessTargetResource#R53Resource
   */
  readonly r53Resource?: Route53RecoveryReadinessR53ResourceRecord;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessTargetResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessTargetResource(obj: Route53RecoveryReadinessTargetResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NLBResource': toJson_Route53RecoveryReadinessNlbResource(obj.nlbResource),
    'R53Resource': toJson_Route53RecoveryReadinessR53ResourceRecord(obj.r53Resource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessNlbResource
 */
export interface Route53RecoveryReadinessNlbResource {
  /**
   * @schema Route53RecoveryReadinessNlbResource#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessNlbResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessNlbResource(obj: Route53RecoveryReadinessNlbResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryReadinessR53ResourceRecord
 */
export interface Route53RecoveryReadinessR53ResourceRecord {
  /**
   * @schema Route53RecoveryReadinessR53ResourceRecord#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53RecoveryReadinessR53ResourceRecord#RecordSetId
   */
  readonly recordSetId?: string;

}

/**
 * Converts an object of type 'Route53RecoveryReadinessR53ResourceRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryReadinessR53ResourceRecord(obj: Route53RecoveryReadinessR53ResourceRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'RecordSetId': obj.recordSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
