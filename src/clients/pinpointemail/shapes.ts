/**
 * @schema PinpointEmailCreateConfigurationSetRequest
 */
export interface PinpointEmailCreateConfigurationSetRequest {
  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#TrackingOptions
   */
  readonly trackingOptions?: PinpointEmailTrackingOptions;

  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#DeliveryOptions
   */
  readonly deliveryOptions?: PinpointEmailDeliveryOptions;

  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#ReputationOptions
   */
  readonly reputationOptions?: PinpointEmailReputationOptions;

  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#SendingOptions
   */
  readonly sendingOptions?: PinpointEmailSendingOptions;

  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailCreateConfigurationSetResponse
 */
export interface PinpointEmailCreateConfigurationSetResponse {
}

/**
 * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest
 */
export interface PinpointEmailCreateConfigurationSetEventDestinationRequest {
  /**
   * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

  /**
   * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination: PinpointEmailEventDestinationDefinition;

}

/**
 * @schema PinpointEmailCreateConfigurationSetEventDestinationResponse
 */
export interface PinpointEmailCreateConfigurationSetEventDestinationResponse {
}

/**
 * @schema PinpointEmailCreateDedicatedIpPoolRequest
 */
export interface PinpointEmailCreateDedicatedIpPoolRequest {
  /**
   * @schema PinpointEmailCreateDedicatedIpPoolRequest#PoolName
   */
  readonly poolName: string;

  /**
   * @schema PinpointEmailCreateDedicatedIpPoolRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailCreateDedicatedIpPoolResponse
 */
export interface PinpointEmailCreateDedicatedIpPoolResponse {
}

/**
 * @schema PinpointEmailCreateDeliverabilityTestReportRequest
 */
export interface PinpointEmailCreateDeliverabilityTestReportRequest {
  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportRequest#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportRequest#Content
   */
  readonly content: PinpointEmailEmailContent;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailCreateDeliverabilityTestReportResponse
 */
export interface PinpointEmailCreateDeliverabilityTestReportResponse {
  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportResponse#ReportId
   */
  readonly reportId: string;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportResponse#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus: string;

}

/**
 * @schema PinpointEmailCreateEmailIdentityRequest
 */
export interface PinpointEmailCreateEmailIdentityRequest {
  /**
   * @schema PinpointEmailCreateEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PinpointEmailCreateEmailIdentityRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailCreateEmailIdentityResponse
 */
export interface PinpointEmailCreateEmailIdentityResponse {
  /**
   * @schema PinpointEmailCreateEmailIdentityResponse#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema PinpointEmailCreateEmailIdentityResponse#VerifiedForSendingStatus
   */
  readonly verifiedForSendingStatus?: boolean;

  /**
   * @schema PinpointEmailCreateEmailIdentityResponse#DkimAttributes
   */
  readonly dkimAttributes?: PinpointEmailDkimAttributes;

}

/**
 * @schema PinpointEmailDeleteConfigurationSetRequest
 */
export interface PinpointEmailDeleteConfigurationSetRequest {
  /**
   * @schema PinpointEmailDeleteConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema PinpointEmailDeleteConfigurationSetResponse
 */
export interface PinpointEmailDeleteConfigurationSetResponse {
}

/**
 * @schema PinpointEmailDeleteConfigurationSetEventDestinationRequest
 */
export interface PinpointEmailDeleteConfigurationSetEventDestinationRequest {
  /**
   * @schema PinpointEmailDeleteConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailDeleteConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

}

/**
 * @schema PinpointEmailDeleteConfigurationSetEventDestinationResponse
 */
export interface PinpointEmailDeleteConfigurationSetEventDestinationResponse {
}

/**
 * @schema PinpointEmailDeleteDedicatedIpPoolRequest
 */
export interface PinpointEmailDeleteDedicatedIpPoolRequest {
  /**
   * @schema PinpointEmailDeleteDedicatedIpPoolRequest#PoolName
   */
  readonly poolName: string;

}

/**
 * @schema PinpointEmailDeleteDedicatedIpPoolResponse
 */
export interface PinpointEmailDeleteDedicatedIpPoolResponse {
}

/**
 * @schema PinpointEmailDeleteEmailIdentityRequest
 */
export interface PinpointEmailDeleteEmailIdentityRequest {
  /**
   * @schema PinpointEmailDeleteEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema PinpointEmailDeleteEmailIdentityResponse
 */
export interface PinpointEmailDeleteEmailIdentityResponse {
}

/**
 * @schema PinpointEmailGetAccountRequest
 */
export interface PinpointEmailGetAccountRequest {
}

/**
 * @schema PinpointEmailGetAccountResponse
 */
export interface PinpointEmailGetAccountResponse {
  /**
   * @schema PinpointEmailGetAccountResponse#SendQuota
   */
  readonly sendQuota?: PinpointEmailSendQuota;

  /**
   * @schema PinpointEmailGetAccountResponse#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

  /**
   * @schema PinpointEmailGetAccountResponse#DedicatedIpAutoWarmupEnabled
   */
  readonly dedicatedIpAutoWarmupEnabled?: boolean;

  /**
   * @schema PinpointEmailGetAccountResponse#EnforcementStatus
   */
  readonly enforcementStatus?: string;

