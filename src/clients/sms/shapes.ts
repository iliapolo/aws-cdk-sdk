/**
 * @schema SmsCreateAppRequest
 */
export interface SmsCreateAppRequest {
  /**
   * @schema SmsCreateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema SmsCreateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsCreateAppRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsCreateAppRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SmsCreateAppRequest#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsCreateAppRequest#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * Converts an object of type 'SmsCreateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsCreateAppRequest(obj: SmsCreateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'roleName': obj.roleName,
    'clientToken': obj.clientToken,
    'serverGroups': obj.serverGroups?.map(y => toJson_SmsServerGroup(y)),
    'tags': obj.tags?.map(y => toJson_SmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsCreateAppResponse
 */
export interface SmsCreateAppResponse {
  /**
   * @schema SmsCreateAppResponse#appSummary
   */
  readonly appSummary?: SmsAppSummary;

  /**
   * @schema SmsCreateAppResponse#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsCreateAppResponse#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * Converts an object of type 'SmsCreateAppResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsCreateAppResponse(obj: SmsCreateAppResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appSummary': toJson_SmsAppSummary(obj.appSummary),
    'serverGroups': obj.serverGroups?.map(y => toJson_SmsServerGroup(y)),
    'tags': obj.tags?.map(y => toJson_SmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsCreateReplicationJobRequest
 */
export interface SmsCreateReplicationJobRequest {
  /**
   * @schema SmsCreateReplicationJobRequest#serverId
   */
  readonly serverId: string;

  /**
   * @schema SmsCreateReplicationJobRequest#seedReplicationTime
   */
  readonly seedReplicationTime: string;

  /**
   * @schema SmsCreateReplicationJobRequest#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsCreateReplicationJobRequest#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema SmsCreateReplicationJobRequest#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsCreateReplicationJobRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsCreateReplicationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsCreateReplicationJobRequest#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsCreateReplicationJobRequest#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsCreateReplicationJobRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'SmsCreateReplicationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsCreateReplicationJobRequest(obj: SmsCreateReplicationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverId': obj.serverId,
    'seedReplicationTime': obj.seedReplicationTime,
    'frequency': obj.frequency,
    'runOnce': obj.runOnce,
    'licenseType': obj.licenseType,
    'roleName': obj.roleName,
    'description': obj.description,
    'numberOfRecentAmisToKeep': obj.numberOfRecentAmisToKeep,
    'encrypted': obj.encrypted,
    'kmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsCreateReplicationJobResponse
 */
export interface SmsCreateReplicationJobResponse {
  /**
   * @schema SmsCreateReplicationJobResponse#replicationJobId
   */
  readonly replicationJobId?: string;

}

/**
 * Converts an object of type 'SmsCreateReplicationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsCreateReplicationJobResponse(obj: SmsCreateReplicationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppRequest
 */
export interface SmsDeleteAppRequest {
  /**
   * @schema SmsDeleteAppRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsDeleteAppRequest#forceStopAppReplication
   */
  readonly forceStopAppReplication?: boolean;

  /**
   * @schema SmsDeleteAppRequest#forceTerminateApp
   */
  readonly forceTerminateApp?: boolean;

}

/**
 * Converts an object of type 'SmsDeleteAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppRequest(obj: SmsDeleteAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'forceStopAppReplication': obj.forceStopAppReplication,
    'forceTerminateApp': obj.forceTerminateApp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppResponse
 */
export interface SmsDeleteAppResponse {
}

/**
 * Converts an object of type 'SmsDeleteAppResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppResponse(obj: SmsDeleteAppResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppLaunchConfigurationRequest
 */
export interface SmsDeleteAppLaunchConfigurationRequest {
  /**
   * @schema SmsDeleteAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsDeleteAppLaunchConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppLaunchConfigurationRequest(obj: SmsDeleteAppLaunchConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppLaunchConfigurationResponse
 */
export interface SmsDeleteAppLaunchConfigurationResponse {
}

/**
 * Converts an object of type 'SmsDeleteAppLaunchConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppLaunchConfigurationResponse(obj: SmsDeleteAppLaunchConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppReplicationConfigurationRequest
 */
export interface SmsDeleteAppReplicationConfigurationRequest {
  /**
   * @schema SmsDeleteAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsDeleteAppReplicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppReplicationConfigurationRequest(obj: SmsDeleteAppReplicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppReplicationConfigurationResponse
 */
export interface SmsDeleteAppReplicationConfigurationResponse {
}

/**
 * Converts an object of type 'SmsDeleteAppReplicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppReplicationConfigurationResponse(obj: SmsDeleteAppReplicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppValidationConfigurationRequest
 */
export interface SmsDeleteAppValidationConfigurationRequest {
  /**
   * @schema SmsDeleteAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

}

/**
 * Converts an object of type 'SmsDeleteAppValidationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppValidationConfigurationRequest(obj: SmsDeleteAppValidationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteAppValidationConfigurationResponse
 */
export interface SmsDeleteAppValidationConfigurationResponse {
}

/**
 * Converts an object of type 'SmsDeleteAppValidationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteAppValidationConfigurationResponse(obj: SmsDeleteAppValidationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteReplicationJobRequest
 */
export interface SmsDeleteReplicationJobRequest {
  /**
   * @schema SmsDeleteReplicationJobRequest#replicationJobId
   */
  readonly replicationJobId: string;

}

/**
 * Converts an object of type 'SmsDeleteReplicationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteReplicationJobRequest(obj: SmsDeleteReplicationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteReplicationJobResponse
 */
export interface SmsDeleteReplicationJobResponse {
}

/**
 * Converts an object of type 'SmsDeleteReplicationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteReplicationJobResponse(obj: SmsDeleteReplicationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteServerCatalogRequest
 */
export interface SmsDeleteServerCatalogRequest {
}

/**
 * Converts an object of type 'SmsDeleteServerCatalogRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteServerCatalogRequest(obj: SmsDeleteServerCatalogRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDeleteServerCatalogResponse
 */
export interface SmsDeleteServerCatalogResponse {
}

/**
 * Converts an object of type 'SmsDeleteServerCatalogResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDeleteServerCatalogResponse(obj: SmsDeleteServerCatalogResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDisassociateConnectorRequest
 */
export interface SmsDisassociateConnectorRequest {
  /**
   * @schema SmsDisassociateConnectorRequest#connectorId
   */
  readonly connectorId: string;

}

/**
 * Converts an object of type 'SmsDisassociateConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDisassociateConnectorRequest(obj: SmsDisassociateConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorId': obj.connectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsDisassociateConnectorResponse
 */
export interface SmsDisassociateConnectorResponse {
}

/**
 * Converts an object of type 'SmsDisassociateConnectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsDisassociateConnectorResponse(obj: SmsDisassociateConnectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGenerateChangeSetRequest
 */
export interface SmsGenerateChangeSetRequest {
  /**
   * @schema SmsGenerateChangeSetRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsGenerateChangeSetRequest#changesetFormat
   */
  readonly changesetFormat?: string;

}

/**
 * Converts an object of type 'SmsGenerateChangeSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGenerateChangeSetRequest(obj: SmsGenerateChangeSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'changesetFormat': obj.changesetFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGenerateChangeSetResponse
 */
export interface SmsGenerateChangeSetResponse {
  /**
   * @schema SmsGenerateChangeSetResponse#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * Converts an object of type 'SmsGenerateChangeSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGenerateChangeSetResponse(obj: SmsGenerateChangeSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Location': toJson_Smss3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGenerateTemplateRequest
 */
export interface SmsGenerateTemplateRequest {
  /**
   * @schema SmsGenerateTemplateRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsGenerateTemplateRequest#templateFormat
   */
  readonly templateFormat?: string;

}

/**
 * Converts an object of type 'SmsGenerateTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGenerateTemplateRequest(obj: SmsGenerateTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'templateFormat': obj.templateFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGenerateTemplateResponse
 */
export interface SmsGenerateTemplateResponse {
  /**
   * @schema SmsGenerateTemplateResponse#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * Converts an object of type 'SmsGenerateTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGenerateTemplateResponse(obj: SmsGenerateTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Location': toJson_Smss3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppRequest
 */
export interface SmsGetAppRequest {
  /**
   * @schema SmsGetAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsGetAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppRequest(obj: SmsGetAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppResponse
 */
export interface SmsGetAppResponse {
  /**
   * @schema SmsGetAppResponse#appSummary
   */
  readonly appSummary?: SmsAppSummary;

