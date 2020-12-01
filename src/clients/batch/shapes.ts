/**
 * @schema CancelJobRequest
 */
export interface CancelJobRequest {
  /**
   * @schema CancelJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema CancelJobRequest#reason
   */
  readonly reason: string;

}

/**
 * @schema CancelJobResponse
 */
export interface CancelJobResponse {
}

/**
 * @schema CreateComputeEnvironmentRequest
 */
export interface CreateComputeEnvironmentRequest {
  /**
   * @schema CreateComputeEnvironmentRequest#computeEnvironmentName
   */
  readonly computeEnvironmentName: string;

  /**
   * @schema CreateComputeEnvironmentRequest#type
   */
  readonly type: string;

  /**
   * @schema CreateComputeEnvironmentRequest#state
   */
  readonly state?: string;

  /**
   * @schema CreateComputeEnvironmentRequest#computeResources
   */
  readonly computeResources?: ComputeResource;

  /**
   * @schema CreateComputeEnvironmentRequest#serviceRole
   */
  readonly serviceRole: string;

  /**
   * @schema CreateComputeEnvironmentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateComputeEnvironmentResponse
 */
export interface CreateComputeEnvironmentResponse {
  /**
   * @schema CreateComputeEnvironmentResponse#computeEnvironmentName
   */
  readonly computeEnvironmentName?: string;

  /**
   * @schema CreateComputeEnvironmentResponse#computeEnvironmentArn
   */
  readonly computeEnvironmentArn?: string;

}

/**
 * @schema CreateJobQueueRequest
 */
export interface CreateJobQueueRequest {
  /**
   * @schema CreateJobQueueRequest#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema CreateJobQueueRequest#state
   */
  readonly state?: string;

  /**
   * @schema CreateJobQueueRequest#priority
   */
  readonly priority: number;

  /**
   * @schema CreateJobQueueRequest#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder: ComputeEnvironmentOrder[];

  /**
   * @schema CreateJobQueueRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateJobQueueResponse
 */
export interface CreateJobQueueResponse {
  /**
   * @schema CreateJobQueueResponse#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema CreateJobQueueResponse#jobQueueArn
   */
  readonly jobQueueArn: string;

}

/**
 * @schema DeleteComputeEnvironmentRequest
 */
export interface DeleteComputeEnvironmentRequest {
  /**
   * @schema DeleteComputeEnvironmentRequest#computeEnvironment
   */
  readonly computeEnvironment: string;

}

/**
 * @schema DeleteComputeEnvironmentResponse
 */
export interface DeleteComputeEnvironmentResponse {
}

/**
 * @schema DeleteJobQueueRequest
 */
export interface DeleteJobQueueRequest {
  /**
   * @schema DeleteJobQueueRequest#jobQueue
   */
  readonly jobQueue: string;

}

/**
 * @schema DeleteJobQueueResponse
 */
export interface DeleteJobQueueResponse {
}

/**
 * @schema DeregisterJobDefinitionRequest
 */
export interface DeregisterJobDefinitionRequest {
  /**
   * @schema DeregisterJobDefinitionRequest#jobDefinition
   */
  readonly jobDefinition: string;

}

/**
 * @schema DeregisterJobDefinitionResponse
 */
export interface DeregisterJobDefinitionResponse {
}

/**
 * @schema DescribeComputeEnvironmentsRequest
 */
export interface DescribeComputeEnvironmentsRequest {
  /**
   * @schema DescribeComputeEnvironmentsRequest#computeEnvironments
   */
  readonly computeEnvironments?: string[];

  /**
   * @schema DescribeComputeEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeComputeEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeComputeEnvironmentsResponse
 */
export interface DescribeComputeEnvironmentsResponse {
  /**
   * @schema DescribeComputeEnvironmentsResponse#computeEnvironments
   */
  readonly computeEnvironments?: ComputeEnvironmentDetail[];

  /**
   * @schema DescribeComputeEnvironmentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeJobDefinitionsRequest
 */
export interface DescribeJobDefinitionsRequest {
  /**
   * @schema DescribeJobDefinitionsRequest#jobDefinitions
   */
  readonly jobDefinitions?: string[];

