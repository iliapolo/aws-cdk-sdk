/**
 * @schema SnowballCancelClusterRequest
 */
export interface SnowballCancelClusterRequest {
  /**
   * @schema SnowballCancelClusterRequest#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * Converts an object of type 'SnowballCancelClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCancelClusterRequest(obj: SnowballCancelClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCancelClusterResult
 */
export interface SnowballCancelClusterResult {
}

/**
 * Converts an object of type 'SnowballCancelClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCancelClusterResult(obj: SnowballCancelClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCancelJobRequest
 */
export interface SnowballCancelJobRequest {
  /**
   * @schema SnowballCancelJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballCancelJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCancelJobRequest(obj: SnowballCancelJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCancelJobResult
 */
export interface SnowballCancelJobResult {
}

/**
 * Converts an object of type 'SnowballCancelJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCancelJobResult(obj: SnowballCancelJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateAddressRequest
 */
export interface SnowballCreateAddressRequest {
  /**
   * @schema SnowballCreateAddressRequest#Address
   */
  readonly address?: SnowballAddress;

}

/**
 * Converts an object of type 'SnowballCreateAddressRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateAddressRequest(obj: SnowballCreateAddressRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': toJson_SnowballAddress(obj.address),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateAddressResult
 */
export interface SnowballCreateAddressResult {
  /**
   * @schema SnowballCreateAddressResult#AddressId
   */
  readonly addressId?: string;

}

/**
 * Converts an object of type 'SnowballCreateAddressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateAddressResult(obj: SnowballCreateAddressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressId': obj.addressId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateClusterRequest
 */
export interface SnowballCreateClusterRequest {
  /**
   * @schema SnowballCreateClusterRequest#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballCreateClusterRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballCreateClusterRequest#OnDeviceServiceConfiguration
   */
  readonly onDeviceServiceConfiguration?: SnowballOnDeviceServiceConfiguration;

  /**
   * @schema SnowballCreateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballCreateClusterRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballCreateClusterRequest#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballCreateClusterRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballCreateClusterRequest#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballCreateClusterRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballCreateClusterRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballCreateClusterRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballCreateClusterRequest#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

  /**
   * @schema SnowballCreateClusterRequest#RemoteManagement
   */
  readonly remoteManagement?: string;

}

/**
 * Converts an object of type 'SnowballCreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateClusterRequest(obj: SnowballCreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobType': obj.jobType,
    'Resources': toJson_SnowballJobResource(obj.resources),
    'OnDeviceServiceConfiguration': toJson_SnowballOnDeviceServiceConfiguration(obj.onDeviceServiceConfiguration),
    'Description': obj.description,
    'AddressId': obj.addressId,
    'KmsKeyARN': obj.kmsKeyArn,
    'RoleARN': obj.roleArn,
    'SnowballType': obj.snowballType,
    'ShippingOption': obj.shippingOption,
    'Notification': toJson_SnowballNotification(obj.notification),
    'ForwardingAddressId': obj.forwardingAddressId,
    'TaxDocuments': toJson_SnowballTaxDocuments(obj.taxDocuments),
    'RemoteManagement': obj.remoteManagement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateClusterResult
 */
export interface SnowballCreateClusterResult {
  /**
   * @schema SnowballCreateClusterResult#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * Converts an object of type 'SnowballCreateClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateClusterResult(obj: SnowballCreateClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateJobRequest
 */
export interface SnowballCreateJobRequest {
  /**
   * @schema SnowballCreateJobRequest#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballCreateJobRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballCreateJobRequest#OnDeviceServiceConfiguration
   */
  readonly onDeviceServiceConfiguration?: SnowballOnDeviceServiceConfiguration;

  /**
   * @schema SnowballCreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballCreateJobRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballCreateJobRequest#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballCreateJobRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballCreateJobRequest#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema SnowballCreateJobRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballCreateJobRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballCreateJobRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballCreateJobRequest#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballCreateJobRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballCreateJobRequest#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

  /**
   * @schema SnowballCreateJobRequest#DeviceConfiguration
   */
  readonly deviceConfiguration?: SnowballDeviceConfiguration;

  /**
   * @schema SnowballCreateJobRequest#RemoteManagement
   */
  readonly remoteManagement?: string;

  /**
   * @schema SnowballCreateJobRequest#LongTermPricingId
   */
  readonly longTermPricingId?: string;

}

/**
 * Converts an object of type 'SnowballCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateJobRequest(obj: SnowballCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobType': obj.jobType,
    'Resources': toJson_SnowballJobResource(obj.resources),
    'OnDeviceServiceConfiguration': toJson_SnowballOnDeviceServiceConfiguration(obj.onDeviceServiceConfiguration),
    'Description': obj.description,
    'AddressId': obj.addressId,
    'KmsKeyARN': obj.kmsKeyArn,
    'RoleARN': obj.roleArn,
    'SnowballCapacityPreference': obj.snowballCapacityPreference,
    'ShippingOption': obj.shippingOption,
    'Notification': toJson_SnowballNotification(obj.notification),
    'ClusterId': obj.clusterId,
    'SnowballType': obj.snowballType,
    'ForwardingAddressId': obj.forwardingAddressId,
    'TaxDocuments': toJson_SnowballTaxDocuments(obj.taxDocuments),
    'DeviceConfiguration': toJson_SnowballDeviceConfiguration(obj.deviceConfiguration),
    'RemoteManagement': obj.remoteManagement,
    'LongTermPricingId': obj.longTermPricingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateJobResult
 */
export interface SnowballCreateJobResult {
  /**
   * @schema SnowballCreateJobResult#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballCreateJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateJobResult(obj: SnowballCreateJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateLongTermPricingRequest
 */
export interface SnowballCreateLongTermPricingRequest {
  /**
   * @schema SnowballCreateLongTermPricingRequest#LongTermPricingType
   */
  readonly longTermPricingType?: string;

