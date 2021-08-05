/**
 * @schema Sesv2CreateConfigurationSetRequest
 */
export interface Sesv2CreateConfigurationSetRequest {
  /**
   * @schema Sesv2CreateConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2CreateConfigurationSetRequest#TrackingOptions
   */
  readonly trackingOptions?: Sesv2TrackingOptions;

  /**
   * @schema Sesv2CreateConfigurationSetRequest#DeliveryOptions
   */
  readonly deliveryOptions?: Sesv2DeliveryOptions;

  /**
   * @schema Sesv2CreateConfigurationSetRequest#ReputationOptions
   */
  readonly reputationOptions?: Sesv2ReputationOptions;

  /**
   * @schema Sesv2CreateConfigurationSetRequest#SendingOptions
   */
  readonly sendingOptions?: Sesv2SendingOptions;

  /**
   * @schema Sesv2CreateConfigurationSetRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

  /**
   * @schema Sesv2CreateConfigurationSetRequest#SuppressionOptions
   */
  readonly suppressionOptions?: Sesv2SuppressionOptions;

}

/**
 * @schema Sesv2CreateConfigurationSetResponse
 */
export interface Sesv2CreateConfigurationSetResponse {
}

/**
 * @schema Sesv2CreateConfigurationSetEventDestinationRequest
 */
export interface Sesv2CreateConfigurationSetEventDestinationRequest {
  /**
   * @schema Sesv2CreateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2CreateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

  /**
   * @schema Sesv2CreateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination: Sesv2EventDestinationDefinition;

}

/**
 * @schema Sesv2CreateConfigurationSetEventDestinationResponse
 */
export interface Sesv2CreateConfigurationSetEventDestinationResponse {
}

/**
 * @schema Sesv2CreateContactRequest
 */
export interface Sesv2CreateContactRequest {
  /**
   * @schema Sesv2CreateContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2CreateContactRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema Sesv2CreateContactRequest#TopicPreferences
   */
  readonly topicPreferences?: Sesv2TopicPreference[];

  /**
   * @schema Sesv2CreateContactRequest#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema Sesv2CreateContactRequest#AttributesData
   */
  readonly attributesData?: string;

}

/**
 * @schema Sesv2CreateContactResponse
 */
export interface Sesv2CreateContactResponse {
}

/**
 * @schema Sesv2CreateContactListRequest
 */
export interface Sesv2CreateContactListRequest {
  /**
   * @schema Sesv2CreateContactListRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2CreateContactListRequest#Topics
   */
  readonly topics?: Sesv2Topic[];

  /**
   * @schema Sesv2CreateContactListRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Sesv2CreateContactListRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * @schema Sesv2CreateContactListResponse
 */
export interface Sesv2CreateContactListResponse {
}

/**
 * @schema Sesv2CreateCustomVerificationEmailTemplateRequest
 */
export interface Sesv2CreateCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#TemplateSubject
   */
  readonly templateSubject: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#SuccessRedirectionURL
   */
  readonly successRedirectionUrl: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#FailureRedirectionURL
   */
  readonly failureRedirectionUrl: string;

}

/**
 * @schema Sesv2CreateCustomVerificationEmailTemplateResponse
 */
export interface Sesv2CreateCustomVerificationEmailTemplateResponse {
}

/**
 * @schema Sesv2CreateDedicatedIpPoolRequest
 */
export interface Sesv2CreateDedicatedIpPoolRequest {
  /**
   * @schema Sesv2CreateDedicatedIpPoolRequest#PoolName
   */
  readonly poolName: string;

  /**
   * @schema Sesv2CreateDedicatedIpPoolRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * @schema Sesv2CreateDedicatedIpPoolResponse
 */
export interface Sesv2CreateDedicatedIpPoolResponse {
}

/**
 * @schema Sesv2CreateDeliverabilityTestReportRequest
 */
export interface Sesv2CreateDeliverabilityTestReportRequest {
  /**
   * @schema Sesv2CreateDeliverabilityTestReportRequest#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportRequest#Content
   */
  readonly content: Sesv2EmailContent;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * @schema Sesv2CreateDeliverabilityTestReportResponse
 */
export interface Sesv2CreateDeliverabilityTestReportResponse {
  /**
   * @schema Sesv2CreateDeliverabilityTestReportResponse#ReportId
   */
  readonly reportId: string;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportResponse#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus: string;

}

/**
 * @schema Sesv2CreateEmailIdentityRequest
 */
export interface Sesv2CreateEmailIdentityRequest {
  /**
   * @schema Sesv2CreateEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2CreateEmailIdentityRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

  /**
   * @schema Sesv2CreateEmailIdentityRequest#DkimSigningAttributes
   */
  readonly dkimSigningAttributes?: Sesv2DkimSigningAttributes;

}

/**
 * @schema Sesv2CreateEmailIdentityResponse
 */
export interface Sesv2CreateEmailIdentityResponse {
  /**
   * @schema Sesv2CreateEmailIdentityResponse#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema Sesv2CreateEmailIdentityResponse#VerifiedForSendingStatus
   */
  readonly verifiedForSendingStatus?: boolean;

  /**
   * @schema Sesv2CreateEmailIdentityResponse#DkimAttributes
   */
  readonly dkimAttributes?: Sesv2DkimAttributes;

}

/**
 * @schema Sesv2CreateEmailIdentityPolicyRequest
 */
export interface Sesv2CreateEmailIdentityPolicyRequest {
  /**
   * @schema Sesv2CreateEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2CreateEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema Sesv2CreateEmailIdentityPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema Sesv2CreateEmailIdentityPolicyResponse
 */
export interface Sesv2CreateEmailIdentityPolicyResponse {
}

/**
 * @schema Sesv2CreateEmailTemplateRequest
 */
export interface Sesv2CreateEmailTemplateRequest {
  /**
   * @schema Sesv2CreateEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2CreateEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: Sesv2EmailTemplateContent;

}

/**
 * @schema Sesv2CreateEmailTemplateResponse
 */
export interface Sesv2CreateEmailTemplateResponse {
}

/**
 * @schema Sesv2CreateImportJobRequest
 */
export interface Sesv2CreateImportJobRequest {
  /**
   * @schema Sesv2CreateImportJobRequest#ImportDestination
   */
  readonly importDestination: Sesv2ImportDestination;

  /**
   * @schema Sesv2CreateImportJobRequest#ImportDataSource
   */
  readonly importDataSource: Sesv2ImportDataSource;

}

/**
 * @schema Sesv2CreateImportJobResponse
 */
export interface Sesv2CreateImportJobResponse {
  /**
   * @schema Sesv2CreateImportJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema Sesv2DeleteConfigurationSetRequest
 */
export interface Sesv2DeleteConfigurationSetRequest {
  /**
   * @schema Sesv2DeleteConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema Sesv2DeleteConfigurationSetResponse
 */
export interface Sesv2DeleteConfigurationSetResponse {
}

/**
 * @schema Sesv2DeleteConfigurationSetEventDestinationRequest
 */
export interface Sesv2DeleteConfigurationSetEventDestinationRequest {
  /**
   * @schema Sesv2DeleteConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2DeleteConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

}

/**
 * @schema Sesv2DeleteConfigurationSetEventDestinationResponse
 */
export interface Sesv2DeleteConfigurationSetEventDestinationResponse {
}

/**
 * @schema Sesv2DeleteContactRequest
 */
export interface Sesv2DeleteContactRequest {
  /**
   * @schema Sesv2DeleteContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2DeleteContactRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema Sesv2DeleteContactResponse
 */
export interface Sesv2DeleteContactResponse {
}

/**
 * @schema Sesv2DeleteContactListRequest
 */
export interface Sesv2DeleteContactListRequest {
  /**
   * @schema Sesv2DeleteContactListRequest#ContactListName
   */
  readonly contactListName: string;

}

/**
 * @schema Sesv2DeleteContactListResponse
 */
export interface Sesv2DeleteContactListResponse {
}

/**
 * @schema Sesv2DeleteCustomVerificationEmailTemplateRequest
 */
export interface Sesv2DeleteCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2DeleteCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema Sesv2DeleteCustomVerificationEmailTemplateResponse
 */
export interface Sesv2DeleteCustomVerificationEmailTemplateResponse {
}

/**
 * @schema Sesv2DeleteDedicatedIpPoolRequest
 */
export interface Sesv2DeleteDedicatedIpPoolRequest {
  /**
   * @schema Sesv2DeleteDedicatedIpPoolRequest#PoolName
   */
  readonly poolName: string;

}

/**
 * @schema Sesv2DeleteDedicatedIpPoolResponse
 */
export interface Sesv2DeleteDedicatedIpPoolResponse {
}

/**
 * @schema Sesv2DeleteEmailIdentityRequest
 */
export interface Sesv2DeleteEmailIdentityRequest {
  /**
   * @schema Sesv2DeleteEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema Sesv2DeleteEmailIdentityResponse
 */
export interface Sesv2DeleteEmailIdentityResponse {
}

/**
 * @schema Sesv2DeleteEmailIdentityPolicyRequest
 */
export interface Sesv2DeleteEmailIdentityPolicyRequest {
  /**
   * @schema Sesv2DeleteEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2DeleteEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema Sesv2DeleteEmailIdentityPolicyResponse
 */
export interface Sesv2DeleteEmailIdentityPolicyResponse {
}

/**
 * @schema Sesv2DeleteEmailTemplateRequest
 */
export interface Sesv2DeleteEmailTemplateRequest {
  /**
   * @schema Sesv2DeleteEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema Sesv2DeleteEmailTemplateResponse
 */
export interface Sesv2DeleteEmailTemplateResponse {
}

/**
 * @schema Sesv2DeleteSuppressedDestinationRequest
 */
export interface Sesv2DeleteSuppressedDestinationRequest {
  /**
   * @schema Sesv2DeleteSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema Sesv2DeleteSuppressedDestinationResponse
 */
export interface Sesv2DeleteSuppressedDestinationResponse {
}

/**
 * @schema Sesv2GetAccountRequest
 */
export interface Sesv2GetAccountRequest {
}

/**
 * @schema Sesv2GetAccountResponse
 */
export interface Sesv2GetAccountResponse {
  /**
   * @schema Sesv2GetAccountResponse#DedicatedIpAutoWarmupEnabled
   */
  readonly dedicatedIpAutoWarmupEnabled?: boolean;

