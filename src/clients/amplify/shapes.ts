/**
 * @schema AmplifyCreateAppRequest
 */
export interface AmplifyCreateAppRequest {
  /**
   * @schema AmplifyCreateAppRequest#name
   */
  readonly name: string;

  /**
   * @schema AmplifyCreateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyCreateAppRequest#repository
   */
  readonly repository?: string;

  /**
   * @schema AmplifyCreateAppRequest#platform
   */
  readonly platform?: string;

  /**
   * @schema AmplifyCreateAppRequest#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema AmplifyCreateAppRequest#oauthToken
   */
  readonly oauthToken?: string;

  /**
   * @schema AmplifyCreateAppRequest#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AmplifyCreateAppRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyCreateAppRequest#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyCreateAppRequest#customRules
   */
  readonly customRules?: AmplifyCustomRule[];

  /**
   * @schema AmplifyCreateAppRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyCreateAppRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyCreateAppRequest#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema AmplifyCreateAppRequest#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema AmplifyCreateAppRequest#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema AmplifyCreateAppRequest#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AmplifyAutoBranchCreationConfig;

}

/**
 * Converts an object of type 'AmplifyCreateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateAppRequest(obj: AmplifyCreateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'repository': obj.repository,
    'platform': obj.platform,
    'iamServiceRoleArn': obj.iamServiceRoleArn,
    'oauthToken': obj.oauthToken,
    'accessToken': obj.accessToken,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'enableBranchAutoBuild': obj.enableBranchAutoBuild,
    'enableBranchAutoDeletion': obj.enableBranchAutoDeletion,
    'enableBasicAuth': obj.enableBasicAuth,
    'basicAuthCredentials': obj.basicAuthCredentials,
    'customRules': obj.customRules?.map(y => toJson_AmplifyCustomRule(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'buildSpec': obj.buildSpec,
    'customHeaders': obj.customHeaders,
    'enableAutoBranchCreation': obj.enableAutoBranchCreation,
    'autoBranchCreationPatterns': obj.autoBranchCreationPatterns?.map(y => y),
    'autoBranchCreationConfig': toJson_AmplifyAutoBranchCreationConfig(obj.autoBranchCreationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateAppResult
 */
export interface AmplifyCreateAppResult {
  /**
   * @schema AmplifyCreateAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * Converts an object of type 'AmplifyCreateAppResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateAppResult(obj: AmplifyCreateAppResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'app': toJson_AmplifyApp(obj.app),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateBackendEnvironmentRequest
 */
export interface AmplifyCreateBackendEnvironmentRequest {
  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#stackName
   */
  readonly stackName?: string;

  /**
   * @schema AmplifyCreateBackendEnvironmentRequest#deploymentArtifacts
   */
  readonly deploymentArtifacts?: string;

}

/**
 * Converts an object of type 'AmplifyCreateBackendEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateBackendEnvironmentRequest(obj: AmplifyCreateBackendEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'environmentName': obj.environmentName,
    'stackName': obj.stackName,
    'deploymentArtifacts': obj.deploymentArtifacts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateBackendEnvironmentResult
 */
export interface AmplifyCreateBackendEnvironmentResult {
  /**
   * @schema AmplifyCreateBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: AmplifyBackendEnvironment;

}

/**
 * Converts an object of type 'AmplifyCreateBackendEnvironmentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateBackendEnvironmentResult(obj: AmplifyCreateBackendEnvironmentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendEnvironment': toJson_AmplifyBackendEnvironment(obj.backendEnvironment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateBranchRequest
 */
export interface AmplifyCreateBranchRequest {
  /**
   * @schema AmplifyCreateBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateBranchRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyCreateBranchRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyCreateBranchRequest#stage
   */
  readonly stage?: string;

  /**
   * @schema AmplifyCreateBranchRequest#framework
   */
  readonly framework?: string;

  /**
   * @schema AmplifyCreateBranchRequest#enableNotification
   */
  readonly enableNotification?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyCreateBranchRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyCreateBranchRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyCreateBranchRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyCreateBranchRequest#ttl
   */
  readonly ttl?: string;

  /**
   * @schema AmplifyCreateBranchRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema AmplifyCreateBranchRequest#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AmplifyCreateBranchRequest#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema AmplifyCreateBranchRequest#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * Converts an object of type 'AmplifyCreateBranchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateBranchRequest(obj: AmplifyCreateBranchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'description': obj.description,
    'stage': obj.stage,
    'framework': obj.framework,
    'enableNotification': obj.enableNotification,
    'enableAutoBuild': obj.enableAutoBuild,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'basicAuthCredentials': obj.basicAuthCredentials,
    'enableBasicAuth': obj.enableBasicAuth,
    'enablePerformanceMode': obj.enablePerformanceMode,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'buildSpec': obj.buildSpec,
    'ttl': obj.ttl,
    'displayName': obj.displayName,
    'enablePullRequestPreview': obj.enablePullRequestPreview,
    'pullRequestEnvironmentName': obj.pullRequestEnvironmentName,
    'backendEnvironmentArn': obj.backendEnvironmentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateBranchResult
 */
export interface AmplifyCreateBranchResult {
  /**
   * @schema AmplifyCreateBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * Converts an object of type 'AmplifyCreateBranchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateBranchResult(obj: AmplifyCreateBranchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branch': toJson_AmplifyBranch(obj.branch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateDeploymentRequest
 */
export interface AmplifyCreateDeploymentRequest {
  /**
   * @schema AmplifyCreateDeploymentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateDeploymentRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyCreateDeploymentRequest#fileMap
   */
  readonly fileMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'AmplifyCreateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateDeploymentRequest(obj: AmplifyCreateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'fileMap': ((obj.fileMap) === undefined) ? undefined : (Object.entries(obj.fileMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateDeploymentResult
 */
export interface AmplifyCreateDeploymentResult {
  /**
   * @schema AmplifyCreateDeploymentResult#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyCreateDeploymentResult#fileUploadUrls
   */
  readonly fileUploadUrls: { [key: string]: string };

  /**
   * @schema AmplifyCreateDeploymentResult#zipUploadUrl
   */
  readonly zipUploadUrl: string;

}

/**
 * Converts an object of type 'AmplifyCreateDeploymentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateDeploymentResult(obj: AmplifyCreateDeploymentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'fileUploadUrls': ((obj.fileUploadUrls) === undefined) ? undefined : (Object.entries(obj.fileUploadUrls).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'zipUploadUrl': obj.zipUploadUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateDomainAssociationRequest
 */
export interface AmplifyCreateDomainAssociationRequest {
  /**
   * @schema AmplifyCreateDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateDomainAssociationRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyCreateDomainAssociationRequest#enableAutoSubDomain
   */
  readonly enableAutoSubDomain?: boolean;

