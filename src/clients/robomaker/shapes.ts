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
 * Converts an object of type 'RoboMakerBatchDeleteWorldsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerBatchDeleteWorldsRequest(obj: RoboMakerBatchDeleteWorldsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'worlds': obj.worlds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerBatchDeleteWorldsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerBatchDeleteWorldsResponse(obj: RoboMakerBatchDeleteWorldsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unprocessedWorlds': obj.unprocessedWorlds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerBatchDescribeSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerBatchDescribeSimulationJobRequest(obj: RoboMakerBatchDescribeSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerBatchDescribeSimulationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerBatchDescribeSimulationJobResponse(obj: RoboMakerBatchDescribeSimulationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_RoboMakerSimulationJob(y)),
    'unprocessedJobs': obj.unprocessedJobs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCancelDeploymentJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelDeploymentJobRequest(obj: RoboMakerCancelDeploymentJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerCancelDeploymentJobResponse
 */
export interface RoboMakerCancelDeploymentJobResponse {
}

/**
 * Converts an object of type 'RoboMakerCancelDeploymentJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelDeploymentJobResponse(obj: RoboMakerCancelDeploymentJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCancelSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelSimulationJobRequest(obj: RoboMakerCancelSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerCancelSimulationJobResponse
 */
export interface RoboMakerCancelSimulationJobResponse {
}

/**
 * Converts an object of type 'RoboMakerCancelSimulationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelSimulationJobResponse(obj: RoboMakerCancelSimulationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCancelSimulationJobBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelSimulationJobBatchRequest(obj: RoboMakerCancelSimulationJobBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batch': obj.batch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerCancelSimulationJobBatchResponse
 */
export interface RoboMakerCancelSimulationJobBatchResponse {
}

/**
 * Converts an object of type 'RoboMakerCancelSimulationJobBatchResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelSimulationJobBatchResponse(obj: RoboMakerCancelSimulationJobBatchResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCancelWorldExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelWorldExportJobRequest(obj: RoboMakerCancelWorldExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerCancelWorldExportJobResponse
 */
export interface RoboMakerCancelWorldExportJobResponse {
}

/**
 * Converts an object of type 'RoboMakerCancelWorldExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelWorldExportJobResponse(obj: RoboMakerCancelWorldExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCancelWorldGenerationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelWorldGenerationJobRequest(obj: RoboMakerCancelWorldGenerationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerCancelWorldGenerationJobResponse
 */
export interface RoboMakerCancelWorldGenerationJobResponse {
}

/**
 * Converts an object of type 'RoboMakerCancelWorldGenerationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCancelWorldGenerationJobResponse(obj: RoboMakerCancelWorldGenerationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateDeploymentJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateDeploymentJobRequest(obj: RoboMakerCreateDeploymentJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentConfig': toJson_RoboMakerDeploymentConfig(obj.deploymentConfig),
    'clientRequestToken': obj.clientRequestToken,
    'fleet': obj.fleet,
    'deploymentApplicationConfigs': obj.deploymentApplicationConfigs?.map(y => toJson_RoboMakerDeploymentApplicationConfig(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateDeploymentJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateDeploymentJobResponse(obj: RoboMakerCreateDeploymentJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'fleet': obj.fleet,
    'status': obj.status,
    'deploymentApplicationConfigs': obj.deploymentApplicationConfigs?.map(y => toJson_RoboMakerDeploymentApplicationConfig(y)),
    'failureReason': obj.failureReason,
    'failureCode': obj.failureCode,
    'createdAt': obj.createdAt,
    'deploymentConfig': toJson_RoboMakerDeploymentConfig(obj.deploymentConfig),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateFleetRequest(obj: RoboMakerCreateFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateFleetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateFleetResponse(obj: RoboMakerCreateFleetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'createdAt': obj.createdAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateRobotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateRobotRequest(obj: RoboMakerCreateRobotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'architecture': obj.architecture,
    'greengrassGroupId': obj.greengrassGroupId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateRobotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateRobotResponse(obj: RoboMakerCreateRobotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'createdAt': obj.createdAt,
    'greengrassGroupId': obj.greengrassGroupId,
    'architecture': obj.architecture,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateRobotApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateRobotApplicationRequest(obj: RoboMakerCreateRobotApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'sources': obj.sources?.map(y => toJson_RoboMakerSourceConfig(y)),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateRobotApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateRobotApplicationResponse(obj: RoboMakerCreateRobotApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'lastUpdatedAt': obj.lastUpdatedAt,
    'revisionId': obj.revisionId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateRobotApplicationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateRobotApplicationVersionRequest(obj: RoboMakerCreateRobotApplicationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'currentRevisionId': obj.currentRevisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateRobotApplicationVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateRobotApplicationVersionResponse(obj: RoboMakerCreateRobotApplicationVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'lastUpdatedAt': obj.lastUpdatedAt,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateSimulationApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateSimulationApplicationRequest(obj: RoboMakerCreateSimulationApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'sources': obj.sources?.map(y => toJson_RoboMakerSourceConfig(y)),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'renderingEngine': toJson_RoboMakerRenderingEngine(obj.renderingEngine),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateSimulationApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateSimulationApplicationResponse(obj: RoboMakerCreateSimulationApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'renderingEngine': toJson_RoboMakerRenderingEngine(obj.renderingEngine),
    'lastUpdatedAt': obj.lastUpdatedAt,
    'revisionId': obj.revisionId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateSimulationApplicationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateSimulationApplicationVersionRequest(obj: RoboMakerCreateSimulationApplicationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'currentRevisionId': obj.currentRevisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateSimulationApplicationVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateSimulationApplicationVersionResponse(obj: RoboMakerCreateSimulationApplicationVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'renderingEngine': toJson_RoboMakerRenderingEngine(obj.renderingEngine),
    'lastUpdatedAt': obj.lastUpdatedAt,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateSimulationJobRequest(obj: RoboMakerCreateSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'loggingConfig': toJson_RoboMakerLoggingConfig(obj.loggingConfig),
    'maxJobDurationInSeconds': obj.maxJobDurationInSeconds,
    'iamRole': obj.iamRole,
    'failureBehavior': obj.failureBehavior,
    'robotApplications': obj.robotApplications?.map(y => toJson_RoboMakerRobotApplicationConfig(y)),
    'simulationApplications': obj.simulationApplications?.map(y => toJson_RoboMakerSimulationApplicationConfig(y)),
    'dataSources': obj.dataSources?.map(y => toJson_RoboMakerDataSourceConfig(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'vpcConfig': toJson_RoboMakerVpcConfig(obj.vpcConfig),
    'compute': toJson_RoboMakerCompute(obj.compute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateSimulationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateSimulationJobResponse(obj: RoboMakerCreateSimulationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'lastStartedAt': obj.lastStartedAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'failureBehavior': obj.failureBehavior,
    'failureCode': obj.failureCode,
    'clientRequestToken': obj.clientRequestToken,
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'loggingConfig': toJson_RoboMakerLoggingConfig(obj.loggingConfig),
    'maxJobDurationInSeconds': obj.maxJobDurationInSeconds,
    'simulationTimeMillis': obj.simulationTimeMillis,
    'iamRole': obj.iamRole,
    'robotApplications': obj.robotApplications?.map(y => toJson_RoboMakerRobotApplicationConfig(y)),
    'simulationApplications': obj.simulationApplications?.map(y => toJson_RoboMakerSimulationApplicationConfig(y)),
    'dataSources': obj.dataSources?.map(y => toJson_RoboMakerDataSource(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'vpcConfig': toJson_RoboMakerVpcConfigResponse(obj.vpcConfig),
    'compute': toJson_RoboMakerComputeResponse(obj.compute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateWorldExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateWorldExportJobRequest(obj: RoboMakerCreateWorldExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'worlds': obj.worlds?.map(y => y),
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'iamRole': obj.iamRole,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateWorldExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateWorldExportJobResponse(obj: RoboMakerCreateWorldExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'failureCode': obj.failureCode,
    'clientRequestToken': obj.clientRequestToken,
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'iamRole': obj.iamRole,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateWorldGenerationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateWorldGenerationJobRequest(obj: RoboMakerCreateWorldGenerationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'template': obj.template,
    'worldCount': toJson_RoboMakerWorldCount(obj.worldCount),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'worldTags': ((obj.worldTags) === undefined) ? undefined : (Object.entries(obj.worldTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateWorldGenerationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateWorldGenerationJobResponse(obj: RoboMakerCreateWorldGenerationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'failureCode': obj.failureCode,
    'clientRequestToken': obj.clientRequestToken,
    'template': obj.template,
    'worldCount': toJson_RoboMakerWorldCount(obj.worldCount),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'worldTags': ((obj.worldTags) === undefined) ? undefined : (Object.entries(obj.worldTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateWorldTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateWorldTemplateRequest(obj: RoboMakerCreateWorldTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'name': obj.name,
    'templateBody': obj.templateBody,
    'templateLocation': toJson_RoboMakerTemplateLocation(obj.templateLocation),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCreateWorldTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCreateWorldTemplateResponse(obj: RoboMakerCreateWorldTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'clientRequestToken': obj.clientRequestToken,
    'createdAt': obj.createdAt,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeleteFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteFleetRequest(obj: RoboMakerDeleteFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleet': obj.fleet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerDeleteFleetResponse
 */
export interface RoboMakerDeleteFleetResponse {
}

/**
 * Converts an object of type 'RoboMakerDeleteFleetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteFleetResponse(obj: RoboMakerDeleteFleetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeleteRobotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteRobotRequest(obj: RoboMakerDeleteRobotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'robot': obj.robot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerDeleteRobotResponse
 */
export interface RoboMakerDeleteRobotResponse {
}

/**
 * Converts an object of type 'RoboMakerDeleteRobotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteRobotResponse(obj: RoboMakerDeleteRobotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeleteRobotApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteRobotApplicationRequest(obj: RoboMakerDeleteRobotApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerDeleteRobotApplicationResponse
 */
export interface RoboMakerDeleteRobotApplicationResponse {
}

/**
 * Converts an object of type 'RoboMakerDeleteRobotApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteRobotApplicationResponse(obj: RoboMakerDeleteRobotApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeleteSimulationApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteSimulationApplicationRequest(obj: RoboMakerDeleteSimulationApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerDeleteSimulationApplicationResponse
 */
export interface RoboMakerDeleteSimulationApplicationResponse {
}

/**
 * Converts an object of type 'RoboMakerDeleteSimulationApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteSimulationApplicationResponse(obj: RoboMakerDeleteSimulationApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeleteWorldTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteWorldTemplateRequest(obj: RoboMakerDeleteWorldTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'template': obj.template,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerDeleteWorldTemplateResponse
 */
export interface RoboMakerDeleteWorldTemplateResponse {
}

/**
 * Converts an object of type 'RoboMakerDeleteWorldTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeleteWorldTemplateResponse(obj: RoboMakerDeleteWorldTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeregisterRobotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeregisterRobotRequest(obj: RoboMakerDeregisterRobotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleet': obj.fleet,
    'robot': obj.robot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeregisterRobotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeregisterRobotResponse(obj: RoboMakerDeregisterRobotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleet': obj.fleet,
    'robot': obj.robot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeDeploymentJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeDeploymentJobRequest(obj: RoboMakerDescribeDeploymentJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeDeploymentJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeDeploymentJobResponse(obj: RoboMakerDescribeDeploymentJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'fleet': obj.fleet,
    'status': obj.status,
    'deploymentConfig': toJson_RoboMakerDeploymentConfig(obj.deploymentConfig),
    'deploymentApplicationConfigs': obj.deploymentApplicationConfigs?.map(y => toJson_RoboMakerDeploymentApplicationConfig(y)),
    'failureReason': obj.failureReason,
    'failureCode': obj.failureCode,
    'createdAt': obj.createdAt,
    'robotDeploymentSummary': obj.robotDeploymentSummary?.map(y => toJson_RoboMakerRobotDeployment(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeFleetRequest(obj: RoboMakerDescribeFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleet': obj.fleet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeFleetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeFleetResponse(obj: RoboMakerDescribeFleetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'robots': obj.robots?.map(y => toJson_RoboMakerRobot(y)),
    'createdAt': obj.createdAt,
    'lastDeploymentStatus': obj.lastDeploymentStatus,
    'lastDeploymentJob': obj.lastDeploymentJob,
    'lastDeploymentTime': obj.lastDeploymentTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeRobotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeRobotRequest(obj: RoboMakerDescribeRobotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'robot': obj.robot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeRobotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeRobotResponse(obj: RoboMakerDescribeRobotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'fleetArn': obj.fleetArn,
    'status': obj.status,
    'greengrassGroupId': obj.greengrassGroupId,
    'createdAt': obj.createdAt,
    'architecture': obj.architecture,
    'lastDeploymentJob': obj.lastDeploymentJob,
    'lastDeploymentTime': obj.lastDeploymentTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeRobotApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeRobotApplicationRequest(obj: RoboMakerDescribeRobotApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeRobotApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeRobotApplicationResponse(obj: RoboMakerDescribeRobotApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'revisionId': obj.revisionId,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeSimulationApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeSimulationApplicationRequest(obj: RoboMakerDescribeSimulationApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeSimulationApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeSimulationApplicationResponse(obj: RoboMakerDescribeSimulationApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'renderingEngine': toJson_RoboMakerRenderingEngine(obj.renderingEngine),
    'revisionId': obj.revisionId,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeSimulationJobRequest(obj: RoboMakerDescribeSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeSimulationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeSimulationJobResponse(obj: RoboMakerDescribeSimulationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'status': obj.status,
    'lastStartedAt': obj.lastStartedAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'failureBehavior': obj.failureBehavior,
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
    'clientRequestToken': obj.clientRequestToken,
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'loggingConfig': toJson_RoboMakerLoggingConfig(obj.loggingConfig),
    'maxJobDurationInSeconds': obj.maxJobDurationInSeconds,
    'simulationTimeMillis': obj.simulationTimeMillis,
    'iamRole': obj.iamRole,
    'robotApplications': obj.robotApplications?.map(y => toJson_RoboMakerRobotApplicationConfig(y)),
    'simulationApplications': obj.simulationApplications?.map(y => toJson_RoboMakerSimulationApplicationConfig(y)),
    'dataSources': obj.dataSources?.map(y => toJson_RoboMakerDataSource(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'vpcConfig': toJson_RoboMakerVpcConfigResponse(obj.vpcConfig),
    'networkInterface': toJson_RoboMakerNetworkInterface(obj.networkInterface),
    'compute': toJson_RoboMakerComputeResponse(obj.compute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeSimulationJobBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeSimulationJobBatchRequest(obj: RoboMakerDescribeSimulationJobBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batch': obj.batch,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeSimulationJobBatchResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeSimulationJobBatchResponse(obj: RoboMakerDescribeSimulationJobBatchResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'createdAt': obj.createdAt,
    'clientRequestToken': obj.clientRequestToken,
    'batchPolicy': toJson_RoboMakerBatchPolicy(obj.batchPolicy),
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
    'failedRequests': obj.failedRequests?.map(y => toJson_RoboMakerFailedCreateSimulationJobRequest(y)),
    'pendingRequests': obj.pendingRequests?.map(y => toJson_RoboMakerSimulationJobRequest(y)),
    'createdRequests': obj.createdRequests?.map(y => toJson_RoboMakerSimulationJobSummary(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeWorldRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldRequest(obj: RoboMakerDescribeWorldRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'world': obj.world,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema RoboMakerDescribeWorldResponse#worldDescriptionBody
   */
  readonly worldDescriptionBody?: string;

}

/**
 * Converts an object of type 'RoboMakerDescribeWorldResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldResponse(obj: RoboMakerDescribeWorldResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'generationJob': obj.generationJob,
    'template': obj.template,
    'createdAt': obj.createdAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'worldDescriptionBody': obj.worldDescriptionBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeWorldExportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldExportJobRequest(obj: RoboMakerDescribeWorldExportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeWorldExportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldExportJobResponse(obj: RoboMakerDescribeWorldExportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
    'clientRequestToken': obj.clientRequestToken,
    'worlds': obj.worlds?.map(y => y),
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'iamRole': obj.iamRole,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeWorldGenerationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldGenerationJobRequest(obj: RoboMakerDescribeWorldGenerationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeWorldGenerationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldGenerationJobResponse(obj: RoboMakerDescribeWorldGenerationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
    'clientRequestToken': obj.clientRequestToken,
    'template': obj.template,
    'worldCount': toJson_RoboMakerWorldCount(obj.worldCount),
    'finishedWorldsSummary': toJson_RoboMakerFinishedWorldsSummary(obj.finishedWorldsSummary),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'worldTags': ((obj.worldTags) === undefined) ? undefined : (Object.entries(obj.worldTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDescribeWorldTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldTemplateRequest(obj: RoboMakerDescribeWorldTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'template': obj.template,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema RoboMakerDescribeWorldTemplateResponse#version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'RoboMakerDescribeWorldTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDescribeWorldTemplateResponse(obj: RoboMakerDescribeWorldTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'clientRequestToken': obj.clientRequestToken,
    'name': obj.name,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerGetWorldTemplateBodyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerGetWorldTemplateBodyRequest(obj: RoboMakerGetWorldTemplateBodyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'template': obj.template,
    'generationJob': obj.generationJob,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerGetWorldTemplateBodyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerGetWorldTemplateBodyResponse(obj: RoboMakerGetWorldTemplateBodyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateBody': obj.templateBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListDeploymentJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListDeploymentJobsRequest(obj: RoboMakerListDeploymentJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListDeploymentJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListDeploymentJobsResponse(obj: RoboMakerListDeploymentJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentJobs': obj.deploymentJobs?.map(y => toJson_RoboMakerDeploymentJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListFleetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListFleetsRequest(obj: RoboMakerListFleetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListFleetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListFleetsResponse(obj: RoboMakerListFleetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleetDetails': obj.fleetDetails?.map(y => toJson_RoboMakerFleet(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListRobotApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListRobotApplicationsRequest(obj: RoboMakerListRobotApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionQualifier': obj.versionQualifier,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListRobotApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListRobotApplicationsResponse(obj: RoboMakerListRobotApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'robotApplicationSummaries': obj.robotApplicationSummaries?.map(y => toJson_RoboMakerRobotApplicationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListRobotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListRobotsRequest(obj: RoboMakerListRobotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListRobotsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListRobotsResponse(obj: RoboMakerListRobotsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'robots': obj.robots?.map(y => toJson_RoboMakerRobot(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListSimulationApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListSimulationApplicationsRequest(obj: RoboMakerListSimulationApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionQualifier': obj.versionQualifier,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListSimulationApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListSimulationApplicationsResponse(obj: RoboMakerListSimulationApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simulationApplicationSummaries': obj.simulationApplicationSummaries?.map(y => toJson_RoboMakerSimulationApplicationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListSimulationJobBatchesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListSimulationJobBatchesRequest(obj: RoboMakerListSimulationJobBatchesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListSimulationJobBatchesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListSimulationJobBatchesResponse(obj: RoboMakerListSimulationJobBatchesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simulationJobBatchSummaries': obj.simulationJobBatchSummaries?.map(y => toJson_RoboMakerSimulationJobBatchSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListSimulationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListSimulationJobsRequest(obj: RoboMakerListSimulationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListSimulationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListSimulationJobsResponse(obj: RoboMakerListSimulationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simulationJobSummaries': obj.simulationJobSummaries?.map(y => toJson_RoboMakerSimulationJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListTagsForResourceRequest(obj: RoboMakerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListTagsForResourceResponse(obj: RoboMakerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldExportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldExportJobsRequest(obj: RoboMakerListWorldExportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldExportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldExportJobsResponse(obj: RoboMakerListWorldExportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'worldExportJobSummaries': obj.worldExportJobSummaries?.map(y => toJson_RoboMakerWorldExportJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldGenerationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldGenerationJobsRequest(obj: RoboMakerListWorldGenerationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldGenerationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldGenerationJobsResponse(obj: RoboMakerListWorldGenerationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'worldGenerationJobSummaries': obj.worldGenerationJobSummaries?.map(y => toJson_RoboMakerWorldGenerationJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldTemplatesRequest(obj: RoboMakerListWorldTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldTemplatesResponse(obj: RoboMakerListWorldTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateSummaries': obj.templateSummaries?.map(y => toJson_RoboMakerTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldsRequest(obj: RoboMakerListWorldsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filters': obj.filters?.map(y => toJson_RoboMakerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerListWorldsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerListWorldsResponse(obj: RoboMakerListWorldsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'worldSummaries': obj.worldSummaries?.map(y => toJson_RoboMakerWorldSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRegisterRobotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRegisterRobotRequest(obj: RoboMakerRegisterRobotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleet': obj.fleet,
    'robot': obj.robot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRegisterRobotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRegisterRobotResponse(obj: RoboMakerRegisterRobotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fleet': obj.fleet,
    'robot': obj.robot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRestartSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRestartSimulationJobRequest(obj: RoboMakerRestartSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': obj.job,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerRestartSimulationJobResponse
 */
export interface RoboMakerRestartSimulationJobResponse {
}

/**
 * Converts an object of type 'RoboMakerRestartSimulationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRestartSimulationJobResponse(obj: RoboMakerRestartSimulationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerStartSimulationJobBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerStartSimulationJobBatchRequest(obj: RoboMakerStartSimulationJobBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'batchPolicy': toJson_RoboMakerBatchPolicy(obj.batchPolicy),
    'createSimulationJobRequests': obj.createSimulationJobRequests?.map(y => toJson_RoboMakerSimulationJobRequest(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerStartSimulationJobBatchResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerStartSimulationJobBatchResponse(obj: RoboMakerStartSimulationJobBatchResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'clientRequestToken': obj.clientRequestToken,
    'batchPolicy': toJson_RoboMakerBatchPolicy(obj.batchPolicy),
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
    'failedRequests': obj.failedRequests?.map(y => toJson_RoboMakerFailedCreateSimulationJobRequest(y)),
    'pendingRequests': obj.pendingRequests?.map(y => toJson_RoboMakerSimulationJobRequest(y)),
    'createdRequests': obj.createdRequests?.map(y => toJson_RoboMakerSimulationJobSummary(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSyncDeploymentJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSyncDeploymentJobRequest(obj: RoboMakerSyncDeploymentJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'fleet': obj.fleet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSyncDeploymentJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSyncDeploymentJobResponse(obj: RoboMakerSyncDeploymentJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'fleet': obj.fleet,
    'status': obj.status,
    'deploymentConfig': toJson_RoboMakerDeploymentConfig(obj.deploymentConfig),
    'deploymentApplicationConfigs': obj.deploymentApplicationConfigs?.map(y => toJson_RoboMakerDeploymentApplicationConfig(y)),
    'failureReason': obj.failureReason,
    'failureCode': obj.failureCode,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerTagResourceRequest(obj: RoboMakerTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema RoboMakerTagResourceResponse
 */
export interface RoboMakerTagResourceResponse {
}

/**
 * Converts an object of type 'RoboMakerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerTagResourceResponse(obj: RoboMakerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUntagResourceRequest(obj: RoboMakerUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema RoboMakerUntagResourceResponse
 */
export interface RoboMakerUntagResourceResponse {
}

/**
 * Converts an object of type 'RoboMakerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUntagResourceResponse(obj: RoboMakerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUpdateRobotApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUpdateRobotApplicationRequest(obj: RoboMakerUpdateRobotApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'sources': obj.sources?.map(y => toJson_RoboMakerSourceConfig(y)),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'currentRevisionId': obj.currentRevisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUpdateRobotApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUpdateRobotApplicationResponse(obj: RoboMakerUpdateRobotApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'lastUpdatedAt': obj.lastUpdatedAt,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUpdateSimulationApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUpdateSimulationApplicationRequest(obj: RoboMakerUpdateSimulationApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'sources': obj.sources?.map(y => toJson_RoboMakerSourceConfig(y)),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'renderingEngine': toJson_RoboMakerRenderingEngine(obj.renderingEngine),
    'currentRevisionId': obj.currentRevisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUpdateSimulationApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUpdateSimulationApplicationResponse(obj: RoboMakerUpdateSimulationApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'sources': obj.sources?.map(y => toJson_RoboMakerSource(y)),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'renderingEngine': toJson_RoboMakerRenderingEngine(obj.renderingEngine),
    'lastUpdatedAt': obj.lastUpdatedAt,
    'revisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUpdateWorldTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUpdateWorldTemplateRequest(obj: RoboMakerUpdateWorldTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'template': obj.template,
    'name': obj.name,
    'templateBody': obj.templateBody,
    'templateLocation': toJson_RoboMakerTemplateLocation(obj.templateLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerUpdateWorldTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUpdateWorldTemplateResponse(obj: RoboMakerUpdateWorldTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSimulationJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationJob(obj: RoboMakerSimulationJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'status': obj.status,
    'lastStartedAt': obj.lastStartedAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'failureBehavior': obj.failureBehavior,
    'failureCode': obj.failureCode,
    'failureReason': obj.failureReason,
    'clientRequestToken': obj.clientRequestToken,
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'loggingConfig': toJson_RoboMakerLoggingConfig(obj.loggingConfig),
    'maxJobDurationInSeconds': obj.maxJobDurationInSeconds,
    'simulationTimeMillis': obj.simulationTimeMillis,
    'iamRole': obj.iamRole,
    'robotApplications': obj.robotApplications?.map(y => toJson_RoboMakerRobotApplicationConfig(y)),
    'simulationApplications': obj.simulationApplications?.map(y => toJson_RoboMakerSimulationApplicationConfig(y)),
    'dataSources': obj.dataSources?.map(y => toJson_RoboMakerDataSource(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'vpcConfig': toJson_RoboMakerVpcConfigResponse(obj.vpcConfig),
    'networkInterface': toJson_RoboMakerNetworkInterface(obj.networkInterface),
    'compute': toJson_RoboMakerComputeResponse(obj.compute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeploymentConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeploymentConfig(obj: RoboMakerDeploymentConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'concurrentDeploymentPercentage': obj.concurrentDeploymentPercentage,
    'failureThresholdPercentage': obj.failureThresholdPercentage,
    'robotDeploymentTimeoutInSeconds': obj.robotDeploymentTimeoutInSeconds,
    'downloadConditionFile': toJson_RoboMakerS3Object(obj.downloadConditionFile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeploymentApplicationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeploymentApplicationConfig(obj: RoboMakerDeploymentApplicationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
    'launchConfig': toJson_RoboMakerDeploymentLaunchConfig(obj.launchConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSourceConfig(obj: RoboMakerSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Bucket': obj.s3Bucket,
    's3Key': obj.s3Key,
    'architecture': obj.architecture,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRobotSoftwareSuite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRobotSoftwareSuite(obj: RoboMakerRobotSoftwareSuite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSource(obj: RoboMakerSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Bucket': obj.s3Bucket,
    's3Key': obj.s3Key,
    'etag': obj.etag,
    'architecture': obj.architecture,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSimulationSoftwareSuite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationSoftwareSuite(obj: RoboMakerSimulationSoftwareSuite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRenderingEngine' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRenderingEngine(obj: RoboMakerRenderingEngine | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerOutputLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerOutputLocation(obj: RoboMakerOutputLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Bucket': obj.s3Bucket,
    's3Prefix': obj.s3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerLoggingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerLoggingConfig(obj: RoboMakerLoggingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recordAllRosTopics': obj.recordAllRosTopics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema RoboMakerRobotApplicationConfig#uploadConfigurations
   */
  readonly uploadConfigurations?: RoboMakerUploadConfiguration[];

  /**
   * @schema RoboMakerRobotApplicationConfig#useDefaultUploadConfigurations
   */
  readonly useDefaultUploadConfigurations?: boolean;

  /**
   * @schema RoboMakerRobotApplicationConfig#tools
   */
  readonly tools?: RoboMakerTool[];

  /**
   * @schema RoboMakerRobotApplicationConfig#useDefaultTools
   */
  readonly useDefaultTools?: boolean;

}