  /**
   * @schema DescribeJobDefinitionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeJobDefinitionsRequest#jobDefinitionName
   */
  readonly jobDefinitionName?: string;

  /**
   * @schema DescribeJobDefinitionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema DescribeJobDefinitionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeJobDefinitionsResponse
 */
export interface DescribeJobDefinitionsResponse {
  /**
   * @schema DescribeJobDefinitionsResponse#jobDefinitions
   */
  readonly jobDefinitions?: JobDefinition[];

  /**
   * @schema DescribeJobDefinitionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeJobQueuesRequest
 */
export interface DescribeJobQueuesRequest {
  /**
   * @schema DescribeJobQueuesRequest#jobQueues
   */
  readonly jobQueues?: string[];

  /**
   * @schema DescribeJobQueuesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeJobQueuesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeJobQueuesResponse
 */
export interface DescribeJobQueuesResponse {
  /**
   * @schema DescribeJobQueuesResponse#jobQueues
   */
  readonly jobQueues?: JobQueueDetail[];

  /**
   * @schema DescribeJobQueuesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeJobsRequest
 */
export interface DescribeJobsRequest {
  /**
   * @schema DescribeJobsRequest#jobs
   */
  readonly jobs: string[];

}

/**
 * @schema DescribeJobsResponse
 */
export interface DescribeJobsResponse {
  /**
   * @schema DescribeJobsResponse#jobs
   */
  readonly jobs?: JobDetail[];

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#jobQueue
   */
  readonly jobQueue?: string;

  /**
   * @schema ListJobsRequest#arrayJobId
   */
  readonly arrayJobId?: string;

  /**
   * @schema ListJobsRequest#multiNodeJobId
   */
  readonly multiNodeJobId?: string;

  /**
   * @schema ListJobsRequest#jobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ListJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsResponse
 */
export interface ListJobsResponse {
  /**
   * @schema ListJobsResponse#jobSummaryList
   */
  readonly jobSummaryList: JobSummary[];

  /**
   * @schema ListJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RegisterJobDefinitionRequest
 */
export interface RegisterJobDefinitionRequest {
  /**
   * @schema RegisterJobDefinitionRequest#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema RegisterJobDefinitionRequest#type
   */
  readonly type: string;

  /**
   * @schema RegisterJobDefinitionRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema RegisterJobDefinitionRequest#containerProperties
   */
  readonly containerProperties?: ContainerProperties;

  /**
   * @schema RegisterJobDefinitionRequest#nodeProperties
   */
  readonly nodeProperties?: NodeProperties;

  /**
   * @schema RegisterJobDefinitionRequest#retryStrategy
   */
  readonly retryStrategy?: RetryStrategy;

  /**
   * @schema RegisterJobDefinitionRequest#timeout
   */
  readonly timeout?: JobTimeout;

  /**
   * @schema RegisterJobDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RegisterJobDefinitionResponse
 */
export interface RegisterJobDefinitionResponse {
  /**
   * @schema RegisterJobDefinitionResponse#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema RegisterJobDefinitionResponse#jobDefinitionArn
   */
  readonly jobDefinitionArn: string;

  /**
   * @schema RegisterJobDefinitionResponse#revision
   */
  readonly revision: number;

}

/**
 * @schema SubmitJobRequest
 */
export interface SubmitJobRequest {
  /**
   * @schema SubmitJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema SubmitJobRequest#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema SubmitJobRequest#arrayProperties
   */
  readonly arrayProperties?: ArrayProperties;

  /**
   * @schema SubmitJobRequest#dependsOn
   */
  readonly dependsOn?: JobDependency[];

  /**
   * @schema SubmitJobRequest#jobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema SubmitJobRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema SubmitJobRequest#containerOverrides
   */
  readonly containerOverrides?: ContainerOverrides;

  /**
   * @schema SubmitJobRequest#nodeOverrides
   */
  readonly nodeOverrides?: NodeOverrides;

