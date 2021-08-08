/**
 * @schema SsmContactsAcceptPageRequest
 */
export interface SsmContactsAcceptPageRequest {
  /**
   * @schema SsmContactsAcceptPageRequest#PageId
   */
  readonly pageId?: string;

  /**
   * @schema SsmContactsAcceptPageRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

  /**
   * @schema SsmContactsAcceptPageRequest#AcceptType
   */
  readonly acceptType?: string;

  /**
   * @schema SsmContactsAcceptPageRequest#Note
   */
  readonly note?: string;

  /**
   * @schema SsmContactsAcceptPageRequest#AcceptCode
   */
  readonly acceptCode?: string;

  /**
   * @schema SsmContactsAcceptPageRequest#AcceptCodeValidation
   */
  readonly acceptCodeValidation?: string;

}

/**
 * Converts an object of type 'SsmContactsAcceptPageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsAcceptPageRequest(obj: SsmContactsAcceptPageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageId': obj.pageId,
    'ContactChannelId': obj.contactChannelId,
    'AcceptType': obj.acceptType,
    'Note': obj.note,
    'AcceptCode': obj.acceptCode,
    'AcceptCodeValidation': obj.acceptCodeValidation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsAcceptPageResult
 */
export interface SsmContactsAcceptPageResult {
}

/**
 * Converts an object of type 'SsmContactsAcceptPageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsAcceptPageResult(obj: SsmContactsAcceptPageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsActivateContactChannelRequest
 */
export interface SsmContactsActivateContactChannelRequest {
  /**
   * @schema SsmContactsActivateContactChannelRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

  /**
   * @schema SsmContactsActivateContactChannelRequest#ActivationCode
   */
  readonly activationCode?: string;

}

/**
 * Converts an object of type 'SsmContactsActivateContactChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsActivateContactChannelRequest(obj: SsmContactsActivateContactChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
    'ActivationCode': obj.activationCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsActivateContactChannelResult
 */
export interface SsmContactsActivateContactChannelResult {
}

/**
 * Converts an object of type 'SsmContactsActivateContactChannelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsActivateContactChannelResult(obj: SsmContactsActivateContactChannelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsCreateContactRequest
 */
export interface SsmContactsCreateContactRequest {
  /**
   * @schema SsmContactsCreateContactRequest#Alias
   */
  readonly alias?: string;

  /**
   * @schema SsmContactsCreateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmContactsCreateContactRequest#Type
   */
  readonly type?: string;

  /**
   * @schema SsmContactsCreateContactRequest#Plan
   */
  readonly plan?: SsmContactsPlan;

  /**
   * @schema SsmContactsCreateContactRequest#Tags
   */
  readonly tags?: SsmContactsTag[];

  /**
   * @schema SsmContactsCreateContactRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'SsmContactsCreateContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsCreateContactRequest(obj: SsmContactsCreateContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alias': obj.alias,
    'DisplayName': obj.displayName,
    'Type': obj.type,
    'Plan': toJson_SsmContactsPlan(obj.plan),
    'Tags': obj.tags?.map(y => toJson_SsmContactsTag(y)),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsCreateContactResult
 */
export interface SsmContactsCreateContactResult {
  /**
   * @schema SsmContactsCreateContactResult#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * Converts an object of type 'SsmContactsCreateContactResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsCreateContactResult(obj: SsmContactsCreateContactResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsCreateContactChannelRequest
 */
export interface SsmContactsCreateContactChannelRequest {
  /**
   * @schema SsmContactsCreateContactChannelRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema SsmContactsCreateContactChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmContactsCreateContactChannelRequest#Type
   */
  readonly type?: string;

  /**
   * @schema SsmContactsCreateContactChannelRequest#DeliveryAddress
   */
  readonly deliveryAddress?: SsmContactsContactChannelAddress;

  /**
   * @schema SsmContactsCreateContactChannelRequest#DeferActivation
   */
  readonly deferActivation?: boolean;

