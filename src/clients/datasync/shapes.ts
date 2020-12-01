/**
 * @schema CancelTaskExecutionRequest
 */
export interface CancelTaskExecutionRequest {
  /**
   * @schema CancelTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn: string;

}

/**
 * @schema CancelTaskExecutionResponse
 */
export interface CancelTaskExecutionResponse {
}

/**
 * @schema CreateAgentRequest
 */
export interface CreateAgentRequest {
  /**
   * @schema CreateAgentRequest#ActivationKey
   */
  readonly activationKey: string;

  /**
   * @schema CreateAgentRequest#AgentName
   */
  readonly agentName?: string;

  /**
   * @schema CreateAgentRequest#Tags
   */
  readonly tags?: TagListEntry[];

  /**
   * @schema CreateAgentRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema CreateAgentRequest#SubnetArns
   */
  readonly subnetArns?: string[];

  /**
   * @schema CreateAgentRequest#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

}

/**
 * @schema CreateAgentResponse
 */
export interface CreateAgentResponse {
  /**
   * @schema CreateAgentResponse#AgentArn
   */
  readonly agentArn?: string;

}

/**
 * @schema CreateLocationEfsRequest
 */
export interface CreateLocationEfsRequest {
  /**
   * @schema CreateLocationEfsRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema CreateLocationEfsRequest#EfsFilesystemArn
   */
  readonly efsFilesystemArn: string;

  /**
   * @schema CreateLocationEfsRequest#Ec2Config
   */
  readonly ec2Config: Ec2Config;

  /**
   * @schema CreateLocationEfsRequest#Tags
   */
  readonly tags?: TagListEntry[];

}

/**
 * @schema CreateLocationEfsResponse
 */
export interface CreateLocationEfsResponse {
  /**
   * @schema CreateLocationEfsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema CreateLocationFsxWindowsRequest
 */
export interface CreateLocationFsxWindowsRequest {
  /**
   * @schema CreateLocationFsxWindowsRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema CreateLocationFsxWindowsRequest#FsxFilesystemArn
   */
  readonly fsxFilesystemArn: string;

  /**
   * @schema CreateLocationFsxWindowsRequest#SecurityGroupArns
   */
  readonly securityGroupArns: string[];

  /**
   * @schema CreateLocationFsxWindowsRequest#Tags
   */
  readonly tags?: TagListEntry[];

  /**
   * @schema CreateLocationFsxWindowsRequest#User
   */
  readonly user: string;

  /**
   * @schema CreateLocationFsxWindowsRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema CreateLocationFsxWindowsRequest#Password
   */
  readonly password: string;

}

/**
 * @schema CreateLocationFsxWindowsResponse
 */
export interface CreateLocationFsxWindowsResponse {
  /**
   * @schema CreateLocationFsxWindowsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema CreateLocationNfsRequest
 */
export interface CreateLocationNfsRequest {
  /**
   * @schema CreateLocationNfsRequest#Subdirectory
   */
  readonly subdirectory: string;

  /**
   * @schema CreateLocationNfsRequest#ServerHostname
   */
  readonly serverHostname: string;

  /**
   * @schema CreateLocationNfsRequest#OnPremConfig
   */
  readonly onPremConfig: OnPremConfig;

  /**
   * @schema CreateLocationNfsRequest#MountOptions
   */
  readonly mountOptions?: NfsMountOptions;

  /**
   * @schema CreateLocationNfsRequest#Tags
   */
  readonly tags?: TagListEntry[];

}

/**
 * @schema CreateLocationNfsResponse
 */
export interface CreateLocationNfsResponse {
  /**
   * @schema CreateLocationNfsResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema CreateLocationObjectStorageRequest
 */
export interface CreateLocationObjectStorageRequest {
  /**
   * @schema CreateLocationObjectStorageRequest#ServerHostname
   */
  readonly serverHostname: string;

  /**
   * @schema CreateLocationObjectStorageRequest#ServerPort
   */
  readonly serverPort?: number;

  /**
   * @schema CreateLocationObjectStorageRequest#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema CreateLocationObjectStorageRequest#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema CreateLocationObjectStorageRequest#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema CreateLocationObjectStorageRequest#AccessKey
   */
  readonly accessKey?: string;

  /**
   * @schema CreateLocationObjectStorageRequest#SecretKey
   */
  readonly secretKey?: string;

  /**
   * @schema CreateLocationObjectStorageRequest#AgentArns
   */
  readonly agentArns: string[];

