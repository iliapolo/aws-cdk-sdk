/**
 * @schema LakeFormationAddLfTagsToResourceRequest
 */
export interface LakeFormationAddLfTagsToResourceRequest {
  /**
   * @schema LakeFormationAddLfTagsToResourceRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationAddLfTagsToResourceRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationAddLfTagsToResourceRequest#LFTags
   */
  readonly lfTags?: LakeFormationLfTagPair[];

}

/**
 * Converts an object of type 'LakeFormationAddLfTagsToResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationAddLfTagsToResourceRequest(obj: LakeFormationAddLfTagsToResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Resource': toJson_LakeFormationResource(obj.resource),
    'LFTags': obj.lfTags?.map(y => toJson_LakeFormationLfTagPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationAddLfTagsToResourceResponse
 */
export interface LakeFormationAddLfTagsToResourceResponse {
  /**
   * @schema LakeFormationAddLfTagsToResourceResponse#Failures
   */
  readonly failures?: LakeFormationLfTagError[];

}

/**
 * Converts an object of type 'LakeFormationAddLfTagsToResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationAddLfTagsToResourceResponse(obj: LakeFormationAddLfTagsToResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failures': obj.failures?.map(y => toJson_LakeFormationLfTagError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationBatchGrantPermissionsRequest
 */
export interface LakeFormationBatchGrantPermissionsRequest {
  /**
   * @schema LakeFormationBatchGrantPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationBatchGrantPermissionsRequest#Entries
   */
  readonly entries?: LakeFormationBatchPermissionsRequestEntry[];

}

/**
 * Converts an object of type 'LakeFormationBatchGrantPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationBatchGrantPermissionsRequest(obj: LakeFormationBatchGrantPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Entries': obj.entries?.map(y => toJson_LakeFormationBatchPermissionsRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationBatchGrantPermissionsResponse
 */
export interface LakeFormationBatchGrantPermissionsResponse {
  /**
   * @schema LakeFormationBatchGrantPermissionsResponse#Failures
   */
  readonly failures?: LakeFormationBatchPermissionsFailureEntry[];

}

/**
 * Converts an object of type 'LakeFormationBatchGrantPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationBatchGrantPermissionsResponse(obj: LakeFormationBatchGrantPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failures': obj.failures?.map(y => toJson_LakeFormationBatchPermissionsFailureEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationBatchRevokePermissionsRequest
 */
export interface LakeFormationBatchRevokePermissionsRequest {
  /**
   * @schema LakeFormationBatchRevokePermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationBatchRevokePermissionsRequest#Entries
   */
  readonly entries?: LakeFormationBatchPermissionsRequestEntry[];

}

/**
 * Converts an object of type 'LakeFormationBatchRevokePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationBatchRevokePermissionsRequest(obj: LakeFormationBatchRevokePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Entries': obj.entries?.map(y => toJson_LakeFormationBatchPermissionsRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationBatchRevokePermissionsResponse
 */
export interface LakeFormationBatchRevokePermissionsResponse {
  /**
   * @schema LakeFormationBatchRevokePermissionsResponse#Failures
   */
  readonly failures?: LakeFormationBatchPermissionsFailureEntry[];

}

/**
 * Converts an object of type 'LakeFormationBatchRevokePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationBatchRevokePermissionsResponse(obj: LakeFormationBatchRevokePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failures': obj.failures?.map(y => toJson_LakeFormationBatchPermissionsFailureEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationCreateLfTagRequest
 */
