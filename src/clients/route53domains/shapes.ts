/**
 * @schema AcceptDomainTransferFromAnotherAwsAccountRequest
 */
export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @schema AcceptDomainTransferFromAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema AcceptDomainTransferFromAnotherAwsAccountRequest#Password
   */
  readonly password: string;

}

/**
 * @schema AcceptDomainTransferFromAnotherAwsAccountResponse
 */
export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @schema AcceptDomainTransferFromAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CancelDomainTransferToAnotherAwsAccountRequest
 */
export interface CancelDomainTransferToAnotherAwsAccountRequest {
  /**
   * @schema CancelDomainTransferToAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema CancelDomainTransferToAnotherAwsAccountResponse
 */
export interface CancelDomainTransferToAnotherAwsAccountResponse {
  /**
   * @schema CancelDomainTransferToAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CheckDomainAvailabilityRequest
 */
export interface CheckDomainAvailabilityRequest {
  /**
   * @schema CheckDomainAvailabilityRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CheckDomainAvailabilityRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

}

/**
 * @schema CheckDomainAvailabilityResponse
 */
export interface CheckDomainAvailabilityResponse {
  /**
   * @schema CheckDomainAvailabilityResponse#Availability
   */
  readonly availability: string;

}

/**
 * @schema CheckDomainTransferabilityRequest
 */
export interface CheckDomainTransferabilityRequest {
  /**
   * @schema CheckDomainTransferabilityRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CheckDomainTransferabilityRequest#AuthCode
   */
  readonly authCode?: string;

}

/**
 * @schema CheckDomainTransferabilityResponse
 */
export interface CheckDomainTransferabilityResponse {
  /**
   * @schema CheckDomainTransferabilityResponse#Transferability
   */
  readonly transferability: DomainTransferability;

}

/**
 * @schema DeleteTagsForDomainRequest
 */
export interface DeleteTagsForDomainRequest {
  /**
   * @schema DeleteTagsForDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DeleteTagsForDomainRequest#TagsToDelete
   */
  readonly tagsToDelete: string[];

}

/**
 * @schema DeleteTagsForDomainResponse
 */
export interface DeleteTagsForDomainResponse {
}

/**
 * @schema DisableDomainAutoRenewRequest
 */
export interface DisableDomainAutoRenewRequest {
  /**
   * @schema DisableDomainAutoRenewRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DisableDomainAutoRenewResponse
 */
export interface DisableDomainAutoRenewResponse {
}

/**
 * @schema DisableDomainTransferLockRequest
 */
export interface DisableDomainTransferLockRequest {
  /**
   * @schema DisableDomainTransferLockRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DisableDomainTransferLockResponse
 */
export interface DisableDomainTransferLockResponse {
  /**
   * @schema DisableDomainTransferLockResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema EnableDomainAutoRenewRequest
 */
export interface EnableDomainAutoRenewRequest {
  /**
   * @schema EnableDomainAutoRenewRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EnableDomainAutoRenewResponse
 */
export interface EnableDomainAutoRenewResponse {
}

/**
 * @schema EnableDomainTransferLockRequest
 */
export interface EnableDomainTransferLockRequest {
  /**
   * @schema EnableDomainTransferLockRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema EnableDomainTransferLockResponse
 */
export interface EnableDomainTransferLockResponse {
  /**
   * @schema EnableDomainTransferLockResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema GetContactReachabilityStatusRequest
 */
export interface GetContactReachabilityStatusRequest {
  /**
   * @schema GetContactReachabilityStatusRequest#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema GetContactReachabilityStatusResponse
 */
export interface GetContactReachabilityStatusResponse {
  /**
   * @schema GetContactReachabilityStatusResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema GetContactReachabilityStatusResponse#status
   */
  readonly status?: string;

}

/**
 * @schema GetDomainDetailRequest
 */
export interface GetDomainDetailRequest {
  /**
   * @schema GetDomainDetailRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema GetDomainDetailResponse
 */
export interface GetDomainDetailResponse {
  /**
   * @schema GetDomainDetailResponse#DomainName
   */
  readonly domainName: string;