  /**
   * @schema SnowballCreateLongTermPricingRequest#IsLongTermPricingAutoRenew
   */
  readonly isLongTermPricingAutoRenew?: boolean;

  /**
   * @schema SnowballCreateLongTermPricingRequest#SnowballType
   */
  readonly snowballType?: string;

}

/**
 * Converts an object of type 'SnowballCreateLongTermPricingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateLongTermPricingRequest(obj: SnowballCreateLongTermPricingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LongTermPricingType': obj.longTermPricingType,
    'IsLongTermPricingAutoRenew': obj.isLongTermPricingAutoRenew,
    'SnowballType': obj.snowballType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateLongTermPricingResult
 */
export interface SnowballCreateLongTermPricingResult {
  /**
   * @schema SnowballCreateLongTermPricingResult#LongTermPricingId
   */
  readonly longTermPricingId?: string;

}

/**
 * Converts an object of type 'SnowballCreateLongTermPricingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateLongTermPricingResult(obj: SnowballCreateLongTermPricingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LongTermPricingId': obj.longTermPricingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateReturnShippingLabelRequest
 */
export interface SnowballCreateReturnShippingLabelRequest {
  /**
   * @schema SnowballCreateReturnShippingLabelRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballCreateReturnShippingLabelRequest#ShippingOption
   */
  readonly shippingOption?: string;

}

/**
 * Converts an object of type 'SnowballCreateReturnShippingLabelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateReturnShippingLabelRequest(obj: SnowballCreateReturnShippingLabelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'ShippingOption': obj.shippingOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCreateReturnShippingLabelResult
 */
export interface SnowballCreateReturnShippingLabelResult {
  /**
   * @schema SnowballCreateReturnShippingLabelResult#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SnowballCreateReturnShippingLabelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCreateReturnShippingLabelResult(obj: SnowballCreateReturnShippingLabelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeAddressRequest
 */
export interface SnowballDescribeAddressRequest {
  /**
   * @schema SnowballDescribeAddressRequest#AddressId
   */
  readonly addressId?: string;

}

/**
 * Converts an object of type 'SnowballDescribeAddressRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeAddressRequest(obj: SnowballDescribeAddressRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressId': obj.addressId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeAddressResult
 */
export interface SnowballDescribeAddressResult {
  /**
   * @schema SnowballDescribeAddressResult#Address
   */
  readonly address?: SnowballAddress;

}

/**
 * Converts an object of type 'SnowballDescribeAddressResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeAddressResult(obj: SnowballDescribeAddressResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address': toJson_SnowballAddress(obj.address),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeAddressesRequest
 */
export interface SnowballDescribeAddressesRequest {
  /**
   * @schema SnowballDescribeAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballDescribeAddressesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballDescribeAddressesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeAddressesRequest(obj: SnowballDescribeAddressesRequest | undefined): Record<string, any> | undefined {
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
 * @schema SnowballDescribeAddressesResult
 */
export interface SnowballDescribeAddressesResult {
  /**
   * @schema SnowballDescribeAddressesResult#Addresses
   */
  readonly addresses?: SnowballAddress[];

  /**
   * @schema SnowballDescribeAddressesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballDescribeAddressesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeAddressesResult(obj: SnowballDescribeAddressesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Addresses': obj.addresses?.map(y => toJson_SnowballAddress(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeClusterRequest
 */
export interface SnowballDescribeClusterRequest {
  /**
   * @schema SnowballDescribeClusterRequest#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * Converts an object of type 'SnowballDescribeClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeClusterRequest(obj: SnowballDescribeClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeClusterResult
 */
export interface SnowballDescribeClusterResult {
  /**
   * @schema SnowballDescribeClusterResult#ClusterMetadata
   */
  readonly clusterMetadata?: SnowballClusterMetadata;

}

/**
 * Converts an object of type 'SnowballDescribeClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeClusterResult(obj: SnowballDescribeClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterMetadata': toJson_SnowballClusterMetadata(obj.clusterMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeJobRequest
 */
export interface SnowballDescribeJobRequest {
  /**
   * @schema SnowballDescribeJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballDescribeJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeJobRequest(obj: SnowballDescribeJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeJobResult
 */
export interface SnowballDescribeJobResult {
  /**
   * @schema SnowballDescribeJobResult#JobMetadata
   */
  readonly jobMetadata?: SnowballJobMetadata;

  /**
   * @schema SnowballDescribeJobResult#SubJobMetadata
   */
  readonly subJobMetadata?: SnowballJobMetadata[];

}

/**
 * Converts an object of type 'SnowballDescribeJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeJobResult(obj: SnowballDescribeJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobMetadata': toJson_SnowballJobMetadata(obj.jobMetadata),
    'SubJobMetadata': obj.subJobMetadata?.map(y => toJson_SnowballJobMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeReturnShippingLabelRequest
 */
export interface SnowballDescribeReturnShippingLabelRequest {
  /**
   * @schema SnowballDescribeReturnShippingLabelRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballDescribeReturnShippingLabelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeReturnShippingLabelRequest(obj: SnowballDescribeReturnShippingLabelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDescribeReturnShippingLabelResult
 */
export interface SnowballDescribeReturnShippingLabelResult {
  /**
   * @schema SnowballDescribeReturnShippingLabelResult#Status
   */
  readonly status?: string;

