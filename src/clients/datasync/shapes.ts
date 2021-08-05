/**
 * @schema DataSyncCancelTaskExecutionRequest
 */
export interface DataSyncCancelTaskExecutionRequest {
  /**
   * @schema DataSyncCancelTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn: string;

}

/**
 * @schema DataSyncCancelTaskExecutionResponse
 */
export interface DataSyncCancelTaskExecutionResponse {
}

/**
 * @schema DataSyncCreateAgentRequest
 */
export interface DataSyncCreateAgentRequest {
  /**
   * @schema DataSyncCreateAgentRequest#ActivationKey
   */
  readonly activationKey: string;

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
 * @schema DataSyncCreateAgentResponse
 */
export interface DataSyncCreateAgentResponse {
  /**
   * @schema DataSyncCreateAgentResponse#AgentArn
   */
  readonly agentArn?: string;

}

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
  readonly efsFilesystemArn: string;

  /**
   * @schema DataSyncCreateLocationEfsRequest#Ec2Config
   */
  readonly ec2Config: DataSyncEc2Config;

  /**
   * @schema DataSyncCreateLocationEfsRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

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
  readonly fsxFilesystemArn: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#SecurityGroupArns
   */
  readonly securityGroupArns: string[];

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#User
   */
  readonly user: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema DataSyncCreateLocationFsxWindowsRequest#Password
   */
  readonly password: string;

}

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
 * @schema DataSyncCreateLocationNfsRequest
 */
export interface DataSyncCreateLocationNfsRequest {
  /**
   * @schema DataSyncCreateLocationNfsRequest#Subdirectory
   */
  readonly subdirectory: string;

  /**
   * @schema DataSyncCreateLocationNfsRequest#ServerHostname
   */
  readonly serverHostname: string;

  /**
   * @schema DataSyncCreateLocationNfsRequest#OnPremConfig
   */
  readonly onPremConfig: DataSyncOnPremConfig;

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
 * @schema DataSyncCreateLocationNfsResponse
 */
export interface DataSyncCreateLocationNfsResponse {
  /**
   * @schema DataSyncCreateLocationNfsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema DataSyncCreateLocationObjectStorageRequest
 */
export interface DataSyncCreateLocationObjectStorageRequest {
  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#ServerHostname
   */
  readonly serverHostname: string;

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
  readonly bucketName: string;

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
  readonly agentArns: string[];

  /**
   * @schema DataSyncCreateLocationObjectStorageRequest#Tags
   */
  readonly tags?: DataSyncTagListEntry[];

}

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
  readonly s3BucketArn: string;

  /**
   * @schema DataSyncCreateLocationS3Request#S3StorageClass
   */
  readonly s3StorageClass?: string;

  /**
   * @schema DataSyncCreateLocationS3Request#S3Config
   */
  readonly s3Config: DataSyncS3Config;

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
 * @schema DataSyncCreateLocationS3Response
 */
export interface DataSyncCreateLocationS3Response {
  /**
   * @schema DataSyncCreateLocationS3Response#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema DataSyncCreateLocationSmbRequest
 */
export interface DataSyncCreateLocationSmbRequest {
  /**
   * @schema DataSyncCreateLocationSmbRequest#Subdirectory
   */
  readonly subdirectory: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#ServerHostname
   */
  readonly serverHostname: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#User
   */
  readonly user: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#Password
   */
  readonly password: string;

  /**
   * @schema DataSyncCreateLocationSmbRequest#AgentArns
   */
  readonly agentArns: string[];

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
 * @schema DataSyncCreateLocationSmbResponse
 */
export interface DataSyncCreateLocationSmbResponse {
  /**
   * @schema DataSyncCreateLocationSmbResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema DataSyncCreateTaskRequest
 */
export interface DataSyncCreateTaskRequest {
  /**
   * @schema DataSyncCreateTaskRequest#SourceLocationArn
   */
  readonly sourceLocationArn: string;