  /**
   * @schema PinpointEmailGetAccountResponse#ProductionAccessEnabled
   */
  readonly productionAccessEnabled?: boolean;

}

/**
 * @schema PinpointEmailGetBlacklistReportsRequest
 */
export interface PinpointEmailGetBlacklistReportsRequest {
  /**
   * @schema PinpointEmailGetBlacklistReportsRequest#BlacklistItemNames
   */
  readonly blacklistItemNames: string[];

}

/**
 * @schema PinpointEmailGetBlacklistReportsResponse
 */
export interface PinpointEmailGetBlacklistReportsResponse {
  /**
   * @schema PinpointEmailGetBlacklistReportsResponse#BlacklistReport
   */
  readonly blacklistReport: { [key: string]: PinpointEmailBlacklistEntry[] };

}

/**
 * @schema PinpointEmailGetConfigurationSetRequest
 */
export interface PinpointEmailGetConfigurationSetRequest {
  /**
   * @schema PinpointEmailGetConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema PinpointEmailGetConfigurationSetResponse
 */
export interface PinpointEmailGetConfigurationSetResponse {
  /**
   * @schema PinpointEmailGetConfigurationSetResponse#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailGetConfigurationSetResponse#TrackingOptions
   */
  readonly trackingOptions?: PinpointEmailTrackingOptions;

  /**
   * @schema PinpointEmailGetConfigurationSetResponse#DeliveryOptions
   */
  readonly deliveryOptions?: PinpointEmailDeliveryOptions;

  /**
   * @schema PinpointEmailGetConfigurationSetResponse#ReputationOptions
   */
  readonly reputationOptions?: PinpointEmailReputationOptions;

  /**
   * @schema PinpointEmailGetConfigurationSetResponse#SendingOptions
   */
  readonly sendingOptions?: PinpointEmailSendingOptions;

  /**
   * @schema PinpointEmailGetConfigurationSetResponse#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailGetConfigurationSetEventDestinationsRequest
 */
export interface PinpointEmailGetConfigurationSetEventDestinationsRequest {
  /**
   * @schema PinpointEmailGetConfigurationSetEventDestinationsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema PinpointEmailGetConfigurationSetEventDestinationsResponse
 */
export interface PinpointEmailGetConfigurationSetEventDestinationsResponse {
  /**
   * @schema PinpointEmailGetConfigurationSetEventDestinationsResponse#EventDestinations
   */
  readonly eventDestinations?: PinpointEmailEventDestination[];

}

/**
 * @schema PinpointEmailGetDedicatedIpRequest
 */
export interface PinpointEmailGetDedicatedIpRequest {
  /**
   * @schema PinpointEmailGetDedicatedIpRequest#Ip
   */
  readonly ip: string;

}

/**
 * @schema PinpointEmailGetDedicatedIpResponse
 */
export interface PinpointEmailGetDedicatedIpResponse {
  /**
   * @schema PinpointEmailGetDedicatedIpResponse#DedicatedIp
   */
  readonly dedicatedIp?: PinpointEmailDedicatedIp;

}

/**
 * @schema PinpointEmailGetDedicatedIpsRequest
 */
export interface PinpointEmailGetDedicatedIpsRequest {
  /**
   * @schema PinpointEmailGetDedicatedIpsRequest#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema PinpointEmailGetDedicatedIpsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PinpointEmailGetDedicatedIpsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema PinpointEmailGetDedicatedIpsResponse
 */
export interface PinpointEmailGetDedicatedIpsResponse {
  /**
   * @schema PinpointEmailGetDedicatedIpsResponse#DedicatedIps
   */
  readonly dedicatedIps?: PinpointEmailDedicatedIp[];

  /**
   * @schema PinpointEmailGetDedicatedIpsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PinpointEmailGetDeliverabilityDashboardOptionsRequest
 */
export interface PinpointEmailGetDeliverabilityDashboardOptionsRequest {
}

/**
 * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse
 */
export interface PinpointEmailGetDeliverabilityDashboardOptionsResponse {
  /**
   * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse#DashboardEnabled
   */
  readonly dashboardEnabled: boolean;

  /**
   * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse#SubscriptionExpiryDate
   */
  readonly subscriptionExpiryDate?: string;

  /**
   * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse#AccountStatus
   */
  readonly accountStatus?: string;

  /**
   * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse#ActiveSubscribedDomains
   */
  readonly activeSubscribedDomains?: PinpointEmailDomainDeliverabilityTrackingOption[];