  /**
   * @schema SmsGetAppResponse#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsGetAppResponse#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * Converts an object of type 'SmsGetAppResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppResponse(obj: SmsGetAppResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appSummary': toJson_SmsAppSummary(obj.appSummary),
    'serverGroups': obj.serverGroups?.map(y => toJson_SmsServerGroup(y)),
    'tags': obj.tags?.map(y => toJson_SmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppLaunchConfigurationRequest
 */
export interface SmsGetAppLaunchConfigurationRequest {
  /**
   * @schema SmsGetAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsGetAppLaunchConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppLaunchConfigurationRequest(obj: SmsGetAppLaunchConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppLaunchConfigurationResponse
 */
export interface SmsGetAppLaunchConfigurationResponse {
  /**
   * @schema SmsGetAppLaunchConfigurationResponse#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsGetAppLaunchConfigurationResponse#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsGetAppLaunchConfigurationResponse#autoLaunch
   */
  readonly autoLaunch?: boolean;

  /**
   * @schema SmsGetAppLaunchConfigurationResponse#serverGroupLaunchConfigurations
   */
  readonly serverGroupLaunchConfigurations?: SmsServerGroupLaunchConfiguration[];

}

/**
 * Converts an object of type 'SmsGetAppLaunchConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppLaunchConfigurationResponse(obj: SmsGetAppLaunchConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'roleName': obj.roleName,
    'autoLaunch': obj.autoLaunch,
    'serverGroupLaunchConfigurations': obj.serverGroupLaunchConfigurations?.map(y => toJson_SmsServerGroupLaunchConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppReplicationConfigurationRequest
 */
export interface SmsGetAppReplicationConfigurationRequest {
  /**
   * @schema SmsGetAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsGetAppReplicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppReplicationConfigurationRequest(obj: SmsGetAppReplicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppReplicationConfigurationResponse
 */
export interface SmsGetAppReplicationConfigurationResponse {
  /**
   * @schema SmsGetAppReplicationConfigurationResponse#serverGroupReplicationConfigurations
   */
  readonly serverGroupReplicationConfigurations?: SmsServerGroupReplicationConfiguration[];

}

/**
 * Converts an object of type 'SmsGetAppReplicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppReplicationConfigurationResponse(obj: SmsGetAppReplicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverGroupReplicationConfigurations': obj.serverGroupReplicationConfigurations?.map(y => toJson_SmsServerGroupReplicationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppValidationConfigurationRequest
 */
export interface SmsGetAppValidationConfigurationRequest {
  /**
   * @schema SmsGetAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

}

/**
 * Converts an object of type 'SmsGetAppValidationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppValidationConfigurationRequest(obj: SmsGetAppValidationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppValidationConfigurationResponse
 */
export interface SmsGetAppValidationConfigurationResponse {
  /**
   * @schema SmsGetAppValidationConfigurationResponse#appValidationConfigurations
   */
  readonly appValidationConfigurations?: SmsAppValidationConfiguration[];

  /**
   * @schema SmsGetAppValidationConfigurationResponse#serverGroupValidationConfigurations
   */
  readonly serverGroupValidationConfigurations?: SmsServerGroupValidationConfiguration[];

}

/**
 * Converts an object of type 'SmsGetAppValidationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppValidationConfigurationResponse(obj: SmsGetAppValidationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appValidationConfigurations': obj.appValidationConfigurations?.map(y => toJson_SmsAppValidationConfiguration(y)),
    'serverGroupValidationConfigurations': obj.serverGroupValidationConfigurations?.map(y => toJson_SmsServerGroupValidationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppValidationOutputRequest
 */
export interface SmsGetAppValidationOutputRequest {
  /**
   * @schema SmsGetAppValidationOutputRequest#appId
   */
  readonly appId: string;

}

/**
 * Converts an object of type 'SmsGetAppValidationOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppValidationOutputRequest(obj: SmsGetAppValidationOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetAppValidationOutputResponse
 */
export interface SmsGetAppValidationOutputResponse {
  /**
   * @schema SmsGetAppValidationOutputResponse#validationOutputList
   */
  readonly validationOutputList?: SmsValidationOutput[];

}

/**
 * Converts an object of type 'SmsGetAppValidationOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetAppValidationOutputResponse(obj: SmsGetAppValidationOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'validationOutputList': obj.validationOutputList?.map(y => toJson_SmsValidationOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetConnectorsRequest
 */
export interface SmsGetConnectorsRequest {
  /**
   * @schema SmsGetConnectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetConnectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SmsGetConnectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetConnectorsRequest(obj: SmsGetConnectorsRequest | undefined): Record<string, any> | undefined {
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
 * @schema SmsGetConnectorsResponse
 */
export interface SmsGetConnectorsResponse {
  /**
   * @schema SmsGetConnectorsResponse#connectorList
   */
  readonly connectorList?: SmsConnector[];

