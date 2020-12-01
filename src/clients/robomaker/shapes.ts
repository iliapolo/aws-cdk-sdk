/**
 * @schema BatchDeleteWorldsRequest
 */
export interface BatchDeleteWorldsRequest {
  /**
   * @schema BatchDeleteWorldsRequest#worlds
   */
  readonly worlds: string[];

}

/**
 * @schema BatchDeleteWorldsResponse
 */
export interface BatchDeleteWorldsResponse {
  /**
   * @schema BatchDeleteWorldsResponse#unprocessedWorlds
   */
  readonly unprocessedWorlds?: string[];

}

/**
 * @schema BatchDescribeSimulationJobRequest
 */
export interface BatchDescribeSimulationJobRequest {
  /**
   * @schema BatchDescribeSimulationJobRequest#jobs
   */
  readonly jobs: string[];

}

/**
 * @schema BatchDescribeSimulationJobResponse
 */
export interface BatchDescribeSimulationJobResponse {
  /**
   * @schema BatchDescribeSimulationJobResponse#jobs
   */
  readonly jobs?: SimulationJob[];

  /**
   * @schema BatchDescribeSimulationJobResponse#unprocessedJobs
   */
  readonly unprocessedJobs?: string[];

}

/**
 * @schema CancelDeploymentJobRequest
 */
export interface CancelDeploymentJobRequest {
  /**
   * @schema CancelDeploymentJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema CancelDeploymentJobResponse
 */
export interface CancelDeploymentJobResponse {
}

/**
 * @schema CancelSimulationJobRequest
 */
export interface CancelSimulationJobRequest {
  /**
   * @schema CancelSimulationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema CancelSimulationJobResponse
 */
export interface CancelSimulationJobResponse {
}

/**
 * @schema CancelSimulationJobBatchRequest
 */
export interface CancelSimulationJobBatchRequest {
  /**
   * @schema CancelSimulationJobBatchRequest#batch
   */
  readonly batch: string;

}

/**
 * @schema CancelSimulationJobBatchResponse
 */
export interface CancelSimulationJobBatchResponse {
}

/**
 * @schema CancelWorldExportJobRequest
 */
export interface CancelWorldExportJobRequest {
  /**
   * @schema CancelWorldExportJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema CancelWorldExportJobResponse
 */
export interface CancelWorldExportJobResponse {
}

/**
 * @schema CancelWorldGenerationJobRequest
 */
export interface CancelWorldGenerationJobRequest {
  /**
   * @schema CancelWorldGenerationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema CancelWorldGenerationJobResponse
 */
export interface CancelWorldGenerationJobResponse {
}

/**
 * @schema CreateDeploymentJobRequest
 */
export interface CreateDeploymentJobRequest {
  /**
   * @schema CreateDeploymentJobRequest#deploymentConfig
   */
  readonly deploymentConfig?: DeploymentConfig;

  /**
   * @schema CreateDeploymentJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateDeploymentJobRequest#fleet
   */
  readonly fleet: string;

  /**
   * @schema CreateDeploymentJobRequest#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs: DeploymentApplicationConfig[];

  /**
   * @schema CreateDeploymentJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDeploymentJobResponse
 */
export interface CreateDeploymentJobResponse {
  /**
   * @schema CreateDeploymentJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDeploymentJobResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema CreateDeploymentJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema CreateDeploymentJobResponse#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @schema CreateDeploymentJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema CreateDeploymentJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema CreateDeploymentJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateDeploymentJobResponse#deploymentConfig
   */
  readonly deploymentConfig?: DeploymentConfig;

  /**
   * @schema CreateDeploymentJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFleetRequest
 */
export interface CreateFleetRequest {
  /**
   * @schema CreateFleetRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateFleetRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFleetResponse
 */
export interface CreateFleetResponse {
  /**
   * @schema CreateFleetResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateFleetResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateFleetResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateFleetResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRobotRequest
 */
export interface CreateRobotRequest {
  /**
   * @schema CreateRobotRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateRobotRequest#architecture
   */
  readonly architecture: string;

  /**
   * @schema CreateRobotRequest#greengrassGroupId
   */
  readonly greengrassGroupId: string;

  /**
   * @schema CreateRobotRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRobotResponse
 */
export interface CreateRobotResponse {
  /**
   * @schema CreateRobotResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateRobotResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateRobotResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateRobotResponse#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema CreateRobotResponse#architecture
   */
  readonly architecture?: string;

  /**
   * @schema CreateRobotResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRobotApplicationRequest
 */
export interface CreateRobotApplicationRequest {
  /**
   * @schema CreateRobotApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateRobotApplicationRequest#sources
   */
  readonly sources: SourceConfig[];

  /**
   * @schema CreateRobotApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RobotSoftwareSuite;

  /**
   * @schema CreateRobotApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRobotApplicationResponse
 */
export interface CreateRobotApplicationResponse {
  /**
   * @schema CreateRobotApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateRobotApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateRobotApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema CreateRobotApplicationResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema CreateRobotApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema CreateRobotApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CreateRobotApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CreateRobotApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRobotApplicationVersionRequest
 */
export interface CreateRobotApplicationVersionRequest {
  /**
   * @schema CreateRobotApplicationVersionRequest#application
   */
  readonly application: string;

  /**
   * @schema CreateRobotApplicationVersionRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema CreateRobotApplicationVersionResponse
 */
export interface CreateRobotApplicationVersionResponse {
  /**
   * @schema CreateRobotApplicationVersionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateRobotApplicationVersionResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateRobotApplicationVersionResponse#version
   */
  readonly version?: string;

  /**
   * @schema CreateRobotApplicationVersionResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema CreateRobotApplicationVersionResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema CreateRobotApplicationVersionResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CreateRobotApplicationVersionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema CreateSimulationApplicationRequest
 */
export interface CreateSimulationApplicationRequest {
  /**
   * @schema CreateSimulationApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateSimulationApplicationRequest#sources
   */
  readonly sources: SourceConfig[];

  /**
   * @schema CreateSimulationApplicationRequest#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;

  /**
   * @schema CreateSimulationApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RobotSoftwareSuite;

  /**
   * @schema CreateSimulationApplicationRequest#renderingEngine
   */
  readonly renderingEngine?: RenderingEngine;