  /**
   * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse#PendingExpirationSubscribedDomains
   */
  readonly pendingExpirationSubscribedDomains?: PinpointEmailDomainDeliverabilityTrackingOption[];

}

/**
 * @schema PinpointEmailGetDeliverabilityTestReportRequest
 */
export interface PinpointEmailGetDeliverabilityTestReportRequest {
  /**
   * @schema PinpointEmailGetDeliverabilityTestReportRequest#ReportId
   */
  readonly reportId: string;

}

/**
 * @schema PinpointEmailGetDeliverabilityTestReportResponse
 */
export interface PinpointEmailGetDeliverabilityTestReportResponse {
  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#DeliverabilityTestReport
   */
  readonly deliverabilityTestReport: PinpointEmailDeliverabilityTestReport;

  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#OverallPlacement
   */
  readonly overallPlacement: PinpointEmailPlacementStatistics;

  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#IspPlacements
   */
  readonly ispPlacements: PinpointEmailIspPlacement[];

  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#Message
   */
  readonly message?: string;

  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailGetDomainDeliverabilityCampaignRequest
 */
export interface PinpointEmailGetDomainDeliverabilityCampaignRequest {
  /**
   * @schema PinpointEmailGetDomainDeliverabilityCampaignRequest#CampaignId
   */
  readonly campaignId: string;

}

/**
 * @schema PinpointEmailGetDomainDeliverabilityCampaignResponse
 */
export interface PinpointEmailGetDomainDeliverabilityCampaignResponse {
  /**
   * @schema PinpointEmailGetDomainDeliverabilityCampaignResponse#DomainDeliverabilityCampaign
   */
  readonly domainDeliverabilityCampaign: PinpointEmailDomainDeliverabilityCampaign;

}

/**
 * @schema PinpointEmailGetDomainStatisticsReportRequest
 */
export interface PinpointEmailGetDomainStatisticsReportRequest {
  /**
   * @schema PinpointEmailGetDomainStatisticsReportRequest#Domain
   */
  readonly domain: string;

  /**
   * @schema PinpointEmailGetDomainStatisticsReportRequest#StartDate
   */
  readonly startDate: string;

  /**
   * @schema PinpointEmailGetDomainStatisticsReportRequest#EndDate
   */
  readonly endDate: string;

}

/**
 * @schema PinpointEmailGetDomainStatisticsReportResponse
 */
export interface PinpointEmailGetDomainStatisticsReportResponse {
  /**
   * @schema PinpointEmailGetDomainStatisticsReportResponse#OverallVolume
   */
  readonly overallVolume: PinpointEmailOverallVolume;

  /**
   * @schema PinpointEmailGetDomainStatisticsReportResponse#DailyVolumes
   */
  readonly dailyVolumes: PinpointEmailDailyVolume[];

}

/**
 * @schema PinpointEmailGetEmailIdentityRequest
 */
export interface PinpointEmailGetEmailIdentityRequest {
  /**
   * @schema PinpointEmailGetEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema PinpointEmailGetEmailIdentityResponse
 */
export interface PinpointEmailGetEmailIdentityResponse {
  /**
   * @schema PinpointEmailGetEmailIdentityResponse#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema PinpointEmailGetEmailIdentityResponse#FeedbackForwardingStatus
   */
  readonly feedbackForwardingStatus?: boolean;

  /**
   * @schema PinpointEmailGetEmailIdentityResponse#VerifiedForSendingStatus
   */
  readonly verifiedForSendingStatus?: boolean;

  /**
   * @schema PinpointEmailGetEmailIdentityResponse#DkimAttributes
   */
  readonly dkimAttributes?: PinpointEmailDkimAttributes;

  /**
   * @schema PinpointEmailGetEmailIdentityResponse#MailFromAttributes
   */
  readonly mailFromAttributes?: PinpointEmailMailFromAttributes;

  /**
   * @schema PinpointEmailGetEmailIdentityResponse#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailListConfigurationSetsRequest
 */
export interface PinpointEmailListConfigurationSetsRequest {
  /**
   * @schema PinpointEmailListConfigurationSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PinpointEmailListConfigurationSetsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema PinpointEmailListConfigurationSetsResponse
 */
export interface PinpointEmailListConfigurationSetsResponse {
  /**
   * @schema PinpointEmailListConfigurationSetsResponse#ConfigurationSets
   */
  readonly configurationSets?: string[];

  /**
   * @schema PinpointEmailListConfigurationSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PinpointEmailListDedicatedIpPoolsRequest
 */
export interface PinpointEmailListDedicatedIpPoolsRequest {
  /**
   * @schema PinpointEmailListDedicatedIpPoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PinpointEmailListDedicatedIpPoolsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema PinpointEmailListDedicatedIpPoolsResponse
 */
export interface PinpointEmailListDedicatedIpPoolsResponse {
  /**
   * @schema PinpointEmailListDedicatedIpPoolsResponse#DedicatedIpPools
   */
  readonly dedicatedIpPools?: string[];

  /**
   * @schema PinpointEmailListDedicatedIpPoolsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PinpointEmailListDeliverabilityTestReportsRequest
 */
export interface PinpointEmailListDeliverabilityTestReportsRequest {
  /**
   * @schema PinpointEmailListDeliverabilityTestReportsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PinpointEmailListDeliverabilityTestReportsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema PinpointEmailListDeliverabilityTestReportsResponse
 */
export interface PinpointEmailListDeliverabilityTestReportsResponse {
  /**
   * @schema PinpointEmailListDeliverabilityTestReportsResponse#DeliverabilityTestReports
   */
  readonly deliverabilityTestReports: PinpointEmailDeliverabilityTestReport[];

