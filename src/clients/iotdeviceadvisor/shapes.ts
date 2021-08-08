/**
 * @schema IotDeviceAdvisorCreateSuiteDefinitionRequest
 */
export interface IotDeviceAdvisorCreateSuiteDefinitionRequest {
  /**
   * @schema IotDeviceAdvisorCreateSuiteDefinitionRequest#suiteDefinitionConfiguration
   */
  readonly suiteDefinitionConfiguration?: IotDeviceAdvisorSuiteDefinitionConfiguration;

  /**
   * @schema IotDeviceAdvisorCreateSuiteDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IotDeviceAdvisorCreateSuiteDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorCreateSuiteDefinitionRequest(obj: IotDeviceAdvisorCreateSuiteDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionConfiguration': toJson_IotDeviceAdvisorSuiteDefinitionConfiguration(obj.suiteDefinitionConfiguration),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorCreateSuiteDefinitionResponse
 */
export interface IotDeviceAdvisorCreateSuiteDefinitionResponse {
  /**
   * @schema IotDeviceAdvisorCreateSuiteDefinitionResponse#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorCreateSuiteDefinitionResponse#suiteDefinitionArn
   */
  readonly suiteDefinitionArn?: string;

  /**
   * @schema IotDeviceAdvisorCreateSuiteDefinitionResponse#suiteDefinitionName
   */
  readonly suiteDefinitionName?: string;

