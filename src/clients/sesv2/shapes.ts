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

  /**
   * @schema CreateConfigurationSetRequest#SuppressionOptions
   */
  readonly suppressionOptions?: SuppressionOptions;

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
 * @schema CreateContactRequest
 */
export interface CreateContactRequest {
  /**
   * @schema CreateContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema CreateContactRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema CreateContactRequest#TopicPreferences
   */
  readonly topicPreferences?: TopicPreference[];

  /**
   * @schema CreateContactRequest#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema CreateContactRequest#AttributesData
   */
  readonly attributesData?: string;

}

/**
 * @schema CreateContactResponse
 */
export interface CreateContactResponse {
}

/**
 * @schema CreateContactListRequest
 */
export interface CreateContactListRequest {
  /**
   * @schema CreateContactListRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema CreateContactListRequest#Topics
   */
  readonly topics?: Topic[];

  /**
   * @schema CreateContactListRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateContactListRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateContactListResponse
 */
export interface CreateContactListResponse {
}

/**
 * @schema CreateCustomVerificationEmailTemplateRequest
 */
export interface CreateCustomVerificationEmailTemplateRequest {
  /**
   * @schema CreateCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema CreateCustomVerificationEmailTemplateRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema CreateCustomVerificationEmailTemplateRequest#TemplateSubject
   */
  readonly templateSubject: string;

  /**
   * @schema CreateCustomVerificationEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: string;

  /**
   * @schema CreateCustomVerificationEmailTemplateRequest#SuccessRedirectionURL
   */
  readonly successRedirectionUrl: string;

  /**
   * @schema CreateCustomVerificationEmailTemplateRequest#FailureRedirectionURL
   */
  readonly failureRedirectionUrl: string;

}

/**
 * @schema CreateCustomVerificationEmailTemplateResponse
 */
export interface CreateCustomVerificationEmailTemplateResponse {
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

  /**
   * @schema CreateEmailIdentityRequest#DkimSigningAttributes
   */
  readonly dkimSigningAttributes?: DkimSigningAttributes;

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
 * @schema CreateEmailIdentityPolicyRequest
 */
export interface CreateEmailIdentityPolicyRequest {
  /**
   * @schema CreateEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema CreateEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema CreateEmailIdentityPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema CreateEmailIdentityPolicyResponse
 */
export interface CreateEmailIdentityPolicyResponse {
}

/**
 * @schema CreateEmailTemplateRequest
 */
export interface CreateEmailTemplateRequest {
  /**
   * @schema CreateEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema CreateEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: EmailTemplateContent;

}

/**
 * @schema CreateEmailTemplateResponse
 */
export interface CreateEmailTemplateResponse {
}

/**
 * @schema CreateImportJobRequest
 */
export interface CreateImportJobRequest {
  /**
   * @schema CreateImportJobRequest#ImportDestination
   */
  readonly importDestination: ImportDestination;

  /**
   * @schema CreateImportJobRequest#ImportDataSource
   */
  readonly importDataSource: ImportDataSource;

}

/**
 * @schema CreateImportJobResponse
 */
export interface CreateImportJobResponse {
  /**
   * @schema CreateImportJobResponse#JobId
   */
  readonly jobId?: string;

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
 * @schema DeleteContactRequest
 */
export interface DeleteContactRequest {
  /**
   * @schema DeleteContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema DeleteContactRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema DeleteContactResponse
 */
export interface DeleteContactResponse {
}

/**
 * @schema DeleteContactListRequest
 */
export interface DeleteContactListRequest {
  /**
   * @schema DeleteContactListRequest#ContactListName
   */
  readonly contactListName: string;

}

/**
 * @schema DeleteContactListResponse
 */
export interface DeleteContactListResponse {
}

/**
 * @schema DeleteCustomVerificationEmailTemplateRequest
 */
export interface DeleteCustomVerificationEmailTemplateRequest {
  /**
   * @schema DeleteCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema DeleteCustomVerificationEmailTemplateResponse
 */
export interface DeleteCustomVerificationEmailTemplateResponse {
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
 * @schema DeleteEmailIdentityPolicyRequest
 */
export interface DeleteEmailIdentityPolicyRequest {
  /**
   * @schema DeleteEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema DeleteEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema DeleteEmailIdentityPolicyResponse
 */
export interface DeleteEmailIdentityPolicyResponse {
}

/**
 * @schema DeleteEmailTemplateRequest
 */
export interface DeleteEmailTemplateRequest {
  /**
   * @schema DeleteEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema DeleteEmailTemplateResponse
 */
export interface DeleteEmailTemplateResponse {
}

/**
 * @schema DeleteSuppressedDestinationRequest
 */
export interface DeleteSuppressedDestinationRequest {
  /**
   * @schema DeleteSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema DeleteSuppressedDestinationResponse
 */
export interface DeleteSuppressedDestinationResponse {
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

