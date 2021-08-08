/**
 * @schema MqCreateBrokerRequest
 */
export interface MqCreateBrokerRequest {
  /**
   * @schema MqCreateBrokerRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqCreateBrokerRequest#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqCreateBrokerRequest#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema MqCreateBrokerRequest#Configuration
   */
  readonly configuration?: MqConfigurationId;

  /**
   * @schema MqCreateBrokerRequest#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema MqCreateBrokerRequest#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema MqCreateBrokerRequest#EncryptionOptions
   */
  readonly encryptionOptions?: MqEncryptionOptions;

  /**
   * @schema MqCreateBrokerRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqCreateBrokerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqCreateBrokerRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqCreateBrokerRequest#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataInput;

  /**
   * @schema MqCreateBrokerRequest#Logs
   */
  readonly logs?: MqLogs;

  /**
   * @schema MqCreateBrokerRequest#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: MqWeeklyStartTime;

  /**
   * @schema MqCreateBrokerRequest#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema MqCreateBrokerRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema MqCreateBrokerRequest#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema MqCreateBrokerRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema MqCreateBrokerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MqCreateBrokerRequest#Users
   */
  readonly users?: MqUser[];

}

/**
 * Converts an object of type 'MqCreateBrokerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateBrokerRequest(obj: MqCreateBrokerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationStrategy': obj.authenticationStrategy,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'BrokerName': obj.brokerName,
    'Configuration': toJson_MqConfigurationId(obj.configuration),
    'CreatorRequestId': obj.creatorRequestId,
    'DeploymentMode': obj.deploymentMode,
    'EncryptionOptions': toJson_MqEncryptionOptions(obj.encryptionOptions),
    'EngineType': obj.engineType,
    'EngineVersion': obj.engineVersion,
    'HostInstanceType': obj.hostInstanceType,
    'LdapServerMetadata': toJson_MqLdapServerMetadataInput(obj.ldapServerMetadata),
    'Logs': toJson_MqLogs(obj.logs),
    'MaintenanceWindowStartTime': toJson_MqWeeklyStartTime(obj.maintenanceWindowStartTime),
    'PubliclyAccessible': obj.publiclyAccessible,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'StorageType': obj.storageType,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Users': obj.users?.map(y => toJson_MqUser(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqCreateBrokerResponse
 */
export interface MqCreateBrokerResponse {
  /**
   * @schema MqCreateBrokerResponse#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema MqCreateBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * Converts an object of type 'MqCreateBrokerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateBrokerResponse(obj: MqCreateBrokerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerArn': obj.brokerArn,
    'BrokerId': obj.brokerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqCreateConfigurationRequest
 */
export interface MqCreateConfigurationRequest {
  /**
   * @schema MqCreateConfigurationRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqCreateConfigurationRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqCreateConfigurationRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqCreateConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MqCreateConfigurationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MqCreateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateConfigurationRequest(obj: MqCreateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationStrategy': obj.authenticationStrategy,
    'EngineType': obj.engineType,
    'EngineVersion': obj.engineVersion,
    'Name': obj.name,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqCreateConfigurationResponse
 */
export interface MqCreateConfigurationResponse {
  /**
   * @schema MqCreateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqCreateConfigurationResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqCreateConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqCreateConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MqCreateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqCreateConfigurationResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MqCreateConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateConfigurationResponse(obj: MqCreateConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AuthenticationStrategy': obj.authenticationStrategy,
    'Created': obj.created,
    'Id': obj.id,
    'LatestRevision': toJson_MqConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqCreateTagsRequest
 */
export interface MqCreateTagsRequest {
  /**
   * @schema MqCreateTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MqCreateTagsRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MqCreateTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateTagsRequest(obj: MqCreateTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqCreateUserRequest
 */
export interface MqCreateUserRequest {
  /**
   * @schema MqCreateUserRequest#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqCreateUserRequest#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqCreateUserRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqCreateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema MqCreateUserRequest#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateUserRequest(obj: MqCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'ConsoleAccess': obj.consoleAccess,
    'Groups': obj.groups?.map(y => y),
    'Password': obj.password,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqCreateUserResponse
 */
export interface MqCreateUserResponse {
}

/**
 * Converts an object of type 'MqCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqCreateUserResponse(obj: MqCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDeleteBrokerRequest
 */
export interface MqDeleteBrokerRequest {
  /**
   * @schema MqDeleteBrokerRequest#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * Converts an object of type 'MqDeleteBrokerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDeleteBrokerRequest(obj: MqDeleteBrokerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDeleteBrokerResponse
 */
export interface MqDeleteBrokerResponse {
  /**
   * @schema MqDeleteBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * Converts an object of type 'MqDeleteBrokerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDeleteBrokerResponse(obj: MqDeleteBrokerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDeleteTagsRequest
 */
export interface MqDeleteTagsRequest {
  /**
   * @schema MqDeleteTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MqDeleteTagsRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MqDeleteTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDeleteTagsRequest(obj: MqDeleteTagsRequest | undefined): Record<string, any> | undefined {
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
 * @schema MqDeleteUserRequest
 */
export interface MqDeleteUserRequest {
  /**
   * @schema MqDeleteUserRequest#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqDeleteUserRequest#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDeleteUserRequest(obj: MqDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDeleteUserResponse
 */
export interface MqDeleteUserResponse {
}

/**
 * Converts an object of type 'MqDeleteUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDeleteUserResponse(obj: MqDeleteUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeBrokerRequest
 */
export interface MqDescribeBrokerRequest {
  /**
   * @schema MqDescribeBrokerRequest#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * Converts an object of type 'MqDescribeBrokerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeBrokerRequest(obj: MqDescribeBrokerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeBrokerResponse
 */
export interface MqDescribeBrokerResponse {
  /**
   * @schema MqDescribeBrokerResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqDescribeBrokerResponse#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqDescribeBrokerResponse#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema MqDescribeBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqDescribeBrokerResponse#BrokerInstances
   */
  readonly brokerInstances?: MqBrokerInstance[];

