/**
 * @schema MediaPackageVodConfigureLogsRequest
 */
export interface MediaPackageVodConfigureLogsRequest {
  /**
   * @schema MediaPackageVodConfigureLogsRequest#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodConfigureLogsRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodConfigureLogsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodConfigureLogsRequest(obj: MediaPackageVodConfigureLogsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodConfigureLogsResponse
 */
export interface MediaPackageVodConfigureLogsResponse {
  /**
   * @schema MediaPackageVodConfigureLogsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodConfigureLogsResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodConfigureLogsResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodConfigureLogsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodConfigureLogsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodConfigureLogsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodConfigureLogsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodConfigureLogsResponse(obj: MediaPackageVodConfigureLogsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'DomainName': obj.domainName,
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCreateAssetRequest
 */
export interface MediaPackageVodCreateAssetRequest {
  /**
   * @schema MediaPackageVodCreateAssetRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodCreateAssetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodCreateAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCreateAssetRequest(obj: MediaPackageVodCreateAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'PackagingGroupId': obj.packagingGroupId,
    'ResourceId': obj.resourceId,
    'SourceArn': obj.sourceArn,
    'SourceRoleArn': obj.sourceRoleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCreateAssetResponse
 */
export interface MediaPackageVodCreateAssetResponse {
  /**
   * @schema MediaPackageVodCreateAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaPackageVodEgressEndpoint[];

  /**
   * @schema MediaPackageVodCreateAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodCreateAssetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodCreateAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCreateAssetResponse(obj: MediaPackageVodCreateAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaPackageVodEgressEndpoint(y)),
    'Id': obj.id,
    'PackagingGroupId': obj.packagingGroupId,
    'ResourceId': obj.resourceId,
    'SourceArn': obj.sourceArn,
    'SourceRoleArn': obj.sourceRoleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCreatePackagingConfigurationRequest
 */
export interface MediaPackageVodCreatePackagingConfigurationRequest {
  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodCreatePackagingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCreatePackagingConfigurationRequest(obj: MediaPackageVodCreatePackagingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CmafPackage': toJson_MediaPackageVodCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageVodDashPackage(obj.dashPackage),
    'HlsPackage': toJson_MediaPackageVodHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'MssPackage': toJson_MediaPackageVodMssPackage(obj.mssPackage),
    'PackagingGroupId': obj.packagingGroupId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCreatePackagingConfigurationResponse
 */
export interface MediaPackageVodCreatePackagingConfigurationResponse {
  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodCreatePackagingConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodCreatePackagingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCreatePackagingConfigurationResponse(obj: MediaPackageVodCreatePackagingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CmafPackage': toJson_MediaPackageVodCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageVodDashPackage(obj.dashPackage),
    'HlsPackage': toJson_MediaPackageVodHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'MssPackage': toJson_MediaPackageVodMssPackage(obj.mssPackage),
    'PackagingGroupId': obj.packagingGroupId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCreatePackagingGroupRequest
 */
export interface MediaPackageVodCreatePackagingGroupRequest {
  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodCreatePackagingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCreatePackagingGroupRequest(obj: MediaPackageVodCreatePackagingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCreatePackagingGroupResponse
 */
export interface MediaPackageVodCreatePackagingGroupResponse {
  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodCreatePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodCreatePackagingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCreatePackagingGroupResponse(obj: MediaPackageVodCreatePackagingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'DomainName': obj.domainName,
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDeleteAssetRequest
 */
export interface MediaPackageVodDeleteAssetRequest {
  /**
   * @schema MediaPackageVodDeleteAssetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDeleteAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDeleteAssetRequest(obj: MediaPackageVodDeleteAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDeleteAssetResponse
 */
export interface MediaPackageVodDeleteAssetResponse {
}

/**
 * Converts an object of type 'MediaPackageVodDeleteAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDeleteAssetResponse(obj: MediaPackageVodDeleteAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDeletePackagingConfigurationRequest
 */
export interface MediaPackageVodDeletePackagingConfigurationRequest {
  /**
   * @schema MediaPackageVodDeletePackagingConfigurationRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDeletePackagingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDeletePackagingConfigurationRequest(obj: MediaPackageVodDeletePackagingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDeletePackagingConfigurationResponse
 */
export interface MediaPackageVodDeletePackagingConfigurationResponse {
}

/**
 * Converts an object of type 'MediaPackageVodDeletePackagingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDeletePackagingConfigurationResponse(obj: MediaPackageVodDeletePackagingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDeletePackagingGroupRequest
 */
export interface MediaPackageVodDeletePackagingGroupRequest {
  /**
   * @schema MediaPackageVodDeletePackagingGroupRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDeletePackagingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDeletePackagingGroupRequest(obj: MediaPackageVodDeletePackagingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDeletePackagingGroupResponse
 */
export interface MediaPackageVodDeletePackagingGroupResponse {
}

/**
 * Converts an object of type 'MediaPackageVodDeletePackagingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDeletePackagingGroupResponse(obj: MediaPackageVodDeletePackagingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDescribeAssetRequest
 */
export interface MediaPackageVodDescribeAssetRequest {
  /**
   * @schema MediaPackageVodDescribeAssetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDescribeAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDescribeAssetRequest(obj: MediaPackageVodDescribeAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDescribeAssetResponse
 */
export interface MediaPackageVodDescribeAssetResponse {
  /**
   * @schema MediaPackageVodDescribeAssetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#EgressEndpoints
   */
  readonly egressEndpoints?: MediaPackageVodEgressEndpoint[];

  /**
   * @schema MediaPackageVodDescribeAssetResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodDescribeAssetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodDescribeAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDescribeAssetResponse(obj: MediaPackageVodDescribeAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'EgressEndpoints': obj.egressEndpoints?.map(y => toJson_MediaPackageVodEgressEndpoint(y)),
    'Id': obj.id,
    'PackagingGroupId': obj.packagingGroupId,
    'ResourceId': obj.resourceId,
    'SourceArn': obj.sourceArn,
    'SourceRoleArn': obj.sourceRoleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDescribePackagingConfigurationRequest
 */
export interface MediaPackageVodDescribePackagingConfigurationRequest {
  /**
   * @schema MediaPackageVodDescribePackagingConfigurationRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDescribePackagingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDescribePackagingConfigurationRequest(obj: MediaPackageVodDescribePackagingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDescribePackagingConfigurationResponse
 */
export interface MediaPackageVodDescribePackagingConfigurationResponse {
  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodDescribePackagingConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodDescribePackagingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDescribePackagingConfigurationResponse(obj: MediaPackageVodDescribePackagingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CmafPackage': toJson_MediaPackageVodCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageVodDashPackage(obj.dashPackage),
    'HlsPackage': toJson_MediaPackageVodHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'MssPackage': toJson_MediaPackageVodMssPackage(obj.mssPackage),
    'PackagingGroupId': obj.packagingGroupId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDescribePackagingGroupRequest
 */
export interface MediaPackageVodDescribePackagingGroupRequest {
  /**
   * @schema MediaPackageVodDescribePackagingGroupRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDescribePackagingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDescribePackagingGroupRequest(obj: MediaPackageVodDescribePackagingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDescribePackagingGroupResponse
 */
export interface MediaPackageVodDescribePackagingGroupResponse {
  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodDescribePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodDescribePackagingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDescribePackagingGroupResponse(obj: MediaPackageVodDescribePackagingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'DomainName': obj.domainName,
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListAssetsRequest
 */
export interface MediaPackageVodListAssetsRequest {
  /**
   * @schema MediaPackageVodListAssetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageVodListAssetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListAssetsRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

}

/**
 * Converts an object of type 'MediaPackageVodListAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListAssetsRequest(obj: MediaPackageVodListAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'PackagingGroupId': obj.packagingGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListAssetsResponse
 */
export interface MediaPackageVodListAssetsResponse {
  /**
   * @schema MediaPackageVodListAssetsResponse#Assets
   */
  readonly assets?: MediaPackageVodAssetShallow[];

  /**
   * @schema MediaPackageVodListAssetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageVodListAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListAssetsResponse(obj: MediaPackageVodListAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Assets': obj.assets?.map(y => toJson_MediaPackageVodAssetShallow(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListPackagingConfigurationsRequest
 */
export interface MediaPackageVodListPackagingConfigurationsRequest {
  /**
   * @schema MediaPackageVodListPackagingConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageVodListPackagingConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListPackagingConfigurationsRequest#PackagingGroupId
   */
  readonly packagingGroupId?: string;

}

/**
 * Converts an object of type 'MediaPackageVodListPackagingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListPackagingConfigurationsRequest(obj: MediaPackageVodListPackagingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'PackagingGroupId': obj.packagingGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListPackagingConfigurationsResponse
 */
export interface MediaPackageVodListPackagingConfigurationsResponse {
  /**
   * @schema MediaPackageVodListPackagingConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListPackagingConfigurationsResponse#PackagingConfigurations
   */
  readonly packagingConfigurations?: MediaPackageVodPackagingConfiguration[];

}

/**
 * Converts an object of type 'MediaPackageVodListPackagingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListPackagingConfigurationsResponse(obj: MediaPackageVodListPackagingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PackagingConfigurations': obj.packagingConfigurations?.map(y => toJson_MediaPackageVodPackagingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListPackagingGroupsRequest
 */
export interface MediaPackageVodListPackagingGroupsRequest {
  /**
   * @schema MediaPackageVodListPackagingGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageVodListPackagingGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageVodListPackagingGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListPackagingGroupsRequest(obj: MediaPackageVodListPackagingGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageVodListPackagingGroupsResponse
 */
export interface MediaPackageVodListPackagingGroupsResponse {
  /**
   * @schema MediaPackageVodListPackagingGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageVodListPackagingGroupsResponse#PackagingGroups
   */
  readonly packagingGroups?: MediaPackageVodPackagingGroup[];

}

/**
 * Converts an object of type 'MediaPackageVodListPackagingGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListPackagingGroupsResponse(obj: MediaPackageVodListPackagingGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PackagingGroups': obj.packagingGroups?.map(y => toJson_MediaPackageVodPackagingGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListTagsForResourceRequest
 */
export interface MediaPackageVodListTagsForResourceRequest {
  /**
   * @schema MediaPackageVodListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaPackageVodListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListTagsForResourceRequest(obj: MediaPackageVodListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodListTagsForResourceResponse
 */
export interface MediaPackageVodListTagsForResourceResponse {
  /**
   * @schema MediaPackageVodListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodListTagsForResourceResponse(obj: MediaPackageVodListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodTagResourceRequest
 */
export interface MediaPackageVodTagResourceRequest {
  /**
   * @schema MediaPackageVodTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaPackageVodTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodTagResourceRequest(obj: MediaPackageVodTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageVodUntagResourceRequest
 */
export interface MediaPackageVodUntagResourceRequest {
  /**
   * @schema MediaPackageVodUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaPackageVodUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaPackageVodUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodUntagResourceRequest(obj: MediaPackageVodUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageVodUpdatePackagingGroupRequest
 */
export interface MediaPackageVodUpdatePackagingGroupRequest {
  /**
   * @schema MediaPackageVodUpdatePackagingGroupRequest#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageVodUpdatePackagingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodUpdatePackagingGroupRequest(obj: MediaPackageVodUpdatePackagingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodUpdatePackagingGroupResponse
 */
export interface MediaPackageVodUpdatePackagingGroupResponse {
  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodUpdatePackagingGroupResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodUpdatePackagingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodUpdatePackagingGroupResponse(obj: MediaPackageVodUpdatePackagingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'DomainName': obj.domainName,
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodEgressAccessLogs
 */
export interface MediaPackageVodEgressAccessLogs {
  /**
   * @schema MediaPackageVodEgressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * Converts an object of type 'MediaPackageVodEgressAccessLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodEgressAccessLogs(obj: MediaPackageVodEgressAccessLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogGroupName': obj.logGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodAuthorization
 */
export interface MediaPackageVodAuthorization {
  /**
   * @schema MediaPackageVodAuthorization#CdnIdentifierSecret
   */
  readonly cdnIdentifierSecret?: string;

  /**
   * @schema MediaPackageVodAuthorization#SecretsRoleArn
   */
  readonly secretsRoleArn?: string;

}

/**
 * Converts an object of type 'MediaPackageVodAuthorization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodAuthorization(obj: MediaPackageVodAuthorization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CdnIdentifierSecret': obj.cdnIdentifierSecret,
    'SecretsRoleArn': obj.secretsRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodEgressEndpoint
 */
export interface MediaPackageVodEgressEndpoint {
  /**
   * @schema MediaPackageVodEgressEndpoint#PackagingConfigurationId
   */
  readonly packagingConfigurationId?: string;

  /**
   * @schema MediaPackageVodEgressEndpoint#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaPackageVodEgressEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodEgressEndpoint(obj: MediaPackageVodEgressEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackagingConfigurationId': obj.packagingConfigurationId,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCmafPackage
 */
export interface MediaPackageVodCmafPackage {
  /**
   * @schema MediaPackageVodCmafPackage#Encryption
   */
  readonly encryption?: MediaPackageVodCmafEncryption;

  /**
   * @schema MediaPackageVodCmafPackage#HlsManifests
   */
  readonly hlsManifests?: MediaPackageVodHlsManifest[];

  /**
   * @schema MediaPackageVodCmafPackage#IncludeEncoderConfigurationInSegments
   */
  readonly includeEncoderConfigurationInSegments?: boolean;

  /**
   * @schema MediaPackageVodCmafPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

}

/**
 * Converts an object of type 'MediaPackageVodCmafPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCmafPackage(obj: MediaPackageVodCmafPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encryption': toJson_MediaPackageVodCmafEncryption(obj.encryption),
    'HlsManifests': obj.hlsManifests?.map(y => toJson_MediaPackageVodHlsManifest(y)),
    'IncludeEncoderConfigurationInSegments': obj.includeEncoderConfigurationInSegments,
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDashPackage
 */
export interface MediaPackageVodDashPackage {
  /**
   * @schema MediaPackageVodDashPackage#DashManifests
   */
  readonly dashManifests?: MediaPackageVodDashManifest[];

  /**
   * @schema MediaPackageVodDashPackage#Encryption
   */
  readonly encryption?: MediaPackageVodDashEncryption;

  /**
   * @schema MediaPackageVodDashPackage#IncludeEncoderConfigurationInSegments
   */
  readonly includeEncoderConfigurationInSegments?: boolean;

  /**
   * @schema MediaPackageVodDashPackage#PeriodTriggers
   */
  readonly periodTriggers?: string[];

  /**
   * @schema MediaPackageVodDashPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageVodDashPackage#SegmentTemplateFormat
   */
  readonly segmentTemplateFormat?: string;

}

/**
 * Converts an object of type 'MediaPackageVodDashPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDashPackage(obj: MediaPackageVodDashPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashManifests': obj.dashManifests?.map(y => toJson_MediaPackageVodDashManifest(y)),
    'Encryption': toJson_MediaPackageVodDashEncryption(obj.encryption),
    'IncludeEncoderConfigurationInSegments': obj.includeEncoderConfigurationInSegments,
    'PeriodTriggers': obj.periodTriggers?.map(y => y),
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'SegmentTemplateFormat': obj.segmentTemplateFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodHlsPackage
 */
export interface MediaPackageVodHlsPackage {
  /**
   * @schema MediaPackageVodHlsPackage#Encryption
   */
  readonly encryption?: MediaPackageVodHlsEncryption;

  /**
   * @schema MediaPackageVodHlsPackage#HlsManifests
   */
  readonly hlsManifests?: MediaPackageVodHlsManifest[];

  /**
   * @schema MediaPackageVodHlsPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageVodHlsPackage#UseAudioRenditionGroup
   */
  readonly useAudioRenditionGroup?: boolean;

}

/**
 * Converts an object of type 'MediaPackageVodHlsPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodHlsPackage(obj: MediaPackageVodHlsPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encryption': toJson_MediaPackageVodHlsEncryption(obj.encryption),
    'HlsManifests': obj.hlsManifests?.map(y => toJson_MediaPackageVodHlsManifest(y)),
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'UseAudioRenditionGroup': obj.useAudioRenditionGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodMssPackage
 */
export interface MediaPackageVodMssPackage {
  /**
   * @schema MediaPackageVodMssPackage#Encryption
   */
  readonly encryption?: MediaPackageVodMssEncryption;

  /**
   * @schema MediaPackageVodMssPackage#MssManifests
   */
  readonly mssManifests?: MediaPackageVodMssManifest[];

  /**
   * @schema MediaPackageVodMssPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

}

/**
 * Converts an object of type 'MediaPackageVodMssPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodMssPackage(obj: MediaPackageVodMssPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encryption': toJson_MediaPackageVodMssEncryption(obj.encryption),
    'MssManifests': obj.mssManifests?.map(y => toJson_MediaPackageVodMssManifest(y)),
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodAssetShallow
 */
export interface MediaPackageVodAssetShallow {
  /**
   * @schema MediaPackageVodAssetShallow#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodAssetShallow#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageVodAssetShallow#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodAssetShallow#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodAssetShallow#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageVodAssetShallow#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaPackageVodAssetShallow#SourceRoleArn
   */
  readonly sourceRoleArn?: string;

  /**
   * @schema MediaPackageVodAssetShallow#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodAssetShallow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodAssetShallow(obj: MediaPackageVodAssetShallow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'Id': obj.id,
    'PackagingGroupId': obj.packagingGroupId,
    'ResourceId': obj.resourceId,
    'SourceArn': obj.sourceArn,
    'SourceRoleArn': obj.sourceRoleArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodPackagingConfiguration
 */
export interface MediaPackageVodPackagingConfiguration {
  /**
   * @schema MediaPackageVodPackagingConfiguration#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodPackagingConfiguration#CmafPackage
   */
  readonly cmafPackage?: MediaPackageVodCmafPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#DashPackage
   */
  readonly dashPackage?: MediaPackageVodDashPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#HlsPackage
   */
  readonly hlsPackage?: MediaPackageVodHlsPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodPackagingConfiguration#MssPackage
   */
  readonly mssPackage?: MediaPackageVodMssPackage;

  /**
   * @schema MediaPackageVodPackagingConfiguration#PackagingGroupId
   */
  readonly packagingGroupId?: string;

  /**
   * @schema MediaPackageVodPackagingConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodPackagingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodPackagingConfiguration(obj: MediaPackageVodPackagingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CmafPackage': toJson_MediaPackageVodCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageVodDashPackage(obj.dashPackage),
    'HlsPackage': toJson_MediaPackageVodHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'MssPackage': toJson_MediaPackageVodMssPackage(obj.mssPackage),
    'PackagingGroupId': obj.packagingGroupId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodPackagingGroup
 */
export interface MediaPackageVodPackagingGroup {
  /**
   * @schema MediaPackageVodPackagingGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageVodPackagingGroup#Authorization
   */
  readonly authorization?: MediaPackageVodAuthorization;

  /**
   * @schema MediaPackageVodPackagingGroup#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema MediaPackageVodPackagingGroup#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageVodEgressAccessLogs;

  /**
   * @schema MediaPackageVodPackagingGroup#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageVodPackagingGroup#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageVodPackagingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodPackagingGroup(obj: MediaPackageVodPackagingGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageVodAuthorization(obj.authorization),
    'DomainName': obj.domainName,
    'EgressAccessLogs': toJson_MediaPackageVodEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodCmafEncryption
 */
export interface MediaPackageVodCmafEncryption {
  /**
   * @schema MediaPackageVodCmafEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaPackageVodCmafEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageVodSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageVodCmafEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodCmafEncryption(obj: MediaPackageVodCmafEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantInitializationVector': obj.constantInitializationVector,
    'SpekeKeyProvider': toJson_MediaPackageVodSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodHlsManifest
 */
export interface MediaPackageVodHlsManifest {
  /**
   * @schema MediaPackageVodHlsManifest#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageVodHlsManifest#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageVodHlsManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageVodHlsManifest#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema MediaPackageVodHlsManifest#RepeatExtXKey
   */
  readonly repeatExtXKey?: boolean;

  /**
   * @schema MediaPackageVodHlsManifest#StreamSelection
   */
  readonly streamSelection?: MediaPackageVodStreamSelection;

}

/**
 * Converts an object of type 'MediaPackageVodHlsManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodHlsManifest(obj: MediaPackageVodHlsManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers,
    'IncludeIframeOnlyStream': obj.includeIframeOnlyStream,
    'ManifestName': obj.manifestName,
    'ProgramDateTimeIntervalSeconds': obj.programDateTimeIntervalSeconds,
    'RepeatExtXKey': obj.repeatExtXKey,
    'StreamSelection': toJson_MediaPackageVodStreamSelection(obj.streamSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDashManifest
 */
export interface MediaPackageVodDashManifest {
  /**
   * @schema MediaPackageVodDashManifest#ManifestLayout
   */
  readonly manifestLayout?: string;

  /**
   * @schema MediaPackageVodDashManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageVodDashManifest#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema MediaPackageVodDashManifest#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaPackageVodDashManifest#StreamSelection
   */
  readonly streamSelection?: MediaPackageVodStreamSelection;

}

/**
 * Converts an object of type 'MediaPackageVodDashManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDashManifest(obj: MediaPackageVodDashManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestLayout': obj.manifestLayout,
    'ManifestName': obj.manifestName,
    'MinBufferTimeSeconds': obj.minBufferTimeSeconds,
    'Profile': obj.profile,
    'StreamSelection': toJson_MediaPackageVodStreamSelection(obj.streamSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodDashEncryption
 */
export interface MediaPackageVodDashEncryption {
  /**
   * @schema MediaPackageVodDashEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageVodSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageVodDashEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodDashEncryption(obj: MediaPackageVodDashEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SpekeKeyProvider': toJson_MediaPackageVodSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodHlsEncryption
 */
export interface MediaPackageVodHlsEncryption {
  /**
   * @schema MediaPackageVodHlsEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaPackageVodHlsEncryption#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaPackageVodHlsEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageVodSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageVodHlsEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodHlsEncryption(obj: MediaPackageVodHlsEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantInitializationVector': obj.constantInitializationVector,
    'EncryptionMethod': obj.encryptionMethod,
    'SpekeKeyProvider': toJson_MediaPackageVodSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodMssEncryption
 */
export interface MediaPackageVodMssEncryption {
  /**
   * @schema MediaPackageVodMssEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageVodSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageVodMssEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodMssEncryption(obj: MediaPackageVodMssEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SpekeKeyProvider': toJson_MediaPackageVodSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodMssManifest
 */
export interface MediaPackageVodMssManifest {
  /**
   * @schema MediaPackageVodMssManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageVodMssManifest#StreamSelection
   */
  readonly streamSelection?: MediaPackageVodStreamSelection;

}

/**
 * Converts an object of type 'MediaPackageVodMssManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodMssManifest(obj: MediaPackageVodMssManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestName': obj.manifestName,
    'StreamSelection': toJson_MediaPackageVodStreamSelection(obj.streamSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodSpekeKeyProvider
 */
export interface MediaPackageVodSpekeKeyProvider {
  /**
   * @schema MediaPackageVodSpekeKeyProvider#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaPackageVodSpekeKeyProvider#SystemIds
   */
  readonly systemIds?: string[];

  /**
   * @schema MediaPackageVodSpekeKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaPackageVodSpekeKeyProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodSpekeKeyProvider(obj: MediaPackageVodSpekeKeyProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'SystemIds': obj.systemIds?.map(y => y),
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageVodStreamSelection
 */
export interface MediaPackageVodStreamSelection {
  /**
   * @schema MediaPackageVodStreamSelection#MaxVideoBitsPerSecond
   */
  readonly maxVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageVodStreamSelection#MinVideoBitsPerSecond
   */
  readonly minVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageVodStreamSelection#StreamOrder
   */
  readonly streamOrder?: string;

}

/**
 * Converts an object of type 'MediaPackageVodStreamSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageVodStreamSelection(obj: MediaPackageVodStreamSelection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxVideoBitsPerSecond': obj.maxVideoBitsPerSecond,
    'MinVideoBitsPerSecond': obj.minVideoBitsPerSecond,
    'StreamOrder': obj.streamOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