  /**
   * @schema CreateLocationObjectStorageRequest#Tags
   */
  readonly tags?: TagListEntry[];

}

/**
 * @schema CreateLocationObjectStorageResponse
 */
export interface CreateLocationObjectStorageResponse {
  /**
   * @schema CreateLocationObjectStorageResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema CreateLocationS3Request
 */
export interface CreateLocationS3Request {
  /**
   * @schema CreateLocationS3Request#Subdirectory
   */
  readonly subdirectory?: string;

  /**
   * @schema CreateLocationS3Request#S3BucketArn
   */
  readonly s3BucketArn: string;

  /**
   * @schema CreateLocationS3Request#S3StorageClass
   */
  readonly s3StorageClass?: string;

  /**
   * @schema CreateLocationS3Request#S3Config
   */
  readonly s3Config: S3Config;

  /**
   * @schema CreateLocationS3Request#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema CreateLocationS3Request#Tags
   */
  readonly tags?: TagListEntry[];

}

/**
 * @schema CreateLocationS3Response
 */
export interface CreateLocationS3Response {
  /**
   * @schema CreateLocationS3Response#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema CreateLocationSmbRequest
 */
export interface CreateLocationSmbRequest {
  /**
   * @schema CreateLocationSmbRequest#Subdirectory
   */
  readonly subdirectory: string;

  /**
   * @schema CreateLocationSmbRequest#ServerHostname
   */
  readonly serverHostname: string;

  /**
   * @schema CreateLocationSmbRequest#User
   */
  readonly user: string;

  /**
   * @schema CreateLocationSmbRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema CreateLocationSmbRequest#Password
   */
  readonly password: string;

  /**
   * @schema CreateLocationSmbRequest#AgentArns
   */
  readonly agentArns: string[];

  /**
   * @schema CreateLocationSmbRequest#MountOptions
   */
  readonly mountOptions?: SmbMountOptions;

  /**
   * @schema CreateLocationSmbRequest#Tags
   */
  readonly tags?: TagListEntry[];

}

/**
 * @schema CreateLocationSmbResponse
 */
export interface CreateLocationSmbResponse {
  /**
   * @schema CreateLocationSmbResponse#LocationArn
   */
  readonly locationArn?: string;

}

/**
 * @schema CreateTaskRequest
 */
export interface CreateTaskRequest {
  /**
   * @schema CreateTaskRequest#SourceLocationArn
   */
  readonly sourceLocationArn: string;

  /**
   * @schema CreateTaskRequest#DestinationLocationArn
   */
  readonly destinationLocationArn: string;

  /**
   * @schema CreateTaskRequest#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema CreateTaskRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateTaskRequest#Options
   */
  readonly options?: Options;

  /**
   * @schema CreateTaskRequest#Excludes
   */
  readonly excludes?: FilterRule[];

  /**
   * @schema CreateTaskRequest#Schedule
   */
  readonly schedule?: TaskSchedule;

  /**
   * @schema CreateTaskRequest#Tags
   */
  readonly tags?: TagListEntry[];

}

/**
 * @schema CreateTaskResponse
 */
export interface CreateTaskResponse {
  /**
   * @schema CreateTaskResponse#TaskArn
   */
  readonly taskArn?: string;

}

/**
 * @schema DeleteAgentRequest
 */
export interface DeleteAgentRequest {
  /**
   * @schema DeleteAgentRequest#AgentArn
   */
  readonly agentArn: string;

}

/**
 * @schema DeleteAgentResponse
 */
export interface DeleteAgentResponse {
}

/**
 * @schema DeleteLocationRequest
 */
export interface DeleteLocationRequest {
  /**
   * @schema DeleteLocationRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DeleteLocationResponse
 */
export interface DeleteLocationResponse {
}

/**
 * @schema DeleteTaskRequest
 */
export interface DeleteTaskRequest {
  /**
   * @schema DeleteTaskRequest#TaskArn
   */
  readonly taskArn: string;

}

/**
 * @schema DeleteTaskResponse
 */
export interface DeleteTaskResponse {
}

/**
 * @schema DescribeAgentRequest
 */
export interface DescribeAgentRequest {
  /**
   * @schema DescribeAgentRequest#AgentArn
   */
  readonly agentArn: string;

}

/**
 * @schema DescribeAgentResponse
 */
export interface DescribeAgentResponse {
  /**
   * @schema DescribeAgentResponse#AgentArn
   */
  readonly agentArn?: string;

