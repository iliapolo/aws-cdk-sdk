/**
 * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest
 */
export interface Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest#Password
   */
  readonly password: string;

}

/**
 * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse
 */
export interface Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest
 */
export interface Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse
 */
export interface Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema Route53DomainsCheckDomainAvailabilityRequest
 */
export interface Route53DomainsCheckDomainAvailabilityRequest {
  /**
   * @schema Route53DomainsCheckDomainAvailabilityRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsCheckDomainAvailabilityRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

}

/**
 * @schema Route53DomainsCheckDomainAvailabilityResponse
 */
export interface Route53DomainsCheckDomainAvailabilityResponse {
  /**
   * @schema Route53DomainsCheckDomainAvailabilityResponse#Availability
   */
  readonly availability: string;

}

/**
 * @schema Route53DomainsCheckDomainTransferabilityRequest
 */
export interface Route53DomainsCheckDomainTransferabilityRequest {
  /**
   * @schema Route53DomainsCheckDomainTransferabilityRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsCheckDomainTransferabilityRequest#AuthCode
   */
  readonly authCode?: string;

}

/**
 * @schema Route53DomainsCheckDomainTransferabilityResponse
 */
export interface Route53DomainsCheckDomainTransferabilityResponse {
  /**
   * @schema Route53DomainsCheckDomainTransferabilityResponse#Transferability
   */
  readonly transferability: Route53DomainsDomainTransferability;

}

/**
 * @schema Route53DomainsDeleteTagsForDomainRequest
 */
export interface Route53DomainsDeleteTagsForDomainRequest {
  /**
   * @schema Route53DomainsDeleteTagsForDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsDeleteTagsForDomainRequest#TagsToDelete
   */
  readonly tagsToDelete: string[];

}

/**
 * @schema Route53DomainsDeleteTagsForDomainResponse
 */
export interface Route53DomainsDeleteTagsForDomainResponse {
}

/**
 * @schema Route53DomainsDisableDomainAutoRenewRequest
 */
export interface Route53DomainsDisableDomainAutoRenewRequest {
  /**
   * @schema Route53DomainsDisableDomainAutoRenewRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsDisableDomainAutoRenewResponse
 */
export interface Route53DomainsDisableDomainAutoRenewResponse {
}

/**
 * @schema Route53DomainsDisableDomainTransferLockRequest
 */
export interface Route53DomainsDisableDomainTransferLockRequest {
  /**
   * @schema Route53DomainsDisableDomainTransferLockRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsDisableDomainTransferLockResponse
 */
export interface Route53DomainsDisableDomainTransferLockResponse {
  /**
   * @schema Route53DomainsDisableDomainTransferLockResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsEnableDomainAutoRenewRequest
 */
export interface Route53DomainsEnableDomainAutoRenewRequest {
  /**
   * @schema Route53DomainsEnableDomainAutoRenewRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsEnableDomainAutoRenewResponse
 */
export interface Route53DomainsEnableDomainAutoRenewResponse {
}

/**
 * @schema Route53DomainsEnableDomainTransferLockRequest
 */
export interface Route53DomainsEnableDomainTransferLockRequest {
  /**
   * @schema Route53DomainsEnableDomainTransferLockRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsEnableDomainTransferLockResponse
 */
export interface Route53DomainsEnableDomainTransferLockResponse {
  /**
   * @schema Route53DomainsEnableDomainTransferLockResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsGetContactReachabilityStatusRequest
 */
export interface Route53DomainsGetContactReachabilityStatusRequest {
  /**
   * @schema Route53DomainsGetContactReachabilityStatusRequest#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema Route53DomainsGetContactReachabilityStatusResponse
 */
export interface Route53DomainsGetContactReachabilityStatusResponse {
  /**
   * @schema Route53DomainsGetContactReachabilityStatusResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsGetContactReachabilityStatusResponse#status
   */
  readonly status?: string;

}

/**
 * @schema Route53DomainsGetDomainDetailRequest
 */
export interface Route53DomainsGetDomainDetailRequest {
  /**
   * @schema Route53DomainsGetDomainDetailRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsGetDomainDetailResponse
 */
export interface Route53DomainsGetDomainDetailResponse {
  /**
   * @schema Route53DomainsGetDomainDetailResponse#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#Nameservers
   */
  readonly nameservers: Route53DomainsNameserver[];

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AdminContact
   */
  readonly adminContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrantContact
   */
  readonly registrantContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#TechContact
   */
  readonly techContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AdminPrivacy
   */
  readonly adminPrivacy?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrantPrivacy
   */
  readonly registrantPrivacy?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#TechPrivacy
   */
  readonly techPrivacy?: boolean;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrarName
   */
  readonly registrarName?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#WhoIsServer
   */
  readonly whoIsServer?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistrarUrl
   */
  readonly registrarUrl?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AbuseContactEmail
   */
  readonly abuseContactEmail?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#AbuseContactPhone
   */
  readonly abuseContactPhone?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#RegistryDomainId
   */
  readonly registryDomainId?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#UpdatedDate
   */
  readonly updatedDate?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#Reseller
   */
  readonly reseller?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#DnsSec
   */
  readonly dnsSec?: string;