  /**
   * @schema GetDomainDetailResponse#Nameservers
   */
  readonly nameservers: Nameserver[];

  /**
   * @schema GetDomainDetailResponse#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema GetDomainDetailResponse#AdminContact
   */
  readonly adminContact: ContactDetail;

  /**
   * @schema GetDomainDetailResponse#RegistrantContact
   */
  readonly registrantContact: ContactDetail;

  /**
   * @schema GetDomainDetailResponse#TechContact
   */
  readonly techContact: ContactDetail;

  /**
   * @schema GetDomainDetailResponse#AdminPrivacy
   */
  readonly adminPrivacy?: boolean;

  /**
   * @schema GetDomainDetailResponse#RegistrantPrivacy
   */
  readonly registrantPrivacy?: boolean;

  /**
   * @schema GetDomainDetailResponse#TechPrivacy
   */
  readonly techPrivacy?: boolean;

  /**
   * @schema GetDomainDetailResponse#RegistrarName
   */
  readonly registrarName?: string;

  /**
   * @schema GetDomainDetailResponse#WhoIsServer
   */
  readonly whoIsServer?: string;

  /**
   * @schema GetDomainDetailResponse#RegistrarUrl
   */
  readonly registrarUrl?: string;

  /**
   * @schema GetDomainDetailResponse#AbuseContactEmail
   */
  readonly abuseContactEmail?: string;

  /**
   * @schema GetDomainDetailResponse#AbuseContactPhone
   */
  readonly abuseContactPhone?: string;

  /**
   * @schema GetDomainDetailResponse#RegistryDomainId
   */
  readonly registryDomainId?: string;

  /**
   * @schema GetDomainDetailResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GetDomainDetailResponse#UpdatedDate
   */
  readonly updatedDate?: string;

  /**
   * @schema GetDomainDetailResponse#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema GetDomainDetailResponse#Reseller
   */
  readonly reseller?: string;

  /**
   * @schema GetDomainDetailResponse#DnsSec
   */
  readonly dnsSec?: string;

  /**
   * @schema GetDomainDetailResponse#StatusList
   */
  readonly statusList?: string[];

}

/**
 * @schema GetDomainSuggestionsRequest
 */
export interface GetDomainSuggestionsRequest {
  /**
   * @schema GetDomainSuggestionsRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema GetDomainSuggestionsRequest#SuggestionCount
   */
  readonly suggestionCount: number;

  /**
   * @schema GetDomainSuggestionsRequest#OnlyAvailable
   */
  readonly onlyAvailable: boolean;

}

/**
 * @schema GetDomainSuggestionsResponse
 */
export interface GetDomainSuggestionsResponse {
  /**
   * @schema GetDomainSuggestionsResponse#SuggestionsList
   */
  readonly suggestionsList?: DomainSuggestion[];

}

/**
 * @schema GetOperationDetailRequest
 */
export interface GetOperationDetailRequest {
  /**
   * @schema GetOperationDetailRequest#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema GetOperationDetailResponse
 */
export interface GetOperationDetailResponse {
  /**
   * @schema GetOperationDetailResponse#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema GetOperationDetailResponse#Status
   */
  readonly status?: string;

  /**
   * @schema GetOperationDetailResponse#Message
   */
  readonly message?: string;

  /**
   * @schema GetOperationDetailResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema GetOperationDetailResponse#Type
   */
  readonly type?: string;

  /**
   * @schema GetOperationDetailResponse#SubmittedDate
   */
  readonly submittedDate?: string;

}

/**
 * @schema ListDomainsRequest
 */
export interface ListDomainsRequest {
  /**
   * @schema ListDomainsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListDomainsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListDomainsResponse
 */
export interface ListDomainsResponse {
  /**
   * @schema ListDomainsResponse#Domains
   */
  readonly domains: DomainSummary[];