  /**
   * @schema SsmContactsCreateContactChannelRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'SsmContactsCreateContactChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsCreateContactChannelRequest(obj: SsmContactsCreateContactChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'Name': obj.name,
    'Type': obj.type,
    'DeliveryAddress': toJson_SsmContactsContactChannelAddress(obj.deliveryAddress),
    'DeferActivation': obj.deferActivation,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsCreateContactChannelResult
 */
export interface SsmContactsCreateContactChannelResult {
  /**
   * @schema SsmContactsCreateContactChannelResult#ContactChannelArn
   */
  readonly contactChannelArn?: string;

}

/**
 * Converts an object of type 'SsmContactsCreateContactChannelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsCreateContactChannelResult(obj: SsmContactsCreateContactChannelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelArn': obj.contactChannelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDeactivateContactChannelRequest
 */
export interface SsmContactsDeactivateContactChannelRequest {
  /**
   * @schema SsmContactsDeactivateContactChannelRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

}

/**
 * Converts an object of type 'SsmContactsDeactivateContactChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDeactivateContactChannelRequest(obj: SsmContactsDeactivateContactChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDeactivateContactChannelResult
 */
export interface SsmContactsDeactivateContactChannelResult {
}

/**
 * Converts an object of type 'SsmContactsDeactivateContactChannelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDeactivateContactChannelResult(obj: SsmContactsDeactivateContactChannelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDeleteContactRequest
 */
export interface SsmContactsDeleteContactRequest {
  /**
   * @schema SsmContactsDeleteContactRequest#ContactId
   */
  readonly contactId?: string;

}

/**
 * Converts an object of type 'SsmContactsDeleteContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDeleteContactRequest(obj: SsmContactsDeleteContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDeleteContactResult
 */
export interface SsmContactsDeleteContactResult {
}

/**
 * Converts an object of type 'SsmContactsDeleteContactResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDeleteContactResult(obj: SsmContactsDeleteContactResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDeleteContactChannelRequest
 */
export interface SsmContactsDeleteContactChannelRequest {
  /**
   * @schema SsmContactsDeleteContactChannelRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

}

/**
 * Converts an object of type 'SsmContactsDeleteContactChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDeleteContactChannelRequest(obj: SsmContactsDeleteContactChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDeleteContactChannelResult
 */
export interface SsmContactsDeleteContactChannelResult {
}

/**
 * Converts an object of type 'SsmContactsDeleteContactChannelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDeleteContactChannelResult(obj: SsmContactsDeleteContactChannelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDescribeEngagementRequest
 */
export interface SsmContactsDescribeEngagementRequest {
  /**
   * @schema SsmContactsDescribeEngagementRequest#EngagementId
   */
  readonly engagementId?: string;

}

/**
 * Converts an object of type 'SsmContactsDescribeEngagementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDescribeEngagementRequest(obj: SsmContactsDescribeEngagementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngagementId': obj.engagementId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDescribeEngagementResult
 */
export interface SsmContactsDescribeEngagementResult {
  /**
   * @schema SsmContactsDescribeEngagementResult#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#EngagementArn
   */
  readonly engagementArn?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#Sender
   */
  readonly sender?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#Subject
   */
  readonly subject?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#Content
   */
  readonly content?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#PublicSubject
   */
  readonly publicSubject?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#PublicContent
   */
  readonly publicContent?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#IncidentId
   */
  readonly incidentId?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmContactsDescribeEngagementResult#StopTime
   */
  readonly stopTime?: string;

}

/**
 * Converts an object of type 'SsmContactsDescribeEngagementResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDescribeEngagementResult(obj: SsmContactsDescribeEngagementResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'EngagementArn': obj.engagementArn,
    'Sender': obj.sender,
    'Subject': obj.subject,
    'Content': obj.content,
    'PublicSubject': obj.publicSubject,
    'PublicContent': obj.publicContent,
    'IncidentId': obj.incidentId,
    'StartTime': obj.startTime,
    'StopTime': obj.stopTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDescribePageRequest
 */
export interface SsmContactsDescribePageRequest {
  /**
   * @schema SsmContactsDescribePageRequest#PageId
   */
  readonly pageId?: string;

}

/**
 * Converts an object of type 'SsmContactsDescribePageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDescribePageRequest(obj: SsmContactsDescribePageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageId': obj.pageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsDescribePageResult
 */
export interface SsmContactsDescribePageResult {
  /**
   * @schema SsmContactsDescribePageResult#PageArn
   */
  readonly pageArn?: string;

