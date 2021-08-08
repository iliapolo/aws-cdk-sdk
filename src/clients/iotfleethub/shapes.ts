/**
 * @schema IoTFleetHubCreateApplicationRequest
 */
export interface IoTFleetHubCreateApplicationRequest {
  /**
   * @schema IoTFleetHubCreateApplicationRequest#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema IoTFleetHubCreateApplicationRequest#applicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema IoTFleetHubCreateApplicationRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTFleetHubCreateApplicationRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTFleetHubCreateApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTFleetHubCreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubCreateApplicationRequest(obj: IoTFleetHubCreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationName': obj.applicationName,
    'applicationDescription': obj.applicationDescription,
    'clientToken': obj.clientToken,
    'roleArn': obj.roleArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubCreateApplicationResponse
 */
export interface IoTFleetHubCreateApplicationResponse {
  /**
   * @schema IoTFleetHubCreateApplicationResponse#applicationId
   */
  readonly applicationId: string;

  /**
   * @schema IoTFleetHubCreateApplicationResponse#applicationArn
   */
  readonly applicationArn: string;

}

/**
 * Converts an object of type 'IoTFleetHubCreateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubCreateApplicationResponse(obj: IoTFleetHubCreateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
    'applicationArn': obj.applicationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubDeleteApplicationRequest
 */
export interface IoTFleetHubDeleteApplicationRequest {
  /**
   * @schema IoTFleetHubDeleteApplicationRequest#applicationId
   */
  readonly applicationId: string;

