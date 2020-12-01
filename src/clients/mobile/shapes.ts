/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateProjectRequest#region
   */
  readonly region?: string;

  /**
   * @schema CreateProjectRequest#contents
   */
  readonly contents?: any;

  /**
   * @schema CreateProjectRequest#snapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema CreateProjectResult
 */
export interface CreateProjectResult {
  /**
   * @schema CreateProjectResult#details
   */
  readonly details?: ProjectDetails;

}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * @schema DeleteProjectResult
 */
export interface DeleteProjectResult {
  /**
   * @schema DeleteProjectResult#deletedResources
   */
  readonly deletedResources?: Resource[];

  /**
   * @schema DeleteProjectResult#orphanedResources
   */
  readonly orphanedResources?: Resource[];

}

/**
 * @schema DescribeBundleRequest
 */
export interface DescribeBundleRequest {
  /**
   * @schema DescribeBundleRequest#bundleId
   */
  readonly bundleId: string;

}

/**
 * @schema DescribeBundleResult
 */
export interface DescribeBundleResult {
  /**
   * @schema DescribeBundleResult#details
   */
  readonly details?: BundleDetails;

}

/**
 * @schema DescribeProjectRequest
 */
export interface DescribeProjectRequest {
  /**
   * @schema DescribeProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema DescribeProjectRequest#syncFromResources
   */
  readonly syncFromResources?: boolean;

}

/**
 * @schema DescribeProjectResult
 */
export interface DescribeProjectResult {
  /**
   * @schema DescribeProjectResult#details
   */
  readonly details?: ProjectDetails;

}

/**
 * @schema ExportBundleRequest
 */
export interface ExportBundleRequest {
  /**
   * @schema ExportBundleRequest#bundleId
   */
  readonly bundleId: string;

  /**
   * @schema ExportBundleRequest#projectId
   */
  readonly projectId?: string;

  /**
   * @schema ExportBundleRequest#platform
   */
  readonly platform?: string;

}

/**
 * @schema ExportBundleResult
 */
export interface ExportBundleResult {
  /**
   * @schema ExportBundleResult#downloadUrl
   */
  readonly downloadUrl?: string;

}

/**
 * @schema ExportProjectRequest
 */
export interface ExportProjectRequest {
  /**
   * @schema ExportProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * @schema ExportProjectResult
 */
export interface ExportProjectResult {
  /**
   * @schema ExportProjectResult#downloadUrl
   */
  readonly downloadUrl?: string;

  /**
   * @schema ExportProjectResult#shareUrl
   */
  readonly shareUrl?: string;

  /**
   * @schema ExportProjectResult#snapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema ListBundlesRequest
 */
export interface ListBundlesRequest {
  /**
   * @schema ListBundlesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBundlesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBundlesResult
 */
export interface ListBundlesResult {
  /**
   * @schema ListBundlesResult#bundleList
   */
  readonly bundleList?: BundleDetails[];

  /**
   * @schema ListBundlesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsRequest
 */
export interface ListProjectsRequest {
  /**
   * @schema ListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsResult
 */
export interface ListProjectsResult {
  /**
   * @schema ListProjectsResult#projects
   */
  readonly projects?: ProjectSummary[];

  /**
   * @schema ListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * @schema UpdateProjectRequest#contents
   */
  readonly contents?: any;

  /**
   * @schema UpdateProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * @schema UpdateProjectResult
 */
export interface UpdateProjectResult {
  /**
   * @schema UpdateProjectResult#details
   */
  readonly details?: ProjectDetails;

}

/**
 * @schema ProjectDetails
 */
export interface ProjectDetails {
  /**
   * @schema ProjectDetails#name
   */
  readonly name?: string;

  /**
   * @schema ProjectDetails#projectId
   */
  readonly projectId?: string;

  /**
   * @schema ProjectDetails#region
   */
  readonly region?: string;

  /**
   * @schema ProjectDetails#state
   */
  readonly state?: string;

  /**
   * @schema ProjectDetails#createdDate
   */
  readonly createdDate?: string;

  /**
   * @schema ProjectDetails#lastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema ProjectDetails#consoleUrl
   */
  readonly consoleUrl?: string;

  /**
   * @schema ProjectDetails#resources
   */
  readonly resources?: Resource[];

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#type
   */
  readonly type?: string;

  /**
   * @schema Resource#name
   */
  readonly name?: string;

  /**
   * @schema Resource#arn
   */
  readonly arn?: string;

  /**
   * @schema Resource#feature
   */
  readonly feature?: string;

  /**
   * @schema Resource#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema BundleDetails
 */
export interface BundleDetails {
  /**
   * @schema BundleDetails#bundleId
   */
  readonly bundleId?: string;

  /**
   * @schema BundleDetails#title
   */
  readonly title?: string;

  /**
   * @schema BundleDetails#version
   */
  readonly version?: string;

  /**
   * @schema BundleDetails#description
   */
  readonly description?: string;

  /**
   * @schema BundleDetails#iconUrl
   */
  readonly iconUrl?: string;

  /**
   * @schema BundleDetails#availablePlatforms
   */
  readonly availablePlatforms?: string[];

}

/**
 * @schema ProjectSummary
 */
export interface ProjectSummary {
  /**
   * @schema ProjectSummary#name
   */
  readonly name?: string;

  /**
   * @schema ProjectSummary#projectId
   */
  readonly projectId?: string;

}
