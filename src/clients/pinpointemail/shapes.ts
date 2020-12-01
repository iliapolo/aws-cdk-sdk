/**
 * @schema CreateConfigurationSetRequest
 */
export interface CreateConfigurationSetRequest {
  /**
   * @schema CreateConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema CreateConfigurationSetRequest#TrackingOptions
   */
  readonly trackingOptions?: TrackingOptions;

  /**
   * @schema CreateConfigurationSetRequest#DeliveryOptions
   */
  readonly deliveryOptions?: DeliveryOptions;

  /**
   * @schema CreateConfigurationSetRequest#ReputationOptions
   */
  readonly reputationOptions?: ReputationOptions;

  /**
   * @schema CreateConfigurationSetRequest#SendingOptions
   */
  readonly sendingOptions?: SendingOptions;

  /**
   * @schema CreateConfigurationSetRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateConfigurationSetResponse
 */
export interface CreateConfigurationSetResponse {
}

/**
 * @schema CreateConfigurationSetEventDestinationRequest
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * @schema CreateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema CreateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

  /**
   * @schema CreateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination: EventDestinationDefinition;

}

/**
 * @schema CreateConfigurationSetEventDestinationResponse
 */
export interface CreateConfigurationSetEventDestinationResponse {
}

/**
 * @schema CreateDedicatedIpPoolRequest
 */
export interface CreateDedicatedIpPoolRequest {
  /**
   * @schema CreateDedicatedIpPoolRequest#PoolName
   */
  readonly poolName: string;

  /**
   * @schema CreateDedicatedIpPoolRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDedicatedIpPoolResponse
 */
export interface CreateDedicatedIpPoolResponse {
}

/**
 * @schema CreateDeliverabilityTestReportRequest
 */
export interface CreateDeliverabilityTestReportRequest {
  /**
   * @schema CreateDeliverabilityTestReportRequest#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema CreateDeliverabilityTestReportRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema CreateDeliverabilityTestReportRequest#Content
   */
  readonly content: EmailContent;

  /**
   * @schema CreateDeliverabilityTestReportRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDeliverabilityTestReportResponse
 */
export interface CreateDeliverabilityTestReportResponse {
  /**
   * @schema CreateDeliverabilityTestReportResponse#ReportId
   */
  readonly reportId: string;

  /**
   * @schema CreateDeliverabilityTestReportResponse#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus: string;

}

/**
 * @schema CreateEmailIdentityRequest
 */
export interface CreateEmailIdentityRequest {
  /**
   * @schema CreateEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema CreateEmailIdentityRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateEmailIdentityResponse
 */
export interface CreateEmailIdentityResponse {
  /**
   * @schema CreateEmailIdentityResponse#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema CreateEmailIdentityResponse#VerifiedForSendingStatus
   */
  readonly verifiedForSendingStatus?: boolean;

  /**
   * @schema CreateEmailIdentityResponse#DkimAttributes
   */
  readonly dkimAttributes?: DkimAttributes;

}

/**
 * @schema DeleteConfigurationSetRequest
 */
export interface DeleteConfigurationSetRequest {
  /**
   * @schema DeleteConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema DeleteConfigurationSetResponse
 */
export interface DeleteConfigurationSetResponse {
}

/**
 * @schema DeleteConfigurationSetEventDestinationRequest
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * @schema DeleteConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema DeleteConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

}

/**
 * @schema DeleteConfigurationSetEventDestinationResponse
 */
export interface DeleteConfigurationSetEventDestinationResponse {
}

/**
 * @schema DeleteDedicatedIpPoolRequest
 */
export interface DeleteDedicatedIpPoolRequest {
  /**
   * @schema DeleteDedicatedIpPoolRequest#PoolName
   */
  readonly poolName: string;

}

/**
 * @schema DeleteDedicatedIpPoolResponse
 */
export interface DeleteDedicatedIpPoolResponse {
}

/**
 * @schema DeleteEmailIdentityRequest
 */
export interface DeleteEmailIdentityRequest {
  /**
   * @schema DeleteEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema DeleteEmailIdentityResponse
 */
export interface DeleteEmailIdentityResponse {
}

/**
 * @schema GetAccountRequest
 */
export interface GetAccountRequest {
}

/**
 * @schema GetAccountResponse
 */
export interface GetAccountResponse {
  /**
   * @schema GetAccountResponse#SendQuota
   */
  readonly sendQuota?: SendQuota;

