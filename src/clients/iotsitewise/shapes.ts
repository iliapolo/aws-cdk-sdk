/**
 * @schema IoTSiteWiseAssociateAssetsRequest
 */
export interface IoTSiteWiseAssociateAssetsRequest {
  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#hierarchyId
   */
  readonly hierarchyId: string;

  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#childAssetId
   */
  readonly childAssetId: string;

  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest
 */
export interface IoTSiteWiseBatchAssociateProjectAssetsRequest {
  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseBatchAssociateProjectAssetsResponse
 */
export interface IoTSiteWiseBatchAssociateProjectAssetsResponse {
  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsResponse#errors
   */
  readonly errors?: IoTSiteWiseAssetErrorDetails[];

}

/**
 * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest
 */
export interface IoTSiteWiseBatchDisassociateProjectAssetsRequest {
  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseBatchDisassociateProjectAssetsResponse
 */
export interface IoTSiteWiseBatchDisassociateProjectAssetsResponse {
  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsResponse#errors
   */
  readonly errors?: IoTSiteWiseAssetErrorDetails[];

}

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyValueRequest
 */
export interface IoTSiteWiseBatchPutAssetPropertyValueRequest {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyValueRequest#entries
   */
  readonly entries: IoTSiteWisePutAssetPropertyValueEntry[];

}

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyValueResponse
 */
export interface IoTSiteWiseBatchPutAssetPropertyValueResponse {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyValueResponse#errorEntries
   */
  readonly errorEntries: IoTSiteWiseBatchPutAssetPropertyErrorEntry[];

}

/**
 * @schema IoTSiteWiseCreateAccessPolicyRequest
 */
export interface IoTSiteWiseCreateAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#accessPolicyResource
   */
  readonly accessPolicyResource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseCreateAccessPolicyResponse
 */
export interface IoTSiteWiseCreateAccessPolicyResponse {
  /**
   * @schema IoTSiteWiseCreateAccessPolicyResponse#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyResponse#accessPolicyArn
   */
  readonly accessPolicyArn: string;

}

/**
 * @schema IoTSiteWiseCreateAssetRequest
 */
export interface IoTSiteWiseCreateAssetRequest {
  /**
   * @schema IoTSiteWiseCreateAssetRequest#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseCreateAssetRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseCreateAssetRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateAssetRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseCreateAssetResponse
 */
export interface IoTSiteWiseCreateAssetResponse {
  /**
   * @schema IoTSiteWiseCreateAssetResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseCreateAssetResponse#assetArn
   */
  readonly assetArn: string;

  /**
   * @schema IoTSiteWiseCreateAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * @schema IoTSiteWiseCreateAssetModelRequest
 */
export interface IoTSiteWiseCreateAssetModelRequest {
  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelDescription
   */
  readonly assetModelDescription?: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelProperties
   */
  readonly assetModelProperties?: IoTSiteWiseAssetModelPropertyDefinition[];

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelHierarchies
   */
  readonly assetModelHierarchies?: IoTSiteWiseAssetModelHierarchyDefinition[];

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseCreateAssetModelResponse
 */
export interface IoTSiteWiseCreateAssetModelResponse {
  /**
   * @schema IoTSiteWiseCreateAssetModelResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelResponse#assetModelArn
   */
  readonly assetModelArn: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * @schema IoTSiteWiseCreateDashboardRequest
 */
export interface IoTSiteWiseCreateDashboardRequest {
  /**
   * @schema IoTSiteWiseCreateDashboardRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseCreateDashboardResponse
 */
export interface IoTSiteWiseCreateDashboardResponse {
  /**
   * @schema IoTSiteWiseCreateDashboardResponse#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseCreateDashboardResponse#dashboardArn
   */
  readonly dashboardArn: string;

}

/**
 * @schema IoTSiteWiseCreateGatewayRequest
 */
export interface IoTSiteWiseCreateGatewayRequest {
  /**
   * @schema IoTSiteWiseCreateGatewayRequest#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema IoTSiteWiseCreateGatewayRequest#gatewayPlatform
   */
  readonly gatewayPlatform: IoTSiteWiseGatewayPlatform;