  /**
   * @schema Route53DomainsGetDomainDetailResponse#StatusList
   */
  readonly statusList?: string[];

}

/**
 * @schema Route53DomainsGetDomainSuggestionsRequest
 */
export interface Route53DomainsGetDomainSuggestionsRequest {
  /**
   * @schema Route53DomainsGetDomainSuggestionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsGetDomainSuggestionsRequest#SuggestionCount
   */
  readonly suggestionCount: number;

  /**
   * @schema Route53DomainsGetDomainSuggestionsRequest#OnlyAvailable
   */
  readonly onlyAvailable: boolean;

}

/**
 * @schema Route53DomainsGetDomainSuggestionsResponse
 */
export interface Route53DomainsGetDomainSuggestionsResponse {
  /**
   * @schema Route53DomainsGetDomainSuggestionsResponse#SuggestionsList
   */
  readonly suggestionsList?: Route53DomainsDomainSuggestion[];

}

/**
 * @schema Route53DomainsGetOperationDetailRequest
 */
export interface Route53DomainsGetOperationDetailRequest {
  /**
   * @schema Route53DomainsGetOperationDetailRequest#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsGetOperationDetailResponse
 */
export interface Route53DomainsGetOperationDetailResponse {
  /**
   * @schema Route53DomainsGetOperationDetailResponse#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#Status
   */
  readonly status?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#Message
   */
  readonly message?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#Type
   */
  readonly type?: string;

  /**
   * @schema Route53DomainsGetOperationDetailResponse#SubmittedDate
   */
  readonly submittedDate?: string;

}

/**
 * @schema Route53DomainsListDomainsRequest
 */
export interface Route53DomainsListDomainsRequest {
  /**
   * @schema Route53DomainsListDomainsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53DomainsListDomainsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema Route53DomainsListDomainsResponse
 */
export interface Route53DomainsListDomainsResponse {
  /**
   * @schema Route53DomainsListDomainsResponse#Domains
   */
  readonly domains: Route53DomainsDomainSummary[];

  /**
   * @schema Route53DomainsListDomainsResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

}

/**
 * @schema Route53DomainsListOperationsRequest
 */
export interface Route53DomainsListOperationsRequest {
  /**
   * @schema Route53DomainsListOperationsRequest#SubmittedSince
   */
  readonly submittedSince?: string;

  /**
   * @schema Route53DomainsListOperationsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53DomainsListOperationsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema Route53DomainsListOperationsResponse
 */
export interface Route53DomainsListOperationsResponse {
  /**
   * @schema Route53DomainsListOperationsResponse#Operations
   */
  readonly operations: Route53DomainsOperationSummary[];

  /**
   * @schema Route53DomainsListOperationsResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

}

/**
 * @schema Route53DomainsListTagsForDomainRequest
 */
export interface Route53DomainsListTagsForDomainRequest {
  /**
   * @schema Route53DomainsListTagsForDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsListTagsForDomainResponse
 */
export interface Route53DomainsListTagsForDomainResponse {
  /**
   * @schema Route53DomainsListTagsForDomainResponse#TagList
   */
  readonly tagList: Route53DomainsTag[];

}

/**
 * @schema Route53DomainsRegisterDomainRequest
 */
export interface Route53DomainsRegisterDomainRequest {
  /**
   * @schema Route53DomainsRegisterDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsRegisterDomainRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

  /**
   * @schema Route53DomainsRegisterDomainRequest#DurationInYears
   */
  readonly durationInYears: number;

