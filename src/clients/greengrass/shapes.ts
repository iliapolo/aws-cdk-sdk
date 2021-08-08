/**
 * @schema GreengrassAssociateRoleToGroupRequest
 */
export interface GreengrassAssociateRoleToGroupRequest {
  /**
   * @schema GreengrassAssociateRoleToGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassAssociateRoleToGroupRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'GreengrassAssociateRoleToGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassAssociateRoleToGroupRequest(obj: GreengrassAssociateRoleToGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassAssociateRoleToGroupResponse
 */
export interface GreengrassAssociateRoleToGroupResponse {
  /**
   * @schema GreengrassAssociateRoleToGroupResponse#AssociatedAt
   */
  readonly associatedAt?: string;

}

/**
 * Converts an object of type 'GreengrassAssociateRoleToGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassAssociateRoleToGroupResponse(obj: GreengrassAssociateRoleToGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatedAt': obj.associatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassAssociateServiceRoleToAccountRequest
 */
export interface GreengrassAssociateServiceRoleToAccountRequest {
  /**
   * @schema GreengrassAssociateServiceRoleToAccountRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'GreengrassAssociateServiceRoleToAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassAssociateServiceRoleToAccountRequest(obj: GreengrassAssociateServiceRoleToAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassAssociateServiceRoleToAccountResponse
 */
export interface GreengrassAssociateServiceRoleToAccountResponse {
  /**
   * @schema GreengrassAssociateServiceRoleToAccountResponse#AssociatedAt
   */
  readonly associatedAt?: string;

}

/**
 * Converts an object of type 'GreengrassAssociateServiceRoleToAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassAssociateServiceRoleToAccountResponse(obj: GreengrassAssociateServiceRoleToAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatedAt': obj.associatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateConnectorDefinitionRequest
 */
export interface GreengrassCreateConnectorDefinitionRequest {
  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassConnectorDefinitionVersion;

  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateConnectorDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateConnectorDefinitionRequest(obj: GreengrassCreateConnectorDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassConnectorDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateConnectorDefinitionResponse
 */
export interface GreengrassCreateConnectorDefinitionResponse {
  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateConnectorDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateConnectorDefinitionResponse(obj: GreengrassCreateConnectorDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateConnectorDefinitionVersionRequest
 */
export interface GreengrassCreateConnectorDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateConnectorDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionRequest#Connectors
   */
  readonly connectors?: GreengrassConnector[];

}

/**
 * Converts an object of type 'GreengrassCreateConnectorDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateConnectorDefinitionVersionRequest(obj: GreengrassCreateConnectorDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'ConnectorDefinitionId': obj.connectorDefinitionId,
    'Connectors': obj.connectors?.map(y => toJson_GreengrassConnector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateConnectorDefinitionVersionResponse
 */
export interface GreengrassCreateConnectorDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateConnectorDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateConnectorDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateConnectorDefinitionVersionResponse(obj: GreengrassCreateConnectorDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateCoreDefinitionRequest
 */
export interface GreengrassCreateCoreDefinitionRequest {
  /**
   * @schema GreengrassCreateCoreDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassCoreDefinitionVersion;

  /**
   * @schema GreengrassCreateCoreDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateCoreDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateCoreDefinitionRequest(obj: GreengrassCreateCoreDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassCoreDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateCoreDefinitionResponse
 */
export interface GreengrassCreateCoreDefinitionResponse {
  /**
   * @schema GreengrassCreateCoreDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateCoreDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateCoreDefinitionResponse(obj: GreengrassCreateCoreDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateCoreDefinitionVersionRequest
 */
export interface GreengrassCreateCoreDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateCoreDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionRequest#Cores
   */
  readonly cores?: GreengrassCore[];

}

/**
 * Converts an object of type 'GreengrassCreateCoreDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateCoreDefinitionVersionRequest(obj: GreengrassCreateCoreDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'CoreDefinitionId': obj.coreDefinitionId,
    'Cores': obj.cores?.map(y => toJson_GreengrassCore(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateCoreDefinitionVersionResponse
 */
export interface GreengrassCreateCoreDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateCoreDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateCoreDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateCoreDefinitionVersionResponse(obj: GreengrassCreateCoreDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateDeploymentRequest
 */
export interface GreengrassCreateDeploymentRequest {
  /**
   * @schema GreengrassCreateDeploymentRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassCreateDeploymentRequest#GroupVersionId
   */
  readonly groupVersionId?: string;

}

/**
 * Converts an object of type 'GreengrassCreateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateDeploymentRequest(obj: GreengrassCreateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'DeploymentId': obj.deploymentId,
    'DeploymentType': obj.deploymentType,
    'GroupId': obj.groupId,
    'GroupVersionId': obj.groupVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateDeploymentResponse
 */
export interface GreengrassCreateDeploymentResponse {
  /**
   * @schema GreengrassCreateDeploymentResponse#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassCreateDeploymentResponse#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'GreengrassCreateDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateDeploymentResponse(obj: GreengrassCreateDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentArn': obj.deploymentArn,
    'DeploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateDeviceDefinitionRequest
 */
export interface GreengrassCreateDeviceDefinitionRequest {
  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassDeviceDefinitionVersion;

  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateDeviceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateDeviceDefinitionRequest(obj: GreengrassCreateDeviceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassDeviceDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateDeviceDefinitionResponse
 */
export interface GreengrassCreateDeviceDefinitionResponse {
  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateDeviceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateDeviceDefinitionResponse(obj: GreengrassCreateDeviceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateDeviceDefinitionVersionRequest
 */
export interface GreengrassCreateDeviceDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateDeviceDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionRequest#Devices
   */
  readonly devices?: GreengrassDevice[];

}

/**
 * Converts an object of type 'GreengrassCreateDeviceDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateDeviceDefinitionVersionRequest(obj: GreengrassCreateDeviceDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'DeviceDefinitionId': obj.deviceDefinitionId,
    'Devices': obj.devices?.map(y => toJson_GreengrassDevice(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateDeviceDefinitionVersionResponse
 */
export interface GreengrassCreateDeviceDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateDeviceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateDeviceDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateDeviceDefinitionVersionResponse(obj: GreengrassCreateDeviceDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateFunctionDefinitionRequest
 */
export interface GreengrassCreateFunctionDefinitionRequest {
  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassFunctionDefinitionVersion;

  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateFunctionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateFunctionDefinitionRequest(obj: GreengrassCreateFunctionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassFunctionDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateFunctionDefinitionResponse
 */
export interface GreengrassCreateFunctionDefinitionResponse {
  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateFunctionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateFunctionDefinitionResponse(obj: GreengrassCreateFunctionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateFunctionDefinitionVersionRequest
 */
export interface GreengrassCreateFunctionDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#DefaultConfig
   */
  readonly defaultConfig?: GreengrassFunctionDefaultConfig;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionRequest#Functions
   */
  readonly functions?: GreengrassFunction[];

}

/**
 * Converts an object of type 'GreengrassCreateFunctionDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateFunctionDefinitionVersionRequest(obj: GreengrassCreateFunctionDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'DefaultConfig': toJson_GreengrassFunctionDefaultConfig(obj.defaultConfig),
    'FunctionDefinitionId': obj.functionDefinitionId,
    'Functions': obj.functions?.map(y => toJson_GreengrassFunction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateFunctionDefinitionVersionResponse
 */
export interface GreengrassCreateFunctionDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateFunctionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateFunctionDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateFunctionDefinitionVersionResponse(obj: GreengrassCreateFunctionDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateGroupRequest
 */
export interface GreengrassCreateGroupRequest {
  /**
   * @schema GreengrassCreateGroupRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateGroupRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassGroupVersion;

  /**
   * @schema GreengrassCreateGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateGroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateGroupRequest(obj: GreengrassCreateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassGroupVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateGroupResponse
 */
export interface GreengrassCreateGroupResponse {
  /**
   * @schema GreengrassCreateGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateGroupResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateGroupResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateGroupResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateGroupResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateGroupResponse(obj: GreengrassCreateGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateGroupCertificateAuthorityRequest
 */
export interface GreengrassCreateGroupCertificateAuthorityRequest {
  /**
   * @schema GreengrassCreateGroupCertificateAuthorityRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateGroupCertificateAuthorityRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassCreateGroupCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateGroupCertificateAuthorityRequest(obj: GreengrassCreateGroupCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateGroupCertificateAuthorityResponse
 */
export interface GreengrassCreateGroupCertificateAuthorityResponse {
  /**
   * @schema GreengrassCreateGroupCertificateAuthorityResponse#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'GreengrassCreateGroupCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateGroupCertificateAuthorityResponse(obj: GreengrassCreateGroupCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupCertificateAuthorityArn': obj.groupCertificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateGroupVersionRequest
 */
export interface GreengrassCreateGroupVersionRequest {
  /**
   * @schema GreengrassCreateGroupVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#ConnectorDefinitionVersionArn
   */
  readonly connectorDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#CoreDefinitionVersionArn
   */
  readonly coreDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#DeviceDefinitionVersionArn
   */
  readonly deviceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#FunctionDefinitionVersionArn
   */
  readonly functionDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#LoggerDefinitionVersionArn
   */
  readonly loggerDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#ResourceDefinitionVersionArn
   */
  readonly resourceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassCreateGroupVersionRequest#SubscriptionDefinitionVersionArn
   */
  readonly subscriptionDefinitionVersionArn?: string;

}

/**
 * Converts an object of type 'GreengrassCreateGroupVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateGroupVersionRequest(obj: GreengrassCreateGroupVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'ConnectorDefinitionVersionArn': obj.connectorDefinitionVersionArn,
    'CoreDefinitionVersionArn': obj.coreDefinitionVersionArn,
    'DeviceDefinitionVersionArn': obj.deviceDefinitionVersionArn,
    'FunctionDefinitionVersionArn': obj.functionDefinitionVersionArn,
    'GroupId': obj.groupId,
    'LoggerDefinitionVersionArn': obj.loggerDefinitionVersionArn,
    'ResourceDefinitionVersionArn': obj.resourceDefinitionVersionArn,
    'SubscriptionDefinitionVersionArn': obj.subscriptionDefinitionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateGroupVersionResponse
 */
export interface GreengrassCreateGroupVersionResponse {
  /**
   * @schema GreengrassCreateGroupVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateGroupVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateGroupVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateGroupVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateGroupVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateGroupVersionResponse(obj: GreengrassCreateGroupVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateLoggerDefinitionRequest
 */
export interface GreengrassCreateLoggerDefinitionRequest {
  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassLoggerDefinitionVersion;

  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateLoggerDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateLoggerDefinitionRequest(obj: GreengrassCreateLoggerDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassLoggerDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateLoggerDefinitionResponse
 */
export interface GreengrassCreateLoggerDefinitionResponse {
  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateLoggerDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateLoggerDefinitionResponse(obj: GreengrassCreateLoggerDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateLoggerDefinitionVersionRequest
 */
export interface GreengrassCreateLoggerDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateLoggerDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionRequest#Loggers
   */
  readonly loggers?: GreengrassLogger[];

}

/**
 * Converts an object of type 'GreengrassCreateLoggerDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateLoggerDefinitionVersionRequest(obj: GreengrassCreateLoggerDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'LoggerDefinitionId': obj.loggerDefinitionId,
    'Loggers': obj.loggers?.map(y => toJson_GreengrassLogger(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateLoggerDefinitionVersionResponse
 */
export interface GreengrassCreateLoggerDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateLoggerDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateLoggerDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateLoggerDefinitionVersionResponse(obj: GreengrassCreateLoggerDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateResourceDefinitionRequest
 */
export interface GreengrassCreateResourceDefinitionRequest {
  /**
   * @schema GreengrassCreateResourceDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassResourceDefinitionVersion;

  /**
   * @schema GreengrassCreateResourceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateResourceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateResourceDefinitionRequest(obj: GreengrassCreateResourceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassResourceDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateResourceDefinitionResponse
 */
export interface GreengrassCreateResourceDefinitionResponse {
  /**
   * @schema GreengrassCreateResourceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateResourceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateResourceDefinitionResponse(obj: GreengrassCreateResourceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateResourceDefinitionVersionRequest
 */
export interface GreengrassCreateResourceDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateResourceDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionRequest#Resources
   */
  readonly resources?: GreengrassResource[];

}

/**
 * Converts an object of type 'GreengrassCreateResourceDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateResourceDefinitionVersionRequest(obj: GreengrassCreateResourceDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'ResourceDefinitionId': obj.resourceDefinitionId,
    'Resources': obj.resources?.map(y => toJson_GreengrassResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateResourceDefinitionVersionResponse
 */
export interface GreengrassCreateResourceDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateResourceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateResourceDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateResourceDefinitionVersionResponse(obj: GreengrassCreateResourceDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateSoftwareUpdateJobRequest
 */
export interface GreengrassCreateSoftwareUpdateJobRequest {
  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#S3UrlSignerRole
   */
  readonly s3UrlSignerRole?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#SoftwareToUpdate
   */
  readonly softwareToUpdate?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateAgentLogLevel
   */
  readonly updateAgentLogLevel?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateTargets
   */
  readonly updateTargets?: string[];

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateTargetsArchitecture
   */
  readonly updateTargetsArchitecture?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobRequest#UpdateTargetsOperatingSystem
   */
  readonly updateTargetsOperatingSystem?: string;

}

/**
 * Converts an object of type 'GreengrassCreateSoftwareUpdateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateSoftwareUpdateJobRequest(obj: GreengrassCreateSoftwareUpdateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'S3UrlSignerRole': obj.s3UrlSignerRole,
    'SoftwareToUpdate': obj.softwareToUpdate,
    'UpdateAgentLogLevel': obj.updateAgentLogLevel,
    'UpdateTargets': obj.updateTargets?.map(y => y),
    'UpdateTargetsArchitecture': obj.updateTargetsArchitecture,
    'UpdateTargetsOperatingSystem': obj.updateTargetsOperatingSystem,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateSoftwareUpdateJobResponse
 */
export interface GreengrassCreateSoftwareUpdateJobResponse {
  /**
   * @schema GreengrassCreateSoftwareUpdateJobResponse#IotJobArn
   */
  readonly iotJobArn?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobResponse#IotJobId
   */
  readonly iotJobId?: string;

  /**
   * @schema GreengrassCreateSoftwareUpdateJobResponse#PlatformSoftwareVersion
   */
  readonly platformSoftwareVersion?: string;

}

/**
 * Converts an object of type 'GreengrassCreateSoftwareUpdateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateSoftwareUpdateJobResponse(obj: GreengrassCreateSoftwareUpdateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IotJobArn': obj.iotJobArn,
    'IotJobId': obj.iotJobId,
    'PlatformSoftwareVersion': obj.platformSoftwareVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateSubscriptionDefinitionRequest
 */
export interface GreengrassCreateSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#InitialVersion
   */
  readonly initialVersion?: GreengrassSubscriptionDefinitionVersion;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassCreateSubscriptionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateSubscriptionDefinitionRequest(obj: GreengrassCreateSubscriptionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'InitialVersion': toJson_GreengrassSubscriptionDefinitionVersion(obj.initialVersion),
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateSubscriptionDefinitionResponse
 */
export interface GreengrassCreateSubscriptionDefinitionResponse {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassCreateSubscriptionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateSubscriptionDefinitionResponse(obj: GreengrassCreateSubscriptionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateSubscriptionDefinitionVersionRequest
 */
export interface GreengrassCreateSubscriptionDefinitionVersionRequest {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionRequest#Subscriptions
   */
  readonly subscriptions?: GreengrassSubscription[];

}

/**
 * Converts an object of type 'GreengrassCreateSubscriptionDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateSubscriptionDefinitionVersionRequest(obj: GreengrassCreateSubscriptionDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'SubscriptionDefinitionId': obj.subscriptionDefinitionId,
    'Subscriptions': obj.subscriptions?.map(y => toJson_GreengrassSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCreateSubscriptionDefinitionVersionResponse
 */
export interface GreengrassCreateSubscriptionDefinitionVersionResponse {
  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCreateSubscriptionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassCreateSubscriptionDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCreateSubscriptionDefinitionVersionResponse(obj: GreengrassCreateSubscriptionDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteConnectorDefinitionRequest
 */
export interface GreengrassDeleteConnectorDefinitionRequest {
  /**
   * @schema GreengrassDeleteConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteConnectorDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteConnectorDefinitionRequest(obj: GreengrassDeleteConnectorDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorDefinitionId': obj.connectorDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteConnectorDefinitionResponse
 */
export interface GreengrassDeleteConnectorDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteConnectorDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteConnectorDefinitionResponse(obj: GreengrassDeleteConnectorDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteCoreDefinitionRequest
 */
export interface GreengrassDeleteCoreDefinitionRequest {
  /**
   * @schema GreengrassDeleteCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteCoreDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteCoreDefinitionRequest(obj: GreengrassDeleteCoreDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CoreDefinitionId': obj.coreDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteCoreDefinitionResponse
 */
export interface GreengrassDeleteCoreDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteCoreDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteCoreDefinitionResponse(obj: GreengrassDeleteCoreDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteDeviceDefinitionRequest
 */
export interface GreengrassDeleteDeviceDefinitionRequest {
  /**
   * @schema GreengrassDeleteDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteDeviceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteDeviceDefinitionRequest(obj: GreengrassDeleteDeviceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceDefinitionId': obj.deviceDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteDeviceDefinitionResponse
 */
export interface GreengrassDeleteDeviceDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteDeviceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteDeviceDefinitionResponse(obj: GreengrassDeleteDeviceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteFunctionDefinitionRequest
 */
export interface GreengrassDeleteFunctionDefinitionRequest {
  /**
   * @schema GreengrassDeleteFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteFunctionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteFunctionDefinitionRequest(obj: GreengrassDeleteFunctionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionDefinitionId': obj.functionDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteFunctionDefinitionResponse
 */
export interface GreengrassDeleteFunctionDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteFunctionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteFunctionDefinitionResponse(obj: GreengrassDeleteFunctionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteGroupRequest
 */
export interface GreengrassDeleteGroupRequest {
  /**
   * @schema GreengrassDeleteGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteGroupRequest(obj: GreengrassDeleteGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteGroupResponse
 */
export interface GreengrassDeleteGroupResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteGroupResponse(obj: GreengrassDeleteGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteLoggerDefinitionRequest
 */
export interface GreengrassDeleteLoggerDefinitionRequest {
  /**
   * @schema GreengrassDeleteLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteLoggerDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteLoggerDefinitionRequest(obj: GreengrassDeleteLoggerDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggerDefinitionId': obj.loggerDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteLoggerDefinitionResponse
 */
export interface GreengrassDeleteLoggerDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteLoggerDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteLoggerDefinitionResponse(obj: GreengrassDeleteLoggerDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteResourceDefinitionRequest
 */
export interface GreengrassDeleteResourceDefinitionRequest {
  /**
   * @schema GreengrassDeleteResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteResourceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteResourceDefinitionRequest(obj: GreengrassDeleteResourceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceDefinitionId': obj.resourceDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteResourceDefinitionResponse
 */
export interface GreengrassDeleteResourceDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteResourceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteResourceDefinitionResponse(obj: GreengrassDeleteResourceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteSubscriptionDefinitionRequest
 */
export interface GreengrassDeleteSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassDeleteSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassDeleteSubscriptionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteSubscriptionDefinitionRequest(obj: GreengrassDeleteSubscriptionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionDefinitionId': obj.subscriptionDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeleteSubscriptionDefinitionResponse
 */
export interface GreengrassDeleteSubscriptionDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassDeleteSubscriptionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeleteSubscriptionDefinitionResponse(obj: GreengrassDeleteSubscriptionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDisassociateRoleFromGroupRequest
 */
export interface GreengrassDisassociateRoleFromGroupRequest {
  /**
   * @schema GreengrassDisassociateRoleFromGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassDisassociateRoleFromGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDisassociateRoleFromGroupRequest(obj: GreengrassDisassociateRoleFromGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDisassociateRoleFromGroupResponse
 */
export interface GreengrassDisassociateRoleFromGroupResponse {
  /**
   * @schema GreengrassDisassociateRoleFromGroupResponse#DisassociatedAt
   */
  readonly disassociatedAt?: string;

}

/**
 * Converts an object of type 'GreengrassDisassociateRoleFromGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDisassociateRoleFromGroupResponse(obj: GreengrassDisassociateRoleFromGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisassociatedAt': obj.disassociatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDisassociateServiceRoleFromAccountRequest
 */
export interface GreengrassDisassociateServiceRoleFromAccountRequest {
}

/**
 * Converts an object of type 'GreengrassDisassociateServiceRoleFromAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDisassociateServiceRoleFromAccountRequest(obj: GreengrassDisassociateServiceRoleFromAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDisassociateServiceRoleFromAccountResponse
 */
export interface GreengrassDisassociateServiceRoleFromAccountResponse {
  /**
   * @schema GreengrassDisassociateServiceRoleFromAccountResponse#DisassociatedAt
   */
  readonly disassociatedAt?: string;

}

/**
 * Converts an object of type 'GreengrassDisassociateServiceRoleFromAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDisassociateServiceRoleFromAccountResponse(obj: GreengrassDisassociateServiceRoleFromAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisassociatedAt': obj.disassociatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetAssociatedRoleRequest
 */
export interface GreengrassGetAssociatedRoleRequest {
  /**
   * @schema GreengrassGetAssociatedRoleRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassGetAssociatedRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetAssociatedRoleRequest(obj: GreengrassGetAssociatedRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetAssociatedRoleResponse
 */
export interface GreengrassGetAssociatedRoleResponse {
  /**
   * @schema GreengrassGetAssociatedRoleResponse#AssociatedAt
   */
  readonly associatedAt?: string;

  /**
   * @schema GreengrassGetAssociatedRoleResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'GreengrassGetAssociatedRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetAssociatedRoleResponse(obj: GreengrassGetAssociatedRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatedAt': obj.associatedAt,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetBulkDeploymentStatusRequest
 */
export interface GreengrassGetBulkDeploymentStatusRequest {
  /**
   * @schema GreengrassGetBulkDeploymentStatusRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

}

/**
 * Converts an object of type 'GreengrassGetBulkDeploymentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetBulkDeploymentStatusRequest(obj: GreengrassGetBulkDeploymentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeploymentId': obj.bulkDeploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetBulkDeploymentStatusResponse
 */
export interface GreengrassGetBulkDeploymentStatusResponse {
  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#BulkDeploymentMetrics
   */
  readonly bulkDeploymentMetrics?: GreengrassBulkDeploymentMetrics;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#BulkDeploymentStatus
   */
  readonly bulkDeploymentStatus?: string;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#ErrorDetails
   */
  readonly errorDetails?: GreengrassErrorDetail[];

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GreengrassGetBulkDeploymentStatusResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetBulkDeploymentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetBulkDeploymentStatusResponse(obj: GreengrassGetBulkDeploymentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeploymentMetrics': toJson_GreengrassBulkDeploymentMetrics(obj.bulkDeploymentMetrics),
    'BulkDeploymentStatus': obj.bulkDeploymentStatus,
    'CreatedAt': obj.createdAt,
    'ErrorDetails': obj.errorDetails?.map(y => toJson_GreengrassErrorDetail(y)),
    'ErrorMessage': obj.errorMessage,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetConnectivityInfoRequest
 */
export interface GreengrassGetConnectivityInfoRequest {
  /**
   * @schema GreengrassGetConnectivityInfoRequest#ThingName
   */
  readonly thingName?: string;

}

/**
 * Converts an object of type 'GreengrassGetConnectivityInfoRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetConnectivityInfoRequest(obj: GreengrassGetConnectivityInfoRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetConnectivityInfoResponse
 */
export interface GreengrassGetConnectivityInfoResponse {
  /**
   * @schema GreengrassGetConnectivityInfoResponse#ConnectivityInfo
   */
  readonly connectivityInfo?: GreengrassConnectivityInfo[];

  /**
   * @schema GreengrassGetConnectivityInfoResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'GreengrassGetConnectivityInfoResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetConnectivityInfoResponse(obj: GreengrassGetConnectivityInfoResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectivityInfo': obj.connectivityInfo?.map(y => toJson_GreengrassConnectivityInfo(y)),
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetConnectorDefinitionRequest
 */
export interface GreengrassGetConnectorDefinitionRequest {
  /**
   * @schema GreengrassGetConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetConnectorDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetConnectorDefinitionRequest(obj: GreengrassGetConnectorDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorDefinitionId': obj.connectorDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetConnectorDefinitionResponse
 */
export interface GreengrassGetConnectorDefinitionResponse {
  /**
   * @schema GreengrassGetConnectorDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetConnectorDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetConnectorDefinitionResponse(obj: GreengrassGetConnectorDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetConnectorDefinitionVersionRequest
 */
export interface GreengrassGetConnectorDefinitionVersionRequest {
  /**
   * @schema GreengrassGetConnectorDefinitionVersionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionRequest#ConnectorDefinitionVersionId
   */
  readonly connectorDefinitionVersionId?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassGetConnectorDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetConnectorDefinitionVersionRequest(obj: GreengrassGetConnectorDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorDefinitionId': obj.connectorDefinitionId,
    'ConnectorDefinitionVersionId': obj.connectorDefinitionVersionId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetConnectorDefinitionVersionResponse
 */
export interface GreengrassGetConnectorDefinitionVersionResponse {
  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassConnectorDefinitionVersion;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetConnectorDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetConnectorDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetConnectorDefinitionVersionResponse(obj: GreengrassGetConnectorDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassConnectorDefinitionVersion(obj.definition),
    'Id': obj.id,
    'NextToken': obj.nextToken,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetCoreDefinitionRequest
 */
export interface GreengrassGetCoreDefinitionRequest {
  /**
   * @schema GreengrassGetCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetCoreDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetCoreDefinitionRequest(obj: GreengrassGetCoreDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CoreDefinitionId': obj.coreDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetCoreDefinitionResponse
 */
export interface GreengrassGetCoreDefinitionResponse {
  /**
   * @schema GreengrassGetCoreDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetCoreDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetCoreDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetCoreDefinitionResponse(obj: GreengrassGetCoreDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetCoreDefinitionVersionRequest
 */
export interface GreengrassGetCoreDefinitionVersionRequest {
  /**
   * @schema GreengrassGetCoreDefinitionVersionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionRequest#CoreDefinitionVersionId
   */
  readonly coreDefinitionVersionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetCoreDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetCoreDefinitionVersionRequest(obj: GreengrassGetCoreDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CoreDefinitionId': obj.coreDefinitionId,
    'CoreDefinitionVersionId': obj.coreDefinitionVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetCoreDefinitionVersionResponse
 */
export interface GreengrassGetCoreDefinitionVersionResponse {
  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassCoreDefinitionVersion;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetCoreDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetCoreDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetCoreDefinitionVersionResponse(obj: GreengrassGetCoreDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassCoreDefinitionVersion(obj.definition),
    'Id': obj.id,
    'NextToken': obj.nextToken,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetDeploymentStatusRequest
 */
export interface GreengrassGetDeploymentStatusRequest {
  /**
   * @schema GreengrassGetDeploymentStatusRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassGetDeploymentStatusRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassGetDeploymentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetDeploymentStatusRequest(obj: GreengrassGetDeploymentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentId': obj.deploymentId,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetDeploymentStatusResponse
 */
export interface GreengrassGetDeploymentStatusResponse {
  /**
   * @schema GreengrassGetDeploymentStatusResponse#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GreengrassGetDeploymentStatusResponse#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassGetDeploymentStatusResponse#ErrorDetails
   */
  readonly errorDetails?: GreengrassErrorDetail[];

  /**
   * @schema GreengrassGetDeploymentStatusResponse#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GreengrassGetDeploymentStatusResponse#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'GreengrassGetDeploymentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetDeploymentStatusResponse(obj: GreengrassGetDeploymentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentStatus': obj.deploymentStatus,
    'DeploymentType': obj.deploymentType,
    'ErrorDetails': obj.errorDetails?.map(y => toJson_GreengrassErrorDetail(y)),
    'ErrorMessage': obj.errorMessage,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetDeviceDefinitionRequest
 */
export interface GreengrassGetDeviceDefinitionRequest {
  /**
   * @schema GreengrassGetDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetDeviceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetDeviceDefinitionRequest(obj: GreengrassGetDeviceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceDefinitionId': obj.deviceDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetDeviceDefinitionResponse
 */
export interface GreengrassGetDeviceDefinitionResponse {
  /**
   * @schema GreengrassGetDeviceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetDeviceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetDeviceDefinitionResponse(obj: GreengrassGetDeviceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetDeviceDefinitionVersionRequest
 */
export interface GreengrassGetDeviceDefinitionVersionRequest {
  /**
   * @schema GreengrassGetDeviceDefinitionVersionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionRequest#DeviceDefinitionVersionId
   */
  readonly deviceDefinitionVersionId?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassGetDeviceDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetDeviceDefinitionVersionRequest(obj: GreengrassGetDeviceDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceDefinitionId': obj.deviceDefinitionId,
    'DeviceDefinitionVersionId': obj.deviceDefinitionVersionId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetDeviceDefinitionVersionResponse
 */
export interface GreengrassGetDeviceDefinitionVersionResponse {
  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassDeviceDefinitionVersion;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetDeviceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetDeviceDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetDeviceDefinitionVersionResponse(obj: GreengrassGetDeviceDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassDeviceDefinitionVersion(obj.definition),
    'Id': obj.id,
    'NextToken': obj.nextToken,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetFunctionDefinitionRequest
 */
export interface GreengrassGetFunctionDefinitionRequest {
  /**
   * @schema GreengrassGetFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetFunctionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetFunctionDefinitionRequest(obj: GreengrassGetFunctionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionDefinitionId': obj.functionDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetFunctionDefinitionResponse
 */
export interface GreengrassGetFunctionDefinitionResponse {
  /**
   * @schema GreengrassGetFunctionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetFunctionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetFunctionDefinitionResponse(obj: GreengrassGetFunctionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetFunctionDefinitionVersionRequest
 */
export interface GreengrassGetFunctionDefinitionVersionRequest {
  /**
   * @schema GreengrassGetFunctionDefinitionVersionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionRequest#FunctionDefinitionVersionId
   */
  readonly functionDefinitionVersionId?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassGetFunctionDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetFunctionDefinitionVersionRequest(obj: GreengrassGetFunctionDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionDefinitionId': obj.functionDefinitionId,
    'FunctionDefinitionVersionId': obj.functionDefinitionVersionId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetFunctionDefinitionVersionResponse
 */
export interface GreengrassGetFunctionDefinitionVersionResponse {
  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassFunctionDefinitionVersion;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetFunctionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetFunctionDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetFunctionDefinitionVersionResponse(obj: GreengrassGetFunctionDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassFunctionDefinitionVersion(obj.definition),
    'Id': obj.id,
    'NextToken': obj.nextToken,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupRequest
 */
export interface GreengrassGetGroupRequest {
  /**
   * @schema GreengrassGetGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupRequest(obj: GreengrassGetGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupResponse
 */
export interface GreengrassGetGroupResponse {
  /**
   * @schema GreengrassGetGroupResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetGroupResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetGroupResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetGroupResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetGroupResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetGroupResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetGroupResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetGroupResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupResponse(obj: GreengrassGetGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupCertificateAuthorityRequest
 */
export interface GreengrassGetGroupCertificateAuthorityRequest {
  /**
   * @schema GreengrassGetGroupCertificateAuthorityRequest#CertificateAuthorityId
   */
  readonly certificateAuthorityId?: string;

  /**
   * @schema GreengrassGetGroupCertificateAuthorityRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupCertificateAuthorityRequest(obj: GreengrassGetGroupCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityId': obj.certificateAuthorityId,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupCertificateAuthorityResponse
 */
export interface GreengrassGetGroupCertificateAuthorityResponse {
  /**
   * @schema GreengrassGetGroupCertificateAuthorityResponse#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

  /**
   * @schema GreengrassGetGroupCertificateAuthorityResponse#GroupCertificateAuthorityId
   */
  readonly groupCertificateAuthorityId?: string;

  /**
   * @schema GreengrassGetGroupCertificateAuthorityResponse#PemEncodedCertificate
   */
  readonly pemEncodedCertificate?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupCertificateAuthorityResponse(obj: GreengrassGetGroupCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupCertificateAuthorityArn': obj.groupCertificateAuthorityArn,
    'GroupCertificateAuthorityId': obj.groupCertificateAuthorityId,
    'PemEncodedCertificate': obj.pemEncodedCertificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupCertificateConfigurationRequest
 */
export interface GreengrassGetGroupCertificateConfigurationRequest {
  /**
   * @schema GreengrassGetGroupCertificateConfigurationRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupCertificateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupCertificateConfigurationRequest(obj: GreengrassGetGroupCertificateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupCertificateConfigurationResponse
 */
export interface GreengrassGetGroupCertificateConfigurationResponse {
  /**
   * @schema GreengrassGetGroupCertificateConfigurationResponse#CertificateAuthorityExpiryInMilliseconds
   */
  readonly certificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassGetGroupCertificateConfigurationResponse#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassGetGroupCertificateConfigurationResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupCertificateConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupCertificateConfigurationResponse(obj: GreengrassGetGroupCertificateConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityExpiryInMilliseconds': obj.certificateAuthorityExpiryInMilliseconds,
    'CertificateExpiryInMilliseconds': obj.certificateExpiryInMilliseconds,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupVersionRequest
 */
export interface GreengrassGetGroupVersionRequest {
  /**
   * @schema GreengrassGetGroupVersionRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassGetGroupVersionRequest#GroupVersionId
   */
  readonly groupVersionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupVersionRequest(obj: GreengrassGetGroupVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'GroupVersionId': obj.groupVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetGroupVersionResponse
 */
export interface GreengrassGetGroupVersionResponse {
  /**
   * @schema GreengrassGetGroupVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetGroupVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetGroupVersionResponse#Definition
   */
  readonly definition?: GreengrassGroupVersion;

  /**
   * @schema GreengrassGetGroupVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetGroupVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetGroupVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetGroupVersionResponse(obj: GreengrassGetGroupVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassGroupVersion(obj.definition),
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetLoggerDefinitionRequest
 */
export interface GreengrassGetLoggerDefinitionRequest {
  /**
   * @schema GreengrassGetLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetLoggerDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetLoggerDefinitionRequest(obj: GreengrassGetLoggerDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggerDefinitionId': obj.loggerDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetLoggerDefinitionResponse
 */
export interface GreengrassGetLoggerDefinitionResponse {
  /**
   * @schema GreengrassGetLoggerDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetLoggerDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetLoggerDefinitionResponse(obj: GreengrassGetLoggerDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetLoggerDefinitionVersionRequest
 */
export interface GreengrassGetLoggerDefinitionVersionRequest {
  /**
   * @schema GreengrassGetLoggerDefinitionVersionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionRequest#LoggerDefinitionVersionId
   */
  readonly loggerDefinitionVersionId?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassGetLoggerDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetLoggerDefinitionVersionRequest(obj: GreengrassGetLoggerDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggerDefinitionId': obj.loggerDefinitionId,
    'LoggerDefinitionVersionId': obj.loggerDefinitionVersionId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetLoggerDefinitionVersionResponse
 */
export interface GreengrassGetLoggerDefinitionVersionResponse {
  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassLoggerDefinitionVersion;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetLoggerDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetLoggerDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetLoggerDefinitionVersionResponse(obj: GreengrassGetLoggerDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassLoggerDefinitionVersion(obj.definition),
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetResourceDefinitionRequest
 */
export interface GreengrassGetResourceDefinitionRequest {
  /**
   * @schema GreengrassGetResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetResourceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetResourceDefinitionRequest(obj: GreengrassGetResourceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceDefinitionId': obj.resourceDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetResourceDefinitionResponse
 */
export interface GreengrassGetResourceDefinitionResponse {
  /**
   * @schema GreengrassGetResourceDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetResourceDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetResourceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetResourceDefinitionResponse(obj: GreengrassGetResourceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetResourceDefinitionVersionRequest
 */
export interface GreengrassGetResourceDefinitionVersionRequest {
  /**
   * @schema GreengrassGetResourceDefinitionVersionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionRequest#ResourceDefinitionVersionId
   */
  readonly resourceDefinitionVersionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetResourceDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetResourceDefinitionVersionRequest(obj: GreengrassGetResourceDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceDefinitionId': obj.resourceDefinitionId,
    'ResourceDefinitionVersionId': obj.resourceDefinitionVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetResourceDefinitionVersionResponse
 */
export interface GreengrassGetResourceDefinitionVersionResponse {
  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassResourceDefinitionVersion;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetResourceDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetResourceDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetResourceDefinitionVersionResponse(obj: GreengrassGetResourceDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassResourceDefinitionVersion(obj.definition),
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetServiceRoleForAccountRequest
 */
export interface GreengrassGetServiceRoleForAccountRequest {
}

/**
 * Converts an object of type 'GreengrassGetServiceRoleForAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetServiceRoleForAccountRequest(obj: GreengrassGetServiceRoleForAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetServiceRoleForAccountResponse
 */
export interface GreengrassGetServiceRoleForAccountResponse {
  /**
   * @schema GreengrassGetServiceRoleForAccountResponse#AssociatedAt
   */
  readonly associatedAt?: string;

  /**
   * @schema GreengrassGetServiceRoleForAccountResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'GreengrassGetServiceRoleForAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetServiceRoleForAccountResponse(obj: GreengrassGetServiceRoleForAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociatedAt': obj.associatedAt,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetSubscriptionDefinitionRequest
 */
export interface GreengrassGetSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassGetSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetSubscriptionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetSubscriptionDefinitionRequest(obj: GreengrassGetSubscriptionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionDefinitionId': obj.subscriptionDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetSubscriptionDefinitionResponse
 */
export interface GreengrassGetSubscriptionDefinitionResponse {
  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassGetSubscriptionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetSubscriptionDefinitionResponse(obj: GreengrassGetSubscriptionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetSubscriptionDefinitionVersionRequest
 */
export interface GreengrassGetSubscriptionDefinitionVersionRequest {
  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionRequest#SubscriptionDefinitionVersionId
   */
  readonly subscriptionDefinitionVersionId?: string;

}

/**
 * Converts an object of type 'GreengrassGetSubscriptionDefinitionVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetSubscriptionDefinitionVersionRequest(obj: GreengrassGetSubscriptionDefinitionVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SubscriptionDefinitionId': obj.subscriptionDefinitionId,
    'SubscriptionDefinitionVersionId': obj.subscriptionDefinitionVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetSubscriptionDefinitionVersionResponse
 */
export interface GreengrassGetSubscriptionDefinitionVersionResponse {
  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Definition
   */
  readonly definition?: GreengrassSubscriptionDefinitionVersion;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassGetSubscriptionDefinitionVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassGetSubscriptionDefinitionVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetSubscriptionDefinitionVersionResponse(obj: GreengrassGetSubscriptionDefinitionVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Definition': toJson_GreengrassSubscriptionDefinitionVersion(obj.definition),
    'Id': obj.id,
    'NextToken': obj.nextToken,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetThingRuntimeConfigurationRequest
 */
export interface GreengrassGetThingRuntimeConfigurationRequest {
  /**
   * @schema GreengrassGetThingRuntimeConfigurationRequest#ThingName
   */
  readonly thingName?: string;

}

/**
 * Converts an object of type 'GreengrassGetThingRuntimeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetThingRuntimeConfigurationRequest(obj: GreengrassGetThingRuntimeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGetThingRuntimeConfigurationResponse
 */
export interface GreengrassGetThingRuntimeConfigurationResponse {
  /**
   * @schema GreengrassGetThingRuntimeConfigurationResponse#RuntimeConfiguration
   */
  readonly runtimeConfiguration?: GreengrassRuntimeConfiguration;

}

/**
 * Converts an object of type 'GreengrassGetThingRuntimeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGetThingRuntimeConfigurationResponse(obj: GreengrassGetThingRuntimeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuntimeConfiguration': toJson_GreengrassRuntimeConfiguration(obj.runtimeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListBulkDeploymentDetailedReportsRequest
 */
export interface GreengrassListBulkDeploymentDetailedReportsRequest {
  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListBulkDeploymentDetailedReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListBulkDeploymentDetailedReportsRequest(obj: GreengrassListBulkDeploymentDetailedReportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeploymentId': obj.bulkDeploymentId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListBulkDeploymentDetailedReportsResponse
 */
export interface GreengrassListBulkDeploymentDetailedReportsResponse {
  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsResponse#Deployments
   */
  readonly deployments?: GreengrassBulkDeploymentResult[];

  /**
   * @schema GreengrassListBulkDeploymentDetailedReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListBulkDeploymentDetailedReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListBulkDeploymentDetailedReportsResponse(obj: GreengrassListBulkDeploymentDetailedReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Deployments': obj.deployments?.map(y => toJson_GreengrassBulkDeploymentResult(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListBulkDeploymentsRequest
 */
export interface GreengrassListBulkDeploymentsRequest {
  /**
   * @schema GreengrassListBulkDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListBulkDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListBulkDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListBulkDeploymentsRequest(obj: GreengrassListBulkDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListBulkDeploymentsResponse
 */
export interface GreengrassListBulkDeploymentsResponse {
  /**
   * @schema GreengrassListBulkDeploymentsResponse#BulkDeployments
   */
  readonly bulkDeployments?: GreengrassBulkDeployment[];

  /**
   * @schema GreengrassListBulkDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListBulkDeploymentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListBulkDeploymentsResponse(obj: GreengrassListBulkDeploymentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeployments': obj.bulkDeployments?.map(y => toJson_GreengrassBulkDeployment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListConnectorDefinitionVersionsRequest
 */
export interface GreengrassListConnectorDefinitionVersionsRequest {
  /**
   * @schema GreengrassListConnectorDefinitionVersionsRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId?: string;

  /**
   * @schema GreengrassListConnectorDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListConnectorDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListConnectorDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListConnectorDefinitionVersionsRequest(obj: GreengrassListConnectorDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorDefinitionId': obj.connectorDefinitionId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListConnectorDefinitionVersionsResponse
 */
export interface GreengrassListConnectorDefinitionVersionsResponse {
  /**
   * @schema GreengrassListConnectorDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListConnectorDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListConnectorDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListConnectorDefinitionVersionsResponse(obj: GreengrassListConnectorDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListConnectorDefinitionsRequest
 */
export interface GreengrassListConnectorDefinitionsRequest {
  /**
   * @schema GreengrassListConnectorDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListConnectorDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListConnectorDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListConnectorDefinitionsRequest(obj: GreengrassListConnectorDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListConnectorDefinitionsResponse
 */
export interface GreengrassListConnectorDefinitionsResponse {
  /**
   * @schema GreengrassListConnectorDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListConnectorDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListConnectorDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListConnectorDefinitionsResponse(obj: GreengrassListConnectorDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListCoreDefinitionVersionsRequest
 */
export interface GreengrassListCoreDefinitionVersionsRequest {
  /**
   * @schema GreengrassListCoreDefinitionVersionsRequest#CoreDefinitionId
   */
  readonly coreDefinitionId?: string;

  /**
   * @schema GreengrassListCoreDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListCoreDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListCoreDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListCoreDefinitionVersionsRequest(obj: GreengrassListCoreDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CoreDefinitionId': obj.coreDefinitionId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListCoreDefinitionVersionsResponse
 */
export interface GreengrassListCoreDefinitionVersionsResponse {
  /**
   * @schema GreengrassListCoreDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListCoreDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListCoreDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListCoreDefinitionVersionsResponse(obj: GreengrassListCoreDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListCoreDefinitionsRequest
 */
export interface GreengrassListCoreDefinitionsRequest {
  /**
   * @schema GreengrassListCoreDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListCoreDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListCoreDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListCoreDefinitionsRequest(obj: GreengrassListCoreDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListCoreDefinitionsResponse
 */
export interface GreengrassListCoreDefinitionsResponse {
  /**
   * @schema GreengrassListCoreDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListCoreDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListCoreDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListCoreDefinitionsResponse(obj: GreengrassListCoreDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListDeploymentsRequest
 */
export interface GreengrassListDeploymentsRequest {
  /**
   * @schema GreengrassListDeploymentsRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassListDeploymentsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListDeploymentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListDeploymentsRequest(obj: GreengrassListDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListDeploymentsResponse
 */
export interface GreengrassListDeploymentsResponse {
  /**
   * @schema GreengrassListDeploymentsResponse#Deployments
   */
  readonly deployments?: GreengrassDeployment[];

  /**
   * @schema GreengrassListDeploymentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListDeploymentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListDeploymentsResponse(obj: GreengrassListDeploymentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Deployments': obj.deployments?.map(y => toJson_GreengrassDeployment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListDeviceDefinitionVersionsRequest
 */
export interface GreengrassListDeviceDefinitionVersionsRequest {
  /**
   * @schema GreengrassListDeviceDefinitionVersionsRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId?: string;

  /**
   * @schema GreengrassListDeviceDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListDeviceDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListDeviceDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListDeviceDefinitionVersionsRequest(obj: GreengrassListDeviceDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceDefinitionId': obj.deviceDefinitionId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListDeviceDefinitionVersionsResponse
 */
export interface GreengrassListDeviceDefinitionVersionsResponse {
  /**
   * @schema GreengrassListDeviceDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListDeviceDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListDeviceDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListDeviceDefinitionVersionsResponse(obj: GreengrassListDeviceDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListDeviceDefinitionsRequest
 */
export interface GreengrassListDeviceDefinitionsRequest {
  /**
   * @schema GreengrassListDeviceDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListDeviceDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListDeviceDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListDeviceDefinitionsRequest(obj: GreengrassListDeviceDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListDeviceDefinitionsResponse
 */
export interface GreengrassListDeviceDefinitionsResponse {
  /**
   * @schema GreengrassListDeviceDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListDeviceDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListDeviceDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListDeviceDefinitionsResponse(obj: GreengrassListDeviceDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListFunctionDefinitionVersionsRequest
 */
export interface GreengrassListFunctionDefinitionVersionsRequest {
  /**
   * @schema GreengrassListFunctionDefinitionVersionsRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId?: string;

  /**
   * @schema GreengrassListFunctionDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListFunctionDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListFunctionDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListFunctionDefinitionVersionsRequest(obj: GreengrassListFunctionDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionDefinitionId': obj.functionDefinitionId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListFunctionDefinitionVersionsResponse
 */
export interface GreengrassListFunctionDefinitionVersionsResponse {
  /**
   * @schema GreengrassListFunctionDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListFunctionDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListFunctionDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListFunctionDefinitionVersionsResponse(obj: GreengrassListFunctionDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListFunctionDefinitionsRequest
 */
export interface GreengrassListFunctionDefinitionsRequest {
  /**
   * @schema GreengrassListFunctionDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListFunctionDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListFunctionDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListFunctionDefinitionsRequest(obj: GreengrassListFunctionDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListFunctionDefinitionsResponse
 */
export interface GreengrassListFunctionDefinitionsResponse {
  /**
   * @schema GreengrassListFunctionDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListFunctionDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListFunctionDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListFunctionDefinitionsResponse(obj: GreengrassListFunctionDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListGroupCertificateAuthoritiesRequest
 */
export interface GreengrassListGroupCertificateAuthoritiesRequest {
  /**
   * @schema GreengrassListGroupCertificateAuthoritiesRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassListGroupCertificateAuthoritiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListGroupCertificateAuthoritiesRequest(obj: GreengrassListGroupCertificateAuthoritiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListGroupCertificateAuthoritiesResponse
 */
export interface GreengrassListGroupCertificateAuthoritiesResponse {
  /**
   * @schema GreengrassListGroupCertificateAuthoritiesResponse#GroupCertificateAuthorities
   */
  readonly groupCertificateAuthorities?: GreengrassGroupCertificateAuthorityProperties[];

}

/**
 * Converts an object of type 'GreengrassListGroupCertificateAuthoritiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListGroupCertificateAuthoritiesResponse(obj: GreengrassListGroupCertificateAuthoritiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupCertificateAuthorities': obj.groupCertificateAuthorities?.map(y => toJson_GreengrassGroupCertificateAuthorityProperties(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListGroupVersionsRequest
 */
export interface GreengrassListGroupVersionsRequest {
  /**
   * @schema GreengrassListGroupVersionsRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassListGroupVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListGroupVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListGroupVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListGroupVersionsRequest(obj: GreengrassListGroupVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListGroupVersionsResponse
 */
export interface GreengrassListGroupVersionsResponse {
  /**
   * @schema GreengrassListGroupVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListGroupVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListGroupVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListGroupVersionsResponse(obj: GreengrassListGroupVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListGroupsRequest
 */
export interface GreengrassListGroupsRequest {
  /**
   * @schema GreengrassListGroupsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListGroupsRequest(obj: GreengrassListGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListGroupsResponse
 */
export interface GreengrassListGroupsResponse {
  /**
   * @schema GreengrassListGroupsResponse#Groups
   */
  readonly groups?: GreengrassGroupInformation[];

  /**
   * @schema GreengrassListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListGroupsResponse(obj: GreengrassListGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Groups': obj.groups?.map(y => toJson_GreengrassGroupInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListLoggerDefinitionVersionsRequest
 */
export interface GreengrassListLoggerDefinitionVersionsRequest {
  /**
   * @schema GreengrassListLoggerDefinitionVersionsRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId?: string;

  /**
   * @schema GreengrassListLoggerDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListLoggerDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListLoggerDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListLoggerDefinitionVersionsRequest(obj: GreengrassListLoggerDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggerDefinitionId': obj.loggerDefinitionId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListLoggerDefinitionVersionsResponse
 */
export interface GreengrassListLoggerDefinitionVersionsResponse {
  /**
   * @schema GreengrassListLoggerDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListLoggerDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListLoggerDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListLoggerDefinitionVersionsResponse(obj: GreengrassListLoggerDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListLoggerDefinitionsRequest
 */
export interface GreengrassListLoggerDefinitionsRequest {
  /**
   * @schema GreengrassListLoggerDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListLoggerDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListLoggerDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListLoggerDefinitionsRequest(obj: GreengrassListLoggerDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListLoggerDefinitionsResponse
 */
export interface GreengrassListLoggerDefinitionsResponse {
  /**
   * @schema GreengrassListLoggerDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListLoggerDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListLoggerDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListLoggerDefinitionsResponse(obj: GreengrassListLoggerDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListResourceDefinitionVersionsRequest
 */
export interface GreengrassListResourceDefinitionVersionsRequest {
  /**
   * @schema GreengrassListResourceDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListResourceDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListResourceDefinitionVersionsRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassListResourceDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListResourceDefinitionVersionsRequest(obj: GreengrassListResourceDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ResourceDefinitionId': obj.resourceDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListResourceDefinitionVersionsResponse
 */
export interface GreengrassListResourceDefinitionVersionsResponse {
  /**
   * @schema GreengrassListResourceDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListResourceDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListResourceDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListResourceDefinitionVersionsResponse(obj: GreengrassListResourceDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListResourceDefinitionsRequest
 */
export interface GreengrassListResourceDefinitionsRequest {
  /**
   * @schema GreengrassListResourceDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListResourceDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListResourceDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListResourceDefinitionsRequest(obj: GreengrassListResourceDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListResourceDefinitionsResponse
 */
export interface GreengrassListResourceDefinitionsResponse {
  /**
   * @schema GreengrassListResourceDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListResourceDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListResourceDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListResourceDefinitionsResponse(obj: GreengrassListResourceDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListSubscriptionDefinitionVersionsRequest
 */
export interface GreengrassListSubscriptionDefinitionVersionsRequest {
  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassListSubscriptionDefinitionVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListSubscriptionDefinitionVersionsRequest(obj: GreengrassListSubscriptionDefinitionVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'SubscriptionDefinitionId': obj.subscriptionDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListSubscriptionDefinitionVersionsResponse
 */
export interface GreengrassListSubscriptionDefinitionVersionsResponse {
  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionVersionsResponse#Versions
   */
  readonly versions?: GreengrassVersionInformation[];

}

/**
 * Converts an object of type 'GreengrassListSubscriptionDefinitionVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListSubscriptionDefinitionVersionsResponse(obj: GreengrassListSubscriptionDefinitionVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Versions': obj.versions?.map(y => toJson_GreengrassVersionInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListSubscriptionDefinitionsRequest
 */
export interface GreengrassListSubscriptionDefinitionsRequest {
  /**
   * @schema GreengrassListSubscriptionDefinitionsRequest#MaxResults
   */
  readonly maxResults?: string;

  /**
   * @schema GreengrassListSubscriptionDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListSubscriptionDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListSubscriptionDefinitionsRequest(obj: GreengrassListSubscriptionDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListSubscriptionDefinitionsResponse
 */
export interface GreengrassListSubscriptionDefinitionsResponse {
  /**
   * @schema GreengrassListSubscriptionDefinitionsResponse#Definitions
   */
  readonly definitions?: GreengrassDefinitionInformation[];

  /**
   * @schema GreengrassListSubscriptionDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassListSubscriptionDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListSubscriptionDefinitionsResponse(obj: GreengrassListSubscriptionDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Definitions': obj.definitions?.map(y => toJson_GreengrassDefinitionInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListTagsForResourceRequest
 */
export interface GreengrassListTagsForResourceRequest {
  /**
   * @schema GreengrassListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'GreengrassListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListTagsForResourceRequest(obj: GreengrassListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassListTagsForResourceResponse
 */
export interface GreengrassListTagsForResourceResponse {
  /**
   * @schema GreengrassListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassListTagsForResourceResponse(obj: GreengrassListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResetDeploymentsRequest
 */
export interface GreengrassResetDeploymentsRequest {
  /**
   * @schema GreengrassResetDeploymentsRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassResetDeploymentsRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema GreengrassResetDeploymentsRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassResetDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResetDeploymentsRequest(obj: GreengrassResetDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'Force': obj.force,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResetDeploymentsResponse
 */
export interface GreengrassResetDeploymentsResponse {
  /**
   * @schema GreengrassResetDeploymentsResponse#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassResetDeploymentsResponse#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * Converts an object of type 'GreengrassResetDeploymentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResetDeploymentsResponse(obj: GreengrassResetDeploymentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentArn': obj.deploymentArn,
    'DeploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassStartBulkDeploymentRequest
 */
export interface GreengrassStartBulkDeploymentRequest {
  /**
   * @schema GreengrassStartBulkDeploymentRequest#AmznClientToken
   */
  readonly amznClientToken?: string;

  /**
   * @schema GreengrassStartBulkDeploymentRequest#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema GreengrassStartBulkDeploymentRequest#InputFileUri
   */
  readonly inputFileUri?: string;

  /**
   * @schema GreengrassStartBulkDeploymentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassStartBulkDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassStartBulkDeploymentRequest(obj: GreengrassStartBulkDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmznClientToken': obj.amznClientToken,
    'ExecutionRoleArn': obj.executionRoleArn,
    'InputFileUri': obj.inputFileUri,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassStartBulkDeploymentResponse
 */
export interface GreengrassStartBulkDeploymentResponse {
  /**
   * @schema GreengrassStartBulkDeploymentResponse#BulkDeploymentArn
   */
  readonly bulkDeploymentArn?: string;

  /**
   * @schema GreengrassStartBulkDeploymentResponse#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

}

/**
 * Converts an object of type 'GreengrassStartBulkDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassStartBulkDeploymentResponse(obj: GreengrassStartBulkDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeploymentArn': obj.bulkDeploymentArn,
    'BulkDeploymentId': obj.bulkDeploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassStopBulkDeploymentRequest
 */
export interface GreengrassStopBulkDeploymentRequest {
  /**
   * @schema GreengrassStopBulkDeploymentRequest#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

}

/**
 * Converts an object of type 'GreengrassStopBulkDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassStopBulkDeploymentRequest(obj: GreengrassStopBulkDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeploymentId': obj.bulkDeploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassStopBulkDeploymentResponse
 */
export interface GreengrassStopBulkDeploymentResponse {
}

/**
 * Converts an object of type 'GreengrassStopBulkDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassStopBulkDeploymentResponse(obj: GreengrassStopBulkDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassTagResourceRequest
 */
export interface GreengrassTagResourceRequest {
  /**
   * @schema GreengrassTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GreengrassTagResourceRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassTagResourceRequest(obj: GreengrassTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUntagResourceRequest
 */
export interface GreengrassUntagResourceRequest {
  /**
   * @schema GreengrassUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema GreengrassUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'GreengrassUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUntagResourceRequest(obj: GreengrassUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateConnectivityInfoRequest
 */
export interface GreengrassUpdateConnectivityInfoRequest {
  /**
   * @schema GreengrassUpdateConnectivityInfoRequest#ConnectivityInfo
   */
  readonly connectivityInfo?: GreengrassConnectivityInfo[];

  /**
   * @schema GreengrassUpdateConnectivityInfoRequest#ThingName
   */
  readonly thingName?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateConnectivityInfoRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateConnectivityInfoRequest(obj: GreengrassUpdateConnectivityInfoRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectivityInfo': obj.connectivityInfo?.map(y => toJson_GreengrassConnectivityInfo(y)),
    'ThingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateConnectivityInfoResponse
 */
export interface GreengrassUpdateConnectivityInfoResponse {
  /**
   * @schema GreengrassUpdateConnectivityInfoResponse#Message
   */
  readonly message?: string;

  /**
   * @schema GreengrassUpdateConnectivityInfoResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateConnectivityInfoResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateConnectivityInfoResponse(obj: GreengrassUpdateConnectivityInfoResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateConnectorDefinitionRequest
 */
export interface GreengrassUpdateConnectorDefinitionRequest {
  /**
   * @schema GreengrassUpdateConnectorDefinitionRequest#ConnectorDefinitionId
   */
  readonly connectorDefinitionId?: string;

  /**
   * @schema GreengrassUpdateConnectorDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateConnectorDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateConnectorDefinitionRequest(obj: GreengrassUpdateConnectorDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorDefinitionId': obj.connectorDefinitionId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateConnectorDefinitionResponse
 */
export interface GreengrassUpdateConnectorDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateConnectorDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateConnectorDefinitionResponse(obj: GreengrassUpdateConnectorDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateCoreDefinitionRequest
 */
export interface GreengrassUpdateCoreDefinitionRequest {
  /**
   * @schema GreengrassUpdateCoreDefinitionRequest#CoreDefinitionId
   */
  readonly coreDefinitionId?: string;

  /**
   * @schema GreengrassUpdateCoreDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateCoreDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateCoreDefinitionRequest(obj: GreengrassUpdateCoreDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CoreDefinitionId': obj.coreDefinitionId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateCoreDefinitionResponse
 */
export interface GreengrassUpdateCoreDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateCoreDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateCoreDefinitionResponse(obj: GreengrassUpdateCoreDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateDeviceDefinitionRequest
 */
export interface GreengrassUpdateDeviceDefinitionRequest {
  /**
   * @schema GreengrassUpdateDeviceDefinitionRequest#DeviceDefinitionId
   */
  readonly deviceDefinitionId?: string;

  /**
   * @schema GreengrassUpdateDeviceDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateDeviceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateDeviceDefinitionRequest(obj: GreengrassUpdateDeviceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceDefinitionId': obj.deviceDefinitionId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateDeviceDefinitionResponse
 */
export interface GreengrassUpdateDeviceDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateDeviceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateDeviceDefinitionResponse(obj: GreengrassUpdateDeviceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateFunctionDefinitionRequest
 */
export interface GreengrassUpdateFunctionDefinitionRequest {
  /**
   * @schema GreengrassUpdateFunctionDefinitionRequest#FunctionDefinitionId
   */
  readonly functionDefinitionId?: string;

  /**
   * @schema GreengrassUpdateFunctionDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateFunctionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateFunctionDefinitionRequest(obj: GreengrassUpdateFunctionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionDefinitionId': obj.functionDefinitionId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateFunctionDefinitionResponse
 */
export interface GreengrassUpdateFunctionDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateFunctionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateFunctionDefinitionResponse(obj: GreengrassUpdateFunctionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateGroupRequest
 */
export interface GreengrassUpdateGroupRequest {
  /**
   * @schema GreengrassUpdateGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema GreengrassUpdateGroupRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateGroupRequest(obj: GreengrassUpdateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateGroupResponse
 */
export interface GreengrassUpdateGroupResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateGroupResponse(obj: GreengrassUpdateGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateGroupCertificateConfigurationRequest
 */
export interface GreengrassUpdateGroupCertificateConfigurationRequest {
  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationRequest#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateGroupCertificateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateGroupCertificateConfigurationRequest(obj: GreengrassUpdateGroupCertificateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateExpiryInMilliseconds': obj.certificateExpiryInMilliseconds,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateGroupCertificateConfigurationResponse
 */
export interface GreengrassUpdateGroupCertificateConfigurationResponse {
  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationResponse#CertificateAuthorityExpiryInMilliseconds
   */
  readonly certificateAuthorityExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationResponse#CertificateExpiryInMilliseconds
   */
  readonly certificateExpiryInMilliseconds?: string;

  /**
   * @schema GreengrassUpdateGroupCertificateConfigurationResponse#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateGroupCertificateConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateGroupCertificateConfigurationResponse(obj: GreengrassUpdateGroupCertificateConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityExpiryInMilliseconds': obj.certificateAuthorityExpiryInMilliseconds,
    'CertificateExpiryInMilliseconds': obj.certificateExpiryInMilliseconds,
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateLoggerDefinitionRequest
 */
export interface GreengrassUpdateLoggerDefinitionRequest {
  /**
   * @schema GreengrassUpdateLoggerDefinitionRequest#LoggerDefinitionId
   */
  readonly loggerDefinitionId?: string;

  /**
   * @schema GreengrassUpdateLoggerDefinitionRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateLoggerDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateLoggerDefinitionRequest(obj: GreengrassUpdateLoggerDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggerDefinitionId': obj.loggerDefinitionId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateLoggerDefinitionResponse
 */
export interface GreengrassUpdateLoggerDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateLoggerDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateLoggerDefinitionResponse(obj: GreengrassUpdateLoggerDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateResourceDefinitionRequest
 */
export interface GreengrassUpdateResourceDefinitionRequest {
  /**
   * @schema GreengrassUpdateResourceDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassUpdateResourceDefinitionRequest#ResourceDefinitionId
   */
  readonly resourceDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateResourceDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateResourceDefinitionRequest(obj: GreengrassUpdateResourceDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ResourceDefinitionId': obj.resourceDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateResourceDefinitionResponse
 */
export interface GreengrassUpdateResourceDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateResourceDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateResourceDefinitionResponse(obj: GreengrassUpdateResourceDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateSubscriptionDefinitionRequest
 */
export interface GreengrassUpdateSubscriptionDefinitionRequest {
  /**
   * @schema GreengrassUpdateSubscriptionDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassUpdateSubscriptionDefinitionRequest#SubscriptionDefinitionId
   */
  readonly subscriptionDefinitionId?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateSubscriptionDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateSubscriptionDefinitionRequest(obj: GreengrassUpdateSubscriptionDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SubscriptionDefinitionId': obj.subscriptionDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateSubscriptionDefinitionResponse
 */
export interface GreengrassUpdateSubscriptionDefinitionResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateSubscriptionDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateSubscriptionDefinitionResponse(obj: GreengrassUpdateSubscriptionDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateThingRuntimeConfigurationRequest
 */
export interface GreengrassUpdateThingRuntimeConfigurationRequest {
  /**
   * @schema GreengrassUpdateThingRuntimeConfigurationRequest#TelemetryConfiguration
   */
  readonly telemetryConfiguration?: GreengrassTelemetryConfigurationUpdate;

  /**
   * @schema GreengrassUpdateThingRuntimeConfigurationRequest#ThingName
   */
  readonly thingName?: string;

}

/**
 * Converts an object of type 'GreengrassUpdateThingRuntimeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateThingRuntimeConfigurationRequest(obj: GreengrassUpdateThingRuntimeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TelemetryConfiguration': toJson_GreengrassTelemetryConfigurationUpdate(obj.telemetryConfiguration),
    'ThingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassUpdateThingRuntimeConfigurationResponse
 */
export interface GreengrassUpdateThingRuntimeConfigurationResponse {
}

/**
 * Converts an object of type 'GreengrassUpdateThingRuntimeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassUpdateThingRuntimeConfigurationResponse(obj: GreengrassUpdateThingRuntimeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassConnectorDefinitionVersion
 */
export interface GreengrassConnectorDefinitionVersion {
  /**
   * @schema GreengrassConnectorDefinitionVersion#Connectors
   */
  readonly connectors?: GreengrassConnector[];

}

/**
 * Converts an object of type 'GreengrassConnectorDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassConnectorDefinitionVersion(obj: GreengrassConnectorDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connectors': obj.connectors?.map(y => toJson_GreengrassConnector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassConnector
 */
export interface GreengrassConnector {
  /**
   * @schema GreengrassConnector#ConnectorArn
   */
  readonly connectorArn?: string;

  /**
   * @schema GreengrassConnector#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassConnector#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassConnector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassConnector(obj: GreengrassConnector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorArn': obj.connectorArn,
    'Id': obj.id,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCoreDefinitionVersion
 */
export interface GreengrassCoreDefinitionVersion {
  /**
   * @schema GreengrassCoreDefinitionVersion#Cores
   */
  readonly cores?: GreengrassCore[];

}

/**
 * Converts an object of type 'GreengrassCoreDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCoreDefinitionVersion(obj: GreengrassCoreDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cores': obj.cores?.map(y => toJson_GreengrassCore(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassCore
 */
export interface GreengrassCore {
  /**
   * @schema GreengrassCore#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema GreengrassCore#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassCore#SyncShadow
   */
  readonly syncShadow?: boolean;

  /**
   * @schema GreengrassCore#ThingArn
   */
  readonly thingArn?: string;

}

/**
 * Converts an object of type 'GreengrassCore' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassCore(obj: GreengrassCore | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Id': obj.id,
    'SyncShadow': obj.syncShadow,
    'ThingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeviceDefinitionVersion
 */
export interface GreengrassDeviceDefinitionVersion {
  /**
   * @schema GreengrassDeviceDefinitionVersion#Devices
   */
  readonly devices?: GreengrassDevice[];

}

/**
 * Converts an object of type 'GreengrassDeviceDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeviceDefinitionVersion(obj: GreengrassDeviceDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Devices': obj.devices?.map(y => toJson_GreengrassDevice(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDevice
 */
export interface GreengrassDevice {
  /**
   * @schema GreengrassDevice#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema GreengrassDevice#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassDevice#SyncShadow
   */
  readonly syncShadow?: boolean;

  /**
   * @schema GreengrassDevice#ThingArn
   */
  readonly thingArn?: string;

}

/**
 * Converts an object of type 'GreengrassDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDevice(obj: GreengrassDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Id': obj.id,
    'SyncShadow': obj.syncShadow,
    'ThingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionDefinitionVersion
 */
export interface GreengrassFunctionDefinitionVersion {
  /**
   * @schema GreengrassFunctionDefinitionVersion#DefaultConfig
   */
  readonly defaultConfig?: GreengrassFunctionDefaultConfig;

  /**
   * @schema GreengrassFunctionDefinitionVersion#Functions
   */
  readonly functions?: GreengrassFunction[];

}

/**
 * Converts an object of type 'GreengrassFunctionDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionDefinitionVersion(obj: GreengrassFunctionDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultConfig': toJson_GreengrassFunctionDefaultConfig(obj.defaultConfig),
    'Functions': obj.functions?.map(y => toJson_GreengrassFunction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionDefaultConfig
 */
export interface GreengrassFunctionDefaultConfig {
  /**
   * @schema GreengrassFunctionDefaultConfig#Execution
   */
  readonly execution?: GreengrassFunctionDefaultExecutionConfig;

}

/**
 * Converts an object of type 'GreengrassFunctionDefaultConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionDefaultConfig(obj: GreengrassFunctionDefaultConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Execution': toJson_GreengrassFunctionDefaultExecutionConfig(obj.execution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunction
 */
export interface GreengrassFunction {
  /**
   * @schema GreengrassFunction#FunctionArn
   */
  readonly functionArn?: string;

  /**
   * @schema GreengrassFunction#FunctionConfiguration
   */
  readonly functionConfiguration?: GreengrassFunctionConfiguration;

  /**
   * @schema GreengrassFunction#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'GreengrassFunction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunction(obj: GreengrassFunction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FunctionArn': obj.functionArn,
    'FunctionConfiguration': toJson_GreengrassFunctionConfiguration(obj.functionConfiguration),
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGroupVersion
 */
export interface GreengrassGroupVersion {
  /**
   * @schema GreengrassGroupVersion#ConnectorDefinitionVersionArn
   */
  readonly connectorDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#CoreDefinitionVersionArn
   */
  readonly coreDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#DeviceDefinitionVersionArn
   */
  readonly deviceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#FunctionDefinitionVersionArn
   */
  readonly functionDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#LoggerDefinitionVersionArn
   */
  readonly loggerDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#ResourceDefinitionVersionArn
   */
  readonly resourceDefinitionVersionArn?: string;

  /**
   * @schema GreengrassGroupVersion#SubscriptionDefinitionVersionArn
   */
  readonly subscriptionDefinitionVersionArn?: string;

}

/**
 * Converts an object of type 'GreengrassGroupVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGroupVersion(obj: GreengrassGroupVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorDefinitionVersionArn': obj.connectorDefinitionVersionArn,
    'CoreDefinitionVersionArn': obj.coreDefinitionVersionArn,
    'DeviceDefinitionVersionArn': obj.deviceDefinitionVersionArn,
    'FunctionDefinitionVersionArn': obj.functionDefinitionVersionArn,
    'LoggerDefinitionVersionArn': obj.loggerDefinitionVersionArn,
    'ResourceDefinitionVersionArn': obj.resourceDefinitionVersionArn,
    'SubscriptionDefinitionVersionArn': obj.subscriptionDefinitionVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassLoggerDefinitionVersion
 */
export interface GreengrassLoggerDefinitionVersion {
  /**
   * @schema GreengrassLoggerDefinitionVersion#Loggers
   */
  readonly loggers?: GreengrassLogger[];

}

/**
 * Converts an object of type 'GreengrassLoggerDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassLoggerDefinitionVersion(obj: GreengrassLoggerDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Loggers': obj.loggers?.map(y => toJson_GreengrassLogger(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassLogger
 */
export interface GreengrassLogger {
  /**
   * @schema GreengrassLogger#Component
   */
  readonly component?: string;

  /**
   * @schema GreengrassLogger#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassLogger#Level
   */
  readonly level?: string;

  /**
   * @schema GreengrassLogger#Space
   */
  readonly space?: number;

  /**
   * @schema GreengrassLogger#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'GreengrassLogger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassLogger(obj: GreengrassLogger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Component': obj.component,
    'Id': obj.id,
    'Level': obj.level,
    'Space': obj.space,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResourceDefinitionVersion
 */
export interface GreengrassResourceDefinitionVersion {
  /**
   * @schema GreengrassResourceDefinitionVersion#Resources
   */
  readonly resources?: GreengrassResource[];

}

/**
 * Converts an object of type 'GreengrassResourceDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResourceDefinitionVersion(obj: GreengrassResourceDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': obj.resources?.map(y => toJson_GreengrassResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResource
 */
export interface GreengrassResource {
  /**
   * @schema GreengrassResource#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassResource#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassResource#ResourceDataContainer
   */
  readonly resourceDataContainer?: GreengrassResourceDataContainer;

}

/**
 * Converts an object of type 'GreengrassResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResource(obj: GreengrassResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'ResourceDataContainer': toJson_GreengrassResourceDataContainer(obj.resourceDataContainer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassSubscriptionDefinitionVersion
 */
export interface GreengrassSubscriptionDefinitionVersion {
  /**
   * @schema GreengrassSubscriptionDefinitionVersion#Subscriptions
   */
  readonly subscriptions?: GreengrassSubscription[];

}

/**
 * Converts an object of type 'GreengrassSubscriptionDefinitionVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassSubscriptionDefinitionVersion(obj: GreengrassSubscriptionDefinitionVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscriptions': obj.subscriptions?.map(y => toJson_GreengrassSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassSubscription
 */
export interface GreengrassSubscription {
  /**
   * @schema GreengrassSubscription#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassSubscription#Source
   */
  readonly source?: string;

  /**
   * @schema GreengrassSubscription#Subject
   */
  readonly subject?: string;

  /**
   * @schema GreengrassSubscription#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'GreengrassSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassSubscription(obj: GreengrassSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Source': obj.source,
    'Subject': obj.subject,
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassBulkDeploymentMetrics
 */
export interface GreengrassBulkDeploymentMetrics {
  /**
   * @schema GreengrassBulkDeploymentMetrics#InvalidInputRecords
   */
  readonly invalidInputRecords?: number;

  /**
   * @schema GreengrassBulkDeploymentMetrics#RecordsProcessed
   */
  readonly recordsProcessed?: number;

  /**
   * @schema GreengrassBulkDeploymentMetrics#RetryAttempts
   */
  readonly retryAttempts?: number;

}

/**
 * Converts an object of type 'GreengrassBulkDeploymentMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassBulkDeploymentMetrics(obj: GreengrassBulkDeploymentMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvalidInputRecords': obj.invalidInputRecords,
    'RecordsProcessed': obj.recordsProcessed,
    'RetryAttempts': obj.retryAttempts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassErrorDetail
 */
export interface GreengrassErrorDetail {
  /**
   * @schema GreengrassErrorDetail#DetailedErrorCode
   */
  readonly detailedErrorCode?: string;

  /**
   * @schema GreengrassErrorDetail#DetailedErrorMessage
   */
  readonly detailedErrorMessage?: string;

}

/**
 * Converts an object of type 'GreengrassErrorDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassErrorDetail(obj: GreengrassErrorDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetailedErrorCode': obj.detailedErrorCode,
    'DetailedErrorMessage': obj.detailedErrorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassConnectivityInfo
 */
export interface GreengrassConnectivityInfo {
  /**
   * @schema GreengrassConnectivityInfo#HostAddress
   */
  readonly hostAddress?: string;

  /**
   * @schema GreengrassConnectivityInfo#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassConnectivityInfo#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema GreengrassConnectivityInfo#PortNumber
   */
  readonly portNumber?: number;

}

/**
 * Converts an object of type 'GreengrassConnectivityInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassConnectivityInfo(obj: GreengrassConnectivityInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostAddress': obj.hostAddress,
    'Id': obj.id,
    'Metadata': obj.metadata,
    'PortNumber': obj.portNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassRuntimeConfiguration
 */
export interface GreengrassRuntimeConfiguration {
  /**
   * @schema GreengrassRuntimeConfiguration#TelemetryConfiguration
   */
  readonly telemetryConfiguration?: GreengrassTelemetryConfiguration;

}

/**
 * Converts an object of type 'GreengrassRuntimeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassRuntimeConfiguration(obj: GreengrassRuntimeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TelemetryConfiguration': toJson_GreengrassTelemetryConfiguration(obj.telemetryConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassBulkDeploymentResult
 */
export interface GreengrassBulkDeploymentResult {
  /**
   * @schema GreengrassBulkDeploymentResult#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#ErrorDetails
   */
  readonly errorDetails?: GreengrassErrorDetail[];

  /**
   * @schema GreengrassBulkDeploymentResult#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema GreengrassBulkDeploymentResult#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * Converts an object of type 'GreengrassBulkDeploymentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassBulkDeploymentResult(obj: GreengrassBulkDeploymentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'DeploymentArn': obj.deploymentArn,
    'DeploymentId': obj.deploymentId,
    'DeploymentStatus': obj.deploymentStatus,
    'DeploymentType': obj.deploymentType,
    'ErrorDetails': obj.errorDetails?.map(y => toJson_GreengrassErrorDetail(y)),
    'ErrorMessage': obj.errorMessage,
    'GroupArn': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassBulkDeployment
 */
export interface GreengrassBulkDeployment {
  /**
   * @schema GreengrassBulkDeployment#BulkDeploymentArn
   */
  readonly bulkDeploymentArn?: string;

  /**
   * @schema GreengrassBulkDeployment#BulkDeploymentId
   */
  readonly bulkDeploymentId?: string;

  /**
   * @schema GreengrassBulkDeployment#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'GreengrassBulkDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassBulkDeployment(obj: GreengrassBulkDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkDeploymentArn': obj.bulkDeploymentArn,
    'BulkDeploymentId': obj.bulkDeploymentId,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassVersionInformation
 */
export interface GreengrassVersionInformation {
  /**
   * @schema GreengrassVersionInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassVersionInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassVersionInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassVersionInformation#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'GreengrassVersionInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassVersionInformation(obj: GreengrassVersionInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDefinitionInformation
 */
export interface GreengrassDefinitionInformation {
  /**
   * @schema GreengrassDefinitionInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassDefinitionInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassDefinitionInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassDefinitionInformation#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassDefinitionInformation#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassDefinitionInformation#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassDefinitionInformation#Name
   */
  readonly name?: string;

  /**
   * @schema GreengrassDefinitionInformation#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassDefinitionInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDefinitionInformation(obj: GreengrassDefinitionInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassDeployment
 */
export interface GreengrassDeployment {
  /**
   * @schema GreengrassDeployment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GreengrassDeployment#DeploymentArn
   */
  readonly deploymentArn?: string;

  /**
   * @schema GreengrassDeployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassDeployment#DeploymentType
   */
  readonly deploymentType?: string;

  /**
   * @schema GreengrassDeployment#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * Converts an object of type 'GreengrassDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassDeployment(obj: GreengrassDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'DeploymentArn': obj.deploymentArn,
    'DeploymentId': obj.deploymentId,
    'DeploymentType': obj.deploymentType,
    'GroupArn': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGroupCertificateAuthorityProperties
 */
export interface GreengrassGroupCertificateAuthorityProperties {
  /**
   * @schema GreengrassGroupCertificateAuthorityProperties#GroupCertificateAuthorityArn
   */
  readonly groupCertificateAuthorityArn?: string;

  /**
   * @schema GreengrassGroupCertificateAuthorityProperties#GroupCertificateAuthorityId
   */
  readonly groupCertificateAuthorityId?: string;

}

/**
 * Converts an object of type 'GreengrassGroupCertificateAuthorityProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGroupCertificateAuthorityProperties(obj: GreengrassGroupCertificateAuthorityProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupCertificateAuthorityArn': obj.groupCertificateAuthorityArn,
    'GroupCertificateAuthorityId': obj.groupCertificateAuthorityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGroupInformation
 */
export interface GreengrassGroupInformation {
  /**
   * @schema GreengrassGroupInformation#Arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassGroupInformation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassGroupInformation#Id
   */
  readonly id?: string;

  /**
   * @schema GreengrassGroupInformation#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GreengrassGroupInformation#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema GreengrassGroupInformation#LatestVersionArn
   */
  readonly latestVersionArn?: string;

  /**
   * @schema GreengrassGroupInformation#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'GreengrassGroupInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGroupInformation(obj: GreengrassGroupInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTimestamp': obj.creationTimestamp,
    'Id': obj.id,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LatestVersion': obj.latestVersion,
    'LatestVersionArn': obj.latestVersionArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassTelemetryConfigurationUpdate
 */
export interface GreengrassTelemetryConfigurationUpdate {
  /**
   * @schema GreengrassTelemetryConfigurationUpdate#Telemetry
   */
  readonly telemetry?: string;

}

/**
 * Converts an object of type 'GreengrassTelemetryConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassTelemetryConfigurationUpdate(obj: GreengrassTelemetryConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Telemetry': obj.telemetry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionDefaultExecutionConfig
 */
export interface GreengrassFunctionDefaultExecutionConfig {
  /**
   * @schema GreengrassFunctionDefaultExecutionConfig#IsolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema GreengrassFunctionDefaultExecutionConfig#RunAs
   */
  readonly runAs?: GreengrassFunctionRunAsConfig;

}

/**
 * Converts an object of type 'GreengrassFunctionDefaultExecutionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionDefaultExecutionConfig(obj: GreengrassFunctionDefaultExecutionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsolationMode': obj.isolationMode,
    'RunAs': toJson_GreengrassFunctionRunAsConfig(obj.runAs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionConfiguration
 */
export interface GreengrassFunctionConfiguration {
  /**
   * @schema GreengrassFunctionConfiguration#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema GreengrassFunctionConfiguration#Environment
   */
  readonly environment?: GreengrassFunctionConfigurationEnvironment;

  /**
   * @schema GreengrassFunctionConfiguration#ExecArgs
   */
  readonly execArgs?: string;

  /**
   * @schema GreengrassFunctionConfiguration#Executable
   */
  readonly executable?: string;

  /**
   * @schema GreengrassFunctionConfiguration#MemorySize
   */
  readonly memorySize?: number;

  /**
   * @schema GreengrassFunctionConfiguration#Pinned
   */
  readonly pinned?: boolean;

  /**
   * @schema GreengrassFunctionConfiguration#Timeout
   */
  readonly timeout?: number;

}

/**
 * Converts an object of type 'GreengrassFunctionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionConfiguration(obj: GreengrassFunctionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncodingType': obj.encodingType,
    'Environment': toJson_GreengrassFunctionConfigurationEnvironment(obj.environment),
    'ExecArgs': obj.execArgs,
    'Executable': obj.executable,
    'MemorySize': obj.memorySize,
    'Pinned': obj.pinned,
    'Timeout': obj.timeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResourceDataContainer
 */
export interface GreengrassResourceDataContainer {
  /**
   * @schema GreengrassResourceDataContainer#LocalDeviceResourceData
   */
  readonly localDeviceResourceData?: GreengrassLocalDeviceResourceData;

  /**
   * @schema GreengrassResourceDataContainer#LocalVolumeResourceData
   */
  readonly localVolumeResourceData?: GreengrassLocalVolumeResourceData;

  /**
   * @schema GreengrassResourceDataContainer#S3MachineLearningModelResourceData
   */
  readonly s3MachineLearningModelResourceData?: GreengrassS3MachineLearningModelResourceData;

  /**
   * @schema GreengrassResourceDataContainer#SageMakerMachineLearningModelResourceData
   */
  readonly sageMakerMachineLearningModelResourceData?: GreengrassSageMakerMachineLearningModelResourceData;

  /**
   * @schema GreengrassResourceDataContainer#SecretsManagerSecretResourceData
   */
  readonly secretsManagerSecretResourceData?: GreengrassSecretsManagerSecretResourceData;

}

/**
 * Converts an object of type 'GreengrassResourceDataContainer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResourceDataContainer(obj: GreengrassResourceDataContainer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocalDeviceResourceData': toJson_GreengrassLocalDeviceResourceData(obj.localDeviceResourceData),
    'LocalVolumeResourceData': toJson_GreengrassLocalVolumeResourceData(obj.localVolumeResourceData),
    'S3MachineLearningModelResourceData': toJson_GreengrassS3MachineLearningModelResourceData(obj.s3MachineLearningModelResourceData),
    'SageMakerMachineLearningModelResourceData': toJson_GreengrassSageMakerMachineLearningModelResourceData(obj.sageMakerMachineLearningModelResourceData),
    'SecretsManagerSecretResourceData': toJson_GreengrassSecretsManagerSecretResourceData(obj.secretsManagerSecretResourceData),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassTelemetryConfiguration
 */
export interface GreengrassTelemetryConfiguration {
  /**
   * @schema GreengrassTelemetryConfiguration#ConfigurationSyncStatus
   */
  readonly configurationSyncStatus?: string;

  /**
   * @schema GreengrassTelemetryConfiguration#Telemetry
   */
  readonly telemetry?: string;

}

/**
 * Converts an object of type 'GreengrassTelemetryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassTelemetryConfiguration(obj: GreengrassTelemetryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSyncStatus': obj.configurationSyncStatus,
    'Telemetry': obj.telemetry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionRunAsConfig
 */
export interface GreengrassFunctionRunAsConfig {
  /**
   * @schema GreengrassFunctionRunAsConfig#Gid
   */
  readonly gid?: number;

  /**
   * @schema GreengrassFunctionRunAsConfig#Uid
   */
  readonly uid?: number;

}

/**
 * Converts an object of type 'GreengrassFunctionRunAsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionRunAsConfig(obj: GreengrassFunctionRunAsConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gid': obj.gid,
    'Uid': obj.uid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionConfigurationEnvironment
 */
export interface GreengrassFunctionConfigurationEnvironment {
  /**
   * @schema GreengrassFunctionConfigurationEnvironment#AccessSysfs
   */
  readonly accessSysfs?: boolean;

  /**
   * @schema GreengrassFunctionConfigurationEnvironment#Execution
   */
  readonly execution?: GreengrassFunctionExecutionConfig;

  /**
   * @schema GreengrassFunctionConfigurationEnvironment#ResourceAccessPolicies
   */
  readonly resourceAccessPolicies?: GreengrassResourceAccessPolicy[];

  /**
   * @schema GreengrassFunctionConfigurationEnvironment#Variables
   */
  readonly variables?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassFunctionConfigurationEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionConfigurationEnvironment(obj: GreengrassFunctionConfigurationEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessSysfs': obj.accessSysfs,
    'Execution': toJson_GreengrassFunctionExecutionConfig(obj.execution),
    'ResourceAccessPolicies': obj.resourceAccessPolicies?.map(y => toJson_GreengrassResourceAccessPolicy(y)),
    'Variables': ((obj.variables) === undefined) ? undefined : (Object.entries(obj.variables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassLocalDeviceResourceData
 */
export interface GreengrassLocalDeviceResourceData {
  /**
   * @schema GreengrassLocalDeviceResourceData#GroupOwnerSetting
   */
  readonly groupOwnerSetting?: GreengrassGroupOwnerSetting;

  /**
   * @schema GreengrassLocalDeviceResourceData#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * Converts an object of type 'GreengrassLocalDeviceResourceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassLocalDeviceResourceData(obj: GreengrassLocalDeviceResourceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupOwnerSetting': toJson_GreengrassGroupOwnerSetting(obj.groupOwnerSetting),
    'SourcePath': obj.sourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassLocalVolumeResourceData
 */
export interface GreengrassLocalVolumeResourceData {
  /**
   * @schema GreengrassLocalVolumeResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema GreengrassLocalVolumeResourceData#GroupOwnerSetting
   */
  readonly groupOwnerSetting?: GreengrassGroupOwnerSetting;

  /**
   * @schema GreengrassLocalVolumeResourceData#SourcePath
   */
  readonly sourcePath?: string;

}

/**
 * Converts an object of type 'GreengrassLocalVolumeResourceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassLocalVolumeResourceData(obj: GreengrassLocalVolumeResourceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationPath': obj.destinationPath,
    'GroupOwnerSetting': toJson_GreengrassGroupOwnerSetting(obj.groupOwnerSetting),
    'SourcePath': obj.sourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassS3MachineLearningModelResourceData
 */
export interface GreengrassS3MachineLearningModelResourceData {
  /**
   * @schema GreengrassS3MachineLearningModelResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema GreengrassS3MachineLearningModelResourceData#OwnerSetting
   */
  readonly ownerSetting?: GreengrassResourceDownloadOwnerSetting;

  /**
   * @schema GreengrassS3MachineLearningModelResourceData#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * Converts an object of type 'GreengrassS3MachineLearningModelResourceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassS3MachineLearningModelResourceData(obj: GreengrassS3MachineLearningModelResourceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationPath': obj.destinationPath,
    'OwnerSetting': toJson_GreengrassResourceDownloadOwnerSetting(obj.ownerSetting),
    'S3Uri': obj.s3Uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassSageMakerMachineLearningModelResourceData
 */
export interface GreengrassSageMakerMachineLearningModelResourceData {
  /**
   * @schema GreengrassSageMakerMachineLearningModelResourceData#DestinationPath
   */
  readonly destinationPath?: string;

  /**
   * @schema GreengrassSageMakerMachineLearningModelResourceData#OwnerSetting
   */
  readonly ownerSetting?: GreengrassResourceDownloadOwnerSetting;

  /**
   * @schema GreengrassSageMakerMachineLearningModelResourceData#SageMakerJobArn
   */
  readonly sageMakerJobArn?: string;

}

/**
 * Converts an object of type 'GreengrassSageMakerMachineLearningModelResourceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassSageMakerMachineLearningModelResourceData(obj: GreengrassSageMakerMachineLearningModelResourceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationPath': obj.destinationPath,
    'OwnerSetting': toJson_GreengrassResourceDownloadOwnerSetting(obj.ownerSetting),
    'SageMakerJobArn': obj.sageMakerJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassSecretsManagerSecretResourceData
 */
export interface GreengrassSecretsManagerSecretResourceData {
  /**
   * @schema GreengrassSecretsManagerSecretResourceData#ARN
   */
  readonly arn?: string;

  /**
   * @schema GreengrassSecretsManagerSecretResourceData#AdditionalStagingLabelsToDownload
   */
  readonly additionalStagingLabelsToDownload?: string[];

}

/**
 * Converts an object of type 'GreengrassSecretsManagerSecretResourceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassSecretsManagerSecretResourceData(obj: GreengrassSecretsManagerSecretResourceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'AdditionalStagingLabelsToDownload': obj.additionalStagingLabelsToDownload?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassFunctionExecutionConfig
 */
export interface GreengrassFunctionExecutionConfig {
  /**
   * @schema GreengrassFunctionExecutionConfig#IsolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema GreengrassFunctionExecutionConfig#RunAs
   */
  readonly runAs?: GreengrassFunctionRunAsConfig;

}

/**
 * Converts an object of type 'GreengrassFunctionExecutionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassFunctionExecutionConfig(obj: GreengrassFunctionExecutionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsolationMode': obj.isolationMode,
    'RunAs': toJson_GreengrassFunctionRunAsConfig(obj.runAs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResourceAccessPolicy
 */
export interface GreengrassResourceAccessPolicy {
  /**
   * @schema GreengrassResourceAccessPolicy#Permission
   */
  readonly permission?: string;

  /**
   * @schema GreengrassResourceAccessPolicy#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'GreengrassResourceAccessPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResourceAccessPolicy(obj: GreengrassResourceAccessPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Permission': obj.permission,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassGroupOwnerSetting
 */
export interface GreengrassGroupOwnerSetting {
  /**
   * @schema GreengrassGroupOwnerSetting#AutoAddGroupOwner
   */
  readonly autoAddGroupOwner?: boolean;

  /**
   * @schema GreengrassGroupOwnerSetting#GroupOwner
   */
  readonly groupOwner?: string;

}

/**
 * Converts an object of type 'GreengrassGroupOwnerSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassGroupOwnerSetting(obj: GreengrassGroupOwnerSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoAddGroupOwner': obj.autoAddGroupOwner,
    'GroupOwner': obj.groupOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassResourceDownloadOwnerSetting
 */
export interface GreengrassResourceDownloadOwnerSetting {
  /**
   * @schema GreengrassResourceDownloadOwnerSetting#GroupOwner
   */
  readonly groupOwner?: string;

  /**
   * @schema GreengrassResourceDownloadOwnerSetting#GroupPermission
   */
  readonly groupPermission?: string;

}

/**
 * Converts an object of type 'GreengrassResourceDownloadOwnerSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassResourceDownloadOwnerSetting(obj: GreengrassResourceDownloadOwnerSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupOwner': obj.groupOwner,
    'GroupPermission': obj.groupPermission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