  /**
   * @schema GetAccountResponse#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

  /**
   * @schema GetAccountResponse#DedicatedIpAutoWarmupEnabled
   */
  readonly dedicatedIpAutoWarmupEnabled?: boolean;

  /**
   * @schema GetAccountResponse#EnforcementStatus
   */
  readonly enforcementStatus?: string;

  /**
   * @schema GetAccountResponse#ProductionAccessEnabled
   */
  readonly productionAccessEnabled?: boolean;

}

/**
 * @schema GetBlacklistReportsRequest
 */
export interface GetBlacklistReportsRequest {
  /**
   * @schema GetBlacklistReportsRequest#BlacklistItemNames
   */
  readonly blacklistItemNames: string[];

}

/**
 * @schema GetBlacklistReportsResponse
 */
export interface GetBlacklistReportsResponse {
  /**
   * @schema GetBlacklistReportsResponse#BlacklistReport
   */
  readonly blacklistReport: { [key: string]: BlacklistEntry[] };

}

/**
 * @schema GetConfigurationSetRequest
 */
export interface GetConfigurationSetRequest {
  /**
   * @schema GetConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema GetConfigurationSetResponse
 */
export interface GetConfigurationSetResponse {
  /**
   * @schema GetConfigurationSetResponse#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema GetConfigurationSetResponse#TrackingOptions
   */
  readonly trackingOptions?: TrackingOptions;

  /**
   * @schema GetConfigurationSetResponse#DeliveryOptions
   */
  readonly deliveryOptions?: DeliveryOptions;

  /**
   * @schema GetConfigurationSetResponse#ReputationOptions
   */
  readonly reputationOptions?: ReputationOptions;

  /**
   * @schema GetConfigurationSetResponse#SendingOptions
   */
  readonly sendingOptions?: SendingOptions;

  /**
   * @schema GetConfigurationSetResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetConfigurationSetEventDestinationsRequest
 */
export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * @schema GetConfigurationSetEventDestinationsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema GetConfigurationSetEventDestinationsResponse
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * @schema GetConfigurationSetEventDestinationsResponse#EventDestinations
   */
  readonly eventDestinations?: EventDestination[];

}

/**
 * @schema GetDedicatedIpRequest
 */
export interface GetDedicatedIpRequest {
  /**
   * @schema GetDedicatedIpRequest#Ip
   */
  readonly ip: string;

}

/**
 * @schema GetDedicatedIpResponse
 */
export interface GetDedicatedIpResponse {
  /**
   * @schema GetDedicatedIpResponse#DedicatedIp
   */
  readonly dedicatedIp?: DedicatedIp;

}

/**
 * @schema GetDedicatedIpsRequest
 */
export interface GetDedicatedIpsRequest {
  /**
   * @schema GetDedicatedIpsRequest#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema GetDedicatedIpsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetDedicatedIpsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema GetDedicatedIpsResponse
 */
export interface GetDedicatedIpsResponse {
  /**
   * @schema GetDedicatedIpsResponse#DedicatedIps
   */
  readonly dedicatedIps?: DedicatedIp[];

  /**
   * @schema GetDedicatedIpsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDeliverabilityDashboardOptionsRequest
 */
export interface GetDeliverabilityDashboardOptionsRequest {
}

/**
 * @schema GetDeliverabilityDashboardOptionsResponse
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  /**
   * @schema GetDeliverabilityDashboardOptionsResponse#DashboardEnabled
   */
  readonly dashboardEnabled: boolean;

  /**
   * @schema GetDeliverabilityDashboardOptionsResponse#SubscriptionExpiryDate
   */
  readonly subscriptionExpiryDate?: string;

  /**
   * @schema GetDeliverabilityDashboardOptionsResponse#AccountStatus
   */
  readonly accountStatus?: string;

  /**
   * @schema GetDeliverabilityDashboardOptionsResponse#ActiveSubscribedDomains
   */
  readonly activeSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  /**
   * @schema GetDeliverabilityDashboardOptionsResponse#PendingExpirationSubscribedDomains
   */
  readonly pendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];

}

/**
 * @schema GetDeliverabilityTestReportRequest
 */
export interface GetDeliverabilityTestReportRequest {
  /**
   * @schema GetDeliverabilityTestReportRequest#ReportId
   */
  readonly reportId: string;

}

/**
 * @schema GetDeliverabilityTestReportResponse
 */
export interface GetDeliverabilityTestReportResponse {
  /**
   * @schema GetDeliverabilityTestReportResponse#DeliverabilityTestReport
   */
  readonly deliverabilityTestReport: DeliverabilityTestReport;

