/**
 * @schema BatchCancelJobRequest
 */
export interface BatchCancelJobRequest {
  /**
   * @schema BatchCancelJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchCancelJobRequest#reason
   */
  readonly reason: string;

}

/**
 * @schema BatchCancelJobResponse
 */
export interface BatchCancelJobResponse {
}

/**
 * @schema BatchCreateComputeEnvironmentRequest
 */
export interface BatchCreateComputeEnvironmentRequest {
  /**
   * @schema BatchCreateComputeEnvironmentRequest#computeEnvironmentName
   */
  readonly computeEnvironmentName: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#type
   */
  readonly type: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#computeResources
   */
  readonly computeResources?: BatchComputeResource;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#serviceRole
   */
  readonly serviceRole: string;

  /**
   * @schema BatchCreateComputeEnvironmentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchCreateComputeEnvironmentResponse
 */
export interface BatchCreateComputeEnvironmentResponse {
  /**
   * @schema BatchCreateComputeEnvironmentResponse#computeEnvironmentName
   */
  readonly computeEnvironmentName?: string;

  /**
   * @schema BatchCreateComputeEnvironmentResponse#computeEnvironmentArn
   */
  readonly computeEnvironmentArn?: string;

}

/**
 * @schema BatchCreateJobQueueRequest
 */
export interface BatchCreateJobQueueRequest {
  /**
   * @schema BatchCreateJobQueueRequest#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema BatchCreateJobQueueRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchCreateJobQueueRequest#priority
   */
  readonly priority: number;

  /**
   * @schema BatchCreateJobQueueRequest#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder: BatchComputeEnvironmentOrder[];

  /**
   * @schema BatchCreateJobQueueRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchCreateJobQueueResponse
 */
export interface BatchCreateJobQueueResponse {
  /**
   * @schema BatchCreateJobQueueResponse#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema BatchCreateJobQueueResponse#jobQueueArn
   */
  readonly jobQueueArn: string;

}

/**
 * @schema BatchDeleteComputeEnvironmentRequest
 */
export interface BatchDeleteComputeEnvironmentRequest {
  /**
   * @schema BatchDeleteComputeEnvironmentRequest#computeEnvironment
   */
  readonly computeEnvironment: string;

}

/**
 * @schema BatchDeleteComputeEnvironmentResponse
 */
export interface BatchDeleteComputeEnvironmentResponse {
}

/**
 * @schema BatchDeleteJobQueueRequest
 */
export interface BatchDeleteJobQueueRequest {
  /**
   * @schema BatchDeleteJobQueueRequest#jobQueue
   */
  readonly jobQueue: string;

}

/**
 * @schema BatchDeleteJobQueueResponse
 */
export interface BatchDeleteJobQueueResponse {
}

/**
 * @schema BatchDeregisterJobDefinitionRequest
 */
export interface BatchDeregisterJobDefinitionRequest {
  /**
   * @schema BatchDeregisterJobDefinitionRequest#jobDefinition
   */
  readonly jobDefinition: string;

}

/**
 * @schema BatchDeregisterJobDefinitionResponse
 */
export interface BatchDeregisterJobDefinitionResponse {
}

/**
 * @schema BatchDescribeComputeEnvironmentsRequest
 */
export interface BatchDescribeComputeEnvironmentsRequest {
  /**
   * @schema BatchDescribeComputeEnvironmentsRequest#computeEnvironments
   */
  readonly computeEnvironments?: string[];

  /**
   * @schema BatchDescribeComputeEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchDescribeComputeEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeComputeEnvironmentsResponse
 */
export interface BatchDescribeComputeEnvironmentsResponse {
  /**
   * @schema BatchDescribeComputeEnvironmentsResponse#computeEnvironments
   */
  readonly computeEnvironments?: BatchComputeEnvironmentDetail[];

  /**
   * @schema BatchDescribeComputeEnvironmentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeJobDefinitionsRequest
 */
export interface BatchDescribeJobDefinitionsRequest {
  /**
   * @schema BatchDescribeJobDefinitionsRequest#jobDefinitions
   */
  readonly jobDefinitions?: string[];

  /**
   * @schema BatchDescribeJobDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchDescribeJobDefinitionsRequest#jobDefinitionName
   */
  readonly jobDefinitionName?: string;

