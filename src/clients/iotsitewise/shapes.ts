/**
 * @schema AssociateAssetsRequest
 */
export interface AssociateAssetsRequest {
  /**
   * @schema AssociateAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema AssociateAssetsRequest#hierarchyId
   */
  readonly hierarchyId: string;

  /**
   * @schema AssociateAssetsRequest#childAssetId
   */
  readonly childAssetId: string;

  /**
   * @schema AssociateAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema BatchAssociateProjectAssetsRequest
 */
export interface BatchAssociateProjectAssetsRequest {
  /**
   * @schema BatchAssociateProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema BatchAssociateProjectAssetsRequest#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema BatchAssociateProjectAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema BatchAssociateProjectAssetsResponse
 */
export interface BatchAssociateProjectAssetsResponse {
  /**
   * @schema BatchAssociateProjectAssetsResponse#errors
   */
  readonly errors?: AssetErrorDetails[];

}

/**
 * @schema BatchDisassociateProjectAssetsRequest
 */
export interface BatchDisassociateProjectAssetsRequest {
  /**
   * @schema BatchDisassociateProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema BatchDisassociateProjectAssetsRequest#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema BatchDisassociateProjectAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema BatchDisassociateProjectAssetsResponse
 */
export interface BatchDisassociateProjectAssetsResponse {
  /**
   * @schema BatchDisassociateProjectAssetsResponse#errors
   */
  readonly errors?: AssetErrorDetails[];

}

/**
 * @schema BatchPutAssetPropertyValueRequest
 */
export interface BatchPutAssetPropertyValueRequest {
  /**
   * @schema BatchPutAssetPropertyValueRequest#entries
   */
  readonly entries: PutAssetPropertyValueEntry[];

}

/**
 * @schema BatchPutAssetPropertyValueResponse
 */
export interface BatchPutAssetPropertyValueResponse {
  /**
   * @schema BatchPutAssetPropertyValueResponse#errorEntries
   */
  readonly errorEntries: BatchPutAssetPropertyErrorEntry[];

}

/**
 * @schema CreateAccessPolicyRequest
 */
export interface CreateAccessPolicyRequest {
  /**
   * @schema CreateAccessPolicyRequest#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: Identity;

  /**
   * @schema CreateAccessPolicyRequest#accessPolicyResource
   */
  readonly accessPolicyResource: Resource;

  /**
   * @schema CreateAccessPolicyRequest#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema CreateAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateAccessPolicyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateAccessPolicyResponse
 */
export interface CreateAccessPolicyResponse {
  /**
   * @schema CreateAccessPolicyResponse#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema CreateAccessPolicyResponse#accessPolicyArn
   */
  readonly accessPolicyArn: string;

}

/**
 * @schema CreateAssetRequest
 */
export interface CreateAssetRequest {
  /**
   * @schema CreateAssetRequest#assetName
   */
  readonly assetName: string;

  /**
   * @schema CreateAssetRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema CreateAssetRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateAssetRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateAssetResponse
 */
export interface CreateAssetResponse {
  /**
   * @schema CreateAssetResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema CreateAssetResponse#assetArn
   */
  readonly assetArn: string;

  /**
   * @schema CreateAssetResponse#assetStatus
   */
  readonly assetStatus: AssetStatus;

}

/**
 * @schema CreateAssetModelRequest
 */
export interface CreateAssetModelRequest {
  /**
   * @schema CreateAssetModelRequest#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema CreateAssetModelRequest#assetModelDescription
   */
  readonly assetModelDescription?: string;

  /**
   * @schema CreateAssetModelRequest#assetModelProperties
   */
  readonly assetModelProperties?: AssetModelPropertyDefinition[];

  /**
   * @schema CreateAssetModelRequest#assetModelHierarchies
   */
  readonly assetModelHierarchies?: AssetModelHierarchyDefinition[];

  /**
   * @schema CreateAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateAssetModelRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateAssetModelResponse
 */
export interface CreateAssetModelResponse {
  /**
   * @schema CreateAssetModelResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema CreateAssetModelResponse#assetModelArn
   */
  readonly assetModelArn: string;

  /**
   * @schema CreateAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: AssetModelStatus;

}

/**
 * @schema CreateDashboardRequest
 */
export interface CreateDashboardRequest {
  /**
   * @schema CreateDashboardRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema CreateDashboardRequest#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema CreateDashboardRequest#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema CreateDashboardRequest#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema CreateDashboardRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateDashboardRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDashboardResponse
 */
export interface CreateDashboardResponse {
  /**
   * @schema CreateDashboardResponse#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema CreateDashboardResponse#dashboardArn
   */
  readonly dashboardArn: string;

}

/**
 * @schema CreateGatewayRequest
 */
export interface CreateGatewayRequest {
  /**
   * @schema CreateGatewayRequest#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema CreateGatewayRequest#gatewayPlatform
   */
  readonly gatewayPlatform: GatewayPlatform;

  /**
   * @schema CreateGatewayRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateGatewayResponse
 */
export interface CreateGatewayResponse {
  /**
   * @schema CreateGatewayResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema CreateGatewayResponse#gatewayArn
   */
  readonly gatewayArn: string;

}

/**
 * @schema CreatePortalRequest
 */
export interface CreatePortalRequest {
  /**
   * @schema CreatePortalRequest#portalName
   */
  readonly portalName: string;

  /**
   * @schema CreatePortalRequest#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema CreatePortalRequest#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema CreatePortalRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreatePortalRequest#portalLogoImageFile
   */
  readonly portalLogoImageFile?: ImageFile;

  /**
   * @schema CreatePortalRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreatePortalRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreatePortalRequest#portalAuthMode
   */
  readonly portalAuthMode?: string;

}

/**
 * @schema CreatePortalResponse
 */
export interface CreatePortalResponse {
  /**
   * @schema CreatePortalResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema CreatePortalResponse#portalArn
   */
  readonly portalArn: string;