  /**
   * @schema IotDeviceAdvisorCreateSuiteDefinitionResponse#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorCreateSuiteDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorCreateSuiteDefinitionResponse(obj: IotDeviceAdvisorCreateSuiteDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionArn': obj.suiteDefinitionArn,
    'suiteDefinitionName': obj.suiteDefinitionName,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorDeleteSuiteDefinitionRequest
 */
export interface IotDeviceAdvisorDeleteSuiteDefinitionRequest {
  /**
   * @schema IotDeviceAdvisorDeleteSuiteDefinitionRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorDeleteSuiteDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorDeleteSuiteDefinitionRequest(obj: IotDeviceAdvisorDeleteSuiteDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorDeleteSuiteDefinitionResponse
 */
export interface IotDeviceAdvisorDeleteSuiteDefinitionResponse {
}

/**
 * Converts an object of type 'IotDeviceAdvisorDeleteSuiteDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorDeleteSuiteDefinitionResponse(obj: IotDeviceAdvisorDeleteSuiteDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGetSuiteDefinitionRequest
 */
export interface IotDeviceAdvisorGetSuiteDefinitionRequest {
  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionRequest#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorGetSuiteDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGetSuiteDefinitionRequest(obj: IotDeviceAdvisorGetSuiteDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGetSuiteDefinitionResponse
 */
export interface IotDeviceAdvisorGetSuiteDefinitionResponse {
  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#suiteDefinitionArn
   */
  readonly suiteDefinitionArn?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#latestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#suiteDefinitionConfiguration
   */
  readonly suiteDefinitionConfiguration?: IotDeviceAdvisorSuiteDefinitionConfiguration;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#lastModifiedAt
   */
  readonly lastModifiedAt?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IotDeviceAdvisorGetSuiteDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGetSuiteDefinitionResponse(obj: IotDeviceAdvisorGetSuiteDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionArn': obj.suiteDefinitionArn,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
    'latestVersion': obj.latestVersion,
    'suiteDefinitionConfiguration': toJson_IotDeviceAdvisorSuiteDefinitionConfiguration(obj.suiteDefinitionConfiguration),
    'createdAt': obj.createdAt,
    'lastModifiedAt': obj.lastModifiedAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGetSuiteRunRequest
 */
export interface IotDeviceAdvisorGetSuiteRunRequest {
  /**
   * @schema IotDeviceAdvisorGetSuiteRunRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunRequest#suiteRunId
   */
  readonly suiteRunId: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorGetSuiteRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGetSuiteRunRequest(obj: IotDeviceAdvisorGetSuiteRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteRunId': obj.suiteRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGetSuiteRunResponse
 */
export interface IotDeviceAdvisorGetSuiteRunResponse {
  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#suiteRunId
   */
  readonly suiteRunId?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#suiteRunArn
   */
  readonly suiteRunArn?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#suiteRunConfiguration
   */
  readonly suiteRunConfiguration?: IotDeviceAdvisorSuiteRunConfiguration;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#testResult
   */
  readonly testResult?: IotDeviceAdvisorTestResult;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#status
   */
  readonly status?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#errorReason
   */
  readonly errorReason?: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IotDeviceAdvisorGetSuiteRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGetSuiteRunResponse(obj: IotDeviceAdvisorGetSuiteRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
    'suiteRunId': obj.suiteRunId,
    'suiteRunArn': obj.suiteRunArn,
    'suiteRunConfiguration': toJson_IotDeviceAdvisorSuiteRunConfiguration(obj.suiteRunConfiguration),
    'testResult': toJson_IotDeviceAdvisorTestResult(obj.testResult),
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'status': obj.status,
    'errorReason': obj.errorReason,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGetSuiteRunReportRequest
 */
export interface IotDeviceAdvisorGetSuiteRunReportRequest {
  /**
   * @schema IotDeviceAdvisorGetSuiteRunReportRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

  /**
   * @schema IotDeviceAdvisorGetSuiteRunReportRequest#suiteRunId
   */
  readonly suiteRunId: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorGetSuiteRunReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGetSuiteRunReportRequest(obj: IotDeviceAdvisorGetSuiteRunReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteRunId': obj.suiteRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGetSuiteRunReportResponse
 */
export interface IotDeviceAdvisorGetSuiteRunReportResponse {
  /**
   * @schema IotDeviceAdvisorGetSuiteRunReportResponse#qualificationReportDownloadUrl
   */
  readonly qualificationReportDownloadUrl?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorGetSuiteRunReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGetSuiteRunReportResponse(obj: IotDeviceAdvisorGetSuiteRunReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'qualificationReportDownloadUrl': obj.qualificationReportDownloadUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorListSuiteDefinitionsRequest
 */
export interface IotDeviceAdvisorListSuiteDefinitionsRequest {
  /**
   * @schema IotDeviceAdvisorListSuiteDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotDeviceAdvisorListSuiteDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorListSuiteDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorListSuiteDefinitionsRequest(obj: IotDeviceAdvisorListSuiteDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorListSuiteDefinitionsResponse
 */
export interface IotDeviceAdvisorListSuiteDefinitionsResponse {
  /**
   * @schema IotDeviceAdvisorListSuiteDefinitionsResponse#suiteDefinitionInformationList
   */
  readonly suiteDefinitionInformationList?: IotDeviceAdvisorSuiteDefinitionInformation[];

  /**
   * @schema IotDeviceAdvisorListSuiteDefinitionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorListSuiteDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorListSuiteDefinitionsResponse(obj: IotDeviceAdvisorListSuiteDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionInformationList': obj.suiteDefinitionInformationList?.map(y => toJson_IotDeviceAdvisorSuiteDefinitionInformation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorListSuiteRunsRequest
 */
export interface IotDeviceAdvisorListSuiteRunsRequest {
  /**
   * @schema IotDeviceAdvisorListSuiteRunsRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorListSuiteRunsRequest#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

  /**
   * @schema IotDeviceAdvisorListSuiteRunsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotDeviceAdvisorListSuiteRunsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorListSuiteRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorListSuiteRunsRequest(obj: IotDeviceAdvisorListSuiteRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorListSuiteRunsResponse
 */
export interface IotDeviceAdvisorListSuiteRunsResponse {
  /**
   * @schema IotDeviceAdvisorListSuiteRunsResponse#suiteRunsList
   */
  readonly suiteRunsList?: IotDeviceAdvisorSuiteRunInformation[];

  /**
   * @schema IotDeviceAdvisorListSuiteRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorListSuiteRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorListSuiteRunsResponse(obj: IotDeviceAdvisorListSuiteRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteRunsList': obj.suiteRunsList?.map(y => toJson_IotDeviceAdvisorSuiteRunInformation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorListTagsForResourceRequest
 */
export interface IotDeviceAdvisorListTagsForResourceRequest {
  /**
   * @schema IotDeviceAdvisorListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorListTagsForResourceRequest(obj: IotDeviceAdvisorListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorListTagsForResourceResponse
 */
export interface IotDeviceAdvisorListTagsForResourceResponse {
  /**
   * @schema IotDeviceAdvisorListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IotDeviceAdvisorListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorListTagsForResourceResponse(obj: IotDeviceAdvisorListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorStartSuiteRunRequest
 */
export interface IotDeviceAdvisorStartSuiteRunRequest {
  /**
   * @schema IotDeviceAdvisorStartSuiteRunRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

  /**
   * @schema IotDeviceAdvisorStartSuiteRunRequest#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

  /**
   * @schema IotDeviceAdvisorStartSuiteRunRequest#suiteRunConfiguration
   */
  readonly suiteRunConfiguration?: IotDeviceAdvisorSuiteRunConfiguration;

  /**
   * @schema IotDeviceAdvisorStartSuiteRunRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IotDeviceAdvisorStartSuiteRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorStartSuiteRunRequest(obj: IotDeviceAdvisorStartSuiteRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
    'suiteRunConfiguration': toJson_IotDeviceAdvisorSuiteRunConfiguration(obj.suiteRunConfiguration),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorStartSuiteRunResponse
 */
export interface IotDeviceAdvisorStartSuiteRunResponse {
  /**
   * @schema IotDeviceAdvisorStartSuiteRunResponse#suiteRunId
   */
  readonly suiteRunId?: string;

  /**
   * @schema IotDeviceAdvisorStartSuiteRunResponse#suiteRunArn
   */
  readonly suiteRunArn?: string;

  /**
   * @schema IotDeviceAdvisorStartSuiteRunResponse#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorStartSuiteRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorStartSuiteRunResponse(obj: IotDeviceAdvisorStartSuiteRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteRunId': obj.suiteRunId,
    'suiteRunArn': obj.suiteRunArn,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorStopSuiteRunRequest
 */
export interface IotDeviceAdvisorStopSuiteRunRequest {
  /**
   * @schema IotDeviceAdvisorStopSuiteRunRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

  /**
   * @schema IotDeviceAdvisorStopSuiteRunRequest#suiteRunId
   */
  readonly suiteRunId: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorStopSuiteRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorStopSuiteRunRequest(obj: IotDeviceAdvisorStopSuiteRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteRunId': obj.suiteRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorStopSuiteRunResponse
 */
export interface IotDeviceAdvisorStopSuiteRunResponse {
}

/**
 * Converts an object of type 'IotDeviceAdvisorStopSuiteRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorStopSuiteRunResponse(obj: IotDeviceAdvisorStopSuiteRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorTagResourceRequest
 */
export interface IotDeviceAdvisorTagResourceRequest {
  /**
   * @schema IotDeviceAdvisorTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IotDeviceAdvisorTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'IotDeviceAdvisorTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorTagResourceRequest(obj: IotDeviceAdvisorTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IotDeviceAdvisorTagResourceResponse
 */
export interface IotDeviceAdvisorTagResourceResponse {
}

/**
 * Converts an object of type 'IotDeviceAdvisorTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorTagResourceResponse(obj: IotDeviceAdvisorTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorUntagResourceRequest
 */
export interface IotDeviceAdvisorUntagResourceRequest {
  /**
   * @schema IotDeviceAdvisorUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IotDeviceAdvisorUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IotDeviceAdvisorUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorUntagResourceRequest(obj: IotDeviceAdvisorUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IotDeviceAdvisorUntagResourceResponse
 */
export interface IotDeviceAdvisorUntagResourceResponse {
}

/**
 * Converts an object of type 'IotDeviceAdvisorUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorUntagResourceResponse(obj: IotDeviceAdvisorUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorUpdateSuiteDefinitionRequest
 */
export interface IotDeviceAdvisorUpdateSuiteDefinitionRequest {
  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionRequest#suiteDefinitionId
   */
  readonly suiteDefinitionId: string;

  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionRequest#suiteDefinitionConfiguration
   */
  readonly suiteDefinitionConfiguration?: IotDeviceAdvisorSuiteDefinitionConfiguration;

}

/**
 * Converts an object of type 'IotDeviceAdvisorUpdateSuiteDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorUpdateSuiteDefinitionRequest(obj: IotDeviceAdvisorUpdateSuiteDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionConfiguration': toJson_IotDeviceAdvisorSuiteDefinitionConfiguration(obj.suiteDefinitionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse
 */
export interface IotDeviceAdvisorUpdateSuiteDefinitionResponse {
  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse#suiteDefinitionArn
   */
  readonly suiteDefinitionArn?: string;

  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse#suiteDefinitionName
   */
  readonly suiteDefinitionName?: string;

  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotDeviceAdvisorUpdateSuiteDefinitionResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorUpdateSuiteDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorUpdateSuiteDefinitionResponse(obj: IotDeviceAdvisorUpdateSuiteDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionArn': obj.suiteDefinitionArn,
    'suiteDefinitionName': obj.suiteDefinitionName,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorSuiteDefinitionConfiguration
 */
export interface IotDeviceAdvisorSuiteDefinitionConfiguration {
  /**
   * @schema IotDeviceAdvisorSuiteDefinitionConfiguration#suiteDefinitionName
   */
  readonly suiteDefinitionName?: string;

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionConfiguration#devices
   */
  readonly devices?: IotDeviceAdvisorDeviceUnderTest[];

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionConfiguration#intendedForQualification
   */
  readonly intendedForQualification?: boolean;

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionConfiguration#rootGroup
   */
  readonly rootGroup?: string;

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionConfiguration#devicePermissionRoleArn
   */
  readonly devicePermissionRoleArn?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorSuiteDefinitionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorSuiteDefinitionConfiguration(obj: IotDeviceAdvisorSuiteDefinitionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionName': obj.suiteDefinitionName,
    'devices': obj.devices?.map(y => toJson_IotDeviceAdvisorDeviceUnderTest(y)),
    'intendedForQualification': obj.intendedForQualification,
    'rootGroup': obj.rootGroup,
    'devicePermissionRoleArn': obj.devicePermissionRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorSuiteRunConfiguration
 */
export interface IotDeviceAdvisorSuiteRunConfiguration {
  /**
   * @schema IotDeviceAdvisorSuiteRunConfiguration#primaryDevice
   */
  readonly primaryDevice?: IotDeviceAdvisorDeviceUnderTest;

  /**
   * @schema IotDeviceAdvisorSuiteRunConfiguration#selectedTestList
   */
  readonly selectedTestList?: string[];

}

/**
 * Converts an object of type 'IotDeviceAdvisorSuiteRunConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorSuiteRunConfiguration(obj: IotDeviceAdvisorSuiteRunConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'primaryDevice': toJson_IotDeviceAdvisorDeviceUnderTest(obj.primaryDevice),
    'selectedTestList': obj.selectedTestList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorTestResult
 */
export interface IotDeviceAdvisorTestResult {
  /**
   * @schema IotDeviceAdvisorTestResult#groups
   */
  readonly groups?: IotDeviceAdvisorGroupResult[];

}

/**
 * Converts an object of type 'IotDeviceAdvisorTestResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorTestResult(obj: IotDeviceAdvisorTestResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groups': obj.groups?.map(y => toJson_IotDeviceAdvisorGroupResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorSuiteDefinitionInformation
 */
export interface IotDeviceAdvisorSuiteDefinitionInformation {
  /**
   * @schema IotDeviceAdvisorSuiteDefinitionInformation#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionInformation#suiteDefinitionName
   */
  readonly suiteDefinitionName?: string;

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionInformation#defaultDevices
   */
  readonly defaultDevices?: IotDeviceAdvisorDeviceUnderTest[];

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionInformation#intendedForQualification
   */
  readonly intendedForQualification?: boolean;

  /**
   * @schema IotDeviceAdvisorSuiteDefinitionInformation#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorSuiteDefinitionInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorSuiteDefinitionInformation(obj: IotDeviceAdvisorSuiteDefinitionInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionName': obj.suiteDefinitionName,
    'defaultDevices': obj.defaultDevices?.map(y => toJson_IotDeviceAdvisorDeviceUnderTest(y)),
    'intendedForQualification': obj.intendedForQualification,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorSuiteRunInformation
 */
export interface IotDeviceAdvisorSuiteRunInformation {
  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#suiteDefinitionId
   */
  readonly suiteDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#suiteDefinitionVersion
   */
  readonly suiteDefinitionVersion?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#suiteDefinitionName
   */
  readonly suiteDefinitionName?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#suiteRunId
   */
  readonly suiteRunId?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#endAt
   */
  readonly endAt?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#status
   */
  readonly status?: string;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#passed
   */
  readonly passed?: number;

  /**
   * @schema IotDeviceAdvisorSuiteRunInformation#failed
   */
  readonly failed?: number;

}

/**
 * Converts an object of type 'IotDeviceAdvisorSuiteRunInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorSuiteRunInformation(obj: IotDeviceAdvisorSuiteRunInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suiteDefinitionId': obj.suiteDefinitionId,
    'suiteDefinitionVersion': obj.suiteDefinitionVersion,
    'suiteDefinitionName': obj.suiteDefinitionName,
    'suiteRunId': obj.suiteRunId,
    'createdAt': obj.createdAt,
    'startedAt': obj.startedAt,
    'endAt': obj.endAt,
    'status': obj.status,
    'passed': obj.passed,
    'failed': obj.failed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorDeviceUnderTest
 */
export interface IotDeviceAdvisorDeviceUnderTest {
  /**
   * @schema IotDeviceAdvisorDeviceUnderTest#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotDeviceAdvisorDeviceUnderTest#certificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorDeviceUnderTest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorDeviceUnderTest(obj: IotDeviceAdvisorDeviceUnderTest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingArn': obj.thingArn,
    'certificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorGroupResult
 */
export interface IotDeviceAdvisorGroupResult {
  /**
   * @schema IotDeviceAdvisorGroupResult#groupId
   */
  readonly groupId?: string;

  /**
   * @schema IotDeviceAdvisorGroupResult#groupName
   */
  readonly groupName?: string;

  /**
   * @schema IotDeviceAdvisorGroupResult#tests
   */
  readonly tests?: IotDeviceAdvisorTestCaseRun[];

}

/**
 * Converts an object of type 'IotDeviceAdvisorGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorGroupResult(obj: IotDeviceAdvisorGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupId': obj.groupId,
    'groupName': obj.groupName,
    'tests': obj.tests?.map(y => toJson_IotDeviceAdvisorTestCaseRun(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeviceAdvisorTestCaseRun
 */
export interface IotDeviceAdvisorTestCaseRun {
  /**
   * @schema IotDeviceAdvisorTestCaseRun#testCaseRunId
   */
  readonly testCaseRunId?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#testCaseDefinitionId
   */
  readonly testCaseDefinitionId?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#testCaseDefinitionName
   */
  readonly testCaseDefinitionName?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#status
   */
  readonly status?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#logUrl
   */
  readonly logUrl?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#warnings
   */
  readonly warnings?: string;

  /**
   * @schema IotDeviceAdvisorTestCaseRun#failure
   */
  readonly failure?: string;

}

/**
 * Converts an object of type 'IotDeviceAdvisorTestCaseRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeviceAdvisorTestCaseRun(obj: IotDeviceAdvisorTestCaseRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testCaseRunId': obj.testCaseRunId,
    'testCaseDefinitionId': obj.testCaseDefinitionId,
    'testCaseDefinitionName': obj.testCaseDefinitionName,
    'status': obj.status,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'logUrl': obj.logUrl,
    'warnings': obj.warnings,
    'failure': obj.failure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