  /**
   * @schema BatchDescribeJobDefinitionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema BatchDescribeJobDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeJobDefinitionsResponse
 */
export interface BatchDescribeJobDefinitionsResponse {
  /**
   * @schema BatchDescribeJobDefinitionsResponse#jobDefinitions
   */
  readonly jobDefinitions?: BatchJobDefinition[];

  /**
   * @schema BatchDescribeJobDefinitionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeJobQueuesRequest
 */
export interface BatchDescribeJobQueuesRequest {
  /**
   * @schema BatchDescribeJobQueuesRequest#jobQueues
   */
  readonly jobQueues?: string[];

  /**
   * @schema BatchDescribeJobQueuesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchDescribeJobQueuesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeJobQueuesResponse
 */
export interface BatchDescribeJobQueuesResponse {
  /**
   * @schema BatchDescribeJobQueuesResponse#jobQueues
   */
  readonly jobQueues?: BatchJobQueueDetail[];

  /**
   * @schema BatchDescribeJobQueuesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchDescribeJobsRequest
 */
export interface BatchDescribeJobsRequest {
  /**
   * @schema BatchDescribeJobsRequest#jobs
   */
  readonly jobs: string[];

}

/**
 * @schema BatchDescribeJobsResponse
 */
export interface BatchDescribeJobsResponse {
  /**
   * @schema BatchDescribeJobsResponse#jobs
   */
  readonly jobs?: BatchJobDetail[];

}

/**
 * @schema BatchListJobsRequest
 */
export interface BatchListJobsRequest {
  /**
   * @schema BatchListJobsRequest#jobQueue
   */
  readonly jobQueue?: string;

  /**
   * @schema BatchListJobsRequest#arrayJobId
   */
  readonly arrayJobId?: string;

  /**
   * @schema BatchListJobsRequest#multiNodeJobId
   */
  readonly multiNodeJobId?: string;

  /**
   * @schema BatchListJobsRequest#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema BatchListJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchListJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListJobsResponse
 */
export interface BatchListJobsResponse {
  /**
   * @schema BatchListJobsResponse#jobSummaryList
   */
  readonly jobSummaryList: BatchJobSummary[];

  /**
   * @schema BatchListJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListTagsForResourceRequest
 */
export interface BatchListTagsForResourceRequest {
  /**
   * @schema BatchListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema BatchListTagsForResourceResponse
 */
export interface BatchListTagsForResourceResponse {
  /**
   * @schema BatchListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchRegisterJobDefinitionRequest
 */
export interface BatchRegisterJobDefinitionRequest {
  /**
   * @schema BatchRegisterJobDefinitionRequest#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema BatchRegisterJobDefinitionRequest#type
   */
  readonly type: string;

  /**
   * @schema BatchRegisterJobDefinitionRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchRegisterJobDefinitionRequest#containerProperties
   */
  readonly containerProperties?: BatchContainerProperties;

  /**
   * @schema BatchRegisterJobDefinitionRequest#nodeProperties
   */
  readonly nodeProperties?: BatchNodeProperties;

  /**
   * @schema BatchRegisterJobDefinitionRequest#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchRegisterJobDefinitionRequest#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchRegisterJobDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchRegisterJobDefinitionResponse
 */
export interface BatchRegisterJobDefinitionResponse {
  /**
   * @schema BatchRegisterJobDefinitionResponse#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema BatchRegisterJobDefinitionResponse#jobDefinitionArn
   */
  readonly jobDefinitionArn: string;

  /**
   * @schema BatchRegisterJobDefinitionResponse#revision
   */
  readonly revision: number;

}

/**
 * @schema BatchSubmitJobRequest
 */
export interface BatchSubmitJobRequest {
  /**
   * @schema BatchSubmitJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchSubmitJobRequest#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema BatchSubmitJobRequest#arrayProperties
   */
  readonly arrayProperties?: BatchArrayProperties;

  /**
   * @schema BatchSubmitJobRequest#dependsOn
   */
  readonly dependsOn?: BatchJobDependency[];

  /**
   * @schema BatchSubmitJobRequest#jobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema BatchSubmitJobRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchSubmitJobRequest#containerOverrides
   */
  readonly containerOverrides?: BatchContainerOverrides;