  /**
   * @schema CreateSimulationApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateSimulationApplicationResponse
 */
export interface CreateSimulationApplicationResponse {
  /**
   * @schema CreateSimulationApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateSimulationApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateSimulationApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema CreateSimulationApplicationResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema CreateSimulationApplicationResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @schema CreateSimulationApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema CreateSimulationApplicationResponse#renderingEngine
   */
  readonly renderingEngine?: RenderingEngine;

  /**
   * @schema CreateSimulationApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CreateSimulationApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CreateSimulationApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateSimulationApplicationVersionRequest
 */
export interface CreateSimulationApplicationVersionRequest {
  /**
   * @schema CreateSimulationApplicationVersionRequest#application
   */
  readonly application: string;

  /**
   * @schema CreateSimulationApplicationVersionRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema CreateSimulationApplicationVersionResponse
 */
export interface CreateSimulationApplicationVersionResponse {
  /**
   * @schema CreateSimulationApplicationVersionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateSimulationApplicationVersionResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateSimulationApplicationVersionResponse#version
   */
  readonly version?: string;

  /**
   * @schema CreateSimulationApplicationVersionResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema CreateSimulationApplicationVersionResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @schema CreateSimulationApplicationVersionResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema CreateSimulationApplicationVersionResponse#renderingEngine
   */
  readonly renderingEngine?: RenderingEngine;

  /**
   * @schema CreateSimulationApplicationVersionResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CreateSimulationApplicationVersionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema CreateSimulationJobRequest
 */
export interface CreateSimulationJobRequest {
  /**
   * @schema CreateSimulationJobRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateSimulationJobRequest#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema CreateSimulationJobRequest#loggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema CreateSimulationJobRequest#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds: number;

  /**
   * @schema CreateSimulationJobRequest#iamRole
   */
  readonly iamRole: string;

  /**
   * @schema CreateSimulationJobRequest#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema CreateSimulationJobRequest#robotApplications
   */
  readonly robotApplications?: RobotApplicationConfig[];

  /**
   * @schema CreateSimulationJobRequest#simulationApplications
   */
  readonly simulationApplications?: SimulationApplicationConfig[];

  /**
   * @schema CreateSimulationJobRequest#dataSources
   */
  readonly dataSources?: DataSourceConfig[];

  /**
   * @schema CreateSimulationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateSimulationJobRequest#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateSimulationJobRequest#compute
   */
  readonly compute?: Compute;

}

/**
 * @schema CreateSimulationJobResponse
 */
export interface CreateSimulationJobResponse {
  /**
   * @schema CreateSimulationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateSimulationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema CreateSimulationJobResponse#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema CreateSimulationJobResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CreateSimulationJobResponse#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema CreateSimulationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema CreateSimulationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateSimulationJobResponse#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema CreateSimulationJobResponse#loggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema CreateSimulationJobResponse#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds?: number;

  /**
   * @schema CreateSimulationJobResponse#simulationTimeMillis
   */
  readonly simulationTimeMillis?: number;

  /**
   * @schema CreateSimulationJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema CreateSimulationJobResponse#robotApplications
   */
  readonly robotApplications?: RobotApplicationConfig[];

  /**
   * @schema CreateSimulationJobResponse#simulationApplications
   */
  readonly simulationApplications?: SimulationApplicationConfig[];

  /**
   * @schema CreateSimulationJobResponse#dataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema CreateSimulationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateSimulationJobResponse#vpcConfig
   */
  readonly vpcConfig?: VpcConfigResponse;

  /**
   * @schema CreateSimulationJobResponse#compute
   */
  readonly compute?: ComputeResponse;

}

/**
 * @schema CreateWorldExportJobRequest
 */
export interface CreateWorldExportJobRequest {
  /**
   * @schema CreateWorldExportJobRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateWorldExportJobRequest#worlds
   */
  readonly worlds: string[];

  /**
   * @schema CreateWorldExportJobRequest#outputLocation
   */
  readonly outputLocation: OutputLocation;

  /**
   * @schema CreateWorldExportJobRequest#iamRole
   */
  readonly iamRole: string;

  /**
   * @schema CreateWorldExportJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateWorldExportJobResponse
 */
export interface CreateWorldExportJobResponse {
  /**
   * @schema CreateWorldExportJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateWorldExportJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema CreateWorldExportJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateWorldExportJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema CreateWorldExportJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateWorldExportJobResponse#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema CreateWorldExportJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema CreateWorldExportJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateWorldGenerationJobRequest
 */
export interface CreateWorldGenerationJobRequest {
  /**
   * @schema CreateWorldGenerationJobRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateWorldGenerationJobRequest#template
   */
  readonly template: string;

  /**
   * @schema CreateWorldGenerationJobRequest#worldCount
   */
  readonly worldCount: WorldCount;

  /**
   * @schema CreateWorldGenerationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateWorldGenerationJobRequest#worldTags
   */
  readonly worldTags?: { [key: string]: string };

}

/**
 * @schema CreateWorldGenerationJobResponse
 */
export interface CreateWorldGenerationJobResponse {
  /**
   * @schema CreateWorldGenerationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateWorldGenerationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema CreateWorldGenerationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateWorldGenerationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema CreateWorldGenerationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateWorldGenerationJobResponse#template
   */
  readonly template?: string;

  /**
   * @schema CreateWorldGenerationJobResponse#worldCount
   */
  readonly worldCount?: WorldCount;

  /**
   * @schema CreateWorldGenerationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateWorldGenerationJobResponse#worldTags
   */
  readonly worldTags?: { [key: string]: string };

}

/**
 * @schema CreateWorldTemplateRequest
 */
export interface CreateWorldTemplateRequest {
  /**
   * @schema CreateWorldTemplateRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateWorldTemplateRequest#name
   */
  readonly name?: string;

  /**
   * @schema CreateWorldTemplateRequest#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CreateWorldTemplateRequest#templateLocation
   */
  readonly templateLocation?: TemplateLocation;