  /**
   * @schema GetAccountResponse#SendQuota
   */
  readonly sendQuota?: SendQuota;

  /**
   * @schema GetAccountResponse#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

  /**
   * @schema GetAccountResponse#SuppressionAttributes
   */
  readonly suppressionAttributes?: SuppressionAttributes;

  /**
   * @schema GetAccountResponse#Details
   */
  readonly details?: AccountDetails;

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

  /**
   * @schema GetConfigurationSetResponse#SuppressionOptions
   */
  readonly suppressionOptions?: SuppressionOptions;

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
 * @schema GetContactRequest
 */
export interface GetContactRequest {
  /**
   * @schema GetContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema GetContactRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema GetContactResponse
 */
export interface GetContactResponse {
  /**
   * @schema GetContactResponse#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema GetContactResponse#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema GetContactResponse#TopicPreferences
   */
  readonly topicPreferences?: TopicPreference[];

  /**
   * @schema GetContactResponse#TopicDefaultPreferences
   */
  readonly topicDefaultPreferences?: TopicPreference[];

  /**
   * @schema GetContactResponse#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema GetContactResponse#AttributesData
   */
  readonly attributesData?: string;

  /**
   * @schema GetContactResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GetContactResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema GetContactListRequest
 */
export interface GetContactListRequest {
  /**
   * @schema GetContactListRequest#ContactListName
   */
  readonly contactListName: string;

}

/**
 * @schema GetContactListResponse
 */
export interface GetContactListResponse {
  /**
   * @schema GetContactListResponse#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema GetContactListResponse#Topics
   */
  readonly topics?: Topic[];

  /**
   * @schema GetContactListResponse#Description
   */
  readonly description?: string;

  /**
   * @schema GetContactListResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GetContactListResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema GetContactListResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetCustomVerificationEmailTemplateRequest
 */
export interface GetCustomVerificationEmailTemplateRequest {
  /**
   * @schema GetCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema GetCustomVerificationEmailTemplateResponse
 */
export interface GetCustomVerificationEmailTemplateResponse {
  /**
   * @schema GetCustomVerificationEmailTemplateResponse#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema GetCustomVerificationEmailTemplateResponse#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema GetCustomVerificationEmailTemplateResponse#TemplateSubject
   */
  readonly templateSubject?: string;

  /**
   * @schema GetCustomVerificationEmailTemplateResponse#TemplateContent
   */
  readonly templateContent?: string;

  /**
   * @schema GetCustomVerificationEmailTemplateResponse#SuccessRedirectionURL
   */
  readonly successRedirectionUrl?: string;

  /**
   * @schema GetCustomVerificationEmailTemplateResponse#FailureRedirectionURL
   */
  readonly failureRedirectionUrl?: string;

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
   * @schema GetEmailIdentityResponse#Policies
   */
  readonly policies?: { [key: string]: string };

  /**
   * @schema GetEmailIdentityResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetEmailIdentityPoliciesRequest
 */
export interface GetEmailIdentityPoliciesRequest {
  /**
   * @schema GetEmailIdentityPoliciesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema GetEmailIdentityPoliciesResponse
 */
export interface GetEmailIdentityPoliciesResponse {
  /**
   * @schema GetEmailIdentityPoliciesResponse#Policies
   */
  readonly policies?: { [key: string]: string };

}

/**
 * @schema GetEmailTemplateRequest
 */
export interface GetEmailTemplateRequest {
  /**
   * @schema GetEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema GetEmailTemplateResponse
 */
export interface GetEmailTemplateResponse {
  /**
   * @schema GetEmailTemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema GetEmailTemplateResponse#TemplateContent
   */
  readonly templateContent: EmailTemplateContent;

}

/**
 * @schema GetImportJobRequest
 */
export interface GetImportJobRequest {
  /**
   * @schema GetImportJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetImportJobResponse
 */
export interface GetImportJobResponse {
  /**
   * @schema GetImportJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema GetImportJobResponse#ImportDestination
   */
  readonly importDestination?: ImportDestination;