  /**
   * @schema MqDescribeBrokerResponse#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema MqDescribeBrokerResponse#BrokerState
   */
  readonly brokerState?: string;

  /**
   * @schema MqDescribeBrokerResponse#Configurations
   */
  readonly configurations?: MqConfigurations;

  /**
   * @schema MqDescribeBrokerResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqDescribeBrokerResponse#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema MqDescribeBrokerResponse#EncryptionOptions
   */
  readonly encryptionOptions?: MqEncryptionOptions;

  /**
   * @schema MqDescribeBrokerResponse#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeBrokerResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqDescribeBrokerResponse#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqDescribeBrokerResponse#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataOutput;

  /**
   * @schema MqDescribeBrokerResponse#Logs
   */
  readonly logs?: MqLogsSummary;

  /**
   * @schema MqDescribeBrokerResponse#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: MqWeeklyStartTime;

  /**
   * @schema MqDescribeBrokerResponse#PendingAuthenticationStrategy
   */
  readonly pendingAuthenticationStrategy?: string;

  /**
   * @schema MqDescribeBrokerResponse#PendingEngineVersion
   */
  readonly pendingEngineVersion?: string;

  /**
   * @schema MqDescribeBrokerResponse#PendingHostInstanceType
   */
  readonly pendingHostInstanceType?: string;

  /**
   * @schema MqDescribeBrokerResponse#PendingLdapServerMetadata
   */
  readonly pendingLdapServerMetadata?: MqLdapServerMetadataOutput;

  /**
   * @schema MqDescribeBrokerResponse#PendingSecurityGroups
   */
  readonly pendingSecurityGroups?: string[];

  /**
   * @schema MqDescribeBrokerResponse#PubliclyAccessible
   */
  readonly publiclyAccessible?: boolean;

  /**
   * @schema MqDescribeBrokerResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema MqDescribeBrokerResponse#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema MqDescribeBrokerResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema MqDescribeBrokerResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MqDescribeBrokerResponse#Users
   */
  readonly users?: MqUserSummary[];

}

/**
 * Converts an object of type 'MqDescribeBrokerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeBrokerResponse(obj: MqDescribeBrokerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationStrategy': obj.authenticationStrategy,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'BrokerArn': obj.brokerArn,
    'BrokerId': obj.brokerId,
    'BrokerInstances': obj.brokerInstances?.map(y => toJson_MqBrokerInstance(y)),
    'BrokerName': obj.brokerName,
    'BrokerState': obj.brokerState,
    'Configurations': toJson_MqConfigurations(obj.configurations),
    'Created': obj.created,
    'DeploymentMode': obj.deploymentMode,
    'EncryptionOptions': toJson_MqEncryptionOptions(obj.encryptionOptions),
    'EngineType': obj.engineType,
    'EngineVersion': obj.engineVersion,
    'HostInstanceType': obj.hostInstanceType,
    'LdapServerMetadata': toJson_MqLdapServerMetadataOutput(obj.ldapServerMetadata),
    'Logs': toJson_MqLogsSummary(obj.logs),
    'MaintenanceWindowStartTime': toJson_MqWeeklyStartTime(obj.maintenanceWindowStartTime),
    'PendingAuthenticationStrategy': obj.pendingAuthenticationStrategy,
    'PendingEngineVersion': obj.pendingEngineVersion,
    'PendingHostInstanceType': obj.pendingHostInstanceType,
    'PendingLdapServerMetadata': toJson_MqLdapServerMetadataOutput(obj.pendingLdapServerMetadata),
    'PendingSecurityGroups': obj.pendingSecurityGroups?.map(y => y),
    'PubliclyAccessible': obj.publiclyAccessible,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'StorageType': obj.storageType,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Users': obj.users?.map(y => toJson_MqUserSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeBrokerEngineTypesRequest
 */
export interface MqDescribeBrokerEngineTypesRequest {
  /**
   * @schema MqDescribeBrokerEngineTypesRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeBrokerEngineTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerEngineTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqDescribeBrokerEngineTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeBrokerEngineTypesRequest(obj: MqDescribeBrokerEngineTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineType': obj.engineType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeBrokerEngineTypesResponse
 */
export interface MqDescribeBrokerEngineTypesResponse {
  /**
   * @schema MqDescribeBrokerEngineTypesResponse#BrokerEngineTypes
   */
  readonly brokerEngineTypes?: MqBrokerEngineType[];

