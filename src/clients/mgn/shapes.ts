/**
 * @schema MgnChangeServerLifeCycleStateRequest
 */
export interface MgnChangeServerLifeCycleStateRequest {
  /**
   * @schema MgnChangeServerLifeCycleStateRequest#lifeCycle
   */
  readonly lifeCycle: MgnChangeServerLifeCycleStateSourceServerLifecycle;

  /**
   * @schema MgnChangeServerLifeCycleStateRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnChangeServerLifeCycleStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnChangeServerLifeCycleStateRequest(obj: MgnChangeServerLifeCycleStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lifeCycle': toJson_MgnChangeServerLifeCycleStateSourceServerLifecycle(obj.lifeCycle),
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnSourceServer
 */
export interface MgnSourceServer {
  /**
   * @schema MgnSourceServer#arn
   */
  readonly arn?: string;

  /**
   * @schema MgnSourceServer#dataReplicationInfo
   */
  readonly dataReplicationInfo?: MgnDataReplicationInfo;

  /**
   * @schema MgnSourceServer#isArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema MgnSourceServer#launchedInstance
   */
  readonly launchedInstance?: MgnLaunchedInstance;

  /**
   * @schema MgnSourceServer#lifeCycle
   */
  readonly lifeCycle?: MgnLifeCycle;

  /**
   * @schema MgnSourceServer#sourceProperties
   */
  readonly sourceProperties?: MgnSourceProperties;

  /**
   * @schema MgnSourceServer#sourceServerID
   */
  readonly sourceServerId?: string;

  /**
   * @schema MgnSourceServer#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MgnSourceServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnSourceServer(obj: MgnSourceServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'dataReplicationInfo': toJson_MgnDataReplicationInfo(obj.dataReplicationInfo),
    'isArchived': obj.isArchived,
    'launchedInstance': toJson_MgnLaunchedInstance(obj.launchedInstance),
    'lifeCycle': toJson_MgnLifeCycle(obj.lifeCycle),
    'sourceProperties': toJson_MgnSourceProperties(obj.sourceProperties),
    'sourceServerID': obj.sourceServerId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnCreateReplicationConfigurationTemplateRequest
 */
export interface MgnCreateReplicationConfigurationTemplateRequest {
  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#associateDefaultSecurityGroup
   */
  readonly associateDefaultSecurityGroup: boolean;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#bandwidthThrottling
   */
  readonly bandwidthThrottling: number;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#createPublicIP
   */
  readonly createPublicIp?: boolean;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#dataPlaneRouting
   */
  readonly dataPlaneRouting: string;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#defaultLargeStagingDiskType
   */
  readonly defaultLargeStagingDiskType: string;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#ebsEncryption
   */
  readonly ebsEncryption: string;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#ebsEncryptionKeyArn
   */
  readonly ebsEncryptionKeyArn?: string;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#replicationServerInstanceType
   */
  readonly replicationServerInstanceType: string;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#replicationServersSecurityGroupsIDs
   */
  readonly replicationServersSecurityGroupsIDs: string[];

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#stagingAreaSubnetId
   */
  readonly stagingAreaSubnetId: string;

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#stagingAreaTags
   */
  readonly stagingAreaTags: { [key: string]: string };

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MgnCreateReplicationConfigurationTemplateRequest#useDedicatedReplicationServer
   */
  readonly useDedicatedReplicationServer: boolean;

}

/**
 * Converts an object of type 'MgnCreateReplicationConfigurationTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnCreateReplicationConfigurationTemplateRequest(obj: MgnCreateReplicationConfigurationTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associateDefaultSecurityGroup': obj.associateDefaultSecurityGroup,
    'bandwidthThrottling': obj.bandwidthThrottling,
    'createPublicIP': obj.createPublicIp,
    'dataPlaneRouting': obj.dataPlaneRouting,
    'defaultLargeStagingDiskType': obj.defaultLargeStagingDiskType,
    'ebsEncryption': obj.ebsEncryption,
    'ebsEncryptionKeyArn': obj.ebsEncryptionKeyArn,
    'replicationServerInstanceType': obj.replicationServerInstanceType,
    'replicationServersSecurityGroupsIDs': obj.replicationServersSecurityGroupsIDs?.map(y => y),
    'stagingAreaSubnetId': obj.stagingAreaSubnetId,
    'stagingAreaTags': ((obj.stagingAreaTags) === undefined) ? undefined : (Object.entries(obj.stagingAreaTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useDedicatedReplicationServer': obj.useDedicatedReplicationServer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnReplicationConfigurationTemplate
 */
export interface MgnReplicationConfigurationTemplate {
  /**
   * @schema MgnReplicationConfigurationTemplate#arn
   */
  readonly arn?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#associateDefaultSecurityGroup
   */
  readonly associateDefaultSecurityGroup?: boolean;

  /**
   * @schema MgnReplicationConfigurationTemplate#bandwidthThrottling
   */
  readonly bandwidthThrottling?: number;

  /**
   * @schema MgnReplicationConfigurationTemplate#createPublicIP
   */
  readonly createPublicIp?: boolean;

  /**
   * @schema MgnReplicationConfigurationTemplate#dataPlaneRouting
   */
  readonly dataPlaneRouting?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#defaultLargeStagingDiskType
   */
  readonly defaultLargeStagingDiskType?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#ebsEncryption
   */
  readonly ebsEncryption?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#ebsEncryptionKeyArn
   */
  readonly ebsEncryptionKeyArn?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#replicationConfigurationTemplateID
   */
  readonly replicationConfigurationTemplateId?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#replicationServerInstanceType
   */
  readonly replicationServerInstanceType?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#replicationServersSecurityGroupsIDs
   */
  readonly replicationServersSecurityGroupsIDs?: string[];

  /**
   * @schema MgnReplicationConfigurationTemplate#stagingAreaSubnetId
   */
  readonly stagingAreaSubnetId?: string;

  /**
   * @schema MgnReplicationConfigurationTemplate#stagingAreaTags
   */
  readonly stagingAreaTags?: { [key: string]: string };