  /**
   * @schema CreateWorldTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateWorldTemplateResponse
 */
export interface CreateWorldTemplateResponse {
  /**
   * @schema CreateWorldTemplateResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema CreateWorldTemplateResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateWorldTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema CreateWorldTemplateResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateWorldTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeleteFleetRequest
 */
export interface DeleteFleetRequest {
  /**
   * @schema DeleteFleetRequest#fleet
   */
  readonly fleet: string;

}

/**
 * @schema DeleteFleetResponse
 */
export interface DeleteFleetResponse {
}

/**
 * @schema DeleteRobotRequest
 */
export interface DeleteRobotRequest {
  /**
   * @schema DeleteRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema DeleteRobotResponse
 */
export interface DeleteRobotResponse {
}

/**
 * @schema DeleteRobotApplicationRequest
 */
export interface DeleteRobotApplicationRequest {
  /**
   * @schema DeleteRobotApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema DeleteRobotApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema DeleteRobotApplicationResponse
 */
export interface DeleteRobotApplicationResponse {
}

/**
 * @schema DeleteSimulationApplicationRequest
 */
export interface DeleteSimulationApplicationRequest {
  /**
   * @schema DeleteSimulationApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema DeleteSimulationApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema DeleteSimulationApplicationResponse
 */
export interface DeleteSimulationApplicationResponse {
}

/**
 * @schema DeleteWorldTemplateRequest
 */
export interface DeleteWorldTemplateRequest {
  /**
   * @schema DeleteWorldTemplateRequest#template
   */
  readonly template: string;

}

/**
 * @schema DeleteWorldTemplateResponse
 */
export interface DeleteWorldTemplateResponse {
}

/**
 * @schema DeregisterRobotRequest
 */
export interface DeregisterRobotRequest {
  /**
   * @schema DeregisterRobotRequest#fleet
   */
  readonly fleet: string;

  /**
   * @schema DeregisterRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema DeregisterRobotResponse
 */
export interface DeregisterRobotResponse {
  /**
   * @schema DeregisterRobotResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema DeregisterRobotResponse#robot
   */
  readonly robot?: string;

}

/**
 * @schema DescribeDeploymentJobRequest
 */
export interface DescribeDeploymentJobRequest {
  /**
   * @schema DescribeDeploymentJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema DescribeDeploymentJobResponse
 */
export interface DescribeDeploymentJobResponse {
  /**
   * @schema DescribeDeploymentJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeDeploymentJobResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema DescribeDeploymentJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeDeploymentJobResponse#deploymentConfig
   */
  readonly deploymentConfig?: DeploymentConfig;

  /**
   * @schema DescribeDeploymentJobResponse#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @schema DescribeDeploymentJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeDeploymentJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DescribeDeploymentJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeDeploymentJobResponse#robotDeploymentSummary
   */
  readonly robotDeploymentSummary?: RobotDeployment[];

  /**
   * @schema DescribeDeploymentJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeFleetRequest
 */
export interface DescribeFleetRequest {
  /**
   * @schema DescribeFleetRequest#fleet
   */
  readonly fleet: string;

}

/**
 * @schema DescribeFleetResponse
 */
export interface DescribeFleetResponse {
  /**
   * @schema DescribeFleetResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeFleetResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeFleetResponse#robots
   */
  readonly robots?: Robot[];

  /**
   * @schema DescribeFleetResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeFleetResponse#lastDeploymentStatus
   */
  readonly lastDeploymentStatus?: string;

  /**
   * @schema DescribeFleetResponse#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema DescribeFleetResponse#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

  /**
   * @schema DescribeFleetResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeRobotRequest
 */
export interface DescribeRobotRequest {
  /**
   * @schema DescribeRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema DescribeRobotResponse
 */
export interface DescribeRobotResponse {
  /**
   * @schema DescribeRobotResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeRobotResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeRobotResponse#fleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema DescribeRobotResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeRobotResponse#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema DescribeRobotResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeRobotResponse#architecture
   */
  readonly architecture?: string;

  /**
   * @schema DescribeRobotResponse#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema DescribeRobotResponse#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

  /**
   * @schema DescribeRobotResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeRobotApplicationRequest
 */
export interface DescribeRobotApplicationRequest {
  /**
   * @schema DescribeRobotApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema DescribeRobotApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema DescribeRobotApplicationResponse
 */
export interface DescribeRobotApplicationResponse {
  /**
   * @schema DescribeRobotApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeRobotApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeRobotApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema DescribeRobotApplicationResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema DescribeRobotApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema DescribeRobotApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DescribeRobotApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DescribeRobotApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeSimulationApplicationRequest
 */
export interface DescribeSimulationApplicationRequest {
  /**
   * @schema DescribeSimulationApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema DescribeSimulationApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema DescribeSimulationApplicationResponse
 */
export interface DescribeSimulationApplicationResponse {
  /**
   * @schema DescribeSimulationApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeSimulationApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeSimulationApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema DescribeSimulationApplicationResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema DescribeSimulationApplicationResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @schema DescribeSimulationApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema DescribeSimulationApplicationResponse#renderingEngine
   */
  readonly renderingEngine?: RenderingEngine;

  /**
   * @schema DescribeSimulationApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema DescribeSimulationApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DescribeSimulationApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeSimulationJobRequest
 */
export interface DescribeSimulationJobRequest {
  /**
   * @schema DescribeSimulationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema DescribeSimulationJobResponse
 */
export interface DescribeSimulationJobResponse {
  /**
   * @schema DescribeSimulationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeSimulationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeSimulationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeSimulationJobResponse#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema DescribeSimulationJobResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DescribeSimulationJobResponse#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema DescribeSimulationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DescribeSimulationJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeSimulationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeSimulationJobResponse#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema DescribeSimulationJobResponse#loggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema DescribeSimulationJobResponse#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds?: number;

  /**
   * @schema DescribeSimulationJobResponse#simulationTimeMillis
   */
  readonly simulationTimeMillis?: number;

  /**
   * @schema DescribeSimulationJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema DescribeSimulationJobResponse#robotApplications
   */
  readonly robotApplications?: RobotApplicationConfig[];

  /**
   * @schema DescribeSimulationJobResponse#simulationApplications
   */
  readonly simulationApplications?: SimulationApplicationConfig[];

  /**
   * @schema DescribeSimulationJobResponse#dataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema DescribeSimulationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeSimulationJobResponse#vpcConfig
   */
  readonly vpcConfig?: VpcConfigResponse;

  /**
   * @schema DescribeSimulationJobResponse#networkInterface
   */
  readonly networkInterface?: NetworkInterface;

  /**
   * @schema DescribeSimulationJobResponse#compute
   */
  readonly compute?: ComputeResponse;

}

/**
 * @schema DescribeSimulationJobBatchRequest
 */
export interface DescribeSimulationJobBatchRequest {
  /**
   * @schema DescribeSimulationJobBatchRequest#batch
   */
  readonly batch: string;

}

/**
 * @schema DescribeSimulationJobBatchResponse
 */
export interface DescribeSimulationJobBatchResponse {
  /**
   * @schema DescribeSimulationJobBatchResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#batchPolicy
   */
  readonly batchPolicy?: BatchPolicy;

