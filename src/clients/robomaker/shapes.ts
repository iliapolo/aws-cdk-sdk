/**
 * @schema RoboMakerBatchDeleteWorldsRequest
 */
export interface RoboMakerBatchDeleteWorldsRequest {
  /**
   * @schema RoboMakerBatchDeleteWorldsRequest#worlds
   */
  readonly worlds: string[];

}

/**
 * @schema RoboMakerBatchDeleteWorldsResponse
 */
export interface RoboMakerBatchDeleteWorldsResponse {
  /**
   * @schema RoboMakerBatchDeleteWorldsResponse#unprocessedWorlds
   */
  readonly unprocessedWorlds?: string[];

}

/**
 * @schema RoboMakerBatchDescribeSimulationJobRequest
 */
export interface RoboMakerBatchDescribeSimulationJobRequest {
  /**
   * @schema RoboMakerBatchDescribeSimulationJobRequest#jobs
   */
  readonly jobs: string[];

}

/**
 * @schema RoboMakerBatchDescribeSimulationJobResponse
 */
export interface RoboMakerBatchDescribeSimulationJobResponse {
  /**
   * @schema RoboMakerBatchDescribeSimulationJobResponse#jobs
   */
  readonly jobs?: RoboMakerSimulationJob[];

  /**
   * @schema RoboMakerBatchDescribeSimulationJobResponse#unprocessedJobs
   */
  readonly unprocessedJobs?: string[];

}

/**
 * @schema RoboMakerCancelDeploymentJobRequest
 */
export interface RoboMakerCancelDeploymentJobRequest {
  /**
   * @schema RoboMakerCancelDeploymentJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerCancelDeploymentJobResponse
 */
export interface RoboMakerCancelDeploymentJobResponse {
}

/**
 * @schema RoboMakerCancelSimulationJobRequest
 */
export interface RoboMakerCancelSimulationJobRequest {
  /**
   * @schema RoboMakerCancelSimulationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerCancelSimulationJobResponse
 */
export interface RoboMakerCancelSimulationJobResponse {
}

/**
 * @schema RoboMakerCancelSimulationJobBatchRequest
 */
export interface RoboMakerCancelSimulationJobBatchRequest {
  /**
   * @schema RoboMakerCancelSimulationJobBatchRequest#batch
   */
  readonly batch: string;

}

/**
 * @schema RoboMakerCancelSimulationJobBatchResponse
 */
export interface RoboMakerCancelSimulationJobBatchResponse {
}

/**
 * @schema RoboMakerCancelWorldExportJobRequest
 */
export interface RoboMakerCancelWorldExportJobRequest {
  /**
   * @schema RoboMakerCancelWorldExportJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerCancelWorldExportJobResponse
 */
export interface RoboMakerCancelWorldExportJobResponse {
}

/**
 * @schema RoboMakerCancelWorldGenerationJobRequest
 */
export interface RoboMakerCancelWorldGenerationJobRequest {
  /**
   * @schema RoboMakerCancelWorldGenerationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerCancelWorldGenerationJobResponse
 */
export interface RoboMakerCancelWorldGenerationJobResponse {
}

/**
 * @schema RoboMakerCreateDeploymentJobRequest
 */
export interface RoboMakerCreateDeploymentJobRequest {
  /**
   * @schema RoboMakerCreateDeploymentJobRequest#deploymentConfig
   */
  readonly deploymentConfig?: RoboMakerDeploymentConfig;

  /**
   * @schema RoboMakerCreateDeploymentJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema RoboMakerCreateDeploymentJobRequest#fleet
   */
  readonly fleet: string;

  /**
   * @schema RoboMakerCreateDeploymentJobRequest#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs: RoboMakerDeploymentApplicationConfig[];

  /**
   * @schema RoboMakerCreateDeploymentJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateDeploymentJobResponse
 */
export interface RoboMakerCreateDeploymentJobResponse {
  /**
   * @schema RoboMakerCreateDeploymentJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: RoboMakerDeploymentApplicationConfig[];

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#deploymentConfig
   */
  readonly deploymentConfig?: RoboMakerDeploymentConfig;

  /**
   * @schema RoboMakerCreateDeploymentJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateFleetRequest
 */
export interface RoboMakerCreateFleetRequest {
  /**
   * @schema RoboMakerCreateFleetRequest#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerCreateFleetRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateFleetResponse
 */
export interface RoboMakerCreateFleetResponse {
  /**
   * @schema RoboMakerCreateFleetResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateFleetResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateFleetResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerCreateFleetResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateRobotRequest
 */
export interface RoboMakerCreateRobotRequest {
  /**
   * @schema RoboMakerCreateRobotRequest#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerCreateRobotRequest#architecture
   */
  readonly architecture: string;

  /**
   * @schema RoboMakerCreateRobotRequest#greengrassGroupId
   */
  readonly greengrassGroupId: string;

  /**
   * @schema RoboMakerCreateRobotRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateRobotResponse
 */
export interface RoboMakerCreateRobotResponse {
  /**
   * @schema RoboMakerCreateRobotResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateRobotResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateRobotResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerCreateRobotResponse#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema RoboMakerCreateRobotResponse#architecture
   */
  readonly architecture?: string;

  /**
   * @schema RoboMakerCreateRobotResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateRobotApplicationRequest
 */
export interface RoboMakerCreateRobotApplicationRequest {
  /**
   * @schema RoboMakerCreateRobotApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerCreateRobotApplicationRequest#sources
   */
  readonly sources: RoboMakerSourceConfig[];

  /**
   * @schema RoboMakerCreateRobotApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerCreateRobotApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateRobotApplicationResponse
 */
export interface RoboMakerCreateRobotApplicationResponse {
  /**
   * @schema RoboMakerCreateRobotApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateRobotApplicationVersionRequest
 */
export interface RoboMakerCreateRobotApplicationVersionRequest {
  /**
   * @schema RoboMakerCreateRobotApplicationVersionRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerCreateRobotApplicationVersionRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema RoboMakerCreateRobotApplicationVersionResponse
 */
export interface RoboMakerCreateRobotApplicationVersionResponse {
  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerCreateRobotApplicationVersionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema RoboMakerCreateSimulationApplicationRequest
 */
export interface RoboMakerCreateSimulationApplicationRequest {
  /**
   * @schema RoboMakerCreateSimulationApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationRequest#sources
   */
  readonly sources: RoboMakerSourceConfig[];

  /**
   * @schema RoboMakerCreateSimulationApplicationRequest#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite: RoboMakerSimulationSoftwareSuite;

  /**
   * @schema RoboMakerCreateSimulationApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerCreateSimulationApplicationRequest#renderingEngine
   */
  readonly renderingEngine?: RoboMakerRenderingEngine;