  /**
   * @schema MgnReplicationConfigurationTemplate#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MgnReplicationConfigurationTemplate#useDedicatedReplicationServer
   */
  readonly useDedicatedReplicationServer?: boolean;

}

/**
 * Converts an object of type 'MgnReplicationConfigurationTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnReplicationConfigurationTemplate(obj: MgnReplicationConfigurationTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'associateDefaultSecurityGroup': obj.associateDefaultSecurityGroup,
    'bandwidthThrottling': obj.bandwidthThrottling,
    'createPublicIP': obj.createPublicIp,
    'dataPlaneRouting': obj.dataPlaneRouting,
    'defaultLargeStagingDiskType': obj.defaultLargeStagingDiskType,
    'ebsEncryption': obj.ebsEncryption,
    'ebsEncryptionKeyArn': obj.ebsEncryptionKeyArn,
    'replicationConfigurationTemplateID': obj.replicationConfigurationTemplateId,
    'replicationServerInstanceType': obj.replicationServerInstanceType,
    'replicationServersSecurityGroupsIDs': obj.replicationServersSecurityGroupsIDs?.map(y => y),
    'stagingAreaSubnetId': obj.stagingAreaSubnetId,
    'stagingAreaTags': ((obj.stagingAreaTags) === undefined) ? undefined : (Object.entries(obj.stagingAreaTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useDedicatedReplicationServer': obj.useDedicatedReplicationServer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDeleteJobRequest
 */
export interface MgnDeleteJobRequest {
  /**
   * @schema MgnDeleteJobRequest#jobID
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'MgnDeleteJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDeleteJobRequest(obj: MgnDeleteJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobID': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDeleteJobResponse
 */
export interface MgnDeleteJobResponse {
}

/**
 * Converts an object of type 'MgnDeleteJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDeleteJobResponse(obj: MgnDeleteJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDeleteReplicationConfigurationTemplateRequest
 */
export interface MgnDeleteReplicationConfigurationTemplateRequest {
  /**
   * @schema MgnDeleteReplicationConfigurationTemplateRequest#replicationConfigurationTemplateID
   */
  readonly replicationConfigurationTemplateId?: string;

}

/**
 * Converts an object of type 'MgnDeleteReplicationConfigurationTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDeleteReplicationConfigurationTemplateRequest(obj: MgnDeleteReplicationConfigurationTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationConfigurationTemplateID': obj.replicationConfigurationTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDeleteReplicationConfigurationTemplateResponse
 */
export interface MgnDeleteReplicationConfigurationTemplateResponse {
}

/**
 * Converts an object of type 'MgnDeleteReplicationConfigurationTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDeleteReplicationConfigurationTemplateResponse(obj: MgnDeleteReplicationConfigurationTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDeleteSourceServerRequest
 */
export interface MgnDeleteSourceServerRequest {
  /**
   * @schema MgnDeleteSourceServerRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnDeleteSourceServerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDeleteSourceServerRequest(obj: MgnDeleteSourceServerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDeleteSourceServerResponse
 */
export interface MgnDeleteSourceServerResponse {
}

/**
 * Converts an object of type 'MgnDeleteSourceServerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDeleteSourceServerResponse(obj: MgnDeleteSourceServerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeJobLogItemsRequest
 */
export interface MgnDescribeJobLogItemsRequest {
  /**
   * @schema MgnDescribeJobLogItemsRequest#jobID
   */
  readonly jobId?: string;

  /**
   * @schema MgnDescribeJobLogItemsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MgnDescribeJobLogItemsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeJobLogItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeJobLogItemsRequest(obj: MgnDescribeJobLogItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobID': obj.jobId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeJobLogItemsResponse
 */
export interface MgnDescribeJobLogItemsResponse {
  /**
   * @schema MgnDescribeJobLogItemsResponse#items
   */
  readonly items?: MgnJobLog[];

  /**
   * @schema MgnDescribeJobLogItemsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeJobLogItemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeJobLogItemsResponse(obj: MgnDescribeJobLogItemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_MgnJobLog(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeJobsRequest
 */
export interface MgnDescribeJobsRequest {
  /**
   * @schema MgnDescribeJobsRequest#filters
   */
  readonly filters: MgnDescribeJobsRequestFilters;

  /**
   * @schema MgnDescribeJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MgnDescribeJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeJobsRequest(obj: MgnDescribeJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': toJson_MgnDescribeJobsRequestFilters(obj.filters),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeJobsResponse
 */
export interface MgnDescribeJobsResponse {
  /**
   * @schema MgnDescribeJobsResponse#items
   */
  readonly items?: MgnJob[];

  /**
   * @schema MgnDescribeJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeJobsResponse(obj: MgnDescribeJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_MgnJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeReplicationConfigurationTemplatesRequest
 */
export interface MgnDescribeReplicationConfigurationTemplatesRequest {
  /**
   * @schema MgnDescribeReplicationConfigurationTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MgnDescribeReplicationConfigurationTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MgnDescribeReplicationConfigurationTemplatesRequest#replicationConfigurationTemplateIDs
   */
  readonly replicationConfigurationTemplateIDs: string[];

}

/**
 * Converts an object of type 'MgnDescribeReplicationConfigurationTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeReplicationConfigurationTemplatesRequest(obj: MgnDescribeReplicationConfigurationTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'replicationConfigurationTemplateIDs': obj.replicationConfigurationTemplateIDs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeReplicationConfigurationTemplatesResponse
 */
export interface MgnDescribeReplicationConfigurationTemplatesResponse {
  /**
   * @schema MgnDescribeReplicationConfigurationTemplatesResponse#items
   */
  readonly items?: MgnReplicationConfigurationTemplate[];

  /**
   * @schema MgnDescribeReplicationConfigurationTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeReplicationConfigurationTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeReplicationConfigurationTemplatesResponse(obj: MgnDescribeReplicationConfigurationTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_MgnReplicationConfigurationTemplate(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeSourceServersRequest
 */
export interface MgnDescribeSourceServersRequest {
  /**
   * @schema MgnDescribeSourceServersRequest#filters
   */
  readonly filters: MgnDescribeSourceServersRequestFilters;

  /**
   * @schema MgnDescribeSourceServersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MgnDescribeSourceServersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeSourceServersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeSourceServersRequest(obj: MgnDescribeSourceServersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': toJson_MgnDescribeSourceServersRequestFilters(obj.filters),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeSourceServersResponse
 */
export interface MgnDescribeSourceServersResponse {
  /**
   * @schema MgnDescribeSourceServersResponse#items
   */
  readonly items?: MgnSourceServer[];