  /**
   * @schema DescribeSimulationJobBatchResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeSimulationJobBatchResponse#failedRequests
   */
  readonly failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * @schema DescribeSimulationJobBatchResponse#pendingRequests
   */
  readonly pendingRequests?: SimulationJobRequest[];

  /**
   * @schema DescribeSimulationJobBatchResponse#createdRequests
   */
  readonly createdRequests?: SimulationJobSummary[];

  /**
   * @schema DescribeSimulationJobBatchResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeWorldRequest
 */
export interface DescribeWorldRequest {
  /**
   * @schema DescribeWorldRequest#world
   */
  readonly world: string;

}

/**
 * @schema DescribeWorldResponse
 */
export interface DescribeWorldResponse {
  /**
   * @schema DescribeWorldResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeWorldResponse#generationJob
   */
  readonly generationJob?: string;

  /**
   * @schema DescribeWorldResponse#template
   */
  readonly template?: string;

  /**
   * @schema DescribeWorldResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeWorldResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeWorldExportJobRequest
 */
export interface DescribeWorldExportJobRequest {
  /**
   * @schema DescribeWorldExportJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema DescribeWorldExportJobResponse
 */
export interface DescribeWorldExportJobResponse {
  /**
   * @schema DescribeWorldExportJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeWorldExportJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeWorldExportJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeWorldExportJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DescribeWorldExportJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeWorldExportJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeWorldExportJobResponse#worlds
   */
  readonly worlds?: string[];

  /**
   * @schema DescribeWorldExportJobResponse#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema DescribeWorldExportJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema DescribeWorldExportJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeWorldGenerationJobRequest
 */
export interface DescribeWorldGenerationJobRequest {
  /**
   * @schema DescribeWorldGenerationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema DescribeWorldGenerationJobResponse
 */
export interface DescribeWorldGenerationJobResponse {
  /**
   * @schema DescribeWorldGenerationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#template
   */
  readonly template?: string;

  /**
   * @schema DescribeWorldGenerationJobResponse#worldCount
   */
  readonly worldCount?: WorldCount;

  /**
   * @schema DescribeWorldGenerationJobResponse#finishedWorldsSummary
   */
  readonly finishedWorldsSummary?: FinishedWorldsSummary;

  /**
   * @schema DescribeWorldGenerationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeWorldGenerationJobResponse#worldTags
   */
  readonly worldTags?: { [key: string]: string };

}

/**
 * @schema DescribeWorldTemplateRequest
 */
export interface DescribeWorldTemplateRequest {
  /**
   * @schema DescribeWorldTemplateRequest#template
   */
  readonly template: string;

}

/**
 * @schema DescribeWorldTemplateResponse
 */
export interface DescribeWorldTemplateResponse {
  /**
   * @schema DescribeWorldTemplateResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeWorldTemplateResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeWorldTemplateResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeWorldTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema DescribeWorldTemplateResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DescribeWorldTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GetWorldTemplateBodyRequest
 */
export interface GetWorldTemplateBodyRequest {
  /**
   * @schema GetWorldTemplateBodyRequest#template
   */
  readonly template?: string;

  /**
   * @schema GetWorldTemplateBodyRequest#generationJob
   */
  readonly generationJob?: string;

}

/**
 * @schema GetWorldTemplateBodyResponse
 */
export interface GetWorldTemplateBodyResponse {
  /**
   * @schema GetWorldTemplateBodyResponse#templateBody
   */
  readonly templateBody?: string;

}

/**
 * @schema ListDeploymentJobsRequest
 */
export interface ListDeploymentJobsRequest {
  /**
   * @schema ListDeploymentJobsRequest#filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListDeploymentJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeploymentJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDeploymentJobsResponse
 */
export interface ListDeploymentJobsResponse {
  /**
   * @schema ListDeploymentJobsResponse#deploymentJobs
   */
  readonly deploymentJobs?: DeploymentJob[];

  /**
   * @schema ListDeploymentJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFleetsRequest
 */
export interface ListFleetsRequest {
  /**
   * @schema ListFleetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFleetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFleetsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListFleetsResponse
 */
export interface ListFleetsResponse {
  /**
   * @schema ListFleetsResponse#fleetDetails
   */
  readonly fleetDetails?: Fleet[];

  /**
   * @schema ListFleetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRobotApplicationsRequest
 */
export interface ListRobotApplicationsRequest {
  /**
   * @schema ListRobotApplicationsRequest#versionQualifier
   */
  readonly versionQualifier?: string;

  /**
   * @schema ListRobotApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRobotApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRobotApplicationsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListRobotApplicationsResponse
 */
export interface ListRobotApplicationsResponse {
  /**
   * @schema ListRobotApplicationsResponse#robotApplicationSummaries
   */
  readonly robotApplicationSummaries?: RobotApplicationSummary[];

  /**
   * @schema ListRobotApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRobotsRequest
 */
export interface ListRobotsRequest {
  /**
   * @schema ListRobotsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRobotsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRobotsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListRobotsResponse
 */
export interface ListRobotsResponse {
  /**
   * @schema ListRobotsResponse#robots
   */
  readonly robots?: Robot[];

  /**
   * @schema ListRobotsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSimulationApplicationsRequest
 */
export interface ListSimulationApplicationsRequest {
  /**
   * @schema ListSimulationApplicationsRequest#versionQualifier
   */
  readonly versionQualifier?: string;

  /**
   * @schema ListSimulationApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSimulationApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSimulationApplicationsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListSimulationApplicationsResponse
 */
export interface ListSimulationApplicationsResponse {
  /**
   * @schema ListSimulationApplicationsResponse#simulationApplicationSummaries
   */
  readonly simulationApplicationSummaries?: SimulationApplicationSummary[];

  /**
   * @schema ListSimulationApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSimulationJobBatchesRequest
 */
export interface ListSimulationJobBatchesRequest {
  /**
   * @schema ListSimulationJobBatchesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSimulationJobBatchesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSimulationJobBatchesRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListSimulationJobBatchesResponse
 */
export interface ListSimulationJobBatchesResponse {
  /**
   * @schema ListSimulationJobBatchesResponse#simulationJobBatchSummaries
   */
  readonly simulationJobBatchSummaries?: SimulationJobBatchSummary[];