  /**
   * @schema RoboMakerCreateSimulationApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateSimulationApplicationResponse
 */
export interface RoboMakerCreateSimulationApplicationResponse {
  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: RoboMakerSimulationSoftwareSuite;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#renderingEngine
   */
  readonly renderingEngine?: RoboMakerRenderingEngine;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateSimulationApplicationVersionRequest
 */
export interface RoboMakerCreateSimulationApplicationVersionRequest {
  /**
   * @schema RoboMakerCreateSimulationApplicationVersionRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema RoboMakerCreateSimulationApplicationVersionResponse
 */
export interface RoboMakerCreateSimulationApplicationVersionResponse {
  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: RoboMakerSimulationSoftwareSuite;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#renderingEngine
   */
  readonly renderingEngine?: RoboMakerRenderingEngine;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerCreateSimulationApplicationVersionResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema RoboMakerCreateSimulationJobRequest
 */
export interface RoboMakerCreateSimulationJobRequest {
  /**
   * @schema RoboMakerCreateSimulationJobRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#loggingConfig
   */
  readonly loggingConfig?: RoboMakerLoggingConfig;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds: number;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#iamRole
   */
  readonly iamRole: string;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#robotApplications
   */
  readonly robotApplications?: RoboMakerRobotApplicationConfig[];

  /**
   * @schema RoboMakerCreateSimulationJobRequest#simulationApplications
   */
  readonly simulationApplications?: RoboMakerSimulationApplicationConfig[];

  /**
   * @schema RoboMakerCreateSimulationJobRequest#dataSources
   */
  readonly dataSources?: RoboMakerDataSourceConfig[];

  /**
   * @schema RoboMakerCreateSimulationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerCreateSimulationJobRequest#vpcConfig
   */
  readonly vpcConfig?: RoboMakerVpcConfig;

  /**
   * @schema RoboMakerCreateSimulationJobRequest#compute
   */
  readonly compute?: RoboMakerCompute;

}

/**
 * @schema RoboMakerCreateSimulationJobResponse
 */
export interface RoboMakerCreateSimulationJobResponse {
  /**
   * @schema RoboMakerCreateSimulationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#loggingConfig
   */
  readonly loggingConfig?: RoboMakerLoggingConfig;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds?: number;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#simulationTimeMillis
   */
  readonly simulationTimeMillis?: number;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#robotApplications
   */
  readonly robotApplications?: RoboMakerRobotApplicationConfig[];

  /**
   * @schema RoboMakerCreateSimulationJobResponse#simulationApplications
   */
  readonly simulationApplications?: RoboMakerSimulationApplicationConfig[];

  /**
   * @schema RoboMakerCreateSimulationJobResponse#dataSources
   */
  readonly dataSources?: RoboMakerDataSource[];

  /**
   * @schema RoboMakerCreateSimulationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerCreateSimulationJobResponse#vpcConfig
   */
  readonly vpcConfig?: RoboMakerVpcConfigResponse;

  /**
   * @schema RoboMakerCreateSimulationJobResponse#compute
   */
  readonly compute?: RoboMakerComputeResponse;

}

/**
 * @schema RoboMakerCreateWorldExportJobRequest
 */
export interface RoboMakerCreateWorldExportJobRequest {
  /**
   * @schema RoboMakerCreateWorldExportJobRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobRequest#worlds
   */
  readonly worlds: string[];

  /**
   * @schema RoboMakerCreateWorldExportJobRequest#outputLocation
   */
  readonly outputLocation: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerCreateWorldExportJobRequest#iamRole
   */
  readonly iamRole: string;

  /**
   * @schema RoboMakerCreateWorldExportJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateWorldExportJobResponse
 */
export interface RoboMakerCreateWorldExportJobResponse {
  /**
   * @schema RoboMakerCreateWorldExportJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RoboMakerCreateWorldExportJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateWorldGenerationJobRequest
 */
export interface RoboMakerCreateWorldGenerationJobRequest {
  /**
   * @schema RoboMakerCreateWorldGenerationJobRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobRequest#template
   */
  readonly template: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobRequest#worldCount
   */
  readonly worldCount: RoboMakerWorldCount;

  /**
   * @schema RoboMakerCreateWorldGenerationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerCreateWorldGenerationJobRequest#worldTags
   */
  readonly worldTags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateWorldGenerationJobResponse
 */
export interface RoboMakerCreateWorldGenerationJobResponse {
  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#template
   */
  readonly template?: string;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#worldCount
   */
  readonly worldCount?: RoboMakerWorldCount;

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerCreateWorldGenerationJobResponse#worldTags
   */
  readonly worldTags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateWorldTemplateRequest
 */
export interface RoboMakerCreateWorldTemplateRequest {
  /**
   * @schema RoboMakerCreateWorldTemplateRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateRequest#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateRequest#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateRequest#templateLocation
   */
  readonly templateLocation?: RoboMakerTemplateLocation;

  /**
   * @schema RoboMakerCreateWorldTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerCreateWorldTemplateResponse
 */
export interface RoboMakerCreateWorldTemplateResponse {
  /**
   * @schema RoboMakerCreateWorldTemplateResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerCreateWorldTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDeleteFleetRequest
 */
export interface RoboMakerDeleteFleetRequest {
  /**
   * @schema RoboMakerDeleteFleetRequest#fleet
   */
  readonly fleet: string;

}

/**
 * @schema RoboMakerDeleteFleetResponse
 */
export interface RoboMakerDeleteFleetResponse {
}

/**
 * @schema RoboMakerDeleteRobotRequest
 */
export interface RoboMakerDeleteRobotRequest {
  /**
   * @schema RoboMakerDeleteRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema RoboMakerDeleteRobotResponse
 */
export interface RoboMakerDeleteRobotResponse {
}

/**
 * @schema RoboMakerDeleteRobotApplicationRequest
 */
export interface RoboMakerDeleteRobotApplicationRequest {
  /**
   * @schema RoboMakerDeleteRobotApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerDeleteRobotApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema RoboMakerDeleteRobotApplicationResponse
 */
export interface RoboMakerDeleteRobotApplicationResponse {
}

/**
 * @schema RoboMakerDeleteSimulationApplicationRequest
 */
export interface RoboMakerDeleteSimulationApplicationRequest {
  /**
   * @schema RoboMakerDeleteSimulationApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerDeleteSimulationApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema RoboMakerDeleteSimulationApplicationResponse
 */
export interface RoboMakerDeleteSimulationApplicationResponse {
}

/**
 * @schema RoboMakerDeleteWorldTemplateRequest
 */
export interface RoboMakerDeleteWorldTemplateRequest {
  /**
   * @schema RoboMakerDeleteWorldTemplateRequest#template
   */
  readonly template: string;

}

/**
 * @schema RoboMakerDeleteWorldTemplateResponse
 */
export interface RoboMakerDeleteWorldTemplateResponse {
}

/**
 * @schema RoboMakerDeregisterRobotRequest
 */
export interface RoboMakerDeregisterRobotRequest {
  /**
   * @schema RoboMakerDeregisterRobotRequest#fleet
   */
  readonly fleet: string;