  /**
   * @schema AmplifyCreateDomainAssociationRequest#subDomainSettings
   */
  readonly subDomainSettings: AmplifySubDomainSetting[];

  /**
   * @schema AmplifyCreateDomainAssociationRequest#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema AmplifyCreateDomainAssociationRequest#autoSubDomainIAMRole
   */
  readonly autoSubDomainIamRole?: string;

}

/**
 * Converts an object of type 'AmplifyCreateDomainAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateDomainAssociationRequest(obj: AmplifyCreateDomainAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'domainName': obj.domainName,
    'enableAutoSubDomain': obj.enableAutoSubDomain,
    'subDomainSettings': obj.subDomainSettings?.map(y => toJson_AmplifySubDomainSetting(y)),
    'autoSubDomainCreationPatterns': obj.autoSubDomainCreationPatterns?.map(y => y),
    'autoSubDomainIAMRole': obj.autoSubDomainIamRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateDomainAssociationResult
 */
export interface AmplifyCreateDomainAssociationResult {
  /**
   * @schema AmplifyCreateDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * Converts an object of type 'AmplifyCreateDomainAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateDomainAssociationResult(obj: AmplifyCreateDomainAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainAssociation': toJson_AmplifyDomainAssociation(obj.domainAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateWebhookRequest
 */
export interface AmplifyCreateWebhookRequest {
  /**
   * @schema AmplifyCreateWebhookRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyCreateWebhookRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyCreateWebhookRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AmplifyCreateWebhookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateWebhookRequest(obj: AmplifyCreateWebhookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCreateWebhookResult
 */
export interface AmplifyCreateWebhookResult {
  /**
   * @schema AmplifyCreateWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * Converts an object of type 'AmplifyCreateWebhookResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCreateWebhookResult(obj: AmplifyCreateWebhookResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_AmplifyWebhook(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteAppRequest
 */
export interface AmplifyDeleteAppRequest {
  /**
   * @schema AmplifyDeleteAppRequest#appId
   */
  readonly appId: string;

}

/**
 * Converts an object of type 'AmplifyDeleteAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteAppRequest(obj: AmplifyDeleteAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteAppResult
 */
export interface AmplifyDeleteAppResult {
  /**
   * @schema AmplifyDeleteAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * Converts an object of type 'AmplifyDeleteAppResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteAppResult(obj: AmplifyDeleteAppResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'app': toJson_AmplifyApp(obj.app),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteBackendEnvironmentRequest
 */
export interface AmplifyDeleteBackendEnvironmentRequest {
  /**
   * @schema AmplifyDeleteBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

}

/**
 * Converts an object of type 'AmplifyDeleteBackendEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteBackendEnvironmentRequest(obj: AmplifyDeleteBackendEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'environmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteBackendEnvironmentResult
 */
export interface AmplifyDeleteBackendEnvironmentResult {
  /**
   * @schema AmplifyDeleteBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: AmplifyBackendEnvironment;

}

/**
 * Converts an object of type 'AmplifyDeleteBackendEnvironmentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteBackendEnvironmentResult(obj: AmplifyDeleteBackendEnvironmentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendEnvironment': toJson_AmplifyBackendEnvironment(obj.backendEnvironment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteBranchRequest
 */
export interface AmplifyDeleteBranchRequest {
  /**
   * @schema AmplifyDeleteBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteBranchRequest#branchName
   */
  readonly branchName: string;

}

/**
 * Converts an object of type 'AmplifyDeleteBranchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteBranchRequest(obj: AmplifyDeleteBranchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteBranchResult
 */
export interface AmplifyDeleteBranchResult {
  /**
   * @schema AmplifyDeleteBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * Converts an object of type 'AmplifyDeleteBranchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteBranchResult(obj: AmplifyDeleteBranchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branch': toJson_AmplifyBranch(obj.branch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteDomainAssociationRequest
 */
export interface AmplifyDeleteDomainAssociationRequest {
  /**
   * @schema AmplifyDeleteDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteDomainAssociationRequest#domainName
   */
  readonly domainName: string;

}

/**
 * Converts an object of type 'AmplifyDeleteDomainAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteDomainAssociationRequest(obj: AmplifyDeleteDomainAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteDomainAssociationResult
 */
export interface AmplifyDeleteDomainAssociationResult {
  /**
   * @schema AmplifyDeleteDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * Converts an object of type 'AmplifyDeleteDomainAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteDomainAssociationResult(obj: AmplifyDeleteDomainAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainAssociation': toJson_AmplifyDomainAssociation(obj.domainAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteJobRequest
 */
export interface AmplifyDeleteJobRequest {
  /**
   * @schema AmplifyDeleteJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyDeleteJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyDeleteJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'AmplifyDeleteJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteJobRequest(obj: AmplifyDeleteJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteJobResult
 */
export interface AmplifyDeleteJobResult {
  /**
   * @schema AmplifyDeleteJobResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * Converts an object of type 'AmplifyDeleteJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteJobResult(obj: AmplifyDeleteJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobSummary': toJson_AmplifyJobSummary(obj.jobSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteWebhookRequest
 */
export interface AmplifyDeleteWebhookRequest {
  /**
   * @schema AmplifyDeleteWebhookRequest#webhookId
   */
  readonly webhookId: string;

}

/**
 * Converts an object of type 'AmplifyDeleteWebhookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteWebhookRequest(obj: AmplifyDeleteWebhookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhookId': obj.webhookId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDeleteWebhookResult
 */
export interface AmplifyDeleteWebhookResult {
  /**
   * @schema AmplifyDeleteWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * Converts an object of type 'AmplifyDeleteWebhookResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDeleteWebhookResult(obj: AmplifyDeleteWebhookResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_AmplifyWebhook(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGenerateAccessLogsRequest
 */
export interface AmplifyGenerateAccessLogsRequest {
  /**
   * @schema AmplifyGenerateAccessLogsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema AmplifyGenerateAccessLogsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AmplifyGenerateAccessLogsRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyGenerateAccessLogsRequest#appId
   */
  readonly appId: string;

}

/**
 * Converts an object of type 'AmplifyGenerateAccessLogsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGenerateAccessLogsRequest(obj: AmplifyGenerateAccessLogsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'domainName': obj.domainName,
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGenerateAccessLogsResult
 */
export interface AmplifyGenerateAccessLogsResult {
  /**
   * @schema AmplifyGenerateAccessLogsResult#logUrl
   */
  readonly logUrl?: string;

}

/**
 * Converts an object of type 'AmplifyGenerateAccessLogsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGenerateAccessLogsResult(obj: AmplifyGenerateAccessLogsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logUrl': obj.logUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetAppRequest
 */
export interface AmplifyGetAppRequest {
  /**
   * @schema AmplifyGetAppRequest#appId
   */
  readonly appId: string;

}

/**
 * Converts an object of type 'AmplifyGetAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetAppRequest(obj: AmplifyGetAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetAppResult
 */
export interface AmplifyGetAppResult {
  /**
   * @schema AmplifyGetAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * Converts an object of type 'AmplifyGetAppResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetAppResult(obj: AmplifyGetAppResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'app': toJson_AmplifyApp(obj.app),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetArtifactUrlRequest
 */
export interface AmplifyGetArtifactUrlRequest {
  /**
   * @schema AmplifyGetArtifactUrlRequest#artifactId
   */
  readonly artifactId: string;

}

/**
 * Converts an object of type 'AmplifyGetArtifactUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetArtifactUrlRequest(obj: AmplifyGetArtifactUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'artifactId': obj.artifactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetArtifactUrlResult
 */
export interface AmplifyGetArtifactUrlResult {
  /**
   * @schema AmplifyGetArtifactUrlResult#artifactId
   */
  readonly artifactId: string;