  /**
   * @schema SnowballDescribeReturnShippingLabelResult#ExpirationDate
   */
  readonly expirationDate?: string;

}

/**
 * Converts an object of type 'SnowballDescribeReturnShippingLabelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDescribeReturnShippingLabelResult(obj: SnowballDescribeReturnShippingLabelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'ExpirationDate': obj.expirationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetJobManifestRequest
 */
export interface SnowballGetJobManifestRequest {
  /**
   * @schema SnowballGetJobManifestRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballGetJobManifestRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetJobManifestRequest(obj: SnowballGetJobManifestRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetJobManifestResult
 */
export interface SnowballGetJobManifestResult {
  /**
   * @schema SnowballGetJobManifestResult#ManifestURI
   */
  readonly manifestUri?: string;

}

/**
 * Converts an object of type 'SnowballGetJobManifestResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetJobManifestResult(obj: SnowballGetJobManifestResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestURI': obj.manifestUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetJobUnlockCodeRequest
 */
export interface SnowballGetJobUnlockCodeRequest {
  /**
   * @schema SnowballGetJobUnlockCodeRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballGetJobUnlockCodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetJobUnlockCodeRequest(obj: SnowballGetJobUnlockCodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetJobUnlockCodeResult
 */
export interface SnowballGetJobUnlockCodeResult {
  /**
   * @schema SnowballGetJobUnlockCodeResult#UnlockCode
   */
  readonly unlockCode?: string;

}

/**
 * Converts an object of type 'SnowballGetJobUnlockCodeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetJobUnlockCodeResult(obj: SnowballGetJobUnlockCodeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnlockCode': obj.unlockCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetSnowballUsageRequest
 */
export interface SnowballGetSnowballUsageRequest {
}

/**
 * Converts an object of type 'SnowballGetSnowballUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetSnowballUsageRequest(obj: SnowballGetSnowballUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetSnowballUsageResult
 */
export interface SnowballGetSnowballUsageResult {
  /**
   * @schema SnowballGetSnowballUsageResult#SnowballLimit
   */
  readonly snowballLimit?: number;

  /**
   * @schema SnowballGetSnowballUsageResult#SnowballsInUse
   */
  readonly snowballsInUse?: number;

}

/**
 * Converts an object of type 'SnowballGetSnowballUsageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetSnowballUsageResult(obj: SnowballGetSnowballUsageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnowballLimit': obj.snowballLimit,
    'SnowballsInUse': obj.snowballsInUse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetSoftwareUpdatesRequest
 */
export interface SnowballGetSoftwareUpdatesRequest {
  /**
   * @schema SnowballGetSoftwareUpdatesRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'SnowballGetSoftwareUpdatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetSoftwareUpdatesRequest(obj: SnowballGetSoftwareUpdatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballGetSoftwareUpdatesResult
 */
export interface SnowballGetSoftwareUpdatesResult {
  /**
   * @schema SnowballGetSoftwareUpdatesResult#UpdatesURI
   */
  readonly updatesUri?: string;

}

/**
 * Converts an object of type 'SnowballGetSoftwareUpdatesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballGetSoftwareUpdatesResult(obj: SnowballGetSoftwareUpdatesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdatesURI': obj.updatesUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballListClusterJobsRequest
 */
export interface SnowballListClusterJobsRequest {
  /**
   * @schema SnowballListClusterJobsRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballListClusterJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListClusterJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListClusterJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListClusterJobsRequest(obj: SnowballListClusterJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballListClusterJobsResult
 */
export interface SnowballListClusterJobsResult {
  /**
   * @schema SnowballListClusterJobsResult#JobListEntries
   */
  readonly jobListEntries?: SnowballJobListEntry[];

  /**
   * @schema SnowballListClusterJobsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListClusterJobsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListClusterJobsResult(obj: SnowballListClusterJobsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobListEntries': obj.jobListEntries?.map(y => toJson_SnowballJobListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballListClustersRequest
 */
export interface SnowballListClustersRequest {
  /**
   * @schema SnowballListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListClustersRequest(obj: SnowballListClustersRequest | undefined): Record<string, any> | undefined {
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
 * @schema SnowballListClustersResult
 */
export interface SnowballListClustersResult {
  /**
   * @schema SnowballListClustersResult#ClusterListEntries
   */
  readonly clusterListEntries?: SnowballClusterListEntry[];

  /**
   * @schema SnowballListClustersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListClustersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListClustersResult(obj: SnowballListClustersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterListEntries': obj.clusterListEntries?.map(y => toJson_SnowballClusterListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballListCompatibleImagesRequest
 */
export interface SnowballListCompatibleImagesRequest {
  /**
   * @schema SnowballListCompatibleImagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListCompatibleImagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListCompatibleImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListCompatibleImagesRequest(obj: SnowballListCompatibleImagesRequest | undefined): Record<string, any> | undefined {
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
 * @schema SnowballListCompatibleImagesResult
 */
export interface SnowballListCompatibleImagesResult {
  /**
   * @schema SnowballListCompatibleImagesResult#CompatibleImages
   */
  readonly compatibleImages?: SnowballCompatibleImage[];