  /**
   * @schema MgnDescribeSourceServersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MgnDescribeSourceServersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeSourceServersResponse(obj: MgnDescribeSourceServersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'items': obj.items?.map(y => toJson_MgnSourceServer(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDisconnectFromServiceRequest
 */
export interface MgnDisconnectFromServiceRequest {
  /**
   * @schema MgnDisconnectFromServiceRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnDisconnectFromServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDisconnectFromServiceRequest(obj: MgnDisconnectFromServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnFinalizeCutoverRequest
 */
export interface MgnFinalizeCutoverRequest {
  /**
   * @schema MgnFinalizeCutoverRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnFinalizeCutoverRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnFinalizeCutoverRequest(obj: MgnFinalizeCutoverRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnGetLaunchConfigurationRequest
 */
export interface MgnGetLaunchConfigurationRequest {
  /**
   * @schema MgnGetLaunchConfigurationRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnGetLaunchConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnGetLaunchConfigurationRequest(obj: MgnGetLaunchConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLaunchConfiguration
 */
export interface MgnLaunchConfiguration {
  /**
   * @schema MgnLaunchConfiguration#copyPrivateIp
   */
  readonly copyPrivateIp?: boolean;

  /**
   * @schema MgnLaunchConfiguration#copyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema MgnLaunchConfiguration#ec2LaunchTemplateID
   */
  readonly ec2LaunchTemplateId?: string;

  /**
   * @schema MgnLaunchConfiguration#launchDisposition
   */
  readonly launchDisposition?: string;

  /**
   * @schema MgnLaunchConfiguration#licensing
   */
  readonly licensing?: MgnLicensing;

  /**
   * @schema MgnLaunchConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema MgnLaunchConfiguration#sourceServerID
   */
  readonly sourceServerId?: string;

  /**
   * @schema MgnLaunchConfiguration#targetInstanceTypeRightSizingMethod
   */
  readonly targetInstanceTypeRightSizingMethod?: string;

}

/**
 * Converts an object of type 'MgnLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLaunchConfiguration(obj: MgnLaunchConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'copyPrivateIp': obj.copyPrivateIp,
    'copyTags': obj.copyTags,
    'ec2LaunchTemplateID': obj.ec2LaunchTemplateId,
    'launchDisposition': obj.launchDisposition,
    'licensing': toJson_MgnLicensing(obj.licensing),
    'name': obj.name,
    'sourceServerID': obj.sourceServerId,
    'targetInstanceTypeRightSizingMethod': obj.targetInstanceTypeRightSizingMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnGetReplicationConfigurationRequest
 */
export interface MgnGetReplicationConfigurationRequest {
  /**
   * @schema MgnGetReplicationConfigurationRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnGetReplicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnGetReplicationConfigurationRequest(obj: MgnGetReplicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnReplicationConfiguration
 */
export interface MgnReplicationConfiguration {
  /**
   * @schema MgnReplicationConfiguration#associateDefaultSecurityGroup
   */
  readonly associateDefaultSecurityGroup?: boolean;

  /**
   * @schema MgnReplicationConfiguration#bandwidthThrottling
   */
  readonly bandwidthThrottling?: number;

  /**
   * @schema MgnReplicationConfiguration#createPublicIP
   */
  readonly createPublicIp?: boolean;

  /**
   * @schema MgnReplicationConfiguration#dataPlaneRouting
   */
  readonly dataPlaneRouting?: string;

  /**
   * @schema MgnReplicationConfiguration#defaultLargeStagingDiskType
   */
  readonly defaultLargeStagingDiskType?: string;

  /**
   * @schema MgnReplicationConfiguration#ebsEncryption
   */
  readonly ebsEncryption?: string;

  /**
   * @schema MgnReplicationConfiguration#ebsEncryptionKeyArn
   */
  readonly ebsEncryptionKeyArn?: string;

  /**
   * @schema MgnReplicationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema MgnReplicationConfiguration#replicatedDisks
   */
  readonly replicatedDisks?: MgnReplicationConfigurationReplicatedDisk[];

  /**
   * @schema MgnReplicationConfiguration#replicationServerInstanceType
   */
  readonly replicationServerInstanceType?: string;

  /**
   * @schema MgnReplicationConfiguration#replicationServersSecurityGroupsIDs
   */
  readonly replicationServersSecurityGroupsIDs?: string[];

  /**
   * @schema MgnReplicationConfiguration#sourceServerID
   */
  readonly sourceServerId?: string;

  /**
   * @schema MgnReplicationConfiguration#stagingAreaSubnetId
   */
  readonly stagingAreaSubnetId?: string;

  /**
   * @schema MgnReplicationConfiguration#stagingAreaTags
   */
  readonly stagingAreaTags?: { [key: string]: string };

  /**
   * @schema MgnReplicationConfiguration#useDedicatedReplicationServer
   */
  readonly useDedicatedReplicationServer?: boolean;

}

/**
 * Converts an object of type 'MgnReplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnReplicationConfiguration(obj: MgnReplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associateDefaultSecurityGroup': obj.associateDefaultSecurityGroup,
    'bandwidthThrottling': obj.bandwidthThrottling,
    'createPublicIP': obj.createPublicIp,
    'dataPlaneRouting': obj.dataPlaneRouting,
    'defaultLargeStagingDiskType': obj.defaultLargeStagingDiskType,
    'ebsEncryption': obj.ebsEncryption,
    'ebsEncryptionKeyArn': obj.ebsEncryptionKeyArn,
    'name': obj.name,
    'replicatedDisks': obj.replicatedDisks?.map(y => toJson_MgnReplicationConfigurationReplicatedDisk(y)),
    'replicationServerInstanceType': obj.replicationServerInstanceType,
    'replicationServersSecurityGroupsIDs': obj.replicationServersSecurityGroupsIDs?.map(y => y),
    'sourceServerID': obj.sourceServerId,
    'stagingAreaSubnetId': obj.stagingAreaSubnetId,
    'stagingAreaTags': ((obj.stagingAreaTags) === undefined) ? undefined : (Object.entries(obj.stagingAreaTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useDedicatedReplicationServer': obj.useDedicatedReplicationServer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnInitializeServiceRequest
 */
export interface MgnInitializeServiceRequest {
}

/**
 * Converts an object of type 'MgnInitializeServiceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnInitializeServiceRequest(obj: MgnInitializeServiceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnInitializeServiceResponse
 */
export interface MgnInitializeServiceResponse {
}

/**
 * Converts an object of type 'MgnInitializeServiceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnInitializeServiceResponse(obj: MgnInitializeServiceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnListTagsForResourceRequest
 */
export interface MgnListTagsForResourceRequest {
  /**
   * @schema MgnListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'MgnListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnListTagsForResourceRequest(obj: MgnListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnListTagsForResourceResponse
 */
export interface MgnListTagsForResourceResponse {
  /**
   * @schema MgnListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MgnListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnListTagsForResourceResponse(obj: MgnListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnMarkAsArchivedRequest
 */
export interface MgnMarkAsArchivedRequest {
  /**
   * @schema MgnMarkAsArchivedRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnMarkAsArchivedRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnMarkAsArchivedRequest(obj: MgnMarkAsArchivedRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnRetryDataReplicationRequest
 */
export interface MgnRetryDataReplicationRequest {
  /**
   * @schema MgnRetryDataReplicationRequest#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnRetryDataReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnRetryDataReplicationRequest(obj: MgnRetryDataReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnStartCutoverRequest
 */
export interface MgnStartCutoverRequest {
  /**
   * @schema MgnStartCutoverRequest#sourceServerIDs
   */
  readonly sourceServerIDs: string[];