  /**
   * @schema CreatePortalResponse#portalStartUrl
   */
  readonly portalStartUrl: string;

  /**
   * @schema CreatePortalResponse#portalStatus
   */
  readonly portalStatus: PortalStatus;

  /**
   * @schema CreatePortalResponse#ssoApplicationId
   */
  readonly ssoApplicationId: string;

}

/**
 * @schema CreatePresignedPortalUrlRequest
 */
export interface CreatePresignedPortalUrlRequest {
  /**
   * @schema CreatePresignedPortalUrlRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema CreatePresignedPortalUrlRequest#sessionDurationSeconds
   */
  readonly sessionDurationSeconds?: number;

}

/**
 * @schema CreatePresignedPortalUrlResponse
 */
export interface CreatePresignedPortalUrlResponse {
  /**
   * @schema CreatePresignedPortalUrlResponse#presignedPortalUrl
   */
  readonly presignedPortalUrl: string;

}

/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema CreateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema CreateProjectRequest#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema CreateProjectRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateProjectResponse
 */
export interface CreateProjectResponse {
  /**
   * @schema CreateProjectResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema CreateProjectResponse#projectArn
   */
  readonly projectArn: string;

}

/**
 * @schema DeleteAccessPolicyRequest
 */
export interface DeleteAccessPolicyRequest {
  /**
   * @schema DeleteAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema DeleteAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteAccessPolicyResponse
 */
export interface DeleteAccessPolicyResponse {
}

/**
 * @schema DeleteAssetRequest
 */
export interface DeleteAssetRequest {
  /**
   * @schema DeleteAssetRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema DeleteAssetRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteAssetResponse
 */
export interface DeleteAssetResponse {
  /**
   * @schema DeleteAssetResponse#assetStatus
   */
  readonly assetStatus: AssetStatus;

}

/**
 * @schema DeleteAssetModelRequest
 */
export interface DeleteAssetModelRequest {
  /**
   * @schema DeleteAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema DeleteAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteAssetModelResponse
 */
export interface DeleteAssetModelResponse {
  /**
   * @schema DeleteAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: AssetModelStatus;

}

/**
 * @schema DeleteDashboardRequest
 */
export interface DeleteDashboardRequest {
  /**
   * @schema DeleteDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema DeleteDashboardRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteDashboardResponse
 */
export interface DeleteDashboardResponse {
}

/**
 * @schema DeleteGatewayRequest
 */
export interface DeleteGatewayRequest {
  /**
   * @schema DeleteGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

}

/**
 * @schema DeletePortalRequest
 */
export interface DeletePortalRequest {
  /**
   * @schema DeletePortalRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema DeletePortalRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeletePortalResponse
 */
export interface DeletePortalResponse {
  /**
   * @schema DeletePortalResponse#portalStatus
   */
  readonly portalStatus: PortalStatus;

}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema DeleteProjectRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteProjectResponse
 */
export interface DeleteProjectResponse {
}

/**
 * @schema DescribeAccessPolicyRequest
 */
export interface DescribeAccessPolicyRequest {
  /**
   * @schema DescribeAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

}

/**
 * @schema DescribeAccessPolicyResponse
 */
export interface DescribeAccessPolicyResponse {
  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyArn
   */
  readonly accessPolicyArn: string;

  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: Identity;

  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyResource
   */
  readonly accessPolicyResource: Resource;

  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyCreationDate
   */
  readonly accessPolicyCreationDate: string;

  /**
   * @schema DescribeAccessPolicyResponse#accessPolicyLastUpdateDate
   */
  readonly accessPolicyLastUpdateDate: string;

}

/**
 * @schema DescribeAssetRequest
 */
export interface DescribeAssetRequest {
  /**
   * @schema DescribeAssetRequest#assetId
   */
  readonly assetId: string;

}

/**
 * @schema DescribeAssetResponse
 */
export interface DescribeAssetResponse {
  /**
   * @schema DescribeAssetResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema DescribeAssetResponse#assetArn
   */
  readonly assetArn: string;

  /**
   * @schema DescribeAssetResponse#assetName
   */
  readonly assetName: string;

  /**
   * @schema DescribeAssetResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema DescribeAssetResponse#assetProperties
   */
  readonly assetProperties: AssetProperty[];

  /**
   * @schema DescribeAssetResponse#assetHierarchies
   */
  readonly assetHierarchies: AssetHierarchy[];

  /**
   * @schema DescribeAssetResponse#assetCreationDate
   */
  readonly assetCreationDate: string;

  /**
   * @schema DescribeAssetResponse#assetLastUpdateDate
   */
  readonly assetLastUpdateDate: string;

  /**
   * @schema DescribeAssetResponse#assetStatus
   */
  readonly assetStatus: AssetStatus;

}

/**
 * @schema DescribeAssetModelRequest
 */
export interface DescribeAssetModelRequest {
  /**
   * @schema DescribeAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

}

/**
 * @schema DescribeAssetModelResponse
 */
export interface DescribeAssetModelResponse {
  /**
   * @schema DescribeAssetModelResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema DescribeAssetModelResponse#assetModelArn
   */
  readonly assetModelArn: string;

  /**
   * @schema DescribeAssetModelResponse#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema DescribeAssetModelResponse#assetModelDescription
   */
  readonly assetModelDescription: string;

  /**
   * @schema DescribeAssetModelResponse#assetModelProperties
   */
  readonly assetModelProperties: AssetModelProperty[];

  /**
   * @schema DescribeAssetModelResponse#assetModelHierarchies
   */
  readonly assetModelHierarchies: AssetModelHierarchy[];

  /**
   * @schema DescribeAssetModelResponse#assetModelCreationDate
   */
  readonly assetModelCreationDate: string;