  /**
   * @schema RoboMakerDeregisterRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema RoboMakerDeregisterRobotResponse
 */
export interface RoboMakerDeregisterRobotResponse {
  /**
   * @schema RoboMakerDeregisterRobotResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RoboMakerDeregisterRobotResponse#robot
   */
  readonly robot?: string;

}

/**
 * @schema RoboMakerDescribeDeploymentJobRequest
 */
export interface RoboMakerDescribeDeploymentJobRequest {
  /**
   * @schema RoboMakerDescribeDeploymentJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerDescribeDeploymentJobResponse
 */
export interface RoboMakerDescribeDeploymentJobResponse {
  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#deploymentConfig
   */
  readonly deploymentConfig?: RoboMakerDeploymentConfig;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: RoboMakerDeploymentApplicationConfig[];

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#robotDeploymentSummary
   */
  readonly robotDeploymentSummary?: RoboMakerRobotDeployment[];

  /**
   * @schema RoboMakerDescribeDeploymentJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeFleetRequest
 */
export interface RoboMakerDescribeFleetRequest {
  /**
   * @schema RoboMakerDescribeFleetRequest#fleet
   */
  readonly fleet: string;

}

/**
 * @schema RoboMakerDescribeFleetResponse
 */
export interface RoboMakerDescribeFleetResponse {
  /**
   * @schema RoboMakerDescribeFleetResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDescribeFleetResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeFleetResponse#robots
   */
  readonly robots?: RoboMakerRobot[];

  /**
   * @schema RoboMakerDescribeFleetResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeFleetResponse#lastDeploymentStatus
   */
  readonly lastDeploymentStatus?: string;

  /**
   * @schema RoboMakerDescribeFleetResponse#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema RoboMakerDescribeFleetResponse#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

  /**
   * @schema RoboMakerDescribeFleetResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeRobotRequest
 */
export interface RoboMakerDescribeRobotRequest {
  /**
   * @schema RoboMakerDescribeRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema RoboMakerDescribeRobotResponse
 */
export interface RoboMakerDescribeRobotResponse {
  /**
   * @schema RoboMakerDescribeRobotResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#fleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#architecture
   */
  readonly architecture?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

  /**
   * @schema RoboMakerDescribeRobotResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeRobotApplicationRequest
 */
export interface RoboMakerDescribeRobotApplicationRequest {
  /**
   * @schema RoboMakerDescribeRobotApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerDescribeRobotApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema RoboMakerDescribeRobotApplicationResponse
 */
export interface RoboMakerDescribeRobotApplicationResponse {
  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerDescribeRobotApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeSimulationApplicationRequest
 */
export interface RoboMakerDescribeSimulationApplicationRequest {
  /**
   * @schema RoboMakerDescribeSimulationApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerDescribeSimulationApplicationRequest#applicationVersion
   */
  readonly applicationVersion?: string;

}

/**
 * @schema RoboMakerDescribeSimulationApplicationResponse
 */
export interface RoboMakerDescribeSimulationApplicationResponse {
  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: RoboMakerSimulationSoftwareSuite;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#renderingEngine
   */
  readonly renderingEngine?: RoboMakerRenderingEngine;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerDescribeSimulationApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeSimulationJobRequest
 */
export interface RoboMakerDescribeSimulationJobRequest {
  /**
   * @schema RoboMakerDescribeSimulationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerDescribeSimulationJobResponse
 */
export interface RoboMakerDescribeSimulationJobResponse {
  /**
   * @schema RoboMakerDescribeSimulationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#loggingConfig
   */
  readonly loggingConfig?: RoboMakerLoggingConfig;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds?: number;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#simulationTimeMillis
   */
  readonly simulationTimeMillis?: number;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#robotApplications
   */
  readonly robotApplications?: RoboMakerRobotApplicationConfig[];

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#simulationApplications
   */
  readonly simulationApplications?: RoboMakerSimulationApplicationConfig[];

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#dataSources
   */
  readonly dataSources?: RoboMakerDataSource[];

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#vpcConfig
   */
  readonly vpcConfig?: RoboMakerVpcConfigResponse;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#networkInterface
   */
  readonly networkInterface?: RoboMakerNetworkInterface;

  /**
   * @schema RoboMakerDescribeSimulationJobResponse#compute
   */
  readonly compute?: RoboMakerComputeResponse;

}

/**
 * @schema RoboMakerDescribeSimulationJobBatchRequest
 */
export interface RoboMakerDescribeSimulationJobBatchRequest {
  /**
   * @schema RoboMakerDescribeSimulationJobBatchRequest#batch
   */
  readonly batch: string;

}

/**
 * @schema RoboMakerDescribeSimulationJobBatchResponse
 */
export interface RoboMakerDescribeSimulationJobBatchResponse {
  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#batchPolicy
   */
  readonly batchPolicy?: RoboMakerBatchPolicy;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#failedRequests
   */
  readonly failedRequests?: RoboMakerFailedCreateSimulationJobRequest[];

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#pendingRequests
   */
  readonly pendingRequests?: RoboMakerSimulationJobRequest[];

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#createdRequests
   */
  readonly createdRequests?: RoboMakerSimulationJobSummary[];

  /**
   * @schema RoboMakerDescribeSimulationJobBatchResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeWorldRequest
 */
export interface RoboMakerDescribeWorldRequest {
  /**
   * @schema RoboMakerDescribeWorldRequest#world
   */
  readonly world: string;

}

/**
 * @schema RoboMakerDescribeWorldResponse
 */
export interface RoboMakerDescribeWorldResponse {
  /**
   * @schema RoboMakerDescribeWorldResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeWorldResponse#generationJob
   */
  readonly generationJob?: string;

  /**
   * @schema RoboMakerDescribeWorldResponse#template
   */
  readonly template?: string;

  /**
   * @schema RoboMakerDescribeWorldResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeWorldResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeWorldExportJobRequest
 */
export interface RoboMakerDescribeWorldExportJobRequest {
  /**
   * @schema RoboMakerDescribeWorldExportJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerDescribeWorldExportJobResponse
 */
export interface RoboMakerDescribeWorldExportJobResponse {
  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#worlds
   */
  readonly worlds?: string[];

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RoboMakerDescribeWorldExportJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeWorldGenerationJobRequest
 */
export interface RoboMakerDescribeWorldGenerationJobRequest {
  /**
   * @schema RoboMakerDescribeWorldGenerationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerDescribeWorldGenerationJobResponse
 */
export interface RoboMakerDescribeWorldGenerationJobResponse {
  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#template
   */
  readonly template?: string;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#worldCount
   */
  readonly worldCount?: RoboMakerWorldCount;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#finishedWorldsSummary
   */
  readonly finishedWorldsSummary?: RoboMakerFinishedWorldsSummary;

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerDescribeWorldGenerationJobResponse#worldTags
   */
  readonly worldTags?: { [key: string]: string };

}

/**
 * @schema RoboMakerDescribeWorldTemplateRequest
 */
export interface RoboMakerDescribeWorldTemplateRequest {
  /**
   * @schema RoboMakerDescribeWorldTemplateRequest#template
   */
  readonly template: string;

}

/**
 * @schema RoboMakerDescribeWorldTemplateResponse
 */
export interface RoboMakerDescribeWorldTemplateResponse {
  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerGetWorldTemplateBodyRequest
 */
export interface RoboMakerGetWorldTemplateBodyRequest {
  /**
   * @schema RoboMakerGetWorldTemplateBodyRequest#template
   */
  readonly template?: string;

