/**
 * @schema Sesv2CreateConfigurationSetRequest
 */
export interface Sesv2CreateConfigurationSetRequest {
  /**
   * @schema Sesv2CreateConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

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
 * Converts an object of type 'Sesv2CreateConfigurationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateConfigurationSetRequest(obj: Sesv2CreateConfigurationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'TrackingOptions': toJson_Sesv2TrackingOptions(obj.trackingOptions),
    'DeliveryOptions': toJson_Sesv2DeliveryOptions(obj.deliveryOptions),
    'ReputationOptions': toJson_Sesv2ReputationOptions(obj.reputationOptions),
    'SendingOptions': toJson_Sesv2SendingOptions(obj.sendingOptions),
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
    'SuppressionOptions': toJson_Sesv2SuppressionOptions(obj.suppressionOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateConfigurationSetResponse
 */
export interface Sesv2CreateConfigurationSetResponse {
}

/**
 * Converts an object of type 'Sesv2CreateConfigurationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateConfigurationSetResponse(obj: Sesv2CreateConfigurationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateConfigurationSetEventDestinationRequest
 */
export interface Sesv2CreateConfigurationSetEventDestinationRequest {
  /**
   * @schema Sesv2CreateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2CreateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName?: string;

  /**
   * @schema Sesv2CreateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination?: Sesv2EventDestinationDefinition;

}

/**
 * Converts an object of type 'Sesv2CreateConfigurationSetEventDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateConfigurationSetEventDestinationRequest(obj: Sesv2CreateConfigurationSetEventDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'EventDestinationName': obj.eventDestinationName,
    'EventDestination': toJson_Sesv2EventDestinationDefinition(obj.eventDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateConfigurationSetEventDestinationResponse
 */
export interface Sesv2CreateConfigurationSetEventDestinationResponse {
}

/**
 * Converts an object of type 'Sesv2CreateConfigurationSetEventDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateConfigurationSetEventDestinationResponse(obj: Sesv2CreateConfigurationSetEventDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateContactRequest
 */
export interface Sesv2CreateContactRequest {
  /**
   * @schema Sesv2CreateContactRequest#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2CreateContactRequest#EmailAddress
   */
  readonly emailAddress?: string;

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
 * Converts an object of type 'Sesv2CreateContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateContactRequest(obj: Sesv2CreateContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'EmailAddress': obj.emailAddress,
    'TopicPreferences': obj.topicPreferences?.map(y => toJson_Sesv2TopicPreference(y)),
    'UnsubscribeAll': obj.unsubscribeAll,
    'AttributesData': obj.attributesData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateContactResponse
 */
export interface Sesv2CreateContactResponse {
}

/**
 * Converts an object of type 'Sesv2CreateContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateContactResponse(obj: Sesv2CreateContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateContactListRequest
 */
export interface Sesv2CreateContactListRequest {
  /**
   * @schema Sesv2CreateContactListRequest#ContactListName
   */
  readonly contactListName?: string;

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
 * Converts an object of type 'Sesv2CreateContactListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateContactListRequest(obj: Sesv2CreateContactListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'Topics': obj.topics?.map(y => toJson_Sesv2Topic(y)),
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateContactListResponse
 */
export interface Sesv2CreateContactListResponse {
}

/**
 * Converts an object of type 'Sesv2CreateContactListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateContactListResponse(obj: Sesv2CreateContactListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateCustomVerificationEmailTemplateRequest
 */
export interface Sesv2CreateCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#TemplateSubject
   */
  readonly templateSubject?: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#TemplateContent
   */
  readonly templateContent?: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#SuccessRedirectionURL
   */
  readonly successRedirectionUrl?: string;

  /**
   * @schema Sesv2CreateCustomVerificationEmailTemplateRequest#FailureRedirectionURL
   */
  readonly failureRedirectionUrl?: string;

}

/**
 * Converts an object of type 'Sesv2CreateCustomVerificationEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateCustomVerificationEmailTemplateRequest(obj: Sesv2CreateCustomVerificationEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'FromEmailAddress': obj.fromEmailAddress,
    'TemplateSubject': obj.templateSubject,
    'TemplateContent': obj.templateContent,
    'SuccessRedirectionURL': obj.successRedirectionUrl,
    'FailureRedirectionURL': obj.failureRedirectionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateCustomVerificationEmailTemplateResponse
 */
export interface Sesv2CreateCustomVerificationEmailTemplateResponse {
}

/**
 * Converts an object of type 'Sesv2CreateCustomVerificationEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateCustomVerificationEmailTemplateResponse(obj: Sesv2CreateCustomVerificationEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateDedicatedIpPoolRequest
 */
export interface Sesv2CreateDedicatedIpPoolRequest {
  /**
   * @schema Sesv2CreateDedicatedIpPoolRequest#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema Sesv2CreateDedicatedIpPoolRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * Converts an object of type 'Sesv2CreateDedicatedIpPoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateDedicatedIpPoolRequest(obj: Sesv2CreateDedicatedIpPoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolName': obj.poolName,
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateDedicatedIpPoolResponse
 */
export interface Sesv2CreateDedicatedIpPoolResponse {
}

/**
 * Converts an object of type 'Sesv2CreateDedicatedIpPoolResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateDedicatedIpPoolResponse(obj: Sesv2CreateDedicatedIpPoolResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportRequest#Content
   */
  readonly content?: Sesv2EmailContent;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * Converts an object of type 'Sesv2CreateDeliverabilityTestReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateDeliverabilityTestReportRequest(obj: Sesv2CreateDeliverabilityTestReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportName': obj.reportName,
    'FromEmailAddress': obj.fromEmailAddress,
    'Content': toJson_Sesv2EmailContent(obj.content),
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateDeliverabilityTestReportResponse
 */
export interface Sesv2CreateDeliverabilityTestReportResponse {
  /**
   * @schema Sesv2CreateDeliverabilityTestReportResponse#ReportId
   */
  readonly reportId?: string;

  /**
   * @schema Sesv2CreateDeliverabilityTestReportResponse#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus?: string;

}

/**
 * Converts an object of type 'Sesv2CreateDeliverabilityTestReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateDeliverabilityTestReportResponse(obj: Sesv2CreateDeliverabilityTestReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportId': obj.reportId,
    'DeliverabilityTestStatus': obj.deliverabilityTestStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateEmailIdentityRequest
 */
export interface Sesv2CreateEmailIdentityRequest {
  /**
   * @schema Sesv2CreateEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2CreateEmailIdentityRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

  /**
   * @schema Sesv2CreateEmailIdentityRequest#DkimSigningAttributes
   */
  readonly dkimSigningAttributes?: Sesv2DkimSigningAttributes;

  /**
   * @schema Sesv2CreateEmailIdentityRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2CreateEmailIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateEmailIdentityRequest(obj: Sesv2CreateEmailIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
    'DkimSigningAttributes': toJson_Sesv2DkimSigningAttributes(obj.dkimSigningAttributes),
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2CreateEmailIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateEmailIdentityResponse(obj: Sesv2CreateEmailIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityType': obj.identityType,
    'VerifiedForSendingStatus': obj.verifiedForSendingStatus,
    'DkimAttributes': toJson_Sesv2DkimAttributes(obj.dkimAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateEmailIdentityPolicyRequest
 */
export interface Sesv2CreateEmailIdentityPolicyRequest {
  /**
   * @schema Sesv2CreateEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2CreateEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema Sesv2CreateEmailIdentityPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'Sesv2CreateEmailIdentityPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateEmailIdentityPolicyRequest(obj: Sesv2CreateEmailIdentityPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'PolicyName': obj.policyName,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateEmailIdentityPolicyResponse
 */
export interface Sesv2CreateEmailIdentityPolicyResponse {
}

/**
 * Converts an object of type 'Sesv2CreateEmailIdentityPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateEmailIdentityPolicyResponse(obj: Sesv2CreateEmailIdentityPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateEmailTemplateRequest
 */
export interface Sesv2CreateEmailTemplateRequest {
  /**
   * @schema Sesv2CreateEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2CreateEmailTemplateRequest#TemplateContent
   */
  readonly templateContent?: Sesv2EmailTemplateContent;

}

/**
 * Converts an object of type 'Sesv2CreateEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateEmailTemplateRequest(obj: Sesv2CreateEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'TemplateContent': toJson_Sesv2EmailTemplateContent(obj.templateContent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateEmailTemplateResponse
 */
export interface Sesv2CreateEmailTemplateResponse {
}

/**
 * Converts an object of type 'Sesv2CreateEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateEmailTemplateResponse(obj: Sesv2CreateEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CreateImportJobRequest
 */
export interface Sesv2CreateImportJobRequest {
  /**
   * @schema Sesv2CreateImportJobRequest#ImportDestination
   */
  readonly importDestination?: Sesv2ImportDestination;