/**
 * Converts an object of type 'RoboMakerRobotApplicationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRobotApplicationConfig(obj: RoboMakerRobotApplicationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
    'launchConfig': toJson_RoboMakerLaunchConfig(obj.launchConfig),
    'uploadConfigurations': obj.uploadConfigurations?.map(y => toJson_RoboMakerUploadConfiguration(y)),
    'useDefaultUploadConfigurations': obj.useDefaultUploadConfigurations,
    'tools': obj.tools?.map(y => toJson_RoboMakerTool(y)),
    'useDefaultTools': obj.useDefaultTools,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema RoboMakerSimulationApplicationConfig#uploadConfigurations
   */
  readonly uploadConfigurations?: RoboMakerUploadConfiguration[];

  /**
   * @schema RoboMakerSimulationApplicationConfig#worldConfigs
   */
  readonly worldConfigs?: RoboMakerWorldConfig[];

  /**
   * @schema RoboMakerSimulationApplicationConfig#useDefaultUploadConfigurations
   */
  readonly useDefaultUploadConfigurations?: boolean;

  /**
   * @schema RoboMakerSimulationApplicationConfig#tools
   */
  readonly tools?: RoboMakerTool[];

  /**
   * @schema RoboMakerSimulationApplicationConfig#useDefaultTools
   */
  readonly useDefaultTools?: boolean;

}