  /**
   * @schema SnowballListCompatibleImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListCompatibleImagesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListCompatibleImagesResult(obj: SnowballListCompatibleImagesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompatibleImages': obj.compatibleImages?.map(y => toJson_SnowballCompatibleImage(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballListJobsRequest
 */
export interface SnowballListJobsRequest {
  /**
   * @schema SnowballListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListJobsRequest(obj: SnowballListJobsRequest | undefined): Record<string, any> | undefined {
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
 * @schema SnowballListJobsResult
 */
export interface SnowballListJobsResult {
  /**
   * @schema SnowballListJobsResult#JobListEntries
   */
  readonly jobListEntries?: SnowballJobListEntry[];

  /**
   * @schema SnowballListJobsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListJobsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListJobsResult(obj: SnowballListJobsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobListEntries': obj.jobListEntries?.map(y => toJson_SnowballJobListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballListLongTermPricingRequest
 */
export interface SnowballListLongTermPricingRequest {
  /**
   * @schema SnowballListLongTermPricingRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SnowballListLongTermPricingRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListLongTermPricingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListLongTermPricingRequest(obj: SnowballListLongTermPricingRequest | undefined): Record<string, any> | undefined {
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
 * @schema SnowballListLongTermPricingResult
 */
export interface SnowballListLongTermPricingResult {
  /**
   * @schema SnowballListLongTermPricingResult#LongTermPricingEntries
   */
  readonly longTermPricingEntries?: SnowballLongTermPricingListEntry[];

  /**
   * @schema SnowballListLongTermPricingResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnowballListLongTermPricingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballListLongTermPricingResult(obj: SnowballListLongTermPricingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LongTermPricingEntries': obj.longTermPricingEntries?.map(y => toJson_SnowballLongTermPricingListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateClusterRequest
 */
export interface SnowballUpdateClusterRequest {
  /**
   * @schema SnowballUpdateClusterRequest#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballUpdateClusterRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballUpdateClusterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballUpdateClusterRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballUpdateClusterRequest#OnDeviceServiceConfiguration
   */
  readonly onDeviceServiceConfiguration?: SnowballOnDeviceServiceConfiguration;

  /**
   * @schema SnowballUpdateClusterRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballUpdateClusterRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballUpdateClusterRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballUpdateClusterRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

}

/**
 * Converts an object of type 'SnowballUpdateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateClusterRequest(obj: SnowballUpdateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'RoleARN': obj.roleArn,
    'Description': obj.description,
    'Resources': toJson_SnowballJobResource(obj.resources),
    'OnDeviceServiceConfiguration': toJson_SnowballOnDeviceServiceConfiguration(obj.onDeviceServiceConfiguration),
    'AddressId': obj.addressId,
    'ShippingOption': obj.shippingOption,
    'Notification': toJson_SnowballNotification(obj.notification),
    'ForwardingAddressId': obj.forwardingAddressId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateClusterResult
 */
export interface SnowballUpdateClusterResult {
}

/**
 * Converts an object of type 'SnowballUpdateClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateClusterResult(obj: SnowballUpdateClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateJobRequest
 */
export interface SnowballUpdateJobRequest {
  /**
   * @schema SnowballUpdateJobRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballUpdateJobRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballUpdateJobRequest#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballUpdateJobRequest#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballUpdateJobRequest#OnDeviceServiceConfiguration
   */
  readonly onDeviceServiceConfiguration?: SnowballOnDeviceServiceConfiguration;

  /**
   * @schema SnowballUpdateJobRequest#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballUpdateJobRequest#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballUpdateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballUpdateJobRequest#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema SnowballUpdateJobRequest#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

}

/**
 * Converts an object of type 'SnowballUpdateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateJobRequest(obj: SnowballUpdateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'RoleARN': obj.roleArn,
    'Notification': toJson_SnowballNotification(obj.notification),
    'Resources': toJson_SnowballJobResource(obj.resources),
    'OnDeviceServiceConfiguration': toJson_SnowballOnDeviceServiceConfiguration(obj.onDeviceServiceConfiguration),
    'AddressId': obj.addressId,
    'ShippingOption': obj.shippingOption,
    'Description': obj.description,
    'SnowballCapacityPreference': obj.snowballCapacityPreference,
    'ForwardingAddressId': obj.forwardingAddressId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateJobResult
 */
export interface SnowballUpdateJobResult {
}

/**
 * Converts an object of type 'SnowballUpdateJobResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateJobResult(obj: SnowballUpdateJobResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateJobShipmentStateRequest
 */
export interface SnowballUpdateJobShipmentStateRequest {
  /**
   * @schema SnowballUpdateJobShipmentStateRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballUpdateJobShipmentStateRequest#ShipmentState
   */
  readonly shipmentState?: string;

}

/**
 * Converts an object of type 'SnowballUpdateJobShipmentStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateJobShipmentStateRequest(obj: SnowballUpdateJobShipmentStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'ShipmentState': obj.shipmentState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateJobShipmentStateResult
 */
export interface SnowballUpdateJobShipmentStateResult {
}

/**
 * Converts an object of type 'SnowballUpdateJobShipmentStateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateJobShipmentStateResult(obj: SnowballUpdateJobShipmentStateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateLongTermPricingRequest
 */
export interface SnowballUpdateLongTermPricingRequest {
  /**
   * @schema SnowballUpdateLongTermPricingRequest#LongTermPricingId
   */
  readonly longTermPricingId?: string;