  /**
   * @schema MqDescribeBrokerEngineTypesResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerEngineTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqDescribeBrokerEngineTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeBrokerEngineTypesResponse(obj: MqDescribeBrokerEngineTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerEngineTypes': obj.brokerEngineTypes?.map(y => toJson_MqBrokerEngineType(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeBrokerInstanceOptionsRequest
 */
export interface MqDescribeBrokerInstanceOptionsRequest {
  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MqDescribeBrokerInstanceOptionsRequest#StorageType
   */
  readonly storageType?: string;

}

/**
 * Converts an object of type 'MqDescribeBrokerInstanceOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeBrokerInstanceOptionsRequest(obj: MqDescribeBrokerInstanceOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineType': obj.engineType,
    'HostInstanceType': obj.hostInstanceType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'StorageType': obj.storageType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeBrokerInstanceOptionsResponse
 */
export interface MqDescribeBrokerInstanceOptionsResponse {
  /**
   * @schema MqDescribeBrokerInstanceOptionsResponse#BrokerInstanceOptions
   */
  readonly brokerInstanceOptions?: MqBrokerInstanceOption[];

  /**
   * @schema MqDescribeBrokerInstanceOptionsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqDescribeBrokerInstanceOptionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqDescribeBrokerInstanceOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeBrokerInstanceOptionsResponse(obj: MqDescribeBrokerInstanceOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerInstanceOptions': obj.brokerInstanceOptions?.map(y => toJson_MqBrokerInstanceOption(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeConfigurationRequest
 */
export interface MqDescribeConfigurationRequest {
  /**
   * @schema MqDescribeConfigurationRequest#ConfigurationId
   */
  readonly configurationId?: string;

}

/**
 * Converts an object of type 'MqDescribeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeConfigurationRequest(obj: MqDescribeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationId': obj.configurationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeConfigurationResponse
 */
export interface MqDescribeConfigurationResponse {
  /**
   * @schema MqDescribeConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqDescribeConfigurationResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema MqDescribeConfigurationResponse#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqDescribeConfigurationResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MqDescribeConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqDescribeConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MqDescribeConfigurationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MqDescribeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeConfigurationResponse(obj: MqDescribeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AuthenticationStrategy': obj.authenticationStrategy,
    'Created': obj.created,
    'Description': obj.description,
    'EngineType': obj.engineType,
    'EngineVersion': obj.engineVersion,
    'Id': obj.id,
    'LatestRevision': toJson_MqConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeConfigurationRevisionRequest
 */
export interface MqDescribeConfigurationRevisionRequest {
  /**
   * @schema MqDescribeConfigurationRevisionRequest#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqDescribeConfigurationRevisionRequest#ConfigurationRevision
   */
  readonly configurationRevision?: string;

}

/**
 * Converts an object of type 'MqDescribeConfigurationRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeConfigurationRevisionRequest(obj: MqDescribeConfigurationRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationId': obj.configurationId,
    'ConfigurationRevision': obj.configurationRevision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeConfigurationRevisionResponse
 */
export interface MqDescribeConfigurationRevisionResponse {
  /**
   * @schema MqDescribeConfigurationRevisionResponse#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqDescribeConfigurationRevisionResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqDescribeConfigurationRevisionResponse#Data
   */
  readonly data?: string;

  /**
   * @schema MqDescribeConfigurationRevisionResponse#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'MqDescribeConfigurationRevisionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeConfigurationRevisionResponse(obj: MqDescribeConfigurationRevisionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationId': obj.configurationId,
    'Created': obj.created,
    'Data': obj.data,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeUserRequest
 */
export interface MqDescribeUserRequest {
  /**
   * @schema MqDescribeUserRequest#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqDescribeUserRequest#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqDescribeUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeUserRequest(obj: MqDescribeUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqDescribeUserResponse
 */
export interface MqDescribeUserResponse {
  /**
   * @schema MqDescribeUserResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqDescribeUserResponse#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqDescribeUserResponse#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqDescribeUserResponse#Pending
   */
  readonly pending?: MqUserPendingChanges;