  /**
   * @schema IoTSiteWiseCreateGatewayRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseCreateGatewayResponse
 */
export interface IoTSiteWiseCreateGatewayResponse {
  /**
   * @schema IoTSiteWiseCreateGatewayResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseCreateGatewayResponse#gatewayArn
   */
  readonly gatewayArn: string;

}

/**
 * @schema IoTSiteWiseCreatePortalRequest
 */
export interface IoTSiteWiseCreatePortalRequest {
  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalName
   */
  readonly portalName: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalLogoImageFile
   */
  readonly portalLogoImageFile?: IoTSiteWiseImageFile;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalAuthMode
   */
  readonly portalAuthMode?: string;

}

/**
 * @schema IoTSiteWiseCreatePortalResponse
 */
export interface IoTSiteWiseCreatePortalResponse {
  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalArn
   */
  readonly portalArn: string;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalStartUrl
   */
  readonly portalStartUrl: string;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#ssoApplicationId
   */
  readonly ssoApplicationId: string;

}

/**
 * @schema IoTSiteWiseCreatePresignedPortalUrlRequest
 */
export interface IoTSiteWiseCreatePresignedPortalUrlRequest {
  /**
   * @schema IoTSiteWiseCreatePresignedPortalUrlRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseCreatePresignedPortalUrlRequest#sessionDurationSeconds
   */
  readonly sessionDurationSeconds?: number;

}

/**
 * @schema IoTSiteWiseCreatePresignedPortalUrlResponse
 */
export interface IoTSiteWiseCreatePresignedPortalUrlResponse {
  /**
   * @schema IoTSiteWiseCreatePresignedPortalUrlResponse#presignedPortalUrl
   */
  readonly presignedPortalUrl: string;

}

/**
 * @schema IoTSiteWiseCreateProjectRequest
 */
export interface IoTSiteWiseCreateProjectRequest {
  /**
   * @schema IoTSiteWiseCreateProjectRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseCreateProjectResponse
 */
export interface IoTSiteWiseCreateProjectResponse {
  /**
   * @schema IoTSiteWiseCreateProjectResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseCreateProjectResponse#projectArn
   */
  readonly projectArn: string;

}

/**
 * @schema IoTSiteWiseDeleteAccessPolicyRequest
 */
export interface IoTSiteWiseDeleteAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseDeleteAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseDeleteAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseDeleteAccessPolicyResponse
 */
export interface IoTSiteWiseDeleteAccessPolicyResponse {
}

/**
 * @schema IoTSiteWiseDeleteAssetRequest
 */
export interface IoTSiteWiseDeleteAssetRequest {
  /**
   * @schema IoTSiteWiseDeleteAssetRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDeleteAssetRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseDeleteAssetResponse
 */
export interface IoTSiteWiseDeleteAssetResponse {
  /**
   * @schema IoTSiteWiseDeleteAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * @schema IoTSiteWiseDeleteAssetModelRequest
 */
export interface IoTSiteWiseDeleteAssetModelRequest {
  /**
   * @schema IoTSiteWiseDeleteAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDeleteAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseDeleteAssetModelResponse
 */
export interface IoTSiteWiseDeleteAssetModelResponse {
  /**
   * @schema IoTSiteWiseDeleteAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * @schema IoTSiteWiseDeleteDashboardRequest
 */
export interface IoTSiteWiseDeleteDashboardRequest {
  /**
   * @schema IoTSiteWiseDeleteDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseDeleteDashboardRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseDeleteDashboardResponse
 */
export interface IoTSiteWiseDeleteDashboardResponse {
}

/**
 * @schema IoTSiteWiseDeleteGatewayRequest
 */
export interface IoTSiteWiseDeleteGatewayRequest {
  /**
   * @schema IoTSiteWiseDeleteGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

}

/**
 * @schema IoTSiteWiseDeletePortalRequest
 */
export interface IoTSiteWiseDeletePortalRequest {
  /**
   * @schema IoTSiteWiseDeletePortalRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseDeletePortalRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseDeletePortalResponse
 */
export interface IoTSiteWiseDeletePortalResponse {
  /**
   * @schema IoTSiteWiseDeletePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

}

/**
 * @schema IoTSiteWiseDeleteProjectRequest
 */
export interface IoTSiteWiseDeleteProjectRequest {
  /**
   * @schema IoTSiteWiseDeleteProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseDeleteProjectRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseDeleteProjectResponse
 */
export interface IoTSiteWiseDeleteProjectResponse {
}

/**
 * @schema IoTSiteWiseDescribeAccessPolicyRequest
 */
export interface IoTSiteWiseDescribeAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseDescribeAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

}

/**
 * @schema IoTSiteWiseDescribeAccessPolicyResponse
 */
export interface IoTSiteWiseDescribeAccessPolicyResponse {
  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyArn
   */
  readonly accessPolicyArn: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyResource
   */
  readonly accessPolicyResource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyCreationDate
   */
  readonly accessPolicyCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyLastUpdateDate
   */
  readonly accessPolicyLastUpdateDate: string;

}

/**
 * @schema IoTSiteWiseDescribeAssetRequest
 */
export interface IoTSiteWiseDescribeAssetRequest {
  /**
   * @schema IoTSiteWiseDescribeAssetRequest#assetId
   */
  readonly assetId: string;

}

/**
 * @schema IoTSiteWiseDescribeAssetResponse
 */
export interface IoTSiteWiseDescribeAssetResponse {
  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetArn
   */
  readonly assetArn: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetProperties
   */
  readonly assetProperties: IoTSiteWiseAssetProperty[];

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetHierarchies
   */
  readonly assetHierarchies: IoTSiteWiseAssetHierarchy[];

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetCreationDate
   */
  readonly assetCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetLastUpdateDate
   */
  readonly assetLastUpdateDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * @schema IoTSiteWiseDescribeAssetModelRequest
 */
export interface IoTSiteWiseDescribeAssetModelRequest {
  /**
   * @schema IoTSiteWiseDescribeAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

}

/**
 * @schema IoTSiteWiseDescribeAssetModelResponse
 */
export interface IoTSiteWiseDescribeAssetModelResponse {
  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelArn
   */
  readonly assetModelArn: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelDescription
   */
  readonly assetModelDescription: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelProperties
   */
  readonly assetModelProperties: IoTSiteWiseAssetModelProperty[];

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelHierarchies
   */
  readonly assetModelHierarchies: IoTSiteWiseAssetModelHierarchy[];

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelCreationDate
   */
  readonly assetModelCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelLastUpdateDate
   */
  readonly assetModelLastUpdateDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * @schema IoTSiteWiseDescribeAssetPropertyRequest
 */
export interface IoTSiteWiseDescribeAssetPropertyRequest {
  /**
   * @schema IoTSiteWiseDescribeAssetPropertyRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyRequest#propertyId
   */
  readonly propertyId: string;

}

/**
 * @schema IoTSiteWiseDescribeAssetPropertyResponse
 */
export interface IoTSiteWiseDescribeAssetPropertyResponse {
  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetProperty
   */
  readonly assetProperty: IoTSiteWiseProperty;

}

/**
 * @schema IoTSiteWiseDescribeDashboardRequest
 */
export interface IoTSiteWiseDescribeDashboardRequest {
  /**
   * @schema IoTSiteWiseDescribeDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

}

/**
 * @schema IoTSiteWiseDescribeDashboardResponse
 */
export interface IoTSiteWiseDescribeDashboardResponse {
  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardArn
   */
  readonly dashboardArn: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardCreationDate
   */
  readonly dashboardCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardLastUpdateDate
   */
  readonly dashboardLastUpdateDate: string;

}

/**
 * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest
 */
export interface IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest {
}

/**
 * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse
 */
export interface IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse {
  /**
   * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: IoTSiteWiseConfigurationStatus;

}

/**
 * @schema IoTSiteWiseDescribeGatewayRequest
 */
export interface IoTSiteWiseDescribeGatewayRequest {
  /**
   * @schema IoTSiteWiseDescribeGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

}

/**
 * @schema IoTSiteWiseDescribeGatewayResponse
 */
export interface IoTSiteWiseDescribeGatewayResponse {
  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayArn
   */
  readonly gatewayArn: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayPlatform
   */
  readonly gatewayPlatform?: IoTSiteWiseGatewayPlatform;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayCapabilitySummaries
   */
  readonly gatewayCapabilitySummaries: IoTSiteWiseGatewayCapabilitySummary[];

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#lastUpdateDate
   */
  readonly lastUpdateDate: string;

}

/**
 * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest
 */
export interface IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest {
  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest#capabilityNamespace
   */
  readonly capabilityNamespace: string;

}

/**
 * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse
 */
export interface IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse {
  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#capabilityConfiguration
   */
  readonly capabilityConfiguration: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * @schema IoTSiteWiseDescribeLoggingOptionsRequest
 */
export interface IoTSiteWiseDescribeLoggingOptionsRequest {
}

/**
 * @schema IoTSiteWiseDescribeLoggingOptionsResponse
 */
export interface IoTSiteWiseDescribeLoggingOptionsResponse {
  /**
   * @schema IoTSiteWiseDescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions: IoTSiteWiseLoggingOptions;

}

/**
 * @schema IoTSiteWiseDescribePortalRequest
 */
export interface IoTSiteWiseDescribePortalRequest {
  /**
   * @schema IoTSiteWiseDescribePortalRequest#portalId
   */
  readonly portalId: string;

}

/**
 * @schema IoTSiteWiseDescribePortalResponse
 */
export interface IoTSiteWiseDescribePortalResponse {
  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalArn
   */
  readonly portalArn: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalName
   */
  readonly portalName: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalClientId
   */
  readonly portalClientId: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalStartUrl
   */
  readonly portalStartUrl: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalCreationDate
   */
  readonly portalCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalLastUpdateDate
   */
  readonly portalLastUpdateDate: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalLogoImageLocation
   */
  readonly portalLogoImageLocation?: IoTSiteWiseImageLocation;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalAuthMode
   */
  readonly portalAuthMode?: string;

}

/**
 * @schema IoTSiteWiseDescribeProjectRequest
 */
export interface IoTSiteWiseDescribeProjectRequest {
  /**
   * @schema IoTSiteWiseDescribeProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * @schema IoTSiteWiseDescribeProjectResponse
 */
export interface IoTSiteWiseDescribeProjectResponse {
  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectCreationDate
   */
  readonly projectCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectLastUpdateDate
   */
  readonly projectLastUpdateDate: string;

}

/**
 * @schema IoTSiteWiseDisassociateAssetsRequest
 */
export interface IoTSiteWiseDisassociateAssetsRequest {
  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#hierarchyId
   */
  readonly hierarchyId: string;

  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#childAssetId
   */
  readonly childAssetId: string;

  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest
 */
export interface IoTSiteWiseGetAssetPropertyAggregatesRequest {
  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#aggregateTypes
   */
  readonly aggregateTypes: string[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#resolution
   */
  readonly resolution: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#qualities
   */
  readonly qualities?: string[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#startDate
   */
  readonly startDate: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#endDate
   */
  readonly endDate: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#timeOrdering
   */
  readonly timeOrdering?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseGetAssetPropertyAggregatesResponse
 */
export interface IoTSiteWiseGetAssetPropertyAggregatesResponse {
  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesResponse#aggregatedValues
   */
  readonly aggregatedValues: IoTSiteWiseAggregatedValue[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseGetAssetPropertyValueRequest
 */
export interface IoTSiteWiseGetAssetPropertyValueRequest {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueRequest#propertyAlias
   */
  readonly propertyAlias?: string;

}

/**
 * @schema IoTSiteWiseGetAssetPropertyValueResponse
 */
export interface IoTSiteWiseGetAssetPropertyValueResponse {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueResponse#propertyValue
   */
  readonly propertyValue?: IoTSiteWiseAssetPropertyValue;

}

/**
 * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest
 */
export interface IoTSiteWiseGetAssetPropertyValueHistoryRequest {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#startDate
   */
  readonly startDate?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#endDate
   */
  readonly endDate?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#qualities
   */
  readonly qualities?: string[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#timeOrdering
   */
  readonly timeOrdering?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseGetAssetPropertyValueHistoryResponse
 */
export interface IoTSiteWiseGetAssetPropertyValueHistoryResponse {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryResponse#assetPropertyValueHistory
   */
  readonly assetPropertyValueHistory: IoTSiteWiseAssetPropertyValue[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListAccessPoliciesRequest
 */
export interface IoTSiteWiseListAccessPoliciesRequest {
  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#identityType
   */
  readonly identityType?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#identityId
   */
  readonly identityId?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#resourceId
   */
  readonly resourceId?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#iamArn
   */
  readonly iamArn?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListAccessPoliciesResponse
 */
export interface IoTSiteWiseListAccessPoliciesResponse {
  /**
   * @schema IoTSiteWiseListAccessPoliciesResponse#accessPolicySummaries
   */
  readonly accessPolicySummaries: IoTSiteWiseAccessPolicySummary[];

  /**
   * @schema IoTSiteWiseListAccessPoliciesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListAssetModelsRequest
 */
export interface IoTSiteWiseListAssetModelsRequest {
  /**
   * @schema IoTSiteWiseListAssetModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssetModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListAssetModelsResponse
 */
export interface IoTSiteWiseListAssetModelsResponse {
  /**
   * @schema IoTSiteWiseListAssetModelsResponse#assetModelSummaries
   */
  readonly assetModelSummaries: IoTSiteWiseAssetModelSummary[];

  /**
   * @schema IoTSiteWiseListAssetModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListAssetsRequest
 */
export interface IoTSiteWiseListAssetsRequest {
  /**
   * @schema IoTSiteWiseListAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTSiteWiseListAssetsRequest#assetModelId
   */
  readonly assetModelId?: string;

  /**
   * @schema IoTSiteWiseListAssetsRequest#filter
   */
  readonly filter?: string;

}

/**
 * @schema IoTSiteWiseListAssetsResponse
 */
export interface IoTSiteWiseListAssetsResponse {
  /**
   * @schema IoTSiteWiseListAssetsResponse#assetSummaries
   */
  readonly assetSummaries: IoTSiteWiseAssetSummary[];

  /**
   * @schema IoTSiteWiseListAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListAssociatedAssetsRequest
 */
export interface IoTSiteWiseListAssociatedAssetsRequest {
  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#hierarchyId
   */
  readonly hierarchyId?: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#traversalDirection
   */
  readonly traversalDirection?: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListAssociatedAssetsResponse
 */
export interface IoTSiteWiseListAssociatedAssetsResponse {
  /**
   * @schema IoTSiteWiseListAssociatedAssetsResponse#assetSummaries
   */
  readonly assetSummaries: IoTSiteWiseAssociatedAssetsSummary[];

  /**
   * @schema IoTSiteWiseListAssociatedAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListDashboardsRequest
 */
export interface IoTSiteWiseListDashboardsRequest {
  /**
   * @schema IoTSiteWiseListDashboardsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseListDashboardsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListDashboardsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListDashboardsResponse
 */
export interface IoTSiteWiseListDashboardsResponse {
  /**
   * @schema IoTSiteWiseListDashboardsResponse#dashboardSummaries
   */
  readonly dashboardSummaries: IoTSiteWiseDashboardSummary[];

  /**
   * @schema IoTSiteWiseListDashboardsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListGatewaysRequest
 */
export interface IoTSiteWiseListGatewaysRequest {
  /**
   * @schema IoTSiteWiseListGatewaysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListGatewaysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListGatewaysResponse
 */
export interface IoTSiteWiseListGatewaysResponse {
  /**
   * @schema IoTSiteWiseListGatewaysResponse#gatewaySummaries
   */
  readonly gatewaySummaries: IoTSiteWiseGatewaySummary[];

  /**
   * @schema IoTSiteWiseListGatewaysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListPortalsRequest
 */
export interface IoTSiteWiseListPortalsRequest {
  /**
   * @schema IoTSiteWiseListPortalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListPortalsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListPortalsResponse
 */
export interface IoTSiteWiseListPortalsResponse {
  /**
   * @schema IoTSiteWiseListPortalsResponse#portalSummaries
   */
  readonly portalSummaries?: IoTSiteWisePortalSummary[];

  /**
   * @schema IoTSiteWiseListPortalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListProjectAssetsRequest
 */
export interface IoTSiteWiseListProjectAssetsRequest {
  /**
   * @schema IoTSiteWiseListProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseListProjectAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListProjectAssetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListProjectAssetsResponse
 */
export interface IoTSiteWiseListProjectAssetsResponse {
  /**
   * @schema IoTSiteWiseListProjectAssetsResponse#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema IoTSiteWiseListProjectAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListProjectsRequest
 */
export interface IoTSiteWiseListProjectsRequest {
  /**
   * @schema IoTSiteWiseListProjectsRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTSiteWiseListProjectsResponse
 */
export interface IoTSiteWiseListProjectsResponse {
  /**
   * @schema IoTSiteWiseListProjectsResponse#projectSummaries
   */
  readonly projectSummaries: IoTSiteWiseProjectSummary[];

  /**
   * @schema IoTSiteWiseListProjectsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTSiteWiseListTagsForResourceRequest
 */
export interface IoTSiteWiseListTagsForResourceRequest {
  /**
   * @schema IoTSiteWiseListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema IoTSiteWiseListTagsForResourceResponse
 */
export interface IoTSiteWiseListTagsForResourceResponse {
  /**
   * @schema IoTSiteWiseListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema IoTSiteWisePutDefaultEncryptionConfigurationRequest
 */
export interface IoTSiteWisePutDefaultEncryptionConfigurationRequest {
  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationRequest#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse
 */
export interface IoTSiteWisePutDefaultEncryptionConfigurationResponse {
  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: IoTSiteWiseConfigurationStatus;

}

/**
 * @schema IoTSiteWisePutLoggingOptionsRequest
 */
export interface IoTSiteWisePutLoggingOptionsRequest {
  /**
   * @schema IoTSiteWisePutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: IoTSiteWiseLoggingOptions;

}

/**
 * @schema IoTSiteWisePutLoggingOptionsResponse
 */
export interface IoTSiteWisePutLoggingOptionsResponse {
}

/**
 * @schema IoTSiteWiseTagResourceRequest
 */
export interface IoTSiteWiseTagResourceRequest {
  /**
   * @schema IoTSiteWiseTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTSiteWiseTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema IoTSiteWiseTagResourceResponse
 */
export interface IoTSiteWiseTagResourceResponse {
}

/**
 * @schema IoTSiteWiseUntagResourceRequest
 */
export interface IoTSiteWiseUntagResourceRequest {
  /**
   * @schema IoTSiteWiseUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTSiteWiseUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IoTSiteWiseUntagResourceResponse
 */
export interface IoTSiteWiseUntagResourceResponse {
}

/**
 * @schema IoTSiteWiseUpdateAccessPolicyRequest
 */
export interface IoTSiteWiseUpdateAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyResource
   */
  readonly accessPolicyResource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdateAccessPolicyResponse
 */
export interface IoTSiteWiseUpdateAccessPolicyResponse {
}

/**
 * @schema IoTSiteWiseUpdateAssetRequest
 */
export interface IoTSiteWiseUpdateAssetRequest {
  /**
   * @schema IoTSiteWiseUpdateAssetRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetRequest#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseUpdateAssetRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdateAssetResponse
 */
export interface IoTSiteWiseUpdateAssetResponse {
  /**
   * @schema IoTSiteWiseUpdateAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * @schema IoTSiteWiseUpdateAssetModelRequest
 */
export interface IoTSiteWiseUpdateAssetModelRequest {
  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelDescription
   */
  readonly assetModelDescription?: string;

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelProperties
   */
  readonly assetModelProperties?: IoTSiteWiseAssetModelProperty[];

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelHierarchies
   */
  readonly assetModelHierarchies?: IoTSiteWiseAssetModelHierarchy[];

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdateAssetModelResponse
 */
export interface IoTSiteWiseUpdateAssetModelResponse {
  /**
   * @schema IoTSiteWiseUpdateAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * @schema IoTSiteWiseUpdateAssetPropertyRequest
 */
export interface IoTSiteWiseUpdateAssetPropertyRequest {
  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#propertyId
   */
  readonly propertyId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#propertyNotificationState
   */
  readonly propertyNotificationState?: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdateDashboardRequest
 */
export interface IoTSiteWiseUpdateDashboardRequest {
  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdateDashboardResponse
 */
export interface IoTSiteWiseUpdateDashboardResponse {
}

/**
 * @schema IoTSiteWiseUpdateGatewayRequest
 */
export interface IoTSiteWiseUpdateGatewayRequest {
  /**
   * @schema IoTSiteWiseUpdateGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayRequest#gatewayName
   */
  readonly gatewayName: string;

}

/**
 * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest
 */
export interface IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest {
  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest#capabilityConfiguration
   */
  readonly capabilityConfiguration: string;

}

/**
 * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse
 */
export interface IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse {
  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * @schema IoTSiteWiseUpdatePortalRequest
 */
export interface IoTSiteWiseUpdatePortalRequest {
  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalName
   */
  readonly portalName: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalLogoImage
   */
  readonly portalLogoImage?: IoTSiteWiseImage;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdatePortalResponse
 */
export interface IoTSiteWiseUpdatePortalResponse {
  /**
   * @schema IoTSiteWiseUpdatePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

}

/**
 * @schema IoTSiteWiseUpdateProjectRequest
 */
export interface IoTSiteWiseUpdateProjectRequest {
  /**
   * @schema IoTSiteWiseUpdateProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseUpdateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoTSiteWiseUpdateProjectRequest#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema IoTSiteWiseUpdateProjectRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema IoTSiteWiseUpdateProjectResponse
 */
export interface IoTSiteWiseUpdateProjectResponse {
}

/**
 * @schema IoTSiteWiseAssetErrorDetails
 */
export interface IoTSiteWiseAssetErrorDetails {
  /**
   * @schema IoTSiteWiseAssetErrorDetails#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseAssetErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseAssetErrorDetails#message
   */
  readonly message: string;

}

/**
 * @schema IoTSiteWisePutAssetPropertyValueEntry
 */
export interface IoTSiteWisePutAssetPropertyValueEntry {
  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#entryId
   */
  readonly entryId: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#propertyValues
   */
  readonly propertyValues: IoTSiteWiseAssetPropertyValue[];

}

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyErrorEntry
 */
export interface IoTSiteWiseBatchPutAssetPropertyErrorEntry {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyErrorEntry#entryId
   */
  readonly entryId: string;

  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyErrorEntry#errors
   */
  readonly errors: IoTSiteWiseBatchPutAssetPropertyError[];

}

/**
 * @schema IoTSiteWiseIdentity
 */
export interface IoTSiteWiseIdentity {
  /**
   * @schema IoTSiteWiseIdentity#user
   */
  readonly user?: IoTSiteWiseUserIdentity;

  /**
   * @schema IoTSiteWiseIdentity#group
   */
  readonly group?: IoTSiteWiseGroupIdentity;

  /**
   * @schema IoTSiteWiseIdentity#iamUser
   */
  readonly iamUser?: IoTSiteWiseIamUserIdentity;

}

/**
 * @schema IoTSiteWiseResource
 */
export interface IoTSiteWiseResource {
  /**
   * @schema IoTSiteWiseResource#portal
   */
  readonly portal?: IoTSiteWisePortalResource;

  /**
   * @schema IoTSiteWiseResource#project
   */
  readonly project?: IoTSiteWiseProjectResource;

}

/**
 * @schema IoTSiteWiseAssetStatus
 */
export interface IoTSiteWiseAssetStatus {
  /**
   * @schema IoTSiteWiseAssetStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWiseAssetStatus#error
   */
  readonly error?: IoTSiteWiseErrorDetails;

}

/**
 * @schema IoTSiteWiseAssetModelPropertyDefinition
 */
export interface IoTSiteWiseAssetModelPropertyDefinition {
  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#unit
   */
  readonly unit?: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#type
   */
  readonly type: IoTSiteWisePropertyType;

}

/**
 * @schema IoTSiteWiseAssetModelHierarchyDefinition
 */
export interface IoTSiteWiseAssetModelHierarchyDefinition {
  /**
   * @schema IoTSiteWiseAssetModelHierarchyDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelHierarchyDefinition#childAssetModelId
   */
  readonly childAssetModelId: string;

}

/**
 * @schema IoTSiteWiseAssetModelStatus
 */
export interface IoTSiteWiseAssetModelStatus {
  /**
   * @schema IoTSiteWiseAssetModelStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWiseAssetModelStatus#error
   */
  readonly error?: IoTSiteWiseErrorDetails;

}

/**
 * @schema IoTSiteWiseGatewayPlatform
 */
export interface IoTSiteWiseGatewayPlatform {
  /**
   * @schema IoTSiteWiseGatewayPlatform#greengrass
   */
  readonly greengrass: IoTSiteWiseGreengrass;

}

/**
 * @schema IoTSiteWiseImageFile
 */
export interface IoTSiteWiseImageFile {
  /**
   * @schema IoTSiteWiseImageFile#data
   */
  readonly data: any;

  /**
   * @schema IoTSiteWiseImageFile#type
   */
  readonly type: string;

}

/**
 * @schema IoTSiteWisePortalStatus
 */
export interface IoTSiteWisePortalStatus {
  /**
   * @schema IoTSiteWisePortalStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWisePortalStatus#error
   */
  readonly error?: IoTSiteWiseMonitorErrorDetails;

}

/**
 * @schema IoTSiteWiseAssetProperty
 */
export interface IoTSiteWiseAssetProperty {
  /**
   * @schema IoTSiteWiseAssetProperty#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssetProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetProperty#alias
   */
  readonly alias?: string;

  /**
   * @schema IoTSiteWiseAssetProperty#notification
   */
  readonly notification?: IoTSiteWisePropertyNotification;

  /**
   * @schema IoTSiteWiseAssetProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseAssetProperty#unit
   */
  readonly unit?: string;

}

/**
 * @schema IoTSiteWiseAssetHierarchy
 */
export interface IoTSiteWiseAssetHierarchy {
  /**
   * @schema IoTSiteWiseAssetHierarchy#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseAssetHierarchy#name
   */
  readonly name: string;

}

/**
 * @schema IoTSiteWiseAssetModelProperty
 */
export interface IoTSiteWiseAssetModelProperty {
  /**
   * @schema IoTSiteWiseAssetModelProperty#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#unit
   */
  readonly unit?: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#type
   */
  readonly type: IoTSiteWisePropertyType;

}

/**
 * @schema IoTSiteWiseAssetModelHierarchy
 */
export interface IoTSiteWiseAssetModelHierarchy {
  /**
   * @schema IoTSiteWiseAssetModelHierarchy#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseAssetModelHierarchy#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelHierarchy#childAssetModelId
   */
  readonly childAssetModelId: string;

}

/**
 * @schema IoTSiteWiseProperty
 */
export interface IoTSiteWiseProperty {
  /**
   * @schema IoTSiteWiseProperty#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseProperty#alias
   */
  readonly alias?: string;

  /**
   * @schema IoTSiteWiseProperty#notification
   */
  readonly notification?: IoTSiteWisePropertyNotification;

  /**
   * @schema IoTSiteWiseProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseProperty#unit
   */
  readonly unit?: string;

  /**
   * @schema IoTSiteWiseProperty#type
   */
  readonly type?: IoTSiteWisePropertyType;

}

/**
 * @schema IoTSiteWiseConfigurationStatus
 */
export interface IoTSiteWiseConfigurationStatus {
  /**
   * @schema IoTSiteWiseConfigurationStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWiseConfigurationStatus#error
   */
  readonly error?: IoTSiteWiseConfigurationErrorDetails;

}

/**
 * @schema IoTSiteWiseGatewayCapabilitySummary
 */
export interface IoTSiteWiseGatewayCapabilitySummary {
  /**
   * @schema IoTSiteWiseGatewayCapabilitySummary#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseGatewayCapabilitySummary#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * @schema IoTSiteWiseLoggingOptions
 */
export interface IoTSiteWiseLoggingOptions {
  /**
   * @schema IoTSiteWiseLoggingOptions#level
   */
  readonly level: string;

}

/**
 * @schema IoTSiteWiseImageLocation
 */
export interface IoTSiteWiseImageLocation {
  /**
   * @schema IoTSiteWiseImageLocation#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseImageLocation#url
   */
  readonly url: string;

}

/**
 * @schema IoTSiteWiseAggregatedValue
 */
export interface IoTSiteWiseAggregatedValue {
  /**
   * @schema IoTSiteWiseAggregatedValue#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema IoTSiteWiseAggregatedValue#quality
   */
  readonly quality?: string;

  /**
   * @schema IoTSiteWiseAggregatedValue#value
   */
  readonly value: IoTSiteWiseAggregates;

}

/**
 * @schema IoTSiteWiseAssetPropertyValue
 */
export interface IoTSiteWiseAssetPropertyValue {
  /**
   * @schema IoTSiteWiseAssetPropertyValue#value
   */
  readonly value: IoTSiteWiseVariant;

  /**
   * @schema IoTSiteWiseAssetPropertyValue#timestamp
   */
  readonly timestamp: IoTSiteWiseTimeInNanos;

  /**
   * @schema IoTSiteWiseAssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * @schema IoTSiteWiseAccessPolicySummary
 */
export interface IoTSiteWiseAccessPolicySummary {
  /**
   * @schema IoTSiteWiseAccessPolicySummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#identity
   */
  readonly identity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#resource
   */
  readonly resource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#permission
   */
  readonly permission: string;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * @schema IoTSiteWiseAssetModelSummary
 */
export interface IoTSiteWiseAssetModelSummary {
  /**
   * @schema IoTSiteWiseAssetModelSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#description
   */
  readonly description: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#status
   */
  readonly status: IoTSiteWiseAssetModelStatus;

}

/**
 * @schema IoTSiteWiseAssetSummary
 */
export interface IoTSiteWiseAssetSummary {
  /**
   * @schema IoTSiteWiseAssetSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssetSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IoTSiteWiseAssetSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetSummary#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseAssetSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseAssetSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema IoTSiteWiseAssetSummary#status
   */
  readonly status: IoTSiteWiseAssetStatus;

  /**
   * @schema IoTSiteWiseAssetSummary#hierarchies
   */
  readonly hierarchies: IoTSiteWiseAssetHierarchy[];

}

/**
 * @schema IoTSiteWiseAssociatedAssetsSummary
 */
export interface IoTSiteWiseAssociatedAssetsSummary {
  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#status
   */
  readonly status: IoTSiteWiseAssetStatus;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#hierarchies
   */
  readonly hierarchies: IoTSiteWiseAssetHierarchy[];

}

/**
 * @schema IoTSiteWiseDashboardSummary
 */
export interface IoTSiteWiseDashboardSummary {
  /**
   * @schema IoTSiteWiseDashboardSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * @schema IoTSiteWiseGatewaySummary
 */
export interface IoTSiteWiseGatewaySummary {
  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayCapabilitySummaries
   */
  readonly gatewayCapabilitySummaries?: IoTSiteWiseGatewayCapabilitySummary[];

  /**
   * @schema IoTSiteWiseGatewaySummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseGatewaySummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

}

/**
 * @schema IoTSiteWisePortalSummary
 */
export interface IoTSiteWisePortalSummary {
  /**
   * @schema IoTSiteWisePortalSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWisePortalSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWisePortalSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWisePortalSummary#startUrl
   */
  readonly startUrl: string;

  /**
   * @schema IoTSiteWisePortalSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWisePortalSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

  /**
   * @schema IoTSiteWisePortalSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTSiteWisePortalSummary#status
   */
  readonly status: IoTSiteWisePortalStatus;

}

/**
 * @schema IoTSiteWiseProjectSummary
 */
export interface IoTSiteWiseProjectSummary {
  /**
   * @schema IoTSiteWiseProjectSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseProjectSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseProjectSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseProjectSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWiseProjectSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * @schema IoTSiteWiseImage
 */
export interface IoTSiteWiseImage {
  /**
   * @schema IoTSiteWiseImage#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseImage#file
   */
  readonly file?: IoTSiteWiseImageFile;

}

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyError
 */
export interface IoTSiteWiseBatchPutAssetPropertyError {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyError#errorCode
   */
  readonly errorCode: string;

  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyError#errorMessage
   */
  readonly errorMessage: string;

  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyError#timestamps
   */
  readonly timestamps: IoTSiteWiseTimeInNanos[];

}

/**
 * @schema IoTSiteWiseUserIdentity
 */
export interface IoTSiteWiseUserIdentity {
  /**
   * @schema IoTSiteWiseUserIdentity#id
   */
  readonly id: string;

}

/**
 * @schema IoTSiteWiseGroupIdentity
 */
export interface IoTSiteWiseGroupIdentity {
  /**
   * @schema IoTSiteWiseGroupIdentity#id
   */
  readonly id: string;

}

/**
 * @schema IoTSiteWiseIamUserIdentity
 */
export interface IoTSiteWiseIamUserIdentity {
  /**
   * @schema IoTSiteWiseIamUserIdentity#arn
   */
  readonly arn: string;

}

/**
 * @schema IoTSiteWisePortalResource
 */
export interface IoTSiteWisePortalResource {
  /**
   * @schema IoTSiteWisePortalResource#id
   */
  readonly id: string;

}

/**
 * @schema IoTSiteWiseProjectResource
 */
export interface IoTSiteWiseProjectResource {
  /**
   * @schema IoTSiteWiseProjectResource#id
   */
  readonly id: string;

}

/**
 * @schema IoTSiteWiseErrorDetails
 */
export interface IoTSiteWiseErrorDetails {
  /**
   * @schema IoTSiteWiseErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseErrorDetails#message
   */
  readonly message: string;

}

/**
 * @schema IoTSiteWisePropertyType
 */
export interface IoTSiteWisePropertyType {
  /**
   * @schema IoTSiteWisePropertyType#attribute
   */
  readonly attribute?: IoTSiteWiseAttribute;

  /**
   * @schema IoTSiteWisePropertyType#measurement
   */
  readonly measurement?: IoTSiteWiseMeasurement;

  /**
   * @schema IoTSiteWisePropertyType#transform
   */
  readonly transform?: IoTSiteWiseTransform;

  /**
   * @schema IoTSiteWisePropertyType#metric
   */
  readonly metric?: IoTSiteWiseMetric;

}

/**
 * @schema IoTSiteWiseGreengrass
 */
export interface IoTSiteWiseGreengrass {
  /**
   * @schema IoTSiteWiseGreengrass#groupArn
   */
  readonly groupArn: string;

}

/**
 * @schema IoTSiteWiseMonitorErrorDetails
 */
export interface IoTSiteWiseMonitorErrorDetails {
  /**
   * @schema IoTSiteWiseMonitorErrorDetails#code
   */
  readonly code?: string;

  /**
   * @schema IoTSiteWiseMonitorErrorDetails#message
   */
  readonly message?: string;

}

/**
 * @schema IoTSiteWisePropertyNotification
 */
export interface IoTSiteWisePropertyNotification {
  /**
   * @schema IoTSiteWisePropertyNotification#topic
   */
  readonly topic: string;

  /**
   * @schema IoTSiteWisePropertyNotification#state
   */
  readonly state: string;

}

/**
 * @schema IoTSiteWiseConfigurationErrorDetails
 */
export interface IoTSiteWiseConfigurationErrorDetails {
  /**
   * @schema IoTSiteWiseConfigurationErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseConfigurationErrorDetails#message
   */
  readonly message: string;

}

/**
 * @schema IoTSiteWiseAggregates
 */
export interface IoTSiteWiseAggregates {
  /**
   * @schema IoTSiteWiseAggregates#average
   */
  readonly average?: number;

  /**
   * @schema IoTSiteWiseAggregates#count
   */
  readonly count?: number;

  /**
   * @schema IoTSiteWiseAggregates#maximum
   */
  readonly maximum?: number;

  /**
   * @schema IoTSiteWiseAggregates#minimum
   */
  readonly minimum?: number;

  /**
   * @schema IoTSiteWiseAggregates#sum
   */
  readonly sum?: number;

  /**
   * @schema IoTSiteWiseAggregates#standardDeviation
   */
  readonly standardDeviation?: number;

}

/**
 * @schema IoTSiteWiseVariant
 */
export interface IoTSiteWiseVariant {
  /**
   * @schema IoTSiteWiseVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IoTSiteWiseVariant#integerValue
   */
  readonly integerValue?: number;

  /**
   * @schema IoTSiteWiseVariant#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema IoTSiteWiseVariant#booleanValue
   */
  readonly booleanValue?: boolean;

}

/**
 * @schema IoTSiteWiseTimeInNanos
 */
export interface IoTSiteWiseTimeInNanos {
  /**
   * @schema IoTSiteWiseTimeInNanos#timeInSeconds
   */
  readonly timeInSeconds: number;

  /**
   * @schema IoTSiteWiseTimeInNanos#offsetInNanos
   */
  readonly offsetInNanos?: number;

}

/**
 * @schema IoTSiteWiseAttribute
 */
export interface IoTSiteWiseAttribute {
  /**
   * @schema IoTSiteWiseAttribute#defaultValue
   */
  readonly defaultValue?: string;

}

/**
 * @schema IoTSiteWiseMeasurement
 */
export interface IoTSiteWiseMeasurement {
}

/**
 * @schema IoTSiteWiseTransform
 */
export interface IoTSiteWiseTransform {
  /**
   * @schema IoTSiteWiseTransform#expression
   */
  readonly expression: string;

  /**
   * @schema IoTSiteWiseTransform#variables
   */
  readonly variables: IoTSiteWiseExpressionVariable[];

}

/**
 * @schema IoTSiteWiseMetric
 */
export interface IoTSiteWiseMetric {
  /**
   * @schema IoTSiteWiseMetric#expression
   */
  readonly expression: string;

  /**
   * @schema IoTSiteWiseMetric#variables
   */
  readonly variables: IoTSiteWiseExpressionVariable[];

  /**
   * @schema IoTSiteWiseMetric#window
   */
  readonly window: IoTSiteWiseMetricWindow;

}

/**
 * @schema IoTSiteWiseExpressionVariable
 */
export interface IoTSiteWiseExpressionVariable {
  /**
   * @schema IoTSiteWiseExpressionVariable#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseExpressionVariable#value
   */
  readonly value: IoTSiteWiseVariableValue;

}

/**
 * @schema IoTSiteWiseMetricWindow
 */
export interface IoTSiteWiseMetricWindow {
  /**
   * @schema IoTSiteWiseMetricWindow#tumbling
   */
  readonly tumbling?: IoTSiteWiseTumblingWindow;

}

/**
 * @schema IoTSiteWiseVariableValue
 */
export interface IoTSiteWiseVariableValue {
  /**
   * @schema IoTSiteWiseVariableValue#propertyId
   */
  readonly propertyId: string;

  /**
   * @schema IoTSiteWiseVariableValue#hierarchyId
   */
  readonly hierarchyId?: string;

}

/**
 * @schema IoTSiteWiseTumblingWindow
 */
export interface IoTSiteWiseTumblingWindow {
  /**
   * @schema IoTSiteWiseTumblingWindow#interval
   */
  readonly interval: string;

}