  /**
   * @schema SsmContactsDescribePageResult#EngagementArn
   */
  readonly engagementArn?: string;

  /**
   * @schema SsmContactsDescribePageResult#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsDescribePageResult#Sender
   */
  readonly sender?: string;

  /**
   * @schema SsmContactsDescribePageResult#Subject
   */
  readonly subject?: string;

  /**
   * @schema SsmContactsDescribePageResult#Content
   */
  readonly content?: string;

  /**
   * @schema SsmContactsDescribePageResult#PublicSubject
   */
  readonly publicSubject?: string;

  /**
   * @schema SsmContactsDescribePageResult#PublicContent
   */
  readonly publicContent?: string;

  /**
   * @schema SsmContactsDescribePageResult#IncidentId
   */
  readonly incidentId?: string;

  /**
   * @schema SsmContactsDescribePageResult#SentTime
   */
  readonly sentTime?: string;

  /**
   * @schema SsmContactsDescribePageResult#ReadTime
   */
  readonly readTime?: string;

  /**
   * @schema SsmContactsDescribePageResult#DeliveryTime
   */
  readonly deliveryTime?: string;

}

/**
 * Converts an object of type 'SsmContactsDescribePageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsDescribePageResult(obj: SsmContactsDescribePageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageArn': obj.pageArn,
    'EngagementArn': obj.engagementArn,
    'ContactArn': obj.contactArn,
    'Sender': obj.sender,
    'Subject': obj.subject,
    'Content': obj.content,
    'PublicSubject': obj.publicSubject,
    'PublicContent': obj.publicContent,
    'IncidentId': obj.incidentId,
    'SentTime': obj.sentTime,
    'ReadTime': obj.readTime,
    'DeliveryTime': obj.deliveryTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsGetContactRequest
 */
export interface SsmContactsGetContactRequest {
  /**
   * @schema SsmContactsGetContactRequest#ContactId
   */
  readonly contactId?: string;

}

/**
 * Converts an object of type 'SsmContactsGetContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsGetContactRequest(obj: SsmContactsGetContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsGetContactResult
 */
export interface SsmContactsGetContactResult {
  /**
   * @schema SsmContactsGetContactResult#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsGetContactResult#Alias
   */
  readonly alias?: string;

  /**
   * @schema SsmContactsGetContactResult#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmContactsGetContactResult#Type
   */
  readonly type?: string;

  /**
   * @schema SsmContactsGetContactResult#Plan
   */
  readonly plan?: SsmContactsPlan;

}

/**
 * Converts an object of type 'SsmContactsGetContactResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsGetContactResult(obj: SsmContactsGetContactResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'Alias': obj.alias,
    'DisplayName': obj.displayName,
    'Type': obj.type,
    'Plan': toJson_SsmContactsPlan(obj.plan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsGetContactChannelRequest
 */
export interface SsmContactsGetContactChannelRequest {
  /**
   * @schema SsmContactsGetContactChannelRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

}

/**
 * Converts an object of type 'SsmContactsGetContactChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsGetContactChannelRequest(obj: SsmContactsGetContactChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsGetContactChannelResult
 */
export interface SsmContactsGetContactChannelResult {
  /**
   * @schema SsmContactsGetContactChannelResult#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsGetContactChannelResult#ContactChannelArn
   */
  readonly contactChannelArn?: string;

  /**
   * @schema SsmContactsGetContactChannelResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmContactsGetContactChannelResult#Type
   */
  readonly type?: string;

  /**
   * @schema SsmContactsGetContactChannelResult#DeliveryAddress
   */
  readonly deliveryAddress?: SsmContactsContactChannelAddress;