  /**
   * @schema BatchSubmitJobRequest#nodeOverrides
   */
  readonly nodeOverrides?: BatchNodeOverrides;

  /**
   * @schema BatchSubmitJobRequest#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchSubmitJobRequest#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchSubmitJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchSubmitJobResponse
 */
export interface BatchSubmitJobResponse {
  /**
   * @schema BatchSubmitJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema BatchSubmitJobResponse#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchSubmitJobResponse#jobId
   */
  readonly jobId: string;

}

/**
 * @schema BatchTagResourceRequest
 */
export interface BatchTagResourceRequest {
  /**
   * @schema BatchTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BatchTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema BatchTagResourceResponse
 */
export interface BatchTagResourceResponse {
}

/**
 * @schema BatchTerminateJobRequest
 */
export interface BatchTerminateJobRequest {
  /**
   * @schema BatchTerminateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchTerminateJobRequest#reason
   */
  readonly reason: string;

}

/**
 * @schema BatchTerminateJobResponse
 */
export interface BatchTerminateJobResponse {
}

/**
 * @schema BatchUntagResourceRequest
 */
export interface BatchUntagResourceRequest {
  /**
   * @schema BatchUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BatchUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema BatchUntagResourceResponse
 */
export interface BatchUntagResourceResponse {
}

/**
 * @schema BatchUpdateComputeEnvironmentRequest
 */
export interface BatchUpdateComputeEnvironmentRequest {
  /**
   * @schema BatchUpdateComputeEnvironmentRequest#computeEnvironment
   */
  readonly computeEnvironment: string;

  /**
   * @schema BatchUpdateComputeEnvironmentRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchUpdateComputeEnvironmentRequest#computeResources
   */
  readonly computeResources?: BatchComputeResourceUpdate;

  /**
   * @schema BatchUpdateComputeEnvironmentRequest#serviceRole
   */
  readonly serviceRole?: string;

}

/**
 * @schema BatchUpdateComputeEnvironmentResponse
 */
export interface BatchUpdateComputeEnvironmentResponse {
  /**
   * @schema BatchUpdateComputeEnvironmentResponse#computeEnvironmentName
   */
  readonly computeEnvironmentName?: string;

  /**
   * @schema BatchUpdateComputeEnvironmentResponse#computeEnvironmentArn
   */
  readonly computeEnvironmentArn?: string;

}

/**
 * @schema BatchUpdateJobQueueRequest
 */
export interface BatchUpdateJobQueueRequest {
  /**
   * @schema BatchUpdateJobQueueRequest#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema BatchUpdateJobQueueRequest#state
   */
  readonly state?: string;

  /**
   * @schema BatchUpdateJobQueueRequest#priority
   */
  readonly priority?: number;

  /**
   * @schema BatchUpdateJobQueueRequest#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder?: BatchComputeEnvironmentOrder[];

}

/**
 * @schema BatchUpdateJobQueueResponse
 */
export interface BatchUpdateJobQueueResponse {
  /**
   * @schema BatchUpdateJobQueueResponse#jobQueueName
   */
  readonly jobQueueName?: string;

  /**
   * @schema BatchUpdateJobQueueResponse#jobQueueArn
   */
  readonly jobQueueArn?: string;

}

/**
 * @schema BatchComputeResource
 */
export interface BatchComputeResource {
  /**
   * @schema BatchComputeResource#type
   */
  readonly type: string;

  /**
   * @schema BatchComputeResource#allocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema BatchComputeResource#minvCpus
   */
  readonly minvCpus: number;

  /**
   * @schema BatchComputeResource#maxvCpus
   */
  readonly maxvCpus: number;

  /**
   * @schema BatchComputeResource#desiredvCpus
   */
  readonly desiredvCpus?: number;

  /**
   * @schema BatchComputeResource#instanceTypes
   */
  readonly instanceTypes: string[];

  /**
   * @schema BatchComputeResource#imageId
   */
  readonly imageId?: string;

  /**
   * @schema BatchComputeResource#subnets
   */
  readonly subnets: string[];

  /**
   * @schema BatchComputeResource#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema BatchComputeResource#ec2KeyPair
   */
  readonly ec2KeyPair?: string;

  /**
   * @schema BatchComputeResource#instanceRole
   */
  readonly instanceRole: string;

