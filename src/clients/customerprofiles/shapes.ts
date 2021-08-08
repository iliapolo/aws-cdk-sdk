/**
 * @schema CustomerProfilesAddProfileKeyRequest
 */
export interface CustomerProfilesAddProfileKeyRequest {
  /**
   * @schema CustomerProfilesAddProfileKeyRequest#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CustomerProfilesAddProfileKeyRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema CustomerProfilesAddProfileKeyRequest#Values
   */
  readonly values?: string[];

  /**
   * @schema CustomerProfilesAddProfileKeyRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesAddProfileKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesAddProfileKeyRequest(obj: CustomerProfilesAddProfileKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
    'KeyName': obj.keyName,
    'Values': obj.values?.map(y => y),
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesAddProfileKeyResponse
 */
export interface CustomerProfilesAddProfileKeyResponse {
  /**
   * @schema CustomerProfilesAddProfileKeyResponse#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema CustomerProfilesAddProfileKeyResponse#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'CustomerProfilesAddProfileKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesAddProfileKeyResponse(obj: CustomerProfilesAddProfileKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyName': obj.keyName,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesCreateDomainRequest
 */
export interface CustomerProfilesCreateDomainRequest {
  /**
   * @schema CustomerProfilesCreateDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesCreateDomainRequest#DefaultExpirationDays
   */
  readonly defaultExpirationDays?: number;

  /**
   * @schema CustomerProfilesCreateDomainRequest#DefaultEncryptionKey
   */
  readonly defaultEncryptionKey?: string;

  /**
   * @schema CustomerProfilesCreateDomainRequest#DeadLetterQueueUrl
   */
  readonly deadLetterQueueUrl?: string;

  /**
   * @schema CustomerProfilesCreateDomainRequest#Matching
   */
  readonly matching?: CustomerProfilesMatchingRequest;

  /**
   * @schema CustomerProfilesCreateDomainRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesCreateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesCreateDomainRequest(obj: CustomerProfilesCreateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DefaultExpirationDays': obj.defaultExpirationDays,
    'DefaultEncryptionKey': obj.defaultEncryptionKey,
    'DeadLetterQueueUrl': obj.deadLetterQueueUrl,
    'Matching': toJson_CustomerProfilesMatchingRequest(obj.matching),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesCreateDomainResponse
 */
export interface CustomerProfilesCreateDomainResponse {
  /**
   * @schema CustomerProfilesCreateDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesCreateDomainResponse#DefaultExpirationDays
   */
  readonly defaultExpirationDays?: number;

  /**
   * @schema CustomerProfilesCreateDomainResponse#DefaultEncryptionKey
   */
  readonly defaultEncryptionKey?: string;

  /**
   * @schema CustomerProfilesCreateDomainResponse#DeadLetterQueueUrl
   */
  readonly deadLetterQueueUrl?: string;

  /**
   * @schema CustomerProfilesCreateDomainResponse#Matching
   */
  readonly matching?: CustomerProfilesMatchingResponse;

  /**
   * @schema CustomerProfilesCreateDomainResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesCreateDomainResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesCreateDomainResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesCreateDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesCreateDomainResponse(obj: CustomerProfilesCreateDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DefaultExpirationDays': obj.defaultExpirationDays,
    'DefaultEncryptionKey': obj.defaultEncryptionKey,
    'DeadLetterQueueUrl': obj.deadLetterQueueUrl,
    'Matching': toJson_CustomerProfilesMatchingResponse(obj.matching),
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesCreateProfileRequest
 */
export interface CustomerProfilesCreateProfileRequest {
  /**
   * @schema CustomerProfilesCreateProfileRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#AccountNumber
   */
  readonly accountNumber?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#AdditionalInformation
   */
  readonly additionalInformation?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#PartyType
   */
  readonly partyType?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#BusinessName
   */
  readonly businessName?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#MiddleName
   */
  readonly middleName?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#BirthDate
   */
  readonly birthDate?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#Gender
   */
  readonly gender?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#MobilePhoneNumber
   */
  readonly mobilePhoneNumber?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#HomePhoneNumber
   */
  readonly homePhoneNumber?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#BusinessPhoneNumber
   */
  readonly businessPhoneNumber?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#PersonalEmailAddress
   */
  readonly personalEmailAddress?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#BusinessEmailAddress
   */
  readonly businessEmailAddress?: string;

