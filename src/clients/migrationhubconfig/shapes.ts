/**
 * @schema MigrationHubConfigCreateHomeRegionControlRequest
 */
export interface MigrationHubConfigCreateHomeRegionControlRequest {
  /**
   * @schema MigrationHubConfigCreateHomeRegionControlRequest#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema MigrationHubConfigCreateHomeRegionControlRequest#Target
   */
  readonly target?: MigrationHubConfigTarget;

  /**
   * @schema MigrationHubConfigCreateHomeRegionControlRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'MigrationHubConfigCreateHomeRegionControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigCreateHomeRegionControlRequest(obj: MigrationHubConfigCreateHomeRegionControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeRegion': obj.homeRegion,
    'Target': toJson_MigrationHubConfigTarget(obj.target),
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MigrationHubConfigCreateHomeRegionControlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigCreateHomeRegionControlResult(obj: MigrationHubConfigCreateHomeRegionControlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeRegionControl': toJson_MigrationHubConfigHomeRegionControl(obj.homeRegionControl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MigrationHubConfigDescribeHomeRegionControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigDescribeHomeRegionControlsRequest(obj: MigrationHubConfigDescribeHomeRegionControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlId': obj.controlId,
    'HomeRegion': obj.homeRegion,
    'Target': toJson_MigrationHubConfigTarget(obj.target),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MigrationHubConfigDescribeHomeRegionControlsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigDescribeHomeRegionControlsResult(obj: MigrationHubConfigDescribeHomeRegionControlsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeRegionControls': obj.homeRegionControls?.map(y => toJson_MigrationHubConfigHomeRegionControl(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MigrationHubConfigGetHomeRegionRequest
 */
export interface MigrationHubConfigGetHomeRegionRequest {
}

/**
 * Converts an object of type 'MigrationHubConfigGetHomeRegionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigGetHomeRegionRequest(obj: MigrationHubConfigGetHomeRegionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MigrationHubConfigGetHomeRegionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigGetHomeRegionResult(obj: MigrationHubConfigGetHomeRegionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HomeRegion': obj.homeRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MigrationHubConfigTarget
 */
export interface MigrationHubConfigTarget {
  /**
   * @schema MigrationHubConfigTarget#Type
   */
  readonly type?: string;

  /**
   * @schema MigrationHubConfigTarget#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MigrationHubConfigTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigTarget(obj: MigrationHubConfigTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'MigrationHubConfigHomeRegionControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MigrationHubConfigHomeRegionControl(obj: MigrationHubConfigHomeRegionControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlId': obj.controlId,
    'HomeRegion': obj.homeRegion,
    'Target': toJson_MigrationHubConfigTarget(obj.target),
    'RequestedTime': obj.requestedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
