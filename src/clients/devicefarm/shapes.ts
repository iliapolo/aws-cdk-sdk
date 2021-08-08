/**
 * @schema DeviceFarmCreateDevicePoolRequest
 */
export interface DeviceFarmCreateDevicePoolRequest {
  /**
   * @schema DeviceFarmCreateDevicePoolRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#rules
   */
  readonly rules: DeviceFarmRule[];

  /**
   * @schema DeviceFarmCreateDevicePoolRequest#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * Converts an object of type 'DeviceFarmCreateDevicePoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateDevicePoolRequest(obj: DeviceFarmCreateDevicePoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'name': obj.name,
    'description': obj.description,
    'rules': obj.rules?.map(y => toJson_DeviceFarmRule(y)),
    'maxDevices': obj.maxDevices,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateDevicePoolResult
 */
export interface DeviceFarmCreateDevicePoolResult {
  /**
   * @schema DeviceFarmCreateDevicePoolResult#devicePool
   */
  readonly devicePool?: DeviceFarmDevicePool;

}

/**
 * Converts an object of type 'DeviceFarmCreateDevicePoolResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateDevicePoolResult(obj: DeviceFarmCreateDevicePoolResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devicePool': toJson_DeviceFarmDevicePool(obj.devicePool),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateInstanceProfileRequest
 */
export interface DeviceFarmCreateInstanceProfileRequest {
  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema DeviceFarmCreateInstanceProfileRequest#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmCreateInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateInstanceProfileRequest(obj: DeviceFarmCreateInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'packageCleanup': obj.packageCleanup,
    'excludeAppPackagesFromCleanup': obj.excludeAppPackagesFromCleanup?.map(y => y),
    'rebootAfterUse': obj.rebootAfterUse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateInstanceProfileResult
 */
export interface DeviceFarmCreateInstanceProfileResult {
  /**
   * @schema DeviceFarmCreateInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * Converts an object of type 'DeviceFarmCreateInstanceProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateInstanceProfileResult(obj: DeviceFarmCreateInstanceProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceProfile': toJson_DeviceFarmInstanceProfile(obj.instanceProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateNetworkProfileRequest
 */
export interface DeviceFarmCreateNetworkProfileRequest {
  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema DeviceFarmCreateNetworkProfileRequest#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * Converts an object of type 'DeviceFarmCreateNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateNetworkProfileRequest(obj: DeviceFarmCreateNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'uplinkBandwidthBits': obj.uplinkBandwidthBits,
    'downlinkBandwidthBits': obj.downlinkBandwidthBits,
    'uplinkDelayMs': obj.uplinkDelayMs,
    'downlinkDelayMs': obj.downlinkDelayMs,
    'uplinkJitterMs': obj.uplinkJitterMs,
    'downlinkJitterMs': obj.downlinkJitterMs,
    'uplinkLossPercent': obj.uplinkLossPercent,
    'downlinkLossPercent': obj.downlinkLossPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateNetworkProfileResult
 */
export interface DeviceFarmCreateNetworkProfileResult {
  /**
   * @schema DeviceFarmCreateNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

}

/**
 * Converts an object of type 'DeviceFarmCreateNetworkProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateNetworkProfileResult(obj: DeviceFarmCreateNetworkProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'networkProfile': toJson_DeviceFarmNetworkProfile(obj.networkProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateProjectRequest
 */
export interface DeviceFarmCreateProjectRequest {
  /**
   * @schema DeviceFarmCreateProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateProjectRequest#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

}

/**
 * Converts an object of type 'DeviceFarmCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateProjectRequest(obj: DeviceFarmCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'defaultJobTimeoutMinutes': obj.defaultJobTimeoutMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateProjectResult
 */
export interface DeviceFarmCreateProjectResult {
  /**
   * @schema DeviceFarmCreateProjectResult#project
   */
  readonly project?: DeviceFarmProject;

}

/**
 * Converts an object of type 'DeviceFarmCreateProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateProjectResult(obj: DeviceFarmCreateProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'project': toJson_DeviceFarmProject(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateRemoteAccessSessionRequest
 */
export interface DeviceFarmCreateRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#deviceArn
   */
  readonly deviceArn: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#remoteRecordEnabled
   */
  readonly remoteRecordEnabled?: boolean;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#remoteRecordAppArn
   */
  readonly remoteRecordAppArn?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#clientId
   */
  readonly clientId?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#configuration
   */
  readonly configuration?: DeviceFarmCreateRemoteAccessSessionConfiguration;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#interactionMode
   */
  readonly interactionMode?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionRequest#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmCreateRemoteAccessSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateRemoteAccessSessionRequest(obj: DeviceFarmCreateRemoteAccessSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'deviceArn': obj.deviceArn,
    'instanceArn': obj.instanceArn,
    'sshPublicKey': obj.sshPublicKey,
    'remoteDebugEnabled': obj.remoteDebugEnabled,
    'remoteRecordEnabled': obj.remoteRecordEnabled,
    'remoteRecordAppArn': obj.remoteRecordAppArn,
    'name': obj.name,
    'clientId': obj.clientId,
    'configuration': toJson_DeviceFarmCreateRemoteAccessSessionConfiguration(obj.configuration),
    'interactionMode': obj.interactionMode,
    'skipAppResign': obj.skipAppResign,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateRemoteAccessSessionResult
 */
export interface DeviceFarmCreateRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmCreateRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: DeviceFarmRemoteAccessSession;

}

/**
 * Converts an object of type 'DeviceFarmCreateRemoteAccessSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateRemoteAccessSessionResult(obj: DeviceFarmCreateRemoteAccessSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'remoteAccessSession': toJson_DeviceFarmRemoteAccessSession(obj.remoteAccessSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateTestGridProjectRequest
 */
export interface DeviceFarmCreateTestGridProjectRequest {
  /**
   * @schema DeviceFarmCreateTestGridProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateTestGridProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmCreateTestGridProjectRequest#vpcConfig
   */
  readonly vpcConfig?: DeviceFarmTestGridVpcConfig;

}

/**
 * Converts an object of type 'DeviceFarmCreateTestGridProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateTestGridProjectRequest(obj: DeviceFarmCreateTestGridProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'vpcConfig': toJson_DeviceFarmTestGridVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateTestGridProjectResult
 */
export interface DeviceFarmCreateTestGridProjectResult {
  /**
   * @schema DeviceFarmCreateTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: DeviceFarmTestGridProject;

}

/**
 * Converts an object of type 'DeviceFarmCreateTestGridProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateTestGridProjectResult(obj: DeviceFarmCreateTestGridProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testGridProject': toJson_DeviceFarmTestGridProject(obj.testGridProject),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateTestGridUrlRequest
 */
export interface DeviceFarmCreateTestGridUrlRequest {
  /**
   * @schema DeviceFarmCreateTestGridUrlRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateTestGridUrlRequest#expiresInSeconds
   */
  readonly expiresInSeconds: number;

}

/**
 * Converts an object of type 'DeviceFarmCreateTestGridUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateTestGridUrlRequest(obj: DeviceFarmCreateTestGridUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'expiresInSeconds': obj.expiresInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateTestGridUrlResult
 */
export interface DeviceFarmCreateTestGridUrlResult {
  /**
   * @schema DeviceFarmCreateTestGridUrlResult#url
   */
  readonly url?: string;

  /**
   * @schema DeviceFarmCreateTestGridUrlResult#expires
   */
  readonly expires?: string;

}

/**
 * Converts an object of type 'DeviceFarmCreateTestGridUrlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateTestGridUrlResult(obj: DeviceFarmCreateTestGridUrlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'url': obj.url,
    'expires': obj.expires,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateUploadRequest
 */
export interface DeviceFarmCreateUploadRequest {
  /**
   * @schema DeviceFarmCreateUploadRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmCreateUploadRequest#name
   */
  readonly name: string;

  /**
   * @schema DeviceFarmCreateUploadRequest#type
   */
  readonly type: string;

  /**
   * @schema DeviceFarmCreateUploadRequest#contentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'DeviceFarmCreateUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateUploadRequest(obj: DeviceFarmCreateUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'name': obj.name,
    'type': obj.type,
    'contentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateUploadResult
 */
export interface DeviceFarmCreateUploadResult {
  /**
   * @schema DeviceFarmCreateUploadResult#upload
   */
  readonly upload?: DeviceFarmUpload;

}

/**
 * Converts an object of type 'DeviceFarmCreateUploadResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateUploadResult(obj: DeviceFarmCreateUploadResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'upload': toJson_DeviceFarmUpload(obj.upload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateVpceConfigurationRequest
 */
export interface DeviceFarmCreateVpceConfigurationRequest {
  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#vpceConfigurationName
   */
  readonly vpceConfigurationName: string;

  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#vpceServiceName
   */
  readonly vpceServiceName: string;

  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#serviceDnsName
   */
  readonly serviceDnsName: string;