  /**
   * @schema MgnStartCutoverRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MgnStartCutoverRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnStartCutoverRequest(obj: MgnStartCutoverRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerIDs': obj.sourceServerIDs?.map(y => y),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnStartCutoverResponse
 */
export interface MgnStartCutoverResponse {
  /**
   * @schema MgnStartCutoverResponse#job
   */
  readonly job?: MgnJob;

}

/**
 * Converts an object of type 'MgnStartCutoverResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnStartCutoverResponse(obj: MgnStartCutoverResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': toJson_MgnJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnStartTestRequest
 */
export interface MgnStartTestRequest {
  /**
   * @schema MgnStartTestRequest#sourceServerIDs
   */
  readonly sourceServerIDs: string[];

  /**
   * @schema MgnStartTestRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MgnStartTestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnStartTestRequest(obj: MgnStartTestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerIDs': obj.sourceServerIDs?.map(y => y),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnStartTestResponse
 */
export interface MgnStartTestResponse {
  /**
   * @schema MgnStartTestResponse#job
   */
  readonly job?: MgnJob;

}

/**
 * Converts an object of type 'MgnStartTestResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnStartTestResponse(obj: MgnStartTestResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': toJson_MgnJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnTagResourceRequest
 */
export interface MgnTagResourceRequest {
  /**
   * @schema MgnTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MgnTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'MgnTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnTagResourceRequest(obj: MgnTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MgnTerminateTargetInstancesRequest
 */
export interface MgnTerminateTargetInstancesRequest {
  /**
   * @schema MgnTerminateTargetInstancesRequest#sourceServerIDs
   */
  readonly sourceServerIDs: string[];

  /**
   * @schema MgnTerminateTargetInstancesRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MgnTerminateTargetInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnTerminateTargetInstancesRequest(obj: MgnTerminateTargetInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerIDs': obj.sourceServerIDs?.map(y => y),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnTerminateTargetInstancesResponse
 */
export interface MgnTerminateTargetInstancesResponse {
  /**
   * @schema MgnTerminateTargetInstancesResponse#job
   */
  readonly job?: MgnJob;

}

/**
 * Converts an object of type 'MgnTerminateTargetInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnTerminateTargetInstancesResponse(obj: MgnTerminateTargetInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': toJson_MgnJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnUntagResourceRequest
 */
export interface MgnUntagResourceRequest {
  /**
   * @schema MgnUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema MgnUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'MgnUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnUntagResourceRequest(obj: MgnUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema MgnUpdateLaunchConfigurationRequest
 */
export interface MgnUpdateLaunchConfigurationRequest {
  /**
   * @schema MgnUpdateLaunchConfigurationRequest#copyPrivateIp
   */
  readonly copyPrivateIp?: boolean;

  /**
   * @schema MgnUpdateLaunchConfigurationRequest#copyTags
   */
  readonly copyTags?: boolean;

  /**
   * @schema MgnUpdateLaunchConfigurationRequest#launchDisposition
   */
  readonly launchDisposition?: string;

  /**
   * @schema MgnUpdateLaunchConfigurationRequest#licensing
   */
  readonly licensing?: MgnLicensing;

  /**
   * @schema MgnUpdateLaunchConfigurationRequest#name
   */
  readonly name?: string;

  /**
   * @schema MgnUpdateLaunchConfigurationRequest#sourceServerID
   */
  readonly sourceServerId?: string;

  /**
   * @schema MgnUpdateLaunchConfigurationRequest#targetInstanceTypeRightSizingMethod
   */
  readonly targetInstanceTypeRightSizingMethod?: string;

}

/**
 * Converts an object of type 'MgnUpdateLaunchConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnUpdateLaunchConfigurationRequest(obj: MgnUpdateLaunchConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'copyPrivateIp': obj.copyPrivateIp,
    'copyTags': obj.copyTags,
    'launchDisposition': obj.launchDisposition,
    'licensing': toJson_MgnLicensing(obj.licensing),
    'name': obj.name,
    'sourceServerID': obj.sourceServerId,
    'targetInstanceTypeRightSizingMethod': obj.targetInstanceTypeRightSizingMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnUpdateReplicationConfigurationRequest
 */
export interface MgnUpdateReplicationConfigurationRequest {
  /**
   * @schema MgnUpdateReplicationConfigurationRequest#associateDefaultSecurityGroup
   */
  readonly associateDefaultSecurityGroup?: boolean;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#bandwidthThrottling
   */
  readonly bandwidthThrottling?: number;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#createPublicIP
   */
  readonly createPublicIp?: boolean;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#dataPlaneRouting
   */
  readonly dataPlaneRouting?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#defaultLargeStagingDiskType
   */
  readonly defaultLargeStagingDiskType?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#ebsEncryption
   */
  readonly ebsEncryption?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#ebsEncryptionKeyArn
   */
  readonly ebsEncryptionKeyArn?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#name
   */
  readonly name?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#replicatedDisks
   */
  readonly replicatedDisks?: MgnReplicationConfigurationReplicatedDisk[];

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#replicationServerInstanceType
   */
  readonly replicationServerInstanceType?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#replicationServersSecurityGroupsIDs
   */
  readonly replicationServersSecurityGroupsIDs?: string[];

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#sourceServerID
   */
  readonly sourceServerId?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#stagingAreaSubnetId
   */
  readonly stagingAreaSubnetId?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#stagingAreaTags
   */
  readonly stagingAreaTags?: { [key: string]: string };