  /**
   * @schema SubmitJobRequest#retryStrategy
   */
  readonly retryStrategy?: RetryStrategy;

  /**
   * @schema SubmitJobRequest#timeout
   */
  readonly timeout?: JobTimeout;

  /**
   * @schema SubmitJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SubmitJobResponse
 */
export interface SubmitJobResponse {
  /**
   * @schema SubmitJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema SubmitJobResponse#jobName
   */
  readonly jobName: string;

  /**
   * @schema SubmitJobResponse#jobId
   */
  readonly jobId: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema TerminateJobRequest
 */
export interface TerminateJobRequest {
  /**
   * @schema TerminateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema TerminateJobRequest#reason
   */
  readonly reason: string;

}

/**
 * @schema TerminateJobResponse
 */
export interface TerminateJobResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateComputeEnvironmentRequest
 */
export interface UpdateComputeEnvironmentRequest {
  /**
   * @schema UpdateComputeEnvironmentRequest#computeEnvironment
   */
  readonly computeEnvironment: string;

  /**
   * @schema UpdateComputeEnvironmentRequest#state
   */
  readonly state?: string;

  /**
   * @schema UpdateComputeEnvironmentRequest#computeResources
   */
  readonly computeResources?: ComputeResourceUpdate;

  /**
   * @schema UpdateComputeEnvironmentRequest#serviceRole
   */
  readonly serviceRole?: string;

}

/**
 * @schema UpdateComputeEnvironmentResponse
 */
export interface UpdateComputeEnvironmentResponse {
  /**
   * @schema UpdateComputeEnvironmentResponse#computeEnvironmentName
   */
  readonly computeEnvironmentName?: string;

  /**
   * @schema UpdateComputeEnvironmentResponse#computeEnvironmentArn
   */
  readonly computeEnvironmentArn?: string;

}

/**
 * @schema UpdateJobQueueRequest
 */
export interface UpdateJobQueueRequest {
  /**
   * @schema UpdateJobQueueRequest#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema UpdateJobQueueRequest#state
   */
  readonly state?: string;

  /**
   * @schema UpdateJobQueueRequest#priority
   */
  readonly priority?: number;

  /**
   * @schema UpdateJobQueueRequest#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder?: ComputeEnvironmentOrder[];

}

/**
 * @schema UpdateJobQueueResponse
 */
export interface UpdateJobQueueResponse {
  /**
   * @schema UpdateJobQueueResponse#jobQueueName
   */
  readonly jobQueueName?: string;

  /**
   * @schema UpdateJobQueueResponse#jobQueueArn
   */
  readonly jobQueueArn?: string;

}

/**
 * @schema ComputeResource
 */
export interface ComputeResource {
  /**
   * @schema ComputeResource#type
   */
  readonly type: string;

  /**
   * @schema ComputeResource#allocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema ComputeResource#minvCpus
   */
  readonly minvCpus: number;

  /**
   * @schema ComputeResource#maxvCpus
   */
  readonly maxvCpus: number;

  /**
   * @schema ComputeResource#desiredvCpus
   */
  readonly desiredvCpus?: number;

  /**
   * @schema ComputeResource#instanceTypes
   */
  readonly instanceTypes: string[];

  /**
   * @schema ComputeResource#imageId
   */
  readonly imageId?: string;

  /**
   * @schema ComputeResource#subnets
   */
  readonly subnets: string[];

  /**
   * @schema ComputeResource#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ComputeResource#ec2KeyPair
   */
  readonly ec2KeyPair?: string;

  /**
   * @schema ComputeResource#instanceRole
   */
  readonly instanceRole: string;

  /**
   * @schema ComputeResource#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ComputeResource#placementGroup
   */
  readonly placementGroup?: string;

  /**
   * @schema ComputeResource#bidPercentage
   */
  readonly bidPercentage?: number;

  /**
   * @schema ComputeResource#spotIamFleetRole
   */
  readonly spotIamFleetRole?: string;

