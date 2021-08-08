/**
 * @schema EsAcceptInboundCrossClusterSearchConnectionRequest
 */
export interface EsAcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsAcceptInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * Converts an object of type 'EsAcceptInboundCrossClusterSearchConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAcceptInboundCrossClusterSearchConnectionRequest(obj: EsAcceptInboundCrossClusterSearchConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAcceptInboundCrossClusterSearchConnectionResponse
 */
export interface EsAcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsAcceptInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsInboundCrossClusterSearchConnection;

}

/**
 * Converts an object of type 'EsAcceptInboundCrossClusterSearchConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAcceptInboundCrossClusterSearchConnectionResponse(obj: EsAcceptInboundCrossClusterSearchConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnection': toJson_EsInboundCrossClusterSearchConnection(obj.crossClusterSearchConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAddTagsRequest
 */
export interface EsAddTagsRequest {
  /**
   * @schema EsAddTagsRequest#ARN
   */
  readonly arn?: string;

  /**
   * @schema EsAddTagsRequest#TagList
   */
  readonly tagList?: EsTag[];

}

/**
 * Converts an object of type 'EsAddTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAddTagsRequest(obj: EsAddTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'TagList': obj.tagList?.map(y => toJson_EsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAssociatePackageRequest
 */
export interface EsAssociatePackageRequest {
  /**
   * @schema EsAssociatePackageRequest#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsAssociatePackageRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsAssociatePackageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAssociatePackageRequest(obj: EsAssociatePackageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAssociatePackageResponse
 */
export interface EsAssociatePackageResponse {
  /**
   * @schema EsAssociatePackageResponse#DomainPackageDetails
   */
  readonly domainPackageDetails?: EsDomainPackageDetails;

}

/**
 * Converts an object of type 'EsAssociatePackageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAssociatePackageResponse(obj: EsAssociatePackageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainPackageDetails': toJson_EsDomainPackageDetails(obj.domainPackageDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCancelElasticsearchServiceSoftwareUpdateRequest
 */
export interface EsCancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @schema EsCancelElasticsearchServiceSoftwareUpdateRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsCancelElasticsearchServiceSoftwareUpdateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCancelElasticsearchServiceSoftwareUpdateRequest(obj: EsCancelElasticsearchServiceSoftwareUpdateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCancelElasticsearchServiceSoftwareUpdateResponse
 */
export interface EsCancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @schema EsCancelElasticsearchServiceSoftwareUpdateResponse#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: EsServiceSoftwareOptions;

}

/**
 * Converts an object of type 'EsCancelElasticsearchServiceSoftwareUpdateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCancelElasticsearchServiceSoftwareUpdateResponse(obj: EsCancelElasticsearchServiceSoftwareUpdateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSoftwareOptions': toJson_EsServiceSoftwareOptions(obj.serviceSoftwareOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCreateElasticsearchDomainRequest
 */
export interface EsCreateElasticsearchDomainRequest {
  /**
   * @schema EsCreateElasticsearchDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsCreateElasticsearchDomainRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema EsCreateElasticsearchDomainRequest#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfig;

  /**
   * @schema EsCreateElasticsearchDomainRequest#EBSOptions
   */
  readonly ebsOptions?: EsebsOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema EsCreateElasticsearchDomainRequest#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#VPCOptions
   */
  readonly vpcOptions?: EsvpcOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema EsCreateElasticsearchDomainRequest#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsCreateElasticsearchDomainRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptions;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptionsInput;

  /**
   * @schema EsCreateElasticsearchDomainRequest#AutoTuneOptions
   */
  readonly autoTuneOptions?: EsAutoTuneOptionsInput;

  /**
   * @schema EsCreateElasticsearchDomainRequest#TagList
   */
  readonly tagList?: EsTag[];

}

/**
 * Converts an object of type 'EsCreateElasticsearchDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCreateElasticsearchDomainRequest(obj: EsCreateElasticsearchDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ElasticsearchVersion': obj.elasticsearchVersion,
    'ElasticsearchClusterConfig': toJson_EsElasticsearchClusterConfig(obj.elasticsearchClusterConfig),
    'EBSOptions': toJson_EsebsOptions(obj.ebsOptions),
    'AccessPolicies': obj.accessPolicies,
    'SnapshotOptions': toJson_EsSnapshotOptions(obj.snapshotOptions),
    'VPCOptions': toJson_EsvpcOptions(obj.vpcOptions),
    'CognitoOptions': toJson_EsCognitoOptions(obj.cognitoOptions),
    'EncryptionAtRestOptions': toJson_EsEncryptionAtRestOptions(obj.encryptionAtRestOptions),
    'NodeToNodeEncryptionOptions': toJson_EsNodeToNodeEncryptionOptions(obj.nodeToNodeEncryptionOptions),
    'AdvancedOptions': ((obj.advancedOptions) === undefined) ? undefined : (Object.entries(obj.advancedOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'LogPublishingOptions': ((obj.logPublishingOptions) === undefined) ? undefined : (Object.entries(obj.logPublishingOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_EsLogPublishingOption(i[1]) }), {})),
    'DomainEndpointOptions': toJson_EsDomainEndpointOptions(obj.domainEndpointOptions),
    'AdvancedSecurityOptions': toJson_EsAdvancedSecurityOptionsInput(obj.advancedSecurityOptions),
    'AutoTuneOptions': toJson_EsAutoTuneOptionsInput(obj.autoTuneOptions),
    'TagList': obj.tagList?.map(y => toJson_EsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCreateElasticsearchDomainResponse
 */
export interface EsCreateElasticsearchDomainResponse {
  /**
   * @schema EsCreateElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: EsElasticsearchDomainStatus;

}

/**
 * Converts an object of type 'EsCreateElasticsearchDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCreateElasticsearchDomainResponse(obj: EsCreateElasticsearchDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatus': toJson_EsElasticsearchDomainStatus(obj.domainStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCreateOutboundCrossClusterSearchConnectionRequest
 */
export interface EsCreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionRequest#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionRequest#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionRequest#ConnectionAlias
   */
  readonly connectionAlias?: string;

}

/**
 * Converts an object of type 'EsCreateOutboundCrossClusterSearchConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCreateOutboundCrossClusterSearchConnectionRequest(obj: EsCreateOutboundCrossClusterSearchConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDomainInfo': toJson_EsDomainInformation(obj.sourceDomainInfo),
    'DestinationDomainInfo': toJson_EsDomainInformation(obj.destinationDomainInfo),
    'ConnectionAlias': obj.connectionAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCreateOutboundCrossClusterSearchConnectionResponse
 */
export interface EsCreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#ConnectionAlias
   */
  readonly connectionAlias?: string;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#ConnectionStatus
   */
  readonly connectionStatus?: EsOutboundCrossClusterSearchConnectionStatus;

  /**
   * @schema EsCreateOutboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * Converts an object of type 'EsCreateOutboundCrossClusterSearchConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCreateOutboundCrossClusterSearchConnectionResponse(obj: EsCreateOutboundCrossClusterSearchConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDomainInfo': toJson_EsDomainInformation(obj.sourceDomainInfo),
    'DestinationDomainInfo': toJson_EsDomainInformation(obj.destinationDomainInfo),
    'ConnectionAlias': obj.connectionAlias,
    'ConnectionStatus': toJson_EsOutboundCrossClusterSearchConnectionStatus(obj.connectionStatus),
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCreatePackageRequest
 */
export interface EsCreatePackageRequest {
  /**
   * @schema EsCreatePackageRequest#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema EsCreatePackageRequest#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema EsCreatePackageRequest#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema EsCreatePackageRequest#PackageSource
   */
  readonly packageSource?: EsPackageSource;

}

/**
 * Converts an object of type 'EsCreatePackageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCreatePackageRequest(obj: EsCreatePackageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageName': obj.packageName,
    'PackageType': obj.packageType,
    'PackageDescription': obj.packageDescription,
    'PackageSource': toJson_EsPackageSource(obj.packageSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCreatePackageResponse
 */
export interface EsCreatePackageResponse {
  /**
   * @schema EsCreatePackageResponse#PackageDetails
   */
  readonly packageDetails?: EsPackageDetails;

}

/**
 * Converts an object of type 'EsCreatePackageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCreatePackageResponse(obj: EsCreatePackageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageDetails': toJson_EsPackageDetails(obj.packageDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeleteElasticsearchDomainRequest
 */
export interface EsDeleteElasticsearchDomainRequest {
  /**
   * @schema EsDeleteElasticsearchDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsDeleteElasticsearchDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeleteElasticsearchDomainRequest(obj: EsDeleteElasticsearchDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeleteElasticsearchDomainResponse
 */
export interface EsDeleteElasticsearchDomainResponse {
  /**
   * @schema EsDeleteElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: EsElasticsearchDomainStatus;

}

/**
 * Converts an object of type 'EsDeleteElasticsearchDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeleteElasticsearchDomainResponse(obj: EsDeleteElasticsearchDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatus': toJson_EsElasticsearchDomainStatus(obj.domainStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeleteInboundCrossClusterSearchConnectionRequest
 */
export interface EsDeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsDeleteInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * Converts an object of type 'EsDeleteInboundCrossClusterSearchConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeleteInboundCrossClusterSearchConnectionRequest(obj: EsDeleteInboundCrossClusterSearchConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeleteInboundCrossClusterSearchConnectionResponse
 */
export interface EsDeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsDeleteInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsInboundCrossClusterSearchConnection;

}

/**
 * Converts an object of type 'EsDeleteInboundCrossClusterSearchConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeleteInboundCrossClusterSearchConnectionResponse(obj: EsDeleteInboundCrossClusterSearchConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnection': toJson_EsInboundCrossClusterSearchConnection(obj.crossClusterSearchConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeleteOutboundCrossClusterSearchConnectionRequest
 */
export interface EsDeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsDeleteOutboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * Converts an object of type 'EsDeleteOutboundCrossClusterSearchConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeleteOutboundCrossClusterSearchConnectionRequest(obj: EsDeleteOutboundCrossClusterSearchConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeleteOutboundCrossClusterSearchConnectionResponse
 */
export interface EsDeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsDeleteOutboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsOutboundCrossClusterSearchConnection;

}

/**
 * Converts an object of type 'EsDeleteOutboundCrossClusterSearchConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeleteOutboundCrossClusterSearchConnectionResponse(obj: EsDeleteOutboundCrossClusterSearchConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnection': toJson_EsOutboundCrossClusterSearchConnection(obj.crossClusterSearchConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeletePackageRequest
 */
export interface EsDeletePackageRequest {
  /**
   * @schema EsDeletePackageRequest#PackageID
   */
  readonly packageId?: string;

}

/**
 * Converts an object of type 'EsDeletePackageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeletePackageRequest(obj: EsDeletePackageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDeletePackageResponse
 */
export interface EsDeletePackageResponse {
  /**
   * @schema EsDeletePackageResponse#PackageDetails
   */
  readonly packageDetails?: EsPackageDetails;

}

/**
 * Converts an object of type 'EsDeletePackageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDeletePackageResponse(obj: EsDeletePackageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageDetails': toJson_EsPackageDetails(obj.packageDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeDomainAutoTunesRequest
 */
export interface EsDescribeDomainAutoTunesRequest {
  /**
   * @schema EsDescribeDomainAutoTunesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsDescribeDomainAutoTunesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeDomainAutoTunesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeDomainAutoTunesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeDomainAutoTunesRequest(obj: EsDescribeDomainAutoTunesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeDomainAutoTunesResponse
 */
export interface EsDescribeDomainAutoTunesResponse {
  /**
   * @schema EsDescribeDomainAutoTunesResponse#AutoTunes
   */
  readonly autoTunes?: EsAutoTune[];