  /**
   * @schema AmplifyGetArtifactUrlResult#artifactUrl
   */
  readonly artifactUrl: string;

}

/**
 * Converts an object of type 'AmplifyGetArtifactUrlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetArtifactUrlResult(obj: AmplifyGetArtifactUrlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'artifactId': obj.artifactId,
    'artifactUrl': obj.artifactUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetBackendEnvironmentRequest
 */
export interface AmplifyGetBackendEnvironmentRequest {
  /**
   * @schema AmplifyGetBackendEnvironmentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetBackendEnvironmentRequest#environmentName
   */
  readonly environmentName: string;

}

/**
 * Converts an object of type 'AmplifyGetBackendEnvironmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetBackendEnvironmentRequest(obj: AmplifyGetBackendEnvironmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'environmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetBackendEnvironmentResult
 */
export interface AmplifyGetBackendEnvironmentResult {
  /**
   * @schema AmplifyGetBackendEnvironmentResult#backendEnvironment
   */
  readonly backendEnvironment: AmplifyBackendEnvironment;

}

/**
 * Converts an object of type 'AmplifyGetBackendEnvironmentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetBackendEnvironmentResult(obj: AmplifyGetBackendEnvironmentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendEnvironment': toJson_AmplifyBackendEnvironment(obj.backendEnvironment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetBranchRequest
 */
export interface AmplifyGetBranchRequest {
  /**
   * @schema AmplifyGetBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetBranchRequest#branchName
   */
  readonly branchName: string;

}

/**
 * Converts an object of type 'AmplifyGetBranchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetBranchRequest(obj: AmplifyGetBranchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetBranchResult
 */
export interface AmplifyGetBranchResult {
  /**
   * @schema AmplifyGetBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * Converts an object of type 'AmplifyGetBranchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetBranchResult(obj: AmplifyGetBranchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branch': toJson_AmplifyBranch(obj.branch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetDomainAssociationRequest
 */
export interface AmplifyGetDomainAssociationRequest {
  /**
   * @schema AmplifyGetDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetDomainAssociationRequest#domainName
   */
  readonly domainName: string;

}

/**
 * Converts an object of type 'AmplifyGetDomainAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetDomainAssociationRequest(obj: AmplifyGetDomainAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'domainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetDomainAssociationResult
 */
export interface AmplifyGetDomainAssociationResult {
  /**
   * @schema AmplifyGetDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * Converts an object of type 'AmplifyGetDomainAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetDomainAssociationResult(obj: AmplifyGetDomainAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainAssociation': toJson_AmplifyDomainAssociation(obj.domainAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetJobRequest
 */
export interface AmplifyGetJobRequest {
  /**
   * @schema AmplifyGetJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyGetJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyGetJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'AmplifyGetJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetJobRequest(obj: AmplifyGetJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetJobResult
 */
export interface AmplifyGetJobResult {
  /**
   * @schema AmplifyGetJobResult#job
   */
  readonly job: AmplifyJob;

}

/**
 * Converts an object of type 'AmplifyGetJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetJobResult(obj: AmplifyGetJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': toJson_AmplifyJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetWebhookRequest
 */
export interface AmplifyGetWebhookRequest {
  /**
   * @schema AmplifyGetWebhookRequest#webhookId
   */
  readonly webhookId: string;

}

/**
 * Converts an object of type 'AmplifyGetWebhookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetWebhookRequest(obj: AmplifyGetWebhookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhookId': obj.webhookId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyGetWebhookResult
 */
export interface AmplifyGetWebhookResult {
  /**
   * @schema AmplifyGetWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * Converts an object of type 'AmplifyGetWebhookResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyGetWebhookResult(obj: AmplifyGetWebhookResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_AmplifyWebhook(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListAppsRequest
 */
export interface AmplifyListAppsRequest {
  /**
   * @schema AmplifyListAppsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListAppsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListAppsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListAppsRequest(obj: AmplifyListAppsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AmplifyListAppsResult
 */
export interface AmplifyListAppsResult {
  /**
   * @schema AmplifyListAppsResult#apps
   */
  readonly apps: AmplifyApp[];

  /**
   * @schema AmplifyListAppsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListAppsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListAppsResult(obj: AmplifyListAppsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apps': obj.apps?.map(y => toJson_AmplifyApp(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListArtifactsRequest
 */
export interface AmplifyListArtifactsRequest {
  /**
   * @schema AmplifyListArtifactsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListArtifactsRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyListArtifactsRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema AmplifyListArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListArtifactsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListArtifactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListArtifactsRequest(obj: AmplifyListArtifactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'jobId': obj.jobId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListArtifactsResult
 */
export interface AmplifyListArtifactsResult {
  /**
   * @schema AmplifyListArtifactsResult#artifacts
   */
  readonly artifacts: AmplifyArtifact[];

  /**
   * @schema AmplifyListArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListArtifactsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListArtifactsResult(obj: AmplifyListArtifactsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'artifacts': obj.artifacts?.map(y => toJson_AmplifyArtifact(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListBackendEnvironmentsRequest
 */
export interface AmplifyListBackendEnvironmentsRequest {
  /**
   * @schema AmplifyListBackendEnvironmentsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListBackendEnvironmentsRequest#environmentName
   */
  readonly environmentName?: string;