  /**
   * @schema MqDescribeUserResponse#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqDescribeUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqDescribeUserResponse(obj: MqDescribeUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'ConsoleAccess': obj.consoleAccess,
    'Groups': obj.groups?.map(y => y),
    'Pending': toJson_MqUserPendingChanges(obj.pending),
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListBrokersRequest
 */
export interface MqListBrokersRequest {
  /**
   * @schema MqListBrokersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListBrokersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqListBrokersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListBrokersRequest(obj: MqListBrokersRequest | undefined): Record<string, any> | undefined {
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
 * @schema MqListBrokersResponse
 */
export interface MqListBrokersResponse {
  /**
   * @schema MqListBrokersResponse#BrokerSummaries
   */
  readonly brokerSummaries?: MqBrokerSummary[];

  /**
   * @schema MqListBrokersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqListBrokersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListBrokersResponse(obj: MqListBrokersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerSummaries': obj.brokerSummaries?.map(y => toJson_MqBrokerSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListConfigurationRevisionsRequest
 */
export interface MqListConfigurationRevisionsRequest {
  /**
   * @schema MqListConfigurationRevisionsRequest#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqListConfigurationRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqListConfigurationRevisionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListConfigurationRevisionsRequest(obj: MqListConfigurationRevisionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationId': obj.configurationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListConfigurationRevisionsResponse
 */
export interface MqListConfigurationRevisionsResponse {
  /**
   * @schema MqListConfigurationRevisionsResponse#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqListConfigurationRevisionsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MqListConfigurationRevisionsResponse#Revisions
   */
  readonly revisions?: MqConfigurationRevision[];

}

/**
 * Converts an object of type 'MqListConfigurationRevisionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListConfigurationRevisionsResponse(obj: MqListConfigurationRevisionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationId': obj.configurationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Revisions': obj.revisions?.map(y => toJson_MqConfigurationRevision(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListConfigurationsRequest
 */
export interface MqListConfigurationsRequest {
  /**
   * @schema MqListConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqListConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListConfigurationsRequest(obj: MqListConfigurationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema MqListConfigurationsResponse
 */
export interface MqListConfigurationsResponse {
  /**
   * @schema MqListConfigurationsResponse#Configurations
   */
  readonly configurations?: MqConfiguration[];

  /**
   * @schema MqListConfigurationsResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqListConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListConfigurationsResponse(obj: MqListConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configurations': obj.configurations?.map(y => toJson_MqConfiguration(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListTagsRequest
 */
export interface MqListTagsRequest {
  /**
   * @schema MqListTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MqListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListTagsRequest(obj: MqListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListTagsResponse
 */
export interface MqListTagsResponse {
  /**
   * @schema MqListTagsResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MqListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListTagsResponse(obj: MqListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListUsersRequest
 */
export interface MqListUsersRequest {
  /**
   * @schema MqListUsersRequest#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MqListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListUsersRequest(obj: MqListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqListUsersResponse
 */
export interface MqListUsersResponse {
  /**
   * @schema MqListUsersResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqListUsersResponse#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MqListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MqListUsersResponse#Users
   */
  readonly users?: MqUserSummary[];

}

/**
 * Converts an object of type 'MqListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqListUsersResponse(obj: MqListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Users': obj.users?.map(y => toJson_MqUserSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqRebootBrokerRequest
 */
export interface MqRebootBrokerRequest {
  /**
   * @schema MqRebootBrokerRequest#BrokerId
   */
  readonly brokerId?: string;

}

/**
 * Converts an object of type 'MqRebootBrokerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqRebootBrokerRequest(obj: MqRebootBrokerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqRebootBrokerResponse
 */
export interface MqRebootBrokerResponse {
}

/**
 * Converts an object of type 'MqRebootBrokerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqRebootBrokerResponse(obj: MqRebootBrokerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUpdateBrokerRequest
 */
export interface MqUpdateBrokerRequest {
  /**
   * @schema MqUpdateBrokerRequest#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqUpdateBrokerRequest#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqUpdateBrokerRequest#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqUpdateBrokerRequest#Configuration
   */
  readonly configuration?: MqConfigurationId;

  /**
   * @schema MqUpdateBrokerRequest#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqUpdateBrokerRequest#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqUpdateBrokerRequest#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataInput;

  /**
   * @schema MqUpdateBrokerRequest#Logs
   */
  readonly logs?: MqLogs;

