/**
 * @schema MobileCreateProjectRequest
 */
export interface MobileCreateProjectRequest {
  /**
   * @schema MobileCreateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema MobileCreateProjectRequest#region
   */
  readonly region?: string;

  /**
   * @schema MobileCreateProjectRequest#contents
   */
  readonly contents?: any;

  /**
   * @schema MobileCreateProjectRequest#snapshotId
   */
  readonly snapshotId?: string;

}

/**
 * Converts an object of type 'MobileCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileCreateProjectRequest(obj: MobileCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'region': obj.region,
    'contents': obj.contents,
    'snapshotId': obj.snapshotId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileCreateProjectResult
 */
export interface MobileCreateProjectResult {
  /**
   * @schema MobileCreateProjectResult#details
   */
  readonly details?: MobileProjectDetails;

}

/**
 * Converts an object of type 'MobileCreateProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileCreateProjectResult(obj: MobileCreateProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': toJson_MobileProjectDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileDeleteProjectRequest
 */
export interface MobileDeleteProjectRequest {
  /**
   * @schema MobileDeleteProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * Converts an object of type 'MobileDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileDeleteProjectRequest(obj: MobileDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileDeleteProjectResult
 */
export interface MobileDeleteProjectResult {
  /**
   * @schema MobileDeleteProjectResult#deletedResources
   */
  readonly deletedResources?: MobileResource[];

  /**
   * @schema MobileDeleteProjectResult#orphanedResources
   */
  readonly orphanedResources?: MobileResource[];

}

/**
 * Converts an object of type 'MobileDeleteProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileDeleteProjectResult(obj: MobileDeleteProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deletedResources': obj.deletedResources?.map(y => toJson_MobileResource(y)),
    'orphanedResources': obj.orphanedResources?.map(y => toJson_MobileResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileDescribeBundleRequest
 */
export interface MobileDescribeBundleRequest {
  /**
   * @schema MobileDescribeBundleRequest#bundleId
   */
  readonly bundleId: string;

}

/**
 * Converts an object of type 'MobileDescribeBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileDescribeBundleRequest(obj: MobileDescribeBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleId': obj.bundleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileDescribeBundleResult
 */
export interface MobileDescribeBundleResult {
  /**
   * @schema MobileDescribeBundleResult#details
   */
  readonly details?: MobileBundleDetails;

}

/**
 * Converts an object of type 'MobileDescribeBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileDescribeBundleResult(obj: MobileDescribeBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': toJson_MobileBundleDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileDescribeProjectRequest
 */
export interface MobileDescribeProjectRequest {
  /**
   * @schema MobileDescribeProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema MobileDescribeProjectRequest#syncFromResources
   */
  readonly syncFromResources?: boolean;

}

/**
 * Converts an object of type 'MobileDescribeProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileDescribeProjectRequest(obj: MobileDescribeProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'syncFromResources': obj.syncFromResources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileDescribeProjectResult
 */
export interface MobileDescribeProjectResult {
  /**
   * @schema MobileDescribeProjectResult#details
   */
  readonly details?: MobileProjectDetails;

}

/**
 * Converts an object of type 'MobileDescribeProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileDescribeProjectResult(obj: MobileDescribeProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': toJson_MobileProjectDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileExportBundleRequest
 */
export interface MobileExportBundleRequest {
  /**
   * @schema MobileExportBundleRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema MobileExportBundleRequest#projectId
   */
  readonly projectId?: string;

  /**
   * @schema MobileExportBundleRequest#platform
   */
  readonly platform?: string;

}

/**
 * Converts an object of type 'MobileExportBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileExportBundleRequest(obj: MobileExportBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleId': obj.bundleId,
    'projectId': obj.projectId,
    'platform': obj.platform,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileExportBundleResult
 */
export interface MobileExportBundleResult {
  /**
   * @schema MobileExportBundleResult#downloadUrl
   */
  readonly downloadUrl?: string;

}

/**
 * Converts an object of type 'MobileExportBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileExportBundleResult(obj: MobileExportBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'downloadUrl': obj.downloadUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileExportProjectRequest
 */
export interface MobileExportProjectRequest {
  /**
   * @schema MobileExportProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * Converts an object of type 'MobileExportProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileExportProjectRequest(obj: MobileExportProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileExportProjectResult
 */
export interface MobileExportProjectResult {
  /**
   * @schema MobileExportProjectResult#downloadUrl
   */
  readonly downloadUrl?: string;

  /**
   * @schema MobileExportProjectResult#shareUrl
   */
  readonly shareUrl?: string;

