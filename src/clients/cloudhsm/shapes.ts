/**
 * @schema CloudHsmAddTagsToResourceRequest
 */
export interface CloudHsmAddTagsToResourceRequest {
  /**
   * @schema CloudHsmAddTagsToResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CloudHsmAddTagsToResourceRequest#TagList
   */
  readonly tagList?: CloudHsmTag[];

}

/**
 * Converts an object of type 'CloudHsmAddTagsToResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmAddTagsToResourceRequest(obj: CloudHsmAddTagsToResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagList': obj.tagList?.map(y => toJson_CloudHsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmAddTagsToResourceResponse
 */
export interface CloudHsmAddTagsToResourceResponse {
  /**
   * @schema CloudHsmAddTagsToResourceResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudHsmAddTagsToResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmAddTagsToResourceResponse(obj: CloudHsmAddTagsToResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmCreateHapgRequest
 */
export interface CloudHsmCreateHapgRequest {
  /**
   * @schema CloudHsmCreateHapgRequest#Label
   */
  readonly label?: string;

}

/**
 * Converts an object of type 'CloudHsmCreateHapgRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmCreateHapgRequest(obj: CloudHsmCreateHapgRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Label': obj.label,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmCreateHapgResponse
 */
export interface CloudHsmCreateHapgResponse {
  /**
   * @schema CloudHsmCreateHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * Converts an object of type 'CloudHsmCreateHapgResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmCreateHapgResponse(obj: CloudHsmCreateHapgResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgArn': obj.hapgArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmCreateHsmRequest
 */
export interface CloudHsmCreateHsmRequest {
  /**
   * @schema CloudHsmCreateHsmRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#SshKey
   */
  readonly sshKey?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#SubscriptionType
   */
  readonly subscriptionType?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CloudHsmCreateHsmRequest#SyslogIp
   */
  readonly syslogIp?: string;

}

/**
 * Converts an object of type 'CloudHsmCreateHsmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmCreateHsmRequest(obj: CloudHsmCreateHsmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetId': obj.subnetId,
    'SshKey': obj.sshKey,
    'EniIp': obj.eniIp,
    'IamRoleArn': obj.iamRoleArn,
    'ExternalId': obj.externalId,
    'SubscriptionType': obj.subscriptionType,
    'ClientToken': obj.clientToken,
    'SyslogIp': obj.syslogIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmCreateHsmResponse
 */
export interface CloudHsmCreateHsmResponse {
  /**
   * @schema CloudHsmCreateHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * Converts an object of type 'CloudHsmCreateHsmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmCreateHsmResponse(obj: CloudHsmCreateHsmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmArn': obj.hsmArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmCreateLunaClientRequest
 */
export interface CloudHsmCreateLunaClientRequest {
  /**
   * @schema CloudHsmCreateLunaClientRequest#Label
   */
  readonly label?: string;

  /**
   * @schema CloudHsmCreateLunaClientRequest#Certificate
   */
  readonly certificate?: string;

}

/**
 * Converts an object of type 'CloudHsmCreateLunaClientRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmCreateLunaClientRequest(obj: CloudHsmCreateLunaClientRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Label': obj.label,
    'Certificate': obj.certificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmCreateLunaClientResponse
 */
export interface CloudHsmCreateLunaClientResponse {
  /**
   * @schema CloudHsmCreateLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * Converts an object of type 'CloudHsmCreateLunaClientResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmCreateLunaClientResponse(obj: CloudHsmCreateLunaClientResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDeleteHapgRequest
 */
export interface CloudHsmDeleteHapgRequest {
  /**
   * @schema CloudHsmDeleteHapgRequest#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * Converts an object of type 'CloudHsmDeleteHapgRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDeleteHapgRequest(obj: CloudHsmDeleteHapgRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgArn': obj.hapgArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDeleteHapgResponse
 */
export interface CloudHsmDeleteHapgResponse {
  /**
   * @schema CloudHsmDeleteHapgResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudHsmDeleteHapgResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDeleteHapgResponse(obj: CloudHsmDeleteHapgResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDeleteHsmRequest
 */
export interface CloudHsmDeleteHsmRequest {
  /**
   * @schema CloudHsmDeleteHsmRequest#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * Converts an object of type 'CloudHsmDeleteHsmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDeleteHsmRequest(obj: CloudHsmDeleteHsmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmArn': obj.hsmArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDeleteHsmResponse
 */
export interface CloudHsmDeleteHsmResponse {
  /**
   * @schema CloudHsmDeleteHsmResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudHsmDeleteHsmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDeleteHsmResponse(obj: CloudHsmDeleteHsmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDeleteLunaClientRequest
 */
export interface CloudHsmDeleteLunaClientRequest {
  /**
   * @schema CloudHsmDeleteLunaClientRequest#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * Converts an object of type 'CloudHsmDeleteLunaClientRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDeleteLunaClientRequest(obj: CloudHsmDeleteLunaClientRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDeleteLunaClientResponse
 */
export interface CloudHsmDeleteLunaClientResponse {
  /**
   * @schema CloudHsmDeleteLunaClientResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudHsmDeleteLunaClientResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDeleteLunaClientResponse(obj: CloudHsmDeleteLunaClientResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDescribeHapgRequest
 */
export interface CloudHsmDescribeHapgRequest {
  /**
   * @schema CloudHsmDescribeHapgRequest#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * Converts an object of type 'CloudHsmDescribeHapgRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDescribeHapgRequest(obj: CloudHsmDescribeHapgRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgArn': obj.hapgArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDescribeHapgResponse
 */
export interface CloudHsmDescribeHapgResponse {
  /**
   * @schema CloudHsmDescribeHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#HapgSerial
   */
  readonly hapgSerial?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#HsmsLastActionFailed
   */
  readonly hsmsLastActionFailed?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#HsmsPendingDeletion
   */
  readonly hsmsPendingDeletion?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#HsmsPendingRegistration
   */
  readonly hsmsPendingRegistration?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#Label
   */
  readonly label?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema CloudHsmDescribeHapgResponse#PartitionSerialList
   */
  readonly partitionSerialList?: string[];