  /**
   * @schema DescribeAgentResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeAgentResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeAgentResponse#LastConnectionTime
   */
  readonly lastConnectionTime?: string;

  /**
   * @schema DescribeAgentResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeAgentResponse#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DescribeAgentResponse#PrivateLinkConfig
   */
  readonly privateLinkConfig?: PrivateLinkConfig;

}

/**
 * @schema DescribeLocationEfsRequest
 */
export interface DescribeLocationEfsRequest {
  /**
   * @schema DescribeLocationEfsRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DescribeLocationEfsResponse
 */
export interface DescribeLocationEfsResponse {
  /**
   * @schema DescribeLocationEfsResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DescribeLocationEfsResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DescribeLocationEfsResponse#Ec2Config
   */
  readonly ec2Config?: Ec2Config;

  /**
   * @schema DescribeLocationEfsResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeLocationFsxWindowsRequest
 */
export interface DescribeLocationFsxWindowsRequest {
  /**
   * @schema DescribeLocationFsxWindowsRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DescribeLocationFsxWindowsResponse
 */
export interface DescribeLocationFsxWindowsResponse {
  /**
   * @schema DescribeLocationFsxWindowsResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DescribeLocationFsxWindowsResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DescribeLocationFsxWindowsResponse#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

  /**
   * @schema DescribeLocationFsxWindowsResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeLocationFsxWindowsResponse#User
   */
  readonly user?: string;

  /**
   * @schema DescribeLocationFsxWindowsResponse#Domain
   */
  readonly domain?: string;

}

/**
 * @schema DescribeLocationNfsRequest
 */
export interface DescribeLocationNfsRequest {
  /**
   * @schema DescribeLocationNfsRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DescribeLocationNfsResponse
 */
export interface DescribeLocationNfsResponse {
  /**
   * @schema DescribeLocationNfsResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DescribeLocationNfsResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DescribeLocationNfsResponse#OnPremConfig
   */
  readonly onPremConfig?: OnPremConfig;

  /**
   * @schema DescribeLocationNfsResponse#MountOptions
   */
  readonly mountOptions?: NfsMountOptions;

  /**
   * @schema DescribeLocationNfsResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeLocationObjectStorageRequest
 */
export interface DescribeLocationObjectStorageRequest {
  /**
   * @schema DescribeLocationObjectStorageRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DescribeLocationObjectStorageResponse
 */
export interface DescribeLocationObjectStorageResponse {
  /**
   * @schema DescribeLocationObjectStorageResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DescribeLocationObjectStorageResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DescribeLocationObjectStorageResponse#AccessKey
   */
  readonly accessKey?: string;

  /**
   * @schema DescribeLocationObjectStorageResponse#ServerPort
   */
  readonly serverPort?: number;

  /**
   * @schema DescribeLocationObjectStorageResponse#ServerProtocol
   */
  readonly serverProtocol?: string;

  /**
   * @schema DescribeLocationObjectStorageResponse#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DescribeLocationObjectStorageResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeLocationS3Request
 */
export interface DescribeLocationS3Request {
  /**
   * @schema DescribeLocationS3Request#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DescribeLocationS3Response
 */
export interface DescribeLocationS3Response {
  /**
   * @schema DescribeLocationS3Response#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DescribeLocationS3Response#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DescribeLocationS3Response#S3StorageClass
   */
  readonly s3StorageClass?: string;

  /**
   * @schema DescribeLocationS3Response#S3Config
   */
  readonly s3Config?: S3Config;

  /**
   * @schema DescribeLocationS3Response#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DescribeLocationS3Response#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeLocationSmbRequest
 */
export interface DescribeLocationSmbRequest {
  /**
   * @schema DescribeLocationSmbRequest#LocationArn
   */
  readonly locationArn: string;

}

/**
 * @schema DescribeLocationSmbResponse
 */
export interface DescribeLocationSmbResponse {
  /**
   * @schema DescribeLocationSmbResponse#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema DescribeLocationSmbResponse#LocationUri
   */
  readonly locationUri?: string;

  /**
   * @schema DescribeLocationSmbResponse#AgentArns
   */
  readonly agentArns?: string[];

  /**
   * @schema DescribeLocationSmbResponse#User
   */
  readonly user?: string;

  /**
   * @schema DescribeLocationSmbResponse#Domain
   */
  readonly domain?: string;