  /**
   * @schema Sesv2GetAccountResponse#EnforcementStatus
   */
  readonly enforcementStatus?: string;

  /**
   * @schema Sesv2GetAccountResponse#ProductionAccessEnabled
   */
  readonly productionAccessEnabled?: boolean;

  /**
   * @schema Sesv2GetAccountResponse#SendQuota
   */
  readonly sendQuota?: Sesv2SendQuota;

  /**
   * @schema Sesv2GetAccountResponse#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

  /**
   * @schema Sesv2GetAccountResponse#SuppressionAttributes
   */
  readonly suppressionAttributes?: Sesv2SuppressionAttributes;

  /**
   * @schema Sesv2GetAccountResponse#Details
   */
  readonly details?: Sesv2AccountDetails;

}

/**
 * @schema Sesv2GetBlacklistReportsRequest
 */
export interface Sesv2GetBlacklistReportsRequest {
  /**
   * @schema Sesv2GetBlacklistReportsRequest#BlacklistItemNames
   */
  readonly blacklistItemNames: string[];

}

/**
 * @schema Sesv2GetBlacklistReportsResponse
 */
export interface Sesv2GetBlacklistReportsResponse {
  /**
   * @schema Sesv2GetBlacklistReportsResponse#BlacklistReport
   */
  readonly blacklistReport: { [key: string]: Sesv2BlacklistEntry[] };

}

/**
 * @schema Sesv2GetConfigurationSetRequest
 */
export interface Sesv2GetConfigurationSetRequest {
  /**
   * @schema Sesv2GetConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema Sesv2GetConfigurationSetResponse
 */
export interface Sesv2GetConfigurationSetResponse {
  /**
   * @schema Sesv2GetConfigurationSetResponse#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2GetConfigurationSetResponse#TrackingOptions
   */
  readonly trackingOptions?: Sesv2TrackingOptions;

  /**
   * @schema Sesv2GetConfigurationSetResponse#DeliveryOptions
   */
  readonly deliveryOptions?: Sesv2DeliveryOptions;

  /**
   * @schema Sesv2GetConfigurationSetResponse#ReputationOptions
   */
  readonly reputationOptions?: Sesv2ReputationOptions;

  /**
   * @schema Sesv2GetConfigurationSetResponse#SendingOptions
   */
  readonly sendingOptions?: Sesv2SendingOptions;

  /**
   * @schema Sesv2GetConfigurationSetResponse#Tags
   */
  readonly tags?: Sesv2Tag[];

  /**
   * @schema Sesv2GetConfigurationSetResponse#SuppressionOptions
   */
  readonly suppressionOptions?: Sesv2SuppressionOptions;

}

/**
 * @schema Sesv2GetConfigurationSetEventDestinationsRequest
 */
export interface Sesv2GetConfigurationSetEventDestinationsRequest {
  /**
   * @schema Sesv2GetConfigurationSetEventDestinationsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

}

/**
 * @schema Sesv2GetConfigurationSetEventDestinationsResponse
 */
export interface Sesv2GetConfigurationSetEventDestinationsResponse {
  /**
   * @schema Sesv2GetConfigurationSetEventDestinationsResponse#EventDestinations
   */
  readonly eventDestinations?: Sesv2EventDestination[];

}

/**
 * @schema Sesv2GetContactRequest
 */
export interface Sesv2GetContactRequest {
  /**
   * @schema Sesv2GetContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2GetContactRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema Sesv2GetContactResponse
 */
export interface Sesv2GetContactResponse {
  /**
   * @schema Sesv2GetContactResponse#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2GetContactResponse#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Sesv2GetContactResponse#TopicPreferences
   */
  readonly topicPreferences?: Sesv2TopicPreference[];

  /**
   * @schema Sesv2GetContactResponse#TopicDefaultPreferences
   */
  readonly topicDefaultPreferences?: Sesv2TopicPreference[];

  /**
   * @schema Sesv2GetContactResponse#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema Sesv2GetContactResponse#AttributesData
   */
  readonly attributesData?: string;

  /**
   * @schema Sesv2GetContactResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Sesv2GetContactResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema Sesv2GetContactListRequest
 */
export interface Sesv2GetContactListRequest {
  /**
   * @schema Sesv2GetContactListRequest#ContactListName
   */
  readonly contactListName: string;

}

/**
 * @schema Sesv2GetContactListResponse
 */
export interface Sesv2GetContactListResponse {
  /**
   * @schema Sesv2GetContactListResponse#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2GetContactListResponse#Topics
   */
  readonly topics?: Sesv2Topic[];

  /**
   * @schema Sesv2GetContactListResponse#Description
   */
  readonly description?: string;

  /**
   * @schema Sesv2GetContactListResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Sesv2GetContactListResponse#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema Sesv2GetContactListResponse#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * @schema Sesv2GetCustomVerificationEmailTemplateRequest
 */
export interface Sesv2GetCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema Sesv2GetCustomVerificationEmailTemplateResponse
 */
export interface Sesv2GetCustomVerificationEmailTemplateResponse {
  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateResponse#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateResponse#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateResponse#TemplateSubject
   */
  readonly templateSubject?: string;

  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateResponse#TemplateContent
   */
  readonly templateContent?: string;

  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateResponse#SuccessRedirectionURL
   */
  readonly successRedirectionUrl?: string;

  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateResponse#FailureRedirectionURL
   */
  readonly failureRedirectionUrl?: string;

}

/**
 * @schema Sesv2GetDedicatedIpRequest
 */
export interface Sesv2GetDedicatedIpRequest {
  /**
   * @schema Sesv2GetDedicatedIpRequest#Ip
   */
  readonly ip: string;

}

/**
 * @schema Sesv2GetDedicatedIpResponse
 */
export interface Sesv2GetDedicatedIpResponse {
  /**
   * @schema Sesv2GetDedicatedIpResponse#DedicatedIp
   */
  readonly dedicatedIp?: Sesv2DedicatedIp;

}

/**
 * @schema Sesv2GetDedicatedIpsRequest
 */
export interface Sesv2GetDedicatedIpsRequest {
  /**
   * @schema Sesv2GetDedicatedIpsRequest#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema Sesv2GetDedicatedIpsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2GetDedicatedIpsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2GetDedicatedIpsResponse
 */
export interface Sesv2GetDedicatedIpsResponse {
  /**
   * @schema Sesv2GetDedicatedIpsResponse#DedicatedIps
   */
  readonly dedicatedIps?: Sesv2DedicatedIp[];

  /**
   * @schema Sesv2GetDedicatedIpsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2GetDeliverabilityDashboardOptionsRequest
 */
export interface Sesv2GetDeliverabilityDashboardOptionsRequest {
}

/**
 * @schema Sesv2GetDeliverabilityDashboardOptionsResponse
 */
export interface Sesv2GetDeliverabilityDashboardOptionsResponse {
  /**
   * @schema Sesv2GetDeliverabilityDashboardOptionsResponse#DashboardEnabled
   */
  readonly dashboardEnabled: boolean;

  /**
   * @schema Sesv2GetDeliverabilityDashboardOptionsResponse#SubscriptionExpiryDate
   */
  readonly subscriptionExpiryDate?: string;

  /**
   * @schema Sesv2GetDeliverabilityDashboardOptionsResponse#AccountStatus
   */
  readonly accountStatus?: string;

  /**
   * @schema Sesv2GetDeliverabilityDashboardOptionsResponse#ActiveSubscribedDomains
   */
  readonly activeSubscribedDomains?: Sesv2DomainDeliverabilityTrackingOption[];