  /**
   * @schema GetDeliverabilityTestReportResponse#OverallPlacement
   */
  readonly overallPlacement: PlacementStatistics;

  /**
   * @schema GetDeliverabilityTestReportResponse#IspPlacements
   */
  readonly ispPlacements: IspPlacement[];

  /**
   * @schema GetDeliverabilityTestReportResponse#Message
   */
  readonly message?: string;

  /**
   * @schema GetDeliverabilityTestReportResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetDomainDeliverabilityCampaignRequest
 */
export interface GetDomainDeliverabilityCampaignRequest {
  /**
   * @schema GetDomainDeliverabilityCampaignRequest#CampaignId
   */
  readonly campaignId: string;

}

/**
 * @schema GetDomainDeliverabilityCampaignResponse
 */
export interface GetDomainDeliverabilityCampaignResponse {
  /**
   * @schema GetDomainDeliverabilityCampaignResponse#DomainDeliverabilityCampaign
   */
  readonly domainDeliverabilityCampaign: DomainDeliverabilityCampaign;

}

/**
 * @schema GetDomainStatisticsReportRequest
 */
export interface GetDomainStatisticsReportRequest {
  /**
   * @schema GetDomainStatisticsReportRequest#Domain
   */
  readonly domain: string;

  /**
   * @schema GetDomainStatisticsReportRequest#StartDate
   */
  readonly startDate: string;

  /**
   * @schema GetDomainStatisticsReportRequest#EndDate
   */
  readonly endDate: string;

}

/**
 * @schema GetDomainStatisticsReportResponse
 */
export interface GetDomainStatisticsReportResponse {
  /**
   * @schema GetDomainStatisticsReportResponse#OverallVolume
   */
  readonly overallVolume: OverallVolume;

  /**
   * @schema GetDomainStatisticsReportResponse#DailyVolumes
   */
  readonly dailyVolumes: DailyVolume[];

}

/**
 * @schema GetEmailIdentityRequest
 */
export interface GetEmailIdentityRequest {
  /**
   * @schema GetEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema GetEmailIdentityResponse
 */
export interface GetEmailIdentityResponse {
  /**
   * @schema GetEmailIdentityResponse#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema GetEmailIdentityResponse#FeedbackForwardingStatus
   */
  readonly feedbackForwardingStatus?: boolean;

  /**
   * @schema GetEmailIdentityResponse#VerifiedForSendingStatus
   */
  readonly verifiedForSendingStatus?: boolean;

  /**
   * @schema GetEmailIdentityResponse#DkimAttributes
   */
  readonly dkimAttributes?: DkimAttributes;

  /**
   * @schema GetEmailIdentityResponse#MailFromAttributes
   */
  readonly mailFromAttributes?: MailFromAttributes;

  /**
   * @schema GetEmailIdentityResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListConfigurationSetsRequest
 */
export interface ListConfigurationSetsRequest {
  /**
   * @schema ListConfigurationSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListConfigurationSetsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListConfigurationSetsResponse
 */
export interface ListConfigurationSetsResponse {
  /**
   * @schema ListConfigurationSetsResponse#ConfigurationSets
   */
  readonly configurationSets?: string[];

  /**
   * @schema ListConfigurationSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDedicatedIpPoolsRequest
 */
export interface ListDedicatedIpPoolsRequest {
  /**
   * @schema ListDedicatedIpPoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDedicatedIpPoolsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListDedicatedIpPoolsResponse
 */
export interface ListDedicatedIpPoolsResponse {
  /**
   * @schema ListDedicatedIpPoolsResponse#DedicatedIpPools
   */
  readonly dedicatedIpPools?: string[];

  /**
   * @schema ListDedicatedIpPoolsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDeliverabilityTestReportsRequest
 */
export interface ListDeliverabilityTestReportsRequest {
  /**
   * @schema ListDeliverabilityTestReportsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDeliverabilityTestReportsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListDeliverabilityTestReportsResponse
 */
export interface ListDeliverabilityTestReportsResponse {
  /**
   * @schema ListDeliverabilityTestReportsResponse#DeliverabilityTestReports
   */
  readonly deliverabilityTestReports: DeliverabilityTestReport[];