  /**
   * @schema BatchComputeResource#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchComputeResource#placementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema BatchComputeResource#bidPercentage
   */
  readonly bidPercentage?: number;

  /**
   * @schema BatchComputeResource#spotIamFleetRole
   */
  readonly spotIamFleetRole?: string;

  /**
   * @schema BatchComputeResource#launchTemplate
   */
  readonly launchTemplate?: BatchLaunchTemplateSpecification;

  /**
   * @schema BatchComputeResource#ec2Configuration
   */
  readonly ec2Configuration?: BatchEc2Configuration[];

}

/**
 * @schema BatchComputeEnvironmentOrder
 */
export interface BatchComputeEnvironmentOrder {
  /**
   * @schema BatchComputeEnvironmentOrder#order
   */
  readonly order: number;

  /**
   * @schema BatchComputeEnvironmentOrder#computeEnvironment
   */
  readonly computeEnvironment: string;

}

/**
 * @schema BatchComputeEnvironmentDetail
 */
export interface BatchComputeEnvironmentDetail {
  /**
   * @schema BatchComputeEnvironmentDetail#computeEnvironmentName
   */
  readonly computeEnvironmentName: string;

  /**
   * @schema BatchComputeEnvironmentDetail#computeEnvironmentArn
   */
  readonly computeEnvironmentArn: string;

  /**
   * @schema BatchComputeEnvironmentDetail#ecsClusterArn
   */
  readonly ecsClusterArn: string;

  /**
   * @schema BatchComputeEnvironmentDetail#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema BatchComputeEnvironmentDetail#type
   */
  readonly type?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#state
   */
  readonly state?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#status
   */
  readonly status?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchComputeEnvironmentDetail#computeResources
   */
  readonly computeResources?: BatchComputeResource;

  /**
   * @schema BatchComputeEnvironmentDetail#serviceRole
   */
  readonly serviceRole?: string;

}

/**
 * @schema BatchJobDefinition
 */
export interface BatchJobDefinition {
  /**
   * @schema BatchJobDefinition#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema BatchJobDefinition#jobDefinitionArn
   */
  readonly jobDefinitionArn: string;

  /**
   * @schema BatchJobDefinition#revision
   */
  readonly revision: number;

  /**
   * @schema BatchJobDefinition#status
   */
  readonly status?: string;

  /**
   * @schema BatchJobDefinition#type
   */
  readonly type: string;

  /**
   * @schema BatchJobDefinition#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchJobDefinition#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchJobDefinition#containerProperties
   */
  readonly containerProperties?: BatchContainerProperties;

  /**
   * @schema BatchJobDefinition#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchJobDefinition#nodeProperties
   */
  readonly nodeProperties?: BatchNodeProperties;

  /**
   * @schema BatchJobDefinition#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchJobQueueDetail
 */
export interface BatchJobQueueDetail {
  /**
   * @schema BatchJobQueueDetail#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema BatchJobQueueDetail#jobQueueArn
   */
  readonly jobQueueArn: string;

  /**
   * @schema BatchJobQueueDetail#state
   */
  readonly state: string;

  /**
   * @schema BatchJobQueueDetail#status
   */
  readonly status?: string;

  /**
   * @schema BatchJobQueueDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchJobQueueDetail#priority
   */
  readonly priority: number;

  /**
   * @schema BatchJobQueueDetail#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder: BatchComputeEnvironmentOrder[];

  /**
   * @schema BatchJobQueueDetail#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchJobDetail
 */
export interface BatchJobDetail {
  /**
   * @schema BatchJobDetail#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema BatchJobDetail#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchJobDetail#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchJobDetail#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema BatchJobDetail#status
   */
  readonly status: string;

  /**
   * @schema BatchJobDetail#attempts
   */
  readonly attempts?: BatchAttemptDetail[];

  /**
   * @schema BatchJobDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchJobDetail#createdAt
   */
  readonly createdAt?: number;

  /**
   * @schema BatchJobDetail#retryStrategy
   */
  readonly retryStrategy?: BatchRetryStrategy;

  /**
   * @schema BatchJobDetail#startedAt
   */
  readonly startedAt: number;