  /**
   * @schema AmplifyListBackendEnvironmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListBackendEnvironmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListBackendEnvironmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListBackendEnvironmentsRequest(obj: AmplifyListBackendEnvironmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'environmentName': obj.environmentName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListBackendEnvironmentsResult
 */
export interface AmplifyListBackendEnvironmentsResult {
  /**
   * @schema AmplifyListBackendEnvironmentsResult#backendEnvironments
   */
  readonly backendEnvironments: AmplifyBackendEnvironment[];

  /**
   * @schema AmplifyListBackendEnvironmentsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListBackendEnvironmentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListBackendEnvironmentsResult(obj: AmplifyListBackendEnvironmentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendEnvironments': obj.backendEnvironments?.map(y => toJson_AmplifyBackendEnvironment(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListBranchesRequest
 */
export interface AmplifyListBranchesRequest {
  /**
   * @schema AmplifyListBranchesRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListBranchesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListBranchesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListBranchesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListBranchesRequest(obj: AmplifyListBranchesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListBranchesResult
 */
export interface AmplifyListBranchesResult {
  /**
   * @schema AmplifyListBranchesResult#branches
   */
  readonly branches: AmplifyBranch[];

  /**
   * @schema AmplifyListBranchesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListBranchesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListBranchesResult(obj: AmplifyListBranchesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branches': obj.branches?.map(y => toJson_AmplifyBranch(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListDomainAssociationsRequest
 */
export interface AmplifyListDomainAssociationsRequest {
  /**
   * @schema AmplifyListDomainAssociationsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListDomainAssociationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListDomainAssociationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListDomainAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListDomainAssociationsRequest(obj: AmplifyListDomainAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListDomainAssociationsResult
 */
export interface AmplifyListDomainAssociationsResult {
  /**
   * @schema AmplifyListDomainAssociationsResult#domainAssociations
   */
  readonly domainAssociations: AmplifyDomainAssociation[];

  /**
   * @schema AmplifyListDomainAssociationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListDomainAssociationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListDomainAssociationsResult(obj: AmplifyListDomainAssociationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainAssociations': obj.domainAssociations?.map(y => toJson_AmplifyDomainAssociation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListJobsRequest
 */
export interface AmplifyListJobsRequest {
  /**
   * @schema AmplifyListJobsRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListJobsRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyListJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListJobsRequest(obj: AmplifyListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListJobsResult
 */
export interface AmplifyListJobsResult {
  /**
   * @schema AmplifyListJobsResult#jobSummaries
   */
  readonly jobSummaries: AmplifyJobSummary[];

  /**
   * @schema AmplifyListJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListJobsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListJobsResult(obj: AmplifyListJobsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobSummaries': obj.jobSummaries?.map(y => toJson_AmplifyJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListTagsForResourceRequest
 */
export interface AmplifyListTagsForResourceRequest {
  /**
   * @schema AmplifyListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'AmplifyListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListTagsForResourceRequest(obj: AmplifyListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListTagsForResourceResponse
 */
export interface AmplifyListTagsForResourceResponse {
  /**
   * @schema AmplifyListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AmplifyListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListTagsForResourceResponse(obj: AmplifyListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListWebhooksRequest
 */
export interface AmplifyListWebhooksRequest {
  /**
   * @schema AmplifyListWebhooksRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyListWebhooksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyListWebhooksRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AmplifyListWebhooksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListWebhooksRequest(obj: AmplifyListWebhooksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyListWebhooksResult
 */
export interface AmplifyListWebhooksResult {
  /**
   * @schema AmplifyListWebhooksResult#webhooks
   */
  readonly webhooks: AmplifyWebhook[];

  /**
   * @schema AmplifyListWebhooksResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyListWebhooksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyListWebhooksResult(obj: AmplifyListWebhooksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhooks': obj.webhooks?.map(y => toJson_AmplifyWebhook(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStartDeploymentRequest
 */
export interface AmplifyStartDeploymentRequest {
  /**
   * @schema AmplifyStartDeploymentRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyStartDeploymentRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyStartDeploymentRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyStartDeploymentRequest#sourceUrl
   */
  readonly sourceUrl?: string;

}

/**
 * Converts an object of type 'AmplifyStartDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStartDeploymentRequest(obj: AmplifyStartDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'jobId': obj.jobId,
    'sourceUrl': obj.sourceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStartDeploymentResult
 */
export interface AmplifyStartDeploymentResult {
  /**
   * @schema AmplifyStartDeploymentResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * Converts an object of type 'AmplifyStartDeploymentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStartDeploymentResult(obj: AmplifyStartDeploymentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobSummary': toJson_AmplifyJobSummary(obj.jobSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStartJobRequest
 */
export interface AmplifyStartJobRequest {
  /**
   * @schema AmplifyStartJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyStartJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyStartJobRequest#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyStartJobRequest#jobType
   */
  readonly jobType: string;

  /**
   * @schema AmplifyStartJobRequest#jobReason
   */
  readonly jobReason?: string;

  /**
   * @schema AmplifyStartJobRequest#commitId
   */
  readonly commitId?: string;

  /**
   * @schema AmplifyStartJobRequest#commitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema AmplifyStartJobRequest#commitTime
   */
  readonly commitTime?: string;

}

/**
 * Converts an object of type 'AmplifyStartJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStartJobRequest(obj: AmplifyStartJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'jobId': obj.jobId,
    'jobType': obj.jobType,
    'jobReason': obj.jobReason,
    'commitId': obj.commitId,
    'commitMessage': obj.commitMessage,
    'commitTime': obj.commitTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStartJobResult
 */
export interface AmplifyStartJobResult {
  /**
   * @schema AmplifyStartJobResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * Converts an object of type 'AmplifyStartJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStartJobResult(obj: AmplifyStartJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobSummary': toJson_AmplifyJobSummary(obj.jobSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStopJobRequest
 */
export interface AmplifyStopJobRequest {
  /**
   * @schema AmplifyStopJobRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyStopJobRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyStopJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'AmplifyStopJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStopJobRequest(obj: AmplifyStopJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStopJobResult
 */
export interface AmplifyStopJobResult {
  /**
   * @schema AmplifyStopJobResult#jobSummary
   */
  readonly jobSummary: AmplifyJobSummary;

}

/**
 * Converts an object of type 'AmplifyStopJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStopJobResult(obj: AmplifyStopJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobSummary': toJson_AmplifyJobSummary(obj.jobSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyTagResourceRequest
 */
export interface AmplifyTagResourceRequest {
  /**
   * @schema AmplifyTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AmplifyTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'AmplifyTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyTagResourceRequest(obj: AmplifyTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AmplifyTagResourceResponse
 */
export interface AmplifyTagResourceResponse {
}

/**
 * Converts an object of type 'AmplifyTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyTagResourceResponse(obj: AmplifyTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUntagResourceRequest
 */
export interface AmplifyUntagResourceRequest {
  /**
   * @schema AmplifyUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AmplifyUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'AmplifyUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUntagResourceRequest(obj: AmplifyUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AmplifyUntagResourceResponse
 */
export interface AmplifyUntagResourceResponse {
}

/**
 * Converts an object of type 'AmplifyUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUntagResourceResponse(obj: AmplifyUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateAppRequest
 */
export interface AmplifyUpdateAppRequest {
  /**
   * @schema AmplifyUpdateAppRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyUpdateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema AmplifyUpdateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyUpdateAppRequest#platform
   */
  readonly platform?: string;