  /**
   * @schema ComputeResource#launchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema ComputeResource#ec2Configuration
   */
  readonly ec2Configuration?: Ec2Configuration[];

}

/**
 * @schema ComputeEnvironmentOrder
 */
export interface ComputeEnvironmentOrder {
  /**
   * @schema ComputeEnvironmentOrder#order
   */
  readonly order: number;

  /**
   * @schema ComputeEnvironmentOrder#computeEnvironment
   */
  readonly computeEnvironment: string;

}

/**
 * @schema ComputeEnvironmentDetail
 */
export interface ComputeEnvironmentDetail {
  /**
   * @schema ComputeEnvironmentDetail#computeEnvironmentName
   */
  readonly computeEnvironmentName: string;

  /**
   * @schema ComputeEnvironmentDetail#computeEnvironmentArn
   */
  readonly computeEnvironmentArn: string;

  /**
   * @schema ComputeEnvironmentDetail#ecsClusterArn
   */
  readonly ecsClusterArn: string;

  /**
   * @schema ComputeEnvironmentDetail#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ComputeEnvironmentDetail#type
   */
  readonly type?: string;

  /**
   * @schema ComputeEnvironmentDetail#state
   */
  readonly state?: string;

  /**
   * @schema ComputeEnvironmentDetail#status
   */
  readonly status?: string;

  /**
   * @schema ComputeEnvironmentDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema ComputeEnvironmentDetail#computeResources
   */
  readonly computeResources?: ComputeResource;

  /**
   * @schema ComputeEnvironmentDetail#serviceRole
   */
  readonly serviceRole?: string;

}

/**
 * @schema JobDefinition
 */
export interface JobDefinition {
  /**
   * @schema JobDefinition#jobDefinitionName
   */
  readonly jobDefinitionName: string;

  /**
   * @schema JobDefinition#jobDefinitionArn
   */
  readonly jobDefinitionArn: string;

  /**
   * @schema JobDefinition#revision
   */
  readonly revision: number;

  /**
   * @schema JobDefinition#status
   */
  readonly status?: string;

  /**
   * @schema JobDefinition#type
   */
  readonly type: string;

  /**
   * @schema JobDefinition#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema JobDefinition#retryStrategy
   */
  readonly retryStrategy?: RetryStrategy;

  /**
   * @schema JobDefinition#containerProperties
   */
  readonly containerProperties?: ContainerProperties;

  /**
   * @schema JobDefinition#timeout
   */
  readonly timeout?: JobTimeout;

  /**
   * @schema JobDefinition#nodeProperties
   */
  readonly nodeProperties?: NodeProperties;

  /**
   * @schema JobDefinition#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema JobQueueDetail
 */
export interface JobQueueDetail {
  /**
   * @schema JobQueueDetail#jobQueueName
   */
  readonly jobQueueName: string;

  /**
   * @schema JobQueueDetail#jobQueueArn
   */
  readonly jobQueueArn: string;

  /**
   * @schema JobQueueDetail#state
   */
  readonly state: string;

  /**
   * @schema JobQueueDetail#status
   */
  readonly status?: string;

  /**
   * @schema JobQueueDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema JobQueueDetail#priority
   */
  readonly priority: number;

  /**
   * @schema JobQueueDetail#computeEnvironmentOrder
   */
  readonly computeEnvironmentOrder: ComputeEnvironmentOrder[];

  /**
   * @schema JobQueueDetail#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema JobDetail
 */
export interface JobDetail {
  /**
   * @schema JobDetail#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema JobDetail#jobName
   */
  readonly jobName: string;

  /**
   * @schema JobDetail#jobId
   */
  readonly jobId: string;

  /**
   * @schema JobDetail#jobQueue
   */
  readonly jobQueue: string;

  /**
   * @schema JobDetail#status
   */
  readonly status: string;

  /**
   * @schema JobDetail#attempts
   */
  readonly attempts?: AttemptDetail[];

  /**
   * @schema JobDetail#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema JobDetail#createdAt
   */
  readonly createdAt?: number;