  /**
   * @schema CloudHsmDescribeHapgResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'CloudHsmDescribeHapgResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDescribeHapgResponse(obj: CloudHsmDescribeHapgResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgArn': obj.hapgArn,
    'HapgSerial': obj.hapgSerial,
    'HsmsLastActionFailed': obj.hsmsLastActionFailed?.map(y => y),
    'HsmsPendingDeletion': obj.hsmsPendingDeletion?.map(y => y),
    'HsmsPendingRegistration': obj.hsmsPendingRegistration?.map(y => y),
    'Label': obj.label,
    'LastModifiedTimestamp': obj.lastModifiedTimestamp,
    'PartitionSerialList': obj.partitionSerialList?.map(y => y),
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDescribeHsmRequest
 */
export interface CloudHsmDescribeHsmRequest {
  /**
   * @schema CloudHsmDescribeHsmRequest#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema CloudHsmDescribeHsmRequest#HsmSerialNumber
   */
  readonly hsmSerialNumber?: string;

}

/**
 * Converts an object of type 'CloudHsmDescribeHsmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDescribeHsmRequest(obj: CloudHsmDescribeHsmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmArn': obj.hsmArn,
    'HsmSerialNumber': obj.hsmSerialNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDescribeHsmResponse
 */
export interface CloudHsmDescribeHsmResponse {
  /**
   * @schema CloudHsmDescribeHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#Status
   */
  readonly status?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#EniId
   */
  readonly eniId?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubscriptionType
   */
  readonly subscriptionType?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubscriptionStartDate
   */
  readonly subscriptionStartDate?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubscriptionEndDate
   */
  readonly subscriptionEndDate?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#VendorName
   */
  readonly vendorName?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#HsmType
   */
  readonly hsmType?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#SshKeyLastUpdated
   */
  readonly sshKeyLastUpdated?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#ServerCertUri
   */
  readonly serverCertUri?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#ServerCertLastUpdated
   */
  readonly serverCertLastUpdated?: string;

  /**
   * @schema CloudHsmDescribeHsmResponse#Partitions
   */
  readonly partitions?: string[];

}

/**
 * Converts an object of type 'CloudHsmDescribeHsmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDescribeHsmResponse(obj: CloudHsmDescribeHsmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmArn': obj.hsmArn,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'AvailabilityZone': obj.availabilityZone,
    'EniId': obj.eniId,
    'EniIp': obj.eniIp,
    'SubscriptionType': obj.subscriptionType,
    'SubscriptionStartDate': obj.subscriptionStartDate,
    'SubscriptionEndDate': obj.subscriptionEndDate,
    'VpcId': obj.vpcId,
    'SubnetId': obj.subnetId,
    'IamRoleArn': obj.iamRoleArn,
    'SerialNumber': obj.serialNumber,
    'VendorName': obj.vendorName,
    'HsmType': obj.hsmType,
    'SoftwareVersion': obj.softwareVersion,
    'SshPublicKey': obj.sshPublicKey,
    'SshKeyLastUpdated': obj.sshKeyLastUpdated,
    'ServerCertUri': obj.serverCertUri,
    'ServerCertLastUpdated': obj.serverCertLastUpdated,
    'Partitions': obj.partitions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDescribeLunaClientRequest
 */
export interface CloudHsmDescribeLunaClientRequest {
  /**
   * @schema CloudHsmDescribeLunaClientRequest#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema CloudHsmDescribeLunaClientRequest#CertificateFingerprint
   */
  readonly certificateFingerprint?: string;

}

/**
 * Converts an object of type 'CloudHsmDescribeLunaClientRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDescribeLunaClientRequest(obj: CloudHsmDescribeLunaClientRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
    'CertificateFingerprint': obj.certificateFingerprint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmDescribeLunaClientResponse
 */
export interface CloudHsmDescribeLunaClientResponse {
  /**
   * @schema CloudHsmDescribeLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#CertificateFingerprint
   */
  readonly certificateFingerprint?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#LastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