  /**
   * @schema AmplifyUpdateAppRequest#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema AmplifyUpdateAppRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyUpdateAppRequest#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyUpdateAppRequest#customRules
   */
  readonly customRules?: AmplifyCustomRule[];

  /**
   * @schema AmplifyUpdateAppRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyUpdateAppRequest#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema AmplifyUpdateAppRequest#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema AmplifyUpdateAppRequest#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema AmplifyUpdateAppRequest#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AmplifyAutoBranchCreationConfig;

  /**
   * @schema AmplifyUpdateAppRequest#repository
   */
  readonly repository?: string;

  /**
   * @schema AmplifyUpdateAppRequest#oauthToken
   */
  readonly oauthToken?: string;

  /**
   * @schema AmplifyUpdateAppRequest#accessToken
   */
  readonly accessToken?: string;

}

/**
 * Converts an object of type 'AmplifyUpdateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateAppRequest(obj: AmplifyUpdateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'name': obj.name,
    'description': obj.description,
    'platform': obj.platform,
    'iamServiceRoleArn': obj.iamServiceRoleArn,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'enableBranchAutoBuild': obj.enableBranchAutoBuild,
    'enableBranchAutoDeletion': obj.enableBranchAutoDeletion,
    'enableBasicAuth': obj.enableBasicAuth,
    'basicAuthCredentials': obj.basicAuthCredentials,
    'customRules': obj.customRules?.map(y => toJson_AmplifyCustomRule(y)),
    'buildSpec': obj.buildSpec,
    'customHeaders': obj.customHeaders,
    'enableAutoBranchCreation': obj.enableAutoBranchCreation,
    'autoBranchCreationPatterns': obj.autoBranchCreationPatterns?.map(y => y),
    'autoBranchCreationConfig': toJson_AmplifyAutoBranchCreationConfig(obj.autoBranchCreationConfig),
    'repository': obj.repository,
    'oauthToken': obj.oauthToken,
    'accessToken': obj.accessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateAppResult
 */
export interface AmplifyUpdateAppResult {
  /**
   * @schema AmplifyUpdateAppResult#app
   */
  readonly app: AmplifyApp;

}

/**
 * Converts an object of type 'AmplifyUpdateAppResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateAppResult(obj: AmplifyUpdateAppResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'app': toJson_AmplifyApp(obj.app),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateBranchRequest
 */
export interface AmplifyUpdateBranchRequest {
  /**
   * @schema AmplifyUpdateBranchRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyUpdateBranchRequest#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyUpdateBranchRequest#description
   */
  readonly description?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#framework
   */
  readonly framework?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#stage
   */
  readonly stage?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#enableNotification
   */
  readonly enableNotification?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyUpdateBranchRequest#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#ttl
   */
  readonly ttl?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AmplifyUpdateBranchRequest#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema AmplifyUpdateBranchRequest#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * Converts an object of type 'AmplifyUpdateBranchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateBranchRequest(obj: AmplifyUpdateBranchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'branchName': obj.branchName,
    'description': obj.description,
    'framework': obj.framework,
    'stage': obj.stage,
    'enableNotification': obj.enableNotification,
    'enableAutoBuild': obj.enableAutoBuild,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'basicAuthCredentials': obj.basicAuthCredentials,
    'enableBasicAuth': obj.enableBasicAuth,
    'enablePerformanceMode': obj.enablePerformanceMode,
    'buildSpec': obj.buildSpec,
    'ttl': obj.ttl,
    'displayName': obj.displayName,
    'enablePullRequestPreview': obj.enablePullRequestPreview,
    'pullRequestEnvironmentName': obj.pullRequestEnvironmentName,
    'backendEnvironmentArn': obj.backendEnvironmentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateBranchResult
 */
export interface AmplifyUpdateBranchResult {
  /**
   * @schema AmplifyUpdateBranchResult#branch
   */
  readonly branch: AmplifyBranch;

}

/**
 * Converts an object of type 'AmplifyUpdateBranchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateBranchResult(obj: AmplifyUpdateBranchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branch': toJson_AmplifyBranch(obj.branch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateDomainAssociationRequest
 */
export interface AmplifyUpdateDomainAssociationRequest {
  /**
   * @schema AmplifyUpdateDomainAssociationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#enableAutoSubDomain
   */
  readonly enableAutoSubDomain?: boolean;

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#subDomainSettings
   */
  readonly subDomainSettings: AmplifySubDomainSetting[];

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema AmplifyUpdateDomainAssociationRequest#autoSubDomainIAMRole
   */
  readonly autoSubDomainIamRole?: string;

}

/**
 * Converts an object of type 'AmplifyUpdateDomainAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateDomainAssociationRequest(obj: AmplifyUpdateDomainAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'domainName': obj.domainName,
    'enableAutoSubDomain': obj.enableAutoSubDomain,
    'subDomainSettings': obj.subDomainSettings?.map(y => toJson_AmplifySubDomainSetting(y)),
    'autoSubDomainCreationPatterns': obj.autoSubDomainCreationPatterns?.map(y => y),
    'autoSubDomainIAMRole': obj.autoSubDomainIamRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateDomainAssociationResult
 */
export interface AmplifyUpdateDomainAssociationResult {
  /**
   * @schema AmplifyUpdateDomainAssociationResult#domainAssociation
   */
  readonly domainAssociation: AmplifyDomainAssociation;

}

/**
 * Converts an object of type 'AmplifyUpdateDomainAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateDomainAssociationResult(obj: AmplifyUpdateDomainAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainAssociation': toJson_AmplifyDomainAssociation(obj.domainAssociation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateWebhookRequest
 */
export interface AmplifyUpdateWebhookRequest {
  /**
   * @schema AmplifyUpdateWebhookRequest#webhookId
   */
  readonly webhookId: string;