  /**
   * @schema DescribeAssetModelResponse#assetModelLastUpdateDate
   */
  readonly assetModelLastUpdateDate: string;

  /**
   * @schema DescribeAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: AssetModelStatus;

}

/**
 * @schema DescribeAssetPropertyRequest
 */
export interface DescribeAssetPropertyRequest {
  /**
   * @schema DescribeAssetPropertyRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema DescribeAssetPropertyRequest#propertyId
   */
  readonly propertyId: string;

}

/**
 * @schema DescribeAssetPropertyResponse
 */
export interface DescribeAssetPropertyResponse {
  /**
   * @schema DescribeAssetPropertyResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema DescribeAssetPropertyResponse#assetName
   */
  readonly assetName: string;

  /**
   * @schema DescribeAssetPropertyResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema DescribeAssetPropertyResponse#assetProperty
   */
  readonly assetProperty: Property;

}

/**
 * @schema DescribeDashboardRequest
 */
export interface DescribeDashboardRequest {
  /**
   * @schema DescribeDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

}

/**
 * @schema DescribeDashboardResponse
 */
export interface DescribeDashboardResponse {
  /**
   * @schema DescribeDashboardResponse#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema DescribeDashboardResponse#dashboardArn
   */
  readonly dashboardArn: string;

  /**
   * @schema DescribeDashboardResponse#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema DescribeDashboardResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema DescribeDashboardResponse#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema DescribeDashboardResponse#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema DescribeDashboardResponse#dashboardCreationDate
   */
  readonly dashboardCreationDate: string;

  /**
   * @schema DescribeDashboardResponse#dashboardLastUpdateDate
   */
  readonly dashboardLastUpdateDate: string;

}

/**
 * @schema DescribeDefaultEncryptionConfigurationRequest
 */
export interface DescribeDefaultEncryptionConfigurationRequest {
}

/**
 * @schema DescribeDefaultEncryptionConfigurationResponse
 */
export interface DescribeDefaultEncryptionConfigurationResponse {
  /**
   * @schema DescribeDefaultEncryptionConfigurationResponse#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema DescribeDefaultEncryptionConfigurationResponse#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema DescribeDefaultEncryptionConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: ConfigurationStatus;

}

/**
 * @schema DescribeGatewayRequest
 */
export interface DescribeGatewayRequest {
  /**
   * @schema DescribeGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

}

/**
 * @schema DescribeGatewayResponse
 */
export interface DescribeGatewayResponse {
  /**
   * @schema DescribeGatewayResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema DescribeGatewayResponse#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema DescribeGatewayResponse#gatewayArn
   */
  readonly gatewayArn: string;

  /**
   * @schema DescribeGatewayResponse#gatewayPlatform
   */
  readonly gatewayPlatform?: GatewayPlatform;

  /**
   * @schema DescribeGatewayResponse#gatewayCapabilitySummaries
   */
  readonly gatewayCapabilitySummaries: GatewayCapabilitySummary[];

  /**
   * @schema DescribeGatewayResponse#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema DescribeGatewayResponse#lastUpdateDate
   */
  readonly lastUpdateDate: string;

}

/**
 * @schema DescribeGatewayCapabilityConfigurationRequest
 */
export interface DescribeGatewayCapabilityConfigurationRequest {
  /**
   * @schema DescribeGatewayCapabilityConfigurationRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema DescribeGatewayCapabilityConfigurationRequest#capabilityNamespace
   */
  readonly capabilityNamespace: string;

}

/**
 * @schema DescribeGatewayCapabilityConfigurationResponse
 */
export interface DescribeGatewayCapabilityConfigurationResponse {
  /**
   * @schema DescribeGatewayCapabilityConfigurationResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema DescribeGatewayCapabilityConfigurationResponse#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema DescribeGatewayCapabilityConfigurationResponse#capabilityConfiguration
   */
  readonly capabilityConfiguration: string;

  /**
   * @schema DescribeGatewayCapabilityConfigurationResponse#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * @schema DescribeLoggingOptionsRequest
 */
export interface DescribeLoggingOptionsRequest {
}

/**
 * @schema DescribeLoggingOptionsResponse
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * @schema DescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions: LoggingOptions;

}

/**
 * @schema DescribePortalRequest
 */
export interface DescribePortalRequest {
  /**
   * @schema DescribePortalRequest#portalId
   */
  readonly portalId: string;

}

/**
 * @schema DescribePortalResponse
 */
export interface DescribePortalResponse {
  /**
   * @schema DescribePortalResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema DescribePortalResponse#portalArn
   */
  readonly portalArn: string;

  /**
   * @schema DescribePortalResponse#portalName
   */
  readonly portalName: string;

  /**
   * @schema DescribePortalResponse#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema DescribePortalResponse#portalClientId
   */
  readonly portalClientId: string;

  /**
   * @schema DescribePortalResponse#portalStartUrl
   */
  readonly portalStartUrl: string;

  /**
   * @schema DescribePortalResponse#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema DescribePortalResponse#portalStatus
   */
  readonly portalStatus: PortalStatus;

  /**
   * @schema DescribePortalResponse#portalCreationDate
   */
  readonly portalCreationDate: string;

  /**
   * @schema DescribePortalResponse#portalLastUpdateDate
   */
  readonly portalLastUpdateDate: string;

  /**
   * @schema DescribePortalResponse#portalLogoImageLocation
   */
  readonly portalLogoImageLocation?: ImageLocation;

  /**
   * @schema DescribePortalResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribePortalResponse#portalAuthMode
   */
  readonly portalAuthMode?: string;

}

/**
 * @schema DescribeProjectRequest
 */
export interface DescribeProjectRequest {
  /**
   * @schema DescribeProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * @schema DescribeProjectResponse
 */
export interface DescribeProjectResponse {
  /**
   * @schema DescribeProjectResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema DescribeProjectResponse#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema DescribeProjectResponse#projectName
   */
  readonly projectName: string;