  /**
   * @schema CustomerProfilesCreateProfileRequest#Address
   */
  readonly address?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesCreateProfileRequest#ShippingAddress
   */
  readonly shippingAddress?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesCreateProfileRequest#MailingAddress
   */
  readonly mailingAddress?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesCreateProfileRequest#BillingAddress
   */
  readonly billingAddress?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesCreateProfileRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesCreateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesCreateProfileRequest(obj: CustomerProfilesCreateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AccountNumber': obj.accountNumber,
    'AdditionalInformation': obj.additionalInformation,
    'PartyType': obj.partyType,
    'BusinessName': obj.businessName,
    'FirstName': obj.firstName,
    'MiddleName': obj.middleName,
    'LastName': obj.lastName,
    'BirthDate': obj.birthDate,
    'Gender': obj.gender,
    'PhoneNumber': obj.phoneNumber,
    'MobilePhoneNumber': obj.mobilePhoneNumber,
    'HomePhoneNumber': obj.homePhoneNumber,
    'BusinessPhoneNumber': obj.businessPhoneNumber,
    'EmailAddress': obj.emailAddress,
    'PersonalEmailAddress': obj.personalEmailAddress,
    'BusinessEmailAddress': obj.businessEmailAddress,
    'Address': toJson_CustomerProfilesAddress(obj.address),
    'ShippingAddress': toJson_CustomerProfilesAddress(obj.shippingAddress),
    'MailingAddress': toJson_CustomerProfilesAddress(obj.mailingAddress),
    'BillingAddress': toJson_CustomerProfilesAddress(obj.billingAddress),
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesCreateProfileResponse
 */
export interface CustomerProfilesCreateProfileResponse {
  /**
   * @schema CustomerProfilesCreateProfileResponse#ProfileId
   */
  readonly profileId?: string;

}

/**
 * Converts an object of type 'CustomerProfilesCreateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesCreateProfileResponse(obj: CustomerProfilesCreateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteDomainRequest
 */
export interface CustomerProfilesDeleteDomainRequest {
  /**
   * @schema CustomerProfilesDeleteDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteDomainRequest(obj: CustomerProfilesDeleteDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteDomainResponse
 */
export interface CustomerProfilesDeleteDomainResponse {
  /**
   * @schema CustomerProfilesDeleteDomainResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteDomainResponse(obj: CustomerProfilesDeleteDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteIntegrationRequest
 */
export interface CustomerProfilesDeleteIntegrationRequest {
  /**
   * @schema CustomerProfilesDeleteIntegrationRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesDeleteIntegrationRequest#Uri
   */
  readonly uri?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteIntegrationRequest(obj: CustomerProfilesDeleteIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Uri': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteIntegrationResponse
 */
export interface CustomerProfilesDeleteIntegrationResponse {
  /**
   * @schema CustomerProfilesDeleteIntegrationResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteIntegrationResponse(obj: CustomerProfilesDeleteIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileRequest
 */
export interface CustomerProfilesDeleteProfileRequest {
  /**
   * @schema CustomerProfilesDeleteProfileRequest#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CustomerProfilesDeleteProfileRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileRequest(obj: CustomerProfilesDeleteProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileResponse
 */
export interface CustomerProfilesDeleteProfileResponse {
  /**
   * @schema CustomerProfilesDeleteProfileResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileResponse(obj: CustomerProfilesDeleteProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileKeyRequest
 */
export interface CustomerProfilesDeleteProfileKeyRequest {
  /**
   * @schema CustomerProfilesDeleteProfileKeyRequest#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CustomerProfilesDeleteProfileKeyRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema CustomerProfilesDeleteProfileKeyRequest#Values
   */
  readonly values?: string[];

  /**
   * @schema CustomerProfilesDeleteProfileKeyRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileKeyRequest(obj: CustomerProfilesDeleteProfileKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
    'KeyName': obj.keyName,
    'Values': obj.values?.map(y => y),
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileKeyResponse
 */
export interface CustomerProfilesDeleteProfileKeyResponse {
  /**
   * @schema CustomerProfilesDeleteProfileKeyResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileKeyResponse(obj: CustomerProfilesDeleteProfileKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileObjectRequest
 */
export interface CustomerProfilesDeleteProfileObjectRequest {
  /**
   * @schema CustomerProfilesDeleteProfileObjectRequest#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CustomerProfilesDeleteProfileObjectRequest#ProfileObjectUniqueKey
   */
  readonly profileObjectUniqueKey?: string;

  /**
   * @schema CustomerProfilesDeleteProfileObjectRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesDeleteProfileObjectRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileObjectRequest(obj: CustomerProfilesDeleteProfileObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
    'ProfileObjectUniqueKey': obj.profileObjectUniqueKey,
    'ObjectTypeName': obj.objectTypeName,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileObjectResponse
 */
export interface CustomerProfilesDeleteProfileObjectResponse {
  /**
   * @schema CustomerProfilesDeleteProfileObjectResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileObjectResponse(obj: CustomerProfilesDeleteProfileObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileObjectTypeRequest
 */
export interface CustomerProfilesDeleteProfileObjectTypeRequest {
  /**
   * @schema CustomerProfilesDeleteProfileObjectTypeRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesDeleteProfileObjectTypeRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileObjectTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileObjectTypeRequest(obj: CustomerProfilesDeleteProfileObjectTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ObjectTypeName': obj.objectTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDeleteProfileObjectTypeResponse
 */
export interface CustomerProfilesDeleteProfileObjectTypeResponse {
  /**
   * @schema CustomerProfilesDeleteProfileObjectTypeResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesDeleteProfileObjectTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDeleteProfileObjectTypeResponse(obj: CustomerProfilesDeleteProfileObjectTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetDomainRequest
 */
export interface CustomerProfilesGetDomainRequest {
  /**
   * @schema CustomerProfilesGetDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesGetDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetDomainRequest(obj: CustomerProfilesGetDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetDomainResponse
 */
export interface CustomerProfilesGetDomainResponse {
  /**
   * @schema CustomerProfilesGetDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesGetDomainResponse#DefaultExpirationDays
   */
  readonly defaultExpirationDays?: number;

  /**
   * @schema CustomerProfilesGetDomainResponse#DefaultEncryptionKey
   */
  readonly defaultEncryptionKey?: string;

  /**
   * @schema CustomerProfilesGetDomainResponse#DeadLetterQueueUrl
   */
  readonly deadLetterQueueUrl?: string;

  /**
   * @schema CustomerProfilesGetDomainResponse#Stats
   */
  readonly stats?: CustomerProfilesDomainStats;

  /**
   * @schema CustomerProfilesGetDomainResponse#Matching
   */
  readonly matching?: CustomerProfilesMatchingResponse;

  /**
   * @schema CustomerProfilesGetDomainResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesGetDomainResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesGetDomainResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesGetDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetDomainResponse(obj: CustomerProfilesGetDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DefaultExpirationDays': obj.defaultExpirationDays,
    'DefaultEncryptionKey': obj.defaultEncryptionKey,
    'DeadLetterQueueUrl': obj.deadLetterQueueUrl,
    'Stats': toJson_CustomerProfilesDomainStats(obj.stats),
    'Matching': toJson_CustomerProfilesMatchingResponse(obj.matching),
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetIntegrationRequest
 */
export interface CustomerProfilesGetIntegrationRequest {
  /**
   * @schema CustomerProfilesGetIntegrationRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesGetIntegrationRequest#Uri
   */
  readonly uri?: string;

}

/**
 * Converts an object of type 'CustomerProfilesGetIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetIntegrationRequest(obj: CustomerProfilesGetIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Uri': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetIntegrationResponse
 */
export interface CustomerProfilesGetIntegrationResponse {
  /**
   * @schema CustomerProfilesGetIntegrationResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesGetIntegrationResponse#Uri
   */
  readonly uri?: string;

  /**
   * @schema CustomerProfilesGetIntegrationResponse#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesGetIntegrationResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesGetIntegrationResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesGetIntegrationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesGetIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetIntegrationResponse(obj: CustomerProfilesGetIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Uri': obj.uri,
    'ObjectTypeName': obj.objectTypeName,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetMatchesRequest
 */
export interface CustomerProfilesGetMatchesRequest {
  /**
   * @schema CustomerProfilesGetMatchesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesGetMatchesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CustomerProfilesGetMatchesRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesGetMatchesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetMatchesRequest(obj: CustomerProfilesGetMatchesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetMatchesResponse
 */
export interface CustomerProfilesGetMatchesResponse {
  /**
   * @schema CustomerProfilesGetMatchesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesGetMatchesResponse#MatchGenerationDate
   */
  readonly matchGenerationDate?: string;

  /**
   * @schema CustomerProfilesGetMatchesResponse#PotentialMatches
   */
  readonly potentialMatches?: number;

  /**
   * @schema CustomerProfilesGetMatchesResponse#Matches
   */
  readonly matches?: CustomerProfilesMatchItem[];

}

/**
 * Converts an object of type 'CustomerProfilesGetMatchesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetMatchesResponse(obj: CustomerProfilesGetMatchesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MatchGenerationDate': obj.matchGenerationDate,
    'PotentialMatches': obj.potentialMatches,
    'Matches': obj.matches?.map(y => toJson_CustomerProfilesMatchItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetProfileObjectTypeRequest
 */
export interface CustomerProfilesGetProfileObjectTypeRequest {
  /**
   * @schema CustomerProfilesGetProfileObjectTypeRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesGetProfileObjectTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetProfileObjectTypeRequest(obj: CustomerProfilesGetProfileObjectTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ObjectTypeName': obj.objectTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetProfileObjectTypeResponse
 */
export interface CustomerProfilesGetProfileObjectTypeResponse {
  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#ExpirationDays
   */
  readonly expirationDays?: number;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#EncryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#AllowProfileCreation
   */
  readonly allowProfileCreation?: boolean;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#Fields
   */
  readonly fields?: { [key: string]: CustomerProfilesObjectTypeField };

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#Keys
   */
  readonly keys?: { [key: string]: CustomerProfilesObjectTypeKey[] };

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesGetProfileObjectTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetProfileObjectTypeResponse(obj: CustomerProfilesGetProfileObjectTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectTypeName': obj.objectTypeName,
    'Description': obj.description,
    'TemplateId': obj.templateId,
    'ExpirationDays': obj.expirationDays,
    'EncryptionKey': obj.encryptionKey,
    'AllowProfileCreation': obj.allowProfileCreation,
    'Fields': ((obj.fields) === undefined) ? undefined : (Object.entries(obj.fields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CustomerProfilesObjectTypeField(i[1]) }), {})),
    'Keys': ((obj.keys) === undefined) ? undefined : (Object.entries(obj.keys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_CustomerProfilesObjectTypeKey(y)) }), {})),
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetProfileObjectTypeTemplateRequest
 */
export interface CustomerProfilesGetProfileObjectTypeTemplateRequest {
  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateRequest#TemplateId
   */
  readonly templateId?: string;

}

/**
 * Converts an object of type 'CustomerProfilesGetProfileObjectTypeTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetProfileObjectTypeTemplateRequest(obj: CustomerProfilesGetProfileObjectTypeTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateId': obj.templateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse
 */
export interface CustomerProfilesGetProfileObjectTypeTemplateResponse {
  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse#SourceName
   */
  readonly sourceName?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse#SourceObject
   */
  readonly sourceObject?: string;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse#AllowProfileCreation
   */
  readonly allowProfileCreation?: boolean;

  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse#Fields
   */
  readonly fields?: { [key: string]: CustomerProfilesObjectTypeField };

  /**
   * @schema CustomerProfilesGetProfileObjectTypeTemplateResponse#Keys
   */
  readonly keys?: { [key: string]: CustomerProfilesObjectTypeKey[] };

}

/**
 * Converts an object of type 'CustomerProfilesGetProfileObjectTypeTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesGetProfileObjectTypeTemplateResponse(obj: CustomerProfilesGetProfileObjectTypeTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateId': obj.templateId,
    'SourceName': obj.sourceName,
    'SourceObject': obj.sourceObject,
    'AllowProfileCreation': obj.allowProfileCreation,
    'Fields': ((obj.fields) === undefined) ? undefined : (Object.entries(obj.fields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CustomerProfilesObjectTypeField(i[1]) }), {})),
    'Keys': ((obj.keys) === undefined) ? undefined : (Object.entries(obj.keys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_CustomerProfilesObjectTypeKey(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListAccountIntegrationsRequest
 */
export interface CustomerProfilesListAccountIntegrationsRequest {
  /**
   * @schema CustomerProfilesListAccountIntegrationsRequest#Uri
   */
  readonly uri?: string;

  /**
   * @schema CustomerProfilesListAccountIntegrationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesListAccountIntegrationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CustomerProfilesListAccountIntegrationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListAccountIntegrationsRequest(obj: CustomerProfilesListAccountIntegrationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Uri': obj.uri,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListAccountIntegrationsResponse
 */
export interface CustomerProfilesListAccountIntegrationsResponse {
  /**
   * @schema CustomerProfilesListAccountIntegrationsResponse#Items
   */
  readonly items?: CustomerProfilesListIntegrationItem[];

  /**
   * @schema CustomerProfilesListAccountIntegrationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListAccountIntegrationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListAccountIntegrationsResponse(obj: CustomerProfilesListAccountIntegrationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesListIntegrationItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListDomainsRequest
 */
export interface CustomerProfilesListDomainsRequest {
  /**
   * @schema CustomerProfilesListDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesListDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CustomerProfilesListDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListDomainsRequest(obj: CustomerProfilesListDomainsRequest | undefined): Record<string, any> | undefined {
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
 * @schema CustomerProfilesListDomainsResponse
 */
export interface CustomerProfilesListDomainsResponse {
  /**
   * @schema CustomerProfilesListDomainsResponse#Items
   */
  readonly items?: CustomerProfilesListDomainItem[];

  /**
   * @schema CustomerProfilesListDomainsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListDomainsResponse(obj: CustomerProfilesListDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesListDomainItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListIntegrationsRequest
 */
export interface CustomerProfilesListIntegrationsRequest {
  /**
   * @schema CustomerProfilesListIntegrationsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesListIntegrationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesListIntegrationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CustomerProfilesListIntegrationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListIntegrationsRequest(obj: CustomerProfilesListIntegrationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListIntegrationsResponse
 */
export interface CustomerProfilesListIntegrationsResponse {
  /**
   * @schema CustomerProfilesListIntegrationsResponse#Items
   */
  readonly items?: CustomerProfilesListIntegrationItem[];

  /**
   * @schema CustomerProfilesListIntegrationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListIntegrationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListIntegrationsResponse(obj: CustomerProfilesListIntegrationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesListIntegrationItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectTypeTemplatesRequest
 */
export interface CustomerProfilesListProfileObjectTypeTemplatesRequest {
  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectTypeTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectTypeTemplatesRequest(obj: CustomerProfilesListProfileObjectTypeTemplatesRequest | undefined): Record<string, any> | undefined {
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
 * @schema CustomerProfilesListProfileObjectTypeTemplatesResponse
 */
export interface CustomerProfilesListProfileObjectTypeTemplatesResponse {
  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplatesResponse#Items
   */
  readonly items?: CustomerProfilesListProfileObjectTypeTemplateItem[];

  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectTypeTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectTypeTemplatesResponse(obj: CustomerProfilesListProfileObjectTypeTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesListProfileObjectTypeTemplateItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectTypesRequest
 */
export interface CustomerProfilesListProfileObjectTypesRequest {
  /**
   * @schema CustomerProfilesListProfileObjectTypesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectTypesRequest(obj: CustomerProfilesListProfileObjectTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectTypesResponse
 */
export interface CustomerProfilesListProfileObjectTypesResponse {
  /**
   * @schema CustomerProfilesListProfileObjectTypesResponse#Items
   */
  readonly items?: CustomerProfilesListProfileObjectTypeItem[];

  /**
   * @schema CustomerProfilesListProfileObjectTypesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectTypesResponse(obj: CustomerProfilesListProfileObjectTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesListProfileObjectTypeItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectsRequest
 */
export interface CustomerProfilesListProfileObjectsRequest {
  /**
   * @schema CustomerProfilesListProfileObjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesListProfileObjectsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CustomerProfilesListProfileObjectsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesListProfileObjectsRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesListProfileObjectsRequest#ProfileId
   */
  readonly profileId?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectsRequest(obj: CustomerProfilesListProfileObjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'DomainName': obj.domainName,
    'ObjectTypeName': obj.objectTypeName,
    'ProfileId': obj.profileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectsResponse
 */
export interface CustomerProfilesListProfileObjectsResponse {
  /**
   * @schema CustomerProfilesListProfileObjectsResponse#Items
   */
  readonly items?: CustomerProfilesListProfileObjectsItem[];

  /**
   * @schema CustomerProfilesListProfileObjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectsResponse(obj: CustomerProfilesListProfileObjectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesListProfileObjectsItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListTagsForResourceRequest
 */
export interface CustomerProfilesListTagsForResourceRequest {
  /**
   * @schema CustomerProfilesListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CustomerProfilesListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListTagsForResourceRequest(obj: CustomerProfilesListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListTagsForResourceResponse
 */
export interface CustomerProfilesListTagsForResourceResponse {
  /**
   * @schema CustomerProfilesListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListTagsForResourceResponse(obj: CustomerProfilesListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesMergeProfilesRequest
 */
export interface CustomerProfilesMergeProfilesRequest {
  /**
   * @schema CustomerProfilesMergeProfilesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesMergeProfilesRequest#MainProfileId
   */
  readonly mainProfileId?: string;

  /**
   * @schema CustomerProfilesMergeProfilesRequest#ProfileIdsToBeMerged
   */
  readonly profileIdsToBeMerged?: string[];

  /**
   * @schema CustomerProfilesMergeProfilesRequest#FieldSourceProfileIds
   */
  readonly fieldSourceProfileIds?: CustomerProfilesFieldSourceProfileIds;

}

/**
 * Converts an object of type 'CustomerProfilesMergeProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesMergeProfilesRequest(obj: CustomerProfilesMergeProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'MainProfileId': obj.mainProfileId,
    'ProfileIdsToBeMerged': obj.profileIdsToBeMerged?.map(y => y),
    'FieldSourceProfileIds': toJson_CustomerProfilesFieldSourceProfileIds(obj.fieldSourceProfileIds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesMergeProfilesResponse
 */
export interface CustomerProfilesMergeProfilesResponse {
  /**
   * @schema CustomerProfilesMergeProfilesResponse#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CustomerProfilesMergeProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesMergeProfilesResponse(obj: CustomerProfilesMergeProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesPutIntegrationRequest
 */
export interface CustomerProfilesPutIntegrationRequest {
  /**
   * @schema CustomerProfilesPutIntegrationRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesPutIntegrationRequest#Uri
   */
  readonly uri?: string;

  /**
   * @schema CustomerProfilesPutIntegrationRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesPutIntegrationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CustomerProfilesPutIntegrationRequest#FlowDefinition
   */
  readonly flowDefinition?: CustomerProfilesFlowDefinition;

}

/**
 * Converts an object of type 'CustomerProfilesPutIntegrationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesPutIntegrationRequest(obj: CustomerProfilesPutIntegrationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Uri': obj.uri,
    'ObjectTypeName': obj.objectTypeName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'FlowDefinition': toJson_CustomerProfilesFlowDefinition(obj.flowDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesPutIntegrationResponse
 */
export interface CustomerProfilesPutIntegrationResponse {
  /**
   * @schema CustomerProfilesPutIntegrationResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesPutIntegrationResponse#Uri
   */
  readonly uri?: string;

  /**
   * @schema CustomerProfilesPutIntegrationResponse#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesPutIntegrationResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesPutIntegrationResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesPutIntegrationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesPutIntegrationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesPutIntegrationResponse(obj: CustomerProfilesPutIntegrationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Uri': obj.uri,
    'ObjectTypeName': obj.objectTypeName,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesPutProfileObjectRequest
 */
export interface CustomerProfilesPutProfileObjectRequest {
  /**
   * @schema CustomerProfilesPutProfileObjectRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectRequest#Object
   */
  readonly object?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesPutProfileObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesPutProfileObjectRequest(obj: CustomerProfilesPutProfileObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectTypeName': obj.objectTypeName,
    'Object': obj.object,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesPutProfileObjectResponse
 */
export interface CustomerProfilesPutProfileObjectResponse {
  /**
   * @schema CustomerProfilesPutProfileObjectResponse#ProfileObjectUniqueKey
   */
  readonly profileObjectUniqueKey?: string;

}

/**
 * Converts an object of type 'CustomerProfilesPutProfileObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesPutProfileObjectResponse(obj: CustomerProfilesPutProfileObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileObjectUniqueKey': obj.profileObjectUniqueKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesPutProfileObjectTypeRequest
 */
export interface CustomerProfilesPutProfileObjectTypeRequest {
  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#ExpirationDays
   */
  readonly expirationDays?: number;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#EncryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#AllowProfileCreation
   */
  readonly allowProfileCreation?: boolean;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#Fields
   */
  readonly fields?: { [key: string]: CustomerProfilesObjectTypeField };

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#Keys
   */
  readonly keys?: { [key: string]: CustomerProfilesObjectTypeKey[] };

  /**
   * @schema CustomerProfilesPutProfileObjectTypeRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesPutProfileObjectTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesPutProfileObjectTypeRequest(obj: CustomerProfilesPutProfileObjectTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ObjectTypeName': obj.objectTypeName,
    'Description': obj.description,
    'TemplateId': obj.templateId,
    'ExpirationDays': obj.expirationDays,
    'EncryptionKey': obj.encryptionKey,
    'AllowProfileCreation': obj.allowProfileCreation,
    'Fields': ((obj.fields) === undefined) ? undefined : (Object.entries(obj.fields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CustomerProfilesObjectTypeField(i[1]) }), {})),
    'Keys': ((obj.keys) === undefined) ? undefined : (Object.entries(obj.keys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_CustomerProfilesObjectTypeKey(y)) }), {})),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesPutProfileObjectTypeResponse
 */
export interface CustomerProfilesPutProfileObjectTypeResponse {
  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#ExpirationDays
   */
  readonly expirationDays?: number;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#EncryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#AllowProfileCreation
   */
  readonly allowProfileCreation?: boolean;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#Fields
   */
  readonly fields?: { [key: string]: CustomerProfilesObjectTypeField };

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#Keys
   */
  readonly keys?: { [key: string]: CustomerProfilesObjectTypeKey[] };

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesPutProfileObjectTypeResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesPutProfileObjectTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesPutProfileObjectTypeResponse(obj: CustomerProfilesPutProfileObjectTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectTypeName': obj.objectTypeName,
    'Description': obj.description,
    'TemplateId': obj.templateId,
    'ExpirationDays': obj.expirationDays,
    'EncryptionKey': obj.encryptionKey,
    'AllowProfileCreation': obj.allowProfileCreation,
    'Fields': ((obj.fields) === undefined) ? undefined : (Object.entries(obj.fields).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CustomerProfilesObjectTypeField(i[1]) }), {})),
    'Keys': ((obj.keys) === undefined) ? undefined : (Object.entries(obj.keys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_CustomerProfilesObjectTypeKey(y)) }), {})),
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesSearchProfilesRequest
 */
export interface CustomerProfilesSearchProfilesRequest {
  /**
   * @schema CustomerProfilesSearchProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CustomerProfilesSearchProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CustomerProfilesSearchProfilesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesSearchProfilesRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema CustomerProfilesSearchProfilesRequest#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'CustomerProfilesSearchProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesSearchProfilesRequest(obj: CustomerProfilesSearchProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'DomainName': obj.domainName,
    'KeyName': obj.keyName,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesSearchProfilesResponse
 */
export interface CustomerProfilesSearchProfilesResponse {
  /**
   * @schema CustomerProfilesSearchProfilesResponse#Items
   */
  readonly items?: CustomerProfilesProfile[];

  /**
   * @schema CustomerProfilesSearchProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CustomerProfilesSearchProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesSearchProfilesResponse(obj: CustomerProfilesSearchProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Items': obj.items?.map(y => toJson_CustomerProfilesProfile(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesTagResourceRequest
 */
export interface CustomerProfilesTagResourceRequest {
  /**
   * @schema CustomerProfilesTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CustomerProfilesTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesTagResourceRequest(obj: CustomerProfilesTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesTagResourceResponse
 */
export interface CustomerProfilesTagResourceResponse {
}

/**
 * Converts an object of type 'CustomerProfilesTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesTagResourceResponse(obj: CustomerProfilesTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUntagResourceRequest
 */
export interface CustomerProfilesUntagResourceRequest {
  /**
   * @schema CustomerProfilesUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CustomerProfilesUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'CustomerProfilesUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUntagResourceRequest(obj: CustomerProfilesUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUntagResourceResponse
 */
export interface CustomerProfilesUntagResourceResponse {
}

/**
 * Converts an object of type 'CustomerProfilesUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUntagResourceResponse(obj: CustomerProfilesUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUpdateDomainRequest
 */
export interface CustomerProfilesUpdateDomainRequest {
  /**
   * @schema CustomerProfilesUpdateDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesUpdateDomainRequest#DefaultExpirationDays
   */
  readonly defaultExpirationDays?: number;

  /**
   * @schema CustomerProfilesUpdateDomainRequest#DefaultEncryptionKey
   */
  readonly defaultEncryptionKey?: string;

  /**
   * @schema CustomerProfilesUpdateDomainRequest#DeadLetterQueueUrl
   */
  readonly deadLetterQueueUrl?: string;

  /**
   * @schema CustomerProfilesUpdateDomainRequest#Matching
   */
  readonly matching?: CustomerProfilesMatchingRequest;

  /**
   * @schema CustomerProfilesUpdateDomainRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesUpdateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUpdateDomainRequest(obj: CustomerProfilesUpdateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DefaultExpirationDays': obj.defaultExpirationDays,
    'DefaultEncryptionKey': obj.defaultEncryptionKey,
    'DeadLetterQueueUrl': obj.deadLetterQueueUrl,
    'Matching': toJson_CustomerProfilesMatchingRequest(obj.matching),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUpdateDomainResponse
 */
export interface CustomerProfilesUpdateDomainResponse {
  /**
   * @schema CustomerProfilesUpdateDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#DefaultExpirationDays
   */
  readonly defaultExpirationDays?: number;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#DefaultEncryptionKey
   */
  readonly defaultEncryptionKey?: string;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#DeadLetterQueueUrl
   */
  readonly deadLetterQueueUrl?: string;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#Matching
   */
  readonly matching?: CustomerProfilesMatchingResponse;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesUpdateDomainResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesUpdateDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUpdateDomainResponse(obj: CustomerProfilesUpdateDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DefaultExpirationDays': obj.defaultExpirationDays,
    'DefaultEncryptionKey': obj.defaultEncryptionKey,
    'DeadLetterQueueUrl': obj.deadLetterQueueUrl,
    'Matching': toJson_CustomerProfilesMatchingResponse(obj.matching),
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUpdateProfileRequest
 */
export interface CustomerProfilesUpdateProfileRequest {
  /**
   * @schema CustomerProfilesUpdateProfileRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#AdditionalInformation
   */
  readonly additionalInformation?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#AccountNumber
   */
  readonly accountNumber?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#PartyType
   */
  readonly partyType?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#BusinessName
   */
  readonly businessName?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#MiddleName
   */
  readonly middleName?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#BirthDate
   */
  readonly birthDate?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#Gender
   */
  readonly gender?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#MobilePhoneNumber
   */
  readonly mobilePhoneNumber?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#HomePhoneNumber
   */
  readonly homePhoneNumber?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#BusinessPhoneNumber
   */
  readonly businessPhoneNumber?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#PersonalEmailAddress
   */
  readonly personalEmailAddress?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#BusinessEmailAddress
   */
  readonly businessEmailAddress?: string;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#Address
   */
  readonly address?: CustomerProfilesUpdateAddress;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#ShippingAddress
   */
  readonly shippingAddress?: CustomerProfilesUpdateAddress;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#MailingAddress
   */
  readonly mailingAddress?: CustomerProfilesUpdateAddress;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#BillingAddress
   */
  readonly billingAddress?: CustomerProfilesUpdateAddress;

  /**
   * @schema CustomerProfilesUpdateProfileRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesUpdateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUpdateProfileRequest(obj: CustomerProfilesUpdateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ProfileId': obj.profileId,
    'AdditionalInformation': obj.additionalInformation,
    'AccountNumber': obj.accountNumber,
    'PartyType': obj.partyType,
    'BusinessName': obj.businessName,
    'FirstName': obj.firstName,
    'MiddleName': obj.middleName,
    'LastName': obj.lastName,
    'BirthDate': obj.birthDate,
    'Gender': obj.gender,
    'PhoneNumber': obj.phoneNumber,
    'MobilePhoneNumber': obj.mobilePhoneNumber,
    'HomePhoneNumber': obj.homePhoneNumber,
    'BusinessPhoneNumber': obj.businessPhoneNumber,
    'EmailAddress': obj.emailAddress,
    'PersonalEmailAddress': obj.personalEmailAddress,
    'BusinessEmailAddress': obj.businessEmailAddress,
    'Address': toJson_CustomerProfilesUpdateAddress(obj.address),
    'ShippingAddress': toJson_CustomerProfilesUpdateAddress(obj.shippingAddress),
    'MailingAddress': toJson_CustomerProfilesUpdateAddress(obj.mailingAddress),
    'BillingAddress': toJson_CustomerProfilesUpdateAddress(obj.billingAddress),
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUpdateProfileResponse
 */
export interface CustomerProfilesUpdateProfileResponse {
  /**
   * @schema CustomerProfilesUpdateProfileResponse#ProfileId
   */
  readonly profileId?: string;

}

/**
 * Converts an object of type 'CustomerProfilesUpdateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUpdateProfileResponse(obj: CustomerProfilesUpdateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesMatchingRequest
 */
export interface CustomerProfilesMatchingRequest {
  /**
   * @schema CustomerProfilesMatchingRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'CustomerProfilesMatchingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesMatchingRequest(obj: CustomerProfilesMatchingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesMatchingResponse
 */
export interface CustomerProfilesMatchingResponse {
  /**
   * @schema CustomerProfilesMatchingResponse#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'CustomerProfilesMatchingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesMatchingResponse(obj: CustomerProfilesMatchingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesAddress
 */
export interface CustomerProfilesAddress {
  /**
   * @schema CustomerProfilesAddress#Address1
   */
  readonly address1?: string;

  /**
   * @schema CustomerProfilesAddress#Address2
   */
  readonly address2?: string;

  /**
   * @schema CustomerProfilesAddress#Address3
   */
  readonly address3?: string;

  /**
   * @schema CustomerProfilesAddress#Address4
   */
  readonly address4?: string;

  /**
   * @schema CustomerProfilesAddress#City
   */
  readonly city?: string;

  /**
   * @schema CustomerProfilesAddress#County
   */
  readonly county?: string;

  /**
   * @schema CustomerProfilesAddress#State
   */
  readonly state?: string;

  /**
   * @schema CustomerProfilesAddress#Province
   */
  readonly province?: string;

  /**
   * @schema CustomerProfilesAddress#Country
   */
  readonly country?: string;

  /**
   * @schema CustomerProfilesAddress#PostalCode
   */
  readonly postalCode?: string;

}

/**
 * Converts an object of type 'CustomerProfilesAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesAddress(obj: CustomerProfilesAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address1': obj.address1,
    'Address2': obj.address2,
    'Address3': obj.address3,
    'Address4': obj.address4,
    'City': obj.city,
    'County': obj.county,
    'State': obj.state,
    'Province': obj.province,
    'Country': obj.country,
    'PostalCode': obj.postalCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesDomainStats
 */
export interface CustomerProfilesDomainStats {
  /**
   * @schema CustomerProfilesDomainStats#ProfileCount
   */
  readonly profileCount?: number;

  /**
   * @schema CustomerProfilesDomainStats#MeteringProfileCount
   */
  readonly meteringProfileCount?: number;

  /**
   * @schema CustomerProfilesDomainStats#ObjectCount
   */
  readonly objectCount?: number;

  /**
   * @schema CustomerProfilesDomainStats#TotalSize
   */
  readonly totalSize?: number;

}

/**
 * Converts an object of type 'CustomerProfilesDomainStats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesDomainStats(obj: CustomerProfilesDomainStats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileCount': obj.profileCount,
    'MeteringProfileCount': obj.meteringProfileCount,
    'ObjectCount': obj.objectCount,
    'TotalSize': obj.totalSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesMatchItem
 */
export interface CustomerProfilesMatchItem {
  /**
   * @schema CustomerProfilesMatchItem#MatchId
   */
  readonly matchId?: string;

  /**
   * @schema CustomerProfilesMatchItem#ProfileIds
   */
  readonly profileIds?: string[];

}

/**
 * Converts an object of type 'CustomerProfilesMatchItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesMatchItem(obj: CustomerProfilesMatchItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MatchId': obj.matchId,
    'ProfileIds': obj.profileIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesObjectTypeField
 */
export interface CustomerProfilesObjectTypeField {
  /**
   * @schema CustomerProfilesObjectTypeField#Source
   */
  readonly source?: string;

  /**
   * @schema CustomerProfilesObjectTypeField#Target
   */
  readonly target?: string;

  /**
   * @schema CustomerProfilesObjectTypeField#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'CustomerProfilesObjectTypeField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesObjectTypeField(obj: CustomerProfilesObjectTypeField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Source': obj.source,
    'Target': obj.target,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesObjectTypeKey
 */
export interface CustomerProfilesObjectTypeKey {
  /**
   * @schema CustomerProfilesObjectTypeKey#StandardIdentifiers
   */
  readonly standardIdentifiers?: string[];

  /**
   * @schema CustomerProfilesObjectTypeKey#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * Converts an object of type 'CustomerProfilesObjectTypeKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesObjectTypeKey(obj: CustomerProfilesObjectTypeKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StandardIdentifiers': obj.standardIdentifiers?.map(y => y),
    'FieldNames': obj.fieldNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListIntegrationItem
 */
export interface CustomerProfilesListIntegrationItem {
  /**
   * @schema CustomerProfilesListIntegrationItem#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesListIntegrationItem#Uri
   */
  readonly uri?: string;

  /**
   * @schema CustomerProfilesListIntegrationItem#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesListIntegrationItem#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesListIntegrationItem#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesListIntegrationItem#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesListIntegrationItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListIntegrationItem(obj: CustomerProfilesListIntegrationItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Uri': obj.uri,
    'ObjectTypeName': obj.objectTypeName,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListDomainItem
 */
export interface CustomerProfilesListDomainItem {
  /**
   * @schema CustomerProfilesListDomainItem#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CustomerProfilesListDomainItem#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesListDomainItem#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesListDomainItem#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesListDomainItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListDomainItem(obj: CustomerProfilesListDomainItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectTypeTemplateItem
 */
export interface CustomerProfilesListProfileObjectTypeTemplateItem {
  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplateItem#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplateItem#SourceName
   */
  readonly sourceName?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeTemplateItem#SourceObject
   */
  readonly sourceObject?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectTypeTemplateItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectTypeTemplateItem(obj: CustomerProfilesListProfileObjectTypeTemplateItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateId': obj.templateId,
    'SourceName': obj.sourceName,
    'SourceObject': obj.sourceObject,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectTypeItem
 */
export interface CustomerProfilesListProfileObjectTypeItem {
  /**
   * @schema CustomerProfilesListProfileObjectTypeItem#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeItem#Description
   */
  readonly description?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeItem#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeItem#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema CustomerProfilesListProfileObjectTypeItem#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectTypeItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectTypeItem(obj: CustomerProfilesListProfileObjectTypeItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectTypeName': obj.objectTypeName,
    'Description': obj.description,
    'CreatedAt': obj.createdAt,
    'LastUpdatedAt': obj.lastUpdatedAt,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesListProfileObjectsItem
 */
export interface CustomerProfilesListProfileObjectsItem {
  /**
   * @schema CustomerProfilesListProfileObjectsItem#ObjectTypeName
   */
  readonly objectTypeName?: string;

  /**
   * @schema CustomerProfilesListProfileObjectsItem#ProfileObjectUniqueKey
   */
  readonly profileObjectUniqueKey?: string;

  /**
   * @schema CustomerProfilesListProfileObjectsItem#Object
   */
  readonly object?: string;

}

/**
 * Converts an object of type 'CustomerProfilesListProfileObjectsItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesListProfileObjectsItem(obj: CustomerProfilesListProfileObjectsItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectTypeName': obj.objectTypeName,
    'ProfileObjectUniqueKey': obj.profileObjectUniqueKey,
    'Object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesFieldSourceProfileIds
 */
export interface CustomerProfilesFieldSourceProfileIds {
  /**
   * @schema CustomerProfilesFieldSourceProfileIds#AccountNumber
   */
  readonly accountNumber?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#AdditionalInformation
   */
  readonly additionalInformation?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#PartyType
   */
  readonly partyType?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#BusinessName
   */
  readonly businessName?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#MiddleName
   */
  readonly middleName?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#BirthDate
   */
  readonly birthDate?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#Gender
   */
  readonly gender?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#MobilePhoneNumber
   */
  readonly mobilePhoneNumber?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#HomePhoneNumber
   */
  readonly homePhoneNumber?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#BusinessPhoneNumber
   */
  readonly businessPhoneNumber?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#PersonalEmailAddress
   */
  readonly personalEmailAddress?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#BusinessEmailAddress
   */
  readonly businessEmailAddress?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#Address
   */
  readonly address?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#ShippingAddress
   */
  readonly shippingAddress?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#MailingAddress
   */
  readonly mailingAddress?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#BillingAddress
   */
  readonly billingAddress?: string;

  /**
   * @schema CustomerProfilesFieldSourceProfileIds#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesFieldSourceProfileIds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesFieldSourceProfileIds(obj: CustomerProfilesFieldSourceProfileIds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountNumber': obj.accountNumber,
    'AdditionalInformation': obj.additionalInformation,
    'PartyType': obj.partyType,
    'BusinessName': obj.businessName,
    'FirstName': obj.firstName,
    'MiddleName': obj.middleName,
    'LastName': obj.lastName,
    'BirthDate': obj.birthDate,
    'Gender': obj.gender,
    'PhoneNumber': obj.phoneNumber,
    'MobilePhoneNumber': obj.mobilePhoneNumber,
    'HomePhoneNumber': obj.homePhoneNumber,
    'BusinessPhoneNumber': obj.businessPhoneNumber,
    'EmailAddress': obj.emailAddress,
    'PersonalEmailAddress': obj.personalEmailAddress,
    'BusinessEmailAddress': obj.businessEmailAddress,
    'Address': obj.address,
    'ShippingAddress': obj.shippingAddress,
    'MailingAddress': obj.mailingAddress,
    'BillingAddress': obj.billingAddress,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesFlowDefinition
 */
export interface CustomerProfilesFlowDefinition {
  /**
   * @schema CustomerProfilesFlowDefinition#Description
   */
  readonly description?: string;

  /**
   * @schema CustomerProfilesFlowDefinition#FlowName
   */
  readonly flowName?: string;

  /**
   * @schema CustomerProfilesFlowDefinition#KmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema CustomerProfilesFlowDefinition#SourceFlowConfig
   */
  readonly sourceFlowConfig?: CustomerProfilesSourceFlowConfig;

  /**
   * @schema CustomerProfilesFlowDefinition#Tasks
   */
  readonly tasks?: CustomerProfilesTask[];

  /**
   * @schema CustomerProfilesFlowDefinition#TriggerConfig
   */
  readonly triggerConfig?: CustomerProfilesTriggerConfig;

}

/**
 * Converts an object of type 'CustomerProfilesFlowDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesFlowDefinition(obj: CustomerProfilesFlowDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'FlowName': obj.flowName,
    'KmsArn': obj.kmsArn,
    'SourceFlowConfig': toJson_CustomerProfilesSourceFlowConfig(obj.sourceFlowConfig),
    'Tasks': obj.tasks?.map(y => toJson_CustomerProfilesTask(y)),
    'TriggerConfig': toJson_CustomerProfilesTriggerConfig(obj.triggerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesProfile
 */
export interface CustomerProfilesProfile {
  /**
   * @schema CustomerProfilesProfile#ProfileId
   */
  readonly profileId?: string;

  /**
   * @schema CustomerProfilesProfile#AccountNumber
   */
  readonly accountNumber?: string;

  /**
   * @schema CustomerProfilesProfile#AdditionalInformation
   */
  readonly additionalInformation?: string;

  /**
   * @schema CustomerProfilesProfile#PartyType
   */
  readonly partyType?: string;

  /**
   * @schema CustomerProfilesProfile#BusinessName
   */
  readonly businessName?: string;

  /**
   * @schema CustomerProfilesProfile#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema CustomerProfilesProfile#MiddleName
   */
  readonly middleName?: string;

  /**
   * @schema CustomerProfilesProfile#LastName
   */
  readonly lastName?: string;

  /**
   * @schema CustomerProfilesProfile#BirthDate
   */
  readonly birthDate?: string;

  /**
   * @schema CustomerProfilesProfile#Gender
   */
  readonly gender?: string;

  /**
   * @schema CustomerProfilesProfile#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema CustomerProfilesProfile#MobilePhoneNumber
   */
  readonly mobilePhoneNumber?: string;

  /**
   * @schema CustomerProfilesProfile#HomePhoneNumber
   */
  readonly homePhoneNumber?: string;

  /**
   * @schema CustomerProfilesProfile#BusinessPhoneNumber
   */
  readonly businessPhoneNumber?: string;

  /**
   * @schema CustomerProfilesProfile#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CustomerProfilesProfile#PersonalEmailAddress
   */
  readonly personalEmailAddress?: string;

  /**
   * @schema CustomerProfilesProfile#BusinessEmailAddress
   */
  readonly businessEmailAddress?: string;

  /**
   * @schema CustomerProfilesProfile#Address
   */
  readonly address?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesProfile#ShippingAddress
   */
  readonly shippingAddress?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesProfile#MailingAddress
   */
  readonly mailingAddress?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesProfile#BillingAddress
   */
  readonly billingAddress?: CustomerProfilesAddress;

  /**
   * @schema CustomerProfilesProfile#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'CustomerProfilesProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesProfile(obj: CustomerProfilesProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileId': obj.profileId,
    'AccountNumber': obj.accountNumber,
    'AdditionalInformation': obj.additionalInformation,
    'PartyType': obj.partyType,
    'BusinessName': obj.businessName,
    'FirstName': obj.firstName,
    'MiddleName': obj.middleName,
    'LastName': obj.lastName,
    'BirthDate': obj.birthDate,
    'Gender': obj.gender,
    'PhoneNumber': obj.phoneNumber,
    'MobilePhoneNumber': obj.mobilePhoneNumber,
    'HomePhoneNumber': obj.homePhoneNumber,
    'BusinessPhoneNumber': obj.businessPhoneNumber,
    'EmailAddress': obj.emailAddress,
    'PersonalEmailAddress': obj.personalEmailAddress,
    'BusinessEmailAddress': obj.businessEmailAddress,
    'Address': toJson_CustomerProfilesAddress(obj.address),
    'ShippingAddress': toJson_CustomerProfilesAddress(obj.shippingAddress),
    'MailingAddress': toJson_CustomerProfilesAddress(obj.mailingAddress),
    'BillingAddress': toJson_CustomerProfilesAddress(obj.billingAddress),
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesUpdateAddress
 */
export interface CustomerProfilesUpdateAddress {
  /**
   * @schema CustomerProfilesUpdateAddress#Address1
   */
  readonly address1?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#Address2
   */
  readonly address2?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#Address3
   */
  readonly address3?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#Address4
   */
  readonly address4?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#City
   */
  readonly city?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#County
   */
  readonly county?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#State
   */
  readonly state?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#Province
   */
  readonly province?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#Country
   */
  readonly country?: string;

  /**
   * @schema CustomerProfilesUpdateAddress#PostalCode
   */
  readonly postalCode?: string;

}

/**
 * Converts an object of type 'CustomerProfilesUpdateAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesUpdateAddress(obj: CustomerProfilesUpdateAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Address1': obj.address1,
    'Address2': obj.address2,
    'Address3': obj.address3,
    'Address4': obj.address4,
    'City': obj.city,
    'County': obj.county,
    'State': obj.state,
    'Province': obj.province,
    'Country': obj.country,
    'PostalCode': obj.postalCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesSourceFlowConfig
 */
export interface CustomerProfilesSourceFlowConfig {
  /**
   * @schema CustomerProfilesSourceFlowConfig#ConnectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema CustomerProfilesSourceFlowConfig#ConnectorType
   */
  readonly connectorType?: string;

  /**
   * @schema CustomerProfilesSourceFlowConfig#IncrementalPullConfig
   */
  readonly incrementalPullConfig?: CustomerProfilesIncrementalPullConfig;

  /**
   * @schema CustomerProfilesSourceFlowConfig#SourceConnectorProperties
   */
  readonly sourceConnectorProperties?: CustomerProfilesSourceConnectorProperties;

}

/**
 * Converts an object of type 'CustomerProfilesSourceFlowConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesSourceFlowConfig(obj: CustomerProfilesSourceFlowConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorProfileName': obj.connectorProfileName,
    'ConnectorType': obj.connectorType,
    'IncrementalPullConfig': toJson_CustomerProfilesIncrementalPullConfig(obj.incrementalPullConfig),
    'SourceConnectorProperties': toJson_CustomerProfilesSourceConnectorProperties(obj.sourceConnectorProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesTask
 */
export interface CustomerProfilesTask {
  /**
   * @schema CustomerProfilesTask#ConnectorOperator
   */
  readonly connectorOperator?: CustomerProfilesConnectorOperator;

  /**
   * @schema CustomerProfilesTask#DestinationField
   */
  readonly destinationField?: string;

  /**
   * @schema CustomerProfilesTask#SourceFields
   */
  readonly sourceFields?: string[];

  /**
   * @schema CustomerProfilesTask#TaskProperties
   */
  readonly taskProperties?: { [key: string]: string };

  /**
   * @schema CustomerProfilesTask#TaskType
   */
  readonly taskType?: string;

}

/**
 * Converts an object of type 'CustomerProfilesTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesTask(obj: CustomerProfilesTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectorOperator': toJson_CustomerProfilesConnectorOperator(obj.connectorOperator),
    'DestinationField': obj.destinationField,
    'SourceFields': obj.sourceFields?.map(y => y),
    'TaskProperties': ((obj.taskProperties) === undefined) ? undefined : (Object.entries(obj.taskProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TaskType': obj.taskType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesTriggerConfig
 */
export interface CustomerProfilesTriggerConfig {
  /**
   * @schema CustomerProfilesTriggerConfig#TriggerType
   */
  readonly triggerType?: string;

  /**
   * @schema CustomerProfilesTriggerConfig#TriggerProperties
   */
  readonly triggerProperties?: CustomerProfilesTriggerProperties;

}

/**
 * Converts an object of type 'CustomerProfilesTriggerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesTriggerConfig(obj: CustomerProfilesTriggerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TriggerType': obj.triggerType,
    'TriggerProperties': toJson_CustomerProfilesTriggerProperties(obj.triggerProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesIncrementalPullConfig
 */
export interface CustomerProfilesIncrementalPullConfig {
  /**
   * @schema CustomerProfilesIncrementalPullConfig#DatetimeTypeFieldName
   */
  readonly datetimeTypeFieldName?: string;

}

/**
 * Converts an object of type 'CustomerProfilesIncrementalPullConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesIncrementalPullConfig(obj: CustomerProfilesIncrementalPullConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatetimeTypeFieldName': obj.datetimeTypeFieldName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesSourceConnectorProperties
 */
export interface CustomerProfilesSourceConnectorProperties {
  /**
   * @schema CustomerProfilesSourceConnectorProperties#Marketo
   */
  readonly marketo?: CustomerProfilesMarketoSourceProperties;

  /**
   * @schema CustomerProfilesSourceConnectorProperties#S3
   */
  readonly s3?: CustomerProfilesS3SourceProperties;

  /**
   * @schema CustomerProfilesSourceConnectorProperties#Salesforce
   */
  readonly salesforce?: CustomerProfilesSalesforceSourceProperties;

  /**
   * @schema CustomerProfilesSourceConnectorProperties#ServiceNow
   */
  readonly serviceNow?: CustomerProfilesServiceNowSourceProperties;

  /**
   * @schema CustomerProfilesSourceConnectorProperties#Zendesk
   */
  readonly zendesk?: CustomerProfilesZendeskSourceProperties;

}

/**
 * Converts an object of type 'CustomerProfilesSourceConnectorProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesSourceConnectorProperties(obj: CustomerProfilesSourceConnectorProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marketo': toJson_CustomerProfilesMarketoSourceProperties(obj.marketo),
    'S3': toJson_CustomerProfilesS3SourceProperties(obj.s3),
    'Salesforce': toJson_CustomerProfilesSalesforceSourceProperties(obj.salesforce),
    'ServiceNow': toJson_CustomerProfilesServiceNowSourceProperties(obj.serviceNow),
    'Zendesk': toJson_CustomerProfilesZendeskSourceProperties(obj.zendesk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesConnectorOperator
 */
export interface CustomerProfilesConnectorOperator {
  /**
   * @schema CustomerProfilesConnectorOperator#Marketo
   */
  readonly marketo?: string;

  /**
   * @schema CustomerProfilesConnectorOperator#S3
   */
  readonly s3?: string;

  /**
   * @schema CustomerProfilesConnectorOperator#Salesforce
   */
  readonly salesforce?: string;

  /**
   * @schema CustomerProfilesConnectorOperator#ServiceNow
   */
  readonly serviceNow?: string;

  /**
   * @schema CustomerProfilesConnectorOperator#Zendesk
   */
  readonly zendesk?: string;

}

/**
 * Converts an object of type 'CustomerProfilesConnectorOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesConnectorOperator(obj: CustomerProfilesConnectorOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marketo': obj.marketo,
    'S3': obj.s3,
    'Salesforce': obj.salesforce,
    'ServiceNow': obj.serviceNow,
    'Zendesk': obj.zendesk,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesTriggerProperties
 */
export interface CustomerProfilesTriggerProperties {
  /**
   * @schema CustomerProfilesTriggerProperties#Scheduled
   */
  readonly scheduled?: CustomerProfilesScheduledTriggerProperties;

}

/**
 * Converts an object of type 'CustomerProfilesTriggerProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesTriggerProperties(obj: CustomerProfilesTriggerProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scheduled': toJson_CustomerProfilesScheduledTriggerProperties(obj.scheduled),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesMarketoSourceProperties
 */
export interface CustomerProfilesMarketoSourceProperties {
  /**
   * @schema CustomerProfilesMarketoSourceProperties#Object
   */
  readonly object?: string;

}

/**
 * Converts an object of type 'CustomerProfilesMarketoSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesMarketoSourceProperties(obj: CustomerProfilesMarketoSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesS3SourceProperties
 */
export interface CustomerProfilesS3SourceProperties {
  /**
   * @schema CustomerProfilesS3SourceProperties#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema CustomerProfilesS3SourceProperties#BucketPrefix
   */
  readonly bucketPrefix?: string;

}

/**
 * Converts an object of type 'CustomerProfilesS3SourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesS3SourceProperties(obj: CustomerProfilesS3SourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'BucketPrefix': obj.bucketPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesSalesforceSourceProperties
 */
export interface CustomerProfilesSalesforceSourceProperties {
  /**
   * @schema CustomerProfilesSalesforceSourceProperties#Object
   */
  readonly object?: string;

  /**
   * @schema CustomerProfilesSalesforceSourceProperties#EnableDynamicFieldUpdate
   */
  readonly enableDynamicFieldUpdate?: boolean;

  /**
   * @schema CustomerProfilesSalesforceSourceProperties#IncludeDeletedRecords
   */
  readonly includeDeletedRecords?: boolean;

}

/**
 * Converts an object of type 'CustomerProfilesSalesforceSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesSalesforceSourceProperties(obj: CustomerProfilesSalesforceSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Object': obj.object,
    'EnableDynamicFieldUpdate': obj.enableDynamicFieldUpdate,
    'IncludeDeletedRecords': obj.includeDeletedRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesServiceNowSourceProperties
 */
export interface CustomerProfilesServiceNowSourceProperties {
  /**
   * @schema CustomerProfilesServiceNowSourceProperties#Object
   */
  readonly object?: string;

}

/**
 * Converts an object of type 'CustomerProfilesServiceNowSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesServiceNowSourceProperties(obj: CustomerProfilesServiceNowSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesZendeskSourceProperties
 */
export interface CustomerProfilesZendeskSourceProperties {
  /**
   * @schema CustomerProfilesZendeskSourceProperties#Object
   */
  readonly object?: string;

}

/**
 * Converts an object of type 'CustomerProfilesZendeskSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesZendeskSourceProperties(obj: CustomerProfilesZendeskSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CustomerProfilesScheduledTriggerProperties
 */
export interface CustomerProfilesScheduledTriggerProperties {
  /**
   * @schema CustomerProfilesScheduledTriggerProperties#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema CustomerProfilesScheduledTriggerProperties#DataPullMode
   */
  readonly dataPullMode?: string;

  /**
   * @schema CustomerProfilesScheduledTriggerProperties#ScheduleStartTime
   */
  readonly scheduleStartTime?: string;

  /**
   * @schema CustomerProfilesScheduledTriggerProperties#ScheduleEndTime
   */
  readonly scheduleEndTime?: string;

  /**
   * @schema CustomerProfilesScheduledTriggerProperties#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema CustomerProfilesScheduledTriggerProperties#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema CustomerProfilesScheduledTriggerProperties#FirstExecutionFrom
   */
  readonly firstExecutionFrom?: string;

}

/**
 * Converts an object of type 'CustomerProfilesScheduledTriggerProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CustomerProfilesScheduledTriggerProperties(obj: CustomerProfilesScheduledTriggerProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleExpression': obj.scheduleExpression,
    'DataPullMode': obj.dataPullMode,
    'ScheduleStartTime': obj.scheduleStartTime,
    'ScheduleEndTime': obj.scheduleEndTime,
    'Timezone': obj.timezone,
    'ScheduleOffset': obj.scheduleOffset,
    'FirstExecutionFrom': obj.firstExecutionFrom,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
