/**
 * @schema PinpointEmailCreateConfigurationSetRequest
 */
export interface PinpointEmailCreateConfigurationSetRequest {
  /**
   * @schema PinpointEmailCreateConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

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
 * Converts an object of type 'PinpointEmailCreateConfigurationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateConfigurationSetRequest(obj: PinpointEmailCreateConfigurationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'TrackingOptions': toJson_PinpointEmailTrackingOptions(obj.trackingOptions),
    'DeliveryOptions': toJson_PinpointEmailDeliveryOptions(obj.deliveryOptions),
    'ReputationOptions': toJson_PinpointEmailReputationOptions(obj.reputationOptions),
    'SendingOptions': toJson_PinpointEmailSendingOptions(obj.sendingOptions),
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailCreateConfigurationSetResponse
 */
export interface PinpointEmailCreateConfigurationSetResponse {
}

/**
 * Converts an object of type 'PinpointEmailCreateConfigurationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateConfigurationSetResponse(obj: PinpointEmailCreateConfigurationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest
 */
export interface PinpointEmailCreateConfigurationSetEventDestinationRequest {
  /**
   * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName?: string;

  /**
   * @schema PinpointEmailCreateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination?: PinpointEmailEventDestinationDefinition;

}

/**
 * Converts an object of type 'PinpointEmailCreateConfigurationSetEventDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateConfigurationSetEventDestinationRequest(obj: PinpointEmailCreateConfigurationSetEventDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'EventDestinationName': obj.eventDestinationName,
    'EventDestination': toJson_PinpointEmailEventDestinationDefinition(obj.eventDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailCreateConfigurationSetEventDestinationResponse
 */
export interface PinpointEmailCreateConfigurationSetEventDestinationResponse {
}

/**
 * Converts an object of type 'PinpointEmailCreateConfigurationSetEventDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateConfigurationSetEventDestinationResponse(obj: PinpointEmailCreateConfigurationSetEventDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailCreateDedicatedIpPoolRequest
 */
export interface PinpointEmailCreateDedicatedIpPoolRequest {
  /**
   * @schema PinpointEmailCreateDedicatedIpPoolRequest#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema PinpointEmailCreateDedicatedIpPoolRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * Converts an object of type 'PinpointEmailCreateDedicatedIpPoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateDedicatedIpPoolRequest(obj: PinpointEmailCreateDedicatedIpPoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolName': obj.poolName,
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailCreateDedicatedIpPoolResponse
 */
export interface PinpointEmailCreateDedicatedIpPoolResponse {
}

/**
 * Converts an object of type 'PinpointEmailCreateDedicatedIpPoolResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateDedicatedIpPoolResponse(obj: PinpointEmailCreateDedicatedIpPoolResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly fromEmailAddress?: string;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportRequest#Content
   */
  readonly content?: PinpointEmailEmailContent;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * Converts an object of type 'PinpointEmailCreateDeliverabilityTestReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateDeliverabilityTestReportRequest(obj: PinpointEmailCreateDeliverabilityTestReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportName': obj.reportName,
    'FromEmailAddress': obj.fromEmailAddress,
    'Content': toJson_PinpointEmailEmailContent(obj.content),
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailCreateDeliverabilityTestReportResponse
 */
export interface PinpointEmailCreateDeliverabilityTestReportResponse {
  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportResponse#ReportId
   */
  readonly reportId?: string;