export interface LakeFormationCreateLfTagRequest {
  /**
   * @schema LakeFormationCreateLfTagRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationCreateLfTagRequest#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema LakeFormationCreateLfTagRequest#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'LakeFormationCreateLfTagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationCreateLfTagRequest(obj: LakeFormationCreateLfTagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationCreateLfTagResponse
 */
export interface LakeFormationCreateLfTagResponse {
}

/**
 * Converts an object of type 'LakeFormationCreateLfTagResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationCreateLfTagResponse(obj: LakeFormationCreateLfTagResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDeleteLfTagRequest
 */
export interface LakeFormationDeleteLfTagRequest {
  /**
   * @schema LakeFormationDeleteLfTagRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationDeleteLfTagRequest#TagKey
   */
  readonly tagKey?: string;

}

/**
 * Converts an object of type 'LakeFormationDeleteLfTagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDeleteLfTagRequest(obj: LakeFormationDeleteLfTagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDeleteLfTagResponse
 */
export interface LakeFormationDeleteLfTagResponse {
}

/**
 * Converts an object of type 'LakeFormationDeleteLfTagResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDeleteLfTagResponse(obj: LakeFormationDeleteLfTagResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDeregisterResourceRequest
 */
export interface LakeFormationDeregisterResourceRequest {
  /**
   * @schema LakeFormationDeregisterResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LakeFormationDeregisterResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDeregisterResourceRequest(obj: LakeFormationDeregisterResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDeregisterResourceResponse
 */
export interface LakeFormationDeregisterResourceResponse {
}

/**
 * Converts an object of type 'LakeFormationDeregisterResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDeregisterResourceResponse(obj: LakeFormationDeregisterResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDescribeResourceRequest
 */
export interface LakeFormationDescribeResourceRequest {
  /**
   * @schema LakeFormationDescribeResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LakeFormationDescribeResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDescribeResourceRequest(obj: LakeFormationDescribeResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDescribeResourceResponse
 */
export interface LakeFormationDescribeResourceResponse {
  /**
   * @schema LakeFormationDescribeResourceResponse#ResourceInfo
   */
  readonly resourceInfo?: LakeFormationResourceInfo;

}

/**
 * Converts an object of type 'LakeFormationDescribeResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDescribeResourceResponse(obj: LakeFormationDescribeResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceInfo': toJson_LakeFormationResourceInfo(obj.resourceInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetDataLakeSettingsRequest
 */
export interface LakeFormationGetDataLakeSettingsRequest {
  /**
   * @schema LakeFormationGetDataLakeSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * Converts an object of type 'LakeFormationGetDataLakeSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetDataLakeSettingsRequest(obj: LakeFormationGetDataLakeSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetDataLakeSettingsResponse
 */
export interface LakeFormationGetDataLakeSettingsResponse {
  /**
   * @schema LakeFormationGetDataLakeSettingsResponse#DataLakeSettings
   */
  readonly dataLakeSettings?: LakeFormationDataLakeSettings;

}

/**
 * Converts an object of type 'LakeFormationGetDataLakeSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetDataLakeSettingsResponse(obj: LakeFormationGetDataLakeSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataLakeSettings': toJson_LakeFormationDataLakeSettings(obj.dataLakeSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetEffectivePermissionsForPathRequest
 */
export interface LakeFormationGetEffectivePermissionsForPathRequest {
  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LakeFormationGetEffectivePermissionsForPathRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetEffectivePermissionsForPathRequest(obj: LakeFormationGetEffectivePermissionsForPathRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetEffectivePermissionsForPathResponse
 */
export interface LakeFormationGetEffectivePermissionsForPathResponse {
  /**
   * @schema LakeFormationGetEffectivePermissionsForPathResponse#Permissions
   */
  readonly permissions?: LakeFormationPrincipalResourcePermissions[];

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LakeFormationGetEffectivePermissionsForPathResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetEffectivePermissionsForPathResponse(obj: LakeFormationGetEffectivePermissionsForPathResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Permissions': obj.permissions?.map(y => toJson_LakeFormationPrincipalResourcePermissions(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetLfTagRequest
 */
export interface LakeFormationGetLfTagRequest {
  /**
   * @schema LakeFormationGetLfTagRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGetLfTagRequest#TagKey
   */
  readonly tagKey?: string;

}

/**
 * Converts an object of type 'LakeFormationGetLfTagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetLfTagRequest(obj: LakeFormationGetLfTagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetLfTagResponse
 */
export interface LakeFormationGetLfTagResponse {
  /**
   * @schema LakeFormationGetLfTagResponse#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGetLfTagResponse#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema LakeFormationGetLfTagResponse#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'LakeFormationGetLfTagResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetLfTagResponse(obj: LakeFormationGetLfTagResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetResourceLfTagsRequest
 */
export interface LakeFormationGetResourceLfTagsRequest {
  /**
   * @schema LakeFormationGetResourceLfTagsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGetResourceLfTagsRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationGetResourceLfTagsRequest#ShowAssignedLFTags
   */
  readonly showAssignedLfTags?: boolean;

}

/**
 * Converts an object of type 'LakeFormationGetResourceLfTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetResourceLfTagsRequest(obj: LakeFormationGetResourceLfTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Resource': toJson_LakeFormationResource(obj.resource),
    'ShowAssignedLFTags': obj.showAssignedLfTags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGetResourceLfTagsResponse
 */
export interface LakeFormationGetResourceLfTagsResponse {
  /**
   * @schema LakeFormationGetResourceLfTagsResponse#LFTagOnDatabase
   */
  readonly lfTagOnDatabase?: LakeFormationLfTagPair[];

  /**
   * @schema LakeFormationGetResourceLfTagsResponse#LFTagsOnTable
   */
  readonly lfTagsOnTable?: LakeFormationLfTagPair[];

  /**
   * @schema LakeFormationGetResourceLfTagsResponse#LFTagsOnColumns
   */
  readonly lfTagsOnColumns?: LakeFormationColumnLfTag[];

}

/**
 * Converts an object of type 'LakeFormationGetResourceLfTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGetResourceLfTagsResponse(obj: LakeFormationGetResourceLfTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LFTagOnDatabase': obj.lfTagOnDatabase?.map(y => toJson_LakeFormationLfTagPair(y)),
    'LFTagsOnTable': obj.lfTagsOnTable?.map(y => toJson_LakeFormationLfTagPair(y)),
    'LFTagsOnColumns': obj.lfTagsOnColumns?.map(y => toJson_LakeFormationColumnLfTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGrantPermissionsRequest
 */
export interface LakeFormationGrantPermissionsRequest {
  /**
   * @schema LakeFormationGrantPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGrantPermissionsRequest#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationGrantPermissionsRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationGrantPermissionsRequest#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema LakeFormationGrantPermissionsRequest#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * Converts an object of type 'LakeFormationGrantPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGrantPermissionsRequest(obj: LakeFormationGrantPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Principal': toJson_LakeFormationDataLakePrincipal(obj.principal),
    'Resource': toJson_LakeFormationResource(obj.resource),
    'Permissions': obj.permissions?.map(y => y),
    'PermissionsWithGrantOption': obj.permissionsWithGrantOption?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationGrantPermissionsResponse
 */
export interface LakeFormationGrantPermissionsResponse {
}

/**
 * Converts an object of type 'LakeFormationGrantPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationGrantPermissionsResponse(obj: LakeFormationGrantPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationListLfTagsRequest
 */
export interface LakeFormationListLfTagsRequest {
  /**
   * @schema LakeFormationListLfTagsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationListLfTagsRequest#ResourceShareType
   */
  readonly resourceShareType?: string;

  /**
   * @schema LakeFormationListLfTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LakeFormationListLfTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LakeFormationListLfTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationListLfTagsRequest(obj: LakeFormationListLfTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ResourceShareType': obj.resourceShareType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationListLfTagsResponse
 */
export interface LakeFormationListLfTagsResponse {
  /**
   * @schema LakeFormationListLfTagsResponse#LFTags
   */
  readonly lfTags?: LakeFormationLfTagPair[];

  /**
   * @schema LakeFormationListLfTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LakeFormationListLfTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationListLfTagsResponse(obj: LakeFormationListLfTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LFTags': obj.lfTags?.map(y => toJson_LakeFormationLfTagPair(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationListPermissionsRequest
 */
export interface LakeFormationListPermissionsRequest {
  /**
   * @schema LakeFormationListPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationListPermissionsRequest#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationListPermissionsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LakeFormationListPermissionsRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationListPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationListPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LakeFormationListPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationListPermissionsRequest(obj: LakeFormationListPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Principal': toJson_LakeFormationDataLakePrincipal(obj.principal),
    'ResourceType': obj.resourceType,
    'Resource': toJson_LakeFormationResource(obj.resource),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationListPermissionsResponse
 */
export interface LakeFormationListPermissionsResponse {
  /**
   * @schema LakeFormationListPermissionsResponse#PrincipalResourcePermissions
   */
  readonly principalResourcePermissions?: LakeFormationPrincipalResourcePermissions[];

  /**
   * @schema LakeFormationListPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LakeFormationListPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationListPermissionsResponse(obj: LakeFormationListPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrincipalResourcePermissions': obj.principalResourcePermissions?.map(y => toJson_LakeFormationPrincipalResourcePermissions(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationListResourcesRequest
 */
export interface LakeFormationListResourcesRequest {
  /**
   * @schema LakeFormationListResourcesRequest#FilterConditionList
   */
  readonly filterConditionList?: LakeFormationFilterCondition[];

  /**
   * @schema LakeFormationListResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LakeFormationListResourcesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LakeFormationListResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationListResourcesRequest(obj: LakeFormationListResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterConditionList': obj.filterConditionList?.map(y => toJson_LakeFormationFilterCondition(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationListResourcesResponse
 */
export interface LakeFormationListResourcesResponse {
  /**
   * @schema LakeFormationListResourcesResponse#ResourceInfoList
   */
  readonly resourceInfoList?: LakeFormationResourceInfo[];

  /**
   * @schema LakeFormationListResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LakeFormationListResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationListResourcesResponse(obj: LakeFormationListResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceInfoList': obj.resourceInfoList?.map(y => toJson_LakeFormationResourceInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationPutDataLakeSettingsRequest
 */
export interface LakeFormationPutDataLakeSettingsRequest {
  /**
   * @schema LakeFormationPutDataLakeSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationPutDataLakeSettingsRequest#DataLakeSettings
   */
  readonly dataLakeSettings?: LakeFormationDataLakeSettings;

}

/**
 * Converts an object of type 'LakeFormationPutDataLakeSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationPutDataLakeSettingsRequest(obj: LakeFormationPutDataLakeSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DataLakeSettings': toJson_LakeFormationDataLakeSettings(obj.dataLakeSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationPutDataLakeSettingsResponse
 */
export interface LakeFormationPutDataLakeSettingsResponse {
}

/**
 * Converts an object of type 'LakeFormationPutDataLakeSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationPutDataLakeSettingsResponse(obj: LakeFormationPutDataLakeSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationRegisterResourceRequest
 */
export interface LakeFormationRegisterResourceRequest {
  /**
   * @schema LakeFormationRegisterResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LakeFormationRegisterResourceRequest#UseServiceLinkedRole
   */
  readonly useServiceLinkedRole?: boolean;

  /**
   * @schema LakeFormationRegisterResourceRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'LakeFormationRegisterResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationRegisterResourceRequest(obj: LakeFormationRegisterResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'UseServiceLinkedRole': obj.useServiceLinkedRole,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationRegisterResourceResponse
 */
export interface LakeFormationRegisterResourceResponse {
}

/**
 * Converts an object of type 'LakeFormationRegisterResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationRegisterResourceResponse(obj: LakeFormationRegisterResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationRemoveLfTagsFromResourceRequest
 */
export interface LakeFormationRemoveLfTagsFromResourceRequest {
  /**
   * @schema LakeFormationRemoveLfTagsFromResourceRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationRemoveLfTagsFromResourceRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationRemoveLfTagsFromResourceRequest#LFTags
   */
  readonly lfTags?: LakeFormationLfTagPair[];

}

/**
 * Converts an object of type 'LakeFormationRemoveLfTagsFromResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationRemoveLfTagsFromResourceRequest(obj: LakeFormationRemoveLfTagsFromResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Resource': toJson_LakeFormationResource(obj.resource),
    'LFTags': obj.lfTags?.map(y => toJson_LakeFormationLfTagPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationRemoveLfTagsFromResourceResponse
 */
export interface LakeFormationRemoveLfTagsFromResourceResponse {
  /**
   * @schema LakeFormationRemoveLfTagsFromResourceResponse#Failures
   */
  readonly failures?: LakeFormationLfTagError[];

}

/**
 * Converts an object of type 'LakeFormationRemoveLfTagsFromResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationRemoveLfTagsFromResourceResponse(obj: LakeFormationRemoveLfTagsFromResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Failures': obj.failures?.map(y => toJson_LakeFormationLfTagError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationRevokePermissionsRequest
 */
export interface LakeFormationRevokePermissionsRequest {
  /**
   * @schema LakeFormationRevokePermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationRevokePermissionsRequest#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationRevokePermissionsRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationRevokePermissionsRequest#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema LakeFormationRevokePermissionsRequest#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * Converts an object of type 'LakeFormationRevokePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationRevokePermissionsRequest(obj: LakeFormationRevokePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Principal': toJson_LakeFormationDataLakePrincipal(obj.principal),
    'Resource': toJson_LakeFormationResource(obj.resource),
    'Permissions': obj.permissions?.map(y => y),
    'PermissionsWithGrantOption': obj.permissionsWithGrantOption?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationRevokePermissionsResponse
 */
export interface LakeFormationRevokePermissionsResponse {
}

/**
 * Converts an object of type 'LakeFormationRevokePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationRevokePermissionsResponse(obj: LakeFormationRevokePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationSearchDatabasesByLfTagsRequest
 */
export interface LakeFormationSearchDatabasesByLfTagsRequest {
  /**
   * @schema LakeFormationSearchDatabasesByLfTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationSearchDatabasesByLfTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LakeFormationSearchDatabasesByLfTagsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationSearchDatabasesByLfTagsRequest#Expression
   */
  readonly expression?: LakeFormationLfTag[];

}

/**
 * Converts an object of type 'LakeFormationSearchDatabasesByLfTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationSearchDatabasesByLfTagsRequest(obj: LakeFormationSearchDatabasesByLfTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'CatalogId': obj.catalogId,
    'Expression': obj.expression?.map(y => toJson_LakeFormationLfTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationSearchDatabasesByLfTagsResponse
 */
export interface LakeFormationSearchDatabasesByLfTagsResponse {
  /**
   * @schema LakeFormationSearchDatabasesByLfTagsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationSearchDatabasesByLfTagsResponse#DatabaseList
   */
  readonly databaseList?: LakeFormationTaggedDatabase[];

}

/**
 * Converts an object of type 'LakeFormationSearchDatabasesByLfTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationSearchDatabasesByLfTagsResponse(obj: LakeFormationSearchDatabasesByLfTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DatabaseList': obj.databaseList?.map(y => toJson_LakeFormationTaggedDatabase(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationSearchTablesByLfTagsRequest
 */
export interface LakeFormationSearchTablesByLfTagsRequest {
  /**
   * @schema LakeFormationSearchTablesByLfTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationSearchTablesByLfTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LakeFormationSearchTablesByLfTagsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationSearchTablesByLfTagsRequest#Expression
   */
  readonly expression?: LakeFormationLfTag[];

}

/**
 * Converts an object of type 'LakeFormationSearchTablesByLfTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationSearchTablesByLfTagsRequest(obj: LakeFormationSearchTablesByLfTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'CatalogId': obj.catalogId,
    'Expression': obj.expression?.map(y => toJson_LakeFormationLfTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationSearchTablesByLfTagsResponse
 */
export interface LakeFormationSearchTablesByLfTagsResponse {
  /**
   * @schema LakeFormationSearchTablesByLfTagsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationSearchTablesByLfTagsResponse#TableList
   */
  readonly tableList?: LakeFormationTaggedTable[];

}

/**
 * Converts an object of type 'LakeFormationSearchTablesByLfTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationSearchTablesByLfTagsResponse(obj: LakeFormationSearchTablesByLfTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'TableList': obj.tableList?.map(y => toJson_LakeFormationTaggedTable(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationUpdateLfTagRequest
 */
export interface LakeFormationUpdateLfTagRequest {
  /**
   * @schema LakeFormationUpdateLfTagRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationUpdateLfTagRequest#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema LakeFormationUpdateLfTagRequest#TagValuesToDelete
   */
  readonly tagValuesToDelete?: string[];

  /**
   * @schema LakeFormationUpdateLfTagRequest#TagValuesToAdd
   */
  readonly tagValuesToAdd?: string[];

}

/**
 * Converts an object of type 'LakeFormationUpdateLfTagRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationUpdateLfTagRequest(obj: LakeFormationUpdateLfTagRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
    'TagValuesToDelete': obj.tagValuesToDelete?.map(y => y),
    'TagValuesToAdd': obj.tagValuesToAdd?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationUpdateLfTagResponse
 */
export interface LakeFormationUpdateLfTagResponse {
}

/**
 * Converts an object of type 'LakeFormationUpdateLfTagResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationUpdateLfTagResponse(obj: LakeFormationUpdateLfTagResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationUpdateResourceRequest
 */
export interface LakeFormationUpdateResourceRequest {
  /**
   * @schema LakeFormationUpdateResourceRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LakeFormationUpdateResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LakeFormationUpdateResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationUpdateResourceRequest(obj: LakeFormationUpdateResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationUpdateResourceResponse
 */
export interface LakeFormationUpdateResourceResponse {
}

/**
 * Converts an object of type 'LakeFormationUpdateResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationUpdateResourceResponse(obj: LakeFormationUpdateResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationResource
 */
export interface LakeFormationResource {
  /**
   * @schema LakeFormationResource#Catalog
   */
  readonly catalog?: LakeFormationCatalogResource;

  /**
   * @schema LakeFormationResource#Database
   */
  readonly database?: LakeFormationDatabaseResource;

  /**
   * @schema LakeFormationResource#Table
   */
  readonly table?: LakeFormationTableResource;

  /**
   * @schema LakeFormationResource#TableWithColumns
   */
  readonly tableWithColumns?: LakeFormationTableWithColumnsResource;

  /**
   * @schema LakeFormationResource#DataLocation
   */
  readonly dataLocation?: LakeFormationDataLocationResource;

  /**
   * @schema LakeFormationResource#LFTag
   */
  readonly lfTag?: LakeFormationLfTagKeyResource;

  /**
   * @schema LakeFormationResource#LFTagPolicy
   */
  readonly lfTagPolicy?: LakeFormationLfTagPolicyResource;

}

/**
 * Converts an object of type 'LakeFormationResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationResource(obj: LakeFormationResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Catalog': toJson_LakeFormationCatalogResource(obj.catalog),
    'Database': toJson_LakeFormationDatabaseResource(obj.database),
    'Table': toJson_LakeFormationTableResource(obj.table),
    'TableWithColumns': toJson_LakeFormationTableWithColumnsResource(obj.tableWithColumns),
    'DataLocation': toJson_LakeFormationDataLocationResource(obj.dataLocation),
    'LFTag': toJson_LakeFormationLfTagKeyResource(obj.lfTag),
    'LFTagPolicy': toJson_LakeFormationLfTagPolicyResource(obj.lfTagPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationLfTagPair
 */
export interface LakeFormationLfTagPair {
  /**
   * @schema LakeFormationLfTagPair#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationLfTagPair#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema LakeFormationLfTagPair#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'LakeFormationLfTagPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationLfTagPair(obj: LakeFormationLfTagPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationLfTagError
 */
export interface LakeFormationLfTagError {
  /**
   * @schema LakeFormationLfTagError#LFTag
   */
  readonly lfTag?: LakeFormationLfTagPair;

  /**
   * @schema LakeFormationLfTagError#Error
   */
  readonly error?: LakeFormationErrorDetail;

}

/**
 * Converts an object of type 'LakeFormationLfTagError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationLfTagError(obj: LakeFormationLfTagError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LFTag': toJson_LakeFormationLfTagPair(obj.lfTag),
    'Error': toJson_LakeFormationErrorDetail(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationBatchPermissionsRequestEntry
 */
export interface LakeFormationBatchPermissionsRequestEntry {
  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Id
   */
  readonly id?: string;

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * Converts an object of type 'LakeFormationBatchPermissionsRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationBatchPermissionsRequestEntry(obj: LakeFormationBatchPermissionsRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Principal': toJson_LakeFormationDataLakePrincipal(obj.principal),
    'Resource': toJson_LakeFormationResource(obj.resource),
    'Permissions': obj.permissions?.map(y => y),
    'PermissionsWithGrantOption': obj.permissionsWithGrantOption?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationBatchPermissionsFailureEntry
 */
export interface LakeFormationBatchPermissionsFailureEntry {
  /**
   * @schema LakeFormationBatchPermissionsFailureEntry#RequestEntry
   */
  readonly requestEntry?: LakeFormationBatchPermissionsRequestEntry;

  /**
   * @schema LakeFormationBatchPermissionsFailureEntry#Error
   */
  readonly error?: LakeFormationErrorDetail;

}

/**
 * Converts an object of type 'LakeFormationBatchPermissionsFailureEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationBatchPermissionsFailureEntry(obj: LakeFormationBatchPermissionsFailureEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestEntry': toJson_LakeFormationBatchPermissionsRequestEntry(obj.requestEntry),
    'Error': toJson_LakeFormationErrorDetail(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationResourceInfo
 */
export interface LakeFormationResourceInfo {
  /**
   * @schema LakeFormationResourceInfo#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LakeFormationResourceInfo#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LakeFormationResourceInfo#LastModified
   */
  readonly lastModified?: string;

}

/**
 * Converts an object of type 'LakeFormationResourceInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationResourceInfo(obj: LakeFormationResourceInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'RoleArn': obj.roleArn,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDataLakeSettings
 */
export interface LakeFormationDataLakeSettings {
  /**
   * @schema LakeFormationDataLakeSettings#DataLakeAdmins
   */
  readonly dataLakeAdmins?: LakeFormationDataLakePrincipal[];

  /**
   * @schema LakeFormationDataLakeSettings#CreateDatabaseDefaultPermissions
   */
  readonly createDatabaseDefaultPermissions?: LakeFormationPrincipalPermissions[];

  /**
   * @schema LakeFormationDataLakeSettings#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: LakeFormationPrincipalPermissions[];

  /**
   * @schema LakeFormationDataLakeSettings#TrustedResourceOwners
   */
  readonly trustedResourceOwners?: string[];

}

/**
 * Converts an object of type 'LakeFormationDataLakeSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDataLakeSettings(obj: LakeFormationDataLakeSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataLakeAdmins': obj.dataLakeAdmins?.map(y => toJson_LakeFormationDataLakePrincipal(y)),
    'CreateDatabaseDefaultPermissions': obj.createDatabaseDefaultPermissions?.map(y => toJson_LakeFormationPrincipalPermissions(y)),
    'CreateTableDefaultPermissions': obj.createTableDefaultPermissions?.map(y => toJson_LakeFormationPrincipalPermissions(y)),
    'TrustedResourceOwners': obj.trustedResourceOwners?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationPrincipalResourcePermissions
 */
export interface LakeFormationPrincipalResourcePermissions {
  /**
   * @schema LakeFormationPrincipalResourcePermissions#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationPrincipalResourcePermissions#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationPrincipalResourcePermissions#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema LakeFormationPrincipalResourcePermissions#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

  /**
   * @schema LakeFormationPrincipalResourcePermissions#AdditionalDetails
   */
  readonly additionalDetails?: LakeFormationDetailsMap;

}

/**
 * Converts an object of type 'LakeFormationPrincipalResourcePermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationPrincipalResourcePermissions(obj: LakeFormationPrincipalResourcePermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principal': toJson_LakeFormationDataLakePrincipal(obj.principal),
    'Resource': toJson_LakeFormationResource(obj.resource),
    'Permissions': obj.permissions?.map(y => y),
    'PermissionsWithGrantOption': obj.permissionsWithGrantOption?.map(y => y),
    'AdditionalDetails': toJson_LakeFormationDetailsMap(obj.additionalDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationColumnLfTag
 */
export interface LakeFormationColumnLfTag {
  /**
   * @schema LakeFormationColumnLfTag#Name
   */
  readonly name?: string;

  /**
   * @schema LakeFormationColumnLfTag#LFTags
   */
  readonly lfTags?: LakeFormationLfTagPair[];

}

/**
 * Converts an object of type 'LakeFormationColumnLfTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationColumnLfTag(obj: LakeFormationColumnLfTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'LFTags': obj.lfTags?.map(y => toJson_LakeFormationLfTagPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDataLakePrincipal
 */
export interface LakeFormationDataLakePrincipal {
  /**
   * @schema LakeFormationDataLakePrincipal#DataLakePrincipalIdentifier
   */
  readonly dataLakePrincipalIdentifier?: string;

}

/**
 * Converts an object of type 'LakeFormationDataLakePrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDataLakePrincipal(obj: LakeFormationDataLakePrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataLakePrincipalIdentifier': obj.dataLakePrincipalIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationFilterCondition
 */
export interface LakeFormationFilterCondition {
  /**
   * @schema LakeFormationFilterCondition#Field
   */
  readonly field?: string;

  /**
   * @schema LakeFormationFilterCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema LakeFormationFilterCondition#StringValueList
   */
  readonly stringValueList?: string[];

}

/**
 * Converts an object of type 'LakeFormationFilterCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationFilterCondition(obj: LakeFormationFilterCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Field': obj.field,
    'ComparisonOperator': obj.comparisonOperator,
    'StringValueList': obj.stringValueList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationLfTag
 */
export interface LakeFormationLfTag {
  /**
   * @schema LakeFormationLfTag#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema LakeFormationLfTag#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'LakeFormationLfTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationLfTag(obj: LakeFormationLfTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagKey': obj.tagKey,
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationTaggedDatabase
 */
export interface LakeFormationTaggedDatabase {
  /**
   * @schema LakeFormationTaggedDatabase#Database
   */
  readonly database?: LakeFormationDatabaseResource;

  /**
   * @schema LakeFormationTaggedDatabase#LFTags
   */
  readonly lfTags?: LakeFormationLfTagPair[];

}

/**
 * Converts an object of type 'LakeFormationTaggedDatabase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationTaggedDatabase(obj: LakeFormationTaggedDatabase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Database': toJson_LakeFormationDatabaseResource(obj.database),
    'LFTags': obj.lfTags?.map(y => toJson_LakeFormationLfTagPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationTaggedTable
 */
export interface LakeFormationTaggedTable {
  /**
   * @schema LakeFormationTaggedTable#Table
   */
  readonly table?: LakeFormationTableResource;

  /**
   * @schema LakeFormationTaggedTable#LFTagOnDatabase
   */
  readonly lfTagOnDatabase?: LakeFormationLfTagPair[];

  /**
   * @schema LakeFormationTaggedTable#LFTagsOnTable
   */
  readonly lfTagsOnTable?: LakeFormationLfTagPair[];

  /**
   * @schema LakeFormationTaggedTable#LFTagsOnColumns
   */
  readonly lfTagsOnColumns?: LakeFormationColumnLfTag[];

}

/**
 * Converts an object of type 'LakeFormationTaggedTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationTaggedTable(obj: LakeFormationTaggedTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Table': toJson_LakeFormationTableResource(obj.table),
    'LFTagOnDatabase': obj.lfTagOnDatabase?.map(y => toJson_LakeFormationLfTagPair(y)),
    'LFTagsOnTable': obj.lfTagsOnTable?.map(y => toJson_LakeFormationLfTagPair(y)),
    'LFTagsOnColumns': obj.lfTagsOnColumns?.map(y => toJson_LakeFormationColumnLfTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationCatalogResource
 */
export interface LakeFormationCatalogResource {
}

/**
 * Converts an object of type 'LakeFormationCatalogResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationCatalogResource(obj: LakeFormationCatalogResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDatabaseResource
 */
export interface LakeFormationDatabaseResource {
  /**
   * @schema LakeFormationDatabaseResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationDatabaseResource#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'LakeFormationDatabaseResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDatabaseResource(obj: LakeFormationDatabaseResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationTableResource
 */
export interface LakeFormationTableResource {
  /**
   * @schema LakeFormationTableResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationTableResource#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema LakeFormationTableResource#Name
   */
  readonly name?: string;

  /**
   * @schema LakeFormationTableResource#TableWildcard
   */
  readonly tableWildcard?: LakeFormationTableWildcard;

}

/**
 * Converts an object of type 'LakeFormationTableResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationTableResource(obj: LakeFormationTableResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Name': obj.name,
    'TableWildcard': toJson_LakeFormationTableWildcard(obj.tableWildcard),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationTableWithColumnsResource
 */
export interface LakeFormationTableWithColumnsResource {
  /**
   * @schema LakeFormationTableWithColumnsResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationTableWithColumnsResource#DatabaseName
   */
  readonly databaseName?: string;

  /**
   * @schema LakeFormationTableWithColumnsResource#Name
   */
  readonly name?: string;

  /**
   * @schema LakeFormationTableWithColumnsResource#ColumnNames
   */
  readonly columnNames?: string[];

  /**
   * @schema LakeFormationTableWithColumnsResource#ColumnWildcard
   */
  readonly columnWildcard?: LakeFormationColumnWildcard;

}

/**
 * Converts an object of type 'LakeFormationTableWithColumnsResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationTableWithColumnsResource(obj: LakeFormationTableWithColumnsResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'DatabaseName': obj.databaseName,
    'Name': obj.name,
    'ColumnNames': obj.columnNames?.map(y => y),
    'ColumnWildcard': toJson_LakeFormationColumnWildcard(obj.columnWildcard),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDataLocationResource
 */
export interface LakeFormationDataLocationResource {
  /**
   * @schema LakeFormationDataLocationResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationDataLocationResource#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LakeFormationDataLocationResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDataLocationResource(obj: LakeFormationDataLocationResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationLfTagKeyResource
 */
export interface LakeFormationLfTagKeyResource {
  /**
   * @schema LakeFormationLfTagKeyResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationLfTagKeyResource#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema LakeFormationLfTagKeyResource#TagValues
   */
  readonly tagValues?: string[];

}

/**
 * Converts an object of type 'LakeFormationLfTagKeyResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationLfTagKeyResource(obj: LakeFormationLfTagKeyResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'TagKey': obj.tagKey,
    'TagValues': obj.tagValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationLfTagPolicyResource
 */
export interface LakeFormationLfTagPolicyResource {
  /**
   * @schema LakeFormationLfTagPolicyResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationLfTagPolicyResource#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LakeFormationLfTagPolicyResource#Expression
   */
  readonly expression?: LakeFormationLfTag[];

}

/**
 * Converts an object of type 'LakeFormationLfTagPolicyResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationLfTagPolicyResource(obj: LakeFormationLfTagPolicyResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CatalogId': obj.catalogId,
    'ResourceType': obj.resourceType,
    'Expression': obj.expression?.map(y => toJson_LakeFormationLfTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationErrorDetail
 */
export interface LakeFormationErrorDetail {
  /**
   * @schema LakeFormationErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LakeFormationErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'LakeFormationErrorDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationErrorDetail(obj: LakeFormationErrorDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationPrincipalPermissions
 */
export interface LakeFormationPrincipalPermissions {
  /**
   * @schema LakeFormationPrincipalPermissions#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationPrincipalPermissions#Permissions
   */
  readonly permissions?: string[];

}

/**
 * Converts an object of type 'LakeFormationPrincipalPermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationPrincipalPermissions(obj: LakeFormationPrincipalPermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principal': toJson_LakeFormationDataLakePrincipal(obj.principal),
    'Permissions': obj.permissions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationDetailsMap
 */
export interface LakeFormationDetailsMap {
  /**
   * @schema LakeFormationDetailsMap#ResourceShare
   */
  readonly resourceShare?: string[];

}

/**
 * Converts an object of type 'LakeFormationDetailsMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationDetailsMap(obj: LakeFormationDetailsMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceShare': obj.resourceShare?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationTableWildcard
 */
export interface LakeFormationTableWildcard {
}

/**
 * Converts an object of type 'LakeFormationTableWildcard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationTableWildcard(obj: LakeFormationTableWildcard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LakeFormationColumnWildcard
 */
export interface LakeFormationColumnWildcard {
  /**
   * @schema LakeFormationColumnWildcard#ExcludedColumnNames
   */
  readonly excludedColumnNames?: string[];

}

/**
 * Converts an object of type 'LakeFormationColumnWildcard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LakeFormationColumnWildcard(obj: LakeFormationColumnWildcard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExcludedColumnNames': obj.excludedColumnNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