  /**
   * @schema Route53DomainsRegisterDomainRequest#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsRegisterDomainRequest#AdminContact
   */
  readonly adminContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsRegisterDomainRequest#RegistrantContact
   */
  readonly registrantContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsRegisterDomainRequest#TechContact
   */
  readonly techContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsRegisterDomainRequest#PrivacyProtectAdminContact
   */
  readonly privacyProtectAdminContact?: boolean;

  /**
   * @schema Route53DomainsRegisterDomainRequest#PrivacyProtectRegistrantContact
   */
  readonly privacyProtectRegistrantContact?: boolean;

  /**
   * @schema Route53DomainsRegisterDomainRequest#PrivacyProtectTechContact
   */
  readonly privacyProtectTechContact?: boolean;

}

/**
 * @schema Route53DomainsRegisterDomainResponse
 */
export interface Route53DomainsRegisterDomainResponse {
  /**
   * @schema Route53DomainsRegisterDomainResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest
 */
export interface Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse
 */
export interface Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema Route53DomainsRenewDomainRequest
 */
export interface Route53DomainsRenewDomainRequest {
  /**
   * @schema Route53DomainsRenewDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsRenewDomainRequest#DurationInYears
   */
  readonly durationInYears?: number;

  /**
   * @schema Route53DomainsRenewDomainRequest#CurrentExpiryYear
   */
  readonly currentExpiryYear: number;

}

/**
 * @schema Route53DomainsRenewDomainResponse
 */
export interface Route53DomainsRenewDomainResponse {
  /**
   * @schema Route53DomainsRenewDomainResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsResendContactReachabilityEmailRequest
 */
export interface Route53DomainsResendContactReachabilityEmailRequest {
  /**
   * @schema Route53DomainsResendContactReachabilityEmailRequest#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema Route53DomainsResendContactReachabilityEmailResponse
 */
export interface Route53DomainsResendContactReachabilityEmailResponse {
  /**
   * @schema Route53DomainsResendContactReachabilityEmailResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsResendContactReachabilityEmailResponse#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Route53DomainsResendContactReachabilityEmailResponse#isAlreadyVerified
   */
  readonly isAlreadyVerified?: boolean;

}

/**
 * @schema Route53DomainsRetrieveDomainAuthCodeRequest
 */
export interface Route53DomainsRetrieveDomainAuthCodeRequest {
  /**
   * @schema Route53DomainsRetrieveDomainAuthCodeRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema Route53DomainsRetrieveDomainAuthCodeResponse
 */
export interface Route53DomainsRetrieveDomainAuthCodeResponse {
  /**
   * @schema Route53DomainsRetrieveDomainAuthCodeResponse#AuthCode
   */
  readonly authCode: string;

}

/**
 * @schema Route53DomainsTransferDomainRequest
 */
export interface Route53DomainsTransferDomainRequest {
  /**
   * @schema Route53DomainsTransferDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsTransferDomainRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

  /**
   * @schema Route53DomainsTransferDomainRequest#DurationInYears
   */
  readonly durationInYears: number;

  /**
   * @schema Route53DomainsTransferDomainRequest#Nameservers
   */
  readonly nameservers?: Route53DomainsNameserver[];

  /**
   * @schema Route53DomainsTransferDomainRequest#AuthCode
   */
  readonly authCode?: string;

  /**
   * @schema Route53DomainsTransferDomainRequest#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsTransferDomainRequest#AdminContact
   */
  readonly adminContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsTransferDomainRequest#RegistrantContact
   */
  readonly registrantContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsTransferDomainRequest#TechContact
   */
  readonly techContact: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsTransferDomainRequest#PrivacyProtectAdminContact
   */
  readonly privacyProtectAdminContact?: boolean;

  /**
   * @schema Route53DomainsTransferDomainRequest#PrivacyProtectRegistrantContact
   */
  readonly privacyProtectRegistrantContact?: boolean;