  /**
   * @schema PinpointEmailListDeliverabilityTestReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest
 */
export interface PinpointEmailListDomainDeliverabilityCampaignsRequest {
  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#StartDate
   */
  readonly startDate: string;

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#EndDate
   */
  readonly endDate: string;

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#SubscribedDomain
   */
  readonly subscribedDomain: string;

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema PinpointEmailListDomainDeliverabilityCampaignsResponse
 */
export interface PinpointEmailListDomainDeliverabilityCampaignsResponse {
  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsResponse#DomainDeliverabilityCampaigns
   */
  readonly domainDeliverabilityCampaigns: PinpointEmailDomainDeliverabilityCampaign[];

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PinpointEmailListEmailIdentitiesRequest
 */
export interface PinpointEmailListEmailIdentitiesRequest {
  /**
   * @schema PinpointEmailListEmailIdentitiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PinpointEmailListEmailIdentitiesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema PinpointEmailListEmailIdentitiesResponse
 */
export interface PinpointEmailListEmailIdentitiesResponse {
  /**
   * @schema PinpointEmailListEmailIdentitiesResponse#EmailIdentities
   */
  readonly emailIdentities?: PinpointEmailIdentityInfo[];

  /**
   * @schema PinpointEmailListEmailIdentitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PinpointEmailListTagsForResourceRequest
 */
export interface PinpointEmailListTagsForResourceRequest {
  /**
   * @schema PinpointEmailListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema PinpointEmailListTagsForResourceResponse
 */
export interface PinpointEmailListTagsForResourceResponse {
  /**
   * @schema PinpointEmailListTagsForResourceResponse#Tags
   */
  readonly tags: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest
 */
export interface PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * @schema PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest#AutoWarmupEnabled
   */
  readonly autoWarmupEnabled?: boolean;

}

/**
 * @schema PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse
 */
export interface PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse {
}

/**
 * @schema PinpointEmailPutAccountSendingAttributesRequest
 */
export interface PinpointEmailPutAccountSendingAttributesRequest {
  /**
   * @schema PinpointEmailPutAccountSendingAttributesRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema PinpointEmailPutAccountSendingAttributesResponse
 */
export interface PinpointEmailPutAccountSendingAttributesResponse {
}

/**
 * @schema PinpointEmailPutConfigurationSetDeliveryOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetDeliveryOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetDeliveryOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailPutConfigurationSetDeliveryOptionsRequest#TlsPolicy
   */
  readonly tlsPolicy?: string;

  /**
   * @schema PinpointEmailPutConfigurationSetDeliveryOptionsRequest#SendingPoolName
   */
  readonly sendingPoolName?: string;

}

/**
 * @schema PinpointEmailPutConfigurationSetDeliveryOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetDeliveryOptionsResponse {
}

/**
 * @schema PinpointEmailPutConfigurationSetReputationOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetReputationOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetReputationOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailPutConfigurationSetReputationOptionsRequest#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

}

/**
 * @schema PinpointEmailPutConfigurationSetReputationOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetReputationOptionsResponse {
}

/**
 * @schema PinpointEmailPutConfigurationSetSendingOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetSendingOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetSendingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailPutConfigurationSetSendingOptionsRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema PinpointEmailPutConfigurationSetSendingOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetSendingOptionsResponse {
}

/**
 * @schema PinpointEmailPutConfigurationSetTrackingOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetTrackingOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetTrackingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailPutConfigurationSetTrackingOptionsRequest#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * @schema PinpointEmailPutConfigurationSetTrackingOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetTrackingOptionsResponse {
}

/**
 * @schema PinpointEmailPutDedicatedIpInPoolRequest
 */
export interface PinpointEmailPutDedicatedIpInPoolRequest {
  /**
   * @schema PinpointEmailPutDedicatedIpInPoolRequest#Ip
   */
  readonly ip: string;

  /**
   * @schema PinpointEmailPutDedicatedIpInPoolRequest#DestinationPoolName
   */
  readonly destinationPoolName: string;

}

/**
 * @schema PinpointEmailPutDedicatedIpInPoolResponse
 */
export interface PinpointEmailPutDedicatedIpInPoolResponse {
}

/**
 * @schema PinpointEmailPutDedicatedIpWarmupAttributesRequest
 */
export interface PinpointEmailPutDedicatedIpWarmupAttributesRequest {
  /**
   * @schema PinpointEmailPutDedicatedIpWarmupAttributesRequest#Ip
   */
  readonly ip: string;

  /**
   * @schema PinpointEmailPutDedicatedIpWarmupAttributesRequest#WarmupPercentage
   */
  readonly warmupPercentage: number;

}

/**
 * @schema PinpointEmailPutDedicatedIpWarmupAttributesResponse
 */
export interface PinpointEmailPutDedicatedIpWarmupAttributesResponse {
}

/**
 * @schema PinpointEmailPutDeliverabilityDashboardOptionRequest
 */
export interface PinpointEmailPutDeliverabilityDashboardOptionRequest {
  /**
   * @schema PinpointEmailPutDeliverabilityDashboardOptionRequest#DashboardEnabled
   */
  readonly dashboardEnabled: boolean;