  /**
   * @schema MgnUpdateReplicationConfigurationRequest#useDedicatedReplicationServer
   */
  readonly useDedicatedReplicationServer?: boolean;

}

/**
 * Converts an object of type 'MgnUpdateReplicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnUpdateReplicationConfigurationRequest(obj: MgnUpdateReplicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associateDefaultSecurityGroup': obj.associateDefaultSecurityGroup,
    'bandwidthThrottling': obj.bandwidthThrottling,
    'createPublicIP': obj.createPublicIp,
    'dataPlaneRouting': obj.dataPlaneRouting,
    'defaultLargeStagingDiskType': obj.defaultLargeStagingDiskType,
    'ebsEncryption': obj.ebsEncryption,
    'ebsEncryptionKeyArn': obj.ebsEncryptionKeyArn,
    'name': obj.name,
    'replicatedDisks': obj.replicatedDisks?.map(y => toJson_MgnReplicationConfigurationReplicatedDisk(y)),
    'replicationServerInstanceType': obj.replicationServerInstanceType,
    'replicationServersSecurityGroupsIDs': obj.replicationServersSecurityGroupsIDs?.map(y => y),
    'sourceServerID': obj.sourceServerId,
    'stagingAreaSubnetId': obj.stagingAreaSubnetId,
    'stagingAreaTags': ((obj.stagingAreaTags) === undefined) ? undefined : (Object.entries(obj.stagingAreaTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useDedicatedReplicationServer': obj.useDedicatedReplicationServer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnUpdateReplicationConfigurationTemplateRequest
 */
export interface MgnUpdateReplicationConfigurationTemplateRequest {
  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#associateDefaultSecurityGroup
   */
  readonly associateDefaultSecurityGroup?: boolean;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#bandwidthThrottling
   */
  readonly bandwidthThrottling?: number;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#createPublicIP
   */
  readonly createPublicIp?: boolean;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#dataPlaneRouting
   */
  readonly dataPlaneRouting?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#defaultLargeStagingDiskType
   */
  readonly defaultLargeStagingDiskType?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#ebsEncryption
   */
  readonly ebsEncryption?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#ebsEncryptionKeyArn
   */
  readonly ebsEncryptionKeyArn?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#replicationConfigurationTemplateID
   */
  readonly replicationConfigurationTemplateId?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#replicationServerInstanceType
   */
  readonly replicationServerInstanceType?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#replicationServersSecurityGroupsIDs
   */
  readonly replicationServersSecurityGroupsIDs?: string[];

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#stagingAreaSubnetId
   */
  readonly stagingAreaSubnetId?: string;

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#stagingAreaTags
   */
  readonly stagingAreaTags?: { [key: string]: string };

  /**
   * @schema MgnUpdateReplicationConfigurationTemplateRequest#useDedicatedReplicationServer
   */
  readonly useDedicatedReplicationServer?: boolean;

}

/**
 * Converts an object of type 'MgnUpdateReplicationConfigurationTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnUpdateReplicationConfigurationTemplateRequest(obj: MgnUpdateReplicationConfigurationTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'associateDefaultSecurityGroup': obj.associateDefaultSecurityGroup,
    'bandwidthThrottling': obj.bandwidthThrottling,
    'createPublicIP': obj.createPublicIp,
    'dataPlaneRouting': obj.dataPlaneRouting,
    'defaultLargeStagingDiskType': obj.defaultLargeStagingDiskType,
    'ebsEncryption': obj.ebsEncryption,
    'ebsEncryptionKeyArn': obj.ebsEncryptionKeyArn,
    'replicationConfigurationTemplateID': obj.replicationConfigurationTemplateId,
    'replicationServerInstanceType': obj.replicationServerInstanceType,
    'replicationServersSecurityGroupsIDs': obj.replicationServersSecurityGroupsIDs?.map(y => y),
    'stagingAreaSubnetId': obj.stagingAreaSubnetId,
    'stagingAreaTags': ((obj.stagingAreaTags) === undefined) ? undefined : (Object.entries(obj.stagingAreaTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'useDedicatedReplicationServer': obj.useDedicatedReplicationServer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnChangeServerLifeCycleStateSourceServerLifecycle
 */
export interface MgnChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * @schema MgnChangeServerLifeCycleStateSourceServerLifecycle#state
   */
  readonly state: string;

}

/**
 * Converts an object of type 'MgnChangeServerLifeCycleStateSourceServerLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnChangeServerLifeCycleStateSourceServerLifecycle(obj: MgnChangeServerLifeCycleStateSourceServerLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDataReplicationInfo
 */
export interface MgnDataReplicationInfo {
  /**
   * @schema MgnDataReplicationInfo#dataReplicationError
   */
  readonly dataReplicationError?: MgnDataReplicationError;

  /**
   * @schema MgnDataReplicationInfo#dataReplicationInitiation
   */
  readonly dataReplicationInitiation?: MgnDataReplicationInitiation;

  /**
   * @schema MgnDataReplicationInfo#dataReplicationState
   */
  readonly dataReplicationState?: string;

  /**
   * @schema MgnDataReplicationInfo#etaDateTime
   */
  readonly etaDateTime?: string;

  /**
   * @schema MgnDataReplicationInfo#lagDuration
   */
  readonly lagDuration?: string;

  /**
   * @schema MgnDataReplicationInfo#replicatedDisks
   */
  readonly replicatedDisks?: MgnDataReplicationInfoReplicatedDisk[];

}

/**
 * Converts an object of type 'MgnDataReplicationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDataReplicationInfo(obj: MgnDataReplicationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataReplicationError': toJson_MgnDataReplicationError(obj.dataReplicationError),
    'dataReplicationInitiation': toJson_MgnDataReplicationInitiation(obj.dataReplicationInitiation),
    'dataReplicationState': obj.dataReplicationState,
    'etaDateTime': obj.etaDateTime,
    'lagDuration': obj.lagDuration,
    'replicatedDisks': obj.replicatedDisks?.map(y => toJson_MgnDataReplicationInfoReplicatedDisk(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLaunchedInstance
 */
export interface MgnLaunchedInstance {
  /**
   * @schema MgnLaunchedInstance#ec2InstanceID
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema MgnLaunchedInstance#firstBoot
   */
  readonly firstBoot?: string;