  /**
   * @schema CloudHsmDescribeLunaClientResponse#Label
   */
  readonly label?: string;

}

/**
 * Converts an object of type 'CloudHsmDescribeLunaClientResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmDescribeLunaClientResponse(obj: CloudHsmDescribeLunaClientResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
    'Certificate': obj.certificate,
    'CertificateFingerprint': obj.certificateFingerprint,
    'LastModifiedTimestamp': obj.lastModifiedTimestamp,
    'Label': obj.label,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmGetConfigRequest
 */
export interface CloudHsmGetConfigRequest {
  /**
   * @schema CloudHsmGetConfigRequest#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema CloudHsmGetConfigRequest#ClientVersion
   */
  readonly clientVersion?: string;

  /**
   * @schema CloudHsmGetConfigRequest#HapgList
   */
  readonly hapgList?: string[];

}

/**
 * Converts an object of type 'CloudHsmGetConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmGetConfigRequest(obj: CloudHsmGetConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
    'ClientVersion': obj.clientVersion,
    'HapgList': obj.hapgList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmGetConfigResponse
 */
export interface CloudHsmGetConfigResponse {
  /**
   * @schema CloudHsmGetConfigResponse#ConfigType
   */
  readonly configType?: string;

  /**
   * @schema CloudHsmGetConfigResponse#ConfigFile
   */
  readonly configFile?: string;

  /**
   * @schema CloudHsmGetConfigResponse#ConfigCred
   */
  readonly configCred?: string;

}

/**
 * Converts an object of type 'CloudHsmGetConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmGetConfigResponse(obj: CloudHsmGetConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigType': obj.configType,
    'ConfigFile': obj.configFile,
    'ConfigCred': obj.configCred,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListAvailableZonesRequest
 */
export interface CloudHsmListAvailableZonesRequest {
}

/**
 * Converts an object of type 'CloudHsmListAvailableZonesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListAvailableZonesRequest(obj: CloudHsmListAvailableZonesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListAvailableZonesResponse
 */
export interface CloudHsmListAvailableZonesResponse {
  /**
   * @schema CloudHsmListAvailableZonesResponse#AZList
   */
  readonly azList?: string[];

}

/**
 * Converts an object of type 'CloudHsmListAvailableZonesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListAvailableZonesResponse(obj: CloudHsmListAvailableZonesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AZList': obj.azList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListHapgsRequest
 */
export interface CloudHsmListHapgsRequest {
  /**
   * @schema CloudHsmListHapgsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmListHapgsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListHapgsRequest(obj: CloudHsmListHapgsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListHapgsResponse
 */
export interface CloudHsmListHapgsResponse {
  /**
   * @schema CloudHsmListHapgsResponse#HapgList
   */
  readonly hapgList?: string[];

  /**
   * @schema CloudHsmListHapgsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmListHapgsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListHapgsResponse(obj: CloudHsmListHapgsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgList': obj.hapgList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListHsmsRequest
 */
export interface CloudHsmListHsmsRequest {
  /**
   * @schema CloudHsmListHsmsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmListHsmsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListHsmsRequest(obj: CloudHsmListHsmsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListHsmsResponse
 */
export interface CloudHsmListHsmsResponse {
  /**
   * @schema CloudHsmListHsmsResponse#HsmList
   */
  readonly hsmList?: string[];

  /**
   * @schema CloudHsmListHsmsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmListHsmsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListHsmsResponse(obj: CloudHsmListHsmsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmList': obj.hsmList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListLunaClientsRequest
 */
export interface CloudHsmListLunaClientsRequest {
  /**
   * @schema CloudHsmListLunaClientsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmListLunaClientsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListLunaClientsRequest(obj: CloudHsmListLunaClientsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListLunaClientsResponse
 */
export interface CloudHsmListLunaClientsResponse {
  /**
   * @schema CloudHsmListLunaClientsResponse#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema CloudHsmListLunaClientsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudHsmListLunaClientsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListLunaClientsResponse(obj: CloudHsmListLunaClientsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientList': obj.clientList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListTagsForResourceRequest
 */
export interface CloudHsmListTagsForResourceRequest {
  /**
   * @schema CloudHsmListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'CloudHsmListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListTagsForResourceRequest(obj: CloudHsmListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmListTagsForResourceResponse
 */
export interface CloudHsmListTagsForResourceResponse {
  /**
   * @schema CloudHsmListTagsForResourceResponse#TagList
   */
  readonly tagList?: CloudHsmTag[];

}

/**
 * Converts an object of type 'CloudHsmListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmListTagsForResourceResponse(obj: CloudHsmListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_CloudHsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmModifyHapgRequest
 */
export interface CloudHsmModifyHapgRequest {
  /**
   * @schema CloudHsmModifyHapgRequest#HapgArn
   */
  readonly hapgArn?: string;