  /**
   * @schema PinpointEmailPutDeliverabilityDashboardOptionRequest#SubscribedDomains
   */
  readonly subscribedDomains?: PinpointEmailDomainDeliverabilityTrackingOption[];

}

/**
 * @schema PinpointEmailPutDeliverabilityDashboardOptionResponse
 */
export interface PinpointEmailPutDeliverabilityDashboardOptionResponse {
}

/**
 * @schema PinpointEmailPutEmailIdentityDkimAttributesRequest
 */
export interface PinpointEmailPutEmailIdentityDkimAttributesRequest {
  /**
   * @schema PinpointEmailPutEmailIdentityDkimAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PinpointEmailPutEmailIdentityDkimAttributesRequest#SigningEnabled
   */
  readonly signingEnabled?: boolean;

}

/**
 * @schema PinpointEmailPutEmailIdentityDkimAttributesResponse
 */
export interface PinpointEmailPutEmailIdentityDkimAttributesResponse {
}

/**
 * @schema PinpointEmailPutEmailIdentityFeedbackAttributesRequest
 */
export interface PinpointEmailPutEmailIdentityFeedbackAttributesRequest {
  /**
   * @schema PinpointEmailPutEmailIdentityFeedbackAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PinpointEmailPutEmailIdentityFeedbackAttributesRequest#EmailForwardingEnabled
   */
  readonly emailForwardingEnabled?: boolean;

}

/**
 * @schema PinpointEmailPutEmailIdentityFeedbackAttributesResponse
 */
export interface PinpointEmailPutEmailIdentityFeedbackAttributesResponse {
}

/**
 * @schema PinpointEmailPutEmailIdentityMailFromAttributesRequest
 */
export interface PinpointEmailPutEmailIdentityMailFromAttributesRequest {
  /**
   * @schema PinpointEmailPutEmailIdentityMailFromAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PinpointEmailPutEmailIdentityMailFromAttributesRequest#MailFromDomain
   */
  readonly mailFromDomain?: string;

  /**
   * @schema PinpointEmailPutEmailIdentityMailFromAttributesRequest#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure?: string;

}

/**
 * @schema PinpointEmailPutEmailIdentityMailFromAttributesResponse
 */
export interface PinpointEmailPutEmailIdentityMailFromAttributesResponse {
}

/**
 * @schema PinpointEmailSendEmailRequest
 */
export interface PinpointEmailSendEmailRequest {
  /**
   * @schema PinpointEmailSendEmailRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema PinpointEmailSendEmailRequest#Destination
   */
  readonly destination: PinpointEmailDestination;

  /**
   * @schema PinpointEmailSendEmailRequest#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema PinpointEmailSendEmailRequest#FeedbackForwardingEmailAddress
   */
  readonly feedbackForwardingEmailAddress?: string;

  /**
   * @schema PinpointEmailSendEmailRequest#Content
   */
  readonly content: PinpointEmailEmailContent;

  /**
   * @schema PinpointEmailSendEmailRequest#EmailTags
   */
  readonly emailTags?: PinpointEmailMessageTag[];

  /**
   * @schema PinpointEmailSendEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * @schema PinpointEmailSendEmailResponse
 */
export interface PinpointEmailSendEmailResponse {
  /**
   * @schema PinpointEmailSendEmailResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema PinpointEmailTagResourceRequest
 */
export interface PinpointEmailTagResourceRequest {
  /**
   * @schema PinpointEmailTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema PinpointEmailTagResourceRequest#Tags
   */
  readonly tags: PinpointEmailTag[];

}

/**
 * @schema PinpointEmailTagResourceResponse
 */
export interface PinpointEmailTagResourceResponse {
}

/**
 * @schema PinpointEmailUntagResourceRequest
 */
export interface PinpointEmailUntagResourceRequest {
  /**
   * @schema PinpointEmailUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema PinpointEmailUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema PinpointEmailUntagResourceResponse
 */
export interface PinpointEmailUntagResourceResponse {
}

/**
 * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest
 */
export interface PinpointEmailUpdateConfigurationSetEventDestinationRequest {
  /**
   * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

  /**
   * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination: PinpointEmailEventDestinationDefinition;

}

/**
 * @schema PinpointEmailUpdateConfigurationSetEventDestinationResponse
 */
export interface PinpointEmailUpdateConfigurationSetEventDestinationResponse {
}

/**
 * @schema PinpointEmailTrackingOptions
 */
export interface PinpointEmailTrackingOptions {
  /**
   * @schema PinpointEmailTrackingOptions#CustomRedirectDomain
   */
  readonly customRedirectDomain: string;

}

/**
 * @schema PinpointEmailDeliveryOptions
 */
export interface PinpointEmailDeliveryOptions {
  /**
   * @schema PinpointEmailDeliveryOptions#TlsPolicy
   */
  readonly tlsPolicy?: string;

  /**
   * @schema PinpointEmailDeliveryOptions#SendingPoolName
   */
  readonly sendingPoolName?: string;

}

/**
 * @schema PinpointEmailReputationOptions
 */
export interface PinpointEmailReputationOptions {
  /**
   * @schema PinpointEmailReputationOptions#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

  /**
   * @schema PinpointEmailReputationOptions#LastFreshStart
   */
  readonly lastFreshStart?: string;

}

/**
 * @schema PinpointEmailSendingOptions
 */
export interface PinpointEmailSendingOptions {
  /**
   * @schema PinpointEmailSendingOptions#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema PinpointEmailTag
 */
export interface PinpointEmailTag {
  /**
   * @schema PinpointEmailTag#Key
   */
  readonly key: string;