  /**
   * @schema DescribeProjectResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema DescribeProjectResponse#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema DescribeProjectResponse#projectCreationDate
   */
  readonly projectCreationDate: string;

  /**
   * @schema DescribeProjectResponse#projectLastUpdateDate
   */
  readonly projectLastUpdateDate: string;

}

/**
 * @schema DisassociateAssetsRequest
 */
export interface DisassociateAssetsRequest {
  /**
   * @schema DisassociateAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema DisassociateAssetsRequest#hierarchyId
   */
  readonly hierarchyId: string;

  /**
   * @schema DisassociateAssetsRequest#childAssetId
   */
  readonly childAssetId: string;

  /**
   * @schema DisassociateAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema GetAssetPropertyAggregatesRequest
 */
export interface GetAssetPropertyAggregatesRequest {
  /**
   * @schema GetAssetPropertyAggregatesRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#aggregateTypes
   */
  readonly aggregateTypes: string[];

  /**
   * @schema GetAssetPropertyAggregatesRequest#resolution
   */
  readonly resolution: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#qualities
   */
  readonly qualities?: string[];

  /**
   * @schema GetAssetPropertyAggregatesRequest#startDate
   */
  readonly startDate: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#endDate
   */
  readonly endDate: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#timeOrdering
   */
  readonly timeOrdering?: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetAssetPropertyAggregatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetAssetPropertyAggregatesResponse
 */
export interface GetAssetPropertyAggregatesResponse {
  /**
   * @schema GetAssetPropertyAggregatesResponse#aggregatedValues
   */
  readonly aggregatedValues: AggregatedValue[];

  /**
   * @schema GetAssetPropertyAggregatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetAssetPropertyValueRequest
 */
export interface GetAssetPropertyValueRequest {
  /**
   * @schema GetAssetPropertyValueRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema GetAssetPropertyValueRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema GetAssetPropertyValueRequest#propertyAlias
   */
  readonly propertyAlias?: string;

}

/**
 * @schema GetAssetPropertyValueResponse
 */
export interface GetAssetPropertyValueResponse {
  /**
   * @schema GetAssetPropertyValueResponse#propertyValue
   */
  readonly propertyValue?: AssetPropertyValue;

}

/**
 * @schema GetAssetPropertyValueHistoryRequest
 */
export interface GetAssetPropertyValueHistoryRequest {
  /**
   * @schema GetAssetPropertyValueHistoryRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#startDate
   */
  readonly startDate?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#endDate
   */
  readonly endDate?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#qualities
   */
  readonly qualities?: string[];

  /**
   * @schema GetAssetPropertyValueHistoryRequest#timeOrdering
   */
  readonly timeOrdering?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetAssetPropertyValueHistoryRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetAssetPropertyValueHistoryResponse
 */
export interface GetAssetPropertyValueHistoryResponse {
  /**
   * @schema GetAssetPropertyValueHistoryResponse#assetPropertyValueHistory
   */
  readonly assetPropertyValueHistory: AssetPropertyValue[];

  /**
   * @schema GetAssetPropertyValueHistoryResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAccessPoliciesRequest
 */
export interface ListAccessPoliciesRequest {
  /**
   * @schema ListAccessPoliciesRequest#identityType
   */
  readonly identityType?: string;

  /**
   * @schema ListAccessPoliciesRequest#identityId
   */
  readonly identityId?: string;

  /**
   * @schema ListAccessPoliciesRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListAccessPoliciesRequest#resourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ListAccessPoliciesRequest#iamArn
   */
  readonly iamArn?: string;

  /**
   * @schema ListAccessPoliciesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccessPoliciesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAccessPoliciesResponse
 */
export interface ListAccessPoliciesResponse {
  /**
   * @schema ListAccessPoliciesResponse#accessPolicySummaries
   */
  readonly accessPolicySummaries: AccessPolicySummary[];

  /**
   * @schema ListAccessPoliciesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssetModelsRequest
 */
export interface ListAssetModelsRequest {
  /**
   * @schema ListAssetModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssetModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssetModelsResponse
 */
export interface ListAssetModelsResponse {
  /**
   * @schema ListAssetModelsResponse#assetModelSummaries
   */
  readonly assetModelSummaries: AssetModelSummary[];

  /**
   * @schema ListAssetModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssetsRequest
 */
export interface ListAssetsRequest {
  /**
   * @schema ListAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAssetsRequest#assetModelId
   */
  readonly assetModelId?: string;

  /**
   * @schema ListAssetsRequest#filter
   */
  readonly filter?: string;

}

/**
 * @schema ListAssetsResponse
 */
export interface ListAssetsResponse {
  /**
   * @schema ListAssetsResponse#assetSummaries
   */
  readonly assetSummaries: AssetSummary[];

  /**
   * @schema ListAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociatedAssetsRequest
 */
export interface ListAssociatedAssetsRequest {
  /**
   * @schema ListAssociatedAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema ListAssociatedAssetsRequest#hierarchyId
   */
  readonly hierarchyId?: string;

  /**
   * @schema ListAssociatedAssetsRequest#traversalDirection
   */
  readonly traversalDirection?: string;

  /**
   * @schema ListAssociatedAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAssociatedAssetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAssociatedAssetsResponse
 */
export interface ListAssociatedAssetsResponse {
  /**
   * @schema ListAssociatedAssetsResponse#assetSummaries
   */
  readonly assetSummaries: AssociatedAssetsSummary[];