  /**
   * @schema GetImportJobResponse#ImportDataSource
   */
  readonly importDataSource?: ImportDataSource;

  /**
   * @schema GetImportJobResponse#FailureInfo
   */
  readonly failureInfo?: FailureInfo;

  /**
   * @schema GetImportJobResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetImportJobResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema GetImportJobResponse#CompletedTimestamp
   */
  readonly completedTimestamp?: string;

  /**
   * @schema GetImportJobResponse#ProcessedRecordsCount
   */
  readonly processedRecordsCount?: number;

  /**
   * @schema GetImportJobResponse#FailedRecordsCount
   */
  readonly failedRecordsCount?: number;

}

/**
 * @schema GetSuppressedDestinationRequest
 */
export interface GetSuppressedDestinationRequest {
  /**
   * @schema GetSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema GetSuppressedDestinationResponse
 */
export interface GetSuppressedDestinationResponse {
  /**
   * @schema GetSuppressedDestinationResponse#SuppressedDestination
   */
  readonly suppressedDestination: SuppressedDestination;

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
 * @schema ListContactListsRequest
 */
export interface ListContactListsRequest {
  /**
   * @schema ListContactListsRequest#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListContactListsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListContactListsResponse
 */
export interface ListContactListsResponse {
  /**
   * @schema ListContactListsResponse#ContactLists
   */
  readonly contactLists?: ContactList[];

  /**
   * @schema ListContactListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListContactsRequest
 */
export interface ListContactsRequest {
  /**
   * @schema ListContactsRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema ListContactsRequest#Filter
   */
  readonly filter?: ListContactsFilter;

  /**
   * @schema ListContactsRequest#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListContactsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListContactsResponse
 */
export interface ListContactsResponse {
  /**
   * @schema ListContactsResponse#Contacts
   */
  readonly contacts?: Contact[];

  /**
   * @schema ListContactsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCustomVerificationEmailTemplatesRequest
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  /**
   * @schema ListCustomVerificationEmailTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCustomVerificationEmailTemplatesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListCustomVerificationEmailTemplatesResponse
 */
export interface ListCustomVerificationEmailTemplatesResponse {
  /**
   * @schema ListCustomVerificationEmailTemplatesResponse#CustomVerificationEmailTemplates
   */
  readonly customVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];

  /**
   * @schema ListCustomVerificationEmailTemplatesResponse#NextToken
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
 * @schema ListEmailTemplatesRequest
 */
export interface ListEmailTemplatesRequest {
  /**
   * @schema ListEmailTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEmailTemplatesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListEmailTemplatesResponse
 */
export interface ListEmailTemplatesResponse {
  /**
   * @schema ListEmailTemplatesResponse#TemplatesMetadata
   */
  readonly templatesMetadata?: EmailTemplateMetadata[];

  /**
   * @schema ListEmailTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImportJobsRequest
 */
export interface ListImportJobsRequest {
  /**
   * @schema ListImportJobsRequest#ImportDestinationType
   */
  readonly importDestinationType?: string;

  /**
   * @schema ListImportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListImportJobsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListImportJobsResponse
 */
export interface ListImportJobsResponse {
  /**
   * @schema ListImportJobsResponse#ImportJobs
   */
  readonly importJobs?: ImportJobSummary[];

  /**
   * @schema ListImportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSuppressedDestinationsRequest
 */
export interface ListSuppressedDestinationsRequest {
  /**
   * @schema ListSuppressedDestinationsRequest#Reasons
   */
  readonly reasons?: string[];

  /**
   * @schema ListSuppressedDestinationsRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema ListSuppressedDestinationsRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema ListSuppressedDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSuppressedDestinationsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListSuppressedDestinationsResponse
 */
export interface ListSuppressedDestinationsResponse {
  /**
   * @schema ListSuppressedDestinationsResponse#SuppressedDestinationSummaries
   */
  readonly suppressedDestinationSummaries?: SuppressedDestinationSummary[];