  /**
   * @schema SsmContactsGetContactChannelResult#ActivationStatus
   */
  readonly activationStatus?: string;

}

/**
 * Converts an object of type 'SsmContactsGetContactChannelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsGetContactChannelResult(obj: SsmContactsGetContactChannelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'ContactChannelArn': obj.contactChannelArn,
    'Name': obj.name,
    'Type': obj.type,
    'DeliveryAddress': toJson_SsmContactsContactChannelAddress(obj.deliveryAddress),
    'ActivationStatus': obj.activationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsGetContactPolicyRequest
 */
export interface SsmContactsGetContactPolicyRequest {
  /**
   * @schema SsmContactsGetContactPolicyRequest#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * Converts an object of type 'SsmContactsGetContactPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsGetContactPolicyRequest(obj: SsmContactsGetContactPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsGetContactPolicyResult
 */
export interface SsmContactsGetContactPolicyResult {
  /**
   * @schema SsmContactsGetContactPolicyResult#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsGetContactPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'SsmContactsGetContactPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsGetContactPolicyResult(obj: SsmContactsGetContactPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListContactChannelsRequest
 */
export interface SsmContactsListContactChannelsRequest {
  /**
   * @schema SsmContactsListContactChannelsRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema SsmContactsListContactChannelsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListContactChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmContactsListContactChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListContactChannelsRequest(obj: SsmContactsListContactChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListContactChannelsResult
 */
export interface SsmContactsListContactChannelsResult {
  /**
   * @schema SsmContactsListContactChannelsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListContactChannelsResult#ContactChannels
   */
  readonly contactChannels?: SsmContactsContactChannel[];

}

/**
 * Converts an object of type 'SsmContactsListContactChannelsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListContactChannelsResult(obj: SsmContactsListContactChannelsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ContactChannels': obj.contactChannels?.map(y => toJson_SsmContactsContactChannel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListContactsRequest
 */
export interface SsmContactsListContactsRequest {
  /**
   * @schema SsmContactsListContactsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListContactsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmContactsListContactsRequest#AliasPrefix
   */
  readonly aliasPrefix?: string;

  /**
   * @schema SsmContactsListContactsRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmContactsListContactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListContactsRequest(obj: SsmContactsListContactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'AliasPrefix': obj.aliasPrefix,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListContactsResult
 */
export interface SsmContactsListContactsResult {
  /**
   * @schema SsmContactsListContactsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListContactsResult#Contacts
   */
  readonly contacts?: SsmContactsContact[];

}

/**
 * Converts an object of type 'SsmContactsListContactsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListContactsResult(obj: SsmContactsListContactsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Contacts': obj.contacts?.map(y => toJson_SsmContactsContact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListEngagementsRequest
 */
export interface SsmContactsListEngagementsRequest {
  /**
   * @schema SsmContactsListEngagementsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListEngagementsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmContactsListEngagementsRequest#IncidentId
   */
  readonly incidentId?: string;

  /**
   * @schema SsmContactsListEngagementsRequest#TimeRangeValue
   */
  readonly timeRangeValue?: SsmContactsTimeRange;

}

/**
 * Converts an object of type 'SsmContactsListEngagementsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListEngagementsRequest(obj: SsmContactsListEngagementsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'IncidentId': obj.incidentId,
    'TimeRangeValue': toJson_SsmContactsTimeRange(obj.timeRangeValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListEngagementsResult
 */
export interface SsmContactsListEngagementsResult {
  /**
   * @schema SsmContactsListEngagementsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListEngagementsResult#Engagements
   */
  readonly engagements?: SsmContactsEngagement[];

}

/**
 * Converts an object of type 'SsmContactsListEngagementsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListEngagementsResult(obj: SsmContactsListEngagementsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Engagements': obj.engagements?.map(y => toJson_SsmContactsEngagement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListPageReceiptsRequest
 */
export interface SsmContactsListPageReceiptsRequest {
  /**
   * @schema SsmContactsListPageReceiptsRequest#PageId
   */
  readonly pageId?: string;