  /**
   * @schema CloudHsmModifyHapgRequest#Label
   */
  readonly label?: string;

  /**
   * @schema CloudHsmModifyHapgRequest#PartitionSerialList
   */
  readonly partitionSerialList?: string[];

}

/**
 * Converts an object of type 'CloudHsmModifyHapgRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmModifyHapgRequest(obj: CloudHsmModifyHapgRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgArn': obj.hapgArn,
    'Label': obj.label,
    'PartitionSerialList': obj.partitionSerialList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmModifyHapgResponse
 */
export interface CloudHsmModifyHapgResponse {
  /**
   * @schema CloudHsmModifyHapgResponse#HapgArn
   */
  readonly hapgArn?: string;

}

/**
 * Converts an object of type 'CloudHsmModifyHapgResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmModifyHapgResponse(obj: CloudHsmModifyHapgResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HapgArn': obj.hapgArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmModifyHsmRequest
 */
export interface CloudHsmModifyHsmRequest {
  /**
   * @schema CloudHsmModifyHsmRequest#HsmArn
   */
  readonly hsmArn?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#EniIp
   */
  readonly eniIp?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema CloudHsmModifyHsmRequest#SyslogIp
   */
  readonly syslogIp?: string;

}

/**
 * Converts an object of type 'CloudHsmModifyHsmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmModifyHsmRequest(obj: CloudHsmModifyHsmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmArn': obj.hsmArn,
    'SubnetId': obj.subnetId,
    'EniIp': obj.eniIp,
    'IamRoleArn': obj.iamRoleArn,
    'ExternalId': obj.externalId,
    'SyslogIp': obj.syslogIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmModifyHsmResponse
 */
export interface CloudHsmModifyHsmResponse {
  /**
   * @schema CloudHsmModifyHsmResponse#HsmArn
   */
  readonly hsmArn?: string;

}

/**
 * Converts an object of type 'CloudHsmModifyHsmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmModifyHsmResponse(obj: CloudHsmModifyHsmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HsmArn': obj.hsmArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmModifyLunaClientRequest
 */
export interface CloudHsmModifyLunaClientRequest {
  /**
   * @schema CloudHsmModifyLunaClientRequest#ClientArn
   */
  readonly clientArn?: string;

  /**
   * @schema CloudHsmModifyLunaClientRequest#Certificate
   */
  readonly certificate?: string;

}

/**
 * Converts an object of type 'CloudHsmModifyLunaClientRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmModifyLunaClientRequest(obj: CloudHsmModifyLunaClientRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
    'Certificate': obj.certificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmModifyLunaClientResponse
 */
export interface CloudHsmModifyLunaClientResponse {
  /**
   * @schema CloudHsmModifyLunaClientResponse#ClientArn
   */
  readonly clientArn?: string;

}

/**
 * Converts an object of type 'CloudHsmModifyLunaClientResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmModifyLunaClientResponse(obj: CloudHsmModifyLunaClientResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientArn': obj.clientArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmRemoveTagsFromResourceRequest
 */
export interface CloudHsmRemoveTagsFromResourceRequest {
  /**
   * @schema CloudHsmRemoveTagsFromResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CloudHsmRemoveTagsFromResourceRequest#TagKeyList
   */
  readonly tagKeyList?: string[];

}

/**
 * Converts an object of type 'CloudHsmRemoveTagsFromResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmRemoveTagsFromResourceRequest(obj: CloudHsmRemoveTagsFromResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeyList': obj.tagKeyList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmRemoveTagsFromResourceResponse
 */
export interface CloudHsmRemoveTagsFromResourceResponse {
  /**
   * @schema CloudHsmRemoveTagsFromResourceResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudHsmRemoveTagsFromResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmRemoveTagsFromResourceResponse(obj: CloudHsmRemoveTagsFromResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudHsmTag
 */
export interface CloudHsmTag {
  /**
   * @schema CloudHsmTag#Key
   */
  readonly key?: string;

  /**
   * @schema CloudHsmTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudHsmTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudHsmTag(obj: CloudHsmTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