  /**
   * @schema RoboMakerGetWorldTemplateBodyRequest#generationJob
   */
  readonly generationJob?: string;

}

/**
 * @schema RoboMakerGetWorldTemplateBodyResponse
 */
export interface RoboMakerGetWorldTemplateBodyResponse {
  /**
   * @schema RoboMakerGetWorldTemplateBodyResponse#templateBody
   */
  readonly templateBody?: string;

}

/**
 * @schema RoboMakerListDeploymentJobsRequest
 */
export interface RoboMakerListDeploymentJobsRequest {
  /**
   * @schema RoboMakerListDeploymentJobsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

  /**
   * @schema RoboMakerListDeploymentJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListDeploymentJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RoboMakerListDeploymentJobsResponse
 */
export interface RoboMakerListDeploymentJobsResponse {
  /**
   * @schema RoboMakerListDeploymentJobsResponse#deploymentJobs
   */
  readonly deploymentJobs?: RoboMakerDeploymentJob[];

  /**
   * @schema RoboMakerListDeploymentJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListFleetsRequest
 */
export interface RoboMakerListFleetsRequest {
  /**
   * @schema RoboMakerListFleetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListFleetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListFleetsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListFleetsResponse
 */
export interface RoboMakerListFleetsResponse {
  /**
   * @schema RoboMakerListFleetsResponse#fleetDetails
   */
  readonly fleetDetails?: RoboMakerFleet[];

  /**
   * @schema RoboMakerListFleetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListRobotApplicationsRequest
 */
export interface RoboMakerListRobotApplicationsRequest {
  /**
   * @schema RoboMakerListRobotApplicationsRequest#versionQualifier
   */
  readonly versionQualifier?: string;

  /**
   * @schema RoboMakerListRobotApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListRobotApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListRobotApplicationsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListRobotApplicationsResponse
 */
export interface RoboMakerListRobotApplicationsResponse {
  /**
   * @schema RoboMakerListRobotApplicationsResponse#robotApplicationSummaries
   */
  readonly robotApplicationSummaries?: RoboMakerRobotApplicationSummary[];

  /**
   * @schema RoboMakerListRobotApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListRobotsRequest
 */
export interface RoboMakerListRobotsRequest {
  /**
   * @schema RoboMakerListRobotsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListRobotsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListRobotsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListRobotsResponse
 */
export interface RoboMakerListRobotsResponse {
  /**
   * @schema RoboMakerListRobotsResponse#robots
   */
  readonly robots?: RoboMakerRobot[];

  /**
   * @schema RoboMakerListRobotsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListSimulationApplicationsRequest
 */
export interface RoboMakerListSimulationApplicationsRequest {
  /**
   * @schema RoboMakerListSimulationApplicationsRequest#versionQualifier
   */
  readonly versionQualifier?: string;

  /**
   * @schema RoboMakerListSimulationApplicationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListSimulationApplicationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListSimulationApplicationsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListSimulationApplicationsResponse
 */
export interface RoboMakerListSimulationApplicationsResponse {
  /**
   * @schema RoboMakerListSimulationApplicationsResponse#simulationApplicationSummaries
   */
  readonly simulationApplicationSummaries?: RoboMakerSimulationApplicationSummary[];

  /**
   * @schema RoboMakerListSimulationApplicationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListSimulationJobBatchesRequest
 */
export interface RoboMakerListSimulationJobBatchesRequest {
  /**
   * @schema RoboMakerListSimulationJobBatchesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListSimulationJobBatchesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListSimulationJobBatchesRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListSimulationJobBatchesResponse
 */
export interface RoboMakerListSimulationJobBatchesResponse {
  /**
   * @schema RoboMakerListSimulationJobBatchesResponse#simulationJobBatchSummaries
   */
  readonly simulationJobBatchSummaries?: RoboMakerSimulationJobBatchSummary[];

  /**
   * @schema RoboMakerListSimulationJobBatchesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListSimulationJobsRequest
 */
export interface RoboMakerListSimulationJobsRequest {
  /**
   * @schema RoboMakerListSimulationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListSimulationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListSimulationJobsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListSimulationJobsResponse
 */
export interface RoboMakerListSimulationJobsResponse {
  /**
   * @schema RoboMakerListSimulationJobsResponse#simulationJobSummaries
   */
  readonly simulationJobSummaries: RoboMakerSimulationJobSummary[];

  /**
   * @schema RoboMakerListSimulationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListTagsForResourceRequest
 */
export interface RoboMakerListTagsForResourceRequest {
  /**
   * @schema RoboMakerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema RoboMakerListTagsForResourceResponse
 */
export interface RoboMakerListTagsForResourceResponse {
  /**
   * @schema RoboMakerListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerListWorldExportJobsRequest
 */
export interface RoboMakerListWorldExportJobsRequest {
  /**
   * @schema RoboMakerListWorldExportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListWorldExportJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListWorldExportJobsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListWorldExportJobsResponse
 */
export interface RoboMakerListWorldExportJobsResponse {
  /**
   * @schema RoboMakerListWorldExportJobsResponse#worldExportJobSummaries
   */
  readonly worldExportJobSummaries: RoboMakerWorldExportJobSummary[];

  /**
   * @schema RoboMakerListWorldExportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListWorldGenerationJobsRequest
 */
export interface RoboMakerListWorldGenerationJobsRequest {
  /**
   * @schema RoboMakerListWorldGenerationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListWorldGenerationJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListWorldGenerationJobsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListWorldGenerationJobsResponse
 */
export interface RoboMakerListWorldGenerationJobsResponse {
  /**
   * @schema RoboMakerListWorldGenerationJobsResponse#worldGenerationJobSummaries
   */
  readonly worldGenerationJobSummaries: RoboMakerWorldGenerationJobSummary[];

  /**
   * @schema RoboMakerListWorldGenerationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListWorldTemplatesRequest
 */
export interface RoboMakerListWorldTemplatesRequest {
  /**
   * @schema RoboMakerListWorldTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListWorldTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RoboMakerListWorldTemplatesResponse
 */
export interface RoboMakerListWorldTemplatesResponse {
  /**
   * @schema RoboMakerListWorldTemplatesResponse#templateSummaries
   */
  readonly templateSummaries?: RoboMakerTemplateSummary[];

  /**
   * @schema RoboMakerListWorldTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerListWorldsRequest
 */
export interface RoboMakerListWorldsRequest {
  /**
   * @schema RoboMakerListWorldsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RoboMakerListWorldsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RoboMakerListWorldsRequest#filters
   */
  readonly filters?: RoboMakerFilter[];

}

/**
 * @schema RoboMakerListWorldsResponse
 */
export interface RoboMakerListWorldsResponse {
  /**
   * @schema RoboMakerListWorldsResponse#worldSummaries
   */
  readonly worldSummaries?: RoboMakerWorldSummary[];

  /**
   * @schema RoboMakerListWorldsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RoboMakerRegisterRobotRequest
 */
export interface RoboMakerRegisterRobotRequest {
  /**
   * @schema RoboMakerRegisterRobotRequest#fleet
   */
  readonly fleet: string;