  /**
   * @schema BatchJobDetail#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema BatchJobDetail#dependsOn
   */
  readonly dependsOn?: BatchJobDependency[];

  /**
   * @schema BatchJobDetail#jobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema BatchJobDetail#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema BatchJobDetail#container
   */
  readonly container?: BatchContainerDetail;

  /**
   * @schema BatchJobDetail#nodeDetails
   */
  readonly nodeDetails?: BatchNodeDetails;

  /**
   * @schema BatchJobDetail#nodeProperties
   */
  readonly nodeProperties?: BatchNodeProperties;

  /**
   * @schema BatchJobDetail#arrayProperties
   */
  readonly arrayProperties?: BatchArrayPropertiesDetail;

  /**
   * @schema BatchJobDetail#timeout
   */
  readonly timeout?: BatchJobTimeout;

  /**
   * @schema BatchJobDetail#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema BatchJobSummary
 */
export interface BatchJobSummary {
  /**
   * @schema BatchJobSummary#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema BatchJobSummary#jobId
   */
  readonly jobId: string;

  /**
   * @schema BatchJobSummary#jobName
   */
  readonly jobName: string;

  /**
   * @schema BatchJobSummary#createdAt
   */
  readonly createdAt?: number;

  /**
   * @schema BatchJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema BatchJobSummary#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema BatchJobSummary#startedAt
   */
  readonly startedAt?: number;

  /**
   * @schema BatchJobSummary#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema BatchJobSummary#container
   */
  readonly container?: BatchContainerSummary;

  /**
   * @schema BatchJobSummary#arrayProperties
   */
  readonly arrayProperties?: BatchArrayPropertiesSummary;

  /**
   * @schema BatchJobSummary#nodeProperties
   */
  readonly nodeProperties?: BatchNodePropertiesSummary;

}

/**
 * @schema BatchContainerProperties
 */
export interface BatchContainerProperties {
  /**
   * @schema BatchContainerProperties#image
   */
  readonly image?: string;

  /**
   * @schema BatchContainerProperties#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema BatchContainerProperties#memory
   */
  readonly memory?: number;

  /**
   * @schema BatchContainerProperties#command
   */
  readonly command?: string[];

  /**
   * @schema BatchContainerProperties#jobRoleArn
   */
  readonly jobRoleArn?: string;

  /**
   * @schema BatchContainerProperties#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BatchContainerProperties#volumes
   */
  readonly volumes?: BatchVolume[];

  /**
   * @schema BatchContainerProperties#environment
   */
  readonly environment?: BatchKeyValuePair[];

  /**
   * @schema BatchContainerProperties#mountPoints
   */
  readonly mountPoints?: BatchMountPoint[];

  /**
   * @schema BatchContainerProperties#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema BatchContainerProperties#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema BatchContainerProperties#ulimits
   */
  readonly ulimits?: BatchUlimit[];

  /**
   * @schema BatchContainerProperties#user
   */
  readonly user?: string;

  /**
   * @schema BatchContainerProperties#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema BatchContainerProperties#resourceRequirements
   */
  readonly resourceRequirements?: BatchResourceRequirement[];

  /**
   * @schema BatchContainerProperties#linuxParameters
   */
  readonly linuxParameters?: BatchLinuxParameters;

  /**
   * @schema BatchContainerProperties#logConfiguration
   */
  readonly logConfiguration?: BatchLogConfiguration;

  /**
   * @schema BatchContainerProperties#secrets
   */
  readonly secrets?: BatchSecret[];

}

/**
 * @schema BatchNodeProperties
 */
export interface BatchNodeProperties {
  /**
   * @schema BatchNodeProperties#numNodes
   */
  readonly numNodes: number;

  /**
   * @schema BatchNodeProperties#mainNode
   */
  readonly mainNode: number;

  /**
   * @schema BatchNodeProperties#nodeRangeProperties
   */
  readonly nodeRangeProperties: BatchNodeRangeProperty[];

}

/**
 * @schema BatchRetryStrategy
 */
export interface BatchRetryStrategy {
  /**
   * @schema BatchRetryStrategy#attempts
   */
  readonly attempts?: number;