  /**
   * @schema ListDeliverabilityTestReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainDeliverabilityCampaignsRequest
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  /**
   * @schema ListDomainDeliverabilityCampaignsRequest#StartDate
   */
  readonly startDate: string;

  /**
   * @schema ListDomainDeliverabilityCampaignsRequest#EndDate
   */
  readonly endDate: string;

  /**
   * @schema ListDomainDeliverabilityCampaignsRequest#SubscribedDomain
   */
  readonly subscribedDomain: string;

  /**
   * @schema ListDomainDeliverabilityCampaignsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDomainDeliverabilityCampaignsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListDomainDeliverabilityCampaignsResponse
 */
export interface ListDomainDeliverabilityCampaignsResponse {
  /**
   * @schema ListDomainDeliverabilityCampaignsResponse#DomainDeliverabilityCampaigns
   */
  readonly domainDeliverabilityCampaigns: DomainDeliverabilityCampaign[];

  /**
   * @schema ListDomainDeliverabilityCampaignsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEmailIdentitiesRequest
 */
export interface ListEmailIdentitiesRequest {
  /**
   * @schema ListEmailIdentitiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEmailIdentitiesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListEmailIdentitiesResponse
 */
export interface ListEmailIdentitiesResponse {
  /**
   * @schema ListEmailIdentitiesResponse#EmailIdentities
   */
  readonly emailIdentities?: IdentityInfo[];

  /**
   * @schema ListEmailIdentitiesResponse#NextToken
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
  readonly tags: Tag[];

}

/**
 * @schema PutAccountDedicatedIpWarmupAttributesRequest
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * @schema PutAccountDedicatedIpWarmupAttributesRequest#AutoWarmupEnabled
   */
  readonly autoWarmupEnabled?: boolean;

}

/**
 * @schema PutAccountDedicatedIpWarmupAttributesResponse
 */
export interface PutAccountDedicatedIpWarmupAttributesResponse {
}

/**
 * @schema PutAccountSendingAttributesRequest
 */
export interface PutAccountSendingAttributesRequest {
  /**
   * @schema PutAccountSendingAttributesRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema PutAccountSendingAttributesResponse
 */
export interface PutAccountSendingAttributesResponse {
}

/**
 * @schema PutConfigurationSetDeliveryOptionsRequest
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * @schema PutConfigurationSetDeliveryOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PutConfigurationSetDeliveryOptionsRequest#TlsPolicy
   */
  readonly tlsPolicy?: string;

  /**
   * @schema PutConfigurationSetDeliveryOptionsRequest#SendingPoolName
   */
  readonly sendingPoolName?: string;

}

/**
 * @schema PutConfigurationSetDeliveryOptionsResponse
 */
export interface PutConfigurationSetDeliveryOptionsResponse {
}

/**
 * @schema PutConfigurationSetReputationOptionsRequest
 */
export interface PutConfigurationSetReputationOptionsRequest {
  /**
   * @schema PutConfigurationSetReputationOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PutConfigurationSetReputationOptionsRequest#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

}

/**
 * @schema PutConfigurationSetReputationOptionsResponse
 */
export interface PutConfigurationSetReputationOptionsResponse {
}

/**
 * @schema PutConfigurationSetSendingOptionsRequest
 */
export interface PutConfigurationSetSendingOptionsRequest {
  /**
   * @schema PutConfigurationSetSendingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PutConfigurationSetSendingOptionsRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema PutConfigurationSetSendingOptionsResponse
 */
export interface PutConfigurationSetSendingOptionsResponse {
}

/**
 * @schema PutConfigurationSetTrackingOptionsRequest
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  /**
   * @schema PutConfigurationSetTrackingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PutConfigurationSetTrackingOptionsRequest#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * @schema PutConfigurationSetTrackingOptionsResponse
 */
export interface PutConfigurationSetTrackingOptionsResponse {
}

/**
 * @schema PutDedicatedIpInPoolRequest
 */
export interface PutDedicatedIpInPoolRequest {
  /**
   * @schema PutDedicatedIpInPoolRequest#Ip
   */
  readonly ip: string;