  /**
   * @schema RoboMakerRegisterRobotRequest#robot
   */
  readonly robot: string;

}

/**
 * @schema RoboMakerRegisterRobotResponse
 */
export interface RoboMakerRegisterRobotResponse {
  /**
   * @schema RoboMakerRegisterRobotResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RoboMakerRegisterRobotResponse#robot
   */
  readonly robot?: string;

}

/**
 * @schema RoboMakerRestartSimulationJobRequest
 */
export interface RoboMakerRestartSimulationJobRequest {
  /**
   * @schema RoboMakerRestartSimulationJobRequest#job
   */
  readonly job: string;

}

/**
 * @schema RoboMakerRestartSimulationJobResponse
 */
export interface RoboMakerRestartSimulationJobResponse {
}

/**
 * @schema RoboMakerStartSimulationJobBatchRequest
 */
export interface RoboMakerStartSimulationJobBatchRequest {
  /**
   * @schema RoboMakerStartSimulationJobBatchRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchRequest#batchPolicy
   */
  readonly batchPolicy?: RoboMakerBatchPolicy;

  /**
   * @schema RoboMakerStartSimulationJobBatchRequest#createSimulationJobRequests
   */
  readonly createSimulationJobRequests: RoboMakerSimulationJobRequest[];

  /**
   * @schema RoboMakerStartSimulationJobBatchRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerStartSimulationJobBatchResponse
 */
export interface RoboMakerStartSimulationJobBatchResponse {
  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#batchPolicy
   */
  readonly batchPolicy?: RoboMakerBatchPolicy;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#failedRequests
   */
  readonly failedRequests?: RoboMakerFailedCreateSimulationJobRequest[];

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#pendingRequests
   */
  readonly pendingRequests?: RoboMakerSimulationJobRequest[];

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#createdRequests
   */
  readonly createdRequests?: RoboMakerSimulationJobSummary[];

  /**
   * @schema RoboMakerStartSimulationJobBatchResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerSyncDeploymentJobRequest
 */
export interface RoboMakerSyncDeploymentJobRequest {
  /**
   * @schema RoboMakerSyncDeploymentJobRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema RoboMakerSyncDeploymentJobRequest#fleet
   */
  readonly fleet: string;

}

/**
 * @schema RoboMakerSyncDeploymentJobResponse
 */
export interface RoboMakerSyncDeploymentJobResponse {
  /**
   * @schema RoboMakerSyncDeploymentJobResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#deploymentConfig
   */
  readonly deploymentConfig?: RoboMakerDeploymentConfig;

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: RoboMakerDeploymentApplicationConfig[];

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerSyncDeploymentJobResponse#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema RoboMakerTagResourceRequest
 */
export interface RoboMakerTagResourceRequest {
  /**
   * @schema RoboMakerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RoboMakerTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema RoboMakerTagResourceResponse
 */
export interface RoboMakerTagResourceResponse {
}

/**
 * @schema RoboMakerUntagResourceRequest
 */
export interface RoboMakerUntagResourceRequest {
  /**
   * @schema RoboMakerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RoboMakerUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RoboMakerUntagResourceResponse
 */
export interface RoboMakerUntagResourceResponse {
}

/**
 * @schema RoboMakerUpdateRobotApplicationRequest
 */
export interface RoboMakerUpdateRobotApplicationRequest {
  /**
   * @schema RoboMakerUpdateRobotApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerUpdateRobotApplicationRequest#sources
   */
  readonly sources: RoboMakerSourceConfig[];

  /**
   * @schema RoboMakerUpdateRobotApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerUpdateRobotApplicationRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema RoboMakerUpdateRobotApplicationResponse
 */
export interface RoboMakerUpdateRobotApplicationResponse {
  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerUpdateRobotApplicationResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema RoboMakerUpdateSimulationApplicationRequest
 */
export interface RoboMakerUpdateSimulationApplicationRequest {
  /**
   * @schema RoboMakerUpdateSimulationApplicationRequest#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerUpdateSimulationApplicationRequest#sources
   */
  readonly sources: RoboMakerSourceConfig[];

  /**
   * @schema RoboMakerUpdateSimulationApplicationRequest#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite: RoboMakerSimulationSoftwareSuite;

  /**
   * @schema RoboMakerUpdateSimulationApplicationRequest#robotSoftwareSuite
   */
  readonly robotSoftwareSuite: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerUpdateSimulationApplicationRequest#renderingEngine
   */
  readonly renderingEngine?: RoboMakerRenderingEngine;

  /**
   * @schema RoboMakerUpdateSimulationApplicationRequest#currentRevisionId
   */
  readonly currentRevisionId?: string;

}

/**
 * @schema RoboMakerUpdateSimulationApplicationResponse
 */
export interface RoboMakerUpdateSimulationApplicationResponse {
  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#sources
   */
  readonly sources?: RoboMakerSource[];

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: RoboMakerSimulationSoftwareSuite;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#renderingEngine
   */
  readonly renderingEngine?: RoboMakerRenderingEngine;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerUpdateSimulationApplicationResponse#revisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema RoboMakerUpdateWorldTemplateRequest
 */
export interface RoboMakerUpdateWorldTemplateRequest {
  /**
   * @schema RoboMakerUpdateWorldTemplateRequest#template
   */
  readonly template: string;

  /**
   * @schema RoboMakerUpdateWorldTemplateRequest#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerUpdateWorldTemplateRequest#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema RoboMakerUpdateWorldTemplateRequest#templateLocation
   */
  readonly templateLocation?: RoboMakerTemplateLocation;

}

/**
 * @schema RoboMakerUpdateWorldTemplateResponse
 */
export interface RoboMakerUpdateWorldTemplateResponse {
  /**
   * @schema RoboMakerUpdateWorldTemplateResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerUpdateWorldTemplateResponse#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerUpdateWorldTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerUpdateWorldTemplateResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema RoboMakerSimulationJob
 */
export interface RoboMakerSimulationJob {
  /**
   * @schema RoboMakerSimulationJob#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerSimulationJob#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerSimulationJob#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerSimulationJob#lastStartedAt
   */
  readonly lastStartedAt?: string;

  /**
   * @schema RoboMakerSimulationJob#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerSimulationJob#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema RoboMakerSimulationJob#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerSimulationJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerSimulationJob#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RoboMakerSimulationJob#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerSimulationJob#loggingConfig
   */
  readonly loggingConfig?: RoboMakerLoggingConfig;

  /**
   * @schema RoboMakerSimulationJob#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds?: number;

  /**
   * @schema RoboMakerSimulationJob#simulationTimeMillis
   */
  readonly simulationTimeMillis?: number;

  /**
   * @schema RoboMakerSimulationJob#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RoboMakerSimulationJob#robotApplications
   */
  readonly robotApplications?: RoboMakerRobotApplicationConfig[];

  /**
   * @schema RoboMakerSimulationJob#simulationApplications
   */
  readonly simulationApplications?: RoboMakerSimulationApplicationConfig[];

  /**
   * @schema RoboMakerSimulationJob#dataSources
   */
  readonly dataSources?: RoboMakerDataSource[];

  /**
   * @schema RoboMakerSimulationJob#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema RoboMakerSimulationJob#vpcConfig
   */
  readonly vpcConfig?: RoboMakerVpcConfigResponse;

