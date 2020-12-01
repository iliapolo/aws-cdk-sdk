/**
 * @schema CreateLicenseConfigurationRequest
 */
export interface CreateLicenseConfigurationRequest {
  /**
   * @schema CreateLicenseConfigurationRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateLicenseConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateLicenseConfigurationRequest#LicenseCountingType
   */
  readonly licenseCountingType: string;

  /**
   * @schema CreateLicenseConfigurationRequest#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema CreateLicenseConfigurationRequest#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema CreateLicenseConfigurationRequest#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema CreateLicenseConfigurationRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateLicenseConfigurationRequest#ProductInformationList
   */
  readonly productInformationList?: ProductInformation[];

}

/**
 * @schema CreateLicenseConfigurationResponse
 */
export interface CreateLicenseConfigurationResponse {
  /**
   * @schema CreateLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema DeleteLicenseConfigurationRequest
 */
export interface DeleteLicenseConfigurationRequest {
  /**
   * @schema DeleteLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

}

/**
 * @schema DeleteLicenseConfigurationResponse
 */
export interface DeleteLicenseConfigurationResponse {
}

/**
 * @schema GetLicenseConfigurationRequest
 */
export interface GetLicenseConfigurationRequest {
  /**
   * @schema GetLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

}

/**
 * @schema GetLicenseConfigurationResponse
 */
export interface GetLicenseConfigurationResponse {
  /**
   * @schema GetLicenseConfigurationResponse#LicenseConfigurationId
   */
  readonly licenseConfigurationId?: string;

  /**
   * @schema GetLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema GetLicenseConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetLicenseConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetLicenseConfigurationResponse#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema GetLicenseConfigurationResponse#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema GetLicenseConfigurationResponse#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema GetLicenseConfigurationResponse#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema GetLicenseConfigurationResponse#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

  /**
   * @schema GetLicenseConfigurationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetLicenseConfigurationResponse#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema GetLicenseConfigurationResponse#ConsumedLicenseSummaryList
   */
  readonly consumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * @schema GetLicenseConfigurationResponse#ManagedResourceSummaryList
   */
  readonly managedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * @schema GetLicenseConfigurationResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema GetLicenseConfigurationResponse#ProductInformationList
   */
  readonly productInformationList?: ProductInformation[];

  /**
   * @schema GetLicenseConfigurationResponse#AutomatedDiscoveryInformation
   */
  readonly automatedDiscoveryInformation?: AutomatedDiscoveryInformation;

}

/**
 * @schema GetServiceSettingsRequest
 */
export interface GetServiceSettingsRequest {
}

/**
 * @schema GetServiceSettingsResponse
 */
export interface GetServiceSettingsResponse {
  /**
   * @schema GetServiceSettingsResponse#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema GetServiceSettingsResponse#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema GetServiceSettingsResponse#OrganizationConfiguration
   */
  readonly organizationConfiguration?: OrganizationConfiguration;

  /**
   * @schema GetServiceSettingsResponse#EnableCrossAccountsDiscovery
   */
  readonly enableCrossAccountsDiscovery?: boolean;

  /**
   * @schema GetServiceSettingsResponse#LicenseManagerResourceShareArn
   */
  readonly licenseManagerResourceShareArn?: string;

}

/**
 * @schema ListAssociationsForLicenseConfigurationRequest
 */
export interface ListAssociationsForLicenseConfigurationRequest {
  /**
   * @schema ListAssociationsForLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema ListAssociationsForLicenseConfigurationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAssociationsForLicenseConfigurationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociationsForLicenseConfigurationResponse
 */
export interface ListAssociationsForLicenseConfigurationResponse {
  /**
   * @schema ListAssociationsForLicenseConfigurationResponse#LicenseConfigurationAssociations
   */
  readonly licenseConfigurationAssociations?: LicenseConfigurationAssociation[];

  /**
   * @schema ListAssociationsForLicenseConfigurationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFailuresForLicenseConfigurationOperationsRequest
 */
export interface ListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * @schema ListFailuresForLicenseConfigurationOperationsRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema ListFailuresForLicenseConfigurationOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFailuresForLicenseConfigurationOperationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFailuresForLicenseConfigurationOperationsResponse
 */
export interface ListFailuresForLicenseConfigurationOperationsResponse {
  /**
   * @schema ListFailuresForLicenseConfigurationOperationsResponse#LicenseOperationFailureList
   */
  readonly licenseOperationFailureList?: LicenseOperationFailure[];

  /**
   * @schema ListFailuresForLicenseConfigurationOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLicenseConfigurationsRequest
 */
export interface ListLicenseConfigurationsRequest {
  /**
   * @schema ListLicenseConfigurationsRequest#LicenseConfigurationArns
   */
  readonly licenseConfigurationArns?: string[];