  /**
   * @schema ListAssociatedAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDashboardsRequest
 */
export interface ListDashboardsRequest {
  /**
   * @schema ListDashboardsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema ListDashboardsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDashboardsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDashboardsResponse
 */
export interface ListDashboardsResponse {
  /**
   * @schema ListDashboardsResponse#dashboardSummaries
   */
  readonly dashboardSummaries: DashboardSummary[];

  /**
   * @schema ListDashboardsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGatewaysRequest
 */
export interface ListGatewaysRequest {
  /**
   * @schema ListGatewaysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGatewaysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListGatewaysResponse
 */
export interface ListGatewaysResponse {
  /**
   * @schema ListGatewaysResponse#gatewaySummaries
   */
  readonly gatewaySummaries: GatewaySummary[];

  /**
   * @schema ListGatewaysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPortalsRequest
 */
export interface ListPortalsRequest {
  /**
   * @schema ListPortalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPortalsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPortalsResponse
 */
export interface ListPortalsResponse {
  /**
   * @schema ListPortalsResponse#portalSummaries
   */
  readonly portalSummaries?: PortalSummary[];

  /**
   * @schema ListPortalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectAssetsRequest
 */
export interface ListProjectAssetsRequest {
  /**
   * @schema ListProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema ListProjectAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProjectAssetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProjectAssetsResponse
 */
export interface ListProjectAssetsResponse {
  /**
   * @schema ListProjectAssetsResponse#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema ListProjectAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsRequest
 */
export interface ListProjectsRequest {
  /**
   * @schema ListProjectsRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema ListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProjectsResponse
 */
export interface ListProjectsResponse {
  /**
   * @schema ListProjectsResponse#projectSummaries
   */
  readonly projectSummaries: ProjectSummary[];

  /**
   * @schema ListProjectsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutDefaultEncryptionConfigurationRequest
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * @schema PutDefaultEncryptionConfigurationRequest#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema PutDefaultEncryptionConfigurationRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema PutDefaultEncryptionConfigurationResponse
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * @schema PutDefaultEncryptionConfigurationResponse#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema PutDefaultEncryptionConfigurationResponse#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema PutDefaultEncryptionConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: ConfigurationStatus;

}

/**
 * @schema PutLoggingOptionsRequest
 */
export interface PutLoggingOptionsRequest {
  /**
   * @schema PutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: LoggingOptions;

}

/**
 * @schema PutLoggingOptionsResponse
 */
export interface PutLoggingOptionsResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAccessPolicyRequest
 */
export interface UpdateAccessPolicyRequest {
  /**
   * @schema UpdateAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema UpdateAccessPolicyRequest#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: Identity;

  /**
   * @schema UpdateAccessPolicyRequest#accessPolicyResource
   */
  readonly accessPolicyResource: Resource;

  /**
   * @schema UpdateAccessPolicyRequest#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema UpdateAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateAccessPolicyResponse
 */
export interface UpdateAccessPolicyResponse {
}

/**
 * @schema UpdateAssetRequest
 */
export interface UpdateAssetRequest {
  /**
   * @schema UpdateAssetRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema UpdateAssetRequest#assetName
   */
  readonly assetName: string;

  /**
   * @schema UpdateAssetRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateAssetResponse
 */
export interface UpdateAssetResponse {
  /**
   * @schema UpdateAssetResponse#assetStatus
   */
  readonly assetStatus: AssetStatus;

}

/**
 * @schema UpdateAssetModelRequest
 */
export interface UpdateAssetModelRequest {
  /**
   * @schema UpdateAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema UpdateAssetModelRequest#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema UpdateAssetModelRequest#assetModelDescription
   */
  readonly assetModelDescription?: string;

  /**
   * @schema UpdateAssetModelRequest#assetModelProperties
   */
  readonly assetModelProperties?: AssetModelProperty[];

  /**
   * @schema UpdateAssetModelRequest#assetModelHierarchies
   */
  readonly assetModelHierarchies?: AssetModelHierarchy[];

  /**
   * @schema UpdateAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateAssetModelResponse
 */
export interface UpdateAssetModelResponse {
  /**
   * @schema UpdateAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: AssetModelStatus;

}

/**
 * @schema UpdateAssetPropertyRequest
 */
export interface UpdateAssetPropertyRequest {
  /**
   * @schema UpdateAssetPropertyRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema UpdateAssetPropertyRequest#propertyId
   */
  readonly propertyId: string;

  /**
   * @schema UpdateAssetPropertyRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema UpdateAssetPropertyRequest#propertyNotificationState
   */
  readonly propertyNotificationState?: string;

  /**
   * @schema UpdateAssetPropertyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateDashboardRequest
 */
export interface UpdateDashboardRequest {
  /**
   * @schema UpdateDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema UpdateDashboardRequest#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema UpdateDashboardRequest#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema UpdateDashboardRequest#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema UpdateDashboardRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateDashboardResponse
 */
export interface UpdateDashboardResponse {
}

/**
 * @schema UpdateGatewayRequest
 */
export interface UpdateGatewayRequest {
  /**
   * @schema UpdateGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema UpdateGatewayRequest#gatewayName
   */
  readonly gatewayName: string;

}

/**
 * @schema UpdateGatewayCapabilityConfigurationRequest
 */
export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * @schema UpdateGatewayCapabilityConfigurationRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema UpdateGatewayCapabilityConfigurationRequest#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema UpdateGatewayCapabilityConfigurationRequest#capabilityConfiguration
   */
  readonly capabilityConfiguration: string;

}

/**
 * @schema UpdateGatewayCapabilityConfigurationResponse
 */
export interface UpdateGatewayCapabilityConfigurationResponse {
  /**
   * @schema UpdateGatewayCapabilityConfigurationResponse#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema UpdateGatewayCapabilityConfigurationResponse#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * @schema UpdatePortalRequest
 */
export interface UpdatePortalRequest {
  /**
   * @schema UpdatePortalRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema UpdatePortalRequest#portalName
   */
  readonly portalName: string;