  /**
   * @schema EsDescribeDomainAutoTunesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeDomainAutoTunesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeDomainAutoTunesResponse(obj: EsDescribeDomainAutoTunesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoTunes': obj.autoTunes?.map(y => toJson_EsAutoTune(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchDomainRequest
 */
export interface EsDescribeElasticsearchDomainRequest {
  /**
   * @schema EsDescribeElasticsearchDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsDescribeElasticsearchDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchDomainRequest(obj: EsDescribeElasticsearchDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchDomainResponse
 */
export interface EsDescribeElasticsearchDomainResponse {
  /**
   * @schema EsDescribeElasticsearchDomainResponse#DomainStatus
   */
  readonly domainStatus?: EsElasticsearchDomainStatus;

}

/**
 * Converts an object of type 'EsDescribeElasticsearchDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchDomainResponse(obj: EsDescribeElasticsearchDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatus': toJson_EsElasticsearchDomainStatus(obj.domainStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchDomainConfigRequest
 */
export interface EsDescribeElasticsearchDomainConfigRequest {
  /**
   * @schema EsDescribeElasticsearchDomainConfigRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsDescribeElasticsearchDomainConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchDomainConfigRequest(obj: EsDescribeElasticsearchDomainConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchDomainConfigResponse
 */
export interface EsDescribeElasticsearchDomainConfigResponse {
  /**
   * @schema EsDescribeElasticsearchDomainConfigResponse#DomainConfig
   */
  readonly domainConfig?: EsElasticsearchDomainConfig;

}

/**
 * Converts an object of type 'EsDescribeElasticsearchDomainConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchDomainConfigResponse(obj: EsDescribeElasticsearchDomainConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainConfig': toJson_EsElasticsearchDomainConfig(obj.domainConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchDomainsRequest
 */
export interface EsDescribeElasticsearchDomainsRequest {
  /**
   * @schema EsDescribeElasticsearchDomainsRequest#DomainNames
   */
  readonly domainNames?: string[];

}

/**
 * Converts an object of type 'EsDescribeElasticsearchDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchDomainsRequest(obj: EsDescribeElasticsearchDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainNames': obj.domainNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchDomainsResponse
 */
export interface EsDescribeElasticsearchDomainsResponse {
  /**
   * @schema EsDescribeElasticsearchDomainsResponse#DomainStatusList
   */
  readonly domainStatusList?: EsElasticsearchDomainStatus[];

}

/**
 * Converts an object of type 'EsDescribeElasticsearchDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchDomainsResponse(obj: EsDescribeElasticsearchDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatusList': obj.domainStatusList?.map(y => toJson_EsElasticsearchDomainStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest
 */
export interface EsDescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

}

/**
 * Converts an object of type 'EsDescribeElasticsearchInstanceTypeLimitsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchInstanceTypeLimitsRequest(obj: EsDescribeElasticsearchInstanceTypeLimitsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'InstanceType': obj.instanceType,
    'ElasticsearchVersion': obj.elasticsearchVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeElasticsearchInstanceTypeLimitsResponse
 */
export interface EsDescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * @schema EsDescribeElasticsearchInstanceTypeLimitsResponse#LimitsByRole
   */
  readonly limitsByRole?: { [key: string]: EsLimits };

}

/**
 * Converts an object of type 'EsDescribeElasticsearchInstanceTypeLimitsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeElasticsearchInstanceTypeLimitsResponse(obj: EsDescribeElasticsearchInstanceTypeLimitsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LimitsByRole': ((obj.limitsByRole) === undefined) ? undefined : (Object.entries(obj.limitsByRole).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_EsLimits(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest
 */
export interface EsDescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest#Filters
   */
  readonly filters?: EsFilter[];

  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeInboundCrossClusterSearchConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeInboundCrossClusterSearchConnectionsRequest(obj: EsDescribeInboundCrossClusterSearchConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_EsFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeInboundCrossClusterSearchConnectionsResponse
 */
export interface EsDescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsResponse#CrossClusterSearchConnections
   */
  readonly crossClusterSearchConnections?: EsInboundCrossClusterSearchConnection[];

  /**
   * @schema EsDescribeInboundCrossClusterSearchConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeInboundCrossClusterSearchConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeInboundCrossClusterSearchConnectionsResponse(obj: EsDescribeInboundCrossClusterSearchConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnections': obj.crossClusterSearchConnections?.map(y => toJson_EsInboundCrossClusterSearchConnection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest
 */
export interface EsDescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest#Filters
   */
  readonly filters?: EsFilter[];

  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeOutboundCrossClusterSearchConnectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeOutboundCrossClusterSearchConnectionsRequest(obj: EsDescribeOutboundCrossClusterSearchConnectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_EsFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeOutboundCrossClusterSearchConnectionsResponse
 */
export interface EsDescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsResponse#CrossClusterSearchConnections
   */
  readonly crossClusterSearchConnections?: EsOutboundCrossClusterSearchConnection[];

  /**
   * @schema EsDescribeOutboundCrossClusterSearchConnectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeOutboundCrossClusterSearchConnectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeOutboundCrossClusterSearchConnectionsResponse(obj: EsDescribeOutboundCrossClusterSearchConnectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnections': obj.crossClusterSearchConnections?.map(y => toJson_EsOutboundCrossClusterSearchConnection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribePackagesRequest
 */
export interface EsDescribePackagesRequest {
  /**
   * @schema EsDescribePackagesRequest#Filters
   */
  readonly filters?: EsDescribePackagesFilter[];

  /**
   * @schema EsDescribePackagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribePackagesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribePackagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribePackagesRequest(obj: EsDescribePackagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_EsDescribePackagesFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribePackagesResponse
 */
export interface EsDescribePackagesResponse {
  /**
   * @schema EsDescribePackagesResponse#PackageDetailsList
   */
  readonly packageDetailsList?: EsPackageDetails[];

  /**
   * @schema EsDescribePackagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribePackagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribePackagesResponse(obj: EsDescribePackagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageDetailsList': obj.packageDetailsList?.map(y => toJson_EsPackageDetails(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest
 */
export interface EsDescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeReservedElasticsearchInstanceOfferingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeReservedElasticsearchInstanceOfferingsRequest(obj: EsDescribeReservedElasticsearchInstanceOfferingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedElasticsearchInstanceOfferingId': obj.reservedElasticsearchInstanceOfferingId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeReservedElasticsearchInstanceOfferingsResponse
 */
export interface EsDescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstanceOfferingsResponse#ReservedElasticsearchInstanceOfferings
   */
  readonly reservedElasticsearchInstanceOfferings?: EsReservedElasticsearchInstanceOffering[];

}

/**
 * Converts an object of type 'EsDescribeReservedElasticsearchInstanceOfferingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeReservedElasticsearchInstanceOfferingsResponse(obj: EsDescribeReservedElasticsearchInstanceOfferingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ReservedElasticsearchInstanceOfferings': obj.reservedElasticsearchInstanceOfferings?.map(y => toJson_EsReservedElasticsearchInstanceOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeReservedElasticsearchInstancesRequest
 */
export interface EsDescribeReservedElasticsearchInstancesRequest {
  /**
   * @schema EsDescribeReservedElasticsearchInstancesRequest#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsDescribeReservedElasticsearchInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsDescribeReservedElasticsearchInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeReservedElasticsearchInstancesRequest(obj: EsDescribeReservedElasticsearchInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedElasticsearchInstanceId': obj.reservedElasticsearchInstanceId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribeReservedElasticsearchInstancesResponse
 */
export interface EsDescribeReservedElasticsearchInstancesResponse {
  /**
   * @schema EsDescribeReservedElasticsearchInstancesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EsDescribeReservedElasticsearchInstancesResponse#ReservedElasticsearchInstances
   */
  readonly reservedElasticsearchInstances?: EsReservedElasticsearchInstance[];

}

/**
 * Converts an object of type 'EsDescribeReservedElasticsearchInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribeReservedElasticsearchInstancesResponse(obj: EsDescribeReservedElasticsearchInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ReservedElasticsearchInstances': obj.reservedElasticsearchInstances?.map(y => toJson_EsReservedElasticsearchInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDissociatePackageRequest
 */
export interface EsDissociatePackageRequest {
  /**
   * @schema EsDissociatePackageRequest#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsDissociatePackageRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsDissociatePackageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDissociatePackageRequest(obj: EsDissociatePackageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDissociatePackageResponse
 */
export interface EsDissociatePackageResponse {
  /**
   * @schema EsDissociatePackageResponse#DomainPackageDetails
   */
  readonly domainPackageDetails?: EsDomainPackageDetails;

}

/**
 * Converts an object of type 'EsDissociatePackageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDissociatePackageResponse(obj: EsDissociatePackageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainPackageDetails': toJson_EsDomainPackageDetails(obj.domainPackageDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetCompatibleElasticsearchVersionsRequest
 */
export interface EsGetCompatibleElasticsearchVersionsRequest {
  /**
   * @schema EsGetCompatibleElasticsearchVersionsRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsGetCompatibleElasticsearchVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetCompatibleElasticsearchVersionsRequest(obj: EsGetCompatibleElasticsearchVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetCompatibleElasticsearchVersionsResponse
 */
export interface EsGetCompatibleElasticsearchVersionsResponse {
  /**
   * @schema EsGetCompatibleElasticsearchVersionsResponse#CompatibleElasticsearchVersions
   */
  readonly compatibleElasticsearchVersions?: EsCompatibleVersionsMap[];

}

/**
 * Converts an object of type 'EsGetCompatibleElasticsearchVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetCompatibleElasticsearchVersionsResponse(obj: EsGetCompatibleElasticsearchVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompatibleElasticsearchVersions': obj.compatibleElasticsearchVersions?.map(y => toJson_EsCompatibleVersionsMap(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetPackageVersionHistoryRequest
 */
export interface EsGetPackageVersionHistoryRequest {
  /**
   * @schema EsGetPackageVersionHistoryRequest#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsGetPackageVersionHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsGetPackageVersionHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsGetPackageVersionHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetPackageVersionHistoryRequest(obj: EsGetPackageVersionHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetPackageVersionHistoryResponse
 */
export interface EsGetPackageVersionHistoryResponse {
  /**
   * @schema EsGetPackageVersionHistoryResponse#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsGetPackageVersionHistoryResponse#PackageVersionHistoryList
   */
  readonly packageVersionHistoryList?: EsPackageVersionHistory[];

  /**
   * @schema EsGetPackageVersionHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsGetPackageVersionHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetPackageVersionHistoryResponse(obj: EsGetPackageVersionHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'PackageVersionHistoryList': obj.packageVersionHistoryList?.map(y => toJson_EsPackageVersionHistory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetUpgradeHistoryRequest
 */
export interface EsGetUpgradeHistoryRequest {
  /**
   * @schema EsGetUpgradeHistoryRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsGetUpgradeHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsGetUpgradeHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsGetUpgradeHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetUpgradeHistoryRequest(obj: EsGetUpgradeHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetUpgradeHistoryResponse
 */
export interface EsGetUpgradeHistoryResponse {
  /**
   * @schema EsGetUpgradeHistoryResponse#UpgradeHistories
   */
  readonly upgradeHistories?: EsUpgradeHistory[];

  /**
   * @schema EsGetUpgradeHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsGetUpgradeHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetUpgradeHistoryResponse(obj: EsGetUpgradeHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpgradeHistories': obj.upgradeHistories?.map(y => toJson_EsUpgradeHistory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetUpgradeStatusRequest
 */
export interface EsGetUpgradeStatusRequest {
  /**
   * @schema EsGetUpgradeStatusRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsGetUpgradeStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetUpgradeStatusRequest(obj: EsGetUpgradeStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsGetUpgradeStatusResponse
 */
export interface EsGetUpgradeStatusResponse {
  /**
   * @schema EsGetUpgradeStatusResponse#UpgradeStep
   */
  readonly upgradeStep?: string;

  /**
   * @schema EsGetUpgradeStatusResponse#StepStatus
   */
  readonly stepStatus?: string;

  /**
   * @schema EsGetUpgradeStatusResponse#UpgradeName
   */
  readonly upgradeName?: string;

}

/**
 * Converts an object of type 'EsGetUpgradeStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsGetUpgradeStatusResponse(obj: EsGetUpgradeStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpgradeStep': obj.upgradeStep,
    'StepStatus': obj.stepStatus,
    'UpgradeName': obj.upgradeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListDomainNamesResponse
 */
export interface EsListDomainNamesResponse {
  /**
   * @schema EsListDomainNamesResponse#DomainNames
   */
  readonly domainNames?: EsDomainInfo[];

}

/**
 * Converts an object of type 'EsListDomainNamesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListDomainNamesResponse(obj: EsListDomainNamesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainNames': obj.domainNames?.map(y => toJson_EsDomainInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListDomainsForPackageRequest
 */
export interface EsListDomainsForPackageRequest {
  /**
   * @schema EsListDomainsForPackageRequest#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsListDomainsForPackageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListDomainsForPackageRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListDomainsForPackageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListDomainsForPackageRequest(obj: EsListDomainsForPackageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListDomainsForPackageResponse
 */
export interface EsListDomainsForPackageResponse {
  /**
   * @schema EsListDomainsForPackageResponse#DomainPackageDetailsList
   */
  readonly domainPackageDetailsList?: EsDomainPackageDetails[];

  /**
   * @schema EsListDomainsForPackageResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListDomainsForPackageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListDomainsForPackageResponse(obj: EsListDomainsForPackageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainPackageDetailsList': obj.domainPackageDetailsList?.map(y => toJson_EsDomainPackageDetails(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListElasticsearchInstanceTypesRequest
 */
export interface EsListElasticsearchInstanceTypesRequest {
  /**
   * @schema EsListElasticsearchInstanceTypesRequest#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema EsListElasticsearchInstanceTypesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsListElasticsearchInstanceTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListElasticsearchInstanceTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListElasticsearchInstanceTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListElasticsearchInstanceTypesRequest(obj: EsListElasticsearchInstanceTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticsearchVersion': obj.elasticsearchVersion,
    'DomainName': obj.domainName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListElasticsearchInstanceTypesResponse
 */
export interface EsListElasticsearchInstanceTypesResponse {
  /**
   * @schema EsListElasticsearchInstanceTypesResponse#ElasticsearchInstanceTypes
   */
  readonly elasticsearchInstanceTypes?: string[];

  /**
   * @schema EsListElasticsearchInstanceTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListElasticsearchInstanceTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListElasticsearchInstanceTypesResponse(obj: EsListElasticsearchInstanceTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticsearchInstanceTypes': obj.elasticsearchInstanceTypes?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListElasticsearchVersionsRequest
 */
export interface EsListElasticsearchVersionsRequest {
  /**
   * @schema EsListElasticsearchVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListElasticsearchVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListElasticsearchVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListElasticsearchVersionsRequest(obj: EsListElasticsearchVersionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema EsListElasticsearchVersionsResponse
 */
export interface EsListElasticsearchVersionsResponse {
  /**
   * @schema EsListElasticsearchVersionsResponse#ElasticsearchVersions
   */
  readonly elasticsearchVersions?: string[];

  /**
   * @schema EsListElasticsearchVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListElasticsearchVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListElasticsearchVersionsResponse(obj: EsListElasticsearchVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticsearchVersions': obj.elasticsearchVersions?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListPackagesForDomainRequest
 */
export interface EsListPackagesForDomainRequest {
  /**
   * @schema EsListPackagesForDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsListPackagesForDomainRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EsListPackagesForDomainRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListPackagesForDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListPackagesForDomainRequest(obj: EsListPackagesForDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListPackagesForDomainResponse
 */
export interface EsListPackagesForDomainResponse {
  /**
   * @schema EsListPackagesForDomainResponse#DomainPackageDetailsList
   */
  readonly domainPackageDetailsList?: EsDomainPackageDetails[];

  /**
   * @schema EsListPackagesForDomainResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EsListPackagesForDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListPackagesForDomainResponse(obj: EsListPackagesForDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainPackageDetailsList': obj.domainPackageDetailsList?.map(y => toJson_EsDomainPackageDetails(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListTagsRequest
 */
export interface EsListTagsRequest {
  /**
   * @schema EsListTagsRequest#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'EsListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListTagsRequest(obj: EsListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsListTagsResponse
 */
export interface EsListTagsResponse {
  /**
   * @schema EsListTagsResponse#TagList
   */
  readonly tagList?: EsTag[];

}

/**
 * Converts an object of type 'EsListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsListTagsResponse(obj: EsListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_EsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest
 */
export interface EsPurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest#ReservationName
   */
  readonly reservationName?: string;

  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingRequest#InstanceCount
   */
  readonly instanceCount?: number;

}

/**
 * Converts an object of type 'EsPurchaseReservedElasticsearchInstanceOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsPurchaseReservedElasticsearchInstanceOfferingRequest(obj: EsPurchaseReservedElasticsearchInstanceOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedElasticsearchInstanceOfferingId': obj.reservedElasticsearchInstanceOfferingId,
    'ReservationName': obj.reservationName,
    'InstanceCount': obj.instanceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsPurchaseReservedElasticsearchInstanceOfferingResponse
 */
export interface EsPurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingResponse#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema EsPurchaseReservedElasticsearchInstanceOfferingResponse#ReservationName
   */
  readonly reservationName?: string;

}

/**
 * Converts an object of type 'EsPurchaseReservedElasticsearchInstanceOfferingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsPurchaseReservedElasticsearchInstanceOfferingResponse(obj: EsPurchaseReservedElasticsearchInstanceOfferingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedElasticsearchInstanceId': obj.reservedElasticsearchInstanceId,
    'ReservationName': obj.reservationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsRejectInboundCrossClusterSearchConnectionRequest
 */
export interface EsRejectInboundCrossClusterSearchConnectionRequest {
  /**
   * @schema EsRejectInboundCrossClusterSearchConnectionRequest#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

}

/**
 * Converts an object of type 'EsRejectInboundCrossClusterSearchConnectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsRejectInboundCrossClusterSearchConnectionRequest(obj: EsRejectInboundCrossClusterSearchConnectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsRejectInboundCrossClusterSearchConnectionResponse
 */
export interface EsRejectInboundCrossClusterSearchConnectionResponse {
  /**
   * @schema EsRejectInboundCrossClusterSearchConnectionResponse#CrossClusterSearchConnection
   */
  readonly crossClusterSearchConnection?: EsInboundCrossClusterSearchConnection;

}

/**
 * Converts an object of type 'EsRejectInboundCrossClusterSearchConnectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsRejectInboundCrossClusterSearchConnectionResponse(obj: EsRejectInboundCrossClusterSearchConnectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrossClusterSearchConnection': toJson_EsInboundCrossClusterSearchConnection(obj.crossClusterSearchConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsRemoveTagsRequest
 */
export interface EsRemoveTagsRequest {
  /**
   * @schema EsRemoveTagsRequest#ARN
   */
  readonly arn?: string;

  /**
   * @schema EsRemoveTagsRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'EsRemoveTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsRemoveTagsRequest(obj: EsRemoveTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsStartElasticsearchServiceSoftwareUpdateRequest
 */
export interface EsStartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @schema EsStartElasticsearchServiceSoftwareUpdateRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsStartElasticsearchServiceSoftwareUpdateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsStartElasticsearchServiceSoftwareUpdateRequest(obj: EsStartElasticsearchServiceSoftwareUpdateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsStartElasticsearchServiceSoftwareUpdateResponse
 */
export interface EsStartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @schema EsStartElasticsearchServiceSoftwareUpdateResponse#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: EsServiceSoftwareOptions;

}

/**
 * Converts an object of type 'EsStartElasticsearchServiceSoftwareUpdateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsStartElasticsearchServiceSoftwareUpdateResponse(obj: EsStartElasticsearchServiceSoftwareUpdateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSoftwareOptions': toJson_EsServiceSoftwareOptions(obj.serviceSoftwareOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpdateElasticsearchDomainConfigRequest
 */
export interface EsUpdateElasticsearchDomainConfigRequest {
  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfig;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#EBSOptions
   */
  readonly ebsOptions?: EsebsOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#VPCOptions
   */
  readonly vpcOptions?: EsvpcOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptionsInput;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptions;

  /**
   * @schema EsUpdateElasticsearchDomainConfigRequest#AutoTuneOptions
   */
  readonly autoTuneOptions?: EsAutoTuneOptions;

}

/**
 * Converts an object of type 'EsUpdateElasticsearchDomainConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpdateElasticsearchDomainConfigRequest(obj: EsUpdateElasticsearchDomainConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ElasticsearchClusterConfig': toJson_EsElasticsearchClusterConfig(obj.elasticsearchClusterConfig),
    'EBSOptions': toJson_EsebsOptions(obj.ebsOptions),
    'SnapshotOptions': toJson_EsSnapshotOptions(obj.snapshotOptions),
    'VPCOptions': toJson_EsvpcOptions(obj.vpcOptions),
    'CognitoOptions': toJson_EsCognitoOptions(obj.cognitoOptions),
    'AdvancedOptions': ((obj.advancedOptions) === undefined) ? undefined : (Object.entries(obj.advancedOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AccessPolicies': obj.accessPolicies,
    'LogPublishingOptions': ((obj.logPublishingOptions) === undefined) ? undefined : (Object.entries(obj.logPublishingOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_EsLogPublishingOption(i[1]) }), {})),
    'DomainEndpointOptions': toJson_EsDomainEndpointOptions(obj.domainEndpointOptions),
    'AdvancedSecurityOptions': toJson_EsAdvancedSecurityOptionsInput(obj.advancedSecurityOptions),
    'NodeToNodeEncryptionOptions': toJson_EsNodeToNodeEncryptionOptions(obj.nodeToNodeEncryptionOptions),
    'EncryptionAtRestOptions': toJson_EsEncryptionAtRestOptions(obj.encryptionAtRestOptions),
    'AutoTuneOptions': toJson_EsAutoTuneOptions(obj.autoTuneOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpdateElasticsearchDomainConfigResponse
 */
export interface EsUpdateElasticsearchDomainConfigResponse {
  /**
   * @schema EsUpdateElasticsearchDomainConfigResponse#DomainConfig
   */
  readonly domainConfig?: EsElasticsearchDomainConfig;

}

/**
 * Converts an object of type 'EsUpdateElasticsearchDomainConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpdateElasticsearchDomainConfigResponse(obj: EsUpdateElasticsearchDomainConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainConfig': toJson_EsElasticsearchDomainConfig(obj.domainConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpdatePackageRequest
 */
export interface EsUpdatePackageRequest {
  /**
   * @schema EsUpdatePackageRequest#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsUpdatePackageRequest#PackageSource
   */
  readonly packageSource?: EsPackageSource;

  /**
   * @schema EsUpdatePackageRequest#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema EsUpdatePackageRequest#CommitMessage
   */
  readonly commitMessage?: string;

}

/**
 * Converts an object of type 'EsUpdatePackageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpdatePackageRequest(obj: EsUpdatePackageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'PackageSource': toJson_EsPackageSource(obj.packageSource),
    'PackageDescription': obj.packageDescription,
    'CommitMessage': obj.commitMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpdatePackageResponse
 */
export interface EsUpdatePackageResponse {
  /**
   * @schema EsUpdatePackageResponse#PackageDetails
   */
  readonly packageDetails?: EsPackageDetails;

}

/**
 * Converts an object of type 'EsUpdatePackageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpdatePackageResponse(obj: EsUpdatePackageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageDetails': toJson_EsPackageDetails(obj.packageDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpgradeElasticsearchDomainRequest
 */
export interface EsUpgradeElasticsearchDomainRequest {
  /**
   * @schema EsUpgradeElasticsearchDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsUpgradeElasticsearchDomainRequest#TargetVersion
   */
  readonly targetVersion?: string;

  /**
   * @schema EsUpgradeElasticsearchDomainRequest#PerformCheckOnly
   */
  readonly performCheckOnly?: boolean;

}

/**
 * Converts an object of type 'EsUpgradeElasticsearchDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpgradeElasticsearchDomainRequest(obj: EsUpgradeElasticsearchDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'TargetVersion': obj.targetVersion,
    'PerformCheckOnly': obj.performCheckOnly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpgradeElasticsearchDomainResponse
 */
export interface EsUpgradeElasticsearchDomainResponse {
  /**
   * @schema EsUpgradeElasticsearchDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsUpgradeElasticsearchDomainResponse#TargetVersion
   */
  readonly targetVersion?: string;

  /**
   * @schema EsUpgradeElasticsearchDomainResponse#PerformCheckOnly
   */
  readonly performCheckOnly?: boolean;

}

/**
 * Converts an object of type 'EsUpgradeElasticsearchDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpgradeElasticsearchDomainResponse(obj: EsUpgradeElasticsearchDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'TargetVersion': obj.targetVersion,
    'PerformCheckOnly': obj.performCheckOnly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsInboundCrossClusterSearchConnection
 */
export interface EsInboundCrossClusterSearchConnection {
  /**
   * @schema EsInboundCrossClusterSearchConnection#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsInboundCrossClusterSearchConnection#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsInboundCrossClusterSearchConnection#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

  /**
   * @schema EsInboundCrossClusterSearchConnection#ConnectionStatus
   */
  readonly connectionStatus?: EsInboundCrossClusterSearchConnectionStatus;

}

/**
 * Converts an object of type 'EsInboundCrossClusterSearchConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsInboundCrossClusterSearchConnection(obj: EsInboundCrossClusterSearchConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDomainInfo': toJson_EsDomainInformation(obj.sourceDomainInfo),
    'DestinationDomainInfo': toJson_EsDomainInformation(obj.destinationDomainInfo),
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
    'ConnectionStatus': toJson_EsInboundCrossClusterSearchConnectionStatus(obj.connectionStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsTag
 */
export interface EsTag {
  /**
   * @schema EsTag#Key
   */
  readonly key?: string;

  /**
   * @schema EsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsTag(obj: EsTag | undefined): Record<string, any> | undefined {
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
 * @schema EsDomainPackageDetails
 */
export interface EsDomainPackageDetails {
  /**
   * @schema EsDomainPackageDetails#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsDomainPackageDetails#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema EsDomainPackageDetails#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema EsDomainPackageDetails#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema EsDomainPackageDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsDomainPackageDetails#DomainPackageStatus
   */
  readonly domainPackageStatus?: string;

  /**
   * @schema EsDomainPackageDetails#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema EsDomainPackageDetails#ReferencePath
   */
  readonly referencePath?: string;

  /**
   * @schema EsDomainPackageDetails#ErrorDetails
   */
  readonly errorDetails?: EsErrorDetails;

}

/**
 * Converts an object of type 'EsDomainPackageDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDomainPackageDetails(obj: EsDomainPackageDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'PackageName': obj.packageName,
    'PackageType': obj.packageType,
    'LastUpdated': obj.lastUpdated,
    'DomainName': obj.domainName,
    'DomainPackageStatus': obj.domainPackageStatus,
    'PackageVersion': obj.packageVersion,
    'ReferencePath': obj.referencePath,
    'ErrorDetails': toJson_EsErrorDetails(obj.errorDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsServiceSoftwareOptions
 */
export interface EsServiceSoftwareOptions {
  /**
   * @schema EsServiceSoftwareOptions#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema EsServiceSoftwareOptions#NewVersion
   */
  readonly newVersion?: string;

  /**
   * @schema EsServiceSoftwareOptions#UpdateAvailable
   */
  readonly updateAvailable?: boolean;

  /**
   * @schema EsServiceSoftwareOptions#Cancellable
   */
  readonly cancellable?: boolean;

  /**
   * @schema EsServiceSoftwareOptions#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema EsServiceSoftwareOptions#Description
   */
  readonly description?: string;

  /**
   * @schema EsServiceSoftwareOptions#AutomatedUpdateDate
   */
  readonly automatedUpdateDate?: string;

  /**
   * @schema EsServiceSoftwareOptions#OptionalDeployment
   */
  readonly optionalDeployment?: boolean;

}

/**
 * Converts an object of type 'EsServiceSoftwareOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsServiceSoftwareOptions(obj: EsServiceSoftwareOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CurrentVersion': obj.currentVersion,
    'NewVersion': obj.newVersion,
    'UpdateAvailable': obj.updateAvailable,
    'Cancellable': obj.cancellable,
    'UpdateStatus': obj.updateStatus,
    'Description': obj.description,
    'AutomatedUpdateDate': obj.automatedUpdateDate,
    'OptionalDeployment': obj.optionalDeployment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsElasticsearchClusterConfig
 */
export interface EsElasticsearchClusterConfig {
  /**
   * @schema EsElasticsearchClusterConfig#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema EsElasticsearchClusterConfig#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema EsElasticsearchClusterConfig#DedicatedMasterEnabled
   */
  readonly dedicatedMasterEnabled?: boolean;

  /**
   * @schema EsElasticsearchClusterConfig#ZoneAwarenessEnabled
   */
  readonly zoneAwarenessEnabled?: boolean;

  /**
   * @schema EsElasticsearchClusterConfig#ZoneAwarenessConfig
   */
  readonly zoneAwarenessConfig?: EsZoneAwarenessConfig;

  /**
   * @schema EsElasticsearchClusterConfig#DedicatedMasterType
   */
  readonly dedicatedMasterType?: string;

  /**
   * @schema EsElasticsearchClusterConfig#DedicatedMasterCount
   */
  readonly dedicatedMasterCount?: number;

  /**
   * @schema EsElasticsearchClusterConfig#WarmEnabled
   */
  readonly warmEnabled?: boolean;

  /**
   * @schema EsElasticsearchClusterConfig#WarmType
   */
  readonly warmType?: string;

  /**
   * @schema EsElasticsearchClusterConfig#WarmCount
   */
  readonly warmCount?: number;

  /**
   * @schema EsElasticsearchClusterConfig#ColdStorageOptions
   */
  readonly coldStorageOptions?: EsColdStorageOptions;

}

/**
 * Converts an object of type 'EsElasticsearchClusterConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsElasticsearchClusterConfig(obj: EsElasticsearchClusterConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceType': obj.instanceType,
    'InstanceCount': obj.instanceCount,
    'DedicatedMasterEnabled': obj.dedicatedMasterEnabled,
    'ZoneAwarenessEnabled': obj.zoneAwarenessEnabled,
    'ZoneAwarenessConfig': toJson_EsZoneAwarenessConfig(obj.zoneAwarenessConfig),
    'DedicatedMasterType': obj.dedicatedMasterType,
    'DedicatedMasterCount': obj.dedicatedMasterCount,
    'WarmEnabled': obj.warmEnabled,
    'WarmType': obj.warmType,
    'WarmCount': obj.warmCount,
    'ColdStorageOptions': toJson_EsColdStorageOptions(obj.coldStorageOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsebsOptions
 */
export interface EsebsOptions {
  /**
   * @schema EsebsOptions#EBSEnabled
   */
  readonly ebsEnabled?: boolean;

  /**
   * @schema EsebsOptions#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema EsebsOptions#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EsebsOptions#Iops
   */
  readonly iops?: number;

}

/**
 * Converts an object of type 'EsebsOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsebsOptions(obj: EsebsOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EBSEnabled': obj.ebsEnabled,
    'VolumeType': obj.volumeType,
    'VolumeSize': obj.volumeSize,
    'Iops': obj.iops,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsSnapshotOptions
 */
export interface EsSnapshotOptions {
  /**
   * @schema EsSnapshotOptions#AutomatedSnapshotStartHour
   */
  readonly automatedSnapshotStartHour?: number;

}

/**
 * Converts an object of type 'EsSnapshotOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsSnapshotOptions(obj: EsSnapshotOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomatedSnapshotStartHour': obj.automatedSnapshotStartHour,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsvpcOptions
 */
export interface EsvpcOptions {
  /**
   * @schema EsvpcOptions#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EsvpcOptions#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'EsvpcOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsvpcOptions(obj: EsvpcOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCognitoOptions
 */
export interface EsCognitoOptions {
  /**
   * @schema EsCognitoOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsCognitoOptions#UserPoolId
   */
  readonly userPoolId?: string;

  /**
   * @schema EsCognitoOptions#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema EsCognitoOptions#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'EsCognitoOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCognitoOptions(obj: EsCognitoOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'UserPoolId': obj.userPoolId,
    'IdentityPoolId': obj.identityPoolId,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsEncryptionAtRestOptions
 */
export interface EsEncryptionAtRestOptions {
  /**
   * @schema EsEncryptionAtRestOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsEncryptionAtRestOptions#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'EsEncryptionAtRestOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsEncryptionAtRestOptions(obj: EsEncryptionAtRestOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsNodeToNodeEncryptionOptions
 */
export interface EsNodeToNodeEncryptionOptions {
  /**
   * @schema EsNodeToNodeEncryptionOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'EsNodeToNodeEncryptionOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsNodeToNodeEncryptionOptions(obj: EsNodeToNodeEncryptionOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsLogPublishingOption
 */
export interface EsLogPublishingOption {
  /**
   * @schema EsLogPublishingOption#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema EsLogPublishingOption#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'EsLogPublishingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsLogPublishingOption(obj: EsLogPublishingOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDomainEndpointOptions
 */
export interface EsDomainEndpointOptions {
  /**
   * @schema EsDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema EsDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

  /**
   * @schema EsDomainEndpointOptions#CustomEndpointEnabled
   */
  readonly customEndpointEnabled?: boolean;

  /**
   * @schema EsDomainEndpointOptions#CustomEndpoint
   */
  readonly customEndpoint?: string;

  /**
   * @schema EsDomainEndpointOptions#CustomEndpointCertificateArn
   */
  readonly customEndpointCertificateArn?: string;

}

/**
 * Converts an object of type 'EsDomainEndpointOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDomainEndpointOptions(obj: EsDomainEndpointOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnforceHTTPS': obj.enforceHttps,
    'TLSSecurityPolicy': obj.tlsSecurityPolicy,
    'CustomEndpointEnabled': obj.customEndpointEnabled,
    'CustomEndpoint': obj.customEndpoint,
    'CustomEndpointCertificateArn': obj.customEndpointCertificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAdvancedSecurityOptionsInput
 */
export interface EsAdvancedSecurityOptionsInput {
  /**
   * @schema EsAdvancedSecurityOptionsInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptionsInput#InternalUserDatabaseEnabled
   */
  readonly internalUserDatabaseEnabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptionsInput#MasterUserOptions
   */
  readonly masterUserOptions?: EsMasterUserOptions;

  /**
   * @schema EsAdvancedSecurityOptionsInput#SAMLOptions
   */
  readonly samlOptions?: EssamlOptionsInput;

}

/**
 * Converts an object of type 'EsAdvancedSecurityOptionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAdvancedSecurityOptionsInput(obj: EsAdvancedSecurityOptionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'InternalUserDatabaseEnabled': obj.internalUserDatabaseEnabled,
    'MasterUserOptions': toJson_EsMasterUserOptions(obj.masterUserOptions),
    'SAMLOptions': toJson_EssamlOptionsInput(obj.samlOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneOptionsInput
 */
export interface EsAutoTuneOptionsInput {
  /**
   * @schema EsAutoTuneOptionsInput#DesiredState
   */
  readonly desiredState?: string;

  /**
   * @schema EsAutoTuneOptionsInput#MaintenanceSchedules
   */
  readonly maintenanceSchedules?: EsAutoTuneMaintenanceSchedule[];

}

/**
 * Converts an object of type 'EsAutoTuneOptionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneOptionsInput(obj: EsAutoTuneOptionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DesiredState': obj.desiredState,
    'MaintenanceSchedules': obj.maintenanceSchedules?.map(y => toJson_EsAutoTuneMaintenanceSchedule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsElasticsearchDomainStatus
 */
export interface EsElasticsearchDomainStatus {
  /**
   * @schema EsElasticsearchDomainStatus#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema EsElasticsearchDomainStatus#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsElasticsearchDomainStatus#ARN
   */
  readonly arn?: string;

  /**
   * @schema EsElasticsearchDomainStatus#Created
   */
  readonly created?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema EsElasticsearchDomainStatus#Endpoints
   */
  readonly endpoints?: { [key: string]: string };

  /**
   * @schema EsElasticsearchDomainStatus#Processing
   */
  readonly processing?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#UpgradeProcessing
   */
  readonly upgradeProcessing?: boolean;

  /**
   * @schema EsElasticsearchDomainStatus#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: string;

  /**
   * @schema EsElasticsearchDomainStatus#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfig;

  /**
   * @schema EsElasticsearchDomainStatus#EBSOptions
   */
  readonly ebsOptions?: EsebsOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AccessPolicies
   */
  readonly accessPolicies?: string;

  /**
   * @schema EsElasticsearchDomainStatus#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptions;

  /**
   * @schema EsElasticsearchDomainStatus#VPCOptions
   */
  readonly vpcOptions?: EsvpcDerivedInfo;

  /**
   * @schema EsElasticsearchDomainStatus#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptions;

  /**
   * @schema EsElasticsearchDomainStatus#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptions;

  /**
   * @schema EsElasticsearchDomainStatus#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AdvancedOptions
   */
  readonly advancedOptions?: { [key: string]: string };

  /**
   * @schema EsElasticsearchDomainStatus#LogPublishingOptions
   */
  readonly logPublishingOptions?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsElasticsearchDomainStatus#ServiceSoftwareOptions
   */
  readonly serviceSoftwareOptions?: EsServiceSoftwareOptions;

  /**
   * @schema EsElasticsearchDomainStatus#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptions;

  /**
   * @schema EsElasticsearchDomainStatus#AutoTuneOptions
   */
  readonly autoTuneOptions?: EsAutoTuneOptionsOutput;

}

/**
 * Converts an object of type 'EsElasticsearchDomainStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsElasticsearchDomainStatus(obj: EsElasticsearchDomainStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainId': obj.domainId,
    'DomainName': obj.domainName,
    'ARN': obj.arn,
    'Created': obj.created,
    'Deleted': obj.deleted,
    'Endpoint': obj.endpoint,
    'Endpoints': ((obj.endpoints) === undefined) ? undefined : (Object.entries(obj.endpoints).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Processing': obj.processing,
    'UpgradeProcessing': obj.upgradeProcessing,
    'ElasticsearchVersion': obj.elasticsearchVersion,
    'ElasticsearchClusterConfig': toJson_EsElasticsearchClusterConfig(obj.elasticsearchClusterConfig),
    'EBSOptions': toJson_EsebsOptions(obj.ebsOptions),
    'AccessPolicies': obj.accessPolicies,
    'SnapshotOptions': toJson_EsSnapshotOptions(obj.snapshotOptions),
    'VPCOptions': toJson_EsvpcDerivedInfo(obj.vpcOptions),
    'CognitoOptions': toJson_EsCognitoOptions(obj.cognitoOptions),
    'EncryptionAtRestOptions': toJson_EsEncryptionAtRestOptions(obj.encryptionAtRestOptions),
    'NodeToNodeEncryptionOptions': toJson_EsNodeToNodeEncryptionOptions(obj.nodeToNodeEncryptionOptions),
    'AdvancedOptions': ((obj.advancedOptions) === undefined) ? undefined : (Object.entries(obj.advancedOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'LogPublishingOptions': ((obj.logPublishingOptions) === undefined) ? undefined : (Object.entries(obj.logPublishingOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_EsLogPublishingOption(i[1]) }), {})),
    'ServiceSoftwareOptions': toJson_EsServiceSoftwareOptions(obj.serviceSoftwareOptions),
    'DomainEndpointOptions': toJson_EsDomainEndpointOptions(obj.domainEndpointOptions),
    'AdvancedSecurityOptions': toJson_EsAdvancedSecurityOptions(obj.advancedSecurityOptions),
    'AutoTuneOptions': toJson_EsAutoTuneOptionsOutput(obj.autoTuneOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDomainInformation
 */
export interface EsDomainInformation {
  /**
   * @schema EsDomainInformation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema EsDomainInformation#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema EsDomainInformation#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'EsDomainInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDomainInformation(obj: EsDomainInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwnerId': obj.ownerId,
    'DomainName': obj.domainName,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsOutboundCrossClusterSearchConnectionStatus
 */
export interface EsOutboundCrossClusterSearchConnectionStatus {
  /**
   * @schema EsOutboundCrossClusterSearchConnectionStatus#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema EsOutboundCrossClusterSearchConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'EsOutboundCrossClusterSearchConnectionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsOutboundCrossClusterSearchConnectionStatus(obj: EsOutboundCrossClusterSearchConnectionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCode': obj.statusCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsPackageSource
 */
export interface EsPackageSource {
  /**
   * @schema EsPackageSource#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema EsPackageSource#S3Key
   */
  readonly s3Key?: string;

}

/**
 * Converts an object of type 'EsPackageSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsPackageSource(obj: EsPackageSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketName': obj.s3BucketName,
    'S3Key': obj.s3Key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsPackageDetails
 */
export interface EsPackageDetails {
  /**
   * @schema EsPackageDetails#PackageID
   */
  readonly packageId?: string;

  /**
   * @schema EsPackageDetails#PackageName
   */
  readonly packageName?: string;

  /**
   * @schema EsPackageDetails#PackageType
   */
  readonly packageType?: string;

  /**
   * @schema EsPackageDetails#PackageDescription
   */
  readonly packageDescription?: string;

  /**
   * @schema EsPackageDetails#PackageStatus
   */
  readonly packageStatus?: string;

  /**
   * @schema EsPackageDetails#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema EsPackageDetails#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema EsPackageDetails#AvailablePackageVersion
   */
  readonly availablePackageVersion?: string;

  /**
   * @schema EsPackageDetails#ErrorDetails
   */
  readonly errorDetails?: EsErrorDetails;

}

/**
 * Converts an object of type 'EsPackageDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsPackageDetails(obj: EsPackageDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageID': obj.packageId,
    'PackageName': obj.packageName,
    'PackageType': obj.packageType,
    'PackageDescription': obj.packageDescription,
    'PackageStatus': obj.packageStatus,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'AvailablePackageVersion': obj.availablePackageVersion,
    'ErrorDetails': toJson_EsErrorDetails(obj.errorDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsOutboundCrossClusterSearchConnection
 */
export interface EsOutboundCrossClusterSearchConnection {
  /**
   * @schema EsOutboundCrossClusterSearchConnection#SourceDomainInfo
   */
  readonly sourceDomainInfo?: EsDomainInformation;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#DestinationDomainInfo
   */
  readonly destinationDomainInfo?: EsDomainInformation;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#CrossClusterSearchConnectionId
   */
  readonly crossClusterSearchConnectionId?: string;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#ConnectionAlias
   */
  readonly connectionAlias?: string;

  /**
   * @schema EsOutboundCrossClusterSearchConnection#ConnectionStatus
   */
  readonly connectionStatus?: EsOutboundCrossClusterSearchConnectionStatus;

}

/**
 * Converts an object of type 'EsOutboundCrossClusterSearchConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsOutboundCrossClusterSearchConnection(obj: EsOutboundCrossClusterSearchConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceDomainInfo': toJson_EsDomainInformation(obj.sourceDomainInfo),
    'DestinationDomainInfo': toJson_EsDomainInformation(obj.destinationDomainInfo),
    'CrossClusterSearchConnectionId': obj.crossClusterSearchConnectionId,
    'ConnectionAlias': obj.connectionAlias,
    'ConnectionStatus': toJson_EsOutboundCrossClusterSearchConnectionStatus(obj.connectionStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTune
 */
export interface EsAutoTune {
  /**
   * @schema EsAutoTune#AutoTuneType
   */
  readonly autoTuneType?: string;

  /**
   * @schema EsAutoTune#AutoTuneDetails
   */
  readonly autoTuneDetails?: EsAutoTuneDetails;

}

/**
 * Converts an object of type 'EsAutoTune' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTune(obj: EsAutoTune | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoTuneType': obj.autoTuneType,
    'AutoTuneDetails': toJson_EsAutoTuneDetails(obj.autoTuneDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsElasticsearchDomainConfig
 */
export interface EsElasticsearchDomainConfig {
  /**
   * @schema EsElasticsearchDomainConfig#ElasticsearchVersion
   */
  readonly elasticsearchVersion?: EsElasticsearchVersionStatus;

  /**
   * @schema EsElasticsearchDomainConfig#ElasticsearchClusterConfig
   */
  readonly elasticsearchClusterConfig?: EsElasticsearchClusterConfigStatus;

  /**
   * @schema EsElasticsearchDomainConfig#EBSOptions
   */
  readonly ebsOptions?: EsebsOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AccessPolicies
   */
  readonly accessPolicies?: EsAccessPoliciesStatus;

  /**
   * @schema EsElasticsearchDomainConfig#SnapshotOptions
   */
  readonly snapshotOptions?: EsSnapshotOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#VPCOptions
   */
  readonly vpcOptions?: EsvpcDerivedInfoStatus;

  /**
   * @schema EsElasticsearchDomainConfig#CognitoOptions
   */
  readonly cognitoOptions?: EsCognitoOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#EncryptionAtRestOptions
   */
  readonly encryptionAtRestOptions?: EsEncryptionAtRestOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#NodeToNodeEncryptionOptions
   */
  readonly nodeToNodeEncryptionOptions?: EsNodeToNodeEncryptionOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AdvancedOptions
   */
  readonly advancedOptions?: EsAdvancedOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#LogPublishingOptions
   */
  readonly logPublishingOptions?: EsLogPublishingOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: EsDomainEndpointOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AdvancedSecurityOptions
   */
  readonly advancedSecurityOptions?: EsAdvancedSecurityOptionsStatus;

  /**
   * @schema EsElasticsearchDomainConfig#AutoTuneOptions
   */
  readonly autoTuneOptions?: EsAutoTuneOptionsStatus;

}

/**
 * Converts an object of type 'EsElasticsearchDomainConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsElasticsearchDomainConfig(obj: EsElasticsearchDomainConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticsearchVersion': toJson_EsElasticsearchVersionStatus(obj.elasticsearchVersion),
    'ElasticsearchClusterConfig': toJson_EsElasticsearchClusterConfigStatus(obj.elasticsearchClusterConfig),
    'EBSOptions': toJson_EsebsOptionsStatus(obj.ebsOptions),
    'AccessPolicies': toJson_EsAccessPoliciesStatus(obj.accessPolicies),
    'SnapshotOptions': toJson_EsSnapshotOptionsStatus(obj.snapshotOptions),
    'VPCOptions': toJson_EsvpcDerivedInfoStatus(obj.vpcOptions),
    'CognitoOptions': toJson_EsCognitoOptionsStatus(obj.cognitoOptions),
    'EncryptionAtRestOptions': toJson_EsEncryptionAtRestOptionsStatus(obj.encryptionAtRestOptions),
    'NodeToNodeEncryptionOptions': toJson_EsNodeToNodeEncryptionOptionsStatus(obj.nodeToNodeEncryptionOptions),
    'AdvancedOptions': toJson_EsAdvancedOptionsStatus(obj.advancedOptions),
    'LogPublishingOptions': toJson_EsLogPublishingOptionsStatus(obj.logPublishingOptions),
    'DomainEndpointOptions': toJson_EsDomainEndpointOptionsStatus(obj.domainEndpointOptions),
    'AdvancedSecurityOptions': toJson_EsAdvancedSecurityOptionsStatus(obj.advancedSecurityOptions),
    'AutoTuneOptions': toJson_EsAutoTuneOptionsStatus(obj.autoTuneOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsLimits
 */
export interface EsLimits {
  /**
   * @schema EsLimits#StorageTypes
   */
  readonly storageTypes?: EsStorageType[];

  /**
   * @schema EsLimits#InstanceLimits
   */
  readonly instanceLimits?: EsInstanceLimits;

  /**
   * @schema EsLimits#AdditionalLimits
   */
  readonly additionalLimits?: EsAdditionalLimit[];

}

/**
 * Converts an object of type 'EsLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsLimits(obj: EsLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageTypes': obj.storageTypes?.map(y => toJson_EsStorageType(y)),
    'InstanceLimits': toJson_EsInstanceLimits(obj.instanceLimits),
    'AdditionalLimits': obj.additionalLimits?.map(y => toJson_EsAdditionalLimit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsFilter
 */
export interface EsFilter {
  /**
   * @schema EsFilter#Name
   */
  readonly name?: string;

  /**
   * @schema EsFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'EsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsFilter(obj: EsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDescribePackagesFilter
 */
export interface EsDescribePackagesFilter {
  /**
   * @schema EsDescribePackagesFilter#Name
   */
  readonly name?: string;

  /**
   * @schema EsDescribePackagesFilter#Value
   */
  readonly value?: string[];

}

/**
 * Converts an object of type 'EsDescribePackagesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDescribePackagesFilter(obj: EsDescribePackagesFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsReservedElasticsearchInstanceOffering
 */
export interface EsReservedElasticsearchInstanceOffering {
  /**
   * @schema EsReservedElasticsearchInstanceOffering#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#ElasticsearchInstanceType
   */
  readonly elasticsearchInstanceType?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema EsReservedElasticsearchInstanceOffering#RecurringCharges
   */
  readonly recurringCharges?: EsRecurringCharge[];

}

/**
 * Converts an object of type 'EsReservedElasticsearchInstanceOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsReservedElasticsearchInstanceOffering(obj: EsReservedElasticsearchInstanceOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedElasticsearchInstanceOfferingId': obj.reservedElasticsearchInstanceOfferingId,
    'ElasticsearchInstanceType': obj.elasticsearchInstanceType,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CurrencyCode': obj.currencyCode,
    'PaymentOption': obj.paymentOption,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_EsRecurringCharge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsReservedElasticsearchInstance
 */
export interface EsReservedElasticsearchInstance {
  /**
   * @schema EsReservedElasticsearchInstance#ReservationName
   */
  readonly reservationName?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ReservedElasticsearchInstanceId
   */
  readonly reservedElasticsearchInstanceId?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ReservedElasticsearchInstanceOfferingId
   */
  readonly reservedElasticsearchInstanceOfferingId?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ElasticsearchInstanceType
   */
  readonly elasticsearchInstanceType?: string;

  /**
   * @schema EsReservedElasticsearchInstance#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema EsReservedElasticsearchInstance#Duration
   */
  readonly duration?: number;

  /**
   * @schema EsReservedElasticsearchInstance#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema EsReservedElasticsearchInstance#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema EsReservedElasticsearchInstance#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema EsReservedElasticsearchInstance#ElasticsearchInstanceCount
   */
  readonly elasticsearchInstanceCount?: number;

  /**
   * @schema EsReservedElasticsearchInstance#State
   */
  readonly state?: string;

  /**
   * @schema EsReservedElasticsearchInstance#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema EsReservedElasticsearchInstance#RecurringCharges
   */
  readonly recurringCharges?: EsRecurringCharge[];

}

/**
 * Converts an object of type 'EsReservedElasticsearchInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsReservedElasticsearchInstance(obj: EsReservedElasticsearchInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservationName': obj.reservationName,
    'ReservedElasticsearchInstanceId': obj.reservedElasticsearchInstanceId,
    'ReservedElasticsearchInstanceOfferingId': obj.reservedElasticsearchInstanceOfferingId,
    'ElasticsearchInstanceType': obj.elasticsearchInstanceType,
    'StartTime': obj.startTime,
    'Duration': obj.duration,
    'FixedPrice': obj.fixedPrice,
    'UsagePrice': obj.usagePrice,
    'CurrencyCode': obj.currencyCode,
    'ElasticsearchInstanceCount': obj.elasticsearchInstanceCount,
    'State': obj.state,
    'PaymentOption': obj.paymentOption,
    'RecurringCharges': obj.recurringCharges?.map(y => toJson_EsRecurringCharge(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCompatibleVersionsMap
 */
export interface EsCompatibleVersionsMap {
  /**
   * @schema EsCompatibleVersionsMap#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema EsCompatibleVersionsMap#TargetVersions
   */
  readonly targetVersions?: string[];

}

/**
 * Converts an object of type 'EsCompatibleVersionsMap' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCompatibleVersionsMap(obj: EsCompatibleVersionsMap | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceVersion': obj.sourceVersion,
    'TargetVersions': obj.targetVersions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsPackageVersionHistory
 */
export interface EsPackageVersionHistory {
  /**
   * @schema EsPackageVersionHistory#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema EsPackageVersionHistory#CommitMessage
   */
  readonly commitMessage?: string;

  /**
   * @schema EsPackageVersionHistory#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'EsPackageVersionHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsPackageVersionHistory(obj: EsPackageVersionHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageVersion': obj.packageVersion,
    'CommitMessage': obj.commitMessage,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpgradeHistory
 */
export interface EsUpgradeHistory {
  /**
   * @schema EsUpgradeHistory#UpgradeName
   */
  readonly upgradeName?: string;

  /**
   * @schema EsUpgradeHistory#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema EsUpgradeHistory#UpgradeStatus
   */
  readonly upgradeStatus?: string;

  /**
   * @schema EsUpgradeHistory#StepsList
   */
  readonly stepsList?: EsUpgradeStepItem[];

}

/**
 * Converts an object of type 'EsUpgradeHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpgradeHistory(obj: EsUpgradeHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpgradeName': obj.upgradeName,
    'StartTimestamp': obj.startTimestamp,
    'UpgradeStatus': obj.upgradeStatus,
    'StepsList': obj.stepsList?.map(y => toJson_EsUpgradeStepItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDomainInfo
 */
export interface EsDomainInfo {
  /**
   * @schema EsDomainInfo#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'EsDomainInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDomainInfo(obj: EsDomainInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneOptions
 */
export interface EsAutoTuneOptions {
  /**
   * @schema EsAutoTuneOptions#DesiredState
   */
  readonly desiredState?: string;

  /**
   * @schema EsAutoTuneOptions#RollbackOnDisable
   */
  readonly rollbackOnDisable?: string;

  /**
   * @schema EsAutoTuneOptions#MaintenanceSchedules
   */
  readonly maintenanceSchedules?: EsAutoTuneMaintenanceSchedule[];

}

/**
 * Converts an object of type 'EsAutoTuneOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneOptions(obj: EsAutoTuneOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DesiredState': obj.desiredState,
    'RollbackOnDisable': obj.rollbackOnDisable,
    'MaintenanceSchedules': obj.maintenanceSchedules?.map(y => toJson_EsAutoTuneMaintenanceSchedule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsInboundCrossClusterSearchConnectionStatus
 */
export interface EsInboundCrossClusterSearchConnectionStatus {
  /**
   * @schema EsInboundCrossClusterSearchConnectionStatus#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema EsInboundCrossClusterSearchConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'EsInboundCrossClusterSearchConnectionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsInboundCrossClusterSearchConnectionStatus(obj: EsInboundCrossClusterSearchConnectionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StatusCode': obj.statusCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsErrorDetails
 */
export interface EsErrorDetails {
  /**
   * @schema EsErrorDetails#ErrorType
   */
  readonly errorType?: string;

  /**
   * @schema EsErrorDetails#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'EsErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsErrorDetails(obj: EsErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorType': obj.errorType,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsZoneAwarenessConfig
 */
export interface EsZoneAwarenessConfig {
  /**
   * @schema EsZoneAwarenessConfig#AvailabilityZoneCount
   */
  readonly availabilityZoneCount?: number;

}

/**
 * Converts an object of type 'EsZoneAwarenessConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsZoneAwarenessConfig(obj: EsZoneAwarenessConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZoneCount': obj.availabilityZoneCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsColdStorageOptions
 */
export interface EsColdStorageOptions {
  /**
   * @schema EsColdStorageOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'EsColdStorageOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsColdStorageOptions(obj: EsColdStorageOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsMasterUserOptions
 */
export interface EsMasterUserOptions {
  /**
   * @schema EsMasterUserOptions#MasterUserARN
   */
  readonly masterUserArn?: string;

  /**
   * @schema EsMasterUserOptions#MasterUserName
   */
  readonly masterUserName?: string;

  /**
   * @schema EsMasterUserOptions#MasterUserPassword
   */
  readonly masterUserPassword?: string;

}

/**
 * Converts an object of type 'EsMasterUserOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsMasterUserOptions(obj: EsMasterUserOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MasterUserARN': obj.masterUserArn,
    'MasterUserName': obj.masterUserName,
    'MasterUserPassword': obj.masterUserPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EssamlOptionsInput
 */
export interface EssamlOptionsInput {
  /**
   * @schema EssamlOptionsInput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EssamlOptionsInput#Idp
   */
  readonly idp?: EssamlIdp;

  /**
   * @schema EssamlOptionsInput#MasterUserName
   */
  readonly masterUserName?: string;

  /**
   * @schema EssamlOptionsInput#MasterBackendRole
   */
  readonly masterBackendRole?: string;

  /**
   * @schema EssamlOptionsInput#SubjectKey
   */
  readonly subjectKey?: string;

  /**
   * @schema EssamlOptionsInput#RolesKey
   */
  readonly rolesKey?: string;

  /**
   * @schema EssamlOptionsInput#SessionTimeoutMinutes
   */
  readonly sessionTimeoutMinutes?: number;

}

/**
 * Converts an object of type 'EssamlOptionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EssamlOptionsInput(obj: EssamlOptionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Idp': toJson_EssamlIdp(obj.idp),
    'MasterUserName': obj.masterUserName,
    'MasterBackendRole': obj.masterBackendRole,
    'SubjectKey': obj.subjectKey,
    'RolesKey': obj.rolesKey,
    'SessionTimeoutMinutes': obj.sessionTimeoutMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneMaintenanceSchedule
 */
export interface EsAutoTuneMaintenanceSchedule {
  /**
   * @schema EsAutoTuneMaintenanceSchedule#StartAt
   */
  readonly startAt?: string;

  /**
   * @schema EsAutoTuneMaintenanceSchedule#Duration
   */
  readonly duration?: EsDuration;

  /**
   * @schema EsAutoTuneMaintenanceSchedule#CronExpressionForRecurrence
   */
  readonly cronExpressionForRecurrence?: string;

}

/**
 * Converts an object of type 'EsAutoTuneMaintenanceSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneMaintenanceSchedule(obj: EsAutoTuneMaintenanceSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartAt': obj.startAt,
    'Duration': toJson_EsDuration(obj.duration),
    'CronExpressionForRecurrence': obj.cronExpressionForRecurrence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsvpcDerivedInfo
 */
export interface EsvpcDerivedInfo {
  /**
   * @schema EsvpcDerivedInfo#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema EsvpcDerivedInfo#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EsvpcDerivedInfo#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema EsvpcDerivedInfo#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'EsvpcDerivedInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsvpcDerivedInfo(obj: EsvpcDerivedInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VPCId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAdvancedSecurityOptions
 */
export interface EsAdvancedSecurityOptions {
  /**
   * @schema EsAdvancedSecurityOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptions#InternalUserDatabaseEnabled
   */
  readonly internalUserDatabaseEnabled?: boolean;

  /**
   * @schema EsAdvancedSecurityOptions#SAMLOptions
   */
  readonly samlOptions?: EssamlOptionsOutput;

}

/**
 * Converts an object of type 'EsAdvancedSecurityOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAdvancedSecurityOptions(obj: EsAdvancedSecurityOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'InternalUserDatabaseEnabled': obj.internalUserDatabaseEnabled,
    'SAMLOptions': toJson_EssamlOptionsOutput(obj.samlOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneOptionsOutput
 */
export interface EsAutoTuneOptionsOutput {
  /**
   * @schema EsAutoTuneOptionsOutput#State
   */
  readonly state?: string;

  /**
   * @schema EsAutoTuneOptionsOutput#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'EsAutoTuneOptionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneOptionsOutput(obj: EsAutoTuneOptionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneDetails
 */
export interface EsAutoTuneDetails {
  /**
   * @schema EsAutoTuneDetails#ScheduledAutoTuneDetails
   */
  readonly scheduledAutoTuneDetails?: EsScheduledAutoTuneDetails;

}

/**
 * Converts an object of type 'EsAutoTuneDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneDetails(obj: EsAutoTuneDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledAutoTuneDetails': toJson_EsScheduledAutoTuneDetails(obj.scheduledAutoTuneDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsElasticsearchVersionStatus
 */
export interface EsElasticsearchVersionStatus {
  /**
   * @schema EsElasticsearchVersionStatus#Options
   */
  readonly options?: string;

  /**
   * @schema EsElasticsearchVersionStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsElasticsearchVersionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsElasticsearchVersionStatus(obj: EsElasticsearchVersionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': obj.options,
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsElasticsearchClusterConfigStatus
 */
export interface EsElasticsearchClusterConfigStatus {
  /**
   * @schema EsElasticsearchClusterConfigStatus#Options
   */
  readonly options?: EsElasticsearchClusterConfig;

  /**
   * @schema EsElasticsearchClusterConfigStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsElasticsearchClusterConfigStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsElasticsearchClusterConfigStatus(obj: EsElasticsearchClusterConfigStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsElasticsearchClusterConfig(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsebsOptionsStatus
 */
export interface EsebsOptionsStatus {
  /**
   * @schema EsebsOptionsStatus#Options
   */
  readonly options?: EsebsOptions;

  /**
   * @schema EsebsOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsebsOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsebsOptionsStatus(obj: EsebsOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsebsOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAccessPoliciesStatus
 */
export interface EsAccessPoliciesStatus {
  /**
   * @schema EsAccessPoliciesStatus#Options
   */
  readonly options?: string;

  /**
   * @schema EsAccessPoliciesStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsAccessPoliciesStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAccessPoliciesStatus(obj: EsAccessPoliciesStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': obj.options,
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsSnapshotOptionsStatus
 */
export interface EsSnapshotOptionsStatus {
  /**
   * @schema EsSnapshotOptionsStatus#Options
   */
  readonly options?: EsSnapshotOptions;

  /**
   * @schema EsSnapshotOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsSnapshotOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsSnapshotOptionsStatus(obj: EsSnapshotOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsSnapshotOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsvpcDerivedInfoStatus
 */
export interface EsvpcDerivedInfoStatus {
  /**
   * @schema EsvpcDerivedInfoStatus#Options
   */
  readonly options?: EsvpcDerivedInfo;

  /**
   * @schema EsvpcDerivedInfoStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsvpcDerivedInfoStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsvpcDerivedInfoStatus(obj: EsvpcDerivedInfoStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsvpcDerivedInfo(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsCognitoOptionsStatus
 */
export interface EsCognitoOptionsStatus {
  /**
   * @schema EsCognitoOptionsStatus#Options
   */
  readonly options?: EsCognitoOptions;

  /**
   * @schema EsCognitoOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsCognitoOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsCognitoOptionsStatus(obj: EsCognitoOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsCognitoOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsEncryptionAtRestOptionsStatus
 */
export interface EsEncryptionAtRestOptionsStatus {
  /**
   * @schema EsEncryptionAtRestOptionsStatus#Options
   */
  readonly options?: EsEncryptionAtRestOptions;

  /**
   * @schema EsEncryptionAtRestOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsEncryptionAtRestOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsEncryptionAtRestOptionsStatus(obj: EsEncryptionAtRestOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsEncryptionAtRestOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsNodeToNodeEncryptionOptionsStatus
 */
export interface EsNodeToNodeEncryptionOptionsStatus {
  /**
   * @schema EsNodeToNodeEncryptionOptionsStatus#Options
   */
  readonly options?: EsNodeToNodeEncryptionOptions;

  /**
   * @schema EsNodeToNodeEncryptionOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsNodeToNodeEncryptionOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsNodeToNodeEncryptionOptionsStatus(obj: EsNodeToNodeEncryptionOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsNodeToNodeEncryptionOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAdvancedOptionsStatus
 */
export interface EsAdvancedOptionsStatus {
  /**
   * @schema EsAdvancedOptionsStatus#Options
   */
  readonly options?: { [key: string]: string };

  /**
   * @schema EsAdvancedOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsAdvancedOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAdvancedOptionsStatus(obj: EsAdvancedOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsLogPublishingOptionsStatus
 */
export interface EsLogPublishingOptionsStatus {
  /**
   * @schema EsLogPublishingOptionsStatus#Options
   */
  readonly options?: { [key: string]: EsLogPublishingOption };

  /**
   * @schema EsLogPublishingOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsLogPublishingOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsLogPublishingOptionsStatus(obj: EsLogPublishingOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_EsLogPublishingOption(i[1]) }), {})),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDomainEndpointOptionsStatus
 */
export interface EsDomainEndpointOptionsStatus {
  /**
   * @schema EsDomainEndpointOptionsStatus#Options
   */
  readonly options?: EsDomainEndpointOptions;

  /**
   * @schema EsDomainEndpointOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsDomainEndpointOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDomainEndpointOptionsStatus(obj: EsDomainEndpointOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsDomainEndpointOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAdvancedSecurityOptionsStatus
 */
export interface EsAdvancedSecurityOptionsStatus {
  /**
   * @schema EsAdvancedSecurityOptionsStatus#Options
   */
  readonly options?: EsAdvancedSecurityOptions;

  /**
   * @schema EsAdvancedSecurityOptionsStatus#Status
   */
  readonly status?: EsOptionStatus;

}

/**
 * Converts an object of type 'EsAdvancedSecurityOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAdvancedSecurityOptionsStatus(obj: EsAdvancedSecurityOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsAdvancedSecurityOptions(obj.options),
    'Status': toJson_EsOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneOptionsStatus
 */
export interface EsAutoTuneOptionsStatus {
  /**
   * @schema EsAutoTuneOptionsStatus#Options
   */
  readonly options?: EsAutoTuneOptions;

  /**
   * @schema EsAutoTuneOptionsStatus#Status
   */
  readonly status?: EsAutoTuneStatus;

}

/**
 * Converts an object of type 'EsAutoTuneOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneOptionsStatus(obj: EsAutoTuneOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_EsAutoTuneOptions(obj.options),
    'Status': toJson_EsAutoTuneStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsStorageType
 */
export interface EsStorageType {
  /**
   * @schema EsStorageType#StorageTypeName
   */
  readonly storageTypeName?: string;

  /**
   * @schema EsStorageType#StorageSubTypeName
   */
  readonly storageSubTypeName?: string;

  /**
   * @schema EsStorageType#StorageTypeLimits
   */
  readonly storageTypeLimits?: EsStorageTypeLimit[];

}

/**
 * Converts an object of type 'EsStorageType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsStorageType(obj: EsStorageType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageTypeName': obj.storageTypeName,
    'StorageSubTypeName': obj.storageSubTypeName,
    'StorageTypeLimits': obj.storageTypeLimits?.map(y => toJson_EsStorageTypeLimit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsInstanceLimits
 */
export interface EsInstanceLimits {
  /**
   * @schema EsInstanceLimits#InstanceCountLimits
   */
  readonly instanceCountLimits?: EsInstanceCountLimits;

}

/**
 * Converts an object of type 'EsInstanceLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsInstanceLimits(obj: EsInstanceLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceCountLimits': toJson_EsInstanceCountLimits(obj.instanceCountLimits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAdditionalLimit
 */
export interface EsAdditionalLimit {
  /**
   * @schema EsAdditionalLimit#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema EsAdditionalLimit#LimitValues
   */
  readonly limitValues?: string[];

}

/**
 * Converts an object of type 'EsAdditionalLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAdditionalLimit(obj: EsAdditionalLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LimitName': obj.limitName,
    'LimitValues': obj.limitValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsRecurringCharge
 */
export interface EsRecurringCharge {
  /**
   * @schema EsRecurringCharge#RecurringChargeAmount
   */
  readonly recurringChargeAmount?: number;

  /**
   * @schema EsRecurringCharge#RecurringChargeFrequency
   */
  readonly recurringChargeFrequency?: string;

}

/**
 * Converts an object of type 'EsRecurringCharge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsRecurringCharge(obj: EsRecurringCharge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecurringChargeAmount': obj.recurringChargeAmount,
    'RecurringChargeFrequency': obj.recurringChargeFrequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsUpgradeStepItem
 */
export interface EsUpgradeStepItem {
  /**
   * @schema EsUpgradeStepItem#UpgradeStep
   */
  readonly upgradeStep?: string;

  /**
   * @schema EsUpgradeStepItem#UpgradeStepStatus
   */
  readonly upgradeStepStatus?: string;

  /**
   * @schema EsUpgradeStepItem#Issues
   */
  readonly issues?: string[];

  /**
   * @schema EsUpgradeStepItem#ProgressPercent
   */
  readonly progressPercent?: number;

}

/**
 * Converts an object of type 'EsUpgradeStepItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsUpgradeStepItem(obj: EsUpgradeStepItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpgradeStep': obj.upgradeStep,
    'UpgradeStepStatus': obj.upgradeStepStatus,
    'Issues': obj.issues?.map(y => y),
    'ProgressPercent': obj.progressPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EssamlIdp
 */
export interface EssamlIdp {
  /**
   * @schema EssamlIdp#MetadataContent
   */
  readonly metadataContent?: string;

  /**
   * @schema EssamlIdp#EntityId
   */
  readonly entityId?: string;

}

/**
 * Converts an object of type 'EssamlIdp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EssamlIdp(obj: EssamlIdp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetadataContent': obj.metadataContent,
    'EntityId': obj.entityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsDuration
 */
export interface EsDuration {
  /**
   * @schema EsDuration#Value
   */
  readonly value?: number;

  /**
   * @schema EsDuration#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'EsDuration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsDuration(obj: EsDuration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EssamlOptionsOutput
 */
export interface EssamlOptionsOutput {
  /**
   * @schema EssamlOptionsOutput#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EssamlOptionsOutput#Idp
   */
  readonly idp?: EssamlIdp;

  /**
   * @schema EssamlOptionsOutput#SubjectKey
   */
  readonly subjectKey?: string;

  /**
   * @schema EssamlOptionsOutput#RolesKey
   */
  readonly rolesKey?: string;

  /**
   * @schema EssamlOptionsOutput#SessionTimeoutMinutes
   */
  readonly sessionTimeoutMinutes?: number;

}

/**
 * Converts an object of type 'EssamlOptionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EssamlOptionsOutput(obj: EssamlOptionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'Idp': toJson_EssamlIdp(obj.idp),
    'SubjectKey': obj.subjectKey,
    'RolesKey': obj.rolesKey,
    'SessionTimeoutMinutes': obj.sessionTimeoutMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsScheduledAutoTuneDetails
 */
export interface EsScheduledAutoTuneDetails {
  /**
   * @schema EsScheduledAutoTuneDetails#Date
   */
  readonly date?: string;

  /**
   * @schema EsScheduledAutoTuneDetails#ActionType
   */
  readonly actionType?: string;

  /**
   * @schema EsScheduledAutoTuneDetails#Action
   */
  readonly action?: string;

  /**
   * @schema EsScheduledAutoTuneDetails#Severity
   */
  readonly severity?: string;

}

/**
 * Converts an object of type 'EsScheduledAutoTuneDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsScheduledAutoTuneDetails(obj: EsScheduledAutoTuneDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'ActionType': obj.actionType,
    'Action': obj.action,
    'Severity': obj.severity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsOptionStatus
 */
export interface EsOptionStatus {
  /**
   * @schema EsOptionStatus#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema EsOptionStatus#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema EsOptionStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema EsOptionStatus#State
   */
  readonly state?: string;

  /**
   * @schema EsOptionStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * Converts an object of type 'EsOptionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsOptionStatus(obj: EsOptionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationDate': obj.creationDate,
    'UpdateDate': obj.updateDate,
    'UpdateVersion': obj.updateVersion,
    'State': obj.state,
    'PendingDeletion': obj.pendingDeletion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsAutoTuneStatus
 */
export interface EsAutoTuneStatus {
  /**
   * @schema EsAutoTuneStatus#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema EsAutoTuneStatus#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema EsAutoTuneStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema EsAutoTuneStatus#State
   */
  readonly state?: string;

  /**
   * @schema EsAutoTuneStatus#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema EsAutoTuneStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * Converts an object of type 'EsAutoTuneStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsAutoTuneStatus(obj: EsAutoTuneStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationDate': obj.creationDate,
    'UpdateDate': obj.updateDate,
    'UpdateVersion': obj.updateVersion,
    'State': obj.state,
    'ErrorMessage': obj.errorMessage,
    'PendingDeletion': obj.pendingDeletion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsStorageTypeLimit
 */
export interface EsStorageTypeLimit {
  /**
   * @schema EsStorageTypeLimit#LimitName
   */
  readonly limitName?: string;

  /**
   * @schema EsStorageTypeLimit#LimitValues
   */
  readonly limitValues?: string[];

}

/**
 * Converts an object of type 'EsStorageTypeLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsStorageTypeLimit(obj: EsStorageTypeLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LimitName': obj.limitName,
    'LimitValues': obj.limitValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EsInstanceCountLimits
 */
export interface EsInstanceCountLimits {
  /**
   * @schema EsInstanceCountLimits#MinimumInstanceCount
   */
  readonly minimumInstanceCount?: number;

  /**
   * @schema EsInstanceCountLimits#MaximumInstanceCount
   */
  readonly maximumInstanceCount?: number;

}

/**
 * Converts an object of type 'EsInstanceCountLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EsInstanceCountLimits(obj: EsInstanceCountLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MinimumInstanceCount': obj.minimumInstanceCount,
    'MaximumInstanceCount': obj.maximumInstanceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