  /**
   * @schema MgnLaunchedInstance#jobID
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'MgnLaunchedInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLaunchedInstance(obj: MgnLaunchedInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ec2InstanceID': obj.ec2InstanceId,
    'firstBoot': obj.firstBoot,
    'jobID': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycle
 */
export interface MgnLifeCycle {
  /**
   * @schema MgnLifeCycle#addedToServiceDateTime
   */
  readonly addedToServiceDateTime?: string;

  /**
   * @schema MgnLifeCycle#elapsedReplicationDuration
   */
  readonly elapsedReplicationDuration?: string;

  /**
   * @schema MgnLifeCycle#firstByteDateTime
   */
  readonly firstByteDateTime?: string;

  /**
   * @schema MgnLifeCycle#lastCutover
   */
  readonly lastCutover?: MgnLifeCycleLastCutover;

  /**
   * @schema MgnLifeCycle#lastSeenByServiceDateTime
   */
  readonly lastSeenByServiceDateTime?: string;

  /**
   * @schema MgnLifeCycle#lastTest
   */
  readonly lastTest?: MgnLifeCycleLastTest;

  /**
   * @schema MgnLifeCycle#state
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'MgnLifeCycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycle(obj: MgnLifeCycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addedToServiceDateTime': obj.addedToServiceDateTime,
    'elapsedReplicationDuration': obj.elapsedReplicationDuration,
    'firstByteDateTime': obj.firstByteDateTime,
    'lastCutover': toJson_MgnLifeCycleLastCutover(obj.lastCutover),
    'lastSeenByServiceDateTime': obj.lastSeenByServiceDateTime,
    'lastTest': toJson_MgnLifeCycleLastTest(obj.lastTest),
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnSourceProperties
 */
export interface MgnSourceProperties {
  /**
   * @schema MgnSourceProperties#cpus
   */
  readonly cpus?: MgnCpu[];

  /**
   * @schema MgnSourceProperties#disks
   */
  readonly disks?: MgnDisk[];

  /**
   * @schema MgnSourceProperties#identificationHints
   */
  readonly identificationHints?: MgnIdentificationHints;

  /**
   * @schema MgnSourceProperties#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema MgnSourceProperties#networkInterfaces
   */
  readonly networkInterfaces?: MgnNetworkInterface[];

  /**
   * @schema MgnSourceProperties#os
   */
  readonly os?: MgnOs;

  /**
   * @schema MgnSourceProperties#ramBytes
   */
  readonly ramBytes?: number;

  /**
   * @schema MgnSourceProperties#recommendedInstanceType
   */
  readonly recommendedInstanceType?: string;

}

/**
 * Converts an object of type 'MgnSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnSourceProperties(obj: MgnSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cpus': obj.cpus?.map(y => toJson_MgnCpu(y)),
    'disks': obj.disks?.map(y => toJson_MgnDisk(y)),
    'identificationHints': toJson_MgnIdentificationHints(obj.identificationHints),
    'lastUpdatedDateTime': obj.lastUpdatedDateTime,
    'networkInterfaces': obj.networkInterfaces?.map(y => toJson_MgnNetworkInterface(y)),
    'os': toJson_MgnOs(obj.os),
    'ramBytes': obj.ramBytes,
    'recommendedInstanceType': obj.recommendedInstanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnJobLog
 */
export interface MgnJobLog {
  /**
   * @schema MgnJobLog#event
   */
  readonly event?: string;

  /**
   * @schema MgnJobLog#eventData
   */
  readonly eventData?: MgnJobLogEventData;

  /**
   * @schema MgnJobLog#logDateTime
   */
  readonly logDateTime?: string;

}

/**
 * Converts an object of type 'MgnJobLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnJobLog(obj: MgnJobLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'event': obj.event,
    'eventData': toJson_MgnJobLogEventData(obj.eventData),
    'logDateTime': obj.logDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeJobsRequestFilters
 */
export interface MgnDescribeJobsRequestFilters {
  /**
   * @schema MgnDescribeJobsRequestFilters#fromDate
   */
  readonly fromDate?: string;

  /**
   * @schema MgnDescribeJobsRequestFilters#jobIDs
   */
  readonly jobIDs?: string[];

  /**
   * @schema MgnDescribeJobsRequestFilters#toDate
   */
  readonly toDate?: string;

}

/**
 * Converts an object of type 'MgnDescribeJobsRequestFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeJobsRequestFilters(obj: MgnDescribeJobsRequestFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fromDate': obj.fromDate,
    'jobIDs': obj.jobIDs?.map(y => y),
    'toDate': obj.toDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnJob
 */
export interface MgnJob {
  /**
   * @schema MgnJob#arn
   */
  readonly arn?: string;

  /**
   * @schema MgnJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema MgnJob#endDateTime
   */
  readonly endDateTime?: string;

  /**
   * @schema MgnJob#initiatedBy
   */
  readonly initiatedBy?: string;

  /**
   * @schema MgnJob#jobID
   */
  readonly jobId?: string;

  /**
   * @schema MgnJob#participatingServers
   */
  readonly participatingServers?: MgnParticipatingServer[];

  /**
   * @schema MgnJob#status
   */
  readonly status?: string;

  /**
   * @schema MgnJob#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MgnJob#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MgnJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnJob(obj: MgnJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'creationDateTime': obj.creationDateTime,
    'endDateTime': obj.endDateTime,
    'initiatedBy': obj.initiatedBy,
    'jobID': obj.jobId,
    'participatingServers': obj.participatingServers?.map(y => toJson_MgnParticipatingServer(y)),
    'status': obj.status,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDescribeSourceServersRequestFilters
 */
export interface MgnDescribeSourceServersRequestFilters {
  /**
   * @schema MgnDescribeSourceServersRequestFilters#isArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema MgnDescribeSourceServersRequestFilters#sourceServerIDs
   */
  readonly sourceServerIDs?: string[];

}

/**
 * Converts an object of type 'MgnDescribeSourceServersRequestFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDescribeSourceServersRequestFilters(obj: MgnDescribeSourceServersRequestFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isArchived': obj.isArchived,
    'sourceServerIDs': obj.sourceServerIDs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLicensing
 */
export interface MgnLicensing {
  /**
   * @schema MgnLicensing#osByol
   */
  readonly osByol?: boolean;

}

/**
 * Converts an object of type 'MgnLicensing' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLicensing(obj: MgnLicensing | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'osByol': obj.osByol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnReplicationConfigurationReplicatedDisk
 */
export interface MgnReplicationConfigurationReplicatedDisk {
  /**
   * @schema MgnReplicationConfigurationReplicatedDisk#deviceName
   */
  readonly deviceName?: string;