  /**
   * @schema Sesv2CreateImportJobRequest#ImportDataSource
   */
  readonly importDataSource?: Sesv2ImportDataSource;

}

/**
 * Converts an object of type 'Sesv2CreateImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateImportJobRequest(obj: Sesv2CreateImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportDestination': toJson_Sesv2ImportDestination(obj.importDestination),
    'ImportDataSource': toJson_Sesv2ImportDataSource(obj.importDataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2CreateImportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CreateImportJobResponse(obj: Sesv2CreateImportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteConfigurationSetRequest
 */
export interface Sesv2DeleteConfigurationSetRequest {
  /**
   * @schema Sesv2DeleteConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteConfigurationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteConfigurationSetRequest(obj: Sesv2DeleteConfigurationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteConfigurationSetResponse
 */
export interface Sesv2DeleteConfigurationSetResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteConfigurationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteConfigurationSetResponse(obj: Sesv2DeleteConfigurationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteConfigurationSetEventDestinationRequest
 */
export interface Sesv2DeleteConfigurationSetEventDestinationRequest {
  /**
   * @schema Sesv2DeleteConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2DeleteConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteConfigurationSetEventDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteConfigurationSetEventDestinationRequest(obj: Sesv2DeleteConfigurationSetEventDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'EventDestinationName': obj.eventDestinationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteConfigurationSetEventDestinationResponse
 */
export interface Sesv2DeleteConfigurationSetEventDestinationResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteConfigurationSetEventDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteConfigurationSetEventDestinationResponse(obj: Sesv2DeleteConfigurationSetEventDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteContactRequest
 */
export interface Sesv2DeleteContactRequest {
  /**
   * @schema Sesv2DeleteContactRequest#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2DeleteContactRequest#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteContactRequest(obj: Sesv2DeleteContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteContactResponse
 */
export interface Sesv2DeleteContactResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteContactResponse(obj: Sesv2DeleteContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteContactListRequest
 */
export interface Sesv2DeleteContactListRequest {
  /**
   * @schema Sesv2DeleteContactListRequest#ContactListName
   */
  readonly contactListName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteContactListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteContactListRequest(obj: Sesv2DeleteContactListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteContactListResponse
 */
export interface Sesv2DeleteContactListResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteContactListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteContactListResponse(obj: Sesv2DeleteContactListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteCustomVerificationEmailTemplateRequest
 */
export interface Sesv2DeleteCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2DeleteCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteCustomVerificationEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteCustomVerificationEmailTemplateRequest(obj: Sesv2DeleteCustomVerificationEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteCustomVerificationEmailTemplateResponse
 */
export interface Sesv2DeleteCustomVerificationEmailTemplateResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteCustomVerificationEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteCustomVerificationEmailTemplateResponse(obj: Sesv2DeleteCustomVerificationEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteDedicatedIpPoolRequest
 */
export interface Sesv2DeleteDedicatedIpPoolRequest {
  /**
   * @schema Sesv2DeleteDedicatedIpPoolRequest#PoolName
   */
  readonly poolName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteDedicatedIpPoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteDedicatedIpPoolRequest(obj: Sesv2DeleteDedicatedIpPoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolName': obj.poolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteDedicatedIpPoolResponse
 */
export interface Sesv2DeleteDedicatedIpPoolResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteDedicatedIpPoolResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteDedicatedIpPoolResponse(obj: Sesv2DeleteDedicatedIpPoolResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteEmailIdentityRequest
 */
export interface Sesv2DeleteEmailIdentityRequest {
  /**
   * @schema Sesv2DeleteEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteEmailIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteEmailIdentityRequest(obj: Sesv2DeleteEmailIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteEmailIdentityResponse
 */
export interface Sesv2DeleteEmailIdentityResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteEmailIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteEmailIdentityResponse(obj: Sesv2DeleteEmailIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteEmailIdentityPolicyRequest
 */
export interface Sesv2DeleteEmailIdentityPolicyRequest {
  /**
   * @schema Sesv2DeleteEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2DeleteEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteEmailIdentityPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteEmailIdentityPolicyRequest(obj: Sesv2DeleteEmailIdentityPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteEmailIdentityPolicyResponse
 */
export interface Sesv2DeleteEmailIdentityPolicyResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteEmailIdentityPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteEmailIdentityPolicyResponse(obj: Sesv2DeleteEmailIdentityPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteEmailTemplateRequest
 */
export interface Sesv2DeleteEmailTemplateRequest {
  /**
   * @schema Sesv2DeleteEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteEmailTemplateRequest(obj: Sesv2DeleteEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteEmailTemplateResponse
 */
export interface Sesv2DeleteEmailTemplateResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteEmailTemplateResponse(obj: Sesv2DeleteEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteSuppressedDestinationRequest
 */
export interface Sesv2DeleteSuppressedDestinationRequest {
  /**
   * @schema Sesv2DeleteSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'Sesv2DeleteSuppressedDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteSuppressedDestinationRequest(obj: Sesv2DeleteSuppressedDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DeleteSuppressedDestinationResponse
 */
export interface Sesv2DeleteSuppressedDestinationResponse {
}

/**
 * Converts an object of type 'Sesv2DeleteSuppressedDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeleteSuppressedDestinationResponse(obj: Sesv2DeleteSuppressedDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetAccountRequest
 */
export interface Sesv2GetAccountRequest {
}

/**
 * Converts an object of type 'Sesv2GetAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetAccountRequest(obj: Sesv2GetAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetAccountResponse(obj: Sesv2GetAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedIpAutoWarmupEnabled': obj.dedicatedIpAutoWarmupEnabled,
    'EnforcementStatus': obj.enforcementStatus,
    'ProductionAccessEnabled': obj.productionAccessEnabled,
    'SendQuota': toJson_Sesv2SendQuota(obj.sendQuota),
    'SendingEnabled': obj.sendingEnabled,
    'SuppressionAttributes': toJson_Sesv2SuppressionAttributes(obj.suppressionAttributes),
    'Details': toJson_Sesv2AccountDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetBlacklistReportsRequest
 */
export interface Sesv2GetBlacklistReportsRequest {
  /**
   * @schema Sesv2GetBlacklistReportsRequest#BlacklistItemNames
   */
  readonly blacklistItemNames?: string[];

}

/**
 * Converts an object of type 'Sesv2GetBlacklistReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetBlacklistReportsRequest(obj: Sesv2GetBlacklistReportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlacklistItemNames': obj.blacklistItemNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetBlacklistReportsResponse
 */
export interface Sesv2GetBlacklistReportsResponse {
  /**
   * @schema Sesv2GetBlacklistReportsResponse#BlacklistReport
   */
  readonly blacklistReport?: { [key: string]: Sesv2BlacklistEntry[] };

}

/**
 * Converts an object of type 'Sesv2GetBlacklistReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetBlacklistReportsResponse(obj: Sesv2GetBlacklistReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlacklistReport': ((obj.blacklistReport) === undefined) ? undefined : (Object.entries(obj.blacklistReport).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_Sesv2BlacklistEntry(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetConfigurationSetRequest
 */
export interface Sesv2GetConfigurationSetRequest {
  /**
   * @schema Sesv2GetConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2GetConfigurationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetConfigurationSetRequest(obj: Sesv2GetConfigurationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetConfigurationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetConfigurationSetResponse(obj: Sesv2GetConfigurationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'TrackingOptions': toJson_Sesv2TrackingOptions(obj.trackingOptions),
    'DeliveryOptions': toJson_Sesv2DeliveryOptions(obj.deliveryOptions),
    'ReputationOptions': toJson_Sesv2ReputationOptions(obj.reputationOptions),
    'SendingOptions': toJson_Sesv2SendingOptions(obj.sendingOptions),
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
    'SuppressionOptions': toJson_Sesv2SuppressionOptions(obj.suppressionOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetConfigurationSetEventDestinationsRequest
 */
export interface Sesv2GetConfigurationSetEventDestinationsRequest {
  /**
   * @schema Sesv2GetConfigurationSetEventDestinationsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2GetConfigurationSetEventDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetConfigurationSetEventDestinationsRequest(obj: Sesv2GetConfigurationSetEventDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetConfigurationSetEventDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetConfigurationSetEventDestinationsResponse(obj: Sesv2GetConfigurationSetEventDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventDestinations': obj.eventDestinations?.map(y => toJson_Sesv2EventDestination(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetContactRequest
 */
export interface Sesv2GetContactRequest {
  /**
   * @schema Sesv2GetContactRequest#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2GetContactRequest#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'Sesv2GetContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetContactRequest(obj: Sesv2GetContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetContactResponse(obj: Sesv2GetContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'EmailAddress': obj.emailAddress,
    'TopicPreferences': obj.topicPreferences?.map(y => toJson_Sesv2TopicPreference(y)),
    'TopicDefaultPreferences': obj.topicDefaultPreferences?.map(y => toJson_Sesv2TopicPreference(y)),
    'UnsubscribeAll': obj.unsubscribeAll,
    'AttributesData': obj.attributesData,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetContactListRequest
 */
export interface Sesv2GetContactListRequest {
  /**
   * @schema Sesv2GetContactListRequest#ContactListName
   */
  readonly contactListName?: string;

}

/**
 * Converts an object of type 'Sesv2GetContactListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetContactListRequest(obj: Sesv2GetContactListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetContactListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetContactListResponse(obj: Sesv2GetContactListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'Topics': obj.topics?.map(y => toJson_Sesv2Topic(y)),
    'Description': obj.description,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetCustomVerificationEmailTemplateRequest
 */
export interface Sesv2GetCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2GetCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

}

/**
 * Converts an object of type 'Sesv2GetCustomVerificationEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetCustomVerificationEmailTemplateRequest(obj: Sesv2GetCustomVerificationEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetCustomVerificationEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetCustomVerificationEmailTemplateResponse(obj: Sesv2GetCustomVerificationEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'FromEmailAddress': obj.fromEmailAddress,
    'TemplateSubject': obj.templateSubject,
    'TemplateContent': obj.templateContent,
    'SuccessRedirectionURL': obj.successRedirectionUrl,
    'FailureRedirectionURL': obj.failureRedirectionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDedicatedIpRequest
 */
export interface Sesv2GetDedicatedIpRequest {
  /**
   * @schema Sesv2GetDedicatedIpRequest#Ip
   */
  readonly ip?: string;

}

/**
 * Converts an object of type 'Sesv2GetDedicatedIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDedicatedIpRequest(obj: Sesv2GetDedicatedIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetDedicatedIpResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDedicatedIpResponse(obj: Sesv2GetDedicatedIpResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedIp': toJson_Sesv2DedicatedIp(obj.dedicatedIp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetDedicatedIpsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDedicatedIpsRequest(obj: Sesv2GetDedicatedIpsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolName': obj.poolName,
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetDedicatedIpsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDedicatedIpsResponse(obj: Sesv2GetDedicatedIpsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedIps': obj.dedicatedIps?.map(y => toJson_Sesv2DedicatedIp(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDeliverabilityDashboardOptionsRequest
 */
export interface Sesv2GetDeliverabilityDashboardOptionsRequest {
}

/**
 * Converts an object of type 'Sesv2GetDeliverabilityDashboardOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDeliverabilityDashboardOptionsRequest(obj: Sesv2GetDeliverabilityDashboardOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDeliverabilityDashboardOptionsResponse
 */
export interface Sesv2GetDeliverabilityDashboardOptionsResponse {
  /**
   * @schema Sesv2GetDeliverabilityDashboardOptionsResponse#DashboardEnabled
   */
  readonly dashboardEnabled?: boolean;

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
 * Converts an object of type 'Sesv2GetDeliverabilityDashboardOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDeliverabilityDashboardOptionsResponse(obj: Sesv2GetDeliverabilityDashboardOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardEnabled': obj.dashboardEnabled,
    'SubscriptionExpiryDate': obj.subscriptionExpiryDate,
    'AccountStatus': obj.accountStatus,
    'ActiveSubscribedDomains': obj.activeSubscribedDomains?.map(y => toJson_Sesv2DomainDeliverabilityTrackingOption(y)),
    'PendingExpirationSubscribedDomains': obj.pendingExpirationSubscribedDomains?.map(y => toJson_Sesv2DomainDeliverabilityTrackingOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDeliverabilityTestReportRequest
 */
export interface Sesv2GetDeliverabilityTestReportRequest {
  /**
   * @schema Sesv2GetDeliverabilityTestReportRequest#ReportId
   */
  readonly reportId?: string;

}

/**
 * Converts an object of type 'Sesv2GetDeliverabilityTestReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDeliverabilityTestReportRequest(obj: Sesv2GetDeliverabilityTestReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDeliverabilityTestReportResponse
 */
export interface Sesv2GetDeliverabilityTestReportResponse {
  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#DeliverabilityTestReport
   */
  readonly deliverabilityTestReport?: Sesv2DeliverabilityTestReport;

  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#OverallPlacement
   */
  readonly overallPlacement?: Sesv2PlacementStatistics;

  /**
   * @schema Sesv2GetDeliverabilityTestReportResponse#IspPlacements
   */
  readonly ispPlacements?: Sesv2IspPlacement[];

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
 * Converts an object of type 'Sesv2GetDeliverabilityTestReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDeliverabilityTestReportResponse(obj: Sesv2GetDeliverabilityTestReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliverabilityTestReport': toJson_Sesv2DeliverabilityTestReport(obj.deliverabilityTestReport),
    'OverallPlacement': toJson_Sesv2PlacementStatistics(obj.overallPlacement),
    'IspPlacements': obj.ispPlacements?.map(y => toJson_Sesv2IspPlacement(y)),
    'Message': obj.message,
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDomainDeliverabilityCampaignRequest
 */
export interface Sesv2GetDomainDeliverabilityCampaignRequest {
  /**
   * @schema Sesv2GetDomainDeliverabilityCampaignRequest#CampaignId
   */
  readonly campaignId?: string;

}

/**
 * Converts an object of type 'Sesv2GetDomainDeliverabilityCampaignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDomainDeliverabilityCampaignRequest(obj: Sesv2GetDomainDeliverabilityCampaignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CampaignId': obj.campaignId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDomainDeliverabilityCampaignResponse
 */
export interface Sesv2GetDomainDeliverabilityCampaignResponse {
  /**
   * @schema Sesv2GetDomainDeliverabilityCampaignResponse#DomainDeliverabilityCampaign
   */
  readonly domainDeliverabilityCampaign?: Sesv2DomainDeliverabilityCampaign;

}

/**
 * Converts an object of type 'Sesv2GetDomainDeliverabilityCampaignResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDomainDeliverabilityCampaignResponse(obj: Sesv2GetDomainDeliverabilityCampaignResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainDeliverabilityCampaign': toJson_Sesv2DomainDeliverabilityCampaign(obj.domainDeliverabilityCampaign),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDomainStatisticsReportRequest
 */
export interface Sesv2GetDomainStatisticsReportRequest {
  /**
   * @schema Sesv2GetDomainStatisticsReportRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema Sesv2GetDomainStatisticsReportRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema Sesv2GetDomainStatisticsReportRequest#EndDate
   */
  readonly endDate?: string;

}

/**
 * Converts an object of type 'Sesv2GetDomainStatisticsReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDomainStatisticsReportRequest(obj: Sesv2GetDomainStatisticsReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetDomainStatisticsReportResponse
 */
export interface Sesv2GetDomainStatisticsReportResponse {
  /**
   * @schema Sesv2GetDomainStatisticsReportResponse#OverallVolume
   */
  readonly overallVolume?: Sesv2OverallVolume;

  /**
   * @schema Sesv2GetDomainStatisticsReportResponse#DailyVolumes
   */
  readonly dailyVolumes?: Sesv2DailyVolume[];

}

/**
 * Converts an object of type 'Sesv2GetDomainStatisticsReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetDomainStatisticsReportResponse(obj: Sesv2GetDomainStatisticsReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OverallVolume': toJson_Sesv2OverallVolume(obj.overallVolume),
    'DailyVolumes': obj.dailyVolumes?.map(y => toJson_Sesv2DailyVolume(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetEmailIdentityRequest
 */
export interface Sesv2GetEmailIdentityRequest {
  /**
   * @schema Sesv2GetEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

}

/**
 * Converts an object of type 'Sesv2GetEmailIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetEmailIdentityRequest(obj: Sesv2GetEmailIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema Sesv2GetEmailIdentityResponse#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2GetEmailIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetEmailIdentityResponse(obj: Sesv2GetEmailIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityType': obj.identityType,
    'FeedbackForwardingStatus': obj.feedbackForwardingStatus,
    'VerifiedForSendingStatus': obj.verifiedForSendingStatus,
    'DkimAttributes': toJson_Sesv2DkimAttributes(obj.dkimAttributes),
    'MailFromAttributes': toJson_Sesv2MailFromAttributes(obj.mailFromAttributes),
    'Policies': ((obj.policies) === undefined) ? undefined : (Object.entries(obj.policies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetEmailIdentityPoliciesRequest
 */
export interface Sesv2GetEmailIdentityPoliciesRequest {
  /**
   * @schema Sesv2GetEmailIdentityPoliciesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

}

/**
 * Converts an object of type 'Sesv2GetEmailIdentityPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetEmailIdentityPoliciesRequest(obj: Sesv2GetEmailIdentityPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetEmailIdentityPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetEmailIdentityPoliciesResponse(obj: Sesv2GetEmailIdentityPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policies': ((obj.policies) === undefined) ? undefined : (Object.entries(obj.policies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetEmailTemplateRequest
 */
export interface Sesv2GetEmailTemplateRequest {
  /**
   * @schema Sesv2GetEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

}

/**
 * Converts an object of type 'Sesv2GetEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetEmailTemplateRequest(obj: Sesv2GetEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetEmailTemplateResponse
 */
export interface Sesv2GetEmailTemplateResponse {
  /**
   * @schema Sesv2GetEmailTemplateResponse#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2GetEmailTemplateResponse#TemplateContent
   */
  readonly templateContent?: Sesv2EmailTemplateContent;

}

/**
 * Converts an object of type 'Sesv2GetEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetEmailTemplateResponse(obj: Sesv2GetEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'TemplateContent': toJson_Sesv2EmailTemplateContent(obj.templateContent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetImportJobRequest
 */
export interface Sesv2GetImportJobRequest {
  /**
   * @schema Sesv2GetImportJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'Sesv2GetImportJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetImportJobRequest(obj: Sesv2GetImportJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2GetImportJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetImportJobResponse(obj: Sesv2GetImportJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'ImportDestination': toJson_Sesv2ImportDestination(obj.importDestination),
    'ImportDataSource': toJson_Sesv2ImportDataSource(obj.importDataSource),
    'FailureInfo': toJson_Sesv2FailureInfo(obj.failureInfo),
    'JobStatus': obj.jobStatus,
    'CreatedTimestamp': obj.createdTimestamp,
    'CompletedTimestamp': obj.completedTimestamp,
    'ProcessedRecordsCount': obj.processedRecordsCount,
    'FailedRecordsCount': obj.failedRecordsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetSuppressedDestinationRequest
 */
export interface Sesv2GetSuppressedDestinationRequest {
  /**
   * @schema Sesv2GetSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'Sesv2GetSuppressedDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetSuppressedDestinationRequest(obj: Sesv2GetSuppressedDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2GetSuppressedDestinationResponse
 */
export interface Sesv2GetSuppressedDestinationResponse {
  /**
   * @schema Sesv2GetSuppressedDestinationResponse#SuppressedDestination
   */
  readonly suppressedDestination?: Sesv2SuppressedDestination;

}

/**
 * Converts an object of type 'Sesv2GetSuppressedDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2GetSuppressedDestinationResponse(obj: Sesv2GetSuppressedDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressedDestination': toJson_Sesv2SuppressedDestination(obj.suppressedDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListConfigurationSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListConfigurationSetsRequest(obj: Sesv2ListConfigurationSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListConfigurationSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListConfigurationSetsResponse(obj: Sesv2ListConfigurationSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSets': obj.configurationSets?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListContactListsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListContactListsRequest(obj: Sesv2ListContactListsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageSize': obj.pageSize,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListContactListsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListContactListsResponse(obj: Sesv2ListContactListsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactLists': obj.contactLists?.map(y => toJson_Sesv2ContactList(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListContactsRequest
 */
export interface Sesv2ListContactsRequest {
  /**
   * @schema Sesv2ListContactsRequest#ContactListName
   */
  readonly contactListName?: string;

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
 * Converts an object of type 'Sesv2ListContactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListContactsRequest(obj: Sesv2ListContactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'Filter': toJson_Sesv2ListContactsFilter(obj.filter),
    'PageSize': obj.pageSize,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListContactsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListContactsResponse(obj: Sesv2ListContactsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Contacts': obj.contacts?.map(y => toJson_Sesv2Contact(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListCustomVerificationEmailTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListCustomVerificationEmailTemplatesRequest(obj: Sesv2ListCustomVerificationEmailTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListCustomVerificationEmailTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListCustomVerificationEmailTemplatesResponse(obj: Sesv2ListCustomVerificationEmailTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomVerificationEmailTemplates': obj.customVerificationEmailTemplates?.map(y => toJson_Sesv2CustomVerificationEmailTemplateMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListDedicatedIpPoolsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListDedicatedIpPoolsRequest(obj: Sesv2ListDedicatedIpPoolsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListDedicatedIpPoolsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListDedicatedIpPoolsResponse(obj: Sesv2ListDedicatedIpPoolsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedIpPools': obj.dedicatedIpPools?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListDeliverabilityTestReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListDeliverabilityTestReportsRequest(obj: Sesv2ListDeliverabilityTestReportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListDeliverabilityTestReportsResponse
 */
export interface Sesv2ListDeliverabilityTestReportsResponse {
  /**
   * @schema Sesv2ListDeliverabilityTestReportsResponse#DeliverabilityTestReports
   */
  readonly deliverabilityTestReports?: Sesv2DeliverabilityTestReport[];

  /**
   * @schema Sesv2ListDeliverabilityTestReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Sesv2ListDeliverabilityTestReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListDeliverabilityTestReportsResponse(obj: Sesv2ListDeliverabilityTestReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliverabilityTestReports': obj.deliverabilityTestReports?.map(y => toJson_Sesv2DeliverabilityTestReport(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListDomainDeliverabilityCampaignsRequest
 */
export interface Sesv2ListDomainDeliverabilityCampaignsRequest {
  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsRequest#SubscribedDomain
   */
  readonly subscribedDomain?: string;

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
 * Converts an object of type 'Sesv2ListDomainDeliverabilityCampaignsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListDomainDeliverabilityCampaignsRequest(obj: Sesv2ListDomainDeliverabilityCampaignsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'SubscribedDomain': obj.subscribedDomain,
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListDomainDeliverabilityCampaignsResponse
 */
export interface Sesv2ListDomainDeliverabilityCampaignsResponse {
  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsResponse#DomainDeliverabilityCampaigns
   */
  readonly domainDeliverabilityCampaigns?: Sesv2DomainDeliverabilityCampaign[];

  /**
   * @schema Sesv2ListDomainDeliverabilityCampaignsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Sesv2ListDomainDeliverabilityCampaignsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListDomainDeliverabilityCampaignsResponse(obj: Sesv2ListDomainDeliverabilityCampaignsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainDeliverabilityCampaigns': obj.domainDeliverabilityCampaigns?.map(y => toJson_Sesv2DomainDeliverabilityCampaign(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListEmailIdentitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListEmailIdentitiesRequest(obj: Sesv2ListEmailIdentitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListEmailIdentitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListEmailIdentitiesResponse(obj: Sesv2ListEmailIdentitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentities': obj.emailIdentities?.map(y => toJson_Sesv2IdentityInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListEmailTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListEmailTemplatesRequest(obj: Sesv2ListEmailTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListEmailTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListEmailTemplatesResponse(obj: Sesv2ListEmailTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplatesMetadata': obj.templatesMetadata?.map(y => toJson_Sesv2EmailTemplateMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListImportJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListImportJobsRequest(obj: Sesv2ListImportJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportDestinationType': obj.importDestinationType,
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListImportJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListImportJobsResponse(obj: Sesv2ListImportJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImportJobs': obj.importJobs?.map(y => toJson_Sesv2ImportJobSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListSuppressedDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListSuppressedDestinationsRequest(obj: Sesv2ListSuppressedDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reasons': obj.reasons?.map(y => y),
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'NextToken': obj.nextToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListSuppressedDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListSuppressedDestinationsResponse(obj: Sesv2ListSuppressedDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressedDestinationSummaries': obj.suppressedDestinationSummaries?.map(y => toJson_Sesv2SuppressedDestinationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListTagsForResourceRequest
 */
export interface Sesv2ListTagsForResourceRequest {
  /**
   * @schema Sesv2ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'Sesv2ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListTagsForResourceRequest(obj: Sesv2ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListTagsForResourceResponse
 */
export interface Sesv2ListTagsForResourceResponse {
  /**
   * @schema Sesv2ListTagsForResourceResponse#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * Converts an object of type 'Sesv2ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListTagsForResourceResponse(obj: Sesv2ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2PutAccountDedicatedIpWarmupAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountDedicatedIpWarmupAttributesRequest(obj: Sesv2PutAccountDedicatedIpWarmupAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoWarmupEnabled': obj.autoWarmupEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutAccountDedicatedIpWarmupAttributesResponse
 */
export interface Sesv2PutAccountDedicatedIpWarmupAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutAccountDedicatedIpWarmupAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountDedicatedIpWarmupAttributesResponse(obj: Sesv2PutAccountDedicatedIpWarmupAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutAccountDetailsRequest
 */
export interface Sesv2PutAccountDetailsRequest {
  /**
   * @schema Sesv2PutAccountDetailsRequest#MailType
   */
  readonly mailType?: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#WebsiteURL
   */
  readonly websiteUrl?: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#ContactLanguage
   */
  readonly contactLanguage?: string;

  /**
   * @schema Sesv2PutAccountDetailsRequest#UseCaseDescription
   */
  readonly useCaseDescription?: string;

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
 * Converts an object of type 'Sesv2PutAccountDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountDetailsRequest(obj: Sesv2PutAccountDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MailType': obj.mailType,
    'WebsiteURL': obj.websiteUrl,
    'ContactLanguage': obj.contactLanguage,
    'UseCaseDescription': obj.useCaseDescription,
    'AdditionalContactEmailAddresses': obj.additionalContactEmailAddresses?.map(y => y),
    'ProductionAccessEnabled': obj.productionAccessEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutAccountDetailsResponse
 */
export interface Sesv2PutAccountDetailsResponse {
}

/**
 * Converts an object of type 'Sesv2PutAccountDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountDetailsResponse(obj: Sesv2PutAccountDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2PutAccountSendingAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountSendingAttributesRequest(obj: Sesv2PutAccountSendingAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SendingEnabled': obj.sendingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutAccountSendingAttributesResponse
 */
export interface Sesv2PutAccountSendingAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutAccountSendingAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountSendingAttributesResponse(obj: Sesv2PutAccountSendingAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2PutAccountSuppressionAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountSuppressionAttributesRequest(obj: Sesv2PutAccountSuppressionAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressedReasons': obj.suppressedReasons?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutAccountSuppressionAttributesResponse
 */
export interface Sesv2PutAccountSuppressionAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutAccountSuppressionAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutAccountSuppressionAttributesResponse(obj: Sesv2PutAccountSuppressionAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetDeliveryOptionsRequest
 */
export interface Sesv2PutConfigurationSetDeliveryOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetDeliveryOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

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
 * Converts an object of type 'Sesv2PutConfigurationSetDeliveryOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetDeliveryOptionsRequest(obj: Sesv2PutConfigurationSetDeliveryOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'TlsPolicy': obj.tlsPolicy,
    'SendingPoolName': obj.sendingPoolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetDeliveryOptionsResponse
 */
export interface Sesv2PutConfigurationSetDeliveryOptionsResponse {
}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetDeliveryOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetDeliveryOptionsResponse(obj: Sesv2PutConfigurationSetDeliveryOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetReputationOptionsRequest
 */
export interface Sesv2PutConfigurationSetReputationOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetReputationOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2PutConfigurationSetReputationOptionsRequest#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetReputationOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetReputationOptionsRequest(obj: Sesv2PutConfigurationSetReputationOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'ReputationMetricsEnabled': obj.reputationMetricsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetReputationOptionsResponse
 */
export interface Sesv2PutConfigurationSetReputationOptionsResponse {
}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetReputationOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetReputationOptionsResponse(obj: Sesv2PutConfigurationSetReputationOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetSendingOptionsRequest
 */
export interface Sesv2PutConfigurationSetSendingOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetSendingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2PutConfigurationSetSendingOptionsRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetSendingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetSendingOptionsRequest(obj: Sesv2PutConfigurationSetSendingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'SendingEnabled': obj.sendingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetSendingOptionsResponse
 */
export interface Sesv2PutConfigurationSetSendingOptionsResponse {
}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetSendingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetSendingOptionsResponse(obj: Sesv2PutConfigurationSetSendingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetSuppressionOptionsRequest
 */
export interface Sesv2PutConfigurationSetSuppressionOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetSuppressionOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2PutConfigurationSetSuppressionOptionsRequest#SuppressedReasons
   */
  readonly suppressedReasons?: string[];

}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetSuppressionOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetSuppressionOptionsRequest(obj: Sesv2PutConfigurationSetSuppressionOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'SuppressedReasons': obj.suppressedReasons?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetSuppressionOptionsResponse
 */
export interface Sesv2PutConfigurationSetSuppressionOptionsResponse {
}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetSuppressionOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetSuppressionOptionsResponse(obj: Sesv2PutConfigurationSetSuppressionOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetTrackingOptionsRequest
 */
export interface Sesv2PutConfigurationSetTrackingOptionsRequest {
  /**
   * @schema Sesv2PutConfigurationSetTrackingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2PutConfigurationSetTrackingOptionsRequest#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetTrackingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetTrackingOptionsRequest(obj: Sesv2PutConfigurationSetTrackingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'CustomRedirectDomain': obj.customRedirectDomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutConfigurationSetTrackingOptionsResponse
 */
export interface Sesv2PutConfigurationSetTrackingOptionsResponse {
}

/**
 * Converts an object of type 'Sesv2PutConfigurationSetTrackingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutConfigurationSetTrackingOptionsResponse(obj: Sesv2PutConfigurationSetTrackingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutDedicatedIpInPoolRequest
 */
export interface Sesv2PutDedicatedIpInPoolRequest {
  /**
   * @schema Sesv2PutDedicatedIpInPoolRequest#Ip
   */
  readonly ip?: string;

  /**
   * @schema Sesv2PutDedicatedIpInPoolRequest#DestinationPoolName
   */
  readonly destinationPoolName?: string;

}

/**
 * Converts an object of type 'Sesv2PutDedicatedIpInPoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutDedicatedIpInPoolRequest(obj: Sesv2PutDedicatedIpInPoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
    'DestinationPoolName': obj.destinationPoolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutDedicatedIpInPoolResponse
 */
export interface Sesv2PutDedicatedIpInPoolResponse {
}

/**
 * Converts an object of type 'Sesv2PutDedicatedIpInPoolResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutDedicatedIpInPoolResponse(obj: Sesv2PutDedicatedIpInPoolResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutDedicatedIpWarmupAttributesRequest
 */
export interface Sesv2PutDedicatedIpWarmupAttributesRequest {
  /**
   * @schema Sesv2PutDedicatedIpWarmupAttributesRequest#Ip
   */
  readonly ip?: string;

  /**
   * @schema Sesv2PutDedicatedIpWarmupAttributesRequest#WarmupPercentage
   */
  readonly warmupPercentage?: number;

}

/**
 * Converts an object of type 'Sesv2PutDedicatedIpWarmupAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutDedicatedIpWarmupAttributesRequest(obj: Sesv2PutDedicatedIpWarmupAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
    'WarmupPercentage': obj.warmupPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutDedicatedIpWarmupAttributesResponse
 */
export interface Sesv2PutDedicatedIpWarmupAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutDedicatedIpWarmupAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutDedicatedIpWarmupAttributesResponse(obj: Sesv2PutDedicatedIpWarmupAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutDeliverabilityDashboardOptionRequest
 */
export interface Sesv2PutDeliverabilityDashboardOptionRequest {
  /**
   * @schema Sesv2PutDeliverabilityDashboardOptionRequest#DashboardEnabled
   */
  readonly dashboardEnabled?: boolean;

  /**
   * @schema Sesv2PutDeliverabilityDashboardOptionRequest#SubscribedDomains
   */
  readonly subscribedDomains?: Sesv2DomainDeliverabilityTrackingOption[];

}

/**
 * Converts an object of type 'Sesv2PutDeliverabilityDashboardOptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutDeliverabilityDashboardOptionRequest(obj: Sesv2PutDeliverabilityDashboardOptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardEnabled': obj.dashboardEnabled,
    'SubscribedDomains': obj.subscribedDomains?.map(y => toJson_Sesv2DomainDeliverabilityTrackingOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutDeliverabilityDashboardOptionResponse
 */
export interface Sesv2PutDeliverabilityDashboardOptionResponse {
}

/**
 * Converts an object of type 'Sesv2PutDeliverabilityDashboardOptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutDeliverabilityDashboardOptionResponse(obj: Sesv2PutDeliverabilityDashboardOptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityConfigurationSetAttributesRequest
 */
export interface Sesv2PutEmailIdentityConfigurationSetAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityConfigurationSetAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2PutEmailIdentityConfigurationSetAttributesRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityConfigurationSetAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityConfigurationSetAttributesRequest(obj: Sesv2PutEmailIdentityConfigurationSetAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityConfigurationSetAttributesResponse
 */
export interface Sesv2PutEmailIdentityConfigurationSetAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityConfigurationSetAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityConfigurationSetAttributesResponse(obj: Sesv2PutEmailIdentityConfigurationSetAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityDkimAttributesRequest
 */
export interface Sesv2PutEmailIdentityDkimAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityDkimAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimAttributesRequest#SigningEnabled
   */
  readonly signingEnabled?: boolean;

}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityDkimAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityDkimAttributesRequest(obj: Sesv2PutEmailIdentityDkimAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'SigningEnabled': obj.signingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityDkimAttributesResponse
 */
export interface Sesv2PutEmailIdentityDkimAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityDkimAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityDkimAttributesResponse(obj: Sesv2PutEmailIdentityDkimAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest
 */
export interface Sesv2PutEmailIdentityDkimSigningAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest#SigningAttributesOrigin
   */
  readonly signingAttributesOrigin?: string;

  /**
   * @schema Sesv2PutEmailIdentityDkimSigningAttributesRequest#SigningAttributes
   */
  readonly signingAttributes?: Sesv2DkimSigningAttributes;

}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityDkimSigningAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityDkimSigningAttributesRequest(obj: Sesv2PutEmailIdentityDkimSigningAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'SigningAttributesOrigin': obj.signingAttributesOrigin,
    'SigningAttributes': toJson_Sesv2DkimSigningAttributes(obj.signingAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2PutEmailIdentityDkimSigningAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityDkimSigningAttributesResponse(obj: Sesv2PutEmailIdentityDkimSigningAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DkimStatus': obj.dkimStatus,
    'DkimTokens': obj.dkimTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityFeedbackAttributesRequest
 */
export interface Sesv2PutEmailIdentityFeedbackAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityFeedbackAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2PutEmailIdentityFeedbackAttributesRequest#EmailForwardingEnabled
   */
  readonly emailForwardingEnabled?: boolean;

}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityFeedbackAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityFeedbackAttributesRequest(obj: Sesv2PutEmailIdentityFeedbackAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'EmailForwardingEnabled': obj.emailForwardingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityFeedbackAttributesResponse
 */
export interface Sesv2PutEmailIdentityFeedbackAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityFeedbackAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityFeedbackAttributesResponse(obj: Sesv2PutEmailIdentityFeedbackAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityMailFromAttributesRequest
 */
export interface Sesv2PutEmailIdentityMailFromAttributesRequest {
  /**
   * @schema Sesv2PutEmailIdentityMailFromAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

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
 * Converts an object of type 'Sesv2PutEmailIdentityMailFromAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityMailFromAttributesRequest(obj: Sesv2PutEmailIdentityMailFromAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'MailFromDomain': obj.mailFromDomain,
    'BehaviorOnMxFailure': obj.behaviorOnMxFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutEmailIdentityMailFromAttributesResponse
 */
export interface Sesv2PutEmailIdentityMailFromAttributesResponse {
}

/**
 * Converts an object of type 'Sesv2PutEmailIdentityMailFromAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutEmailIdentityMailFromAttributesResponse(obj: Sesv2PutEmailIdentityMailFromAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutSuppressedDestinationRequest
 */
export interface Sesv2PutSuppressedDestinationRequest {
  /**
   * @schema Sesv2PutSuppressedDestinationRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Sesv2PutSuppressedDestinationRequest#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'Sesv2PutSuppressedDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutSuppressedDestinationRequest(obj: Sesv2PutSuppressedDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2PutSuppressedDestinationResponse
 */
export interface Sesv2PutSuppressedDestinationResponse {
}

/**
 * Converts an object of type 'Sesv2PutSuppressedDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PutSuppressedDestinationResponse(obj: Sesv2PutSuppressedDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly defaultContent?: Sesv2BulkEmailContent;

  /**
   * @schema Sesv2SendBulkEmailRequest#BulkEmailEntries
   */
  readonly bulkEmailEntries?: Sesv2BulkEmailEntry[];

  /**
   * @schema Sesv2SendBulkEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2SendBulkEmailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendBulkEmailRequest(obj: Sesv2SendBulkEmailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromEmailAddress': obj.fromEmailAddress,
    'FromEmailAddressIdentityArn': obj.fromEmailAddressIdentityArn,
    'ReplyToAddresses': obj.replyToAddresses?.map(y => y),
    'FeedbackForwardingEmailAddress': obj.feedbackForwardingEmailAddress,
    'FeedbackForwardingEmailAddressIdentityArn': obj.feedbackForwardingEmailAddressIdentityArn,
    'DefaultEmailTags': obj.defaultEmailTags?.map(y => toJson_Sesv2MessageTag(y)),
    'DefaultContent': toJson_Sesv2BulkEmailContent(obj.defaultContent),
    'BulkEmailEntries': obj.bulkEmailEntries?.map(y => toJson_Sesv2BulkEmailEntry(y)),
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2SendBulkEmailResponse
 */
export interface Sesv2SendBulkEmailResponse {
  /**
   * @schema Sesv2SendBulkEmailResponse#BulkEmailEntryResults
   */
  readonly bulkEmailEntryResults?: Sesv2BulkEmailEntryResult[];

}

/**
 * Converts an object of type 'Sesv2SendBulkEmailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendBulkEmailResponse(obj: Sesv2SendBulkEmailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BulkEmailEntryResults': obj.bulkEmailEntryResults?.map(y => toJson_Sesv2BulkEmailEntryResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2SendCustomVerificationEmailRequest
 */
export interface Sesv2SendCustomVerificationEmailRequest {
  /**
   * @schema Sesv2SendCustomVerificationEmailRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Sesv2SendCustomVerificationEmailRequest#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2SendCustomVerificationEmailRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'Sesv2SendCustomVerificationEmailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendCustomVerificationEmailRequest(obj: Sesv2SendCustomVerificationEmailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
    'TemplateName': obj.templateName,
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SendCustomVerificationEmailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendCustomVerificationEmailResponse(obj: Sesv2SendCustomVerificationEmailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly content?: Sesv2EmailContent;

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
 * Converts an object of type 'Sesv2SendEmailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendEmailRequest(obj: Sesv2SendEmailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromEmailAddress': obj.fromEmailAddress,
    'FromEmailAddressIdentityArn': obj.fromEmailAddressIdentityArn,
    'Destination': toJson_Sesv2Destination(obj.destination),
    'ReplyToAddresses': obj.replyToAddresses?.map(y => y),
    'FeedbackForwardingEmailAddress': obj.feedbackForwardingEmailAddress,
    'FeedbackForwardingEmailAddressIdentityArn': obj.feedbackForwardingEmailAddressIdentityArn,
    'Content': toJson_Sesv2EmailContent(obj.content),
    'EmailTags': obj.emailTags?.map(y => toJson_Sesv2MessageTag(y)),
    'ConfigurationSetName': obj.configurationSetName,
    'ListManagementOptions': toJson_Sesv2ListManagementOptions(obj.listManagementOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SendEmailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendEmailResponse(obj: Sesv2SendEmailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2TagResourceRequest
 */
export interface Sesv2TagResourceRequest {
  /**
   * @schema Sesv2TagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Sesv2TagResourceRequest#Tags
   */
  readonly tags?: Sesv2Tag[];

}

/**
 * Converts an object of type 'Sesv2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TagResourceRequest(obj: Sesv2TagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_Sesv2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2TagResourceResponse
 */
export interface Sesv2TagResourceResponse {
}

/**
 * Converts an object of type 'Sesv2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TagResourceResponse(obj: Sesv2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2TestRenderEmailTemplateRequest
 */
export interface Sesv2TestRenderEmailTemplateRequest {
  /**
   * @schema Sesv2TestRenderEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2TestRenderEmailTemplateRequest#TemplateData
   */
  readonly templateData?: string;

}

/**
 * Converts an object of type 'Sesv2TestRenderEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TestRenderEmailTemplateRequest(obj: Sesv2TestRenderEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'TemplateData': obj.templateData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2TestRenderEmailTemplateResponse
 */
export interface Sesv2TestRenderEmailTemplateResponse {
  /**
   * @schema Sesv2TestRenderEmailTemplateResponse#RenderedTemplate
   */
  readonly renderedTemplate?: string;

}

/**
 * Converts an object of type 'Sesv2TestRenderEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TestRenderEmailTemplateResponse(obj: Sesv2TestRenderEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RenderedTemplate': obj.renderedTemplate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UntagResourceRequest
 */
export interface Sesv2UntagResourceRequest {
  /**
   * @schema Sesv2UntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Sesv2UntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'Sesv2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UntagResourceRequest(obj: Sesv2UntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UntagResourceResponse
 */
export interface Sesv2UntagResourceResponse {
}

/**
 * Converts an object of type 'Sesv2UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UntagResourceResponse(obj: Sesv2UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateConfigurationSetEventDestinationRequest
 */
export interface Sesv2UpdateConfigurationSetEventDestinationRequest {
  /**
   * @schema Sesv2UpdateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema Sesv2UpdateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName?: string;

  /**
   * @schema Sesv2UpdateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination?: Sesv2EventDestinationDefinition;

}

/**
 * Converts an object of type 'Sesv2UpdateConfigurationSetEventDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateConfigurationSetEventDestinationRequest(obj: Sesv2UpdateConfigurationSetEventDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'EventDestinationName': obj.eventDestinationName,
    'EventDestination': toJson_Sesv2EventDestinationDefinition(obj.eventDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateConfigurationSetEventDestinationResponse
 */
export interface Sesv2UpdateConfigurationSetEventDestinationResponse {
}

/**
 * Converts an object of type 'Sesv2UpdateConfigurationSetEventDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateConfigurationSetEventDestinationResponse(obj: Sesv2UpdateConfigurationSetEventDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateContactRequest
 */
export interface Sesv2UpdateContactRequest {
  /**
   * @schema Sesv2UpdateContactRequest#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2UpdateContactRequest#EmailAddress
   */
  readonly emailAddress?: string;

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
 * Converts an object of type 'Sesv2UpdateContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateContactRequest(obj: Sesv2UpdateContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'EmailAddress': obj.emailAddress,
    'TopicPreferences': obj.topicPreferences?.map(y => toJson_Sesv2TopicPreference(y)),
    'UnsubscribeAll': obj.unsubscribeAll,
    'AttributesData': obj.attributesData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateContactResponse
 */
export interface Sesv2UpdateContactResponse {
}

/**
 * Converts an object of type 'Sesv2UpdateContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateContactResponse(obj: Sesv2UpdateContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateContactListRequest
 */
export interface Sesv2UpdateContactListRequest {
  /**
   * @schema Sesv2UpdateContactListRequest#ContactListName
   */
  readonly contactListName?: string;

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
 * Converts an object of type 'Sesv2UpdateContactListRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateContactListRequest(obj: Sesv2UpdateContactListRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'Topics': obj.topics?.map(y => toJson_Sesv2Topic(y)),
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateContactListResponse
 */
export interface Sesv2UpdateContactListResponse {
}

/**
 * Converts an object of type 'Sesv2UpdateContactListResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateContactListResponse(obj: Sesv2UpdateContactListResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest
 */
export interface Sesv2UpdateCustomVerificationEmailTemplateRequest {
  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#FromEmailAddress
   */
  readonly fromEmailAddress?: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#TemplateSubject
   */
  readonly templateSubject?: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#TemplateContent
   */
  readonly templateContent?: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#SuccessRedirectionURL
   */
  readonly successRedirectionUrl?: string;

  /**
   * @schema Sesv2UpdateCustomVerificationEmailTemplateRequest#FailureRedirectionURL
   */
  readonly failureRedirectionUrl?: string;

}

/**
 * Converts an object of type 'Sesv2UpdateCustomVerificationEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateCustomVerificationEmailTemplateRequest(obj: Sesv2UpdateCustomVerificationEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'FromEmailAddress': obj.fromEmailAddress,
    'TemplateSubject': obj.templateSubject,
    'TemplateContent': obj.templateContent,
    'SuccessRedirectionURL': obj.successRedirectionUrl,
    'FailureRedirectionURL': obj.failureRedirectionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateCustomVerificationEmailTemplateResponse
 */
export interface Sesv2UpdateCustomVerificationEmailTemplateResponse {
}

/**
 * Converts an object of type 'Sesv2UpdateCustomVerificationEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateCustomVerificationEmailTemplateResponse(obj: Sesv2UpdateCustomVerificationEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateEmailIdentityPolicyRequest
 */
export interface Sesv2UpdateEmailIdentityPolicyRequest {
  /**
   * @schema Sesv2UpdateEmailIdentityPolicyRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema Sesv2UpdateEmailIdentityPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema Sesv2UpdateEmailIdentityPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'Sesv2UpdateEmailIdentityPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateEmailIdentityPolicyRequest(obj: Sesv2UpdateEmailIdentityPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'PolicyName': obj.policyName,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateEmailIdentityPolicyResponse
 */
export interface Sesv2UpdateEmailIdentityPolicyResponse {
}

/**
 * Converts an object of type 'Sesv2UpdateEmailIdentityPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateEmailIdentityPolicyResponse(obj: Sesv2UpdateEmailIdentityPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateEmailTemplateRequest
 */
export interface Sesv2UpdateEmailTemplateRequest {
  /**
   * @schema Sesv2UpdateEmailTemplateRequest#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema Sesv2UpdateEmailTemplateRequest#TemplateContent
   */
  readonly templateContent?: Sesv2EmailTemplateContent;

}

/**
 * Converts an object of type 'Sesv2UpdateEmailTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateEmailTemplateRequest(obj: Sesv2UpdateEmailTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'TemplateContent': toJson_Sesv2EmailTemplateContent(obj.templateContent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2UpdateEmailTemplateResponse
 */
export interface Sesv2UpdateEmailTemplateResponse {
}

/**
 * Converts an object of type 'Sesv2UpdateEmailTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2UpdateEmailTemplateResponse(obj: Sesv2UpdateEmailTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2TrackingOptions
 */
export interface Sesv2TrackingOptions {
  /**
   * @schema Sesv2TrackingOptions#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * Converts an object of type 'Sesv2TrackingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TrackingOptions(obj: Sesv2TrackingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomRedirectDomain': obj.customRedirectDomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DeliveryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeliveryOptions(obj: Sesv2DeliveryOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TlsPolicy': obj.tlsPolicy,
    'SendingPoolName': obj.sendingPoolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ReputationOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ReputationOptions(obj: Sesv2ReputationOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReputationMetricsEnabled': obj.reputationMetricsEnabled,
    'LastFreshStart': obj.lastFreshStart,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SendingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendingOptions(obj: Sesv2SendingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SendingEnabled': obj.sendingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2Tag
 */
export interface Sesv2Tag {
  /**
   * @schema Sesv2Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Sesv2Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Sesv2Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Tag(obj: Sesv2Tag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SuppressionOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SuppressionOptions(obj: Sesv2SuppressionOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressedReasons': obj.suppressedReasons?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2EventDestinationDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2EventDestinationDefinition(obj: Sesv2EventDestinationDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'MatchingEventTypes': obj.matchingEventTypes?.map(y => y),
    'KinesisFirehoseDestination': toJson_Sesv2KinesisFirehoseDestination(obj.kinesisFirehoseDestination),
    'CloudWatchDestination': toJson_Sesv2CloudWatchDestination(obj.cloudWatchDestination),
    'SnsDestination': toJson_Sesv2SnsDestination(obj.snsDestination),
    'PinpointDestination': toJson_Sesv2PinpointDestination(obj.pinpointDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2TopicPreference
 */
export interface Sesv2TopicPreference {
  /**
   * @schema Sesv2TopicPreference#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema Sesv2TopicPreference#SubscriptionStatus
   */
  readonly subscriptionStatus?: string;

}

/**
 * Converts an object of type 'Sesv2TopicPreference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TopicPreference(obj: Sesv2TopicPreference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicName': obj.topicName,
    'SubscriptionStatus': obj.subscriptionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2Topic
 */
export interface Sesv2Topic {
  /**
   * @schema Sesv2Topic#TopicName
   */
  readonly topicName?: string;

  /**
   * @schema Sesv2Topic#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Sesv2Topic#Description
   */
  readonly description?: string;

  /**
   * @schema Sesv2Topic#DefaultSubscriptionStatus
   */
  readonly defaultSubscriptionStatus?: string;

}

/**
 * Converts an object of type 'Sesv2Topic' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Topic(obj: Sesv2Topic | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicName': obj.topicName,
    'DisplayName': obj.displayName,
    'Description': obj.description,
    'DefaultSubscriptionStatus': obj.defaultSubscriptionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2EmailContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2EmailContent(obj: Sesv2EmailContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Simple': toJson_Sesv2Message(obj.simple),
    'Raw': toJson_Sesv2RawMessage(obj.raw),
    'Template': toJson_Sesv2Template(obj.template),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DkimSigningAttributes
 */
export interface Sesv2DkimSigningAttributes {
  /**
   * @schema Sesv2DkimSigningAttributes#DomainSigningSelector
   */
  readonly domainSigningSelector?: string;

  /**
   * @schema Sesv2DkimSigningAttributes#DomainSigningPrivateKey
   */
  readonly domainSigningPrivateKey?: string;

}

/**
 * Converts an object of type 'Sesv2DkimSigningAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DkimSigningAttributes(obj: Sesv2DkimSigningAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainSigningSelector': obj.domainSigningSelector,
    'DomainSigningPrivateKey': obj.domainSigningPrivateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DkimAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DkimAttributes(obj: Sesv2DkimAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SigningEnabled': obj.signingEnabled,
    'Status': obj.status,
    'Tokens': obj.tokens?.map(y => y),
    'SigningAttributesOrigin': obj.signingAttributesOrigin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2EmailTemplateContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2EmailTemplateContent(obj: Sesv2EmailTemplateContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subject': obj.subject,
    'Text': obj.text,
    'Html': obj.html,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ImportDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ImportDestination(obj: Sesv2ImportDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressionListDestination': toJson_Sesv2SuppressionListDestination(obj.suppressionListDestination),
    'ContactListDestination': toJson_Sesv2ContactListDestination(obj.contactListDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ImportDataSource
 */
export interface Sesv2ImportDataSource {
  /**
   * @schema Sesv2ImportDataSource#S3Url
   */
  readonly s3Url?: string;

  /**
   * @schema Sesv2ImportDataSource#DataFormat
   */
  readonly dataFormat?: string;

}

/**
 * Converts an object of type 'Sesv2ImportDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ImportDataSource(obj: Sesv2ImportDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Url': obj.s3Url,
    'DataFormat': obj.dataFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SendQuota' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SendQuota(obj: Sesv2SendQuota | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Max24HourSend': obj.max24HourSend,
    'MaxSendRate': obj.maxSendRate,
    'SentLast24Hours': obj.sentLast24Hours,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SuppressionAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SuppressionAttributes(obj: Sesv2SuppressionAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressedReasons': obj.suppressedReasons?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2AccountDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2AccountDetails(obj: Sesv2AccountDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MailType': obj.mailType,
    'WebsiteURL': obj.websiteUrl,
    'ContactLanguage': obj.contactLanguage,
    'UseCaseDescription': obj.useCaseDescription,
    'AdditionalContactEmailAddresses': obj.additionalContactEmailAddresses?.map(y => y),
    'ReviewDetails': toJson_Sesv2ReviewDetails(obj.reviewDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2BlacklistEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2BlacklistEntry(obj: Sesv2BlacklistEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RblName': obj.rblName,
    'ListingTime': obj.listingTime,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2EventDestination
 */
export interface Sesv2EventDestination {
  /**
   * @schema Sesv2EventDestination#Name
   */
  readonly name?: string;

  /**
   * @schema Sesv2EventDestination#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Sesv2EventDestination#MatchingEventTypes
   */
  readonly matchingEventTypes?: string[];

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
 * Converts an object of type 'Sesv2EventDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2EventDestination(obj: Sesv2EventDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Enabled': obj.enabled,
    'MatchingEventTypes': obj.matchingEventTypes?.map(y => y),
    'KinesisFirehoseDestination': toJson_Sesv2KinesisFirehoseDestination(obj.kinesisFirehoseDestination),
    'CloudWatchDestination': toJson_Sesv2CloudWatchDestination(obj.cloudWatchDestination),
    'SnsDestination': toJson_Sesv2SnsDestination(obj.snsDestination),
    'PinpointDestination': toJson_Sesv2PinpointDestination(obj.pinpointDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2DedicatedIp
 */
export interface Sesv2DedicatedIp {
  /**
   * @schema Sesv2DedicatedIp#Ip
   */
  readonly ip?: string;

  /**
   * @schema Sesv2DedicatedIp#WarmupStatus
   */
  readonly warmupStatus?: string;

  /**
   * @schema Sesv2DedicatedIp#WarmupPercentage
   */
  readonly warmupPercentage?: number;

  /**
   * @schema Sesv2DedicatedIp#PoolName
   */
  readonly poolName?: string;

}

/**
 * Converts an object of type 'Sesv2DedicatedIp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DedicatedIp(obj: Sesv2DedicatedIp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
    'WarmupStatus': obj.warmupStatus,
    'WarmupPercentage': obj.warmupPercentage,
    'PoolName': obj.poolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DomainDeliverabilityTrackingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DomainDeliverabilityTrackingOption(obj: Sesv2DomainDeliverabilityTrackingOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
    'SubscriptionStartDate': obj.subscriptionStartDate,
    'InboxPlacementTrackingOption': toJson_Sesv2InboxPlacementTrackingOption(obj.inboxPlacementTrackingOption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DeliverabilityTestReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DeliverabilityTestReport(obj: Sesv2DeliverabilityTestReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportId': obj.reportId,
    'ReportName': obj.reportName,
    'Subject': obj.subject,
    'FromEmailAddress': obj.fromEmailAddress,
    'CreateDate': obj.createDate,
    'DeliverabilityTestStatus': obj.deliverabilityTestStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2PlacementStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PlacementStatistics(obj: Sesv2PlacementStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InboxPercentage': obj.inboxPercentage,
    'SpamPercentage': obj.spamPercentage,
    'MissingPercentage': obj.missingPercentage,
    'SpfPercentage': obj.spfPercentage,
    'DkimPercentage': obj.dkimPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2IspPlacement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2IspPlacement(obj: Sesv2IspPlacement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IspName': obj.ispName,
    'PlacementStatistics': toJson_Sesv2PlacementStatistics(obj.placementStatistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DomainDeliverabilityCampaign' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DomainDeliverabilityCampaign(obj: Sesv2DomainDeliverabilityCampaign | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CampaignId': obj.campaignId,
    'ImageUrl': obj.imageUrl,
    'Subject': obj.subject,
    'FromAddress': obj.fromAddress,
    'SendingIps': obj.sendingIps?.map(y => y),
    'FirstSeenDateTime': obj.firstSeenDateTime,
    'LastSeenDateTime': obj.lastSeenDateTime,
    'InboxCount': obj.inboxCount,
    'SpamCount': obj.spamCount,
    'ReadRate': obj.readRate,
    'DeleteRate': obj.deleteRate,
    'ReadDeleteRate': obj.readDeleteRate,
    'ProjectedVolume': obj.projectedVolume,
    'Esps': obj.esps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2OverallVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2OverallVolume(obj: Sesv2OverallVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeStatistics': toJson_Sesv2VolumeStatistics(obj.volumeStatistics),
    'ReadRatePercent': obj.readRatePercent,
    'DomainIspPlacements': obj.domainIspPlacements?.map(y => toJson_Sesv2DomainIspPlacement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DailyVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DailyVolume(obj: Sesv2DailyVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartDate': obj.startDate,
    'VolumeStatistics': toJson_Sesv2VolumeStatistics(obj.volumeStatistics),
    'DomainIspPlacements': obj.domainIspPlacements?.map(y => toJson_Sesv2DomainIspPlacement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2MailFromAttributes
 */
export interface Sesv2MailFromAttributes {
  /**
   * @schema Sesv2MailFromAttributes#MailFromDomain
   */
  readonly mailFromDomain?: string;

  /**
   * @schema Sesv2MailFromAttributes#MailFromDomainStatus
   */
  readonly mailFromDomainStatus?: string;

  /**
   * @schema Sesv2MailFromAttributes#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure?: string;

}

/**
 * Converts an object of type 'Sesv2MailFromAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2MailFromAttributes(obj: Sesv2MailFromAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MailFromDomain': obj.mailFromDomain,
    'MailFromDomainStatus': obj.mailFromDomainStatus,
    'BehaviorOnMxFailure': obj.behaviorOnMxFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2FailureInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2FailureInfo(obj: Sesv2FailureInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRecordsS3Url': obj.failedRecordsS3Url,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2SuppressedDestination
 */
export interface Sesv2SuppressedDestination {
  /**
   * @schema Sesv2SuppressedDestination#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Sesv2SuppressedDestination#Reason
   */
  readonly reason?: string;

  /**
   * @schema Sesv2SuppressedDestination#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema Sesv2SuppressedDestination#Attributes
   */
  readonly attributes?: Sesv2SuppressedDestinationAttributes;

}

/**
 * Converts an object of type 'Sesv2SuppressedDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SuppressedDestination(obj: Sesv2SuppressedDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
    'Reason': obj.reason,
    'LastUpdateTime': obj.lastUpdateTime,
    'Attributes': toJson_Sesv2SuppressedDestinationAttributes(obj.attributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ContactList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ContactList(obj: Sesv2ContactList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ListContactsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListContactsFilter(obj: Sesv2ListContactsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilteredStatus': obj.filteredStatus,
    'TopicFilter': toJson_Sesv2TopicFilter(obj.topicFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2Contact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Contact(obj: Sesv2Contact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
    'TopicPreferences': obj.topicPreferences?.map(y => toJson_Sesv2TopicPreference(y)),
    'TopicDefaultPreferences': obj.topicDefaultPreferences?.map(y => toJson_Sesv2TopicPreference(y)),
    'UnsubscribeAll': obj.unsubscribeAll,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2CustomVerificationEmailTemplateMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CustomVerificationEmailTemplateMetadata(obj: Sesv2CustomVerificationEmailTemplateMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'FromEmailAddress': obj.fromEmailAddress,
    'TemplateSubject': obj.templateSubject,
    'SuccessRedirectionURL': obj.successRedirectionUrl,
    'FailureRedirectionURL': obj.failureRedirectionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2IdentityInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2IdentityInfo(obj: Sesv2IdentityInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityType': obj.identityType,
    'IdentityName': obj.identityName,
    'SendingEnabled': obj.sendingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2EmailTemplateMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2EmailTemplateMetadata(obj: Sesv2EmailTemplateMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'CreatedTimestamp': obj.createdTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ImportJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ImportJobSummary(obj: Sesv2ImportJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'ImportDestination': toJson_Sesv2ImportDestination(obj.importDestination),
    'JobStatus': obj.jobStatus,
    'CreatedTimestamp': obj.createdTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2SuppressedDestinationSummary
 */
export interface Sesv2SuppressedDestinationSummary {
  /**
   * @schema Sesv2SuppressedDestinationSummary#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Sesv2SuppressedDestinationSummary#Reason
   */
  readonly reason?: string;

  /**
   * @schema Sesv2SuppressedDestinationSummary#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'Sesv2SuppressedDestinationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SuppressedDestinationSummary(obj: Sesv2SuppressedDestinationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
    'Reason': obj.reason,
    'LastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2MessageTag
 */
export interface Sesv2MessageTag {
  /**
   * @schema Sesv2MessageTag#Name
   */
  readonly name?: string;

  /**
   * @schema Sesv2MessageTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Sesv2MessageTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2MessageTag(obj: Sesv2MessageTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2BulkEmailContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2BulkEmailContent(obj: Sesv2BulkEmailContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Template': toJson_Sesv2Template(obj.template),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2BulkEmailEntry
 */
export interface Sesv2BulkEmailEntry {
  /**
   * @schema Sesv2BulkEmailEntry#Destination
   */
  readonly destination?: Sesv2Destination;

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
 * Converts an object of type 'Sesv2BulkEmailEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2BulkEmailEntry(obj: Sesv2BulkEmailEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': toJson_Sesv2Destination(obj.destination),
    'ReplacementTags': obj.replacementTags?.map(y => toJson_Sesv2MessageTag(y)),
    'ReplacementEmailContent': toJson_Sesv2ReplacementEmailContent(obj.replacementEmailContent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2BulkEmailEntryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2BulkEmailEntryResult(obj: Sesv2BulkEmailEntryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Error': obj.error,
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Destination(obj: Sesv2Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ToAddresses': obj.toAddresses?.map(y => y),
    'CcAddresses': obj.ccAddresses?.map(y => y),
    'BccAddresses': obj.bccAddresses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ListManagementOptions
 */
export interface Sesv2ListManagementOptions {
  /**
   * @schema Sesv2ListManagementOptions#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2ListManagementOptions#TopicName
   */
  readonly topicName?: string;

}

/**
 * Converts an object of type 'Sesv2ListManagementOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ListManagementOptions(obj: Sesv2ListManagementOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'TopicName': obj.topicName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2KinesisFirehoseDestination
 */
export interface Sesv2KinesisFirehoseDestination {
  /**
   * @schema Sesv2KinesisFirehoseDestination#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema Sesv2KinesisFirehoseDestination#DeliveryStreamArn
   */
  readonly deliveryStreamArn?: string;

}

/**
 * Converts an object of type 'Sesv2KinesisFirehoseDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2KinesisFirehoseDestination(obj: Sesv2KinesisFirehoseDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamRoleArn': obj.iamRoleArn,
    'DeliveryStreamArn': obj.deliveryStreamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CloudWatchDestination
 */
export interface Sesv2CloudWatchDestination {
  /**
   * @schema Sesv2CloudWatchDestination#DimensionConfigurations
   */
  readonly dimensionConfigurations?: Sesv2CloudWatchDimensionConfiguration[];

}

/**
 * Converts an object of type 'Sesv2CloudWatchDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CloudWatchDestination(obj: Sesv2CloudWatchDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionConfigurations': obj.dimensionConfigurations?.map(y => toJson_Sesv2CloudWatchDimensionConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2SnsDestination
 */
export interface Sesv2SnsDestination {
  /**
   * @schema Sesv2SnsDestination#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'Sesv2SnsDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SnsDestination(obj: Sesv2SnsDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2PinpointDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2PinpointDestination(obj: Sesv2PinpointDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationArn': obj.applicationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2Message
 */
export interface Sesv2Message {
  /**
   * @schema Sesv2Message#Subject
   */
  readonly subject?: Sesv2Content;

  /**
   * @schema Sesv2Message#Body
   */
  readonly body?: Sesv2Body;

}

/**
 * Converts an object of type 'Sesv2Message' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Message(obj: Sesv2Message | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subject': toJson_Sesv2Content(obj.subject),
    'Body': toJson_Sesv2Body(obj.body),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2RawMessage
 */
export interface Sesv2RawMessage {
  /**
   * @schema Sesv2RawMessage#Data
   */
  readonly data?: any;

}

/**
 * Converts an object of type 'Sesv2RawMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2RawMessage(obj: Sesv2RawMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2Template' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Template(obj: Sesv2Template | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateName': obj.templateName,
    'TemplateArn': obj.templateArn,
    'TemplateData': obj.templateData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2SuppressionListDestination
 */
export interface Sesv2SuppressionListDestination {
  /**
   * @schema Sesv2SuppressionListDestination#SuppressionListImportAction
   */
  readonly suppressionListImportAction?: string;

}

/**
 * Converts an object of type 'Sesv2SuppressionListDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SuppressionListDestination(obj: Sesv2SuppressionListDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuppressionListImportAction': obj.suppressionListImportAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ContactListDestination
 */
export interface Sesv2ContactListDestination {
  /**
   * @schema Sesv2ContactListDestination#ContactListName
   */
  readonly contactListName?: string;

  /**
   * @schema Sesv2ContactListDestination#ContactListImportAction
   */
  readonly contactListImportAction?: string;

}

/**
 * Converts an object of type 'Sesv2ContactListDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ContactListDestination(obj: Sesv2ContactListDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactListName': obj.contactListName,
    'ContactListImportAction': obj.contactListImportAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ReviewDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ReviewDetails(obj: Sesv2ReviewDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CaseId': obj.caseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2InboxPlacementTrackingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2InboxPlacementTrackingOption(obj: Sesv2InboxPlacementTrackingOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Global': obj.global,
    'TrackedIsps': obj.trackedIsps?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2VolumeStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2VolumeStatistics(obj: Sesv2VolumeStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InboxRawCount': obj.inboxRawCount,
    'SpamRawCount': obj.spamRawCount,
    'ProjectedInbox': obj.projectedInbox,
    'ProjectedSpam': obj.projectedSpam,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2DomainIspPlacement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2DomainIspPlacement(obj: Sesv2DomainIspPlacement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IspName': obj.ispName,
    'InboxRawCount': obj.inboxRawCount,
    'SpamRawCount': obj.spamRawCount,
    'InboxPercentage': obj.inboxPercentage,
    'SpamPercentage': obj.spamPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2SuppressedDestinationAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2SuppressedDestinationAttributes(obj: Sesv2SuppressedDestinationAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
    'FeedbackId': obj.feedbackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2TopicFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2TopicFilter(obj: Sesv2TopicFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicName': obj.topicName,
    'UseDefaultIfPreferenceUnavailable': obj.useDefaultIfPreferenceUnavailable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2ReplacementEmailContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ReplacementEmailContent(obj: Sesv2ReplacementEmailContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplacementTemplate': toJson_Sesv2ReplacementTemplate(obj.replacementTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2CloudWatchDimensionConfiguration
 */
export interface Sesv2CloudWatchDimensionConfiguration {
  /**
   * @schema Sesv2CloudWatchDimensionConfiguration#DimensionName
   */
  readonly dimensionName?: string;

  /**
   * @schema Sesv2CloudWatchDimensionConfiguration#DimensionValueSource
   */
  readonly dimensionValueSource?: string;

  /**
   * @schema Sesv2CloudWatchDimensionConfiguration#DefaultDimensionValue
   */
  readonly defaultDimensionValue?: string;

}

/**
 * Converts an object of type 'Sesv2CloudWatchDimensionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2CloudWatchDimensionConfiguration(obj: Sesv2CloudWatchDimensionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionName': obj.dimensionName,
    'DimensionValueSource': obj.dimensionValueSource,
    'DefaultDimensionValue': obj.defaultDimensionValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2Content
 */
export interface Sesv2Content {
  /**
   * @schema Sesv2Content#Data
   */
  readonly data?: string;

  /**
   * @schema Sesv2Content#Charset
   */
  readonly charset?: string;

}

/**
 * Converts an object of type 'Sesv2Content' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Content(obj: Sesv2Content | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data,
    'Charset': obj.charset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Sesv2Body' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2Body(obj: Sesv2Body | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': toJson_Sesv2Content(obj.text),
    'Html': toJson_Sesv2Content(obj.html),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Sesv2ReplacementTemplate
 */
export interface Sesv2ReplacementTemplate {
  /**
   * @schema Sesv2ReplacementTemplate#ReplacementTemplateData
   */
  readonly replacementTemplateData?: string;

}

/**
 * Converts an object of type 'Sesv2ReplacementTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Sesv2ReplacementTemplate(obj: Sesv2ReplacementTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplacementTemplateData': obj.replacementTemplateData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