  /**
   * @schema SnowballUpdateLongTermPricingRequest#ReplacementJob
   */
  readonly replacementJob?: string;

  /**
   * @schema SnowballUpdateLongTermPricingRequest#IsLongTermPricingAutoRenew
   */
  readonly isLongTermPricingAutoRenew?: boolean;

}

/**
 * Converts an object of type 'SnowballUpdateLongTermPricingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateLongTermPricingRequest(obj: SnowballUpdateLongTermPricingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LongTermPricingId': obj.longTermPricingId,
    'ReplacementJob': obj.replacementJob,
    'IsLongTermPricingAutoRenew': obj.isLongTermPricingAutoRenew,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballUpdateLongTermPricingResult
 */
export interface SnowballUpdateLongTermPricingResult {
}

/**
 * Converts an object of type 'SnowballUpdateLongTermPricingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballUpdateLongTermPricingResult(obj: SnowballUpdateLongTermPricingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballAddress
 */
export interface SnowballAddress {
  /**
   * @schema SnowballAddress#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballAddress#Name
   */
  readonly name?: string;

  /**
   * @schema SnowballAddress#Company
   */
  readonly company?: string;

  /**
   * @schema SnowballAddress#Street1
   */
  readonly street1?: string;

  /**
   * @schema SnowballAddress#Street2
   */
  readonly street2?: string;

  /**
   * @schema SnowballAddress#Street3
   */
  readonly street3?: string;

  /**
   * @schema SnowballAddress#City
   */
  readonly city?: string;

  /**
   * @schema SnowballAddress#StateOrProvince
   */
  readonly stateOrProvince?: string;

  /**
   * @schema SnowballAddress#PrefectureOrDistrict
   */
  readonly prefectureOrDistrict?: string;

  /**
   * @schema SnowballAddress#Landmark
   */
  readonly landmark?: string;

  /**
   * @schema SnowballAddress#Country
   */
  readonly country?: string;

  /**
   * @schema SnowballAddress#PostalCode
   */
  readonly postalCode?: string;

  /**
   * @schema SnowballAddress#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnowballAddress#IsRestricted
   */
  readonly isRestricted?: boolean;

}

/**
 * Converts an object of type 'SnowballAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballAddress(obj: SnowballAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressId': obj.addressId,
    'Name': obj.name,
    'Company': obj.company,
    'Street1': obj.street1,
    'Street2': obj.street2,
    'Street3': obj.street3,
    'City': obj.city,
    'StateOrProvince': obj.stateOrProvince,
    'PrefectureOrDistrict': obj.prefectureOrDistrict,
    'Landmark': obj.landmark,
    'Country': obj.country,
    'PostalCode': obj.postalCode,
    'PhoneNumber': obj.phoneNumber,
    'IsRestricted': obj.isRestricted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballJobResource
 */
export interface SnowballJobResource {
  /**
   * @schema SnowballJobResource#S3Resources
   */
  readonly s3Resources?: SnowballS3Resource[];

  /**
   * @schema SnowballJobResource#LambdaResources
   */
  readonly lambdaResources?: SnowballLambdaResource[];

  /**
   * @schema SnowballJobResource#Ec2AmiResources
   */
  readonly ec2AmiResources?: SnowballEc2AmiResource[];

}

/**
 * Converts an object of type 'SnowballJobResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballJobResource(obj: SnowballJobResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Resources': obj.s3Resources?.map(y => toJson_SnowballS3Resource(y)),
    'LambdaResources': obj.lambdaResources?.map(y => toJson_SnowballLambdaResource(y)),
    'Ec2AmiResources': obj.ec2AmiResources?.map(y => toJson_SnowballEc2AmiResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballOnDeviceServiceConfiguration
 */
export interface SnowballOnDeviceServiceConfiguration {
  /**
   * @schema SnowballOnDeviceServiceConfiguration#NFSOnDeviceService
   */
  readonly nfsOnDeviceService?: SnowballNfsOnDeviceServiceConfiguration;

}

/**
 * Converts an object of type 'SnowballOnDeviceServiceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballOnDeviceServiceConfiguration(obj: SnowballOnDeviceServiceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NFSOnDeviceService': toJson_SnowballNfsOnDeviceServiceConfiguration(obj.nfsOnDeviceService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballNotification
 */
export interface SnowballNotification {
  /**
   * @schema SnowballNotification#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema SnowballNotification#JobStatesToNotify
   */
  readonly jobStatesToNotify?: string[];

  /**
   * @schema SnowballNotification#NotifyAll
   */
  readonly notifyAll?: boolean;

}

/**
 * Converts an object of type 'SnowballNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballNotification(obj: SnowballNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnsTopicARN': obj.snsTopicArn,
    'JobStatesToNotify': obj.jobStatesToNotify?.map(y => y),
    'NotifyAll': obj.notifyAll,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballTaxDocuments
 */
export interface SnowballTaxDocuments {
  /**
   * @schema SnowballTaxDocuments#IND
   */
  readonly ind?: SnowballIndTaxDocuments;

}

/**
 * Converts an object of type 'SnowballTaxDocuments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballTaxDocuments(obj: SnowballTaxDocuments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IND': toJson_SnowballIndTaxDocuments(obj.ind),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDeviceConfiguration
 */
export interface SnowballDeviceConfiguration {
  /**
   * @schema SnowballDeviceConfiguration#SnowconeDeviceConfiguration
   */
  readonly snowconeDeviceConfiguration?: SnowballSnowconeDeviceConfiguration;

}

/**
 * Converts an object of type 'SnowballDeviceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDeviceConfiguration(obj: SnowballDeviceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnowconeDeviceConfiguration': toJson_SnowballSnowconeDeviceConfiguration(obj.snowconeDeviceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballClusterMetadata
 */
export interface SnowballClusterMetadata {
  /**
   * @schema SnowballClusterMetadata#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballClusterMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballClusterMetadata#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballClusterMetadata#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballClusterMetadata#ClusterState
   */
  readonly clusterState?: string;