  /**
   * @schema MgnReplicationConfigurationReplicatedDisk#iops
   */
  readonly iops?: number;

  /**
   * @schema MgnReplicationConfigurationReplicatedDisk#isBootDisk
   */
  readonly isBootDisk?: boolean;

  /**
   * @schema MgnReplicationConfigurationReplicatedDisk#stagingDiskType
   */
  readonly stagingDiskType?: string;

}

/**
 * Converts an object of type 'MgnReplicationConfigurationReplicatedDisk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnReplicationConfigurationReplicatedDisk(obj: MgnReplicationConfigurationReplicatedDisk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceName': obj.deviceName,
    'iops': obj.iops,
    'isBootDisk': obj.isBootDisk,
    'stagingDiskType': obj.stagingDiskType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDataReplicationError
 */
export interface MgnDataReplicationError {
  /**
   * @schema MgnDataReplicationError#error
   */
  readonly error?: string;

  /**
   * @schema MgnDataReplicationError#rawError
   */
  readonly rawError?: string;

}

/**
 * Converts an object of type 'MgnDataReplicationError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDataReplicationError(obj: MgnDataReplicationError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'error': obj.error,
    'rawError': obj.rawError,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDataReplicationInitiation
 */
export interface MgnDataReplicationInitiation {
  /**
   * @schema MgnDataReplicationInitiation#nextAttemptDateTime
   */
  readonly nextAttemptDateTime?: string;

  /**
   * @schema MgnDataReplicationInitiation#startDateTime
   */
  readonly startDateTime?: string;

  /**
   * @schema MgnDataReplicationInitiation#steps
   */
  readonly steps?: MgnDataReplicationInitiationStep[];

}

/**
 * Converts an object of type 'MgnDataReplicationInitiation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDataReplicationInitiation(obj: MgnDataReplicationInitiation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextAttemptDateTime': obj.nextAttemptDateTime,
    'startDateTime': obj.startDateTime,
    'steps': obj.steps?.map(y => toJson_MgnDataReplicationInitiationStep(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDataReplicationInfoReplicatedDisk
 */
export interface MgnDataReplicationInfoReplicatedDisk {
  /**
   * @schema MgnDataReplicationInfoReplicatedDisk#backloggedStorageBytes
   */
  readonly backloggedStorageBytes?: number;

  /**
   * @schema MgnDataReplicationInfoReplicatedDisk#deviceName
   */
  readonly deviceName?: string;

  /**
   * @schema MgnDataReplicationInfoReplicatedDisk#replicatedStorageBytes
   */
  readonly replicatedStorageBytes?: number;

  /**
   * @schema MgnDataReplicationInfoReplicatedDisk#rescannedStorageBytes
   */
  readonly rescannedStorageBytes?: number;

  /**
   * @schema MgnDataReplicationInfoReplicatedDisk#totalStorageBytes
   */
  readonly totalStorageBytes?: number;

}

/**
 * Converts an object of type 'MgnDataReplicationInfoReplicatedDisk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDataReplicationInfoReplicatedDisk(obj: MgnDataReplicationInfoReplicatedDisk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backloggedStorageBytes': obj.backloggedStorageBytes,
    'deviceName': obj.deviceName,
    'replicatedStorageBytes': obj.replicatedStorageBytes,
    'rescannedStorageBytes': obj.rescannedStorageBytes,
    'totalStorageBytes': obj.totalStorageBytes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastCutover
 */
export interface MgnLifeCycleLastCutover {
  /**
   * @schema MgnLifeCycleLastCutover#finalized
   */
  readonly finalized?: MgnLifeCycleLastCutoverFinalized;

  /**
   * @schema MgnLifeCycleLastCutover#initiated
   */
  readonly initiated?: MgnLifeCycleLastCutoverInitiated;

  /**
   * @schema MgnLifeCycleLastCutover#reverted
   */
  readonly reverted?: MgnLifeCycleLastCutoverReverted;

}

/**
 * Converts an object of type 'MgnLifeCycleLastCutover' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastCutover(obj: MgnLifeCycleLastCutover | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'finalized': toJson_MgnLifeCycleLastCutoverFinalized(obj.finalized),
    'initiated': toJson_MgnLifeCycleLastCutoverInitiated(obj.initiated),
    'reverted': toJson_MgnLifeCycleLastCutoverReverted(obj.reverted),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastTest
 */
export interface MgnLifeCycleLastTest {
  /**
   * @schema MgnLifeCycleLastTest#finalized
   */
  readonly finalized?: MgnLifeCycleLastTestFinalized;

  /**
   * @schema MgnLifeCycleLastTest#initiated
   */
  readonly initiated?: MgnLifeCycleLastTestInitiated;

  /**
   * @schema MgnLifeCycleLastTest#reverted
   */
  readonly reverted?: MgnLifeCycleLastTestReverted;

}

/**
 * Converts an object of type 'MgnLifeCycleLastTest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastTest(obj: MgnLifeCycleLastTest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'finalized': toJson_MgnLifeCycleLastTestFinalized(obj.finalized),
    'initiated': toJson_MgnLifeCycleLastTestInitiated(obj.initiated),
    'reverted': toJson_MgnLifeCycleLastTestReverted(obj.reverted),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnCpu
 */
export interface MgnCpu {
  /**
   * @schema MgnCpu#cores
   */
  readonly cores?: number;

  /**
   * @schema MgnCpu#modelName
   */
  readonly modelName?: string;

}

/**
 * Converts an object of type 'MgnCpu' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnCpu(obj: MgnCpu | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cores': obj.cores,
    'modelName': obj.modelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDisk
 */
export interface MgnDisk {
  /**
   * @schema MgnDisk#bytes
   */
  readonly bytes?: number;