  /**
   * @schema SsmContactsListPageReceiptsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListPageReceiptsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmContactsListPageReceiptsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListPageReceiptsRequest(obj: SsmContactsListPageReceiptsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageId': obj.pageId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListPageReceiptsResult
 */
export interface SsmContactsListPageReceiptsResult {
  /**
   * @schema SsmContactsListPageReceiptsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListPageReceiptsResult#Receipts
   */
  readonly receipts?: SsmContactsReceipt[];

}

/**
 * Converts an object of type 'SsmContactsListPageReceiptsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListPageReceiptsResult(obj: SsmContactsListPageReceiptsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Receipts': obj.receipts?.map(y => toJson_SsmContactsReceipt(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListPagesByContactRequest
 */
export interface SsmContactsListPagesByContactRequest {
  /**
   * @schema SsmContactsListPagesByContactRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema SsmContactsListPagesByContactRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListPagesByContactRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmContactsListPagesByContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListPagesByContactRequest(obj: SsmContactsListPagesByContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListPagesByContactResult
 */
export interface SsmContactsListPagesByContactResult {
  /**
   * @schema SsmContactsListPagesByContactResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListPagesByContactResult#Pages
   */
  readonly pages?: SsmContactsPage[];

}

/**
 * Converts an object of type 'SsmContactsListPagesByContactResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListPagesByContactResult(obj: SsmContactsListPagesByContactResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Pages': obj.pages?.map(y => toJson_SsmContactsPage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListPagesByEngagementRequest
 */
export interface SsmContactsListPagesByEngagementRequest {
  /**
   * @schema SsmContactsListPagesByEngagementRequest#EngagementId
   */
  readonly engagementId?: string;

  /**
   * @schema SsmContactsListPagesByEngagementRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListPagesByEngagementRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmContactsListPagesByEngagementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListPagesByEngagementRequest(obj: SsmContactsListPagesByEngagementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngagementId': obj.engagementId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListPagesByEngagementResult
 */
export interface SsmContactsListPagesByEngagementResult {
  /**
   * @schema SsmContactsListPagesByEngagementResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmContactsListPagesByEngagementResult#Pages
   */
  readonly pages?: SsmContactsPage[];

}

/**
 * Converts an object of type 'SsmContactsListPagesByEngagementResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListPagesByEngagementResult(obj: SsmContactsListPagesByEngagementResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Pages': obj.pages?.map(y => toJson_SsmContactsPage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListTagsForResourceRequest
 */
export interface SsmContactsListTagsForResourceRequest {
  /**
   * @schema SsmContactsListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'SsmContactsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListTagsForResourceRequest(obj: SsmContactsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsListTagsForResourceResult
 */
export interface SsmContactsListTagsForResourceResult {
  /**
   * @schema SsmContactsListTagsForResourceResult#Tags
   */
  readonly tags?: SsmContactsTag[];

}

/**
 * Converts an object of type 'SsmContactsListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsListTagsForResourceResult(obj: SsmContactsListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_SsmContactsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsPutContactPolicyRequest
 */
export interface SsmContactsPutContactPolicyRequest {
  /**
   * @schema SsmContactsPutContactPolicyRequest#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsPutContactPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'SsmContactsPutContactPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsPutContactPolicyRequest(obj: SsmContactsPutContactPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsPutContactPolicyResult
 */
export interface SsmContactsPutContactPolicyResult {
}

/**
 * Converts an object of type 'SsmContactsPutContactPolicyResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsPutContactPolicyResult(obj: SsmContactsPutContactPolicyResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsSendActivationCodeRequest
 */
export interface SsmContactsSendActivationCodeRequest {
  /**
   * @schema SsmContactsSendActivationCodeRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

}

/**
 * Converts an object of type 'SsmContactsSendActivationCodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsSendActivationCodeRequest(obj: SsmContactsSendActivationCodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsSendActivationCodeResult
 */
export interface SsmContactsSendActivationCodeResult {
}

/**
 * Converts an object of type 'SsmContactsSendActivationCodeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsSendActivationCodeResult(obj: SsmContactsSendActivationCodeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsStartEngagementRequest
 */
export interface SsmContactsStartEngagementRequest {
  /**
   * @schema SsmContactsStartEngagementRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#Sender
   */
  readonly sender?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#Subject
   */
  readonly subject?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#PublicSubject
   */
  readonly publicSubject?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#PublicContent
   */
  readonly publicContent?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#IncidentId
   */
  readonly incidentId?: string;

