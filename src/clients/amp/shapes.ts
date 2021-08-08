/**
 * @schema AmpCreateWorkspaceRequest
 */
export interface AmpCreateWorkspaceRequest {
  /**
   * @schema AmpCreateWorkspaceRequest#alias
   */
  readonly alias?: string;

  /**
   * @schema AmpCreateWorkspaceRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'AmpCreateWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpCreateWorkspaceRequest(obj: AmpCreateWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alias': obj.alias,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpCreateWorkspaceResponse
 */
export interface AmpCreateWorkspaceResponse {
  /**
   * @schema AmpCreateWorkspaceResponse#arn
   */
  readonly arn: string;

  /**
   * @schema AmpCreateWorkspaceResponse#status
   */
  readonly status: AmpWorkspaceStatus;

  /**
   * @schema AmpCreateWorkspaceResponse#workspaceId
   */
  readonly workspaceId: string;

}

/**
 * Converts an object of type 'AmpCreateWorkspaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpCreateWorkspaceResponse(obj: AmpCreateWorkspaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': toJson_AmpWorkspaceStatus(obj.status),
    'workspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpDeleteWorkspaceRequest
 */
export interface AmpDeleteWorkspaceRequest {
  /**
   * @schema AmpDeleteWorkspaceRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AmpDeleteWorkspaceRequest#workspaceId
   */
  readonly workspaceId: string;

}

/**
 * Converts an object of type 'AmpDeleteWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpDeleteWorkspaceRequest(obj: AmpDeleteWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'workspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpDescribeWorkspaceRequest
 */
export interface AmpDescribeWorkspaceRequest {
  /**
   * @schema AmpDescribeWorkspaceRequest#workspaceId
   */
  readonly workspaceId: string;

}

/**
 * Converts an object of type 'AmpDescribeWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpDescribeWorkspaceRequest(obj: AmpDescribeWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpDescribeWorkspaceResponse
 */
export interface AmpDescribeWorkspaceResponse {
  /**
   * @schema AmpDescribeWorkspaceResponse#workspace
   */
  readonly workspace: AmpWorkspaceDescription;

}

/**
 * Converts an object of type 'AmpDescribeWorkspaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpDescribeWorkspaceResponse(obj: AmpDescribeWorkspaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workspace': toJson_AmpWorkspaceDescription(obj.workspace),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpListWorkspacesRequest
 */
export interface AmpListWorkspacesRequest {
  /**
   * @schema AmpListWorkspacesRequest#alias
   */
  readonly alias?: string;

  /**
   * @schema AmpListWorkspacesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AmpListWorkspacesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmpListWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpListWorkspacesRequest(obj: AmpListWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alias': obj.alias,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpListWorkspacesResponse
 */
export interface AmpListWorkspacesResponse {
  /**
   * @schema AmpListWorkspacesResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmpListWorkspacesResponse#workspaces
   */
  readonly workspaces: AmpWorkspaceSummary[];

}

/**
 * Converts an object of type 'AmpListWorkspacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpListWorkspacesResponse(obj: AmpListWorkspacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'workspaces': obj.workspaces?.map(y => toJson_AmpWorkspaceSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpUpdateWorkspaceAliasRequest
 */
export interface AmpUpdateWorkspaceAliasRequest {
  /**
   * @schema AmpUpdateWorkspaceAliasRequest#alias
   */
  readonly alias?: string;

  /**
   * @schema AmpUpdateWorkspaceAliasRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AmpUpdateWorkspaceAliasRequest#workspaceId
   */
  readonly workspaceId: string;

}

/**
 * Converts an object of type 'AmpUpdateWorkspaceAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpUpdateWorkspaceAliasRequest(obj: AmpUpdateWorkspaceAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alias': obj.alias,
    'clientToken': obj.clientToken,
    'workspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpWorkspaceStatus
 */
export interface AmpWorkspaceStatus {
  /**
   * @schema AmpWorkspaceStatus#statusCode
   */
  readonly statusCode: string;

}

/**
 * Converts an object of type 'AmpWorkspaceStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpWorkspaceStatus(obj: AmpWorkspaceStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpWorkspaceDescription
 */
export interface AmpWorkspaceDescription {
  /**
   * @schema AmpWorkspaceDescription#alias
   */
  readonly alias?: string;

  /**
   * @schema AmpWorkspaceDescription#arn
   */
  readonly arn: string;

  /**
   * @schema AmpWorkspaceDescription#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AmpWorkspaceDescription#prometheusEndpoint
   */
  readonly prometheusEndpoint?: string;

  /**
   * @schema AmpWorkspaceDescription#status
   */
  readonly status: AmpWorkspaceStatus;

  /**
   * @schema AmpWorkspaceDescription#workspaceId
   */
  readonly workspaceId: string;

}

/**
 * Converts an object of type 'AmpWorkspaceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpWorkspaceDescription(obj: AmpWorkspaceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alias': obj.alias,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'prometheusEndpoint': obj.prometheusEndpoint,
    'status': toJson_AmpWorkspaceStatus(obj.status),
    'workspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmpWorkspaceSummary
 */
export interface AmpWorkspaceSummary {
  /**
   * @schema AmpWorkspaceSummary#alias
   */
  readonly alias?: string;

  /**
   * @schema AmpWorkspaceSummary#arn
   */
  readonly arn: string;

  /**
   * @schema AmpWorkspaceSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AmpWorkspaceSummary#status
   */
  readonly status: AmpWorkspaceStatus;

  /**
   * @schema AmpWorkspaceSummary#workspaceId
   */
  readonly workspaceId: string;

}

/**
 * Converts an object of type 'AmpWorkspaceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmpWorkspaceSummary(obj: AmpWorkspaceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alias': obj.alias,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'status': toJson_AmpWorkspaceStatus(obj.status),
    'workspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