  /**
   * @schema DescribeLocationSmbResponse#MountOptions
   */
  readonly mountOptions?: SmbMountOptions;

  /**
   * @schema DescribeLocationSmbResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeTaskRequest
 */
export interface DescribeTaskRequest {
  /**
   * @schema DescribeTaskRequest#TaskArn
   */
  readonly taskArn: string;

}

/**
 * @schema DescribeTaskResponse
 */
export interface DescribeTaskResponse {
  /**
   * @schema DescribeTaskResponse#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema DescribeTaskResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeTaskResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeTaskResponse#CurrentTaskExecutionArn
   */
  readonly currentTaskExecutionArn?: string;

  /**
   * @schema DescribeTaskResponse#SourceLocationArn
   */
  readonly sourceLocationArn?: string;

  /**
   * @schema DescribeTaskResponse#DestinationLocationArn
   */
  readonly destinationLocationArn?: string;

  /**
   * @schema DescribeTaskResponse#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema DescribeTaskResponse#SourceNetworkInterfaceArns
   */
  readonly sourceNetworkInterfaceArns?: string[];

  /**
   * @schema DescribeTaskResponse#DestinationNetworkInterfaceArns
   */
  readonly destinationNetworkInterfaceArns?: string[];

  /**
   * @schema DescribeTaskResponse#Options
   */
  readonly options?: Options;

  /**
   * @schema DescribeTaskResponse#Excludes
   */
  readonly excludes?: FilterRule[];

  /**
   * @schema DescribeTaskResponse#Schedule
   */
  readonly schedule?: TaskSchedule;

  /**
   * @schema DescribeTaskResponse#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DescribeTaskResponse#ErrorDetail
   */
  readonly errorDetail?: string;

  /**
   * @schema DescribeTaskResponse#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeTaskExecutionRequest
 */
export interface DescribeTaskExecutionRequest {
  /**
   * @schema DescribeTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn: string;

}

/**
 * @schema DescribeTaskExecutionResponse
 */
export interface DescribeTaskExecutionResponse {
  /**
   * @schema DescribeTaskExecutionResponse#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

  /**
   * @schema DescribeTaskExecutionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeTaskExecutionResponse#Options
   */
  readonly options?: Options;

  /**
   * @schema DescribeTaskExecutionResponse#Excludes
   */
  readonly excludes?: FilterRule[];

  /**
   * @schema DescribeTaskExecutionResponse#Includes
   */
  readonly includes?: FilterRule[];

  /**
   * @schema DescribeTaskExecutionResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeTaskExecutionResponse#EstimatedFilesToTransfer
   */
  readonly estimatedFilesToTransfer?: number;

  /**
   * @schema DescribeTaskExecutionResponse#EstimatedBytesToTransfer
   */
  readonly estimatedBytesToTransfer?: number;

  /**
   * @schema DescribeTaskExecutionResponse#FilesTransferred
   */
  readonly filesTransferred?: number;

  /**
   * @schema DescribeTaskExecutionResponse#BytesWritten
   */
  readonly bytesWritten?: number;

  /**
   * @schema DescribeTaskExecutionResponse#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema DescribeTaskExecutionResponse#Result
   */
  readonly result?: TaskExecutionResultDetail;

}

/**
 * @schema ListAgentsRequest
 */
export interface ListAgentsRequest {
  /**
   * @schema ListAgentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAgentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAgentsResponse
 */
export interface ListAgentsResponse {
  /**
   * @schema ListAgentsResponse#Agents
   */
  readonly agents?: AgentListEntry[];

  /**
   * @schema ListAgentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLocationsRequest
 */
export interface ListLocationsRequest {
  /**
   * @schema ListLocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLocationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLocationsRequest#Filters
   */
  readonly filters?: LocationFilter[];

}

/**
 * @schema ListLocationsResponse
 */
export interface ListLocationsResponse {
  /**
   * @schema ListLocationsResponse#Locations
   */
  readonly locations?: LocationListEntry[];

  /**
   * @schema ListLocationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: TagListEntry[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTaskExecutionsRequest
 */
export interface ListTaskExecutionsRequest {
  /**
   * @schema ListTaskExecutionsRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema ListTaskExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTaskExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTaskExecutionsResponse
 */
export interface ListTaskExecutionsResponse {
  /**
   * @schema ListTaskExecutionsResponse#TaskExecutions
   */
  readonly taskExecutions?: TaskExecutionListEntry[];