  /**
   * @schema MobileExportProjectResult#snapshotId
   */
  readonly snapshotId?: string;

}

/**
 * Converts an object of type 'MobileExportProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileExportProjectResult(obj: MobileExportProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'downloadUrl': obj.downloadUrl,
    'shareUrl': obj.shareUrl,
    'snapshotId': obj.snapshotId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileListBundlesRequest
 */
export interface MobileListBundlesRequest {
  /**
   * @schema MobileListBundlesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MobileListBundlesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MobileListBundlesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileListBundlesRequest(obj: MobileListBundlesRequest | undefined): Record<string, any> | undefined {
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
 * @schema MobileListBundlesResult
 */
export interface MobileListBundlesResult {
  /**
   * @schema MobileListBundlesResult#bundleList
   */
  readonly bundleList?: MobileBundleDetails[];

  /**
   * @schema MobileListBundlesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MobileListBundlesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileListBundlesResult(obj: MobileListBundlesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleList': obj.bundleList?.map(y => toJson_MobileBundleDetails(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileListProjectsRequest
 */
export interface MobileListProjectsRequest {
  /**
   * @schema MobileListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MobileListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MobileListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileListProjectsRequest(obj: MobileListProjectsRequest | undefined): Record<string, any> | undefined {
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
 * @schema MobileListProjectsResult
 */
export interface MobileListProjectsResult {
  /**
   * @schema MobileListProjectsResult#projects
   */
  readonly projects?: MobileProjectSummary[];

  /**
   * @schema MobileListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MobileListProjectsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileListProjectsResult(obj: MobileListProjectsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projects': obj.projects?.map(y => toJson_MobileProjectSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileUpdateProjectRequest
 */
export interface MobileUpdateProjectRequest {
  /**
   * @schema MobileUpdateProjectRequest#contents
   */
  readonly contents?: any;

  /**
   * @schema MobileUpdateProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * Converts an object of type 'MobileUpdateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileUpdateProjectRequest(obj: MobileUpdateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contents': obj.contents,
    'projectId': obj.projectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileUpdateProjectResult
 */
export interface MobileUpdateProjectResult {
  /**
   * @schema MobileUpdateProjectResult#details
   */
  readonly details?: MobileProjectDetails;

}

/**
 * Converts an object of type 'MobileUpdateProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileUpdateProjectResult(obj: MobileUpdateProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'details': toJson_MobileProjectDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileProjectDetails
 */
export interface MobileProjectDetails {
  /**
   * @schema MobileProjectDetails#name
   */
  readonly name?: string;

  /**
   * @schema MobileProjectDetails#projectId
   */
  readonly projectId?: string;

  /**
   * @schema MobileProjectDetails#region
   */
  readonly region?: string;

  /**
   * @schema MobileProjectDetails#state
   */
  readonly state?: string;

  /**
   * @schema MobileProjectDetails#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema MobileProjectDetails#lastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema MobileProjectDetails#consoleUrl
   */
  readonly consoleUrl?: string;

  /**
   * @schema MobileProjectDetails#resources
   */
  readonly resources?: MobileResource[];

}

/**
 * Converts an object of type 'MobileProjectDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileProjectDetails(obj: MobileProjectDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'projectId': obj.projectId,
    'region': obj.region,
    'state': obj.state,
    'createdDate': obj.createdDate,
    'lastUpdatedDate': obj.lastUpdatedDate,
    'consoleUrl': obj.consoleUrl,
    'resources': obj.resources?.map(y => toJson_MobileResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileResource
 */
export interface MobileResource {
  /**
   * @schema MobileResource#type
   */
  readonly type?: string;

  /**
   * @schema MobileResource#name
   */
  readonly name?: string;

  /**
   * @schema MobileResource#arn
   */
  readonly arn?: string;

  /**
   * @schema MobileResource#feature
   */
  readonly feature?: string;

  /**
   * @schema MobileResource#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'MobileResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileResource(obj: MobileResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'name': obj.name,
    'arn': obj.arn,
    'feature': obj.feature,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileBundleDetails
 */
export interface MobileBundleDetails {
  /**
   * @schema MobileBundleDetails#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema MobileBundleDetails#title
   */
  readonly title?: string;

  /**
   * @schema MobileBundleDetails#version
   */
  readonly version?: string;

  /**
   * @schema MobileBundleDetails#description
   */
  readonly description?: string;

  /**
   * @schema MobileBundleDetails#iconUrl
   */
  readonly iconUrl?: string;

  /**
   * @schema MobileBundleDetails#availablePlatforms
   */
  readonly availablePlatforms?: string[];

}

/**
 * Converts an object of type 'MobileBundleDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileBundleDetails(obj: MobileBundleDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bundleId': obj.bundleId,
    'title': obj.title,
    'version': obj.version,
    'description': obj.description,
    'iconUrl': obj.iconUrl,
    'availablePlatforms': obj.availablePlatforms?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MobileProjectSummary
 */
export interface MobileProjectSummary {
  /**
   * @schema MobileProjectSummary#name
   */
  readonly name?: string;

  /**
   * @schema MobileProjectSummary#projectId
   */
  readonly projectId?: string;

}

/**
 * Converts an object of type 'MobileProjectSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MobileProjectSummary(obj: MobileProjectSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'projectId': obj.projectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