  /**
   * @schema SsmContactsStartEngagementRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'SsmContactsStartEngagementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsStartEngagementRequest(obj: SsmContactsStartEngagementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'Sender': obj.sender,
    'Subject': obj.subject,
    'Content': obj.content,
    'PublicSubject': obj.publicSubject,
    'PublicContent': obj.publicContent,
    'IncidentId': obj.incidentId,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsStartEngagementResult
 */
export interface SsmContactsStartEngagementResult {
  /**
   * @schema SsmContactsStartEngagementResult#EngagementArn
   */
  readonly engagementArn?: string;

}

/**
 * Converts an object of type 'SsmContactsStartEngagementResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsStartEngagementResult(obj: SsmContactsStartEngagementResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngagementArn': obj.engagementArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsStopEngagementRequest
 */
export interface SsmContactsStopEngagementRequest {
  /**
   * @schema SsmContactsStopEngagementRequest#EngagementId
   */
  readonly engagementId?: string;

  /**
   * @schema SsmContactsStopEngagementRequest#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'SsmContactsStopEngagementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsStopEngagementRequest(obj: SsmContactsStopEngagementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngagementId': obj.engagementId,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsStopEngagementResult
 */
export interface SsmContactsStopEngagementResult {
}

/**
 * Converts an object of type 'SsmContactsStopEngagementResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsStopEngagementResult(obj: SsmContactsStopEngagementResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsTagResourceRequest
 */
export interface SsmContactsTagResourceRequest {
  /**
   * @schema SsmContactsTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema SsmContactsTagResourceRequest#Tags
   */
  readonly tags?: SsmContactsTag[];

}

/**
 * Converts an object of type 'SsmContactsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsTagResourceRequest(obj: SsmContactsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_SsmContactsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsTagResourceResult
 */
export interface SsmContactsTagResourceResult {
}

/**
 * Converts an object of type 'SsmContactsTagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsTagResourceResult(obj: SsmContactsTagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsUntagResourceRequest
 */
export interface SsmContactsUntagResourceRequest {
  /**
   * @schema SsmContactsUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema SsmContactsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SsmContactsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsUntagResourceRequest(obj: SsmContactsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsUntagResourceResult
 */
export interface SsmContactsUntagResourceResult {
}

/**
 * Converts an object of type 'SsmContactsUntagResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsUntagResourceResult(obj: SsmContactsUntagResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsUpdateContactRequest
 */
export interface SsmContactsUpdateContactRequest {
  /**
   * @schema SsmContactsUpdateContactRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema SsmContactsUpdateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmContactsUpdateContactRequest#Plan
   */
  readonly plan?: SsmContactsPlan;

}

/**
 * Converts an object of type 'SsmContactsUpdateContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsUpdateContactRequest(obj: SsmContactsUpdateContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'DisplayName': obj.displayName,
    'Plan': toJson_SsmContactsPlan(obj.plan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsUpdateContactResult
 */
export interface SsmContactsUpdateContactResult {
}

/**
 * Converts an object of type 'SsmContactsUpdateContactResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsUpdateContactResult(obj: SsmContactsUpdateContactResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsUpdateContactChannelRequest
 */
export interface SsmContactsUpdateContactChannelRequest {
  /**
   * @schema SsmContactsUpdateContactChannelRequest#ContactChannelId
   */
  readonly contactChannelId?: string;