  /**
   * @schema SnowballClusterMetadata#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballClusterMetadata#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballClusterMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballClusterMetadata#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballClusterMetadata#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballClusterMetadata#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballClusterMetadata#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballClusterMetadata#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballClusterMetadata#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

  /**
   * @schema SnowballClusterMetadata#OnDeviceServiceConfiguration
   */
  readonly onDeviceServiceConfiguration?: SnowballOnDeviceServiceConfiguration;

}

/**
 * Converts an object of type 'SnowballClusterMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballClusterMetadata(obj: SnowballClusterMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'Description': obj.description,
    'KmsKeyARN': obj.kmsKeyArn,
    'RoleARN': obj.roleArn,
    'ClusterState': obj.clusterState,
    'JobType': obj.jobType,
    'SnowballType': obj.snowballType,
    'CreationDate': obj.creationDate,
    'Resources': toJson_SnowballJobResource(obj.resources),
    'AddressId': obj.addressId,
    'ShippingOption': obj.shippingOption,
    'Notification': toJson_SnowballNotification(obj.notification),
    'ForwardingAddressId': obj.forwardingAddressId,
    'TaxDocuments': toJson_SnowballTaxDocuments(obj.taxDocuments),
    'OnDeviceServiceConfiguration': toJson_SnowballOnDeviceServiceConfiguration(obj.onDeviceServiceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballJobMetadata
 */
export interface SnowballJobMetadata {
  /**
   * @schema SnowballJobMetadata#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballJobMetadata#JobState
   */
  readonly jobState?: string;

  /**
   * @schema SnowballJobMetadata#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballJobMetadata#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballJobMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballJobMetadata#Resources
   */
  readonly resources?: SnowballJobResource;

  /**
   * @schema SnowballJobMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema SnowballJobMetadata#KmsKeyARN
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema SnowballJobMetadata#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema SnowballJobMetadata#AddressId
   */
  readonly addressId?: string;

  /**
   * @schema SnowballJobMetadata#ShippingDetails
   */
  readonly shippingDetails?: SnowballShippingDetails;

  /**
   * @schema SnowballJobMetadata#SnowballCapacityPreference
   */
  readonly snowballCapacityPreference?: string;

  /**
   * @schema SnowballJobMetadata#Notification
   */
  readonly notification?: SnowballNotification;

  /**
   * @schema SnowballJobMetadata#DataTransferProgress
   */
  readonly dataTransferProgress?: SnowballDataTransfer;

  /**
   * @schema SnowballJobMetadata#JobLogInfo
   */
  readonly jobLogInfo?: SnowballJobLogs;

  /**
   * @schema SnowballJobMetadata#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballJobMetadata#ForwardingAddressId
   */
  readonly forwardingAddressId?: string;

  /**
   * @schema SnowballJobMetadata#TaxDocuments
   */
  readonly taxDocuments?: SnowballTaxDocuments;

  /**
   * @schema SnowballJobMetadata#DeviceConfiguration
   */
  readonly deviceConfiguration?: SnowballDeviceConfiguration;

  /**
   * @schema SnowballJobMetadata#RemoteManagement
   */
  readonly remoteManagement?: string;

  /**
   * @schema SnowballJobMetadata#LongTermPricingId
   */
  readonly longTermPricingId?: string;

  /**
   * @schema SnowballJobMetadata#OnDeviceServiceConfiguration
   */
  readonly onDeviceServiceConfiguration?: SnowballOnDeviceServiceConfiguration;

}

/**
 * Converts an object of type 'SnowballJobMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballJobMetadata(obj: SnowballJobMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobState': obj.jobState,
    'JobType': obj.jobType,
    'SnowballType': obj.snowballType,
    'CreationDate': obj.creationDate,
    'Resources': toJson_SnowballJobResource(obj.resources),
    'Description': obj.description,
    'KmsKeyARN': obj.kmsKeyArn,
    'RoleARN': obj.roleArn,
    'AddressId': obj.addressId,
    'ShippingDetails': toJson_SnowballShippingDetails(obj.shippingDetails),
    'SnowballCapacityPreference': obj.snowballCapacityPreference,
    'Notification': toJson_SnowballNotification(obj.notification),
    'DataTransferProgress': toJson_SnowballDataTransfer(obj.dataTransferProgress),
    'JobLogInfo': toJson_SnowballJobLogs(obj.jobLogInfo),
    'ClusterId': obj.clusterId,
    'ForwardingAddressId': obj.forwardingAddressId,
    'TaxDocuments': toJson_SnowballTaxDocuments(obj.taxDocuments),
    'DeviceConfiguration': toJson_SnowballDeviceConfiguration(obj.deviceConfiguration),
    'RemoteManagement': obj.remoteManagement,
    'LongTermPricingId': obj.longTermPricingId,
    'OnDeviceServiceConfiguration': toJson_SnowballOnDeviceServiceConfiguration(obj.onDeviceServiceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballJobListEntry
 */
export interface SnowballJobListEntry {
  /**
   * @schema SnowballJobListEntry#JobId
   */
  readonly jobId?: string;