  /**
   * @schema MqUpdateBrokerRequest#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: MqWeeklyStartTime;

  /**
   * @schema MqUpdateBrokerRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * Converts an object of type 'MqUpdateBrokerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUpdateBrokerRequest(obj: MqUpdateBrokerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationStrategy': obj.authenticationStrategy,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'BrokerId': obj.brokerId,
    'Configuration': toJson_MqConfigurationId(obj.configuration),
    'EngineVersion': obj.engineVersion,
    'HostInstanceType': obj.hostInstanceType,
    'LdapServerMetadata': toJson_MqLdapServerMetadataInput(obj.ldapServerMetadata),
    'Logs': toJson_MqLogs(obj.logs),
    'MaintenanceWindowStartTime': toJson_MqWeeklyStartTime(obj.maintenanceWindowStartTime),
    'SecurityGroups': obj.securityGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUpdateBrokerResponse
 */
export interface MqUpdateBrokerResponse {
  /**
   * @schema MqUpdateBrokerResponse#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqUpdateBrokerResponse#AutoMinorVersionUpgrade
   */
  readonly autoMinorVersionUpgrade?: boolean;

  /**
   * @schema MqUpdateBrokerResponse#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqUpdateBrokerResponse#Configuration
   */
  readonly configuration?: MqConfigurationId;

  /**
   * @schema MqUpdateBrokerResponse#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqUpdateBrokerResponse#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqUpdateBrokerResponse#LdapServerMetadata
   */
  readonly ldapServerMetadata?: MqLdapServerMetadataOutput;

  /**
   * @schema MqUpdateBrokerResponse#Logs
   */
  readonly logs?: MqLogs;

  /**
   * @schema MqUpdateBrokerResponse#MaintenanceWindowStartTime
   */
  readonly maintenanceWindowStartTime?: MqWeeklyStartTime;

  /**
   * @schema MqUpdateBrokerResponse#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * Converts an object of type 'MqUpdateBrokerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUpdateBrokerResponse(obj: MqUpdateBrokerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationStrategy': obj.authenticationStrategy,
    'AutoMinorVersionUpgrade': obj.autoMinorVersionUpgrade,
    'BrokerId': obj.brokerId,
    'Configuration': toJson_MqConfigurationId(obj.configuration),
    'EngineVersion': obj.engineVersion,
    'HostInstanceType': obj.hostInstanceType,
    'LdapServerMetadata': toJson_MqLdapServerMetadataOutput(obj.ldapServerMetadata),
    'Logs': toJson_MqLogs(obj.logs),
    'MaintenanceWindowStartTime': toJson_MqWeeklyStartTime(obj.maintenanceWindowStartTime),
    'SecurityGroups': obj.securityGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUpdateConfigurationRequest
 */
export interface MqUpdateConfigurationRequest {
  /**
   * @schema MqUpdateConfigurationRequest#ConfigurationId
   */
  readonly configurationId?: string;

  /**
   * @schema MqUpdateConfigurationRequest#Data
   */
  readonly data?: string;

  /**
   * @schema MqUpdateConfigurationRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'MqUpdateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUpdateConfigurationRequest(obj: MqUpdateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationId': obj.configurationId,
    'Data': obj.data,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUpdateConfigurationResponse
 */
export interface MqUpdateConfigurationResponse {
  /**
   * @schema MqUpdateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqUpdateConfigurationResponse#Created
   */
  readonly created?: string;

  /**
   * @schema MqUpdateConfigurationResponse#Id
   */
  readonly id?: string;

  /**
   * @schema MqUpdateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqUpdateConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema MqUpdateConfigurationResponse#Warnings
   */
  readonly warnings?: MqSanitizationWarning[];

}

/**
 * Converts an object of type 'MqUpdateConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUpdateConfigurationResponse(obj: MqUpdateConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Created': obj.created,
    'Id': obj.id,
    'LatestRevision': toJson_MqConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
    'Warnings': obj.warnings?.map(y => toJson_MqSanitizationWarning(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUpdateUserRequest
 */
export interface MqUpdateUserRequest {
  /**
   * @schema MqUpdateUserRequest#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqUpdateUserRequest#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqUpdateUserRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqUpdateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema MqUpdateUserRequest#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUpdateUserRequest(obj: MqUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerId': obj.brokerId,
    'ConsoleAccess': obj.consoleAccess,
    'Groups': obj.groups?.map(y => y),
    'Password': obj.password,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUpdateUserResponse
 */
export interface MqUpdateUserResponse {
}

/**
 * Converts an object of type 'MqUpdateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUpdateUserResponse(obj: MqUpdateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqConfigurationId
 */
export interface MqConfigurationId {
  /**
   * @schema MqConfigurationId#Id
   */
  readonly id?: string;