  /**
   * @schema SsmContactsUpdateContactChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmContactsUpdateContactChannelRequest#DeliveryAddress
   */
  readonly deliveryAddress?: SsmContactsContactChannelAddress;

}

/**
 * Converts an object of type 'SsmContactsUpdateContactChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsUpdateContactChannelRequest(obj: SsmContactsUpdateContactChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
    'Name': obj.name,
    'DeliveryAddress': toJson_SsmContactsContactChannelAddress(obj.deliveryAddress),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsUpdateContactChannelResult
 */
export interface SsmContactsUpdateContactChannelResult {
}

/**
 * Converts an object of type 'SsmContactsUpdateContactChannelResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsUpdateContactChannelResult(obj: SsmContactsUpdateContactChannelResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsPlan
 */
export interface SsmContactsPlan {
  /**
   * @schema SsmContactsPlan#Stages
   */
  readonly stages?: SsmContactsStage[];

}

/**
 * Converts an object of type 'SsmContactsPlan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsPlan(obj: SsmContactsPlan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stages': obj.stages?.map(y => toJson_SsmContactsStage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsTag
 */
export interface SsmContactsTag {
  /**
   * @schema SsmContactsTag#Key
   */
  readonly key?: string;

  /**
   * @schema SsmContactsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SsmContactsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsTag(obj: SsmContactsTag | undefined): Record<string, any> | undefined {
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
 * @schema SsmContactsContactChannelAddress
 */
export interface SsmContactsContactChannelAddress {
  /**
   * @schema SsmContactsContactChannelAddress#SimpleAddress
   */
  readonly simpleAddress?: string;

}

/**
 * Converts an object of type 'SsmContactsContactChannelAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsContactChannelAddress(obj: SsmContactsContactChannelAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SimpleAddress': obj.simpleAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsContactChannel
 */
export interface SsmContactsContactChannel {
  /**
   * @schema SsmContactsContactChannel#ContactChannelArn
   */
  readonly contactChannelArn?: string;

  /**
   * @schema SsmContactsContactChannel#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsContactChannel#Name
   */
  readonly name?: string;

  /**
   * @schema SsmContactsContactChannel#Type
   */
  readonly type?: string;

  /**
   * @schema SsmContactsContactChannel#DeliveryAddress
   */
  readonly deliveryAddress?: SsmContactsContactChannelAddress;

  /**
   * @schema SsmContactsContactChannel#ActivationStatus
   */
  readonly activationStatus?: string;

}

/**
 * Converts an object of type 'SsmContactsContactChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsContactChannel(obj: SsmContactsContactChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelArn': obj.contactChannelArn,
    'ContactArn': obj.contactArn,
    'Name': obj.name,
    'Type': obj.type,
    'DeliveryAddress': toJson_SsmContactsContactChannelAddress(obj.deliveryAddress),
    'ActivationStatus': obj.activationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsContact
 */
export interface SsmContactsContact {
  /**
   * @schema SsmContactsContact#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsContact#Alias
   */
  readonly alias?: string;

  /**
   * @schema SsmContactsContact#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmContactsContact#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmContactsContact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsContact(obj: SsmContactsContact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'Alias': obj.alias,
    'DisplayName': obj.displayName,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsTimeRange
 */
export interface SsmContactsTimeRange {
  /**
   * @schema SsmContactsTimeRange#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmContactsTimeRange#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'SsmContactsTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsTimeRange(obj: SsmContactsTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsEngagement
 */
export interface SsmContactsEngagement {
  /**
   * @schema SsmContactsEngagement#EngagementArn
   */
  readonly engagementArn?: string;

  /**
   * @schema SsmContactsEngagement#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsEngagement#Sender
   */
  readonly sender?: string;

  /**
   * @schema SsmContactsEngagement#IncidentId
   */
  readonly incidentId?: string;

  /**
   * @schema SsmContactsEngagement#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmContactsEngagement#StopTime
   */
  readonly stopTime?: string;

}

/**
 * Converts an object of type 'SsmContactsEngagement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsEngagement(obj: SsmContactsEngagement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngagementArn': obj.engagementArn,
    'ContactArn': obj.contactArn,
    'Sender': obj.sender,
    'IncidentId': obj.incidentId,
    'StartTime': obj.startTime,
    'StopTime': obj.stopTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsReceipt
 */
export interface SsmContactsReceipt {
  /**
   * @schema SsmContactsReceipt#ContactChannelArn
   */
  readonly contactChannelArn?: string;

