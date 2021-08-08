/**
 * @schema SnsAddPermissionInput
 */
export interface SnsAddPermissionInput {
  /**
   * @schema SnsAddPermissionInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsAddPermissionInput#Label
   */
  readonly label?: string;

  /**
   * @schema SnsAddPermissionInput#AWSAccountId
   */
  readonly awsAccountId?: string[];

  /**
   * @schema SnsAddPermissionInput#ActionName
   */
  readonly actionName?: string[];

}

/**
 * Converts an object of type 'SnsAddPermissionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsAddPermissionInput(obj: SnsAddPermissionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'Label': obj.label,
    'AWSAccountId': obj.awsAccountId?.map(y => y),
    'ActionName': obj.actionName?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCheckIfPhoneNumberIsOptedOutInput
 */
export interface SnsCheckIfPhoneNumberIsOptedOutInput {
  /**
   * @schema SnsCheckIfPhoneNumberIsOptedOutInput#phoneNumber
   */
  readonly phoneNumber: string;

}

/**
 * Converts an object of type 'SnsCheckIfPhoneNumberIsOptedOutInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCheckIfPhoneNumberIsOptedOutInput(obj: SnsCheckIfPhoneNumberIsOptedOutInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'phoneNumber': obj.phoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCheckIfPhoneNumberIsOptedOutResponse
 */
export interface SnsCheckIfPhoneNumberIsOptedOutResponse {
  /**
   * @schema SnsCheckIfPhoneNumberIsOptedOutResponse#isOptedOut
   */
  readonly isOptedOut?: boolean;

}

/**
 * Converts an object of type 'SnsCheckIfPhoneNumberIsOptedOutResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCheckIfPhoneNumberIsOptedOutResponse(obj: SnsCheckIfPhoneNumberIsOptedOutResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isOptedOut': obj.isOptedOut,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsConfirmSubscriptionInput
 */
export interface SnsConfirmSubscriptionInput {
  /**
   * @schema SnsConfirmSubscriptionInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsConfirmSubscriptionInput#Token
   */
  readonly token?: string;

  /**
   * @schema SnsConfirmSubscriptionInput#AuthenticateOnUnsubscribe
   */
  readonly authenticateOnUnsubscribe?: string;

}

/**
 * Converts an object of type 'SnsConfirmSubscriptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsConfirmSubscriptionInput(obj: SnsConfirmSubscriptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'Token': obj.token,
    'AuthenticateOnUnsubscribe': obj.authenticateOnUnsubscribe,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsConfirmSubscriptionResponse
 */
export interface SnsConfirmSubscriptionResponse {
  /**
   * @schema SnsConfirmSubscriptionResponse#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * Converts an object of type 'SnsConfirmSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsConfirmSubscriptionResponse(obj: SnsConfirmSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionArn': obj.subscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreatePlatformApplicationInput
 */
export interface SnsCreatePlatformApplicationInput {
  /**
   * @schema SnsCreatePlatformApplicationInput#Name
   */
  readonly name?: string;

  /**
   * @schema SnsCreatePlatformApplicationInput#Platform
   */
  readonly platform?: string;

  /**
   * @schema SnsCreatePlatformApplicationInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsCreatePlatformApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreatePlatformApplicationInput(obj: SnsCreatePlatformApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Platform': obj.platform,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreatePlatformApplicationResponse
 */
export interface SnsCreatePlatformApplicationResponse {
  /**
   * @schema SnsCreatePlatformApplicationResponse#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

}

/**
 * Converts an object of type 'SnsCreatePlatformApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreatePlatformApplicationResponse(obj: SnsCreatePlatformApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreatePlatformEndpointInput
 */
export interface SnsCreatePlatformEndpointInput {
  /**
   * @schema SnsCreatePlatformEndpointInput#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

  /**
   * @schema SnsCreatePlatformEndpointInput#Token
   */
  readonly token?: string;

  /**
   * @schema SnsCreatePlatformEndpointInput#CustomUserData
   */
  readonly customUserData?: string;