  /**
   * @schema SnowballJobListEntry#JobState
   */
  readonly jobState?: string;

  /**
   * @schema SnowballJobListEntry#IsMaster
   */
  readonly isMaster?: boolean;

  /**
   * @schema SnowballJobListEntry#JobType
   */
  readonly jobType?: string;

  /**
   * @schema SnowballJobListEntry#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballJobListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballJobListEntry#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SnowballJobListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballJobListEntry(obj: SnowballJobListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobState': obj.jobState,
    'IsMaster': obj.isMaster,
    'JobType': obj.jobType,
    'SnowballType': obj.snowballType,
    'CreationDate': obj.creationDate,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballClusterListEntry
 */
export interface SnowballClusterListEntry {
  /**
   * @schema SnowballClusterListEntry#ClusterId
   */
  readonly clusterId?: string;

  /**
   * @schema SnowballClusterListEntry#ClusterState
   */
  readonly clusterState?: string;

  /**
   * @schema SnowballClusterListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SnowballClusterListEntry#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SnowballClusterListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballClusterListEntry(obj: SnowballClusterListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterId': obj.clusterId,
    'ClusterState': obj.clusterState,
    'CreationDate': obj.creationDate,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballCompatibleImage
 */
export interface SnowballCompatibleImage {
  /**
   * @schema SnowballCompatibleImage#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema SnowballCompatibleImage#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SnowballCompatibleImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballCompatibleImage(obj: SnowballCompatibleImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmiId': obj.amiId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballLongTermPricingListEntry
 */
export interface SnowballLongTermPricingListEntry {
  /**
   * @schema SnowballLongTermPricingListEntry#LongTermPricingId
   */
  readonly longTermPricingId?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#LongTermPricingEndDate
   */
  readonly longTermPricingEndDate?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#LongTermPricingStartDate
   */
  readonly longTermPricingStartDate?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#LongTermPricingType
   */
  readonly longTermPricingType?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#CurrentActiveJob
   */
  readonly currentActiveJob?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#ReplacementJob
   */
  readonly replacementJob?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#IsLongTermPricingAutoRenew
   */
  readonly isLongTermPricingAutoRenew?: boolean;

  /**
   * @schema SnowballLongTermPricingListEntry#LongTermPricingStatus
   */
  readonly longTermPricingStatus?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#SnowballType
   */
  readonly snowballType?: string;

  /**
   * @schema SnowballLongTermPricingListEntry#JobIds
   */
  readonly jobIds?: string[];

}

/**
 * Converts an object of type 'SnowballLongTermPricingListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballLongTermPricingListEntry(obj: SnowballLongTermPricingListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LongTermPricingId': obj.longTermPricingId,
    'LongTermPricingEndDate': obj.longTermPricingEndDate,
    'LongTermPricingStartDate': obj.longTermPricingStartDate,
    'LongTermPricingType': obj.longTermPricingType,
    'CurrentActiveJob': obj.currentActiveJob,
    'ReplacementJob': obj.replacementJob,
    'IsLongTermPricingAutoRenew': obj.isLongTermPricingAutoRenew,
    'LongTermPricingStatus': obj.longTermPricingStatus,
    'SnowballType': obj.snowballType,
    'JobIds': obj.jobIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballS3Resource
 */
export interface SnowballS3Resource {
  /**
   * @schema SnowballS3Resource#BucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema SnowballS3Resource#KeyRange
   */
  readonly keyRange?: SnowballKeyRange;

  /**
   * @schema SnowballS3Resource#TargetOnDeviceServices
   */
  readonly targetOnDeviceServices?: SnowballTargetOnDeviceService[];

}

/**
 * Converts an object of type 'SnowballS3Resource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballS3Resource(obj: SnowballS3Resource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketArn': obj.bucketArn,
    'KeyRange': toJson_SnowballKeyRange(obj.keyRange),
    'TargetOnDeviceServices': obj.targetOnDeviceServices?.map(y => toJson_SnowballTargetOnDeviceService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballLambdaResource
 */
export interface SnowballLambdaResource {
  /**
   * @schema SnowballLambdaResource#LambdaArn
   */
  readonly lambdaArn?: string;

  /**
   * @schema SnowballLambdaResource#EventTriggers
   */
  readonly eventTriggers?: SnowballEventTriggerDefinition[];

}

/**
 * Converts an object of type 'SnowballLambdaResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballLambdaResource(obj: SnowballLambdaResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LambdaArn': obj.lambdaArn,
    'EventTriggers': obj.eventTriggers?.map(y => toJson_SnowballEventTriggerDefinition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballEc2AmiResource
 */
export interface SnowballEc2AmiResource {
  /**
   * @schema SnowballEc2AmiResource#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema SnowballEc2AmiResource#SnowballAmiId
   */
  readonly snowballAmiId?: string;

}

/**
 * Converts an object of type 'SnowballEc2AmiResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballEc2AmiResource(obj: SnowballEc2AmiResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmiId': obj.amiId,
    'SnowballAmiId': obj.snowballAmiId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballNfsOnDeviceServiceConfiguration
 */
export interface SnowballNfsOnDeviceServiceConfiguration {
  /**
   * @schema SnowballNfsOnDeviceServiceConfiguration#StorageLimit
   */
  readonly storageLimit?: number;