  /**
   * @schema SmsGetConnectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SmsGetConnectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetConnectorsResponse(obj: SmsGetConnectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorList': obj.connectorList?.map(y => toJson_SmsConnector(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetReplicationJobsRequest
 */
export interface SmsGetReplicationJobsRequest {
  /**
   * @schema SmsGetReplicationJobsRequest#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema SmsGetReplicationJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetReplicationJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SmsGetReplicationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetReplicationJobsRequest(obj: SmsGetReplicationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetReplicationJobsResponse
 */
export interface SmsGetReplicationJobsResponse {
  /**
   * @schema SmsGetReplicationJobsResponse#replicationJobList
   */
  readonly replicationJobList?: SmsReplicationJob[];

  /**
   * @schema SmsGetReplicationJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SmsGetReplicationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetReplicationJobsResponse(obj: SmsGetReplicationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobList': obj.replicationJobList?.map(y => toJson_SmsReplicationJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetReplicationRunsRequest
 */
export interface SmsGetReplicationRunsRequest {
  /**
   * @schema SmsGetReplicationRunsRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema SmsGetReplicationRunsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetReplicationRunsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SmsGetReplicationRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetReplicationRunsRequest(obj: SmsGetReplicationRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetReplicationRunsResponse
 */
export interface SmsGetReplicationRunsResponse {
  /**
   * @schema SmsGetReplicationRunsResponse#replicationJob
   */
  readonly replicationJob?: SmsReplicationJob;

  /**
   * @schema SmsGetReplicationRunsResponse#replicationRunList
   */
  readonly replicationRunList?: SmsReplicationRun[];

  /**
   * @schema SmsGetReplicationRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SmsGetReplicationRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetReplicationRunsResponse(obj: SmsGetReplicationRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJob': toJson_SmsReplicationJob(obj.replicationJob),
    'replicationRunList': obj.replicationRunList?.map(y => toJson_SmsReplicationRun(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetServersRequest
 */
export interface SmsGetServersRequest {
  /**
   * @schema SmsGetServersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsGetServersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SmsGetServersRequest#vmServerAddressList
   */
  readonly vmServerAddressList?: SmsVmServerAddress[];

}

/**
 * Converts an object of type 'SmsGetServersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetServersRequest(obj: SmsGetServersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'vmServerAddressList': obj.vmServerAddressList?.map(y => toJson_SmsVmServerAddress(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsGetServersResponse
 */
export interface SmsGetServersResponse {
  /**
   * @schema SmsGetServersResponse#lastModifiedOn
   */
  readonly lastModifiedOn?: string;

  /**
   * @schema SmsGetServersResponse#serverCatalogStatus
   */
  readonly serverCatalogStatus?: string;

  /**
   * @schema SmsGetServersResponse#serverList
   */
  readonly serverList?: SmsServer[];

  /**
   * @schema SmsGetServersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SmsGetServersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsGetServersResponse(obj: SmsGetServersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastModifiedOn': obj.lastModifiedOn,
    'serverCatalogStatus': obj.serverCatalogStatus,
    'serverList': obj.serverList?.map(y => toJson_SmsServer(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsImportAppCatalogRequest
 */
export interface SmsImportAppCatalogRequest {
  /**
   * @schema SmsImportAppCatalogRequest#roleName
   */
  readonly roleName?: string;

}

/**
 * Converts an object of type 'SmsImportAppCatalogRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsImportAppCatalogRequest(obj: SmsImportAppCatalogRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleName': obj.roleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsImportAppCatalogResponse
 */
export interface SmsImportAppCatalogResponse {
}

/**
 * Converts an object of type 'SmsImportAppCatalogResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsImportAppCatalogResponse(obj: SmsImportAppCatalogResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsImportServerCatalogRequest
 */
export interface SmsImportServerCatalogRequest {
}

/**
 * Converts an object of type 'SmsImportServerCatalogRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsImportServerCatalogRequest(obj: SmsImportServerCatalogRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsImportServerCatalogResponse
 */
export interface SmsImportServerCatalogResponse {
}

/**
 * Converts an object of type 'SmsImportServerCatalogResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsImportServerCatalogResponse(obj: SmsImportServerCatalogResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsLaunchAppRequest
 */
export interface SmsLaunchAppRequest {
  /**
   * @schema SmsLaunchAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsLaunchAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsLaunchAppRequest(obj: SmsLaunchAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsLaunchAppResponse
 */
export interface SmsLaunchAppResponse {
}

/**
 * Converts an object of type 'SmsLaunchAppResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsLaunchAppResponse(obj: SmsLaunchAppResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsListAppsRequest
 */
export interface SmsListAppsRequest {
  /**
   * @schema SmsListAppsRequest#appIds
   */
  readonly appIds?: string[];

  /**
   * @schema SmsListAppsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SmsListAppsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SmsListAppsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsListAppsRequest(obj: SmsListAppsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appIds': obj.appIds?.map(y => y),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsListAppsResponse
 */
export interface SmsListAppsResponse {
  /**
   * @schema SmsListAppsResponse#apps
   */
  readonly apps?: SmsAppSummary[];

  /**
   * @schema SmsListAppsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SmsListAppsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsListAppsResponse(obj: SmsListAppsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apps': obj.apps?.map(y => toJson_SmsAppSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsNotifyAppValidationOutputRequest
 */
export interface SmsNotifyAppValidationOutputRequest {
  /**
   * @schema SmsNotifyAppValidationOutputRequest#appId
   */
  readonly appId: string;

  /**
   * @schema SmsNotifyAppValidationOutputRequest#notificationContext
   */
  readonly notificationContext?: SmsNotificationContext;

}

/**
 * Converts an object of type 'SmsNotifyAppValidationOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsNotifyAppValidationOutputRequest(obj: SmsNotifyAppValidationOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'notificationContext': toJson_SmsNotificationContext(obj.notificationContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsNotifyAppValidationOutputResponse
 */
export interface SmsNotifyAppValidationOutputResponse {
}

/**
 * Converts an object of type 'SmsNotifyAppValidationOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsNotifyAppValidationOutputResponse(obj: SmsNotifyAppValidationOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsPutAppLaunchConfigurationRequest
 */
export interface SmsPutAppLaunchConfigurationRequest {
  /**
   * @schema SmsPutAppLaunchConfigurationRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsPutAppLaunchConfigurationRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsPutAppLaunchConfigurationRequest#autoLaunch
   */
  readonly autoLaunch?: boolean;