  /**
   * @schema ListSuppressedDestinationsResponse#NextToken
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
 * @schema PutAccountDetailsRequest
 */
export interface PutAccountDetailsRequest {
  /**
   * @schema PutAccountDetailsRequest#MailType
   */
  readonly mailType: string;

  /**
   * @schema PutAccountDetailsRequest#WebsiteURL
   */
  readonly websiteUrl: string;

  /**
   * @schema PutAccountDetailsRequest#ContactLanguage
   */
  readonly contactLanguage?: string;

  /**
   * @schema PutAccountDetailsRequest#UseCaseDescription
   */
  readonly useCaseDescription: string;

  /**
   * @schema PutAccountDetailsRequest#AdditionalContactEmailAddresses
   */
  readonly additionalContactEmailAddresses?: string[];

  /**
   * @schema PutAccountDetailsRequest#ProductionAccessEnabled
   */
  readonly productionAccessEnabled?: boolean;

}

/**
 * @schema PutAccountDetailsResponse
 */
export interface PutAccountDetailsResponse {
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
 * @schema PutAccountSuppressionAttributesRequest
 */
export interface PutAccountSuppressionAttributesRequest {
  /**
   * @schema PutAccountSuppressionAttributesRequest#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema PutAccountSuppressionAttributesResponse
 */
export interface PutAccountSuppressionAttributesResponse {
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
 * @schema PutConfigurationSetSuppressionOptionsRequest
 */
export interface PutConfigurationSetSuppressionOptionsRequest {
  /**
   * @schema PutConfigurationSetSuppressionOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema PutConfigurationSetSuppressionOptionsRequest#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema PutConfigurationSetSuppressionOptionsResponse
 */
export interface PutConfigurationSetSuppressionOptionsResponse {
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
 * @schema PutEmailIdentityDkimSigningAttributesRequest
 */
export interface PutEmailIdentityDkimSigningAttributesRequest {
  /**
   * @schema PutEmailIdentityDkimSigningAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema PutEmailIdentityDkimSigningAttributesRequest#SigningAttributesOrigin
   */
  readonly signingAttributesOrigin: string;

  /**
   * @schema PutEmailIdentityDkimSigningAttributesRequest#SigningAttributes
   */
  readonly signingAttributes?: DkimSigningAttributes;

}

/**
 * @schema PutEmailIdentityDkimSigningAttributesResponse
 */
export interface PutEmailIdentityDkimSigningAttributesResponse {
  /**
   * @schema PutEmailIdentityDkimSigningAttributesResponse#DkimStatus
   */
  readonly dkimStatus?: string;

  /**
   * @schema PutEmailIdentityDkimSigningAttributesResponse#DkimTokens
   */
  readonly dkimTokens?: string[];

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
 * @schema PutSuppressedDestinationRequest
 */
export interface PutSuppressedDestinationRequest {
  /**
   * @schema PutSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema PutSuppressedDestinationRequest#Reason
   */
  readonly reason: string;

}

/**
 * @schema PutSuppressedDestinationResponse
 */
export interface PutSuppressedDestinationResponse {
}

/**
 * @schema SendBulkEmailRequest
 */
export interface SendBulkEmailRequest {
  /**
   * @schema SendBulkEmailRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema SendBulkEmailRequest#FromEmailAddressIdentityArn
   */
  readonly fromEmailAddressIdentityArn?: string;

  /**
   * @schema SendBulkEmailRequest#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema SendBulkEmailRequest#FeedbackForwardingEmailAddress
   */
  readonly feedbackForwardingEmailAddress?: string;

  /**
   * @schema SendBulkEmailRequest#FeedbackForwardingEmailAddressIdentityArn
   */
  readonly feedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * @schema SendBulkEmailRequest#DefaultEmailTags
   */
  readonly defaultEmailTags?: MessageTag[];

  /**
   * @schema SendBulkEmailRequest#DefaultContent
   */
  readonly defaultContent: BulkEmailContent;

  /**
   * @schema SendBulkEmailRequest#BulkEmailEntries
   */
  readonly bulkEmailEntries: BulkEmailEntry[];