/**
 * Converts an object of type 'RoboMakerSimulationApplicationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationApplicationConfig(obj: RoboMakerSimulationApplicationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'application': obj.application,
    'applicationVersion': obj.applicationVersion,
    'launchConfig': toJson_RoboMakerLaunchConfig(obj.launchConfig),
    'uploadConfigurations': obj.uploadConfigurations?.map(y => toJson_RoboMakerUploadConfiguration(y)),
    'worldConfigs': obj.worldConfigs?.map(y => toJson_RoboMakerWorldConfig(y)),
    'useDefaultUploadConfigurations': obj.useDefaultUploadConfigurations,
    'tools': obj.tools?.map(y => toJson_RoboMakerTool(y)),
    'useDefaultTools': obj.useDefaultTools,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDataSourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDataSourceConfig(obj: RoboMakerDataSourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    's3Bucket': obj.s3Bucket,
    's3Keys': obj.s3Keys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerVpcConfig(obj: RoboMakerVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnets': obj.subnets?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => y),
    'assignPublicIp': obj.assignPublicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerCompute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerCompute(obj: RoboMakerCompute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simulationUnitLimit': obj.simulationUnitLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDataSource(obj: RoboMakerDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    's3Bucket': obj.s3Bucket,
    's3Keys': obj.s3Keys?.map(y => toJson_RoboMakerS3KeyOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerVpcConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerVpcConfigResponse(obj: RoboMakerVpcConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnets': obj.subnets?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => y),
    'vpcId': obj.vpcId,
    'assignPublicIp': obj.assignPublicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerComputeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerComputeResponse(obj: RoboMakerComputeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simulationUnitLimit': obj.simulationUnitLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerWorldCount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerWorldCount(obj: RoboMakerWorldCount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'floorplanCount': obj.floorplanCount,
    'interiorCountPerFloorplan': obj.interiorCountPerFloorplan,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerTemplateLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerTemplateLocation(obj: RoboMakerTemplateLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Bucket': obj.s3Bucket,
    's3Key': obj.s3Key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRobotDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRobotDeployment(obj: RoboMakerRobotDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'deploymentStartTime': obj.deploymentStartTime,
    'deploymentFinishTime': obj.deploymentFinishTime,
    'status': obj.status,
    'progressDetail': toJson_RoboMakerProgressDetail(obj.progressDetail),
    'failureReason': obj.failureReason,
    'failureCode': obj.failureCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRobot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRobot(obj: RoboMakerRobot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'fleetArn': obj.fleetArn,
    'status': obj.status,
    'greenGrassGroupId': obj.greenGrassGroupId,
    'createdAt': obj.createdAt,
    'architecture': obj.architecture,
    'lastDeploymentJob': obj.lastDeploymentJob,
    'lastDeploymentTime': obj.lastDeploymentTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerNetworkInterface(obj: RoboMakerNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'networkInterfaceId': obj.networkInterfaceId,
    'privateIpAddress': obj.privateIpAddress,
    'publicIpAddress': obj.publicIpAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerBatchPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerBatchPolicy(obj: RoboMakerBatchPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutInSeconds': obj.timeoutInSeconds,
    'maxConcurrency': obj.maxConcurrency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerFailedCreateSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerFailedCreateSimulationJobRequest(obj: RoboMakerFailedCreateSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'request': toJson_RoboMakerSimulationJobRequest(obj.request),
    'failureReason': obj.failureReason,
    'failureCode': obj.failureCode,
    'failedAt': obj.failedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSimulationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationJobRequest(obj: RoboMakerSimulationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'outputLocation': toJson_RoboMakerOutputLocation(obj.outputLocation),
    'loggingConfig': toJson_RoboMakerLoggingConfig(obj.loggingConfig),
    'maxJobDurationInSeconds': obj.maxJobDurationInSeconds,
    'iamRole': obj.iamRole,
    'failureBehavior': obj.failureBehavior,
    'useDefaultApplications': obj.useDefaultApplications,
    'robotApplications': obj.robotApplications?.map(y => toJson_RoboMakerRobotApplicationConfig(y)),
    'simulationApplications': obj.simulationApplications?.map(y => toJson_RoboMakerSimulationApplicationConfig(y)),
    'dataSources': obj.dataSources?.map(y => toJson_RoboMakerDataSourceConfig(y)),
    'vpcConfig': toJson_RoboMakerVpcConfig(obj.vpcConfig),
    'compute': toJson_RoboMakerCompute(obj.compute),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSimulationJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationJobSummary(obj: RoboMakerSimulationJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'name': obj.name,
    'status': obj.status,
    'simulationApplicationNames': obj.simulationApplicationNames?.map(y => y),
    'robotApplicationNames': obj.robotApplicationNames?.map(y => y),
    'dataSourceNames': obj.dataSourceNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerFinishedWorldsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerFinishedWorldsSummary(obj: RoboMakerFinishedWorldsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'finishedCount': obj.finishedCount,
    'succeededWorlds': obj.succeededWorlds?.map(y => y),
    'failureSummary': toJson_RoboMakerFailureSummary(obj.failureSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerFilter(obj: RoboMakerFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeploymentJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeploymentJob(obj: RoboMakerDeploymentJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'fleet': obj.fleet,
    'status': obj.status,
    'deploymentApplicationConfigs': obj.deploymentApplicationConfigs?.map(y => toJson_RoboMakerDeploymentApplicationConfig(y)),
    'deploymentConfig': toJson_RoboMakerDeploymentConfig(obj.deploymentConfig),
    'failureReason': obj.failureReason,
    'failureCode': obj.failureCode,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerFleet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerFleet(obj: RoboMakerFleet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastDeploymentStatus': obj.lastDeploymentStatus,
    'lastDeploymentJob': obj.lastDeploymentJob,
    'lastDeploymentTime': obj.lastDeploymentTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerRobotApplicationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerRobotApplicationSummary(obj: RoboMakerRobotApplicationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'version': obj.version,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSimulationApplicationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationApplicationSummary(obj: RoboMakerSimulationApplicationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'version': obj.version,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'robotSoftwareSuite': toJson_RoboMakerRobotSoftwareSuite(obj.robotSoftwareSuite),
    'simulationSoftwareSuite': toJson_RoboMakerSimulationSoftwareSuite(obj.simulationSoftwareSuite),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerSimulationJobBatchSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerSimulationJobBatchSummary(obj: RoboMakerSimulationJobBatchSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'createdAt': obj.createdAt,
    'status': obj.status,
    'failedRequestCount': obj.failedRequestCount,
    'pendingRequestCount': obj.pendingRequestCount,
    'createdRequestCount': obj.createdRequestCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerWorldExportJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerWorldExportJobSummary(obj: RoboMakerWorldExportJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'worlds': obj.worlds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerWorldGenerationJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerWorldGenerationJobSummary(obj: RoboMakerWorldGenerationJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'template': obj.template,
    'createdAt': obj.createdAt,
    'status': obj.status,
    'worldCount': toJson_RoboMakerWorldCount(obj.worldCount),
    'succeededWorldCount': obj.succeededWorldCount,
    'failedWorldCount': obj.failedWorldCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema RoboMakerTemplateSummary#version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'RoboMakerTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerTemplateSummary(obj: RoboMakerTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerWorldSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerWorldSummary(obj: RoboMakerWorldSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'generationJob': obj.generationJob,
    'template': obj.template,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerS3Object(obj: RoboMakerS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'etag': obj.etag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerDeploymentLaunchConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerDeploymentLaunchConfig(obj: RoboMakerDeploymentLaunchConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'packageName': obj.packageName,
    'preLaunchFile': obj.preLaunchFile,
    'launchFile': obj.launchFile,
    'postLaunchFile': obj.postLaunchFile,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly streamUi?: boolean;

}

/**
 * Converts an object of type 'RoboMakerLaunchConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerLaunchConfig(obj: RoboMakerLaunchConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'packageName': obj.packageName,
    'launchFile': obj.launchFile,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'portForwardingConfig': toJson_RoboMakerPortForwardingConfig(obj.portForwardingConfig),
    'streamUI': obj.streamUi,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerUploadConfiguration
 */