  /**
   * @schema SnsCreatePlatformEndpointInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsCreatePlatformEndpointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreatePlatformEndpointInput(obj: SnsCreatePlatformEndpointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
    'Token': obj.token,
    'CustomUserData': obj.customUserData,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreateEndpointResponse
 */
export interface SnsCreateEndpointResponse {
  /**
   * @schema SnsCreateEndpointResponse#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'SnsCreateEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreateEndpointResponse(obj: SnsCreateEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreateSmsSandboxPhoneNumberInput
 */
export interface SnsCreateSmsSandboxPhoneNumberInput {
  /**
   * @schema SnsCreateSmsSandboxPhoneNumberInput#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnsCreateSmsSandboxPhoneNumberInput#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'SnsCreateSmsSandboxPhoneNumberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreateSmsSandboxPhoneNumberInput(obj: SnsCreateSmsSandboxPhoneNumberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': obj.phoneNumber,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreateSmsSandboxPhoneNumberResult
 */
export interface SnsCreateSmsSandboxPhoneNumberResult {
}

/**
 * Converts an object of type 'SnsCreateSmsSandboxPhoneNumberResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreateSmsSandboxPhoneNumberResult(obj: SnsCreateSmsSandboxPhoneNumberResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreateTopicInput
 */
export interface SnsCreateTopicInput {
  /**
   * @schema SnsCreateTopicInput#Name
   */
  readonly name?: string;