  /**
   * @schema SendBulkEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * @schema SendBulkEmailResponse
 */
export interface SendBulkEmailResponse {
  /**
   * @schema SendBulkEmailResponse#BulkEmailEntryResults
   */
  readonly bulkEmailEntryResults: BulkEmailEntryResult[];

}

/**
 * @schema SendCustomVerificationEmailRequest
 */
export interface SendCustomVerificationEmailRequest {
  /**
   * @schema SendCustomVerificationEmailRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema SendCustomVerificationEmailRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema SendCustomVerificationEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * @schema SendCustomVerificationEmailResponse
 */
export interface SendCustomVerificationEmailResponse {
  /**
   * @schema SendCustomVerificationEmailResponse#MessageId
   */
  readonly messageId?: string;

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
   * @schema SendEmailRequest#FromEmailAddressIdentityArn
   */
  readonly fromEmailAddressIdentityArn?: string;

  /**
   * @schema SendEmailRequest#Destination
   */
  readonly destination?: Destination;

  /**
   * @schema SendEmailRequest#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema SendEmailRequest#FeedbackForwardingEmailAddress
   */
  readonly feedbackForwardingEmailAddress?: string;

  /**
   * @schema SendEmailRequest#FeedbackForwardingEmailAddressIdentityArn
   */
  readonly feedbackForwardingEmailAddressIdentityArn?: string;

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

  /**
   * @schema SendEmailRequest#ListManagementOptions
   */
  readonly listManagementOptions?: ListManagementOptions;

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
 * @schema TestRenderEmailTemplateRequest
 */
export interface TestRenderEmailTemplateRequest {
  /**
   * @schema TestRenderEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema TestRenderEmailTemplateRequest#TemplateData
   */
  readonly templateData: string;

}

/**
 * @schema TestRenderEmailTemplateResponse
 */
export interface TestRenderEmailTemplateResponse {
  /**
   * @schema TestRenderEmailTemplateResponse#RenderedTemplate
   */
  readonly renderedTemplate: string;

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
 * @schema UpdateContactRequest
 */
export interface UpdateContactRequest {
  /**
   * @schema UpdateContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema UpdateContactRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema UpdateContactRequest#TopicPreferences
   */
  readonly topicPreferences?: TopicPreference[];

  /**
   * @schema UpdateContactRequest#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema UpdateContactRequest#AttributesData
   */
  readonly attributesData?: string;

}

/**
 * @schema UpdateContactResponse
 */
export interface UpdateContactResponse {
}

/**
 * @schema UpdateContactListRequest
 */
export interface UpdateContactListRequest {
  /**
   * @schema UpdateContactListRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema UpdateContactListRequest#Topics
   */
  readonly topics?: Topic[];

  /**
   * @schema UpdateContactListRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateContactListResponse
 */
export interface UpdateContactListResponse {
}

/**
 * @schema UpdateCustomVerificationEmailTemplateRequest
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  /**
   * @schema UpdateCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateCustomVerificationEmailTemplateRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema UpdateCustomVerificationEmailTemplateRequest#TemplateSubject
   */
  readonly templateSubject: string;

  /**
   * @schema UpdateCustomVerificationEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: string;

  /**
   * @schema UpdateCustomVerificationEmailTemplateRequest#SuccessRedirectionURL
   */
  readonly successRedirectionUrl: string;

  /**
   * @schema UpdateCustomVerificationEmailTemplateRequest#FailureRedirectionURL
   */
  readonly failureRedirectionUrl: string;

}

/**
 * @schema UpdateCustomVerificationEmailTemplateResponse
 */
export interface UpdateCustomVerificationEmailTemplateResponse {
}

/**
 * @schema UpdateEmailIdentityPolicyRequest
 */
export interface UpdateEmailIdentityPolicyRequest {
  /**
   * @schema UpdateEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema UpdateEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema UpdateEmailIdentityPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema UpdateEmailIdentityPolicyResponse
 */
export interface UpdateEmailIdentityPolicyResponse {
}

/**
 * @schema UpdateEmailTemplateRequest
 */
export interface UpdateEmailTemplateRequest {
  /**
   * @schema UpdateEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: EmailTemplateContent;

}

/**
 * @schema UpdateEmailTemplateResponse
 */
export interface UpdateEmailTemplateResponse {
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
 * @schema SuppressionOptions
 */
export interface SuppressionOptions {
  /**
   * @schema SuppressionOptions#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

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
 * @schema TopicPreference
 */
export interface TopicPreference {
  /**
   * @schema TopicPreference#TopicName
   */
  readonly topicName: string;