  /**
   * @schema Route53DomainsTransferDomainRequest#PrivacyProtectTechContact
   */
  readonly privacyProtectTechContact?: boolean;

}

/**
 * @schema Route53DomainsTransferDomainResponse
 */
export interface Route53DomainsTransferDomainResponse {
  /**
   * @schema Route53DomainsTransferDomainResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsTransferDomainToAnotherAwsAccountRequest
 */
export interface Route53DomainsTransferDomainToAnotherAwsAccountRequest {
  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema Route53DomainsTransferDomainToAnotherAwsAccountResponse
 */
export interface Route53DomainsTransferDomainToAnotherAwsAccountResponse {
  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema Route53DomainsTransferDomainToAnotherAwsAccountResponse#Password
   */
  readonly password?: string;

}

/**
 * @schema Route53DomainsUpdateDomainContactRequest
 */
export interface Route53DomainsUpdateDomainContactRequest {
  /**
   * @schema Route53DomainsUpdateDomainContactRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsUpdateDomainContactRequest#AdminContact
   */
  readonly adminContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsUpdateDomainContactRequest#RegistrantContact
   */
  readonly registrantContact?: Route53DomainsContactDetail;

  /**
   * @schema Route53DomainsUpdateDomainContactRequest#TechContact
   */
  readonly techContact?: Route53DomainsContactDetail;

}

/**
 * @schema Route53DomainsUpdateDomainContactResponse
 */
export interface Route53DomainsUpdateDomainContactResponse {
  /**
   * @schema Route53DomainsUpdateDomainContactResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsUpdateDomainContactPrivacyRequest
 */
export interface Route53DomainsUpdateDomainContactPrivacyRequest {
  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#AdminPrivacy
   */
  readonly adminPrivacy?: boolean;

  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#RegistrantPrivacy
   */
  readonly registrantPrivacy?: boolean;

  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyRequest#TechPrivacy
   */
  readonly techPrivacy?: boolean;

}

/**
 * @schema Route53DomainsUpdateDomainContactPrivacyResponse
 */
export interface Route53DomainsUpdateDomainContactPrivacyResponse {
  /**
   * @schema Route53DomainsUpdateDomainContactPrivacyResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsUpdateDomainNameserversRequest
 */
export interface Route53DomainsUpdateDomainNameserversRequest {
  /**
   * @schema Route53DomainsUpdateDomainNameserversRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsUpdateDomainNameserversRequest#FIAuthKey
   */
  readonly fiAuthKey?: string;

  /**
   * @schema Route53DomainsUpdateDomainNameserversRequest#Nameservers
   */
  readonly nameservers: Route53DomainsNameserver[];

}

/**
 * @schema Route53DomainsUpdateDomainNameserversResponse
 */
export interface Route53DomainsUpdateDomainNameserversResponse {
  /**
   * @schema Route53DomainsUpdateDomainNameserversResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema Route53DomainsUpdateTagsForDomainRequest
 */
export interface Route53DomainsUpdateTagsForDomainRequest {
  /**
   * @schema Route53DomainsUpdateTagsForDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsUpdateTagsForDomainRequest#TagsToUpdate
   */
  readonly tagsToUpdate?: Route53DomainsTag[];

}

/**
 * @schema Route53DomainsUpdateTagsForDomainResponse
 */
export interface Route53DomainsUpdateTagsForDomainResponse {
}

/**
 * @schema Route53DomainsViewBillingRequest
 */
export interface Route53DomainsViewBillingRequest {
  /**
   * @schema Route53DomainsViewBillingRequest#Start
   */
  readonly start?: string;

  /**
   * @schema Route53DomainsViewBillingRequest#End
   */
  readonly end?: string;

  /**
   * @schema Route53DomainsViewBillingRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53DomainsViewBillingRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema Route53DomainsViewBillingResponse
 */
export interface Route53DomainsViewBillingResponse {
  /**
   * @schema Route53DomainsViewBillingResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

  /**
   * @schema Route53DomainsViewBillingResponse#BillingRecords
   */
  readonly billingRecords?: Route53DomainsBillingRecord[];

}

/**
 * @schema Route53DomainsDomainTransferability
 */
export interface Route53DomainsDomainTransferability {
  /**
   * @schema Route53DomainsDomainTransferability#Transferable
   */
  readonly transferable?: string;

}

/**
 * @schema Route53DomainsNameserver
 */
export interface Route53DomainsNameserver {
  /**
   * @schema Route53DomainsNameserver#Name
   */
  readonly name: string;

