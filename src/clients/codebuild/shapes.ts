/**
 * @schema CodeBuildBatchDeleteBuildsInput
 */
export interface CodeBuildBatchDeleteBuildsInput {
  /**
   * @schema CodeBuildBatchDeleteBuildsInput#ids
   */
  readonly ids: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchDeleteBuildsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchDeleteBuildsInput(obj: CodeBuildBatchDeleteBuildsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchDeleteBuildsOutput
 */
export interface CodeBuildBatchDeleteBuildsOutput {
  /**
   * @schema CodeBuildBatchDeleteBuildsOutput#buildsDeleted
   */
  readonly buildsDeleted?: string[];

  /**
   * @schema CodeBuildBatchDeleteBuildsOutput#buildsNotDeleted
   */
  readonly buildsNotDeleted?: CodeBuildBuildNotDeleted[];

}

/**
 * Converts an object of type 'CodeBuildBatchDeleteBuildsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchDeleteBuildsOutput(obj: CodeBuildBatchDeleteBuildsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buildsDeleted': obj.buildsDeleted?.map(y => y),
    'buildsNotDeleted': obj.buildsNotDeleted?.map(y => toJson_CodeBuildBuildNotDeleted(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetBuildBatchesInput
 */
export interface CodeBuildBatchGetBuildBatchesInput {
  /**
   * @schema CodeBuildBatchGetBuildBatchesInput#ids
   */
  readonly ids: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetBuildBatchesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetBuildBatchesInput(obj: CodeBuildBatchGetBuildBatchesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetBuildBatchesOutput
 */
export interface CodeBuildBatchGetBuildBatchesOutput {
  /**
   * @schema CodeBuildBatchGetBuildBatchesOutput#buildBatches
   */
  readonly buildBatches?: CodeBuildBuildBatch[];

  /**
   * @schema CodeBuildBatchGetBuildBatchesOutput#buildBatchesNotFound
   */
  readonly buildBatchesNotFound?: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetBuildBatchesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetBuildBatchesOutput(obj: CodeBuildBatchGetBuildBatchesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buildBatches': obj.buildBatches?.map(y => toJson_CodeBuildBuildBatch(y)),
    'buildBatchesNotFound': obj.buildBatchesNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetBuildsInput
 */
export interface CodeBuildBatchGetBuildsInput {
  /**
   * @schema CodeBuildBatchGetBuildsInput#ids
   */
  readonly ids: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetBuildsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetBuildsInput(obj: CodeBuildBatchGetBuildsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetBuildsOutput
 */
export interface CodeBuildBatchGetBuildsOutput {
  /**
   * @schema CodeBuildBatchGetBuildsOutput#builds
   */
  readonly builds?: CodeBuildBuild[];

  /**
   * @schema CodeBuildBatchGetBuildsOutput#buildsNotFound
   */
  readonly buildsNotFound?: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetBuildsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetBuildsOutput(obj: CodeBuildBatchGetBuildsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'builds': obj.builds?.map(y => toJson_CodeBuildBuild(y)),
    'buildsNotFound': obj.buildsNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetProjectsInput
 */
export interface CodeBuildBatchGetProjectsInput {
  /**
   * @schema CodeBuildBatchGetProjectsInput#names
   */
  readonly names: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetProjectsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetProjectsInput(obj: CodeBuildBatchGetProjectsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'names': obj.names?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetProjectsOutput
 */
export interface CodeBuildBatchGetProjectsOutput {
  /**
   * @schema CodeBuildBatchGetProjectsOutput#projects
   */
  readonly projects?: CodeBuildProject[];

  /**
   * @schema CodeBuildBatchGetProjectsOutput#projectsNotFound
   */
  readonly projectsNotFound?: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetProjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetProjectsOutput(obj: CodeBuildBatchGetProjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projects': obj.projects?.map(y => toJson_CodeBuildProject(y)),
    'projectsNotFound': obj.projectsNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetReportGroupsInput
 */
export interface CodeBuildBatchGetReportGroupsInput {
  /**
   * @schema CodeBuildBatchGetReportGroupsInput#reportGroupArns
   */
  readonly reportGroupArns: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetReportGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetReportGroupsInput(obj: CodeBuildBatchGetReportGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportGroupArns': obj.reportGroupArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetReportGroupsOutput
 */
export interface CodeBuildBatchGetReportGroupsOutput {
  /**
   * @schema CodeBuildBatchGetReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: CodeBuildReportGroup[];

  /**
   * @schema CodeBuildBatchGetReportGroupsOutput#reportGroupsNotFound
   */
  readonly reportGroupsNotFound?: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetReportGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetReportGroupsOutput(obj: CodeBuildBatchGetReportGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportGroups': obj.reportGroups?.map(y => toJson_CodeBuildReportGroup(y)),
    'reportGroupsNotFound': obj.reportGroupsNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetReportsInput
 */
export interface CodeBuildBatchGetReportsInput {
  /**
   * @schema CodeBuildBatchGetReportsInput#reportArns
   */
  readonly reportArns: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetReportsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetReportsInput(obj: CodeBuildBatchGetReportsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportArns': obj.reportArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchGetReportsOutput
 */
export interface CodeBuildBatchGetReportsOutput {
  /**
   * @schema CodeBuildBatchGetReportsOutput#reports
   */
  readonly reports?: CodeBuildReport[];

  /**
   * @schema CodeBuildBatchGetReportsOutput#reportsNotFound
   */
  readonly reportsNotFound?: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchGetReportsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchGetReportsOutput(obj: CodeBuildBatchGetReportsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reports': obj.reports?.map(y => toJson_CodeBuildReport(y)),
    'reportsNotFound': obj.reportsNotFound?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCreateProjectInput
 */
export interface CodeBuildCreateProjectInput {
  /**
   * @schema CodeBuildCreateProjectInput#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildCreateProjectInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildCreateProjectInput#source
   */
  readonly source: CodeBuildProjectSource;

  /**
   * @schema CodeBuildCreateProjectInput#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildCreateProjectInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildCreateProjectInput#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildCreateProjectInput#artifacts
   */
  readonly artifacts: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildCreateProjectInput#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildCreateProjectInput#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildCreateProjectInput#environment
   */
  readonly environment: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildCreateProjectInput#serviceRole
   */
  readonly serviceRole: string;

  /**
   * @schema CodeBuildCreateProjectInput#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildCreateProjectInput#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildCreateProjectInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildCreateProjectInput#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildCreateProjectInput#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildCreateProjectInput#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CodeBuildCreateProjectInput#logsConfig
   */
  readonly logsConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildCreateProjectInput#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildCreateProjectInput#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

  /**
   * @schema CodeBuildCreateProjectInput#concurrentBuildLimit
   */
  readonly concurrentBuildLimit?: number;

}

/**
 * Converts an object of type 'CodeBuildCreateProjectInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCreateProjectInput(obj: CodeBuildCreateProjectInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'source': toJson_CodeBuildProjectSource(obj.source),
    'secondarySources': obj.secondarySources?.map(y => toJson_CodeBuildProjectSource(y)),
    'sourceVersion': obj.sourceVersion,
    'secondarySourceVersions': obj.secondarySourceVersions?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'artifacts': toJson_CodeBuildProjectArtifacts(obj.artifacts),
    'secondaryArtifacts': obj.secondaryArtifacts?.map(y => toJson_CodeBuildProjectArtifacts(y)),
    'cache': toJson_CodeBuildProjectCache(obj.cache),
    'environment': toJson_CodeBuildProjectEnvironment(obj.environment),
    'serviceRole': obj.serviceRole,
    'timeoutInMinutes': obj.timeoutInMinutes,
    'queuedTimeoutInMinutes': obj.queuedTimeoutInMinutes,
    'encryptionKey': obj.encryptionKey,
    'tags': obj.tags?.map(y => toJson_CodeBuildTag(y)),
    'vpcConfig': toJson_CodeBuildVpcConfig(obj.vpcConfig),
    'badgeEnabled': obj.badgeEnabled,
    'logsConfig': toJson_CodeBuildLogsConfig(obj.logsConfig),
    'fileSystemLocations': obj.fileSystemLocations?.map(y => toJson_CodeBuildProjectFileSystemLocation(y)),
    'buildBatchConfig': toJson_CodeBuildProjectBuildBatchConfig(obj.buildBatchConfig),
    'concurrentBuildLimit': obj.concurrentBuildLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCreateProjectOutput
 */
export interface CodeBuildCreateProjectOutput {
  /**
   * @schema CodeBuildCreateProjectOutput#project
   */
  readonly project?: CodeBuildProject;

}

/**
 * Converts an object of type 'CodeBuildCreateProjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCreateProjectOutput(obj: CodeBuildCreateProjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'project': toJson_CodeBuildProject(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCreateReportGroupInput
 */
export interface CodeBuildCreateReportGroupInput {
  /**
   * @schema CodeBuildCreateReportGroupInput#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildCreateReportGroupInput#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildCreateReportGroupInput#exportConfig
   */
  readonly exportConfig: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildCreateReportGroupInput#tags
   */
  readonly tags?: CodeBuildTag[];

}

/**
 * Converts an object of type 'CodeBuildCreateReportGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCreateReportGroupInput(obj: CodeBuildCreateReportGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'exportConfig': toJson_CodeBuildReportExportConfig(obj.exportConfig),
    'tags': obj.tags?.map(y => toJson_CodeBuildTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCreateReportGroupOutput
 */
export interface CodeBuildCreateReportGroupOutput {
  /**
   * @schema CodeBuildCreateReportGroupOutput#reportGroup
   */
  readonly reportGroup?: CodeBuildReportGroup;

}

/**
 * Converts an object of type 'CodeBuildCreateReportGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCreateReportGroupOutput(obj: CodeBuildCreateReportGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportGroup': toJson_CodeBuildReportGroup(obj.reportGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCreateWebhookInput
 */
export interface CodeBuildCreateWebhookInput {
  /**
   * @schema CodeBuildCreateWebhookInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildCreateWebhookInput#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CodeBuildCreateWebhookInput#filterGroups
   */
  readonly filterGroups?: CodeBuildWebhookFilter[][];

  /**
   * @schema CodeBuildCreateWebhookInput#buildType
   */
  readonly buildType?: string;

}

/**
 * Converts an object of type 'CodeBuildCreateWebhookInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCreateWebhookInput(obj: CodeBuildCreateWebhookInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'branchFilter': obj.branchFilter,
    'filterGroups': obj.filterGroups?.map(y => y?.map(y => toJson_CodeBuildWebhookFilter(y))),
    'buildType': obj.buildType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCreateWebhookOutput
 */
export interface CodeBuildCreateWebhookOutput {
  /**
   * @schema CodeBuildCreateWebhookOutput#webhook
   */
  readonly webhook?: CodeBuildWebhook;

}

/**
 * Converts an object of type 'CodeBuildCreateWebhookOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCreateWebhookOutput(obj: CodeBuildCreateWebhookOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_CodeBuildWebhook(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteBuildBatchInput
 */
export interface CodeBuildDeleteBuildBatchInput {
  /**
   * @schema CodeBuildDeleteBuildBatchInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteBuildBatchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteBuildBatchInput(obj: CodeBuildDeleteBuildBatchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteBuildBatchOutput
 */
export interface CodeBuildDeleteBuildBatchOutput {
  /**
   * @schema CodeBuildDeleteBuildBatchOutput#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema CodeBuildDeleteBuildBatchOutput#buildsDeleted
   */
  readonly buildsDeleted?: string[];

  /**
   * @schema CodeBuildDeleteBuildBatchOutput#buildsNotDeleted
   */
  readonly buildsNotDeleted?: CodeBuildBuildNotDeleted[];

}

/**
 * Converts an object of type 'CodeBuildDeleteBuildBatchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteBuildBatchOutput(obj: CodeBuildDeleteBuildBatchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statusCode': obj.statusCode,
    'buildsDeleted': obj.buildsDeleted?.map(y => y),
    'buildsNotDeleted': obj.buildsNotDeleted?.map(y => toJson_CodeBuildBuildNotDeleted(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteProjectInput
 */
export interface CodeBuildDeleteProjectInput {
  /**
   * @schema CodeBuildDeleteProjectInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteProjectInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteProjectInput(obj: CodeBuildDeleteProjectInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteProjectOutput
 */
export interface CodeBuildDeleteProjectOutput {
}

/**
 * Converts an object of type 'CodeBuildDeleteProjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteProjectOutput(obj: CodeBuildDeleteProjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteReportInput
 */
export interface CodeBuildDeleteReportInput {
  /**
   * @schema CodeBuildDeleteReportInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteReportInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteReportInput(obj: CodeBuildDeleteReportInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteReportOutput
 */
export interface CodeBuildDeleteReportOutput {
}

/**
 * Converts an object of type 'CodeBuildDeleteReportOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteReportOutput(obj: CodeBuildDeleteReportOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteReportGroupInput
 */
export interface CodeBuildDeleteReportGroupInput {
  /**
   * @schema CodeBuildDeleteReportGroupInput#arn
   */
  readonly arn: string;

  /**
   * @schema CodeBuildDeleteReportGroupInput#deleteReports
   */
  readonly deleteReports?: boolean;

}

/**
 * Converts an object of type 'CodeBuildDeleteReportGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteReportGroupInput(obj: CodeBuildDeleteReportGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'deleteReports': obj.deleteReports,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteReportGroupOutput
 */
export interface CodeBuildDeleteReportGroupOutput {
}

/**
 * Converts an object of type 'CodeBuildDeleteReportGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteReportGroupOutput(obj: CodeBuildDeleteReportGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteResourcePolicyInput
 */
export interface CodeBuildDeleteResourcePolicyInput {
  /**
   * @schema CodeBuildDeleteResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteResourcePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteResourcePolicyInput(obj: CodeBuildDeleteResourcePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteResourcePolicyOutput
 */
export interface CodeBuildDeleteResourcePolicyOutput {
}

/**
 * Converts an object of type 'CodeBuildDeleteResourcePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteResourcePolicyOutput(obj: CodeBuildDeleteResourcePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteSourceCredentialsInput
 */
export interface CodeBuildDeleteSourceCredentialsInput {
  /**
   * @schema CodeBuildDeleteSourceCredentialsInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteSourceCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteSourceCredentialsInput(obj: CodeBuildDeleteSourceCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteSourceCredentialsOutput
 */
export interface CodeBuildDeleteSourceCredentialsOutput {
  /**
   * @schema CodeBuildDeleteSourceCredentialsOutput#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteSourceCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteSourceCredentialsOutput(obj: CodeBuildDeleteSourceCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteWebhookInput
 */
export interface CodeBuildDeleteWebhookInput {
  /**
   * @schema CodeBuildDeleteWebhookInput#projectName
   */
  readonly projectName: string;

}

/**
 * Converts an object of type 'CodeBuildDeleteWebhookInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteWebhookInput(obj: CodeBuildDeleteWebhookInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDeleteWebhookOutput
 */
export interface CodeBuildDeleteWebhookOutput {
}

/**
 * Converts an object of type 'CodeBuildDeleteWebhookOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDeleteWebhookOutput(obj: CodeBuildDeleteWebhookOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDescribeCodeCoveragesInput
 */
export interface CodeBuildDescribeCodeCoveragesInput {
  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#reportArn
   */
  readonly reportArn: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#minLineCoveragePercentage
   */
  readonly minLineCoveragePercentage?: number;

  /**
   * @schema CodeBuildDescribeCodeCoveragesInput#maxLineCoveragePercentage
   */
  readonly maxLineCoveragePercentage?: number;

}

/**
 * Converts an object of type 'CodeBuildDescribeCodeCoveragesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDescribeCodeCoveragesInput(obj: CodeBuildDescribeCodeCoveragesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportArn': obj.reportArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'sortOrder': obj.sortOrder,
    'sortBy': obj.sortBy,
    'minLineCoveragePercentage': obj.minLineCoveragePercentage,
    'maxLineCoveragePercentage': obj.maxLineCoveragePercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDescribeCodeCoveragesOutput
 */
export interface CodeBuildDescribeCodeCoveragesOutput {
  /**
   * @schema CodeBuildDescribeCodeCoveragesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeCodeCoveragesOutput#codeCoverages
   */
  readonly codeCoverages?: CodeBuildCodeCoverage[];

}

/**
 * Converts an object of type 'CodeBuildDescribeCodeCoveragesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDescribeCodeCoveragesOutput(obj: CodeBuildDescribeCodeCoveragesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'codeCoverages': obj.codeCoverages?.map(y => toJson_CodeBuildCodeCoverage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDescribeTestCasesInput
 */
export interface CodeBuildDescribeTestCasesInput {
  /**
   * @schema CodeBuildDescribeTestCasesInput#reportArn
   */
  readonly reportArn: string;

  /**
   * @schema CodeBuildDescribeTestCasesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeTestCasesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildDescribeTestCasesInput#filter
   */
  readonly filter?: CodeBuildTestCaseFilter;

}

/**
 * Converts an object of type 'CodeBuildDescribeTestCasesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDescribeTestCasesInput(obj: CodeBuildDescribeTestCasesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportArn': obj.reportArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filter': toJson_CodeBuildTestCaseFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDescribeTestCasesOutput
 */
export interface CodeBuildDescribeTestCasesOutput {
  /**
   * @schema CodeBuildDescribeTestCasesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildDescribeTestCasesOutput#testCases
   */
  readonly testCases?: CodeBuildTestCase[];

}

/**
 * Converts an object of type 'CodeBuildDescribeTestCasesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDescribeTestCasesOutput(obj: CodeBuildDescribeTestCasesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'testCases': obj.testCases?.map(y => toJson_CodeBuildTestCase(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildGetReportGroupTrendInput
 */
export interface CodeBuildGetReportGroupTrendInput {
  /**
   * @schema CodeBuildGetReportGroupTrendInput#reportGroupArn
   */
  readonly reportGroupArn: string;

  /**
   * @schema CodeBuildGetReportGroupTrendInput#numOfReports
   */
  readonly numOfReports?: number;

  /**
   * @schema CodeBuildGetReportGroupTrendInput#trendField
   */
  readonly trendField: string;

}

/**
 * Converts an object of type 'CodeBuildGetReportGroupTrendInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildGetReportGroupTrendInput(obj: CodeBuildGetReportGroupTrendInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportGroupArn': obj.reportGroupArn,
    'numOfReports': obj.numOfReports,
    'trendField': obj.trendField,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildGetReportGroupTrendOutput
 */
export interface CodeBuildGetReportGroupTrendOutput {
  /**
   * @schema CodeBuildGetReportGroupTrendOutput#stats
   */
  readonly stats?: CodeBuildReportGroupTrendStats;

  /**
   * @schema CodeBuildGetReportGroupTrendOutput#rawData
   */
  readonly rawData?: CodeBuildReportWithRawData[];

}

/**
 * Converts an object of type 'CodeBuildGetReportGroupTrendOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildGetReportGroupTrendOutput(obj: CodeBuildGetReportGroupTrendOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stats': toJson_CodeBuildReportGroupTrendStats(obj.stats),
    'rawData': obj.rawData?.map(y => toJson_CodeBuildReportWithRawData(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildGetResourcePolicyInput
 */
export interface CodeBuildGetResourcePolicyInput {
  /**
   * @schema CodeBuildGetResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CodeBuildGetResourcePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildGetResourcePolicyInput(obj: CodeBuildGetResourcePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildGetResourcePolicyOutput
 */
export interface CodeBuildGetResourcePolicyOutput {
  /**
   * @schema CodeBuildGetResourcePolicyOutput#policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'CodeBuildGetResourcePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildGetResourcePolicyOutput(obj: CodeBuildGetResourcePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildImportSourceCredentialsInput
 */
export interface CodeBuildImportSourceCredentialsInput {
  /**
   * @schema CodeBuildImportSourceCredentialsInput#username
   */
  readonly username?: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#token
   */
  readonly token: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#serverType
   */
  readonly serverType: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#authType
   */
  readonly authType: string;

  /**
   * @schema CodeBuildImportSourceCredentialsInput#shouldOverwrite
   */
  readonly shouldOverwrite?: boolean;

}

/**
 * Converts an object of type 'CodeBuildImportSourceCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildImportSourceCredentialsInput(obj: CodeBuildImportSourceCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'token': obj.token,
    'serverType': obj.serverType,
    'authType': obj.authType,
    'shouldOverwrite': obj.shouldOverwrite,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildImportSourceCredentialsOutput
 */
export interface CodeBuildImportSourceCredentialsOutput {
  /**
   * @schema CodeBuildImportSourceCredentialsOutput#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CodeBuildImportSourceCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildImportSourceCredentialsOutput(obj: CodeBuildImportSourceCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildInvalidateProjectCacheInput
 */
export interface CodeBuildInvalidateProjectCacheInput {
  /**
   * @schema CodeBuildInvalidateProjectCacheInput#projectName
   */
  readonly projectName: string;

}

/**
 * Converts an object of type 'CodeBuildInvalidateProjectCacheInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildInvalidateProjectCacheInput(obj: CodeBuildInvalidateProjectCacheInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildInvalidateProjectCacheOutput
 */
export interface CodeBuildInvalidateProjectCacheOutput {
}

/**
 * Converts an object of type 'CodeBuildInvalidateProjectCacheOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildInvalidateProjectCacheOutput(obj: CodeBuildInvalidateProjectCacheOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildBatchesInput
 */
export interface CodeBuildListBuildBatchesInput {
  /**
   * @schema CodeBuildListBuildBatchesInput#filter
   */
  readonly filter?: CodeBuildBuildBatchFilter;

  /**
   * @schema CodeBuildListBuildBatchesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListBuildBatchesInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildBatchesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildBatchesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildBatchesInput(obj: CodeBuildListBuildBatchesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_CodeBuildBuildBatchFilter(obj.filter),
    'maxResults': obj.maxResults,
    'sortOrder': obj.sortOrder,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildBatchesOutput
 */
export interface CodeBuildListBuildBatchesOutput {
  /**
   * @schema CodeBuildListBuildBatchesOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildBatchesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildBatchesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildBatchesOutput(obj: CodeBuildListBuildBatchesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildBatchesForProjectInput
 */
export interface CodeBuildListBuildBatchesForProjectInput {
  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#projectName
   */
  readonly projectName?: string;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#filter
   */
  readonly filter?: CodeBuildBuildBatchFilter;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildBatchesForProjectInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildBatchesForProjectInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildBatchesForProjectInput(obj: CodeBuildListBuildBatchesForProjectInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'filter': toJson_CodeBuildBuildBatchFilter(obj.filter),
    'maxResults': obj.maxResults,
    'sortOrder': obj.sortOrder,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildBatchesForProjectOutput
 */
export interface CodeBuildListBuildBatchesForProjectOutput {
  /**
   * @schema CodeBuildListBuildBatchesForProjectOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildBatchesForProjectOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildBatchesForProjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildBatchesForProjectOutput(obj: CodeBuildListBuildBatchesForProjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildsInput
 */
export interface CodeBuildListBuildsInput {
  /**
   * @schema CodeBuildListBuildsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildsInput(obj: CodeBuildListBuildsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sortOrder': obj.sortOrder,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildsOutput
 */
export interface CodeBuildListBuildsOutput {
  /**
   * @schema CodeBuildListBuildsOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildsOutput(obj: CodeBuildListBuildsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildsForProjectInput
 */
export interface CodeBuildListBuildsForProjectInput {
  /**
   * @schema CodeBuildListBuildsForProjectInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildListBuildsForProjectInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListBuildsForProjectInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildsForProjectInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildsForProjectInput(obj: CodeBuildListBuildsForProjectInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'sortOrder': obj.sortOrder,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListBuildsForProjectOutput
 */
export interface CodeBuildListBuildsForProjectOutput {
  /**
   * @schema CodeBuildListBuildsForProjectOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema CodeBuildListBuildsForProjectOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListBuildsForProjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListBuildsForProjectOutput(obj: CodeBuildListBuildsForProjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListCuratedEnvironmentImagesInput
 */
export interface CodeBuildListCuratedEnvironmentImagesInput {
}

/**
 * Converts an object of type 'CodeBuildListCuratedEnvironmentImagesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListCuratedEnvironmentImagesInput(obj: CodeBuildListCuratedEnvironmentImagesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListCuratedEnvironmentImagesOutput
 */
export interface CodeBuildListCuratedEnvironmentImagesOutput {
  /**
   * @schema CodeBuildListCuratedEnvironmentImagesOutput#platforms
   */
  readonly platforms?: CodeBuildEnvironmentPlatform[];

}

/**
 * Converts an object of type 'CodeBuildListCuratedEnvironmentImagesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListCuratedEnvironmentImagesOutput(obj: CodeBuildListCuratedEnvironmentImagesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platforms': obj.platforms?.map(y => toJson_CodeBuildEnvironmentPlatform(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListProjectsInput
 */
export interface CodeBuildListProjectsInput {
  /**
   * @schema CodeBuildListProjectsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListProjectsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListProjectsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListProjectsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListProjectsInput(obj: CodeBuildListProjectsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sortBy': obj.sortBy,
    'sortOrder': obj.sortOrder,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListProjectsOutput
 */
export interface CodeBuildListProjectsOutput {
  /**
   * @schema CodeBuildListProjectsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListProjectsOutput#projects
   */
  readonly projects?: string[];

}

/**
 * Converts an object of type 'CodeBuildListProjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListProjectsOutput(obj: CodeBuildListProjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'projects': obj.projects?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListReportGroupsInput
 */
export interface CodeBuildListReportGroupsInput {
  /**
   * @schema CodeBuildListReportGroupsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListReportGroupsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListReportGroupsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportGroupsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeBuildListReportGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListReportGroupsInput(obj: CodeBuildListReportGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sortOrder': obj.sortOrder,
    'sortBy': obj.sortBy,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListReportGroupsOutput
 */
export interface CodeBuildListReportGroupsOutput {
  /**
   * @schema CodeBuildListReportGroupsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: string[];

}

/**
 * Converts an object of type 'CodeBuildListReportGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListReportGroupsOutput(obj: CodeBuildListReportGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'reportGroups': obj.reportGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListReportsInput
 */
export interface CodeBuildListReportsInput {
  /**
   * @schema CodeBuildListReportsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListReportsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListReportsInput#filter
   */
  readonly filter?: CodeBuildReportFilter;

}

/**
 * Converts an object of type 'CodeBuildListReportsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListReportsInput(obj: CodeBuildListReportsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sortOrder': obj.sortOrder,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'filter': toJson_CodeBuildReportFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListReportsOutput
 */
export interface CodeBuildListReportsOutput {
  /**
   * @schema CodeBuildListReportsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsOutput#reports
   */
  readonly reports?: string[];

}

/**
 * Converts an object of type 'CodeBuildListReportsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListReportsOutput(obj: CodeBuildListReportsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'reports': obj.reports?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListReportsForReportGroupInput
 */
export interface CodeBuildListReportsForReportGroupInput {
  /**
   * @schema CodeBuildListReportsForReportGroupInput#reportGroupArn
   */
  readonly reportGroupArn: string;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListReportsForReportGroupInput#filter
   */
  readonly filter?: CodeBuildReportFilter;

}

/**
 * Converts an object of type 'CodeBuildListReportsForReportGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListReportsForReportGroupInput(obj: CodeBuildListReportsForReportGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportGroupArn': obj.reportGroupArn,
    'nextToken': obj.nextToken,
    'sortOrder': obj.sortOrder,
    'maxResults': obj.maxResults,
    'filter': toJson_CodeBuildReportFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListReportsForReportGroupOutput
 */
export interface CodeBuildListReportsForReportGroupOutput {
  /**
   * @schema CodeBuildListReportsForReportGroupOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListReportsForReportGroupOutput#reports
   */
  readonly reports?: string[];

}

/**
 * Converts an object of type 'CodeBuildListReportsForReportGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListReportsForReportGroupOutput(obj: CodeBuildListReportsForReportGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'reports': obj.reports?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListSharedProjectsInput
 */
export interface CodeBuildListSharedProjectsInput {
  /**
   * @schema CodeBuildListSharedProjectsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListSharedProjectsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListSharedProjectsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeBuildListSharedProjectsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeBuildListSharedProjectsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListSharedProjectsInput(obj: CodeBuildListSharedProjectsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sortBy': obj.sortBy,
    'sortOrder': obj.sortOrder,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListSharedProjectsOutput
 */
export interface CodeBuildListSharedProjectsOutput {
  /**
   * @schema CodeBuildListSharedProjectsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListSharedProjectsOutput#projects
   */
  readonly projects?: string[];

}

/**
 * Converts an object of type 'CodeBuildListSharedProjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListSharedProjectsOutput(obj: CodeBuildListSharedProjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'projects': obj.projects?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListSharedReportGroupsInput
 */
export interface CodeBuildListSharedReportGroupsInput {
  /**
   * @schema CodeBuildListSharedReportGroupsInput#sortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeBuildListSharedReportGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListSharedReportGroupsInput(obj: CodeBuildListSharedReportGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sortOrder': obj.sortOrder,
    'sortBy': obj.sortBy,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListSharedReportGroupsOutput
 */
export interface CodeBuildListSharedReportGroupsOutput {
  /**
   * @schema CodeBuildListSharedReportGroupsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeBuildListSharedReportGroupsOutput#reportGroups
   */
  readonly reportGroups?: string[];

}

/**
 * Converts an object of type 'CodeBuildListSharedReportGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListSharedReportGroupsOutput(obj: CodeBuildListSharedReportGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'reportGroups': obj.reportGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListSourceCredentialsInput
 */
export interface CodeBuildListSourceCredentialsInput {
}

/**
 * Converts an object of type 'CodeBuildListSourceCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListSourceCredentialsInput(obj: CodeBuildListSourceCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildListSourceCredentialsOutput
 */
export interface CodeBuildListSourceCredentialsOutput {
  /**
   * @schema CodeBuildListSourceCredentialsOutput#sourceCredentialsInfos
   */
  readonly sourceCredentialsInfos?: CodeBuildSourceCredentialsInfo[];

}

/**
 * Converts an object of type 'CodeBuildListSourceCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildListSourceCredentialsOutput(obj: CodeBuildListSourceCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceCredentialsInfos': obj.sourceCredentialsInfos?.map(y => toJson_CodeBuildSourceCredentialsInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildPutResourcePolicyInput
 */
export interface CodeBuildPutResourcePolicyInput {
  /**
   * @schema CodeBuildPutResourcePolicyInput#policy
   */
  readonly policy: string;

  /**
   * @schema CodeBuildPutResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CodeBuildPutResourcePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildPutResourcePolicyInput(obj: CodeBuildPutResourcePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildPutResourcePolicyOutput
 */
export interface CodeBuildPutResourcePolicyOutput {
  /**
   * @schema CodeBuildPutResourcePolicyOutput#resourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'CodeBuildPutResourcePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildPutResourcePolicyOutput(obj: CodeBuildPutResourcePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildRetryBuildInput
 */
export interface CodeBuildRetryBuildInput {
  /**
   * @schema CodeBuildRetryBuildInput#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildRetryBuildInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'CodeBuildRetryBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildRetryBuildInput(obj: CodeBuildRetryBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'idempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildRetryBuildOutput
 */
export interface CodeBuildRetryBuildOutput {
  /**
   * @schema CodeBuildRetryBuildOutput#Build2
   */
  readonly build2?: CodeBuildBuild;

}

/**
 * Converts an object of type 'CodeBuildRetryBuildOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildRetryBuildOutput(obj: CodeBuildRetryBuildOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Build2': toJson_CodeBuildBuild(obj.build2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildRetryBuildBatchInput
 */
export interface CodeBuildRetryBuildBatchInput {
  /**
   * @schema CodeBuildRetryBuildBatchInput#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildRetryBuildBatchInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CodeBuildRetryBuildBatchInput#retryType
   */
  readonly retryType?: string;

}

/**
 * Converts an object of type 'CodeBuildRetryBuildBatchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildRetryBuildBatchInput(obj: CodeBuildRetryBuildBatchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'idempotencyToken': obj.idempotencyToken,
    'retryType': obj.retryType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildRetryBuildBatchOutput
 */
export interface CodeBuildRetryBuildBatchOutput {
  /**
   * @schema CodeBuildRetryBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: CodeBuildBuildBatch;

}

/**
 * Converts an object of type 'CodeBuildRetryBuildBatchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildRetryBuildBatchOutput(obj: CodeBuildRetryBuildBatchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buildBatch': toJson_CodeBuildBuildBatch(obj.buildBatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStartBuildInput
 */
export interface CodeBuildStartBuildInput {
  /**
   * @schema CodeBuildStartBuildInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildStartBuildInput#secondarySourcesOverride
   */
  readonly secondarySourcesOverride?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildStartBuildInput#secondarySourcesVersionOverride
   */
  readonly secondarySourcesVersionOverride?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildStartBuildInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildStartBuildInput#artifactsOverride
   */
  readonly artifactsOverride?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildStartBuildInput#secondaryArtifactsOverride
   */
  readonly secondaryArtifactsOverride?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildStartBuildInput#environmentVariablesOverride
   */
  readonly environmentVariablesOverride?: CodeBuildEnvironmentVariable[];

  /**
   * @schema CodeBuildStartBuildInput#sourceTypeOverride
   */
  readonly sourceTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#sourceLocationOverride
   */
  readonly sourceLocationOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#sourceAuthOverride
   */
  readonly sourceAuthOverride?: CodeBuildSourceAuth;

  /**
   * @schema CodeBuildStartBuildInput#gitCloneDepthOverride
   */
  readonly gitCloneDepthOverride?: number;

  /**
   * @schema CodeBuildStartBuildInput#gitSubmodulesConfigOverride
   */
  readonly gitSubmodulesConfigOverride?: CodeBuildGitSubmodulesConfig;

  /**
   * @schema CodeBuildStartBuildInput#buildspecOverride
   */
  readonly buildspecOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#insecureSslOverride
   */
  readonly insecureSslOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildInput#reportBuildStatusOverride
   */
  readonly reportBuildStatusOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildInput#buildStatusConfigOverride
   */
  readonly buildStatusConfigOverride?: CodeBuildBuildStatusConfig;

  /**
   * @schema CodeBuildStartBuildInput#environmentTypeOverride
   */
  readonly environmentTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#imageOverride
   */
  readonly imageOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#computeTypeOverride
   */
  readonly computeTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#certificateOverride
   */
  readonly certificateOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#cacheOverride
   */
  readonly cacheOverride?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildStartBuildInput#serviceRoleOverride
   */
  readonly serviceRoleOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#privilegedModeOverride
   */
  readonly privilegedModeOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildInput#timeoutInMinutesOverride
   */
  readonly timeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildInput#queuedTimeoutInMinutesOverride
   */
  readonly queuedTimeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildInput#encryptionKeyOverride
   */
  readonly encryptionKeyOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CodeBuildStartBuildInput#logsConfigOverride
   */
  readonly logsConfigOverride?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildStartBuildInput#registryCredentialOverride
   */
  readonly registryCredentialOverride?: CodeBuildRegistryCredential;

  /**
   * @schema CodeBuildStartBuildInput#imagePullCredentialsTypeOverride
   */
  readonly imagePullCredentialsTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildInput#debugSessionEnabled
   */
  readonly debugSessionEnabled?: boolean;

}

/**
 * Converts an object of type 'CodeBuildStartBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStartBuildInput(obj: CodeBuildStartBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'secondarySourcesOverride': obj.secondarySourcesOverride?.map(y => toJson_CodeBuildProjectSource(y)),
    'secondarySourcesVersionOverride': obj.secondarySourcesVersionOverride?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'sourceVersion': obj.sourceVersion,
    'artifactsOverride': toJson_CodeBuildProjectArtifacts(obj.artifactsOverride),
    'secondaryArtifactsOverride': obj.secondaryArtifactsOverride?.map(y => toJson_CodeBuildProjectArtifacts(y)),
    'environmentVariablesOverride': obj.environmentVariablesOverride?.map(y => toJson_CodeBuildEnvironmentVariable(y)),
    'sourceTypeOverride': obj.sourceTypeOverride,
    'sourceLocationOverride': obj.sourceLocationOverride,
    'sourceAuthOverride': toJson_CodeBuildSourceAuth(obj.sourceAuthOverride),
    'gitCloneDepthOverride': obj.gitCloneDepthOverride,
    'gitSubmodulesConfigOverride': toJson_CodeBuildGitSubmodulesConfig(obj.gitSubmodulesConfigOverride),
    'buildspecOverride': obj.buildspecOverride,
    'insecureSslOverride': obj.insecureSslOverride,
    'reportBuildStatusOverride': obj.reportBuildStatusOverride,
    'buildStatusConfigOverride': toJson_CodeBuildBuildStatusConfig(obj.buildStatusConfigOverride),
    'environmentTypeOverride': obj.environmentTypeOverride,
    'imageOverride': obj.imageOverride,
    'computeTypeOverride': obj.computeTypeOverride,
    'certificateOverride': obj.certificateOverride,
    'cacheOverride': toJson_CodeBuildProjectCache(obj.cacheOverride),
    'serviceRoleOverride': obj.serviceRoleOverride,
    'privilegedModeOverride': obj.privilegedModeOverride,
    'timeoutInMinutesOverride': obj.timeoutInMinutesOverride,
    'queuedTimeoutInMinutesOverride': obj.queuedTimeoutInMinutesOverride,
    'encryptionKeyOverride': obj.encryptionKeyOverride,
    'idempotencyToken': obj.idempotencyToken,
    'logsConfigOverride': toJson_CodeBuildLogsConfig(obj.logsConfigOverride),
    'registryCredentialOverride': toJson_CodeBuildRegistryCredential(obj.registryCredentialOverride),
    'imagePullCredentialsTypeOverride': obj.imagePullCredentialsTypeOverride,
    'debugSessionEnabled': obj.debugSessionEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStartBuildOutput
 */
export interface CodeBuildStartBuildOutput {
  /**
   * @schema CodeBuildStartBuildOutput#Build2
   */
  readonly build2?: CodeBuildBuild;

}

/**
 * Converts an object of type 'CodeBuildStartBuildOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStartBuildOutput(obj: CodeBuildStartBuildOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Build2': toJson_CodeBuildBuild(obj.build2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStartBuildBatchInput
 */
export interface CodeBuildStartBuildBatchInput {
  /**
   * @schema CodeBuildStartBuildBatchInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#secondarySourcesOverride
   */
  readonly secondarySourcesOverride?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildStartBuildBatchInput#secondarySourcesVersionOverride
   */
  readonly secondarySourcesVersionOverride?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#artifactsOverride
   */
  readonly artifactsOverride?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildStartBuildBatchInput#secondaryArtifactsOverride
   */
  readonly secondaryArtifactsOverride?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildStartBuildBatchInput#environmentVariablesOverride
   */
  readonly environmentVariablesOverride?: CodeBuildEnvironmentVariable[];

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceTypeOverride
   */
  readonly sourceTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceLocationOverride
   */
  readonly sourceLocationOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#sourceAuthOverride
   */
  readonly sourceAuthOverride?: CodeBuildSourceAuth;

  /**
   * @schema CodeBuildStartBuildBatchInput#gitCloneDepthOverride
   */
  readonly gitCloneDepthOverride?: number;

  /**
   * @schema CodeBuildStartBuildBatchInput#gitSubmodulesConfigOverride
   */
  readonly gitSubmodulesConfigOverride?: CodeBuildGitSubmodulesConfig;

  /**
   * @schema CodeBuildStartBuildBatchInput#buildspecOverride
   */
  readonly buildspecOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#insecureSslOverride
   */
  readonly insecureSslOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildBatchInput#reportBuildBatchStatusOverride
   */
  readonly reportBuildBatchStatusOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildBatchInput#environmentTypeOverride
   */
  readonly environmentTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#imageOverride
   */
  readonly imageOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#computeTypeOverride
   */
  readonly computeTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#certificateOverride
   */
  readonly certificateOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#cacheOverride
   */
  readonly cacheOverride?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildStartBuildBatchInput#serviceRoleOverride
   */
  readonly serviceRoleOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#privilegedModeOverride
   */
  readonly privilegedModeOverride?: boolean;

  /**
   * @schema CodeBuildStartBuildBatchInput#buildTimeoutInMinutesOverride
   */
  readonly buildTimeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildBatchInput#queuedTimeoutInMinutesOverride
   */
  readonly queuedTimeoutInMinutesOverride?: number;

  /**
   * @schema CodeBuildStartBuildBatchInput#encryptionKeyOverride
   */
  readonly encryptionKeyOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#idempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#logsConfigOverride
   */
  readonly logsConfigOverride?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildStartBuildBatchInput#registryCredentialOverride
   */
  readonly registryCredentialOverride?: CodeBuildRegistryCredential;

  /**
   * @schema CodeBuildStartBuildBatchInput#imagePullCredentialsTypeOverride
   */
  readonly imagePullCredentialsTypeOverride?: string;

  /**
   * @schema CodeBuildStartBuildBatchInput#buildBatchConfigOverride
   */
  readonly buildBatchConfigOverride?: CodeBuildProjectBuildBatchConfig;

  /**
   * @schema CodeBuildStartBuildBatchInput#debugSessionEnabled
   */
  readonly debugSessionEnabled?: boolean;

}

/**
 * Converts an object of type 'CodeBuildStartBuildBatchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStartBuildBatchInput(obj: CodeBuildStartBuildBatchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'secondarySourcesOverride': obj.secondarySourcesOverride?.map(y => toJson_CodeBuildProjectSource(y)),
    'secondarySourcesVersionOverride': obj.secondarySourcesVersionOverride?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'sourceVersion': obj.sourceVersion,
    'artifactsOverride': toJson_CodeBuildProjectArtifacts(obj.artifactsOverride),
    'secondaryArtifactsOverride': obj.secondaryArtifactsOverride?.map(y => toJson_CodeBuildProjectArtifacts(y)),
    'environmentVariablesOverride': obj.environmentVariablesOverride?.map(y => toJson_CodeBuildEnvironmentVariable(y)),
    'sourceTypeOverride': obj.sourceTypeOverride,
    'sourceLocationOverride': obj.sourceLocationOverride,
    'sourceAuthOverride': toJson_CodeBuildSourceAuth(obj.sourceAuthOverride),
    'gitCloneDepthOverride': obj.gitCloneDepthOverride,
    'gitSubmodulesConfigOverride': toJson_CodeBuildGitSubmodulesConfig(obj.gitSubmodulesConfigOverride),
    'buildspecOverride': obj.buildspecOverride,
    'insecureSslOverride': obj.insecureSslOverride,
    'reportBuildBatchStatusOverride': obj.reportBuildBatchStatusOverride,
    'environmentTypeOverride': obj.environmentTypeOverride,
    'imageOverride': obj.imageOverride,
    'computeTypeOverride': obj.computeTypeOverride,
    'certificateOverride': obj.certificateOverride,
    'cacheOverride': toJson_CodeBuildProjectCache(obj.cacheOverride),
    'serviceRoleOverride': obj.serviceRoleOverride,
    'privilegedModeOverride': obj.privilegedModeOverride,
    'buildTimeoutInMinutesOverride': obj.buildTimeoutInMinutesOverride,
    'queuedTimeoutInMinutesOverride': obj.queuedTimeoutInMinutesOverride,
    'encryptionKeyOverride': obj.encryptionKeyOverride,
    'idempotencyToken': obj.idempotencyToken,
    'logsConfigOverride': toJson_CodeBuildLogsConfig(obj.logsConfigOverride),
    'registryCredentialOverride': toJson_CodeBuildRegistryCredential(obj.registryCredentialOverride),
    'imagePullCredentialsTypeOverride': obj.imagePullCredentialsTypeOverride,
    'buildBatchConfigOverride': toJson_CodeBuildProjectBuildBatchConfig(obj.buildBatchConfigOverride),
    'debugSessionEnabled': obj.debugSessionEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStartBuildBatchOutput
 */
export interface CodeBuildStartBuildBatchOutput {
  /**
   * @schema CodeBuildStartBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: CodeBuildBuildBatch;

}

/**
 * Converts an object of type 'CodeBuildStartBuildBatchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStartBuildBatchOutput(obj: CodeBuildStartBuildBatchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buildBatch': toJson_CodeBuildBuildBatch(obj.buildBatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStopBuildInput
 */
export interface CodeBuildStopBuildInput {
  /**
   * @schema CodeBuildStopBuildInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'CodeBuildStopBuildInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStopBuildInput(obj: CodeBuildStopBuildInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStopBuildOutput
 */
export interface CodeBuildStopBuildOutput {
  /**
   * @schema CodeBuildStopBuildOutput#Build2
   */
  readonly build2?: CodeBuildBuild;

}

/**
 * Converts an object of type 'CodeBuildStopBuildOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStopBuildOutput(obj: CodeBuildStopBuildOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Build2': toJson_CodeBuildBuild(obj.build2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStopBuildBatchInput
 */
export interface CodeBuildStopBuildBatchInput {
  /**
   * @schema CodeBuildStopBuildBatchInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'CodeBuildStopBuildBatchInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStopBuildBatchInput(obj: CodeBuildStopBuildBatchInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildStopBuildBatchOutput
 */
export interface CodeBuildStopBuildBatchOutput {
  /**
   * @schema CodeBuildStopBuildBatchOutput#buildBatch
   */
  readonly buildBatch?: CodeBuildBuildBatch;

}

/**
 * Converts an object of type 'CodeBuildStopBuildBatchOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildStopBuildBatchOutput(obj: CodeBuildStopBuildBatchOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'buildBatch': toJson_CodeBuildBuildBatch(obj.buildBatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildUpdateProjectInput
 */
export interface CodeBuildUpdateProjectInput {
  /**
   * @schema CodeBuildUpdateProjectInput#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildUpdateProjectInput#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildUpdateProjectInput#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildUpdateProjectInput#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildUpdateProjectInput#artifacts
   */
  readonly artifacts?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildUpdateProjectInput#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildUpdateProjectInput#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildUpdateProjectInput#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildUpdateProjectInput#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildUpdateProjectInput#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildUpdateProjectInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildUpdateProjectInput#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildUpdateProjectInput#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildUpdateProjectInput#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CodeBuildUpdateProjectInput#logsConfig
   */
  readonly logsConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildUpdateProjectInput#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildUpdateProjectInput#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

  /**
   * @schema CodeBuildUpdateProjectInput#concurrentBuildLimit
   */
  readonly concurrentBuildLimit?: number;

}

/**
 * Converts an object of type 'CodeBuildUpdateProjectInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildUpdateProjectInput(obj: CodeBuildUpdateProjectInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'source': toJson_CodeBuildProjectSource(obj.source),
    'secondarySources': obj.secondarySources?.map(y => toJson_CodeBuildProjectSource(y)),
    'sourceVersion': obj.sourceVersion,
    'secondarySourceVersions': obj.secondarySourceVersions?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'artifacts': toJson_CodeBuildProjectArtifacts(obj.artifacts),
    'secondaryArtifacts': obj.secondaryArtifacts?.map(y => toJson_CodeBuildProjectArtifacts(y)),
    'cache': toJson_CodeBuildProjectCache(obj.cache),
    'environment': toJson_CodeBuildProjectEnvironment(obj.environment),
    'serviceRole': obj.serviceRole,
    'timeoutInMinutes': obj.timeoutInMinutes,
    'queuedTimeoutInMinutes': obj.queuedTimeoutInMinutes,
    'encryptionKey': obj.encryptionKey,
    'tags': obj.tags?.map(y => toJson_CodeBuildTag(y)),
    'vpcConfig': toJson_CodeBuildVpcConfig(obj.vpcConfig),
    'badgeEnabled': obj.badgeEnabled,
    'logsConfig': toJson_CodeBuildLogsConfig(obj.logsConfig),
    'fileSystemLocations': obj.fileSystemLocations?.map(y => toJson_CodeBuildProjectFileSystemLocation(y)),
    'buildBatchConfig': toJson_CodeBuildProjectBuildBatchConfig(obj.buildBatchConfig),
    'concurrentBuildLimit': obj.concurrentBuildLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildUpdateProjectOutput
 */
export interface CodeBuildUpdateProjectOutput {
  /**
   * @schema CodeBuildUpdateProjectOutput#project
   */
  readonly project?: CodeBuildProject;

}

/**
 * Converts an object of type 'CodeBuildUpdateProjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildUpdateProjectOutput(obj: CodeBuildUpdateProjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'project': toJson_CodeBuildProject(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildUpdateReportGroupInput
 */
export interface CodeBuildUpdateReportGroupInput {
  /**
   * @schema CodeBuildUpdateReportGroupInput#arn
   */
  readonly arn: string;

  /**
   * @schema CodeBuildUpdateReportGroupInput#exportConfig
   */
  readonly exportConfig?: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildUpdateReportGroupInput#tags
   */
  readonly tags?: CodeBuildTag[];

}

/**
 * Converts an object of type 'CodeBuildUpdateReportGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildUpdateReportGroupInput(obj: CodeBuildUpdateReportGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'exportConfig': toJson_CodeBuildReportExportConfig(obj.exportConfig),
    'tags': obj.tags?.map(y => toJson_CodeBuildTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildUpdateReportGroupOutput
 */
export interface CodeBuildUpdateReportGroupOutput {
  /**
   * @schema CodeBuildUpdateReportGroupOutput#reportGroup
   */
  readonly reportGroup?: CodeBuildReportGroup;

}

/**
 * Converts an object of type 'CodeBuildUpdateReportGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildUpdateReportGroupOutput(obj: CodeBuildUpdateReportGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportGroup': toJson_CodeBuildReportGroup(obj.reportGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildUpdateWebhookInput
 */
export interface CodeBuildUpdateWebhookInput {
  /**
   * @schema CodeBuildUpdateWebhookInput#projectName
   */
  readonly projectName: string;

  /**
   * @schema CodeBuildUpdateWebhookInput#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CodeBuildUpdateWebhookInput#rotateSecret
   */
  readonly rotateSecret?: boolean;

  /**
   * @schema CodeBuildUpdateWebhookInput#filterGroups
   */
  readonly filterGroups?: CodeBuildWebhookFilter[][];

  /**
   * @schema CodeBuildUpdateWebhookInput#buildType
   */
  readonly buildType?: string;

}

/**
 * Converts an object of type 'CodeBuildUpdateWebhookInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildUpdateWebhookInput(obj: CodeBuildUpdateWebhookInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'branchFilter': obj.branchFilter,
    'rotateSecret': obj.rotateSecret,
    'filterGroups': obj.filterGroups?.map(y => y?.map(y => toJson_CodeBuildWebhookFilter(y))),
    'buildType': obj.buildType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildUpdateWebhookOutput
 */
export interface CodeBuildUpdateWebhookOutput {
  /**
   * @schema CodeBuildUpdateWebhookOutput#webhook
   */
  readonly webhook?: CodeBuildWebhook;

}

/**
 * Converts an object of type 'CodeBuildUpdateWebhookOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildUpdateWebhookOutput(obj: CodeBuildUpdateWebhookOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_CodeBuildWebhook(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildNotDeleted
 */
export interface CodeBuildBuildNotDeleted {
  /**
   * @schema CodeBuildBuildNotDeleted#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildBuildNotDeleted#statusCode
   */
  readonly statusCode?: string;

}

/**
 * Converts an object of type 'CodeBuildBuildNotDeleted' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildNotDeleted(obj: CodeBuildBuildNotDeleted | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'statusCode': obj.statusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildBatch
 */
export interface CodeBuildBuildBatch {
  /**
   * @schema CodeBuildBuildBatch#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildBuildBatch#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildBuildBatch#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuildBatch#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuildBatch#currentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema CodeBuildBuildBatch#buildBatchStatus
   */
  readonly buildBatchStatus?: string;

  /**
   * @schema CodeBuildBuildBatch#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildBuildBatch#resolvedSourceVersion
   */
  readonly resolvedSourceVersion?: string;

  /**
   * @schema CodeBuildBuildBatch#projectName
   */
  readonly projectName?: string;

  /**
   * @schema CodeBuildBuildBatch#phases
   */
  readonly phases?: CodeBuildBuildBatchPhase[];

  /**
   * @schema CodeBuildBuildBatch#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildBuildBatch#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildBuildBatch#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildBuildBatch#artifacts
   */
  readonly artifacts?: CodeBuildBuildArtifacts;

  /**
   * @schema CodeBuildBuildBatch#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildBuildArtifacts[];

  /**
   * @schema CodeBuildBuildBatch#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildBuildBatch#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildBuildBatch#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildBuildBatch#logConfig
   */
  readonly logConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildBuildBatch#buildTimeoutInMinutes
   */
  readonly buildTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuildBatch#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuildBatch#complete
   */
  readonly complete?: boolean;

  /**
   * @schema CodeBuildBuildBatch#initiator
   */
  readonly initiator?: string;

  /**
   * @schema CodeBuildBuildBatch#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildBuildBatch#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildBuildBatch#buildBatchNumber
   */
  readonly buildBatchNumber?: number;

  /**
   * @schema CodeBuildBuildBatch#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildBuildBatch#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

  /**
   * @schema CodeBuildBuildBatch#buildGroups
   */
  readonly buildGroups?: CodeBuildBuildGroup[];

  /**
   * @schema CodeBuildBuildBatch#debugSessionEnabled
   */
  readonly debugSessionEnabled?: boolean;

}

/**
 * Converts an object of type 'CodeBuildBuildBatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildBatch(obj: CodeBuildBuildBatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'currentPhase': obj.currentPhase,
    'buildBatchStatus': obj.buildBatchStatus,
    'sourceVersion': obj.sourceVersion,
    'resolvedSourceVersion': obj.resolvedSourceVersion,
    'projectName': obj.projectName,
    'phases': obj.phases?.map(y => toJson_CodeBuildBuildBatchPhase(y)),
    'source': toJson_CodeBuildProjectSource(obj.source),
    'secondarySources': obj.secondarySources?.map(y => toJson_CodeBuildProjectSource(y)),
    'secondarySourceVersions': obj.secondarySourceVersions?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'artifacts': toJson_CodeBuildBuildArtifacts(obj.artifacts),
    'secondaryArtifacts': obj.secondaryArtifacts?.map(y => toJson_CodeBuildBuildArtifacts(y)),
    'cache': toJson_CodeBuildProjectCache(obj.cache),
    'environment': toJson_CodeBuildProjectEnvironment(obj.environment),
    'serviceRole': obj.serviceRole,
    'logConfig': toJson_CodeBuildLogsConfig(obj.logConfig),
    'buildTimeoutInMinutes': obj.buildTimeoutInMinutes,
    'queuedTimeoutInMinutes': obj.queuedTimeoutInMinutes,
    'complete': obj.complete,
    'initiator': obj.initiator,
    'vpcConfig': toJson_CodeBuildVpcConfig(obj.vpcConfig),
    'encryptionKey': obj.encryptionKey,
    'buildBatchNumber': obj.buildBatchNumber,
    'fileSystemLocations': obj.fileSystemLocations?.map(y => toJson_CodeBuildProjectFileSystemLocation(y)),
    'buildBatchConfig': toJson_CodeBuildProjectBuildBatchConfig(obj.buildBatchConfig),
    'buildGroups': obj.buildGroups?.map(y => toJson_CodeBuildBuildGroup(y)),
    'debugSessionEnabled': obj.debugSessionEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuild
 */
export interface CodeBuildBuild {
  /**
   * @schema CodeBuildBuild#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildBuild#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildBuild#buildNumber
   */
  readonly buildNumber?: number;

  /**
   * @schema CodeBuildBuild#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuild#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuild#currentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema CodeBuildBuild#buildStatus
   */
  readonly buildStatus?: string;

  /**
   * @schema CodeBuildBuild#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildBuild#resolvedSourceVersion
   */
  readonly resolvedSourceVersion?: string;

  /**
   * @schema CodeBuildBuild#projectName
   */
  readonly projectName?: string;

  /**
   * @schema CodeBuildBuild#phases
   */
  readonly phases?: CodeBuildBuildPhase[];

  /**
   * @schema CodeBuildBuild#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildBuild#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildBuild#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildBuild#artifacts
   */
  readonly artifacts?: CodeBuildBuildArtifacts;

  /**
   * @schema CodeBuildBuild#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildBuildArtifacts[];

  /**
   * @schema CodeBuildBuild#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildBuild#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildBuild#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildBuild#logs
   */
  readonly logs?: CodeBuildLogsLocation;

  /**
   * @schema CodeBuildBuild#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuild#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildBuild#buildComplete
   */
  readonly buildComplete?: boolean;

  /**
   * @schema CodeBuildBuild#initiator
   */
  readonly initiator?: string;

  /**
   * @schema CodeBuildBuild#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildBuild#networkInterface
   */
  readonly networkInterface?: CodeBuildNetworkInterface;

  /**
   * @schema CodeBuildBuild#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildBuild#exportedEnvironmentVariables
   */
  readonly exportedEnvironmentVariables?: CodeBuildExportedEnvironmentVariable[];

  /**
   * @schema CodeBuildBuild#reportArns
   */
  readonly reportArns?: string[];

  /**
   * @schema CodeBuildBuild#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildBuild#debugSession
   */
  readonly debugSession?: CodeBuildDebugSession;

  /**
   * @schema CodeBuildBuild#buildBatchArn
   */
  readonly buildBatchArn?: string;

}

/**
 * Converts an object of type 'CodeBuildBuild' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuild(obj: CodeBuildBuild | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'buildNumber': obj.buildNumber,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'currentPhase': obj.currentPhase,
    'buildStatus': obj.buildStatus,
    'sourceVersion': obj.sourceVersion,
    'resolvedSourceVersion': obj.resolvedSourceVersion,
    'projectName': obj.projectName,
    'phases': obj.phases?.map(y => toJson_CodeBuildBuildPhase(y)),
    'source': toJson_CodeBuildProjectSource(obj.source),
    'secondarySources': obj.secondarySources?.map(y => toJson_CodeBuildProjectSource(y)),
    'secondarySourceVersions': obj.secondarySourceVersions?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'artifacts': toJson_CodeBuildBuildArtifacts(obj.artifacts),
    'secondaryArtifacts': obj.secondaryArtifacts?.map(y => toJson_CodeBuildBuildArtifacts(y)),
    'cache': toJson_CodeBuildProjectCache(obj.cache),
    'environment': toJson_CodeBuildProjectEnvironment(obj.environment),
    'serviceRole': obj.serviceRole,
    'logs': toJson_CodeBuildLogsLocation(obj.logs),
    'timeoutInMinutes': obj.timeoutInMinutes,
    'queuedTimeoutInMinutes': obj.queuedTimeoutInMinutes,
    'buildComplete': obj.buildComplete,
    'initiator': obj.initiator,
    'vpcConfig': toJson_CodeBuildVpcConfig(obj.vpcConfig),
    'networkInterface': toJson_CodeBuildNetworkInterface(obj.networkInterface),
    'encryptionKey': obj.encryptionKey,
    'exportedEnvironmentVariables': obj.exportedEnvironmentVariables?.map(y => toJson_CodeBuildExportedEnvironmentVariable(y)),
    'reportArns': obj.reportArns?.map(y => y),
    'fileSystemLocations': obj.fileSystemLocations?.map(y => toJson_CodeBuildProjectFileSystemLocation(y)),
    'debugSession': toJson_CodeBuildDebugSession(obj.debugSession),
    'buildBatchArn': obj.buildBatchArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProject
 */
export interface CodeBuildProject {
  /**
   * @schema CodeBuildProject#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildProject#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildProject#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildProject#source
   */
  readonly source?: CodeBuildProjectSource;

  /**
   * @schema CodeBuildProject#secondarySources
   */
  readonly secondarySources?: CodeBuildProjectSource[];

  /**
   * @schema CodeBuildProject#sourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CodeBuildProject#secondarySourceVersions
   */
  readonly secondarySourceVersions?: CodeBuildProjectSourceVersion[];

  /**
   * @schema CodeBuildProject#artifacts
   */
  readonly artifacts?: CodeBuildProjectArtifacts;

  /**
   * @schema CodeBuildProject#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildProjectArtifacts[];

  /**
   * @schema CodeBuildProject#cache
   */
  readonly cache?: CodeBuildProjectCache;

  /**
   * @schema CodeBuildProject#environment
   */
  readonly environment?: CodeBuildProjectEnvironment;

  /**
   * @schema CodeBuildProject#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildProject#timeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CodeBuildProject#queuedTimeoutInMinutes
   */
  readonly queuedTimeoutInMinutes?: number;

  /**
   * @schema CodeBuildProject#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildProject#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildProject#created
   */
  readonly created?: string;

  /**
   * @schema CodeBuildProject#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema CodeBuildProject#webhook
   */
  readonly webhook?: CodeBuildWebhook;

  /**
   * @schema CodeBuildProject#vpcConfig
   */
  readonly vpcConfig?: CodeBuildVpcConfig;

  /**
   * @schema CodeBuildProject#badge
   */
  readonly badge?: CodeBuildProjectBadge;

  /**
   * @schema CodeBuildProject#logsConfig
   */
  readonly logsConfig?: CodeBuildLogsConfig;

  /**
   * @schema CodeBuildProject#fileSystemLocations
   */
  readonly fileSystemLocations?: CodeBuildProjectFileSystemLocation[];

  /**
   * @schema CodeBuildProject#buildBatchConfig
   */
  readonly buildBatchConfig?: CodeBuildProjectBuildBatchConfig;

  /**
   * @schema CodeBuildProject#concurrentBuildLimit
   */
  readonly concurrentBuildLimit?: number;

}

/**
 * Converts an object of type 'CodeBuildProject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProject(obj: CodeBuildProject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'description': obj.description,
    'source': toJson_CodeBuildProjectSource(obj.source),
    'secondarySources': obj.secondarySources?.map(y => toJson_CodeBuildProjectSource(y)),
    'sourceVersion': obj.sourceVersion,
    'secondarySourceVersions': obj.secondarySourceVersions?.map(y => toJson_CodeBuildProjectSourceVersion(y)),
    'artifacts': toJson_CodeBuildProjectArtifacts(obj.artifacts),
    'secondaryArtifacts': obj.secondaryArtifacts?.map(y => toJson_CodeBuildProjectArtifacts(y)),
    'cache': toJson_CodeBuildProjectCache(obj.cache),
    'environment': toJson_CodeBuildProjectEnvironment(obj.environment),
    'serviceRole': obj.serviceRole,
    'timeoutInMinutes': obj.timeoutInMinutes,
    'queuedTimeoutInMinutes': obj.queuedTimeoutInMinutes,
    'encryptionKey': obj.encryptionKey,
    'tags': obj.tags?.map(y => toJson_CodeBuildTag(y)),
    'created': obj.created,
    'lastModified': obj.lastModified,
    'webhook': toJson_CodeBuildWebhook(obj.webhook),
    'vpcConfig': toJson_CodeBuildVpcConfig(obj.vpcConfig),
    'badge': toJson_CodeBuildProjectBadge(obj.badge),
    'logsConfig': toJson_CodeBuildLogsConfig(obj.logsConfig),
    'fileSystemLocations': obj.fileSystemLocations?.map(y => toJson_CodeBuildProjectFileSystemLocation(y)),
    'buildBatchConfig': toJson_CodeBuildProjectBuildBatchConfig(obj.buildBatchConfig),
    'concurrentBuildLimit': obj.concurrentBuildLimit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildReportGroup
 */
export interface CodeBuildReportGroup {
  /**
   * @schema CodeBuildReportGroup#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildReportGroup#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildReportGroup#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildReportGroup#exportConfig
   */
  readonly exportConfig?: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildReportGroup#created
   */
  readonly created?: string;

  /**
   * @schema CodeBuildReportGroup#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema CodeBuildReportGroup#tags
   */
  readonly tags?: CodeBuildTag[];

  /**
   * @schema CodeBuildReportGroup#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeBuildReportGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildReportGroup(obj: CodeBuildReportGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'exportConfig': toJson_CodeBuildReportExportConfig(obj.exportConfig),
    'created': obj.created,
    'lastModified': obj.lastModified,
    'tags': obj.tags?.map(y => toJson_CodeBuildTag(y)),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildReport
 */
export interface CodeBuildReport {
  /**
   * @schema CodeBuildReport#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildReport#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildReport#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildReport#reportGroupArn
   */
  readonly reportGroupArn?: string;

  /**
   * @schema CodeBuildReport#executionId
   */
  readonly executionId?: string;

  /**
   * @schema CodeBuildReport#status
   */
  readonly status?: string;

  /**
   * @schema CodeBuildReport#created
   */
  readonly created?: string;

  /**
   * @schema CodeBuildReport#expired
   */
  readonly expired?: string;

  /**
   * @schema CodeBuildReport#exportConfig
   */
  readonly exportConfig?: CodeBuildReportExportConfig;

  /**
   * @schema CodeBuildReport#truncated
   */
  readonly truncated?: boolean;

  /**
   * @schema CodeBuildReport#testSummary
   */
  readonly testSummary?: CodeBuildTestReportSummary;

  /**
   * @schema CodeBuildReport#codeCoverageSummary
   */
  readonly codeCoverageSummary?: CodeBuildCodeCoverageReportSummary;

}

/**
 * Converts an object of type 'CodeBuildReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildReport(obj: CodeBuildReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'name': obj.name,
    'reportGroupArn': obj.reportGroupArn,
    'executionId': obj.executionId,
    'status': obj.status,
    'created': obj.created,
    'expired': obj.expired,
    'exportConfig': toJson_CodeBuildReportExportConfig(obj.exportConfig),
    'truncated': obj.truncated,
    'testSummary': toJson_CodeBuildTestReportSummary(obj.testSummary),
    'codeCoverageSummary': toJson_CodeBuildCodeCoverageReportSummary(obj.codeCoverageSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectSource
 */
export interface CodeBuildProjectSource {
  /**
   * @schema CodeBuildProjectSource#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectSource#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectSource#gitCloneDepth
   */
  readonly gitCloneDepth?: number;

  /**
   * @schema CodeBuildProjectSource#gitSubmodulesConfig
   */
  readonly gitSubmodulesConfig?: CodeBuildGitSubmodulesConfig;

  /**
   * @schema CodeBuildProjectSource#buildspec
   */
  readonly buildspec?: string;

  /**
   * @schema CodeBuildProjectSource#auth
   */
  readonly auth?: CodeBuildSourceAuth;

  /**
   * @schema CodeBuildProjectSource#reportBuildStatus
   */
  readonly reportBuildStatus?: boolean;

  /**
   * @schema CodeBuildProjectSource#buildStatusConfig
   */
  readonly buildStatusConfig?: CodeBuildBuildStatusConfig;

  /**
   * @schema CodeBuildProjectSource#insecureSsl
   */
  readonly insecureSsl?: boolean;

  /**
   * @schema CodeBuildProjectSource#sourceIdentifier
   */
  readonly sourceIdentifier?: string;

}

/**
 * Converts an object of type 'CodeBuildProjectSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectSource(obj: CodeBuildProjectSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'location': obj.location,
    'gitCloneDepth': obj.gitCloneDepth,
    'gitSubmodulesConfig': toJson_CodeBuildGitSubmodulesConfig(obj.gitSubmodulesConfig),
    'buildspec': obj.buildspec,
    'auth': toJson_CodeBuildSourceAuth(obj.auth),
    'reportBuildStatus': obj.reportBuildStatus,
    'buildStatusConfig': toJson_CodeBuildBuildStatusConfig(obj.buildStatusConfig),
    'insecureSsl': obj.insecureSsl,
    'sourceIdentifier': obj.sourceIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectSourceVersion
 */
export interface CodeBuildProjectSourceVersion {
  /**
   * @schema CodeBuildProjectSourceVersion#sourceIdentifier
   */
  readonly sourceIdentifier: string;

  /**
   * @schema CodeBuildProjectSourceVersion#sourceVersion
   */
  readonly sourceVersion: string;

}

/**
 * Converts an object of type 'CodeBuildProjectSourceVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectSourceVersion(obj: CodeBuildProjectSourceVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceIdentifier': obj.sourceIdentifier,
    'sourceVersion': obj.sourceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectArtifacts
 */
export interface CodeBuildProjectArtifacts {
  /**
   * @schema CodeBuildProjectArtifacts#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectArtifacts#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectArtifacts#path
   */
  readonly path?: string;

  /**
   * @schema CodeBuildProjectArtifacts#namespaceType
   */
  readonly namespaceType?: string;

  /**
   * @schema CodeBuildProjectArtifacts#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildProjectArtifacts#packaging
   */
  readonly packaging?: string;

  /**
   * @schema CodeBuildProjectArtifacts#overrideArtifactName
   */
  readonly overrideArtifactName?: boolean;

  /**
   * @schema CodeBuildProjectArtifacts#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema CodeBuildProjectArtifacts#artifactIdentifier
   */
  readonly artifactIdentifier?: string;

  /**
   * @schema CodeBuildProjectArtifacts#bucketOwnerAccess
   */
  readonly bucketOwnerAccess?: string;

}

/**
 * Converts an object of type 'CodeBuildProjectArtifacts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectArtifacts(obj: CodeBuildProjectArtifacts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'location': obj.location,
    'path': obj.path,
    'namespaceType': obj.namespaceType,
    'name': obj.name,
    'packaging': obj.packaging,
    'overrideArtifactName': obj.overrideArtifactName,
    'encryptionDisabled': obj.encryptionDisabled,
    'artifactIdentifier': obj.artifactIdentifier,
    'bucketOwnerAccess': obj.bucketOwnerAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectCache
 */
export interface CodeBuildProjectCache {
  /**
   * @schema CodeBuildProjectCache#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectCache#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectCache#modes
   */
  readonly modes?: string[];

}

/**
 * Converts an object of type 'CodeBuildProjectCache' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectCache(obj: CodeBuildProjectCache | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'location': obj.location,
    'modes': obj.modes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectEnvironment
 */
export interface CodeBuildProjectEnvironment {
  /**
   * @schema CodeBuildProjectEnvironment#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildProjectEnvironment#image
   */
  readonly image: string;

  /**
   * @schema CodeBuildProjectEnvironment#computeType
   */
  readonly computeType: string;

  /**
   * @schema CodeBuildProjectEnvironment#environmentVariables
   */
  readonly environmentVariables?: CodeBuildEnvironmentVariable[];

  /**
   * @schema CodeBuildProjectEnvironment#privilegedMode
   */
  readonly privilegedMode?: boolean;

  /**
   * @schema CodeBuildProjectEnvironment#certificate
   */
  readonly certificate?: string;

  /**
   * @schema CodeBuildProjectEnvironment#registryCredential
   */
  readonly registryCredential?: CodeBuildRegistryCredential;

  /**
   * @schema CodeBuildProjectEnvironment#imagePullCredentialsType
   */
  readonly imagePullCredentialsType?: string;

}

/**
 * Converts an object of type 'CodeBuildProjectEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectEnvironment(obj: CodeBuildProjectEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'image': obj.image,
    'computeType': obj.computeType,
    'environmentVariables': obj.environmentVariables?.map(y => toJson_CodeBuildEnvironmentVariable(y)),
    'privilegedMode': obj.privilegedMode,
    'certificate': obj.certificate,
    'registryCredential': toJson_CodeBuildRegistryCredential(obj.registryCredential),
    'imagePullCredentialsType': obj.imagePullCredentialsType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildTag
 */
export interface CodeBuildTag {
  /**
   * @schema CodeBuildTag#key
   */
  readonly key?: string;

  /**
   * @schema CodeBuildTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeBuildTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildTag(obj: CodeBuildTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildVpcConfig
 */
export interface CodeBuildVpcConfig {
  /**
   * @schema CodeBuildVpcConfig#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CodeBuildVpcConfig#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema CodeBuildVpcConfig#securityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'CodeBuildVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildVpcConfig(obj: CodeBuildVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpcId': obj.vpcId,
    'subnets': obj.subnets?.map(y => y),
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildLogsConfig
 */
export interface CodeBuildLogsConfig {
  /**
   * @schema CodeBuildLogsConfig#cloudWatchLogs
   */
  readonly cloudWatchLogs?: CodeBuildCloudWatchLogsConfig;

  /**
   * @schema CodeBuildLogsConfig#s3Logs
   */
  readonly s3Logs?: CodeBuildS3LogsConfig;

}

/**
 * Converts an object of type 'CodeBuildLogsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildLogsConfig(obj: CodeBuildLogsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cloudWatchLogs': toJson_CodeBuildCloudWatchLogsConfig(obj.cloudWatchLogs),
    's3Logs': toJson_CodeBuildS3LogsConfig(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectFileSystemLocation
 */
export interface CodeBuildProjectFileSystemLocation {
  /**
   * @schema CodeBuildProjectFileSystemLocation#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#mountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#identifier
   */
  readonly identifier?: string;

  /**
   * @schema CodeBuildProjectFileSystemLocation#mountOptions
   */
  readonly mountOptions?: string;

}

/**
 * Converts an object of type 'CodeBuildProjectFileSystemLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectFileSystemLocation(obj: CodeBuildProjectFileSystemLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'location': obj.location,
    'mountPoint': obj.mountPoint,
    'identifier': obj.identifier,
    'mountOptions': obj.mountOptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectBuildBatchConfig
 */
export interface CodeBuildProjectBuildBatchConfig {
  /**
   * @schema CodeBuildProjectBuildBatchConfig#serviceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CodeBuildProjectBuildBatchConfig#combineArtifacts
   */
  readonly combineArtifacts?: boolean;

  /**
   * @schema CodeBuildProjectBuildBatchConfig#restrictions
   */
  readonly restrictions?: CodeBuildBatchRestrictions;

  /**
   * @schema CodeBuildProjectBuildBatchConfig#timeoutInMins
   */
  readonly timeoutInMins?: number;

}

/**
 * Converts an object of type 'CodeBuildProjectBuildBatchConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectBuildBatchConfig(obj: CodeBuildProjectBuildBatchConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceRole': obj.serviceRole,
    'combineArtifacts': obj.combineArtifacts,
    'restrictions': toJson_CodeBuildBatchRestrictions(obj.restrictions),
    'timeoutInMins': obj.timeoutInMins,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildReportExportConfig
 */
export interface CodeBuildReportExportConfig {
  /**
   * @schema CodeBuildReportExportConfig#exportConfigType
   */
  readonly exportConfigType?: string;

  /**
   * @schema CodeBuildReportExportConfig#s3Destination
   */
  readonly s3Destination?: CodeBuildS3ReportExportConfig;

}

/**
 * Converts an object of type 'CodeBuildReportExportConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildReportExportConfig(obj: CodeBuildReportExportConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportConfigType': obj.exportConfigType,
    's3Destination': toJson_CodeBuildS3ReportExportConfig(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildWebhookFilter
 */
export interface CodeBuildWebhookFilter {
  /**
   * @schema CodeBuildWebhookFilter#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildWebhookFilter#pattern
   */
  readonly pattern: string;

  /**
   * @schema CodeBuildWebhookFilter#excludeMatchedPattern
   */
  readonly excludeMatchedPattern?: boolean;

}

/**
 * Converts an object of type 'CodeBuildWebhookFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildWebhookFilter(obj: CodeBuildWebhookFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'pattern': obj.pattern,
    'excludeMatchedPattern': obj.excludeMatchedPattern,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildWebhook
 */
export interface CodeBuildWebhook {
  /**
   * @schema CodeBuildWebhook#url
   */
  readonly url?: string;

  /**
   * @schema CodeBuildWebhook#payloadUrl
   */
  readonly payloadUrl?: string;

  /**
   * @schema CodeBuildWebhook#secret
   */
  readonly secret?: string;

  /**
   * @schema CodeBuildWebhook#branchFilter
   */
  readonly branchFilter?: string;

  /**
   * @schema CodeBuildWebhook#filterGroups
   */
  readonly filterGroups?: CodeBuildWebhookFilter[][];

  /**
   * @schema CodeBuildWebhook#buildType
   */
  readonly buildType?: string;

  /**
   * @schema CodeBuildWebhook#lastModifiedSecret
   */
  readonly lastModifiedSecret?: string;

}

/**
 * Converts an object of type 'CodeBuildWebhook' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildWebhook(obj: CodeBuildWebhook | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'url': obj.url,
    'payloadUrl': obj.payloadUrl,
    'secret': obj.secret,
    'branchFilter': obj.branchFilter,
    'filterGroups': obj.filterGroups?.map(y => y?.map(y => toJson_CodeBuildWebhookFilter(y))),
    'buildType': obj.buildType,
    'lastModifiedSecret': obj.lastModifiedSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCodeCoverage
 */
export interface CodeBuildCodeCoverage {
  /**
   * @schema CodeBuildCodeCoverage#id
   */
  readonly id?: string;

  /**
   * @schema CodeBuildCodeCoverage#reportARN
   */
  readonly reportArn?: string;

  /**
   * @schema CodeBuildCodeCoverage#filePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeBuildCodeCoverage#lineCoveragePercentage
   */
  readonly lineCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverage#linesCovered
   */
  readonly linesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverage#linesMissed
   */
  readonly linesMissed?: number;

  /**
   * @schema CodeBuildCodeCoverage#branchCoveragePercentage
   */
  readonly branchCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverage#branchesCovered
   */
  readonly branchesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverage#branchesMissed
   */
  readonly branchesMissed?: number;

  /**
   * @schema CodeBuildCodeCoverage#expired
   */
  readonly expired?: string;

}

/**
 * Converts an object of type 'CodeBuildCodeCoverage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCodeCoverage(obj: CodeBuildCodeCoverage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'reportARN': obj.reportArn,
    'filePath': obj.filePath,
    'lineCoveragePercentage': obj.lineCoveragePercentage,
    'linesCovered': obj.linesCovered,
    'linesMissed': obj.linesMissed,
    'branchCoveragePercentage': obj.branchCoveragePercentage,
    'branchesCovered': obj.branchesCovered,
    'branchesMissed': obj.branchesMissed,
    'expired': obj.expired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildTestCaseFilter
 */
export interface CodeBuildTestCaseFilter {
  /**
   * @schema CodeBuildTestCaseFilter#status
   */
  readonly status?: string;

  /**
   * @schema CodeBuildTestCaseFilter#keyword
   */
  readonly keyword?: string;

}

/**
 * Converts an object of type 'CodeBuildTestCaseFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildTestCaseFilter(obj: CodeBuildTestCaseFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'keyword': obj.keyword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildTestCase
 */
export interface CodeBuildTestCase {
  /**
   * @schema CodeBuildTestCase#reportArn
   */
  readonly reportArn?: string;

  /**
   * @schema CodeBuildTestCase#testRawDataPath
   */
  readonly testRawDataPath?: string;

  /**
   * @schema CodeBuildTestCase#prefix
   */
  readonly prefix?: string;

  /**
   * @schema CodeBuildTestCase#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildTestCase#status
   */
  readonly status?: string;

  /**
   * @schema CodeBuildTestCase#durationInNanoSeconds
   */
  readonly durationInNanoSeconds?: number;

  /**
   * @schema CodeBuildTestCase#message
   */
  readonly message?: string;

  /**
   * @schema CodeBuildTestCase#expired
   */
  readonly expired?: string;

}

/**
 * Converts an object of type 'CodeBuildTestCase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildTestCase(obj: CodeBuildTestCase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportArn': obj.reportArn,
    'testRawDataPath': obj.testRawDataPath,
    'prefix': obj.prefix,
    'name': obj.name,
    'status': obj.status,
    'durationInNanoSeconds': obj.durationInNanoSeconds,
    'message': obj.message,
    'expired': obj.expired,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildReportGroupTrendStats
 */
export interface CodeBuildReportGroupTrendStats {
  /**
   * @schema CodeBuildReportGroupTrendStats#average
   */
  readonly average?: string;

  /**
   * @schema CodeBuildReportGroupTrendStats#max
   */
  readonly max?: string;

  /**
   * @schema CodeBuildReportGroupTrendStats#min
   */
  readonly min?: string;

}

/**
 * Converts an object of type 'CodeBuildReportGroupTrendStats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildReportGroupTrendStats(obj: CodeBuildReportGroupTrendStats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'average': obj.average,
    'max': obj.max,
    'min': obj.min,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildReportWithRawData
 */
export interface CodeBuildReportWithRawData {
  /**
   * @schema CodeBuildReportWithRawData#reportArn
   */
  readonly reportArn?: string;

  /**
   * @schema CodeBuildReportWithRawData#data
   */
  readonly data?: string;

}

/**
 * Converts an object of type 'CodeBuildReportWithRawData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildReportWithRawData(obj: CodeBuildReportWithRawData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reportArn': obj.reportArn,
    'data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildBatchFilter
 */
export interface CodeBuildBuildBatchFilter {
  /**
   * @schema CodeBuildBuildBatchFilter#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeBuildBuildBatchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildBatchFilter(obj: CodeBuildBuildBatchFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildEnvironmentPlatform
 */
export interface CodeBuildEnvironmentPlatform {
  /**
   * @schema CodeBuildEnvironmentPlatform#platform
   */
  readonly platform?: string;

  /**
   * @schema CodeBuildEnvironmentPlatform#languages
   */
  readonly languages?: CodeBuildEnvironmentLanguage[];

}

/**
 * Converts an object of type 'CodeBuildEnvironmentPlatform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildEnvironmentPlatform(obj: CodeBuildEnvironmentPlatform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platform': obj.platform,
    'languages': obj.languages?.map(y => toJson_CodeBuildEnvironmentLanguage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildReportFilter
 */
export interface CodeBuildReportFilter {
  /**
   * @schema CodeBuildReportFilter#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodeBuildReportFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildReportFilter(obj: CodeBuildReportFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildSourceCredentialsInfo
 */
export interface CodeBuildSourceCredentialsInfo {
  /**
   * @schema CodeBuildSourceCredentialsInfo#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildSourceCredentialsInfo#serverType
   */
  readonly serverType?: string;

  /**
   * @schema CodeBuildSourceCredentialsInfo#authType
   */
  readonly authType?: string;

}

/**
 * Converts an object of type 'CodeBuildSourceCredentialsInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildSourceCredentialsInfo(obj: CodeBuildSourceCredentialsInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'serverType': obj.serverType,
    'authType': obj.authType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildEnvironmentVariable
 */
export interface CodeBuildEnvironmentVariable {
  /**
   * @schema CodeBuildEnvironmentVariable#name
   */
  readonly name: string;

  /**
   * @schema CodeBuildEnvironmentVariable#value
   */
  readonly value: string;

  /**
   * @schema CodeBuildEnvironmentVariable#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CodeBuildEnvironmentVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildEnvironmentVariable(obj: CodeBuildEnvironmentVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildSourceAuth
 */
export interface CodeBuildSourceAuth {
  /**
   * @schema CodeBuildSourceAuth#type
   */
  readonly type: string;

  /**
   * @schema CodeBuildSourceAuth#resource
   */
  readonly resource?: string;

}

/**
 * Converts an object of type 'CodeBuildSourceAuth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildSourceAuth(obj: CodeBuildSourceAuth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildGitSubmodulesConfig
 */
export interface CodeBuildGitSubmodulesConfig {
  /**
   * @schema CodeBuildGitSubmodulesConfig#fetchSubmodules
   */
  readonly fetchSubmodules: boolean;

}

/**
 * Converts an object of type 'CodeBuildGitSubmodulesConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildGitSubmodulesConfig(obj: CodeBuildGitSubmodulesConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fetchSubmodules': obj.fetchSubmodules,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildStatusConfig
 */
export interface CodeBuildBuildStatusConfig {
  /**
   * @schema CodeBuildBuildStatusConfig#context
   */
  readonly context?: string;

  /**
   * @schema CodeBuildBuildStatusConfig#targetUrl
   */
  readonly targetUrl?: string;

}

/**
 * Converts an object of type 'CodeBuildBuildStatusConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildStatusConfig(obj: CodeBuildBuildStatusConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'context': obj.context,
    'targetUrl': obj.targetUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildRegistryCredential
 */
export interface CodeBuildRegistryCredential {
  /**
   * @schema CodeBuildRegistryCredential#credential
   */
  readonly credential: string;

  /**
   * @schema CodeBuildRegistryCredential#credentialProvider
   */
  readonly credentialProvider: string;

}

/**
 * Converts an object of type 'CodeBuildRegistryCredential' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildRegistryCredential(obj: CodeBuildRegistryCredential | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'credential': obj.credential,
    'credentialProvider': obj.credentialProvider,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildBatchPhase
 */
export interface CodeBuildBuildBatchPhase {
  /**
   * @schema CodeBuildBuildBatchPhase#phaseType
   */
  readonly phaseType?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#phaseStatus
   */
  readonly phaseStatus?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuildBatchPhase#durationInSeconds
   */
  readonly durationInSeconds?: number;

  /**
   * @schema CodeBuildBuildBatchPhase#contexts
   */
  readonly contexts?: CodeBuildPhaseContext[];

}

/**
 * Converts an object of type 'CodeBuildBuildBatchPhase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildBatchPhase(obj: CodeBuildBuildBatchPhase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'phaseType': obj.phaseType,
    'phaseStatus': obj.phaseStatus,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'durationInSeconds': obj.durationInSeconds,
    'contexts': obj.contexts?.map(y => toJson_CodeBuildPhaseContext(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildArtifacts
 */
export interface CodeBuildBuildArtifacts {
  /**
   * @schema CodeBuildBuildArtifacts#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildBuildArtifacts#sha256sum
   */
  readonly sha256Sum?: string;

  /**
   * @schema CodeBuildBuildArtifacts#md5sum
   */
  readonly md5Sum?: string;

  /**
   * @schema CodeBuildBuildArtifacts#overrideArtifactName
   */
  readonly overrideArtifactName?: boolean;

  /**
   * @schema CodeBuildBuildArtifacts#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema CodeBuildBuildArtifacts#artifactIdentifier
   */
  readonly artifactIdentifier?: string;

  /**
   * @schema CodeBuildBuildArtifacts#bucketOwnerAccess
   */
  readonly bucketOwnerAccess?: string;

}

/**
 * Converts an object of type 'CodeBuildBuildArtifacts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildArtifacts(obj: CodeBuildBuildArtifacts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'sha256sum': obj.sha256Sum,
    'md5sum': obj.md5Sum,
    'overrideArtifactName': obj.overrideArtifactName,
    'encryptionDisabled': obj.encryptionDisabled,
    'artifactIdentifier': obj.artifactIdentifier,
    'bucketOwnerAccess': obj.bucketOwnerAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildGroup
 */
export interface CodeBuildBuildGroup {
  /**
   * @schema CodeBuildBuildGroup#identifier
   */
  readonly identifier?: string;

  /**
   * @schema CodeBuildBuildGroup#dependsOn
   */
  readonly dependsOn?: string[];

  /**
   * @schema CodeBuildBuildGroup#ignoreFailure
   */
  readonly ignoreFailure?: boolean;

  /**
   * @schema CodeBuildBuildGroup#currentBuildSummary
   */
  readonly currentBuildSummary?: CodeBuildBuildSummary;

  /**
   * @schema CodeBuildBuildGroup#priorBuildSummaryList
   */
  readonly priorBuildSummaryList?: CodeBuildBuildSummary[];

}

/**
 * Converts an object of type 'CodeBuildBuildGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildGroup(obj: CodeBuildBuildGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identifier': obj.identifier,
    'dependsOn': obj.dependsOn?.map(y => y),
    'ignoreFailure': obj.ignoreFailure,
    'currentBuildSummary': toJson_CodeBuildBuildSummary(obj.currentBuildSummary),
    'priorBuildSummaryList': obj.priorBuildSummaryList?.map(y => toJson_CodeBuildBuildSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildPhase
 */
export interface CodeBuildBuildPhase {
  /**
   * @schema CodeBuildBuildPhase#phaseType
   */
  readonly phaseType?: string;

  /**
   * @schema CodeBuildBuildPhase#phaseStatus
   */
  readonly phaseStatus?: string;

  /**
   * @schema CodeBuildBuildPhase#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodeBuildBuildPhase#endTime
   */
  readonly endTime?: string;

  /**
   * @schema CodeBuildBuildPhase#durationInSeconds
   */
  readonly durationInSeconds?: number;

  /**
   * @schema CodeBuildBuildPhase#contexts
   */
  readonly contexts?: CodeBuildPhaseContext[];

}

/**
 * Converts an object of type 'CodeBuildBuildPhase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildPhase(obj: CodeBuildBuildPhase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'phaseType': obj.phaseType,
    'phaseStatus': obj.phaseStatus,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'durationInSeconds': obj.durationInSeconds,
    'contexts': obj.contexts?.map(y => toJson_CodeBuildPhaseContext(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildLogsLocation
 */
export interface CodeBuildLogsLocation {
  /**
   * @schema CodeBuildLogsLocation#groupName
   */
  readonly groupName?: string;

  /**
   * @schema CodeBuildLogsLocation#streamName
   */
  readonly streamName?: string;

  /**
   * @schema CodeBuildLogsLocation#deepLink
   */
  readonly deepLink?: string;

  /**
   * @schema CodeBuildLogsLocation#s3DeepLink
   */
  readonly s3DeepLink?: string;

  /**
   * @schema CodeBuildLogsLocation#cloudWatchLogsArn
   */
  readonly cloudWatchLogsArn?: string;

  /**
   * @schema CodeBuildLogsLocation#s3LogsArn
   */
  readonly s3LogsArn?: string;

  /**
   * @schema CodeBuildLogsLocation#cloudWatchLogs
   */
  readonly cloudWatchLogs?: CodeBuildCloudWatchLogsConfig;

  /**
   * @schema CodeBuildLogsLocation#s3Logs
   */
  readonly s3Logs?: CodeBuildS3LogsConfig;

}

/**
 * Converts an object of type 'CodeBuildLogsLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildLogsLocation(obj: CodeBuildLogsLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupName': obj.groupName,
    'streamName': obj.streamName,
    'deepLink': obj.deepLink,
    's3DeepLink': obj.s3DeepLink,
    'cloudWatchLogsArn': obj.cloudWatchLogsArn,
    's3LogsArn': obj.s3LogsArn,
    'cloudWatchLogs': toJson_CodeBuildCloudWatchLogsConfig(obj.cloudWatchLogs),
    's3Logs': toJson_CodeBuildS3LogsConfig(obj.s3Logs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildNetworkInterface
 */
export interface CodeBuildNetworkInterface {
  /**
   * @schema CodeBuildNetworkInterface#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CodeBuildNetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * Converts an object of type 'CodeBuildNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildNetworkInterface(obj: CodeBuildNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnetId': obj.subnetId,
    'networkInterfaceId': obj.networkInterfaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildExportedEnvironmentVariable
 */
export interface CodeBuildExportedEnvironmentVariable {
  /**
   * @schema CodeBuildExportedEnvironmentVariable#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildExportedEnvironmentVariable#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeBuildExportedEnvironmentVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildExportedEnvironmentVariable(obj: CodeBuildExportedEnvironmentVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildDebugSession
 */
export interface CodeBuildDebugSession {
  /**
   * @schema CodeBuildDebugSession#sessionEnabled
   */
  readonly sessionEnabled?: boolean;

  /**
   * @schema CodeBuildDebugSession#sessionTarget
   */
  readonly sessionTarget?: string;

}

/**
 * Converts an object of type 'CodeBuildDebugSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildDebugSession(obj: CodeBuildDebugSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sessionEnabled': obj.sessionEnabled,
    'sessionTarget': obj.sessionTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildProjectBadge
 */
export interface CodeBuildProjectBadge {
  /**
   * @schema CodeBuildProjectBadge#badgeEnabled
   */
  readonly badgeEnabled?: boolean;

  /**
   * @schema CodeBuildProjectBadge#badgeRequestUrl
   */
  readonly badgeRequestUrl?: string;

}

/**
 * Converts an object of type 'CodeBuildProjectBadge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildProjectBadge(obj: CodeBuildProjectBadge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'badgeEnabled': obj.badgeEnabled,
    'badgeRequestUrl': obj.badgeRequestUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildTestReportSummary
 */
export interface CodeBuildTestReportSummary {
  /**
   * @schema CodeBuildTestReportSummary#total
   */
  readonly total: number;

  /**
   * @schema CodeBuildTestReportSummary#statusCounts
   */
  readonly statusCounts: { [key: string]: number };

  /**
   * @schema CodeBuildTestReportSummary#durationInNanoSeconds
   */
  readonly durationInNanoSeconds: number;

}

/**
 * Converts an object of type 'CodeBuildTestReportSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildTestReportSummary(obj: CodeBuildTestReportSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'total': obj.total,
    'statusCounts': ((obj.statusCounts) === undefined) ? undefined : (Object.entries(obj.statusCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'durationInNanoSeconds': obj.durationInNanoSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCodeCoverageReportSummary
 */
export interface CodeBuildCodeCoverageReportSummary {
  /**
   * @schema CodeBuildCodeCoverageReportSummary#lineCoveragePercentage
   */
  readonly lineCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#linesCovered
   */
  readonly linesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#linesMissed
   */
  readonly linesMissed?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#branchCoveragePercentage
   */
  readonly branchCoveragePercentage?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#branchesCovered
   */
  readonly branchesCovered?: number;

  /**
   * @schema CodeBuildCodeCoverageReportSummary#branchesMissed
   */
  readonly branchesMissed?: number;

}

/**
 * Converts an object of type 'CodeBuildCodeCoverageReportSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCodeCoverageReportSummary(obj: CodeBuildCodeCoverageReportSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lineCoveragePercentage': obj.lineCoveragePercentage,
    'linesCovered': obj.linesCovered,
    'linesMissed': obj.linesMissed,
    'branchCoveragePercentage': obj.branchCoveragePercentage,
    'branchesCovered': obj.branchesCovered,
    'branchesMissed': obj.branchesMissed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildCloudWatchLogsConfig
 */
export interface CodeBuildCloudWatchLogsConfig {
  /**
   * @schema CodeBuildCloudWatchLogsConfig#status
   */
  readonly status: string;

  /**
   * @schema CodeBuildCloudWatchLogsConfig#groupName
   */
  readonly groupName?: string;

  /**
   * @schema CodeBuildCloudWatchLogsConfig#streamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'CodeBuildCloudWatchLogsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildCloudWatchLogsConfig(obj: CodeBuildCloudWatchLogsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'groupName': obj.groupName,
    'streamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildS3LogsConfig
 */
export interface CodeBuildS3LogsConfig {
  /**
   * @schema CodeBuildS3LogsConfig#status
   */
  readonly status: string;

  /**
   * @schema CodeBuildS3LogsConfig#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildS3LogsConfig#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

  /**
   * @schema CodeBuildS3LogsConfig#bucketOwnerAccess
   */
  readonly bucketOwnerAccess?: string;

}

/**
 * Converts an object of type 'CodeBuildS3LogsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildS3LogsConfig(obj: CodeBuildS3LogsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'location': obj.location,
    'encryptionDisabled': obj.encryptionDisabled,
    'bucketOwnerAccess': obj.bucketOwnerAccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBatchRestrictions
 */
export interface CodeBuildBatchRestrictions {
  /**
   * @schema CodeBuildBatchRestrictions#maximumBuildsAllowed
   */
  readonly maximumBuildsAllowed?: number;

  /**
   * @schema CodeBuildBatchRestrictions#computeTypesAllowed
   */
  readonly computeTypesAllowed?: string[];

}

/**
 * Converts an object of type 'CodeBuildBatchRestrictions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBatchRestrictions(obj: CodeBuildBatchRestrictions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maximumBuildsAllowed': obj.maximumBuildsAllowed,
    'computeTypesAllowed': obj.computeTypesAllowed?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildS3ReportExportConfig
 */
export interface CodeBuildS3ReportExportConfig {
  /**
   * @schema CodeBuildS3ReportExportConfig#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#bucketOwner
   */
  readonly bucketOwner?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#path
   */
  readonly path?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#packaging
   */
  readonly packaging?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeBuildS3ReportExportConfig#encryptionDisabled
   */
  readonly encryptionDisabled?: boolean;

}

/**
 * Converts an object of type 'CodeBuildS3ReportExportConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildS3ReportExportConfig(obj: CodeBuildS3ReportExportConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'bucketOwner': obj.bucketOwner,
    'path': obj.path,
    'packaging': obj.packaging,
    'encryptionKey': obj.encryptionKey,
    'encryptionDisabled': obj.encryptionDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildEnvironmentLanguage
 */
export interface CodeBuildEnvironmentLanguage {
  /**
   * @schema CodeBuildEnvironmentLanguage#language
   */
  readonly language?: string;

  /**
   * @schema CodeBuildEnvironmentLanguage#images
   */
  readonly images?: CodeBuildEnvironmentImage[];

}

/**
 * Converts an object of type 'CodeBuildEnvironmentLanguage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildEnvironmentLanguage(obj: CodeBuildEnvironmentLanguage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'language': obj.language,
    'images': obj.images?.map(y => toJson_CodeBuildEnvironmentImage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildPhaseContext
 */
export interface CodeBuildPhaseContext {
  /**
   * @schema CodeBuildPhaseContext#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema CodeBuildPhaseContext#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CodeBuildPhaseContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildPhaseContext(obj: CodeBuildPhaseContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statusCode': obj.statusCode,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildBuildSummary
 */
export interface CodeBuildBuildSummary {
  /**
   * @schema CodeBuildBuildSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeBuildBuildSummary#requestedOn
   */
  readonly requestedOn?: string;

  /**
   * @schema CodeBuildBuildSummary#buildStatus
   */
  readonly buildStatus?: string;

  /**
   * @schema CodeBuildBuildSummary#primaryArtifact
   */
  readonly primaryArtifact?: CodeBuildResolvedArtifact;

  /**
   * @schema CodeBuildBuildSummary#secondaryArtifacts
   */
  readonly secondaryArtifacts?: CodeBuildResolvedArtifact[];

}

/**
 * Converts an object of type 'CodeBuildBuildSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildBuildSummary(obj: CodeBuildBuildSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'requestedOn': obj.requestedOn,
    'buildStatus': obj.buildStatus,
    'primaryArtifact': toJson_CodeBuildResolvedArtifact(obj.primaryArtifact),
    'secondaryArtifacts': obj.secondaryArtifacts?.map(y => toJson_CodeBuildResolvedArtifact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildEnvironmentImage
 */
export interface CodeBuildEnvironmentImage {
  /**
   * @schema CodeBuildEnvironmentImage#name
   */
  readonly name?: string;

  /**
   * @schema CodeBuildEnvironmentImage#description
   */
  readonly description?: string;

  /**
   * @schema CodeBuildEnvironmentImage#versions
   */
  readonly versions?: string[];

}

/**
 * Converts an object of type 'CodeBuildEnvironmentImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildEnvironmentImage(obj: CodeBuildEnvironmentImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'versions': obj.versions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeBuildResolvedArtifact
 */
export interface CodeBuildResolvedArtifact {
  /**
   * @schema CodeBuildResolvedArtifact#type
   */
  readonly type?: string;

  /**
   * @schema CodeBuildResolvedArtifact#location
   */
  readonly location?: string;

  /**
   * @schema CodeBuildResolvedArtifact#identifier
   */
  readonly identifier?: string;

}

/**
 * Converts an object of type 'CodeBuildResolvedArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeBuildResolvedArtifact(obj: CodeBuildResolvedArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'location': obj.location,
    'identifier': obj.identifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