  /**
   * @schema SmsPutAppLaunchConfigurationRequest#serverGroupLaunchConfigurations
   */
  readonly serverGroupLaunchConfigurations?: SmsServerGroupLaunchConfiguration[];

}

/**
 * Converts an object of type 'SmsPutAppLaunchConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsPutAppLaunchConfigurationRequest(obj: SmsPutAppLaunchConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'roleName': obj.roleName,
    'autoLaunch': obj.autoLaunch,
    'serverGroupLaunchConfigurations': obj.serverGroupLaunchConfigurations?.map(y => toJson_SmsServerGroupLaunchConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsPutAppLaunchConfigurationResponse
 */
export interface SmsPutAppLaunchConfigurationResponse {
}

/**
 * Converts an object of type 'SmsPutAppLaunchConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsPutAppLaunchConfigurationResponse(obj: SmsPutAppLaunchConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsPutAppReplicationConfigurationRequest
 */
export interface SmsPutAppReplicationConfigurationRequest {
  /**
   * @schema SmsPutAppReplicationConfigurationRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsPutAppReplicationConfigurationRequest#serverGroupReplicationConfigurations
   */
  readonly serverGroupReplicationConfigurations?: SmsServerGroupReplicationConfiguration[];

}

/**
 * Converts an object of type 'SmsPutAppReplicationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsPutAppReplicationConfigurationRequest(obj: SmsPutAppReplicationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'serverGroupReplicationConfigurations': obj.serverGroupReplicationConfigurations?.map(y => toJson_SmsServerGroupReplicationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsPutAppReplicationConfigurationResponse
 */
export interface SmsPutAppReplicationConfigurationResponse {
}

/**
 * Converts an object of type 'SmsPutAppReplicationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsPutAppReplicationConfigurationResponse(obj: SmsPutAppReplicationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsPutAppValidationConfigurationRequest
 */
export interface SmsPutAppValidationConfigurationRequest {
  /**
   * @schema SmsPutAppValidationConfigurationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema SmsPutAppValidationConfigurationRequest#appValidationConfigurations
   */
  readonly appValidationConfigurations?: SmsAppValidationConfiguration[];

  /**
   * @schema SmsPutAppValidationConfigurationRequest#serverGroupValidationConfigurations
   */
  readonly serverGroupValidationConfigurations?: SmsServerGroupValidationConfiguration[];

}

/**
 * Converts an object of type 'SmsPutAppValidationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsPutAppValidationConfigurationRequest(obj: SmsPutAppValidationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'appValidationConfigurations': obj.appValidationConfigurations?.map(y => toJson_SmsAppValidationConfiguration(y)),
    'serverGroupValidationConfigurations': obj.serverGroupValidationConfigurations?.map(y => toJson_SmsServerGroupValidationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsPutAppValidationConfigurationResponse
 */
export interface SmsPutAppValidationConfigurationResponse {
}

/**
 * Converts an object of type 'SmsPutAppValidationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsPutAppValidationConfigurationResponse(obj: SmsPutAppValidationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStartAppReplicationRequest
 */
export interface SmsStartAppReplicationRequest {
  /**
   * @schema SmsStartAppReplicationRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsStartAppReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStartAppReplicationRequest(obj: SmsStartAppReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStartAppReplicationResponse
 */
export interface SmsStartAppReplicationResponse {
}

/**
 * Converts an object of type 'SmsStartAppReplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStartAppReplicationResponse(obj: SmsStartAppReplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStartOnDemandAppReplicationRequest
 */
export interface SmsStartOnDemandAppReplicationRequest {
  /**
   * @schema SmsStartOnDemandAppReplicationRequest#appId
   */
  readonly appId: string;

  /**
   * @schema SmsStartOnDemandAppReplicationRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SmsStartOnDemandAppReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStartOnDemandAppReplicationRequest(obj: SmsStartOnDemandAppReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStartOnDemandAppReplicationResponse
 */
export interface SmsStartOnDemandAppReplicationResponse {
}

/**
 * Converts an object of type 'SmsStartOnDemandAppReplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStartOnDemandAppReplicationResponse(obj: SmsStartOnDemandAppReplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStartOnDemandReplicationRunRequest
 */
export interface SmsStartOnDemandReplicationRunRequest {
  /**
   * @schema SmsStartOnDemandReplicationRunRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema SmsStartOnDemandReplicationRunRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SmsStartOnDemandReplicationRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStartOnDemandReplicationRunRequest(obj: SmsStartOnDemandReplicationRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStartOnDemandReplicationRunResponse
 */
export interface SmsStartOnDemandReplicationRunResponse {
  /**
   * @schema SmsStartOnDemandReplicationRunResponse#replicationRunId
   */
  readonly replicationRunId?: string;

}

/**
 * Converts an object of type 'SmsStartOnDemandReplicationRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStartOnDemandReplicationRunResponse(obj: SmsStartOnDemandReplicationRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationRunId': obj.replicationRunId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStopAppReplicationRequest
 */
export interface SmsStopAppReplicationRequest {
  /**
   * @schema SmsStopAppReplicationRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsStopAppReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStopAppReplicationRequest(obj: SmsStopAppReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsStopAppReplicationResponse
 */
export interface SmsStopAppReplicationResponse {
}

/**
 * Converts an object of type 'SmsStopAppReplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsStopAppReplicationResponse(obj: SmsStopAppReplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsTerminateAppRequest
 */
export interface SmsTerminateAppRequest {
  /**
   * @schema SmsTerminateAppRequest#appId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'SmsTerminateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsTerminateAppRequest(obj: SmsTerminateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsTerminateAppResponse
 */
export interface SmsTerminateAppResponse {
}

/**
 * Converts an object of type 'SmsTerminateAppResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsTerminateAppResponse(obj: SmsTerminateAppResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsUpdateAppRequest
 */
export interface SmsUpdateAppRequest {
  /**
   * @schema SmsUpdateAppRequest#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsUpdateAppRequest#name
   */
  readonly name?: string;

  /**
   * @schema SmsUpdateAppRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsUpdateAppRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsUpdateAppRequest#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsUpdateAppRequest#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * Converts an object of type 'SmsUpdateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsUpdateAppRequest(obj: SmsUpdateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'name': obj.name,
    'description': obj.description,
    'roleName': obj.roleName,
    'serverGroups': obj.serverGroups?.map(y => toJson_SmsServerGroup(y)),
    'tags': obj.tags?.map(y => toJson_SmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsUpdateAppResponse
 */
export interface SmsUpdateAppResponse {
  /**
   * @schema SmsUpdateAppResponse#appSummary
   */
  readonly appSummary?: SmsAppSummary;

