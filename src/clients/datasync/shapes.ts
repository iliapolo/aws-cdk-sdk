/**
 * @schema DataSyncCancelTaskExecutionRequest
 */
export interface DataSyncCancelTaskExecutionRequest {
  /**
   * @schema DataSyncCancelTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

}

/**
 * Converts an object of type 'DataSyncCancelTaskExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCancelTaskExecutionRequest(obj: DataSyncCancelTaskExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutionArn': obj.taskExecutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCancelTaskExecutionResponse
 */
export interface DataSyncCancelTaskExecutionResponse {
}

/**
 * Converts an object of type 'DataSyncCancelTaskExecutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCancelTaskExecutionResponse(obj: DataSyncCancelTaskExecutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateAgentRequest
 */
export interface DataSyncCreateAgentRequest {
  /**
   * @schema DataSyncCreateAgentRequest#ActivationKey
   */
  readonly activationKey?: string;

  /**
   * @schema DataSyncCreateAgentRequest#AgentName
   */
  readonly agentName?: string;

  /**
   * @schema DataSyncCreateAgentRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

  /**
   * @schema DataSyncCreateAgentRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema DataSyncCreateAgentRequest#SubnetArns
   */
  readonly subnetArns?: string[];

  /**
   * @schema DataSyncCreateAgentRequest#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

}

/**
 * Converts an object of type 'DataSyncCreateAgentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateAgentRequest(obj: DataSyncCreateAgentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivationKey': obj.activationKey,
    'AgentName': obj.agentName,
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
    'VpcEndpointId': obj.vpcEndpointId,
    'SubnetArns': obj.subnetArns?.map(y => y),
    'SecurityGroupArns': obj.securityGroupArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateAgentResponse
 */
export interface DataSyncCreateAgentResponse {
  /**
   * @schema DataSyncCreateAgentResponse#AgentArn
   */
  readonly agentArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateAgentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateAgentResponse(obj: DataSyncCreateAgentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArn': obj.agentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationEfsRequest
 */
export interface DataSyncCreateLocationEfsRequest {
  /**
   * @schema DataSyncCreateLocationEfsRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncCreateLocationEfsRequest#EfsFilesystemArn
   */
  readonly efsFilesystemArn?: string;

  /**
   * @schema DataSyncCreateLocationEfsRequest#Ec2Config
   */
  readonly ec2Config?: DataSyncEc2Config;

  /**
   * @schema DataSyncCreateLocationEfsRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncCreateLocationEfsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationEfsRequest(obj: DataSyncCreateLocationEfsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subdirectory': obj.subdirectory,
    'EfsFilesystemArn': obj.efsFilesystemArn,
    'Ec2Config': toJson_DataSyncEc2Config(obj.ec2Config),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationEfsResponse
 */
export interface DataSyncCreateLocationEfsResponse {
  /**
   * @schema DataSyncCreateLocationEfsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationEfsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationEfsResponse(obj: DataSyncCreateLocationEfsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationFsxWindowsRequest
 */
export interface DataSyncCreateLocationFsxWindowsRequest {
  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#FsxFilesystemArn
   */
  readonly fsxFilesystemArn?: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#User
   */
  readonly user?: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationFsxWindowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationFsxWindowsRequest(obj: DataSyncCreateLocationFsxWindowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subdirectory': obj.subdirectory,
    'FsxFilesystemArn': obj.fsxFilesystemArn,
    'SecurityGroupArns': obj.securityGroupArns?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
    'User': obj.user,
    'Domain': obj.domain,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationFsxWindowsResponse
 */
export interface DataSyncCreateLocationFsxWindowsResponse {
  /**
   * @schema DataSyncCreateLocationFsxWindowsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationFsxWindowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationFsxWindowsResponse(obj: DataSyncCreateLocationFsxWindowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationNfsRequest
 */
export interface DataSyncCreateLocationNfsRequest {
  /**
   * @schema DataSyncCreateLocationNfsRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncCreateLocationNfsRequest#ServerHostname
   */
  readonly serverHostname?: string;

  /**
   * @schema DataSyncCreateLocationNfsRequest#OnPremConfig
   */
  readonly onPremConfig?: DataSyncOnPremConfig;

  /**
   * @schema DataSyncCreateLocationNfsRequest#MountOptions
   */
  readonly mountOptions?: DataSyncNfsMountOptions;

  /**
   * @schema DataSyncCreateLocationNfsRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncCreateLocationNfsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationNfsRequest(obj: DataSyncCreateLocationNfsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subdirectory': obj.subdirectory,
    'ServerHostname': obj.serverHostname,
    'OnPremConfig': toJson_DataSyncOnPremConfig(obj.onPremConfig),
    'MountOptions': toJson_DataSyncNfsMountOptions(obj.mountOptions),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationNfsResponse
 */
export interface DataSyncCreateLocationNfsResponse {
  /**
   * @schema DataSyncCreateLocationNfsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationNfsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationNfsResponse(obj: DataSyncCreateLocationNfsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationObjectStorageRequest
 */
export interface DataSyncCreateLocationObjectStorageRequest {
  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#ServerHostname
   */
  readonly serverHostname?: string;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#ServerPort
   */
  readonly serverPort?: number;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#AccessKey
   */
  readonly accessKey?: string;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#SecretKey
   */
  readonly secretKey?: string;

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncCreateLocationObjectStorageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationObjectStorageRequest(obj: DataSyncCreateLocationObjectStorageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerHostname': obj.serverHostname,
    'ServerPort': obj.serverPort,
    'ServerProtocol': obj.serverProtocol,
    'Subdirectory': obj.subdirectory,
    'BucketName': obj.bucketName,
    'AccessKey': obj.accessKey,
    'SecretKey': obj.secretKey,
    'AgentArns': obj.agentArns?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationObjectStorageResponse
 */
export interface DataSyncCreateLocationObjectStorageResponse {
  /**
   * @schema DataSyncCreateLocationObjectStorageResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationObjectStorageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationObjectStorageResponse(obj: DataSyncCreateLocationObjectStorageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationS3Request
 */
export interface DataSyncCreateLocationS3Request {
  /**
   * @schema DataSyncCreateLocationS3Request#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncCreateLocationS3Request#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema DataSyncCreateLocationS3Request#S3StorageClass
   */
  readonly s3StorageClass?: string;

  /**
   * @schema DataSyncCreateLocationS3Request#S3Config
   */
  readonly s3Config?: DataSyncS3Config;

  /**
   * @schema DataSyncCreateLocationS3Request#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncCreateLocationS3Request#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncCreateLocationS3Request' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationS3Request(obj: DataSyncCreateLocationS3Request | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subdirectory': obj.subdirectory,
    'S3BucketArn': obj.s3BucketArn,
    'S3StorageClass': obj.s3StorageClass,
    'S3Config': toJson_DataSyncS3Config(obj.s3Config),
    'AgentArns': obj.agentArns?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationS3Response
 */
export interface DataSyncCreateLocationS3Response {
  /**
   * @schema DataSyncCreateLocationS3Response#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationS3Response' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationS3Response(obj: DataSyncCreateLocationS3Response | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationSmbRequest
 */
export interface DataSyncCreateLocationSmbRequest {
  /**
   * @schema DataSyncCreateLocationSmbRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#ServerHostname
   */
  readonly serverHostname?: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#User
   */
  readonly user?: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#Password
   */
  readonly password?: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncCreateLocationSmbRequest#MountOptions
   */
  readonly mountOptions?: DataSyncSmbMountOptions;

  /**
   * @schema DataSyncCreateLocationSmbRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncCreateLocationSmbRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationSmbRequest(obj: DataSyncCreateLocationSmbRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subdirectory': obj.subdirectory,
    'ServerHostname': obj.serverHostname,
    'User': obj.user,
    'Domain': obj.domain,
    'Password': obj.password,
    'AgentArns': obj.agentArns?.map(y => y),
    'MountOptions': toJson_DataSyncSmbMountOptions(obj.mountOptions),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateLocationSmbResponse
 */
export interface DataSyncCreateLocationSmbResponse {
  /**
   * @schema DataSyncCreateLocationSmbResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateLocationSmbResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateLocationSmbResponse(obj: DataSyncCreateLocationSmbResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateTaskRequest
 */
export interface DataSyncCreateTaskRequest {
  /**
   * @schema DataSyncCreateTaskRequest#SourceLocationArn
   */
  readonly sourceLocationArn?: string;

  /**
   * @schema DataSyncCreateTaskRequest#DestinationLocationArn
   */
  readonly destinationLocationArn?: string;

  /**
   * @schema DataSyncCreateTaskRequest#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema DataSyncCreateTaskRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncCreateTaskRequest#Options
   */
  readonly options?: DataSyncOptions;

  /**
   * @schema DataSyncCreateTaskRequest#Excludes
   */
  readonly excludes?: DataSyncFilterRule[];

  /**
   * @schema DataSyncCreateTaskRequest#Schedule
   */
  readonly schedule?: DataSyncTaskSchedule;

  /**
   * @schema DataSyncCreateTaskRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncCreateTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateTaskRequest(obj: DataSyncCreateTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceLocationArn': obj.sourceLocationArn,
    'DestinationLocationArn': obj.destinationLocationArn,
    'CloudWatchLogGroupArn': obj.cloudWatchLogGroupArn,
    'Name': obj.name,
    'Options': toJson_DataSyncOptions(obj.options),
    'Excludes': obj.excludes?.map(y => toJson_DataSyncFilterRule(y)),
    'Schedule': toJson_DataSyncTaskSchedule(obj.schedule),
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncCreateTaskResponse
 */
export interface DataSyncCreateTaskResponse {
  /**
   * @schema DataSyncCreateTaskResponse#TaskArn
   */
  readonly taskArn?: string;

}

/**
 * Converts an object of type 'DataSyncCreateTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncCreateTaskResponse(obj: DataSyncCreateTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDeleteAgentRequest
 */
export interface DataSyncDeleteAgentRequest {
  /**
   * @schema DataSyncDeleteAgentRequest#AgentArn
   */
  readonly agentArn?: string;

}

/**
 * Converts an object of type 'DataSyncDeleteAgentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDeleteAgentRequest(obj: DataSyncDeleteAgentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArn': obj.agentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDeleteAgentResponse
 */
export interface DataSyncDeleteAgentResponse {
}

/**
 * Converts an object of type 'DataSyncDeleteAgentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDeleteAgentResponse(obj: DataSyncDeleteAgentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDeleteLocationRequest
 */
export interface DataSyncDeleteLocationRequest {
  /**
   * @schema DataSyncDeleteLocationRequest#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDeleteLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDeleteLocationRequest(obj: DataSyncDeleteLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDeleteLocationResponse
 */
export interface DataSyncDeleteLocationResponse {
}

/**
 * Converts an object of type 'DataSyncDeleteLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDeleteLocationResponse(obj: DataSyncDeleteLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDeleteTaskRequest
 */
export interface DataSyncDeleteTaskRequest {
  /**
   * @schema DataSyncDeleteTaskRequest#TaskArn
   */
  readonly taskArn?: string;

}

/**
 * Converts an object of type 'DataSyncDeleteTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDeleteTaskRequest(obj: DataSyncDeleteTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDeleteTaskResponse
 */
export interface DataSyncDeleteTaskResponse {
}

/**
 * Converts an object of type 'DataSyncDeleteTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDeleteTaskResponse(obj: DataSyncDeleteTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeAgentRequest
 */
export interface DataSyncDescribeAgentRequest {
  /**
   * @schema DataSyncDescribeAgentRequest#AgentArn
   */
  readonly agentArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeAgentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeAgentRequest(obj: DataSyncDescribeAgentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArn': obj.agentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeAgentResponse
 */
export interface DataSyncDescribeAgentResponse {
  /**
   * @schema DataSyncDescribeAgentResponse#AgentArn
   */
  readonly agentArn?: string;

  /**
   * @schema DataSyncDescribeAgentResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncDescribeAgentResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DataSyncDescribeAgentResponse#LastConnectionTime
   */
  readonly lastConnectionTime?: string;

  /**
   * @schema DataSyncDescribeAgentResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DataSyncDescribeAgentResponse#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DataSyncDescribeAgentResponse#PrivateLinkConfig
   */
  readonly privateLinkConfig?: DataSyncPrivateLinkConfig;

}

/**
 * Converts an object of type 'DataSyncDescribeAgentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeAgentResponse(obj: DataSyncDescribeAgentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArn': obj.agentArn,
    'Name': obj.name,
    'Status': obj.status,
    'LastConnectionTime': obj.lastConnectionTime,
    'CreationTime': obj.creationTime,
    'EndpointType': obj.endpointType,
    'PrivateLinkConfig': toJson_DataSyncPrivateLinkConfig(obj.privateLinkConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationEfsRequest
 */
export interface DataSyncDescribeLocationEfsRequest {
  /**
   * @schema DataSyncDescribeLocationEfsRequest#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationEfsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationEfsRequest(obj: DataSyncDescribeLocationEfsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationEfsResponse
 */
export interface DataSyncDescribeLocationEfsResponse {
  /**
   * @schema DataSyncDescribeLocationEfsResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncDescribeLocationEfsResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DataSyncDescribeLocationEfsResponse#Ec2Config
   */
  readonly ec2Config?: DataSyncEc2Config;

  /**
   * @schema DataSyncDescribeLocationEfsResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationEfsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationEfsResponse(obj: DataSyncDescribeLocationEfsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
    'Ec2Config': toJson_DataSyncEc2Config(obj.ec2Config),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationFsxWindowsRequest
 */
export interface DataSyncDescribeLocationFsxWindowsRequest {
  /**
   * @schema DataSyncDescribeLocationFsxWindowsRequest#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationFsxWindowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationFsxWindowsRequest(obj: DataSyncDescribeLocationFsxWindowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationFsxWindowsResponse
 */
export interface DataSyncDescribeLocationFsxWindowsResponse {
  /**
   * @schema DataSyncDescribeLocationFsxWindowsResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncDescribeLocationFsxWindowsResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DataSyncDescribeLocationFsxWindowsResponse#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

  /**
   * @schema DataSyncDescribeLocationFsxWindowsResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DataSyncDescribeLocationFsxWindowsResponse#User
   */
  readonly user?: string;

  /**
   * @schema DataSyncDescribeLocationFsxWindowsResponse#Domain
   */
  readonly domain?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationFsxWindowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationFsxWindowsResponse(obj: DataSyncDescribeLocationFsxWindowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
    'SecurityGroupArns': obj.securityGroupArns?.map(y => y),
    'CreationTime': obj.creationTime,
    'User': obj.user,
    'Domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationNfsRequest
 */
export interface DataSyncDescribeLocationNfsRequest {
  /**
   * @schema DataSyncDescribeLocationNfsRequest#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationNfsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationNfsRequest(obj: DataSyncDescribeLocationNfsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationNfsResponse
 */
export interface DataSyncDescribeLocationNfsResponse {
  /**
   * @schema DataSyncDescribeLocationNfsResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncDescribeLocationNfsResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DataSyncDescribeLocationNfsResponse#OnPremConfig
   */
  readonly onPremConfig?: DataSyncOnPremConfig;

  /**
   * @schema DataSyncDescribeLocationNfsResponse#MountOptions
   */
  readonly mountOptions?: DataSyncNfsMountOptions;

  /**
   * @schema DataSyncDescribeLocationNfsResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationNfsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationNfsResponse(obj: DataSyncDescribeLocationNfsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
    'OnPremConfig': toJson_DataSyncOnPremConfig(obj.onPremConfig),
    'MountOptions': toJson_DataSyncNfsMountOptions(obj.mountOptions),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationObjectStorageRequest
 */
export interface DataSyncDescribeLocationObjectStorageRequest {
  /**
   * @schema DataSyncDescribeLocationObjectStorageRequest#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationObjectStorageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationObjectStorageRequest(obj: DataSyncDescribeLocationObjectStorageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationObjectStorageResponse
 */
export interface DataSyncDescribeLocationObjectStorageResponse {
  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#AccessKey
   */
  readonly accessKey?: string;

  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#ServerPort
   */
  readonly serverPort?: number;

  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncDescribeLocationObjectStorageResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationObjectStorageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationObjectStorageResponse(obj: DataSyncDescribeLocationObjectStorageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
    'AccessKey': obj.accessKey,
    'ServerPort': obj.serverPort,
    'ServerProtocol': obj.serverProtocol,
    'AgentArns': obj.agentArns?.map(y => y),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationS3Request
 */
export interface DataSyncDescribeLocationS3Request {
  /**
   * @schema DataSyncDescribeLocationS3Request#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationS3Request' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationS3Request(obj: DataSyncDescribeLocationS3Request | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationS3Response
 */
export interface DataSyncDescribeLocationS3Response {
  /**
   * @schema DataSyncDescribeLocationS3Response#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncDescribeLocationS3Response#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DataSyncDescribeLocationS3Response#S3StorageClass
   */
  readonly s3StorageClass?: string;

  /**
   * @schema DataSyncDescribeLocationS3Response#S3Config
   */
  readonly s3Config?: DataSyncS3Config;

  /**
   * @schema DataSyncDescribeLocationS3Response#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncDescribeLocationS3Response#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationS3Response' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationS3Response(obj: DataSyncDescribeLocationS3Response | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
    'S3StorageClass': obj.s3StorageClass,
    'S3Config': toJson_DataSyncS3Config(obj.s3Config),
    'AgentArns': obj.agentArns?.map(y => y),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationSmbRequest
 */
export interface DataSyncDescribeLocationSmbRequest {
  /**
   * @schema DataSyncDescribeLocationSmbRequest#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationSmbRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationSmbRequest(obj: DataSyncDescribeLocationSmbRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeLocationSmbResponse
 */
export interface DataSyncDescribeLocationSmbResponse {
  /**
   * @schema DataSyncDescribeLocationSmbResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncDescribeLocationSmbResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DataSyncDescribeLocationSmbResponse#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncDescribeLocationSmbResponse#User
   */
  readonly user?: string;

  /**
   * @schema DataSyncDescribeLocationSmbResponse#Domain
   */
  readonly domain?: string;

  /**
   * @schema DataSyncDescribeLocationSmbResponse#MountOptions
   */
  readonly mountOptions?: DataSyncSmbMountOptions;

  /**
   * @schema DataSyncDescribeLocationSmbResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeLocationSmbResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeLocationSmbResponse(obj: DataSyncDescribeLocationSmbResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
    'AgentArns': obj.agentArns?.map(y => y),
    'User': obj.user,
    'Domain': obj.domain,
    'MountOptions': toJson_DataSyncSmbMountOptions(obj.mountOptions),
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeTaskRequest
 */
export interface DataSyncDescribeTaskRequest {
  /**
   * @schema DataSyncDescribeTaskRequest#TaskArn
   */
  readonly taskArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeTaskRequest(obj: DataSyncDescribeTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeTaskResponse
 */
export interface DataSyncDescribeTaskResponse {
  /**
   * @schema DataSyncDescribeTaskResponse#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#CurrentTaskExecutionArn
   */
  readonly currentTaskExecutionArn?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#SourceLocationArn
   */
  readonly sourceLocationArn?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#DestinationLocationArn
   */
  readonly destinationLocationArn?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#SourceNetworkInterfaceArns
   */
  readonly sourceNetworkInterfaceArns?: string[];

  /**
   * @schema DataSyncDescribeTaskResponse#DestinationNetworkInterfaceArns
   */
  readonly destinationNetworkInterfaceArns?: string[];

  /**
   * @schema DataSyncDescribeTaskResponse#Options
   */
  readonly options?: DataSyncOptions;

  /**
   * @schema DataSyncDescribeTaskResponse#Excludes
   */
  readonly excludes?: DataSyncFilterRule[];

  /**
   * @schema DataSyncDescribeTaskResponse#Schedule
   */
  readonly schedule?: DataSyncTaskSchedule;

  /**
   * @schema DataSyncDescribeTaskResponse#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#ErrorDetail
   */
  readonly errorDetail?: string;

  /**
   * @schema DataSyncDescribeTaskResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeTaskResponse(obj: DataSyncDescribeTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
    'Status': obj.status,
    'Name': obj.name,
    'CurrentTaskExecutionArn': obj.currentTaskExecutionArn,
    'SourceLocationArn': obj.sourceLocationArn,
    'DestinationLocationArn': obj.destinationLocationArn,
    'CloudWatchLogGroupArn': obj.cloudWatchLogGroupArn,
    'SourceNetworkInterfaceArns': obj.sourceNetworkInterfaceArns?.map(y => y),
    'DestinationNetworkInterfaceArns': obj.destinationNetworkInterfaceArns?.map(y => y),
    'Options': toJson_DataSyncOptions(obj.options),
    'Excludes': obj.excludes?.map(y => toJson_DataSyncFilterRule(y)),
    'Schedule': toJson_DataSyncTaskSchedule(obj.schedule),
    'ErrorCode': obj.errorCode,
    'ErrorDetail': obj.errorDetail,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeTaskExecutionRequest
 */
export interface DataSyncDescribeTaskExecutionRequest {
  /**
   * @schema DataSyncDescribeTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

}

/**
 * Converts an object of type 'DataSyncDescribeTaskExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeTaskExecutionRequest(obj: DataSyncDescribeTaskExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutionArn': obj.taskExecutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncDescribeTaskExecutionResponse
 */
export interface DataSyncDescribeTaskExecutionResponse {
  /**
   * @schema DataSyncDescribeTaskExecutionResponse#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#Options
   */
  readonly options?: DataSyncOptions;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#Excludes
   */
  readonly excludes?: DataSyncFilterRule[];

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#Includes
   */
  readonly includes?: DataSyncFilterRule[];

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#EstimatedFilesToTransfer
   */
  readonly estimatedFilesToTransfer?: number;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#EstimatedBytesToTransfer
   */
  readonly estimatedBytesToTransfer?: number;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#FilesTransferred
   */
  readonly filesTransferred?: number;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#BytesWritten
   */
  readonly bytesWritten?: number;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema DataSyncDescribeTaskExecutionResponse#Result
   */
  readonly result?: DataSyncTaskExecutionResultDetail;

}

/**
 * Converts an object of type 'DataSyncDescribeTaskExecutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncDescribeTaskExecutionResponse(obj: DataSyncDescribeTaskExecutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutionArn': obj.taskExecutionArn,
    'Status': obj.status,
    'Options': toJson_DataSyncOptions(obj.options),
    'Excludes': obj.excludes?.map(y => toJson_DataSyncFilterRule(y)),
    'Includes': obj.includes?.map(y => toJson_DataSyncFilterRule(y)),
    'StartTime': obj.startTime,
    'EstimatedFilesToTransfer': obj.estimatedFilesToTransfer,
    'EstimatedBytesToTransfer': obj.estimatedBytesToTransfer,
    'FilesTransferred': obj.filesTransferred,
    'BytesWritten': obj.bytesWritten,
    'BytesTransferred': obj.bytesTransferred,
    'Result': toJson_DataSyncTaskExecutionResultDetail(obj.result),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListAgentsRequest
 */
export interface DataSyncListAgentsRequest {
  /**
   * @schema DataSyncListAgentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataSyncListAgentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListAgentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListAgentsRequest(obj: DataSyncListAgentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListAgentsResponse
 */
export interface DataSyncListAgentsResponse {
  /**
   * @schema DataSyncListAgentsResponse#Agents
   */
  readonly agents?: DataSyncAgentListEntry[];

  /**
   * @schema DataSyncListAgentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListAgentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListAgentsResponse(obj: DataSyncListAgentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Agents': obj.agents?.map(y => toJson_DataSyncAgentListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListLocationsRequest
 */
export interface DataSyncListLocationsRequest {
  /**
   * @schema DataSyncListLocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataSyncListLocationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataSyncListLocationsRequest#Filters
   */
  readonly filters?: DataSyncLocationFilter[];

}

/**
 * Converts an object of type 'DataSyncListLocationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListLocationsRequest(obj: DataSyncListLocationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_DataSyncLocationFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListLocationsResponse
 */
export interface DataSyncListLocationsResponse {
  /**
   * @schema DataSyncListLocationsResponse#Locations
   */
  readonly locations?: DataSyncLocationListEntry[];

  /**
   * @schema DataSyncListLocationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListLocationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListLocationsResponse(obj: DataSyncListLocationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Locations': obj.locations?.map(y => toJson_DataSyncLocationListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListTagsForResourceRequest
 */
export interface DataSyncListTagsForResourceRequest {
  /**
   * @schema DataSyncListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataSyncListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataSyncListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListTagsForResourceRequest(obj: DataSyncListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListTagsForResourceResponse
 */
export interface DataSyncListTagsForResourceResponse {
  /**
   * @schema DataSyncListTagsForResourceResponse#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

  /**
   * @schema DataSyncListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListTagsForResourceResponse(obj: DataSyncListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListTaskExecutionsRequest
 */
export interface DataSyncListTaskExecutionsRequest {
  /**
   * @schema DataSyncListTaskExecutionsRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema DataSyncListTaskExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataSyncListTaskExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListTaskExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListTaskExecutionsRequest(obj: DataSyncListTaskExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListTaskExecutionsResponse
 */
export interface DataSyncListTaskExecutionsResponse {
  /**
   * @schema DataSyncListTaskExecutionsResponse#TaskExecutions
   */
  readonly taskExecutions?: DataSyncTaskExecutionListEntry[];

  /**
   * @schema DataSyncListTaskExecutionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListTaskExecutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListTaskExecutionsResponse(obj: DataSyncListTaskExecutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutions': obj.taskExecutions?.map(y => toJson_DataSyncTaskExecutionListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListTasksRequest
 */
export interface DataSyncListTasksRequest {
  /**
   * @schema DataSyncListTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataSyncListTasksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataSyncListTasksRequest#Filters
   */
  readonly filters?: DataSyncTaskFilter[];

}

/**
 * Converts an object of type 'DataSyncListTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListTasksRequest(obj: DataSyncListTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_DataSyncTaskFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncListTasksResponse
 */
export interface DataSyncListTasksResponse {
  /**
   * @schema DataSyncListTasksResponse#Tasks
   */
  readonly tasks?: DataSyncTaskListEntry[];

  /**
   * @schema DataSyncListTasksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DataSyncListTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncListTasksResponse(obj: DataSyncListTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tasks': obj.tasks?.map(y => toJson_DataSyncTaskListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncStartTaskExecutionRequest
 */
export interface DataSyncStartTaskExecutionRequest {
  /**
   * @schema DataSyncStartTaskExecutionRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema DataSyncStartTaskExecutionRequest#OverrideOptions
   */
  readonly overrideOptions?: DataSyncOptions;

  /**
   * @schema DataSyncStartTaskExecutionRequest#Includes
   */
  readonly includes?: DataSyncFilterRule[];

}

/**
 * Converts an object of type 'DataSyncStartTaskExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncStartTaskExecutionRequest(obj: DataSyncStartTaskExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
    'OverrideOptions': toJson_DataSyncOptions(obj.overrideOptions),
    'Includes': obj.includes?.map(y => toJson_DataSyncFilterRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncStartTaskExecutionResponse
 */
export interface DataSyncStartTaskExecutionResponse {
  /**
   * @schema DataSyncStartTaskExecutionResponse#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

}

/**
 * Converts an object of type 'DataSyncStartTaskExecutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncStartTaskExecutionResponse(obj: DataSyncStartTaskExecutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutionArn': obj.taskExecutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTagResourceRequest
 */
export interface DataSyncTagResourceRequest {
  /**
   * @schema DataSyncTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataSyncTagResourceRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

/**
 * Converts an object of type 'DataSyncTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTagResourceRequest(obj: DataSyncTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_DataSyncTagListEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTagResourceResponse
 */
export interface DataSyncTagResourceResponse {
}

/**
 * Converts an object of type 'DataSyncTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTagResourceResponse(obj: DataSyncTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUntagResourceRequest
 */
export interface DataSyncUntagResourceRequest {
  /**
   * @schema DataSyncUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataSyncUntagResourceRequest#Keys
   */
  readonly keys?: string[];

}

/**
 * Converts an object of type 'DataSyncUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUntagResourceRequest(obj: DataSyncUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Keys': obj.keys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUntagResourceResponse
 */
export interface DataSyncUntagResourceResponse {
}

/**
 * Converts an object of type 'DataSyncUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUntagResourceResponse(obj: DataSyncUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateAgentRequest
 */
export interface DataSyncUpdateAgentRequest {
  /**
   * @schema DataSyncUpdateAgentRequest#AgentArn
   */
  readonly agentArn?: string;

  /**
   * @schema DataSyncUpdateAgentRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataSyncUpdateAgentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateAgentRequest(obj: DataSyncUpdateAgentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArn': obj.agentArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateAgentResponse
 */
export interface DataSyncUpdateAgentResponse {
}

/**
 * Converts an object of type 'DataSyncUpdateAgentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateAgentResponse(obj: DataSyncUpdateAgentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateLocationNfsRequest
 */
export interface DataSyncUpdateLocationNfsRequest {
  /**
   * @schema DataSyncUpdateLocationNfsRequest#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncUpdateLocationNfsRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncUpdateLocationNfsRequest#OnPremConfig
   */
  readonly onPremConfig?: DataSyncOnPremConfig;

  /**
   * @schema DataSyncUpdateLocationNfsRequest#MountOptions
   */
  readonly mountOptions?: DataSyncNfsMountOptions;

}

/**
 * Converts an object of type 'DataSyncUpdateLocationNfsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateLocationNfsRequest(obj: DataSyncUpdateLocationNfsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'Subdirectory': obj.subdirectory,
    'OnPremConfig': toJson_DataSyncOnPremConfig(obj.onPremConfig),
    'MountOptions': toJson_DataSyncNfsMountOptions(obj.mountOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateLocationNfsResponse
 */
export interface DataSyncUpdateLocationNfsResponse {
}

/**
 * Converts an object of type 'DataSyncUpdateLocationNfsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateLocationNfsResponse(obj: DataSyncUpdateLocationNfsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateLocationObjectStorageRequest
 */
export interface DataSyncUpdateLocationObjectStorageRequest {
  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#ServerPort
   */
  readonly serverPort?: number;

  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#AccessKey
   */
  readonly accessKey?: string;

  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#SecretKey
   */
  readonly secretKey?: string;

  /**
   * @schema DataSyncUpdateLocationObjectStorageRequest#AgentArns
   */
  readonly agentArns?: string[];

}

/**
 * Converts an object of type 'DataSyncUpdateLocationObjectStorageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateLocationObjectStorageRequest(obj: DataSyncUpdateLocationObjectStorageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'ServerPort': obj.serverPort,
    'ServerProtocol': obj.serverProtocol,
    'Subdirectory': obj.subdirectory,
    'AccessKey': obj.accessKey,
    'SecretKey': obj.secretKey,
    'AgentArns': obj.agentArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateLocationObjectStorageResponse
 */
export interface DataSyncUpdateLocationObjectStorageResponse {
}

/**
 * Converts an object of type 'DataSyncUpdateLocationObjectStorageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateLocationObjectStorageResponse(obj: DataSyncUpdateLocationObjectStorageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateLocationSmbRequest
 */
export interface DataSyncUpdateLocationSmbRequest {
  /**
   * @schema DataSyncUpdateLocationSmbRequest#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncUpdateLocationSmbRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema DataSyncUpdateLocationSmbRequest#User
   */
  readonly user?: string;

  /**
   * @schema DataSyncUpdateLocationSmbRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema DataSyncUpdateLocationSmbRequest#Password
   */
  readonly password?: string;

  /**
   * @schema DataSyncUpdateLocationSmbRequest#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DataSyncUpdateLocationSmbRequest#MountOptions
   */
  readonly mountOptions?: DataSyncSmbMountOptions;

}

/**
 * Converts an object of type 'DataSyncUpdateLocationSmbRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateLocationSmbRequest(obj: DataSyncUpdateLocationSmbRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'Subdirectory': obj.subdirectory,
    'User': obj.user,
    'Domain': obj.domain,
    'Password': obj.password,
    'AgentArns': obj.agentArns?.map(y => y),
    'MountOptions': toJson_DataSyncSmbMountOptions(obj.mountOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateLocationSmbResponse
 */
export interface DataSyncUpdateLocationSmbResponse {
}

/**
 * Converts an object of type 'DataSyncUpdateLocationSmbResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateLocationSmbResponse(obj: DataSyncUpdateLocationSmbResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateTaskRequest
 */
export interface DataSyncUpdateTaskRequest {
  /**
   * @schema DataSyncUpdateTaskRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema DataSyncUpdateTaskRequest#Options
   */
  readonly options?: DataSyncOptions;

  /**
   * @schema DataSyncUpdateTaskRequest#Excludes
   */
  readonly excludes?: DataSyncFilterRule[];

  /**
   * @schema DataSyncUpdateTaskRequest#Schedule
   */
  readonly schedule?: DataSyncTaskSchedule;

  /**
   * @schema DataSyncUpdateTaskRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncUpdateTaskRequest#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

}

/**
 * Converts an object of type 'DataSyncUpdateTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateTaskRequest(obj: DataSyncUpdateTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
    'Options': toJson_DataSyncOptions(obj.options),
    'Excludes': obj.excludes?.map(y => toJson_DataSyncFilterRule(y)),
    'Schedule': toJson_DataSyncTaskSchedule(obj.schedule),
    'Name': obj.name,
    'CloudWatchLogGroupArn': obj.cloudWatchLogGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateTaskResponse
 */
export interface DataSyncUpdateTaskResponse {
}

/**
 * Converts an object of type 'DataSyncUpdateTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateTaskResponse(obj: DataSyncUpdateTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateTaskExecutionRequest
 */
export interface DataSyncUpdateTaskExecutionRequest {
  /**
   * @schema DataSyncUpdateTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

  /**
   * @schema DataSyncUpdateTaskExecutionRequest#Options
   */
  readonly options?: DataSyncOptions;

}

/**
 * Converts an object of type 'DataSyncUpdateTaskExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateTaskExecutionRequest(obj: DataSyncUpdateTaskExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutionArn': obj.taskExecutionArn,
    'Options': toJson_DataSyncOptions(obj.options),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncUpdateTaskExecutionResponse
 */
export interface DataSyncUpdateTaskExecutionResponse {
}

/**
 * Converts an object of type 'DataSyncUpdateTaskExecutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncUpdateTaskExecutionResponse(obj: DataSyncUpdateTaskExecutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTagListEntry
 */
export interface DataSyncTagListEntry {
  /**
   * @schema DataSyncTagListEntry#Key
   */
  readonly key?: string;

  /**
   * @schema DataSyncTagListEntry#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DataSyncTagListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTagListEntry(obj: DataSyncTagListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncEc2Config
 */
export interface DataSyncEc2Config {
  /**
   * @schema DataSyncEc2Config#SubnetArn
   */
  readonly subnetArn?: string;

  /**
   * @schema DataSyncEc2Config#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

}

/**
 * Converts an object of type 'DataSyncEc2Config' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncEc2Config(obj: DataSyncEc2Config | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetArn': obj.subnetArn,
    'SecurityGroupArns': obj.securityGroupArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncOnPremConfig
 */
export interface DataSyncOnPremConfig {
  /**
   * @schema DataSyncOnPremConfig#AgentArns
   */
  readonly agentArns?: string[];

}

/**
 * Converts an object of type 'DataSyncOnPremConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncOnPremConfig(obj: DataSyncOnPremConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArns': obj.agentArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncNfsMountOptions
 */
export interface DataSyncNfsMountOptions {
  /**
   * @schema DataSyncNfsMountOptions#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'DataSyncNfsMountOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncNfsMountOptions(obj: DataSyncNfsMountOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncS3Config
 */
export interface DataSyncS3Config {
  /**
   * @schema DataSyncS3Config#BucketAccessRoleArn
   */
  readonly bucketAccessRoleArn?: string;

}

/**
 * Converts an object of type 'DataSyncS3Config' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncS3Config(obj: DataSyncS3Config | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketAccessRoleArn': obj.bucketAccessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncSmbMountOptions
 */
export interface DataSyncSmbMountOptions {
  /**
   * @schema DataSyncSmbMountOptions#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'DataSyncSmbMountOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncSmbMountOptions(obj: DataSyncSmbMountOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncOptions
 */
export interface DataSyncOptions {
  /**
   * @schema DataSyncOptions#VerifyMode
   */
  readonly verifyMode?: string;

  /**
   * @schema DataSyncOptions#OverwriteMode
   */
  readonly overwriteMode?: string;

  /**
   * @schema DataSyncOptions#Atime
   */
  readonly atime?: string;

  /**
   * @schema DataSyncOptions#Mtime
   */
  readonly mtime?: string;

  /**
   * @schema DataSyncOptions#Uid
   */
  readonly uid?: string;

  /**
   * @schema DataSyncOptions#Gid
   */
  readonly gid?: string;

  /**
   * @schema DataSyncOptions#PreserveDeletedFiles
   */
  readonly preserveDeletedFiles?: string;

  /**
   * @schema DataSyncOptions#PreserveDevices
   */
  readonly preserveDevices?: string;

  /**
   * @schema DataSyncOptions#PosixPermissions
   */
  readonly posixPermissions?: string;

  /**
   * @schema DataSyncOptions#BytesPerSecond
   */
  readonly bytesPerSecond?: number;

  /**
   * @schema DataSyncOptions#TaskQueueing
   */
  readonly taskQueueing?: string;

  /**
   * @schema DataSyncOptions#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema DataSyncOptions#TransferMode
   */
  readonly transferMode?: string;

  /**
   * @schema DataSyncOptions#SecurityDescriptorCopyFlags
   */
  readonly securityDescriptorCopyFlags?: string;

}

/**
 * Converts an object of type 'DataSyncOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncOptions(obj: DataSyncOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VerifyMode': obj.verifyMode,
    'OverwriteMode': obj.overwriteMode,
    'Atime': obj.atime,
    'Mtime': obj.mtime,
    'Uid': obj.uid,
    'Gid': obj.gid,
    'PreserveDeletedFiles': obj.preserveDeletedFiles,
    'PreserveDevices': obj.preserveDevices,
    'PosixPermissions': obj.posixPermissions,
    'BytesPerSecond': obj.bytesPerSecond,
    'TaskQueueing': obj.taskQueueing,
    'LogLevel': obj.logLevel,
    'TransferMode': obj.transferMode,
    'SecurityDescriptorCopyFlags': obj.securityDescriptorCopyFlags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncFilterRule
 */
export interface DataSyncFilterRule {
  /**
   * @schema DataSyncFilterRule#FilterType
   */
  readonly filterType?: string;

  /**
   * @schema DataSyncFilterRule#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DataSyncFilterRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncFilterRule(obj: DataSyncFilterRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterType': obj.filterType,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTaskSchedule
 */
export interface DataSyncTaskSchedule {
  /**
   * @schema DataSyncTaskSchedule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

}

/**
 * Converts an object of type 'DataSyncTaskSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTaskSchedule(obj: DataSyncTaskSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleExpression': obj.scheduleExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncPrivateLinkConfig
 */
export interface DataSyncPrivateLinkConfig {
  /**
   * @schema DataSyncPrivateLinkConfig#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema DataSyncPrivateLinkConfig#PrivateLinkEndpoint
   */
  readonly privateLinkEndpoint?: string;

  /**
   * @schema DataSyncPrivateLinkConfig#SubnetArns
   */
  readonly subnetArns?: string[];

  /**
   * @schema DataSyncPrivateLinkConfig#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

}

/**
 * Converts an object of type 'DataSyncPrivateLinkConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncPrivateLinkConfig(obj: DataSyncPrivateLinkConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcEndpointId': obj.vpcEndpointId,
    'PrivateLinkEndpoint': obj.privateLinkEndpoint,
    'SubnetArns': obj.subnetArns?.map(y => y),
    'SecurityGroupArns': obj.securityGroupArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTaskExecutionResultDetail
 */
export interface DataSyncTaskExecutionResultDetail {
  /**
   * @schema DataSyncTaskExecutionResultDetail#PrepareDuration
   */
  readonly prepareDuration?: number;

  /**
   * @schema DataSyncTaskExecutionResultDetail#PrepareStatus
   */
  readonly prepareStatus?: string;

  /**
   * @schema DataSyncTaskExecutionResultDetail#TotalDuration
   */
  readonly totalDuration?: number;

  /**
   * @schema DataSyncTaskExecutionResultDetail#TransferDuration
   */
  readonly transferDuration?: number;

  /**
   * @schema DataSyncTaskExecutionResultDetail#TransferStatus
   */
  readonly transferStatus?: string;

  /**
   * @schema DataSyncTaskExecutionResultDetail#VerifyDuration
   */
  readonly verifyDuration?: number;

  /**
   * @schema DataSyncTaskExecutionResultDetail#VerifyStatus
   */
  readonly verifyStatus?: string;

  /**
   * @schema DataSyncTaskExecutionResultDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DataSyncTaskExecutionResultDetail#ErrorDetail
   */
  readonly errorDetail?: string;

}

/**
 * Converts an object of type 'DataSyncTaskExecutionResultDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTaskExecutionResultDetail(obj: DataSyncTaskExecutionResultDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrepareDuration': obj.prepareDuration,
    'PrepareStatus': obj.prepareStatus,
    'TotalDuration': obj.totalDuration,
    'TransferDuration': obj.transferDuration,
    'TransferStatus': obj.transferStatus,
    'VerifyDuration': obj.verifyDuration,
    'VerifyStatus': obj.verifyStatus,
    'ErrorCode': obj.errorCode,
    'ErrorDetail': obj.errorDetail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncAgentListEntry
 */
export interface DataSyncAgentListEntry {
  /**
   * @schema DataSyncAgentListEntry#AgentArn
   */
  readonly agentArn?: string;

  /**
   * @schema DataSyncAgentListEntry#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncAgentListEntry#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'DataSyncAgentListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncAgentListEntry(obj: DataSyncAgentListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentArn': obj.agentArn,
    'Name': obj.name,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncLocationFilter
 */
export interface DataSyncLocationFilter {
  /**
   * @schema DataSyncLocationFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncLocationFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema DataSyncLocationFilter#Operator
   */
  readonly operator?: string;

}

/**
 * Converts an object of type 'DataSyncLocationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncLocationFilter(obj: DataSyncLocationFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
    'Operator': obj.operator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncLocationListEntry
 */
export interface DataSyncLocationListEntry {
  /**
   * @schema DataSyncLocationListEntry#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DataSyncLocationListEntry#LocationUri
   */
  readonly locationUri?: string;

}

/**
 * Converts an object of type 'DataSyncLocationListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncLocationListEntry(obj: DataSyncLocationListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationArn': obj.locationArn,
    'LocationUri': obj.locationUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTaskExecutionListEntry
 */
export interface DataSyncTaskExecutionListEntry {
  /**
   * @schema DataSyncTaskExecutionListEntry#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

  /**
   * @schema DataSyncTaskExecutionListEntry#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'DataSyncTaskExecutionListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTaskExecutionListEntry(obj: DataSyncTaskExecutionListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskExecutionArn': obj.taskExecutionArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTaskFilter
 */
export interface DataSyncTaskFilter {
  /**
   * @schema DataSyncTaskFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DataSyncTaskFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema DataSyncTaskFilter#Operator
   */
  readonly operator?: string;

}

/**
 * Converts an object of type 'DataSyncTaskFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTaskFilter(obj: DataSyncTaskFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
    'Operator': obj.operator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataSyncTaskListEntry
 */
export interface DataSyncTaskListEntry {
  /**
   * @schema DataSyncTaskListEntry#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema DataSyncTaskListEntry#Status
   */
  readonly status?: string;

  /**
   * @schema DataSyncTaskListEntry#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataSyncTaskListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataSyncTaskListEntry(obj: DataSyncTaskListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskArn': obj.taskArn,
    'Status': obj.status,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