  /**
   * @schema AmplifyUpdateWebhookRequest#branchName
   */
  readonly branchName?: string;

  /**
   * @schema AmplifyUpdateWebhookRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AmplifyUpdateWebhookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateWebhookRequest(obj: AmplifyUpdateWebhookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhookId': obj.webhookId,
    'branchName': obj.branchName,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyUpdateWebhookResult
 */
export interface AmplifyUpdateWebhookResult {
  /**
   * @schema AmplifyUpdateWebhookResult#webhook
   */
  readonly webhook: AmplifyWebhook;

}

/**
 * Converts an object of type 'AmplifyUpdateWebhookResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyUpdateWebhookResult(obj: AmplifyUpdateWebhookResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_AmplifyWebhook(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyCustomRule
 */
export interface AmplifyCustomRule {
  /**
   * @schema AmplifyCustomRule#source
   */
  readonly source: string;

  /**
   * @schema AmplifyCustomRule#target
   */
  readonly target: string;

  /**
   * @schema AmplifyCustomRule#status
   */
  readonly status?: string;

  /**
   * @schema AmplifyCustomRule#condition
   */
  readonly condition?: string;

}

/**
 * Converts an object of type 'AmplifyCustomRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyCustomRule(obj: AmplifyCustomRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'target': obj.target,
    'status': obj.status,
    'condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyAutoBranchCreationConfig
 */
export interface AmplifyAutoBranchCreationConfig {
  /**
   * @schema AmplifyAutoBranchCreationConfig#stage
   */
  readonly stage?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#framework
   */
  readonly framework?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enableAutoBuild
   */
  readonly enableAutoBuild?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema AmplifyAutoBranchCreationConfig#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enableBasicAuth
   */
  readonly enableBasicAuth?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyAutoBranchCreationConfig#enablePullRequestPreview
   */
  readonly enablePullRequestPreview?: boolean;

  /**
   * @schema AmplifyAutoBranchCreationConfig#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

}

/**
 * Converts an object of type 'AmplifyAutoBranchCreationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyAutoBranchCreationConfig(obj: AmplifyAutoBranchCreationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stage': obj.stage,
    'framework': obj.framework,
    'enableAutoBuild': obj.enableAutoBuild,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'basicAuthCredentials': obj.basicAuthCredentials,
    'enableBasicAuth': obj.enableBasicAuth,
    'enablePerformanceMode': obj.enablePerformanceMode,
    'buildSpec': obj.buildSpec,
    'enablePullRequestPreview': obj.enablePullRequestPreview,
    'pullRequestEnvironmentName': obj.pullRequestEnvironmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyApp
 */
export interface AmplifyApp {
  /**
   * @schema AmplifyApp#appId
   */
  readonly appId: string;

  /**
   * @schema AmplifyApp#appArn
   */
  readonly appArn: string;

  /**
   * @schema AmplifyApp#name
   */
  readonly name: string;

  /**
   * @schema AmplifyApp#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyApp#description
   */
  readonly description: string;

  /**
   * @schema AmplifyApp#repository
   */
  readonly repository: string;

  /**
   * @schema AmplifyApp#platform
   */
  readonly platform: string;

  /**
   * @schema AmplifyApp#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyApp#updateTime
   */
  readonly updateTime: string;

  /**
   * @schema AmplifyApp#iamServiceRoleArn
   */
  readonly iamServiceRoleArn?: string;

  /**
   * @schema AmplifyApp#environmentVariables
   */
  readonly environmentVariables: { [key: string]: string };

  /**
   * @schema AmplifyApp#defaultDomain
   */
  readonly defaultDomain: string;

  /**
   * @schema AmplifyApp#enableBranchAutoBuild
   */
  readonly enableBranchAutoBuild: boolean;

  /**
   * @schema AmplifyApp#enableBranchAutoDeletion
   */
  readonly enableBranchAutoDeletion?: boolean;

  /**
   * @schema AmplifyApp#enableBasicAuth
   */
  readonly enableBasicAuth: boolean;

  /**
   * @schema AmplifyApp#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyApp#customRules
   */
  readonly customRules?: AmplifyCustomRule[];

  /**
   * @schema AmplifyApp#productionBranch
   */
  readonly productionBranch?: AmplifyProductionBranch;

  /**
   * @schema AmplifyApp#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyApp#customHeaders
   */
  readonly customHeaders?: string;

  /**
   * @schema AmplifyApp#enableAutoBranchCreation
   */
  readonly enableAutoBranchCreation?: boolean;

  /**
   * @schema AmplifyApp#autoBranchCreationPatterns
   */
  readonly autoBranchCreationPatterns?: string[];

  /**
   * @schema AmplifyApp#autoBranchCreationConfig
   */
  readonly autoBranchCreationConfig?: AmplifyAutoBranchCreationConfig;

}

/**
 * Converts an object of type 'AmplifyApp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyApp(obj: AmplifyApp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'appArn': obj.appArn,
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'description': obj.description,
    'repository': obj.repository,
    'platform': obj.platform,
    'createTime': obj.createTime,
    'updateTime': obj.updateTime,
    'iamServiceRoleArn': obj.iamServiceRoleArn,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'defaultDomain': obj.defaultDomain,
    'enableBranchAutoBuild': obj.enableBranchAutoBuild,
    'enableBranchAutoDeletion': obj.enableBranchAutoDeletion,
    'enableBasicAuth': obj.enableBasicAuth,
    'basicAuthCredentials': obj.basicAuthCredentials,
    'customRules': obj.customRules?.map(y => toJson_AmplifyCustomRule(y)),
    'productionBranch': toJson_AmplifyProductionBranch(obj.productionBranch),
    'buildSpec': obj.buildSpec,
    'customHeaders': obj.customHeaders,
    'enableAutoBranchCreation': obj.enableAutoBranchCreation,
    'autoBranchCreationPatterns': obj.autoBranchCreationPatterns?.map(y => y),
    'autoBranchCreationConfig': toJson_AmplifyAutoBranchCreationConfig(obj.autoBranchCreationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendEnvironment
 */
export interface AmplifyBackendEnvironment {
  /**
   * @schema AmplifyBackendEnvironment#backendEnvironmentArn
   */
  readonly backendEnvironmentArn: string;

  /**
   * @schema AmplifyBackendEnvironment#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema AmplifyBackendEnvironment#stackName
   */
  readonly stackName?: string;

  /**
   * @schema AmplifyBackendEnvironment#deploymentArtifacts
   */
  readonly deploymentArtifacts?: string;