  /**
   * @schema Route53DomainsNameserver#GlueIps
   */
  readonly glueIps?: string[];

}

/**
 * @schema Route53DomainsContactDetail
 */
export interface Route53DomainsContactDetail {
  /**
   * @schema Route53DomainsContactDetail#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema Route53DomainsContactDetail#LastName
   */
  readonly lastName?: string;

  /**
   * @schema Route53DomainsContactDetail#ContactType
   */
  readonly contactType?: string;

  /**
   * @schema Route53DomainsContactDetail#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema Route53DomainsContactDetail#AddressLine1
   */
  readonly addressLine1?: string;

  /**
   * @schema Route53DomainsContactDetail#AddressLine2
   */
  readonly addressLine2?: string;

  /**
   * @schema Route53DomainsContactDetail#City
   */
  readonly city?: string;

  /**
   * @schema Route53DomainsContactDetail#State
   */
  readonly state?: string;

  /**
   * @schema Route53DomainsContactDetail#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema Route53DomainsContactDetail#ZipCode
   */
  readonly zipCode?: string;

  /**
   * @schema Route53DomainsContactDetail#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema Route53DomainsContactDetail#Email
   */
  readonly email?: string;

  /**
   * @schema Route53DomainsContactDetail#Fax
   */
  readonly fax?: string;

  /**
   * @schema Route53DomainsContactDetail#ExtraParams
   */
  readonly extraParams?: Route53DomainsExtraParam[];

}

/**
 * @schema Route53DomainsDomainSuggestion
 */
export interface Route53DomainsDomainSuggestion {
  /**
   * @schema Route53DomainsDomainSuggestion#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsDomainSuggestion#Availability
   */
  readonly availability?: string;

}

/**
 * @schema Route53DomainsDomainSummary
 */
export interface Route53DomainsDomainSummary {
  /**
   * @schema Route53DomainsDomainSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema Route53DomainsDomainSummary#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema Route53DomainsDomainSummary#TransferLock
   */
  readonly transferLock?: boolean;

  /**
   * @schema Route53DomainsDomainSummary#Expiry
   */
  readonly expiry?: string;

}

/**
 * @schema Route53DomainsOperationSummary
 */
export interface Route53DomainsOperationSummary {
  /**
   * @schema Route53DomainsOperationSummary#OperationId
   */
  readonly operationId: string;

  /**
   * @schema Route53DomainsOperationSummary#Status
   */
  readonly status: string;

  /**
   * @schema Route53DomainsOperationSummary#Type
   */
  readonly type: string;

  /**
   * @schema Route53DomainsOperationSummary#SubmittedDate
   */
  readonly submittedDate: string;

}

/**
 * @schema Route53DomainsTag
 */
export interface Route53DomainsTag {
  /**
   * @schema Route53DomainsTag#Key
   */
  readonly key?: string;

  /**
   * @schema Route53DomainsTag#Value
   */
  readonly value?: string;

}

/**
 * @schema Route53DomainsBillingRecord
 */
export interface Route53DomainsBillingRecord {
  /**
   * @schema Route53DomainsBillingRecord#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema Route53DomainsBillingRecord#Operation
   */
  readonly operation?: string;

  /**
   * @schema Route53DomainsBillingRecord#InvoiceId
   */
  readonly invoiceId?: string;

  /**
   * @schema Route53DomainsBillingRecord#BillDate
   */
  readonly billDate?: string;

  /**
   * @schema Route53DomainsBillingRecord#Price
   */
  readonly price?: number;

}

/**
 * @schema Route53DomainsExtraParam
 */
export interface Route53DomainsExtraParam {
  /**
   * @schema Route53DomainsExtraParam#Name
   */
  readonly name: string;

  /**
   * @schema Route53DomainsExtraParam#Value
   */
  readonly value: string;

}