  /**
   * @schema PutDedicatedIpInPoolRequest#DestinationPoolName
   */
  readonly destinationPoolName: string;

}

/**
 * @schema PutDedicatedIpInPoolResponse
 */
export interface PutDedicatedIpInPoolResponse {
}

/**
 * @schema PutDedicatedIpWarmupAttributesRequest
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  /**
   * @schema PutDedicatedIpWarmupAttributesRequest#Ip
   */
  readonly ip: string;

  /**
   * @schema PutDedicatedIpWarmupAttributesRequest#WarmupPercentage
   */
  readonly warmupPercentage: number;

}

/**
 * @schema PutDedicatedIpWarmupAttributesResponse
 */
export interface PutDedicatedIpWarmupAttributesResponse {
}

/**
 * @schema PutDeliverabilityDashboardOptionRequest
 */
export interface PutDeliverabilityDashboardOptionRequest {
  /**
   * @schema PutDeliverabilityDashboardOptionRequest#DashboardEnabled
   */
  readonly dashboardEnabled: boolean;

  /**
   * @schema PutDeliverabilityDashboardOptionRequest#SubscribedDomains
   */
  readonly subscribedDomains?: DomainDeliverabilityTrackingOption[];

}

/**
 * @schema PutDeliverabilityDashboardOptionResponse
 */
export interface PutDeliverabilityDashboardOptionResponse {
}

/**
 * @schema PutEmailIdentityDkimAttributesRequest
 */
export interface PutEmailIdentityDkimAttributesRequest {
  /**
   * @schema PutEmailIdentityDkimAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PutEmailIdentityDkimAttributesRequest#SigningEnabled
   */
  readonly signingEnabled?: boolean;

}

/**
 * @schema PutEmailIdentityDkimAttributesResponse
 */
export interface PutEmailIdentityDkimAttributesResponse {
}

/**
 * @schema PutEmailIdentityFeedbackAttributesRequest
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * @schema PutEmailIdentityFeedbackAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PutEmailIdentityFeedbackAttributesRequest#EmailForwardingEnabled
   */
  readonly emailForwardingEnabled?: boolean;

}

/**
 * @schema PutEmailIdentityFeedbackAttributesResponse
 */
export interface PutEmailIdentityFeedbackAttributesResponse {
}

/**
 * @schema PutEmailIdentityMailFromAttributesRequest
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  /**
   * @schema PutEmailIdentityMailFromAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PutEmailIdentityMailFromAttributesRequest#MailFromDomain
   */
  readonly mailFromDomain?: string;

  /**
   * @schema PutEmailIdentityMailFromAttributesRequest#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure?: string;

}

/**
 * @schema PutEmailIdentityMailFromAttributesResponse
 */
export interface PutEmailIdentityMailFromAttributesResponse {
}

/**
 * @schema SendEmailRequest
 */
export interface SendEmailRequest {
  /**
   * @schema SendEmailRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema SendEmailRequest#Destination
   */
  readonly destination: Destination;

  /**
   * @schema SendEmailRequest#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema SendEmailRequest#FeedbackForwardingEmailAddress
   */
  readonly feedbackForwardingEmailAddress?: string;

  /**
   * @schema SendEmailRequest#Content
   */
  readonly content: EmailContent;

  /**
   * @schema SendEmailRequest#EmailTags
   */
  readonly emailTags?: MessageTag[];

  /**
   * @schema SendEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * @schema SendEmailResponse
 */
export interface SendEmailResponse {
  /**
   * @schema SendEmailResponse#MessageId
   */
  readonly messageId?: string;

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
 * @schema UpdateConfigurationSetEventDestinationRequest
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * @schema UpdateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema UpdateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

  /**
   * @schema UpdateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination: EventDestinationDefinition;

}

/**
 * @schema UpdateConfigurationSetEventDestinationResponse
 */
export interface UpdateConfigurationSetEventDestinationResponse {
}

/**
 * @schema TrackingOptions
 */
export interface TrackingOptions {
  /**
   * @schema TrackingOptions#CustomRedirectDomain
   */
  readonly customRedirectDomain: string;

}

/**
 * @schema DeliveryOptions
 */
export interface DeliveryOptions {
  /**
   * @schema DeliveryOptions#TlsPolicy
   */
  readonly tlsPolicy?: string;