  /**
   * @schema SnsCreateTopicInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SnsCreateTopicInput#Tags
   */
  readonly tags?: SnsTag[];

}

/**
 * Converts an object of type 'SnsCreateTopicInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreateTopicInput(obj: SnsCreateTopicInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tags': obj.tags?.map(y => toJson_SnsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsCreateTopicResponse
 */
export interface SnsCreateTopicResponse {
  /**
   * @schema SnsCreateTopicResponse#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'SnsCreateTopicResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsCreateTopicResponse(obj: SnsCreateTopicResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsDeleteEndpointInput
 */
export interface SnsDeleteEndpointInput {
  /**
   * @schema SnsDeleteEndpointInput#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'SnsDeleteEndpointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsDeleteEndpointInput(obj: SnsDeleteEndpointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsDeletePlatformApplicationInput
 */
export interface SnsDeletePlatformApplicationInput {
  /**
   * @schema SnsDeletePlatformApplicationInput#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

}

/**
 * Converts an object of type 'SnsDeletePlatformApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsDeletePlatformApplicationInput(obj: SnsDeletePlatformApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsDeleteSmsSandboxPhoneNumberInput
 */
export interface SnsDeleteSmsSandboxPhoneNumberInput {
  /**
   * @schema SnsDeleteSmsSandboxPhoneNumberInput#PhoneNumber
   */
  readonly phoneNumber?: string;

}

/**
 * Converts an object of type 'SnsDeleteSmsSandboxPhoneNumberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsDeleteSmsSandboxPhoneNumberInput(obj: SnsDeleteSmsSandboxPhoneNumberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': obj.phoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsDeleteSmsSandboxPhoneNumberResult
 */
export interface SnsDeleteSmsSandboxPhoneNumberResult {
}

/**
 * Converts an object of type 'SnsDeleteSmsSandboxPhoneNumberResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsDeleteSmsSandboxPhoneNumberResult(obj: SnsDeleteSmsSandboxPhoneNumberResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsDeleteTopicInput
 */
export interface SnsDeleteTopicInput {
  /**
   * @schema SnsDeleteTopicInput#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'SnsDeleteTopicInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsDeleteTopicInput(obj: SnsDeleteTopicInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetEndpointAttributesInput
 */
export interface SnsGetEndpointAttributesInput {
  /**
   * @schema SnsGetEndpointAttributesInput#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'SnsGetEndpointAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetEndpointAttributesInput(obj: SnsGetEndpointAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetEndpointAttributesResponse
 */
export interface SnsGetEndpointAttributesResponse {
  /**
   * @schema SnsGetEndpointAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsGetEndpointAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetEndpointAttributesResponse(obj: SnsGetEndpointAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetPlatformApplicationAttributesInput
 */
export interface SnsGetPlatformApplicationAttributesInput {
  /**
   * @schema SnsGetPlatformApplicationAttributesInput#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

}

/**
 * Converts an object of type 'SnsGetPlatformApplicationAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetPlatformApplicationAttributesInput(obj: SnsGetPlatformApplicationAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetPlatformApplicationAttributesResponse
 */
export interface SnsGetPlatformApplicationAttributesResponse {
  /**
   * @schema SnsGetPlatformApplicationAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsGetPlatformApplicationAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetPlatformApplicationAttributesResponse(obj: SnsGetPlatformApplicationAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetSmsAttributesInput
 */
export interface SnsGetSmsAttributesInput {
  /**
   * @schema SnsGetSmsAttributesInput#attributes
   */
  readonly attributes?: string[];

}

/**
 * Converts an object of type 'SnsGetSmsAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetSmsAttributesInput(obj: SnsGetSmsAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': obj.attributes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetSmsAttributesResponse
 */
export interface SnsGetSmsAttributesResponse {
  /**
   * @schema SnsGetSmsAttributesResponse#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsGetSmsAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetSmsAttributesResponse(obj: SnsGetSmsAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetSmsSandboxAccountStatusInput
 */
export interface SnsGetSmsSandboxAccountStatusInput {
}

/**
 * Converts an object of type 'SnsGetSmsSandboxAccountStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetSmsSandboxAccountStatusInput(obj: SnsGetSmsSandboxAccountStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetSmsSandboxAccountStatusResult
 */
export interface SnsGetSmsSandboxAccountStatusResult {
  /**
   * @schema SnsGetSmsSandboxAccountStatusResult#IsInSandbox
   */
  readonly isInSandbox?: boolean;

}

/**
 * Converts an object of type 'SnsGetSmsSandboxAccountStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetSmsSandboxAccountStatusResult(obj: SnsGetSmsSandboxAccountStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsInSandbox': obj.isInSandbox,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetSubscriptionAttributesInput
 */
export interface SnsGetSubscriptionAttributesInput {
  /**
   * @schema SnsGetSubscriptionAttributesInput#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * Converts an object of type 'SnsGetSubscriptionAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetSubscriptionAttributesInput(obj: SnsGetSubscriptionAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionArn': obj.subscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetSubscriptionAttributesResponse
 */
export interface SnsGetSubscriptionAttributesResponse {
  /**
   * @schema SnsGetSubscriptionAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsGetSubscriptionAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetSubscriptionAttributesResponse(obj: SnsGetSubscriptionAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetTopicAttributesInput
 */
export interface SnsGetTopicAttributesInput {
  /**
   * @schema SnsGetTopicAttributesInput#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'SnsGetTopicAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetTopicAttributesInput(obj: SnsGetTopicAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsGetTopicAttributesResponse
 */
export interface SnsGetTopicAttributesResponse {
  /**
   * @schema SnsGetTopicAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsGetTopicAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsGetTopicAttributesResponse(obj: SnsGetTopicAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListEndpointsByPlatformApplicationInput
 */
export interface SnsListEndpointsByPlatformApplicationInput {
  /**
   * @schema SnsListEndpointsByPlatformApplicationInput#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

  /**
   * @schema SnsListEndpointsByPlatformApplicationInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListEndpointsByPlatformApplicationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListEndpointsByPlatformApplicationInput(obj: SnsListEndpointsByPlatformApplicationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListEndpointsByPlatformApplicationResponse
 */
export interface SnsListEndpointsByPlatformApplicationResponse {
  /**
   * @schema SnsListEndpointsByPlatformApplicationResponse#Endpoints
   */
  readonly endpoints?: SnsEndpoint[];

