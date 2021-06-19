/**
 * @schema MigrationHubConfigCreateHomeRegionControlRequest
 */
export interface MigrationHubConfigCreateHomeRegionControlRequest {
  /**
   * @schema MigrationHubConfigCreateHomeRegionControlRequest#HomeRegion
   */
  readonly homeRegion: string;

  /**
   * @schema MigrationHubConfigCreateHomeRegionControlRequest#Target
   */
  readonly target: MigrationHubConfigTarget;

  /**
   * @schema MigrationHubConfigCreateHomeRegionControlRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema MigrationHubConfigCreateHomeRegionControlResult
 */
export interface MigrationHubConfigCreateHomeRegionControlResult {
  /**
   * @schema MigrationHubConfigCreateHomeRegionControlResult#HomeRegionControl
   */
  readonly homeRegionControl?: MigrationHubConfigHomeRegionControl;

}

/**
 * @schema MigrationHubConfigDescribeHomeRegionControlsRequest
 */
export interface MigrationHubConfigDescribeHomeRegionControlsRequest {
  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsRequest#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsRequest#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsRequest#Target
   */
  readonly target?: MigrationHubConfigTarget;

  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MigrationHubConfigDescribeHomeRegionControlsResult
 */
export interface MigrationHubConfigDescribeHomeRegionControlsResult {
  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsResult#HomeRegionControls
   */
  readonly homeRegionControls?: MigrationHubConfigHomeRegionControl[];

  /**
   * @schema MigrationHubConfigDescribeHomeRegionControlsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MigrationHubConfigGetHomeRegionRequest
 */
export interface MigrationHubConfigGetHomeRegionRequest {
}

/**
 * @schema MigrationHubConfigGetHomeRegionResult
 */
export interface MigrationHubConfigGetHomeRegionResult {
  /**
   * @schema MigrationHubConfigGetHomeRegionResult#HomeRegion
   */
  readonly homeRegion?: string;

}

/**
 * @schema MigrationHubConfigTarget
 */
export interface MigrationHubConfigTarget {
  /**
   * @schema MigrationHubConfigTarget#Type
   */
  readonly type: string;

  /**
   * @schema MigrationHubConfigTarget#Id
   */
  readonly id?: string;

}

/**
 * @schema MigrationHubConfigHomeRegionControl
 */
export interface MigrationHubConfigHomeRegionControl {
  /**
   * @schema MigrationHubConfigHomeRegionControl#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema MigrationHubConfigHomeRegionControl#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema MigrationHubConfigHomeRegionControl#Target
   */
  readonly target?: MigrationHubConfigTarget;

  /**
   * @schema MigrationHubConfigHomeRegionControl#RequestedTime
   */
  readonly requestedTime?: string;

}