  /**
   * @schema AmplifyBackendEnvironment#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyBackendEnvironment#updateTime
   */
  readonly updateTime: string;

}

/**
 * Converts an object of type 'AmplifyBackendEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendEnvironment(obj: AmplifyBackendEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendEnvironmentArn': obj.backendEnvironmentArn,
    'environmentName': obj.environmentName,
    'stackName': obj.stackName,
    'deploymentArtifacts': obj.deploymentArtifacts,
    'createTime': obj.createTime,
    'updateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBranch
 */
export interface AmplifyBranch {
  /**
   * @schema AmplifyBranch#branchArn
   */
  readonly branchArn: string;

  /**
   * @schema AmplifyBranch#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyBranch#description
   */
  readonly description: string;

  /**
   * @schema AmplifyBranch#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AmplifyBranch#stage
   */
  readonly stage: string;

  /**
   * @schema AmplifyBranch#displayName
   */
  readonly displayName: string;

  /**
   * @schema AmplifyBranch#enableNotification
   */
  readonly enableNotification: boolean;

  /**
   * @schema AmplifyBranch#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyBranch#updateTime
   */
  readonly updateTime: string;

  /**
   * @schema AmplifyBranch#environmentVariables
   */
  readonly environmentVariables: { [key: string]: string };

  /**
   * @schema AmplifyBranch#enableAutoBuild
   */
  readonly enableAutoBuild: boolean;

  /**
   * @schema AmplifyBranch#customDomains
   */
  readonly customDomains: string[];

  /**
   * @schema AmplifyBranch#framework
   */
  readonly framework: string;

  /**
   * @schema AmplifyBranch#activeJobId
   */
  readonly activeJobId: string;

  /**
   * @schema AmplifyBranch#totalNumberOfJobs
   */
  readonly totalNumberOfJobs: string;

  /**
   * @schema AmplifyBranch#enableBasicAuth
   */
  readonly enableBasicAuth: boolean;

  /**
   * @schema AmplifyBranch#enablePerformanceMode
   */
  readonly enablePerformanceMode?: boolean;

  /**
   * @schema AmplifyBranch#thumbnailUrl
   */
  readonly thumbnailUrl?: string;

  /**
   * @schema AmplifyBranch#basicAuthCredentials
   */
  readonly basicAuthCredentials?: string;

  /**
   * @schema AmplifyBranch#buildSpec
   */
  readonly buildSpec?: string;

  /**
   * @schema AmplifyBranch#ttl
   */
  readonly ttl: string;

  /**
   * @schema AmplifyBranch#associatedResources
   */
  readonly associatedResources?: string[];

  /**
   * @schema AmplifyBranch#enablePullRequestPreview
   */
  readonly enablePullRequestPreview: boolean;

  /**
   * @schema AmplifyBranch#pullRequestEnvironmentName
   */
  readonly pullRequestEnvironmentName?: string;

  /**
   * @schema AmplifyBranch#destinationBranch
   */
  readonly destinationBranch?: string;

  /**
   * @schema AmplifyBranch#sourceBranch
   */
  readonly sourceBranch?: string;

  /**
   * @schema AmplifyBranch#backendEnvironmentArn
   */
  readonly backendEnvironmentArn?: string;

}

/**
 * Converts an object of type 'AmplifyBranch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBranch(obj: AmplifyBranch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branchArn': obj.branchArn,
    'branchName': obj.branchName,
    'description': obj.description,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'stage': obj.stage,
    'displayName': obj.displayName,
    'enableNotification': obj.enableNotification,
    'createTime': obj.createTime,
    'updateTime': obj.updateTime,
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'enableAutoBuild': obj.enableAutoBuild,
    'customDomains': obj.customDomains?.map(y => y),
    'framework': obj.framework,
    'activeJobId': obj.activeJobId,
    'totalNumberOfJobs': obj.totalNumberOfJobs,
    'enableBasicAuth': obj.enableBasicAuth,
    'enablePerformanceMode': obj.enablePerformanceMode,
    'thumbnailUrl': obj.thumbnailUrl,
    'basicAuthCredentials': obj.basicAuthCredentials,
    'buildSpec': obj.buildSpec,
    'ttl': obj.ttl,
    'associatedResources': obj.associatedResources?.map(y => y),
    'enablePullRequestPreview': obj.enablePullRequestPreview,
    'pullRequestEnvironmentName': obj.pullRequestEnvironmentName,
    'destinationBranch': obj.destinationBranch,
    'sourceBranch': obj.sourceBranch,
    'backendEnvironmentArn': obj.backendEnvironmentArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifySubDomainSetting
 */
export interface AmplifySubDomainSetting {
  /**
   * @schema AmplifySubDomainSetting#prefix
   */
  readonly prefix: string;

  /**
   * @schema AmplifySubDomainSetting#branchName
   */
  readonly branchName: string;

}

/**
 * Converts an object of type 'AmplifySubDomainSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifySubDomainSetting(obj: AmplifySubDomainSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'prefix': obj.prefix,
    'branchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyDomainAssociation
 */
export interface AmplifyDomainAssociation {
  /**
   * @schema AmplifyDomainAssociation#domainAssociationArn
   */
  readonly domainAssociationArn: string;

  /**
   * @schema AmplifyDomainAssociation#domainName
   */
  readonly domainName: string;

  /**
   * @schema AmplifyDomainAssociation#enableAutoSubDomain
   */
  readonly enableAutoSubDomain: boolean;

  /**
   * @schema AmplifyDomainAssociation#autoSubDomainCreationPatterns
   */
  readonly autoSubDomainCreationPatterns?: string[];

  /**
   * @schema AmplifyDomainAssociation#autoSubDomainIAMRole
   */
  readonly autoSubDomainIamRole?: string;

  /**
   * @schema AmplifyDomainAssociation#domainStatus
   */
  readonly domainStatus: string;

  /**
   * @schema AmplifyDomainAssociation#statusReason
   */
  readonly statusReason: string;

  /**
   * @schema AmplifyDomainAssociation#certificateVerificationDNSRecord
   */
  readonly certificateVerificationDnsRecord?: string;

  /**
   * @schema AmplifyDomainAssociation#subDomains
   */
  readonly subDomains: AmplifySubDomain[];

}

/**
 * Converts an object of type 'AmplifyDomainAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyDomainAssociation(obj: AmplifyDomainAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainAssociationArn': obj.domainAssociationArn,
    'domainName': obj.domainName,
    'enableAutoSubDomain': obj.enableAutoSubDomain,
    'autoSubDomainCreationPatterns': obj.autoSubDomainCreationPatterns?.map(y => y),
    'autoSubDomainIAMRole': obj.autoSubDomainIamRole,
    'domainStatus': obj.domainStatus,
    'statusReason': obj.statusReason,
    'certificateVerificationDNSRecord': obj.certificateVerificationDnsRecord,
    'subDomains': obj.subDomains?.map(y => toJson_AmplifySubDomain(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyWebhook
 */
export interface AmplifyWebhook {
  /**
   * @schema AmplifyWebhook#webhookArn
   */
  readonly webhookArn: string;