  /**
   * @schema ListLicenseConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLicenseConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLicenseConfigurationsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListLicenseConfigurationsResponse
 */
export interface ListLicenseConfigurationsResponse {
  /**
   * @schema ListLicenseConfigurationsResponse#LicenseConfigurations
   */
  readonly licenseConfigurations?: LicenseConfiguration[];

  /**
   * @schema ListLicenseConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLicenseSpecificationsForResourceRequest
 */
export interface ListLicenseSpecificationsForResourceRequest {
  /**
   * @schema ListLicenseSpecificationsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListLicenseSpecificationsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLicenseSpecificationsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLicenseSpecificationsForResourceResponse
 */
export interface ListLicenseSpecificationsForResourceResponse {
  /**
   * @schema ListLicenseSpecificationsForResourceResponse#LicenseSpecifications
   */
  readonly licenseSpecifications?: LicenseSpecification[];

  /**
   * @schema ListLicenseSpecificationsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceInventoryRequest
 */
export interface ListResourceInventoryRequest {
  /**
   * @schema ListResourceInventoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResourceInventoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceInventoryRequest#Filters
   */
  readonly filters?: InventoryFilter[];

}

/**
 * @schema ListResourceInventoryResponse
 */
export interface ListResourceInventoryResponse {
  /**
   * @schema ListResourceInventoryResponse#ResourceInventoryList
   */
  readonly resourceInventoryList?: ResourceInventory[];

  /**
   * @schema ListResourceInventoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListUsageForLicenseConfigurationRequest
 */
export interface ListUsageForLicenseConfigurationRequest {
  /**
   * @schema ListUsageForLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema ListUsageForLicenseConfigurationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsageForLicenseConfigurationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsageForLicenseConfigurationRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema ListUsageForLicenseConfigurationResponse
 */
export interface ListUsageForLicenseConfigurationResponse {
  /**
   * @schema ListUsageForLicenseConfigurationResponse#LicenseConfigurationUsageList
   */
  readonly licenseConfigurationUsageList?: LicenseConfigurationUsage[];

  /**
   * @schema ListUsageForLicenseConfigurationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

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
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateLicenseConfigurationRequest
 */
export interface UpdateLicenseConfigurationRequest {
  /**
   * @schema UpdateLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema UpdateLicenseConfigurationRequest#LicenseConfigurationStatus
   */
  readonly licenseConfigurationStatus?: string;

  /**
   * @schema UpdateLicenseConfigurationRequest#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema UpdateLicenseConfigurationRequest#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema UpdateLicenseConfigurationRequest#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema UpdateLicenseConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateLicenseConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateLicenseConfigurationRequest#ProductInformationList
   */
  readonly productInformationList?: ProductInformation[];

}

/**
 * @schema UpdateLicenseConfigurationResponse
 */
export interface UpdateLicenseConfigurationResponse {
}

/**
 * @schema UpdateLicenseSpecificationsForResourceRequest
 */
export interface UpdateLicenseSpecificationsForResourceRequest {
  /**
   * @schema UpdateLicenseSpecificationsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UpdateLicenseSpecificationsForResourceRequest#AddLicenseSpecifications
   */
  readonly addLicenseSpecifications?: LicenseSpecification[];

  /**
   * @schema UpdateLicenseSpecificationsForResourceRequest#RemoveLicenseSpecifications
   */
  readonly removeLicenseSpecifications?: LicenseSpecification[];

}

/**
 * @schema UpdateLicenseSpecificationsForResourceResponse
 */
export interface UpdateLicenseSpecificationsForResourceResponse {
}

/**
 * @schema UpdateServiceSettingsRequest
 */
export interface UpdateServiceSettingsRequest {
  /**
   * @schema UpdateServiceSettingsRequest#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema UpdateServiceSettingsRequest#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema UpdateServiceSettingsRequest#OrganizationConfiguration
   */
  readonly organizationConfiguration?: OrganizationConfiguration;