  /**
   * @schema Sesv2GetDeliverabilityDashboardOptionsResponse#PendingExpirationSubscribedDomains
   */
  readonly pendingExpirationSubscribedDomains?: Sesv2DomainDeliverabilityTrackingOption[];

}

/**
 * @schema Sesv2GetDeliverabilityTestReportRequest
 */
export interface Sesv2GetDeliverabilityTestReportRequest {
  /**
   * @schema Sesv2GetDeliverabilityTestReportRequest#ReportId
   */
  readonly reportId: string;

}

/**
 * @schema Sesv2GetDeliverabilityTestReportResponse
 */
export interface Sesv2GetDeliverabilityTestReportResponse {
  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#DeliverabilityTestReport
   */
  readonly deliverabilityTestReport: Sesv2DeliverabilityTestReport;

  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#OverallPlacement
   */
  readonly overallPlacement: Sesv2PlacementStatistics;

  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#IspPlacements
   */
  readonly ispPlacements: Sesv2IspPlacement[];

  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#Message
   */
  readonly message?: string;

  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * @schema Sesv2GetDomainDeliverabilityCampaignRequest
 */
export interface Sesv2GetDomainDeliverabilityCampaignRequest {
  /**
   * @schema Sesv2GetDomainDeliverabilityCampaignRequest#CampaignId
   */
  readonly campaignId: string;

}

/**
 * @schema Sesv2GetDomainDeliverabilityCampaignResponse
 */
export interface Sesv2GetDomainDeliverabilityCampaignResponse {
  /**
   * @schema Sesv2GetDomainDeliverabilityCampaignResponse#DomainDeliverabilityCampaign
   */
  readonly domainDeliverabilityCampaign: Sesv2DomainDeliverabilityCampaign;

}

/**
 * @schema Sesv2GetDomainStatisticsReportRequest
 */
export interface Sesv2GetDomainStatisticsReportRequest {
  /**
   * @schema Sesv2GetDomainStatisticsReportRequest#Domain
   */
  readonly domain: string;

  /**
   * @schema Sesv2GetDomainStatisticsReportRequest#StartDate
   */
  readonly startDate: string;

  /**
   * @schema Sesv2GetDomainStatisticsReportRequest#EndDate
   */
  readonly endDate: string;

}

/**
 * @schema Sesv2GetDomainStatisticsReportResponse
 */
export interface Sesv2GetDomainStatisticsReportResponse {
  /**
   * @schema Sesv2GetDomainStatisticsReportResponse#OverallVolume
   */
  readonly overallVolume: Sesv2OverallVolume;

  /**
   * @schema Sesv2GetDomainStatisticsReportResponse#DailyVolumes
   */
  readonly dailyVolumes: Sesv2DailyVolume[];

}

/**
 * @schema Sesv2GetEmailIdentityRequest
 */
export interface Sesv2GetEmailIdentityRequest {
  /**
   * @schema Sesv2GetEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema Sesv2GetEmailIdentityResponse
 */
export interface Sesv2GetEmailIdentityResponse {
  /**
   * @schema Sesv2GetEmailIdentityResponse#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema Sesv2GetEmailIdentityResponse#FeedbackForwardingStatus
   */
  readonly feedbackForwardingStatus?: boolean;

  /**
   * @schema Sesv2GetEmailIdentityResponse#VerifiedForSendingStatus
   */
  readonly verifiedForSendingStatus?: boolean;

  /**
   * @schema Sesv2GetEmailIdentityResponse#DkimAttributes
   */
  readonly dkimAttributes?: Sesv2DkimAttributes;

  /**
   * @schema Sesv2GetEmailIdentityResponse#MailFromAttributes
   */
  readonly mailFromAttributes?: Sesv2MailFromAttributes;

  /**
   * @schema Sesv2GetEmailIdentityResponse#Policies
   */
  readonly policies?: { [key: string]: string };

  /**
   * @schema Sesv2GetEmailIdentityResponse#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * @schema Sesv2GetEmailIdentityPoliciesRequest
 */
export interface Sesv2GetEmailIdentityPoliciesRequest {
  /**
   * @schema Sesv2GetEmailIdentityPoliciesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

}

/**
 * @schema Sesv2GetEmailIdentityPoliciesResponse
 */
export interface Sesv2GetEmailIdentityPoliciesResponse {
  /**
   * @schema Sesv2GetEmailIdentityPoliciesResponse#Policies
   */
  readonly policies?: { [key: string]: string };

}

/**
 * @schema Sesv2GetEmailTemplateRequest
 */
export interface Sesv2GetEmailTemplateRequest {
  /**
   * @schema Sesv2GetEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema Sesv2GetEmailTemplateResponse
 */
export interface Sesv2GetEmailTemplateResponse {
  /**
   * @schema Sesv2GetEmailTemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2GetEmailTemplateResponse#TemplateContent
   */
  readonly templateContent: Sesv2EmailTemplateContent;

}

/**
 * @schema Sesv2GetImportJobRequest
 */
export interface Sesv2GetImportJobRequest {
  /**
   * @schema Sesv2GetImportJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema Sesv2GetImportJobResponse
 */
export interface Sesv2GetImportJobResponse {
  /**
   * @schema Sesv2GetImportJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema Sesv2GetImportJobResponse#ImportDestination
   */
  readonly importDestination?: Sesv2ImportDestination;

  /**
   * @schema Sesv2GetImportJobResponse#ImportDataSource
   */
  readonly importDataSource?: Sesv2ImportDataSource;

  /**
   * @schema Sesv2GetImportJobResponse#FailureInfo
   */
  readonly failureInfo?: Sesv2FailureInfo;

  /**
   * @schema Sesv2GetImportJobResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema Sesv2GetImportJobResponse#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema Sesv2GetImportJobResponse#CompletedTimestamp
   */
  readonly completedTimestamp?: string;

  /**
   * @schema Sesv2GetImportJobResponse#ProcessedRecordsCount
   */
  readonly processedRecordsCount?: number;

  /**
   * @schema Sesv2GetImportJobResponse#FailedRecordsCount
   */
  readonly failedRecordsCount?: number;

}

/**
 * @schema Sesv2GetSuppressedDestinationRequest
 */
export interface Sesv2GetSuppressedDestinationRequest {
  /**
   * @schema Sesv2GetSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress: string;

}

/**
 * @schema Sesv2GetSuppressedDestinationResponse
 */
export interface Sesv2GetSuppressedDestinationResponse {
  /**
   * @schema Sesv2GetSuppressedDestinationResponse#SuppressedDestination
   */
  readonly suppressedDestination: Sesv2SuppressedDestination;

}

/**
 * @schema Sesv2ListConfigurationSetsRequest
 */
export interface Sesv2ListConfigurationSetsRequest {
  /**
   * @schema Sesv2ListConfigurationSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListConfigurationSetsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListConfigurationSetsResponse
 */
export interface Sesv2ListConfigurationSetsResponse {
  /**
   * @schema Sesv2ListConfigurationSetsResponse#ConfigurationSets
   */
  readonly configurationSets?: string[];

  /**
   * @schema Sesv2ListConfigurationSetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListContactListsRequest
 */
export interface Sesv2ListContactListsRequest {
  /**
   * @schema Sesv2ListContactListsRequest#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema Sesv2ListContactListsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListContactListsResponse
 */
export interface Sesv2ListContactListsResponse {
  /**
   * @schema Sesv2ListContactListsResponse#ContactLists
   */
  readonly contactLists?: Sesv2ContactList[];

  /**
   * @schema Sesv2ListContactListsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListContactsRequest
 */
export interface Sesv2ListContactsRequest {
  /**
   * @schema Sesv2ListContactsRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2ListContactsRequest#Filter
   */
  readonly filter?: Sesv2ListContactsFilter;

  /**
   * @schema Sesv2ListContactsRequest#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema Sesv2ListContactsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListContactsResponse
 */
export interface Sesv2ListContactsResponse {
  /**
   * @schema Sesv2ListContactsResponse#Contacts
   */
  readonly contacts?: Sesv2Contact[];

  /**
   * @schema Sesv2ListContactsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListCustomVerificationEmailTemplatesRequest
 */
export interface Sesv2ListCustomVerificationEmailTemplatesRequest {
  /**
   * @schema Sesv2ListCustomVerificationEmailTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListCustomVerificationEmailTemplatesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListCustomVerificationEmailTemplatesResponse
 */
export interface Sesv2ListCustomVerificationEmailTemplatesResponse {
  /**
   * @schema Sesv2ListCustomVerificationEmailTemplatesResponse#CustomVerificationEmailTemplates
   */
  readonly customVerificationEmailTemplates?: Sesv2CustomVerificationEmailTemplateMetadata[];

  /**
   * @schema Sesv2ListCustomVerificationEmailTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListDedicatedIpPoolsRequest
 */
export interface Sesv2ListDedicatedIpPoolsRequest {
  /**
   * @schema Sesv2ListDedicatedIpPoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListDedicatedIpPoolsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListDedicatedIpPoolsResponse
 */
export interface Sesv2ListDedicatedIpPoolsResponse {
  /**
   * @schema Sesv2ListDedicatedIpPoolsResponse#DedicatedIpPools
   */
  readonly dedicatedIpPools?: string[];

  /**
   * @schema Sesv2ListDedicatedIpPoolsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListDeliverabilityTestReportsRequest
 */
export interface Sesv2ListDeliverabilityTestReportsRequest {
  /**
   * @schema Sesv2ListDeliverabilityTestReportsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListDeliverabilityTestReportsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListDeliverabilityTestReportsResponse
 */
export interface Sesv2ListDeliverabilityTestReportsResponse {
  /**
   * @schema Sesv2ListDeliverabilityTestReportsResponse#DeliverabilityTestReports
   */
  readonly deliverabilityTestReports: Sesv2DeliverabilityTestReport[];