  /**
   * @schema DataSyncCreateTaskRequest#DestinationLocationArn
   */
  readonly destinationLocationArn: string;

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
 * @schema DataSyncCreateTaskResponse
 */
export interface DataSyncCreateTaskResponse {
  /**
   * @schema DataSyncCreateTaskResponse#TaskArn
   */
  readonly taskArn?: string;

}

/**
 * @schema DataSyncDeleteAgentRequest
 */
export interface DataSyncDeleteAgentRequest {
  /**
   * @schema DataSyncDeleteAgentRequest#AgentArn
   */
  readonly agentArn: string;

}

/**
 * @schema DataSyncDeleteAgentResponse
 */
export interface DataSyncDeleteAgentResponse {
}

/**
 * @schema DataSyncDeleteLocationRequest
 */
export interface DataSyncDeleteLocationRequest {
  /**
   * @schema DataSyncDeleteLocationRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DataSyncDeleteLocationResponse
 */
export interface DataSyncDeleteLocationResponse {
}

/**
 * @schema DataSyncDeleteTaskRequest
 */
export interface DataSyncDeleteTaskRequest {
  /**
   * @schema DataSyncDeleteTaskRequest#TaskArn
   */
  readonly taskArn: string;

}

/**
 * @schema DataSyncDeleteTaskResponse
 */
export interface DataSyncDeleteTaskResponse {
}

/**
 * @schema DataSyncDescribeAgentRequest
 */
export interface DataSyncDescribeAgentRequest {
  /**
   * @schema DataSyncDescribeAgentRequest#AgentArn
   */
  readonly agentArn: string;

}

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
 * @schema DataSyncDescribeLocationEfsRequest
 */
export interface DataSyncDescribeLocationEfsRequest {
  /**
   * @schema DataSyncDescribeLocationEfsRequest#LocationArn
   */
  readonly locationArn: string;

}

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
 * @schema DataSyncDescribeLocationFsxWindowsRequest
 */
export interface DataSyncDescribeLocationFsxWindowsRequest {
  /**
   * @schema DataSyncDescribeLocationFsxWindowsRequest#LocationArn
   */
  readonly locationArn: string;

}

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
 * @schema DataSyncDescribeLocationNfsRequest
 */
export interface DataSyncDescribeLocationNfsRequest {
  /**
   * @schema DataSyncDescribeLocationNfsRequest#LocationArn
   */
  readonly locationArn: string;

}

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
 * @schema DataSyncDescribeLocationObjectStorageRequest
 */
export interface DataSyncDescribeLocationObjectStorageRequest {
  /**
   * @schema DataSyncDescribeLocationObjectStorageRequest#LocationArn
   */
  readonly locationArn: string;

}

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
 * @schema DataSyncDescribeLocationS3Request
 */
export interface DataSyncDescribeLocationS3Request {
  /**
   * @schema DataSyncDescribeLocationS3Request#LocationArn
   */
  readonly locationArn: string;

}

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
 * @schema DataSyncDescribeLocationSmbRequest
 */
export interface DataSyncDescribeLocationSmbRequest {
  /**
   * @schema DataSyncDescribeLocationSmbRequest#LocationArn
   */
  readonly locationArn: string;

}

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
 * @schema DataSyncDescribeTaskRequest
 */
export interface DataSyncDescribeTaskRequest {
  /**
   * @schema DataSyncDescribeTaskRequest#TaskArn
   */
  readonly taskArn: string;

}

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
 * @schema DataSyncDescribeTaskExecutionRequest
 */
export interface DataSyncDescribeTaskExecutionRequest {
  /**
   * @schema DataSyncDescribeTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn: string;

}

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
 * @schema DataSyncListTagsForResourceRequest
 */
export interface DataSyncListTagsForResourceRequest {
  /**
   * @schema DataSyncListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

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
 * @schema DataSyncStartTaskExecutionRequest
 */
export interface DataSyncStartTaskExecutionRequest {
  /**
   * @schema DataSyncStartTaskExecutionRequest#TaskArn
   */
  readonly taskArn: string;

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
 * @schema DataSyncStartTaskExecutionResponse
 */
export interface DataSyncStartTaskExecutionResponse {
  /**
   * @schema DataSyncStartTaskExecutionResponse#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

}

/**
 * @schema DataSyncTagResourceRequest
 */
export interface DataSyncTagResourceRequest {
  /**
   * @schema DataSyncTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DataSyncTagResourceRequest#Tags
   */
  readonly tags: DataSyncTagListEntry[];

}

/**
 * @schema DataSyncTagResourceResponse
 */
export interface DataSyncTagResourceResponse {
}

/**
 * @schema DataSyncUntagResourceRequest
 */
export interface DataSyncUntagResourceRequest {
  /**
   * @schema DataSyncUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DataSyncUntagResourceRequest#Keys
   */
  readonly keys: string[];

}

/**
 * @schema DataSyncUntagResourceResponse
 */
export interface DataSyncUntagResourceResponse {
}

/**
 * @schema DataSyncUpdateAgentRequest
 */
export interface DataSyncUpdateAgentRequest {
  /**
   * @schema DataSyncUpdateAgentRequest#AgentArn
   */
  readonly agentArn: string;