  /**
   * @schema ListTaskExecutionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTasksRequest
 */
export interface ListTasksRequest {
  /**
   * @schema ListTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTasksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTasksRequest#Filters
   */
  readonly filters?: TaskFilter[];

}

/**
 * @schema ListTasksResponse
 */
export interface ListTasksResponse {
  /**
   * @schema ListTasksResponse#Tasks
   */
  readonly tasks?: TaskListEntry[];

  /**
   * @schema ListTasksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartTaskExecutionRequest
 */
export interface StartTaskExecutionRequest {
  /**
   * @schema StartTaskExecutionRequest#TaskArn
   */
  readonly taskArn: string;

  /**
   * @schema StartTaskExecutionRequest#OverrideOptions
   */
  readonly overrideOptions?: Options;

  /**
   * @schema StartTaskExecutionRequest#Includes
   */
  readonly includes?: FilterRule[];

}

/**
 * @schema StartTaskExecutionResponse
 */
export interface StartTaskExecutionResponse {
  /**
   * @schema StartTaskExecutionResponse#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: TagListEntry[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#Keys
   */
  readonly keys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAgentRequest
 */
export interface UpdateAgentRequest {
  /**
   * @schema UpdateAgentRequest#AgentArn
   */
  readonly agentArn: string;

  /**
   * @schema UpdateAgentRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateAgentResponse
 */
export interface UpdateAgentResponse {
}

/**
 * @schema UpdateTaskRequest
 */
export interface UpdateTaskRequest {
  /**
   * @schema UpdateTaskRequest#TaskArn
   */
  readonly taskArn: string;

  /**
   * @schema UpdateTaskRequest#Options
   */
  readonly options?: Options;

  /**
   * @schema UpdateTaskRequest#Excludes
   */
  readonly excludes?: FilterRule[];

  /**
   * @schema UpdateTaskRequest#Schedule
   */
  readonly schedule?: TaskSchedule;

  /**
   * @schema UpdateTaskRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateTaskRequest#CloudWatchLogGroupArn
   */
  readonly cloudWatchLogGroupArn?: string;

}

/**
 * @schema UpdateTaskResponse
 */
export interface UpdateTaskResponse {
}

/**
 * @schema UpdateTaskExecutionRequest
 */
export interface UpdateTaskExecutionRequest {
  /**
   * @schema UpdateTaskExecutionRequest#TaskExecutionArn
   */
  readonly taskExecutionArn: string;

  /**
   * @schema UpdateTaskExecutionRequest#Options
   */
  readonly options: Options;

}

/**
 * @schema UpdateTaskExecutionResponse
 */
export interface UpdateTaskExecutionResponse {
}

/**
 * @schema TagListEntry
 */
export interface TagListEntry {
  /**
   * @schema TagListEntry#Key
   */
  readonly key: string;

  /**
   * @schema TagListEntry#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Config
 */
export interface Ec2Config {
  /**
   * @schema Ec2Config#SubnetArn
   */
  readonly subnetArn: string;

  /**
   * @schema Ec2Config#SecurityGroupArns
   */
  readonly securityGroupArns: string[];

}

/**
 * @schema OnPremConfig
 */
export interface OnPremConfig {
  /**
   * @schema OnPremConfig#AgentArns
   */
  readonly agentArns: string[];

}

/**
 * @schema NfsMountOptions
 */
export interface NfsMountOptions {
  /**
   * @schema NfsMountOptions#Version
   */
  readonly version?: string;

}

/**
 * @schema S3Config
 */
export interface S3Config {
  /**
   * @schema S3Config#BucketAccessRoleArn
   */
  readonly bucketAccessRoleArn: string;

}

/**
 * @schema SmbMountOptions
 */
export interface SmbMountOptions {
  /**
   * @schema SmbMountOptions#Version
   */
  readonly version?: string;

}

/**
 * @schema Options
 */
export interface Options {
  /**
   * @schema Options#VerifyMode
   */
  readonly verifyMode?: string;

  /**
   * @schema Options#OverwriteMode
   */
  readonly overwriteMode?: string;

  /**
   * @schema Options#Atime
   */
  readonly atime?: string;

  /**
   * @schema Options#Mtime
   */
  readonly mtime?: string;

  /**
   * @schema Options#Uid
   */
  readonly uid?: string;

  /**
   * @schema Options#Gid
   */
  readonly gid?: string;

  /**
   * @schema Options#PreserveDeletedFiles
   */
  readonly preserveDeletedFiles?: string;