  /**
   * @schema SnsListEndpointsByPlatformApplicationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListEndpointsByPlatformApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListEndpointsByPlatformApplicationResponse(obj: SnsListEndpointsByPlatformApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_SnsEndpoint(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListOriginationNumbersRequest
 */
export interface SnsListOriginationNumbersRequest {
  /**
   * @schema SnsListOriginationNumbersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SnsListOriginationNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SnsListOriginationNumbersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListOriginationNumbersRequest(obj: SnsListOriginationNumbersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListOriginationNumbersResult
 */
export interface SnsListOriginationNumbersResult {
  /**
   * @schema SnsListOriginationNumbersResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SnsListOriginationNumbersResult#PhoneNumbers
   */
  readonly phoneNumbers?: SnsPhoneNumberInformation[];

}

/**
 * Converts an object of type 'SnsListOriginationNumbersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListOriginationNumbersResult(obj: SnsListOriginationNumbersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_SnsPhoneNumberInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListPhoneNumbersOptedOutInput
 */
export interface SnsListPhoneNumbersOptedOutInput {
  /**
   * @schema SnsListPhoneNumbersOptedOutInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListPhoneNumbersOptedOutInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListPhoneNumbersOptedOutInput(obj: SnsListPhoneNumbersOptedOutInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListPhoneNumbersOptedOutResponse
 */
export interface SnsListPhoneNumbersOptedOutResponse {
  /**
   * @schema SnsListPhoneNumbersOptedOutResponse#phoneNumbers
   */
  readonly phoneNumbers?: string[];

  /**
   * @schema SnsListPhoneNumbersOptedOutResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListPhoneNumbersOptedOutResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListPhoneNumbersOptedOutResponse(obj: SnsListPhoneNumbersOptedOutResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'phoneNumbers': obj.phoneNumbers?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListPlatformApplicationsInput
 */
export interface SnsListPlatformApplicationsInput {
  /**
   * @schema SnsListPlatformApplicationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListPlatformApplicationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListPlatformApplicationsInput(obj: SnsListPlatformApplicationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListPlatformApplicationsResponse
 */
export interface SnsListPlatformApplicationsResponse {
  /**
   * @schema SnsListPlatformApplicationsResponse#PlatformApplications
   */
  readonly platformApplications?: SnsPlatformApplication[];

  /**
   * @schema SnsListPlatformApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListPlatformApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListPlatformApplicationsResponse(obj: SnsListPlatformApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplications': obj.platformApplications?.map(y => toJson_SnsPlatformApplication(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListSmsSandboxPhoneNumbersInput
 */
export interface SnsListSmsSandboxPhoneNumbersInput {
  /**
   * @schema SnsListSmsSandboxPhoneNumbersInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SnsListSmsSandboxPhoneNumbersInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SnsListSmsSandboxPhoneNumbersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListSmsSandboxPhoneNumbersInput(obj: SnsListSmsSandboxPhoneNumbersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListSmsSandboxPhoneNumbersResult
 */
export interface SnsListSmsSandboxPhoneNumbersResult {
  /**
   * @schema SnsListSmsSandboxPhoneNumbersResult#PhoneNumbers
   */
  readonly phoneNumbers?: SnssmsSandboxPhoneNumber[];

  /**
   * @schema SnsListSmsSandboxPhoneNumbersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListSmsSandboxPhoneNumbersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListSmsSandboxPhoneNumbersResult(obj: SnsListSmsSandboxPhoneNumbersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_SnssmsSandboxPhoneNumber(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListSubscriptionsInput
 */
export interface SnsListSubscriptionsInput {
  /**
   * @schema SnsListSubscriptionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListSubscriptionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListSubscriptionsInput(obj: SnsListSubscriptionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListSubscriptionsResponse
 */
export interface SnsListSubscriptionsResponse {
  /**
   * @schema SnsListSubscriptionsResponse#Subscriptions
   */
  readonly subscriptions?: SnsSubscription[];

  /**
   * @schema SnsListSubscriptionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListSubscriptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListSubscriptionsResponse(obj: SnsListSubscriptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscriptions': obj.subscriptions?.map(y => toJson_SnsSubscription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListSubscriptionsByTopicInput
 */
export interface SnsListSubscriptionsByTopicInput {
  /**
   * @schema SnsListSubscriptionsByTopicInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsListSubscriptionsByTopicInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListSubscriptionsByTopicInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListSubscriptionsByTopicInput(obj: SnsListSubscriptionsByTopicInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListSubscriptionsByTopicResponse
 */
export interface SnsListSubscriptionsByTopicResponse {
  /**
   * @schema SnsListSubscriptionsByTopicResponse#Subscriptions
   */
  readonly subscriptions?: SnsSubscription[];