  /**
   * @schema Sesv2ListDeliverabilityTestReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListDomainDeliverabilityCampaignsRequest
 */
export interface Sesv2ListDomainDeliverabilityCampaignsRequest {
  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#StartDate
   */
  readonly startDate: string;

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#EndDate
   */
  readonly endDate: string;

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#SubscribedDomain
   */
  readonly subscribedDomain: string;

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListDomainDeliverabilityCampaignsResponse
 */
export interface Sesv2ListDomainDeliverabilityCampaignsResponse {
  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsResponse#DomainDeliverabilityCampaigns
   */
  readonly domainDeliverabilityCampaigns: Sesv2DomainDeliverabilityCampaign[];

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListEmailIdentitiesRequest
 */
export interface Sesv2ListEmailIdentitiesRequest {
  /**
   * @schema Sesv2ListEmailIdentitiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListEmailIdentitiesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListEmailIdentitiesResponse
 */
export interface Sesv2ListEmailIdentitiesResponse {
  /**
   * @schema Sesv2ListEmailIdentitiesResponse#EmailIdentities
   */
  readonly emailIdentities?: Sesv2IdentityInfo[];

  /**
   * @schema Sesv2ListEmailIdentitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListEmailTemplatesRequest
 */
export interface Sesv2ListEmailTemplatesRequest {
  /**
   * @schema Sesv2ListEmailTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListEmailTemplatesRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListEmailTemplatesResponse
 */
export interface Sesv2ListEmailTemplatesResponse {
  /**
   * @schema Sesv2ListEmailTemplatesResponse#TemplatesMetadata
   */
  readonly templatesMetadata?: Sesv2EmailTemplateMetadata[];

  /**
   * @schema Sesv2ListEmailTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListImportJobsRequest
 */
export interface Sesv2ListImportJobsRequest {
  /**
   * @schema Sesv2ListImportJobsRequest#ImportDestinationType
   */
  readonly importDestinationType?: string;

  /**
   * @schema Sesv2ListImportJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListImportJobsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListImportJobsResponse
 */
export interface Sesv2ListImportJobsResponse {
  /**
   * @schema Sesv2ListImportJobsResponse#ImportJobs
   */
  readonly importJobs?: Sesv2ImportJobSummary[];

  /**
   * @schema Sesv2ListImportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListSuppressedDestinationsRequest
 */
export interface Sesv2ListSuppressedDestinationsRequest {
  /**
   * @schema Sesv2ListSuppressedDestinationsRequest#Reasons
   */
  readonly reasons?: string[];

  /**
   * @schema Sesv2ListSuppressedDestinationsRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema Sesv2ListSuppressedDestinationsRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema Sesv2ListSuppressedDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Sesv2ListSuppressedDestinationsRequest#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema Sesv2ListSuppressedDestinationsResponse
 */
export interface Sesv2ListSuppressedDestinationsResponse {
  /**
   * @schema Sesv2ListSuppressedDestinationsResponse#SuppressedDestinationSummaries
   */
  readonly suppressedDestinationSummaries?: Sesv2SuppressedDestinationSummary[];

  /**
   * @schema Sesv2ListSuppressedDestinationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Sesv2ListTagsForResourceRequest
 */
export interface Sesv2ListTagsForResourceRequest {
  /**
   * @schema Sesv2ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema Sesv2ListTagsForResourceResponse
 */
export interface Sesv2ListTagsForResourceResponse {
  /**
   * @schema Sesv2ListTagsForResourceResponse#Tags
   */
  readonly tags: Sesv2Tag[];

}

/**
 * @schema Sesv2PutAccountDedicatedIpWarmupAttributesRequest
 */
export interface Sesv2PutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * @schema Sesv2PutAccountDedicatedIpWarmupAttributesRequest#AutoWarmupEnabled
   */
  readonly autoWarmupEnabled?: boolean;

}

/**
 * @schema Sesv2PutAccountDedicatedIpWarmupAttributesResponse
 */
export interface Sesv2PutAccountDedicatedIpWarmupAttributesResponse {
}

/**
 * @schema Sesv2PutAccountDetailsRequest
 */
export interface Sesv2PutAccountDetailsRequest {
  /**
   * @schema Sesv2PutAccountDetailsRequest#MailType
   */
  readonly mailType: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#WebsiteURL
   */
  readonly websiteUrl: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#ContactLanguage
   */
  readonly contactLanguage?: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#UseCaseDescription
   */
  readonly useCaseDescription: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#AdditionalContactEmailAddresses
   */
  readonly additionalContactEmailAddresses?: string[];

  /**
   * @schema Sesv2PutAccountDetailsRequest#ProductionAccessEnabled
   */
  readonly productionAccessEnabled?: boolean;

}

/**
 * @schema Sesv2PutAccountDetailsResponse
 */
export interface Sesv2PutAccountDetailsResponse {
}

/**
 * @schema Sesv2PutAccountSendingAttributesRequest
 */
export interface Sesv2PutAccountSendingAttributesRequest {
  /**
   * @schema Sesv2PutAccountSendingAttributesRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema Sesv2PutAccountSendingAttributesResponse
 */
export interface Sesv2PutAccountSendingAttributesResponse {
}

/**
 * @schema Sesv2PutAccountSuppressionAttributesRequest
 */
export interface Sesv2PutAccountSuppressionAttributesRequest {
  /**
   * @schema Sesv2PutAccountSuppressionAttributesRequest#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema Sesv2PutAccountSuppressionAttributesResponse
 */
export interface Sesv2PutAccountSuppressionAttributesResponse {
}

/**
 * @schema Sesv2PutConfigurationSetDeliveryOptionsRequest
 */
export interface Sesv2PutConfigurationSetDeliveryOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetDeliveryOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2PutConfigurationSetDeliveryOptionsRequest#TlsPolicy
   */
  readonly tlsPolicy?: string;

  /**
   * @schema Sesv2PutConfigurationSetDeliveryOptionsRequest#SendingPoolName
   */
  readonly sendingPoolName?: string;

}

/**
 * @schema Sesv2PutConfigurationSetDeliveryOptionsResponse
 */
export interface Sesv2PutConfigurationSetDeliveryOptionsResponse {
}

/**
 * @schema Sesv2PutConfigurationSetReputationOptionsRequest
 */
export interface Sesv2PutConfigurationSetReputationOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetReputationOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2PutConfigurationSetReputationOptionsRequest#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

}

/**
 * @schema Sesv2PutConfigurationSetReputationOptionsResponse
 */
export interface Sesv2PutConfigurationSetReputationOptionsResponse {
}

/**
 * @schema Sesv2PutConfigurationSetSendingOptionsRequest
 */
export interface Sesv2PutConfigurationSetSendingOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetSendingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2PutConfigurationSetSendingOptionsRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema Sesv2PutConfigurationSetSendingOptionsResponse
 */
export interface Sesv2PutConfigurationSetSendingOptionsResponse {
}

/**
 * @schema Sesv2PutConfigurationSetSuppressionOptionsRequest
 */
export interface Sesv2PutConfigurationSetSuppressionOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetSuppressionOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2PutConfigurationSetSuppressionOptionsRequest#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema Sesv2PutConfigurationSetSuppressionOptionsResponse
 */
export interface Sesv2PutConfigurationSetSuppressionOptionsResponse {
}

/**
 * @schema Sesv2PutConfigurationSetTrackingOptionsRequest
 */
export interface Sesv2PutConfigurationSetTrackingOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetTrackingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2PutConfigurationSetTrackingOptionsRequest#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * @schema Sesv2PutConfigurationSetTrackingOptionsResponse
 */
export interface Sesv2PutConfigurationSetTrackingOptionsResponse {
}

/**
 * @schema Sesv2PutDedicatedIpInPoolRequest
 */
export interface Sesv2PutDedicatedIpInPoolRequest {
  /**
   * @schema Sesv2PutDedicatedIpInPoolRequest#Ip
   */
  readonly ip: string;

  /**
   * @schema Sesv2PutDedicatedIpInPoolRequest#DestinationPoolName
   */
  readonly destinationPoolName: string;

}

/**
 * @schema Sesv2PutDedicatedIpInPoolResponse
 */
export interface Sesv2PutDedicatedIpInPoolResponse {
}

/**
 * @schema Sesv2PutDedicatedIpWarmupAttributesRequest
 */
export interface Sesv2PutDedicatedIpWarmupAttributesRequest {
  /**
   * @schema Sesv2PutDedicatedIpWarmupAttributesRequest#Ip
   */
  readonly ip: string;

  /**
   * @schema Sesv2PutDedicatedIpWarmupAttributesRequest#WarmupPercentage
   */
  readonly warmupPercentage: number;

}

/**
 * @schema Sesv2PutDedicatedIpWarmupAttributesResponse
 */
export interface Sesv2PutDedicatedIpWarmupAttributesResponse {
}

/**
 * @schema Sesv2PutDeliverabilityDashboardOptionRequest
 */
export interface Sesv2PutDeliverabilityDashboardOptionRequest {
  /**
   * @schema Sesv2PutDeliverabilityDashboardOptionRequest#DashboardEnabled
   */
  readonly dashboardEnabled: boolean;