  /**
   * @schema ListDomainsResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

}

/**
 * @schema ListOperationsRequest
 */
export interface ListOperationsRequest {
  /**
   * @schema ListOperationsRequest#SubmittedSince
   */
  readonly submittedSince?: string;

  /**
   * @schema ListOperationsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListOperationsRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListOperationsResponse
 */
export interface ListOperationsResponse {
  /**
   * @schema ListOperationsResponse#Operations
   */
  readonly operations: OperationSummary[];

  /**
   * @schema ListOperationsResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

}

/**
 * @schema ListTagsForDomainRequest
 */
export interface ListTagsForDomainRequest {
  /**
   * @schema ListTagsForDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema ListTagsForDomainResponse
 */
export interface ListTagsForDomainResponse {
  /**
   * @schema ListTagsForDomainResponse#TagList
   */
  readonly tagList: Tag[];

}

/**
 * @schema RegisterDomainRequest
 */
export interface RegisterDomainRequest {
  /**
   * @schema RegisterDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema RegisterDomainRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

  /**
   * @schema RegisterDomainRequest#DurationInYears
   */
  readonly durationInYears: number;

  /**
   * @schema RegisterDomainRequest#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema RegisterDomainRequest#AdminContact
   */
  readonly adminContact: ContactDetail;

  /**
   * @schema RegisterDomainRequest#RegistrantContact
   */
  readonly registrantContact: ContactDetail;

  /**
   * @schema RegisterDomainRequest#TechContact
   */
  readonly techContact: ContactDetail;

  /**
   * @schema RegisterDomainRequest#PrivacyProtectAdminContact
   */
  readonly privacyProtectAdminContact?: boolean;

  /**
   * @schema RegisterDomainRequest#PrivacyProtectRegistrantContact
   */
  readonly privacyProtectRegistrantContact?: boolean;

  /**
   * @schema RegisterDomainRequest#PrivacyProtectTechContact
   */
  readonly privacyProtectTechContact?: boolean;

}

/**
 * @schema RegisterDomainResponse
 */
export interface RegisterDomainResponse {
  /**
   * @schema RegisterDomainResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema RejectDomainTransferFromAnotherAwsAccountRequest
 */
export interface RejectDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @schema RejectDomainTransferFromAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema RejectDomainTransferFromAnotherAwsAccountResponse
 */
export interface RejectDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @schema RejectDomainTransferFromAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema RenewDomainRequest
 */
export interface RenewDomainRequest {
  /**
   * @schema RenewDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema RenewDomainRequest#DurationInYears
   */
  readonly durationInYears?: number;

  /**
   * @schema RenewDomainRequest#CurrentExpiryYear
   */
  readonly currentExpiryYear: number;

}

/**
 * @schema RenewDomainResponse
 */
export interface RenewDomainResponse {
  /**
   * @schema RenewDomainResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema ResendContactReachabilityEmailRequest
 */
export interface ResendContactReachabilityEmailRequest {
  /**
   * @schema ResendContactReachabilityEmailRequest#domainName
   */
  readonly domainName?: string;

}

/**
 * @schema ResendContactReachabilityEmailResponse
 */
export interface ResendContactReachabilityEmailResponse {
  /**
   * @schema ResendContactReachabilityEmailResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema ResendContactReachabilityEmailResponse#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema ResendContactReachabilityEmailResponse#isAlreadyVerified
   */
  readonly isAlreadyVerified?: boolean;

}

/**
 * @schema RetrieveDomainAuthCodeRequest
 */
export interface RetrieveDomainAuthCodeRequest {
  /**
   * @schema RetrieveDomainAuthCodeRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema RetrieveDomainAuthCodeResponse
 */
export interface RetrieveDomainAuthCodeResponse {
  /**
   * @schema RetrieveDomainAuthCodeResponse#AuthCode
   */
  readonly authCode: string;

}

/**
 * @schema TransferDomainRequest
 */
export interface TransferDomainRequest {
  /**
   * @schema TransferDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema TransferDomainRequest#IdnLangCode
   */
  readonly idnLangCode?: string;