  /**
   * @schema JobDetail#retryStrategy
   */
  readonly retryStrategy?: RetryStrategy;

  /**
   * @schema JobDetail#startedAt
   */
  readonly startedAt: number;

  /**
   * @schema JobDetail#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema JobDetail#dependsOn
   */
  readonly dependsOn?: JobDependency[];

  /**
   * @schema JobDetail#jobDefinition
   */
  readonly jobDefinition: string;

  /**
   * @schema JobDetail#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema JobDetail#container
   */
  readonly container?: ContainerDetail;

  /**
   * @schema JobDetail#nodeDetails
   */
  readonly nodeDetails?: NodeDetails;

  /**
   * @schema JobDetail#nodeProperties
   */
  readonly nodeProperties?: NodeProperties;

  /**
   * @schema JobDetail#arrayProperties
   */
  readonly arrayProperties?: ArrayPropertiesDetail;

  /**
   * @schema JobDetail#timeout
   */
  readonly timeout?: JobTimeout;

  /**
   * @schema JobDetail#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema JobSummary
 */
export interface JobSummary {
  /**
   * @schema JobSummary#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema JobSummary#jobId
   */
  readonly jobId: string;

  /**
   * @schema JobSummary#jobName
   */
  readonly jobName: string;

  /**
   * @schema JobSummary#createdAt
   */
  readonly createdAt?: number;

  /**
   * @schema JobSummary#status
   */
  readonly status?: string;

  /**
   * @schema JobSummary#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema JobSummary#startedAt
   */
  readonly startedAt?: number;

  /**
   * @schema JobSummary#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema JobSummary#container
   */
  readonly container?: ContainerSummary;

  /**
   * @schema JobSummary#arrayProperties
   */
  readonly arrayProperties?: ArrayPropertiesSummary;

  /**
   * @schema JobSummary#nodeProperties
   */
  readonly nodeProperties?: NodePropertiesSummary;

}

/**
 * @schema ContainerProperties
 */
export interface ContainerProperties {
  /**
   * @schema ContainerProperties#image
   */
  readonly image?: string;

  /**
   * @schema ContainerProperties#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema ContainerProperties#memory
   */
  readonly memory?: number;

  /**
   * @schema ContainerProperties#command
   */
  readonly command?: string[];

  /**
   * @schema ContainerProperties#jobRoleArn
   */
  readonly jobRoleArn?: string;

  /**
   * @schema ContainerProperties#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema ContainerProperties#volumes
   */
  readonly volumes?: Volume[];

  /**
   * @schema ContainerProperties#environment
   */
  readonly environment?: KeyValuePair[];

  /**
   * @schema ContainerProperties#mountPoints
   */
  readonly mountPoints?: MountPoint[];

  /**
   * @schema ContainerProperties#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema ContainerProperties#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema ContainerProperties#ulimits
   */
  readonly ulimits?: Ulimit[];

  /**
   * @schema ContainerProperties#user
   */
  readonly user?: string;

  /**
   * @schema ContainerProperties#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ContainerProperties#resourceRequirements
   */
  readonly resourceRequirements?: ResourceRequirement[];

  /**
   * @schema ContainerProperties#linuxParameters
   */
  readonly linuxParameters?: LinuxParameters;

  /**
   * @schema ContainerProperties#logConfiguration
   */
  readonly logConfiguration?: LogConfiguration;

  /**
   * @schema ContainerProperties#secrets
   */
  readonly secrets?: Secret[];

}

/**
 * @schema NodeProperties
 */
export interface NodeProperties {
  /**
   * @schema NodeProperties#numNodes
   */
  readonly numNodes: number;

  /**
   * @schema NodeProperties#mainNode
   */
  readonly mainNode: number;

  /**
   * @schema NodeProperties#nodeRangeProperties
   */
  readonly nodeRangeProperties: NodeRangeProperty[];

}

/**
 * @schema RetryStrategy
 */
export interface RetryStrategy {
  /**
   * @schema RetryStrategy#attempts
   */
  readonly attempts?: number;

