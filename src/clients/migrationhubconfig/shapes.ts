/**
 * @schema CreateHomeRegionControlRequest
 */
export interface CreateHomeRegionControlRequest {
  /**
   * @schema CreateHomeRegionControlRequest#HomeRegion
   */
  readonly homeRegion: string;

  /**
   * @schema CreateHomeRegionControlRequest#Target
   */
  readonly target: Target;

  /**
   * @schema CreateHomeRegionControlRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateHomeRegionControlResult
 */
export interface CreateHomeRegionControlResult {
  /**
   * @schema CreateHomeRegionControlResult#HomeRegionControl
   */
  readonly homeRegionControl?: HomeRegionControl;

}

/**
 * @schema DescribeHomeRegionControlsRequest
 */
export interface DescribeHomeRegionControlsRequest {
  /**
   * @schema DescribeHomeRegionControlsRequest#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema DescribeHomeRegionControlsRequest#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema DescribeHomeRegionControlsRequest#Target
   */
  readonly target?: Target;

  /**
   * @schema DescribeHomeRegionControlsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeHomeRegionControlsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHomeRegionControlsResult
 */
export interface DescribeHomeRegionControlsResult {
  /**
   * @schema DescribeHomeRegionControlsResult#HomeRegionControls
   */
  readonly homeRegionControls?: HomeRegionControl[];

  /**
   * @schema DescribeHomeRegionControlsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetHomeRegionRequest
 */
export interface GetHomeRegionRequest {
}

/**
 * @schema GetHomeRegionResult
 */
export interface GetHomeRegionResult {
  /**
   * @schema GetHomeRegionResult#HomeRegion
   */
  readonly homeRegion?: string;

}

/**
 * @schema Target
 */
export interface Target {
  /**
   * @schema Target#Type
   */
  readonly type: string;

  /**
   * @schema Target#Id
   */
  readonly id?: string;

}

/**
 * @schema HomeRegionControl
 */
export interface HomeRegionControl {
  /**
   * @schema HomeRegionControl#ControlId
   */
  readonly controlId?: string;

  /**
   * @schema HomeRegionControl#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema HomeRegionControl#Target
   */
  readonly target?: Target;

  /**
   * @schema HomeRegionControl#RequestedTime
   */
  readonly requestedTime?: string;

}