  /**
   * @schema UpdatePortalRequest#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema UpdatePortalRequest#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema UpdatePortalRequest#portalLogoImage
   */
  readonly portalLogoImage?: Image;

  /**
   * @schema UpdatePortalRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema UpdatePortalRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdatePortalResponse
 */
export interface UpdatePortalResponse {
  /**
   * @schema UpdatePortalResponse#portalStatus
   */
  readonly portalStatus: PortalStatus;

}

/**
 * @schema UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * @schema UpdateProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema UpdateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema UpdateProjectRequest#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema UpdateProjectRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema UpdateProjectResponse
 */
export interface UpdateProjectResponse {
}

/**
 * @schema AssetErrorDetails
 */
export interface AssetErrorDetails {
  /**
   * @schema AssetErrorDetails#assetId
   */
  readonly assetId: string;

  /**
   * @schema AssetErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema AssetErrorDetails#message
   */
  readonly message: string;

}

/**
 * @schema PutAssetPropertyValueEntry
 */
export interface PutAssetPropertyValueEntry {
  /**
   * @schema PutAssetPropertyValueEntry#entryId
   */
  readonly entryId: string;

  /**
   * @schema PutAssetPropertyValueEntry#assetId
   */
  readonly assetId?: string;

  /**
   * @schema PutAssetPropertyValueEntry#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema PutAssetPropertyValueEntry#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema PutAssetPropertyValueEntry#propertyValues
   */
  readonly propertyValues: AssetPropertyValue[];

}

/**
 * @schema BatchPutAssetPropertyErrorEntry
 */
export interface BatchPutAssetPropertyErrorEntry {
  /**
   * @schema BatchPutAssetPropertyErrorEntry#entryId
   */
  readonly entryId: string;

  /**
   * @schema BatchPutAssetPropertyErrorEntry#errors
   */
  readonly errors: BatchPutAssetPropertyError[];

}

/**
 * @schema Identity
 */
export interface Identity {
  /**
   * @schema Identity#user
   */
  readonly user?: UserIdentity;

  /**
   * @schema Identity#group
   */
  readonly group?: GroupIdentity;

  /**
   * @schema Identity#iamUser
   */
  readonly iamUser?: IamUserIdentity;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#portal
   */
  readonly portal?: PortalResource;

  /**
   * @schema Resource#project
   */
  readonly project?: ProjectResource;

}

/**
 * @schema AssetStatus
 */
export interface AssetStatus {
  /**
   * @schema AssetStatus#state
   */
  readonly state: string;

  /**
   * @schema AssetStatus#error
   */
  readonly error?: ErrorDetails;

}

/**
 * @schema AssetModelPropertyDefinition
 */
export interface AssetModelPropertyDefinition {
  /**
   * @schema AssetModelPropertyDefinition#name
   */
  readonly name: string;

  /**
   * @schema AssetModelPropertyDefinition#dataType
   */
  readonly dataType: string;

  /**
   * @schema AssetModelPropertyDefinition#unit
   */
  readonly unit?: string;

  /**
   * @schema AssetModelPropertyDefinition#type
   */
  readonly type: PropertyType;

}

/**
 * @schema AssetModelHierarchyDefinition
 */
export interface AssetModelHierarchyDefinition {
  /**
   * @schema AssetModelHierarchyDefinition#name
   */
  readonly name: string;

  /**
   * @schema AssetModelHierarchyDefinition#childAssetModelId
   */
  readonly childAssetModelId: string;

}

/**
 * @schema AssetModelStatus
 */
export interface AssetModelStatus {
  /**
   * @schema AssetModelStatus#state
   */
  readonly state: string;

  /**
   * @schema AssetModelStatus#error
   */
  readonly error?: ErrorDetails;

}

/**
 * @schema GatewayPlatform
 */
export interface GatewayPlatform {
  /**
   * @schema GatewayPlatform#greengrass
   */
  readonly greengrass: Greengrass;

}

/**
 * @schema ImageFile
 */
export interface ImageFile {
  /**
   * @schema ImageFile#data
   */
  readonly data: any;

  /**
   * @schema ImageFile#type
   */
  readonly type: string;

}

/**
 * @schema PortalStatus
 */
export interface PortalStatus {
  /**
   * @schema PortalStatus#state
   */
  readonly state: string;

  /**
   * @schema PortalStatus#error
   */
  readonly error?: MonitorErrorDetails;

}

/**
 * @schema AssetProperty
 */
export interface AssetProperty {
  /**
   * @schema AssetProperty#id
   */
  readonly id: string;

  /**
   * @schema AssetProperty#name
   */
  readonly name: string;

  /**
   * @schema AssetProperty#alias
   */
  readonly alias?: string;

  /**
   * @schema AssetProperty#notification
   */
  readonly notification?: PropertyNotification;

  /**
   * @schema AssetProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema AssetProperty#unit
   */
  readonly unit?: string;

}

/**
 * @schema AssetHierarchy
 */
export interface AssetHierarchy {
  /**
   * @schema AssetHierarchy#id
   */
  readonly id?: string;

  /**
   * @schema AssetHierarchy#name
   */
  readonly name: string;

}

/**
 * @schema AssetModelProperty
 */
export interface AssetModelProperty {
  /**
   * @schema AssetModelProperty#id
   */
  readonly id?: string;

  /**
   * @schema AssetModelProperty#name
   */
  readonly name: string;

  /**
   * @schema AssetModelProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema AssetModelProperty#unit
   */
  readonly unit?: string;

  /**
   * @schema AssetModelProperty#type
   */
  readonly type: PropertyType;

}

/**
 * @schema AssetModelHierarchy
 */
export interface AssetModelHierarchy {
  /**
   * @schema AssetModelHierarchy#id
   */
  readonly id?: string;