  /**
   * @schema RetryStrategy#evaluateOnExit
   */
  readonly evaluateOnExit?: EvaluateOnExit[];

}

/**
 * @schema JobTimeout
 */
export interface JobTimeout {
  /**
   * @schema JobTimeout#attemptDurationSeconds
   */
  readonly attemptDurationSeconds?: number;

}

/**
 * @schema ArrayProperties
 */
export interface ArrayProperties {
  /**
   * @schema ArrayProperties#size
   */
  readonly size?: number;

}

/**
 * @schema JobDependency
 */
export interface JobDependency {
  /**
   * @schema JobDependency#jobId
   */
  readonly jobId?: string;

  /**
   * @schema JobDependency#type
   */
  readonly type?: string;

}

/**
 * @schema ContainerOverrides
 */
export interface ContainerOverrides {
  /**
   * @schema ContainerOverrides#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema ContainerOverrides#memory
   */
  readonly memory?: number;

  /**
   * @schema ContainerOverrides#command
   */
  readonly command?: string[];

  /**
   * @schema ContainerOverrides#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ContainerOverrides#environment
   */
  readonly environment?: KeyValuePair[];

  /**
   * @schema ContainerOverrides#resourceRequirements
   */
  readonly resourceRequirements?: ResourceRequirement[];

}

/**
 * @schema NodeOverrides
 */
export interface NodeOverrides {
  /**
   * @schema NodeOverrides#numNodes
   */
  readonly numNodes?: number;

  /**
   * @schema NodeOverrides#nodePropertyOverrides
   */
  readonly nodePropertyOverrides?: NodePropertyOverride[];

}

/**
 * @schema ComputeResourceUpdate
 */
export interface ComputeResourceUpdate {
  /**
   * @schema ComputeResourceUpdate#minvCpus
   */
  readonly minvCpus?: number;

  /**
   * @schema ComputeResourceUpdate#maxvCpus
   */
  readonly maxvCpus?: number;

  /**
   * @schema ComputeResourceUpdate#desiredvCpus
   */
  readonly desiredvCpus?: number;

}

/**
 * @schema LaunchTemplateSpecification
 */
export interface LaunchTemplateSpecification {
  /**
   * @schema LaunchTemplateSpecification#launchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema LaunchTemplateSpecification#launchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema LaunchTemplateSpecification#version
   */
  readonly version?: string;

}

/**
 * @schema Ec2Configuration
 */
export interface Ec2Configuration {
  /**
   * @schema Ec2Configuration#imageType
   */
  readonly imageType: string;

  /**
   * @schema Ec2Configuration#imageIdOverride
   */
  readonly imageIdOverride?: string;

}

/**
 * @schema AttemptDetail
 */
export interface AttemptDetail {
  /**
   * @schema AttemptDetail#container
   */
  readonly container?: AttemptContainerDetail;

  /**
   * @schema AttemptDetail#startedAt
   */
  readonly startedAt?: number;

  /**
   * @schema AttemptDetail#stoppedAt
   */
  readonly stoppedAt?: number;

  /**
   * @schema AttemptDetail#statusReason
   */
  readonly statusReason?: string;

}

/**
 * @schema ContainerDetail
 */
export interface ContainerDetail {
  /**
   * @schema ContainerDetail#image
   */
  readonly image?: string;

  /**
   * @schema ContainerDetail#vcpus
   */
  readonly vcpus?: number;

  /**
   * @schema ContainerDetail#memory
   */
  readonly memory?: number;

  /**
   * @schema ContainerDetail#command
   */
  readonly command?: string[];

  /**
   * @schema ContainerDetail#jobRoleArn
   */
  readonly jobRoleArn?: string;

  /**
   * @schema ContainerDetail#executionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema ContainerDetail#volumes
   */
  readonly volumes?: Volume[];

  /**
   * @schema ContainerDetail#environment
   */
  readonly environment?: KeyValuePair[];

  /**
   * @schema ContainerDetail#mountPoints
   */
  readonly mountPoints?: MountPoint[];

