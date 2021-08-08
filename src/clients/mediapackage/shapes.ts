/**
 * @schema MediaPackageConfigureLogsRequest
 */
export interface MediaPackageConfigureLogsRequest {
  /**
   * @schema MediaPackageConfigureLogsRequest#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageConfigureLogsRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageConfigureLogsRequest#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

}

/**
 * Converts an object of type 'MediaPackageConfigureLogsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageConfigureLogsRequest(obj: MediaPackageConfigureLogsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageConfigureLogsResponse
 */
export interface MediaPackageConfigureLogsResponse {
  /**
   * @schema MediaPackageConfigureLogsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageConfigureLogsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageConfigureLogsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageConfigureLogsResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageConfigureLogsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageConfigureLogsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageConfigureLogsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageConfigureLogsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageConfigureLogsResponse(obj: MediaPackageConfigureLogsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCreateChannelRequest
 */
export interface MediaPackageCreateChannelRequest {
  /**
   * @schema MediaPackageCreateChannelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateChannelRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateChannelRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCreateChannelRequest(obj: MediaPackageCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Id': obj.id,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCreateChannelResponse
 */
export interface MediaPackageCreateChannelResponse {
  /**
   * @schema MediaPackageCreateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageCreateChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageCreateChannelResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageCreateChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageCreateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCreateChannelResponse(obj: MediaPackageCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCreateHarvestJobRequest
 */
export interface MediaPackageCreateHarvestJobRequest {
  /**
   * @schema MediaPackageCreateHarvestJobRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageCreateHarvestJobRequest#StartTime
   */
  readonly startTime?: string;

}

/**
 * Converts an object of type 'MediaPackageCreateHarvestJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCreateHarvestJobRequest(obj: MediaPackageCreateHarvestJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndTime': obj.endTime,
    'Id': obj.id,
    'OriginEndpointId': obj.originEndpointId,
    'S3Destination': toJson_MediaPackageS3Destination(obj.s3Destination),
    'StartTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCreateHarvestJobResponse
 */
export interface MediaPackageCreateHarvestJobResponse {
  /**
   * @schema MediaPackageCreateHarvestJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaPackageCreateHarvestJobResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaPackageCreateHarvestJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCreateHarvestJobResponse(obj: MediaPackageCreateHarvestJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelId': obj.channelId,
    'CreatedAt': obj.createdAt,
    'EndTime': obj.endTime,
    'Id': obj.id,
    'OriginEndpointId': obj.originEndpointId,
    'S3Destination': toJson_MediaPackageS3Destination(obj.s3Destination),
    'StartTime': obj.startTime,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCreateOriginEndpointRequest
 */
export interface MediaPackageCreateOriginEndpointRequest {
  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackageCreateOrUpdateParameters;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointRequest#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * Converts an object of type 'MediaPackageCreateOriginEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCreateOriginEndpointRequest(obj: MediaPackageCreateOriginEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Authorization': toJson_MediaPackageAuthorization(obj.authorization),
    'ChannelId': obj.channelId,
    'CmafPackage': toJson_MediaPackageCmafPackageCreateOrUpdateParameters(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageDashPackage(obj.dashPackage),
    'Description': obj.description,
    'HlsPackage': toJson_MediaPackageHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'ManifestName': obj.manifestName,
    'MssPackage': toJson_MediaPackageMssPackage(obj.mssPackage),
    'Origination': obj.origination,
    'StartoverWindowSeconds': obj.startoverWindowSeconds,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TimeDelaySeconds': obj.timeDelaySeconds,
    'Whitelist': obj.whitelist?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCreateOriginEndpointResponse
 */
export interface MediaPackageCreateOriginEndpointResponse {
  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageCreateOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * Converts an object of type 'MediaPackageCreateOriginEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCreateOriginEndpointResponse(obj: MediaPackageCreateOriginEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageAuthorization(obj.authorization),
    'ChannelId': obj.channelId,
    'CmafPackage': toJson_MediaPackageCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageDashPackage(obj.dashPackage),
    'Description': obj.description,
    'HlsPackage': toJson_MediaPackageHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'ManifestName': obj.manifestName,
    'MssPackage': toJson_MediaPackageMssPackage(obj.mssPackage),
    'Origination': obj.origination,
    'StartoverWindowSeconds': obj.startoverWindowSeconds,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TimeDelaySeconds': obj.timeDelaySeconds,
    'Url': obj.url,
    'Whitelist': obj.whitelist?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDeleteChannelRequest
 */
export interface MediaPackageDeleteChannelRequest {
  /**
   * @schema MediaPackageDeleteChannelRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDeleteChannelRequest(obj: MediaPackageDeleteChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDeleteChannelResponse
 */
export interface MediaPackageDeleteChannelResponse {
}

/**
 * Converts an object of type 'MediaPackageDeleteChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDeleteChannelResponse(obj: MediaPackageDeleteChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDeleteOriginEndpointRequest
 */
export interface MediaPackageDeleteOriginEndpointRequest {
  /**
   * @schema MediaPackageDeleteOriginEndpointRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageDeleteOriginEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDeleteOriginEndpointRequest(obj: MediaPackageDeleteOriginEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDeleteOriginEndpointResponse
 */
export interface MediaPackageDeleteOriginEndpointResponse {
}

/**
 * Converts an object of type 'MediaPackageDeleteOriginEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDeleteOriginEndpointResponse(obj: MediaPackageDeleteOriginEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDescribeChannelRequest
 */
export interface MediaPackageDescribeChannelRequest {
  /**
   * @schema MediaPackageDescribeChannelRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageDescribeChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDescribeChannelRequest(obj: MediaPackageDescribeChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDescribeChannelResponse
 */
export interface MediaPackageDescribeChannelResponse {
  /**
   * @schema MediaPackageDescribeChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageDescribeChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageDescribeChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageDescribeChannelResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageDescribeChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageDescribeChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageDescribeChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageDescribeChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDescribeChannelResponse(obj: MediaPackageDescribeChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDescribeHarvestJobRequest
 */
export interface MediaPackageDescribeHarvestJobRequest {
  /**
   * @schema MediaPackageDescribeHarvestJobRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageDescribeHarvestJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDescribeHarvestJobRequest(obj: MediaPackageDescribeHarvestJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDescribeHarvestJobResponse
 */
export interface MediaPackageDescribeHarvestJobResponse {
  /**
   * @schema MediaPackageDescribeHarvestJobResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaPackageDescribeHarvestJobResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaPackageDescribeHarvestJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDescribeHarvestJobResponse(obj: MediaPackageDescribeHarvestJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelId': obj.channelId,
    'CreatedAt': obj.createdAt,
    'EndTime': obj.endTime,
    'Id': obj.id,
    'OriginEndpointId': obj.originEndpointId,
    'S3Destination': toJson_MediaPackageS3Destination(obj.s3Destination),
    'StartTime': obj.startTime,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDescribeOriginEndpointRequest
 */
export interface MediaPackageDescribeOriginEndpointRequest {
  /**
   * @schema MediaPackageDescribeOriginEndpointRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageDescribeOriginEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDescribeOriginEndpointRequest(obj: MediaPackageDescribeOriginEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDescribeOriginEndpointResponse
 */
export interface MediaPackageDescribeOriginEndpointResponse {
  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageDescribeOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * Converts an object of type 'MediaPackageDescribeOriginEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDescribeOriginEndpointResponse(obj: MediaPackageDescribeOriginEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageAuthorization(obj.authorization),
    'ChannelId': obj.channelId,
    'CmafPackage': toJson_MediaPackageCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageDashPackage(obj.dashPackage),
    'Description': obj.description,
    'HlsPackage': toJson_MediaPackageHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'ManifestName': obj.manifestName,
    'MssPackage': toJson_MediaPackageMssPackage(obj.mssPackage),
    'Origination': obj.origination,
    'StartoverWindowSeconds': obj.startoverWindowSeconds,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TimeDelaySeconds': obj.timeDelaySeconds,
    'Url': obj.url,
    'Whitelist': obj.whitelist?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListChannelsRequest
 */
export interface MediaPackageListChannelsRequest {
  /**
   * @schema MediaPackageListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListChannelsRequest(obj: MediaPackageListChannelsRequest | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageListChannelsResponse
 */
export interface MediaPackageListChannelsResponse {
  /**
   * @schema MediaPackageListChannelsResponse#Channels
   */
  readonly channels?: MediaPackageChannel[];

  /**
   * @schema MediaPackageListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListChannelsResponse(obj: MediaPackageListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_MediaPackageChannel(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListHarvestJobsRequest
 */
export interface MediaPackageListHarvestJobsRequest {
  /**
   * @schema MediaPackageListHarvestJobsRequest#IncludeChannelId
   */
  readonly includeChannelId?: string;

  /**
   * @schema MediaPackageListHarvestJobsRequest#IncludeStatus
   */
  readonly includeStatus?: string;

  /**
   * @schema MediaPackageListHarvestJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageListHarvestJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageListHarvestJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListHarvestJobsRequest(obj: MediaPackageListHarvestJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IncludeChannelId': obj.includeChannelId,
    'IncludeStatus': obj.includeStatus,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListHarvestJobsResponse
 */
export interface MediaPackageListHarvestJobsResponse {
  /**
   * @schema MediaPackageListHarvestJobsResponse#HarvestJobs
   */
  readonly harvestJobs?: MediaPackageHarvestJob[];

  /**
   * @schema MediaPackageListHarvestJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageListHarvestJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListHarvestJobsResponse(obj: MediaPackageListHarvestJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HarvestJobs': obj.harvestJobs?.map(y => toJson_MediaPackageHarvestJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListOriginEndpointsRequest
 */
export interface MediaPackageListOriginEndpointsRequest {
  /**
   * @schema MediaPackageListOriginEndpointsRequest#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageListOriginEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaPackageListOriginEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaPackageListOriginEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListOriginEndpointsRequest(obj: MediaPackageListOriginEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelId': obj.channelId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListOriginEndpointsResponse
 */
export interface MediaPackageListOriginEndpointsResponse {
  /**
   * @schema MediaPackageListOriginEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaPackageListOriginEndpointsResponse#OriginEndpoints
   */
  readonly originEndpoints?: MediaPackageOriginEndpoint[];

}

/**
 * Converts an object of type 'MediaPackageListOriginEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListOriginEndpointsResponse(obj: MediaPackageListOriginEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'OriginEndpoints': obj.originEndpoints?.map(y => toJson_MediaPackageOriginEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListTagsForResourceRequest
 */
export interface MediaPackageListTagsForResourceRequest {
  /**
   * @schema MediaPackageListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaPackageListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListTagsForResourceRequest(obj: MediaPackageListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageListTagsForResourceResponse
 */
export interface MediaPackageListTagsForResourceResponse {
  /**
   * @schema MediaPackageListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageListTagsForResourceResponse(obj: MediaPackageListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageRotateChannelCredentialsRequest
 */
export interface MediaPackageRotateChannelCredentialsRequest {
  /**
   * @schema MediaPackageRotateChannelCredentialsRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageRotateChannelCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageRotateChannelCredentialsRequest(obj: MediaPackageRotateChannelCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageRotateChannelCredentialsResponse
 */
export interface MediaPackageRotateChannelCredentialsResponse {
  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageRotateChannelCredentialsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageRotateChannelCredentialsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageRotateChannelCredentialsResponse(obj: MediaPackageRotateChannelCredentialsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageRotateIngestEndpointCredentialsRequest
 */
export interface MediaPackageRotateIngestEndpointCredentialsRequest {
  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsRequest#IngestEndpointId
   */
  readonly ingestEndpointId?: string;

}

/**
 * Converts an object of type 'MediaPackageRotateIngestEndpointCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageRotateIngestEndpointCredentialsRequest(obj: MediaPackageRotateIngestEndpointCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IngestEndpointId': obj.ingestEndpointId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageRotateIngestEndpointCredentialsResponse
 */
export interface MediaPackageRotateIngestEndpointCredentialsResponse {
  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageRotateIngestEndpointCredentialsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageRotateIngestEndpointCredentialsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageRotateIngestEndpointCredentialsResponse(obj: MediaPackageRotateIngestEndpointCredentialsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageTagResourceRequest
 */
export interface MediaPackageTagResourceRequest {
  /**
   * @schema MediaPackageTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaPackageTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageTagResourceRequest(obj: MediaPackageTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageUntagResourceRequest
 */
export interface MediaPackageUntagResourceRequest {
  /**
   * @schema MediaPackageUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaPackageUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaPackageUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageUntagResourceRequest(obj: MediaPackageUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageUpdateChannelRequest
 */
export interface MediaPackageUpdateChannelRequest {
  /**
   * @schema MediaPackageUpdateChannelRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateChannelRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaPackageUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageUpdateChannelRequest(obj: MediaPackageUpdateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageUpdateChannelResponse
 */
export interface MediaPackageUpdateChannelResponse {
  /**
   * @schema MediaPackageUpdateChannelResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageUpdateChannelResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateChannelResponse#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageUpdateChannelResponse#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageUpdateChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageUpdateChannelResponse#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageUpdateChannelResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageUpdateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageUpdateChannelResponse(obj: MediaPackageUpdateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageUpdateOriginEndpointRequest
 */
export interface MediaPackageUpdateOriginEndpointRequest {
  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackageCreateOrUpdateParameters;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointRequest#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * Converts an object of type 'MediaPackageUpdateOriginEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageUpdateOriginEndpointRequest(obj: MediaPackageUpdateOriginEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Authorization': toJson_MediaPackageAuthorization(obj.authorization),
    'CmafPackage': toJson_MediaPackageCmafPackageCreateOrUpdateParameters(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageDashPackage(obj.dashPackage),
    'Description': obj.description,
    'HlsPackage': toJson_MediaPackageHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'ManifestName': obj.manifestName,
    'MssPackage': toJson_MediaPackageMssPackage(obj.mssPackage),
    'Origination': obj.origination,
    'StartoverWindowSeconds': obj.startoverWindowSeconds,
    'TimeDelaySeconds': obj.timeDelaySeconds,
    'Whitelist': obj.whitelist?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageUpdateOriginEndpointResponse
 */
export interface MediaPackageUpdateOriginEndpointResponse {
  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageUpdateOriginEndpointResponse#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * Converts an object of type 'MediaPackageUpdateOriginEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageUpdateOriginEndpointResponse(obj: MediaPackageUpdateOriginEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageAuthorization(obj.authorization),
    'ChannelId': obj.channelId,
    'CmafPackage': toJson_MediaPackageCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageDashPackage(obj.dashPackage),
    'Description': obj.description,
    'HlsPackage': toJson_MediaPackageHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'ManifestName': obj.manifestName,
    'MssPackage': toJson_MediaPackageMssPackage(obj.mssPackage),
    'Origination': obj.origination,
    'StartoverWindowSeconds': obj.startoverWindowSeconds,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TimeDelaySeconds': obj.timeDelaySeconds,
    'Url': obj.url,
    'Whitelist': obj.whitelist?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageEgressAccessLogs
 */
export interface MediaPackageEgressAccessLogs {
  /**
   * @schema MediaPackageEgressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * Converts an object of type 'MediaPackageEgressAccessLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageEgressAccessLogs(obj: MediaPackageEgressAccessLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogGroupName': obj.logGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageIngressAccessLogs
 */
export interface MediaPackageIngressAccessLogs {
  /**
   * @schema MediaPackageIngressAccessLogs#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * Converts an object of type 'MediaPackageIngressAccessLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageIngressAccessLogs(obj: MediaPackageIngressAccessLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogGroupName': obj.logGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageHlsIngest
 */
export interface MediaPackageHlsIngest {
  /**
   * @schema MediaPackageHlsIngest#IngestEndpoints
   */
  readonly ingestEndpoints?: MediaPackageIngestEndpoint[];

}

/**
 * Converts an object of type 'MediaPackageHlsIngest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageHlsIngest(obj: MediaPackageHlsIngest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IngestEndpoints': obj.ingestEndpoints?.map(y => toJson_MediaPackageIngestEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageS3Destination
 */
export interface MediaPackageS3Destination {
  /**
   * @schema MediaPackageS3Destination#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema MediaPackageS3Destination#ManifestKey
   */
  readonly manifestKey?: string;

  /**
   * @schema MediaPackageS3Destination#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'MediaPackageS3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageS3Destination(obj: MediaPackageS3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'ManifestKey': obj.manifestKey,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageAuthorization
 */
export interface MediaPackageAuthorization {
  /**
   * @schema MediaPackageAuthorization#CdnIdentifierSecret
   */
  readonly cdnIdentifierSecret?: string;

  /**
   * @schema MediaPackageAuthorization#SecretsRoleArn
   */
  readonly secretsRoleArn?: string;

}

/**
 * Converts an object of type 'MediaPackageAuthorization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageAuthorization(obj: MediaPackageAuthorization | undefined): Record<string, any> | undefined {
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
 * @schema MediaPackageCmafPackageCreateOrUpdateParameters
 */
export interface MediaPackageCmafPackageCreateOrUpdateParameters {
  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#Encryption
   */
  readonly encryption?: MediaPackageCmafEncryption;

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#HlsManifests
   */
  readonly hlsManifests?: MediaPackageHlsManifestCreateOrUpdateParameters[];

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#SegmentPrefix
   */
  readonly segmentPrefix?: string;

  /**
   * @schema MediaPackageCmafPackageCreateOrUpdateParameters#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

}

/**
 * Converts an object of type 'MediaPackageCmafPackageCreateOrUpdateParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCmafPackageCreateOrUpdateParameters(obj: MediaPackageCmafPackageCreateOrUpdateParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encryption': toJson_MediaPackageCmafEncryption(obj.encryption),
    'HlsManifests': obj.hlsManifests?.map(y => toJson_MediaPackageHlsManifestCreateOrUpdateParameters(y)),
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'SegmentPrefix': obj.segmentPrefix,
    'StreamSelection': toJson_MediaPackageStreamSelection(obj.streamSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageDashPackage
 */
export interface MediaPackageDashPackage {
  /**
   * @schema MediaPackageDashPackage#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema MediaPackageDashPackage#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema MediaPackageDashPackage#Encryption
   */
  readonly encryption?: MediaPackageDashEncryption;

  /**
   * @schema MediaPackageDashPackage#ManifestLayout
   */
  readonly manifestLayout?: string;

  /**
   * @schema MediaPackageDashPackage#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#MinBufferTimeSeconds
   */
  readonly minBufferTimeSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#MinUpdatePeriodSeconds
   */
  readonly minUpdatePeriodSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#PeriodTriggers
   */
  readonly periodTriggers?: string[];

  /**
   * @schema MediaPackageDashPackage#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaPackageDashPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageDashPackage#SegmentTemplateFormat
   */
  readonly segmentTemplateFormat?: string;

  /**
   * @schema MediaPackageDashPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

  /**
   * @schema MediaPackageDashPackage#SuggestedPresentationDelaySeconds
   */
  readonly suggestedPresentationDelaySeconds?: number;

  /**
   * @schema MediaPackageDashPackage#UtcTiming
   */
  readonly utcTiming?: string;

  /**
   * @schema MediaPackageDashPackage#UtcTimingUri
   */
  readonly utcTimingUri?: string;

}

/**
 * Converts an object of type 'MediaPackageDashPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDashPackage(obj: MediaPackageDashPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdTriggers': obj.adTriggers?.map(y => y),
    'AdsOnDeliveryRestrictions': obj.adsOnDeliveryRestrictions,
    'Encryption': toJson_MediaPackageDashEncryption(obj.encryption),
    'ManifestLayout': obj.manifestLayout,
    'ManifestWindowSeconds': obj.manifestWindowSeconds,
    'MinBufferTimeSeconds': obj.minBufferTimeSeconds,
    'MinUpdatePeriodSeconds': obj.minUpdatePeriodSeconds,
    'PeriodTriggers': obj.periodTriggers?.map(y => y),
    'Profile': obj.profile,
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'SegmentTemplateFormat': obj.segmentTemplateFormat,
    'StreamSelection': toJson_MediaPackageStreamSelection(obj.streamSelection),
    'SuggestedPresentationDelaySeconds': obj.suggestedPresentationDelaySeconds,
    'UtcTiming': obj.utcTiming,
    'UtcTimingUri': obj.utcTimingUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageHlsPackage
 */
export interface MediaPackageHlsPackage {
  /**
   * @schema MediaPackageHlsPackage#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageHlsPackage#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema MediaPackageHlsPackage#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema MediaPackageHlsPackage#Encryption
   */
  readonly encryption?: MediaPackageHlsEncryption;

  /**
   * @schema MediaPackageHlsPackage#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageHlsPackage#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema MediaPackageHlsPackage#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema MediaPackageHlsPackage#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema MediaPackageHlsPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageHlsPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

  /**
   * @schema MediaPackageHlsPackage#UseAudioRenditionGroup
   */
  readonly useAudioRenditionGroup?: boolean;

}

/**
 * Converts an object of type 'MediaPackageHlsPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageHlsPackage(obj: MediaPackageHlsPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers,
    'AdTriggers': obj.adTriggers?.map(y => y),
    'AdsOnDeliveryRestrictions': obj.adsOnDeliveryRestrictions,
    'Encryption': toJson_MediaPackageHlsEncryption(obj.encryption),
    'IncludeIframeOnlyStream': obj.includeIframeOnlyStream,
    'PlaylistType': obj.playlistType,
    'PlaylistWindowSeconds': obj.playlistWindowSeconds,
    'ProgramDateTimeIntervalSeconds': obj.programDateTimeIntervalSeconds,
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'StreamSelection': toJson_MediaPackageStreamSelection(obj.streamSelection),
    'UseAudioRenditionGroup': obj.useAudioRenditionGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageMssPackage
 */
export interface MediaPackageMssPackage {
  /**
   * @schema MediaPackageMssPackage#Encryption
   */
  readonly encryption?: MediaPackageMssEncryption;

  /**
   * @schema MediaPackageMssPackage#ManifestWindowSeconds
   */
  readonly manifestWindowSeconds?: number;

  /**
   * @schema MediaPackageMssPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageMssPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

}

/**
 * Converts an object of type 'MediaPackageMssPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageMssPackage(obj: MediaPackageMssPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encryption': toJson_MediaPackageMssEncryption(obj.encryption),
    'ManifestWindowSeconds': obj.manifestWindowSeconds,
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'StreamSelection': toJson_MediaPackageStreamSelection(obj.streamSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCmafPackage
 */
export interface MediaPackageCmafPackage {
  /**
   * @schema MediaPackageCmafPackage#Encryption
   */
  readonly encryption?: MediaPackageCmafEncryption;

  /**
   * @schema MediaPackageCmafPackage#HlsManifests
   */
  readonly hlsManifests?: MediaPackageHlsManifest[];

  /**
   * @schema MediaPackageCmafPackage#SegmentDurationSeconds
   */
  readonly segmentDurationSeconds?: number;

  /**
   * @schema MediaPackageCmafPackage#SegmentPrefix
   */
  readonly segmentPrefix?: string;

  /**
   * @schema MediaPackageCmafPackage#StreamSelection
   */
  readonly streamSelection?: MediaPackageStreamSelection;

}

/**
 * Converts an object of type 'MediaPackageCmafPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCmafPackage(obj: MediaPackageCmafPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Encryption': toJson_MediaPackageCmafEncryption(obj.encryption),
    'HlsManifests': obj.hlsManifests?.map(y => toJson_MediaPackageHlsManifest(y)),
    'SegmentDurationSeconds': obj.segmentDurationSeconds,
    'SegmentPrefix': obj.segmentPrefix,
    'StreamSelection': toJson_MediaPackageStreamSelection(obj.streamSelection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageChannel
 */
export interface MediaPackageChannel {
  /**
   * @schema MediaPackageChannel#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageChannel#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageChannel#EgressAccessLogs
   */
  readonly egressAccessLogs?: MediaPackageEgressAccessLogs;

  /**
   * @schema MediaPackageChannel#HlsIngest
   */
  readonly hlsIngest?: MediaPackageHlsIngest;

  /**
   * @schema MediaPackageChannel#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageChannel#IngressAccessLogs
   */
  readonly ingressAccessLogs?: MediaPackageIngressAccessLogs;

  /**
   * @schema MediaPackageChannel#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaPackageChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageChannel(obj: MediaPackageChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'EgressAccessLogs': toJson_MediaPackageEgressAccessLogs(obj.egressAccessLogs),
    'HlsIngest': toJson_MediaPackageHlsIngest(obj.hlsIngest),
    'Id': obj.id,
    'IngressAccessLogs': toJson_MediaPackageIngressAccessLogs(obj.ingressAccessLogs),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageHarvestJob
 */
export interface MediaPackageHarvestJob {
  /**
   * @schema MediaPackageHarvestJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageHarvestJob#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageHarvestJob#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaPackageHarvestJob#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MediaPackageHarvestJob#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageHarvestJob#OriginEndpointId
   */
  readonly originEndpointId?: string;

  /**
   * @schema MediaPackageHarvestJob#S3Destination
   */
  readonly s3Destination?: MediaPackageS3Destination;

  /**
   * @schema MediaPackageHarvestJob#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaPackageHarvestJob#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaPackageHarvestJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageHarvestJob(obj: MediaPackageHarvestJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'ChannelId': obj.channelId,
    'CreatedAt': obj.createdAt,
    'EndTime': obj.endTime,
    'Id': obj.id,
    'OriginEndpointId': obj.originEndpointId,
    'S3Destination': toJson_MediaPackageS3Destination(obj.s3Destination),
    'StartTime': obj.startTime,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageOriginEndpoint
 */
export interface MediaPackageOriginEndpoint {
  /**
   * @schema MediaPackageOriginEndpoint#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaPackageOriginEndpoint#Authorization
   */
  readonly authorization?: MediaPackageAuthorization;

  /**
   * @schema MediaPackageOriginEndpoint#ChannelId
   */
  readonly channelId?: string;

  /**
   * @schema MediaPackageOriginEndpoint#CmafPackage
   */
  readonly cmafPackage?: MediaPackageCmafPackage;

  /**
   * @schema MediaPackageOriginEndpoint#DashPackage
   */
  readonly dashPackage?: MediaPackageDashPackage;

  /**
   * @schema MediaPackageOriginEndpoint#Description
   */
  readonly description?: string;

  /**
   * @schema MediaPackageOriginEndpoint#HlsPackage
   */
  readonly hlsPackage?: MediaPackageHlsPackage;

  /**
   * @schema MediaPackageOriginEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageOriginEndpoint#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageOriginEndpoint#MssPackage
   */
  readonly mssPackage?: MediaPackageMssPackage;

  /**
   * @schema MediaPackageOriginEndpoint#Origination
   */
  readonly origination?: string;

  /**
   * @schema MediaPackageOriginEndpoint#StartoverWindowSeconds
   */
  readonly startoverWindowSeconds?: number;

  /**
   * @schema MediaPackageOriginEndpoint#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaPackageOriginEndpoint#TimeDelaySeconds
   */
  readonly timeDelaySeconds?: number;

  /**
   * @schema MediaPackageOriginEndpoint#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageOriginEndpoint#Whitelist
   */
  readonly whitelist?: string[];

}

/**
 * Converts an object of type 'MediaPackageOriginEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageOriginEndpoint(obj: MediaPackageOriginEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Authorization': toJson_MediaPackageAuthorization(obj.authorization),
    'ChannelId': obj.channelId,
    'CmafPackage': toJson_MediaPackageCmafPackage(obj.cmafPackage),
    'DashPackage': toJson_MediaPackageDashPackage(obj.dashPackage),
    'Description': obj.description,
    'HlsPackage': toJson_MediaPackageHlsPackage(obj.hlsPackage),
    'Id': obj.id,
    'ManifestName': obj.manifestName,
    'MssPackage': toJson_MediaPackageMssPackage(obj.mssPackage),
    'Origination': obj.origination,
    'StartoverWindowSeconds': obj.startoverWindowSeconds,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TimeDelaySeconds': obj.timeDelaySeconds,
    'Url': obj.url,
    'Whitelist': obj.whitelist?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageIngestEndpoint
 */
export interface MediaPackageIngestEndpoint {
  /**
   * @schema MediaPackageIngestEndpoint#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageIngestEndpoint#Password
   */
  readonly password?: string;

  /**
   * @schema MediaPackageIngestEndpoint#Url
   */
  readonly url?: string;

  /**
   * @schema MediaPackageIngestEndpoint#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MediaPackageIngestEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageIngestEndpoint(obj: MediaPackageIngestEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Password': obj.password,
    'Url': obj.url,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageCmafEncryption
 */
export interface MediaPackageCmafEncryption {
  /**
   * @schema MediaPackageCmafEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaPackageCmafEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema MediaPackageCmafEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageCmafEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageCmafEncryption(obj: MediaPackageCmafEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantInitializationVector': obj.constantInitializationVector,
    'KeyRotationIntervalSeconds': obj.keyRotationIntervalSeconds,
    'SpekeKeyProvider': toJson_MediaPackageSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageHlsManifestCreateOrUpdateParameters
 */
export interface MediaPackageHlsManifestCreateOrUpdateParameters {
  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#AdTriggers
   */
  readonly adTriggers?: string[];

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#AdsOnDeliveryRestrictions
   */
  readonly adsOnDeliveryRestrictions?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema MediaPackageHlsManifestCreateOrUpdateParameters#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

}

/**
 * Converts an object of type 'MediaPackageHlsManifestCreateOrUpdateParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageHlsManifestCreateOrUpdateParameters(obj: MediaPackageHlsManifestCreateOrUpdateParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers,
    'AdTriggers': obj.adTriggers?.map(y => y),
    'AdsOnDeliveryRestrictions': obj.adsOnDeliveryRestrictions,
    'Id': obj.id,
    'IncludeIframeOnlyStream': obj.includeIframeOnlyStream,
    'ManifestName': obj.manifestName,
    'PlaylistType': obj.playlistType,
    'PlaylistWindowSeconds': obj.playlistWindowSeconds,
    'ProgramDateTimeIntervalSeconds': obj.programDateTimeIntervalSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageStreamSelection
 */
export interface MediaPackageStreamSelection {
  /**
   * @schema MediaPackageStreamSelection#MaxVideoBitsPerSecond
   */
  readonly maxVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageStreamSelection#MinVideoBitsPerSecond
   */
  readonly minVideoBitsPerSecond?: number;

  /**
   * @schema MediaPackageStreamSelection#StreamOrder
   */
  readonly streamOrder?: string;

}

/**
 * Converts an object of type 'MediaPackageStreamSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageStreamSelection(obj: MediaPackageStreamSelection | undefined): Record<string, any> | undefined {
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

/**
 * @schema MediaPackageDashEncryption
 */
export interface MediaPackageDashEncryption {
  /**
   * @schema MediaPackageDashEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema MediaPackageDashEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageDashEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageDashEncryption(obj: MediaPackageDashEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyRotationIntervalSeconds': obj.keyRotationIntervalSeconds,
    'SpekeKeyProvider': toJson_MediaPackageSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageHlsEncryption
 */
export interface MediaPackageHlsEncryption {
  /**
   * @schema MediaPackageHlsEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaPackageHlsEncryption#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaPackageHlsEncryption#KeyRotationIntervalSeconds
   */
  readonly keyRotationIntervalSeconds?: number;

  /**
   * @schema MediaPackageHlsEncryption#RepeatExtXKey
   */
  readonly repeatExtXKey?: boolean;

  /**
   * @schema MediaPackageHlsEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageHlsEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageHlsEncryption(obj: MediaPackageHlsEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantInitializationVector': obj.constantInitializationVector,
    'EncryptionMethod': obj.encryptionMethod,
    'KeyRotationIntervalSeconds': obj.keyRotationIntervalSeconds,
    'RepeatExtXKey': obj.repeatExtXKey,
    'SpekeKeyProvider': toJson_MediaPackageSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageMssEncryption
 */
export interface MediaPackageMssEncryption {
  /**
   * @schema MediaPackageMssEncryption#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaPackageSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaPackageMssEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageMssEncryption(obj: MediaPackageMssEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SpekeKeyProvider': toJson_MediaPackageSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageHlsManifest
 */
export interface MediaPackageHlsManifest {
  /**
   * @schema MediaPackageHlsManifest#AdMarkers
   */
  readonly adMarkers?: string;

  /**
   * @schema MediaPackageHlsManifest#Id
   */
  readonly id?: string;

  /**
   * @schema MediaPackageHlsManifest#IncludeIframeOnlyStream
   */
  readonly includeIframeOnlyStream?: boolean;

  /**
   * @schema MediaPackageHlsManifest#ManifestName
   */
  readonly manifestName?: string;

  /**
   * @schema MediaPackageHlsManifest#PlaylistType
   */
  readonly playlistType?: string;

  /**
   * @schema MediaPackageHlsManifest#PlaylistWindowSeconds
   */
  readonly playlistWindowSeconds?: number;

  /**
   * @schema MediaPackageHlsManifest#ProgramDateTimeIntervalSeconds
   */
  readonly programDateTimeIntervalSeconds?: number;

  /**
   * @schema MediaPackageHlsManifest#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaPackageHlsManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageHlsManifest(obj: MediaPackageHlsManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers,
    'Id': obj.id,
    'IncludeIframeOnlyStream': obj.includeIframeOnlyStream,
    'ManifestName': obj.manifestName,
    'PlaylistType': obj.playlistType,
    'PlaylistWindowSeconds': obj.playlistWindowSeconds,
    'ProgramDateTimeIntervalSeconds': obj.programDateTimeIntervalSeconds,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageSpekeKeyProvider
 */
export interface MediaPackageSpekeKeyProvider {
  /**
   * @schema MediaPackageSpekeKeyProvider#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema MediaPackageSpekeKeyProvider#EncryptionContractConfiguration
   */
  readonly encryptionContractConfiguration?: MediaPackageEncryptionContractConfiguration;

  /**
   * @schema MediaPackageSpekeKeyProvider#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaPackageSpekeKeyProvider#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaPackageSpekeKeyProvider#SystemIds
   */
  readonly systemIds?: string[];

  /**
   * @schema MediaPackageSpekeKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaPackageSpekeKeyProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageSpekeKeyProvider(obj: MediaPackageSpekeKeyProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'EncryptionContractConfiguration': toJson_MediaPackageEncryptionContractConfiguration(obj.encryptionContractConfiguration),
    'ResourceId': obj.resourceId,
    'RoleArn': obj.roleArn,
    'SystemIds': obj.systemIds?.map(y => y),
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaPackageEncryptionContractConfiguration
 */
export interface MediaPackageEncryptionContractConfiguration {
  /**
   * @schema MediaPackageEncryptionContractConfiguration#PresetSpeke20Audio
   */
  readonly presetSpeke20Audio?: string;

  /**
   * @schema MediaPackageEncryptionContractConfiguration#PresetSpeke20Video
   */
  readonly presetSpeke20Video?: string;

}

/**
 * Converts an object of type 'MediaPackageEncryptionContractConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaPackageEncryptionContractConfiguration(obj: MediaPackageEncryptionContractConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PresetSpeke20Audio': obj.presetSpeke20Audio,
    'PresetSpeke20Video': obj.presetSpeke20Video,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