  /**
   * @schema Sesv2PutDeliverabilityDashboardOptionRequest#SubscribedDomains
   */
  readonly subscribedDomains?: Sesv2DomainDeliverabilityTrackingOption[];

}

/**
 * @schema Sesv2PutDeliverabilityDashboardOptionResponse
 */
export interface Sesv2PutDeliverabilityDashboardOptionResponse {
}

/**
 * @schema Sesv2PutEmailIdentityDkimAttributesRequest
 */
export interface Sesv2PutEmailIdentityDkimAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityDkimAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimAttributesRequest#SigningEnabled
   */
  readonly signingEnabled?: boolean;

}

/**
 * @schema Sesv2PutEmailIdentityDkimAttributesResponse
 */
export interface Sesv2PutEmailIdentityDkimAttributesResponse {
}

/**
 * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest
 */
export interface Sesv2PutEmailIdentityDkimSigningAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest#SigningAttributesOrigin
   */
  readonly signingAttributesOrigin: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest#SigningAttributes
   */
  readonly signingAttributes?: Sesv2DkimSigningAttributes;

}

/**
 * @schema Sesv2PutEmailIdentityDkimSigningAttributesResponse
 */
export interface Sesv2PutEmailIdentityDkimSigningAttributesResponse {
  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesResponse#DkimStatus
   */
  readonly dkimStatus?: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesResponse#DkimTokens
   */
  readonly dkimTokens?: string[];

}

/**
 * @schema Sesv2PutEmailIdentityFeedbackAttributesRequest
 */
export interface Sesv2PutEmailIdentityFeedbackAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityFeedbackAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2PutEmailIdentityFeedbackAttributesRequest#EmailForwardingEnabled
   */
  readonly emailForwardingEnabled?: boolean;

}

/**
 * @schema Sesv2PutEmailIdentityFeedbackAttributesResponse
 */
export interface Sesv2PutEmailIdentityFeedbackAttributesResponse {
}

/**
 * @schema Sesv2PutEmailIdentityMailFromAttributesRequest
 */
export interface Sesv2PutEmailIdentityMailFromAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityMailFromAttributesRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2PutEmailIdentityMailFromAttributesRequest#MailFromDomain
   */
  readonly mailFromDomain?: string;

  /**
   * @schema Sesv2PutEmailIdentityMailFromAttributesRequest#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure?: string;

}

/**
 * @schema Sesv2PutEmailIdentityMailFromAttributesResponse
 */
export interface Sesv2PutEmailIdentityMailFromAttributesResponse {
}

/**
 * @schema Sesv2PutSuppressedDestinationRequest
 */
export interface Sesv2PutSuppressedDestinationRequest {
  /**
   * @schema Sesv2PutSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema Sesv2PutSuppressedDestinationRequest#Reason
   */
  readonly reason: string;

}

/**
 * @schema Sesv2PutSuppressedDestinationResponse
 */
export interface Sesv2PutSuppressedDestinationResponse {
}

/**
 * @schema Sesv2SendBulkEmailRequest
 */
export interface Sesv2SendBulkEmailRequest {
  /**
   * @schema Sesv2SendBulkEmailRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2SendBulkEmailRequest#FromEmailAddressIdentityArn
   */
  readonly fromEmailAddressIdentityArn?: string;

  /**
   * @schema Sesv2SendBulkEmailRequest#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema Sesv2SendBulkEmailRequest#FeedbackForwardingEmailAddress
   */
  readonly feedbackForwardingEmailAddress?: string;

  /**
   * @schema Sesv2SendBulkEmailRequest#FeedbackForwardingEmailAddressIdentityArn
   */
  readonly feedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * @schema Sesv2SendBulkEmailRequest#DefaultEmailTags
   */
  readonly defaultEmailTags?: Sesv2MessageTag[];

  /**
   * @schema Sesv2SendBulkEmailRequest#DefaultContent
   */
  readonly defaultContent: Sesv2BulkEmailContent;

  /**
   * @schema Sesv2SendBulkEmailRequest#BulkEmailEntries
   */
  readonly bulkEmailEntries: Sesv2BulkEmailEntry[];

  /**
   * @schema Sesv2SendBulkEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * @schema Sesv2SendBulkEmailResponse
 */
export interface Sesv2SendBulkEmailResponse {
  /**
   * @schema Sesv2SendBulkEmailResponse#BulkEmailEntryResults
   */
  readonly bulkEmailEntryResults: Sesv2BulkEmailEntryResult[];

}

/**
 * @schema Sesv2SendCustomVerificationEmailRequest
 */
export interface Sesv2SendCustomVerificationEmailRequest {
  /**
   * @schema Sesv2SendCustomVerificationEmailRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema Sesv2SendCustomVerificationEmailRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2SendCustomVerificationEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * @schema Sesv2SendCustomVerificationEmailResponse
 */
export interface Sesv2SendCustomVerificationEmailResponse {
  /**
   * @schema Sesv2SendCustomVerificationEmailResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema Sesv2SendEmailRequest
 */
export interface Sesv2SendEmailRequest {
  /**
   * @schema Sesv2SendEmailRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2SendEmailRequest#FromEmailAddressIdentityArn
   */
  readonly fromEmailAddressIdentityArn?: string;

  /**
   * @schema Sesv2SendEmailRequest#Destination
   */
  readonly destination?: Sesv2Destination;

  /**
   * @schema Sesv2SendEmailRequest#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema Sesv2SendEmailRequest#FeedbackForwardingEmailAddress
   */
  readonly feedbackForwardingEmailAddress?: string;

  /**
   * @schema Sesv2SendEmailRequest#FeedbackForwardingEmailAddressIdentityArn
   */
  readonly feedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * @schema Sesv2SendEmailRequest#Content
   */
  readonly content: Sesv2EmailContent;

  /**
   * @schema Sesv2SendEmailRequest#EmailTags
   */
  readonly emailTags?: Sesv2MessageTag[];

  /**
   * @schema Sesv2SendEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2SendEmailRequest#ListManagementOptions
   */
  readonly listManagementOptions?: Sesv2ListManagementOptions;

}

/**
 * @schema Sesv2SendEmailResponse
 */
export interface Sesv2SendEmailResponse {
  /**
   * @schema Sesv2SendEmailResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema Sesv2TagResourceRequest
 */
export interface Sesv2TagResourceRequest {
  /**
   * @schema Sesv2TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Sesv2TagResourceRequest#Tags
   */
  readonly tags: Sesv2Tag[];

}

/**
 * @schema Sesv2TagResourceResponse
 */
export interface Sesv2TagResourceResponse {
}

/**
 * @schema Sesv2TestRenderEmailTemplateRequest
 */
export interface Sesv2TestRenderEmailTemplateRequest {
  /**
   * @schema Sesv2TestRenderEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2TestRenderEmailTemplateRequest#TemplateData
   */
  readonly templateData: string;

}

/**
 * @schema Sesv2TestRenderEmailTemplateResponse
 */
export interface Sesv2TestRenderEmailTemplateResponse {
  /**
   * @schema Sesv2TestRenderEmailTemplateResponse#RenderedTemplate
   */
  readonly renderedTemplate: string;

}

/**
 * @schema Sesv2UntagResourceRequest
 */
export interface Sesv2UntagResourceRequest {
  /**
   * @schema Sesv2UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema Sesv2UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema Sesv2UntagResourceResponse
 */
export interface Sesv2UntagResourceResponse {
}

/**
 * @schema Sesv2UpdateConfigurationSetEventDestinationRequest
 */
export interface Sesv2UpdateConfigurationSetEventDestinationRequest {
  /**
   * @schema Sesv2UpdateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName: string;

  /**
   * @schema Sesv2UpdateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName: string;

  /**
   * @schema Sesv2UpdateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination: Sesv2EventDestinationDefinition;

}

/**
 * @schema Sesv2UpdateConfigurationSetEventDestinationResponse
 */
export interface Sesv2UpdateConfigurationSetEventDestinationResponse {
}

/**
 * @schema Sesv2UpdateContactRequest
 */
export interface Sesv2UpdateContactRequest {
  /**
   * @schema Sesv2UpdateContactRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2UpdateContactRequest#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema Sesv2UpdateContactRequest#TopicPreferences
   */
  readonly topicPreferences?: Sesv2TopicPreference[];

  /**
   * @schema Sesv2UpdateContactRequest#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema Sesv2UpdateContactRequest#AttributesData
   */
  readonly attributesData?: string;

}

/**
 * @schema Sesv2UpdateContactResponse
 */
export interface Sesv2UpdateContactResponse {
}

/**
 * @schema Sesv2UpdateContactListRequest
 */
export interface Sesv2UpdateContactListRequest {
  /**
   * @schema Sesv2UpdateContactListRequest#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2UpdateContactListRequest#Topics
   */
  readonly topics?: Sesv2Topic[];

