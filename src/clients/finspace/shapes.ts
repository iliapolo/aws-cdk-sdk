/**
 * @schema FinspaceCreateEnvironmentRequest
 */
export interface FinspaceCreateEnvironmentRequest {
  /**
   * @schema FinspaceCreateEnvironmentRequest#name
   */
  readonly name: string;

  /**
   * @schema FinspaceCreateEnvironmentRequest#description
   */
  readonly description?: string;

  /**
   * @schema FinspaceCreateEnvironmentRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FinspaceCreateEnvironmentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema FinspaceCreateEnvironmentRequest#federationMode
   */
  readonly federationMode?: string;

  /**
   * @schema FinspaceCreateEnvironmentRequest#federationParameters
   */
  readonly federationParameters?: FinspaceFederationParameters;

}

/**
 * Converts an object of type 'FinspaceCreateEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceCreateEnvironmentRequest(obj: FinspaceCreateEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'kmsKeyId': obj.kmsKeyId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'federationMode': obj.federationMode,
    'federationParameters': toJson_FinspaceFederationParameters(obj.federationParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceCreateEnvironmentResponse
 */
export interface FinspaceCreateEnvironmentResponse {
  /**
   * @schema FinspaceCreateEnvironmentResponse#environmentId
   */
  readonly environmentId?: string;

  /**
   * @schema FinspaceCreateEnvironmentResponse#environmentArn
   */
  readonly environmentArn?: string;

  /**
   * @schema FinspaceCreateEnvironmentResponse#environmentUrl
   */
  readonly environmentUrl?: string;

}

/**
 * Converts an object of type 'FinspaceCreateEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceCreateEnvironmentResponse(obj: FinspaceCreateEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
    'environmentArn': obj.environmentArn,
    'environmentUrl': obj.environmentUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceDeleteEnvironmentRequest
 */
export interface FinspaceDeleteEnvironmentRequest {
  /**
   * @schema FinspaceDeleteEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * Converts an object of type 'FinspaceDeleteEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceDeleteEnvironmentRequest(obj: FinspaceDeleteEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceDeleteEnvironmentResponse
 */
export interface FinspaceDeleteEnvironmentResponse {
}

/**
 * Converts an object of type 'FinspaceDeleteEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceDeleteEnvironmentResponse(obj: FinspaceDeleteEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceGetEnvironmentRequest
 */
export interface FinspaceGetEnvironmentRequest {
  /**
   * @schema FinspaceGetEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

}

/**
 * Converts an object of type 'FinspaceGetEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceGetEnvironmentRequest(obj: FinspaceGetEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceGetEnvironmentResponse
 */
export interface FinspaceGetEnvironmentResponse {
  /**
   * @schema FinspaceGetEnvironmentResponse#environment
   */
  readonly environment?: FinspaceEnvironment;

}

/**
 * Converts an object of type 'FinspaceGetEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceGetEnvironmentResponse(obj: FinspaceGetEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_FinspaceEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceListEnvironmentsRequest
 */
export interface FinspaceListEnvironmentsRequest {
  /**
   * @schema FinspaceListEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema FinspaceListEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'FinspaceListEnvironmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceListEnvironmentsRequest(obj: FinspaceListEnvironmentsRequest | undefined): Record<string, any> | undefined {
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
 * @schema FinspaceListEnvironmentsResponse
 */
export interface FinspaceListEnvironmentsResponse {
  /**
   * @schema FinspaceListEnvironmentsResponse#environments
   */
  readonly environments?: FinspaceEnvironment[];

  /**
   * @schema FinspaceListEnvironmentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FinspaceListEnvironmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceListEnvironmentsResponse(obj: FinspaceListEnvironmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environments': obj.environments?.map(y => toJson_FinspaceEnvironment(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceListTagsForResourceRequest
 */
export interface FinspaceListTagsForResourceRequest {
  /**
   * @schema FinspaceListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'FinspaceListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceListTagsForResourceRequest(obj: FinspaceListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceListTagsForResourceResponse
 */
export interface FinspaceListTagsForResourceResponse {
  /**
   * @schema FinspaceListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FinspaceListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceListTagsForResourceResponse(obj: FinspaceListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceTagResourceRequest
 */
export interface FinspaceTagResourceRequest {
  /**
   * @schema FinspaceTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema FinspaceTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'FinspaceTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceTagResourceRequest(obj: FinspaceTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema FinspaceTagResourceResponse
 */
export interface FinspaceTagResourceResponse {
}

/**
 * Converts an object of type 'FinspaceTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceTagResourceResponse(obj: FinspaceTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceUntagResourceRequest
 */
export interface FinspaceUntagResourceRequest {
  /**
   * @schema FinspaceUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema FinspaceUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'FinspaceUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceUntagResourceRequest(obj: FinspaceUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema FinspaceUntagResourceResponse
 */
export interface FinspaceUntagResourceResponse {
}

/**
 * Converts an object of type 'FinspaceUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceUntagResourceResponse(obj: FinspaceUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceUpdateEnvironmentRequest
 */
export interface FinspaceUpdateEnvironmentRequest {
  /**
   * @schema FinspaceUpdateEnvironmentRequest#environmentId
   */
  readonly environmentId: string;