  /**
   * @schema ContainerDetail#readonlyRootFilesystem
   */
  readonly readonlyRootFilesystem?: boolean;

  /**
   * @schema ContainerDetail#ulimits
   */
  readonly ulimits?: Ulimit[];

  /**
   * @schema ContainerDetail#privileged
   */
  readonly privileged?: boolean;

  /**
   * @schema ContainerDetail#user
   */
  readonly user?: string;

  /**
   * @schema ContainerDetail#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema ContainerDetail#reason
   */
  readonly reason?: string;

  /**
   * @schema ContainerDetail#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema ContainerDetail#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema ContainerDetail#logStreamName
   */
  readonly logStreamName?: string;

  /**
   * @schema ContainerDetail#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ContainerDetail#networkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

  /**
   * @schema ContainerDetail#resourceRequirements
   */
  readonly resourceRequirements?: ResourceRequirement[];

  /**
   * @schema ContainerDetail#linuxParameters
   */
  readonly linuxParameters?: LinuxParameters;

  /**
   * @schema ContainerDetail#logConfiguration
   */
  readonly logConfiguration?: LogConfiguration;

  /**
   * @schema ContainerDetail#secrets
   */
  readonly secrets?: Secret[];

}

/**
 * @schema NodeDetails
 */
export interface NodeDetails {
  /**
   * @schema NodeDetails#nodeIndex
   */
  readonly nodeIndex?: number;

  /**
   * @schema NodeDetails#isMainNode
   */
  readonly isMainNode?: boolean;

}

/**
 * @schema ArrayPropertiesDetail
 */
export interface ArrayPropertiesDetail {
  /**
   * @schema ArrayPropertiesDetail#statusSummary
   */
  readonly statusSummary?: { [key: string]: number };

  /**
   * @schema ArrayPropertiesDetail#size
   */
  readonly size?: number;

  /**
   * @schema ArrayPropertiesDetail#index
   */
  readonly index?: number;

}

/**
 * @schema ContainerSummary
 */
export interface ContainerSummary {
  /**
   * @schema ContainerSummary#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema ContainerSummary#reason
   */
  readonly reason?: string;

}

/**
 * @schema ArrayPropertiesSummary
 */
export interface ArrayPropertiesSummary {
  /**
   * @schema ArrayPropertiesSummary#size
   */
  readonly size?: number;

  /**
   * @schema ArrayPropertiesSummary#index
   */
  readonly index?: number;

}

/**
 * @schema NodePropertiesSummary
 */
export interface NodePropertiesSummary {
  /**
   * @schema NodePropertiesSummary#isMainNode
   */
  readonly isMainNode?: boolean;

  /**
   * @schema NodePropertiesSummary#numNodes
   */
  readonly numNodes?: number;

  /**
   * @schema NodePropertiesSummary#nodeIndex
   */
  readonly nodeIndex?: number;

}

/**
 * @schema Volume
 */
export interface Volume {
  /**
   * @schema Volume#host
   */
  readonly host?: Host;

  /**
   * @schema Volume#name
   */
  readonly name?: string;

}

/**
 * @schema KeyValuePair
 */
export interface KeyValuePair {
  /**
   * @schema KeyValuePair#name
   */
  readonly name?: string;

  /**
   * @schema KeyValuePair#value
   */
  readonly value?: string;

}

/**
 * @schema MountPoint
 */
export interface MountPoint {
  /**
   * @schema MountPoint#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema MountPoint#readOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema MountPoint#sourceVolume
   */
  readonly sourceVolume?: string;

}

/**
 * @schema Ulimit
 */
export interface Ulimit {
  /**
   * @schema Ulimit#hardLimit
   */
  readonly hardLimit: number;

  /**
   * @schema Ulimit#name
   */
  readonly name: string;

  /**
   * @schema Ulimit#softLimit
   */
  readonly softLimit: number;

}

/**
 * @schema ResourceRequirement
 */
export interface ResourceRequirement {
  /**
   * @schema ResourceRequirement#value
   */
  readonly value: string;