  /**
   * @schema ListSimulationJobBatchesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSimulationJobsRequest
 */
export interface ListSimulationJobsRequest {
  /**
   * @schema ListSimulationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSimulationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSimulationJobsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListSimulationJobsResponse
 */
export interface ListSimulationJobsResponse {
  /**
   * @schema ListSimulationJobsResponse#simulationJobSummaries
   */
  readonly simulationJobSummaries: SimulationJobSummary[];

  /**
   * @schema ListSimulationJobsResponse#nextToken
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
 * @schema ListWorldExportJobsRequest
 */
export interface ListWorldExportJobsRequest {
  /**
   * @schema ListWorldExportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorldExportJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListWorldExportJobsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListWorldExportJobsResponse
 */
export interface ListWorldExportJobsResponse {
  /**
   * @schema ListWorldExportJobsResponse#worldExportJobSummaries
   */
  readonly worldExportJobSummaries: WorldExportJobSummary[];

  /**
   * @schema ListWorldExportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorldGenerationJobsRequest
 */
export interface ListWorldGenerationJobsRequest {
  /**
   * @schema ListWorldGenerationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorldGenerationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListWorldGenerationJobsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListWorldGenerationJobsResponse
 */
export interface ListWorldGenerationJobsResponse {
  /**
   * @schema ListWorldGenerationJobsResponse#worldGenerationJobSummaries
   */
  readonly worldGenerationJobSummaries: WorldGenerationJobSummary[];

  /**
   * @schema ListWorldGenerationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorldTemplatesRequest
 */
export interface ListWorldTemplatesRequest {
  /**
   * @schema ListWorldTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorldTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWorldTemplatesResponse
 */
export interface ListWorldTemplatesResponse {
  /**
   * @schema ListWorldTemplatesResponse#templateSummaries
   */
  readonly templateSummaries?: TemplateSummary[];

  /**
   * @schema ListWorldTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorldsRequest
 */
export interface ListWorldsRequest {
  /**
   * @schema ListWorldsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorldsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListWorldsRequest#filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListWorldsResponse
 */
export interface ListWorldsResponse {
  /**
   * @schema ListWorldsResponse#worldSummaries
   */
  readonly worldSummaries?: WorldSummary[];

  /**
   * @schema ListWorldsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RegisterRobotRequest
 */
export interface RegisterRobotRequest {
  /**
   * @schema RegisterRobotRequest#fleet
   */
  readonly fleet: string;

  /**
   * @schema RegisterRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema RegisterRobotResponse
 */
export interface RegisterRobotResponse {
  /**
   * @schema RegisterRobotResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RegisterRobotResponse#robot
   */
  readonly robot?: string;

}

/**
 * @schema RestartSimulationJobRequest
 */
export interface RestartSimulationJobRequest {
  /**
   * @schema RestartSimulationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RestartSimulationJobResponse
 */
export interface RestartSimulationJobResponse {
}

/**
 * @schema StartSimulationJobBatchRequest
 */
export interface StartSimulationJobBatchRequest {
  /**
   * @schema StartSimulationJobBatchRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartSimulationJobBatchRequest#batchPolicy
   */
  readonly batchPolicy?: BatchPolicy;

  /**
   * @schema StartSimulationJobBatchRequest#createSimulationJobRequests
   */
  readonly createSimulationJobRequests: SimulationJobRequest[];

  /**
   * @schema StartSimulationJobBatchRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema StartSimulationJobBatchResponse
 */
export interface StartSimulationJobBatchResponse {
  /**
   * @schema StartSimulationJobBatchResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema StartSimulationJobBatchResponse#status
   */
  readonly status?: string;

  /**
   * @schema StartSimulationJobBatchResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema StartSimulationJobBatchResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartSimulationJobBatchResponse#batchPolicy
   */
  readonly batchPolicy?: BatchPolicy;

  /**
   * @schema StartSimulationJobBatchResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema StartSimulationJobBatchResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema StartSimulationJobBatchResponse#failedRequests
   */
  readonly failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * @schema StartSimulationJobBatchResponse#pendingRequests
   */
  readonly pendingRequests?: SimulationJobRequest[];

  /**
   * @schema StartSimulationJobBatchResponse#createdRequests
   */
  readonly createdRequests?: SimulationJobSummary[];

  /**
   * @schema StartSimulationJobBatchResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SyncDeploymentJobRequest
 */
export interface SyncDeploymentJobRequest {
  /**
   * @schema SyncDeploymentJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema SyncDeploymentJobRequest#fleet
   */
  readonly fleet: string;

}

/**
 * @schema SyncDeploymentJobResponse
 */
export interface SyncDeploymentJobResponse {
  /**
   * @schema SyncDeploymentJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema SyncDeploymentJobResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema SyncDeploymentJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema SyncDeploymentJobResponse#deploymentConfig
   */
  readonly deploymentConfig?: DeploymentConfig;

  /**
   * @schema SyncDeploymentJobResponse#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @schema SyncDeploymentJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SyncDeploymentJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema SyncDeploymentJobResponse#createdAt
   */
  readonly createdAt?: string;

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
 * @schema UpdateRobotApplicationRequest
 */
export interface UpdateRobotApplicationRequest {
  /**
   * @schema UpdateRobotApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema UpdateRobotApplicationRequest#sources
   */
  readonly sources: SourceConfig[];

  /**
   * @schema UpdateRobotApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RobotSoftwareSuite;

  /**
   * @schema UpdateRobotApplicationRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema UpdateRobotApplicationResponse
 */
export interface UpdateRobotApplicationResponse {
  /**
   * @schema UpdateRobotApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateRobotApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema UpdateRobotApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema UpdateRobotApplicationResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema UpdateRobotApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema UpdateRobotApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema UpdateRobotApplicationResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema UpdateSimulationApplicationRequest
 */
export interface UpdateSimulationApplicationRequest {
  /**
   * @schema UpdateSimulationApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema UpdateSimulationApplicationRequest#sources
   */
  readonly sources: SourceConfig[];

  /**
   * @schema UpdateSimulationApplicationRequest#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;

  /**
   * @schema UpdateSimulationApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RobotSoftwareSuite;

  /**
   * @schema UpdateSimulationApplicationRequest#renderingEngine
   */
  readonly renderingEngine?: RenderingEngine;

  /**
   * @schema UpdateSimulationApplicationRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema UpdateSimulationApplicationResponse
 */
export interface UpdateSimulationApplicationResponse {
  /**
   * @schema UpdateSimulationApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateSimulationApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema UpdateSimulationApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema UpdateSimulationApplicationResponse#sources
   */
  readonly sources?: Source[];