  /**
   * @schema Sesv2UpdateContactListRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema Sesv2UpdateContactListResponse
 */
export interface Sesv2UpdateContactListResponse {
}

/**
 * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest
 */
export interface Sesv2UpdateCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#FromEmailAddress
   */
  readonly fromEmailAddress: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#TemplateSubject
   */
  readonly templateSubject: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#SuccessRedirectionURL
   */
  readonly successRedirectionUrl: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#FailureRedirectionURL
   */
  readonly failureRedirectionUrl: string;

}

/**
 * @schema Sesv2UpdateCustomVerificationEmailTemplateResponse
 */
export interface Sesv2UpdateCustomVerificationEmailTemplateResponse {
}

/**
 * @schema Sesv2UpdateEmailIdentityPolicyRequest
 */
export interface Sesv2UpdateEmailIdentityPolicyRequest {
  /**
   * @schema Sesv2UpdateEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity: string;

  /**
   * @schema Sesv2UpdateEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema Sesv2UpdateEmailIdentityPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema Sesv2UpdateEmailIdentityPolicyResponse
 */
export interface Sesv2UpdateEmailIdentityPolicyResponse {
}

/**
 * @schema Sesv2UpdateEmailTemplateRequest
 */
export interface Sesv2UpdateEmailTemplateRequest {
  /**
   * @schema Sesv2UpdateEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema Sesv2UpdateEmailTemplateRequest#TemplateContent
   */
  readonly templateContent: Sesv2EmailTemplateContent;

}

/**
 * @schema Sesv2UpdateEmailTemplateResponse
 */
export interface Sesv2UpdateEmailTemplateResponse {
}

/**
 * @schema Sesv2TrackingOptions
 */
export interface Sesv2TrackingOptions {
  /**
   * @schema Sesv2TrackingOptions#CustomRedirectDomain
   */
  readonly customRedirectDomain: string;

}

/**
 * @schema Sesv2DeliveryOptions
 */
export interface Sesv2DeliveryOptions {
  /**
   * @schema Sesv2DeliveryOptions#TlsPolicy
   */
  readonly tlsPolicy?: string;

  /**
   * @schema Sesv2DeliveryOptions#SendingPoolName
   */
  readonly sendingPoolName?: string;

}

/**
 * @schema Sesv2ReputationOptions
 */
export interface Sesv2ReputationOptions {
  /**
   * @schema Sesv2ReputationOptions#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

  /**
   * @schema Sesv2ReputationOptions#LastFreshStart
   */
  readonly lastFreshStart?: string;

}

/**
 * @schema Sesv2SendingOptions
 */
export interface Sesv2SendingOptions {
  /**
   * @schema Sesv2SendingOptions#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema Sesv2Tag
 */
export interface Sesv2Tag {
  /**
   * @schema Sesv2Tag#Key
   */
  readonly key: string;

  /**
   * @schema Sesv2Tag#Value
   */
  readonly value: string;

}

/**
 * @schema Sesv2SuppressionOptions
 */
export interface Sesv2SuppressionOptions {
  /**
   * @schema Sesv2SuppressionOptions#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema Sesv2EventDestinationDefinition
 */
export interface Sesv2EventDestinationDefinition {
  /**
   * @schema Sesv2EventDestinationDefinition#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Sesv2EventDestinationDefinition#MatchingEventTypes
   */
  readonly matchingEventTypes?: string[];

  /**
   * @schema Sesv2EventDestinationDefinition#KinesisFirehoseDestination
   */
  readonly kinesisFirehoseDestination?: Sesv2KinesisFirehoseDestination;

  /**
   * @schema Sesv2EventDestinationDefinition#CloudWatchDestination
   */
  readonly cloudWatchDestination?: Sesv2CloudWatchDestination;

  /**
   * @schema Sesv2EventDestinationDefinition#SnsDestination
   */
  readonly snsDestination?: Sesv2SnsDestination;

  /**
   * @schema Sesv2EventDestinationDefinition#PinpointDestination
   */
  readonly pinpointDestination?: Sesv2PinpointDestination;

}

/**
 * @schema Sesv2TopicPreference
 */
export interface Sesv2TopicPreference {
  /**
   * @schema Sesv2TopicPreference#TopicName
   */
  readonly topicName: string;

  /**
   * @schema Sesv2TopicPreference#SubscriptionStatus
   */
  readonly subscriptionStatus: string;

}

/**
 * @schema Sesv2Topic
 */
export interface Sesv2Topic {
  /**
   * @schema Sesv2Topic#TopicName
   */
  readonly topicName: string;

  /**
   * @schema Sesv2Topic#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema Sesv2Topic#Description
   */
  readonly description?: string;

  /**
   * @schema Sesv2Topic#DefaultSubscriptionStatus
   */
  readonly defaultSubscriptionStatus: string;

}

/**
 * @schema Sesv2EmailContent
 */
export interface Sesv2EmailContent {
  /**
   * @schema Sesv2EmailContent#Simple
   */
  readonly simple?: Sesv2Message;

  /**
   * @schema Sesv2EmailContent#Raw
   */
  readonly raw?: Sesv2RawMessage;

  /**
   * @schema Sesv2EmailContent#Template
   */
  readonly template?: Sesv2Template;

}

/**
 * @schema Sesv2DkimSigningAttributes
 */
export interface Sesv2DkimSigningAttributes {
  /**
   * @schema Sesv2DkimSigningAttributes#DomainSigningSelector
   */
  readonly domainSigningSelector: string;

  /**
   * @schema Sesv2DkimSigningAttributes#DomainSigningPrivateKey
   */
  readonly domainSigningPrivateKey: string;

}

/**
 * @schema Sesv2DkimAttributes
 */
export interface Sesv2DkimAttributes {
  /**
   * @schema Sesv2DkimAttributes#SigningEnabled
   */
  readonly signingEnabled?: boolean;

  /**
   * @schema Sesv2DkimAttributes#Status
   */
  readonly status?: string;

  /**
   * @schema Sesv2DkimAttributes#Tokens
   */
  readonly tokens?: string[];

  /**
   * @schema Sesv2DkimAttributes#SigningAttributesOrigin
   */
  readonly signingAttributesOrigin?: string;

}

/**
 * @schema Sesv2EmailTemplateContent
 */
export interface Sesv2EmailTemplateContent {
  /**
   * @schema Sesv2EmailTemplateContent#Subject
   */
  readonly subject?: string;

  /**
   * @schema Sesv2EmailTemplateContent#Text
   */
  readonly text?: string;

  /**
   * @schema Sesv2EmailTemplateContent#Html
   */
  readonly html?: string;

}

/**
 * @schema Sesv2ImportDestination
 */
export interface Sesv2ImportDestination {
  /**
   * @schema Sesv2ImportDestination#SuppressionListDestination
   */
  readonly suppressionListDestination?: Sesv2SuppressionListDestination;

  /**
   * @schema Sesv2ImportDestination#ContactListDestination
   */
  readonly contactListDestination?: Sesv2ContactListDestination;

}

/**
 * @schema Sesv2ImportDataSource
 */
export interface Sesv2ImportDataSource {
  /**
   * @schema Sesv2ImportDataSource#S3Url
   */
  readonly s3Url: string;

  /**
   * @schema Sesv2ImportDataSource#DataFormat
   */
  readonly dataFormat: string;

}

/**
 * @schema Sesv2SendQuota
 */
export interface Sesv2SendQuota {
  /**
   * @schema Sesv2SendQuota#Max24HourSend
   */
  readonly max24HourSend?: number;

  /**
   * @schema Sesv2SendQuota#MaxSendRate
   */
  readonly maxSendRate?: number;

  /**
   * @schema Sesv2SendQuota#SentLast24Hours
   */
  readonly sentLast24Hours?: number;

}

/**
 * @schema Sesv2SuppressionAttributes
 */
export interface Sesv2SuppressionAttributes {
  /**
   * @schema Sesv2SuppressionAttributes#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * @schema Sesv2AccountDetails
 */
export interface Sesv2AccountDetails {
  /**
   * @schema Sesv2AccountDetails#MailType
   */
  readonly mailType?: string;

  /**
   * @schema Sesv2AccountDetails#WebsiteURL
   */
  readonly websiteUrl?: string;

  /**
   * @schema Sesv2AccountDetails#ContactLanguage
   */
  readonly contactLanguage?: string;

  /**
   * @schema Sesv2AccountDetails#UseCaseDescription
   */
  readonly useCaseDescription?: string;

  /**
   * @schema Sesv2AccountDetails#AdditionalContactEmailAddresses
   */
  readonly additionalContactEmailAddresses?: string[];

  /**
   * @schema Sesv2AccountDetails#ReviewDetails
   */
  readonly reviewDetails?: Sesv2ReviewDetails;

}

/**
 * @schema Sesv2BlacklistEntry
 */
export interface Sesv2BlacklistEntry {
  /**
   * @schema Sesv2BlacklistEntry#RblName
   */
  readonly rblName?: string;

  /**
   * @schema Sesv2BlacklistEntry#ListingTime
   */
  readonly listingTime?: string;

  /**
   * @schema Sesv2BlacklistEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema Sesv2EventDestination
 */
export interface Sesv2EventDestination {
  /**
   * @schema Sesv2EventDestination#Name
   */
  readonly name: string;

  /**
   * @schema Sesv2EventDestination#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Sesv2EventDestination#MatchingEventTypes
   */
  readonly matchingEventTypes: string[];

  /**
   * @schema Sesv2EventDestination#KinesisFirehoseDestination
   */
  readonly kinesisFirehoseDestination?: Sesv2KinesisFirehoseDestination;