  /**
   * @schema BatchRetryStrategy#evaluateOnExit
   */
  readonly evaluateOnExit?: BatchEvaluateOnExit[];

}

/**
 * @schema BatchJobTimeout
 */
export interface BatchJobTimeout {
  /**
   * @schema BatchJobTimeout#attemptDurationSeconds
   */
  readonly attemptDurationSeconds?: number;

}

/**
 * @schema BatchArrayProperties
 */
export interface BatchArrayProperties {
  /**
   * @schema BatchArrayProperties#size
   */
  readonly size?: number;

}

/**
 * @schema BatchJobDependency
 */
export interface BatchJobDependency {
  /**
   * @schema BatchJobDependency#jobId
   */
  readonly jobId?: string;

  /**
   * @schema BatchJobDependency#type
   */
  readonly type?: string;

}

/**
 * @schema BatchContainerOverrides
 */
export interface BatchContainerOverrides {
  /**
   * @schema BatchContainerOverrides#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema BatchContainerOverrides#memory
   */
  readonly memory?: number;

  /**
   * @schema BatchContainerOverrides#command
   */
  readonly command?: string[];

  /**
   * @schema BatchContainerOverrides#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema BatchContainerOverrides#environment
   */
  readonly environment?: BatchKeyValuePair[];

  /**
   * @schema BatchContainerOverrides#resourceRequirements
   */
  readonly resourceRequirements?: BatchResourceRequirement[];

}

/**
 * @schema BatchNodeOverrides
 */
export interface BatchNodeOverrides {
  /**
   * @schema BatchNodeOverrides#numNodes
   */
  readonly numNodes?: number;

  /**
   * @schema BatchNodeOverrides#nodePropertyOverrides
   */
  readonly nodePropertyOverrides?: BatchNodePropertyOverride[];

}

/**
 * @schema BatchComputeResourceUpdate
 */
export interface BatchComputeResourceUpdate {
  /**
   * @schema BatchComputeResourceUpdate#minvCpus
   */
  readonly minvCpus?: number;

  /**
   * @schema BatchComputeResourceUpdate#maxvCpus
   */
  readonly maxvCpus?: number;

  /**
   * @schema BatchComputeResourceUpdate#desiredvCpus
   */
  readonly desiredvCpus?: number;

}

/**
 * @schema BatchLaunchTemplateSpecification
 */
export interface BatchLaunchTemplateSpecification {
  /**
   * @schema BatchLaunchTemplateSpecification#launchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema BatchLaunchTemplateSpecification#launchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema BatchLaunchTemplateSpecification#version
   */
  readonly version?: string;

}

/**
 * @schema BatchEc2Configuration
 */
export interface BatchEc2Configuration {
  /**
   * @schema BatchEc2Configuration#imageType
   */
  readonly imageType: string;

  /**
   * @schema BatchEc2Configuration#imageIdOverride
   */
  readonly imageIdOverride?: string;

}

/**
 * @schema BatchAttemptDetail
 */
export interface BatchAttemptDetail {
  /**
   * @schema BatchAttemptDetail#container
   */
  readonly container?: BatchAttemptContainerDetail;

  /**
   * @schema BatchAttemptDetail#startedAt
   */
  readonly startedAt?: number;

  /**
   * @schema BatchAttemptDetail#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema BatchAttemptDetail#statusReason
   */
  readonly statusReason?: string;

}

/**
 * @schema BatchContainerDetail
 */
export interface BatchContainerDetail {
  /**
   * @schema BatchContainerDetail#image
   */
  readonly image?: string;

  /**
   * @schema BatchContainerDetail#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema BatchContainerDetail#memory
   */
  readonly memory?: number;

  /**
   * @schema BatchContainerDetail#command
   */
  readonly command?: string[];

  /**
   * @schema BatchContainerDetail#jobRoleArn
   */
  readonly jobRoleArn?: string;

  /**
   * @schema BatchContainerDetail#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema BatchContainerDetail#volumes
   */
  readonly volumes?: BatchVolume[];

  /**
   * @schema BatchContainerDetail#environment
   */
  readonly environment?: BatchKeyValuePair[];

  /**
   * @schema BatchContainerDetail#mountPoints
   */
  readonly mountPoints?: BatchMountPoint[];

  /**
   * @schema BatchContainerDetail#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema BatchContainerDetail#ulimits
   */
  readonly ulimits?: BatchUlimit[];