  /**
   * @schema DeliveryOptions#SendingPoolName
   */
  readonly sendingPoolName?: string;

}

/**
 * @schema ReputationOptions
 */
export interface ReputationOptions {
  /**
   * @schema ReputationOptions#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

  /**
   * @schema ReputationOptions#LastFreshStart
   */
  readonly lastFreshStart?: string;

}

/**
 * @schema SendingOptions
 */
export interface SendingOptions {
  /**
   * @schema SendingOptions#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema EventDestinationDefinition
 */
export interface EventDestinationDefinition {
  /**
   * @schema EventDestinationDefinition#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EventDestinationDefinition#MatchingEventTypes
   */
  readonly matchingEventTypes?: string[];

  /**
   * @schema EventDestinationDefinition#KinesisFirehoseDestination
   */
  readonly kinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @schema EventDestinationDefinition#CloudWatchDestination
   */
  readonly cloudWatchDestination?: CloudWatchDestination;

  /**
   * @schema EventDestinationDefinition#SnsDestination
   */
  readonly snsDestination?: SnsDestination;

  /**
   * @schema EventDestinationDefinition#PinpointDestination
   */
  readonly pinpointDestination?: PinpointDestination;

}

/**
 * @schema EmailContent
 */
export interface EmailContent {
  /**
   * @schema EmailContent#Simple
   */
  readonly simple?: Message;

  /**
   * @schema EmailContent#Raw
   */
  readonly raw?: RawMessage;

  /**
   * @schema EmailContent#Template
   */
  readonly template?: Template;

}

/**
 * @schema DkimAttributes
 */
export interface DkimAttributes {
  /**
   * @schema DkimAttributes#SigningEnabled
   */
  readonly signingEnabled?: boolean;

  /**
   * @schema DkimAttributes#Status
   */
  readonly status?: string;

  /**
   * @schema DkimAttributes#Tokens
   */
  readonly tokens?: string[];

}

/**
 * @schema SendQuota
 */
export interface SendQuota {
  /**
   * @schema SendQuota#Max24HourSend
   */
  readonly max24HourSend?: number;

  /**
   * @schema SendQuota#MaxSendRate
   */
  readonly maxSendRate?: number;

  /**
   * @schema SendQuota#SentLast24Hours
   */
  readonly sentLast24Hours?: number;

}

/**
 * @schema BlacklistEntry
 */
export interface BlacklistEntry {
  /**
   * @schema BlacklistEntry#RblName
   */
  readonly rblName?: string;

  /**
   * @schema BlacklistEntry#ListingTime
   */
  readonly listingTime?: string;

  /**
   * @schema BlacklistEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema EventDestination
 */
export interface EventDestination {
  /**
   * @schema EventDestination#Name
   */
  readonly name: string;

  /**
   * @schema EventDestination#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EventDestination#MatchingEventTypes
   */
  readonly matchingEventTypes: string[];

  /**
   * @schema EventDestination#KinesisFirehoseDestination
   */
  readonly kinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @schema EventDestination#CloudWatchDestination
   */
  readonly cloudWatchDestination?: CloudWatchDestination;

  /**
   * @schema EventDestination#SnsDestination
   */
  readonly snsDestination?: SnsDestination;

  /**
   * @schema EventDestination#PinpointDestination
   */
  readonly pinpointDestination?: PinpointDestination;

}

/**
 * @schema DedicatedIp
 */
export interface DedicatedIp {
  /**
   * @schema DedicatedIp#Ip
   */
  readonly ip: string;

  /**
   * @schema DedicatedIp#WarmupStatus
   */
  readonly warmupStatus: string;

  /**
   * @schema DedicatedIp#WarmupPercentage
   */
  readonly warmupPercentage: number;

  /**
   * @schema DedicatedIp#PoolName
   */
  readonly poolName?: string;

}

/**
 * @schema DomainDeliverabilityTrackingOption
 */
export interface DomainDeliverabilityTrackingOption {
  /**
   * @schema DomainDeliverabilityTrackingOption#Domain
   */
  readonly domain?: string;

  /**
   * @schema DomainDeliverabilityTrackingOption#SubscriptionStartDate
   */
  readonly subscriptionStartDate?: string;

  /**
   * @schema DomainDeliverabilityTrackingOption#InboxPlacementTrackingOption
   */
  readonly inboxPlacementTrackingOption?: InboxPlacementTrackingOption;

}

/**
 * @schema DeliverabilityTestReport
 */
export interface DeliverabilityTestReport {
  /**
   * @schema DeliverabilityTestReport#ReportId
   */
  readonly reportId?: string;