  /**
   * @schema UpdateSimulationApplicationResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @schema UpdateSimulationApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema UpdateSimulationApplicationResponse#renderingEngine
   */
  readonly renderingEngine?: RenderingEngine;

  /**
   * @schema UpdateSimulationApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema UpdateSimulationApplicationResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema UpdateWorldTemplateRequest
 */
export interface UpdateWorldTemplateRequest {
  /**
   * @schema UpdateWorldTemplateRequest#template
   */
  readonly template: string;

  /**
   * @schema UpdateWorldTemplateRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateWorldTemplateRequest#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema UpdateWorldTemplateRequest#templateLocation
   */
  readonly templateLocation?: TemplateLocation;

}

/**
 * @schema UpdateWorldTemplateResponse
 */
export interface UpdateWorldTemplateResponse {
  /**
   * @schema UpdateWorldTemplateResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateWorldTemplateResponse#name
   */
  readonly name?: string;

  /**
   * @schema UpdateWorldTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema UpdateWorldTemplateResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema SimulationJob
 */
export interface SimulationJob {
  /**
   * @schema SimulationJob#arn
   */
  readonly arn?: string;

  /**
   * @schema SimulationJob#name
   */
  readonly name?: string;

  /**
   * @schema SimulationJob#status
   */
  readonly status?: string;

  /**
   * @schema SimulationJob#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema SimulationJob#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema SimulationJob#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema SimulationJob#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema SimulationJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SimulationJob#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema SimulationJob#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema SimulationJob#loggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema SimulationJob#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds?: number;

  /**
   * @schema SimulationJob#simulationTimeMillis
   */
  readonly simulationTimeMillis?: number;

  /**
   * @schema SimulationJob#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema SimulationJob#robotApplications
   */
  readonly robotApplications?: RobotApplicationConfig[];

  /**
   * @schema SimulationJob#simulationApplications
   */
  readonly simulationApplications?: SimulationApplicationConfig[];

  /**
   * @schema SimulationJob#dataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema SimulationJob#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SimulationJob#vpcConfig
   */
  readonly vpcConfig?: VpcConfigResponse;

  /**
   * @schema SimulationJob#networkInterface
   */
  readonly networkInterface?: NetworkInterface;

  /**
   * @schema SimulationJob#compute
   */
  readonly compute?: ComputeResponse;

}

/**
 * @schema DeploymentConfig
 */
export interface DeploymentConfig {
  /**
   * @schema DeploymentConfig#concurrentDeploymentPercentage
   */
  readonly concurrentDeploymentPercentage?: number;

  /**
   * @schema DeploymentConfig#failureThresholdPercentage
   */
  readonly failureThresholdPercentage?: number;

  /**
   * @schema DeploymentConfig#robotDeploymentTimeoutInSeconds
   */
  readonly robotDeploymentTimeoutInSeconds?: number;

  /**
   * @schema DeploymentConfig#downloadConditionFile
   */
  readonly downloadConditionFile?: S3Object;

}

/**
 * @schema DeploymentApplicationConfig
 */
export interface DeploymentApplicationConfig {
  /**
   * @schema DeploymentApplicationConfig#application
   */
  readonly application: string;

  /**
   * @schema DeploymentApplicationConfig#applicationVersion
   */
  readonly applicationVersion: string;

  /**
   * @schema DeploymentApplicationConfig#launchConfig
   */
  readonly launchConfig: DeploymentLaunchConfig;

}

/**
 * @schema SourceConfig
 */
export interface SourceConfig {
  /**
   * @schema SourceConfig#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema SourceConfig#s3Key
   */
  readonly s3Key?: string;

  /**
   * @schema SourceConfig#architecture
   */
  readonly architecture?: string;

}

/**
 * @schema RobotSoftwareSuite
 */
export interface RobotSoftwareSuite {
  /**
   * @schema RobotSoftwareSuite#name
   */
  readonly name?: string;

  /**
   * @schema RobotSoftwareSuite#version
   */
  readonly version?: string;

}

/**
 * @schema Source
 */
export interface Source {
  /**
   * @schema Source#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema Source#s3Key
   */
  readonly s3Key?: string;

  /**
   * @schema Source#etag
   */
  readonly etag?: string;

  /**
   * @schema Source#architecture
   */
  readonly architecture?: string;

}

/**
 * @schema SimulationSoftwareSuite
 */
export interface SimulationSoftwareSuite {
  /**
   * @schema SimulationSoftwareSuite#name
   */
  readonly name?: string;

  /**
   * @schema SimulationSoftwareSuite#version
   */
  readonly version?: string;

}

/**
 * @schema RenderingEngine
 */
export interface RenderingEngine {
  /**
   * @schema RenderingEngine#name
   */
  readonly name?: string;

  /**
   * @schema RenderingEngine#version
   */
  readonly version?: string;

}

/**
 * @schema OutputLocation
 */
export interface OutputLocation {
  /**
   * @schema OutputLocation#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema OutputLocation#s3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema LoggingConfig
 */
export interface LoggingConfig {
  /**
   * @schema LoggingConfig#recordAllRosTopics
   */
  readonly recordAllRosTopics: boolean;

}

/**
 * @schema RobotApplicationConfig
 */
export interface RobotApplicationConfig {
  /**
   * @schema RobotApplicationConfig#application
   */
  readonly application: string;

  /**
   * @schema RobotApplicationConfig#applicationVersion
   */
  readonly applicationVersion?: string;

  /**
   * @schema RobotApplicationConfig#launchConfig
   */
  readonly launchConfig: LaunchConfig;

}

/**
 * @schema SimulationApplicationConfig
 */
export interface SimulationApplicationConfig {
  /**
   * @schema SimulationApplicationConfig#application
   */
  readonly application: string;

  /**
   * @schema SimulationApplicationConfig#applicationVersion
   */
  readonly applicationVersion?: string;

  /**
   * @schema SimulationApplicationConfig#launchConfig
   */
  readonly launchConfig: LaunchConfig;

  /**
   * @schema SimulationApplicationConfig#worldConfigs
   */
  readonly worldConfigs?: WorldConfig[];

}

/**
 * @schema DataSourceConfig
 */
export interface DataSourceConfig {
  /**
   * @schema DataSourceConfig#name
   */
  readonly name: string;