  /**
   * @schema BatchContainerDetail#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema BatchContainerDetail#user
   */
  readonly user?: string;

  /**
   * @schema BatchContainerDetail#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema BatchContainerDetail#reason
   */
  readonly reason?: string;

  /**
   * @schema BatchContainerDetail#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema BatchContainerDetail#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema BatchContainerDetail#logStreamName
   */
  readonly logStreamName?: string;

  /**
   * @schema BatchContainerDetail#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema BatchContainerDetail#networkInterfaces
   */
  readonly networkInterfaces?: BatchNetworkInterface[];

  /**
   * @schema BatchContainerDetail#resourceRequirements
   */
  readonly resourceRequirements?: BatchResourceRequirement[];

  /**
   * @schema BatchContainerDetail#linuxParameters
   */
  readonly linuxParameters?: BatchLinuxParameters;

  /**
   * @schema BatchContainerDetail#logConfiguration
   */
  readonly logConfiguration?: BatchLogConfiguration;

  /**
   * @schema BatchContainerDetail#secrets
   */
  readonly secrets?: BatchSecret[];

}

/**
 * @schema BatchNodeDetails
 */
export interface BatchNodeDetails {
  /**
   * @schema BatchNodeDetails#nodeIndex
   */
  readonly nodeIndex?: number;

  /**
   * @schema BatchNodeDetails#isMainNode
   */
  readonly isMainNode?: boolean;

}

/**
 * @schema BatchArrayPropertiesDetail
 */
export interface BatchArrayPropertiesDetail {
  /**
   * @schema BatchArrayPropertiesDetail#statusSummary
   */
  readonly statusSummary?: { [key: string]: number };

  /**
   * @schema BatchArrayPropertiesDetail#size
   */
  readonly size?: number;

  /**
   * @schema BatchArrayPropertiesDetail#index
   */
  readonly index?: number;

}

/**
 * @schema BatchContainerSummary
 */
export interface BatchContainerSummary {
  /**
   * @schema BatchContainerSummary#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema BatchContainerSummary#reason
   */
  readonly reason?: string;

}

/**
 * @schema BatchArrayPropertiesSummary
 */
export interface BatchArrayPropertiesSummary {
  /**
   * @schema BatchArrayPropertiesSummary#size
   */
  readonly size?: number;

  /**
   * @schema BatchArrayPropertiesSummary#index
   */
  readonly index?: number;

}

/**
 * @schema BatchNodePropertiesSummary
 */
export interface BatchNodePropertiesSummary {
  /**
   * @schema BatchNodePropertiesSummary#isMainNode
   */
  readonly isMainNode?: boolean;

  /**
   * @schema BatchNodePropertiesSummary#numNodes
   */
  readonly numNodes?: number;

  /**
   * @schema BatchNodePropertiesSummary#nodeIndex
   */
  readonly nodeIndex?: number;

}

/**
 * @schema BatchVolume
 */
export interface BatchVolume {
  /**
   * @schema BatchVolume#host
   */
  readonly host?: BatchHost;

  /**
   * @schema BatchVolume#name
   */
  readonly name?: string;

}

/**
 * @schema BatchKeyValuePair
 */
export interface BatchKeyValuePair {
  /**
   * @schema BatchKeyValuePair#name
   */
  readonly name?: string;

  /**
   * @schema BatchKeyValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema BatchMountPoint
 */
export interface BatchMountPoint {
  /**
   * @schema BatchMountPoint#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema BatchMountPoint#readOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema BatchMountPoint#sourceVolume
   */
  readonly sourceVolume?: string;

}

/**
 * @schema BatchUlimit
 */
export interface BatchUlimit {
  /**
   * @schema BatchUlimit#hardLimit
   */
  readonly hardLimit: number;

  /**
   * @schema BatchUlimit#name
   */
  readonly name: string;

  /**
   * @schema BatchUlimit#softLimit
   */
  readonly softLimit: number;

}

/**
 * @schema BatchResourceRequirement
 */
export interface BatchResourceRequirement {
  /**
   * @schema BatchResourceRequirement#value
   */
  readonly value: string;