  /**
   * @schema TransferDomainRequest#DurationInYears
   */
  readonly durationInYears: number;

  /**
   * @schema TransferDomainRequest#Nameservers
   */
  readonly nameservers?: Nameserver[];

  /**
   * @schema TransferDomainRequest#AuthCode
   */
  readonly authCode?: string;

  /**
   * @schema TransferDomainRequest#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema TransferDomainRequest#AdminContact
   */
  readonly adminContact: ContactDetail;

  /**
   * @schema TransferDomainRequest#RegistrantContact
   */
  readonly registrantContact: ContactDetail;

  /**
   * @schema TransferDomainRequest#TechContact
   */
  readonly techContact: ContactDetail;

  /**
   * @schema TransferDomainRequest#PrivacyProtectAdminContact
   */
  readonly privacyProtectAdminContact?: boolean;

  /**
   * @schema TransferDomainRequest#PrivacyProtectRegistrantContact
   */
  readonly privacyProtectRegistrantContact?: boolean;

  /**
   * @schema TransferDomainRequest#PrivacyProtectTechContact
   */
  readonly privacyProtectTechContact?: boolean;

}

/**
 * @schema TransferDomainResponse
 */
export interface TransferDomainResponse {
  /**
   * @schema TransferDomainResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema TransferDomainToAnotherAwsAccountRequest
 */
export interface TransferDomainToAnotherAwsAccountRequest {
  /**
   * @schema TransferDomainToAnotherAwsAccountRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema TransferDomainToAnotherAwsAccountRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema TransferDomainToAnotherAwsAccountResponse
 */
export interface TransferDomainToAnotherAwsAccountResponse {
  /**
   * @schema TransferDomainToAnotherAwsAccountResponse#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema TransferDomainToAnotherAwsAccountResponse#Password
   */
  readonly password?: string;

}

/**
 * @schema UpdateDomainContactRequest
 */
export interface UpdateDomainContactRequest {
  /**
   * @schema UpdateDomainContactRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainContactRequest#AdminContact
   */
  readonly adminContact?: ContactDetail;

  /**
   * @schema UpdateDomainContactRequest#RegistrantContact
   */
  readonly registrantContact?: ContactDetail;

  /**
   * @schema UpdateDomainContactRequest#TechContact
   */
  readonly techContact?: ContactDetail;

}

/**
 * @schema UpdateDomainContactResponse
 */
export interface UpdateDomainContactResponse {
  /**
   * @schema UpdateDomainContactResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema UpdateDomainContactPrivacyRequest
 */
export interface UpdateDomainContactPrivacyRequest {
  /**
   * @schema UpdateDomainContactPrivacyRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainContactPrivacyRequest#AdminPrivacy
   */
  readonly adminPrivacy?: boolean;

  /**
   * @schema UpdateDomainContactPrivacyRequest#RegistrantPrivacy
   */
  readonly registrantPrivacy?: boolean;

  /**
   * @schema UpdateDomainContactPrivacyRequest#TechPrivacy
   */
  readonly techPrivacy?: boolean;

}

/**
 * @schema UpdateDomainContactPrivacyResponse
 */
export interface UpdateDomainContactPrivacyResponse {
  /**
   * @schema UpdateDomainContactPrivacyResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema UpdateDomainNameserversRequest
 */
export interface UpdateDomainNameserversRequest {
  /**
   * @schema UpdateDomainNameserversRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainNameserversRequest#FIAuthKey
   */
  readonly fiAuthKey?: string;

  /**
   * @schema UpdateDomainNameserversRequest#Nameservers
   */
  readonly nameservers: Nameserver[];

}

/**
 * @schema UpdateDomainNameserversResponse
 */
export interface UpdateDomainNameserversResponse {
  /**
   * @schema UpdateDomainNameserversResponse#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema UpdateTagsForDomainRequest
 */
export interface UpdateTagsForDomainRequest {
  /**
   * @schema UpdateTagsForDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateTagsForDomainRequest#TagsToUpdate
   */
  readonly tagsToUpdate?: Tag[];

}

/**
 * @schema UpdateTagsForDomainResponse
 */
export interface UpdateTagsForDomainResponse {
}

/**
 * @schema ViewBillingRequest
 */
export interface ViewBillingRequest {
  /**
   * @schema ViewBillingRequest#Start
   */
  readonly start?: string;