  /**
   * @schema SmsUpdateAppResponse#serverGroups
   */
  readonly serverGroups?: SmsServerGroup[];

  /**
   * @schema SmsUpdateAppResponse#tags
   */
  readonly tags?: SmsTag[];

}

/**
 * Converts an object of type 'SmsUpdateAppResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsUpdateAppResponse(obj: SmsUpdateAppResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appSummary': toJson_SmsAppSummary(obj.appSummary),
    'serverGroups': obj.serverGroups?.map(y => toJson_SmsServerGroup(y)),
    'tags': obj.tags?.map(y => toJson_SmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsUpdateReplicationJobRequest
 */
export interface SmsUpdateReplicationJobRequest {
  /**
   * @schema SmsUpdateReplicationJobRequest#replicationJobId
   */
  readonly replicationJobId: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsUpdateReplicationJobRequest#nextReplicationRunStartTime
   */
  readonly nextReplicationRunStartTime?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema SmsUpdateReplicationJobRequest#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsUpdateReplicationJobRequest#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsUpdateReplicationJobRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'SmsUpdateReplicationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsUpdateReplicationJobRequest(obj: SmsUpdateReplicationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
    'frequency': obj.frequency,
    'nextReplicationRunStartTime': obj.nextReplicationRunStartTime,
    'licenseType': obj.licenseType,
    'roleName': obj.roleName,
    'description': obj.description,
    'numberOfRecentAmisToKeep': obj.numberOfRecentAmisToKeep,
    'encrypted': obj.encrypted,
    'kmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsUpdateReplicationJobResponse
 */
export interface SmsUpdateReplicationJobResponse {
}

/**
 * Converts an object of type 'SmsUpdateReplicationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsUpdateReplicationJobResponse(obj: SmsUpdateReplicationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerGroup
 */
export interface SmsServerGroup {
  /**
   * @schema SmsServerGroup#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroup#name
   */
  readonly name?: string;

  /**
   * @schema SmsServerGroup#serverList
   */
  readonly serverList?: SmsServer[];

}

/**
 * Converts an object of type 'SmsServerGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerGroup(obj: SmsServerGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverGroupId': obj.serverGroupId,
    'name': obj.name,
    'serverList': obj.serverList?.map(y => toJson_SmsServer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsTag
 */
export interface SmsTag {
  /**
   * @schema SmsTag#key
   */
  readonly key?: string;

  /**
   * @schema SmsTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SmsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsTag(obj: SmsTag | undefined): Record<string, any> | undefined {
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
 * @schema SmsAppSummary
 */
export interface SmsAppSummary {
  /**
   * @schema SmsAppSummary#appId
   */
  readonly appId?: string;

  /**
   * @schema SmsAppSummary#importedAppId
   */
  readonly importedAppId?: string;

  /**
   * @schema SmsAppSummary#name
   */
  readonly name?: string;

  /**
   * @schema SmsAppSummary#description
   */
  readonly description?: string;

  /**
   * @schema SmsAppSummary#status
   */
  readonly status?: string;

  /**
   * @schema SmsAppSummary#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsAppSummary#replicationConfigurationStatus
   */
  readonly replicationConfigurationStatus?: string;

  /**
   * @schema SmsAppSummary#replicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema SmsAppSummary#replicationStatusMessage
   */
  readonly replicationStatusMessage?: string;

  /**
   * @schema SmsAppSummary#latestReplicationTime
   */
  readonly latestReplicationTime?: string;

  /**
   * @schema SmsAppSummary#launchConfigurationStatus
   */
  readonly launchConfigurationStatus?: string;

  /**
   * @schema SmsAppSummary#launchStatus
   */
  readonly launchStatus?: string;

  /**
   * @schema SmsAppSummary#launchStatusMessage
   */
  readonly launchStatusMessage?: string;

  /**
   * @schema SmsAppSummary#launchDetails
   */
  readonly launchDetails?: SmsLaunchDetails;

  /**
   * @schema SmsAppSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SmsAppSummary#lastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SmsAppSummary#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsAppSummary#totalServerGroups
   */
  readonly totalServerGroups?: number;

  /**
   * @schema SmsAppSummary#totalServers
   */
  readonly totalServers?: number;

}

/**
 * Converts an object of type 'SmsAppSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsAppSummary(obj: SmsAppSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appId': obj.appId,
    'importedAppId': obj.importedAppId,
    'name': obj.name,
    'description': obj.description,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'replicationConfigurationStatus': obj.replicationConfigurationStatus,
    'replicationStatus': obj.replicationStatus,
    'replicationStatusMessage': obj.replicationStatusMessage,
    'latestReplicationTime': obj.latestReplicationTime,
    'launchConfigurationStatus': obj.launchConfigurationStatus,
    'launchStatus': obj.launchStatus,
    'launchStatusMessage': obj.launchStatusMessage,
    'launchDetails': toJson_SmsLaunchDetails(obj.launchDetails),
    'creationTime': obj.creationTime,
    'lastModified': obj.lastModified,
    'roleName': obj.roleName,
    'totalServerGroups': obj.totalServerGroups,
    'totalServers': obj.totalServers,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Smss3Location
 */
export interface Smss3Location {
  /**
   * @schema Smss3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema Smss3Location#key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'Smss3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Smss3Location(obj: Smss3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerGroupLaunchConfiguration
 */
export interface SmsServerGroupLaunchConfiguration {
  /**
   * @schema SmsServerGroupLaunchConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroupLaunchConfiguration#launchOrder
   */
  readonly launchOrder?: number;

  /**
   * @schema SmsServerGroupLaunchConfiguration#serverLaunchConfigurations
   */
  readonly serverLaunchConfigurations?: SmsServerLaunchConfiguration[];

}

/**
 * Converts an object of type 'SmsServerGroupLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerGroupLaunchConfiguration(obj: SmsServerGroupLaunchConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverGroupId': obj.serverGroupId,
    'launchOrder': obj.launchOrder,
    'serverLaunchConfigurations': obj.serverLaunchConfigurations?.map(y => toJson_SmsServerLaunchConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerGroupReplicationConfiguration
 */
export interface SmsServerGroupReplicationConfiguration {
  /**
   * @schema SmsServerGroupReplicationConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroupReplicationConfiguration#serverReplicationConfigurations
   */
  readonly serverReplicationConfigurations?: SmsServerReplicationConfiguration[];

}

/**
 * Converts an object of type 'SmsServerGroupReplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerGroupReplicationConfiguration(obj: SmsServerGroupReplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverGroupId': obj.serverGroupId,
    'serverReplicationConfigurations': obj.serverReplicationConfigurations?.map(y => toJson_SmsServerReplicationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsAppValidationConfiguration
 */
export interface SmsAppValidationConfiguration {
  /**
   * @schema SmsAppValidationConfiguration#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsAppValidationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema SmsAppValidationConfiguration#appValidationStrategy
   */
  readonly appValidationStrategy?: string;