  /**
   * @schema DataSourceConfig#s3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema DataSourceConfig#s3Keys
   */
  readonly s3Keys: string[];

}

/**
 * @schema VpcConfig
 */
export interface VpcConfig {
  /**
   * @schema VpcConfig#subnets
   */
  readonly subnets: string[];

  /**
   * @schema VpcConfig#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema VpcConfig#assignPublicIp
   */
  readonly assignPublicIp?: boolean;

}

/**
 * @schema Compute
 */
export interface Compute {
  /**
   * @schema Compute#simulationUnitLimit
   */
  readonly simulationUnitLimit?: number;

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#name
   */
  readonly name?: string;

  /**
   * @schema DataSource#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DataSource#s3Keys
   */
  readonly s3Keys?: S3KeyOutput[];

}

/**
 * @schema VpcConfigResponse
 */
export interface VpcConfigResponse {
  /**
   * @schema VpcConfigResponse#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema VpcConfigResponse#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema VpcConfigResponse#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcConfigResponse#assignPublicIp
   */
  readonly assignPublicIp?: boolean;

}

/**
 * @schema ComputeResponse
 */
export interface ComputeResponse {
  /**
   * @schema ComputeResponse#simulationUnitLimit
   */
  readonly simulationUnitLimit?: number;

}

/**
 * @schema WorldCount
 */
export interface WorldCount {
  /**
   * @schema WorldCount#floorplanCount
   */
  readonly floorplanCount?: number;

  /**
   * @schema WorldCount#interiorCountPerFloorplan
   */
  readonly interiorCountPerFloorplan?: number;

}

/**
 * @schema TemplateLocation
 */
export interface TemplateLocation {
  /**
   * @schema TemplateLocation#s3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema TemplateLocation#s3Key
   */
  readonly s3Key: string;

}

/**
 * @schema RobotDeployment
 */
export interface RobotDeployment {
  /**
   * @schema RobotDeployment#arn
   */
  readonly arn?: string;

  /**
   * @schema RobotDeployment#deploymentStartTime
   */
  readonly deploymentStartTime?: string;

  /**
   * @schema RobotDeployment#deploymentFinishTime
   */
  readonly deploymentFinishTime?: string;

  /**
   * @schema RobotDeployment#status
   */
  readonly status?: string;

  /**
   * @schema RobotDeployment#progressDetail
   */
  readonly progressDetail?: ProgressDetail;

  /**
   * @schema RobotDeployment#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RobotDeployment#failureCode
   */
  readonly failureCode?: string;

}

/**
 * @schema Robot
 */
export interface Robot {
  /**
   * @schema Robot#arn
   */
  readonly arn?: string;

  /**
   * @schema Robot#name
   */
  readonly name?: string;

  /**
   * @schema Robot#fleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema Robot#status
   */
  readonly status?: string;

  /**
   * @schema Robot#greenGrassGroupId
   */
  readonly greenGrassGroupId?: string;

  /**
   * @schema Robot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Robot#architecture
   */
  readonly architecture?: string;

  /**
   * @schema Robot#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema Robot#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema NetworkInterface#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema NetworkInterface#publicIpAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * @schema BatchPolicy
 */
export interface BatchPolicy {
  /**
   * @schema BatchPolicy#timeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema BatchPolicy#maxConcurrency
   */
  readonly maxConcurrency?: number;

}

/**
 * @schema FailedCreateSimulationJobRequest
 */
export interface FailedCreateSimulationJobRequest {
  /**
   * @schema FailedCreateSimulationJobRequest#request
   */
  readonly request?: SimulationJobRequest;

  /**
   * @schema FailedCreateSimulationJobRequest#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema FailedCreateSimulationJobRequest#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema FailedCreateSimulationJobRequest#failedAt
   */
  readonly failedAt?: string;

}

/**
 * @schema SimulationJobRequest
 */
export interface SimulationJobRequest {
  /**
   * @schema SimulationJobRequest#outputLocation
   */
  readonly outputLocation?: OutputLocation;

  /**
   * @schema SimulationJobRequest#loggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema SimulationJobRequest#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds: number;

  /**
   * @schema SimulationJobRequest#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema SimulationJobRequest#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema SimulationJobRequest#useDefaultApplications
   */
  readonly useDefaultApplications?: boolean;

  /**
   * @schema SimulationJobRequest#robotApplications
   */
  readonly robotApplications?: RobotApplicationConfig[];

  /**
   * @schema SimulationJobRequest#simulationApplications
   */
  readonly simulationApplications?: SimulationApplicationConfig[];

  /**
   * @schema SimulationJobRequest#dataSources
   */
  readonly dataSources?: DataSourceConfig[];

  /**
   * @schema SimulationJobRequest#vpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema SimulationJobRequest#compute
   */
  readonly compute?: Compute;

  /**
   * @schema SimulationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SimulationJobSummary
 */
export interface SimulationJobSummary {
  /**
   * @schema SimulationJobSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema SimulationJobSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema SimulationJobSummary#name
   */
  readonly name?: string;

  /**
   * @schema SimulationJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema SimulationJobSummary#simulationApplicationNames
   */
  readonly simulationApplicationNames?: string[];

  /**
   * @schema SimulationJobSummary#robotApplicationNames
   */
  readonly robotApplicationNames?: string[];

  /**
   * @schema SimulationJobSummary#dataSourceNames
   */
  readonly dataSourceNames?: string[];

}

/**
 * @schema FinishedWorldsSummary
 */
export interface FinishedWorldsSummary {
  /**
   * @schema FinishedWorldsSummary#finishedCount
   */
  readonly finishedCount?: number;

  /**
   * @schema FinishedWorldsSummary#succeededWorlds
   */
  readonly succeededWorlds?: string[];

  /**
   * @schema FinishedWorldsSummary#failureSummary
   */
  readonly failureSummary?: FailureSummary;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#name
   */
  readonly name?: string;

  /**
   * @schema Filter#values
   */
  readonly values?: string[];

}

/**
 * @schema DeploymentJob
 */
export interface DeploymentJob {
  /**
   * @schema DeploymentJob#arn
   */
  readonly arn?: string;

  /**
   * @schema DeploymentJob#fleet
   */
  readonly fleet?: string;

  /**
   * @schema DeploymentJob#status
   */
  readonly status?: string;

  /**
   * @schema DeploymentJob#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @schema DeploymentJob#deploymentConfig
   */
  readonly deploymentConfig?: DeploymentConfig;

  /**
   * @schema DeploymentJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DeploymentJob#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema DeploymentJob#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema Fleet
 */
export interface Fleet {
  /**
   * @schema Fleet#name
   */
  readonly name?: string;