  /**
   * @schema AssetModelHierarchy#name
   */
  readonly name: string;

  /**
   * @schema AssetModelHierarchy#childAssetModelId
   */
  readonly childAssetModelId: string;

}

/**
 * @schema Property
 */
export interface Property {
  /**
   * @schema Property#id
   */
  readonly id: string;

  /**
   * @schema Property#name
   */
  readonly name: string;

  /**
   * @schema Property#alias
   */
  readonly alias?: string;

  /**
   * @schema Property#notification
   */
  readonly notification?: PropertyNotification;

  /**
   * @schema Property#dataType
   */
  readonly dataType: string;

  /**
   * @schema Property#unit
   */
  readonly unit?: string;

  /**
   * @schema Property#type
   */
  readonly type?: PropertyType;

}

/**
 * @schema ConfigurationStatus
 */
export interface ConfigurationStatus {
  /**
   * @schema ConfigurationStatus#state
   */
  readonly state: string;

  /**
   * @schema ConfigurationStatus#error
   */
  readonly error?: ConfigurationErrorDetails;

}

/**
 * @schema GatewayCapabilitySummary
 */
export interface GatewayCapabilitySummary {
  /**
   * @schema GatewayCapabilitySummary#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema GatewayCapabilitySummary#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * @schema LoggingOptions
 */
export interface LoggingOptions {
  /**
   * @schema LoggingOptions#level
   */
  readonly level: string;

}

/**
 * @schema ImageLocation
 */
export interface ImageLocation {
  /**
   * @schema ImageLocation#id
   */
  readonly id: string;

  /**
   * @schema ImageLocation#url
   */
  readonly url: string;

}

/**
 * @schema AggregatedValue
 */
export interface AggregatedValue {
  /**
   * @schema AggregatedValue#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema AggregatedValue#quality
   */
  readonly quality?: string;

  /**
   * @schema AggregatedValue#value
   */
  readonly value: Aggregates;

}

/**
 * @schema AssetPropertyValue
 */
export interface AssetPropertyValue {
  /**
   * @schema AssetPropertyValue#value
   */
  readonly value: Variant;

  /**
   * @schema AssetPropertyValue#timestamp
   */
  readonly timestamp: TimeInNanos;

  /**
   * @schema AssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * @schema AccessPolicySummary
 */
export interface AccessPolicySummary {
  /**
   * @schema AccessPolicySummary#id
   */
  readonly id: string;

  /**
   * @schema AccessPolicySummary#identity
   */
  readonly identity: Identity;

  /**
   * @schema AccessPolicySummary#resource
   */
  readonly resource: Resource;

  /**
   * @schema AccessPolicySummary#permission
   */
  readonly permission: string;

  /**
   * @schema AccessPolicySummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema AccessPolicySummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * @schema AssetModelSummary
 */
export interface AssetModelSummary {
  /**
   * @schema AssetModelSummary#id
   */
  readonly id: string;

  /**
   * @schema AssetModelSummary#arn
   */
  readonly arn: string;

  /**
   * @schema AssetModelSummary#name
   */
  readonly name: string;

  /**
   * @schema AssetModelSummary#description
   */
  readonly description: string;

  /**
   * @schema AssetModelSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema AssetModelSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema AssetModelSummary#status
   */
  readonly status: AssetModelStatus;

}

/**
 * @schema AssetSummary
 */
export interface AssetSummary {
  /**
   * @schema AssetSummary#id
   */
  readonly id: string;

  /**
   * @schema AssetSummary#arn
   */
  readonly arn: string;

  /**
   * @schema AssetSummary#name
   */
  readonly name: string;

  /**
   * @schema AssetSummary#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema AssetSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema AssetSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema AssetSummary#status
   */
  readonly status: AssetStatus;

  /**
   * @schema AssetSummary#hierarchies
   */
  readonly hierarchies: AssetHierarchy[];

}

/**
 * @schema AssociatedAssetsSummary
 */
export interface AssociatedAssetsSummary {
  /**
   * @schema AssociatedAssetsSummary#id
   */
  readonly id: string;

  /**
   * @schema AssociatedAssetsSummary#arn
   */
  readonly arn: string;

  /**
   * @schema AssociatedAssetsSummary#name
   */
  readonly name: string;

  /**
   * @schema AssociatedAssetsSummary#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema AssociatedAssetsSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema AssociatedAssetsSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema AssociatedAssetsSummary#status
   */
  readonly status: AssetStatus;

  /**
   * @schema AssociatedAssetsSummary#hierarchies
   */
  readonly hierarchies: AssetHierarchy[];

}

/**
 * @schema DashboardSummary
 */
export interface DashboardSummary {
  /**
   * @schema DashboardSummary#id
   */
  readonly id: string;

  /**
   * @schema DashboardSummary#name
   */
  readonly name: string;

  /**
   * @schema DashboardSummary#description
   */
  readonly description?: string;

  /**
   * @schema DashboardSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DashboardSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * @schema GatewaySummary
 */
export interface GatewaySummary {
  /**
   * @schema GatewaySummary#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema GatewaySummary#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema GatewaySummary#gatewayCapabilitySummaries
   */
  readonly gatewayCapabilitySummaries?: GatewayCapabilitySummary[];

  /**
   * @schema GatewaySummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema GatewaySummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

}

/**
 * @schema PortalSummary
 */
export interface PortalSummary {
  /**
   * @schema PortalSummary#id
   */
  readonly id: string;

  /**
   * @schema PortalSummary#name
   */
  readonly name: string;

  /**
   * @schema PortalSummary#description
   */
  readonly description?: string;

  /**
   * @schema PortalSummary#startUrl
   */
  readonly startUrl: string;

