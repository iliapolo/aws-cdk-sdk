/**
 * @schema AppStreamAssociateFleetRequest
 */
export interface AppStreamAssociateFleetRequest {
  /**
   * @schema AppStreamAssociateFleetRequest#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema AppStreamAssociateFleetRequest#StackName
   */
  readonly stackName?: string;

}

/**
 * Converts an object of type 'AppStreamAssociateFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamAssociateFleetRequest(obj: AppStreamAssociateFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetName': obj.fleetName,
    'StackName': obj.stackName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamAssociateFleetResult
 */
export interface AppStreamAssociateFleetResult {
}

/**
 * Converts an object of type 'AppStreamAssociateFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamAssociateFleetResult(obj: AppStreamAssociateFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamBatchAssociateUserStackRequest
 */
export interface AppStreamBatchAssociateUserStackRequest {
  /**
   * @schema AppStreamBatchAssociateUserStackRequest#UserStackAssociations
   */
  readonly userStackAssociations?: AppStreamUserStackAssociation[];

}

/**
 * Converts an object of type 'AppStreamBatchAssociateUserStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamBatchAssociateUserStackRequest(obj: AppStreamBatchAssociateUserStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserStackAssociations': obj.userStackAssociations?.map(y => toJson_AppStreamUserStackAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamBatchAssociateUserStackResult
 */
export interface AppStreamBatchAssociateUserStackResult {
  /**
   * @schema AppStreamBatchAssociateUserStackResult#errors
   */
  readonly errors?: AppStreamUserStackAssociationError[];

}

/**
 * Converts an object of type 'AppStreamBatchAssociateUserStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamBatchAssociateUserStackResult(obj: AppStreamBatchAssociateUserStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_AppStreamUserStackAssociationError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamBatchDisassociateUserStackRequest
 */
export interface AppStreamBatchDisassociateUserStackRequest {
  /**
   * @schema AppStreamBatchDisassociateUserStackRequest#UserStackAssociations
   */
  readonly userStackAssociations?: AppStreamUserStackAssociation[];

}

/**
 * Converts an object of type 'AppStreamBatchDisassociateUserStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamBatchDisassociateUserStackRequest(obj: AppStreamBatchDisassociateUserStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserStackAssociations': obj.userStackAssociations?.map(y => toJson_AppStreamUserStackAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamBatchDisassociateUserStackResult
 */
export interface AppStreamBatchDisassociateUserStackResult {
  /**
   * @schema AppStreamBatchDisassociateUserStackResult#errors
   */
  readonly errors?: AppStreamUserStackAssociationError[];

}

/**
 * Converts an object of type 'AppStreamBatchDisassociateUserStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamBatchDisassociateUserStackResult(obj: AppStreamBatchDisassociateUserStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_AppStreamUserStackAssociationError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCopyImageRequest
 */
export interface AppStreamCopyImageRequest {
  /**
   * @schema AppStreamCopyImageRequest#SourceImageName
   */
  readonly sourceImageName?: string;

  /**
   * @schema AppStreamCopyImageRequest#DestinationImageName
   */
  readonly destinationImageName?: string;

  /**
   * @schema AppStreamCopyImageRequest#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema AppStreamCopyImageRequest#DestinationImageDescription
   */
  readonly destinationImageDescription?: string;

}

/**
 * Converts an object of type 'AppStreamCopyImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCopyImageRequest(obj: AppStreamCopyImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceImageName': obj.sourceImageName,
    'DestinationImageName': obj.destinationImageName,
    'DestinationRegion': obj.destinationRegion,
    'DestinationImageDescription': obj.destinationImageDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCopyImageResponse
 */
export interface AppStreamCopyImageResponse {
  /**
   * @schema AppStreamCopyImageResponse#DestinationImageName
   */
  readonly destinationImageName?: string;

}

/**
 * Converts an object of type 'AppStreamCopyImageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCopyImageResponse(obj: AppStreamCopyImageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationImageName': obj.destinationImageName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateDirectoryConfigRequest
 */
export interface AppStreamCreateDirectoryConfigRequest {
  /**
   * @schema AppStreamCreateDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema AppStreamCreateDirectoryConfigRequest#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema AppStreamCreateDirectoryConfigRequest#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: AppStreamServiceAccountCredentials;

}

/**
 * Converts an object of type 'AppStreamCreateDirectoryConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateDirectoryConfigRequest(obj: AppStreamCreateDirectoryConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryName': obj.directoryName,
    'OrganizationalUnitDistinguishedNames': obj.organizationalUnitDistinguishedNames?.map(y => y),
    'ServiceAccountCredentials': toJson_AppStreamServiceAccountCredentials(obj.serviceAccountCredentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateDirectoryConfigResult
 */
export interface AppStreamCreateDirectoryConfigResult {
  /**
   * @schema AppStreamCreateDirectoryConfigResult#DirectoryConfig
   */
  readonly directoryConfig?: AppStreamDirectoryConfig;

}

/**
 * Converts an object of type 'AppStreamCreateDirectoryConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateDirectoryConfigResult(obj: AppStreamCreateDirectoryConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryConfig': toJson_AppStreamDirectoryConfig(obj.directoryConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateFleetRequest
 */
export interface AppStreamCreateFleetRequest {
  /**
   * @schema AppStreamCreateFleetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamCreateFleetRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamCreateFleetRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamCreateFleetRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamCreateFleetRequest#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema AppStreamCreateFleetRequest#ComputeCapacity
   */
  readonly computeCapacity?: AppStreamComputeCapacity;

  /**
   * @schema AppStreamCreateFleetRequest#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamCreateFleetRequest#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema AppStreamCreateFleetRequest#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamCreateFleetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamCreateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamCreateFleetRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamCreateFleetRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamCreateFleetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateFleetRequest#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamCreateFleetRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamCreateFleetRequest#StreamView
   */
  readonly streamView?: string;

}

/**
 * Converts an object of type 'AppStreamCreateFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateFleetRequest(obj: AppStreamCreateFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ImageName': obj.imageName,
    'ImageArn': obj.imageArn,
    'InstanceType': obj.instanceType,
    'FleetType': obj.fleetType,
    'ComputeCapacity': toJson_AppStreamComputeCapacity(obj.computeCapacity),
    'VpcConfig': toJson_AppStreamVpcConfig(obj.vpcConfig),
    'MaxUserDurationInSeconds': obj.maxUserDurationInSeconds,
    'DisconnectTimeoutInSeconds': obj.disconnectTimeoutInSeconds,
    'Description': obj.description,
    'DisplayName': obj.displayName,
    'EnableDefaultInternetAccess': obj.enableDefaultInternetAccess,
    'DomainJoinInfo': toJson_AppStreamDomainJoinInfo(obj.domainJoinInfo),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'IdleDisconnectTimeoutInSeconds': obj.idleDisconnectTimeoutInSeconds,
    'IamRoleArn': obj.iamRoleArn,
    'StreamView': obj.streamView,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateFleetResult
 */
export interface AppStreamCreateFleetResult {
  /**
   * @schema AppStreamCreateFleetResult#Fleet
   */
  readonly fleet?: AppStreamFleet;

}

/**
 * Converts an object of type 'AppStreamCreateFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateFleetResult(obj: AppStreamCreateFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fleet': toJson_AppStreamFleet(obj.fleet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateImageBuilderRequest
 */
export interface AppStreamCreateImageBuilderRequest {
  /**
   * @schema AppStreamCreateImageBuilderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamCreateImageBuilderRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamCreateImageBuilderRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamCreateImageBuilderRequest#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema AppStreamCreateImageBuilderRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateImageBuilderRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

}

/**
 * Converts an object of type 'AppStreamCreateImageBuilderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateImageBuilderRequest(obj: AppStreamCreateImageBuilderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ImageName': obj.imageName,
    'ImageArn': obj.imageArn,
    'InstanceType': obj.instanceType,
    'Description': obj.description,
    'DisplayName': obj.displayName,
    'VpcConfig': toJson_AppStreamVpcConfig(obj.vpcConfig),
    'IamRoleArn': obj.iamRoleArn,
    'EnableDefaultInternetAccess': obj.enableDefaultInternetAccess,
    'DomainJoinInfo': toJson_AppStreamDomainJoinInfo(obj.domainJoinInfo),
    'AppstreamAgentVersion': obj.appstreamAgentVersion,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AccessEndpoints': obj.accessEndpoints?.map(y => toJson_AppStreamAccessEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateImageBuilderResult
 */
export interface AppStreamCreateImageBuilderResult {
  /**
   * @schema AppStreamCreateImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * Converts an object of type 'AppStreamCreateImageBuilderResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateImageBuilderResult(obj: AppStreamCreateImageBuilderResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageBuilder': toJson_AppStreamImageBuilder(obj.imageBuilder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateImageBuilderStreamingUrlRequest
 */
export interface AppStreamCreateImageBuilderStreamingUrlRequest {
  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlRequest#Validity
   */
  readonly validity?: number;

}

/**
 * Converts an object of type 'AppStreamCreateImageBuilderStreamingUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateImageBuilderStreamingUrlRequest(obj: AppStreamCreateImageBuilderStreamingUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Validity': obj.validity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateImageBuilderStreamingUrlResult
 */
export interface AppStreamCreateImageBuilderStreamingUrlResult {
  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlResult#StreamingURL
   */
  readonly streamingUrl?: string;