  /**
   * @schema Fleet#arn
   */
  readonly arn?: string;

  /**
   * @schema Fleet#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Fleet#lastDeploymentStatus
   */
  readonly lastDeploymentStatus?: string;

  /**
   * @schema Fleet#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema Fleet#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

}

/**
 * @schema RobotApplicationSummary
 */
export interface RobotApplicationSummary {
  /**
   * @schema RobotApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema RobotApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RobotApplicationSummary#version
   */
  readonly version?: string;

  /**
   * @schema RobotApplicationSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RobotApplicationSummary#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

}

/**
 * @schema SimulationApplicationSummary
 */
export interface SimulationApplicationSummary {
  /**
   * @schema SimulationApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema SimulationApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema SimulationApplicationSummary#version
   */
  readonly version?: string;

  /**
   * @schema SimulationApplicationSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema SimulationApplicationSummary#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @schema SimulationApplicationSummary#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: SimulationSoftwareSuite;

}

/**
 * @schema SimulationJobBatchSummary
 */
export interface SimulationJobBatchSummary {
  /**
   * @schema SimulationJobBatchSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema SimulationJobBatchSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema SimulationJobBatchSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SimulationJobBatchSummary#status
   */
  readonly status?: string;

  /**
   * @schema SimulationJobBatchSummary#failedRequestCount
   */
  readonly failedRequestCount?: number;

  /**
   * @schema SimulationJobBatchSummary#pendingRequestCount
   */
  readonly pendingRequestCount?: number;

  /**
   * @schema SimulationJobBatchSummary#createdRequestCount
   */
  readonly createdRequestCount?: number;

}

/**
 * @schema WorldExportJobSummary
 */
export interface WorldExportJobSummary {
  /**
   * @schema WorldExportJobSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema WorldExportJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema WorldExportJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema WorldExportJobSummary#worlds
   */
  readonly worlds?: string[];

}

/**
 * @schema WorldGenerationJobSummary
 */
export interface WorldGenerationJobSummary {
  /**
   * @schema WorldGenerationJobSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema WorldGenerationJobSummary#template
   */
  readonly template?: string;

  /**
   * @schema WorldGenerationJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema WorldGenerationJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema WorldGenerationJobSummary#worldCount
   */
  readonly worldCount?: WorldCount;

  /**
   * @schema WorldGenerationJobSummary#succeededWorldCount
   */
  readonly succeededWorldCount?: number;

  /**
   * @schema WorldGenerationJobSummary#failedWorldCount
   */
  readonly failedWorldCount?: number;

}

/**
 * @schema TemplateSummary
 */
export interface TemplateSummary {
  /**
   * @schema TemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema TemplateSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema TemplateSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema TemplateSummary#name
   */
  readonly name?: string;

}

/**
 * @schema WorldSummary
 */
export interface WorldSummary {
  /**
   * @schema WorldSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema WorldSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema WorldSummary#generationJob
   */
  readonly generationJob?: string;

  /**
   * @schema WorldSummary#template
   */
  readonly template?: string;

}

/**
 * @schema S3Object
 */
export interface S3Object {
  /**
   * @schema S3Object#bucket
   */
  readonly bucket: string;

  /**
   * @schema S3Object#key
   */
  readonly key: string;

  /**
   * @schema S3Object#etag
   */
  readonly etag?: string;

}

/**
 * @schema DeploymentLaunchConfig
 */
export interface DeploymentLaunchConfig {
  /**
   * @schema DeploymentLaunchConfig#packageName
   */
  readonly packageName: string;

  /**
   * @schema DeploymentLaunchConfig#preLaunchFile
   */
  readonly preLaunchFile?: string;

  /**
   * @schema DeploymentLaunchConfig#launchFile
   */
  readonly launchFile: string;

  /**
   * @schema DeploymentLaunchConfig#postLaunchFile
   */
  readonly postLaunchFile?: string;

  /**
   * @schema DeploymentLaunchConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

}

/**
 * @schema LaunchConfig
 */
export interface LaunchConfig {
  /**
   * @schema LaunchConfig#packageName
   */
  readonly packageName: string;

  /**
   * @schema LaunchConfig#launchFile
   */
  readonly launchFile: string;

  /**
   * @schema LaunchConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema LaunchConfig#portForwardingConfig
   */
  readonly portForwardingConfig?: PortForwardingConfig;

  /**
   * @schema LaunchConfig#streamUI
   */
  readonly streamUI?: boolean;

}

/**
 * @schema WorldConfig
 */
export interface WorldConfig {
  /**
   * @schema WorldConfig#world
   */
  readonly world?: string;

}

/**
 * @schema S3KeyOutput
 */
export interface S3KeyOutput {
  /**
   * @schema S3KeyOutput#s3Key
   */
  readonly s3Key?: string;

  /**
   * @schema S3KeyOutput#etag
   */
  readonly etag?: string;

}

/**
 * @schema ProgressDetail
 */
export interface ProgressDetail {
  /**
   * @schema ProgressDetail#currentProgress
   */
  readonly currentProgress?: string;

  /**
   * @schema ProgressDetail#percentDone
   */
  readonly percentDone?: number;

  /**
   * @schema ProgressDetail#estimatedTimeRemainingSeconds
   */
  readonly estimatedTimeRemainingSeconds?: number;

  /**
   * @schema ProgressDetail#targetResource
   */
  readonly targetResource?: string;

}

/**
 * @schema FailureSummary
 */
export interface FailureSummary {
  /**
   * @schema FailureSummary#totalFailureCount
   */
  readonly totalFailureCount?: number;

  /**
   * @schema FailureSummary#failures
   */
  readonly failures?: WorldFailure[];

}

/**
 * @schema PortForwardingConfig
 */
export interface PortForwardingConfig {
  /**
   * @schema PortForwardingConfig#portMappings
   */
  readonly portMappings?: PortMapping[];

}

/**
 * @schema WorldFailure
 */
export interface WorldFailure {
  /**
   * @schema WorldFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema WorldFailure#sampleFailureReason
   */
  readonly sampleFailureReason?: string;

  /**
   * @schema WorldFailure#failureCount
   */
  readonly failureCount?: number;

}

/**
 * @schema PortMapping
 */
export interface PortMapping {
  /**
   * @schema PortMapping#jobPort
   */
  readonly jobPort: number;

  /**
   * @schema PortMapping#applicationPort
   */
  readonly applicationPort: number;

  /**
   * @schema PortMapping#enableOnPublicIp
   */
  readonly enableOnPublicIp?: boolean;

}