  /**
   * @schema UpdateServiceSettingsRequest#EnableCrossAccountsDiscovery
   */
  readonly enableCrossAccountsDiscovery?: boolean;

}

/**
 * @schema UpdateServiceSettingsResponse
 */
export interface UpdateServiceSettingsResponse {
}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema ProductInformation
 */
export interface ProductInformation {
  /**
   * @schema ProductInformation#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ProductInformation#ProductInformationFilterList
   */
  readonly productInformationFilterList: ProductInformationFilter[];

}

/**
 * @schema ConsumedLicenseSummary
 */
export interface ConsumedLicenseSummary {
  /**
   * @schema ConsumedLicenseSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ConsumedLicenseSummary#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

}

/**
 * @schema ManagedResourceSummary
 */
export interface ManagedResourceSummary {
  /**
   * @schema ManagedResourceSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ManagedResourceSummary#AssociationCount
   */
  readonly associationCount?: number;

}

/**
 * @schema AutomatedDiscoveryInformation
 */
export interface AutomatedDiscoveryInformation {
  /**
   * @schema AutomatedDiscoveryInformation#LastRunTime
   */
  readonly lastRunTime?: string;

}

/**
 * @schema OrganizationConfiguration
 */
export interface OrganizationConfiguration {
  /**
   * @schema OrganizationConfiguration#EnableIntegration
   */
  readonly enableIntegration: boolean;

}

/**
 * @schema LicenseConfigurationAssociation
 */
export interface LicenseConfigurationAssociation {
  /**
   * @schema LicenseConfigurationAssociation#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseConfigurationAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseConfigurationAssociation#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseConfigurationAssociation#AssociationTime
   */
  readonly associationTime?: string;

  /**
   * @schema LicenseConfigurationAssociation#AmiAssociationScope
   */
  readonly amiAssociationScope?: string;

}

/**
 * @schema LicenseOperationFailure
 */
export interface LicenseOperationFailure {
  /**
   * @schema LicenseOperationFailure#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseOperationFailure#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseOperationFailure#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema LicenseOperationFailure#FailureTime
   */
  readonly failureTime?: string;

  /**
   * @schema LicenseOperationFailure#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema LicenseOperationFailure#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseOperationFailure#OperationRequestedBy
   */
  readonly operationRequestedBy?: string;

  /**
   * @schema LicenseOperationFailure#MetadataList
   */
  readonly metadataList?: Metadata[];

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema LicenseConfiguration
 */
export interface LicenseConfiguration {
  /**
   * @schema LicenseConfiguration#LicenseConfigurationId
   */
  readonly licenseConfigurationId?: string;

  /**
   * @schema LicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseConfiguration#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema LicenseConfiguration#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseConfiguration#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseConfiguration#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseConfiguration#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

  /**
   * @schema LicenseConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseConfiguration#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema LicenseConfiguration#ConsumedLicenseSummaryList
   */
  readonly consumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * @schema LicenseConfiguration#ManagedResourceSummaryList
   */
  readonly managedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * @schema LicenseConfiguration#ProductInformationList
   */
  readonly productInformationList?: ProductInformation[];

  /**
   * @schema LicenseConfiguration#AutomatedDiscoveryInformation
   */
  readonly automatedDiscoveryInformation?: AutomatedDiscoveryInformation;

}

/**
 * @schema LicenseSpecification
 */
export interface LicenseSpecification {
  /**
   * @schema LicenseSpecification#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn: string;

  /**
   * @schema LicenseSpecification#AmiAssociationScope
   */
  readonly amiAssociationScope?: string;

}

/**
 * @schema InventoryFilter
 */
export interface InventoryFilter {
  /**
   * @schema InventoryFilter#Name
   */
  readonly name: string;

  /**
   * @schema InventoryFilter#Condition
   */
  readonly condition: string;

  /**
   * @schema InventoryFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema ResourceInventory
 */
export interface ResourceInventory {
  /**
   * @schema ResourceInventory#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ResourceInventory#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceInventory#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceInventory#Platform
   */
  readonly platform?: string;

  /**
   * @schema ResourceInventory#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema ResourceInventory#ResourceOwningAccountId
   */
  readonly resourceOwningAccountId?: string;

}

/**
 * @schema LicenseConfigurationUsage
 */
export interface LicenseConfigurationUsage {
  /**
   * @schema LicenseConfigurationUsage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseConfigurationUsage#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseConfigurationUsage#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema LicenseConfigurationUsage#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseConfigurationUsage#AssociationTime
   */
  readonly associationTime?: string;

  /**
   * @schema LicenseConfigurationUsage#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

}

/**
 * @schema ProductInformationFilter
 */
export interface ProductInformationFilter {
  /**
   * @schema ProductInformationFilter#ProductInformationFilterName
   */
  readonly productInformationFilterName: string;

  /**
   * @schema ProductInformationFilter#ProductInformationFilterValue
   */
  readonly productInformationFilterValue: string[];

  /**
   * @schema ProductInformationFilter#ProductInformationFilterComparator
   */
  readonly productInformationFilterComparator: string;

}

/**
 * @schema Metadata
 */
export interface Metadata {
  /**
   * @schema Metadata#Name
   */
  readonly name?: string;

  /**
   * @schema Metadata#Value
   */
  readonly value?: string;

}