  /**
   * @schema SnowballNfsOnDeviceServiceConfiguration#StorageUnit
   */
  readonly storageUnit?: string;

}

/**
 * Converts an object of type 'SnowballNfsOnDeviceServiceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballNfsOnDeviceServiceConfiguration(obj: SnowballNfsOnDeviceServiceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageLimit': obj.storageLimit,
    'StorageUnit': obj.storageUnit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballIndTaxDocuments
 */
export interface SnowballIndTaxDocuments {
  /**
   * @schema SnowballIndTaxDocuments#GSTIN
   */
  readonly gstin?: string;

}

/**
 * Converts an object of type 'SnowballIndTaxDocuments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballIndTaxDocuments(obj: SnowballIndTaxDocuments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GSTIN': obj.gstin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballSnowconeDeviceConfiguration
 */
export interface SnowballSnowconeDeviceConfiguration {
  /**
   * @schema SnowballSnowconeDeviceConfiguration#WirelessConnection
   */
  readonly wirelessConnection?: SnowballWirelessConnection;

}

/**
 * Converts an object of type 'SnowballSnowconeDeviceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballSnowconeDeviceConfiguration(obj: SnowballSnowconeDeviceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessConnection': toJson_SnowballWirelessConnection(obj.wirelessConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballShippingDetails
 */
export interface SnowballShippingDetails {
  /**
   * @schema SnowballShippingDetails#ShippingOption
   */
  readonly shippingOption?: string;

  /**
   * @schema SnowballShippingDetails#InboundShipment
   */
  readonly inboundShipment?: SnowballShipment;

  /**
   * @schema SnowballShippingDetails#OutboundShipment
   */
  readonly outboundShipment?: SnowballShipment;

}

/**
 * Converts an object of type 'SnowballShippingDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballShippingDetails(obj: SnowballShippingDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShippingOption': obj.shippingOption,
    'InboundShipment': toJson_SnowballShipment(obj.inboundShipment),
    'OutboundShipment': toJson_SnowballShipment(obj.outboundShipment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballDataTransfer
 */
export interface SnowballDataTransfer {
  /**
   * @schema SnowballDataTransfer#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema SnowballDataTransfer#ObjectsTransferred
   */
  readonly objectsTransferred?: number;

  /**
   * @schema SnowballDataTransfer#TotalBytes
   */
  readonly totalBytes?: number;

  /**
   * @schema SnowballDataTransfer#TotalObjects
   */
  readonly totalObjects?: number;

}

/**
 * Converts an object of type 'SnowballDataTransfer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballDataTransfer(obj: SnowballDataTransfer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BytesTransferred': obj.bytesTransferred,
    'ObjectsTransferred': obj.objectsTransferred,
    'TotalBytes': obj.totalBytes,
    'TotalObjects': obj.totalObjects,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballJobLogs
 */
export interface SnowballJobLogs {
  /**
   * @schema SnowballJobLogs#JobCompletionReportURI
   */
  readonly jobCompletionReportUri?: string;

  /**
   * @schema SnowballJobLogs#JobSuccessLogURI
   */
  readonly jobSuccessLogUri?: string;

  /**
   * @schema SnowballJobLogs#JobFailureLogURI
   */
  readonly jobFailureLogUri?: string;

}

/**
 * Converts an object of type 'SnowballJobLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballJobLogs(obj: SnowballJobLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobCompletionReportURI': obj.jobCompletionReportUri,
    'JobSuccessLogURI': obj.jobSuccessLogUri,
    'JobFailureLogURI': obj.jobFailureLogUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballKeyRange
 */
export interface SnowballKeyRange {
  /**
   * @schema SnowballKeyRange#BeginMarker
   */
  readonly beginMarker?: string;

  /**
   * @schema SnowballKeyRange#EndMarker
   */
  readonly endMarker?: string;

}

/**
 * Converts an object of type 'SnowballKeyRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballKeyRange(obj: SnowballKeyRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BeginMarker': obj.beginMarker,
    'EndMarker': obj.endMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballTargetOnDeviceService
 */
export interface SnowballTargetOnDeviceService {
  /**
   * @schema SnowballTargetOnDeviceService#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema SnowballTargetOnDeviceService#TransferOption
   */
  readonly transferOption?: string;

}

/**
 * Converts an object of type 'SnowballTargetOnDeviceService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballTargetOnDeviceService(obj: SnowballTargetOnDeviceService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceName': obj.serviceName,
    'TransferOption': obj.transferOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballEventTriggerDefinition
 */
export interface SnowballEventTriggerDefinition {
  /**
   * @schema SnowballEventTriggerDefinition#EventResourceARN
   */
  readonly eventResourceArn?: string;

}

/**
 * Converts an object of type 'SnowballEventTriggerDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballEventTriggerDefinition(obj: SnowballEventTriggerDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventResourceARN': obj.eventResourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballWirelessConnection
 */
export interface SnowballWirelessConnection {
  /**
   * @schema SnowballWirelessConnection#IsWifiEnabled
   */
  readonly isWifiEnabled?: boolean;

}

/**
 * Converts an object of type 'SnowballWirelessConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballWirelessConnection(obj: SnowballWirelessConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsWifiEnabled': obj.isWifiEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnowballShipment
 */
export interface SnowballShipment {
  /**
   * @schema SnowballShipment#Status
   */
  readonly status?: string;

  /**
   * @schema SnowballShipment#TrackingNumber
   */
  readonly trackingNumber?: string;

}

/**
 * Converts an object of type 'SnowballShipment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnowballShipment(obj: SnowballShipment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'TrackingNumber': obj.trackingNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