  /**
   * @schema FinspaceUpdateEnvironmentRequest#name
   */
  readonly name?: string;

  /**
   * @schema FinspaceUpdateEnvironmentRequest#description
   */
  readonly description?: string;

  /**
   * @schema FinspaceUpdateEnvironmentRequest#federationMode
   */
  readonly federationMode?: string;

  /**
   * @schema FinspaceUpdateEnvironmentRequest#federationParameters
   */
  readonly federationParameters?: FinspaceFederationParameters;

}

/**
 * Converts an object of type 'FinspaceUpdateEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceUpdateEnvironmentRequest(obj: FinspaceUpdateEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentId': obj.environmentId,
    'name': obj.name,
    'description': obj.description,
    'federationMode': obj.federationMode,
    'federationParameters': toJson_FinspaceFederationParameters(obj.federationParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceUpdateEnvironmentResponse
 */
export interface FinspaceUpdateEnvironmentResponse {
  /**
   * @schema FinspaceUpdateEnvironmentResponse#environment
   */
  readonly environment?: FinspaceEnvironment;

}

/**
 * Converts an object of type 'FinspaceUpdateEnvironmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceUpdateEnvironmentResponse(obj: FinspaceUpdateEnvironmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_FinspaceEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceFederationParameters
 */
export interface FinspaceFederationParameters {
  /**
   * @schema FinspaceFederationParameters#samlMetadataDocument
   */
  readonly samlMetadataDocument?: string;

  /**
   * @schema FinspaceFederationParameters#samlMetadataURL
   */
  readonly samlMetadataUrl?: string;

  /**
   * @schema FinspaceFederationParameters#applicationCallBackURL
   */
  readonly applicationCallBackUrl?: string;

  /**
   * @schema FinspaceFederationParameters#federationURN
   */
  readonly federationUrn?: string;

  /**
   * @schema FinspaceFederationParameters#federationProviderName
   */
  readonly federationProviderName?: string;

  /**
   * @schema FinspaceFederationParameters#attributeMap
   */
  readonly attributeMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'FinspaceFederationParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceFederationParameters(obj: FinspaceFederationParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'samlMetadataDocument': obj.samlMetadataDocument,
    'samlMetadataURL': obj.samlMetadataUrl,
    'applicationCallBackURL': obj.applicationCallBackUrl,
    'federationURN': obj.federationUrn,
    'federationProviderName': obj.federationProviderName,
    'attributeMap': ((obj.attributeMap) === undefined) ? undefined : (Object.entries(obj.attributeMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FinspaceEnvironment
 */
export interface FinspaceEnvironment {
  /**
   * @schema FinspaceEnvironment#name
   */
  readonly name?: string;

  /**
   * @schema FinspaceEnvironment#environmentId
   */
  readonly environmentId?: string;

  /**
   * @schema FinspaceEnvironment#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema FinspaceEnvironment#status
   */
  readonly status?: string;

  /**
   * @schema FinspaceEnvironment#environmentUrl
   */
  readonly environmentUrl?: string;

  /**
   * @schema FinspaceEnvironment#description
   */
  readonly description?: string;

  /**
   * @schema FinspaceEnvironment#environmentArn
   */
  readonly environmentArn?: string;

  /**
   * @schema FinspaceEnvironment#sageMakerStudioDomainUrl
   */
  readonly sageMakerStudioDomainUrl?: string;

  /**
   * @schema FinspaceEnvironment#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema FinspaceEnvironment#dedicatedServiceAccountId
   */
  readonly dedicatedServiceAccountId?: string;

  /**
   * @schema FinspaceEnvironment#federationMode
   */
  readonly federationMode?: string;

  /**
   * @schema FinspaceEnvironment#federationParameters
   */
  readonly federationParameters?: FinspaceFederationParameters;

}

/**
 * Converts an object of type 'FinspaceEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FinspaceEnvironment(obj: FinspaceEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'environmentId': obj.environmentId,
    'awsAccountId': obj.awsAccountId,
    'status': obj.status,
    'environmentUrl': obj.environmentUrl,
    'description': obj.description,
    'environmentArn': obj.environmentArn,
    'sageMakerStudioDomainUrl': obj.sageMakerStudioDomainUrl,
    'kmsKeyId': obj.kmsKeyId,
    'dedicatedServiceAccountId': obj.dedicatedServiceAccountId,
    'federationMode': obj.federationMode,
    'federationParameters': toJson_FinspaceFederationParameters(obj.federationParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