  /**
   * @schema SsmContactsReceipt#ReceiptType
   */
  readonly receiptType?: string;

  /**
   * @schema SsmContactsReceipt#ReceiptInfo
   */
  readonly receiptInfo?: string;

  /**
   * @schema SsmContactsReceipt#ReceiptTime
   */
  readonly receiptTime?: string;

}

/**
 * Converts an object of type 'SsmContactsReceipt' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsReceipt(obj: SsmContactsReceipt | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelArn': obj.contactChannelArn,
    'ReceiptType': obj.receiptType,
    'ReceiptInfo': obj.receiptInfo,
    'ReceiptTime': obj.receiptTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsPage
 */
export interface SsmContactsPage {
  /**
   * @schema SsmContactsPage#PageArn
   */
  readonly pageArn?: string;

  /**
   * @schema SsmContactsPage#EngagementArn
   */
  readonly engagementArn?: string;

  /**
   * @schema SsmContactsPage#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema SsmContactsPage#Sender
   */
  readonly sender?: string;

  /**
   * @schema SsmContactsPage#IncidentId
   */
  readonly incidentId?: string;

  /**
   * @schema SsmContactsPage#SentTime
   */
  readonly sentTime?: string;

  /**
   * @schema SsmContactsPage#DeliveryTime
   */
  readonly deliveryTime?: string;

  /**
   * @schema SsmContactsPage#ReadTime
   */
  readonly readTime?: string;

}

/**
 * Converts an object of type 'SsmContactsPage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsPage(obj: SsmContactsPage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageArn': obj.pageArn,
    'EngagementArn': obj.engagementArn,
    'ContactArn': obj.contactArn,
    'Sender': obj.sender,
    'IncidentId': obj.incidentId,
    'SentTime': obj.sentTime,
    'DeliveryTime': obj.deliveryTime,
    'ReadTime': obj.readTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsStage
 */
export interface SsmContactsStage {
  /**
   * @schema SsmContactsStage#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema SsmContactsStage#Targets
   */
  readonly targets?: SsmContactsTarget[];

}

/**
 * Converts an object of type 'SsmContactsStage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsStage(obj: SsmContactsStage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInMinutes': obj.durationInMinutes,
    'Targets': obj.targets?.map(y => toJson_SsmContactsTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsTarget
 */
export interface SsmContactsTarget {
  /**
   * @schema SsmContactsTarget#ChannelTargetInfo
   */
  readonly channelTargetInfo?: SsmContactsChannelTargetInfo;

  /**
   * @schema SsmContactsTarget#ContactTargetInfo
   */
  readonly contactTargetInfo?: SsmContactsContactTargetInfo;

}

/**
 * Converts an object of type 'SsmContactsTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsTarget(obj: SsmContactsTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelTargetInfo': toJson_SsmContactsChannelTargetInfo(obj.channelTargetInfo),
    'ContactTargetInfo': toJson_SsmContactsContactTargetInfo(obj.contactTargetInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsChannelTargetInfo
 */
export interface SsmContactsChannelTargetInfo {
  /**
   * @schema SsmContactsChannelTargetInfo#ContactChannelId
   */
  readonly contactChannelId?: string;

  /**
   * @schema SsmContactsChannelTargetInfo#RetryIntervalInMinutes
   */
  readonly retryIntervalInMinutes?: number;

}

/**
 * Converts an object of type 'SsmContactsChannelTargetInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsChannelTargetInfo(obj: SsmContactsChannelTargetInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactChannelId': obj.contactChannelId,
    'RetryIntervalInMinutes': obj.retryIntervalInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmContactsContactTargetInfo
 */
export interface SsmContactsContactTargetInfo {
  /**
   * @schema SsmContactsContactTargetInfo#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema SsmContactsContactTargetInfo#IsEssential
   */
  readonly isEssential?: boolean;

}

/**
 * Converts an object of type 'SsmContactsContactTargetInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmContactsContactTargetInfo(obj: SsmContactsContactTargetInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'IsEssential': obj.isEssential,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