  /**
   * @schema PinpointEmailTag#Value
   */
  readonly value: string;

}

/**
 * @schema PinpointEmailEventDestinationDefinition
 */
export interface PinpointEmailEventDestinationDefinition {
  /**
   * @schema PinpointEmailEventDestinationDefinition#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema PinpointEmailEventDestinationDefinition#MatchingEventTypes
   */
  readonly matchingEventTypes?: string[];

  /**
   * @schema PinpointEmailEventDestinationDefinition#KinesisFirehoseDestination
   */
  readonly kinesisFirehoseDestination?: PinpointEmailKinesisFirehoseDestination;

  /**
   * @schema PinpointEmailEventDestinationDefinition#CloudWatchDestination
   */
  readonly cloudWatchDestination?: PinpointEmailCloudWatchDestination;

  /**
   * @schema PinpointEmailEventDestinationDefinition#SnsDestination
   */
  readonly snsDestination?: PinpointEmailSnsDestination;

  /**
   * @schema PinpointEmailEventDestinationDefinition#PinpointDestination
   */
  readonly pinpointDestination?: PinpointEmailPinpointDestination;

}

/**
 * @schema PinpointEmailEmailContent
 */
export interface PinpointEmailEmailContent {
  /**
   * @schema PinpointEmailEmailContent#Simple
   */
  readonly simple?: PinpointEmailMessage;

  /**
   * @schema PinpointEmailEmailContent#Raw
   */
  readonly raw?: PinpointEmailRawMessage;

  /**
   * @schema PinpointEmailEmailContent#Template
   */
  readonly template?: PinpointEmailTemplate;

}

/**
 * @schema PinpointEmailDkimAttributes
 */
export interface PinpointEmailDkimAttributes {
  /**
   * @schema PinpointEmailDkimAttributes#SigningEnabled
   */
  readonly signingEnabled?: boolean;

  /**
   * @schema PinpointEmailDkimAttributes#Status
   */
  readonly status?: string;

  /**
   * @schema PinpointEmailDkimAttributes#Tokens
   */
  readonly tokens?: string[];

}

/**
 * @schema PinpointEmailSendQuota
 */
export interface PinpointEmailSendQuota {
  /**
   * @schema PinpointEmailSendQuota#Max24HourSend
   */
  readonly max24HourSend?: number;

  /**
   * @schema PinpointEmailSendQuota#MaxSendRate
   */
  readonly maxSendRate?: number;

  /**
   * @schema PinpointEmailSendQuota#SentLast24Hours
   */
  readonly sentLast24Hours?: number;

}

/**
 * @schema PinpointEmailBlacklistEntry
 */
export interface PinpointEmailBlacklistEntry {
  /**
   * @schema PinpointEmailBlacklistEntry#RblName
   */
  readonly rblName?: string;

  /**
   * @schema PinpointEmailBlacklistEntry#ListingTime
   */
  readonly listingTime?: string;

  /**
   * @schema PinpointEmailBlacklistEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema PinpointEmailEventDestination
 */
export interface PinpointEmailEventDestination {
  /**
   * @schema PinpointEmailEventDestination#Name
   */
  readonly name: string;

  /**
   * @schema PinpointEmailEventDestination#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema PinpointEmailEventDestination#MatchingEventTypes
   */
  readonly matchingEventTypes: string[];

  /**
   * @schema PinpointEmailEventDestination#KinesisFirehoseDestination
   */
  readonly kinesisFirehoseDestination?: PinpointEmailKinesisFirehoseDestination;

  /**
   * @schema PinpointEmailEventDestination#CloudWatchDestination
   */
  readonly cloudWatchDestination?: PinpointEmailCloudWatchDestination;

  /**
   * @schema PinpointEmailEventDestination#SnsDestination
   */
  readonly snsDestination?: PinpointEmailSnsDestination;

  /**
   * @schema PinpointEmailEventDestination#PinpointDestination
   */
  readonly pinpointDestination?: PinpointEmailPinpointDestination;

}

/**
 * @schema PinpointEmailDedicatedIp
 */
export interface PinpointEmailDedicatedIp {
  /**
   * @schema PinpointEmailDedicatedIp#Ip
   */
  readonly ip: string;

  /**
   * @schema PinpointEmailDedicatedIp#WarmupStatus
   */
  readonly warmupStatus: string;

  /**
   * @schema PinpointEmailDedicatedIp#WarmupPercentage
   */
  readonly warmupPercentage: number;

  /**
   * @schema PinpointEmailDedicatedIp#PoolName
   */
  readonly poolName?: string;

}

/**
 * @schema PinpointEmailDomainDeliverabilityTrackingOption
 */
export interface PinpointEmailDomainDeliverabilityTrackingOption {
  /**
   * @schema PinpointEmailDomainDeliverabilityTrackingOption#Domain
   */
  readonly domain?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityTrackingOption#SubscriptionStartDate
   */
  readonly subscriptionStartDate?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityTrackingOption#InboxPlacementTrackingOption
   */
  readonly inboxPlacementTrackingOption?: PinpointEmailInboxPlacementTrackingOption;

}

/**
 * @schema PinpointEmailDeliverabilityTestReport
 */
export interface PinpointEmailDeliverabilityTestReport {
  /**
   * @schema PinpointEmailDeliverabilityTestReport#ReportId
   */
  readonly reportId?: string;