  /**
   * @schema DeliverabilityTestReport#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema DeliverabilityTestReport#Subject
   */
  readonly subject?: string;

  /**
   * @schema DeliverabilityTestReport#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema DeliverabilityTestReport#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DeliverabilityTestReport#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus?: string;

}

/**
 * @schema PlacementStatistics
 */
export interface PlacementStatistics {
  /**
   * @schema PlacementStatistics#InboxPercentage
   */
  readonly inboxPercentage?: number;

  /**
   * @schema PlacementStatistics#SpamPercentage
   */
  readonly spamPercentage?: number;

  /**
   * @schema PlacementStatistics#MissingPercentage
   */
  readonly missingPercentage?: number;

  /**
   * @schema PlacementStatistics#SpfPercentage
   */
  readonly spfPercentage?: number;

  /**
   * @schema PlacementStatistics#DkimPercentage
   */
  readonly dkimPercentage?: number;

}

/**
 * @schema IspPlacement
 */
export interface IspPlacement {
  /**
   * @schema IspPlacement#IspName
   */
  readonly ispName?: string;

  /**
   * @schema IspPlacement#PlacementStatistics
   */
  readonly placementStatistics?: PlacementStatistics;

}

/**
 * @schema DomainDeliverabilityCampaign
 */
export interface DomainDeliverabilityCampaign {
  /**
   * @schema DomainDeliverabilityCampaign#CampaignId
   */
  readonly campaignId?: string;

  /**
   * @schema DomainDeliverabilityCampaign#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema DomainDeliverabilityCampaign#Subject
   */
  readonly subject?: string;

  /**
   * @schema DomainDeliverabilityCampaign#FromAddress
   */
  readonly fromAddress?: string;

  /**
   * @schema DomainDeliverabilityCampaign#SendingIps
   */
  readonly sendingIps?: string[];

  /**
   * @schema DomainDeliverabilityCampaign#FirstSeenDateTime
   */
  readonly firstSeenDateTime?: string;

  /**
   * @schema DomainDeliverabilityCampaign#LastSeenDateTime
   */
  readonly lastSeenDateTime?: string;

  /**
   * @schema DomainDeliverabilityCampaign#InboxCount
   */
  readonly inboxCount?: number;

  /**
   * @schema DomainDeliverabilityCampaign#SpamCount
   */
  readonly spamCount?: number;

  /**
   * @schema DomainDeliverabilityCampaign#ReadRate
   */
  readonly readRate?: number;

  /**
   * @schema DomainDeliverabilityCampaign#DeleteRate
   */
  readonly deleteRate?: number;

  /**
   * @schema DomainDeliverabilityCampaign#ReadDeleteRate
   */
  readonly readDeleteRate?: number;

  /**
   * @schema DomainDeliverabilityCampaign#ProjectedVolume
   */
  readonly projectedVolume?: number;

  /**
   * @schema DomainDeliverabilityCampaign#Esps
   */
  readonly esps?: string[];

}

/**
 * @schema OverallVolume
 */
export interface OverallVolume {
  /**
   * @schema OverallVolume#VolumeStatistics
   */
  readonly volumeStatistics?: VolumeStatistics;

  /**
   * @schema OverallVolume#ReadRatePercent
   */
  readonly readRatePercent?: number;

  /**
   * @schema OverallVolume#DomainIspPlacements
   */
  readonly domainIspPlacements?: DomainIspPlacement[];

}

/**
 * @schema DailyVolume
 */
export interface DailyVolume {
  /**
   * @schema DailyVolume#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema DailyVolume#VolumeStatistics
   */
  readonly volumeStatistics?: VolumeStatistics;

  /**
   * @schema DailyVolume#DomainIspPlacements
   */
  readonly domainIspPlacements?: DomainIspPlacement[];

}

/**
 * @schema MailFromAttributes
 */
export interface MailFromAttributes {
  /**
   * @schema MailFromAttributes#MailFromDomain
   */
  readonly mailFromDomain: string;

  /**
   * @schema MailFromAttributes#MailFromDomainStatus
   */
  readonly mailFromDomainStatus: string;

  /**
   * @schema MailFromAttributes#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure: string;

}

/**
 * @schema IdentityInfo
 */
export interface IdentityInfo {
  /**
   * @schema IdentityInfo#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema IdentityInfo#IdentityName
   */
  readonly identityName?: string;