  /**
   * @schema SnsListSubscriptionsByTopicResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListSubscriptionsByTopicResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListSubscriptionsByTopicResponse(obj: SnsListSubscriptionsByTopicResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscriptions': obj.subscriptions?.map(y => toJson_SnsSubscription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListTagsForResourceRequest
 */
export interface SnsListTagsForResourceRequest {
  /**
   * @schema SnsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'SnsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListTagsForResourceRequest(obj: SnsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListTagsForResourceResponse
 */
export interface SnsListTagsForResourceResponse {
  /**
   * @schema SnsListTagsForResourceResponse#Tags
   */
  readonly tags?: SnsTag[];

}

/**
 * Converts an object of type 'SnsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListTagsForResourceResponse(obj: SnsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_SnsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListTopicsInput
 */
export interface SnsListTopicsInput {
  /**
   * @schema SnsListTopicsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListTopicsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListTopicsInput(obj: SnsListTopicsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsListTopicsResponse
 */
export interface SnsListTopicsResponse {
  /**
   * @schema SnsListTopicsResponse#Topics
   */
  readonly topics?: SnsTopic[];

  /**
   * @schema SnsListTopicsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SnsListTopicsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsListTopicsResponse(obj: SnsListTopicsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Topics': obj.topics?.map(y => toJson_SnsTopic(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsOptInPhoneNumberInput
 */
export interface SnsOptInPhoneNumberInput {
  /**
   * @schema SnsOptInPhoneNumberInput#phoneNumber
   */
  readonly phoneNumber: string;

}

/**
 * Converts an object of type 'SnsOptInPhoneNumberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsOptInPhoneNumberInput(obj: SnsOptInPhoneNumberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'phoneNumber': obj.phoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsOptInPhoneNumberResponse
 */
export interface SnsOptInPhoneNumberResponse {
}

/**
 * Converts an object of type 'SnsOptInPhoneNumberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsOptInPhoneNumberResponse(obj: SnsOptInPhoneNumberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsPublishInput
 */
export interface SnsPublishInput {
  /**
   * @schema SnsPublishInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsPublishInput#TargetArn
   */
  readonly targetArn?: string;

  /**
   * @schema SnsPublishInput#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnsPublishInput#Message
   */
  readonly message?: string;

  /**
   * @schema SnsPublishInput#Subject
   */
  readonly subject?: string;

  /**
   * @schema SnsPublishInput#MessageStructure
   */
  readonly messageStructure?: string;

  /**
   * @schema SnsPublishInput#MessageAttributes
   */
  readonly messageAttributes?: { [key: string]: SnsMessageAttributeValue };

  /**
   * @schema SnsPublishInput#MessageDeduplicationId
   */
  readonly messageDeduplicationId?: string;