  /**
   * @schema PinpointEmailDeliverabilityTestReport#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema PinpointEmailDeliverabilityTestReport#Subject
   */
  readonly subject?: string;

  /**
   * @schema PinpointEmailDeliverabilityTestReport#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema PinpointEmailDeliverabilityTestReport#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema PinpointEmailDeliverabilityTestReport#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus?: string;

}

/**
 * @schema PinpointEmailPlacementStatistics
 */
export interface PinpointEmailPlacementStatistics {
  /**
   * @schema PinpointEmailPlacementStatistics#InboxPercentage
   */
  readonly inboxPercentage?: number;

  /**
   * @schema PinpointEmailPlacementStatistics#SpamPercentage
   */
  readonly spamPercentage?: number;

  /**
   * @schema PinpointEmailPlacementStatistics#MissingPercentage
   */
  readonly missingPercentage?: number;

  /**
   * @schema PinpointEmailPlacementStatistics#SpfPercentage
   */
  readonly spfPercentage?: number;

  /**
   * @schema PinpointEmailPlacementStatistics#DkimPercentage
   */
  readonly dkimPercentage?: number;

}

/**
 * @schema PinpointEmailIspPlacement
 */
export interface PinpointEmailIspPlacement {
  /**
   * @schema PinpointEmailIspPlacement#IspName
   */
  readonly ispName?: string;

  /**
   * @schema PinpointEmailIspPlacement#PlacementStatistics
   */
  readonly placementStatistics?: PinpointEmailPlacementStatistics;

}

/**
 * @schema PinpointEmailDomainDeliverabilityCampaign
 */
export interface PinpointEmailDomainDeliverabilityCampaign {
  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#CampaignId
   */
  readonly campaignId?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#Subject
   */
  readonly subject?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#FromAddress
   */
  readonly fromAddress?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#SendingIps
   */
  readonly sendingIps?: string[];

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#FirstSeenDateTime
   */
  readonly firstSeenDateTime?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#LastSeenDateTime
   */
  readonly lastSeenDateTime?: string;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#InboxCount
   */
  readonly inboxCount?: number;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#SpamCount
   */
  readonly spamCount?: number;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#ReadRate
   */
  readonly readRate?: number;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#DeleteRate
   */
  readonly deleteRate?: number;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#ReadDeleteRate
   */
  readonly readDeleteRate?: number;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#ProjectedVolume
   */
  readonly projectedVolume?: number;

  /**
   * @schema PinpointEmailDomainDeliverabilityCampaign#Esps
   */
  readonly esps?: string[];

}

/**
 * @schema PinpointEmailOverallVolume
 */
export interface PinpointEmailOverallVolume {
  /**
   * @schema PinpointEmailOverallVolume#VolumeStatistics
   */
  readonly volumeStatistics?: PinpointEmailVolumeStatistics;

  /**
   * @schema PinpointEmailOverallVolume#ReadRatePercent
   */
  readonly readRatePercent?: number;

  /**
   * @schema PinpointEmailOverallVolume#DomainIspPlacements
   */
  readonly domainIspPlacements?: PinpointEmailDomainIspPlacement[];

}

/**
 * @schema PinpointEmailDailyVolume
 */
export interface PinpointEmailDailyVolume {
  /**
   * @schema PinpointEmailDailyVolume#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema PinpointEmailDailyVolume#VolumeStatistics
   */
  readonly volumeStatistics?: PinpointEmailVolumeStatistics;

  /**
   * @schema PinpointEmailDailyVolume#DomainIspPlacements
   */
  readonly domainIspPlacements?: PinpointEmailDomainIspPlacement[];

}

/**
 * @schema PinpointEmailMailFromAttributes
 */
export interface PinpointEmailMailFromAttributes {
  /**
   * @schema PinpointEmailMailFromAttributes#MailFromDomain
   */
  readonly mailFromDomain: string;

  /**
   * @schema PinpointEmailMailFromAttributes#MailFromDomainStatus
   */
  readonly mailFromDomainStatus: string;

  /**
   * @schema PinpointEmailMailFromAttributes#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure: string;

}

/**
 * @schema PinpointEmailIdentityInfo
 */
export interface PinpointEmailIdentityInfo {
  /**
   * @schema PinpointEmailIdentityInfo#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema PinpointEmailIdentityInfo#IdentityName
   */
  readonly identityName?: string;

  /**
   * @schema PinpointEmailIdentityInfo#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema PinpointEmailDestination
 */
export interface PinpointEmailDestination {
  /**
   * @schema PinpointEmailDestination#ToAddresses
   */
  readonly toAddresses?: string[];

  /**
   * @schema PinpointEmailDestination#CcAddresses
   */
  readonly ccAddresses?: string[];