  /**
   * @schema AppStreamCreateImageBuilderStreamingUrlResult#Expires
   */
  readonly expires?: string;

}

/**
 * Converts an object of type 'AppStreamCreateImageBuilderStreamingUrlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateImageBuilderStreamingUrlResult(obj: AppStreamCreateImageBuilderStreamingUrlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingURL': obj.streamingUrl,
    'Expires': obj.expires,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateStackRequest
 */
export interface AppStreamCreateStackRequest {
  /**
   * @schema AppStreamCreateStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamCreateStackRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamCreateStackRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamCreateStackRequest#StorageConnectors
   */
  readonly storageConnectors?: AppStreamStorageConnector[];

  /**
   * @schema AppStreamCreateStackRequest#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema AppStreamCreateStackRequest#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema AppStreamCreateStackRequest#UserSettings
   */
  readonly userSettings?: AppStreamUserSetting[];

  /**
   * @schema AppStreamCreateStackRequest#ApplicationSettings
   */
  readonly applicationSettings?: AppStreamApplicationSettings;

  /**
   * @schema AppStreamCreateStackRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateStackRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

  /**
   * @schema AppStreamCreateStackRequest#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * Converts an object of type 'AppStreamCreateStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateStackRequest(obj: AppStreamCreateStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'DisplayName': obj.displayName,
    'StorageConnectors': obj.storageConnectors?.map(y => toJson_AppStreamStorageConnector(y)),
    'RedirectURL': obj.redirectUrl,
    'FeedbackURL': obj.feedbackUrl,
    'UserSettings': obj.userSettings?.map(y => toJson_AppStreamUserSetting(y)),
    'ApplicationSettings': toJson_AppStreamApplicationSettings(obj.applicationSettings),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'AccessEndpoints': obj.accessEndpoints?.map(y => toJson_AppStreamAccessEndpoint(y)),
    'EmbedHostDomains': obj.embedHostDomains?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateStackResult
 */
export interface AppStreamCreateStackResult {
  /**
   * @schema AppStreamCreateStackResult#Stack
   */
  readonly stack?: AppStreamStack;

}

/**
 * Converts an object of type 'AppStreamCreateStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateStackResult(obj: AppStreamCreateStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stack': toJson_AppStreamStack(obj.stack),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateStreamingUrlRequest
 */
export interface AppStreamCreateStreamingUrlRequest {
  /**
   * @schema AppStreamCreateStreamingUrlRequest#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#Validity
   */
  readonly validity?: number;

  /**
   * @schema AppStreamCreateStreamingUrlRequest#SessionContext
   */
  readonly sessionContext?: string;

}

/**
 * Converts an object of type 'AppStreamCreateStreamingUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateStreamingUrlRequest(obj: AppStreamCreateStreamingUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'FleetName': obj.fleetName,
    'UserId': obj.userId,
    'ApplicationId': obj.applicationId,
    'Validity': obj.validity,
    'SessionContext': obj.sessionContext,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateStreamingUrlResult
 */
export interface AppStreamCreateStreamingUrlResult {
  /**
   * @schema AppStreamCreateStreamingUrlResult#StreamingURL
   */
  readonly streamingUrl?: string;

  /**
   * @schema AppStreamCreateStreamingUrlResult#Expires
   */
  readonly expires?: string;

}

/**
 * Converts an object of type 'AppStreamCreateStreamingUrlResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateStreamingUrlResult(obj: AppStreamCreateStreamingUrlResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingURL': obj.streamingUrl,
    'Expires': obj.expires,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateUpdatedImageRequest
 */
export interface AppStreamCreateUpdatedImageRequest {
  /**
   * @schema AppStreamCreateUpdatedImageRequest#existingImageName
   */
  readonly existingImageName: string;

  /**
   * @schema AppStreamCreateUpdatedImageRequest#newImageName
   */
  readonly newImageName: string;

  /**
   * @schema AppStreamCreateUpdatedImageRequest#newImageDescription
   */
  readonly newImageDescription?: string;

  /**
   * @schema AppStreamCreateUpdatedImageRequest#newImageDisplayName
   */
  readonly newImageDisplayName?: string;

  /**
   * @schema AppStreamCreateUpdatedImageRequest#newImageTags
   */
  readonly newImageTags?: { [key: string]: string };

  /**
   * @schema AppStreamCreateUpdatedImageRequest#dryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'AppStreamCreateUpdatedImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateUpdatedImageRequest(obj: AppStreamCreateUpdatedImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'existingImageName': obj.existingImageName,
    'newImageName': obj.newImageName,
    'newImageDescription': obj.newImageDescription,
    'newImageDisplayName': obj.newImageDisplayName,
    'newImageTags': ((obj.newImageTags) === undefined) ? undefined : (Object.entries(obj.newImageTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'dryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateUpdatedImageResult
 */
export interface AppStreamCreateUpdatedImageResult {
  /**
   * @schema AppStreamCreateUpdatedImageResult#image
   */
  readonly image?: AppStreamImage;

  /**
   * @schema AppStreamCreateUpdatedImageResult#canUpdateImage
   */
  readonly canUpdateImage?: boolean;

}

/**
 * Converts an object of type 'AppStreamCreateUpdatedImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateUpdatedImageResult(obj: AppStreamCreateUpdatedImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': toJson_AppStreamImage(obj.image),
    'canUpdateImage': obj.canUpdateImage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateUsageReportSubscriptionRequest
 */
export interface AppStreamCreateUsageReportSubscriptionRequest {
}

/**
 * Converts an object of type 'AppStreamCreateUsageReportSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateUsageReportSubscriptionRequest(obj: AppStreamCreateUsageReportSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateUsageReportSubscriptionResult
 */
export interface AppStreamCreateUsageReportSubscriptionResult {
  /**
   * @schema AppStreamCreateUsageReportSubscriptionResult#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AppStreamCreateUsageReportSubscriptionResult#Schedule
   */
  readonly schedule?: string;

}

/**
 * Converts an object of type 'AppStreamCreateUsageReportSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateUsageReportSubscriptionResult(obj: AppStreamCreateUsageReportSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketName': obj.s3BucketName,
    'Schedule': obj.schedule,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateUserRequest
 */
export interface AppStreamCreateUserRequest {
  /**
   * @schema AppStreamCreateUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamCreateUserRequest#MessageAction
   */
  readonly messageAction?: string;

