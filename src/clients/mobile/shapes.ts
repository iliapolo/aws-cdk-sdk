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
 * @schema MobileCreateProjectResult
 */
export interface MobileCreateProjectResult {
  /**
   * @schema MobileCreateProjectResult#details
   */
  readonly details?: MobileProjectDetails;

}

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
 * @schema MobileDescribeBundleRequest
 */
export interface MobileDescribeBundleRequest {
  /**
   * @schema MobileDescribeBundleRequest#bundleId
   */
  readonly bundleId: string;

}

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
 * @schema MobileDescribeProjectResult
 */
export interface MobileDescribeProjectResult {
  /**
   * @schema MobileDescribeProjectResult#details
   */
  readonly details?: MobileProjectDetails;

}

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
 * @schema MobileExportBundleResult
 */
export interface MobileExportBundleResult {
  /**
   * @schema MobileExportBundleResult#downloadUrl
   */
  readonly downloadUrl?: string;

}

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
 * @schema MobileUpdateProjectResult
 */
export interface MobileUpdateProjectResult {
  /**
   * @schema MobileUpdateProjectResult#details
   */
  readonly details?: MobileProjectDetails;

}

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