  /**
   * @schema SmsAppValidationConfiguration#ssmValidationParameters
   */
  readonly ssmValidationParameters?: SmsssmValidationParameters;

}

/**
 * Converts an object of type 'SmsAppValidationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsAppValidationConfiguration(obj: SmsAppValidationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'validationId': obj.validationId,
    'name': obj.name,
    'appValidationStrategy': obj.appValidationStrategy,
    'ssmValidationParameters': toJson_SmsssmValidationParameters(obj.ssmValidationParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerGroupValidationConfiguration
 */
export interface SmsServerGroupValidationConfiguration {
  /**
   * @schema SmsServerGroupValidationConfiguration#serverGroupId
   */
  readonly serverGroupId?: string;

  /**
   * @schema SmsServerGroupValidationConfiguration#serverValidationConfigurations
   */
  readonly serverValidationConfigurations?: SmsServerValidationConfiguration[];

}

/**
 * Converts an object of type 'SmsServerGroupValidationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerGroupValidationConfiguration(obj: SmsServerGroupValidationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverGroupId': obj.serverGroupId,
    'serverValidationConfigurations': obj.serverValidationConfigurations?.map(y => toJson_SmsServerValidationConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsValidationOutput
 */
export interface SmsValidationOutput {
  /**
   * @schema SmsValidationOutput#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsValidationOutput#name
   */
  readonly name?: string;

  /**
   * @schema SmsValidationOutput#status
   */
  readonly status?: string;

  /**
   * @schema SmsValidationOutput#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsValidationOutput#latestValidationTime
   */
  readonly latestValidationTime?: string;

  /**
   * @schema SmsValidationOutput#appValidationOutput
   */
  readonly appValidationOutput?: SmsAppValidationOutput;

  /**
   * @schema SmsValidationOutput#serverValidationOutput
   */
  readonly serverValidationOutput?: SmsServerValidationOutput;

}

/**
 * Converts an object of type 'SmsValidationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsValidationOutput(obj: SmsValidationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'validationId': obj.validationId,
    'name': obj.name,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'latestValidationTime': obj.latestValidationTime,
    'appValidationOutput': toJson_SmsAppValidationOutput(obj.appValidationOutput),
    'serverValidationOutput': toJson_SmsServerValidationOutput(obj.serverValidationOutput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsConnector
 */
export interface SmsConnector {
  /**
   * @schema SmsConnector#connectorId
   */
  readonly connectorId?: string;

  /**
   * @schema SmsConnector#version
   */
  readonly version?: string;

  /**
   * @schema SmsConnector#status
   */
  readonly status?: string;

  /**
   * @schema SmsConnector#capabilityList
   */
  readonly capabilityList?: string[];

  /**
   * @schema SmsConnector#vmManagerName
   */
  readonly vmManagerName?: string;

  /**
   * @schema SmsConnector#vmManagerType
   */
  readonly vmManagerType?: string;

  /**
   * @schema SmsConnector#vmManagerId
   */
  readonly vmManagerId?: string;

  /**
   * @schema SmsConnector#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema SmsConnector#macAddress
   */
  readonly macAddress?: string;

  /**
   * @schema SmsConnector#associatedOn
   */
  readonly associatedOn?: string;

}

/**
 * Converts an object of type 'SmsConnector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsConnector(obj: SmsConnector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorId': obj.connectorId,
    'version': obj.version,
    'status': obj.status,
    'capabilityList': obj.capabilityList?.map(y => y),
    'vmManagerName': obj.vmManagerName,
    'vmManagerType': obj.vmManagerType,
    'vmManagerId': obj.vmManagerId,
    'ipAddress': obj.ipAddress,
    'macAddress': obj.macAddress,
    'associatedOn': obj.associatedOn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsReplicationJob
 */
export interface SmsReplicationJob {
  /**
   * @schema SmsReplicationJob#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema SmsReplicationJob#serverId
   */
  readonly serverId?: string;

  /**
   * @schema SmsReplicationJob#serverType
   */
  readonly serverType?: string;

  /**
   * @schema SmsReplicationJob#vmServer
   */
  readonly vmServer?: SmsVmServer;

  /**
   * @schema SmsReplicationJob#seedReplicationTime
   */
  readonly seedReplicationTime?: string;

  /**
   * @schema SmsReplicationJob#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsReplicationJob#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema SmsReplicationJob#nextReplicationRunStartTime
   */
  readonly nextReplicationRunStartTime?: string;

  /**
   * @schema SmsReplicationJob#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsReplicationJob#roleName
   */
  readonly roleName?: string;

  /**
   * @schema SmsReplicationJob#latestAmiId
   */
  readonly latestAmiId?: string;

  /**
   * @schema SmsReplicationJob#state
   */
  readonly state?: string;

  /**
   * @schema SmsReplicationJob#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsReplicationJob#description
   */
  readonly description?: string;

  /**
   * @schema SmsReplicationJob#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsReplicationJob#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsReplicationJob#kmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SmsReplicationJob#replicationRunList
   */
  readonly replicationRunList?: SmsReplicationRun[];

}

/**
 * Converts an object of type 'SmsReplicationJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsReplicationJob(obj: SmsReplicationJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationJobId': obj.replicationJobId,
    'serverId': obj.serverId,
    'serverType': obj.serverType,
    'vmServer': toJson_SmsVmServer(obj.vmServer),
    'seedReplicationTime': obj.seedReplicationTime,
    'frequency': obj.frequency,
    'runOnce': obj.runOnce,
    'nextReplicationRunStartTime': obj.nextReplicationRunStartTime,
    'licenseType': obj.licenseType,
    'roleName': obj.roleName,
    'latestAmiId': obj.latestAmiId,
    'state': obj.state,
    'statusMessage': obj.statusMessage,
    'description': obj.description,
    'numberOfRecentAmisToKeep': obj.numberOfRecentAmisToKeep,
    'encrypted': obj.encrypted,
    'kmsKeyId': obj.kmsKeyId,
    'replicationRunList': obj.replicationRunList?.map(y => toJson_SmsReplicationRun(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsReplicationRun
 */
export interface SmsReplicationRun {
  /**
   * @schema SmsReplicationRun#replicationRunId
   */
  readonly replicationRunId?: string;