  /**
   * @schema IoTFleetHubDeleteApplicationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTFleetHubDeleteApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubDeleteApplicationRequest(obj: IoTFleetHubDeleteApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubDeleteApplicationResponse
 */
export interface IoTFleetHubDeleteApplicationResponse {
}

/**
 * Converts an object of type 'IoTFleetHubDeleteApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubDeleteApplicationResponse(obj: IoTFleetHubDeleteApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubDescribeApplicationRequest
 */
export interface IoTFleetHubDescribeApplicationRequest {
  /**
   * @schema IoTFleetHubDescribeApplicationRequest#applicationId
   */
  readonly applicationId: string;

}

/**
 * Converts an object of type 'IoTFleetHubDescribeApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubDescribeApplicationRequest(obj: IoTFleetHubDescribeApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubDescribeApplicationResponse
 */
export interface IoTFleetHubDescribeApplicationResponse {
  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationId
   */
  readonly applicationId: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationArn
   */
  readonly applicationArn: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationUrl
   */
  readonly applicationUrl: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationState
   */
  readonly applicationState: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationCreationDate
   */
  readonly applicationCreationDate: number;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#applicationLastUpdateDate
   */
  readonly applicationLastUpdateDate: number;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#ssoClientId
   */
  readonly ssoClientId?: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema IoTFleetHubDescribeApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTFleetHubDescribeApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubDescribeApplicationResponse(obj: IoTFleetHubDescribeApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
    'applicationArn': obj.applicationArn,
    'applicationName': obj.applicationName,
    'applicationDescription': obj.applicationDescription,
    'applicationUrl': obj.applicationUrl,
    'applicationState': obj.applicationState,
    'applicationCreationDate': obj.applicationCreationDate,
    'applicationLastUpdateDate': obj.applicationLastUpdateDate,
    'roleArn': obj.roleArn,
    'ssoClientId': obj.ssoClientId,
    'errorMessage': obj.errorMessage,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubListApplicationsRequest
 */
export interface IoTFleetHubListApplicationsRequest {
  /**
   * @schema IoTFleetHubListApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTFleetHubListApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubListApplicationsRequest(obj: IoTFleetHubListApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubListApplicationsResponse
 */
export interface IoTFleetHubListApplicationsResponse {
  /**
   * @schema IoTFleetHubListApplicationsResponse#applicationSummaries
   */
  readonly applicationSummaries?: IoTFleetHubApplicationSummary[];

  /**
   * @schema IoTFleetHubListApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTFleetHubListApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubListApplicationsResponse(obj: IoTFleetHubListApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationSummaries': obj.applicationSummaries?.map(y => toJson_IoTFleetHubApplicationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubListTagsForResourceRequest
 */
export interface IoTFleetHubListTagsForResourceRequest {
  /**
   * @schema IoTFleetHubListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'IoTFleetHubListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubListTagsForResourceRequest(obj: IoTFleetHubListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubListTagsForResourceResponse
 */
export interface IoTFleetHubListTagsForResourceResponse {
  /**
   * @schema IoTFleetHubListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTFleetHubListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubListTagsForResourceResponse(obj: IoTFleetHubListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubTagResourceRequest
 */
export interface IoTFleetHubTagResourceRequest {
  /**
   * @schema IoTFleetHubTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTFleetHubTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTFleetHubTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubTagResourceRequest(obj: IoTFleetHubTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTFleetHubTagResourceResponse
 */
export interface IoTFleetHubTagResourceResponse {
}

/**
 * Converts an object of type 'IoTFleetHubTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubTagResourceResponse(obj: IoTFleetHubTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubUntagResourceRequest
 */
export interface IoTFleetHubUntagResourceRequest {
  /**
   * @schema IoTFleetHubUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTFleetHubUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IoTFleetHubUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubUntagResourceRequest(obj: IoTFleetHubUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTFleetHubUntagResourceResponse
 */
export interface IoTFleetHubUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTFleetHubUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubUntagResourceResponse(obj: IoTFleetHubUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubUpdateApplicationRequest
 */
export interface IoTFleetHubUpdateApplicationRequest {
  /**
   * @schema IoTFleetHubUpdateApplicationRequest#applicationId
   */
  readonly applicationId: string;

  /**
   * @schema IoTFleetHubUpdateApplicationRequest#applicationName
   */
  readonly applicationName?: string;

  /**
   * @schema IoTFleetHubUpdateApplicationRequest#applicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema IoTFleetHubUpdateApplicationRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTFleetHubUpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubUpdateApplicationRequest(obj: IoTFleetHubUpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
    'applicationName': obj.applicationName,
    'applicationDescription': obj.applicationDescription,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubUpdateApplicationResponse
 */
export interface IoTFleetHubUpdateApplicationResponse {
}

/**
 * Converts an object of type 'IoTFleetHubUpdateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubUpdateApplicationResponse(obj: IoTFleetHubUpdateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTFleetHubApplicationSummary
 */
export interface IoTFleetHubApplicationSummary {
  /**
   * @schema IoTFleetHubApplicationSummary#applicationId
   */
  readonly applicationId: string;

  /**
   * @schema IoTFleetHubApplicationSummary#applicationName
   */
  readonly applicationName: string;

  /**
   * @schema IoTFleetHubApplicationSummary#applicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema IoTFleetHubApplicationSummary#applicationUrl
   */
  readonly applicationUrl: string;

  /**
   * @schema IoTFleetHubApplicationSummary#applicationCreationDate
   */
  readonly applicationCreationDate?: number;

  /**
   * @schema IoTFleetHubApplicationSummary#applicationLastUpdateDate
   */
  readonly applicationLastUpdateDate?: number;

  /**
   * @schema IoTFleetHubApplicationSummary#applicationState
   */
  readonly applicationState?: string;

}

/**
 * Converts an object of type 'IoTFleetHubApplicationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTFleetHubApplicationSummary(obj: IoTFleetHubApplicationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationId': obj.applicationId,
    'applicationName': obj.applicationName,
    'applicationDescription': obj.applicationDescription,
    'applicationUrl': obj.applicationUrl,
    'applicationCreationDate': obj.applicationCreationDate,
    'applicationLastUpdateDate': obj.applicationLastUpdateDate,
    'applicationState': obj.applicationState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