  /**
   * @schema Options#PreserveDevices
   */
  readonly preserveDevices?: string;

  /**
   * @schema Options#PosixPermissions
   */
  readonly posixPermissions?: string;

  /**
   * @schema Options#BytesPerSecond
   */
  readonly bytesPerSecond?: number;

  /**
   * @schema Options#TaskQueueing
   */
  readonly taskQueueing?: string;

  /**
   * @schema Options#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema Options#TransferMode
   */
  readonly transferMode?: string;

}

/**
 * @schema FilterRule
 */
export interface FilterRule {
  /**
   * @schema FilterRule#FilterType
   */
  readonly filterType?: string;

  /**
   * @schema FilterRule#Value
   */
  readonly value?: string;

}

/**
 * @schema TaskSchedule
 */
export interface TaskSchedule {
  /**
   * @schema TaskSchedule#ScheduleExpression
   */
  readonly scheduleExpression: string;

}

/**
 * @schema PrivateLinkConfig
 */
export interface PrivateLinkConfig {
  /**
   * @schema PrivateLinkConfig#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema PrivateLinkConfig#PrivateLinkEndpoint
   */
  readonly privateLinkEndpoint?: string;

  /**
   * @schema PrivateLinkConfig#SubnetArns
   */
  readonly subnetArns?: string[];

  /**
   * @schema PrivateLinkConfig#SecurityGroupArns
   */
  readonly securityGroupArns?: string[];

}

/**
 * @schema TaskExecutionResultDetail
 */
export interface TaskExecutionResultDetail {
  /**
   * @schema TaskExecutionResultDetail#PrepareDuration
   */
  readonly prepareDuration?: number;

  /**
   * @schema TaskExecutionResultDetail#PrepareStatus
   */
  readonly prepareStatus?: string;

  /**
   * @schema TaskExecutionResultDetail#TotalDuration
   */
  readonly totalDuration?: number;

  /**
   * @schema TaskExecutionResultDetail#TransferDuration
   */
  readonly transferDuration?: number;

  /**
   * @schema TaskExecutionResultDetail#TransferStatus
   */
  readonly transferStatus?: string;

  /**
   * @schema TaskExecutionResultDetail#VerifyDuration
   */
  readonly verifyDuration?: number;

  /**
   * @schema TaskExecutionResultDetail#VerifyStatus
   */
  readonly verifyStatus?: string;

  /**
   * @schema TaskExecutionResultDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema TaskExecutionResultDetail#ErrorDetail
   */
  readonly errorDetail?: string;

}

/**
 * @schema AgentListEntry
 */
export interface AgentListEntry {
  /**
   * @schema AgentListEntry#AgentArn
   */
  readonly agentArn?: string;

  /**
   * @schema AgentListEntry#Name
   */
  readonly name?: string;

  /**
   * @schema AgentListEntry#Status
   */
  readonly status?: string;

}

/**
 * @schema LocationFilter
 */
export interface LocationFilter {
  /**
   * @schema LocationFilter#Name
   */
  readonly name: string;

  /**
   * @schema LocationFilter#Values
   */
  readonly values: string[];

  /**
   * @schema LocationFilter#Operator
   */
  readonly operator: string;

}

/**
 * @schema LocationListEntry
 */
export interface LocationListEntry {
  /**
   * @schema LocationListEntry#LocationArn
   */
  readonly locationArn?: string;

  /**
   * @schema LocationListEntry#LocationUri
   */
  readonly locationUri?: string;

}

/**
 * @schema TaskExecutionListEntry
 */
export interface TaskExecutionListEntry {
  /**
   * @schema TaskExecutionListEntry#TaskExecutionArn
   */
  readonly taskExecutionArn?: string;

  /**
   * @schema TaskExecutionListEntry#Status
   */
  readonly status?: string;

}

/**
 * @schema TaskFilter
 */
export interface TaskFilter {
  /**
   * @schema TaskFilter#Name
   */
  readonly name: string;

  /**
   * @schema TaskFilter#Values
   */
  readonly values: string[];

  /**
   * @schema TaskFilter#Operator
   */
  readonly operator: string;

}

/**
 * @schema TaskListEntry
 */
export interface TaskListEntry {
  /**
   * @schema TaskListEntry#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema TaskListEntry#Status
   */
  readonly status?: string;

  /**
   * @schema TaskListEntry#Name
   */
  readonly name?: string;

}