  /**
   * @schema Sesv2EventDestination#CloudWatchDestination
   */
  readonly cloudWatchDestination?: Sesv2CloudWatchDestination;

  /**
   * @schema Sesv2EventDestination#SnsDestination
   */
  readonly snsDestination?: Sesv2SnsDestination;

  /**
   * @schema Sesv2EventDestination#PinpointDestination
   */
  readonly pinpointDestination?: Sesv2PinpointDestination;

}

/**
 * @schema Sesv2DedicatedIp
 */
export interface Sesv2DedicatedIp {
  /**
   * @schema Sesv2DedicatedIp#Ip
   */
  readonly ip: string;

  /**
   * @schema Sesv2DedicatedIp#WarmupStatus
   */
  readonly warmupStatus: string;

  /**
   * @schema Sesv2DedicatedIp#WarmupPercentage
   */
  readonly warmupPercentage: number;

  /**
   * @schema Sesv2DedicatedIp#PoolName
   */
  readonly poolName?: string;

}

/**
 * @schema Sesv2DomainDeliverabilityTrackingOption
 */
export interface Sesv2DomainDeliverabilityTrackingOption {
  /**
   * @schema Sesv2DomainDeliverabilityTrackingOption#Domain
   */
  readonly domain?: string;

  /**
   * @schema Sesv2DomainDeliverabilityTrackingOption#SubscriptionStartDate
   */
  readonly subscriptionStartDate?: string;

  /**
   * @schema Sesv2DomainDeliverabilityTrackingOption#InboxPlacementTrackingOption
   */
  readonly inboxPlacementTrackingOption?: Sesv2InboxPlacementTrackingOption;

}

/**
 * @schema Sesv2DeliverabilityTestReport
 */
export interface Sesv2DeliverabilityTestReport {
  /**
   * @schema Sesv2DeliverabilityTestReport#ReportId
   */
  readonly reportId?: string;

  /**
   * @schema Sesv2DeliverabilityTestReport#ReportName
   */
  readonly reportName?: string;

  /**
   * @schema Sesv2DeliverabilityTestReport#Subject
   */
  readonly subject?: string;

  /**
   * @schema Sesv2DeliverabilityTestReport#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2DeliverabilityTestReport#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Sesv2DeliverabilityTestReport#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus?: string;

}

/**
 * @schema Sesv2PlacementStatistics
 */
export interface Sesv2PlacementStatistics {
  /**
   * @schema Sesv2PlacementStatistics#InboxPercentage
   */
  readonly inboxPercentage?: number;

  /**
   * @schema Sesv2PlacementStatistics#SpamPercentage
   */
  readonly spamPercentage?: number;

  /**
   * @schema Sesv2PlacementStatistics#MissingPercentage
   */
  readonly missingPercentage?: number;

  /**
   * @schema Sesv2PlacementStatistics#SpfPercentage
   */
  readonly spfPercentage?: number;

  /**
   * @schema Sesv2PlacementStatistics#DkimPercentage
   */
  readonly dkimPercentage?: number;

}

/**
 * @schema Sesv2IspPlacement
 */
export interface Sesv2IspPlacement {
  /**
   * @schema Sesv2IspPlacement#IspName
   */
  readonly ispName?: string;

  /**
   * @schema Sesv2IspPlacement#PlacementStatistics
   */
  readonly placementStatistics?: Sesv2PlacementStatistics;

}

/**
 * @schema Sesv2DomainDeliverabilityCampaign
 */
export interface Sesv2DomainDeliverabilityCampaign {
  /**
   * @schema Sesv2DomainDeliverabilityCampaign#CampaignId
   */
  readonly campaignId?: string;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#Subject
   */
  readonly subject?: string;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#FromAddress
   */
  readonly fromAddress?: string;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#SendingIps
   */
  readonly sendingIps?: string[];

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#FirstSeenDateTime
   */
  readonly firstSeenDateTime?: string;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#LastSeenDateTime
   */
  readonly lastSeenDateTime?: string;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#InboxCount
   */
  readonly inboxCount?: number;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#SpamCount
   */
  readonly spamCount?: number;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#ReadRate
   */
  readonly readRate?: number;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#DeleteRate
   */
  readonly deleteRate?: number;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#ReadDeleteRate
   */
  readonly readDeleteRate?: number;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#ProjectedVolume
   */
  readonly projectedVolume?: number;

  /**
   * @schema Sesv2DomainDeliverabilityCampaign#Esps
   */
  readonly esps?: string[];

}

/**
 * @schema Sesv2OverallVolume
 */
export interface Sesv2OverallVolume {
  /**
   * @schema Sesv2OverallVolume#VolumeStatistics
   */
  readonly volumeStatistics?: Sesv2VolumeStatistics;

  /**
   * @schema Sesv2OverallVolume#ReadRatePercent
   */
  readonly readRatePercent?: number;

  /**
   * @schema Sesv2OverallVolume#DomainIspPlacements
   */
  readonly domainIspPlacements?: Sesv2DomainIspPlacement[];

}

/**
 * @schema Sesv2DailyVolume
 */
export interface Sesv2DailyVolume {
  /**
   * @schema Sesv2DailyVolume#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema Sesv2DailyVolume#VolumeStatistics
   */
  readonly volumeStatistics?: Sesv2VolumeStatistics;

  /**
   * @schema Sesv2DailyVolume#DomainIspPlacements
   */
  readonly domainIspPlacements?: Sesv2DomainIspPlacement[];

}

/**
 * @schema Sesv2MailFromAttributes
 */
export interface Sesv2MailFromAttributes {
  /**
   * @schema Sesv2MailFromAttributes#MailFromDomain
   */
  readonly mailFromDomain: string;

  /**
   * @schema Sesv2MailFromAttributes#MailFromDomainStatus
   */
  readonly mailFromDomainStatus: string;

  /**
   * @schema Sesv2MailFromAttributes#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure: string;

}

/**
 * @schema Sesv2FailureInfo
 */
export interface Sesv2FailureInfo {
  /**
   * @schema Sesv2FailureInfo#FailedRecordsS3Url
   */
  readonly failedRecordsS3Url?: string;

  /**
   * @schema Sesv2FailureInfo#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Sesv2SuppressedDestination
 */
export interface Sesv2SuppressedDestination {
  /**
   * @schema Sesv2SuppressedDestination#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema Sesv2SuppressedDestination#Reason
   */
  readonly reason: string;

  /**
   * @schema Sesv2SuppressedDestination#LastUpdateTime
   */
  readonly lastUpdateTime: string;

  /**
   * @schema Sesv2SuppressedDestination#Attributes
   */
  readonly attributes?: Sesv2SuppressedDestinationAttributes;

}

/**
 * @schema Sesv2ContactList
 */
export interface Sesv2ContactList {
  /**
   * @schema Sesv2ContactList#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2ContactList#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema Sesv2ListContactsFilter
 */
export interface Sesv2ListContactsFilter {
  /**
   * @schema Sesv2ListContactsFilter#FilteredStatus
   */
  readonly filteredStatus?: string;

  /**
   * @schema Sesv2ListContactsFilter#TopicFilter
   */
  readonly topicFilter?: Sesv2TopicFilter;

}

/**
 * @schema Sesv2Contact
 */
export interface Sesv2Contact {
  /**
   * @schema Sesv2Contact#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Sesv2Contact#TopicPreferences
   */
  readonly topicPreferences?: Sesv2TopicPreference[];

  /**
   * @schema Sesv2Contact#TopicDefaultPreferences
   */
  readonly topicDefaultPreferences?: Sesv2TopicPreference[];

  /**
   * @schema Sesv2Contact#UnsubscribeAll
   */
  readonly unsubscribeAll?: boolean;

  /**
   * @schema Sesv2Contact#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * @schema Sesv2CustomVerificationEmailTemplateMetadata
 */
export interface Sesv2CustomVerificationEmailTemplateMetadata {
  /**
   * @schema Sesv2CustomVerificationEmailTemplateMetadata#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2CustomVerificationEmailTemplateMetadata#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2CustomVerificationEmailTemplateMetadata#TemplateSubject
   */
  readonly templateSubject?: string;

  /**
   * @schema Sesv2CustomVerificationEmailTemplateMetadata#SuccessRedirectionURL
   */
  readonly successRedirectionUrl?: string;

  /**
   * @schema Sesv2CustomVerificationEmailTemplateMetadata#FailureRedirectionURL
   */
  readonly failureRedirectionUrl?: string;

}

/**
 * @schema Sesv2IdentityInfo
 */
export interface Sesv2IdentityInfo {
  /**
   * @schema Sesv2IdentityInfo#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema Sesv2IdentityInfo#IdentityName
   */
  readonly identityName?: string;

  /**
   * @schema Sesv2IdentityInfo#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * @schema Sesv2EmailTemplateMetadata
 */
export interface Sesv2EmailTemplateMetadata {
  /**
   * @schema Sesv2EmailTemplateMetadata#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2EmailTemplateMetadata#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema Sesv2ImportJobSummary
 */
export interface Sesv2ImportJobSummary {
  /**
   * @schema Sesv2ImportJobSummary#JobId
   */
  readonly jobId?: string;

  /**
   * @schema Sesv2ImportJobSummary#ImportDestination
   */
  readonly importDestination?: Sesv2ImportDestination;