  /**
   * @schema MqConfigurationId#Revision
   */
  readonly revision?: number;

}

/**
 * Converts an object of type 'MqConfigurationId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqConfigurationId(obj: MqConfigurationId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqEncryptionOptions
 */
export interface MqEncryptionOptions {
  /**
   * @schema MqEncryptionOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema MqEncryptionOptions#UseAwsOwnedKey
   */
  readonly useAwsOwnedKey?: boolean;

}

/**
 * Converts an object of type 'MqEncryptionOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqEncryptionOptions(obj: MqEncryptionOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KmsKeyId': obj.kmsKeyId,
    'UseAwsOwnedKey': obj.useAwsOwnedKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqLdapServerMetadataInput
 */
export interface MqLdapServerMetadataInput {
  /**
   * @schema MqLdapServerMetadataInput#Hosts
   */
  readonly hosts?: string[];

  /**
   * @schema MqLdapServerMetadataInput#RoleBase
   */
  readonly roleBase?: string;

  /**
   * @schema MqLdapServerMetadataInput#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema MqLdapServerMetadataInput#RoleSearchMatching
   */
  readonly roleSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataInput#RoleSearchSubtree
   */
  readonly roleSearchSubtree?: boolean;

  /**
   * @schema MqLdapServerMetadataInput#ServiceAccountPassword
   */
  readonly serviceAccountPassword?: string;

  /**
   * @schema MqLdapServerMetadataInput#ServiceAccountUsername
   */
  readonly serviceAccountUsername?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserBase
   */
  readonly userBase?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserRoleName
   */
  readonly userRoleName?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserSearchMatching
   */
  readonly userSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataInput#UserSearchSubtree
   */
  readonly userSearchSubtree?: boolean;

}

/**
 * Converts an object of type 'MqLdapServerMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqLdapServerMetadataInput(obj: MqLdapServerMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hosts': obj.hosts?.map(y => y),
    'RoleBase': obj.roleBase,
    'RoleName': obj.roleName,
    'RoleSearchMatching': obj.roleSearchMatching,
    'RoleSearchSubtree': obj.roleSearchSubtree,
    'ServiceAccountPassword': obj.serviceAccountPassword,
    'ServiceAccountUsername': obj.serviceAccountUsername,
    'UserBase': obj.userBase,
    'UserRoleName': obj.userRoleName,
    'UserSearchMatching': obj.userSearchMatching,
    'UserSearchSubtree': obj.userSearchSubtree,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqLogs
 */
export interface MqLogs {
  /**
   * @schema MqLogs#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema MqLogs#General
   */
  readonly general?: boolean;

}

/**
 * Converts an object of type 'MqLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqLogs(obj: MqLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Audit': obj.audit,
    'General': obj.general,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqWeeklyStartTime
 */
export interface MqWeeklyStartTime {
  /**
   * @schema MqWeeklyStartTime#DayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema MqWeeklyStartTime#TimeOfDay
   */
  readonly timeOfDay?: string;

  /**
   * @schema MqWeeklyStartTime#TimeZone
   */
  readonly timeZone?: string;

}

/**
 * Converts an object of type 'MqWeeklyStartTime' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqWeeklyStartTime(obj: MqWeeklyStartTime | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DayOfWeek': obj.dayOfWeek,
    'TimeOfDay': obj.timeOfDay,
    'TimeZone': obj.timeZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUser
 */
export interface MqUser {
  /**
   * @schema MqUser#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqUser#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqUser#Password
   */
  readonly password?: string;

  /**
   * @schema MqUser#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUser(obj: MqUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsoleAccess': obj.consoleAccess,
    'Groups': obj.groups?.map(y => y),
    'Password': obj.password,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqConfigurationRevision
 */
export interface MqConfigurationRevision {
  /**
   * @schema MqConfigurationRevision#Created
   */
  readonly created?: string;

  /**
   * @schema MqConfigurationRevision#Description
   */
  readonly description?: string;

  /**
   * @schema MqConfigurationRevision#Revision
   */
  readonly revision?: number;

}

/**
 * Converts an object of type 'MqConfigurationRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqConfigurationRevision(obj: MqConfigurationRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Created': obj.created,
    'Description': obj.description,
    'Revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqBrokerInstance
 */
export interface MqBrokerInstance {
  /**
   * @schema MqBrokerInstance#ConsoleURL
   */
  readonly consoleUrl?: string;

  /**
   * @schema MqBrokerInstance#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema MqBrokerInstance#IpAddress
   */
  readonly ipAddress?: string;

}

/**
 * Converts an object of type 'MqBrokerInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqBrokerInstance(obj: MqBrokerInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsoleURL': obj.consoleUrl,
    'Endpoints': obj.endpoints?.map(y => y),
    'IpAddress': obj.ipAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqConfigurations
 */
export interface MqConfigurations {
  /**
   * @schema MqConfigurations#Current
   */
  readonly current?: MqConfigurationId;