  /**
   * @schema DataSyncUpdateAgentRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema DataSyncUpdateAgentResponse
 */
export interface DataSyncUpdateAgentResponse {
}

/**
 * @schema DataSyncUpdateTaskRequest
 */
export interface DataSyncUpdateTaskRequest {
  /**
   * @schema DataSyncUpdateTaskRequest#TaskArn
   */
  readonly taskArn: string;

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
 * @schema DataSyncUpdateTaskResponse
 */
export interface DataSyncUpdateTaskResponse {
}

/**
 * @schema DataSyncUpdateTaskExecutionRequest
 */
export interface DataSyncUpdateTaskExecutionRequest {
  /**
   * @schema DataSyncUpdateTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn: string;

  /**
   * @schema DataSyncUpdateTaskExecutionRequest#Options
   */
  readonly options: DataSyncOptions;

}

/**
 * @schema DataSyncUpdateTaskExecutionResponse
 */
export interface DataSyncUpdateTaskExecutionResponse {
}

/**
 * @schema DataSyncTagListEntry
 */
export interface DataSyncTagListEntry {
  /**
   * @schema DataSyncTagListEntry#Key
   */
  readonly key: string;

  /**
   * @schema DataSyncTagListEntry#Value
   */
  readonly value?: string;

}

/**
 * @schema DataSyncEc2Config
 */
export interface DataSyncEc2Config {
  /**
   * @schema DataSyncEc2Config#SubnetArn
   */
  readonly subnetArn: string;

  /**
   * @schema DataSyncEc2Config#SecurityGroupArns
   */
  readonly securityGroupArns: string[];

}

/**
 * @schema DataSyncOnPremConfig
 */
export interface DataSyncOnPremConfig {
  /**
   * @schema DataSyncOnPremConfig#AgentArns
   */
  readonly agentArns: string[];

}

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
 * @schema DataSyncS3Config
 */
export interface DataSyncS3Config {
  /**
   * @schema DataSyncS3Config#BucketAccessRoleArn
   */
  readonly bucketAccessRoleArn: string;

}

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

}

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
 * @schema DataSyncTaskSchedule
 */
export interface DataSyncTaskSchedule {
  /**
   * @schema DataSyncTaskSchedule#ScheduleExpression
   */
  readonly scheduleExpression: string;

}

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
 * @schema DataSyncLocationFilter
 */
export interface DataSyncLocationFilter {
  /**
   * @schema DataSyncLocationFilter#Name
   */
  readonly name: string;

  /**
   * @schema DataSyncLocationFilter#Values
   */
  readonly values: string[];

  /**
   * @schema DataSyncLocationFilter#Operator
   */
  readonly operator: string;

}

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
 * @schema DataSyncTaskFilter
 */
export interface DataSyncTaskFilter {
  /**
   * @schema DataSyncTaskFilter#Name
   */
  readonly name: string;

  /**
   * @schema DataSyncTaskFilter#Values
   */
  readonly values: string[];

  /**
   * @schema DataSyncTaskFilter#Operator
   */
  readonly operator: string;

}

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