export interface RoboMakerUploadConfiguration {
  /**
   * @schema RoboMakerUploadConfiguration#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerUploadConfiguration#path
   */
  readonly path: string;

  /**
   * @schema RoboMakerUploadConfiguration#uploadBehavior
   */
  readonly uploadBehavior: string;

}

/**
 * Converts an object of type 'RoboMakerUploadConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerUploadConfiguration(obj: RoboMakerUploadConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'path': obj.path,
    'uploadBehavior': obj.uploadBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RoboMakerTool
 */
export interface RoboMakerTool {
  /**
   * @schema RoboMakerTool#streamUI
   */
  readonly streamUi?: boolean;

  /**
   * @schema RoboMakerTool#name
   */
  readonly name: string;

  /**
   * @schema RoboMakerTool#command
   */
  readonly command: string;

  /**
   * @schema RoboMakerTool#streamOutputToCloudWatch
   */
  readonly streamOutputToCloudWatch?: boolean;

  /**
   * @schema RoboMakerTool#exitBehavior
   */
  readonly exitBehavior?: string;

}

/**
 * Converts an object of type 'RoboMakerTool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerTool(obj: RoboMakerTool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamUI': obj.streamUi,
    'name': obj.name,
    'command': obj.command,
    'streamOutputToCloudWatch': obj.streamOutputToCloudWatch,
    'exitBehavior': obj.exitBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerWorldConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerWorldConfig(obj: RoboMakerWorldConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'world': obj.world,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerS3KeyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerS3KeyOutput(obj: RoboMakerS3KeyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Key': obj.s3Key,
    'etag': obj.etag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerProgressDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerProgressDetail(obj: RoboMakerProgressDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'currentProgress': obj.currentProgress,
    'percentDone': obj.percentDone,
    'estimatedTimeRemainingSeconds': obj.estimatedTimeRemainingSeconds,
    'targetResource': obj.targetResource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerFailureSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerFailureSummary(obj: RoboMakerFailureSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'totalFailureCount': obj.totalFailureCount,
    'failures': obj.failures?.map(y => toJson_RoboMakerWorldFailure(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerPortForwardingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerPortForwardingConfig(obj: RoboMakerPortForwardingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portMappings': obj.portMappings?.map(y => toJson_RoboMakerPortMapping(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'RoboMakerWorldFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerWorldFailure(obj: RoboMakerWorldFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failureCode': obj.failureCode,
    'sampleFailureReason': obj.sampleFailureReason,
    'failureCount': obj.failureCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'RoboMakerPortMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RoboMakerPortMapping(obj: RoboMakerPortMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobPort': obj.jobPort,
    'applicationPort': obj.applicationPort,
    'enableOnPublicIp': obj.enableOnPublicIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