  /**
   * @schema MqConfigurations#History
   */
  readonly history?: MqConfigurationId[];

  /**
   * @schema MqConfigurations#Pending
   */
  readonly pending?: MqConfigurationId;

}

/**
 * Converts an object of type 'MqConfigurations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqConfigurations(obj: MqConfigurations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Current': toJson_MqConfigurationId(obj.current),
    'History': obj.history?.map(y => toJson_MqConfigurationId(y)),
    'Pending': toJson_MqConfigurationId(obj.pending),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqLdapServerMetadataOutput
 */
export interface MqLdapServerMetadataOutput {
  /**
   * @schema MqLdapServerMetadataOutput#Hosts
   */
  readonly hosts?: string[];

  /**
   * @schema MqLdapServerMetadataOutput#RoleBase
   */
  readonly roleBase?: string;

  /**
   * @schema MqLdapServerMetadataOutput#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema MqLdapServerMetadataOutput#RoleSearchMatching
   */
  readonly roleSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataOutput#RoleSearchSubtree
   */
  readonly roleSearchSubtree?: boolean;

  /**
   * @schema MqLdapServerMetadataOutput#ServiceAccountUsername
   */
  readonly serviceAccountUsername?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserBase
   */
  readonly userBase?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserRoleName
   */
  readonly userRoleName?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserSearchMatching
   */
  readonly userSearchMatching?: string;

  /**
   * @schema MqLdapServerMetadataOutput#UserSearchSubtree
   */
  readonly userSearchSubtree?: boolean;

}

/**
 * Converts an object of type 'MqLdapServerMetadataOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqLdapServerMetadataOutput(obj: MqLdapServerMetadataOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hosts': obj.hosts?.map(y => y),
    'RoleBase': obj.roleBase,
    'RoleName': obj.roleName,
    'RoleSearchMatching': obj.roleSearchMatching,
    'RoleSearchSubtree': obj.roleSearchSubtree,
    'ServiceAccountUsername': obj.serviceAccountUsername,
    'UserBase': obj.userBase,
    'UserRoleName': obj.userRoleName,
    'UserSearchMatching': obj.userSearchMatching,
    'UserSearchSubtree': obj.userSearchSubtree,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqLogsSummary
 */
export interface MqLogsSummary {
  /**
   * @schema MqLogsSummary#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema MqLogsSummary#AuditLogGroup
   */
  readonly auditLogGroup?: string;

  /**
   * @schema MqLogsSummary#General
   */
  readonly general?: boolean;

  /**
   * @schema MqLogsSummary#GeneralLogGroup
   */
  readonly generalLogGroup?: string;

  /**
   * @schema MqLogsSummary#Pending
   */
  readonly pending?: MqPendingLogs;

}

/**
 * Converts an object of type 'MqLogsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqLogsSummary(obj: MqLogsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Audit': obj.audit,
    'AuditLogGroup': obj.auditLogGroup,
    'General': obj.general,
    'GeneralLogGroup': obj.generalLogGroup,
    'Pending': toJson_MqPendingLogs(obj.pending),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUserSummary
 */
export interface MqUserSummary {
  /**
   * @schema MqUserSummary#PendingChange
   */
  readonly pendingChange?: string;

  /**
   * @schema MqUserSummary#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'MqUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUserSummary(obj: MqUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PendingChange': obj.pendingChange,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqBrokerEngineType
 */
export interface MqBrokerEngineType {
  /**
   * @schema MqBrokerEngineType#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqBrokerEngineType#EngineVersions
   */
  readonly engineVersions?: MqEngineVersion[];

}

/**
 * Converts an object of type 'MqBrokerEngineType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqBrokerEngineType(obj: MqBrokerEngineType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineType': obj.engineType,
    'EngineVersions': obj.engineVersions?.map(y => toJson_MqEngineVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqBrokerInstanceOption
 */
export interface MqBrokerInstanceOption {
  /**
   * @schema MqBrokerInstanceOption#AvailabilityZones
   */
  readonly availabilityZones?: MqAvailabilityZone[];

  /**
   * @schema MqBrokerInstanceOption#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqBrokerInstanceOption#HostInstanceType
   */
  readonly hostInstanceType?: string;

  /**
   * @schema MqBrokerInstanceOption#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema MqBrokerInstanceOption#SupportedDeploymentModes
   */
  readonly supportedDeploymentModes?: string[];