  /**
   * @schema PinpointEmailDestination#BccAddresses
   */
  readonly bccAddresses?: string[];

}

/**
 * @schema PinpointEmailMessageTag
 */
export interface PinpointEmailMessageTag {
  /**
   * @schema PinpointEmailMessageTag#Name
   */
  readonly name: string;

  /**
   * @schema PinpointEmailMessageTag#Value
   */
  readonly value: string;

}

/**
 * @schema PinpointEmailKinesisFirehoseDestination
 */
export interface PinpointEmailKinesisFirehoseDestination {
  /**
   * @schema PinpointEmailKinesisFirehoseDestination#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema PinpointEmailKinesisFirehoseDestination#DeliveryStreamArn
   */
  readonly deliveryStreamArn: string;

}

/**
 * @schema PinpointEmailCloudWatchDestination
 */
export interface PinpointEmailCloudWatchDestination {
  /**
   * @schema PinpointEmailCloudWatchDestination#DimensionConfigurations
   */
  readonly dimensionConfigurations: PinpointEmailCloudWatchDimensionConfiguration[];

}

/**
 * @schema PinpointEmailSnsDestination
 */
export interface PinpointEmailSnsDestination {
  /**
   * @schema PinpointEmailSnsDestination#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema PinpointEmailPinpointDestination
 */
export interface PinpointEmailPinpointDestination {
  /**
   * @schema PinpointEmailPinpointDestination#ApplicationArn
   */
  readonly applicationArn?: string;

}

/**
 * @schema PinpointEmailMessage
 */
export interface PinpointEmailMessage {
  /**
   * @schema PinpointEmailMessage#Subject
   */
  readonly subject: PinpointEmailContent;

  /**
   * @schema PinpointEmailMessage#Body
   */
  readonly body: PinpointEmailBody;

}

/**
 * @schema PinpointEmailRawMessage
 */
export interface PinpointEmailRawMessage {
  /**
   * @schema PinpointEmailRawMessage#Data
   */
  readonly data: any;

}

/**
 * @schema PinpointEmailTemplate
 */
export interface PinpointEmailTemplate {
  /**
   * @schema PinpointEmailTemplate#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema PinpointEmailTemplate#TemplateData
   */
  readonly templateData?: string;

}

/**
 * @schema PinpointEmailInboxPlacementTrackingOption
 */
export interface PinpointEmailInboxPlacementTrackingOption {
  /**
   * @schema PinpointEmailInboxPlacementTrackingOption#Global
   */
  readonly global?: boolean;

  /**
   * @schema PinpointEmailInboxPlacementTrackingOption#TrackedIsps
   */
  readonly trackedIsps?: string[];

}

/**
 * @schema PinpointEmailVolumeStatistics
 */
export interface PinpointEmailVolumeStatistics {
  /**
   * @schema PinpointEmailVolumeStatistics#InboxRawCount
   */
  readonly inboxRawCount?: number;

  /**
   * @schema PinpointEmailVolumeStatistics#SpamRawCount
   */
  readonly spamRawCount?: number;

  /**
   * @schema PinpointEmailVolumeStatistics#ProjectedInbox
   */
  readonly projectedInbox?: number;

  /**
   * @schema PinpointEmailVolumeStatistics#ProjectedSpam
   */
  readonly projectedSpam?: number;

}

/**
 * @schema PinpointEmailDomainIspPlacement
 */
export interface PinpointEmailDomainIspPlacement {
  /**
   * @schema PinpointEmailDomainIspPlacement#IspName
   */
  readonly ispName?: string;

  /**
   * @schema PinpointEmailDomainIspPlacement#InboxRawCount
   */
  readonly inboxRawCount?: number;

  /**
   * @schema PinpointEmailDomainIspPlacement#SpamRawCount
   */
  readonly spamRawCount?: number;

  /**
   * @schema PinpointEmailDomainIspPlacement#InboxPercentage
   */
  readonly inboxPercentage?: number;

  /**
   * @schema PinpointEmailDomainIspPlacement#SpamPercentage
   */
  readonly spamPercentage?: number;

}

/**
 * @schema PinpointEmailCloudWatchDimensionConfiguration
 */
export interface PinpointEmailCloudWatchDimensionConfiguration {
  /**
   * @schema PinpointEmailCloudWatchDimensionConfiguration#DimensionName
   */
  readonly dimensionName: string;

  /**
   * @schema PinpointEmailCloudWatchDimensionConfiguration#DimensionValueSource
   */
  readonly dimensionValueSource: string;

  /**
   * @schema PinpointEmailCloudWatchDimensionConfiguration#DefaultDimensionValue
   */
  readonly defaultDimensionValue: string;

}

/**
 * @schema PinpointEmailContent
 */
export interface PinpointEmailContent {
  /**
   * @schema PinpointEmailContent#Data
   */
  readonly data: string;

  /**
   * @schema PinpointEmailContent#Charset
   */
  readonly charset?: string;

}

/**
 * @schema PinpointEmailBody
 */
export interface PinpointEmailBody {
  /**
   * @schema PinpointEmailBody#Text
   */
  readonly text?: PinpointEmailContent;

  /**
   * @schema PinpointEmailBody#Html
   */
  readonly html?: PinpointEmailContent;

}