  /**
   * @schema AmplifyWebhook#webhookId
   */
  readonly webhookId: string;

  /**
   * @schema AmplifyWebhook#webhookUrl
   */
  readonly webhookUrl: string;

  /**
   * @schema AmplifyWebhook#branchName
   */
  readonly branchName: string;

  /**
   * @schema AmplifyWebhook#description
   */
  readonly description: string;

  /**
   * @schema AmplifyWebhook#createTime
   */
  readonly createTime: string;

  /**
   * @schema AmplifyWebhook#updateTime
   */
  readonly updateTime: string;

}

/**
 * Converts an object of type 'AmplifyWebhook' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyWebhook(obj: AmplifyWebhook | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhookArn': obj.webhookArn,
    'webhookId': obj.webhookId,
    'webhookUrl': obj.webhookUrl,
    'branchName': obj.branchName,
    'description': obj.description,
    'createTime': obj.createTime,
    'updateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyJobSummary
 */
export interface AmplifyJobSummary {
  /**
   * @schema AmplifyJobSummary#jobArn
   */
  readonly jobArn: string;

  /**
   * @schema AmplifyJobSummary#jobId
   */
  readonly jobId: string;

  /**
   * @schema AmplifyJobSummary#commitId
   */
  readonly commitId: string;

  /**
   * @schema AmplifyJobSummary#commitMessage
   */
  readonly commitMessage: string;

  /**
   * @schema AmplifyJobSummary#commitTime
   */
  readonly commitTime: string;

  /**
   * @schema AmplifyJobSummary#startTime
   */
  readonly startTime: string;

  /**
   * @schema AmplifyJobSummary#status
   */
  readonly status: string;

  /**
   * @schema AmplifyJobSummary#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AmplifyJobSummary#jobType
   */
  readonly jobType: string;

}

/**
 * Converts an object of type 'AmplifyJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyJobSummary(obj: AmplifyJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'commitId': obj.commitId,
    'commitMessage': obj.commitMessage,
    'commitTime': obj.commitTime,
    'startTime': obj.startTime,
    'status': obj.status,
    'endTime': obj.endTime,
    'jobType': obj.jobType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyJob
 */
export interface AmplifyJob {
  /**
   * @schema AmplifyJob#summary
   */
  readonly summary: AmplifyJobSummary;

  /**
   * @schema AmplifyJob#steps
   */
  readonly steps: AmplifyStep[];

}

/**
 * Converts an object of type 'AmplifyJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyJob(obj: AmplifyJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': toJson_AmplifyJobSummary(obj.summary),
    'steps': obj.steps?.map(y => toJson_AmplifyStep(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyArtifact
 */
export interface AmplifyArtifact {
  /**
   * @schema AmplifyArtifact#artifactFileName
   */
  readonly artifactFileName: string;

  /**
   * @schema AmplifyArtifact#artifactId
   */
  readonly artifactId: string;

}

/**
 * Converts an object of type 'AmplifyArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyArtifact(obj: AmplifyArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'artifactFileName': obj.artifactFileName,
    'artifactId': obj.artifactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyProductionBranch
 */
export interface AmplifyProductionBranch {
  /**
   * @schema AmplifyProductionBranch#lastDeployTime
   */
  readonly lastDeployTime?: string;

  /**
   * @schema AmplifyProductionBranch#status
   */
  readonly status?: string;

  /**
   * @schema AmplifyProductionBranch#thumbnailUrl
   */
  readonly thumbnailUrl?: string;

  /**
   * @schema AmplifyProductionBranch#branchName
   */
  readonly branchName?: string;

}

/**
 * Converts an object of type 'AmplifyProductionBranch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyProductionBranch(obj: AmplifyProductionBranch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastDeployTime': obj.lastDeployTime,
    'status': obj.status,
    'thumbnailUrl': obj.thumbnailUrl,
    'branchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifySubDomain
 */
export interface AmplifySubDomain {
  /**
   * @schema AmplifySubDomain#subDomainSetting
   */
  readonly subDomainSetting: AmplifySubDomainSetting;

  /**
   * @schema AmplifySubDomain#verified
   */
  readonly verified: boolean;

  /**
   * @schema AmplifySubDomain#dnsRecord
   */
  readonly dnsRecord: string;

}

/**
 * Converts an object of type 'AmplifySubDomain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifySubDomain(obj: AmplifySubDomain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subDomainSetting': toJson_AmplifySubDomainSetting(obj.subDomainSetting),
    'verified': obj.verified,
    'dnsRecord': obj.dnsRecord,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyStep
 */
export interface AmplifyStep {
  /**
   * @schema AmplifyStep#stepName
   */
  readonly stepName: string;

  /**
   * @schema AmplifyStep#startTime
   */
  readonly startTime: string;

  /**
   * @schema AmplifyStep#status
   */
  readonly status: string;

  /**
   * @schema AmplifyStep#endTime
   */
  readonly endTime: string;

  /**
   * @schema AmplifyStep#logUrl
   */
  readonly logUrl?: string;

  /**
   * @schema AmplifyStep#artifactsUrl
   */
  readonly artifactsUrl?: string;

  /**
   * @schema AmplifyStep#testArtifactsUrl
   */
  readonly testArtifactsUrl?: string;

  /**
   * @schema AmplifyStep#testConfigUrl
   */
  readonly testConfigUrl?: string;

  /**
   * @schema AmplifyStep#screenshots
   */
  readonly screenshots?: { [key: string]: string };

  /**
   * @schema AmplifyStep#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema AmplifyStep#context
   */
  readonly context?: string;

}

/**
 * Converts an object of type 'AmplifyStep' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyStep(obj: AmplifyStep | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stepName': obj.stepName,
    'startTime': obj.startTime,
    'status': obj.status,
    'endTime': obj.endTime,
    'logUrl': obj.logUrl,
    'artifactsUrl': obj.artifactsUrl,
    'testArtifactsUrl': obj.testArtifactsUrl,
    'testConfigUrl': obj.testConfigUrl,
    'screenshots': ((obj.screenshots) === undefined) ? undefined : (Object.entries(obj.screenshots).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'statusReason': obj.statusReason,
    'context': obj.context,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
