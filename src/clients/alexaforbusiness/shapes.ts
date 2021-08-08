/**
 * @schema AlexaForBusinessApproveSkillRequest
 */
export interface AlexaForBusinessApproveSkillRequest {
  /**
   * @schema AlexaForBusinessApproveSkillRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessApproveSkillRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessApproveSkillRequest(obj: AlexaForBusinessApproveSkillRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessApproveSkillResponse
 */
export interface AlexaForBusinessApproveSkillResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessApproveSkillResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessApproveSkillResponse(obj: AlexaForBusinessApproveSkillResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateContactWithAddressBookRequest
 */
export interface AlexaForBusinessAssociateContactWithAddressBookRequest {
  /**
   * @schema AlexaForBusinessAssociateContactWithAddressBookRequest#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessAssociateContactWithAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAssociateContactWithAddressBookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateContactWithAddressBookRequest(obj: AlexaForBusinessAssociateContactWithAddressBookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'AddressBookArn': obj.addressBookArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateContactWithAddressBookResponse
 */
export interface AlexaForBusinessAssociateContactWithAddressBookResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessAssociateContactWithAddressBookResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateContactWithAddressBookResponse(obj: AlexaForBusinessAssociateContactWithAddressBookResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileRequest
 */
export interface AlexaForBusinessAssociateDeviceWithNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAssociateDeviceWithNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateDeviceWithNetworkProfileRequest(obj: AlexaForBusinessAssociateDeviceWithNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'NetworkProfileArn': obj.networkProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateDeviceWithNetworkProfileResponse
 */
export interface AlexaForBusinessAssociateDeviceWithNetworkProfileResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessAssociateDeviceWithNetworkProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateDeviceWithNetworkProfileResponse(obj: AlexaForBusinessAssociateDeviceWithNetworkProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateDeviceWithRoomRequest
 */
export interface AlexaForBusinessAssociateDeviceWithRoomRequest {
  /**
   * @schema AlexaForBusinessAssociateDeviceWithRoomRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessAssociateDeviceWithRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAssociateDeviceWithRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateDeviceWithRoomRequest(obj: AlexaForBusinessAssociateDeviceWithRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateDeviceWithRoomResponse
 */
export interface AlexaForBusinessAssociateDeviceWithRoomResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessAssociateDeviceWithRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateDeviceWithRoomResponse(obj: AlexaForBusinessAssociateDeviceWithRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateSkillGroupWithRoomRequest
 */
export interface AlexaForBusinessAssociateSkillGroupWithRoomRequest {
  /**
   * @schema AlexaForBusinessAssociateSkillGroupWithRoomRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessAssociateSkillGroupWithRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAssociateSkillGroupWithRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateSkillGroupWithRoomRequest(obj: AlexaForBusinessAssociateSkillGroupWithRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateSkillGroupWithRoomResponse
 */
export interface AlexaForBusinessAssociateSkillGroupWithRoomResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessAssociateSkillGroupWithRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateSkillGroupWithRoomResponse(obj: AlexaForBusinessAssociateSkillGroupWithRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateSkillWithSkillGroupRequest
 */
export interface AlexaForBusinessAssociateSkillWithSkillGroupRequest {
  /**
   * @schema AlexaForBusinessAssociateSkillWithSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessAssociateSkillWithSkillGroupRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAssociateSkillWithSkillGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateSkillWithSkillGroupRequest(obj: AlexaForBusinessAssociateSkillWithSkillGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateSkillWithSkillGroupResponse
 */
export interface AlexaForBusinessAssociateSkillWithSkillGroupResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessAssociateSkillWithSkillGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateSkillWithSkillGroupResponse(obj: AlexaForBusinessAssociateSkillWithSkillGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateSkillWithUsersRequest
 */
export interface AlexaForBusinessAssociateSkillWithUsersRequest {
  /**
   * @schema AlexaForBusinessAssociateSkillWithUsersRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAssociateSkillWithUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateSkillWithUsersRequest(obj: AlexaForBusinessAssociateSkillWithUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAssociateSkillWithUsersResponse
 */
export interface AlexaForBusinessAssociateSkillWithUsersResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessAssociateSkillWithUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAssociateSkillWithUsersResponse(obj: AlexaForBusinessAssociateSkillWithUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateAddressBookRequest
 */
export interface AlexaForBusinessCreateAddressBookRequest {
  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateAddressBookRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateAddressBookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateAddressBookRequest(obj: AlexaForBusinessCreateAddressBookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateAddressBookResponse
 */
export interface AlexaForBusinessCreateAddressBookResponse {
  /**
   * @schema AlexaForBusinessCreateAddressBookResponse#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateAddressBookResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateAddressBookResponse(obj: AlexaForBusinessCreateAddressBookResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBookArn': obj.addressBookArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateBusinessReportScheduleRequest
 */
export interface AlexaForBusinessCreateBusinessReportScheduleRequest {
  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#Format
   */
  readonly format?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#ContentRange
   */
  readonly contentRange?: AlexaForBusinessBusinessReportContentRange;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#Recurrence
   */
  readonly recurrence?: AlexaForBusinessBusinessReportRecurrence;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateBusinessReportScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateBusinessReportScheduleRequest(obj: AlexaForBusinessCreateBusinessReportScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleName': obj.scheduleName,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'Format': obj.format,
    'ContentRange': toJson_AlexaForBusinessBusinessReportContentRange(obj.contentRange),
    'Recurrence': toJson_AlexaForBusinessBusinessReportRecurrence(obj.recurrence),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateBusinessReportScheduleResponse
 */
export interface AlexaForBusinessCreateBusinessReportScheduleResponse {
  /**
   * @schema AlexaForBusinessCreateBusinessReportScheduleResponse#ScheduleArn
   */
  readonly scheduleArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateBusinessReportScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateBusinessReportScheduleResponse(obj: AlexaForBusinessCreateBusinessReportScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleArn': obj.scheduleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateConferenceProviderRequest
 */
export interface AlexaForBusinessCreateConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#ConferenceProviderName
   */
  readonly conferenceProviderName?: string;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#ConferenceProviderType
   */
  readonly conferenceProviderType?: string;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#IPDialIn
   */
  readonly ipDialIn?: AlexaForBusinessIpDialIn;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#PSTNDialIn
   */
  readonly pstnDialIn?: AlexaForBusinessPstnDialIn;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#MeetingSetting
   */
  readonly meetingSetting?: AlexaForBusinessMeetingSetting;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateConferenceProviderRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateConferenceProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateConferenceProviderRequest(obj: AlexaForBusinessCreateConferenceProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProviderName': obj.conferenceProviderName,
    'ConferenceProviderType': obj.conferenceProviderType,
    'IPDialIn': toJson_AlexaForBusinessIpDialIn(obj.ipDialIn),
    'PSTNDialIn': toJson_AlexaForBusinessPstnDialIn(obj.pstnDialIn),
    'MeetingSetting': toJson_AlexaForBusinessMeetingSetting(obj.meetingSetting),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateConferenceProviderResponse
 */
export interface AlexaForBusinessCreateConferenceProviderResponse {
  /**
   * @schema AlexaForBusinessCreateConferenceProviderResponse#ConferenceProviderArn
   */
  readonly conferenceProviderArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateConferenceProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateConferenceProviderResponse(obj: AlexaForBusinessCreateConferenceProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProviderArn': obj.conferenceProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateContactRequest
 */
export interface AlexaForBusinessCreateContactRequest {
  /**
   * @schema AlexaForBusinessCreateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessCreateContactRequest#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

  /**
   * @schema AlexaForBusinessCreateContactRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateContactRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateContactRequest(obj: AlexaForBusinessCreateContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisplayName': obj.displayName,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'PhoneNumber': obj.phoneNumber,
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_AlexaForBusinessPhoneNumber(y)),
    'SipAddresses': obj.sipAddresses?.map(y => toJson_AlexaForBusinessSipAddress(y)),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateContactResponse
 */
export interface AlexaForBusinessCreateContactResponse {
  /**
   * @schema AlexaForBusinessCreateContactResponse#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateContactResponse(obj: AlexaForBusinessCreateContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateGatewayGroupRequest
 */
export interface AlexaForBusinessCreateGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateGatewayGroupRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateGatewayGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateGatewayGroupRequest(obj: AlexaForBusinessCreateGatewayGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateGatewayGroupResponse
 */
export interface AlexaForBusinessCreateGatewayGroupResponse {
  /**
   * @schema AlexaForBusinessCreateGatewayGroupResponse#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateGatewayGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateGatewayGroupResponse(obj: AlexaForBusinessCreateGatewayGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroupArn': obj.gatewayGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateNetworkProfileRequest
 */
export interface AlexaForBusinessCreateNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#TrustAnchors
   */
  readonly trustAnchors?: string[];

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateNetworkProfileRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateNetworkProfileRequest(obj: AlexaForBusinessCreateNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileName': obj.networkProfileName,
    'Description': obj.description,
    'Ssid': obj.ssid,
    'SecurityType': obj.securityType,
    'EapMethod': obj.eapMethod,
    'CurrentPassword': obj.currentPassword,
    'NextPassword': obj.nextPassword,
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'TrustAnchors': obj.trustAnchors?.map(y => y),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateNetworkProfileResponse
 */
export interface AlexaForBusinessCreateNetworkProfileResponse {
  /**
   * @schema AlexaForBusinessCreateNetworkProfileResponse#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateNetworkProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateNetworkProfileResponse(obj: AlexaForBusinessCreateNetworkProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateProfileRequest
 */
export interface AlexaForBusinessCreateProfileRequest {
  /**
   * @schema AlexaForBusinessCreateProfileRequest#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#DataRetentionOptIn
   */
  readonly dataRetentionOptIn?: boolean;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: AlexaForBusinessCreateMeetingRoomConfiguration;

  /**
   * @schema AlexaForBusinessCreateProfileRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateProfileRequest(obj: AlexaForBusinessCreateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileName': obj.profileName,
    'Timezone': obj.timezone,
    'Address': obj.address,
    'DistanceUnit': obj.distanceUnit,
    'TemperatureUnit': obj.temperatureUnit,
    'WakeWord': obj.wakeWord,
    'Locale': obj.locale,
    'ClientRequestToken': obj.clientRequestToken,
    'SetupModeDisabled': obj.setupModeDisabled,
    'MaxVolumeLimit': obj.maxVolumeLimit,
    'PSTNEnabled': obj.pstnEnabled,
    'DataRetentionOptIn': obj.dataRetentionOptIn,
    'MeetingRoomConfiguration': toJson_AlexaForBusinessCreateMeetingRoomConfiguration(obj.meetingRoomConfiguration),
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateProfileResponse
 */
export interface AlexaForBusinessCreateProfileResponse {
  /**
   * @schema AlexaForBusinessCreateProfileResponse#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateProfileResponse(obj: AlexaForBusinessCreateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileArn': obj.profileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateRoomRequest
 */
export interface AlexaForBusinessCreateRoomRequest {
  /**
   * @schema AlexaForBusinessCreateRoomRequest#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateRoomRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateRoomRequest(obj: AlexaForBusinessCreateRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomName': obj.roomName,
    'Description': obj.description,
    'ProfileArn': obj.profileArn,
    'ProviderCalendarId': obj.providerCalendarId,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateRoomResponse
 */
export interface AlexaForBusinessCreateRoomResponse {
  /**
   * @schema AlexaForBusinessCreateRoomResponse#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateRoomResponse(obj: AlexaForBusinessCreateRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateSkillGroupRequest
 */
export interface AlexaForBusinessCreateSkillGroupRequest {
  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateSkillGroupRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateSkillGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateSkillGroupRequest(obj: AlexaForBusinessCreateSkillGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupName': obj.skillGroupName,
    'Description': obj.description,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateSkillGroupResponse
 */
export interface AlexaForBusinessCreateSkillGroupResponse {
  /**
   * @schema AlexaForBusinessCreateSkillGroupResponse#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateSkillGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateSkillGroupResponse(obj: AlexaForBusinessCreateSkillGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateUserRequest
 */
export interface AlexaForBusinessCreateUserRequest {
  /**
   * @schema AlexaForBusinessCreateUserRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AlexaForBusinessCreateUserRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateUserRequest(obj: AlexaForBusinessCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'Email': obj.email,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateUserResponse
 */
export interface AlexaForBusinessCreateUserResponse {
  /**
   * @schema AlexaForBusinessCreateUserResponse#UserArn
   */
  readonly userArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateUserResponse(obj: AlexaForBusinessCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteAddressBookRequest
 */
export interface AlexaForBusinessDeleteAddressBookRequest {
  /**
   * @schema AlexaForBusinessDeleteAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteAddressBookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteAddressBookRequest(obj: AlexaForBusinessDeleteAddressBookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBookArn': obj.addressBookArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteAddressBookResponse
 */
export interface AlexaForBusinessDeleteAddressBookResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteAddressBookResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteAddressBookResponse(obj: AlexaForBusinessDeleteAddressBookResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteBusinessReportScheduleRequest
 */
export interface AlexaForBusinessDeleteBusinessReportScheduleRequest {
  /**
   * @schema AlexaForBusinessDeleteBusinessReportScheduleRequest#ScheduleArn
   */
  readonly scheduleArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteBusinessReportScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteBusinessReportScheduleRequest(obj: AlexaForBusinessDeleteBusinessReportScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleArn': obj.scheduleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteBusinessReportScheduleResponse
 */
export interface AlexaForBusinessDeleteBusinessReportScheduleResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteBusinessReportScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteBusinessReportScheduleResponse(obj: AlexaForBusinessDeleteBusinessReportScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteConferenceProviderRequest
 */
export interface AlexaForBusinessDeleteConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessDeleteConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteConferenceProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteConferenceProviderRequest(obj: AlexaForBusinessDeleteConferenceProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProviderArn': obj.conferenceProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteConferenceProviderResponse
 */
export interface AlexaForBusinessDeleteConferenceProviderResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteConferenceProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteConferenceProviderResponse(obj: AlexaForBusinessDeleteConferenceProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteContactRequest
 */
export interface AlexaForBusinessDeleteContactRequest {
  /**
   * @schema AlexaForBusinessDeleteContactRequest#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteContactRequest(obj: AlexaForBusinessDeleteContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteContactResponse
 */
export interface AlexaForBusinessDeleteContactResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteContactResponse(obj: AlexaForBusinessDeleteContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteDeviceRequest
 */
export interface AlexaForBusinessDeleteDeviceRequest {
  /**
   * @schema AlexaForBusinessDeleteDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteDeviceRequest(obj: AlexaForBusinessDeleteDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteDeviceResponse
 */
export interface AlexaForBusinessDeleteDeviceResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteDeviceResponse(obj: AlexaForBusinessDeleteDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteDeviceUsageDataRequest
 */
export interface AlexaForBusinessDeleteDeviceUsageDataRequest {
  /**
   * @schema AlexaForBusinessDeleteDeviceUsageDataRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessDeleteDeviceUsageDataRequest#DeviceUsageType
   */
  readonly deviceUsageType?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteDeviceUsageDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteDeviceUsageDataRequest(obj: AlexaForBusinessDeleteDeviceUsageDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'DeviceUsageType': obj.deviceUsageType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteDeviceUsageDataResponse
 */
export interface AlexaForBusinessDeleteDeviceUsageDataResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteDeviceUsageDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteDeviceUsageDataResponse(obj: AlexaForBusinessDeleteDeviceUsageDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteGatewayGroupRequest
 */
export interface AlexaForBusinessDeleteGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessDeleteGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteGatewayGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteGatewayGroupRequest(obj: AlexaForBusinessDeleteGatewayGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroupArn': obj.gatewayGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteGatewayGroupResponse
 */
export interface AlexaForBusinessDeleteGatewayGroupResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteGatewayGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteGatewayGroupResponse(obj: AlexaForBusinessDeleteGatewayGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteNetworkProfileRequest
 */
export interface AlexaForBusinessDeleteNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessDeleteNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteNetworkProfileRequest(obj: AlexaForBusinessDeleteNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteNetworkProfileResponse
 */
export interface AlexaForBusinessDeleteNetworkProfileResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteNetworkProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteNetworkProfileResponse(obj: AlexaForBusinessDeleteNetworkProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteProfileRequest
 */
export interface AlexaForBusinessDeleteProfileRequest {
  /**
   * @schema AlexaForBusinessDeleteProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteProfileRequest(obj: AlexaForBusinessDeleteProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileArn': obj.profileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteProfileResponse
 */
export interface AlexaForBusinessDeleteProfileResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteProfileResponse(obj: AlexaForBusinessDeleteProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteRoomRequest
 */
export interface AlexaForBusinessDeleteRoomRequest {
  /**
   * @schema AlexaForBusinessDeleteRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteRoomRequest(obj: AlexaForBusinessDeleteRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteRoomResponse
 */
export interface AlexaForBusinessDeleteRoomResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteRoomResponse(obj: AlexaForBusinessDeleteRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteRoomSkillParameterRequest
 */
export interface AlexaForBusinessDeleteRoomSkillParameterRequest {
  /**
   * @schema AlexaForBusinessDeleteRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessDeleteRoomSkillParameterRequest#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessDeleteRoomSkillParameterRequest#ParameterKey
   */
  readonly parameterKey?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteRoomSkillParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteRoomSkillParameterRequest(obj: AlexaForBusinessDeleteRoomSkillParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'SkillId': obj.skillId,
    'ParameterKey': obj.parameterKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteRoomSkillParameterResponse
 */
export interface AlexaForBusinessDeleteRoomSkillParameterResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteRoomSkillParameterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteRoomSkillParameterResponse(obj: AlexaForBusinessDeleteRoomSkillParameterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteSkillAuthorizationRequest
 */
export interface AlexaForBusinessDeleteSkillAuthorizationRequest {
  /**
   * @schema AlexaForBusinessDeleteSkillAuthorizationRequest#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessDeleteSkillAuthorizationRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteSkillAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteSkillAuthorizationRequest(obj: AlexaForBusinessDeleteSkillAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteSkillAuthorizationResponse
 */
export interface AlexaForBusinessDeleteSkillAuthorizationResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteSkillAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteSkillAuthorizationResponse(obj: AlexaForBusinessDeleteSkillAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteSkillGroupRequest
 */
export interface AlexaForBusinessDeleteSkillGroupRequest {
  /**
   * @schema AlexaForBusinessDeleteSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteSkillGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteSkillGroupRequest(obj: AlexaForBusinessDeleteSkillGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteSkillGroupResponse
 */
export interface AlexaForBusinessDeleteSkillGroupResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteSkillGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteSkillGroupResponse(obj: AlexaForBusinessDeleteSkillGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteUserRequest
 */
export interface AlexaForBusinessDeleteUserRequest {
  /**
   * @schema AlexaForBusinessDeleteUserRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema AlexaForBusinessDeleteUserRequest#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteUserRequest(obj: AlexaForBusinessDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserArn': obj.userArn,
    'EnrollmentId': obj.enrollmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeleteUserResponse
 */
export interface AlexaForBusinessDeleteUserResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDeleteUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeleteUserResponse(obj: AlexaForBusinessDeleteUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateContactFromAddressBookRequest
 */
export interface AlexaForBusinessDisassociateContactFromAddressBookRequest {
  /**
   * @schema AlexaForBusinessDisassociateContactFromAddressBookRequest#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessDisassociateContactFromAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateContactFromAddressBookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateContactFromAddressBookRequest(obj: AlexaForBusinessDisassociateContactFromAddressBookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'AddressBookArn': obj.addressBookArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateContactFromAddressBookResponse
 */
export interface AlexaForBusinessDisassociateContactFromAddressBookResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateContactFromAddressBookResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateContactFromAddressBookResponse(obj: AlexaForBusinessDisassociateContactFromAddressBookResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateDeviceFromRoomRequest
 */
export interface AlexaForBusinessDisassociateDeviceFromRoomRequest {
  /**
   * @schema AlexaForBusinessDisassociateDeviceFromRoomRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateDeviceFromRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateDeviceFromRoomRequest(obj: AlexaForBusinessDisassociateDeviceFromRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateDeviceFromRoomResponse
 */
export interface AlexaForBusinessDisassociateDeviceFromRoomResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateDeviceFromRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateDeviceFromRoomResponse(obj: AlexaForBusinessDisassociateDeviceFromRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateSkillFromSkillGroupRequest
 */
export interface AlexaForBusinessDisassociateSkillFromSkillGroupRequest {
  /**
   * @schema AlexaForBusinessDisassociateSkillFromSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessDisassociateSkillFromSkillGroupRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateSkillFromSkillGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateSkillFromSkillGroupRequest(obj: AlexaForBusinessDisassociateSkillFromSkillGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateSkillFromSkillGroupResponse
 */
export interface AlexaForBusinessDisassociateSkillFromSkillGroupResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateSkillFromSkillGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateSkillFromSkillGroupResponse(obj: AlexaForBusinessDisassociateSkillFromSkillGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateSkillFromUsersRequest
 */
export interface AlexaForBusinessDisassociateSkillFromUsersRequest {
  /**
   * @schema AlexaForBusinessDisassociateSkillFromUsersRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateSkillFromUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateSkillFromUsersRequest(obj: AlexaForBusinessDisassociateSkillFromUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateSkillFromUsersResponse
 */
export interface AlexaForBusinessDisassociateSkillFromUsersResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateSkillFromUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateSkillFromUsersResponse(obj: AlexaForBusinessDisassociateSkillFromUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateSkillGroupFromRoomRequest
 */
export interface AlexaForBusinessDisassociateSkillGroupFromRoomRequest {
  /**
   * @schema AlexaForBusinessDisassociateSkillGroupFromRoomRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessDisassociateSkillGroupFromRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateSkillGroupFromRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateSkillGroupFromRoomRequest(obj: AlexaForBusinessDisassociateSkillGroupFromRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDisassociateSkillGroupFromRoomResponse
 */
export interface AlexaForBusinessDisassociateSkillGroupFromRoomResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessDisassociateSkillGroupFromRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDisassociateSkillGroupFromRoomResponse(obj: AlexaForBusinessDisassociateSkillGroupFromRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessForgetSmartHomeAppliancesRequest
 */
export interface AlexaForBusinessForgetSmartHomeAppliancesRequest {
  /**
   * @schema AlexaForBusinessForgetSmartHomeAppliancesRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessForgetSmartHomeAppliancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessForgetSmartHomeAppliancesRequest(obj: AlexaForBusinessForgetSmartHomeAppliancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessForgetSmartHomeAppliancesResponse
 */
export interface AlexaForBusinessForgetSmartHomeAppliancesResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessForgetSmartHomeAppliancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessForgetSmartHomeAppliancesResponse(obj: AlexaForBusinessForgetSmartHomeAppliancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetAddressBookRequest
 */
export interface AlexaForBusinessGetAddressBookRequest {
  /**
   * @schema AlexaForBusinessGetAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetAddressBookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetAddressBookRequest(obj: AlexaForBusinessGetAddressBookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBookArn': obj.addressBookArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetAddressBookResponse
 */
export interface AlexaForBusinessGetAddressBookResponse {
  /**
   * @schema AlexaForBusinessGetAddressBookResponse#AddressBook
   */
  readonly addressBook?: AlexaForBusinessAddressBook;

}

/**
 * Converts an object of type 'AlexaForBusinessGetAddressBookResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetAddressBookResponse(obj: AlexaForBusinessGetAddressBookResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBook': toJson_AlexaForBusinessAddressBook(obj.addressBook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetConferencePreferenceRequest
 */
export interface AlexaForBusinessGetConferencePreferenceRequest {
}

/**
 * Converts an object of type 'AlexaForBusinessGetConferencePreferenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetConferencePreferenceRequest(obj: AlexaForBusinessGetConferencePreferenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetConferencePreferenceResponse
 */
export interface AlexaForBusinessGetConferencePreferenceResponse {
  /**
   * @schema AlexaForBusinessGetConferencePreferenceResponse#Preference
   */
  readonly preference?: AlexaForBusinessConferencePreference;

}

/**
 * Converts an object of type 'AlexaForBusinessGetConferencePreferenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetConferencePreferenceResponse(obj: AlexaForBusinessGetConferencePreferenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preference': toJson_AlexaForBusinessConferencePreference(obj.preference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetConferenceProviderRequest
 */
export interface AlexaForBusinessGetConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessGetConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetConferenceProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetConferenceProviderRequest(obj: AlexaForBusinessGetConferenceProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProviderArn': obj.conferenceProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetConferenceProviderResponse
 */
export interface AlexaForBusinessGetConferenceProviderResponse {
  /**
   * @schema AlexaForBusinessGetConferenceProviderResponse#ConferenceProvider
   */
  readonly conferenceProvider?: AlexaForBusinessConferenceProvider;

}

/**
 * Converts an object of type 'AlexaForBusinessGetConferenceProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetConferenceProviderResponse(obj: AlexaForBusinessGetConferenceProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProvider': toJson_AlexaForBusinessConferenceProvider(obj.conferenceProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetContactRequest
 */
export interface AlexaForBusinessGetContactRequest {
  /**
   * @schema AlexaForBusinessGetContactRequest#ContactArn
   */
  readonly contactArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetContactRequest(obj: AlexaForBusinessGetContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetContactResponse
 */
export interface AlexaForBusinessGetContactResponse {
  /**
   * @schema AlexaForBusinessGetContactResponse#Contact
   */
  readonly contact?: AlexaForBusinessContact;

}

/**
 * Converts an object of type 'AlexaForBusinessGetContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetContactResponse(obj: AlexaForBusinessGetContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Contact': toJson_AlexaForBusinessContact(obj.contact),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetDeviceRequest
 */
export interface AlexaForBusinessGetDeviceRequest {
  /**
   * @schema AlexaForBusinessGetDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetDeviceRequest(obj: AlexaForBusinessGetDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetDeviceResponse
 */
export interface AlexaForBusinessGetDeviceResponse {
  /**
   * @schema AlexaForBusinessGetDeviceResponse#Device
   */
  readonly device?: AlexaForBusinessDevice;

}

/**
 * Converts an object of type 'AlexaForBusinessGetDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetDeviceResponse(obj: AlexaForBusinessGetDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Device': toJson_AlexaForBusinessDevice(obj.device),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetGatewayRequest
 */
export interface AlexaForBusinessGetGatewayRequest {
  /**
   * @schema AlexaForBusinessGetGatewayRequest#GatewayArn
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetGatewayRequest(obj: AlexaForBusinessGetGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayArn': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetGatewayResponse
 */
export interface AlexaForBusinessGetGatewayResponse {
  /**
   * @schema AlexaForBusinessGetGatewayResponse#Gateway
   */
  readonly gateway?: AlexaForBusinessGateway;

}

/**
 * Converts an object of type 'AlexaForBusinessGetGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetGatewayResponse(obj: AlexaForBusinessGetGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gateway': toJson_AlexaForBusinessGateway(obj.gateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetGatewayGroupRequest
 */
export interface AlexaForBusinessGetGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessGetGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetGatewayGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetGatewayGroupRequest(obj: AlexaForBusinessGetGatewayGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroupArn': obj.gatewayGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetGatewayGroupResponse
 */
export interface AlexaForBusinessGetGatewayGroupResponse {
  /**
   * @schema AlexaForBusinessGetGatewayGroupResponse#GatewayGroup
   */
  readonly gatewayGroup?: AlexaForBusinessGatewayGroup;

}

/**
 * Converts an object of type 'AlexaForBusinessGetGatewayGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetGatewayGroupResponse(obj: AlexaForBusinessGetGatewayGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroup': toJson_AlexaForBusinessGatewayGroup(obj.gatewayGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetInvitationConfigurationRequest
 */
export interface AlexaForBusinessGetInvitationConfigurationRequest {
}

/**
 * Converts an object of type 'AlexaForBusinessGetInvitationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetInvitationConfigurationRequest(obj: AlexaForBusinessGetInvitationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetInvitationConfigurationResponse
 */
export interface AlexaForBusinessGetInvitationConfigurationResponse {
  /**
   * @schema AlexaForBusinessGetInvitationConfigurationResponse#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema AlexaForBusinessGetInvitationConfigurationResponse#ContactEmail
   */
  readonly contactEmail?: string;

  /**
   * @schema AlexaForBusinessGetInvitationConfigurationResponse#PrivateSkillIds
   */
  readonly privateSkillIds?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessGetInvitationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetInvitationConfigurationResponse(obj: AlexaForBusinessGetInvitationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationName': obj.organizationName,
    'ContactEmail': obj.contactEmail,
    'PrivateSkillIds': obj.privateSkillIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetNetworkProfileRequest
 */
export interface AlexaForBusinessGetNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessGetNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetNetworkProfileRequest(obj: AlexaForBusinessGetNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetNetworkProfileResponse
 */
export interface AlexaForBusinessGetNetworkProfileResponse {
  /**
   * @schema AlexaForBusinessGetNetworkProfileResponse#NetworkProfile
   */
  readonly networkProfile?: AlexaForBusinessNetworkProfile;

}

/**
 * Converts an object of type 'AlexaForBusinessGetNetworkProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetNetworkProfileResponse(obj: AlexaForBusinessGetNetworkProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfile': toJson_AlexaForBusinessNetworkProfile(obj.networkProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetProfileRequest
 */
export interface AlexaForBusinessGetProfileRequest {
  /**
   * @schema AlexaForBusinessGetProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetProfileRequest(obj: AlexaForBusinessGetProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileArn': obj.profileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetProfileResponse
 */
export interface AlexaForBusinessGetProfileResponse {
  /**
   * @schema AlexaForBusinessGetProfileResponse#Profile
   */
  readonly profile?: AlexaForBusinessProfile;

}

/**
 * Converts an object of type 'AlexaForBusinessGetProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetProfileResponse(obj: AlexaForBusinessGetProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Profile': toJson_AlexaForBusinessProfile(obj.profile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetRoomRequest
 */
export interface AlexaForBusinessGetRoomRequest {
  /**
   * @schema AlexaForBusinessGetRoomRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetRoomRequest(obj: AlexaForBusinessGetRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetRoomResponse
 */
export interface AlexaForBusinessGetRoomResponse {
  /**
   * @schema AlexaForBusinessGetRoomResponse#Room
   */
  readonly room?: AlexaForBusinessRoom;

}

/**
 * Converts an object of type 'AlexaForBusinessGetRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetRoomResponse(obj: AlexaForBusinessGetRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Room': toJson_AlexaForBusinessRoom(obj.room),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetRoomSkillParameterRequest
 */
export interface AlexaForBusinessGetRoomSkillParameterRequest {
  /**
   * @schema AlexaForBusinessGetRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessGetRoomSkillParameterRequest#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessGetRoomSkillParameterRequest#ParameterKey
   */
  readonly parameterKey?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetRoomSkillParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetRoomSkillParameterRequest(obj: AlexaForBusinessGetRoomSkillParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'SkillId': obj.skillId,
    'ParameterKey': obj.parameterKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetRoomSkillParameterResponse
 */
export interface AlexaForBusinessGetRoomSkillParameterResponse {
  /**
   * @schema AlexaForBusinessGetRoomSkillParameterResponse#RoomSkillParameter
   */
  readonly roomSkillParameter?: AlexaForBusinessRoomSkillParameter;

}

/**
 * Converts an object of type 'AlexaForBusinessGetRoomSkillParameterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetRoomSkillParameterResponse(obj: AlexaForBusinessGetRoomSkillParameterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomSkillParameter': toJson_AlexaForBusinessRoomSkillParameter(obj.roomSkillParameter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetSkillGroupRequest
 */
export interface AlexaForBusinessGetSkillGroupRequest {
  /**
   * @schema AlexaForBusinessGetSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGetSkillGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetSkillGroupRequest(obj: AlexaForBusinessGetSkillGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGetSkillGroupResponse
 */
export interface AlexaForBusinessGetSkillGroupResponse {
  /**
   * @schema AlexaForBusinessGetSkillGroupResponse#SkillGroup
   */
  readonly skillGroup?: AlexaForBusinessSkillGroup;

}

/**
 * Converts an object of type 'AlexaForBusinessGetSkillGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGetSkillGroupResponse(obj: AlexaForBusinessGetSkillGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroup': toJson_AlexaForBusinessSkillGroup(obj.skillGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListBusinessReportSchedulesRequest
 */
export interface AlexaForBusinessListBusinessReportSchedulesRequest {
  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListBusinessReportSchedulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListBusinessReportSchedulesRequest(obj: AlexaForBusinessListBusinessReportSchedulesRequest | undefined): Record<string, any> | undefined {
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
 * @schema AlexaForBusinessListBusinessReportSchedulesResponse
 */
export interface AlexaForBusinessListBusinessReportSchedulesResponse {
  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesResponse#BusinessReportSchedules
   */
  readonly businessReportSchedules?: AlexaForBusinessBusinessReportSchedule[];

  /**
   * @schema AlexaForBusinessListBusinessReportSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListBusinessReportSchedulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListBusinessReportSchedulesResponse(obj: AlexaForBusinessListBusinessReportSchedulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BusinessReportSchedules': obj.businessReportSchedules?.map(y => toJson_AlexaForBusinessBusinessReportSchedule(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListConferenceProvidersRequest
 */
export interface AlexaForBusinessListConferenceProvidersRequest {
  /**
   * @schema AlexaForBusinessListConferenceProvidersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListConferenceProvidersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListConferenceProvidersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListConferenceProvidersRequest(obj: AlexaForBusinessListConferenceProvidersRequest | undefined): Record<string, any> | undefined {
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
 * @schema AlexaForBusinessListConferenceProvidersResponse
 */
export interface AlexaForBusinessListConferenceProvidersResponse {
  /**
   * @schema AlexaForBusinessListConferenceProvidersResponse#ConferenceProviders
   */
  readonly conferenceProviders?: AlexaForBusinessConferenceProvider[];

  /**
   * @schema AlexaForBusinessListConferenceProvidersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListConferenceProvidersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListConferenceProvidersResponse(obj: AlexaForBusinessListConferenceProvidersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProviders': obj.conferenceProviders?.map(y => toJson_AlexaForBusinessConferenceProvider(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListDeviceEventsRequest
 */
export interface AlexaForBusinessListDeviceEventsRequest {
  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListDeviceEventsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListDeviceEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListDeviceEventsRequest(obj: AlexaForBusinessListDeviceEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'EventType': obj.eventType,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListDeviceEventsResponse
 */
export interface AlexaForBusinessListDeviceEventsResponse {
  /**
   * @schema AlexaForBusinessListDeviceEventsResponse#DeviceEvents
   */
  readonly deviceEvents?: AlexaForBusinessDeviceEvent[];

  /**
   * @schema AlexaForBusinessListDeviceEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListDeviceEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListDeviceEventsResponse(obj: AlexaForBusinessListDeviceEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceEvents': obj.deviceEvents?.map(y => toJson_AlexaForBusinessDeviceEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListGatewayGroupsRequest
 */
export interface AlexaForBusinessListGatewayGroupsRequest {
  /**
   * @schema AlexaForBusinessListGatewayGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListGatewayGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListGatewayGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListGatewayGroupsRequest(obj: AlexaForBusinessListGatewayGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AlexaForBusinessListGatewayGroupsResponse
 */
export interface AlexaForBusinessListGatewayGroupsResponse {
  /**
   * @schema AlexaForBusinessListGatewayGroupsResponse#GatewayGroups
   */
  readonly gatewayGroups?: AlexaForBusinessGatewayGroupSummary[];

  /**
   * @schema AlexaForBusinessListGatewayGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListGatewayGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListGatewayGroupsResponse(obj: AlexaForBusinessListGatewayGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroups': obj.gatewayGroups?.map(y => toJson_AlexaForBusinessGatewayGroupSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListGatewaysRequest
 */
export interface AlexaForBusinessListGatewaysRequest {
  /**
   * @schema AlexaForBusinessListGatewaysRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessListGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListGatewaysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListGatewaysRequest(obj: AlexaForBusinessListGatewaysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroupArn': obj.gatewayGroupArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListGatewaysResponse
 */
export interface AlexaForBusinessListGatewaysResponse {
  /**
   * @schema AlexaForBusinessListGatewaysResponse#Gateways
   */
  readonly gateways?: AlexaForBusinessGatewaySummary[];

  /**
   * @schema AlexaForBusinessListGatewaysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListGatewaysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListGatewaysResponse(obj: AlexaForBusinessListGatewaysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gateways': obj.gateways?.map(y => toJson_AlexaForBusinessGatewaySummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSkillsRequest
 */
export interface AlexaForBusinessListSkillsRequest {
  /**
   * @schema AlexaForBusinessListSkillsRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#EnablementType
   */
  readonly enablementType?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#SkillType
   */
  readonly skillType?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListSkillsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListSkillsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSkillsRequest(obj: AlexaForBusinessListSkillsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'EnablementType': obj.enablementType,
    'SkillType': obj.skillType,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSkillsResponse
 */
export interface AlexaForBusinessListSkillsResponse {
  /**
   * @schema AlexaForBusinessListSkillsResponse#SkillSummaries
   */
  readonly skillSummaries?: AlexaForBusinessSkillSummary[];

  /**
   * @schema AlexaForBusinessListSkillsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListSkillsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSkillsResponse(obj: AlexaForBusinessListSkillsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillSummaries': obj.skillSummaries?.map(y => toJson_AlexaForBusinessSkillSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSkillsStoreCategoriesRequest
 */
export interface AlexaForBusinessListSkillsStoreCategoriesRequest {
  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListSkillsStoreCategoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSkillsStoreCategoriesRequest(obj: AlexaForBusinessListSkillsStoreCategoriesRequest | undefined): Record<string, any> | undefined {
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
 * @schema AlexaForBusinessListSkillsStoreCategoriesResponse
 */
export interface AlexaForBusinessListSkillsStoreCategoriesResponse {
  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesResponse#CategoryList
   */
  readonly categoryList?: AlexaForBusinessCategory[];

  /**
   * @schema AlexaForBusinessListSkillsStoreCategoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListSkillsStoreCategoriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSkillsStoreCategoriesResponse(obj: AlexaForBusinessListSkillsStoreCategoriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CategoryList': obj.categoryList?.map(y => toJson_AlexaForBusinessCategory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest
 */
export interface AlexaForBusinessListSkillsStoreSkillsByCategoryRequest {
  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest#CategoryId
   */
  readonly categoryId?: number;

  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListSkillsStoreSkillsByCategoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSkillsStoreSkillsByCategoryRequest(obj: AlexaForBusinessListSkillsStoreSkillsByCategoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CategoryId': obj.categoryId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryResponse
 */
export interface AlexaForBusinessListSkillsStoreSkillsByCategoryResponse {
  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryResponse#SkillsStoreSkills
   */
  readonly skillsStoreSkills?: AlexaForBusinessSkillsStoreSkill[];

  /**
   * @schema AlexaForBusinessListSkillsStoreSkillsByCategoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListSkillsStoreSkillsByCategoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSkillsStoreSkillsByCategoryResponse(obj: AlexaForBusinessListSkillsStoreSkillsByCategoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillsStoreSkills': obj.skillsStoreSkills?.map(y => toJson_AlexaForBusinessSkillsStoreSkill(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSmartHomeAppliancesRequest
 */
export interface AlexaForBusinessListSmartHomeAppliancesRequest {
  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListSmartHomeAppliancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSmartHomeAppliancesRequest(obj: AlexaForBusinessListSmartHomeAppliancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListSmartHomeAppliancesResponse
 */
export interface AlexaForBusinessListSmartHomeAppliancesResponse {
  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesResponse#SmartHomeAppliances
   */
  readonly smartHomeAppliances?: AlexaForBusinessSmartHomeAppliance[];

  /**
   * @schema AlexaForBusinessListSmartHomeAppliancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListSmartHomeAppliancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListSmartHomeAppliancesResponse(obj: AlexaForBusinessListSmartHomeAppliancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SmartHomeAppliances': obj.smartHomeAppliances?.map(y => toJson_AlexaForBusinessSmartHomeAppliance(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListTagsRequest
 */
export interface AlexaForBusinessListTagsRequest {
  /**
   * @schema AlexaForBusinessListTagsRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListTagsRequest(obj: AlexaForBusinessListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessListTagsResponse
 */
export interface AlexaForBusinessListTagsResponse {
  /**
   * @schema AlexaForBusinessListTagsResponse#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

  /**
   * @schema AlexaForBusinessListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessListTagsResponse(obj: AlexaForBusinessListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutConferencePreferenceRequest
 */
export interface AlexaForBusinessPutConferencePreferenceRequest {
  /**
   * @schema AlexaForBusinessPutConferencePreferenceRequest#ConferencePreference
   */
  readonly conferencePreference?: AlexaForBusinessConferencePreference;

}

/**
 * Converts an object of type 'AlexaForBusinessPutConferencePreferenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutConferencePreferenceRequest(obj: AlexaForBusinessPutConferencePreferenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferencePreference': toJson_AlexaForBusinessConferencePreference(obj.conferencePreference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutConferencePreferenceResponse
 */
export interface AlexaForBusinessPutConferencePreferenceResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessPutConferencePreferenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutConferencePreferenceResponse(obj: AlexaForBusinessPutConferencePreferenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutInvitationConfigurationRequest
 */
export interface AlexaForBusinessPutInvitationConfigurationRequest {
  /**
   * @schema AlexaForBusinessPutInvitationConfigurationRequest#OrganizationName
   */
  readonly organizationName?: string;

  /**
   * @schema AlexaForBusinessPutInvitationConfigurationRequest#ContactEmail
   */
  readonly contactEmail?: string;

  /**
   * @schema AlexaForBusinessPutInvitationConfigurationRequest#PrivateSkillIds
   */
  readonly privateSkillIds?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessPutInvitationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutInvitationConfigurationRequest(obj: AlexaForBusinessPutInvitationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationName': obj.organizationName,
    'ContactEmail': obj.contactEmail,
    'PrivateSkillIds': obj.privateSkillIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutInvitationConfigurationResponse
 */
export interface AlexaForBusinessPutInvitationConfigurationResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessPutInvitationConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutInvitationConfigurationResponse(obj: AlexaForBusinessPutInvitationConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutRoomSkillParameterRequest
 */
export interface AlexaForBusinessPutRoomSkillParameterRequest {
  /**
   * @schema AlexaForBusinessPutRoomSkillParameterRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessPutRoomSkillParameterRequest#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessPutRoomSkillParameterRequest#RoomSkillParameter
   */
  readonly roomSkillParameter?: AlexaForBusinessRoomSkillParameter;

}

/**
 * Converts an object of type 'AlexaForBusinessPutRoomSkillParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutRoomSkillParameterRequest(obj: AlexaForBusinessPutRoomSkillParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'SkillId': obj.skillId,
    'RoomSkillParameter': toJson_AlexaForBusinessRoomSkillParameter(obj.roomSkillParameter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutRoomSkillParameterResponse
 */
export interface AlexaForBusinessPutRoomSkillParameterResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessPutRoomSkillParameterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutRoomSkillParameterResponse(obj: AlexaForBusinessPutRoomSkillParameterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutSkillAuthorizationRequest
 */
export interface AlexaForBusinessPutSkillAuthorizationRequest {
  /**
   * @schema AlexaForBusinessPutSkillAuthorizationRequest#AuthorizationResult
   */
  readonly authorizationResult?: { [key: string]: string };

  /**
   * @schema AlexaForBusinessPutSkillAuthorizationRequest#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessPutSkillAuthorizationRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessPutSkillAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutSkillAuthorizationRequest(obj: AlexaForBusinessPutSkillAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizationResult': ((obj.authorizationResult) === undefined) ? undefined : (Object.entries(obj.authorizationResult).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SkillId': obj.skillId,
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPutSkillAuthorizationResponse
 */
export interface AlexaForBusinessPutSkillAuthorizationResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessPutSkillAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPutSkillAuthorizationResponse(obj: AlexaForBusinessPutSkillAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRegisterAvsDeviceRequest
 */
export interface AlexaForBusinessRegisterAvsDeviceRequest {
  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#UserCode
   */
  readonly userCode?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#ProductId
   */
  readonly productId?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#AmazonId
   */
  readonly amazonId?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessRegisterAvsDeviceRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessRegisterAvsDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRegisterAvsDeviceRequest(obj: AlexaForBusinessRegisterAvsDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientId': obj.clientId,
    'UserCode': obj.userCode,
    'ProductId': obj.productId,
    'DeviceSerialNumber': obj.deviceSerialNumber,
    'AmazonId': obj.amazonId,
    'RoomArn': obj.roomArn,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRegisterAvsDeviceResponse
 */
export interface AlexaForBusinessRegisterAvsDeviceResponse {
  /**
   * @schema AlexaForBusinessRegisterAvsDeviceResponse#DeviceArn
   */
  readonly deviceArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessRegisterAvsDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRegisterAvsDeviceResponse(obj: AlexaForBusinessRegisterAvsDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRejectSkillRequest
 */
export interface AlexaForBusinessRejectSkillRequest {
  /**
   * @schema AlexaForBusinessRejectSkillRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessRejectSkillRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRejectSkillRequest(obj: AlexaForBusinessRejectSkillRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRejectSkillResponse
 */
export interface AlexaForBusinessRejectSkillResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessRejectSkillResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRejectSkillResponse(obj: AlexaForBusinessRejectSkillResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessResolveRoomRequest
 */
export interface AlexaForBusinessResolveRoomRequest {
  /**
   * @schema AlexaForBusinessResolveRoomRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema AlexaForBusinessResolveRoomRequest#SkillId
   */
  readonly skillId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessResolveRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessResolveRoomRequest(obj: AlexaForBusinessResolveRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'SkillId': obj.skillId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessResolveRoomResponse
 */
export interface AlexaForBusinessResolveRoomResponse {
  /**
   * @schema AlexaForBusinessResolveRoomResponse#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessResolveRoomResponse#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessResolveRoomResponse#RoomSkillParameters
   */
  readonly roomSkillParameters?: AlexaForBusinessRoomSkillParameter[];

}

/**
 * Converts an object of type 'AlexaForBusinessResolveRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessResolveRoomResponse(obj: AlexaForBusinessResolveRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'RoomName': obj.roomName,
    'RoomSkillParameters': obj.roomSkillParameters?.map(y => toJson_AlexaForBusinessRoomSkillParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRevokeInvitationRequest
 */
export interface AlexaForBusinessRevokeInvitationRequest {
  /**
   * @schema AlexaForBusinessRevokeInvitationRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema AlexaForBusinessRevokeInvitationRequest#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessRevokeInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRevokeInvitationRequest(obj: AlexaForBusinessRevokeInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserArn': obj.userArn,
    'EnrollmentId': obj.enrollmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRevokeInvitationResponse
 */
export interface AlexaForBusinessRevokeInvitationResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessRevokeInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRevokeInvitationResponse(obj: AlexaForBusinessRevokeInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchAddressBooksRequest
 */
export interface AlexaForBusinessSearchAddressBooksRequest {
  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchAddressBooksRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchAddressBooksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchAddressBooksRequest(obj: AlexaForBusinessSearchAddressBooksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchAddressBooksResponse
 */
export interface AlexaForBusinessSearchAddressBooksResponse {
  /**
   * @schema AlexaForBusinessSearchAddressBooksResponse#AddressBooks
   */
  readonly addressBooks?: AlexaForBusinessAddressBookData[];

  /**
   * @schema AlexaForBusinessSearchAddressBooksResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchAddressBooksResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchAddressBooksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchAddressBooksResponse(obj: AlexaForBusinessSearchAddressBooksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBooks': obj.addressBooks?.map(y => toJson_AlexaForBusinessAddressBookData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchContactsRequest
 */
export interface AlexaForBusinessSearchContactsRequest {
  /**
   * @schema AlexaForBusinessSearchContactsRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchContactsRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

  /**
   * @schema AlexaForBusinessSearchContactsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchContactsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchContactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchContactsRequest(obj: AlexaForBusinessSearchContactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchContactsResponse
 */
export interface AlexaForBusinessSearchContactsResponse {
  /**
   * @schema AlexaForBusinessSearchContactsResponse#Contacts
   */
  readonly contacts?: AlexaForBusinessContactData[];

  /**
   * @schema AlexaForBusinessSearchContactsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchContactsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchContactsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchContactsResponse(obj: AlexaForBusinessSearchContactsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Contacts': obj.contacts?.map(y => toJson_AlexaForBusinessContactData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchDevicesRequest
 */
export interface AlexaForBusinessSearchDevicesRequest {
  /**
   * @schema AlexaForBusinessSearchDevicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchDevicesRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchDevicesRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * Converts an object of type 'AlexaForBusinessSearchDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchDevicesRequest(obj: AlexaForBusinessSearchDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchDevicesResponse
 */
export interface AlexaForBusinessSearchDevicesResponse {
  /**
   * @schema AlexaForBusinessSearchDevicesResponse#Devices
   */
  readonly devices?: AlexaForBusinessDeviceData[];

  /**
   * @schema AlexaForBusinessSearchDevicesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchDevicesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchDevicesResponse(obj: AlexaForBusinessSearchDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Devices': obj.devices?.map(y => toJson_AlexaForBusinessDeviceData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchNetworkProfilesRequest
 */
export interface AlexaForBusinessSearchNetworkProfilesRequest {
  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * Converts an object of type 'AlexaForBusinessSearchNetworkProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchNetworkProfilesRequest(obj: AlexaForBusinessSearchNetworkProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchNetworkProfilesResponse
 */
export interface AlexaForBusinessSearchNetworkProfilesResponse {
  /**
   * @schema AlexaForBusinessSearchNetworkProfilesResponse#NetworkProfiles
   */
  readonly networkProfiles?: AlexaForBusinessNetworkProfileData[];

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchNetworkProfilesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchNetworkProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchNetworkProfilesResponse(obj: AlexaForBusinessSearchNetworkProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfiles': obj.networkProfiles?.map(y => toJson_AlexaForBusinessNetworkProfileData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchProfilesRequest
 */
export interface AlexaForBusinessSearchProfilesRequest {
  /**
   * @schema AlexaForBusinessSearchProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchProfilesRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchProfilesRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * Converts an object of type 'AlexaForBusinessSearchProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchProfilesRequest(obj: AlexaForBusinessSearchProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchProfilesResponse
 */
export interface AlexaForBusinessSearchProfilesResponse {
  /**
   * @schema AlexaForBusinessSearchProfilesResponse#Profiles
   */
  readonly profiles?: AlexaForBusinessProfileData[];

  /**
   * @schema AlexaForBusinessSearchProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchProfilesResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchProfilesResponse(obj: AlexaForBusinessSearchProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Profiles': obj.profiles?.map(y => toJson_AlexaForBusinessProfileData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchRoomsRequest
 */
export interface AlexaForBusinessSearchRoomsRequest {
  /**
   * @schema AlexaForBusinessSearchRoomsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchRoomsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchRoomsRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchRoomsRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * Converts an object of type 'AlexaForBusinessSearchRoomsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchRoomsRequest(obj: AlexaForBusinessSearchRoomsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchRoomsResponse
 */
export interface AlexaForBusinessSearchRoomsResponse {
  /**
   * @schema AlexaForBusinessSearchRoomsResponse#Rooms
   */
  readonly rooms?: AlexaForBusinessRoomData[];

  /**
   * @schema AlexaForBusinessSearchRoomsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchRoomsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchRoomsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchRoomsResponse(obj: AlexaForBusinessSearchRoomsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rooms': obj.rooms?.map(y => toJson_AlexaForBusinessRoomData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchSkillGroupsRequest
 */
export interface AlexaForBusinessSearchSkillGroupsRequest {
  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchSkillGroupsRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * Converts an object of type 'AlexaForBusinessSearchSkillGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchSkillGroupsRequest(obj: AlexaForBusinessSearchSkillGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchSkillGroupsResponse
 */
export interface AlexaForBusinessSearchSkillGroupsResponse {
  /**
   * @schema AlexaForBusinessSearchSkillGroupsResponse#SkillGroups
   */
  readonly skillGroups?: AlexaForBusinessSkillGroupData[];

  /**
   * @schema AlexaForBusinessSearchSkillGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchSkillGroupsResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchSkillGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchSkillGroupsResponse(obj: AlexaForBusinessSearchSkillGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroups': obj.skillGroups?.map(y => toJson_AlexaForBusinessSkillGroupData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchUsersRequest
 */
export interface AlexaForBusinessSearchUsersRequest {
  /**
   * @schema AlexaForBusinessSearchUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AlexaForBusinessSearchUsersRequest#Filters
   */
  readonly filters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSearchUsersRequest#SortCriteria
   */
  readonly sortCriteria?: AlexaForBusinessSort[];

}

/**
 * Converts an object of type 'AlexaForBusinessSearchUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchUsersRequest(obj: AlexaForBusinessSearchUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'SortCriteria': obj.sortCriteria?.map(y => toJson_AlexaForBusinessSort(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSearchUsersResponse
 */
export interface AlexaForBusinessSearchUsersResponse {
  /**
   * @schema AlexaForBusinessSearchUsersResponse#Users
   */
  readonly users?: AlexaForBusinessUserData[];

  /**
   * @schema AlexaForBusinessSearchUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AlexaForBusinessSearchUsersResponse#TotalCount
   */
  readonly totalCount?: number;

}

/**
 * Converts an object of type 'AlexaForBusinessSearchUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSearchUsersResponse(obj: AlexaForBusinessSearchUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_AlexaForBusinessUserData(y)),
    'NextToken': obj.nextToken,
    'TotalCount': obj.totalCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSendAnnouncementRequest
 */
export interface AlexaForBusinessSendAnnouncementRequest {
  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#RoomFilters
   */
  readonly roomFilters?: AlexaForBusinessFilter[];

  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#Content
   */
  readonly content?: AlexaForBusinessContent;

  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#TimeToLiveInSeconds
   */
  readonly timeToLiveInSeconds?: number;

  /**
   * @schema AlexaForBusinessSendAnnouncementRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSendAnnouncementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSendAnnouncementRequest(obj: AlexaForBusinessSendAnnouncementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomFilters': obj.roomFilters?.map(y => toJson_AlexaForBusinessFilter(y)),
    'Content': toJson_AlexaForBusinessContent(obj.content),
    'TimeToLiveInSeconds': obj.timeToLiveInSeconds,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSendAnnouncementResponse
 */
export interface AlexaForBusinessSendAnnouncementResponse {
  /**
   * @schema AlexaForBusinessSendAnnouncementResponse#AnnouncementArn
   */
  readonly announcementArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSendAnnouncementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSendAnnouncementResponse(obj: AlexaForBusinessSendAnnouncementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnnouncementArn': obj.announcementArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSendInvitationRequest
 */
export interface AlexaForBusinessSendInvitationRequest {
  /**
   * @schema AlexaForBusinessSendInvitationRequest#UserArn
   */
  readonly userArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSendInvitationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSendInvitationRequest(obj: AlexaForBusinessSendInvitationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSendInvitationResponse
 */
export interface AlexaForBusinessSendInvitationResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessSendInvitationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSendInvitationResponse(obj: AlexaForBusinessSendInvitationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessStartDeviceSyncRequest
 */
export interface AlexaForBusinessStartDeviceSyncRequest {
  /**
   * @schema AlexaForBusinessStartDeviceSyncRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessStartDeviceSyncRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessStartDeviceSyncRequest#Features
   */
  readonly features?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessStartDeviceSyncRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessStartDeviceSyncRequest(obj: AlexaForBusinessStartDeviceSyncRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'DeviceArn': obj.deviceArn,
    'Features': obj.features?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessStartDeviceSyncResponse
 */
export interface AlexaForBusinessStartDeviceSyncResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessStartDeviceSyncResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessStartDeviceSyncResponse(obj: AlexaForBusinessStartDeviceSyncResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest
 */
export interface AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest {
  /**
   * @schema AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest#RoomArn
   */
  readonly roomArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest(obj: AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse
 */
export interface AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse(obj: AlexaForBusinessStartSmartHomeApplianceDiscoveryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessTagResourceRequest
 */
export interface AlexaForBusinessTagResourceRequest {
  /**
   * @schema AlexaForBusinessTagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessTagResourceRequest#Tags
   */
  readonly tags?: AlexaForBusinessTag[];

}

/**
 * Converts an object of type 'AlexaForBusinessTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessTagResourceRequest(obj: AlexaForBusinessTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': obj.tags?.map(y => toJson_AlexaForBusinessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessTagResourceResponse
 */
export interface AlexaForBusinessTagResourceResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessTagResourceResponse(obj: AlexaForBusinessTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUntagResourceRequest
 */
export interface AlexaForBusinessUntagResourceRequest {
  /**
   * @schema AlexaForBusinessUntagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUntagResourceRequest(obj: AlexaForBusinessUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUntagResourceResponse
 */
export interface AlexaForBusinessUntagResourceResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUntagResourceResponse(obj: AlexaForBusinessUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateAddressBookRequest
 */
export interface AlexaForBusinessUpdateAddressBookRequest {
  /**
   * @schema AlexaForBusinessUpdateAddressBookRequest#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessUpdateAddressBookRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessUpdateAddressBookRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateAddressBookRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateAddressBookRequest(obj: AlexaForBusinessUpdateAddressBookRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBookArn': obj.addressBookArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateAddressBookResponse
 */
export interface AlexaForBusinessUpdateAddressBookResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateAddressBookResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateAddressBookResponse(obj: AlexaForBusinessUpdateAddressBookResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest
 */
export interface AlexaForBusinessUpdateBusinessReportScheduleRequest {
  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#ScheduleArn
   */
  readonly scheduleArn?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#Format
   */
  readonly format?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema AlexaForBusinessUpdateBusinessReportScheduleRequest#Recurrence
   */
  readonly recurrence?: AlexaForBusinessBusinessReportRecurrence;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateBusinessReportScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateBusinessReportScheduleRequest(obj: AlexaForBusinessUpdateBusinessReportScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleArn': obj.scheduleArn,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'Format': obj.format,
    'ScheduleName': obj.scheduleName,
    'Recurrence': toJson_AlexaForBusinessBusinessReportRecurrence(obj.recurrence),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateBusinessReportScheduleResponse
 */
export interface AlexaForBusinessUpdateBusinessReportScheduleResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateBusinessReportScheduleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateBusinessReportScheduleResponse(obj: AlexaForBusinessUpdateBusinessReportScheduleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateConferenceProviderRequest
 */
export interface AlexaForBusinessUpdateConferenceProviderRequest {
  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#ConferenceProviderArn
   */
  readonly conferenceProviderArn?: string;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#ConferenceProviderType
   */
  readonly conferenceProviderType?: string;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#IPDialIn
   */
  readonly ipDialIn?: AlexaForBusinessIpDialIn;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#PSTNDialIn
   */
  readonly pstnDialIn?: AlexaForBusinessPstnDialIn;

  /**
   * @schema AlexaForBusinessUpdateConferenceProviderRequest#MeetingSetting
   */
  readonly meetingSetting?: AlexaForBusinessMeetingSetting;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateConferenceProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateConferenceProviderRequest(obj: AlexaForBusinessUpdateConferenceProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConferenceProviderArn': obj.conferenceProviderArn,
    'ConferenceProviderType': obj.conferenceProviderType,
    'IPDialIn': toJson_AlexaForBusinessIpDialIn(obj.ipDialIn),
    'PSTNDialIn': toJson_AlexaForBusinessPstnDialIn(obj.pstnDialIn),
    'MeetingSetting': toJson_AlexaForBusinessMeetingSetting(obj.meetingSetting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateConferenceProviderResponse
 */
export interface AlexaForBusinessUpdateConferenceProviderResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateConferenceProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateConferenceProviderResponse(obj: AlexaForBusinessUpdateConferenceProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateContactRequest
 */
export interface AlexaForBusinessUpdateContactRequest {
  /**
   * @schema AlexaForBusinessUpdateContactRequest#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessUpdateContactRequest#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessUpdateContactRequest#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateContactRequest(obj: AlexaForBusinessUpdateContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'DisplayName': obj.displayName,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'PhoneNumber': obj.phoneNumber,
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_AlexaForBusinessPhoneNumber(y)),
    'SipAddresses': obj.sipAddresses?.map(y => toJson_AlexaForBusinessSipAddress(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateContactResponse
 */
export interface AlexaForBusinessUpdateContactResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateContactResponse(obj: AlexaForBusinessUpdateContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateDeviceRequest
 */
export interface AlexaForBusinessUpdateDeviceRequest {
  /**
   * @schema AlexaForBusinessUpdateDeviceRequest#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessUpdateDeviceRequest#DeviceName
   */
  readonly deviceName?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateDeviceRequest(obj: AlexaForBusinessUpdateDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'DeviceName': obj.deviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateDeviceResponse
 */
export interface AlexaForBusinessUpdateDeviceResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateDeviceResponse(obj: AlexaForBusinessUpdateDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateGatewayRequest
 */
export interface AlexaForBusinessUpdateGatewayRequest {
  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#GatewayArn
   */
  readonly gatewayArn?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayRequest#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateGatewayRequest(obj: AlexaForBusinessUpdateGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayArn': obj.gatewayArn,
    'Name': obj.name,
    'Description': obj.description,
    'SoftwareVersion': obj.softwareVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateGatewayResponse
 */
export interface AlexaForBusinessUpdateGatewayResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateGatewayResponse(obj: AlexaForBusinessUpdateGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateGatewayGroupRequest
 */
export interface AlexaForBusinessUpdateGatewayGroupRequest {
  /**
   * @schema AlexaForBusinessUpdateGatewayGroupRequest#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessUpdateGatewayGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateGatewayGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateGatewayGroupRequest(obj: AlexaForBusinessUpdateGatewayGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayGroupArn': obj.gatewayGroupArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateGatewayGroupResponse
 */
export interface AlexaForBusinessUpdateGatewayGroupResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateGatewayGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateGatewayGroupResponse(obj: AlexaForBusinessUpdateGatewayGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateNetworkProfileRequest
 */
export interface AlexaForBusinessUpdateNetworkProfileRequest {
  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AlexaForBusinessUpdateNetworkProfileRequest#TrustAnchors
   */
  readonly trustAnchors?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateNetworkProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateNetworkProfileRequest(obj: AlexaForBusinessUpdateNetworkProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
    'NetworkProfileName': obj.networkProfileName,
    'Description': obj.description,
    'CurrentPassword': obj.currentPassword,
    'NextPassword': obj.nextPassword,
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'TrustAnchors': obj.trustAnchors?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateNetworkProfileResponse
 */
export interface AlexaForBusinessUpdateNetworkProfileResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateNetworkProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateNetworkProfileResponse(obj: AlexaForBusinessUpdateNetworkProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateProfileRequest
 */
export interface AlexaForBusinessUpdateProfileRequest {
  /**
   * @schema AlexaForBusinessUpdateProfileRequest#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#DataRetentionOptIn
   */
  readonly dataRetentionOptIn?: boolean;

  /**
   * @schema AlexaForBusinessUpdateProfileRequest#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: AlexaForBusinessUpdateMeetingRoomConfiguration;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateProfileRequest(obj: AlexaForBusinessUpdateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileArn': obj.profileArn,
    'ProfileName': obj.profileName,
    'IsDefault': obj.isDefault,
    'Timezone': obj.timezone,
    'Address': obj.address,
    'DistanceUnit': obj.distanceUnit,
    'TemperatureUnit': obj.temperatureUnit,
    'WakeWord': obj.wakeWord,
    'Locale': obj.locale,
    'SetupModeDisabled': obj.setupModeDisabled,
    'MaxVolumeLimit': obj.maxVolumeLimit,
    'PSTNEnabled': obj.pstnEnabled,
    'DataRetentionOptIn': obj.dataRetentionOptIn,
    'MeetingRoomConfiguration': toJson_AlexaForBusinessUpdateMeetingRoomConfiguration(obj.meetingRoomConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateProfileResponse
 */
export interface AlexaForBusinessUpdateProfileResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateProfileResponse(obj: AlexaForBusinessUpdateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateRoomRequest
 */
export interface AlexaForBusinessUpdateRoomRequest {
  /**
   * @schema AlexaForBusinessUpdateRoomRequest#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessUpdateRoomRequest#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateRoomRequest(obj: AlexaForBusinessUpdateRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'RoomName': obj.roomName,
    'Description': obj.description,
    'ProviderCalendarId': obj.providerCalendarId,
    'ProfileArn': obj.profileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateRoomResponse
 */
export interface AlexaForBusinessUpdateRoomResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateRoomResponse(obj: AlexaForBusinessUpdateRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateSkillGroupRequest
 */
export interface AlexaForBusinessUpdateSkillGroupRequest {
  /**
   * @schema AlexaForBusinessUpdateSkillGroupRequest#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessUpdateSkillGroupRequest#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessUpdateSkillGroupRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateSkillGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateSkillGroupRequest(obj: AlexaForBusinessUpdateSkillGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'SkillGroupName': obj.skillGroupName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateSkillGroupResponse
 */
export interface AlexaForBusinessUpdateSkillGroupResponse {
}

/**
 * Converts an object of type 'AlexaForBusinessUpdateSkillGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateSkillGroupResponse(obj: AlexaForBusinessUpdateSkillGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessTag
 */
export interface AlexaForBusinessTag {
  /**
   * @schema AlexaForBusinessTag#Key
   */
  readonly key?: string;

  /**
   * @schema AlexaForBusinessTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessTag(obj: AlexaForBusinessTag | undefined): Record<string, any> | undefined {
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
 * @schema AlexaForBusinessBusinessReportContentRange
 */
export interface AlexaForBusinessBusinessReportContentRange {
  /**
   * @schema AlexaForBusinessBusinessReportContentRange#Interval
   */
  readonly interval?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessBusinessReportContentRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessBusinessReportContentRange(obj: AlexaForBusinessBusinessReportContentRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Interval': obj.interval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessBusinessReportRecurrence
 */
export interface AlexaForBusinessBusinessReportRecurrence {
  /**
   * @schema AlexaForBusinessBusinessReportRecurrence#StartDate
   */
  readonly startDate?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessBusinessReportRecurrence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessBusinessReportRecurrence(obj: AlexaForBusinessBusinessReportRecurrence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartDate': obj.startDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessIpDialIn
 */
export interface AlexaForBusinessIpDialIn {
  /**
   * @schema AlexaForBusinessIpDialIn#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema AlexaForBusinessIpDialIn#CommsProtocol
   */
  readonly commsProtocol?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessIpDialIn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessIpDialIn(obj: AlexaForBusinessIpDialIn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': obj.endpoint,
    'CommsProtocol': obj.commsProtocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPstnDialIn
 */
export interface AlexaForBusinessPstnDialIn {
  /**
   * @schema AlexaForBusinessPstnDialIn#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema AlexaForBusinessPstnDialIn#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessPstnDialIn#OneClickIdDelay
   */
  readonly oneClickIdDelay?: string;

  /**
   * @schema AlexaForBusinessPstnDialIn#OneClickPinDelay
   */
  readonly oneClickPinDelay?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessPstnDialIn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPstnDialIn(obj: AlexaForBusinessPstnDialIn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountryCode': obj.countryCode,
    'PhoneNumber': obj.phoneNumber,
    'OneClickIdDelay': obj.oneClickIdDelay,
    'OneClickPinDelay': obj.oneClickPinDelay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessMeetingSetting
 */
export interface AlexaForBusinessMeetingSetting {
  /**
   * @schema AlexaForBusinessMeetingSetting#RequirePin
   */
  readonly requirePin?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessMeetingSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessMeetingSetting(obj: AlexaForBusinessMeetingSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequirePin': obj.requirePin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessPhoneNumber
 */
export interface AlexaForBusinessPhoneNumber {
  /**
   * @schema AlexaForBusinessPhoneNumber#Number
   */
  readonly number?: string;

  /**
   * @schema AlexaForBusinessPhoneNumber#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessPhoneNumber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessPhoneNumber(obj: AlexaForBusinessPhoneNumber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Number': obj.number,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSipAddress
 */
export interface AlexaForBusinessSipAddress {
  /**
   * @schema AlexaForBusinessSipAddress#Uri
   */
  readonly uri?: string;

  /**
   * @schema AlexaForBusinessSipAddress#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSipAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSipAddress(obj: AlexaForBusinessSipAddress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Uri': obj.uri,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateMeetingRoomConfiguration
 */
export interface AlexaForBusinessCreateMeetingRoomConfiguration {
  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: AlexaForBusinessCreateEndOfMeetingReminder;

  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: AlexaForBusinessCreateInstantBooking;

  /**
   * @schema AlexaForBusinessCreateMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: AlexaForBusinessCreateRequireCheckIn;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateMeetingRoomConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateMeetingRoomConfiguration(obj: AlexaForBusinessCreateMeetingRoomConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomUtilizationMetricsEnabled': obj.roomUtilizationMetricsEnabled,
    'EndOfMeetingReminder': toJson_AlexaForBusinessCreateEndOfMeetingReminder(obj.endOfMeetingReminder),
    'InstantBooking': toJson_AlexaForBusinessCreateInstantBooking(obj.instantBooking),
    'RequireCheckIn': toJson_AlexaForBusinessCreateRequireCheckIn(obj.requireCheckIn),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAddressBook
 */
export interface AlexaForBusinessAddressBook {
  /**
   * @schema AlexaForBusinessAddressBook#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessAddressBook#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessAddressBook#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAddressBook' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAddressBook(obj: AlexaForBusinessAddressBook | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBookArn': obj.addressBookArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessConferencePreference
 */
export interface AlexaForBusinessConferencePreference {
  /**
   * @schema AlexaForBusinessConferencePreference#DefaultConferenceProviderArn
   */
  readonly defaultConferenceProviderArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessConferencePreference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessConferencePreference(obj: AlexaForBusinessConferencePreference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultConferenceProviderArn': obj.defaultConferenceProviderArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessConferenceProvider
 */
export interface AlexaForBusinessConferenceProvider {
  /**
   * @schema AlexaForBusinessConferenceProvider#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessConferenceProvider#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessConferenceProvider#Type
   */
  readonly type?: string;

  /**
   * @schema AlexaForBusinessConferenceProvider#IPDialIn
   */
  readonly ipDialIn?: AlexaForBusinessIpDialIn;

  /**
   * @schema AlexaForBusinessConferenceProvider#PSTNDialIn
   */
  readonly pstnDialIn?: AlexaForBusinessPstnDialIn;

  /**
   * @schema AlexaForBusinessConferenceProvider#MeetingSetting
   */
  readonly meetingSetting?: AlexaForBusinessMeetingSetting;

}

/**
 * Converts an object of type 'AlexaForBusinessConferenceProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessConferenceProvider(obj: AlexaForBusinessConferenceProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
    'IPDialIn': toJson_AlexaForBusinessIpDialIn(obj.ipDialIn),
    'PSTNDialIn': toJson_AlexaForBusinessPstnDialIn(obj.pstnDialIn),
    'MeetingSetting': toJson_AlexaForBusinessMeetingSetting(obj.meetingSetting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessContact
 */
export interface AlexaForBusinessContact {
  /**
   * @schema AlexaForBusinessContact#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessContact#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessContact#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessContact#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessContact#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessContact#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessContact#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

}

/**
 * Converts an object of type 'AlexaForBusinessContact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessContact(obj: AlexaForBusinessContact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'DisplayName': obj.displayName,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'PhoneNumber': obj.phoneNumber,
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_AlexaForBusinessPhoneNumber(y)),
    'SipAddresses': obj.sipAddresses?.map(y => toJson_AlexaForBusinessSipAddress(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDevice
 */
export interface AlexaForBusinessDevice {
  /**
   * @schema AlexaForBusinessDevice#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema AlexaForBusinessDevice#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema AlexaForBusinessDevice#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema AlexaForBusinessDevice#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceStatus
   */
  readonly deviceStatus?: string;

  /**
   * @schema AlexaForBusinessDevice#DeviceStatusInfo
   */
  readonly deviceStatusInfo?: AlexaForBusinessDeviceStatusInfo;

  /**
   * @schema AlexaForBusinessDevice#NetworkProfileInfo
   */
  readonly networkProfileInfo?: AlexaForBusinessDeviceNetworkProfileInfo;

}

/**
 * Converts an object of type 'AlexaForBusinessDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDevice(obj: AlexaForBusinessDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'DeviceSerialNumber': obj.deviceSerialNumber,
    'DeviceType': obj.deviceType,
    'DeviceName': obj.deviceName,
    'SoftwareVersion': obj.softwareVersion,
    'MacAddress': obj.macAddress,
    'RoomArn': obj.roomArn,
    'DeviceStatus': obj.deviceStatus,
    'DeviceStatusInfo': toJson_AlexaForBusinessDeviceStatusInfo(obj.deviceStatusInfo),
    'NetworkProfileInfo': toJson_AlexaForBusinessDeviceNetworkProfileInfo(obj.networkProfileInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGateway
 */
export interface AlexaForBusinessGateway {
  /**
   * @schema AlexaForBusinessGateway#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGateway#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGateway#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessGateway#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessGateway#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGateway(obj: AlexaForBusinessGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'GatewayGroupArn': obj.gatewayGroupArn,
    'SoftwareVersion': obj.softwareVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGatewayGroup
 */
export interface AlexaForBusinessGatewayGroup {
  /**
   * @schema AlexaForBusinessGatewayGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGatewayGroup#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGatewayGroup#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGatewayGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGatewayGroup(obj: AlexaForBusinessGatewayGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessNetworkProfile
 */
export interface AlexaForBusinessNetworkProfile {
  /**
   * @schema AlexaForBusinessNetworkProfile#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#CurrentPassword
   */
  readonly currentPassword?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#NextPassword
   */
  readonly nextPassword?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AlexaForBusinessNetworkProfile#TrustAnchors
   */
  readonly trustAnchors?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessNetworkProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessNetworkProfile(obj: AlexaForBusinessNetworkProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
    'NetworkProfileName': obj.networkProfileName,
    'Description': obj.description,
    'Ssid': obj.ssid,
    'SecurityType': obj.securityType,
    'EapMethod': obj.eapMethod,
    'CurrentPassword': obj.currentPassword,
    'NextPassword': obj.nextPassword,
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'TrustAnchors': obj.trustAnchors?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessProfile
 */
export interface AlexaForBusinessProfile {
  /**
   * @schema AlexaForBusinessProfile#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessProfile#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessProfile#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema AlexaForBusinessProfile#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessProfile#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessProfile#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessProfile#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessProfile#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessProfile#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessProfile#SetupModeDisabled
   */
  readonly setupModeDisabled?: boolean;

  /**
   * @schema AlexaForBusinessProfile#MaxVolumeLimit
   */
  readonly maxVolumeLimit?: number;

  /**
   * @schema AlexaForBusinessProfile#PSTNEnabled
   */
  readonly pstnEnabled?: boolean;

  /**
   * @schema AlexaForBusinessProfile#DataRetentionOptIn
   */
  readonly dataRetentionOptIn?: boolean;

  /**
   * @schema AlexaForBusinessProfile#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessProfile#MeetingRoomConfiguration
   */
  readonly meetingRoomConfiguration?: AlexaForBusinessMeetingRoomConfiguration;

}

/**
 * Converts an object of type 'AlexaForBusinessProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessProfile(obj: AlexaForBusinessProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileArn': obj.profileArn,
    'ProfileName': obj.profileName,
    'IsDefault': obj.isDefault,
    'Address': obj.address,
    'Timezone': obj.timezone,
    'DistanceUnit': obj.distanceUnit,
    'TemperatureUnit': obj.temperatureUnit,
    'WakeWord': obj.wakeWord,
    'Locale': obj.locale,
    'SetupModeDisabled': obj.setupModeDisabled,
    'MaxVolumeLimit': obj.maxVolumeLimit,
    'PSTNEnabled': obj.pstnEnabled,
    'DataRetentionOptIn': obj.dataRetentionOptIn,
    'AddressBookArn': obj.addressBookArn,
    'MeetingRoomConfiguration': toJson_AlexaForBusinessMeetingRoomConfiguration(obj.meetingRoomConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRoom
 */
export interface AlexaForBusinessRoom {
  /**
   * @schema AlexaForBusinessRoom#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessRoom#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessRoom#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessRoom#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessRoom#ProfileArn
   */
  readonly profileArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessRoom' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRoom(obj: AlexaForBusinessRoom | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'RoomName': obj.roomName,
    'Description': obj.description,
    'ProviderCalendarId': obj.providerCalendarId,
    'ProfileArn': obj.profileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRoomSkillParameter
 */
export interface AlexaForBusinessRoomSkillParameter {
  /**
   * @schema AlexaForBusinessRoomSkillParameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema AlexaForBusinessRoomSkillParameter#ParameterValue
   */
  readonly parameterValue?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessRoomSkillParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRoomSkillParameter(obj: AlexaForBusinessRoomSkillParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterKey': obj.parameterKey,
    'ParameterValue': obj.parameterValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSkillGroup
 */
export interface AlexaForBusinessSkillGroup {
  /**
   * @schema AlexaForBusinessSkillGroup#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessSkillGroup#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessSkillGroup#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSkillGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSkillGroup(obj: AlexaForBusinessSkillGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'SkillGroupName': obj.skillGroupName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessBusinessReportSchedule
 */
export interface AlexaForBusinessBusinessReportSchedule {
  /**
   * @schema AlexaForBusinessBusinessReportSchedule#ScheduleArn
   */
  readonly scheduleArn?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#ScheduleName
   */
  readonly scheduleName?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#Format
   */
  readonly format?: string;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#ContentRange
   */
  readonly contentRange?: AlexaForBusinessBusinessReportContentRange;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#Recurrence
   */
  readonly recurrence?: AlexaForBusinessBusinessReportRecurrence;

  /**
   * @schema AlexaForBusinessBusinessReportSchedule#LastBusinessReport
   */
  readonly lastBusinessReport?: AlexaForBusinessBusinessReport;

}

/**
 * Converts an object of type 'AlexaForBusinessBusinessReportSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessBusinessReportSchedule(obj: AlexaForBusinessBusinessReportSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduleArn': obj.scheduleArn,
    'ScheduleName': obj.scheduleName,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'Format': obj.format,
    'ContentRange': toJson_AlexaForBusinessBusinessReportContentRange(obj.contentRange),
    'Recurrence': toJson_AlexaForBusinessBusinessReportRecurrence(obj.recurrence),
    'LastBusinessReport': toJson_AlexaForBusinessBusinessReport(obj.lastBusinessReport),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeviceEvent
 */
export interface AlexaForBusinessDeviceEvent {
  /**
   * @schema AlexaForBusinessDeviceEvent#Type
   */
  readonly type?: string;

  /**
   * @schema AlexaForBusinessDeviceEvent#Value
   */
  readonly value?: string;

  /**
   * @schema AlexaForBusinessDeviceEvent#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeviceEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeviceEvent(obj: AlexaForBusinessDeviceEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGatewayGroupSummary
 */
export interface AlexaForBusinessGatewayGroupSummary {
  /**
   * @schema AlexaForBusinessGatewayGroupSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGatewayGroupSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGatewayGroupSummary#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGatewayGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGatewayGroupSummary(obj: AlexaForBusinessGatewayGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessGatewaySummary
 */
export interface AlexaForBusinessGatewaySummary {
  /**
   * @schema AlexaForBusinessGatewaySummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#GatewayGroupArn
   */
  readonly gatewayGroupArn?: string;

  /**
   * @schema AlexaForBusinessGatewaySummary#SoftwareVersion
   */
  readonly softwareVersion?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessGatewaySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessGatewaySummary(obj: AlexaForBusinessGatewaySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'GatewayGroupArn': obj.gatewayGroupArn,
    'SoftwareVersion': obj.softwareVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSkillSummary
 */
export interface AlexaForBusinessSkillSummary {
  /**
   * @schema AlexaForBusinessSkillSummary#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessSkillSummary#SkillName
   */
  readonly skillName?: string;

  /**
   * @schema AlexaForBusinessSkillSummary#SupportsLinking
   */
  readonly supportsLinking?: boolean;

  /**
   * @schema AlexaForBusinessSkillSummary#EnablementType
   */
  readonly enablementType?: string;

  /**
   * @schema AlexaForBusinessSkillSummary#SkillType
   */
  readonly skillType?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSkillSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSkillSummary(obj: AlexaForBusinessSkillSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
    'SkillName': obj.skillName,
    'SupportsLinking': obj.supportsLinking,
    'EnablementType': obj.enablementType,
    'SkillType': obj.skillType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCategory
 */
export interface AlexaForBusinessCategory {
  /**
   * @schema AlexaForBusinessCategory#CategoryId
   */
  readonly categoryId?: number;

  /**
   * @schema AlexaForBusinessCategory#CategoryName
   */
  readonly categoryName?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessCategory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCategory(obj: AlexaForBusinessCategory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CategoryId': obj.categoryId,
    'CategoryName': obj.categoryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSkillsStoreSkill
 */
export interface AlexaForBusinessSkillsStoreSkill {
  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SkillId
   */
  readonly skillId?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SkillName
   */
  readonly skillName?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#ShortDescription
   */
  readonly shortDescription?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#IconUrl
   */
  readonly iconUrl?: string;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SampleUtterances
   */
  readonly sampleUtterances?: string[];

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SkillDetails
   */
  readonly skillDetails?: AlexaForBusinessSkillDetails;

  /**
   * @schema AlexaForBusinessSkillsStoreSkill#SupportsLinking
   */
  readonly supportsLinking?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessSkillsStoreSkill' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSkillsStoreSkill(obj: AlexaForBusinessSkillsStoreSkill | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillId': obj.skillId,
    'SkillName': obj.skillName,
    'ShortDescription': obj.shortDescription,
    'IconUrl': obj.iconUrl,
    'SampleUtterances': obj.sampleUtterances?.map(y => y),
    'SkillDetails': toJson_AlexaForBusinessSkillDetails(obj.skillDetails),
    'SupportsLinking': obj.supportsLinking,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSmartHomeAppliance
 */
export interface AlexaForBusinessSmartHomeAppliance {
  /**
   * @schema AlexaForBusinessSmartHomeAppliance#FriendlyName
   */
  readonly friendlyName?: string;

  /**
   * @schema AlexaForBusinessSmartHomeAppliance#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessSmartHomeAppliance#ManufacturerName
   */
  readonly manufacturerName?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSmartHomeAppliance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSmartHomeAppliance(obj: AlexaForBusinessSmartHomeAppliance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FriendlyName': obj.friendlyName,
    'Description': obj.description,
    'ManufacturerName': obj.manufacturerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessFilter
 */
export interface AlexaForBusinessFilter {
  /**
   * @schema AlexaForBusinessFilter#Key
   */
  readonly key?: string;

  /**
   * @schema AlexaForBusinessFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'AlexaForBusinessFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessFilter(obj: AlexaForBusinessFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSort
 */
export interface AlexaForBusinessSort {
  /**
   * @schema AlexaForBusinessSort#Key
   */
  readonly key?: string;

  /**
   * @schema AlexaForBusinessSort#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSort' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSort(obj: AlexaForBusinessSort | undefined): Record<string, any> | undefined {
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
 * @schema AlexaForBusinessAddressBookData
 */
export interface AlexaForBusinessAddressBookData {
  /**
   * @schema AlexaForBusinessAddressBookData#AddressBookArn
   */
  readonly addressBookArn?: string;

  /**
   * @schema AlexaForBusinessAddressBookData#Name
   */
  readonly name?: string;

  /**
   * @schema AlexaForBusinessAddressBookData#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAddressBookData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAddressBookData(obj: AlexaForBusinessAddressBookData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressBookArn': obj.addressBookArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessContactData
 */
export interface AlexaForBusinessContactData {
  /**
   * @schema AlexaForBusinessContactData#ContactArn
   */
  readonly contactArn?: string;

  /**
   * @schema AlexaForBusinessContactData#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AlexaForBusinessContactData#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessContactData#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessContactData#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema AlexaForBusinessContactData#PhoneNumbers
   */
  readonly phoneNumbers?: AlexaForBusinessPhoneNumber[];

  /**
   * @schema AlexaForBusinessContactData#SipAddresses
   */
  readonly sipAddresses?: AlexaForBusinessSipAddress[];

}

/**
 * Converts an object of type 'AlexaForBusinessContactData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessContactData(obj: AlexaForBusinessContactData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactArn': obj.contactArn,
    'DisplayName': obj.displayName,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'PhoneNumber': obj.phoneNumber,
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_AlexaForBusinessPhoneNumber(y)),
    'SipAddresses': obj.sipAddresses?.map(y => toJson_AlexaForBusinessSipAddress(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeviceData
 */
export interface AlexaForBusinessDeviceData {
  /**
   * @schema AlexaForBusinessDeviceData#DeviceArn
   */
  readonly deviceArn?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceSerialNumber
   */
  readonly deviceSerialNumber?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceType
   */
  readonly deviceType?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema AlexaForBusinessDeviceData#SoftwareVersion
   */
  readonly softwareVersion?: string;

  /**
   * @schema AlexaForBusinessDeviceData#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceStatus
   */
  readonly deviceStatus?: string;

  /**
   * @schema AlexaForBusinessDeviceData#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessDeviceData#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessDeviceData#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessDeviceData#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessDeviceData#DeviceStatusInfo
   */
  readonly deviceStatusInfo?: AlexaForBusinessDeviceStatusInfo;

  /**
   * @schema AlexaForBusinessDeviceData#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeviceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeviceData(obj: AlexaForBusinessDeviceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceArn': obj.deviceArn,
    'DeviceSerialNumber': obj.deviceSerialNumber,
    'DeviceType': obj.deviceType,
    'DeviceName': obj.deviceName,
    'SoftwareVersion': obj.softwareVersion,
    'MacAddress': obj.macAddress,
    'DeviceStatus': obj.deviceStatus,
    'NetworkProfileArn': obj.networkProfileArn,
    'NetworkProfileName': obj.networkProfileName,
    'RoomArn': obj.roomArn,
    'RoomName': obj.roomName,
    'DeviceStatusInfo': toJson_AlexaForBusinessDeviceStatusInfo(obj.deviceStatusInfo),
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessNetworkProfileData
 */
export interface AlexaForBusinessNetworkProfileData {
  /**
   * @schema AlexaForBusinessNetworkProfileData#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#NetworkProfileName
   */
  readonly networkProfileName?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#Ssid
   */
  readonly ssid?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#SecurityType
   */
  readonly securityType?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#EapMethod
   */
  readonly eapMethod?: string;

  /**
   * @schema AlexaForBusinessNetworkProfileData#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessNetworkProfileData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessNetworkProfileData(obj: AlexaForBusinessNetworkProfileData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
    'NetworkProfileName': obj.networkProfileName,
    'Description': obj.description,
    'Ssid': obj.ssid,
    'SecurityType': obj.securityType,
    'EapMethod': obj.eapMethod,
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessProfileData
 */
export interface AlexaForBusinessProfileData {
  /**
   * @schema AlexaForBusinessProfileData#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessProfileData#ProfileName
   */
  readonly profileName?: string;

  /**
   * @schema AlexaForBusinessProfileData#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema AlexaForBusinessProfileData#Address
   */
  readonly address?: string;

  /**
   * @schema AlexaForBusinessProfileData#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema AlexaForBusinessProfileData#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema AlexaForBusinessProfileData#TemperatureUnit
   */
  readonly temperatureUnit?: string;

  /**
   * @schema AlexaForBusinessProfileData#WakeWord
   */
  readonly wakeWord?: string;

  /**
   * @schema AlexaForBusinessProfileData#Locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessProfileData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessProfileData(obj: AlexaForBusinessProfileData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProfileArn': obj.profileArn,
    'ProfileName': obj.profileName,
    'IsDefault': obj.isDefault,
    'Address': obj.address,
    'Timezone': obj.timezone,
    'DistanceUnit': obj.distanceUnit,
    'TemperatureUnit': obj.temperatureUnit,
    'WakeWord': obj.wakeWord,
    'Locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRoomData
 */
export interface AlexaForBusinessRoomData {
  /**
   * @schema AlexaForBusinessRoomData#RoomArn
   */
  readonly roomArn?: string;

  /**
   * @schema AlexaForBusinessRoomData#RoomName
   */
  readonly roomName?: string;

  /**
   * @schema AlexaForBusinessRoomData#Description
   */
  readonly description?: string;

  /**
   * @schema AlexaForBusinessRoomData#ProviderCalendarId
   */
  readonly providerCalendarId?: string;

  /**
   * @schema AlexaForBusinessRoomData#ProfileArn
   */
  readonly profileArn?: string;

  /**
   * @schema AlexaForBusinessRoomData#ProfileName
   */
  readonly profileName?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessRoomData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRoomData(obj: AlexaForBusinessRoomData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomArn': obj.roomArn,
    'RoomName': obj.roomName,
    'Description': obj.description,
    'ProviderCalendarId': obj.providerCalendarId,
    'ProfileArn': obj.profileArn,
    'ProfileName': obj.profileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSkillGroupData
 */
export interface AlexaForBusinessSkillGroupData {
  /**
   * @schema AlexaForBusinessSkillGroupData#SkillGroupArn
   */
  readonly skillGroupArn?: string;

  /**
   * @schema AlexaForBusinessSkillGroupData#SkillGroupName
   */
  readonly skillGroupName?: string;

  /**
   * @schema AlexaForBusinessSkillGroupData#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSkillGroupData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSkillGroupData(obj: AlexaForBusinessSkillGroupData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SkillGroupArn': obj.skillGroupArn,
    'SkillGroupName': obj.skillGroupName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUserData
 */
export interface AlexaForBusinessUserData {
  /**
   * @schema AlexaForBusinessUserData#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema AlexaForBusinessUserData#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema AlexaForBusinessUserData#LastName
   */
  readonly lastName?: string;

  /**
   * @schema AlexaForBusinessUserData#Email
   */
  readonly email?: string;

  /**
   * @schema AlexaForBusinessUserData#EnrollmentStatus
   */
  readonly enrollmentStatus?: string;

  /**
   * @schema AlexaForBusinessUserData#EnrollmentId
   */
  readonly enrollmentId?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessUserData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUserData(obj: AlexaForBusinessUserData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserArn': obj.userArn,
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'Email': obj.email,
    'EnrollmentStatus': obj.enrollmentStatus,
    'EnrollmentId': obj.enrollmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessContent
 */
export interface AlexaForBusinessContent {
  /**
   * @schema AlexaForBusinessContent#TextList
   */
  readonly textList?: AlexaForBusinessText[];

  /**
   * @schema AlexaForBusinessContent#SsmlList
   */
  readonly ssmlList?: AlexaForBusinessSsml[];

  /**
   * @schema AlexaForBusinessContent#AudioList
   */
  readonly audioList?: AlexaForBusinessAudio[];

}

/**
 * Converts an object of type 'AlexaForBusinessContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessContent(obj: AlexaForBusinessContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextList': obj.textList?.map(y => toJson_AlexaForBusinessText(y)),
    'SsmlList': obj.ssmlList?.map(y => toJson_AlexaForBusinessSsml(y)),
    'AudioList': obj.audioList?.map(y => toJson_AlexaForBusinessAudio(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateMeetingRoomConfiguration
 */
export interface AlexaForBusinessUpdateMeetingRoomConfiguration {
  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: AlexaForBusinessUpdateEndOfMeetingReminder;

  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: AlexaForBusinessUpdateInstantBooking;

  /**
   * @schema AlexaForBusinessUpdateMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: AlexaForBusinessUpdateRequireCheckIn;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateMeetingRoomConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateMeetingRoomConfiguration(obj: AlexaForBusinessUpdateMeetingRoomConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomUtilizationMetricsEnabled': obj.roomUtilizationMetricsEnabled,
    'EndOfMeetingReminder': toJson_AlexaForBusinessUpdateEndOfMeetingReminder(obj.endOfMeetingReminder),
    'InstantBooking': toJson_AlexaForBusinessUpdateInstantBooking(obj.instantBooking),
    'RequireCheckIn': toJson_AlexaForBusinessUpdateRequireCheckIn(obj.requireCheckIn),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateEndOfMeetingReminder
 */
export interface AlexaForBusinessCreateEndOfMeetingReminder {
  /**
   * @schema AlexaForBusinessCreateEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema AlexaForBusinessCreateEndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema AlexaForBusinessCreateEndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateEndOfMeetingReminder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateEndOfMeetingReminder(obj: AlexaForBusinessCreateEndOfMeetingReminder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReminderAtMinutes': obj.reminderAtMinutes?.map(y => y),
    'ReminderType': obj.reminderType,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateInstantBooking
 */
export interface AlexaForBusinessCreateInstantBooking {
  /**
   * @schema AlexaForBusinessCreateInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema AlexaForBusinessCreateInstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateInstantBooking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateInstantBooking(obj: AlexaForBusinessCreateInstantBooking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInMinutes': obj.durationInMinutes,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessCreateRequireCheckIn
 */
export interface AlexaForBusinessCreateRequireCheckIn {
  /**
   * @schema AlexaForBusinessCreateRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema AlexaForBusinessCreateRequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessCreateRequireCheckIn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessCreateRequireCheckIn(obj: AlexaForBusinessCreateRequireCheckIn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReleaseAfterMinutes': obj.releaseAfterMinutes,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeviceStatusInfo
 */
export interface AlexaForBusinessDeviceStatusInfo {
  /**
   * @schema AlexaForBusinessDeviceStatusInfo#DeviceStatusDetails
   */
  readonly deviceStatusDetails?: AlexaForBusinessDeviceStatusDetail[];

  /**
   * @schema AlexaForBusinessDeviceStatusInfo#ConnectionStatus
   */
  readonly connectionStatus?: string;

  /**
   * @schema AlexaForBusinessDeviceStatusInfo#ConnectionStatusUpdatedTime
   */
  readonly connectionStatusUpdatedTime?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeviceStatusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeviceStatusInfo(obj: AlexaForBusinessDeviceStatusInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceStatusDetails': obj.deviceStatusDetails?.map(y => toJson_AlexaForBusinessDeviceStatusDetail(y)),
    'ConnectionStatus': obj.connectionStatus,
    'ConnectionStatusUpdatedTime': obj.connectionStatusUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeviceNetworkProfileInfo
 */
export interface AlexaForBusinessDeviceNetworkProfileInfo {
  /**
   * @schema AlexaForBusinessDeviceNetworkProfileInfo#NetworkProfileArn
   */
  readonly networkProfileArn?: string;

  /**
   * @schema AlexaForBusinessDeviceNetworkProfileInfo#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AlexaForBusinessDeviceNetworkProfileInfo#CertificateExpirationTime
   */
  readonly certificateExpirationTime?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeviceNetworkProfileInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeviceNetworkProfileInfo(obj: AlexaForBusinessDeviceNetworkProfileInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkProfileArn': obj.networkProfileArn,
    'CertificateArn': obj.certificateArn,
    'CertificateExpirationTime': obj.certificateExpirationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessMeetingRoomConfiguration
 */
export interface AlexaForBusinessMeetingRoomConfiguration {
  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#RoomUtilizationMetricsEnabled
   */
  readonly roomUtilizationMetricsEnabled?: boolean;

  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#EndOfMeetingReminder
   */
  readonly endOfMeetingReminder?: AlexaForBusinessEndOfMeetingReminder;

  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#InstantBooking
   */
  readonly instantBooking?: AlexaForBusinessInstantBooking;

  /**
   * @schema AlexaForBusinessMeetingRoomConfiguration#RequireCheckIn
   */
  readonly requireCheckIn?: AlexaForBusinessRequireCheckIn;

}

/**
 * Converts an object of type 'AlexaForBusinessMeetingRoomConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessMeetingRoomConfiguration(obj: AlexaForBusinessMeetingRoomConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomUtilizationMetricsEnabled': obj.roomUtilizationMetricsEnabled,
    'EndOfMeetingReminder': toJson_AlexaForBusinessEndOfMeetingReminder(obj.endOfMeetingReminder),
    'InstantBooking': toJson_AlexaForBusinessInstantBooking(obj.instantBooking),
    'RequireCheckIn': toJson_AlexaForBusinessRequireCheckIn(obj.requireCheckIn),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessBusinessReport
 */
export interface AlexaForBusinessBusinessReport {
  /**
   * @schema AlexaForBusinessBusinessReport#Status
   */
  readonly status?: string;

  /**
   * @schema AlexaForBusinessBusinessReport#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema AlexaForBusinessBusinessReport#S3Location
   */
  readonly s3Location?: AlexaForBusinessBusinessReportS3Location;

  /**
   * @schema AlexaForBusinessBusinessReport#DeliveryTime
   */
  readonly deliveryTime?: string;

  /**
   * @schema AlexaForBusinessBusinessReport#DownloadUrl
   */
  readonly downloadUrl?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessBusinessReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessBusinessReport(obj: AlexaForBusinessBusinessReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FailureCode': obj.failureCode,
    'S3Location': toJson_AlexaForBusinessBusinessReportS3Location(obj.s3Location),
    'DeliveryTime': obj.deliveryTime,
    'DownloadUrl': obj.downloadUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSkillDetails
 */
export interface AlexaForBusinessSkillDetails {
  /**
   * @schema AlexaForBusinessSkillDetails#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#InvocationPhrase
   */
  readonly invocationPhrase?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#EndUserLicenseAgreement
   */
  readonly endUserLicenseAgreement?: string;

  /**
   * @schema AlexaForBusinessSkillDetails#GenericKeywords
   */
  readonly genericKeywords?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#BulletPoints
   */
  readonly bulletPoints?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#NewInThisVersionBulletPoints
   */
  readonly newInThisVersionBulletPoints?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#SkillTypes
   */
  readonly skillTypes?: string[];

  /**
   * @schema AlexaForBusinessSkillDetails#Reviews
   */
  readonly reviews?: { [key: string]: string };

  /**
   * @schema AlexaForBusinessSkillDetails#DeveloperInfo
   */
  readonly developerInfo?: AlexaForBusinessDeveloperInfo;

}

/**
 * Converts an object of type 'AlexaForBusinessSkillDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSkillDetails(obj: AlexaForBusinessSkillDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductDescription': obj.productDescription,
    'InvocationPhrase': obj.invocationPhrase,
    'ReleaseDate': obj.releaseDate,
    'EndUserLicenseAgreement': obj.endUserLicenseAgreement,
    'GenericKeywords': obj.genericKeywords?.map(y => y),
    'BulletPoints': obj.bulletPoints?.map(y => y),
    'NewInThisVersionBulletPoints': obj.newInThisVersionBulletPoints?.map(y => y),
    'SkillTypes': obj.skillTypes?.map(y => y),
    'Reviews': ((obj.reviews) === undefined) ? undefined : (Object.entries(obj.reviews).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'DeveloperInfo': toJson_AlexaForBusinessDeveloperInfo(obj.developerInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessText
 */
export interface AlexaForBusinessText {
  /**
   * @schema AlexaForBusinessText#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessText#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessText' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessText(obj: AlexaForBusinessText | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Locale': obj.locale,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessSsml
 */
export interface AlexaForBusinessSsml {
  /**
   * @schema AlexaForBusinessSsml#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessSsml#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessSsml' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessSsml(obj: AlexaForBusinessSsml | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Locale': obj.locale,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessAudio
 */
export interface AlexaForBusinessAudio {
  /**
   * @schema AlexaForBusinessAudio#Locale
   */
  readonly locale?: string;

  /**
   * @schema AlexaForBusinessAudio#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessAudio' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessAudio(obj: AlexaForBusinessAudio | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Locale': obj.locale,
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateEndOfMeetingReminder
 */
export interface AlexaForBusinessUpdateEndOfMeetingReminder {
  /**
   * @schema AlexaForBusinessUpdateEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema AlexaForBusinessUpdateEndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema AlexaForBusinessUpdateEndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateEndOfMeetingReminder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateEndOfMeetingReminder(obj: AlexaForBusinessUpdateEndOfMeetingReminder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReminderAtMinutes': obj.reminderAtMinutes?.map(y => y),
    'ReminderType': obj.reminderType,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateInstantBooking
 */
export interface AlexaForBusinessUpdateInstantBooking {
  /**
   * @schema AlexaForBusinessUpdateInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema AlexaForBusinessUpdateInstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateInstantBooking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateInstantBooking(obj: AlexaForBusinessUpdateInstantBooking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInMinutes': obj.durationInMinutes,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessUpdateRequireCheckIn
 */
export interface AlexaForBusinessUpdateRequireCheckIn {
  /**
   * @schema AlexaForBusinessUpdateRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema AlexaForBusinessUpdateRequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessUpdateRequireCheckIn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessUpdateRequireCheckIn(obj: AlexaForBusinessUpdateRequireCheckIn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReleaseAfterMinutes': obj.releaseAfterMinutes,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeviceStatusDetail
 */
export interface AlexaForBusinessDeviceStatusDetail {
  /**
   * @schema AlexaForBusinessDeviceStatusDetail#Feature
   */
  readonly feature?: string;

  /**
   * @schema AlexaForBusinessDeviceStatusDetail#Code
   */
  readonly code?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeviceStatusDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeviceStatusDetail(obj: AlexaForBusinessDeviceStatusDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Feature': obj.feature,
    'Code': obj.code,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessEndOfMeetingReminder
 */
export interface AlexaForBusinessEndOfMeetingReminder {
  /**
   * @schema AlexaForBusinessEndOfMeetingReminder#ReminderAtMinutes
   */
  readonly reminderAtMinutes?: number[];

  /**
   * @schema AlexaForBusinessEndOfMeetingReminder#ReminderType
   */
  readonly reminderType?: string;

  /**
   * @schema AlexaForBusinessEndOfMeetingReminder#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessEndOfMeetingReminder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessEndOfMeetingReminder(obj: AlexaForBusinessEndOfMeetingReminder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReminderAtMinutes': obj.reminderAtMinutes?.map(y => y),
    'ReminderType': obj.reminderType,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessInstantBooking
 */
export interface AlexaForBusinessInstantBooking {
  /**
   * @schema AlexaForBusinessInstantBooking#DurationInMinutes
   */
  readonly durationInMinutes?: number;

  /**
   * @schema AlexaForBusinessInstantBooking#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessInstantBooking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessInstantBooking(obj: AlexaForBusinessInstantBooking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInMinutes': obj.durationInMinutes,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessRequireCheckIn
 */
export interface AlexaForBusinessRequireCheckIn {
  /**
   * @schema AlexaForBusinessRequireCheckIn#ReleaseAfterMinutes
   */
  readonly releaseAfterMinutes?: number;

  /**
   * @schema AlexaForBusinessRequireCheckIn#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'AlexaForBusinessRequireCheckIn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessRequireCheckIn(obj: AlexaForBusinessRequireCheckIn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReleaseAfterMinutes': obj.releaseAfterMinutes,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessBusinessReportS3Location
 */
export interface AlexaForBusinessBusinessReportS3Location {
  /**
   * @schema AlexaForBusinessBusinessReportS3Location#Path
   */
  readonly path?: string;

  /**
   * @schema AlexaForBusinessBusinessReportS3Location#BucketName
   */
  readonly bucketName?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessBusinessReportS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessBusinessReportS3Location(obj: AlexaForBusinessBusinessReportS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'BucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AlexaForBusinessDeveloperInfo
 */
export interface AlexaForBusinessDeveloperInfo {
  /**
   * @schema AlexaForBusinessDeveloperInfo#DeveloperName
   */
  readonly developerName?: string;

  /**
   * @schema AlexaForBusinessDeveloperInfo#PrivacyPolicy
   */
  readonly privacyPolicy?: string;

  /**
   * @schema AlexaForBusinessDeveloperInfo#Email
   */
  readonly email?: string;

  /**
   * @schema AlexaForBusinessDeveloperInfo#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'AlexaForBusinessDeveloperInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AlexaForBusinessDeveloperInfo(obj: AlexaForBusinessDeveloperInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeveloperName': obj.developerName,
    'PrivacyPolicy': obj.privacyPolicy,
    'Email': obj.email,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