  /**
   * @schema BatchResourceRequirement#type
   */
  readonly type: string;

}

/**
 * @schema BatchLinuxParameters
 */
export interface BatchLinuxParameters {
  /**
   * @schema BatchLinuxParameters#devices
   */
  readonly devices?: BatchDevice[];

  /**
   * @schema BatchLinuxParameters#initProcessEnabled
   */
  readonly initProcessEnabled?: boolean;

  /**
   * @schema BatchLinuxParameters#sharedMemorySize
   */
  readonly sharedMemorySize?: number;

  /**
   * @schema BatchLinuxParameters#tmpfs
   */
  readonly tmpfs?: BatchTmpfs[];

  /**
   * @schema BatchLinuxParameters#maxSwap
   */
  readonly maxSwap?: number;

  /**
   * @schema BatchLinuxParameters#swappiness
   */
  readonly swappiness?: number;

}

/**
 * @schema BatchLogConfiguration
 */
export interface BatchLogConfiguration {
  /**
   * @schema BatchLogConfiguration#logDriver
   */
  readonly logDriver: string;

  /**
   * @schema BatchLogConfiguration#options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema BatchLogConfiguration#secretOptions
   */
  readonly secretOptions?: BatchSecret[];

}

/**
 * @schema BatchSecret
 */
export interface BatchSecret {
  /**
   * @schema BatchSecret#name
   */
  readonly name: string;

  /**
   * @schema BatchSecret#valueFrom
   */
  readonly valueFrom: string;

}

/**
 * @schema BatchNodeRangeProperty
 */
export interface BatchNodeRangeProperty {
  /**
   * @schema BatchNodeRangeProperty#targetNodes
   */
  readonly targetNodes: string;

  /**
   * @schema BatchNodeRangeProperty#container
   */
  readonly container?: BatchContainerProperties;

}

/**
 * @schema BatchEvaluateOnExit
 */
export interface BatchEvaluateOnExit {
  /**
   * @schema BatchEvaluateOnExit#onStatusReason
   */
  readonly onStatusReason?: string;

  /**
   * @schema BatchEvaluateOnExit#onReason
   */
  readonly onReason?: string;

  /**
   * @schema BatchEvaluateOnExit#onExitCode
   */
  readonly onExitCode?: string;

  /**
   * @schema BatchEvaluateOnExit#action
   */
  readonly action: string;

}

/**
 * @schema BatchNodePropertyOverride
 */
export interface BatchNodePropertyOverride {
  /**
   * @schema BatchNodePropertyOverride#targetNodes
   */
  readonly targetNodes: string;

  /**
   * @schema BatchNodePropertyOverride#containerOverrides
   */
  readonly containerOverrides?: BatchContainerOverrides;

}

/**
 * @schema BatchAttemptContainerDetail
 */
export interface BatchAttemptContainerDetail {
  /**
   * @schema BatchAttemptContainerDetail#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema BatchAttemptContainerDetail#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema BatchAttemptContainerDetail#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema BatchAttemptContainerDetail#reason
   */
  readonly reason?: string;

  /**
   * @schema BatchAttemptContainerDetail#logStreamName
   */
  readonly logStreamName?: string;

  /**
   * @schema BatchAttemptContainerDetail#networkInterfaces
   */
  readonly networkInterfaces?: BatchNetworkInterface[];

}

/**
 * @schema BatchNetworkInterface
 */
export interface BatchNetworkInterface {
  /**
   * @schema BatchNetworkInterface#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema BatchNetworkInterface#ipv6Address
   */
  readonly ipv6Address?: string;

  /**
   * @schema BatchNetworkInterface#privateIpv4Address
   */
  readonly privateIpv4Address?: string;

}

/**
 * @schema BatchHost
 */
export interface BatchHost {
  /**
   * @schema BatchHost#sourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema BatchDevice
 */
export interface BatchDevice {
  /**
   * @schema BatchDevice#hostPath
   */
  readonly hostPath: string;

  /**
   * @schema BatchDevice#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema BatchDevice#permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema BatchTmpfs
 */
export interface BatchTmpfs {
  /**
   * @schema BatchTmpfs#containerPath
   */
  readonly containerPath: string;

  /**
   * @schema BatchTmpfs#size
   */
  readonly size: number;

  /**
   * @schema BatchTmpfs#mountOptions
   */
  readonly mountOptions?: string[];

}