  /**
   * @schema Sesv2ImportJobSummary#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema Sesv2ImportJobSummary#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * @schema Sesv2SuppressedDestinationSummary
 */
export interface Sesv2SuppressedDestinationSummary {
  /**
   * @schema Sesv2SuppressedDestinationSummary#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema Sesv2SuppressedDestinationSummary#Reason
   */
  readonly reason: string;

  /**
   * @schema Sesv2SuppressedDestinationSummary#LastUpdateTime
   */
  readonly lastUpdateTime: string;

}

/**
 * @schema Sesv2MessageTag
 */
export interface Sesv2MessageTag {
  /**
   * @schema Sesv2MessageTag#Name
   */
  readonly name: string;

  /**
   * @schema Sesv2MessageTag#Value
   */
  readonly value: string;

}

/**
 * @schema Sesv2BulkEmailContent
 */
export interface Sesv2BulkEmailContent {
  /**
   * @schema Sesv2BulkEmailContent#Template
   */
  readonly template?: Sesv2Template;

}

/**
 * @schema Sesv2BulkEmailEntry
 */
export interface Sesv2BulkEmailEntry {
  /**
   * @schema Sesv2BulkEmailEntry#Destination
   */
  readonly destination: Sesv2Destination;

  /**
   * @schema Sesv2BulkEmailEntry#ReplacementTags
   */
  readonly replacementTags?: Sesv2MessageTag[];

  /**
   * @schema Sesv2BulkEmailEntry#ReplacementEmailContent
   */
  readonly replacementEmailContent?: Sesv2ReplacementEmailContent;

}

/**
 * @schema Sesv2BulkEmailEntryResult
 */
export interface Sesv2BulkEmailEntryResult {
  /**
   * @schema Sesv2BulkEmailEntryResult#Status
   */
  readonly status?: string;

  /**
   * @schema Sesv2BulkEmailEntryResult#Error
   */
  readonly error?: string;

  /**
   * @schema Sesv2BulkEmailEntryResult#MessageId
   */
  readonly messageId?: string;

}

/**
 * @schema Sesv2Destination
 */
export interface Sesv2Destination {
  /**
   * @schema Sesv2Destination#ToAddresses
   */
  readonly toAddresses?: string[];

  /**
   * @schema Sesv2Destination#CcAddresses
   */
  readonly ccAddresses?: string[];

  /**
   * @schema Sesv2Destination#BccAddresses
   */
  readonly bccAddresses?: string[];

}

/**
 * @schema Sesv2ListManagementOptions
 */
export interface Sesv2ListManagementOptions {
  /**
   * @schema Sesv2ListManagementOptions#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2ListManagementOptions#TopicName
   */
  readonly topicName?: string;

}

/**
 * @schema Sesv2KinesisFirehoseDestination
 */
export interface Sesv2KinesisFirehoseDestination {
  /**
   * @schema Sesv2KinesisFirehoseDestination#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema Sesv2KinesisFirehoseDestination#DeliveryStreamArn
   */
  readonly deliveryStreamArn: string;

}

/**
 * @schema Sesv2CloudWatchDestination
 */
export interface Sesv2CloudWatchDestination {
  /**
   * @schema Sesv2CloudWatchDestination#DimensionConfigurations
   */
  readonly dimensionConfigurations: Sesv2CloudWatchDimensionConfiguration[];

}

/**
 * @schema Sesv2SnsDestination
 */
export interface Sesv2SnsDestination {
  /**
   * @schema Sesv2SnsDestination#TopicArn
   */
  readonly topicArn: string;

}

/**
 * @schema Sesv2PinpointDestination
 */
export interface Sesv2PinpointDestination {
  /**
   * @schema Sesv2PinpointDestination#ApplicationArn
   */
  readonly applicationArn?: string;

}

/**
 * @schema Sesv2Message
 */
export interface Sesv2Message {
  /**
   * @schema Sesv2Message#Subject
   */
  readonly subject: Sesv2Content;

  /**
   * @schema Sesv2Message#Body
   */
  readonly body: Sesv2Body;

}

/**
 * @schema Sesv2RawMessage
 */
export interface Sesv2RawMessage {
  /**
   * @schema Sesv2RawMessage#Data
   */
  readonly data: any;

}

/**
 * @schema Sesv2Template
 */
export interface Sesv2Template {
  /**
   * @schema Sesv2Template#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2Template#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema Sesv2Template#TemplateData
   */
  readonly templateData?: string;

}

/**
 * @schema Sesv2SuppressionListDestination
 */
export interface Sesv2SuppressionListDestination {
  /**
   * @schema Sesv2SuppressionListDestination#SuppressionListImportAction
   */
  readonly suppressionListImportAction: string;

}

/**
 * @schema Sesv2ContactListDestination
 */
export interface Sesv2ContactListDestination {
  /**
   * @schema Sesv2ContactListDestination#ContactListName
   */
  readonly contactListName: string;

  /**
   * @schema Sesv2ContactListDestination#ContactListImportAction
   */
  readonly contactListImportAction: string;

}

/**
 * @schema Sesv2ReviewDetails
 */
export interface Sesv2ReviewDetails {
  /**
   * @schema Sesv2ReviewDetails#Status
   */
  readonly status?: string;

  /**
   * @schema Sesv2ReviewDetails#CaseId
   */
  readonly caseId?: string;

}

/**
 * @schema Sesv2InboxPlacementTrackingOption
 */
export interface Sesv2InboxPlacementTrackingOption {
  /**
   * @schema Sesv2InboxPlacementTrackingOption#Global
   */
  readonly global?: boolean;

  /**
   * @schema Sesv2InboxPlacementTrackingOption#TrackedIsps
   */
  readonly trackedIsps?: string[];

}

/**
 * @schema Sesv2VolumeStatistics
 */
export interface Sesv2VolumeStatistics {
  /**
   * @schema Sesv2VolumeStatistics#InboxRawCount
   */
  readonly inboxRawCount?: number;

  /**
   * @schema Sesv2VolumeStatistics#SpamRawCount
   */
  readonly spamRawCount?: number;

  /**
   * @schema Sesv2VolumeStatistics#ProjectedInbox
   */
  readonly projectedInbox?: number;

  /**
   * @schema Sesv2VolumeStatistics#ProjectedSpam
   */
  readonly projectedSpam?: number;

}

/**
 * @schema Sesv2DomainIspPlacement
 */
export interface Sesv2DomainIspPlacement {
  /**
   * @schema Sesv2DomainIspPlacement#IspName
   */
  readonly ispName?: string;

  /**
   * @schema Sesv2DomainIspPlacement#InboxRawCount
   */
  readonly inboxRawCount?: number;

  /**
   * @schema Sesv2DomainIspPlacement#SpamRawCount
   */
  readonly spamRawCount?: number;

  /**
   * @schema Sesv2DomainIspPlacement#InboxPercentage
   */
  readonly inboxPercentage?: number;

  /**
   * @schema Sesv2DomainIspPlacement#SpamPercentage
   */
  readonly spamPercentage?: number;

}

/**
 * @schema Sesv2SuppressedDestinationAttributes
 */
export interface Sesv2SuppressedDestinationAttributes {
  /**
   * @schema Sesv2SuppressedDestinationAttributes#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema Sesv2SuppressedDestinationAttributes#FeedbackId
   */
  readonly feedbackId?: string;

}

/**
 * @schema Sesv2TopicFilter
 */
export interface Sesv2TopicFilter {
  /**
   * @schema Sesv2TopicFilter#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema Sesv2TopicFilter#UseDefaultIfPreferenceUnavailable
   */
  readonly useDefaultIfPreferenceUnavailable?: boolean;

}

/**
 * @schema Sesv2ReplacementEmailContent
 */
export interface Sesv2ReplacementEmailContent {
  /**
   * @schema Sesv2ReplacementEmailContent#ReplacementTemplate
   */
  readonly replacementTemplate?: Sesv2ReplacementTemplate;

}

/**
 * @schema Sesv2CloudWatchDimensionConfiguration
 */
export interface Sesv2CloudWatchDimensionConfiguration {
  /**
   * @schema Sesv2CloudWatchDimensionConfiguration#DimensionName
   */
  readonly dimensionName: string;

  /**
   * @schema Sesv2CloudWatchDimensionConfiguration#DimensionValueSource
   */
  readonly dimensionValueSource: string;

  /**
   * @schema Sesv2CloudWatchDimensionConfiguration#DefaultDimensionValue
   */
  readonly defaultDimensionValue: string;

}

/**
 * @schema Sesv2Content
 */
export interface Sesv2Content {
  /**
   * @schema Sesv2Content#Data
   */
  readonly data: string;

  /**
   * @schema Sesv2Content#Charset
   */
  readonly charset?: string;

}

/**
 * @schema Sesv2Body
 */
export interface Sesv2Body {
  /**
   * @schema Sesv2Body#Text
   */
  readonly text?: Sesv2Content;

  /**
   * @schema Sesv2Body#Html
   */
  readonly html?: Sesv2Content;

}

/**
 * @schema Sesv2ReplacementTemplate
 */
export interface Sesv2ReplacementTemplate {
  /**
   * @schema Sesv2ReplacementTemplate#ReplacementTemplateData
   */
  readonly replacementTemplateData?: string;

}