  /**
   * @schema TopicPreference#SubscriptionStatus
   */
  readonly subscriptionStatus: string;

}

/**
 * @schema Topic
 */
export interface Topic {
  /**
   * @schema Topic#TopicName
   */
  readonly topicName: string;

  /**
   * @schema Topic#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema Topic#Description
   */
  readonly description?: string;

  /**
   * @schema Topic#DefaultSubscriptionStatus
   */
  readonly defaultSubscriptionStatus: string;

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
 * @schema DkimSigningAttributes
 */
export interface DkimSigningAttributes {
  /**
   * @schema DkimSigningAttributes#DomainSigningSelector
   */
  readonly domainSigningSelector: string;

  /**
   * @schema DkimSigningAttributes#DomainSigningPrivateKey
   */
  readonly domainSigningPrivateKey: string;

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

  /**
   * @schema DkimAttributes#SigningAttributesOrigin
   */
  readonly signingAttributesOrigin?: string;

}

/**
 * @schema EmailTemplateContent
 */
export interface EmailTemplateContent {
  /**
   * @schema EmailTemplateContent#Subject
   */
  readonly subject?: string;

  /**
   * @schema EmailTemplateContent#Text
   */
  readonly text?: string;

  /**
   * @schema EmailTemplateContent#Html
   */
  readonly html?: string;

}

/**
 * @schema ImportDestination
 */
export interface ImportDestination {
  /**
   * @schema ImportDestination#SuppressionListDestination
   */
  readonly suppressionListDestination?: SuppressionListDestination;

  /**
   * @schema ImportDestination#ContactListDestination
   */
  readonly contactListDestination?: ContactListDestination;

}

/**
 * @schema ImportDataSource
 */
export interface ImportDataSource {
  /**
   * @schema ImportDataSource#S3Url
   */
  readonly s3Url: string;

  /**
   * @schema ImportDataSource#DataFormat
   */
  readonly dataFormat: string;

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
 * @schema SuppressionAttributes
 */
export interface SuppressionAttributes {
  /**
   * @schema SuppressionAttributes#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema AccountDetails
 */
export interface AccountDetails {
  /**
   * @schema AccountDetails#MailType
   */
  readonly mailType?: string;

  /**
   * @schema AccountDetails#WebsiteURL
   */
  readonly websiteUrl?: string;

  /**
   * @schema AccountDetails#ContactLanguage
   */
  readonly contactLanguage?: string;

  /**
   * @schema AccountDetails#UseCaseDescription
   */
  readonly useCaseDescription?: string;

  /**
   * @schema AccountDetails#AdditionalContactEmailAddresses
   */
  readonly additionalContactEmailAddresses?: string[];

  /**
   * @schema AccountDetails#ReviewDetails
   */
  readonly reviewDetails?: ReviewDetails;

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
 * @schema FailureInfo
 */
export interface FailureInfo {
  /**
   * @schema FailureInfo#FailedRecordsS3Url
   */
  readonly failedRecordsS3Url?: string;

  /**
   * @schema FailureInfo#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema SuppressedDestination
 */
export interface SuppressedDestination {
  /**
   * @schema SuppressedDestination#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema SuppressedDestination#Reason
   */
  readonly reason: string;

  /**
   * @schema SuppressedDestination#LastUpdateTime
   */
  readonly lastUpdateTime: string;

  /**
   * @schema SuppressedDestination#Attributes
   */
  readonly attributes?: SuppressedDestinationAttributes;

}

/**
 * @schema ContactList
 */
export interface ContactList {
  /**
   * @schema ContactList#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema ContactList#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema ListContactsFilter
 */
export interface ListContactsFilter {
  /**
   * @schema ListContactsFilter#FilteredStatus
   */
  readonly filteredStatus?: string;

  /**
   * @schema ListContactsFilter#TopicFilter
   */
  readonly topicFilter?: TopicFilter;

}

/**
 * @schema Contact
 */
export interface Contact {
  /**
   * @schema Contact#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Contact#TopicPreferences
   */
  readonly topicPreferences?: TopicPreference[];

  /**
   * @schema Contact#TopicDefaultPreferences
   */
  readonly topicDefaultPreferences?: TopicPreference[];