  /**
   * @schema SmsReplicationRun#state
   */
  readonly state?: string;

  /**
   * @schema SmsReplicationRun#type
   */
  readonly type?: string;

  /**
   * @schema SmsReplicationRun#stageDetails
   */
  readonly stageDetails?: SmsReplicationRunStageDetails;

  /**
   * @schema SmsReplicationRun#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SmsReplicationRun#amiId
   */
  readonly amiId?: string;

  /**
   * @schema SmsReplicationRun#scheduledStartTime
   */
  readonly scheduledStartTime?: string;

  /**
   * @schema SmsReplicationRun#completedTime
   */
  readonly completedTime?: string;

  /**
   * @schema SmsReplicationRun#description
   */
  readonly description?: string;

  /**
   * @schema SmsReplicationRun#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsReplicationRun#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'SmsReplicationRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsReplicationRun(obj: SmsReplicationRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationRunId': obj.replicationRunId,
    'state': obj.state,
    'type': obj.type,
    'stageDetails': toJson_SmsReplicationRunStageDetails(obj.stageDetails),
    'statusMessage': obj.statusMessage,
    'amiId': obj.amiId,
    'scheduledStartTime': obj.scheduledStartTime,
    'completedTime': obj.completedTime,
    'description': obj.description,
    'encrypted': obj.encrypted,
    'kmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsVmServerAddress
 */
export interface SmsVmServerAddress {
  /**
   * @schema SmsVmServerAddress#vmManagerId
   */
  readonly vmManagerId?: string;

  /**
   * @schema SmsVmServerAddress#vmId
   */
  readonly vmId?: string;

}

/**
 * Converts an object of type 'SmsVmServerAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsVmServerAddress(obj: SmsVmServerAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vmManagerId': obj.vmManagerId,
    'vmId': obj.vmId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServer
 */
export interface SmsServer {
  /**
   * @schema SmsServer#serverId
   */
  readonly serverId?: string;

  /**
   * @schema SmsServer#serverType
   */
  readonly serverType?: string;

  /**
   * @schema SmsServer#vmServer
   */
  readonly vmServer?: SmsVmServer;

  /**
   * @schema SmsServer#replicationJobId
   */
  readonly replicationJobId?: string;

  /**
   * @schema SmsServer#replicationJobTerminated
   */
  readonly replicationJobTerminated?: boolean;

}

/**
 * Converts an object of type 'SmsServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServer(obj: SmsServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverId': obj.serverId,
    'serverType': obj.serverType,
    'vmServer': toJson_SmsVmServer(obj.vmServer),
    'replicationJobId': obj.replicationJobId,
    'replicationJobTerminated': obj.replicationJobTerminated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsNotificationContext
 */
export interface SmsNotificationContext {
  /**
   * @schema SmsNotificationContext#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsNotificationContext#status
   */
  readonly status?: string;

  /**
   * @schema SmsNotificationContext#statusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'SmsNotificationContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsNotificationContext(obj: SmsNotificationContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'validationId': obj.validationId,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsLaunchDetails
 */
export interface SmsLaunchDetails {
  /**
   * @schema SmsLaunchDetails#latestLaunchTime
   */
  readonly latestLaunchTime?: string;

  /**
   * @schema SmsLaunchDetails#stackName
   */
  readonly stackName?: string;

  /**
   * @schema SmsLaunchDetails#stackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'SmsLaunchDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsLaunchDetails(obj: SmsLaunchDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'latestLaunchTime': obj.latestLaunchTime,
    'stackName': obj.stackName,
    'stackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerLaunchConfiguration
 */
export interface SmsServerLaunchConfiguration {
  /**
   * @schema SmsServerLaunchConfiguration#server
   */
  readonly server?: SmsServer;

  /**
   * @schema SmsServerLaunchConfiguration#logicalId
   */
  readonly logicalId?: string;

  /**
   * @schema SmsServerLaunchConfiguration#vpc
   */
  readonly vpc?: string;

  /**
   * @schema SmsServerLaunchConfiguration#subnet
   */
  readonly subnet?: string;

  /**
   * @schema SmsServerLaunchConfiguration#securityGroup
   */
  readonly securityGroup?: string;

  /**
   * @schema SmsServerLaunchConfiguration#ec2KeyName
   */
  readonly ec2KeyName?: string;

  /**
   * @schema SmsServerLaunchConfiguration#userData
   */
  readonly userData?: SmsUserData;

  /**
   * @schema SmsServerLaunchConfiguration#instanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SmsServerLaunchConfiguration#associatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema SmsServerLaunchConfiguration#iamInstanceProfileName
   */
  readonly iamInstanceProfileName?: string;

  /**
   * @schema SmsServerLaunchConfiguration#configureScript
   */
  readonly configureScript?: Smss3Location;

  /**
   * @schema SmsServerLaunchConfiguration#configureScriptType
   */
  readonly configureScriptType?: string;

}

/**
 * Converts an object of type 'SmsServerLaunchConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerLaunchConfiguration(obj: SmsServerLaunchConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'server': toJson_SmsServer(obj.server),
    'logicalId': obj.logicalId,
    'vpc': obj.vpc,
    'subnet': obj.subnet,
    'securityGroup': obj.securityGroup,
    'ec2KeyName': obj.ec2KeyName,
    'userData': toJson_SmsUserData(obj.userData),
    'instanceType': obj.instanceType,
    'associatePublicIpAddress': obj.associatePublicIpAddress,
    'iamInstanceProfileName': obj.iamInstanceProfileName,
    'configureScript': toJson_Smss3Location(obj.configureScript),
    'configureScriptType': obj.configureScriptType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerReplicationConfiguration
 */
export interface SmsServerReplicationConfiguration {
  /**
   * @schema SmsServerReplicationConfiguration#server
   */
  readonly server?: SmsServer;

  /**
   * @schema SmsServerReplicationConfiguration#serverReplicationParameters
   */
  readonly serverReplicationParameters?: SmsServerReplicationParameters;

}

/**
 * Converts an object of type 'SmsServerReplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerReplicationConfiguration(obj: SmsServerReplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'server': toJson_SmsServer(obj.server),
    'serverReplicationParameters': toJson_SmsServerReplicationParameters(obj.serverReplicationParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsssmValidationParameters
 */
export interface SmsssmValidationParameters {
  /**
   * @schema SmsssmValidationParameters#source
   */
  readonly source?: SmsSource;