  /**
   * @schema MgnDisk#deviceName
   */
  readonly deviceName?: string;

}

/**
 * Converts an object of type 'MgnDisk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDisk(obj: MgnDisk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bytes': obj.bytes,
    'deviceName': obj.deviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnIdentificationHints
 */
export interface MgnIdentificationHints {
  /**
   * @schema MgnIdentificationHints#awsInstanceID
   */
  readonly awsInstanceId?: string;

  /**
   * @schema MgnIdentificationHints#fqdn
   */
  readonly fqdn?: string;

  /**
   * @schema MgnIdentificationHints#hostname
   */
  readonly hostname?: string;

  /**
   * @schema MgnIdentificationHints#vmWareUuid
   */
  readonly vmWareUuid?: string;

}

/**
 * Converts an object of type 'MgnIdentificationHints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnIdentificationHints(obj: MgnIdentificationHints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsInstanceID': obj.awsInstanceId,
    'fqdn': obj.fqdn,
    'hostname': obj.hostname,
    'vmWareUuid': obj.vmWareUuid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnNetworkInterface
 */
export interface MgnNetworkInterface {
  /**
   * @schema MgnNetworkInterface#ips
   */
  readonly ips?: string[];

  /**
   * @schema MgnNetworkInterface#isPrimary
   */
  readonly isPrimary?: boolean;

  /**
   * @schema MgnNetworkInterface#macAddress
   */
  readonly macAddress?: string;

}

/**
 * Converts an object of type 'MgnNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnNetworkInterface(obj: MgnNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ips': obj.ips?.map(y => y),
    'isPrimary': obj.isPrimary,
    'macAddress': obj.macAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnOs
 */
export interface MgnOs {
  /**
   * @schema MgnOs#fullString
   */
  readonly fullString?: string;

}

/**
 * Converts an object of type 'MgnOs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnOs(obj: MgnOs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fullString': obj.fullString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnJobLogEventData
 */
export interface MgnJobLogEventData {
  /**
   * @schema MgnJobLogEventData#conversionServerID
   */
  readonly conversionServerId?: string;

  /**
   * @schema MgnJobLogEventData#rawError
   */
  readonly rawError?: string;

  /**
   * @schema MgnJobLogEventData#sourceServerID
   */
  readonly sourceServerId?: string;

  /**
   * @schema MgnJobLogEventData#targetInstanceID
   */
  readonly targetInstanceId?: string;

}

/**
 * Converts an object of type 'MgnJobLogEventData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnJobLogEventData(obj: MgnJobLogEventData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'conversionServerID': obj.conversionServerId,
    'rawError': obj.rawError,
    'sourceServerID': obj.sourceServerId,
    'targetInstanceID': obj.targetInstanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnParticipatingServer
 */
export interface MgnParticipatingServer {
  /**
   * @schema MgnParticipatingServer#launchStatus
   */
  readonly launchStatus?: string;

  /**
   * @schema MgnParticipatingServer#sourceServerID
   */
  readonly sourceServerId?: string;

}

/**
 * Converts an object of type 'MgnParticipatingServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnParticipatingServer(obj: MgnParticipatingServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'launchStatus': obj.launchStatus,
    'sourceServerID': obj.sourceServerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnDataReplicationInitiationStep
 */
export interface MgnDataReplicationInitiationStep {
  /**
   * @schema MgnDataReplicationInitiationStep#name
   */
  readonly name?: string;

  /**
   * @schema MgnDataReplicationInitiationStep#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MgnDataReplicationInitiationStep' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnDataReplicationInitiationStep(obj: MgnDataReplicationInitiationStep | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastCutoverFinalized
 */
export interface MgnLifeCycleLastCutoverFinalized {
  /**
   * @schema MgnLifeCycleLastCutoverFinalized#apiCallDateTime
   */
  readonly apiCallDateTime?: string;

}

/**
 * Converts an object of type 'MgnLifeCycleLastCutoverFinalized' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastCutoverFinalized(obj: MgnLifeCycleLastCutoverFinalized | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCallDateTime': obj.apiCallDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastCutoverInitiated
 */
export interface MgnLifeCycleLastCutoverInitiated {
  /**
   * @schema MgnLifeCycleLastCutoverInitiated#apiCallDateTime
   */
  readonly apiCallDateTime?: string;

  /**
   * @schema MgnLifeCycleLastCutoverInitiated#jobID
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'MgnLifeCycleLastCutoverInitiated' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastCutoverInitiated(obj: MgnLifeCycleLastCutoverInitiated | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCallDateTime': obj.apiCallDateTime,
    'jobID': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastCutoverReverted
 */
export interface MgnLifeCycleLastCutoverReverted {
  /**
   * @schema MgnLifeCycleLastCutoverReverted#apiCallDateTime
   */
  readonly apiCallDateTime?: string;

}

/**
 * Converts an object of type 'MgnLifeCycleLastCutoverReverted' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastCutoverReverted(obj: MgnLifeCycleLastCutoverReverted | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCallDateTime': obj.apiCallDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastTestFinalized
 */
export interface MgnLifeCycleLastTestFinalized {
  /**
   * @schema MgnLifeCycleLastTestFinalized#apiCallDateTime
   */
  readonly apiCallDateTime?: string;

}

/**
 * Converts an object of type 'MgnLifeCycleLastTestFinalized' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastTestFinalized(obj: MgnLifeCycleLastTestFinalized | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCallDateTime': obj.apiCallDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastTestInitiated
 */
export interface MgnLifeCycleLastTestInitiated {
  /**
   * @schema MgnLifeCycleLastTestInitiated#apiCallDateTime
   */
  readonly apiCallDateTime?: string;

  /**
   * @schema MgnLifeCycleLastTestInitiated#jobID
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'MgnLifeCycleLastTestInitiated' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastTestInitiated(obj: MgnLifeCycleLastTestInitiated | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCallDateTime': obj.apiCallDateTime,
    'jobID': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MgnLifeCycleLastTestReverted
 */
export interface MgnLifeCycleLastTestReverted {
  /**
   * @schema MgnLifeCycleLastTestReverted#apiCallDateTime
   */
  readonly apiCallDateTime?: string;

}

/**
 * Converts an object of type 'MgnLifeCycleLastTestReverted' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MgnLifeCycleLastTestReverted(obj: MgnLifeCycleLastTestReverted | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiCallDateTime': obj.apiCallDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