  /**
   * @schema Contact#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema Contact#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema CustomVerificationEmailTemplateMetadata
 */
export interface CustomVerificationEmailTemplateMetadata {
  /**
   * @schema CustomVerificationEmailTemplateMetadata#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema CustomVerificationEmailTemplateMetadata#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema CustomVerificationEmailTemplateMetadata#TemplateSubject
   */
  readonly templateSubject?: string;

  /**
   * @schema CustomVerificationEmailTemplateMetadata#SuccessRedirectionURL
   */
  readonly successRedirectionUrl?: string;

  /**
   * @schema CustomVerificationEmailTemplateMetadata#FailureRedirectionURL
   */
  readonly failureRedirectionUrl?: string;

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
 * @schema EmailTemplateMetadata
 */
export interface EmailTemplateMetadata {
  /**
   * @schema EmailTemplateMetadata#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema EmailTemplateMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema ImportJobSummary
 */
export interface ImportJobSummary {
  /**
   * @schema ImportJobSummary#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ImportJobSummary#ImportDestination
   */
  readonly importDestination?: ImportDestination;

  /**
   * @schema ImportJobSummary#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ImportJobSummary#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema SuppressedDestinationSummary
 */
export interface SuppressedDestinationSummary {
  /**
   * @schema SuppressedDestinationSummary#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema SuppressedDestinationSummary#Reason
   */
  readonly reason: string;

  /**
   * @schema SuppressedDestinationSummary#LastUpdateTime
   */
  readonly lastUpdateTime: string;

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
 * @schema BulkEmailContent
 */
export interface BulkEmailContent {
  /**
   * @schema BulkEmailContent#Template
   */
  readonly template?: Template;

}

/**
 * @schema BulkEmailEntry
 */
export interface BulkEmailEntry {
  /**
   * @schema BulkEmailEntry#Destination
   */
  readonly destination: Destination;

  /**
   * @schema BulkEmailEntry#ReplacementTags
   */
  readonly replacementTags?: MessageTag[];

  /**
   * @schema BulkEmailEntry#ReplacementEmailContent
   */
  readonly replacementEmailContent?: ReplacementEmailContent;

}

/**
 * @schema BulkEmailEntryResult
 */
export interface BulkEmailEntryResult {
  /**
   * @schema BulkEmailEntryResult#Status
   */
  readonly status?: string;

  /**
   * @schema BulkEmailEntryResult#Error
   */
  readonly error?: string;

  /**
   * @schema BulkEmailEntryResult#MessageId
   */
  readonly messageId?: string;

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
 * @schema ListManagementOptions
 */
export interface ListManagementOptions {
  /**
   * @schema ListManagementOptions#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema ListManagementOptions#TopicName
   */
  readonly topicName?: string;

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
   * @schema Template#TemplateName
   */
  readonly templateName?: string;

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
 * @schema SuppressionListDestination
 */
export interface SuppressionListDestination {
  /**
   * @schema SuppressionListDestination#SuppressionListImportAction
   */
  readonly suppressionListImportAction: string;

}

/**
 * @schema ContactListDestination
 */
export interface ContactListDestination {
  /**
   * @schema ContactListDestination#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema ContactListDestination#ContactListImportAction
   */
  readonly contactListImportAction: string;

}

/**
 * @schema ReviewDetails
 */
export interface ReviewDetails {
  /**
   * @schema ReviewDetails#Status
   */
  readonly status?: string;

  /**
   * @schema ReviewDetails#CaseId
   */
  readonly caseId?: string;

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
 * @schema SuppressedDestinationAttributes
 */
export interface SuppressedDestinationAttributes {
  /**
   * @schema SuppressedDestinationAttributes#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SuppressedDestinationAttributes#FeedbackId
   */
  readonly feedbackId?: string;

}

/**
 * @schema TopicFilter
 */
export interface TopicFilter {
  /**
   * @schema TopicFilter#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema TopicFilter#UseDefaultIfPreferenceUnavailable
   */
  readonly useDefaultIfPreferenceUnavailable?: boolean;

}

/**
 * @schema ReplacementEmailContent
 */
export interface ReplacementEmailContent {
  /**
   * @schema ReplacementEmailContent#ReplacementTemplate
   */
  readonly replacementTemplate?: ReplacementTemplate;

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

/**
 * @schema ReplacementTemplate
 */
export interface ReplacementTemplate {
  /**
   * @schema ReplacementTemplate#ReplacementTemplateData
   */
  readonly replacementTemplateData?: string;

}