  /**
   * @schema RoboMakerSimulationJob#networkInterface
   */
  readonly networkInterface?: RoboMakerNetworkInterface;

  /**
   * @schema RoboMakerSimulationJob#compute
   */
  readonly compute?: RoboMakerComputeResponse;

}

/**
 * @schema RoboMakerDeploymentConfig
 */
export interface RoboMakerDeploymentConfig {
  /**
   * @schema RoboMakerDeploymentConfig#concurrentDeploymentPercentage
   */
  readonly concurrentDeploymentPercentage?: number;

  /**
   * @schema RoboMakerDeploymentConfig#failureThresholdPercentage
   */
  readonly failureThresholdPercentage?: number;

  /**
   * @schema RoboMakerDeploymentConfig#robotDeploymentTimeoutInSeconds
   */
  readonly robotDeploymentTimeoutInSeconds?: number;

  /**
   * @schema RoboMakerDeploymentConfig#downloadConditionFile
   */
  readonly downloadConditionFile?: RoboMakerS3Object;

}

/**
 * @schema RoboMakerDeploymentApplicationConfig
 */
export interface RoboMakerDeploymentApplicationConfig {
  /**
   * @schema RoboMakerDeploymentApplicationConfig#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerDeploymentApplicationConfig#applicationVersion
   */
  readonly applicationVersion: string;

  /**
   * @schema RoboMakerDeploymentApplicationConfig#launchConfig
   */
  readonly launchConfig: RoboMakerDeploymentLaunchConfig;

}

/**
 * @schema RoboMakerSourceConfig
 */
export interface RoboMakerSourceConfig {
  /**
   * @schema RoboMakerSourceConfig#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RoboMakerSourceConfig#s3Key
   */
  readonly s3Key?: string;

  /**
   * @schema RoboMakerSourceConfig#architecture
   */
  readonly architecture?: string;

}

/**
 * @schema RoboMakerRobotSoftwareSuite
 */
export interface RoboMakerRobotSoftwareSuite {
  /**
   * @schema RoboMakerRobotSoftwareSuite#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerRobotSoftwareSuite#version
   */
  readonly version?: string;

}

/**
 * @schema RoboMakerSource
 */
export interface RoboMakerSource {
  /**
   * @schema RoboMakerSource#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RoboMakerSource#s3Key
   */
  readonly s3Key?: string;

  /**
   * @schema RoboMakerSource#etag
   */
  readonly etag?: string;

  /**
   * @schema RoboMakerSource#architecture
   */
  readonly architecture?: string;

}

/**
 * @schema RoboMakerSimulationSoftwareSuite
 */
export interface RoboMakerSimulationSoftwareSuite {
  /**
   * @schema RoboMakerSimulationSoftwareSuite#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerSimulationSoftwareSuite#version
   */
  readonly version?: string;

}

/**
 * @schema RoboMakerRenderingEngine
 */
export interface RoboMakerRenderingEngine {
  /**
   * @schema RoboMakerRenderingEngine#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerRenderingEngine#version
   */
  readonly version?: string;

}

/**
 * @schema RoboMakerOutputLocation
 */
export interface RoboMakerOutputLocation {
  /**
   * @schema RoboMakerOutputLocation#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RoboMakerOutputLocation#s3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema RoboMakerLoggingConfig
 */
export interface RoboMakerLoggingConfig {
  /**
   * @schema RoboMakerLoggingConfig#recordAllRosTopics
   */
  readonly recordAllRosTopics: boolean;

}

/**
 * @schema RoboMakerRobotApplicationConfig
 */
export interface RoboMakerRobotApplicationConfig {
  /**
   * @schema RoboMakerRobotApplicationConfig#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerRobotApplicationConfig#applicationVersion
   */
  readonly applicationVersion?: string;

  /**
   * @schema RoboMakerRobotApplicationConfig#launchConfig
   */
  readonly launchConfig: RoboMakerLaunchConfig;

}

/**
 * @schema RoboMakerSimulationApplicationConfig
 */
export interface RoboMakerSimulationApplicationConfig {
  /**
   * @schema RoboMakerSimulationApplicationConfig#application
   */
  readonly application: string;

  /**
   * @schema RoboMakerSimulationApplicationConfig#applicationVersion
   */
  readonly applicationVersion?: string;

  /**
   * @schema RoboMakerSimulationApplicationConfig#launchConfig
   */
  readonly launchConfig: RoboMakerLaunchConfig;

  /**
   * @schema RoboMakerSimulationApplicationConfig#worldConfigs
   */
  readonly worldConfigs?: RoboMakerWorldConfig[];

}

/**
 * @schema RoboMakerDataSourceConfig
 */
export interface RoboMakerDataSourceConfig {
  /**
   * @schema RoboMakerDataSourceConfig#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerDataSourceConfig#s3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema RoboMakerDataSourceConfig#s3Keys
   */
  readonly s3Keys: string[];

}

/**
 * @schema RoboMakerVpcConfig
 */
export interface RoboMakerVpcConfig {
  /**
   * @schema RoboMakerVpcConfig#subnets
   */
  readonly subnets: string[];

  /**
   * @schema RoboMakerVpcConfig#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema RoboMakerVpcConfig#assignPublicIp
   */
  readonly assignPublicIp?: boolean;

}

/**
 * @schema RoboMakerCompute
 */
export interface RoboMakerCompute {
  /**
   * @schema RoboMakerCompute#simulationUnitLimit
   */
  readonly simulationUnitLimit?: number;

}

/**
 * @schema RoboMakerDataSource
 */
export interface RoboMakerDataSource {
  /**
   * @schema RoboMakerDataSource#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerDataSource#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RoboMakerDataSource#s3Keys
   */
  readonly s3Keys?: RoboMakerS3KeyOutput[];

}

/**
 * @schema RoboMakerVpcConfigResponse
 */
export interface RoboMakerVpcConfigResponse {
  /**
   * @schema RoboMakerVpcConfigResponse#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema RoboMakerVpcConfigResponse#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema RoboMakerVpcConfigResponse#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RoboMakerVpcConfigResponse#assignPublicIp
   */
  readonly assignPublicIp?: boolean;

}

/**
 * @schema RoboMakerComputeResponse
 */
export interface RoboMakerComputeResponse {
  /**
   * @schema RoboMakerComputeResponse#simulationUnitLimit
   */
  readonly simulationUnitLimit?: number;

}

/**
 * @schema RoboMakerWorldCount
 */
export interface RoboMakerWorldCount {
  /**
   * @schema RoboMakerWorldCount#floorplanCount
   */
  readonly floorplanCount?: number;

  /**
   * @schema RoboMakerWorldCount#interiorCountPerFloorplan
   */
  readonly interiorCountPerFloorplan?: number;

}

/**
 * @schema RoboMakerTemplateLocation
 */
export interface RoboMakerTemplateLocation {
  /**
   * @schema RoboMakerTemplateLocation#s3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema RoboMakerTemplateLocation#s3Key
   */
  readonly s3Key: string;

}

/**
 * @schema RoboMakerRobotDeployment
 */
export interface RoboMakerRobotDeployment {
  /**
   * @schema RoboMakerRobotDeployment#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerRobotDeployment#deploymentStartTime
   */
  readonly deploymentStartTime?: string;