  /**
   * @schema IdentityInfo#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema Destination
 */
export interface Destination {
  /**
   * @schema Destination#ToAddresses
   */
  readonly toAddresses?: string[];

  /**
   * @schema Destination#CcAddresses
   */
  readonly ccAddresses?: string[];

  /**
   * @schema Destination#BccAddresses
   */
  readonly bccAddresses?: string[];

}

/**
 * @schema MessageTag
 */
export interface MessageTag {
  /**
   * @schema MessageTag#Name
   */
  readonly name: string;

  /**
   * @schema MessageTag#Value
   */
  readonly value: string;

}

/**
 * @schema KinesisFirehoseDestination
 */
export interface KinesisFirehoseDestination {
  /**
   * @schema KinesisFirehoseDestination#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema KinesisFirehoseDestination#DeliveryStreamArn
   */
  readonly deliveryStreamArn: string;

}

/**
 * @schema CloudWatchDestination
 */
export interface CloudWatchDestination {
  /**
   * @schema CloudWatchDestination#DimensionConfigurations
   */
  readonly dimensionConfigurations: CloudWatchDimensionConfiguration[];

}

/**
 * @schema SnsDestination
 */
export interface SnsDestination {
  /**
   * @schema SnsDestination#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema PinpointDestination
 */
export interface PinpointDestination {
  /**
   * @schema PinpointDestination#ApplicationArn
   */
  readonly applicationArn?: string;

}

/**
 * @schema Message
 */
export interface Message {
  /**
   * @schema Message#Subject
   */
  readonly subject: Content;

  /**
   * @schema Message#Body
   */
  readonly body: Body;

}

/**
 * @schema RawMessage
 */
export interface RawMessage {
  /**
   * @schema RawMessage#Data
   */
  readonly data: any;

}

/**
 * @schema Template
 */
export interface Template {
  /**
   * @schema Template#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema Template#TemplateData
   */
  readonly templateData?: string;

}

/**
 * @schema InboxPlacementTrackingOption
 */
export interface InboxPlacementTrackingOption {
  /**
   * @schema InboxPlacementTrackingOption#Global
   */
  readonly global?: boolean;

  /**
   * @schema InboxPlacementTrackingOption#TrackedIsps
   */
  readonly trackedIsps?: string[];

}

/**
 * @schema VolumeStatistics
 */
export interface VolumeStatistics {
  /**
   * @schema VolumeStatistics#InboxRawCount
   */
  readonly inboxRawCount?: number;

  /**
   * @schema VolumeStatistics#SpamRawCount
   */
  readonly spamRawCount?: number;

  /**
   * @schema VolumeStatistics#ProjectedInbox
   */
  readonly projectedInbox?: number;

  /**
   * @schema VolumeStatistics#ProjectedSpam
   */
  readonly projectedSpam?: number;

}

/**
 * @schema DomainIspPlacement
 */
export interface DomainIspPlacement {
  /**
   * @schema DomainIspPlacement#IspName
   */
  readonly ispName?: string;

  /**
   * @schema DomainIspPlacement#InboxRawCount
   */
  readonly inboxRawCount?: number;

  /**
   * @schema DomainIspPlacement#SpamRawCount
   */
  readonly spamRawCount?: number;

  /**
   * @schema DomainIspPlacement#InboxPercentage
   */
  readonly inboxPercentage?: number;

  /**
   * @schema DomainIspPlacement#SpamPercentage
   */
  readonly spamPercentage?: number;

}

/**
 * @schema CloudWatchDimensionConfiguration
 */
export interface CloudWatchDimensionConfiguration {
  /**
   * @schema CloudWatchDimensionConfiguration#DimensionName
   */
  readonly dimensionName: string;

  /**
   * @schema CloudWatchDimensionConfiguration#DimensionValueSource
   */
  readonly dimensionValueSource: string;

  /**
   * @schema CloudWatchDimensionConfiguration#DefaultDimensionValue
   */
  readonly defaultDimensionValue: string;

}

/**
 * @schema Content
 */
export interface Content {
  /**
   * @schema Content#Data
   */
  readonly data: string;

  /**
   * @schema Content#Charset
   */
  readonly charset?: string;

}

/**
 * @schema Body
 */
export interface Body {
  /**
   * @schema Body#Text
   */
  readonly text?: Content;

  /**
   * @schema Body#Html
   */
  readonly html?: Content;

}