  /**
   * @schema SnsPublishInput#MessageGroupId
   */
  readonly messageGroupId?: string;

}

/**
 * Converts an object of type 'SnsPublishInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsPublishInput(obj: SnsPublishInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'TargetArn': obj.targetArn,
    'PhoneNumber': obj.phoneNumber,
    'Message': obj.message,
    'Subject': obj.subject,
    'MessageStructure': obj.messageStructure,
    'MessageAttributes': ((obj.messageAttributes) === undefined) ? undefined : (Object.entries(obj.messageAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SnsMessageAttributeValue(i[1]) }), {})),
    'MessageDeduplicationId': obj.messageDeduplicationId,
    'MessageGroupId': obj.messageGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsPublishResponse
 */
export interface SnsPublishResponse {
  /**
   * @schema SnsPublishResponse#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema SnsPublishResponse#SequenceNumber
   */
  readonly sequenceNumber?: string;

}

/**
 * Converts an object of type 'SnsPublishResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsPublishResponse(obj: SnsPublishResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
    'SequenceNumber': obj.sequenceNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsRemovePermissionInput
 */
export interface SnsRemovePermissionInput {
  /**
   * @schema SnsRemovePermissionInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsRemovePermissionInput#Label
   */
  readonly label?: string;

}

/**
 * Converts an object of type 'SnsRemovePermissionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsRemovePermissionInput(obj: SnsRemovePermissionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'Label': obj.label,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSetEndpointAttributesInput
 */
export interface SnsSetEndpointAttributesInput {
  /**
   * @schema SnsSetEndpointAttributesInput#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema SnsSetEndpointAttributesInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsSetEndpointAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSetEndpointAttributesInput(obj: SnsSetEndpointAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSetPlatformApplicationAttributesInput
 */
export interface SnsSetPlatformApplicationAttributesInput {
  /**
   * @schema SnsSetPlatformApplicationAttributesInput#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

  /**
   * @schema SnsSetPlatformApplicationAttributesInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsSetPlatformApplicationAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSetPlatformApplicationAttributesInput(obj: SnsSetPlatformApplicationAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSetSmsAttributesInput
 */
export interface SnsSetSmsAttributesInput {
  /**
   * @schema SnsSetSmsAttributesInput#attributes
   */
  readonly attributes: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsSetSmsAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSetSmsAttributesInput(obj: SnsSetSmsAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSetSmsAttributesResponse
 */
export interface SnsSetSmsAttributesResponse {
}

/**
 * Converts an object of type 'SnsSetSmsAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSetSmsAttributesResponse(obj: SnsSetSmsAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSetSubscriptionAttributesInput
 */
export interface SnsSetSubscriptionAttributesInput {
  /**
   * @schema SnsSetSubscriptionAttributesInput#SubscriptionArn
   */
  readonly subscriptionArn?: string;

  /**
   * @schema SnsSetSubscriptionAttributesInput#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SnsSetSubscriptionAttributesInput#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'SnsSetSubscriptionAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSetSubscriptionAttributesInput(obj: SnsSetSubscriptionAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionArn': obj.subscriptionArn,
    'AttributeName': obj.attributeName,
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSetTopicAttributesInput
 */
export interface SnsSetTopicAttributesInput {
  /**
   * @schema SnsSetTopicAttributesInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsSetTopicAttributesInput#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SnsSetTopicAttributesInput#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'SnsSetTopicAttributesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSetTopicAttributesInput(obj: SnsSetTopicAttributesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'AttributeName': obj.attributeName,
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSubscribeInput
 */
export interface SnsSubscribeInput {
  /**
   * @schema SnsSubscribeInput#TopicArn
   */
  readonly topicArn?: string;

  /**
   * @schema SnsSubscribeInput#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SnsSubscribeInput#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SnsSubscribeInput#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema SnsSubscribeInput#ReturnSubscriptionArn
   */
  readonly returnSubscriptionArn?: boolean;

}

/**
 * Converts an object of type 'SnsSubscribeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSubscribeInput(obj: SnsSubscribeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
    'Protocol': obj.protocol,
    'Endpoint': obj.endpoint,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ReturnSubscriptionArn': obj.returnSubscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSubscribeResponse
 */
export interface SnsSubscribeResponse {
  /**
   * @schema SnsSubscribeResponse#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * Converts an object of type 'SnsSubscribeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSubscribeResponse(obj: SnsSubscribeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionArn': obj.subscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsTagResourceRequest
 */
export interface SnsTagResourceRequest {
  /**
   * @schema SnsTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SnsTagResourceRequest#Tags
   */
  readonly tags?: SnsTag[];

}

/**
 * Converts an object of type 'SnsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsTagResourceRequest(obj: SnsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_SnsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsTagResourceResponse
 */
export interface SnsTagResourceResponse {
}

/**
 * Converts an object of type 'SnsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsTagResourceResponse(obj: SnsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsUnsubscribeInput
 */
export interface SnsUnsubscribeInput {
  /**
   * @schema SnsUnsubscribeInput#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * Converts an object of type 'SnsUnsubscribeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsUnsubscribeInput(obj: SnsUnsubscribeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionArn': obj.subscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsUntagResourceRequest
 */
export interface SnsUntagResourceRequest {
  /**
   * @schema SnsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SnsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SnsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsUntagResourceRequest(obj: SnsUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SnsUntagResourceResponse
 */
export interface SnsUntagResourceResponse {
}

/**
 * Converts an object of type 'SnsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsUntagResourceResponse(obj: SnsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsVerifySmsSandboxPhoneNumberInput
 */
export interface SnsVerifySmsSandboxPhoneNumberInput {
  /**
   * @schema SnsVerifySmsSandboxPhoneNumberInput#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnsVerifySmsSandboxPhoneNumberInput#OneTimePassword
   */
  readonly oneTimePassword?: string;

}

/**
 * Converts an object of type 'SnsVerifySmsSandboxPhoneNumberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsVerifySmsSandboxPhoneNumberInput(obj: SnsVerifySmsSandboxPhoneNumberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': obj.phoneNumber,
    'OneTimePassword': obj.oneTimePassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsVerifySmsSandboxPhoneNumberResult
 */
export interface SnsVerifySmsSandboxPhoneNumberResult {
}

/**
 * Converts an object of type 'SnsVerifySmsSandboxPhoneNumberResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsVerifySmsSandboxPhoneNumberResult(obj: SnsVerifySmsSandboxPhoneNumberResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsTag
 */
export interface SnsTag {
  /**
   * @schema SnsTag#Key
   */
  readonly key?: string;

  /**
   * @schema SnsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SnsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsTag(obj: SnsTag | undefined): Record<string, any> | undefined {
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
 * @schema SnsEndpoint
 */
export interface SnsEndpoint {
  /**
   * @schema SnsEndpoint#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema SnsEndpoint#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsEndpoint(obj: SnsEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsPhoneNumberInformation
 */
export interface SnsPhoneNumberInformation {
  /**
   * @schema SnsPhoneNumberInformation#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema SnsPhoneNumberInformation#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnsPhoneNumberInformation#Status
   */
  readonly status?: string;

  /**
   * @schema SnsPhoneNumberInformation#Iso2CountryCode
   */
  readonly iso2CountryCode?: string;

  /**
   * @schema SnsPhoneNumberInformation#RouteType
   */
  readonly routeType?: string;

  /**
   * @schema SnsPhoneNumberInformation#NumberCapabilities
   */
  readonly numberCapabilities?: string[];

}

/**
 * Converts an object of type 'SnsPhoneNumberInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsPhoneNumberInformation(obj: SnsPhoneNumberInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedAt': obj.createdAt,
    'PhoneNumber': obj.phoneNumber,
    'Status': obj.status,
    'Iso2CountryCode': obj.iso2CountryCode,
    'RouteType': obj.routeType,
    'NumberCapabilities': obj.numberCapabilities?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsPlatformApplication
 */
export interface SnsPlatformApplication {
  /**
   * @schema SnsPlatformApplication#PlatformApplicationArn
   */
  readonly platformApplicationArn?: string;

  /**
   * @schema SnsPlatformApplication#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'SnsPlatformApplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsPlatformApplication(obj: SnsPlatformApplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlatformApplicationArn': obj.platformApplicationArn,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnssmsSandboxPhoneNumber
 */
export interface SnssmsSandboxPhoneNumber {
  /**
   * @schema SnssmsSandboxPhoneNumber#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema SnssmsSandboxPhoneNumber#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SnssmsSandboxPhoneNumber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnssmsSandboxPhoneNumber(obj: SnssmsSandboxPhoneNumber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': obj.phoneNumber,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsSubscription
 */
export interface SnsSubscription {
  /**
   * @schema SnsSubscription#SubscriptionArn
   */
  readonly subscriptionArn?: string;

  /**
   * @schema SnsSubscription#Owner
   */
  readonly owner?: string;

  /**
   * @schema SnsSubscription#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema SnsSubscription#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema SnsSubscription#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'SnsSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsSubscription(obj: SnsSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionArn': obj.subscriptionArn,
    'Owner': obj.owner,
    'Protocol': obj.protocol,
    'Endpoint': obj.endpoint,
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsTopic
 */
export interface SnsTopic {
  /**
   * @schema SnsTopic#TopicArn
   */
  readonly topicArn?: string;

}

/**
 * Converts an object of type 'SnsTopic' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsTopic(obj: SnsTopic | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SnsMessageAttributeValue
 */
export interface SnsMessageAttributeValue {
  /**
   * @schema SnsMessageAttributeValue#DataType
   */
  readonly dataType?: string;

  /**
   * @schema SnsMessageAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema SnsMessageAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

}

/**
 * Converts an object of type 'SnsMessageAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SnsMessageAttributeValue(obj: SnsMessageAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataType': obj.dataType,
    'StringValue': obj.stringValue,
    'BinaryValue': obj.binaryValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
