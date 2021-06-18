/**
 * @schema LicenseManagerCreateLicenseConfigurationRequest
 */
export interface LicenseManagerCreateLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#Name
   */
  readonly name: string;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseCountingType
   */
  readonly licenseCountingType: string;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#Tags
   */
  readonly tags?: LicenseManagerTag[];

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

}

/**
 * @schema LicenseManagerCreateLicenseConfigurationResponse
 */
export interface LicenseManagerCreateLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerCreateLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema LicenseManagerDeleteLicenseConfigurationRequest
 */
export interface LicenseManagerDeleteLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerDeleteLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

}

/**
 * @schema LicenseManagerDeleteLicenseConfigurationResponse
 */
export interface LicenseManagerDeleteLicenseConfigurationResponse {
}

/**
 * @schema LicenseManagerGetLicenseConfigurationRequest
 */
export interface LicenseManagerGetLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerGetLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

}

/**
 * @schema LicenseManagerGetLicenseConfigurationResponse
 */
export interface LicenseManagerGetLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseConfigurationId
   */
  readonly licenseConfigurationId?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ConsumedLicenseSummaryList
   */
  readonly consumedLicenseSummaryList?: LicenseManagerConsumedLicenseSummary[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ManagedResourceSummaryList
   */
  readonly managedResourceSummaryList?: LicenseManagerManagedResourceSummary[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Tags
   */
  readonly tags?: LicenseManagerTag[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#AutomatedDiscoveryInformation
   */
  readonly automatedDiscoveryInformation?: LicenseManagerAutomatedDiscoveryInformation;

}

/**
 * @schema LicenseManagerGetServiceSettingsRequest
 */
export interface LicenseManagerGetServiceSettingsRequest {
}

/**
 * @schema LicenseManagerGetServiceSettingsResponse
 */
export interface LicenseManagerGetServiceSettingsResponse {
  /**
   * @schema LicenseManagerGetServiceSettingsResponse#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#OrganizationConfiguration
   */
  readonly organizationConfiguration?: LicenseManagerOrganizationConfiguration;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#EnableCrossAccountsDiscovery
   */
  readonly enableCrossAccountsDiscovery?: boolean;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#LicenseManagerResourceShareArn
   */
  readonly licenseManagerResourceShareArn?: string;

}

/**
 * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest
 */
export interface LicenseManagerListAssociationsForLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListAssociationsForLicenseConfigurationResponse
 */
export interface LicenseManagerListAssociationsForLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationResponse#LicenseConfigurationAssociations
   */
  readonly licenseConfigurationAssociations?: LicenseManagerLicenseConfigurationAssociation[];

  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest
 */
export interface LicenseManagerListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsResponse
 */
export interface LicenseManagerListFailuresForLicenseConfigurationOperationsResponse {
  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsResponse#LicenseOperationFailureList
   */
  readonly licenseOperationFailureList?: LicenseManagerLicenseOperationFailure[];

  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListLicenseConfigurationsRequest
 */
export interface LicenseManagerListLicenseConfigurationsRequest {
  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#LicenseConfigurationArns
   */
  readonly licenseConfigurationArns?: string[];

  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

}

/**
 * @schema LicenseManagerListLicenseConfigurationsResponse
 */
export interface LicenseManagerListLicenseConfigurationsResponse {
  /**
   * @schema LicenseManagerListLicenseConfigurationsResponse#LicenseConfigurations
   */
  readonly licenseConfigurations?: LicenseManagerLicenseConfiguration[];

  /**
   * @schema LicenseManagerListLicenseConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListLicenseSpecificationsForResourceRequest
 */
export interface LicenseManagerListLicenseSpecificationsForResourceRequest {
  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListLicenseSpecificationsForResourceResponse
 */
export interface LicenseManagerListLicenseSpecificationsForResourceResponse {
  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceResponse#LicenseSpecifications
   */
  readonly licenseSpecifications?: LicenseManagerLicenseSpecification[];

  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListResourceInventoryRequest
 */
export interface LicenseManagerListResourceInventoryRequest {
  /**
   * @schema LicenseManagerListResourceInventoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListResourceInventoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListResourceInventoryRequest#Filters
   */
  readonly filters?: LicenseManagerInventoryFilter[];

}

/**
 * @schema LicenseManagerListResourceInventoryResponse
 */
export interface LicenseManagerListResourceInventoryResponse {
  /**
   * @schema LicenseManagerListResourceInventoryResponse#ResourceInventoryList
   */
  readonly resourceInventoryList?: LicenseManagerResourceInventory[];

  /**
   * @schema LicenseManagerListResourceInventoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerListTagsForResourceRequest
 */
export interface LicenseManagerListTagsForResourceRequest {
  /**
   * @schema LicenseManagerListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema LicenseManagerListTagsForResourceResponse
 */
export interface LicenseManagerListTagsForResourceResponse {
  /**
   * @schema LicenseManagerListTagsForResourceResponse#Tags
   */
  readonly tags?: LicenseManagerTag[];

}

/**
 * @schema LicenseManagerListUsageForLicenseConfigurationRequest
 */
export interface LicenseManagerListUsageForLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

}

/**
 * @schema LicenseManagerListUsageForLicenseConfigurationResponse
 */
export interface LicenseManagerListUsageForLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationResponse#LicenseConfigurationUsageList
   */
  readonly licenseConfigurationUsageList?: LicenseManagerLicenseConfigurationUsage[];

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LicenseManagerTagResourceRequest
 */
export interface LicenseManagerTagResourceRequest {
  /**
   * @schema LicenseManagerTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LicenseManagerTagResourceRequest#Tags
   */
  readonly tags: LicenseManagerTag[];

}

/**
 * @schema LicenseManagerTagResourceResponse
 */
export interface LicenseManagerTagResourceResponse {
}

/**
 * @schema LicenseManagerUntagResourceRequest
 */
export interface LicenseManagerUntagResourceRequest {
  /**
   * @schema LicenseManagerUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LicenseManagerUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema LicenseManagerUntagResourceResponse
 */
export interface LicenseManagerUntagResourceResponse {
}

/**
 * @schema LicenseManagerUpdateLicenseConfigurationRequest
 */
export interface LicenseManagerUpdateLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseConfigurationStatus
   */
  readonly licenseConfigurationStatus?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

}

/**
 * @schema LicenseManagerUpdateLicenseConfigurationResponse
 */
export interface LicenseManagerUpdateLicenseConfigurationResponse {
}

/**
 * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest
 */
export interface LicenseManagerUpdateLicenseSpecificationsForResourceRequest {
  /**
   * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest#AddLicenseSpecifications
   */
  readonly addLicenseSpecifications?: LicenseManagerLicenseSpecification[];

  /**
   * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest#RemoveLicenseSpecifications
   */
  readonly removeLicenseSpecifications?: LicenseManagerLicenseSpecification[];

}

/**
 * @schema LicenseManagerUpdateLicenseSpecificationsForResourceResponse
 */
export interface LicenseManagerUpdateLicenseSpecificationsForResourceResponse {
}

/**
 * @schema LicenseManagerUpdateServiceSettingsRequest
 */
export interface LicenseManagerUpdateServiceSettingsRequest {
  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#OrganizationConfiguration
   */
  readonly organizationConfiguration?: LicenseManagerOrganizationConfiguration;

  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#EnableCrossAccountsDiscovery
   */
  readonly enableCrossAccountsDiscovery?: boolean;

}

/**
 * @schema LicenseManagerUpdateServiceSettingsResponse
 */
export interface LicenseManagerUpdateServiceSettingsResponse {
}

/**
 * @schema LicenseManagerTag
 */
export interface LicenseManagerTag {
  /**
   * @schema LicenseManagerTag#Key
   */
  readonly key?: string;

  /**
   * @schema LicenseManagerTag#Value
   */
  readonly value?: string;

}

/**
 * @schema LicenseManagerProductInformation
 */
export interface LicenseManagerProductInformation {
  /**
   * @schema LicenseManagerProductInformation#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema LicenseManagerProductInformation#ProductInformationFilterList
   */
  readonly productInformationFilterList: LicenseManagerProductInformationFilter[];

}

/**
 * @schema LicenseManagerConsumedLicenseSummary
 */
export interface LicenseManagerConsumedLicenseSummary {
  /**
   * @schema LicenseManagerConsumedLicenseSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerConsumedLicenseSummary#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

}

/**
 * @schema LicenseManagerManagedResourceSummary
 */
export interface LicenseManagerManagedResourceSummary {
  /**
   * @schema LicenseManagerManagedResourceSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerManagedResourceSummary#AssociationCount
   */
  readonly associationCount?: number;

}

/**
 * @schema LicenseManagerAutomatedDiscoveryInformation
 */
export interface LicenseManagerAutomatedDiscoveryInformation {
  /**
   * @schema LicenseManagerAutomatedDiscoveryInformation#LastRunTime
   */
  readonly lastRunTime?: string;

}

/**
 * @schema LicenseManagerOrganizationConfiguration
 */
export interface LicenseManagerOrganizationConfiguration {
  /**
   * @schema LicenseManagerOrganizationConfiguration#EnableIntegration
   */
  readonly enableIntegration: boolean;

}

/**
 * @schema LicenseManagerLicenseConfigurationAssociation
 */
export interface LicenseManagerLicenseConfigurationAssociation {
  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#AssociationTime
   */
  readonly associationTime?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#AmiAssociationScope
   */
  readonly amiAssociationScope?: string;

}

/**
 * @schema LicenseManagerLicenseOperationFailure
 */
export interface LicenseManagerLicenseOperationFailure {
  /**
   * @schema LicenseManagerLicenseOperationFailure#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#FailureTime
   */
  readonly failureTime?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#OperationRequestedBy
   */
  readonly operationRequestedBy?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#MetadataList
   */
  readonly metadataList?: LicenseManagerMetadata[];

}

/**
 * @schema LicenseManagerFilter
 */
export interface LicenseManagerFilter {
  /**
   * @schema LicenseManagerFilter#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema LicenseManagerLicenseConfiguration
 */
export interface LicenseManagerLicenseConfiguration {
  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseConfigurationId
   */
  readonly licenseConfigurationId?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerLicenseConfiguration#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

  /**
   * @schema LicenseManagerLicenseConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#ConsumedLicenseSummaryList
   */
  readonly consumedLicenseSummaryList?: LicenseManagerConsumedLicenseSummary[];

  /**
   * @schema LicenseManagerLicenseConfiguration#ManagedResourceSummaryList
   */
  readonly managedResourceSummaryList?: LicenseManagerManagedResourceSummary[];

  /**
   * @schema LicenseManagerLicenseConfiguration#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

  /**
   * @schema LicenseManagerLicenseConfiguration#AutomatedDiscoveryInformation
   */
  readonly automatedDiscoveryInformation?: LicenseManagerAutomatedDiscoveryInformation;

}

/**
 * @schema LicenseManagerLicenseSpecification
 */
export interface LicenseManagerLicenseSpecification {
  /**
   * @schema LicenseManagerLicenseSpecification#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema LicenseManagerLicenseSpecification#AmiAssociationScope
   */
  readonly amiAssociationScope?: string;

}

/**
 * @schema LicenseManagerInventoryFilter
 */
export interface LicenseManagerInventoryFilter {
  /**
   * @schema LicenseManagerInventoryFilter#Name
   */
  readonly name: string;

  /**
   * @schema LicenseManagerInventoryFilter#Condition
   */
  readonly condition: string;

  /**
   * @schema LicenseManagerInventoryFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema LicenseManagerResourceInventory
 */
export interface LicenseManagerResourceInventory {
  /**
   * @schema LicenseManagerResourceInventory#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema LicenseManagerResourceInventory#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerResourceInventory#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerResourceInventory#Platform
   */
  readonly platform?: string;

  /**
   * @schema LicenseManagerResourceInventory#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema LicenseManagerResourceInventory#ResourceOwningAccountId
   */
  readonly resourceOwningAccountId?: string;

}

/**
 * @schema LicenseManagerLicenseConfigurationUsage
 */
export interface LicenseManagerLicenseConfigurationUsage {
  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#AssociationTime
   */
  readonly associationTime?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

}

/**
 * @schema LicenseManagerProductInformationFilter
 */
export interface LicenseManagerProductInformationFilter {
  /**
   * @schema LicenseManagerProductInformationFilter#ProductInformationFilterName
   */
  readonly productInformationFilterName: string;

  /**
   * @schema LicenseManagerProductInformationFilter#ProductInformationFilterValue
   */
  readonly productInformationFilterValue: string[];

  /**
   * @schema LicenseManagerProductInformationFilter#ProductInformationFilterComparator
   */
  readonly productInformationFilterComparator: string;

}

/**
 * @schema LicenseManagerMetadata
 */
export interface LicenseManagerMetadata {
  /**
   * @schema LicenseManagerMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerMetadata#Value
   */
  readonly value?: string;

}