  /**
   * @schema PinpointEmailCreateDeliverabilityTestReportResponse#DeliverabilityTestStatus
   */
  readonly deliverabilityTestStatus?: string;

}

/**
 * Converts an object of type 'PinpointEmailCreateDeliverabilityTestReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateDeliverabilityTestReportResponse(obj: PinpointEmailCreateDeliverabilityTestReportResponse | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailCreateEmailIdentityRequest
 */
export interface PinpointEmailCreateEmailIdentityRequest {
  /**
   * @schema PinpointEmailCreateEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema PinpointEmailCreateEmailIdentityRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * Converts an object of type 'PinpointEmailCreateEmailIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateEmailIdentityRequest(obj: PinpointEmailCreateEmailIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailCreateEmailIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCreateEmailIdentityResponse(obj: PinpointEmailCreateEmailIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityType': obj.identityType,
    'VerifiedForSendingStatus': obj.verifiedForSendingStatus,
    'DkimAttributes': toJson_PinpointEmailDkimAttributes(obj.dkimAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteConfigurationSetRequest
 */
export interface PinpointEmailDeleteConfigurationSetRequest {
  /**
   * @schema PinpointEmailDeleteConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'PinpointEmailDeleteConfigurationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteConfigurationSetRequest(obj: PinpointEmailDeleteConfigurationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteConfigurationSetResponse
 */
export interface PinpointEmailDeleteConfigurationSetResponse {
}

/**
 * Converts an object of type 'PinpointEmailDeleteConfigurationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteConfigurationSetResponse(obj: PinpointEmailDeleteConfigurationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteConfigurationSetEventDestinationRequest
 */
export interface PinpointEmailDeleteConfigurationSetEventDestinationRequest {
  /**
   * @schema PinpointEmailDeleteConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailDeleteConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName?: string;

}

/**
 * Converts an object of type 'PinpointEmailDeleteConfigurationSetEventDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteConfigurationSetEventDestinationRequest(obj: PinpointEmailDeleteConfigurationSetEventDestinationRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailDeleteConfigurationSetEventDestinationResponse
 */
export interface PinpointEmailDeleteConfigurationSetEventDestinationResponse {
}

/**
 * Converts an object of type 'PinpointEmailDeleteConfigurationSetEventDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteConfigurationSetEventDestinationResponse(obj: PinpointEmailDeleteConfigurationSetEventDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteDedicatedIpPoolRequest
 */
export interface PinpointEmailDeleteDedicatedIpPoolRequest {
  /**
   * @schema PinpointEmailDeleteDedicatedIpPoolRequest#PoolName
   */
  readonly poolName?: string;

}

/**
 * Converts an object of type 'PinpointEmailDeleteDedicatedIpPoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteDedicatedIpPoolRequest(obj: PinpointEmailDeleteDedicatedIpPoolRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolName': obj.poolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteDedicatedIpPoolResponse
 */
export interface PinpointEmailDeleteDedicatedIpPoolResponse {
}

/**
 * Converts an object of type 'PinpointEmailDeleteDedicatedIpPoolResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteDedicatedIpPoolResponse(obj: PinpointEmailDeleteDedicatedIpPoolResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteEmailIdentityRequest
 */
export interface PinpointEmailDeleteEmailIdentityRequest {
  /**
   * @schema PinpointEmailDeleteEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

}

/**
 * Converts an object of type 'PinpointEmailDeleteEmailIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteEmailIdentityRequest(obj: PinpointEmailDeleteEmailIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDeleteEmailIdentityResponse
 */
export interface PinpointEmailDeleteEmailIdentityResponse {
}

/**
 * Converts an object of type 'PinpointEmailDeleteEmailIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeleteEmailIdentityResponse(obj: PinpointEmailDeleteEmailIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetAccountRequest
 */
export interface PinpointEmailGetAccountRequest {
}

/**
 * Converts an object of type 'PinpointEmailGetAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetAccountRequest(obj: PinpointEmailGetAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailGetAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetAccountResponse(obj: PinpointEmailGetAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SendQuota': toJson_PinpointEmailSendQuota(obj.sendQuota),
    'SendingEnabled': obj.sendingEnabled,
    'DedicatedIpAutoWarmupEnabled': obj.dedicatedIpAutoWarmupEnabled,
    'EnforcementStatus': obj.enforcementStatus,
    'ProductionAccessEnabled': obj.productionAccessEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetBlacklistReportsRequest
 */
export interface PinpointEmailGetBlacklistReportsRequest {
  /**
   * @schema PinpointEmailGetBlacklistReportsRequest#BlacklistItemNames
   */
  readonly blacklistItemNames?: string[];

}

/**
 * Converts an object of type 'PinpointEmailGetBlacklistReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetBlacklistReportsRequest(obj: PinpointEmailGetBlacklistReportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlacklistItemNames': obj.blacklistItemNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetBlacklistReportsResponse
 */
export interface PinpointEmailGetBlacklistReportsResponse {
  /**
   * @schema PinpointEmailGetBlacklistReportsResponse#BlacklistReport
   */
  readonly blacklistReport?: { [key: string]: PinpointEmailBlacklistEntry[] };

}

/**
 * Converts an object of type 'PinpointEmailGetBlacklistReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetBlacklistReportsResponse(obj: PinpointEmailGetBlacklistReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlacklistReport': ((obj.blacklistReport) === undefined) ? undefined : (Object.entries(obj.blacklistReport).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_PinpointEmailBlacklistEntry(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetConfigurationSetRequest
 */
export interface PinpointEmailGetConfigurationSetRequest {
  /**
   * @schema PinpointEmailGetConfigurationSetRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetConfigurationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetConfigurationSetRequest(obj: PinpointEmailGetConfigurationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailGetConfigurationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetConfigurationSetResponse(obj: PinpointEmailGetConfigurationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'TrackingOptions': toJson_PinpointEmailTrackingOptions(obj.trackingOptions),
    'DeliveryOptions': toJson_PinpointEmailDeliveryOptions(obj.deliveryOptions),
    'ReputationOptions': toJson_PinpointEmailReputationOptions(obj.reputationOptions),
    'SendingOptions': toJson_PinpointEmailSendingOptions(obj.sendingOptions),
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetConfigurationSetEventDestinationsRequest
 */
export interface PinpointEmailGetConfigurationSetEventDestinationsRequest {
  /**
   * @schema PinpointEmailGetConfigurationSetEventDestinationsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetConfigurationSetEventDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetConfigurationSetEventDestinationsRequest(obj: PinpointEmailGetConfigurationSetEventDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailGetConfigurationSetEventDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetConfigurationSetEventDestinationsResponse(obj: PinpointEmailGetConfigurationSetEventDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventDestinations': obj.eventDestinations?.map(y => toJson_PinpointEmailEventDestination(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDedicatedIpRequest
 */
export interface PinpointEmailGetDedicatedIpRequest {
  /**
   * @schema PinpointEmailGetDedicatedIpRequest#Ip
   */
  readonly ip?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetDedicatedIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDedicatedIpRequest(obj: PinpointEmailGetDedicatedIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailGetDedicatedIpResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDedicatedIpResponse(obj: PinpointEmailGetDedicatedIpResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedIp': toJson_PinpointEmailDedicatedIp(obj.dedicatedIp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailGetDedicatedIpsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDedicatedIpsRequest(obj: PinpointEmailGetDedicatedIpsRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailGetDedicatedIpsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDedicatedIpsResponse(obj: PinpointEmailGetDedicatedIpsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedIps': obj.dedicatedIps?.map(y => toJson_PinpointEmailDedicatedIp(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDeliverabilityDashboardOptionsRequest
 */
export interface PinpointEmailGetDeliverabilityDashboardOptionsRequest {
}

/**
 * Converts an object of type 'PinpointEmailGetDeliverabilityDashboardOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDeliverabilityDashboardOptionsRequest(obj: PinpointEmailGetDeliverabilityDashboardOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse
 */
export interface PinpointEmailGetDeliverabilityDashboardOptionsResponse {
  /**
   * @schema PinpointEmailGetDeliverabilityDashboardOptionsResponse#DashboardEnabled
   */
  readonly dashboardEnabled?: boolean;

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
 * Converts an object of type 'PinpointEmailGetDeliverabilityDashboardOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDeliverabilityDashboardOptionsResponse(obj: PinpointEmailGetDeliverabilityDashboardOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardEnabled': obj.dashboardEnabled,
    'SubscriptionExpiryDate': obj.subscriptionExpiryDate,
    'AccountStatus': obj.accountStatus,
    'ActiveSubscribedDomains': obj.activeSubscribedDomains?.map(y => toJson_PinpointEmailDomainDeliverabilityTrackingOption(y)),
    'PendingExpirationSubscribedDomains': obj.pendingExpirationSubscribedDomains?.map(y => toJson_PinpointEmailDomainDeliverabilityTrackingOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDeliverabilityTestReportRequest
 */
export interface PinpointEmailGetDeliverabilityTestReportRequest {
  /**
   * @schema PinpointEmailGetDeliverabilityTestReportRequest#ReportId
   */
  readonly reportId?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetDeliverabilityTestReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDeliverabilityTestReportRequest(obj: PinpointEmailGetDeliverabilityTestReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportId': obj.reportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDeliverabilityTestReportResponse
 */
export interface PinpointEmailGetDeliverabilityTestReportResponse {
  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#DeliverabilityTestReport
   */
  readonly deliverabilityTestReport?: PinpointEmailDeliverabilityTestReport;

  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#OverallPlacement
   */
  readonly overallPlacement?: PinpointEmailPlacementStatistics;

  /**
   * @schema PinpointEmailGetDeliverabilityTestReportResponse#IspPlacements
   */
  readonly ispPlacements?: PinpointEmailIspPlacement[];

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
 * Converts an object of type 'PinpointEmailGetDeliverabilityTestReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDeliverabilityTestReportResponse(obj: PinpointEmailGetDeliverabilityTestReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliverabilityTestReport': toJson_PinpointEmailDeliverabilityTestReport(obj.deliverabilityTestReport),
    'OverallPlacement': toJson_PinpointEmailPlacementStatistics(obj.overallPlacement),
    'IspPlacements': obj.ispPlacements?.map(y => toJson_PinpointEmailIspPlacement(y)),
    'Message': obj.message,
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDomainDeliverabilityCampaignRequest
 */
export interface PinpointEmailGetDomainDeliverabilityCampaignRequest {
  /**
   * @schema PinpointEmailGetDomainDeliverabilityCampaignRequest#CampaignId
   */
  readonly campaignId?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetDomainDeliverabilityCampaignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDomainDeliverabilityCampaignRequest(obj: PinpointEmailGetDomainDeliverabilityCampaignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CampaignId': obj.campaignId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDomainDeliverabilityCampaignResponse
 */
export interface PinpointEmailGetDomainDeliverabilityCampaignResponse {
  /**
   * @schema PinpointEmailGetDomainDeliverabilityCampaignResponse#DomainDeliverabilityCampaign
   */
  readonly domainDeliverabilityCampaign?: PinpointEmailDomainDeliverabilityCampaign;

}

/**
 * Converts an object of type 'PinpointEmailGetDomainDeliverabilityCampaignResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDomainDeliverabilityCampaignResponse(obj: PinpointEmailGetDomainDeliverabilityCampaignResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainDeliverabilityCampaign': toJson_PinpointEmailDomainDeliverabilityCampaign(obj.domainDeliverabilityCampaign),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetDomainStatisticsReportRequest
 */
export interface PinpointEmailGetDomainStatisticsReportRequest {
  /**
   * @schema PinpointEmailGetDomainStatisticsReportRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema PinpointEmailGetDomainStatisticsReportRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema PinpointEmailGetDomainStatisticsReportRequest#EndDate
   */
  readonly endDate?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetDomainStatisticsReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDomainStatisticsReportRequest(obj: PinpointEmailGetDomainStatisticsReportRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailGetDomainStatisticsReportResponse
 */
export interface PinpointEmailGetDomainStatisticsReportResponse {
  /**
   * @schema PinpointEmailGetDomainStatisticsReportResponse#OverallVolume
   */
  readonly overallVolume?: PinpointEmailOverallVolume;

  /**
   * @schema PinpointEmailGetDomainStatisticsReportResponse#DailyVolumes
   */
  readonly dailyVolumes?: PinpointEmailDailyVolume[];

}

/**
 * Converts an object of type 'PinpointEmailGetDomainStatisticsReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetDomainStatisticsReportResponse(obj: PinpointEmailGetDomainStatisticsReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OverallVolume': toJson_PinpointEmailOverallVolume(obj.overallVolume),
    'DailyVolumes': obj.dailyVolumes?.map(y => toJson_PinpointEmailDailyVolume(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailGetEmailIdentityRequest
 */
export interface PinpointEmailGetEmailIdentityRequest {
  /**
   * @schema PinpointEmailGetEmailIdentityRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

}

/**
 * Converts an object of type 'PinpointEmailGetEmailIdentityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetEmailIdentityRequest(obj: PinpointEmailGetEmailIdentityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentity': obj.emailIdentity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailGetEmailIdentityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailGetEmailIdentityResponse(obj: PinpointEmailGetEmailIdentityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityType': obj.identityType,
    'FeedbackForwardingStatus': obj.feedbackForwardingStatus,
    'VerifiedForSendingStatus': obj.verifiedForSendingStatus,
    'DkimAttributes': toJson_PinpointEmailDkimAttributes(obj.dkimAttributes),
    'MailFromAttributes': toJson_PinpointEmailMailFromAttributes(obj.mailFromAttributes),
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailListConfigurationSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListConfigurationSetsRequest(obj: PinpointEmailListConfigurationSetsRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailListConfigurationSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListConfigurationSetsResponse(obj: PinpointEmailListConfigurationSetsResponse | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailListDedicatedIpPoolsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListDedicatedIpPoolsRequest(obj: PinpointEmailListDedicatedIpPoolsRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailListDedicatedIpPoolsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListDedicatedIpPoolsResponse(obj: PinpointEmailListDedicatedIpPoolsResponse | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailListDeliverabilityTestReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListDeliverabilityTestReportsRequest(obj: PinpointEmailListDeliverabilityTestReportsRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailListDeliverabilityTestReportsResponse
 */
export interface PinpointEmailListDeliverabilityTestReportsResponse {
  /**
   * @schema PinpointEmailListDeliverabilityTestReportsResponse#DeliverabilityTestReports
   */
  readonly deliverabilityTestReports?: PinpointEmailDeliverabilityTestReport[];

  /**
   * @schema PinpointEmailListDeliverabilityTestReportsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PinpointEmailListDeliverabilityTestReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListDeliverabilityTestReportsResponse(obj: PinpointEmailListDeliverabilityTestReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliverabilityTestReports': obj.deliverabilityTestReports?.map(y => toJson_PinpointEmailDeliverabilityTestReport(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest
 */
export interface PinpointEmailListDomainDeliverabilityCampaignsRequest {
  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsRequest#SubscribedDomain
   */
  readonly subscribedDomain?: string;

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
 * Converts an object of type 'PinpointEmailListDomainDeliverabilityCampaignsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListDomainDeliverabilityCampaignsRequest(obj: PinpointEmailListDomainDeliverabilityCampaignsRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailListDomainDeliverabilityCampaignsResponse
 */
export interface PinpointEmailListDomainDeliverabilityCampaignsResponse {
  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsResponse#DomainDeliverabilityCampaigns
   */
  readonly domainDeliverabilityCampaigns?: PinpointEmailDomainDeliverabilityCampaign[];

  /**
   * @schema PinpointEmailListDomainDeliverabilityCampaignsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'PinpointEmailListDomainDeliverabilityCampaignsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListDomainDeliverabilityCampaignsResponse(obj: PinpointEmailListDomainDeliverabilityCampaignsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainDeliverabilityCampaigns': obj.domainDeliverabilityCampaigns?.map(y => toJson_PinpointEmailDomainDeliverabilityCampaign(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailListEmailIdentitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListEmailIdentitiesRequest(obj: PinpointEmailListEmailIdentitiesRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailListEmailIdentitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListEmailIdentitiesResponse(obj: PinpointEmailListEmailIdentitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailIdentities': obj.emailIdentities?.map(y => toJson_PinpointEmailIdentityInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailListTagsForResourceRequest
 */
export interface PinpointEmailListTagsForResourceRequest {
  /**
   * @schema PinpointEmailListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'PinpointEmailListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListTagsForResourceRequest(obj: PinpointEmailListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailListTagsForResourceResponse
 */
export interface PinpointEmailListTagsForResourceResponse {
  /**
   * @schema PinpointEmailListTagsForResourceResponse#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * Converts an object of type 'PinpointEmailListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailListTagsForResourceResponse(obj: PinpointEmailListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest(obj: PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoWarmupEnabled': obj.autoWarmupEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse
 */
export interface PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse(obj: PinpointEmailPutAccountDedicatedIpWarmupAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailPutAccountSendingAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutAccountSendingAttributesRequest(obj: PinpointEmailPutAccountSendingAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SendingEnabled': obj.sendingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutAccountSendingAttributesResponse
 */
export interface PinpointEmailPutAccountSendingAttributesResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutAccountSendingAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutAccountSendingAttributesResponse(obj: PinpointEmailPutAccountSendingAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutConfigurationSetDeliveryOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetDeliveryOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetDeliveryOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

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
 * Converts an object of type 'PinpointEmailPutConfigurationSetDeliveryOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetDeliveryOptionsRequest(obj: PinpointEmailPutConfigurationSetDeliveryOptionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutConfigurationSetDeliveryOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetDeliveryOptionsResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetDeliveryOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetDeliveryOptionsResponse(obj: PinpointEmailPutConfigurationSetDeliveryOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutConfigurationSetReputationOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetReputationOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetReputationOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailPutConfigurationSetReputationOptionsRequest#ReputationMetricsEnabled
   */
  readonly reputationMetricsEnabled?: boolean;

}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetReputationOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetReputationOptionsRequest(obj: PinpointEmailPutConfigurationSetReputationOptionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutConfigurationSetReputationOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetReputationOptionsResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetReputationOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetReputationOptionsResponse(obj: PinpointEmailPutConfigurationSetReputationOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutConfigurationSetSendingOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetSendingOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetSendingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailPutConfigurationSetSendingOptionsRequest#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetSendingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetSendingOptionsRequest(obj: PinpointEmailPutConfigurationSetSendingOptionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutConfigurationSetSendingOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetSendingOptionsResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetSendingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetSendingOptionsResponse(obj: PinpointEmailPutConfigurationSetSendingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutConfigurationSetTrackingOptionsRequest
 */
export interface PinpointEmailPutConfigurationSetTrackingOptionsRequest {
  /**
   * @schema PinpointEmailPutConfigurationSetTrackingOptionsRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailPutConfigurationSetTrackingOptionsRequest#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetTrackingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetTrackingOptionsRequest(obj: PinpointEmailPutConfigurationSetTrackingOptionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutConfigurationSetTrackingOptionsResponse
 */
export interface PinpointEmailPutConfigurationSetTrackingOptionsResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutConfigurationSetTrackingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutConfigurationSetTrackingOptionsResponse(obj: PinpointEmailPutConfigurationSetTrackingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutDedicatedIpInPoolRequest
 */
export interface PinpointEmailPutDedicatedIpInPoolRequest {
  /**
   * @schema PinpointEmailPutDedicatedIpInPoolRequest#Ip
   */
  readonly ip?: string;

  /**
   * @schema PinpointEmailPutDedicatedIpInPoolRequest#DestinationPoolName
   */
  readonly destinationPoolName?: string;

}

/**
 * Converts an object of type 'PinpointEmailPutDedicatedIpInPoolRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutDedicatedIpInPoolRequest(obj: PinpointEmailPutDedicatedIpInPoolRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutDedicatedIpInPoolResponse
 */
export interface PinpointEmailPutDedicatedIpInPoolResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutDedicatedIpInPoolResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutDedicatedIpInPoolResponse(obj: PinpointEmailPutDedicatedIpInPoolResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutDedicatedIpWarmupAttributesRequest
 */
export interface PinpointEmailPutDedicatedIpWarmupAttributesRequest {
  /**
   * @schema PinpointEmailPutDedicatedIpWarmupAttributesRequest#Ip
   */
  readonly ip?: string;

  /**
   * @schema PinpointEmailPutDedicatedIpWarmupAttributesRequest#WarmupPercentage
   */
  readonly warmupPercentage?: number;

}

/**
 * Converts an object of type 'PinpointEmailPutDedicatedIpWarmupAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutDedicatedIpWarmupAttributesRequest(obj: PinpointEmailPutDedicatedIpWarmupAttributesRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutDedicatedIpWarmupAttributesResponse
 */
export interface PinpointEmailPutDedicatedIpWarmupAttributesResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutDedicatedIpWarmupAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutDedicatedIpWarmupAttributesResponse(obj: PinpointEmailPutDedicatedIpWarmupAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutDeliverabilityDashboardOptionRequest
 */
export interface PinpointEmailPutDeliverabilityDashboardOptionRequest {
  /**
   * @schema PinpointEmailPutDeliverabilityDashboardOptionRequest#DashboardEnabled
   */
  readonly dashboardEnabled?: boolean;

  /**
   * @schema PinpointEmailPutDeliverabilityDashboardOptionRequest#SubscribedDomains
   */
  readonly subscribedDomains?: PinpointEmailDomainDeliverabilityTrackingOption[];

}

/**
 * Converts an object of type 'PinpointEmailPutDeliverabilityDashboardOptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutDeliverabilityDashboardOptionRequest(obj: PinpointEmailPutDeliverabilityDashboardOptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardEnabled': obj.dashboardEnabled,
    'SubscribedDomains': obj.subscribedDomains?.map(y => toJson_PinpointEmailDomainDeliverabilityTrackingOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutDeliverabilityDashboardOptionResponse
 */
export interface PinpointEmailPutDeliverabilityDashboardOptionResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutDeliverabilityDashboardOptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutDeliverabilityDashboardOptionResponse(obj: PinpointEmailPutDeliverabilityDashboardOptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutEmailIdentityDkimAttributesRequest
 */
export interface PinpointEmailPutEmailIdentityDkimAttributesRequest {
  /**
   * @schema PinpointEmailPutEmailIdentityDkimAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema PinpointEmailPutEmailIdentityDkimAttributesRequest#SigningEnabled
   */
  readonly signingEnabled?: boolean;

}

/**
 * Converts an object of type 'PinpointEmailPutEmailIdentityDkimAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutEmailIdentityDkimAttributesRequest(obj: PinpointEmailPutEmailIdentityDkimAttributesRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutEmailIdentityDkimAttributesResponse
 */
export interface PinpointEmailPutEmailIdentityDkimAttributesResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutEmailIdentityDkimAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutEmailIdentityDkimAttributesResponse(obj: PinpointEmailPutEmailIdentityDkimAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutEmailIdentityFeedbackAttributesRequest
 */
export interface PinpointEmailPutEmailIdentityFeedbackAttributesRequest {
  /**
   * @schema PinpointEmailPutEmailIdentityFeedbackAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

  /**
   * @schema PinpointEmailPutEmailIdentityFeedbackAttributesRequest#EmailForwardingEnabled
   */
  readonly emailForwardingEnabled?: boolean;

}

/**
 * Converts an object of type 'PinpointEmailPutEmailIdentityFeedbackAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutEmailIdentityFeedbackAttributesRequest(obj: PinpointEmailPutEmailIdentityFeedbackAttributesRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutEmailIdentityFeedbackAttributesResponse
 */
export interface PinpointEmailPutEmailIdentityFeedbackAttributesResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutEmailIdentityFeedbackAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutEmailIdentityFeedbackAttributesResponse(obj: PinpointEmailPutEmailIdentityFeedbackAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailPutEmailIdentityMailFromAttributesRequest
 */
export interface PinpointEmailPutEmailIdentityMailFromAttributesRequest {
  /**
   * @schema PinpointEmailPutEmailIdentityMailFromAttributesRequest#EmailIdentity
   */
  readonly emailIdentity?: string;

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
 * Converts an object of type 'PinpointEmailPutEmailIdentityMailFromAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutEmailIdentityMailFromAttributesRequest(obj: PinpointEmailPutEmailIdentityMailFromAttributesRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailPutEmailIdentityMailFromAttributesResponse
 */
export interface PinpointEmailPutEmailIdentityMailFromAttributesResponse {
}

/**
 * Converts an object of type 'PinpointEmailPutEmailIdentityMailFromAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPutEmailIdentityMailFromAttributesResponse(obj: PinpointEmailPutEmailIdentityMailFromAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly destination?: PinpointEmailDestination;

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
  readonly content?: PinpointEmailEmailContent;

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
 * Converts an object of type 'PinpointEmailSendEmailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailSendEmailRequest(obj: PinpointEmailSendEmailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromEmailAddress': obj.fromEmailAddress,
    'Destination': toJson_PinpointEmailDestination(obj.destination),
    'ReplyToAddresses': obj.replyToAddresses?.map(y => y),
    'FeedbackForwardingEmailAddress': obj.feedbackForwardingEmailAddress,
    'Content': toJson_PinpointEmailEmailContent(obj.content),
    'EmailTags': obj.emailTags?.map(y => toJson_PinpointEmailMessageTag(y)),
    'ConfigurationSetName': obj.configurationSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailSendEmailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailSendEmailResponse(obj: PinpointEmailSendEmailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailTagResourceRequest
 */
export interface PinpointEmailTagResourceRequest {
  /**
   * @schema PinpointEmailTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema PinpointEmailTagResourceRequest#Tags
   */
  readonly tags?: PinpointEmailTag[];

}

/**
 * Converts an object of type 'PinpointEmailTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailTagResourceRequest(obj: PinpointEmailTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_PinpointEmailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailTagResourceResponse
 */
export interface PinpointEmailTagResourceResponse {
}

/**
 * Converts an object of type 'PinpointEmailTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailTagResourceResponse(obj: PinpointEmailTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailUntagResourceRequest
 */
export interface PinpointEmailUntagResourceRequest {
  /**
   * @schema PinpointEmailUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema PinpointEmailUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'PinpointEmailUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailUntagResourceRequest(obj: PinpointEmailUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailUntagResourceResponse
 */
export interface PinpointEmailUntagResourceResponse {
}

/**
 * Converts an object of type 'PinpointEmailUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailUntagResourceResponse(obj: PinpointEmailUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest
 */
export interface PinpointEmailUpdateConfigurationSetEventDestinationRequest {
  /**
   * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest#ConfigurationSetName
   */
  readonly configurationSetName?: string;

  /**
   * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest#EventDestinationName
   */
  readonly eventDestinationName?: string;

  /**
   * @schema PinpointEmailUpdateConfigurationSetEventDestinationRequest#EventDestination
   */
  readonly eventDestination?: PinpointEmailEventDestinationDefinition;

}

/**
 * Converts an object of type 'PinpointEmailUpdateConfigurationSetEventDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailUpdateConfigurationSetEventDestinationRequest(obj: PinpointEmailUpdateConfigurationSetEventDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationSetName': obj.configurationSetName,
    'EventDestinationName': obj.eventDestinationName,
    'EventDestination': toJson_PinpointEmailEventDestinationDefinition(obj.eventDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailUpdateConfigurationSetEventDestinationResponse
 */
export interface PinpointEmailUpdateConfigurationSetEventDestinationResponse {
}

/**
 * Converts an object of type 'PinpointEmailUpdateConfigurationSetEventDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailUpdateConfigurationSetEventDestinationResponse(obj: PinpointEmailUpdateConfigurationSetEventDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailTrackingOptions
 */
export interface PinpointEmailTrackingOptions {
  /**
   * @schema PinpointEmailTrackingOptions#CustomRedirectDomain
   */
  readonly customRedirectDomain?: string;

}

/**
 * Converts an object of type 'PinpointEmailTrackingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailTrackingOptions(obj: PinpointEmailTrackingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomRedirectDomain': obj.customRedirectDomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailDeliveryOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeliveryOptions(obj: PinpointEmailDeliveryOptions | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailReputationOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailReputationOptions(obj: PinpointEmailReputationOptions | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailSendingOptions
 */
export interface PinpointEmailSendingOptions {
  /**
   * @schema PinpointEmailSendingOptions#SendingEnabled
   */
  readonly sendingEnabled?: boolean;

}

/**
 * Converts an object of type 'PinpointEmailSendingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailSendingOptions(obj: PinpointEmailSendingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SendingEnabled': obj.sendingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailTag
 */
export interface PinpointEmailTag {
  /**
   * @schema PinpointEmailTag#Key
   */
  readonly key?: string;

  /**
   * @schema PinpointEmailTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'PinpointEmailTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailTag(obj: PinpointEmailTag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailEventDestinationDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailEventDestinationDefinition(obj: PinpointEmailEventDestinationDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'MatchingEventTypes': obj.matchingEventTypes?.map(y => y),
    'KinesisFirehoseDestination': toJson_PinpointEmailKinesisFirehoseDestination(obj.kinesisFirehoseDestination),
    'CloudWatchDestination': toJson_PinpointEmailCloudWatchDestination(obj.cloudWatchDestination),
    'SnsDestination': toJson_PinpointEmailSnsDestination(obj.snsDestination),
    'PinpointDestination': toJson_PinpointEmailPinpointDestination(obj.pinpointDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailEmailContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailEmailContent(obj: PinpointEmailEmailContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Simple': toJson_PinpointEmailMessage(obj.simple),
    'Raw': toJson_PinpointEmailRawMessage(obj.raw),
    'Template': toJson_PinpointEmailTemplate(obj.template),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailDkimAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDkimAttributes(obj: PinpointEmailDkimAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SigningEnabled': obj.signingEnabled,
    'Status': obj.status,
    'Tokens': obj.tokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailSendQuota' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailSendQuota(obj: PinpointEmailSendQuota | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailBlacklistEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailBlacklistEntry(obj: PinpointEmailBlacklistEntry | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailEventDestination
 */
export interface PinpointEmailEventDestination {
  /**
   * @schema PinpointEmailEventDestination#Name
   */
  readonly name?: string;

  /**
   * @schema PinpointEmailEventDestination#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema PinpointEmailEventDestination#MatchingEventTypes
   */
  readonly matchingEventTypes?: string[];

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
 * Converts an object of type 'PinpointEmailEventDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailEventDestination(obj: PinpointEmailEventDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Enabled': obj.enabled,
    'MatchingEventTypes': obj.matchingEventTypes?.map(y => y),
    'KinesisFirehoseDestination': toJson_PinpointEmailKinesisFirehoseDestination(obj.kinesisFirehoseDestination),
    'CloudWatchDestination': toJson_PinpointEmailCloudWatchDestination(obj.cloudWatchDestination),
    'SnsDestination': toJson_PinpointEmailSnsDestination(obj.snsDestination),
    'PinpointDestination': toJson_PinpointEmailPinpointDestination(obj.pinpointDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailDedicatedIp
 */
export interface PinpointEmailDedicatedIp {
  /**
   * @schema PinpointEmailDedicatedIp#Ip
   */
  readonly ip?: string;

  /**
   * @schema PinpointEmailDedicatedIp#WarmupStatus
   */
  readonly warmupStatus?: string;

  /**
   * @schema PinpointEmailDedicatedIp#WarmupPercentage
   */
  readonly warmupPercentage?: number;

  /**
   * @schema PinpointEmailDedicatedIp#PoolName
   */
  readonly poolName?: string;

}

/**
 * Converts an object of type 'PinpointEmailDedicatedIp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDedicatedIp(obj: PinpointEmailDedicatedIp | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailDomainDeliverabilityTrackingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDomainDeliverabilityTrackingOption(obj: PinpointEmailDomainDeliverabilityTrackingOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
    'SubscriptionStartDate': obj.subscriptionStartDate,
    'InboxPlacementTrackingOption': toJson_PinpointEmailInboxPlacementTrackingOption(obj.inboxPlacementTrackingOption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailDeliverabilityTestReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDeliverabilityTestReport(obj: PinpointEmailDeliverabilityTestReport | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailPlacementStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPlacementStatistics(obj: PinpointEmailPlacementStatistics | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailIspPlacement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailIspPlacement(obj: PinpointEmailIspPlacement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IspName': obj.ispName,
    'PlacementStatistics': toJson_PinpointEmailPlacementStatistics(obj.placementStatistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailDomainDeliverabilityCampaign' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDomainDeliverabilityCampaign(obj: PinpointEmailDomainDeliverabilityCampaign | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailOverallVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailOverallVolume(obj: PinpointEmailOverallVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeStatistics': toJson_PinpointEmailVolumeStatistics(obj.volumeStatistics),
    'ReadRatePercent': obj.readRatePercent,
    'DomainIspPlacements': obj.domainIspPlacements?.map(y => toJson_PinpointEmailDomainIspPlacement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailDailyVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDailyVolume(obj: PinpointEmailDailyVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartDate': obj.startDate,
    'VolumeStatistics': toJson_PinpointEmailVolumeStatistics(obj.volumeStatistics),
    'DomainIspPlacements': obj.domainIspPlacements?.map(y => toJson_PinpointEmailDomainIspPlacement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailMailFromAttributes
 */
export interface PinpointEmailMailFromAttributes {
  /**
   * @schema PinpointEmailMailFromAttributes#MailFromDomain
   */
  readonly mailFromDomain?: string;

  /**
   * @schema PinpointEmailMailFromAttributes#MailFromDomainStatus
   */
  readonly mailFromDomainStatus?: string;

  /**
   * @schema PinpointEmailMailFromAttributes#BehaviorOnMxFailure
   */
  readonly behaviorOnMxFailure?: string;

}

/**
 * Converts an object of type 'PinpointEmailMailFromAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailMailFromAttributes(obj: PinpointEmailMailFromAttributes | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailIdentityInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailIdentityInfo(obj: PinpointEmailIdentityInfo | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDestination(obj: PinpointEmailDestination | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailMessageTag
 */
export interface PinpointEmailMessageTag {
  /**
   * @schema PinpointEmailMessageTag#Name
   */
  readonly name?: string;

  /**
   * @schema PinpointEmailMessageTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'PinpointEmailMessageTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailMessageTag(obj: PinpointEmailMessageTag | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailKinesisFirehoseDestination
 */
export interface PinpointEmailKinesisFirehoseDestination {
  /**
   * @schema PinpointEmailKinesisFirehoseDestination#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema PinpointEmailKinesisFirehoseDestination#DeliveryStreamArn
   */
  readonly deliveryStreamArn?: string;

}

/**
 * Converts an object of type 'PinpointEmailKinesisFirehoseDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailKinesisFirehoseDestination(obj: PinpointEmailKinesisFirehoseDestination | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailCloudWatchDestination
 */
export interface PinpointEmailCloudWatchDestination {
  /**
   * @schema PinpointEmailCloudWatchDestination#DimensionConfigurations
   */
  readonly dimensionConfigurations?: PinpointEmailCloudWatchDimensionConfiguration[];

}

/**
 * Converts an object of type 'PinpointEmailCloudWatchDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCloudWatchDestination(obj: PinpointEmailCloudWatchDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DimensionConfigurations': obj.dimensionConfigurations?.map(y => toJson_PinpointEmailCloudWatchDimensionConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailSnsDestination
 */
export interface PinpointEmailSnsDestination {
  /**
   * @schema PinpointEmailSnsDestination#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'PinpointEmailSnsDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailSnsDestination(obj: PinpointEmailSnsDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailPinpointDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailPinpointDestination(obj: PinpointEmailPinpointDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationArn': obj.applicationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailMessage
 */
export interface PinpointEmailMessage {
  /**
   * @schema PinpointEmailMessage#Subject
   */
  readonly subject?: PinpointEmailContent;

  /**
   * @schema PinpointEmailMessage#Body
   */
  readonly body?: PinpointEmailBody;

}

/**
 * Converts an object of type 'PinpointEmailMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailMessage(obj: PinpointEmailMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subject': toJson_PinpointEmailContent(obj.subject),
    'Body': toJson_PinpointEmailBody(obj.body),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PinpointEmailRawMessage
 */
export interface PinpointEmailRawMessage {
  /**
   * @schema PinpointEmailRawMessage#Data
   */
  readonly data?: any;

}

/**
 * Converts an object of type 'PinpointEmailRawMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailRawMessage(obj: PinpointEmailRawMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailTemplate(obj: PinpointEmailTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateArn': obj.templateArn,
    'TemplateData': obj.templateData,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PinpointEmailInboxPlacementTrackingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailInboxPlacementTrackingOption(obj: PinpointEmailInboxPlacementTrackingOption | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailVolumeStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailVolumeStatistics(obj: PinpointEmailVolumeStatistics | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'PinpointEmailDomainIspPlacement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailDomainIspPlacement(obj: PinpointEmailDomainIspPlacement | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailCloudWatchDimensionConfiguration
 */
export interface PinpointEmailCloudWatchDimensionConfiguration {
  /**
   * @schema PinpointEmailCloudWatchDimensionConfiguration#DimensionName
   */
  readonly dimensionName?: string;

  /**
   * @schema PinpointEmailCloudWatchDimensionConfiguration#DimensionValueSource
   */
  readonly dimensionValueSource?: string;

  /**
   * @schema PinpointEmailCloudWatchDimensionConfiguration#DefaultDimensionValue
   */
  readonly defaultDimensionValue?: string;

}

/**
 * Converts an object of type 'PinpointEmailCloudWatchDimensionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailCloudWatchDimensionConfiguration(obj: PinpointEmailCloudWatchDimensionConfiguration | undefined): Record<string, any> | undefined {
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
 * @schema PinpointEmailContent
 */
export interface PinpointEmailContent {
  /**
   * @schema PinpointEmailContent#Data
   */
  readonly data?: string;

  /**
   * @schema PinpointEmailContent#Charset
   */
  readonly charset?: string;

}

/**
 * Converts an object of type 'PinpointEmailContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailContent(obj: PinpointEmailContent | undefined): Record<string, any> | undefined {
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

/**
 * Converts an object of type 'PinpointEmailBody' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PinpointEmailBody(obj: PinpointEmailBody | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': toJson_PinpointEmailContent(obj.text),
    'Html': toJson_PinpointEmailContent(obj.html),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