  /**
   * @schema ViewBillingRequest#End
   */
  readonly end?: string;

  /**
   * @schema ViewBillingRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ViewBillingRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ViewBillingResponse
 */
export interface ViewBillingResponse {
  /**
   * @schema ViewBillingResponse#NextPageMarker
   */
  readonly nextPageMarker?: string;

  /**
   * @schema ViewBillingResponse#BillingRecords
   */
  readonly billingRecords?: BillingRecord[];

}

/**
 * @schema DomainTransferability
 */
export interface DomainTransferability {
  /**
   * @schema DomainTransferability#Transferable
   */
  readonly transferable?: string;

}

/**
 * @schema Nameserver
 */
export interface Nameserver {
  /**
   * @schema Nameserver#Name
   */
  readonly name: string;

  /**
   * @schema Nameserver#GlueIps
   */
  readonly glueIps?: string[];

}

/**
 * @schema ContactDetail
 */
export interface ContactDetail {
  /**
   * @schema ContactDetail#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema ContactDetail#LastName
   */
  readonly lastName?: string;

  /**
   * @schema ContactDetail#ContactType
   */
  readonly contactType?: string;

  /**
   * @schema ContactDetail#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema ContactDetail#AddressLine1
   */
  readonly addressLine1?: string;

  /**
   * @schema ContactDetail#AddressLine2
   */
  readonly addressLine2?: string;

  /**
   * @schema ContactDetail#City
   */
  readonly city?: string;

  /**
   * @schema ContactDetail#State
   */
  readonly state?: string;

  /**
   * @schema ContactDetail#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema ContactDetail#ZipCode
   */
  readonly zipCode?: string;

  /**
   * @schema ContactDetail#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ContactDetail#Email
   */
  readonly email?: string;

  /**
   * @schema ContactDetail#Fax
   */
  readonly fax?: string;

  /**
   * @schema ContactDetail#ExtraParams
   */
  readonly extraParams?: ExtraParam[];

}

/**
 * @schema DomainSuggestion
 */
export interface DomainSuggestion {
  /**
   * @schema DomainSuggestion#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DomainSuggestion#Availability
   */
  readonly availability?: string;

}

/**
 * @schema DomainSummary
 */
export interface DomainSummary {
  /**
   * @schema DomainSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainSummary#AutoRenew
   */
  readonly autoRenew?: boolean;

  /**
   * @schema DomainSummary#TransferLock
   */
  readonly transferLock?: boolean;

  /**
   * @schema DomainSummary#Expiry
   */
  readonly expiry?: string;

}

/**
 * @schema OperationSummary
 */
export interface OperationSummary {
  /**
   * @schema OperationSummary#OperationId
   */
  readonly operationId: string;

  /**
   * @schema OperationSummary#Status
   */
  readonly status: string;

  /**
   * @schema OperationSummary#Type
   */
  readonly type: string;

  /**
   * @schema OperationSummary#SubmittedDate
   */
  readonly submittedDate: string;

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
 * @schema BillingRecord
 */
export interface BillingRecord {
  /**
   * @schema BillingRecord#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema BillingRecord#Operation
   */
  readonly operation?: string;

  /**
   * @schema BillingRecord#InvoiceId
   */
  readonly invoiceId?: string;

  /**
   * @schema BillingRecord#BillDate
   */
  readonly billDate?: string;

  /**
   * @schema BillingRecord#Price
   */
  readonly price?: number;

}

/**
 * @schema ExtraParam
 */
export interface ExtraParam {
  /**
   * @schema ExtraParam#Name
   */
  readonly name: string;

  /**
   * @schema ExtraParam#Value
   */
  readonly value: string;

}