  /**
   * @schema ResourceRequirement#type
   */
  readonly type: string;

}

/**
 * @schema LinuxParameters
 */
export interface LinuxParameters {
  /**
   * @schema LinuxParameters#devices
   */
  readonly devices?: Device[];

  /**
   * @schema LinuxParameters#initProcessEnabled
   */
  readonly initProcessEnabled?: boolean;

  /**
   * @schema LinuxParameters#sharedMemorySize
   */
  readonly sharedMemorySize?: number;

  /**
   * @schema LinuxParameters#tmpfs
   */
  readonly tmpfs?: Tmpfs[];

  /**
   * @schema LinuxParameters#maxSwap
   */
  readonly maxSwap?: number;

  /**
   * @schema LinuxParameters#swappiness
   */
  readonly swappiness?: number;

}

/**
 * @schema LogConfiguration
 */
export interface LogConfiguration {
  /**
   * @schema LogConfiguration#logDriver
   */
  readonly logDriver: string;

  /**
   * @schema LogConfiguration#options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema LogConfiguration#secretOptions
   */
  readonly secretOptions?: Secret[];

}

/**
 * @schema Secret
 */
export interface Secret {
  /**
   * @schema Secret#name
   */
  readonly name: string;

  /**
   * @schema Secret#valueFrom
   */
  readonly valueFrom: string;

}

/**
 * @schema NodeRangeProperty
 */
export interface NodeRangeProperty {
  /**
   * @schema NodeRangeProperty#targetNodes
   */
  readonly targetNodes: string;

  /**
   * @schema NodeRangeProperty#container
   */
  readonly container?: ContainerProperties;

}

/**
 * @schema EvaluateOnExit
 */
export interface EvaluateOnExit {
  /**
   * @schema EvaluateOnExit#onStatusReason
   */
  readonly onStatusReason?: string;

  /**
   * @schema EvaluateOnExit#onReason
   */
  readonly onReason?: string;

  /**
   * @schema EvaluateOnExit#onExitCode
   */
  readonly onExitCode?: string;

  /**
   * @schema EvaluateOnExit#action
   */
  readonly action: string;

}

/**
 * @schema NodePropertyOverride
 */
export interface NodePropertyOverride {
  /**
   * @schema NodePropertyOverride#targetNodes
   */
  readonly targetNodes: string;

  /**
   * @schema NodePropertyOverride#containerOverrides
   */
  readonly containerOverrides?: ContainerOverrides;

}

/**
 * @schema AttemptContainerDetail
 */
export interface AttemptContainerDetail {
  /**
   * @schema AttemptContainerDetail#containerInstanceArn
   */
  readonly containerInstanceArn?: string;

  /**
   * @schema AttemptContainerDetail#taskArn
   */
  readonly taskArn?: string;

  /**
   * @schema AttemptContainerDetail#exitCode
   */
  readonly exitCode?: number;

  /**
   * @schema AttemptContainerDetail#reason
   */
  readonly reason?: string;

  /**
   * @schema AttemptContainerDetail#logStreamName
   */
  readonly logStreamName?: string;

  /**
   * @schema AttemptContainerDetail#networkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#attachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema NetworkInterface#ipv6Address
   */
  readonly ipv6Address?: string;

  /**
   * @schema NetworkInterface#privateIpv4Address
   */
  readonly privateIpv4Address?: string;

}

/**
 * @schema Host
 */
export interface Host {
  /**
   * @schema Host#sourcePath
   */
  readonly sourcePath?: string;

}

/**
 * @schema Device
 */
export interface Device {
  /**
   * @schema Device#hostPath
   */
  readonly hostPath: string;

  /**
   * @schema Device#containerPath
   */
  readonly containerPath?: string;

  /**
   * @schema Device#permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema Tmpfs
 */
export interface Tmpfs {
  /**
   * @schema Tmpfs#containerPath
   */
  readonly containerPath: string;

  /**
   * @schema Tmpfs#size
   */
  readonly size: number;

  /**
   * @schema Tmpfs#mountOptions
   */
  readonly mountOptions?: string[];

}