  /**
   * @schema PortalSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema PortalSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

  /**
   * @schema PortalSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PortalSummary#status
   */
  readonly status: PortalStatus;

}

/**
 * @schema ProjectSummary
 */
export interface ProjectSummary {
  /**
   * @schema ProjectSummary#id
   */
  readonly id: string;

  /**
   * @schema ProjectSummary#name
   */
  readonly name: string;

  /**
   * @schema ProjectSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProjectSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ProjectSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#id
   */
  readonly id?: string;

  /**
   * @schema Image#file
   */
  readonly file?: ImageFile;

}

/**
 * @schema BatchPutAssetPropertyError
 */
export interface BatchPutAssetPropertyError {
  /**
   * @schema BatchPutAssetPropertyError#errorCode
   */
  readonly errorCode: string;

  /**
   * @schema BatchPutAssetPropertyError#errorMessage
   */
  readonly errorMessage: string;

  /**
   * @schema BatchPutAssetPropertyError#timestamps
   */
  readonly timestamps: TimeInNanos[];

}

/**
 * @schema UserIdentity
 */
export interface UserIdentity {
  /**
   * @schema UserIdentity#id
   */
  readonly id: string;

}

/**
 * @schema GroupIdentity
 */
export interface GroupIdentity {
  /**
   * @schema GroupIdentity#id
   */
  readonly id: string;

}

/**
 * @schema IamUserIdentity
 */
export interface IamUserIdentity {
  /**
   * @schema IamUserIdentity#arn
   */
  readonly arn: string;

}

/**
 * @schema PortalResource
 */
export interface PortalResource {
  /**
   * @schema PortalResource#id
   */
  readonly id: string;

}

/**
 * @schema ProjectResource
 */
export interface ProjectResource {
  /**
   * @schema ProjectResource#id
   */
  readonly id: string;

}

/**
 * @schema ErrorDetails
 */
export interface ErrorDetails {
  /**
   * @schema ErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema ErrorDetails#message
   */
  readonly message: string;

}

/**
 * @schema PropertyType
 */
export interface PropertyType {
  /**
   * @schema PropertyType#attribute
   */
  readonly attribute?: Attribute;

  /**
   * @schema PropertyType#measurement
   */
  readonly measurement?: Measurement;

  /**
   * @schema PropertyType#transform
   */
  readonly transform?: Transform;

  /**
   * @schema PropertyType#metric
   */
  readonly metric?: Metric;

}

/**
 * @schema Greengrass
 */
export interface Greengrass {
  /**
   * @schema Greengrass#groupArn
   */
  readonly groupArn: string;

}

/**
 * @schema MonitorErrorDetails
 */
export interface MonitorErrorDetails {
  /**
   * @schema MonitorErrorDetails#code
   */
  readonly code?: string;

  /**
   * @schema MonitorErrorDetails#message
   */
  readonly message?: string;

}

/**
 * @schema PropertyNotification
 */
export interface PropertyNotification {
  /**
   * @schema PropertyNotification#topic
   */
  readonly topic: string;

  /**
   * @schema PropertyNotification#state
   */
  readonly state: string;

}

/**
 * @schema ConfigurationErrorDetails
 */
export interface ConfigurationErrorDetails {
  /**
   * @schema ConfigurationErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema ConfigurationErrorDetails#message
   */
  readonly message: string;

}

/**
 * @schema Aggregates
 */
export interface Aggregates {
  /**
   * @schema Aggregates#average
   */
  readonly average?: number;

  /**
   * @schema Aggregates#count
   */
  readonly count?: number;

  /**
   * @schema Aggregates#maximum
   */
  readonly maximum?: number;

  /**
   * @schema Aggregates#minimum
   */
  readonly minimum?: number;

  /**
   * @schema Aggregates#sum
   */
  readonly sum?: number;

  /**
   * @schema Aggregates#standardDeviation
   */
  readonly standardDeviation?: number;

}

/**
 * @schema Variant
 */
export interface Variant {
  /**
   * @schema Variant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema Variant#integerValue
   */
  readonly integerValue?: number;

  /**
   * @schema Variant#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema Variant#booleanValue
   */
  readonly booleanValue?: boolean;

}

/**
 * @schema TimeInNanos
 */
export interface TimeInNanos {
  /**
   * @schema TimeInNanos#timeInSeconds
   */
  readonly timeInSeconds: number;

  /**
   * @schema TimeInNanos#offsetInNanos
   */
  readonly offsetInNanos?: number;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#defaultValue
   */
  readonly defaultValue?: string;

}

/**
 * @schema Measurement
 */
export interface Measurement {
}

/**
 * @schema Transform
 */
export interface Transform {
  /**
   * @schema Transform#expression
   */
  readonly expression: string;

  /**
   * @schema Transform#variables
   */
  readonly variables: ExpressionVariable[];

}

/**
 * @schema Metric
 */
export interface Metric {
  /**
   * @schema Metric#expression
   */
  readonly expression: string;

  /**
   * @schema Metric#variables
   */
  readonly variables: ExpressionVariable[];

  /**
   * @schema Metric#window
   */
  readonly window: MetricWindow;

}

/**
 * @schema ExpressionVariable
 */
export interface ExpressionVariable {
  /**
   * @schema ExpressionVariable#name
   */
  readonly name: string;

  /**
   * @schema ExpressionVariable#value
   */
  readonly value: VariableValue;

}

/**
 * @schema MetricWindow
 */
export interface MetricWindow {
  /**
   * @schema MetricWindow#tumbling
   */
  readonly tumbling?: TumblingWindow;

}

/**
 * @schema VariableValue
 */
export interface VariableValue {
  /**
   * @schema VariableValue#propertyId
   */
  readonly propertyId: string;

  /**
   * @schema VariableValue#hierarchyId
   */
  readonly hierarchyId?: string;

}

/**
 * @schema TumblingWindow
 */
export interface TumblingWindow {
  /**
   * @schema TumblingWindow#interval
   */
  readonly interval: string;

}