  /**
   * @schema RoboMakerRobotDeployment#deploymentFinishTime
   */
  readonly deploymentFinishTime?: string;

  /**
   * @schema RoboMakerRobotDeployment#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerRobotDeployment#progressDetail
   */
  readonly progressDetail?: RoboMakerProgressDetail;

  /**
   * @schema RoboMakerRobotDeployment#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerRobotDeployment#failureCode
   */
  readonly failureCode?: string;

}

/**
 * @schema RoboMakerRobot
 */
export interface RoboMakerRobot {
  /**
   * @schema RoboMakerRobot#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerRobot#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerRobot#fleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema RoboMakerRobot#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerRobot#greenGrassGroupId
   */
  readonly greenGrassGroupId?: string;

  /**
   * @schema RoboMakerRobot#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerRobot#architecture
   */
  readonly architecture?: string;

  /**
   * @schema RoboMakerRobot#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema RoboMakerRobot#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

}

/**
 * @schema RoboMakerNetworkInterface
 */
export interface RoboMakerNetworkInterface {
  /**
   * @schema RoboMakerNetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema RoboMakerNetworkInterface#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema RoboMakerNetworkInterface#publicIpAddress
   */
  readonly publicIpAddress?: string;

}

/**
 * @schema RoboMakerBatchPolicy
 */
export interface RoboMakerBatchPolicy {
  /**
   * @schema RoboMakerBatchPolicy#timeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema RoboMakerBatchPolicy#maxConcurrency
   */
  readonly maxConcurrency?: number;

}

/**
 * @schema RoboMakerFailedCreateSimulationJobRequest
 */
export interface RoboMakerFailedCreateSimulationJobRequest {
  /**
   * @schema RoboMakerFailedCreateSimulationJobRequest#request
   */
  readonly request?: RoboMakerSimulationJobRequest;

  /**
   * @schema RoboMakerFailedCreateSimulationJobRequest#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerFailedCreateSimulationJobRequest#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerFailedCreateSimulationJobRequest#failedAt
   */
  readonly failedAt?: string;

}

/**
 * @schema RoboMakerSimulationJobRequest
 */
export interface RoboMakerSimulationJobRequest {
  /**
   * @schema RoboMakerSimulationJobRequest#outputLocation
   */
  readonly outputLocation?: RoboMakerOutputLocation;

  /**
   * @schema RoboMakerSimulationJobRequest#loggingConfig
   */
  readonly loggingConfig?: RoboMakerLoggingConfig;

  /**
   * @schema RoboMakerSimulationJobRequest#maxJobDurationInSeconds
   */
  readonly maxJobDurationInSeconds: number;

  /**
   * @schema RoboMakerSimulationJobRequest#iamRole
   */
  readonly iamRole?: string;

  /**
   * @schema RoboMakerSimulationJobRequest#failureBehavior
   */
  readonly failureBehavior?: string;

  /**
   * @schema RoboMakerSimulationJobRequest#useDefaultApplications
   */
  readonly useDefaultApplications?: boolean;

  /**
   * @schema RoboMakerSimulationJobRequest#robotApplications
   */
  readonly robotApplications?: RoboMakerRobotApplicationConfig[];

  /**
   * @schema RoboMakerSimulationJobRequest#simulationApplications
   */
  readonly simulationApplications?: RoboMakerSimulationApplicationConfig[];

  /**
   * @schema RoboMakerSimulationJobRequest#dataSources
   */
  readonly dataSources?: RoboMakerDataSourceConfig[];

  /**
   * @schema RoboMakerSimulationJobRequest#vpcConfig
   */
  readonly vpcConfig?: RoboMakerVpcConfig;

  /**
   * @schema RoboMakerSimulationJobRequest#compute
   */
  readonly compute?: RoboMakerCompute;

  /**
   * @schema RoboMakerSimulationJobRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RoboMakerSimulationJobSummary
 */
export interface RoboMakerSimulationJobSummary {
  /**
   * @schema RoboMakerSimulationJobSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerSimulationJobSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerSimulationJobSummary#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerSimulationJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerSimulationJobSummary#simulationApplicationNames
   */
  readonly simulationApplicationNames?: string[];

  /**
   * @schema RoboMakerSimulationJobSummary#robotApplicationNames
   */
  readonly robotApplicationNames?: string[];

  /**
   * @schema RoboMakerSimulationJobSummary#dataSourceNames
   */
  readonly dataSourceNames?: string[];

}

/**
 * @schema RoboMakerFinishedWorldsSummary
 */
export interface RoboMakerFinishedWorldsSummary {
  /**
   * @schema RoboMakerFinishedWorldsSummary#finishedCount
   */
  readonly finishedCount?: number;

  /**
   * @schema RoboMakerFinishedWorldsSummary#succeededWorlds
   */
  readonly succeededWorlds?: string[];

  /**
   * @schema RoboMakerFinishedWorldsSummary#failureSummary
   */
  readonly failureSummary?: RoboMakerFailureSummary;

}

/**
 * @schema RoboMakerFilter
 */
export interface RoboMakerFilter {
  /**
   * @schema RoboMakerFilter#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerFilter#values
   */
  readonly values?: string[];

}

/**
 * @schema RoboMakerDeploymentJob
 */
export interface RoboMakerDeploymentJob {
  /**
   * @schema RoboMakerDeploymentJob#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerDeploymentJob#fleet
   */
  readonly fleet?: string;

  /**
   * @schema RoboMakerDeploymentJob#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerDeploymentJob#deploymentApplicationConfigs
   */
  readonly deploymentApplicationConfigs?: RoboMakerDeploymentApplicationConfig[];

  /**
   * @schema RoboMakerDeploymentJob#deploymentConfig
   */
  readonly deploymentConfig?: RoboMakerDeploymentConfig;

  /**
   * @schema RoboMakerDeploymentJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema RoboMakerDeploymentJob#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerDeploymentJob#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema RoboMakerFleet
 */
export interface RoboMakerFleet {
  /**
   * @schema RoboMakerFleet#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerFleet#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerFleet#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerFleet#lastDeploymentStatus
   */
  readonly lastDeploymentStatus?: string;

  /**
   * @schema RoboMakerFleet#lastDeploymentJob
   */
  readonly lastDeploymentJob?: string;

  /**
   * @schema RoboMakerFleet#lastDeploymentTime
   */
  readonly lastDeploymentTime?: string;

}

/**
 * @schema RoboMakerRobotApplicationSummary
 */
export interface RoboMakerRobotApplicationSummary {
  /**
   * @schema RoboMakerRobotApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerRobotApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerRobotApplicationSummary#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerRobotApplicationSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerRobotApplicationSummary#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

}

/**
 * @schema RoboMakerSimulationApplicationSummary
 */
export interface RoboMakerSimulationApplicationSummary {
  /**
   * @schema RoboMakerSimulationApplicationSummary#name
   */
  readonly name?: string;

  /**
   * @schema RoboMakerSimulationApplicationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerSimulationApplicationSummary#version
   */
  readonly version?: string;