  /**
   * @schema DeviceFarmCreateVpceConfigurationRequest#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * Converts an object of type 'DeviceFarmCreateVpceConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateVpceConfigurationRequest(obj: DeviceFarmCreateVpceConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpceConfigurationName': obj.vpceConfigurationName,
    'vpceServiceName': obj.vpceServiceName,
    'serviceDnsName': obj.serviceDnsName,
    'vpceConfigurationDescription': obj.vpceConfigurationDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateVpceConfigurationResult
 */
export interface DeviceFarmCreateVpceConfigurationResult {
  /**
   * @schema DeviceFarmCreateVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: DeviceFarmVpceConfiguration;

}

/**
 * Converts an object of type 'DeviceFarmCreateVpceConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateVpceConfigurationResult(obj: DeviceFarmCreateVpceConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpceConfiguration': toJson_DeviceFarmVpceConfiguration(obj.vpceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteDevicePoolRequest
 */
export interface DeviceFarmDeleteDevicePoolRequest {
  /**
   * @schema DeviceFarmDeleteDevicePoolRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteDevicePoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteDevicePoolRequest(obj: DeviceFarmDeleteDevicePoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteDevicePoolResult
 */
export interface DeviceFarmDeleteDevicePoolResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteDevicePoolResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteDevicePoolResult(obj: DeviceFarmDeleteDevicePoolResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteInstanceProfileRequest
 */
export interface DeviceFarmDeleteInstanceProfileRequest {
  /**
   * @schema DeviceFarmDeleteInstanceProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteInstanceProfileRequest(obj: DeviceFarmDeleteInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteInstanceProfileResult
 */
export interface DeviceFarmDeleteInstanceProfileResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteInstanceProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteInstanceProfileResult(obj: DeviceFarmDeleteInstanceProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteNetworkProfileRequest
 */
export interface DeviceFarmDeleteNetworkProfileRequest {
  /**
   * @schema DeviceFarmDeleteNetworkProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteNetworkProfileRequest(obj: DeviceFarmDeleteNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteNetworkProfileResult
 */
export interface DeviceFarmDeleteNetworkProfileResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteNetworkProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteNetworkProfileResult(obj: DeviceFarmDeleteNetworkProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteProjectRequest
 */
export interface DeviceFarmDeleteProjectRequest {
  /**
   * @schema DeviceFarmDeleteProjectRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteProjectRequest(obj: DeviceFarmDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteProjectResult
 */
export interface DeviceFarmDeleteProjectResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteProjectResult(obj: DeviceFarmDeleteProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteRemoteAccessSessionRequest
 */
export interface DeviceFarmDeleteRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmDeleteRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteRemoteAccessSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteRemoteAccessSessionRequest(obj: DeviceFarmDeleteRemoteAccessSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteRemoteAccessSessionResult
 */
export interface DeviceFarmDeleteRemoteAccessSessionResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteRemoteAccessSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteRemoteAccessSessionResult(obj: DeviceFarmDeleteRemoteAccessSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteRunRequest
 */
export interface DeviceFarmDeleteRunRequest {
  /**
   * @schema DeviceFarmDeleteRunRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteRunRequest(obj: DeviceFarmDeleteRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteRunResult
 */
export interface DeviceFarmDeleteRunResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteRunResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteRunResult(obj: DeviceFarmDeleteRunResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteTestGridProjectRequest
 */
export interface DeviceFarmDeleteTestGridProjectRequest {
  /**
   * @schema DeviceFarmDeleteTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteTestGridProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteTestGridProjectRequest(obj: DeviceFarmDeleteTestGridProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteTestGridProjectResult
 */
export interface DeviceFarmDeleteTestGridProjectResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteTestGridProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteTestGridProjectResult(obj: DeviceFarmDeleteTestGridProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteUploadRequest
 */
export interface DeviceFarmDeleteUploadRequest {
  /**
   * @schema DeviceFarmDeleteUploadRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteUploadRequest(obj: DeviceFarmDeleteUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteUploadResult
 */
export interface DeviceFarmDeleteUploadResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteUploadResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteUploadResult(obj: DeviceFarmDeleteUploadResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteVpceConfigurationRequest
 */
export interface DeviceFarmDeleteVpceConfigurationRequest {
  /**
   * @schema DeviceFarmDeleteVpceConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmDeleteVpceConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteVpceConfigurationRequest(obj: DeviceFarmDeleteVpceConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeleteVpceConfigurationResult
 */
export interface DeviceFarmDeleteVpceConfigurationResult {
}

/**
 * Converts an object of type 'DeviceFarmDeleteVpceConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeleteVpceConfigurationResult(obj: DeviceFarmDeleteVpceConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetAccountSettingsRequest
 */
export interface DeviceFarmGetAccountSettingsRequest {
}

/**
 * Converts an object of type 'DeviceFarmGetAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetAccountSettingsRequest(obj: DeviceFarmGetAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetAccountSettingsResult
 */
export interface DeviceFarmGetAccountSettingsResult {
  /**
   * @schema DeviceFarmGetAccountSettingsResult#accountSettings
   */
  readonly accountSettings?: DeviceFarmAccountSettings;

}

/**
 * Converts an object of type 'DeviceFarmGetAccountSettingsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetAccountSettingsResult(obj: DeviceFarmGetAccountSettingsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountSettings': toJson_DeviceFarmAccountSettings(obj.accountSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDeviceRequest
 */
export interface DeviceFarmGetDeviceRequest {
  /**
   * @schema DeviceFarmGetDeviceRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDeviceRequest(obj: DeviceFarmGetDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDeviceResult
 */
export interface DeviceFarmGetDeviceResult {
  /**
   * @schema DeviceFarmGetDeviceResult#device
   */
  readonly device?: DeviceFarmDevice;

}

/**
 * Converts an object of type 'DeviceFarmGetDeviceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDeviceResult(obj: DeviceFarmGetDeviceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'device': toJson_DeviceFarmDevice(obj.device),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDeviceInstanceRequest
 */
export interface DeviceFarmGetDeviceInstanceRequest {
  /**
   * @schema DeviceFarmGetDeviceInstanceRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetDeviceInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDeviceInstanceRequest(obj: DeviceFarmGetDeviceInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDeviceInstanceResult
 */
export interface DeviceFarmGetDeviceInstanceResult {
  /**
   * @schema DeviceFarmGetDeviceInstanceResult#deviceInstance
   */
  readonly deviceInstance?: DeviceFarmDeviceInstance;

}

/**
 * Converts an object of type 'DeviceFarmGetDeviceInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDeviceInstanceResult(obj: DeviceFarmGetDeviceInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceInstance': toJson_DeviceFarmDeviceInstance(obj.deviceInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDevicePoolRequest
 */
export interface DeviceFarmGetDevicePoolRequest {
  /**
   * @schema DeviceFarmGetDevicePoolRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetDevicePoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDevicePoolRequest(obj: DeviceFarmGetDevicePoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDevicePoolResult
 */
export interface DeviceFarmGetDevicePoolResult {
  /**
   * @schema DeviceFarmGetDevicePoolResult#devicePool
   */
  readonly devicePool?: DeviceFarmDevicePool;

}

/**
 * Converts an object of type 'DeviceFarmGetDevicePoolResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDevicePoolResult(obj: DeviceFarmGetDevicePoolResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devicePool': toJson_DeviceFarmDevicePool(obj.devicePool),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDevicePoolCompatibilityRequest
 */
export interface DeviceFarmGetDevicePoolCompatibilityRequest {
  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#devicePoolArn
   */
  readonly devicePoolArn: string;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#appArn
   */
  readonly appArn?: string;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#testType
   */
  readonly testType?: string;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#test
   */
  readonly test?: DeviceFarmScheduleRunTest;

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityRequest#configuration
   */
  readonly configuration?: DeviceFarmScheduleRunConfiguration;

}

/**
 * Converts an object of type 'DeviceFarmGetDevicePoolCompatibilityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDevicePoolCompatibilityRequest(obj: DeviceFarmGetDevicePoolCompatibilityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devicePoolArn': obj.devicePoolArn,
    'appArn': obj.appArn,
    'testType': obj.testType,
    'test': toJson_DeviceFarmScheduleRunTest(obj.test),
    'configuration': toJson_DeviceFarmScheduleRunConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetDevicePoolCompatibilityResult
 */
export interface DeviceFarmGetDevicePoolCompatibilityResult {
  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityResult#compatibleDevices
   */
  readonly compatibleDevices?: DeviceFarmDevicePoolCompatibilityResult[];

  /**
   * @schema DeviceFarmGetDevicePoolCompatibilityResult#incompatibleDevices
   */
  readonly incompatibleDevices?: DeviceFarmDevicePoolCompatibilityResult[];

}

/**
 * Converts an object of type 'DeviceFarmGetDevicePoolCompatibilityResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetDevicePoolCompatibilityResult(obj: DeviceFarmGetDevicePoolCompatibilityResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'compatibleDevices': obj.compatibleDevices?.map(y => toJson_DeviceFarmDevicePoolCompatibilityResult(y)),
    'incompatibleDevices': obj.incompatibleDevices?.map(y => toJson_DeviceFarmDevicePoolCompatibilityResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetInstanceProfileRequest
 */
export interface DeviceFarmGetInstanceProfileRequest {
  /**
   * @schema DeviceFarmGetInstanceProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetInstanceProfileRequest(obj: DeviceFarmGetInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetInstanceProfileResult
 */
export interface DeviceFarmGetInstanceProfileResult {
  /**
   * @schema DeviceFarmGetInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * Converts an object of type 'DeviceFarmGetInstanceProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetInstanceProfileResult(obj: DeviceFarmGetInstanceProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceProfile': toJson_DeviceFarmInstanceProfile(obj.instanceProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetJobRequest
 */
export interface DeviceFarmGetJobRequest {
  /**
   * @schema DeviceFarmGetJobRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetJobRequest(obj: DeviceFarmGetJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetJobResult
 */
export interface DeviceFarmGetJobResult {
  /**
   * @schema DeviceFarmGetJobResult#job
   */
  readonly job?: DeviceFarmJob;

}

/**
 * Converts an object of type 'DeviceFarmGetJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetJobResult(obj: DeviceFarmGetJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': toJson_DeviceFarmJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetNetworkProfileRequest
 */
export interface DeviceFarmGetNetworkProfileRequest {
  /**
   * @schema DeviceFarmGetNetworkProfileRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetNetworkProfileRequest(obj: DeviceFarmGetNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetNetworkProfileResult
 */
export interface DeviceFarmGetNetworkProfileResult {
  /**
   * @schema DeviceFarmGetNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

}

/**
 * Converts an object of type 'DeviceFarmGetNetworkProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetNetworkProfileResult(obj: DeviceFarmGetNetworkProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'networkProfile': toJson_DeviceFarmNetworkProfile(obj.networkProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetOfferingStatusRequest
 */
export interface DeviceFarmGetOfferingStatusRequest {
  /**
   * @schema DeviceFarmGetOfferingStatusRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmGetOfferingStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetOfferingStatusRequest(obj: DeviceFarmGetOfferingStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetOfferingStatusResult
 */
export interface DeviceFarmGetOfferingStatusResult {
  /**
   * @schema DeviceFarmGetOfferingStatusResult#current
   */
  readonly current?: { [key: string]: DeviceFarmOfferingStatus };

  /**
   * @schema DeviceFarmGetOfferingStatusResult#nextPeriod
   */
  readonly nextPeriod?: { [key: string]: DeviceFarmOfferingStatus };

  /**
   * @schema DeviceFarmGetOfferingStatusResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmGetOfferingStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetOfferingStatusResult(obj: DeviceFarmGetOfferingStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'current': ((obj.current) === undefined) ? undefined : (Object.entries(obj.current).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DeviceFarmOfferingStatus(i[1]) }), {})),
    'nextPeriod': ((obj.nextPeriod) === undefined) ? undefined : (Object.entries(obj.nextPeriod).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DeviceFarmOfferingStatus(i[1]) }), {})),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetProjectRequest
 */
export interface DeviceFarmGetProjectRequest {
  /**
   * @schema DeviceFarmGetProjectRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetProjectRequest(obj: DeviceFarmGetProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetProjectResult
 */
export interface DeviceFarmGetProjectResult {
  /**
   * @schema DeviceFarmGetProjectResult#project
   */
  readonly project?: DeviceFarmProject;

}

/**
 * Converts an object of type 'DeviceFarmGetProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetProjectResult(obj: DeviceFarmGetProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'project': toJson_DeviceFarmProject(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetRemoteAccessSessionRequest
 */
export interface DeviceFarmGetRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmGetRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetRemoteAccessSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetRemoteAccessSessionRequest(obj: DeviceFarmGetRemoteAccessSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetRemoteAccessSessionResult
 */
export interface DeviceFarmGetRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmGetRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: DeviceFarmRemoteAccessSession;

}

/**
 * Converts an object of type 'DeviceFarmGetRemoteAccessSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetRemoteAccessSessionResult(obj: DeviceFarmGetRemoteAccessSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'remoteAccessSession': toJson_DeviceFarmRemoteAccessSession(obj.remoteAccessSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetRunRequest
 */
export interface DeviceFarmGetRunRequest {
  /**
   * @schema DeviceFarmGetRunRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetRunRequest(obj: DeviceFarmGetRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetRunResult
 */
export interface DeviceFarmGetRunResult {
  /**
   * @schema DeviceFarmGetRunResult#run
   */
  readonly run?: DeviceFarmRun;

}

/**
 * Converts an object of type 'DeviceFarmGetRunResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetRunResult(obj: DeviceFarmGetRunResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'run': toJson_DeviceFarmRun(obj.run),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetSuiteRequest
 */
export interface DeviceFarmGetSuiteRequest {
  /**
   * @schema DeviceFarmGetSuiteRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetSuiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetSuiteRequest(obj: DeviceFarmGetSuiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetSuiteResult
 */
export interface DeviceFarmGetSuiteResult {
  /**
   * @schema DeviceFarmGetSuiteResult#suite
   */
  readonly suite?: DeviceFarmSuite;

}

/**
 * Converts an object of type 'DeviceFarmGetSuiteResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetSuiteResult(obj: DeviceFarmGetSuiteResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suite': toJson_DeviceFarmSuite(obj.suite),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetTestRequest
 */
export interface DeviceFarmGetTestRequest {
  /**
   * @schema DeviceFarmGetTestRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetTestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetTestRequest(obj: DeviceFarmGetTestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetTestResult
 */
export interface DeviceFarmGetTestResult {
  /**
   * @schema DeviceFarmGetTestResult#test
   */
  readonly test?: DeviceFarmTest;

}

/**
 * Converts an object of type 'DeviceFarmGetTestResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetTestResult(obj: DeviceFarmGetTestResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'test': toJson_DeviceFarmTest(obj.test),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetTestGridProjectRequest
 */
export interface DeviceFarmGetTestGridProjectRequest {
  /**
   * @schema DeviceFarmGetTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetTestGridProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetTestGridProjectRequest(obj: DeviceFarmGetTestGridProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetTestGridProjectResult
 */
export interface DeviceFarmGetTestGridProjectResult {
  /**
   * @schema DeviceFarmGetTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: DeviceFarmTestGridProject;

}

/**
 * Converts an object of type 'DeviceFarmGetTestGridProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetTestGridProjectResult(obj: DeviceFarmGetTestGridProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testGridProject': toJson_DeviceFarmTestGridProject(obj.testGridProject),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetTestGridSessionRequest
 */
export interface DeviceFarmGetTestGridSessionRequest {
  /**
   * @schema DeviceFarmGetTestGridSessionRequest#projectArn
   */
  readonly projectArn?: string;

  /**
   * @schema DeviceFarmGetTestGridSessionRequest#sessionId
   */
  readonly sessionId?: string;

  /**
   * @schema DeviceFarmGetTestGridSessionRequest#sessionArn
   */
  readonly sessionArn?: string;

}

/**
 * Converts an object of type 'DeviceFarmGetTestGridSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetTestGridSessionRequest(obj: DeviceFarmGetTestGridSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'sessionId': obj.sessionId,
    'sessionArn': obj.sessionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetTestGridSessionResult
 */
export interface DeviceFarmGetTestGridSessionResult {
  /**
   * @schema DeviceFarmGetTestGridSessionResult#testGridSession
   */
  readonly testGridSession?: DeviceFarmTestGridSession;

}

/**
 * Converts an object of type 'DeviceFarmGetTestGridSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetTestGridSessionResult(obj: DeviceFarmGetTestGridSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testGridSession': toJson_DeviceFarmTestGridSession(obj.testGridSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetUploadRequest
 */
export interface DeviceFarmGetUploadRequest {
  /**
   * @schema DeviceFarmGetUploadRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetUploadRequest(obj: DeviceFarmGetUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetUploadResult
 */
export interface DeviceFarmGetUploadResult {
  /**
   * @schema DeviceFarmGetUploadResult#upload
   */
  readonly upload?: DeviceFarmUpload;

}

/**
 * Converts an object of type 'DeviceFarmGetUploadResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetUploadResult(obj: DeviceFarmGetUploadResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'upload': toJson_DeviceFarmUpload(obj.upload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetVpceConfigurationRequest
 */
export interface DeviceFarmGetVpceConfigurationRequest {
  /**
   * @schema DeviceFarmGetVpceConfigurationRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmGetVpceConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetVpceConfigurationRequest(obj: DeviceFarmGetVpceConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmGetVpceConfigurationResult
 */
export interface DeviceFarmGetVpceConfigurationResult {
  /**
   * @schema DeviceFarmGetVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: DeviceFarmVpceConfiguration;

}

/**
 * Converts an object of type 'DeviceFarmGetVpceConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmGetVpceConfigurationResult(obj: DeviceFarmGetVpceConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpceConfiguration': toJson_DeviceFarmVpceConfiguration(obj.vpceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmInstallToRemoteAccessSessionRequest
 */
export interface DeviceFarmInstallToRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmInstallToRemoteAccessSessionRequest#remoteAccessSessionArn
   */
  readonly remoteAccessSessionArn: string;

  /**
   * @schema DeviceFarmInstallToRemoteAccessSessionRequest#appArn
   */
  readonly appArn: string;

}

/**
 * Converts an object of type 'DeviceFarmInstallToRemoteAccessSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmInstallToRemoteAccessSessionRequest(obj: DeviceFarmInstallToRemoteAccessSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'remoteAccessSessionArn': obj.remoteAccessSessionArn,
    'appArn': obj.appArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmInstallToRemoteAccessSessionResult
 */
export interface DeviceFarmInstallToRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmInstallToRemoteAccessSessionResult#appUpload
   */
  readonly appUpload?: DeviceFarmUpload;

}

/**
 * Converts an object of type 'DeviceFarmInstallToRemoteAccessSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmInstallToRemoteAccessSessionResult(obj: DeviceFarmInstallToRemoteAccessSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'appUpload': toJson_DeviceFarmUpload(obj.appUpload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListArtifactsRequest
 */
export interface DeviceFarmListArtifactsRequest {
  /**
   * @schema DeviceFarmListArtifactsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListArtifactsRequest#type
   */
  readonly type: string;

  /**
   * @schema DeviceFarmListArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListArtifactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListArtifactsRequest(obj: DeviceFarmListArtifactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListArtifactsResult
 */
export interface DeviceFarmListArtifactsResult {
  /**
   * @schema DeviceFarmListArtifactsResult#artifacts
   */
  readonly artifacts?: DeviceFarmArtifact[];

  /**
   * @schema DeviceFarmListArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListArtifactsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListArtifactsResult(obj: DeviceFarmListArtifactsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'artifacts': obj.artifacts?.map(y => toJson_DeviceFarmArtifact(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListDeviceInstancesRequest
 */
export interface DeviceFarmListDeviceInstancesRequest {
  /**
   * @schema DeviceFarmListDeviceInstancesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DeviceFarmListDeviceInstancesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListDeviceInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListDeviceInstancesRequest(obj: DeviceFarmListDeviceInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListDeviceInstancesResult
 */
export interface DeviceFarmListDeviceInstancesResult {
  /**
   * @schema DeviceFarmListDeviceInstancesResult#deviceInstances
   */
  readonly deviceInstances?: DeviceFarmDeviceInstance[];

  /**
   * @schema DeviceFarmListDeviceInstancesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListDeviceInstancesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListDeviceInstancesResult(obj: DeviceFarmListDeviceInstancesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceInstances': obj.deviceInstances?.map(y => toJson_DeviceFarmDeviceInstance(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListDevicePoolsRequest
 */
export interface DeviceFarmListDevicePoolsRequest {
  /**
   * @schema DeviceFarmListDevicePoolsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListDevicePoolsRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListDevicePoolsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListDevicePoolsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListDevicePoolsRequest(obj: DeviceFarmListDevicePoolsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListDevicePoolsResult
 */
export interface DeviceFarmListDevicePoolsResult {
  /**
   * @schema DeviceFarmListDevicePoolsResult#devicePools
   */
  readonly devicePools?: DeviceFarmDevicePool[];

  /**
   * @schema DeviceFarmListDevicePoolsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListDevicePoolsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListDevicePoolsResult(obj: DeviceFarmListDevicePoolsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devicePools': obj.devicePools?.map(y => toJson_DeviceFarmDevicePool(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListDevicesRequest
 */
export interface DeviceFarmListDevicesRequest {
  /**
   * @schema DeviceFarmListDevicesRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmListDevicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DeviceFarmListDevicesRequest#filters
   */
  readonly filters?: DeviceFarmDeviceFilter[];

}

/**
 * Converts an object of type 'DeviceFarmListDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListDevicesRequest(obj: DeviceFarmListDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
    'filters': obj.filters?.map(y => toJson_DeviceFarmDeviceFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListDevicesResult
 */
export interface DeviceFarmListDevicesResult {
  /**
   * @schema DeviceFarmListDevicesResult#devices
   */
  readonly devices?: DeviceFarmDevice[];

  /**
   * @schema DeviceFarmListDevicesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListDevicesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListDevicesResult(obj: DeviceFarmListDevicesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devices': obj.devices?.map(y => toJson_DeviceFarmDevice(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListInstanceProfilesRequest
 */
export interface DeviceFarmListInstanceProfilesRequest {
  /**
   * @schema DeviceFarmListInstanceProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DeviceFarmListInstanceProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListInstanceProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListInstanceProfilesRequest(obj: DeviceFarmListInstanceProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListInstanceProfilesResult
 */
export interface DeviceFarmListInstanceProfilesResult {
  /**
   * @schema DeviceFarmListInstanceProfilesResult#instanceProfiles
   */
  readonly instanceProfiles?: DeviceFarmInstanceProfile[];

  /**
   * @schema DeviceFarmListInstanceProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListInstanceProfilesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListInstanceProfilesResult(obj: DeviceFarmListInstanceProfilesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceProfiles': obj.instanceProfiles?.map(y => toJson_DeviceFarmInstanceProfile(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListJobsRequest
 */
export interface DeviceFarmListJobsRequest {
  /**
   * @schema DeviceFarmListJobsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListJobsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListJobsRequest(obj: DeviceFarmListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListJobsResult
 */
export interface DeviceFarmListJobsResult {
  /**
   * @schema DeviceFarmListJobsResult#jobs
   */
  readonly jobs?: DeviceFarmJob[];

  /**
   * @schema DeviceFarmListJobsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListJobsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListJobsResult(obj: DeviceFarmListJobsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_DeviceFarmJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListNetworkProfilesRequest
 */
export interface DeviceFarmListNetworkProfilesRequest {
  /**
   * @schema DeviceFarmListNetworkProfilesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListNetworkProfilesRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListNetworkProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListNetworkProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListNetworkProfilesRequest(obj: DeviceFarmListNetworkProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListNetworkProfilesResult
 */
export interface DeviceFarmListNetworkProfilesResult {
  /**
   * @schema DeviceFarmListNetworkProfilesResult#networkProfiles
   */
  readonly networkProfiles?: DeviceFarmNetworkProfile[];

  /**
   * @schema DeviceFarmListNetworkProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListNetworkProfilesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListNetworkProfilesResult(obj: DeviceFarmListNetworkProfilesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'networkProfiles': obj.networkProfiles?.map(y => toJson_DeviceFarmNetworkProfile(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListOfferingPromotionsRequest
 */
export interface DeviceFarmListOfferingPromotionsRequest {
  /**
   * @schema DeviceFarmListOfferingPromotionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListOfferingPromotionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListOfferingPromotionsRequest(obj: DeviceFarmListOfferingPromotionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListOfferingPromotionsResult
 */
export interface DeviceFarmListOfferingPromotionsResult {
  /**
   * @schema DeviceFarmListOfferingPromotionsResult#offeringPromotions
   */
  readonly offeringPromotions?: DeviceFarmOfferingPromotion[];

  /**
   * @schema DeviceFarmListOfferingPromotionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListOfferingPromotionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListOfferingPromotionsResult(obj: DeviceFarmListOfferingPromotionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringPromotions': obj.offeringPromotions?.map(y => toJson_DeviceFarmOfferingPromotion(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListOfferingTransactionsRequest
 */
export interface DeviceFarmListOfferingTransactionsRequest {
  /**
   * @schema DeviceFarmListOfferingTransactionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListOfferingTransactionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListOfferingTransactionsRequest(obj: DeviceFarmListOfferingTransactionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListOfferingTransactionsResult
 */
export interface DeviceFarmListOfferingTransactionsResult {
  /**
   * @schema DeviceFarmListOfferingTransactionsResult#offeringTransactions
   */
  readonly offeringTransactions?: DeviceFarmOfferingTransaction[];

  /**
   * @schema DeviceFarmListOfferingTransactionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListOfferingTransactionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListOfferingTransactionsResult(obj: DeviceFarmListOfferingTransactionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringTransactions': obj.offeringTransactions?.map(y => toJson_DeviceFarmOfferingTransaction(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListOfferingsRequest
 */
export interface DeviceFarmListOfferingsRequest {
  /**
   * @schema DeviceFarmListOfferingsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListOfferingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListOfferingsRequest(obj: DeviceFarmListOfferingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListOfferingsResult
 */
export interface DeviceFarmListOfferingsResult {
  /**
   * @schema DeviceFarmListOfferingsResult#offerings
   */
  readonly offerings?: DeviceFarmOffering[];

  /**
   * @schema DeviceFarmListOfferingsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListOfferingsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListOfferingsResult(obj: DeviceFarmListOfferingsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offerings': obj.offerings?.map(y => toJson_DeviceFarmOffering(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListProjectsRequest
 */
export interface DeviceFarmListProjectsRequest {
  /**
   * @schema DeviceFarmListProjectsRequest#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListProjectsRequest(obj: DeviceFarmListProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListProjectsResult
 */
export interface DeviceFarmListProjectsResult {
  /**
   * @schema DeviceFarmListProjectsResult#projects
   */
  readonly projects?: DeviceFarmProject[];

  /**
   * @schema DeviceFarmListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListProjectsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListProjectsResult(obj: DeviceFarmListProjectsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projects': obj.projects?.map(y => toJson_DeviceFarmProject(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListRemoteAccessSessionsRequest
 */
export interface DeviceFarmListRemoteAccessSessionsRequest {
  /**
   * @schema DeviceFarmListRemoteAccessSessionsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListRemoteAccessSessionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListRemoteAccessSessionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListRemoteAccessSessionsRequest(obj: DeviceFarmListRemoteAccessSessionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListRemoteAccessSessionsResult
 */
export interface DeviceFarmListRemoteAccessSessionsResult {
  /**
   * @schema DeviceFarmListRemoteAccessSessionsResult#remoteAccessSessions
   */
  readonly remoteAccessSessions?: DeviceFarmRemoteAccessSession[];

  /**
   * @schema DeviceFarmListRemoteAccessSessionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListRemoteAccessSessionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListRemoteAccessSessionsResult(obj: DeviceFarmListRemoteAccessSessionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'remoteAccessSessions': obj.remoteAccessSessions?.map(y => toJson_DeviceFarmRemoteAccessSession(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListRunsRequest
 */
export interface DeviceFarmListRunsRequest {
  /**
   * @schema DeviceFarmListRunsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListRunsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListRunsRequest(obj: DeviceFarmListRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListRunsResult
 */
export interface DeviceFarmListRunsResult {
  /**
   * @schema DeviceFarmListRunsResult#runs
   */
  readonly runs?: DeviceFarmRun[];

  /**
   * @schema DeviceFarmListRunsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListRunsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListRunsResult(obj: DeviceFarmListRunsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'runs': obj.runs?.map(y => toJson_DeviceFarmRun(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListSamplesRequest
 */
export interface DeviceFarmListSamplesRequest {
  /**
   * @schema DeviceFarmListSamplesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListSamplesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListSamplesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListSamplesRequest(obj: DeviceFarmListSamplesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListSamplesResult
 */
export interface DeviceFarmListSamplesResult {
  /**
   * @schema DeviceFarmListSamplesResult#samples
   */
  readonly samples?: DeviceFarmSample[];

  /**
   * @schema DeviceFarmListSamplesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListSamplesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListSamplesResult(obj: DeviceFarmListSamplesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'samples': obj.samples?.map(y => toJson_DeviceFarmSample(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListSuitesRequest
 */
export interface DeviceFarmListSuitesRequest {
  /**
   * @schema DeviceFarmListSuitesRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListSuitesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListSuitesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListSuitesRequest(obj: DeviceFarmListSuitesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListSuitesResult
 */
export interface DeviceFarmListSuitesResult {
  /**
   * @schema DeviceFarmListSuitesResult#suites
   */
  readonly suites?: DeviceFarmSuite[];

  /**
   * @schema DeviceFarmListSuitesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListSuitesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListSuitesResult(obj: DeviceFarmListSuitesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suites': obj.suites?.map(y => toJson_DeviceFarmSuite(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTagsForResourceRequest
 */
export interface DeviceFarmListTagsForResourceRequest {
  /**
   * @schema DeviceFarmListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTagsForResourceRequest(obj: DeviceFarmListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTagsForResourceResponse
 */
export interface DeviceFarmListTagsForResourceResponse {
  /**
   * @schema DeviceFarmListTagsForResourceResponse#Tags
   */
  readonly tags?: DeviceFarmTag[];

}

/**
 * Converts an object of type 'DeviceFarmListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTagsForResourceResponse(obj: DeviceFarmListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_DeviceFarmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridProjectsRequest
 */
export interface DeviceFarmListTestGridProjectsRequest {
  /**
   * @schema DeviceFarmListTestGridProjectsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridProjectsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridProjectsRequest(obj: DeviceFarmListTestGridProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResult': obj.maxResult,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridProjectsResult
 */
export interface DeviceFarmListTestGridProjectsResult {
  /**
   * @schema DeviceFarmListTestGridProjectsResult#testGridProjects
   */
  readonly testGridProjects?: DeviceFarmTestGridProject[];

  /**
   * @schema DeviceFarmListTestGridProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridProjectsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridProjectsResult(obj: DeviceFarmListTestGridProjectsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testGridProjects': obj.testGridProjects?.map(y => toJson_DeviceFarmTestGridProject(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridSessionActionsRequest
 */
export interface DeviceFarmListTestGridSessionActionsRequest {
  /**
   * @schema DeviceFarmListTestGridSessionActionsRequest#sessionArn
   */
  readonly sessionArn: string;

  /**
   * @schema DeviceFarmListTestGridSessionActionsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridSessionActionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridSessionActionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridSessionActionsRequest(obj: DeviceFarmListTestGridSessionActionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sessionArn': obj.sessionArn,
    'maxResult': obj.maxResult,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridSessionActionsResult
 */
export interface DeviceFarmListTestGridSessionActionsResult {
  /**
   * @schema DeviceFarmListTestGridSessionActionsResult#actions
   */
  readonly actions?: DeviceFarmTestGridSessionAction[];

  /**
   * @schema DeviceFarmListTestGridSessionActionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridSessionActionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridSessionActionsResult(obj: DeviceFarmListTestGridSessionActionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => toJson_DeviceFarmTestGridSessionAction(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridSessionArtifactsRequest
 */
export interface DeviceFarmListTestGridSessionArtifactsRequest {
  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#sessionArn
   */
  readonly sessionArn: string;

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridSessionArtifactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridSessionArtifactsRequest(obj: DeviceFarmListTestGridSessionArtifactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sessionArn': obj.sessionArn,
    'type': obj.type,
    'maxResult': obj.maxResult,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridSessionArtifactsResult
 */
export interface DeviceFarmListTestGridSessionArtifactsResult {
  /**
   * @schema DeviceFarmListTestGridSessionArtifactsResult#artifacts
   */
  readonly artifacts?: DeviceFarmTestGridSessionArtifact[];

  /**
   * @schema DeviceFarmListTestGridSessionArtifactsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridSessionArtifactsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridSessionArtifactsResult(obj: DeviceFarmListTestGridSessionArtifactsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'artifacts': obj.artifacts?.map(y => toJson_DeviceFarmTestGridSessionArtifact(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridSessionsRequest
 */
export interface DeviceFarmListTestGridSessionsRequest {
  /**
   * @schema DeviceFarmListTestGridSessionsRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#creationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#creationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#endTimeAfter
   */
  readonly endTimeAfter?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#endTimeBefore
   */
  readonly endTimeBefore?: string;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#maxResult
   */
  readonly maxResult?: number;

  /**
   * @schema DeviceFarmListTestGridSessionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridSessionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridSessionsRequest(obj: DeviceFarmListTestGridSessionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'status': obj.status,
    'creationTimeAfter': obj.creationTimeAfter,
    'creationTimeBefore': obj.creationTimeBefore,
    'endTimeAfter': obj.endTimeAfter,
    'endTimeBefore': obj.endTimeBefore,
    'maxResult': obj.maxResult,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestGridSessionsResult
 */
export interface DeviceFarmListTestGridSessionsResult {
  /**
   * @schema DeviceFarmListTestGridSessionsResult#testGridSessions
   */
  readonly testGridSessions?: DeviceFarmTestGridSession[];

  /**
   * @schema DeviceFarmListTestGridSessionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestGridSessionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestGridSessionsResult(obj: DeviceFarmListTestGridSessionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testGridSessions': obj.testGridSessions?.map(y => toJson_DeviceFarmTestGridSession(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestsRequest
 */
export interface DeviceFarmListTestsRequest {
  /**
   * @schema DeviceFarmListTestsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListTestsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestsRequest(obj: DeviceFarmListTestsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListTestsResult
 */
export interface DeviceFarmListTestsResult {
  /**
   * @schema DeviceFarmListTestsResult#tests
   */
  readonly tests?: DeviceFarmTest[];

  /**
   * @schema DeviceFarmListTestsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListTestsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListTestsResult(obj: DeviceFarmListTestsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tests': obj.tests?.map(y => toJson_DeviceFarmTest(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListUniqueProblemsRequest
 */
export interface DeviceFarmListUniqueProblemsRequest {
  /**
   * @schema DeviceFarmListUniqueProblemsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListUniqueProblemsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListUniqueProblemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListUniqueProblemsRequest(obj: DeviceFarmListUniqueProblemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListUniqueProblemsResult
 */
export interface DeviceFarmListUniqueProblemsResult {
  /**
   * @schema DeviceFarmListUniqueProblemsResult#uniqueProblems
   */
  readonly uniqueProblems?: { [key: string]: DeviceFarmUniqueProblem[] };

  /**
   * @schema DeviceFarmListUniqueProblemsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListUniqueProblemsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListUniqueProblemsResult(obj: DeviceFarmListUniqueProblemsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uniqueProblems': ((obj.uniqueProblems) === undefined) ? undefined : (Object.entries(obj.uniqueProblems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_DeviceFarmUniqueProblem(y)) }), {})),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListUploadsRequest
 */
export interface DeviceFarmListUploadsRequest {
  /**
   * @schema DeviceFarmListUploadsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmListUploadsRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmListUploadsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListUploadsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListUploadsRequest(obj: DeviceFarmListUploadsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListUploadsResult
 */
export interface DeviceFarmListUploadsResult {
  /**
   * @schema DeviceFarmListUploadsResult#uploads
   */
  readonly uploads?: DeviceFarmUpload[];

  /**
   * @schema DeviceFarmListUploadsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListUploadsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListUploadsResult(obj: DeviceFarmListUploadsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'uploads': obj.uploads?.map(y => toJson_DeviceFarmUpload(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListVpceConfigurationsRequest
 */
export interface DeviceFarmListVpceConfigurationsRequest {
  /**
   * @schema DeviceFarmListVpceConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DeviceFarmListVpceConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListVpceConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListVpceConfigurationsRequest(obj: DeviceFarmListVpceConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmListVpceConfigurationsResult
 */
export interface DeviceFarmListVpceConfigurationsResult {
  /**
   * @schema DeviceFarmListVpceConfigurationsResult#vpceConfigurations
   */
  readonly vpceConfigurations?: DeviceFarmVpceConfiguration[];

  /**
   * @schema DeviceFarmListVpceConfigurationsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DeviceFarmListVpceConfigurationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmListVpceConfigurationsResult(obj: DeviceFarmListVpceConfigurationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpceConfigurations': obj.vpceConfigurations?.map(y => toJson_DeviceFarmVpceConfiguration(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmPurchaseOfferingRequest
 */
export interface DeviceFarmPurchaseOfferingRequest {
  /**
   * @schema DeviceFarmPurchaseOfferingRequest#offeringId
   */
  readonly offeringId: string;

  /**
   * @schema DeviceFarmPurchaseOfferingRequest#quantity
   */
  readonly quantity: number;

  /**
   * @schema DeviceFarmPurchaseOfferingRequest#offeringPromotionId
   */
  readonly offeringPromotionId?: string;

}

/**
 * Converts an object of type 'DeviceFarmPurchaseOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmPurchaseOfferingRequest(obj: DeviceFarmPurchaseOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringId': obj.offeringId,
    'quantity': obj.quantity,
    'offeringPromotionId': obj.offeringPromotionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmPurchaseOfferingResult
 */
export interface DeviceFarmPurchaseOfferingResult {
  /**
   * @schema DeviceFarmPurchaseOfferingResult#offeringTransaction
   */
  readonly offeringTransaction?: DeviceFarmOfferingTransaction;

}

/**
 * Converts an object of type 'DeviceFarmPurchaseOfferingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmPurchaseOfferingResult(obj: DeviceFarmPurchaseOfferingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringTransaction': toJson_DeviceFarmOfferingTransaction(obj.offeringTransaction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRenewOfferingRequest
 */
export interface DeviceFarmRenewOfferingRequest {
  /**
   * @schema DeviceFarmRenewOfferingRequest#offeringId
   */
  readonly offeringId: string;

  /**
   * @schema DeviceFarmRenewOfferingRequest#quantity
   */
  readonly quantity: number;

}

/**
 * Converts an object of type 'DeviceFarmRenewOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRenewOfferingRequest(obj: DeviceFarmRenewOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringId': obj.offeringId,
    'quantity': obj.quantity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRenewOfferingResult
 */
export interface DeviceFarmRenewOfferingResult {
  /**
   * @schema DeviceFarmRenewOfferingResult#offeringTransaction
   */
  readonly offeringTransaction?: DeviceFarmOfferingTransaction;

}

/**
 * Converts an object of type 'DeviceFarmRenewOfferingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRenewOfferingResult(obj: DeviceFarmRenewOfferingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringTransaction': toJson_DeviceFarmOfferingTransaction(obj.offeringTransaction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmScheduleRunRequest
 */
export interface DeviceFarmScheduleRunRequest {
  /**
   * @schema DeviceFarmScheduleRunRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#appArn
   */
  readonly appArn?: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#devicePoolArn
   */
  readonly devicePoolArn?: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#deviceSelectionConfiguration
   */
  readonly deviceSelectionConfiguration?: DeviceFarmDeviceSelectionConfiguration;

  /**
   * @schema DeviceFarmScheduleRunRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmScheduleRunRequest#test
   */
  readonly test: DeviceFarmScheduleRunTest;

  /**
   * @schema DeviceFarmScheduleRunRequest#configuration
   */
  readonly configuration?: DeviceFarmScheduleRunConfiguration;

  /**
   * @schema DeviceFarmScheduleRunRequest#executionConfiguration
   */
  readonly executionConfiguration?: DeviceFarmExecutionConfiguration;

}

/**
 * Converts an object of type 'DeviceFarmScheduleRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmScheduleRunRequest(obj: DeviceFarmScheduleRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'appArn': obj.appArn,
    'devicePoolArn': obj.devicePoolArn,
    'deviceSelectionConfiguration': toJson_DeviceFarmDeviceSelectionConfiguration(obj.deviceSelectionConfiguration),
    'name': obj.name,
    'test': toJson_DeviceFarmScheduleRunTest(obj.test),
    'configuration': toJson_DeviceFarmScheduleRunConfiguration(obj.configuration),
    'executionConfiguration': toJson_DeviceFarmExecutionConfiguration(obj.executionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmScheduleRunResult
 */
export interface DeviceFarmScheduleRunResult {
  /**
   * @schema DeviceFarmScheduleRunResult#run
   */
  readonly run?: DeviceFarmRun;

}

/**
 * Converts an object of type 'DeviceFarmScheduleRunResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmScheduleRunResult(obj: DeviceFarmScheduleRunResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'run': toJson_DeviceFarmRun(obj.run),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmStopJobRequest
 */
export interface DeviceFarmStopJobRequest {
  /**
   * @schema DeviceFarmStopJobRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmStopJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmStopJobRequest(obj: DeviceFarmStopJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmStopJobResult
 */
export interface DeviceFarmStopJobResult {
  /**
   * @schema DeviceFarmStopJobResult#job
   */
  readonly job?: DeviceFarmJob;

}

/**
 * Converts an object of type 'DeviceFarmStopJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmStopJobResult(obj: DeviceFarmStopJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'job': toJson_DeviceFarmJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmStopRemoteAccessSessionRequest
 */
export interface DeviceFarmStopRemoteAccessSessionRequest {
  /**
   * @schema DeviceFarmStopRemoteAccessSessionRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmStopRemoteAccessSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmStopRemoteAccessSessionRequest(obj: DeviceFarmStopRemoteAccessSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmStopRemoteAccessSessionResult
 */
export interface DeviceFarmStopRemoteAccessSessionResult {
  /**
   * @schema DeviceFarmStopRemoteAccessSessionResult#remoteAccessSession
   */
  readonly remoteAccessSession?: DeviceFarmRemoteAccessSession;

}

/**
 * Converts an object of type 'DeviceFarmStopRemoteAccessSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmStopRemoteAccessSessionResult(obj: DeviceFarmStopRemoteAccessSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'remoteAccessSession': toJson_DeviceFarmRemoteAccessSession(obj.remoteAccessSession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmStopRunRequest
 */
export interface DeviceFarmStopRunRequest {
  /**
   * @schema DeviceFarmStopRunRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'DeviceFarmStopRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmStopRunRequest(obj: DeviceFarmStopRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmStopRunResult
 */
export interface DeviceFarmStopRunResult {
  /**
   * @schema DeviceFarmStopRunResult#run
   */
  readonly run?: DeviceFarmRun;

}

/**
 * Converts an object of type 'DeviceFarmStopRunResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmStopRunResult(obj: DeviceFarmStopRunResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'run': toJson_DeviceFarmRun(obj.run),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTagResourceRequest
 */
export interface DeviceFarmTagResourceRequest {
  /**
   * @schema DeviceFarmTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema DeviceFarmTagResourceRequest#Tags
   */
  readonly tags?: DeviceFarmTag[];

}

/**
 * Converts an object of type 'DeviceFarmTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTagResourceRequest(obj: DeviceFarmTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_DeviceFarmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTagResourceResponse
 */
export interface DeviceFarmTagResourceResponse {
}

/**
 * Converts an object of type 'DeviceFarmTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTagResourceResponse(obj: DeviceFarmTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUntagResourceRequest
 */
export interface DeviceFarmUntagResourceRequest {
  /**
   * @schema DeviceFarmUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema DeviceFarmUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'DeviceFarmUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUntagResourceRequest(obj: DeviceFarmUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUntagResourceResponse
 */
export interface DeviceFarmUntagResourceResponse {
}

/**
 * Converts an object of type 'DeviceFarmUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUntagResourceResponse(obj: DeviceFarmUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateDeviceInstanceRequest
 */
export interface DeviceFarmUpdateDeviceInstanceRequest {
  /**
   * @schema DeviceFarmUpdateDeviceInstanceRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateDeviceInstanceRequest#profileArn
   */
  readonly profileArn?: string;

  /**
   * @schema DeviceFarmUpdateDeviceInstanceRequest#labels
   */
  readonly labels?: string[];

}

/**
 * Converts an object of type 'DeviceFarmUpdateDeviceInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateDeviceInstanceRequest(obj: DeviceFarmUpdateDeviceInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'profileArn': obj.profileArn,
    'labels': obj.labels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateDeviceInstanceResult
 */
export interface DeviceFarmUpdateDeviceInstanceResult {
  /**
   * @schema DeviceFarmUpdateDeviceInstanceResult#deviceInstance
   */
  readonly deviceInstance?: DeviceFarmDeviceInstance;

}

/**
 * Converts an object of type 'DeviceFarmUpdateDeviceInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateDeviceInstanceResult(obj: DeviceFarmUpdateDeviceInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceInstance': toJson_DeviceFarmDeviceInstance(obj.deviceInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateDevicePoolRequest
 */
export interface DeviceFarmUpdateDevicePoolRequest {
  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#rules
   */
  readonly rules?: DeviceFarmRule[];

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#maxDevices
   */
  readonly maxDevices?: number;

  /**
   * @schema DeviceFarmUpdateDevicePoolRequest#clearMaxDevices
   */
  readonly clearMaxDevices?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmUpdateDevicePoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateDevicePoolRequest(obj: DeviceFarmUpdateDevicePoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'rules': obj.rules?.map(y => toJson_DeviceFarmRule(y)),
    'maxDevices': obj.maxDevices,
    'clearMaxDevices': obj.clearMaxDevices,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateDevicePoolResult
 */
export interface DeviceFarmUpdateDevicePoolResult {
  /**
   * @schema DeviceFarmUpdateDevicePoolResult#devicePool
   */
  readonly devicePool?: DeviceFarmDevicePool;

}

/**
 * Converts an object of type 'DeviceFarmUpdateDevicePoolResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateDevicePoolResult(obj: DeviceFarmUpdateDevicePoolResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devicePool': toJson_DeviceFarmDevicePool(obj.devicePool),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateInstanceProfileRequest
 */
export interface DeviceFarmUpdateInstanceProfileRequest {
  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema DeviceFarmUpdateInstanceProfileRequest#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmUpdateInstanceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateInstanceProfileRequest(obj: DeviceFarmUpdateInstanceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'packageCleanup': obj.packageCleanup,
    'excludeAppPackagesFromCleanup': obj.excludeAppPackagesFromCleanup?.map(y => y),
    'rebootAfterUse': obj.rebootAfterUse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateInstanceProfileResult
 */
export interface DeviceFarmUpdateInstanceProfileResult {
  /**
   * @schema DeviceFarmUpdateInstanceProfileResult#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * Converts an object of type 'DeviceFarmUpdateInstanceProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateInstanceProfileResult(obj: DeviceFarmUpdateInstanceProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceProfile': toJson_DeviceFarmInstanceProfile(obj.instanceProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateNetworkProfileRequest
 */
export interface DeviceFarmUpdateNetworkProfileRequest {
  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema DeviceFarmUpdateNetworkProfileRequest#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * Converts an object of type 'DeviceFarmUpdateNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateNetworkProfileRequest(obj: DeviceFarmUpdateNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'uplinkBandwidthBits': obj.uplinkBandwidthBits,
    'downlinkBandwidthBits': obj.downlinkBandwidthBits,
    'uplinkDelayMs': obj.uplinkDelayMs,
    'downlinkDelayMs': obj.downlinkDelayMs,
    'uplinkJitterMs': obj.uplinkJitterMs,
    'downlinkJitterMs': obj.downlinkJitterMs,
    'uplinkLossPercent': obj.uplinkLossPercent,
    'downlinkLossPercent': obj.downlinkLossPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateNetworkProfileResult
 */
export interface DeviceFarmUpdateNetworkProfileResult {
  /**
   * @schema DeviceFarmUpdateNetworkProfileResult#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

}

/**
 * Converts an object of type 'DeviceFarmUpdateNetworkProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateNetworkProfileResult(obj: DeviceFarmUpdateNetworkProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'networkProfile': toJson_DeviceFarmNetworkProfile(obj.networkProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateProjectRequest
 */
export interface DeviceFarmUpdateProjectRequest {
  /**
   * @schema DeviceFarmUpdateProjectRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateProjectRequest#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

}

/**
 * Converts an object of type 'DeviceFarmUpdateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateProjectRequest(obj: DeviceFarmUpdateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'defaultJobTimeoutMinutes': obj.defaultJobTimeoutMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateProjectResult
 */
export interface DeviceFarmUpdateProjectResult {
  /**
   * @schema DeviceFarmUpdateProjectResult#project
   */
  readonly project?: DeviceFarmProject;

}

/**
 * Converts an object of type 'DeviceFarmUpdateProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateProjectResult(obj: DeviceFarmUpdateProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'project': toJson_DeviceFarmProject(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateTestGridProjectRequest
 */
export interface DeviceFarmUpdateTestGridProjectRequest {
  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmUpdateTestGridProjectRequest#vpcConfig
   */
  readonly vpcConfig?: DeviceFarmTestGridVpcConfig;

}

/**
 * Converts an object of type 'DeviceFarmUpdateTestGridProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateTestGridProjectRequest(obj: DeviceFarmUpdateTestGridProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectArn': obj.projectArn,
    'name': obj.name,
    'description': obj.description,
    'vpcConfig': toJson_DeviceFarmTestGridVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateTestGridProjectResult
 */
export interface DeviceFarmUpdateTestGridProjectResult {
  /**
   * @schema DeviceFarmUpdateTestGridProjectResult#testGridProject
   */
  readonly testGridProject?: DeviceFarmTestGridProject;

}

/**
 * Converts an object of type 'DeviceFarmUpdateTestGridProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateTestGridProjectResult(obj: DeviceFarmUpdateTestGridProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testGridProject': toJson_DeviceFarmTestGridProject(obj.testGridProject),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateUploadRequest
 */
export interface DeviceFarmUpdateUploadRequest {
  /**
   * @schema DeviceFarmUpdateUploadRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateUploadRequest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpdateUploadRequest#contentType
   */
  readonly contentType?: string;

  /**
   * @schema DeviceFarmUpdateUploadRequest#editContent
   */
  readonly editContent?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmUpdateUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateUploadRequest(obj: DeviceFarmUpdateUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'contentType': obj.contentType,
    'editContent': obj.editContent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateUploadResult
 */
export interface DeviceFarmUpdateUploadResult {
  /**
   * @schema DeviceFarmUpdateUploadResult#upload
   */
  readonly upload?: DeviceFarmUpload;

}

/**
 * Converts an object of type 'DeviceFarmUpdateUploadResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateUploadResult(obj: DeviceFarmUpdateUploadResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'upload': toJson_DeviceFarmUpload(obj.upload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateVpceConfigurationRequest
 */
export interface DeviceFarmUpdateVpceConfigurationRequest {
  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#arn
   */
  readonly arn: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#vpceConfigurationName
   */
  readonly vpceConfigurationName?: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#vpceServiceName
   */
  readonly vpceServiceName?: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#serviceDnsName
   */
  readonly serviceDnsName?: string;

  /**
   * @schema DeviceFarmUpdateVpceConfigurationRequest#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * Converts an object of type 'DeviceFarmUpdateVpceConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateVpceConfigurationRequest(obj: DeviceFarmUpdateVpceConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'vpceConfigurationName': obj.vpceConfigurationName,
    'vpceServiceName': obj.vpceServiceName,
    'serviceDnsName': obj.serviceDnsName,
    'vpceConfigurationDescription': obj.vpceConfigurationDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpdateVpceConfigurationResult
 */
export interface DeviceFarmUpdateVpceConfigurationResult {
  /**
   * @schema DeviceFarmUpdateVpceConfigurationResult#vpceConfiguration
   */
  readonly vpceConfiguration?: DeviceFarmVpceConfiguration;

}

/**
 * Converts an object of type 'DeviceFarmUpdateVpceConfigurationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpdateVpceConfigurationResult(obj: DeviceFarmUpdateVpceConfigurationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vpceConfiguration': toJson_DeviceFarmVpceConfiguration(obj.vpceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRule
 */
export interface DeviceFarmRule {
  /**
   * @schema DeviceFarmRule#attribute
   */
  readonly attribute?: string;

  /**
   * @schema DeviceFarmRule#operator
   */
  readonly operator?: string;

  /**
   * @schema DeviceFarmRule#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DeviceFarmRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRule(obj: DeviceFarmRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attribute': obj.attribute,
    'operator': obj.operator,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDevicePool
 */
export interface DeviceFarmDevicePool {
  /**
   * @schema DeviceFarmDevicePool#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmDevicePool#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmDevicePool#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmDevicePool#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmDevicePool#rules
   */
  readonly rules?: DeviceFarmRule[];

  /**
   * @schema DeviceFarmDevicePool#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * Converts an object of type 'DeviceFarmDevicePool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDevicePool(obj: DeviceFarmDevicePool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'rules': obj.rules?.map(y => toJson_DeviceFarmRule(y)),
    'maxDevices': obj.maxDevices,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmInstanceProfile
 */
export interface DeviceFarmInstanceProfile {
  /**
   * @schema DeviceFarmInstanceProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmInstanceProfile#packageCleanup
   */
  readonly packageCleanup?: boolean;

  /**
   * @schema DeviceFarmInstanceProfile#excludeAppPackagesFromCleanup
   */
  readonly excludeAppPackagesFromCleanup?: string[];

  /**
   * @schema DeviceFarmInstanceProfile#rebootAfterUse
   */
  readonly rebootAfterUse?: boolean;

  /**
   * @schema DeviceFarmInstanceProfile#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmInstanceProfile#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DeviceFarmInstanceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmInstanceProfile(obj: DeviceFarmInstanceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'packageCleanup': obj.packageCleanup,
    'excludeAppPackagesFromCleanup': obj.excludeAppPackagesFromCleanup?.map(y => y),
    'rebootAfterUse': obj.rebootAfterUse,
    'name': obj.name,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmNetworkProfile
 */
export interface DeviceFarmNetworkProfile {
  /**
   * @schema DeviceFarmNetworkProfile#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmNetworkProfile#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmNetworkProfile#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmNetworkProfile#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkBandwidthBits
   */
  readonly uplinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkBandwidthBits
   */
  readonly downlinkBandwidthBits?: number;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkDelayMs
   */
  readonly uplinkDelayMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkDelayMs
   */
  readonly downlinkDelayMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkJitterMs
   */
  readonly uplinkJitterMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkJitterMs
   */
  readonly downlinkJitterMs?: number;

  /**
   * @schema DeviceFarmNetworkProfile#uplinkLossPercent
   */
  readonly uplinkLossPercent?: number;

  /**
   * @schema DeviceFarmNetworkProfile#downlinkLossPercent
   */
  readonly downlinkLossPercent?: number;

}

/**
 * Converts an object of type 'DeviceFarmNetworkProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmNetworkProfile(obj: DeviceFarmNetworkProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'uplinkBandwidthBits': obj.uplinkBandwidthBits,
    'downlinkBandwidthBits': obj.downlinkBandwidthBits,
    'uplinkDelayMs': obj.uplinkDelayMs,
    'downlinkDelayMs': obj.downlinkDelayMs,
    'uplinkJitterMs': obj.uplinkJitterMs,
    'downlinkJitterMs': obj.downlinkJitterMs,
    'uplinkLossPercent': obj.uplinkLossPercent,
    'downlinkLossPercent': obj.downlinkLossPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmProject
 */
export interface DeviceFarmProject {
  /**
   * @schema DeviceFarmProject#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmProject#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmProject#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmProject#created
   */
  readonly created?: string;

}

/**
 * Converts an object of type 'DeviceFarmProject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmProject(obj: DeviceFarmProject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'defaultJobTimeoutMinutes': obj.defaultJobTimeoutMinutes,
    'created': obj.created,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCreateRemoteAccessSessionConfiguration
 */
export interface DeviceFarmCreateRemoteAccessSessionConfiguration {
  /**
   * @schema DeviceFarmCreateRemoteAccessSessionConfiguration#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema DeviceFarmCreateRemoteAccessSessionConfiguration#vpceConfigurationArns
   */
  readonly vpceConfigurationArns?: string[];

}

/**
 * Converts an object of type 'DeviceFarmCreateRemoteAccessSessionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCreateRemoteAccessSessionConfiguration(obj: DeviceFarmCreateRemoteAccessSessionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingMethod': obj.billingMethod,
    'vpceConfigurationArns': obj.vpceConfigurationArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRemoteAccessSession
 */
export interface DeviceFarmRemoteAccessSession {
  /**
   * @schema DeviceFarmRemoteAccessSession#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmRemoteAccessSession#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema DeviceFarmRemoteAccessSession#remoteRecordEnabled
   */
  readonly remoteRecordEnabled?: boolean;

  /**
   * @schema DeviceFarmRemoteAccessSession#remoteRecordAppArn
   */
  readonly remoteRecordAppArn?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#hostAddress
   */
  readonly hostAddress?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#clientId
   */
  readonly clientId?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

  /**
   * @schema DeviceFarmRemoteAccessSession#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#deviceUdid
   */
  readonly deviceUdid?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#interactionMode
   */
  readonly interactionMode?: string;

  /**
   * @schema DeviceFarmRemoteAccessSession#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmRemoteAccessSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRemoteAccessSession(obj: DeviceFarmRemoteAccessSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'created': obj.created,
    'status': obj.status,
    'result': obj.result,
    'message': obj.message,
    'started': obj.started,
    'stopped': obj.stopped,
    'device': toJson_DeviceFarmDevice(obj.device),
    'instanceArn': obj.instanceArn,
    'remoteDebugEnabled': obj.remoteDebugEnabled,
    'remoteRecordEnabled': obj.remoteRecordEnabled,
    'remoteRecordAppArn': obj.remoteRecordAppArn,
    'hostAddress': obj.hostAddress,
    'clientId': obj.clientId,
    'billingMethod': obj.billingMethod,
    'deviceMinutes': toJson_DeviceFarmDeviceMinutes(obj.deviceMinutes),
    'endpoint': obj.endpoint,
    'deviceUdid': obj.deviceUdid,
    'interactionMode': obj.interactionMode,
    'skipAppResign': obj.skipAppResign,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTestGridVpcConfig
 */
export interface DeviceFarmTestGridVpcConfig {
  /**
   * @schema DeviceFarmTestGridVpcConfig#securityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema DeviceFarmTestGridVpcConfig#subnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema DeviceFarmTestGridVpcConfig#vpcId
   */
  readonly vpcId: string;

}

/**
 * Converts an object of type 'DeviceFarmTestGridVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTestGridVpcConfig(obj: DeviceFarmTestGridVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'subnetIds': obj.subnetIds?.map(y => y),
    'vpcId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTestGridProject
 */
export interface DeviceFarmTestGridProject {
  /**
   * @schema DeviceFarmTestGridProject#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmTestGridProject#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmTestGridProject#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmTestGridProject#vpcConfig
   */
  readonly vpcConfig?: DeviceFarmTestGridVpcConfig;

  /**
   * @schema DeviceFarmTestGridProject#created
   */
  readonly created?: string;

}

/**
 * Converts an object of type 'DeviceFarmTestGridProject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTestGridProject(obj: DeviceFarmTestGridProject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'vpcConfig': toJson_DeviceFarmTestGridVpcConfig(obj.vpcConfig),
    'created': obj.created,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUpload
 */
export interface DeviceFarmUpload {
  /**
   * @schema DeviceFarmUpload#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmUpload#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmUpload#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmUpload#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmUpload#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmUpload#url
   */
  readonly url?: string;

  /**
   * @schema DeviceFarmUpload#metadata
   */
  readonly metadata?: string;

  /**
   * @schema DeviceFarmUpload#contentType
   */
  readonly contentType?: string;

  /**
   * @schema DeviceFarmUpload#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmUpload#category
   */
  readonly category?: string;

}

/**
 * Converts an object of type 'DeviceFarmUpload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUpload(obj: DeviceFarmUpload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'created': obj.created,
    'type': obj.type,
    'status': obj.status,
    'url': obj.url,
    'metadata': obj.metadata,
    'contentType': obj.contentType,
    'message': obj.message,
    'category': obj.category,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmVpceConfiguration
 */
export interface DeviceFarmVpceConfiguration {
  /**
   * @schema DeviceFarmVpceConfiguration#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#vpceConfigurationName
   */
  readonly vpceConfigurationName?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#vpceServiceName
   */
  readonly vpceServiceName?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#serviceDnsName
   */
  readonly serviceDnsName?: string;

  /**
   * @schema DeviceFarmVpceConfiguration#vpceConfigurationDescription
   */
  readonly vpceConfigurationDescription?: string;

}

/**
 * Converts an object of type 'DeviceFarmVpceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmVpceConfiguration(obj: DeviceFarmVpceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'vpceConfigurationName': obj.vpceConfigurationName,
    'vpceServiceName': obj.vpceServiceName,
    'serviceDnsName': obj.serviceDnsName,
    'vpceConfigurationDescription': obj.vpceConfigurationDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmAccountSettings
 */
export interface DeviceFarmAccountSettings {
  /**
   * @schema DeviceFarmAccountSettings#awsAccountNumber
   */
  readonly awsAccountNumber?: string;

  /**
   * @schema DeviceFarmAccountSettings#unmeteredDevices
   */
  readonly unmeteredDevices?: { [key: string]: number };

  /**
   * @schema DeviceFarmAccountSettings#unmeteredRemoteAccessDevices
   */
  readonly unmeteredRemoteAccessDevices?: { [key: string]: number };

  /**
   * @schema DeviceFarmAccountSettings#maxJobTimeoutMinutes
   */
  readonly maxJobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmAccountSettings#trialMinutes
   */
  readonly trialMinutes?: DeviceFarmTrialMinutes;

  /**
   * @schema DeviceFarmAccountSettings#maxSlots
   */
  readonly maxSlots?: { [key: string]: number };

  /**
   * @schema DeviceFarmAccountSettings#defaultJobTimeoutMinutes
   */
  readonly defaultJobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmAccountSettings#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmAccountSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmAccountSettings(obj: DeviceFarmAccountSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsAccountNumber': obj.awsAccountNumber,
    'unmeteredDevices': ((obj.unmeteredDevices) === undefined) ? undefined : (Object.entries(obj.unmeteredDevices).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'unmeteredRemoteAccessDevices': ((obj.unmeteredRemoteAccessDevices) === undefined) ? undefined : (Object.entries(obj.unmeteredRemoteAccessDevices).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'maxJobTimeoutMinutes': obj.maxJobTimeoutMinutes,
    'trialMinutes': toJson_DeviceFarmTrialMinutes(obj.trialMinutes),
    'maxSlots': ((obj.maxSlots) === undefined) ? undefined : (Object.entries(obj.maxSlots).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'defaultJobTimeoutMinutes': obj.defaultJobTimeoutMinutes,
    'skipAppResign': obj.skipAppResign,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDevice
 */
export interface DeviceFarmDevice {
  /**
   * @schema DeviceFarmDevice#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmDevice#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmDevice#manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema DeviceFarmDevice#model
   */
  readonly model?: string;

  /**
   * @schema DeviceFarmDevice#modelId
   */
  readonly modelId?: string;

  /**
   * @schema DeviceFarmDevice#formFactor
   */
  readonly formFactor?: string;

  /**
   * @schema DeviceFarmDevice#platform
   */
  readonly platform?: string;

  /**
   * @schema DeviceFarmDevice#os
   */
  readonly os?: string;

  /**
   * @schema DeviceFarmDevice#cpu
   */
  readonly cpu?: DeviceFarmCpu;

  /**
   * @schema DeviceFarmDevice#resolution
   */
  readonly resolution?: DeviceFarmResolution;

  /**
   * @schema DeviceFarmDevice#heapSize
   */
  readonly heapSize?: number;

  /**
   * @schema DeviceFarmDevice#memory
   */
  readonly memory?: number;

  /**
   * @schema DeviceFarmDevice#image
   */
  readonly image?: string;

  /**
   * @schema DeviceFarmDevice#carrier
   */
  readonly carrier?: string;

  /**
   * @schema DeviceFarmDevice#radio
   */
  readonly radio?: string;

  /**
   * @schema DeviceFarmDevice#remoteAccessEnabled
   */
  readonly remoteAccessEnabled?: boolean;

  /**
   * @schema DeviceFarmDevice#remoteDebugEnabled
   */
  readonly remoteDebugEnabled?: boolean;

  /**
   * @schema DeviceFarmDevice#fleetType
   */
  readonly fleetType?: string;

  /**
   * @schema DeviceFarmDevice#fleetName
   */
  readonly fleetName?: string;

  /**
   * @schema DeviceFarmDevice#instances
   */
  readonly instances?: DeviceFarmDeviceInstance[];

  /**
   * @schema DeviceFarmDevice#availability
   */
  readonly availability?: string;

}

/**
 * Converts an object of type 'DeviceFarmDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDevice(obj: DeviceFarmDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'manufacturer': obj.manufacturer,
    'model': obj.model,
    'modelId': obj.modelId,
    'formFactor': obj.formFactor,
    'platform': obj.platform,
    'os': obj.os,
    'cpu': toJson_DeviceFarmCpu(obj.cpu),
    'resolution': toJson_DeviceFarmResolution(obj.resolution),
    'heapSize': obj.heapSize,
    'memory': obj.memory,
    'image': obj.image,
    'carrier': obj.carrier,
    'radio': obj.radio,
    'remoteAccessEnabled': obj.remoteAccessEnabled,
    'remoteDebugEnabled': obj.remoteDebugEnabled,
    'fleetType': obj.fleetType,
    'fleetName': obj.fleetName,
    'instances': obj.instances?.map(y => toJson_DeviceFarmDeviceInstance(y)),
    'availability': obj.availability,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeviceInstance
 */
export interface DeviceFarmDeviceInstance {
  /**
   * @schema DeviceFarmDeviceInstance#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmDeviceInstance#deviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema DeviceFarmDeviceInstance#labels
   */
  readonly labels?: string[];

  /**
   * @schema DeviceFarmDeviceInstance#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmDeviceInstance#udid
   */
  readonly udid?: string;

  /**
   * @schema DeviceFarmDeviceInstance#instanceProfile
   */
  readonly instanceProfile?: DeviceFarmInstanceProfile;

}

/**
 * Converts an object of type 'DeviceFarmDeviceInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeviceInstance(obj: DeviceFarmDeviceInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'deviceArn': obj.deviceArn,
    'labels': obj.labels?.map(y => y),
    'status': obj.status,
    'udid': obj.udid,
    'instanceProfile': toJson_DeviceFarmInstanceProfile(obj.instanceProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmScheduleRunTest
 */
export interface DeviceFarmScheduleRunTest {
  /**
   * @schema DeviceFarmScheduleRunTest#type
   */
  readonly type: string;

  /**
   * @schema DeviceFarmScheduleRunTest#testPackageArn
   */
  readonly testPackageArn?: string;

  /**
   * @schema DeviceFarmScheduleRunTest#testSpecArn
   */
  readonly testSpecArn?: string;

  /**
   * @schema DeviceFarmScheduleRunTest#filter
   */
  readonly filter?: string;

  /**
   * @schema DeviceFarmScheduleRunTest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'DeviceFarmScheduleRunTest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmScheduleRunTest(obj: DeviceFarmScheduleRunTest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'testPackageArn': obj.testPackageArn,
    'testSpecArn': obj.testSpecArn,
    'filter': obj.filter,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmScheduleRunConfiguration
 */
export interface DeviceFarmScheduleRunConfiguration {
  /**
   * @schema DeviceFarmScheduleRunConfiguration#extraDataPackageArn
   */
  readonly extraDataPackageArn?: string;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#networkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#locale
   */
  readonly locale?: string;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#location
   */
  readonly location?: DeviceFarmLocation;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#vpceConfigurationArns
   */
  readonly vpceConfigurationArns?: string[];

  /**
   * @schema DeviceFarmScheduleRunConfiguration#customerArtifactPaths
   */
  readonly customerArtifactPaths?: DeviceFarmCustomerArtifactPaths;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#radios
   */
  readonly radios?: DeviceFarmRadios;

  /**
   * @schema DeviceFarmScheduleRunConfiguration#auxiliaryApps
   */
  readonly auxiliaryApps?: string[];

  /**
   * @schema DeviceFarmScheduleRunConfiguration#billingMethod
   */
  readonly billingMethod?: string;

}

/**
 * Converts an object of type 'DeviceFarmScheduleRunConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmScheduleRunConfiguration(obj: DeviceFarmScheduleRunConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'extraDataPackageArn': obj.extraDataPackageArn,
    'networkProfileArn': obj.networkProfileArn,
    'locale': obj.locale,
    'location': toJson_DeviceFarmLocation(obj.location),
    'vpceConfigurationArns': obj.vpceConfigurationArns?.map(y => y),
    'customerArtifactPaths': toJson_DeviceFarmCustomerArtifactPaths(obj.customerArtifactPaths),
    'radios': toJson_DeviceFarmRadios(obj.radios),
    'auxiliaryApps': obj.auxiliaryApps?.map(y => y),
    'billingMethod': obj.billingMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDevicePoolCompatibilityResult
 */
export interface DeviceFarmDevicePoolCompatibilityResult {
  /**
   * @schema DeviceFarmDevicePoolCompatibilityResult#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmDevicePoolCompatibilityResult#compatible
   */
  readonly compatible?: boolean;

  /**
   * @schema DeviceFarmDevicePoolCompatibilityResult#incompatibilityMessages
   */
  readonly incompatibilityMessages?: DeviceFarmIncompatibilityMessage[];

}

/**
 * Converts an object of type 'DeviceFarmDevicePoolCompatibilityResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDevicePoolCompatibilityResult(obj: DeviceFarmDevicePoolCompatibilityResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'device': toJson_DeviceFarmDevice(obj.device),
    'compatible': obj.compatible,
    'incompatibilityMessages': obj.incompatibilityMessages?.map(y => toJson_DeviceFarmIncompatibilityMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmJob
 */
export interface DeviceFarmJob {
  /**
   * @schema DeviceFarmJob#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmJob#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmJob#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmJob#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmJob#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmJob#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmJob#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmJob#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmJob#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmJob#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmJob#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmJob#instanceArn
   */
  readonly instanceArn?: string;

  /**
   * @schema DeviceFarmJob#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

  /**
   * @schema DeviceFarmJob#videoEndpoint
   */
  readonly videoEndpoint?: string;

  /**
   * @schema DeviceFarmJob#videoCapture
   */
  readonly videoCapture?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmJob(obj: DeviceFarmJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'created': obj.created,
    'status': obj.status,
    'result': obj.result,
    'started': obj.started,
    'stopped': obj.stopped,
    'counters': toJson_DeviceFarmCounters(obj.counters),
    'message': obj.message,
    'device': toJson_DeviceFarmDevice(obj.device),
    'instanceArn': obj.instanceArn,
    'deviceMinutes': toJson_DeviceFarmDeviceMinutes(obj.deviceMinutes),
    'videoEndpoint': obj.videoEndpoint,
    'videoCapture': obj.videoCapture,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmOfferingStatus
 */
export interface DeviceFarmOfferingStatus {
  /**
   * @schema DeviceFarmOfferingStatus#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmOfferingStatus#offering
   */
  readonly offering?: DeviceFarmOffering;

  /**
   * @schema DeviceFarmOfferingStatus#quantity
   */
  readonly quantity?: number;

  /**
   * @schema DeviceFarmOfferingStatus#effectiveOn
   */
  readonly effectiveOn?: string;

}

/**
 * Converts an object of type 'DeviceFarmOfferingStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmOfferingStatus(obj: DeviceFarmOfferingStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'offering': toJson_DeviceFarmOffering(obj.offering),
    'quantity': obj.quantity,
    'effectiveOn': obj.effectiveOn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRun
 */
export interface DeviceFarmRun {
  /**
   * @schema DeviceFarmRun#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmRun#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmRun#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmRun#platform
   */
  readonly platform?: string;

  /**
   * @schema DeviceFarmRun#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmRun#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmRun#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmRun#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmRun#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmRun#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmRun#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmRun#totalJobs
   */
  readonly totalJobs?: number;

  /**
   * @schema DeviceFarmRun#completedJobs
   */
  readonly completedJobs?: number;

  /**
   * @schema DeviceFarmRun#billingMethod
   */
  readonly billingMethod?: string;

  /**
   * @schema DeviceFarmRun#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

  /**
   * @schema DeviceFarmRun#networkProfile
   */
  readonly networkProfile?: DeviceFarmNetworkProfile;

  /**
   * @schema DeviceFarmRun#parsingResultUrl
   */
  readonly parsingResultUrl?: string;

  /**
   * @schema DeviceFarmRun#resultCode
   */
  readonly resultCode?: string;

  /**
   * @schema DeviceFarmRun#seed
   */
  readonly seed?: number;

  /**
   * @schema DeviceFarmRun#appUpload
   */
  readonly appUpload?: string;

  /**
   * @schema DeviceFarmRun#eventCount
   */
  readonly eventCount?: number;

  /**
   * @schema DeviceFarmRun#jobTimeoutMinutes
   */
  readonly jobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmRun#devicePoolArn
   */
  readonly devicePoolArn?: string;

  /**
   * @schema DeviceFarmRun#locale
   */
  readonly locale?: string;

  /**
   * @schema DeviceFarmRun#radios
   */
  readonly radios?: DeviceFarmRadios;

  /**
   * @schema DeviceFarmRun#location
   */
  readonly location?: DeviceFarmLocation;

  /**
   * @schema DeviceFarmRun#customerArtifactPaths
   */
  readonly customerArtifactPaths?: DeviceFarmCustomerArtifactPaths;

  /**
   * @schema DeviceFarmRun#webUrl
   */
  readonly webUrl?: string;

  /**
   * @schema DeviceFarmRun#skipAppResign
   */
  readonly skipAppResign?: boolean;

  /**
   * @schema DeviceFarmRun#testSpecArn
   */
  readonly testSpecArn?: string;

  /**
   * @schema DeviceFarmRun#deviceSelectionResult
   */
  readonly deviceSelectionResult?: DeviceFarmDeviceSelectionResult;

}

/**
 * Converts an object of type 'DeviceFarmRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRun(obj: DeviceFarmRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'platform': obj.platform,
    'created': obj.created,
    'status': obj.status,
    'result': obj.result,
    'started': obj.started,
    'stopped': obj.stopped,
    'counters': toJson_DeviceFarmCounters(obj.counters),
    'message': obj.message,
    'totalJobs': obj.totalJobs,
    'completedJobs': obj.completedJobs,
    'billingMethod': obj.billingMethod,
    'deviceMinutes': toJson_DeviceFarmDeviceMinutes(obj.deviceMinutes),
    'networkProfile': toJson_DeviceFarmNetworkProfile(obj.networkProfile),
    'parsingResultUrl': obj.parsingResultUrl,
    'resultCode': obj.resultCode,
    'seed': obj.seed,
    'appUpload': obj.appUpload,
    'eventCount': obj.eventCount,
    'jobTimeoutMinutes': obj.jobTimeoutMinutes,
    'devicePoolArn': obj.devicePoolArn,
    'locale': obj.locale,
    'radios': toJson_DeviceFarmRadios(obj.radios),
    'location': toJson_DeviceFarmLocation(obj.location),
    'customerArtifactPaths': toJson_DeviceFarmCustomerArtifactPaths(obj.customerArtifactPaths),
    'webUrl': obj.webUrl,
    'skipAppResign': obj.skipAppResign,
    'testSpecArn': obj.testSpecArn,
    'deviceSelectionResult': toJson_DeviceFarmDeviceSelectionResult(obj.deviceSelectionResult),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmSuite
 */
export interface DeviceFarmSuite {
  /**
   * @schema DeviceFarmSuite#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmSuite#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmSuite#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmSuite#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmSuite#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmSuite#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmSuite#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmSuite#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmSuite#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmSuite#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmSuite#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

}

/**
 * Converts an object of type 'DeviceFarmSuite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmSuite(obj: DeviceFarmSuite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'created': obj.created,
    'status': obj.status,
    'result': obj.result,
    'started': obj.started,
    'stopped': obj.stopped,
    'counters': toJson_DeviceFarmCounters(obj.counters),
    'message': obj.message,
    'deviceMinutes': toJson_DeviceFarmDeviceMinutes(obj.deviceMinutes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTest
 */
export interface DeviceFarmTest {
  /**
   * @schema DeviceFarmTest#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmTest#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmTest#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmTest#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmTest#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmTest#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmTest#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmTest#stopped
   */
  readonly stopped?: string;

  /**
   * @schema DeviceFarmTest#counters
   */
  readonly counters?: DeviceFarmCounters;

  /**
   * @schema DeviceFarmTest#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmTest#deviceMinutes
   */
  readonly deviceMinutes?: DeviceFarmDeviceMinutes;

}

/**
 * Converts an object of type 'DeviceFarmTest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTest(obj: DeviceFarmTest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'created': obj.created,
    'status': obj.status,
    'result': obj.result,
    'started': obj.started,
    'stopped': obj.stopped,
    'counters': toJson_DeviceFarmCounters(obj.counters),
    'message': obj.message,
    'deviceMinutes': toJson_DeviceFarmDeviceMinutes(obj.deviceMinutes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTestGridSession
 */
export interface DeviceFarmTestGridSession {
  /**
   * @schema DeviceFarmTestGridSession#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmTestGridSession#status
   */
  readonly status?: string;

  /**
   * @schema DeviceFarmTestGridSession#created
   */
  readonly created?: string;

  /**
   * @schema DeviceFarmTestGridSession#ended
   */
  readonly ended?: string;

  /**
   * @schema DeviceFarmTestGridSession#billingMinutes
   */
  readonly billingMinutes?: number;

  /**
   * @schema DeviceFarmTestGridSession#seleniumProperties
   */
  readonly seleniumProperties?: string;

}

/**
 * Converts an object of type 'DeviceFarmTestGridSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTestGridSession(obj: DeviceFarmTestGridSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'created': obj.created,
    'ended': obj.ended,
    'billingMinutes': obj.billingMinutes,
    'seleniumProperties': obj.seleniumProperties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmArtifact
 */
export interface DeviceFarmArtifact {
  /**
   * @schema DeviceFarmArtifact#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmArtifact#name
   */
  readonly name?: string;

  /**
   * @schema DeviceFarmArtifact#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmArtifact#extension
   */
  readonly extension?: string;

  /**
   * @schema DeviceFarmArtifact#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'DeviceFarmArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmArtifact(obj: DeviceFarmArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'type': obj.type,
    'extension': obj.extension,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeviceFilter
 */
export interface DeviceFarmDeviceFilter {
  /**
   * @schema DeviceFarmDeviceFilter#attribute
   */
  readonly attribute: string;

  /**
   * @schema DeviceFarmDeviceFilter#operator
   */
  readonly operator: string;

  /**
   * @schema DeviceFarmDeviceFilter#values
   */
  readonly values: string[];

}

/**
 * Converts an object of type 'DeviceFarmDeviceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeviceFilter(obj: DeviceFarmDeviceFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attribute': obj.attribute,
    'operator': obj.operator,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmOfferingPromotion
 */
export interface DeviceFarmOfferingPromotion {
  /**
   * @schema DeviceFarmOfferingPromotion#id
   */
  readonly id?: string;

  /**
   * @schema DeviceFarmOfferingPromotion#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DeviceFarmOfferingPromotion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmOfferingPromotion(obj: DeviceFarmOfferingPromotion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmOfferingTransaction
 */
export interface DeviceFarmOfferingTransaction {
  /**
   * @schema DeviceFarmOfferingTransaction#offeringStatus
   */
  readonly offeringStatus?: DeviceFarmOfferingStatus;

  /**
   * @schema DeviceFarmOfferingTransaction#transactionId
   */
  readonly transactionId?: string;

  /**
   * @schema DeviceFarmOfferingTransaction#offeringPromotionId
   */
  readonly offeringPromotionId?: string;

  /**
   * @schema DeviceFarmOfferingTransaction#createdOn
   */
  readonly createdOn?: string;

  /**
   * @schema DeviceFarmOfferingTransaction#cost
   */
  readonly cost?: DeviceFarmMonetaryAmount;

}

/**
 * Converts an object of type 'DeviceFarmOfferingTransaction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmOfferingTransaction(obj: DeviceFarmOfferingTransaction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offeringStatus': toJson_DeviceFarmOfferingStatus(obj.offeringStatus),
    'transactionId': obj.transactionId,
    'offeringPromotionId': obj.offeringPromotionId,
    'createdOn': obj.createdOn,
    'cost': toJson_DeviceFarmMonetaryAmount(obj.cost),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmOffering
 */
export interface DeviceFarmOffering {
  /**
   * @schema DeviceFarmOffering#id
   */
  readonly id?: string;

  /**
   * @schema DeviceFarmOffering#description
   */
  readonly description?: string;

  /**
   * @schema DeviceFarmOffering#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmOffering#platform
   */
  readonly platform?: string;

  /**
   * @schema DeviceFarmOffering#recurringCharges
   */
  readonly recurringCharges?: DeviceFarmRecurringCharge[];

}

/**
 * Converts an object of type 'DeviceFarmOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmOffering(obj: DeviceFarmOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'type': obj.type,
    'platform': obj.platform,
    'recurringCharges': obj.recurringCharges?.map(y => toJson_DeviceFarmRecurringCharge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmSample
 */
export interface DeviceFarmSample {
  /**
   * @schema DeviceFarmSample#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmSample#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmSample#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'DeviceFarmSample' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmSample(obj: DeviceFarmSample | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'type': obj.type,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTag
 */
export interface DeviceFarmTag {
  /**
   * @schema DeviceFarmTag#Key
   */
  readonly key?: string;

  /**
   * @schema DeviceFarmTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DeviceFarmTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTag(obj: DeviceFarmTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTestGridSessionAction
 */
export interface DeviceFarmTestGridSessionAction {
  /**
   * @schema DeviceFarmTestGridSessionAction#action
   */
  readonly action?: string;

  /**
   * @schema DeviceFarmTestGridSessionAction#started
   */
  readonly started?: string;

  /**
   * @schema DeviceFarmTestGridSessionAction#duration
   */
  readonly duration?: number;

  /**
   * @schema DeviceFarmTestGridSessionAction#statusCode
   */
  readonly statusCode?: string;

  /**
   * @schema DeviceFarmTestGridSessionAction#requestMethod
   */
  readonly requestMethod?: string;

}

/**
 * Converts an object of type 'DeviceFarmTestGridSessionAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTestGridSessionAction(obj: DeviceFarmTestGridSessionAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
    'started': obj.started,
    'duration': obj.duration,
    'statusCode': obj.statusCode,
    'requestMethod': obj.requestMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTestGridSessionArtifact
 */
export interface DeviceFarmTestGridSessionArtifact {
  /**
   * @schema DeviceFarmTestGridSessionArtifact#filename
   */
  readonly filename?: string;

  /**
   * @schema DeviceFarmTestGridSessionArtifact#type
   */
  readonly type?: string;

  /**
   * @schema DeviceFarmTestGridSessionArtifact#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'DeviceFarmTestGridSessionArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTestGridSessionArtifact(obj: DeviceFarmTestGridSessionArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filename': obj.filename,
    'type': obj.type,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmUniqueProblem
 */
export interface DeviceFarmUniqueProblem {
  /**
   * @schema DeviceFarmUniqueProblem#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmUniqueProblem#problems
   */
  readonly problems?: DeviceFarmProblem[];

}

/**
 * Converts an object of type 'DeviceFarmUniqueProblem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmUniqueProblem(obj: DeviceFarmUniqueProblem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'message': obj.message,
    'problems': obj.problems?.map(y => toJson_DeviceFarmProblem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeviceSelectionConfiguration
 */
export interface DeviceFarmDeviceSelectionConfiguration {
  /**
   * @schema DeviceFarmDeviceSelectionConfiguration#filters
   */
  readonly filters: DeviceFarmDeviceFilter[];

  /**
   * @schema DeviceFarmDeviceSelectionConfiguration#maxDevices
   */
  readonly maxDevices: number;

}

/**
 * Converts an object of type 'DeviceFarmDeviceSelectionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeviceSelectionConfiguration(obj: DeviceFarmDeviceSelectionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_DeviceFarmDeviceFilter(y)),
    'maxDevices': obj.maxDevices,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmExecutionConfiguration
 */
export interface DeviceFarmExecutionConfiguration {
  /**
   * @schema DeviceFarmExecutionConfiguration#jobTimeoutMinutes
   */
  readonly jobTimeoutMinutes?: number;

  /**
   * @schema DeviceFarmExecutionConfiguration#accountsCleanup
   */
  readonly accountsCleanup?: boolean;

  /**
   * @schema DeviceFarmExecutionConfiguration#appPackagesCleanup
   */
  readonly appPackagesCleanup?: boolean;

  /**
   * @schema DeviceFarmExecutionConfiguration#videoCapture
   */
  readonly videoCapture?: boolean;

  /**
   * @schema DeviceFarmExecutionConfiguration#skipAppResign
   */
  readonly skipAppResign?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmExecutionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmExecutionConfiguration(obj: DeviceFarmExecutionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTimeoutMinutes': obj.jobTimeoutMinutes,
    'accountsCleanup': obj.accountsCleanup,
    'appPackagesCleanup': obj.appPackagesCleanup,
    'videoCapture': obj.videoCapture,
    'skipAppResign': obj.skipAppResign,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeviceMinutes
 */
export interface DeviceFarmDeviceMinutes {
  /**
   * @schema DeviceFarmDeviceMinutes#total
   */
  readonly total?: number;

  /**
   * @schema DeviceFarmDeviceMinutes#metered
   */
  readonly metered?: number;

  /**
   * @schema DeviceFarmDeviceMinutes#unmetered
   */
  readonly unmetered?: number;

}

/**
 * Converts an object of type 'DeviceFarmDeviceMinutes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeviceMinutes(obj: DeviceFarmDeviceMinutes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'total': obj.total,
    'metered': obj.metered,
    'unmetered': obj.unmetered,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmTrialMinutes
 */
export interface DeviceFarmTrialMinutes {
  /**
   * @schema DeviceFarmTrialMinutes#total
   */
  readonly total?: number;

  /**
   * @schema DeviceFarmTrialMinutes#remaining
   */
  readonly remaining?: number;

}

/**
 * Converts an object of type 'DeviceFarmTrialMinutes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmTrialMinutes(obj: DeviceFarmTrialMinutes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'total': obj.total,
    'remaining': obj.remaining,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCpu
 */
export interface DeviceFarmCpu {
  /**
   * @schema DeviceFarmCpu#frequency
   */
  readonly frequency?: string;

  /**
   * @schema DeviceFarmCpu#architecture
   */
  readonly architecture?: string;

  /**
   * @schema DeviceFarmCpu#clock
   */
  readonly clock?: number;

}

/**
 * Converts an object of type 'DeviceFarmCpu' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCpu(obj: DeviceFarmCpu | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frequency': obj.frequency,
    'architecture': obj.architecture,
    'clock': obj.clock,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmResolution
 */
export interface DeviceFarmResolution {
  /**
   * @schema DeviceFarmResolution#width
   */
  readonly width?: number;

  /**
   * @schema DeviceFarmResolution#height
   */
  readonly height?: number;

}

/**
 * Converts an object of type 'DeviceFarmResolution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmResolution(obj: DeviceFarmResolution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'width': obj.width,
    'height': obj.height,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmLocation
 */
export interface DeviceFarmLocation {
  /**
   * @schema DeviceFarmLocation#latitude
   */
  readonly latitude: number;

  /**
   * @schema DeviceFarmLocation#longitude
   */
  readonly longitude: number;

}

/**
 * Converts an object of type 'DeviceFarmLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmLocation(obj: DeviceFarmLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'latitude': obj.latitude,
    'longitude': obj.longitude,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCustomerArtifactPaths
 */
export interface DeviceFarmCustomerArtifactPaths {
  /**
   * @schema DeviceFarmCustomerArtifactPaths#iosPaths
   */
  readonly iosPaths?: string[];

  /**
   * @schema DeviceFarmCustomerArtifactPaths#androidPaths
   */
  readonly androidPaths?: string[];

  /**
   * @schema DeviceFarmCustomerArtifactPaths#deviceHostPaths
   */
  readonly deviceHostPaths?: string[];

}

/**
 * Converts an object of type 'DeviceFarmCustomerArtifactPaths' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCustomerArtifactPaths(obj: DeviceFarmCustomerArtifactPaths | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'iosPaths': obj.iosPaths?.map(y => y),
    'androidPaths': obj.androidPaths?.map(y => y),
    'deviceHostPaths': obj.deviceHostPaths?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRadios
 */
export interface DeviceFarmRadios {
  /**
   * @schema DeviceFarmRadios#wifi
   */
  readonly wifi?: boolean;

  /**
   * @schema DeviceFarmRadios#bluetooth
   */
  readonly bluetooth?: boolean;

  /**
   * @schema DeviceFarmRadios#nfc
   */
  readonly nfc?: boolean;

  /**
   * @schema DeviceFarmRadios#gps
   */
  readonly gps?: boolean;

}

/**
 * Converts an object of type 'DeviceFarmRadios' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRadios(obj: DeviceFarmRadios | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'wifi': obj.wifi,
    'bluetooth': obj.bluetooth,
    'nfc': obj.nfc,
    'gps': obj.gps,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmIncompatibilityMessage
 */
export interface DeviceFarmIncompatibilityMessage {
  /**
   * @schema DeviceFarmIncompatibilityMessage#message
   */
  readonly message?: string;

  /**
   * @schema DeviceFarmIncompatibilityMessage#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'DeviceFarmIncompatibilityMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmIncompatibilityMessage(obj: DeviceFarmIncompatibilityMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'message': obj.message,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmCounters
 */
export interface DeviceFarmCounters {
  /**
   * @schema DeviceFarmCounters#total
   */
  readonly total?: number;

  /**
   * @schema DeviceFarmCounters#passed
   */
  readonly passed?: number;

  /**
   * @schema DeviceFarmCounters#failed
   */
  readonly failed?: number;

  /**
   * @schema DeviceFarmCounters#warned
   */
  readonly warned?: number;

  /**
   * @schema DeviceFarmCounters#errored
   */
  readonly errored?: number;

  /**
   * @schema DeviceFarmCounters#stopped
   */
  readonly stopped?: number;

  /**
   * @schema DeviceFarmCounters#skipped
   */
  readonly skipped?: number;

}

/**
 * Converts an object of type 'DeviceFarmCounters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmCounters(obj: DeviceFarmCounters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'total': obj.total,
    'passed': obj.passed,
    'failed': obj.failed,
    'warned': obj.warned,
    'errored': obj.errored,
    'stopped': obj.stopped,
    'skipped': obj.skipped,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmDeviceSelectionResult
 */
export interface DeviceFarmDeviceSelectionResult {
  /**
   * @schema DeviceFarmDeviceSelectionResult#filters
   */
  readonly filters?: DeviceFarmDeviceFilter[];

  /**
   * @schema DeviceFarmDeviceSelectionResult#matchedDevicesCount
   */
  readonly matchedDevicesCount?: number;

  /**
   * @schema DeviceFarmDeviceSelectionResult#maxDevices
   */
  readonly maxDevices?: number;

}

/**
 * Converts an object of type 'DeviceFarmDeviceSelectionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmDeviceSelectionResult(obj: DeviceFarmDeviceSelectionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_DeviceFarmDeviceFilter(y)),
    'matchedDevicesCount': obj.matchedDevicesCount,
    'maxDevices': obj.maxDevices,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmMonetaryAmount
 */
export interface DeviceFarmMonetaryAmount {
  /**
   * @schema DeviceFarmMonetaryAmount#amount
   */
  readonly amount?: number;

  /**
   * @schema DeviceFarmMonetaryAmount#currencyCode
   */
  readonly currencyCode?: string;

}

/**
 * Converts an object of type 'DeviceFarmMonetaryAmount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmMonetaryAmount(obj: DeviceFarmMonetaryAmount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'amount': obj.amount,
    'currencyCode': obj.currencyCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmRecurringCharge
 */
export interface DeviceFarmRecurringCharge {
  /**
   * @schema DeviceFarmRecurringCharge#cost
   */
  readonly cost?: DeviceFarmMonetaryAmount;

  /**
   * @schema DeviceFarmRecurringCharge#frequency
   */
  readonly frequency?: string;

}

/**
 * Converts an object of type 'DeviceFarmRecurringCharge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmRecurringCharge(obj: DeviceFarmRecurringCharge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cost': toJson_DeviceFarmMonetaryAmount(obj.cost),
    'frequency': obj.frequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmProblem
 */
export interface DeviceFarmProblem {
  /**
   * @schema DeviceFarmProblem#run
   */
  readonly run?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#job
   */
  readonly job?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#suite
   */
  readonly suite?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#test
   */
  readonly test?: DeviceFarmProblemDetail;

  /**
   * @schema DeviceFarmProblem#device
   */
  readonly device?: DeviceFarmDevice;

  /**
   * @schema DeviceFarmProblem#result
   */
  readonly result?: string;

  /**
   * @schema DeviceFarmProblem#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'DeviceFarmProblem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmProblem(obj: DeviceFarmProblem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'run': toJson_DeviceFarmProblemDetail(obj.run),
    'job': toJson_DeviceFarmProblemDetail(obj.job),
    'suite': toJson_DeviceFarmProblemDetail(obj.suite),
    'test': toJson_DeviceFarmProblemDetail(obj.test),
    'device': toJson_DeviceFarmDevice(obj.device),
    'result': obj.result,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DeviceFarmProblemDetail
 */
export interface DeviceFarmProblemDetail {
  /**
   * @schema DeviceFarmProblemDetail#arn
   */
  readonly arn?: string;

  /**
   * @schema DeviceFarmProblemDetail#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DeviceFarmProblemDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DeviceFarmProblemDetail(obj: DeviceFarmProblemDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