  /**
   * @schema AppStreamCreateUserRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AppStreamCreateUserRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AppStreamCreateUserRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * Converts an object of type 'AppStreamCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateUserRequest(obj: AppStreamCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'MessageAction': obj.messageAction,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'AuthenticationType': obj.authenticationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamCreateUserResult
 */
export interface AppStreamCreateUserResult {
}

/**
 * Converts an object of type 'AppStreamCreateUserResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamCreateUserResult(obj: AppStreamCreateUserResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteDirectoryConfigRequest
 */
export interface AppStreamDeleteDirectoryConfigRequest {
  /**
   * @schema AppStreamDeleteDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteDirectoryConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteDirectoryConfigRequest(obj: AppStreamDeleteDirectoryConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryName': obj.directoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteDirectoryConfigResult
 */
export interface AppStreamDeleteDirectoryConfigResult {
}

/**
 * Converts an object of type 'AppStreamDeleteDirectoryConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteDirectoryConfigResult(obj: AppStreamDeleteDirectoryConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteFleetRequest
 */
export interface AppStreamDeleteFleetRequest {
  /**
   * @schema AppStreamDeleteFleetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteFleetRequest(obj: AppStreamDeleteFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteFleetResult
 */
export interface AppStreamDeleteFleetResult {
}

/**
 * Converts an object of type 'AppStreamDeleteFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteFleetResult(obj: AppStreamDeleteFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteImageRequest
 */
export interface AppStreamDeleteImageRequest {
  /**
   * @schema AppStreamDeleteImageRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteImageRequest(obj: AppStreamDeleteImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteImageResult
 */
export interface AppStreamDeleteImageResult {
  /**
   * @schema AppStreamDeleteImageResult#Image
   */
  readonly image?: AppStreamImage;

}

/**
 * Converts an object of type 'AppStreamDeleteImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteImageResult(obj: AppStreamDeleteImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Image': toJson_AppStreamImage(obj.image),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteImageBuilderRequest
 */
export interface AppStreamDeleteImageBuilderRequest {
  /**
   * @schema AppStreamDeleteImageBuilderRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteImageBuilderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteImageBuilderRequest(obj: AppStreamDeleteImageBuilderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteImageBuilderResult
 */
export interface AppStreamDeleteImageBuilderResult {
  /**
   * @schema AppStreamDeleteImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * Converts an object of type 'AppStreamDeleteImageBuilderResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteImageBuilderResult(obj: AppStreamDeleteImageBuilderResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageBuilder': toJson_AppStreamImageBuilder(obj.imageBuilder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteImagePermissionsRequest
 */
export interface AppStreamDeleteImagePermissionsRequest {
  /**
   * @schema AppStreamDeleteImagePermissionsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamDeleteImagePermissionsRequest#SharedAccountId
   */
  readonly sharedAccountId?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteImagePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteImagePermissionsRequest(obj: AppStreamDeleteImagePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SharedAccountId': obj.sharedAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteImagePermissionsResult
 */
export interface AppStreamDeleteImagePermissionsResult {
}

/**
 * Converts an object of type 'AppStreamDeleteImagePermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteImagePermissionsResult(obj: AppStreamDeleteImagePermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteStackRequest
 */
export interface AppStreamDeleteStackRequest {
  /**
   * @schema AppStreamDeleteStackRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteStackRequest(obj: AppStreamDeleteStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteStackResult
 */
export interface AppStreamDeleteStackResult {
}

/**
 * Converts an object of type 'AppStreamDeleteStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteStackResult(obj: AppStreamDeleteStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteUsageReportSubscriptionRequest
 */
export interface AppStreamDeleteUsageReportSubscriptionRequest {
}

/**
 * Converts an object of type 'AppStreamDeleteUsageReportSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteUsageReportSubscriptionRequest(obj: AppStreamDeleteUsageReportSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteUsageReportSubscriptionResult
 */
export interface AppStreamDeleteUsageReportSubscriptionResult {
}

/**
 * Converts an object of type 'AppStreamDeleteUsageReportSubscriptionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteUsageReportSubscriptionResult(obj: AppStreamDeleteUsageReportSubscriptionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteUserRequest
 */
export interface AppStreamDeleteUserRequest {
  /**
   * @schema AppStreamDeleteUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamDeleteUserRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * Converts an object of type 'AppStreamDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteUserRequest(obj: AppStreamDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AuthenticationType': obj.authenticationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDeleteUserResult
 */
export interface AppStreamDeleteUserResult {
}

/**
 * Converts an object of type 'AppStreamDeleteUserResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDeleteUserResult(obj: AppStreamDeleteUserResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeDirectoryConfigsRequest
 */
export interface AppStreamDescribeDirectoryConfigsRequest {
  /**
   * @schema AppStreamDescribeDirectoryConfigsRequest#DirectoryNames
   */
  readonly directoryNames?: string[];

  /**
   * @schema AppStreamDescribeDirectoryConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeDirectoryConfigsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeDirectoryConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeDirectoryConfigsRequest(obj: AppStreamDescribeDirectoryConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryNames': obj.directoryNames?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeDirectoryConfigsResult
 */
export interface AppStreamDescribeDirectoryConfigsResult {
  /**
   * @schema AppStreamDescribeDirectoryConfigsResult#DirectoryConfigs
   */
  readonly directoryConfigs?: AppStreamDirectoryConfig[];

  /**
   * @schema AppStreamDescribeDirectoryConfigsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeDirectoryConfigsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeDirectoryConfigsResult(obj: AppStreamDescribeDirectoryConfigsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryConfigs': obj.directoryConfigs?.map(y => toJson_AppStreamDirectoryConfig(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeFleetsRequest
 */
export interface AppStreamDescribeFleetsRequest {
  /**
   * @schema AppStreamDescribeFleetsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeFleetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeFleetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeFleetsRequest(obj: AppStreamDescribeFleetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeFleetsResult
 */
export interface AppStreamDescribeFleetsResult {
  /**
   * @schema AppStreamDescribeFleetsResult#Fleets
   */
  readonly fleets?: AppStreamFleet[];

  /**
   * @schema AppStreamDescribeFleetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeFleetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeFleetsResult(obj: AppStreamDescribeFleetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fleets': obj.fleets?.map(y => toJson_AppStreamFleet(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeImageBuildersRequest
 */
export interface AppStreamDescribeImageBuildersRequest {
  /**
   * @schema AppStreamDescribeImageBuildersRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeImageBuildersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeImageBuildersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeImageBuildersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeImageBuildersRequest(obj: AppStreamDescribeImageBuildersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeImageBuildersResult
 */
export interface AppStreamDescribeImageBuildersResult {
  /**
   * @schema AppStreamDescribeImageBuildersResult#ImageBuilders
   */
  readonly imageBuilders?: AppStreamImageBuilder[];

  /**
   * @schema AppStreamDescribeImageBuildersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeImageBuildersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeImageBuildersResult(obj: AppStreamDescribeImageBuildersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageBuilders': obj.imageBuilders?.map(y => toJson_AppStreamImageBuilder(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeImagePermissionsRequest
 */
export interface AppStreamDescribeImagePermissionsRequest {
  /**
   * @schema AppStreamDescribeImagePermissionsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamDescribeImagePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeImagePermissionsRequest#SharedAwsAccountIds
   */
  readonly sharedAwsAccountIds?: string[];

  /**
   * @schema AppStreamDescribeImagePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeImagePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeImagePermissionsRequest(obj: AppStreamDescribeImagePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MaxResults': obj.maxResults,
    'SharedAwsAccountIds': obj.sharedAwsAccountIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeImagePermissionsResult
 */
export interface AppStreamDescribeImagePermissionsResult {
  /**
   * @schema AppStreamDescribeImagePermissionsResult#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamDescribeImagePermissionsResult#SharedImagePermissionsList
   */
  readonly sharedImagePermissionsList?: AppStreamSharedImagePermissions[];

  /**
   * @schema AppStreamDescribeImagePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeImagePermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeImagePermissionsResult(obj: AppStreamDescribeImagePermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SharedImagePermissionsList': obj.sharedImagePermissionsList?.map(y => toJson_AppStreamSharedImagePermissions(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeImagesRequest
 */
export interface AppStreamDescribeImagesRequest {
  /**
   * @schema AppStreamDescribeImagesRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeImagesRequest#Arns
   */
  readonly arns?: string[];

  /**
   * @schema AppStreamDescribeImagesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema AppStreamDescribeImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppStreamDescribeImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AppStreamDescribeImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeImagesRequest(obj: AppStreamDescribeImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'Arns': obj.arns?.map(y => y),
    'Type': obj.type,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeImagesResult
 */
export interface AppStreamDescribeImagesResult {
  /**
   * @schema AppStreamDescribeImagesResult#Images
   */
  readonly images?: AppStreamImage[];

  /**
   * @schema AppStreamDescribeImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeImagesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeImagesResult(obj: AppStreamDescribeImagesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Images': obj.images?.map(y => toJson_AppStreamImage(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeSessionsRequest
 */
export interface AppStreamDescribeSessionsRequest {
  /**
   * @schema AppStreamDescribeSessionsRequest#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppStreamDescribeSessionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema AppStreamDescribeSessionsRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeSessionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeSessionsRequest(obj: AppStreamDescribeSessionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'FleetName': obj.fleetName,
    'UserId': obj.userId,
    'NextToken': obj.nextToken,
    'Limit': obj.limit,
    'AuthenticationType': obj.authenticationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeSessionsResult
 */
export interface AppStreamDescribeSessionsResult {
  /**
   * @schema AppStreamDescribeSessionsResult#Sessions
   */
  readonly sessions?: AppStreamSession[];

  /**
   * @schema AppStreamDescribeSessionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeSessionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeSessionsResult(obj: AppStreamDescribeSessionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sessions': obj.sessions?.map(y => toJson_AppStreamSession(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeStacksRequest
 */
export interface AppStreamDescribeStacksRequest {
  /**
   * @schema AppStreamDescribeStacksRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamDescribeStacksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeStacksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeStacksRequest(obj: AppStreamDescribeStacksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeStacksResult
 */
export interface AppStreamDescribeStacksResult {
  /**
   * @schema AppStreamDescribeStacksResult#Stacks
   */
  readonly stacks?: AppStreamStack[];

  /**
   * @schema AppStreamDescribeStacksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeStacksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeStacksResult(obj: AppStreamDescribeStacksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stacks': obj.stacks?.map(y => toJson_AppStreamStack(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeUsageReportSubscriptionsRequest
 */
export interface AppStreamDescribeUsageReportSubscriptionsRequest {
  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeUsageReportSubscriptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeUsageReportSubscriptionsRequest(obj: AppStreamDescribeUsageReportSubscriptionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AppStreamDescribeUsageReportSubscriptionsResult
 */
export interface AppStreamDescribeUsageReportSubscriptionsResult {
  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsResult#UsageReportSubscriptions
   */
  readonly usageReportSubscriptions?: AppStreamUsageReportSubscription[];

  /**
   * @schema AppStreamDescribeUsageReportSubscriptionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeUsageReportSubscriptionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeUsageReportSubscriptionsResult(obj: AppStreamDescribeUsageReportSubscriptionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UsageReportSubscriptions': obj.usageReportSubscriptions?.map(y => toJson_AppStreamUsageReportSubscription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeUserStackAssociationsRequest
 */
export interface AppStreamDescribeUserStackAssociationsRequest {
  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeUserStackAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeUserStackAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeUserStackAssociationsRequest(obj: AppStreamDescribeUserStackAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'UserName': obj.userName,
    'AuthenticationType': obj.authenticationType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeUserStackAssociationsResult
 */
export interface AppStreamDescribeUserStackAssociationsResult {
  /**
   * @schema AppStreamDescribeUserStackAssociationsResult#UserStackAssociations
   */
  readonly userStackAssociations?: AppStreamUserStackAssociation[];

  /**
   * @schema AppStreamDescribeUserStackAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeUserStackAssociationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeUserStackAssociationsResult(obj: AppStreamDescribeUserStackAssociationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserStackAssociations': obj.userStackAssociations?.map(y => toJson_AppStreamUserStackAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeUsersRequest
 */
export interface AppStreamDescribeUsersRequest {
  /**
   * @schema AppStreamDescribeUsersRequest#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppStreamDescribeUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppStreamDescribeUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeUsersRequest(obj: AppStreamDescribeUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthenticationType': obj.authenticationType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDescribeUsersResult
 */
export interface AppStreamDescribeUsersResult {
  /**
   * @schema AppStreamDescribeUsersResult#Users
   */
  readonly users?: AppStreamUser[];

  /**
   * @schema AppStreamDescribeUsersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamDescribeUsersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDescribeUsersResult(obj: AppStreamDescribeUsersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_AppStreamUser(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDisableUserRequest
 */
export interface AppStreamDisableUserRequest {
  /**
   * @schema AppStreamDisableUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamDisableUserRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * Converts an object of type 'AppStreamDisableUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDisableUserRequest(obj: AppStreamDisableUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AuthenticationType': obj.authenticationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDisableUserResult
 */
export interface AppStreamDisableUserResult {
}

/**
 * Converts an object of type 'AppStreamDisableUserResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDisableUserResult(obj: AppStreamDisableUserResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDisassociateFleetRequest
 */
export interface AppStreamDisassociateFleetRequest {
  /**
   * @schema AppStreamDisassociateFleetRequest#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema AppStreamDisassociateFleetRequest#StackName
   */
  readonly stackName?: string;

}

/**
 * Converts an object of type 'AppStreamDisassociateFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDisassociateFleetRequest(obj: AppStreamDisassociateFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetName': obj.fleetName,
    'StackName': obj.stackName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDisassociateFleetResult
 */
export interface AppStreamDisassociateFleetResult {
}

/**
 * Converts an object of type 'AppStreamDisassociateFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDisassociateFleetResult(obj: AppStreamDisassociateFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamEnableUserRequest
 */
export interface AppStreamEnableUserRequest {
  /**
   * @schema AppStreamEnableUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamEnableUserRequest#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * Converts an object of type 'AppStreamEnableUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamEnableUserRequest(obj: AppStreamEnableUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AuthenticationType': obj.authenticationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamEnableUserResult
 */
export interface AppStreamEnableUserResult {
}

/**
 * Converts an object of type 'AppStreamEnableUserResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamEnableUserResult(obj: AppStreamEnableUserResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamExpireSessionRequest
 */
export interface AppStreamExpireSessionRequest {
  /**
   * @schema AppStreamExpireSessionRequest#SessionId
   */
  readonly sessionId?: string;

}

/**
 * Converts an object of type 'AppStreamExpireSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamExpireSessionRequest(obj: AppStreamExpireSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamExpireSessionResult
 */
export interface AppStreamExpireSessionResult {
}

/**
 * Converts an object of type 'AppStreamExpireSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamExpireSessionResult(obj: AppStreamExpireSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamListAssociatedFleetsRequest
 */
export interface AppStreamListAssociatedFleetsRequest {
  /**
   * @schema AppStreamListAssociatedFleetsRequest#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamListAssociatedFleetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamListAssociatedFleetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamListAssociatedFleetsRequest(obj: AppStreamListAssociatedFleetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamListAssociatedFleetsResult
 */
export interface AppStreamListAssociatedFleetsResult {
  /**
   * @schema AppStreamListAssociatedFleetsResult#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamListAssociatedFleetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamListAssociatedFleetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamListAssociatedFleetsResult(obj: AppStreamListAssociatedFleetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamListAssociatedStacksRequest
 */
export interface AppStreamListAssociatedStacksRequest {
  /**
   * @schema AppStreamListAssociatedStacksRequest#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema AppStreamListAssociatedStacksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamListAssociatedStacksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamListAssociatedStacksRequest(obj: AppStreamListAssociatedStacksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetName': obj.fleetName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamListAssociatedStacksResult
 */
export interface AppStreamListAssociatedStacksResult {
  /**
   * @schema AppStreamListAssociatedStacksResult#Names
   */
  readonly names?: string[];

  /**
   * @schema AppStreamListAssociatedStacksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppStreamListAssociatedStacksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamListAssociatedStacksResult(obj: AppStreamListAssociatedStacksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamListTagsForResourceRequest
 */
export interface AppStreamListTagsForResourceRequest {
  /**
   * @schema AppStreamListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'AppStreamListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamListTagsForResourceRequest(obj: AppStreamListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamListTagsForResourceResponse
 */
export interface AppStreamListTagsForResourceResponse {
  /**
   * @schema AppStreamListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppStreamListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamListTagsForResourceResponse(obj: AppStreamListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStartFleetRequest
 */
export interface AppStreamStartFleetRequest {
  /**
   * @schema AppStreamStartFleetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamStartFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStartFleetRequest(obj: AppStreamStartFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStartFleetResult
 */
export interface AppStreamStartFleetResult {
}

/**
 * Converts an object of type 'AppStreamStartFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStartFleetResult(obj: AppStreamStartFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStartImageBuilderRequest
 */
export interface AppStreamStartImageBuilderRequest {
  /**
   * @schema AppStreamStartImageBuilderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamStartImageBuilderRequest#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

}

/**
 * Converts an object of type 'AppStreamStartImageBuilderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStartImageBuilderRequest(obj: AppStreamStartImageBuilderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'AppstreamAgentVersion': obj.appstreamAgentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStartImageBuilderResult
 */
export interface AppStreamStartImageBuilderResult {
  /**
   * @schema AppStreamStartImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * Converts an object of type 'AppStreamStartImageBuilderResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStartImageBuilderResult(obj: AppStreamStartImageBuilderResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageBuilder': toJson_AppStreamImageBuilder(obj.imageBuilder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStopFleetRequest
 */
export interface AppStreamStopFleetRequest {
  /**
   * @schema AppStreamStopFleetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamStopFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStopFleetRequest(obj: AppStreamStopFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStopFleetResult
 */
export interface AppStreamStopFleetResult {
}

/**
 * Converts an object of type 'AppStreamStopFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStopFleetResult(obj: AppStreamStopFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStopImageBuilderRequest
 */
export interface AppStreamStopImageBuilderRequest {
  /**
   * @schema AppStreamStopImageBuilderRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AppStreamStopImageBuilderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStopImageBuilderRequest(obj: AppStreamStopImageBuilderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStopImageBuilderResult
 */
export interface AppStreamStopImageBuilderResult {
  /**
   * @schema AppStreamStopImageBuilderResult#ImageBuilder
   */
  readonly imageBuilder?: AppStreamImageBuilder;

}

/**
 * Converts an object of type 'AppStreamStopImageBuilderResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStopImageBuilderResult(obj: AppStreamStopImageBuilderResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageBuilder': toJson_AppStreamImageBuilder(obj.imageBuilder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamTagResourceRequest
 */
export interface AppStreamTagResourceRequest {
  /**
   * @schema AppStreamTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AppStreamTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppStreamTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamTagResourceRequest(obj: AppStreamTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AppStreamTagResourceResponse
 */
export interface AppStreamTagResourceResponse {
}

/**
 * Converts an object of type 'AppStreamTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamTagResourceResponse(obj: AppStreamTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUntagResourceRequest
 */
export interface AppStreamUntagResourceRequest {
  /**
   * @schema AppStreamUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AppStreamUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'AppStreamUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUntagResourceRequest(obj: AppStreamUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AppStreamUntagResourceResponse
 */
export interface AppStreamUntagResourceResponse {
}

/**
 * Converts an object of type 'AppStreamUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUntagResourceResponse(obj: AppStreamUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateDirectoryConfigRequest
 */
export interface AppStreamUpdateDirectoryConfigRequest {
  /**
   * @schema AppStreamUpdateDirectoryConfigRequest#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema AppStreamUpdateDirectoryConfigRequest#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema AppStreamUpdateDirectoryConfigRequest#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: AppStreamServiceAccountCredentials;

}

/**
 * Converts an object of type 'AppStreamUpdateDirectoryConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateDirectoryConfigRequest(obj: AppStreamUpdateDirectoryConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryName': obj.directoryName,
    'OrganizationalUnitDistinguishedNames': obj.organizationalUnitDistinguishedNames?.map(y => y),
    'ServiceAccountCredentials': toJson_AppStreamServiceAccountCredentials(obj.serviceAccountCredentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateDirectoryConfigResult
 */
export interface AppStreamUpdateDirectoryConfigResult {
  /**
   * @schema AppStreamUpdateDirectoryConfigResult#DirectoryConfig
   */
  readonly directoryConfig?: AppStreamDirectoryConfig;

}

/**
 * Converts an object of type 'AppStreamUpdateDirectoryConfigResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateDirectoryConfigResult(obj: AppStreamUpdateDirectoryConfigResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryConfig': toJson_AppStreamDirectoryConfig(obj.directoryConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateFleetRequest
 */
export interface AppStreamUpdateFleetRequest {
  /**
   * @schema AppStreamUpdateFleetRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#ComputeCapacity
   */
  readonly computeCapacity?: AppStreamComputeCapacity;

  /**
   * @schema AppStreamUpdateFleetRequest#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamUpdateFleetRequest#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema AppStreamUpdateFleetRequest#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamUpdateFleetRequest#DeleteVpcConfig
   */
  readonly deleteVpcConfig?: boolean;

  /**
   * @schema AppStreamUpdateFleetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamUpdateFleetRequest#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamUpdateFleetRequest#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamUpdateFleetRequest#AttributesToDelete
   */
  readonly attributesToDelete?: string[];

  /**
   * @schema AppStreamUpdateFleetRequest#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamUpdateFleetRequest#StreamView
   */
  readonly streamView?: string;

}

/**
 * Converts an object of type 'AppStreamUpdateFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateFleetRequest(obj: AppStreamUpdateFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageName': obj.imageName,
    'ImageArn': obj.imageArn,
    'Name': obj.name,
    'InstanceType': obj.instanceType,
    'ComputeCapacity': toJson_AppStreamComputeCapacity(obj.computeCapacity),
    'VpcConfig': toJson_AppStreamVpcConfig(obj.vpcConfig),
    'MaxUserDurationInSeconds': obj.maxUserDurationInSeconds,
    'DisconnectTimeoutInSeconds': obj.disconnectTimeoutInSeconds,
    'DeleteVpcConfig': obj.deleteVpcConfig,
    'Description': obj.description,
    'DisplayName': obj.displayName,
    'EnableDefaultInternetAccess': obj.enableDefaultInternetAccess,
    'DomainJoinInfo': toJson_AppStreamDomainJoinInfo(obj.domainJoinInfo),
    'IdleDisconnectTimeoutInSeconds': obj.idleDisconnectTimeoutInSeconds,
    'AttributesToDelete': obj.attributesToDelete?.map(y => y),
    'IamRoleArn': obj.iamRoleArn,
    'StreamView': obj.streamView,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateFleetResult
 */
export interface AppStreamUpdateFleetResult {
  /**
   * @schema AppStreamUpdateFleetResult#Fleet
   */
  readonly fleet?: AppStreamFleet;

}

/**
 * Converts an object of type 'AppStreamUpdateFleetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateFleetResult(obj: AppStreamUpdateFleetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fleet': toJson_AppStreamFleet(obj.fleet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateImagePermissionsRequest
 */
export interface AppStreamUpdateImagePermissionsRequest {
  /**
   * @schema AppStreamUpdateImagePermissionsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamUpdateImagePermissionsRequest#SharedAccountId
   */
  readonly sharedAccountId?: string;

  /**
   * @schema AppStreamUpdateImagePermissionsRequest#ImagePermissions
   */
  readonly imagePermissions?: AppStreamImagePermissions;

}

/**
 * Converts an object of type 'AppStreamUpdateImagePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateImagePermissionsRequest(obj: AppStreamUpdateImagePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SharedAccountId': obj.sharedAccountId,
    'ImagePermissions': toJson_AppStreamImagePermissions(obj.imagePermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateImagePermissionsResult
 */
export interface AppStreamUpdateImagePermissionsResult {
}

/**
 * Converts an object of type 'AppStreamUpdateImagePermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateImagePermissionsResult(obj: AppStreamUpdateImagePermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateStackRequest
 */
export interface AppStreamUpdateStackRequest {
  /**
   * @schema AppStreamUpdateStackRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamUpdateStackRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamUpdateStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamUpdateStackRequest#StorageConnectors
   */
  readonly storageConnectors?: AppStreamStorageConnector[];

  /**
   * @schema AppStreamUpdateStackRequest#DeleteStorageConnectors
   */
  readonly deleteStorageConnectors?: boolean;

  /**
   * @schema AppStreamUpdateStackRequest#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema AppStreamUpdateStackRequest#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema AppStreamUpdateStackRequest#AttributesToDelete
   */
  readonly attributesToDelete?: string[];

  /**
   * @schema AppStreamUpdateStackRequest#UserSettings
   */
  readonly userSettings?: AppStreamUserSetting[];

  /**
   * @schema AppStreamUpdateStackRequest#ApplicationSettings
   */
  readonly applicationSettings?: AppStreamApplicationSettings;

  /**
   * @schema AppStreamUpdateStackRequest#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

  /**
   * @schema AppStreamUpdateStackRequest#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * Converts an object of type 'AppStreamUpdateStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateStackRequest(obj: AppStreamUpdateStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisplayName': obj.displayName,
    'Description': obj.description,
    'Name': obj.name,
    'StorageConnectors': obj.storageConnectors?.map(y => toJson_AppStreamStorageConnector(y)),
    'DeleteStorageConnectors': obj.deleteStorageConnectors,
    'RedirectURL': obj.redirectUrl,
    'FeedbackURL': obj.feedbackUrl,
    'AttributesToDelete': obj.attributesToDelete?.map(y => y),
    'UserSettings': obj.userSettings?.map(y => toJson_AppStreamUserSetting(y)),
    'ApplicationSettings': toJson_AppStreamApplicationSettings(obj.applicationSettings),
    'AccessEndpoints': obj.accessEndpoints?.map(y => toJson_AppStreamAccessEndpoint(y)),
    'EmbedHostDomains': obj.embedHostDomains?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUpdateStackResult
 */
export interface AppStreamUpdateStackResult {
  /**
   * @schema AppStreamUpdateStackResult#Stack
   */
  readonly stack?: AppStreamStack;

}

/**
 * Converts an object of type 'AppStreamUpdateStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUpdateStackResult(obj: AppStreamUpdateStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stack': toJson_AppStreamStack(obj.stack),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUserStackAssociation
 */
export interface AppStreamUserStackAssociation {
  /**
   * @schema AppStreamUserStackAssociation#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamUserStackAssociation#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamUserStackAssociation#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppStreamUserStackAssociation#SendEmailNotification
   */
  readonly sendEmailNotification?: boolean;

}

/**
 * Converts an object of type 'AppStreamUserStackAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUserStackAssociation(obj: AppStreamUserStackAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'UserName': obj.userName,
    'AuthenticationType': obj.authenticationType,
    'SendEmailNotification': obj.sendEmailNotification,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUserStackAssociationError
 */
export interface AppStreamUserStackAssociationError {
  /**
   * @schema AppStreamUserStackAssociationError#UserStackAssociation
   */
  readonly userStackAssociation?: AppStreamUserStackAssociation;

  /**
   * @schema AppStreamUserStackAssociationError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamUserStackAssociationError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AppStreamUserStackAssociationError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUserStackAssociationError(obj: AppStreamUserStackAssociationError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserStackAssociation': toJson_AppStreamUserStackAssociation(obj.userStackAssociation),
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamServiceAccountCredentials
 */
export interface AppStreamServiceAccountCredentials {
  /**
   * @schema AppStreamServiceAccountCredentials#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema AppStreamServiceAccountCredentials#AccountPassword
   */
  readonly accountPassword?: string;

}

/**
 * Converts an object of type 'AppStreamServiceAccountCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamServiceAccountCredentials(obj: AppStreamServiceAccountCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountName': obj.accountName,
    'AccountPassword': obj.accountPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamDirectoryConfig
 */
export interface AppStreamDirectoryConfig {
  /**
   * @schema AppStreamDirectoryConfig#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema AppStreamDirectoryConfig#OrganizationalUnitDistinguishedNames
   */
  readonly organizationalUnitDistinguishedNames?: string[];

  /**
   * @schema AppStreamDirectoryConfig#ServiceAccountCredentials
   */
  readonly serviceAccountCredentials?: AppStreamServiceAccountCredentials;

  /**
   * @schema AppStreamDirectoryConfig#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'AppStreamDirectoryConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDirectoryConfig(obj: AppStreamDirectoryConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryName': obj.directoryName,
    'OrganizationalUnitDistinguishedNames': obj.organizationalUnitDistinguishedNames?.map(y => y),
    'ServiceAccountCredentials': toJson_AppStreamServiceAccountCredentials(obj.serviceAccountCredentials),
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamComputeCapacity
 */
export interface AppStreamComputeCapacity {
  /**
   * @schema AppStreamComputeCapacity#DesiredInstances
   */
  readonly desiredInstances?: number;

}

/**
 * Converts an object of type 'AppStreamComputeCapacity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamComputeCapacity(obj: AppStreamComputeCapacity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DesiredInstances': obj.desiredInstances,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamVpcConfig
 */
export interface AppStreamVpcConfig {
  /**
   * @schema AppStreamVpcConfig#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema AppStreamVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'AppStreamVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamVpcConfig(obj: AppStreamVpcConfig | undefined): Record<string, any> | undefined {
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
 * @schema AppStreamDomainJoinInfo
 */
export interface AppStreamDomainJoinInfo {
  /**
   * @schema AppStreamDomainJoinInfo#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema AppStreamDomainJoinInfo#OrganizationalUnitDistinguishedName
   */
  readonly organizationalUnitDistinguishedName?: string;

}

/**
 * Converts an object of type 'AppStreamDomainJoinInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamDomainJoinInfo(obj: AppStreamDomainJoinInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryName': obj.directoryName,
    'OrganizationalUnitDistinguishedName': obj.organizationalUnitDistinguishedName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamFleet
 */
export interface AppStreamFleet {
  /**
   * @schema AppStreamFleet#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamFleet#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamFleet#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamFleet#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamFleet#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema AppStreamFleet#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamFleet#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamFleet#FleetType
   */
  readonly fleetType?: string;

  /**
   * @schema AppStreamFleet#ComputeCapacityStatus
   */
  readonly computeCapacityStatus?: AppStreamComputeCapacityStatus;

  /**
   * @schema AppStreamFleet#MaxUserDurationInSeconds
   */
  readonly maxUserDurationInSeconds?: number;

  /**
   * @schema AppStreamFleet#DisconnectTimeoutInSeconds
   */
  readonly disconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamFleet#State
   */
  readonly state?: string;

  /**
   * @schema AppStreamFleet#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamFleet#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamFleet#FleetErrors
   */
  readonly fleetErrors?: AppStreamFleetError[];

  /**
   * @schema AppStreamFleet#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamFleet#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamFleet#IdleDisconnectTimeoutInSeconds
   */
  readonly idleDisconnectTimeoutInSeconds?: number;

  /**
   * @schema AppStreamFleet#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamFleet#StreamView
   */
  readonly streamView?: string;

}

/**
 * Converts an object of type 'AppStreamFleet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamFleet(obj: AppStreamFleet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'Description': obj.description,
    'ImageName': obj.imageName,
    'ImageArn': obj.imageArn,
    'InstanceType': obj.instanceType,
    'FleetType': obj.fleetType,
    'ComputeCapacityStatus': toJson_AppStreamComputeCapacityStatus(obj.computeCapacityStatus),
    'MaxUserDurationInSeconds': obj.maxUserDurationInSeconds,
    'DisconnectTimeoutInSeconds': obj.disconnectTimeoutInSeconds,
    'State': obj.state,
    'VpcConfig': toJson_AppStreamVpcConfig(obj.vpcConfig),
    'CreatedTime': obj.createdTime,
    'FleetErrors': obj.fleetErrors?.map(y => toJson_AppStreamFleetError(y)),
    'EnableDefaultInternetAccess': obj.enableDefaultInternetAccess,
    'DomainJoinInfo': toJson_AppStreamDomainJoinInfo(obj.domainJoinInfo),
    'IdleDisconnectTimeoutInSeconds': obj.idleDisconnectTimeoutInSeconds,
    'IamRoleArn': obj.iamRoleArn,
    'StreamView': obj.streamView,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamAccessEndpoint
 */
export interface AppStreamAccessEndpoint {
  /**
   * @schema AppStreamAccessEndpoint#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema AppStreamAccessEndpoint#VpceId
   */
  readonly vpceId?: string;

}

/**
 * Converts an object of type 'AppStreamAccessEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamAccessEndpoint(obj: AppStreamAccessEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointType': obj.endpointType,
    'VpceId': obj.vpceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamImageBuilder
 */
export interface AppStreamImageBuilder {
  /**
   * @schema AppStreamImageBuilder#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamImageBuilder#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamImageBuilder#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema AppStreamImageBuilder#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamImageBuilder#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamImageBuilder#VpcConfig
   */
  readonly vpcConfig?: AppStreamVpcConfig;

  /**
   * @schema AppStreamImageBuilder#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AppStreamImageBuilder#Platform
   */
  readonly platform?: string;

  /**
   * @schema AppStreamImageBuilder#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema AppStreamImageBuilder#State
   */
  readonly state?: string;

  /**
   * @schema AppStreamImageBuilder#StateChangeReason
   */
  readonly stateChangeReason?: AppStreamImageBuilderStateChangeReason;

  /**
   * @schema AppStreamImageBuilder#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamImageBuilder#EnableDefaultInternetAccess
   */
  readonly enableDefaultInternetAccess?: boolean;

  /**
   * @schema AppStreamImageBuilder#DomainJoinInfo
   */
  readonly domainJoinInfo?: AppStreamDomainJoinInfo;

  /**
   * @schema AppStreamImageBuilder#NetworkAccessConfiguration
   */
  readonly networkAccessConfiguration?: AppStreamNetworkAccessConfiguration;

  /**
   * @schema AppStreamImageBuilder#ImageBuilderErrors
   */
  readonly imageBuilderErrors?: AppStreamResourceError[];

  /**
   * @schema AppStreamImageBuilder#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema AppStreamImageBuilder#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

}

/**
 * Converts an object of type 'AppStreamImageBuilder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamImageBuilder(obj: AppStreamImageBuilder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'ImageArn': obj.imageArn,
    'Description': obj.description,
    'DisplayName': obj.displayName,
    'VpcConfig': toJson_AppStreamVpcConfig(obj.vpcConfig),
    'InstanceType': obj.instanceType,
    'Platform': obj.platform,
    'IamRoleArn': obj.iamRoleArn,
    'State': obj.state,
    'StateChangeReason': toJson_AppStreamImageBuilderStateChangeReason(obj.stateChangeReason),
    'CreatedTime': obj.createdTime,
    'EnableDefaultInternetAccess': obj.enableDefaultInternetAccess,
    'DomainJoinInfo': toJson_AppStreamDomainJoinInfo(obj.domainJoinInfo),
    'NetworkAccessConfiguration': toJson_AppStreamNetworkAccessConfiguration(obj.networkAccessConfiguration),
    'ImageBuilderErrors': obj.imageBuilderErrors?.map(y => toJson_AppStreamResourceError(y)),
    'AppstreamAgentVersion': obj.appstreamAgentVersion,
    'AccessEndpoints': obj.accessEndpoints?.map(y => toJson_AppStreamAccessEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStorageConnector
 */
export interface AppStreamStorageConnector {
  /**
   * @schema AppStreamStorageConnector#ConnectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppStreamStorageConnector#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema AppStreamStorageConnector#Domains
   */
  readonly domains?: string[];

}

/**
 * Converts an object of type 'AppStreamStorageConnector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStorageConnector(obj: AppStreamStorageConnector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorType': obj.connectorType,
    'ResourceIdentifier': obj.resourceIdentifier,
    'Domains': obj.domains?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUserSetting
 */
export interface AppStreamUserSetting {
  /**
   * @schema AppStreamUserSetting#Action
   */
  readonly action?: string;

  /**
   * @schema AppStreamUserSetting#Permission
   */
  readonly permission?: string;

}

/**
 * Converts an object of type 'AppStreamUserSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUserSetting(obj: AppStreamUserSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'Permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamApplicationSettings
 */
export interface AppStreamApplicationSettings {
  /**
   * @schema AppStreamApplicationSettings#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamApplicationSettings#SettingsGroup
   */
  readonly settingsGroup?: string;

}

/**
 * Converts an object of type 'AppStreamApplicationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamApplicationSettings(obj: AppStreamApplicationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'SettingsGroup': obj.settingsGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStack
 */
export interface AppStreamStack {
  /**
   * @schema AppStreamStack#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamStack#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamStack#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamStack#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamStack#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamStack#StorageConnectors
   */
  readonly storageConnectors?: AppStreamStorageConnector[];

  /**
   * @schema AppStreamStack#RedirectURL
   */
  readonly redirectUrl?: string;

  /**
   * @schema AppStreamStack#FeedbackURL
   */
  readonly feedbackUrl?: string;

  /**
   * @schema AppStreamStack#StackErrors
   */
  readonly stackErrors?: AppStreamStackError[];

  /**
   * @schema AppStreamStack#UserSettings
   */
  readonly userSettings?: AppStreamUserSetting[];

  /**
   * @schema AppStreamStack#ApplicationSettings
   */
  readonly applicationSettings?: AppStreamApplicationSettingsResponse;

  /**
   * @schema AppStreamStack#AccessEndpoints
   */
  readonly accessEndpoints?: AppStreamAccessEndpoint[];

  /**
   * @schema AppStreamStack#EmbedHostDomains
   */
  readonly embedHostDomains?: string[];

}

/**
 * Converts an object of type 'AppStreamStack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStack(obj: AppStreamStack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'DisplayName': obj.displayName,
    'CreatedTime': obj.createdTime,
    'StorageConnectors': obj.storageConnectors?.map(y => toJson_AppStreamStorageConnector(y)),
    'RedirectURL': obj.redirectUrl,
    'FeedbackURL': obj.feedbackUrl,
    'StackErrors': obj.stackErrors?.map(y => toJson_AppStreamStackError(y)),
    'UserSettings': obj.userSettings?.map(y => toJson_AppStreamUserSetting(y)),
    'ApplicationSettings': toJson_AppStreamApplicationSettingsResponse(obj.applicationSettings),
    'AccessEndpoints': obj.accessEndpoints?.map(y => toJson_AppStreamAccessEndpoint(y)),
    'EmbedHostDomains': obj.embedHostDomains?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamImage
 */
export interface AppStreamImage {
  /**
   * @schema AppStreamImage#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamImage#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamImage#BaseImageArn
   */
  readonly baseImageArn?: string;

  /**
   * @schema AppStreamImage#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamImage#State
   */
  readonly state?: string;

  /**
   * @schema AppStreamImage#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema AppStreamImage#ImageBuilderSupported
   */
  readonly imageBuilderSupported?: boolean;

  /**
   * @schema AppStreamImage#ImageBuilderName
   */
  readonly imageBuilderName?: string;

  /**
   * @schema AppStreamImage#Platform
   */
  readonly platform?: string;

  /**
   * @schema AppStreamImage#Description
   */
  readonly description?: string;

  /**
   * @schema AppStreamImage#StateChangeReason
   */
  readonly stateChangeReason?: AppStreamImageStateChangeReason;

  /**
   * @schema AppStreamImage#Applications
   */
  readonly applications?: AppStreamApplication[];

  /**
   * @schema AppStreamImage#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamImage#PublicBaseImageReleasedDate
   */
  readonly publicBaseImageReleasedDate?: string;

  /**
   * @schema AppStreamImage#AppstreamAgentVersion
   */
  readonly appstreamAgentVersion?: string;

  /**
   * @schema AppStreamImage#ImagePermissions
   */
  readonly imagePermissions?: AppStreamImagePermissions;

  /**
   * @schema AppStreamImage#ImageErrors
   */
  readonly imageErrors?: AppStreamResourceError[];

}

/**
 * Converts an object of type 'AppStreamImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamImage(obj: AppStreamImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'BaseImageArn': obj.baseImageArn,
    'DisplayName': obj.displayName,
    'State': obj.state,
    'Visibility': obj.visibility,
    'ImageBuilderSupported': obj.imageBuilderSupported,
    'ImageBuilderName': obj.imageBuilderName,
    'Platform': obj.platform,
    'Description': obj.description,
    'StateChangeReason': toJson_AppStreamImageStateChangeReason(obj.stateChangeReason),
    'Applications': obj.applications?.map(y => toJson_AppStreamApplication(y)),
    'CreatedTime': obj.createdTime,
    'PublicBaseImageReleasedDate': obj.publicBaseImageReleasedDate,
    'AppstreamAgentVersion': obj.appstreamAgentVersion,
    'ImagePermissions': toJson_AppStreamImagePermissions(obj.imagePermissions),
    'ImageErrors': obj.imageErrors?.map(y => toJson_AppStreamResourceError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamSharedImagePermissions
 */
export interface AppStreamSharedImagePermissions {
  /**
   * @schema AppStreamSharedImagePermissions#sharedAccountId
   */
  readonly sharedAccountId: string;

  /**
   * @schema AppStreamSharedImagePermissions#imagePermissions
   */
  readonly imagePermissions: AppStreamImagePermissions;

}

/**
 * Converts an object of type 'AppStreamSharedImagePermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamSharedImagePermissions(obj: AppStreamSharedImagePermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sharedAccountId': obj.sharedAccountId,
    'imagePermissions': toJson_AppStreamImagePermissions(obj.imagePermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamSession
 */
export interface AppStreamSession {
  /**
   * @schema AppStreamSession#Id
   */
  readonly id?: string;

  /**
   * @schema AppStreamSession#UserId
   */
  readonly userId?: string;

  /**
   * @schema AppStreamSession#StackName
   */
  readonly stackName?: string;

  /**
   * @schema AppStreamSession#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema AppStreamSession#State
   */
  readonly state?: string;

  /**
   * @schema AppStreamSession#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema AppStreamSession#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AppStreamSession#MaxExpirationTime
   */
  readonly maxExpirationTime?: string;

  /**
   * @schema AppStreamSession#AuthenticationType
   */
  readonly authenticationType?: string;

  /**
   * @schema AppStreamSession#NetworkAccessConfiguration
   */
  readonly networkAccessConfiguration?: AppStreamNetworkAccessConfiguration;

}

/**
 * Converts an object of type 'AppStreamSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamSession(obj: AppStreamSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'UserId': obj.userId,
    'StackName': obj.stackName,
    'FleetName': obj.fleetName,
    'State': obj.state,
    'ConnectionState': obj.connectionState,
    'StartTime': obj.startTime,
    'MaxExpirationTime': obj.maxExpirationTime,
    'AuthenticationType': obj.authenticationType,
    'NetworkAccessConfiguration': toJson_AppStreamNetworkAccessConfiguration(obj.networkAccessConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUsageReportSubscription
 */
export interface AppStreamUsageReportSubscription {
  /**
   * @schema AppStreamUsageReportSubscription#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AppStreamUsageReportSubscription#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema AppStreamUsageReportSubscription#LastGeneratedReportDate
   */
  readonly lastGeneratedReportDate?: string;

  /**
   * @schema AppStreamUsageReportSubscription#SubscriptionErrors
   */
  readonly subscriptionErrors?: AppStreamLastReportGenerationExecutionError[];

}

/**
 * Converts an object of type 'AppStreamUsageReportSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUsageReportSubscription(obj: AppStreamUsageReportSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketName': obj.s3BucketName,
    'Schedule': obj.schedule,
    'LastGeneratedReportDate': obj.lastGeneratedReportDate,
    'SubscriptionErrors': obj.subscriptionErrors?.map(y => toJson_AppStreamLastReportGenerationExecutionError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamUser
 */
export interface AppStreamUser {
  /**
   * @schema AppStreamUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema AppStreamUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema AppStreamUser#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamUser#Status
   */
  readonly status?: string;

  /**
   * @schema AppStreamUser#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AppStreamUser#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AppStreamUser#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AppStreamUser#AuthenticationType
   */
  readonly authenticationType?: string;

}

/**
 * Converts an object of type 'AppStreamUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamUser(obj: AppStreamUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'UserName': obj.userName,
    'Enabled': obj.enabled,
    'Status': obj.status,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'CreatedTime': obj.createdTime,
    'AuthenticationType': obj.authenticationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamImagePermissions
 */
export interface AppStreamImagePermissions {
  /**
   * @schema AppStreamImagePermissions#allowFleet
   */
  readonly allowFleet?: boolean;

  /**
   * @schema AppStreamImagePermissions#allowImageBuilder
   */
  readonly allowImageBuilder?: boolean;

}

/**
 * Converts an object of type 'AppStreamImagePermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamImagePermissions(obj: AppStreamImagePermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowFleet': obj.allowFleet,
    'allowImageBuilder': obj.allowImageBuilder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamComputeCapacityStatus
 */
export interface AppStreamComputeCapacityStatus {
  /**
   * @schema AppStreamComputeCapacityStatus#Desired
   */
  readonly desired?: number;

  /**
   * @schema AppStreamComputeCapacityStatus#Running
   */
  readonly running?: number;

  /**
   * @schema AppStreamComputeCapacityStatus#InUse
   */
  readonly inUse?: number;

  /**
   * @schema AppStreamComputeCapacityStatus#Available
   */
  readonly available?: number;

}

/**
 * Converts an object of type 'AppStreamComputeCapacityStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamComputeCapacityStatus(obj: AppStreamComputeCapacityStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Desired': obj.desired,
    'Running': obj.running,
    'InUse': obj.inUse,
    'Available': obj.available,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamFleetError
 */
export interface AppStreamFleetError {
  /**
   * @schema AppStreamFleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamFleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AppStreamFleetError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamFleetError(obj: AppStreamFleetError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamImageBuilderStateChangeReason
 */
export interface AppStreamImageBuilderStateChangeReason {
  /**
   * @schema AppStreamImageBuilderStateChangeReason#Code
   */
  readonly code?: string;

  /**
   * @schema AppStreamImageBuilderStateChangeReason#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'AppStreamImageBuilderStateChangeReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamImageBuilderStateChangeReason(obj: AppStreamImageBuilderStateChangeReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamNetworkAccessConfiguration
 */
export interface AppStreamNetworkAccessConfiguration {
  /**
   * @schema AppStreamNetworkAccessConfiguration#EniPrivateIpAddress
   */
  readonly eniPrivateIpAddress?: string;

  /**
   * @schema AppStreamNetworkAccessConfiguration#EniId
   */
  readonly eniId?: string;

}

/**
 * Converts an object of type 'AppStreamNetworkAccessConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamNetworkAccessConfiguration(obj: AppStreamNetworkAccessConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EniPrivateIpAddress': obj.eniPrivateIpAddress,
    'EniId': obj.eniId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamResourceError
 */
export interface AppStreamResourceError {
  /**
   * @schema AppStreamResourceError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamResourceError#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema AppStreamResourceError#ErrorTimestamp
   */
  readonly errorTimestamp?: string;

}

/**
 * Converts an object of type 'AppStreamResourceError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamResourceError(obj: AppStreamResourceError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'ErrorTimestamp': obj.errorTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamStackError
 */
export interface AppStreamStackError {
  /**
   * @schema AppStreamStackError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamStackError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AppStreamStackError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamStackError(obj: AppStreamStackError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamApplicationSettingsResponse
 */
export interface AppStreamApplicationSettingsResponse {
  /**
   * @schema AppStreamApplicationSettingsResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamApplicationSettingsResponse#SettingsGroup
   */
  readonly settingsGroup?: string;

  /**
   * @schema AppStreamApplicationSettingsResponse#S3BucketName
   */
  readonly s3BucketName?: string;

}

/**
 * Converts an object of type 'AppStreamApplicationSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamApplicationSettingsResponse(obj: AppStreamApplicationSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'SettingsGroup': obj.settingsGroup,
    'S3BucketName': obj.s3BucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamImageStateChangeReason
 */
export interface AppStreamImageStateChangeReason {
  /**
   * @schema AppStreamImageStateChangeReason#Code
   */
  readonly code?: string;

  /**
   * @schema AppStreamImageStateChangeReason#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'AppStreamImageStateChangeReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamImageStateChangeReason(obj: AppStreamImageStateChangeReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamApplication
 */
export interface AppStreamApplication {
  /**
   * @schema AppStreamApplication#Name
   */
  readonly name?: string;

  /**
   * @schema AppStreamApplication#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AppStreamApplication#IconURL
   */
  readonly iconUrl?: string;

  /**
   * @schema AppStreamApplication#LaunchPath
   */
  readonly launchPath?: string;

  /**
   * @schema AppStreamApplication#LaunchParameters
   */
  readonly launchParameters?: string;

  /**
   * @schema AppStreamApplication#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AppStreamApplication#Metadata
   */
  readonly metadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppStreamApplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamApplication(obj: AppStreamApplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'IconURL': obj.iconUrl,
    'LaunchPath': obj.launchPath,
    'LaunchParameters': obj.launchParameters,
    'Enabled': obj.enabled,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppStreamLastReportGenerationExecutionError
 */
export interface AppStreamLastReportGenerationExecutionError {
  /**
   * @schema AppStreamLastReportGenerationExecutionError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AppStreamLastReportGenerationExecutionError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AppStreamLastReportGenerationExecutionError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppStreamLastReportGenerationExecutionError(obj: AppStreamLastReportGenerationExecutionError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