  /**
   * @schema RoboMakerSimulationApplicationSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerSimulationApplicationSummary#robotSoftwareSuite
   */
  readonly robotSoftwareSuite?: RoboMakerRobotSoftwareSuite;

  /**
   * @schema RoboMakerSimulationApplicationSummary#simulationSoftwareSuite
   */
  readonly simulationSoftwareSuite?: RoboMakerSimulationSoftwareSuite;

}

/**
 * @schema RoboMakerSimulationJobBatchSummary
 */
export interface RoboMakerSimulationJobBatchSummary {
  /**
   * @schema RoboMakerSimulationJobBatchSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerSimulationJobBatchSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerSimulationJobBatchSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerSimulationJobBatchSummary#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerSimulationJobBatchSummary#failedRequestCount
   */
  readonly failedRequestCount?: number;

  /**
   * @schema RoboMakerSimulationJobBatchSummary#pendingRequestCount
   */
  readonly pendingRequestCount?: number;

  /**
   * @schema RoboMakerSimulationJobBatchSummary#createdRequestCount
   */
  readonly createdRequestCount?: number;

}

/**
 * @schema RoboMakerWorldExportJobSummary
 */
export interface RoboMakerWorldExportJobSummary {
  /**
   * @schema RoboMakerWorldExportJobSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerWorldExportJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerWorldExportJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerWorldExportJobSummary#worlds
   */
  readonly worlds?: string[];

}

/**
 * @schema RoboMakerWorldGenerationJobSummary
 */
export interface RoboMakerWorldGenerationJobSummary {
  /**
   * @schema RoboMakerWorldGenerationJobSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerWorldGenerationJobSummary#template
   */
  readonly template?: string;

  /**
   * @schema RoboMakerWorldGenerationJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerWorldGenerationJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema RoboMakerWorldGenerationJobSummary#worldCount
   */
  readonly worldCount?: RoboMakerWorldCount;

  /**
   * @schema RoboMakerWorldGenerationJobSummary#succeededWorldCount
   */
  readonly succeededWorldCount?: number;

  /**
   * @schema RoboMakerWorldGenerationJobSummary#failedWorldCount
   */
  readonly failedWorldCount?: number;

}

/**
 * @schema RoboMakerTemplateSummary
 */
export interface RoboMakerTemplateSummary {
  /**
   * @schema RoboMakerTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerTemplateSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerTemplateSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema RoboMakerTemplateSummary#name
   */
  readonly name?: string;

}

/**
 * @schema RoboMakerWorldSummary
 */
export interface RoboMakerWorldSummary {
  /**
   * @schema RoboMakerWorldSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RoboMakerWorldSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema RoboMakerWorldSummary#generationJob
   */
  readonly generationJob?: string;

  /**
   * @schema RoboMakerWorldSummary#template
   */
  readonly template?: string;

}

/**
 * @schema RoboMakerS3Object
 */
export interface RoboMakerS3Object {
  /**
   * @schema RoboMakerS3Object#bucket
   */
  readonly bucket: string;

  /**
   * @schema RoboMakerS3Object#key
   */
  readonly key: string;

  /**
   * @schema RoboMakerS3Object#etag
   */
  readonly etag?: string;

}

/**
 * @schema RoboMakerDeploymentLaunchConfig
 */
export interface RoboMakerDeploymentLaunchConfig {
  /**
   * @schema RoboMakerDeploymentLaunchConfig#packageName
   */
  readonly packageName: string;

  /**
   * @schema RoboMakerDeploymentLaunchConfig#preLaunchFile
   */
  readonly preLaunchFile?: string;

  /**
   * @schema RoboMakerDeploymentLaunchConfig#launchFile
   */
  readonly launchFile: string;

  /**
   * @schema RoboMakerDeploymentLaunchConfig#postLaunchFile
   */
  readonly postLaunchFile?: string;

  /**
   * @schema RoboMakerDeploymentLaunchConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

}

/**
 * @schema RoboMakerLaunchConfig
 */
export interface RoboMakerLaunchConfig {
  /**
   * @schema RoboMakerLaunchConfig#packageName
   */
  readonly packageName: string;

  /**
   * @schema RoboMakerLaunchConfig#launchFile
   */
  readonly launchFile: string;

  /**
   * @schema RoboMakerLaunchConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema RoboMakerLaunchConfig#portForwardingConfig
   */
  readonly portForwardingConfig?: RoboMakerPortForwardingConfig;

  /**
   * @schema RoboMakerLaunchConfig#streamUI
   */
  readonly streamUI?: boolean;

}

/**
 * @schema RoboMakerWorldConfig
 */
export interface RoboMakerWorldConfig {
  /**
   * @schema RoboMakerWorldConfig#world
   */
  readonly world?: string;

}

/**
 * @schema RoboMakerS3KeyOutput
 */
export interface RoboMakerS3KeyOutput {
  /**
   * @schema RoboMakerS3KeyOutput#s3Key
   */
  readonly s3Key?: string;

  /**
   * @schema RoboMakerS3KeyOutput#etag
   */
  readonly etag?: string;

}

/**
 * @schema RoboMakerProgressDetail
 */
export interface RoboMakerProgressDetail {
  /**
   * @schema RoboMakerProgressDetail#currentProgress
   */
  readonly currentProgress?: string;

  /**
   * @schema RoboMakerProgressDetail#percentDone
   */
  readonly percentDone?: number;

  /**
   * @schema RoboMakerProgressDetail#estimatedTimeRemainingSeconds
   */
  readonly estimatedTimeRemainingSeconds?: number;

  /**
   * @schema RoboMakerProgressDetail#targetResource
   */
  readonly targetResource?: string;

}

/**
 * @schema RoboMakerFailureSummary
 */
export interface RoboMakerFailureSummary {
  /**
   * @schema RoboMakerFailureSummary#totalFailureCount
   */
  readonly totalFailureCount?: number;

  /**
   * @schema RoboMakerFailureSummary#failures
   */
  readonly failures?: RoboMakerWorldFailure[];

}

/**
 * @schema RoboMakerPortForwardingConfig
 */
export interface RoboMakerPortForwardingConfig {
  /**
   * @schema RoboMakerPortForwardingConfig#portMappings
   */
  readonly portMappings?: RoboMakerPortMapping[];

}

/**
 * @schema RoboMakerWorldFailure
 */
export interface RoboMakerWorldFailure {
  /**
   * @schema RoboMakerWorldFailure#failureCode
   */
  readonly failureCode?: string;

  /**
   * @schema RoboMakerWorldFailure#sampleFailureReason
   */
  readonly sampleFailureReason?: string;

  /**
   * @schema RoboMakerWorldFailure#failureCount
   */
  readonly failureCount?: number;

}

/**
 * @schema RoboMakerPortMapping
 */
export interface RoboMakerPortMapping {
  /**
   * @schema RoboMakerPortMapping#jobPort
   */
  readonly jobPort: number;

  /**
   * @schema RoboMakerPortMapping#applicationPort
   */
  readonly applicationPort: number;

  /**
   * @schema RoboMakerPortMapping#enableOnPublicIp
   */
  readonly enableOnPublicIp?: boolean;

}