  /**
   * @schema SmsssmValidationParameters#instanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SmsssmValidationParameters#scriptType
   */
  readonly scriptType?: string;

  /**
   * @schema SmsssmValidationParameters#command
   */
  readonly command?: string;

  /**
   * @schema SmsssmValidationParameters#executionTimeoutSeconds
   */
  readonly executionTimeoutSeconds?: number;

  /**
   * @schema SmsssmValidationParameters#outputS3BucketName
   */
  readonly outputS3BucketName?: string;

}

/**
 * Converts an object of type 'SmsssmValidationParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsssmValidationParameters(obj: SmsssmValidationParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': toJson_SmsSource(obj.source),
    'instanceId': obj.instanceId,
    'scriptType': obj.scriptType,
    'command': obj.command,
    'executionTimeoutSeconds': obj.executionTimeoutSeconds,
    'outputS3BucketName': obj.outputS3BucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerValidationConfiguration
 */
export interface SmsServerValidationConfiguration {
  /**
   * @schema SmsServerValidationConfiguration#server
   */
  readonly server?: SmsServer;

  /**
   * @schema SmsServerValidationConfiguration#validationId
   */
  readonly validationId?: string;

  /**
   * @schema SmsServerValidationConfiguration#name
   */
  readonly name?: string;

  /**
   * @schema SmsServerValidationConfiguration#serverValidationStrategy
   */
  readonly serverValidationStrategy?: string;

  /**
   * @schema SmsServerValidationConfiguration#userDataValidationParameters
   */
  readonly userDataValidationParameters?: SmsUserDataValidationParameters;

}

/**
 * Converts an object of type 'SmsServerValidationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerValidationConfiguration(obj: SmsServerValidationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'server': toJson_SmsServer(obj.server),
    'validationId': obj.validationId,
    'name': obj.name,
    'serverValidationStrategy': obj.serverValidationStrategy,
    'userDataValidationParameters': toJson_SmsUserDataValidationParameters(obj.userDataValidationParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsAppValidationOutput
 */
export interface SmsAppValidationOutput {
  /**
   * @schema SmsAppValidationOutput#ssmOutput
   */
  readonly ssmOutput?: SmsssmOutput;

}

/**
 * Converts an object of type 'SmsAppValidationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsAppValidationOutput(obj: SmsAppValidationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ssmOutput': toJson_SmsssmOutput(obj.ssmOutput),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerValidationOutput
 */
export interface SmsServerValidationOutput {
  /**
   * @schema SmsServerValidationOutput#server
   */
  readonly server?: SmsServer;

}

/**
 * Converts an object of type 'SmsServerValidationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerValidationOutput(obj: SmsServerValidationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'server': toJson_SmsServer(obj.server),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsVmServer
 */
export interface SmsVmServer {
  /**
   * @schema SmsVmServer#vmServerAddress
   */
  readonly vmServerAddress?: SmsVmServerAddress;

  /**
   * @schema SmsVmServer#vmName
   */
  readonly vmName?: string;

  /**
   * @schema SmsVmServer#vmManagerName
   */
  readonly vmManagerName?: string;

  /**
   * @schema SmsVmServer#vmManagerType
   */
  readonly vmManagerType?: string;

  /**
   * @schema SmsVmServer#vmPath
   */
  readonly vmPath?: string;

}

/**
 * Converts an object of type 'SmsVmServer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsVmServer(obj: SmsVmServer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vmServerAddress': toJson_SmsVmServerAddress(obj.vmServerAddress),
    'vmName': obj.vmName,
    'vmManagerName': obj.vmManagerName,
    'vmManagerType': obj.vmManagerType,
    'vmPath': obj.vmPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsReplicationRunStageDetails
 */
export interface SmsReplicationRunStageDetails {
  /**
   * @schema SmsReplicationRunStageDetails#stage
   */
  readonly stage?: string;

  /**
   * @schema SmsReplicationRunStageDetails#stageProgress
   */
  readonly stageProgress?: string;

}

/**
 * Converts an object of type 'SmsReplicationRunStageDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsReplicationRunStageDetails(obj: SmsReplicationRunStageDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stage': obj.stage,
    'stageProgress': obj.stageProgress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsUserData
 */
export interface SmsUserData {
  /**
   * @schema SmsUserData#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * Converts an object of type 'SmsUserData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsUserData(obj: SmsUserData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Location': toJson_Smss3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsServerReplicationParameters
 */
export interface SmsServerReplicationParameters {
  /**
   * @schema SmsServerReplicationParameters#seedTime
   */
  readonly seedTime?: string;

  /**
   * @schema SmsServerReplicationParameters#frequency
   */
  readonly frequency?: number;

  /**
   * @schema SmsServerReplicationParameters#runOnce
   */
  readonly runOnce?: boolean;

  /**
   * @schema SmsServerReplicationParameters#licenseType
   */
  readonly licenseType?: string;

  /**
   * @schema SmsServerReplicationParameters#numberOfRecentAmisToKeep
   */
  readonly numberOfRecentAmisToKeep?: number;

  /**
   * @schema SmsServerReplicationParameters#encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SmsServerReplicationParameters#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'SmsServerReplicationParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsServerReplicationParameters(obj: SmsServerReplicationParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'seedTime': obj.seedTime,
    'frequency': obj.frequency,
    'runOnce': obj.runOnce,
    'licenseType': obj.licenseType,
    'numberOfRecentAmisToKeep': obj.numberOfRecentAmisToKeep,
    'encrypted': obj.encrypted,
    'kmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsSource
 */
export interface SmsSource {
  /**
   * @schema SmsSource#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * Converts an object of type 'SmsSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsSource(obj: SmsSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Location': toJson_Smss3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsUserDataValidationParameters
 */
export interface SmsUserDataValidationParameters {
  /**
   * @schema SmsUserDataValidationParameters#source
   */
  readonly source?: SmsSource;

  /**
   * @schema SmsUserDataValidationParameters#scriptType
   */
  readonly scriptType?: string;

}

/**
 * Converts an object of type 'SmsUserDataValidationParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsUserDataValidationParameters(obj: SmsUserDataValidationParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': toJson_SmsSource(obj.source),
    'scriptType': obj.scriptType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SmsssmOutput
 */
export interface SmsssmOutput {
  /**
   * @schema SmsssmOutput#s3Location
   */
  readonly s3Location?: Smss3Location;

}

/**
 * Converts an object of type 'SmsssmOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SmsssmOutput(obj: SmsssmOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Location': toJson_Smss3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