  /**
   * @schema MqBrokerInstanceOption#SupportedEngineVersions
   */
  readonly supportedEngineVersions?: string[];

}

/**
 * Converts an object of type 'MqBrokerInstanceOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqBrokerInstanceOption(obj: MqBrokerInstanceOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZones': obj.availabilityZones?.map(y => toJson_MqAvailabilityZone(y)),
    'EngineType': obj.engineType,
    'HostInstanceType': obj.hostInstanceType,
    'StorageType': obj.storageType,
    'SupportedDeploymentModes': obj.supportedDeploymentModes?.map(y => y),
    'SupportedEngineVersions': obj.supportedEngineVersions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqUserPendingChanges
 */
export interface MqUserPendingChanges {
  /**
   * @schema MqUserPendingChanges#ConsoleAccess
   */
  readonly consoleAccess?: boolean;

  /**
   * @schema MqUserPendingChanges#Groups
   */
  readonly groups?: string[];

  /**
   * @schema MqUserPendingChanges#PendingChange
   */
  readonly pendingChange?: string;

}

/**
 * Converts an object of type 'MqUserPendingChanges' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqUserPendingChanges(obj: MqUserPendingChanges | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsoleAccess': obj.consoleAccess,
    'Groups': obj.groups?.map(y => y),
    'PendingChange': obj.pendingChange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqBrokerSummary
 */
export interface MqBrokerSummary {
  /**
   * @schema MqBrokerSummary#BrokerArn
   */
  readonly brokerArn?: string;

  /**
   * @schema MqBrokerSummary#BrokerId
   */
  readonly brokerId?: string;

  /**
   * @schema MqBrokerSummary#BrokerName
   */
  readonly brokerName?: string;

  /**
   * @schema MqBrokerSummary#BrokerState
   */
  readonly brokerState?: string;

  /**
   * @schema MqBrokerSummary#Created
   */
  readonly created?: string;

  /**
   * @schema MqBrokerSummary#DeploymentMode
   */
  readonly deploymentMode?: string;

  /**
   * @schema MqBrokerSummary#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqBrokerSummary#HostInstanceType
   */
  readonly hostInstanceType?: string;

}

/**
 * Converts an object of type 'MqBrokerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqBrokerSummary(obj: MqBrokerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerArn': obj.brokerArn,
    'BrokerId': obj.brokerId,
    'BrokerName': obj.brokerName,
    'BrokerState': obj.brokerState,
    'Created': obj.created,
    'DeploymentMode': obj.deploymentMode,
    'EngineType': obj.engineType,
    'HostInstanceType': obj.hostInstanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqConfiguration
 */
export interface MqConfiguration {
  /**
   * @schema MqConfiguration#Arn
   */
  readonly arn?: string;

  /**
   * @schema MqConfiguration#AuthenticationStrategy
   */
  readonly authenticationStrategy?: string;

  /**
   * @schema MqConfiguration#Created
   */
  readonly created?: string;

  /**
   * @schema MqConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema MqConfiguration#EngineType
   */
  readonly engineType?: string;

  /**
   * @schema MqConfiguration#EngineVersion
   */
  readonly engineVersion?: string;

  /**
   * @schema MqConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema MqConfiguration#LatestRevision
   */
  readonly latestRevision?: MqConfigurationRevision;

  /**
   * @schema MqConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema MqConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MqConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqConfiguration(obj: MqConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AuthenticationStrategy': obj.authenticationStrategy,
    'Created': obj.created,
    'Description': obj.description,
    'EngineType': obj.engineType,
    'EngineVersion': obj.engineVersion,
    'Id': obj.id,
    'LatestRevision': toJson_MqConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqSanitizationWarning
 */
export interface MqSanitizationWarning {
  /**
   * @schema MqSanitizationWarning#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema MqSanitizationWarning#ElementName
   */
  readonly elementName?: string;

  /**
   * @schema MqSanitizationWarning#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'MqSanitizationWarning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqSanitizationWarning(obj: MqSanitizationWarning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'ElementName': obj.elementName,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqPendingLogs
 */
export interface MqPendingLogs {
  /**
   * @schema MqPendingLogs#Audit
   */
  readonly audit?: boolean;

  /**
   * @schema MqPendingLogs#General
   */
  readonly general?: boolean;

}

/**
 * Converts an object of type 'MqPendingLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqPendingLogs(obj: MqPendingLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Audit': obj.audit,
    'General': obj.general,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqEngineVersion
 */
export interface MqEngineVersion {
  /**
   * @schema MqEngineVersion#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MqEngineVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqEngineVersion(obj: MqEngineVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MqAvailabilityZone
 */
export interface MqAvailabilityZone {
  /**
   * @schema MqAvailabilityZone#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MqAvailabilityZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MqAvailabilityZone(obj: MqAvailabilityZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
