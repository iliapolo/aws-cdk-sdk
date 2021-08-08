/**
 * @schema ChimeAssociatePhoneNumberWithUserRequest
 */
export interface ChimeAssociatePhoneNumberWithUserRequest {
  /**
   * @schema ChimeAssociatePhoneNumberWithUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeAssociatePhoneNumberWithUserRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeAssociatePhoneNumberWithUserRequest#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

}

/**
 * Converts an object of type 'ChimeAssociatePhoneNumberWithUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociatePhoneNumberWithUserRequest(obj: ChimeAssociatePhoneNumberWithUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
    'E164PhoneNumber': obj.e164PhoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociatePhoneNumberWithUserResponse
 */
export interface ChimeAssociatePhoneNumberWithUserResponse {
}

/**
 * Converts an object of type 'ChimeAssociatePhoneNumberWithUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociatePhoneNumberWithUserResponse(obj: ChimeAssociatePhoneNumberWithUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorRequest#ForceAssociate
   */
  readonly forceAssociate?: boolean;

}

/**
 * Converts an object of type 'ChimeAssociatePhoneNumbersWithVoiceConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociatePhoneNumbersWithVoiceConnectorRequest(obj: ChimeAssociatePhoneNumbersWithVoiceConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'E164PhoneNumbers': obj.e164PhoneNumbers?.map(y => y),
    'ForceAssociate': obj.forceAssociate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorResponse
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * Converts an object of type 'ChimeAssociatePhoneNumbersWithVoiceConnectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociatePhoneNumbersWithVoiceConnectorResponse(obj: ChimeAssociatePhoneNumbersWithVoiceConnectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberErrors': obj.phoneNumberErrors?.map(y => toJson_ChimePhoneNumberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest#ForceAssociate
   */
  readonly forceAssociate?: boolean;

}

/**
 * Converts an object of type 'ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest(obj: ChimeAssociatePhoneNumbersWithVoiceConnectorGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroupId': obj.voiceConnectorGroupId,
    'E164PhoneNumbers': obj.e164PhoneNumbers?.map(y => y),
    'ForceAssociate': obj.forceAssociate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse
 */
export interface ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @schema ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * Converts an object of type 'ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse(obj: ChimeAssociatePhoneNumbersWithVoiceConnectorGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberErrors': obj.phoneNumberErrors?.map(y => toJson_ChimePhoneNumberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociateSigninDelegateGroupsWithAccountRequest
 */
export interface ChimeAssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * @schema ChimeAssociateSigninDelegateGroupsWithAccountRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeAssociateSigninDelegateGroupsWithAccountRequest#SigninDelegateGroups
   */
  readonly signinDelegateGroups?: ChimeSigninDelegateGroup[];

}

/**
 * Converts an object of type 'ChimeAssociateSigninDelegateGroupsWithAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociateSigninDelegateGroupsWithAccountRequest(obj: ChimeAssociateSigninDelegateGroupsWithAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'SigninDelegateGroups': obj.signinDelegateGroups?.map(y => toJson_ChimeSigninDelegateGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAssociateSigninDelegateGroupsWithAccountResponse
 */
export interface ChimeAssociateSigninDelegateGroupsWithAccountResponse {
}

/**
 * Converts an object of type 'ChimeAssociateSigninDelegateGroupsWithAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAssociateSigninDelegateGroupsWithAccountResponse(obj: ChimeAssociateSigninDelegateGroupsWithAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateAttendeeRequest
 */
export interface ChimeBatchCreateAttendeeRequest {
  /**
   * @schema ChimeBatchCreateAttendeeRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeBatchCreateAttendeeRequest#Attendees
   */
  readonly attendees?: ChimeCreateAttendeeRequestItem[];

}

/**
 * Converts an object of type 'ChimeBatchCreateAttendeeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateAttendeeRequest(obj: ChimeBatchCreateAttendeeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'Attendees': obj.attendees?.map(y => toJson_ChimeCreateAttendeeRequestItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateAttendeeResponse
 */
export interface ChimeBatchCreateAttendeeResponse {
  /**
   * @schema ChimeBatchCreateAttendeeResponse#Attendees
   */
  readonly attendees?: ChimeAttendee[];

  /**
   * @schema ChimeBatchCreateAttendeeResponse#Errors
   */
  readonly errors?: ChimeCreateAttendeeError[];

}

/**
 * Converts an object of type 'ChimeBatchCreateAttendeeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateAttendeeResponse(obj: ChimeBatchCreateAttendeeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attendees': obj.attendees?.map(y => toJson_ChimeAttendee(y)),
    'Errors': obj.errors?.map(y => toJson_ChimeCreateAttendeeError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateChannelMembershipRequest
 */
export interface ChimeBatchCreateChannelMembershipRequest {
  /**
   * @schema ChimeBatchCreateChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeBatchCreateChannelMembershipRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeBatchCreateChannelMembershipRequest#MemberArns
   */
  readonly memberArns?: string[];

  /**
   * @schema ChimeBatchCreateChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeBatchCreateChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateChannelMembershipRequest(obj: ChimeBatchCreateChannelMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Type': obj.type,
    'MemberArns': obj.memberArns?.map(y => y),
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateChannelMembershipResponse
 */
export interface ChimeBatchCreateChannelMembershipResponse {
  /**
   * @schema ChimeBatchCreateChannelMembershipResponse#BatchChannelMemberships
   */
  readonly batchChannelMemberships?: ChimeBatchChannelMemberships;

  /**
   * @schema ChimeBatchCreateChannelMembershipResponse#Errors
   */
  readonly errors?: ChimeBatchCreateChannelMembershipError[];

}

/**
 * Converts an object of type 'ChimeBatchCreateChannelMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateChannelMembershipResponse(obj: ChimeBatchCreateChannelMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchChannelMemberships': toJson_ChimeBatchChannelMemberships(obj.batchChannelMemberships),
    'Errors': obj.errors?.map(y => toJson_ChimeBatchCreateChannelMembershipError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateRoomMembershipRequest
 */
export interface ChimeBatchCreateRoomMembershipRequest {
  /**
   * @schema ChimeBatchCreateRoomMembershipRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeBatchCreateRoomMembershipRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeBatchCreateRoomMembershipRequest#MembershipItemList
   */
  readonly membershipItemList?: ChimeMembershipItem[];

}

/**
 * Converts an object of type 'ChimeBatchCreateRoomMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateRoomMembershipRequest(obj: ChimeBatchCreateRoomMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'MembershipItemList': obj.membershipItemList?.map(y => toJson_ChimeMembershipItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateRoomMembershipResponse
 */
export interface ChimeBatchCreateRoomMembershipResponse {
  /**
   * @schema ChimeBatchCreateRoomMembershipResponse#Errors
   */
  readonly errors?: ChimeMemberError[];

}

/**
 * Converts an object of type 'ChimeBatchCreateRoomMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateRoomMembershipResponse(obj: ChimeBatchCreateRoomMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_ChimeMemberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchDeletePhoneNumberRequest
 */
export interface ChimeBatchDeletePhoneNumberRequest {
  /**
   * @schema ChimeBatchDeletePhoneNumberRequest#PhoneNumberIds
   */
  readonly phoneNumberIds?: string[];

}

/**
 * Converts an object of type 'ChimeBatchDeletePhoneNumberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchDeletePhoneNumberRequest(obj: ChimeBatchDeletePhoneNumberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberIds': obj.phoneNumberIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchDeletePhoneNumberResponse
 */
export interface ChimeBatchDeletePhoneNumberResponse {
  /**
   * @schema ChimeBatchDeletePhoneNumberResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * Converts an object of type 'ChimeBatchDeletePhoneNumberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchDeletePhoneNumberResponse(obj: ChimeBatchDeletePhoneNumberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberErrors': obj.phoneNumberErrors?.map(y => toJson_ChimePhoneNumberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchSuspendUserRequest
 */
export interface ChimeBatchSuspendUserRequest {
  /**
   * @schema ChimeBatchSuspendUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeBatchSuspendUserRequest#UserIdList
   */
  readonly userIdList?: string[];

}

/**
 * Converts an object of type 'ChimeBatchSuspendUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchSuspendUserRequest(obj: ChimeBatchSuspendUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserIdList': obj.userIdList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchSuspendUserResponse
 */
export interface ChimeBatchSuspendUserResponse {
  /**
   * @schema ChimeBatchSuspendUserResponse#UserErrors
   */
  readonly userErrors?: ChimeUserError[];

}

/**
 * Converts an object of type 'ChimeBatchSuspendUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchSuspendUserResponse(obj: ChimeBatchSuspendUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserErrors': obj.userErrors?.map(y => toJson_ChimeUserError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchUnsuspendUserRequest
 */
export interface ChimeBatchUnsuspendUserRequest {
  /**
   * @schema ChimeBatchUnsuspendUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeBatchUnsuspendUserRequest#UserIdList
   */
  readonly userIdList?: string[];

}

/**
 * Converts an object of type 'ChimeBatchUnsuspendUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchUnsuspendUserRequest(obj: ChimeBatchUnsuspendUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserIdList': obj.userIdList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchUnsuspendUserResponse
 */
export interface ChimeBatchUnsuspendUserResponse {
  /**
   * @schema ChimeBatchUnsuspendUserResponse#UserErrors
   */
  readonly userErrors?: ChimeUserError[];

}

/**
 * Converts an object of type 'ChimeBatchUnsuspendUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchUnsuspendUserResponse(obj: ChimeBatchUnsuspendUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserErrors': obj.userErrors?.map(y => toJson_ChimeUserError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchUpdatePhoneNumberRequest
 */
export interface ChimeBatchUpdatePhoneNumberRequest {
  /**
   * @schema ChimeBatchUpdatePhoneNumberRequest#UpdatePhoneNumberRequestItems
   */
  readonly updatePhoneNumberRequestItems?: ChimeUpdatePhoneNumberRequestItem[];

}

/**
 * Converts an object of type 'ChimeBatchUpdatePhoneNumberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchUpdatePhoneNumberRequest(obj: ChimeBatchUpdatePhoneNumberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdatePhoneNumberRequestItems': obj.updatePhoneNumberRequestItems?.map(y => toJson_ChimeUpdatePhoneNumberRequestItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchUpdatePhoneNumberResponse
 */
export interface ChimeBatchUpdatePhoneNumberResponse {
  /**
   * @schema ChimeBatchUpdatePhoneNumberResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * Converts an object of type 'ChimeBatchUpdatePhoneNumberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchUpdatePhoneNumberResponse(obj: ChimeBatchUpdatePhoneNumberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberErrors': obj.phoneNumberErrors?.map(y => toJson_ChimePhoneNumberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchUpdateUserRequest
 */
export interface ChimeBatchUpdateUserRequest {
  /**
   * @schema ChimeBatchUpdateUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeBatchUpdateUserRequest#UpdateUserRequestItems
   */
  readonly updateUserRequestItems?: ChimeUpdateUserRequestItem[];

}

/**
 * Converts an object of type 'ChimeBatchUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchUpdateUserRequest(obj: ChimeBatchUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UpdateUserRequestItems': obj.updateUserRequestItems?.map(y => toJson_ChimeUpdateUserRequestItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchUpdateUserResponse
 */
export interface ChimeBatchUpdateUserResponse {
  /**
   * @schema ChimeBatchUpdateUserResponse#UserErrors
   */
  readonly userErrors?: ChimeUserError[];

}

/**
 * Converts an object of type 'ChimeBatchUpdateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchUpdateUserResponse(obj: ChimeBatchUpdateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserErrors': obj.userErrors?.map(y => toJson_ChimeUserError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAccountRequest
 */
export interface ChimeCreateAccountRequest {
  /**
   * @schema ChimeCreateAccountRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ChimeCreateAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAccountRequest(obj: ChimeCreateAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAccountResponse
 */
export interface ChimeCreateAccountResponse {
  /**
   * @schema ChimeCreateAccountResponse#Account
   */
  readonly account?: ChimeAccount;

}

/**
 * Converts an object of type 'ChimeCreateAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAccountResponse(obj: ChimeCreateAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': toJson_ChimeAccount(obj.account),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAppInstanceRequest
 */
export interface ChimeCreateAppInstanceRequest {
  /**
   * @schema ChimeCreateAppInstanceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeCreateAppInstanceRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeCreateAppInstanceRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeCreateAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAppInstanceRequest(obj: ChimeCreateAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAppInstanceResponse
 */
export interface ChimeCreateAppInstanceResponse {
  /**
   * @schema ChimeCreateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeCreateAppInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAppInstanceResponse(obj: ChimeCreateAppInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAppInstanceAdminRequest
 */
export interface ChimeCreateAppInstanceAdminRequest {
  /**
   * @schema ChimeCreateAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn?: string;

  /**
   * @schema ChimeCreateAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeCreateAppInstanceAdminRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAppInstanceAdminRequest(obj: ChimeCreateAppInstanceAdminRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdminArn': obj.appInstanceAdminArn,
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAppInstanceAdminResponse
 */
export interface ChimeCreateAppInstanceAdminResponse {
  /**
   * @schema ChimeCreateAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: ChimeIdentity;

  /**
   * @schema ChimeCreateAppInstanceAdminResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeCreateAppInstanceAdminResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAppInstanceAdminResponse(obj: ChimeCreateAppInstanceAdminResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdmin': toJson_ChimeIdentity(obj.appInstanceAdmin),
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAppInstanceUserRequest
 */
export interface ChimeCreateAppInstanceUserRequest {
  /**
   * @schema ChimeCreateAppInstanceUserRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#AppInstanceUserId
   */
  readonly appInstanceUserId?: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeCreateAppInstanceUserRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeCreateAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAppInstanceUserRequest(obj: ChimeCreateAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceUserId': obj.appInstanceUserId,
    'Name': obj.name,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAppInstanceUserResponse
 */
export interface ChimeCreateAppInstanceUserResponse {
  /**
   * @schema ChimeCreateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeCreateAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAppInstanceUserResponse(obj: ChimeCreateAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAttendeeRequest
 */
export interface ChimeCreateAttendeeRequest {
  /**
   * @schema ChimeCreateAttendeeRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeCreateAttendeeRequest#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema ChimeCreateAttendeeRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeCreateAttendeeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAttendeeRequest(obj: ChimeCreateAttendeeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'ExternalUserId': obj.externalUserId,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAttendeeResponse
 */
export interface ChimeCreateAttendeeResponse {
  /**
   * @schema ChimeCreateAttendeeResponse#Attendee
   */
  readonly attendee?: ChimeAttendee;

}

/**
 * Converts an object of type 'ChimeCreateAttendeeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAttendeeResponse(obj: ChimeCreateAttendeeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attendee': toJson_ChimeAttendee(obj.attendee),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateBotRequest
 */
export interface ChimeCreateBotRequest {
  /**
   * @schema ChimeCreateBotRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeCreateBotRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ChimeCreateBotRequest#Domain
   */
  readonly domain?: string;

}

/**
 * Converts an object of type 'ChimeCreateBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateBotRequest(obj: ChimeCreateBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'DisplayName': obj.displayName,
    'Domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateBotResponse
 */
export interface ChimeCreateBotResponse {
  /**
   * @schema ChimeCreateBotResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * Converts an object of type 'ChimeCreateBotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateBotResponse(obj: ChimeCreateBotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bot': toJson_ChimeBot(obj.bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelRequest
 */
export interface ChimeCreateChannelRequest {
  /**
   * @schema ChimeCreateChannelRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeCreateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateChannelRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeCreateChannelRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeCreateChannelRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeCreateChannelRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeCreateChannelRequest#Tags
   */
  readonly tags?: ChimeTag[];

  /**
   * @schema ChimeCreateChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelRequest(obj: ChimeCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Mode': obj.mode,
    'Privacy': obj.privacy,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelResponse
 */
export interface ChimeCreateChannelResponse {
  /**
   * @schema ChimeCreateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelResponse(obj: ChimeCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelBanRequest
 */
export interface ChimeCreateChannelBanRequest {
  /**
   * @schema ChimeCreateChannelBanRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelBanRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeCreateChannelBanRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeCreateChannelBanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelBanRequest(obj: ChimeCreateChannelBanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MemberArn': obj.memberArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelBanResponse
 */
export interface ChimeCreateChannelBanResponse {
  /**
   * @schema ChimeCreateChannelBanResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelBanResponse#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeCreateChannelBanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelBanResponse(obj: ChimeCreateChannelBanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Member': toJson_ChimeIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelMembershipRequest
 */
export interface ChimeCreateChannelMembershipRequest {
  /**
   * @schema ChimeCreateChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelMembershipRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeCreateChannelMembershipRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeCreateChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeCreateChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelMembershipRequest(obj: ChimeCreateChannelMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MemberArn': obj.memberArn,
    'Type': obj.type,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelMembershipResponse
 */
export interface ChimeCreateChannelMembershipResponse {
  /**
   * @schema ChimeCreateChannelMembershipResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelMembershipResponse#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeCreateChannelMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelMembershipResponse(obj: ChimeCreateChannelMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Member': toJson_ChimeIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelModeratorRequest
 */
export interface ChimeCreateChannelModeratorRequest {
  /**
   * @schema ChimeCreateChannelModeratorRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn?: string;

  /**
   * @schema ChimeCreateChannelModeratorRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeCreateChannelModeratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelModeratorRequest(obj: ChimeCreateChannelModeratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelModeratorArn': obj.channelModeratorArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateChannelModeratorResponse
 */
export interface ChimeCreateChannelModeratorResponse {
  /**
   * @schema ChimeCreateChannelModeratorResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeCreateChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeCreateChannelModeratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateChannelModeratorResponse(obj: ChimeCreateChannelModeratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelModerator': toJson_ChimeIdentity(obj.channelModerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMediaCapturePipelineRequest
 */
export interface ChimeCreateMediaCapturePipelineRequest {
  /**
   * @schema ChimeCreateMediaCapturePipelineRequest#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ChimeCreateMediaCapturePipelineRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema ChimeCreateMediaCapturePipelineRequest#SinkType
   */
  readonly sinkType?: string;

  /**
   * @schema ChimeCreateMediaCapturePipelineRequest#SinkArn
   */
  readonly sinkArn?: string;

  /**
   * @schema ChimeCreateMediaCapturePipelineRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'ChimeCreateMediaCapturePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMediaCapturePipelineRequest(obj: ChimeCreateMediaCapturePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'SourceArn': obj.sourceArn,
    'SinkType': obj.sinkType,
    'SinkArn': obj.sinkArn,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMediaCapturePipelineResponse
 */
export interface ChimeCreateMediaCapturePipelineResponse {
  /**
   * @schema ChimeCreateMediaCapturePipelineResponse#MediaCapturePipeline
   */
  readonly mediaCapturePipeline?: ChimeMediaCapturePipeline;

}

/**
 * Converts an object of type 'ChimeCreateMediaCapturePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMediaCapturePipelineResponse(obj: ChimeCreateMediaCapturePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaCapturePipeline': toJson_ChimeMediaCapturePipeline(obj.mediaCapturePipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMeetingRequest
 */
export interface ChimeCreateMeetingRequest {
  /**
   * @schema ChimeCreateMeetingRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeCreateMeetingRequest#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema ChimeCreateMeetingRequest#MeetingHostId
   */
  readonly meetingHostId?: string;

  /**
   * @schema ChimeCreateMeetingRequest#MediaRegion
   */
  readonly mediaRegion?: string;

  /**
   * @schema ChimeCreateMeetingRequest#Tags
   */
  readonly tags?: ChimeTag[];

  /**
   * @schema ChimeCreateMeetingRequest#NotificationsConfiguration
   */
  readonly notificationsConfiguration?: ChimeMeetingNotificationConfiguration;

}

/**
 * Converts an object of type 'ChimeCreateMeetingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMeetingRequest(obj: ChimeCreateMeetingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'ExternalMeetingId': obj.externalMeetingId,
    'MeetingHostId': obj.meetingHostId,
    'MediaRegion': obj.mediaRegion,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
    'NotificationsConfiguration': toJson_ChimeMeetingNotificationConfiguration(obj.notificationsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMeetingResponse
 */
export interface ChimeCreateMeetingResponse {
  /**
   * @schema ChimeCreateMeetingResponse#Meeting
   */
  readonly meeting?: ChimeMeeting;

}

/**
 * Converts an object of type 'ChimeCreateMeetingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMeetingResponse(obj: ChimeCreateMeetingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Meeting': toJson_ChimeMeeting(obj.meeting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMeetingDialOutRequest
 */
export interface ChimeCreateMeetingDialOutRequest {
  /**
   * @schema ChimeCreateMeetingDialOutRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeCreateMeetingDialOutRequest#FromPhoneNumber
   */
  readonly fromPhoneNumber?: string;

  /**
   * @schema ChimeCreateMeetingDialOutRequest#ToPhoneNumber
   */
  readonly toPhoneNumber?: string;

  /**
   * @schema ChimeCreateMeetingDialOutRequest#JoinToken
   */
  readonly joinToken?: string;

}

/**
 * Converts an object of type 'ChimeCreateMeetingDialOutRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMeetingDialOutRequest(obj: ChimeCreateMeetingDialOutRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'FromPhoneNumber': obj.fromPhoneNumber,
    'ToPhoneNumber': obj.toPhoneNumber,
    'JoinToken': obj.joinToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMeetingDialOutResponse
 */
export interface ChimeCreateMeetingDialOutResponse {
  /**
   * @schema ChimeCreateMeetingDialOutResponse#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * Converts an object of type 'ChimeCreateMeetingDialOutResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMeetingDialOutResponse(obj: ChimeCreateMeetingDialOutResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMeetingWithAttendeesRequest
 */
export interface ChimeCreateMeetingWithAttendeesRequest {
  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#MeetingHostId
   */
  readonly meetingHostId?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#MediaRegion
   */
  readonly mediaRegion?: string;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#Tags
   */
  readonly tags?: ChimeTag[];

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#NotificationsConfiguration
   */
  readonly notificationsConfiguration?: ChimeMeetingNotificationConfiguration;

  /**
   * @schema ChimeCreateMeetingWithAttendeesRequest#Attendees
   */
  readonly attendees?: ChimeCreateAttendeeRequestItem[];

}

/**
 * Converts an object of type 'ChimeCreateMeetingWithAttendeesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMeetingWithAttendeesRequest(obj: ChimeCreateMeetingWithAttendeesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'ExternalMeetingId': obj.externalMeetingId,
    'MeetingHostId': obj.meetingHostId,
    'MediaRegion': obj.mediaRegion,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
    'NotificationsConfiguration': toJson_ChimeMeetingNotificationConfiguration(obj.notificationsConfiguration),
    'Attendees': obj.attendees?.map(y => toJson_ChimeCreateAttendeeRequestItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateMeetingWithAttendeesResponse
 */
export interface ChimeCreateMeetingWithAttendeesResponse {
  /**
   * @schema ChimeCreateMeetingWithAttendeesResponse#Meeting
   */
  readonly meeting?: ChimeMeeting;

  /**
   * @schema ChimeCreateMeetingWithAttendeesResponse#Attendees
   */
  readonly attendees?: ChimeAttendee[];

  /**
   * @schema ChimeCreateMeetingWithAttendeesResponse#Errors
   */
  readonly errors?: ChimeCreateAttendeeError[];

}

/**
 * Converts an object of type 'ChimeCreateMeetingWithAttendeesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateMeetingWithAttendeesResponse(obj: ChimeCreateMeetingWithAttendeesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Meeting': toJson_ChimeMeeting(obj.meeting),
    'Attendees': obj.attendees?.map(y => toJson_ChimeAttendee(y)),
    'Errors': obj.errors?.map(y => toJson_ChimeCreateAttendeeError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreatePhoneNumberOrderRequest
 */
export interface ChimeCreatePhoneNumberOrderRequest {
  /**
   * @schema ChimeCreatePhoneNumberOrderRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeCreatePhoneNumberOrderRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

}

/**
 * Converts an object of type 'ChimeCreatePhoneNumberOrderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreatePhoneNumberOrderRequest(obj: ChimeCreatePhoneNumberOrderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductType': obj.productType,
    'E164PhoneNumbers': obj.e164PhoneNumbers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreatePhoneNumberOrderResponse
 */
export interface ChimeCreatePhoneNumberOrderResponse {
  /**
   * @schema ChimeCreatePhoneNumberOrderResponse#PhoneNumberOrder
   */
  readonly phoneNumberOrder?: ChimePhoneNumberOrder;

}

/**
 * Converts an object of type 'ChimeCreatePhoneNumberOrderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreatePhoneNumberOrderResponse(obj: ChimeCreatePhoneNumberOrderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberOrder': toJson_ChimePhoneNumberOrder(obj.phoneNumberOrder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateProxySessionRequest
 */
export interface ChimeCreateProxySessionRequest {
  /**
   * @schema ChimeCreateProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#ParticipantPhoneNumbers
   */
  readonly participantPhoneNumbers?: string[];

  /**
   * @schema ChimeCreateProxySessionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

  /**
   * @schema ChimeCreateProxySessionRequest#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema ChimeCreateProxySessionRequest#NumberSelectionBehavior
   */
  readonly numberSelectionBehavior?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#GeoMatchLevel
   */
  readonly geoMatchLevel?: string;

  /**
   * @schema ChimeCreateProxySessionRequest#GeoMatchParams
   */
  readonly geoMatchParams?: ChimeGeoMatchParams;

}

/**
 * Converts an object of type 'ChimeCreateProxySessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateProxySessionRequest(obj: ChimeCreateProxySessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'ParticipantPhoneNumbers': obj.participantPhoneNumbers?.map(y => y),
    'Name': obj.name,
    'ExpiryMinutes': obj.expiryMinutes,
    'Capabilities': obj.capabilities?.map(y => y),
    'NumberSelectionBehavior': obj.numberSelectionBehavior,
    'GeoMatchLevel': obj.geoMatchLevel,
    'GeoMatchParams': toJson_ChimeGeoMatchParams(obj.geoMatchParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateProxySessionResponse
 */
export interface ChimeCreateProxySessionResponse {
  /**
   * @schema ChimeCreateProxySessionResponse#ProxySession
   */
  readonly proxySession?: ChimeProxySession;

}

/**
 * Converts an object of type 'ChimeCreateProxySessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateProxySessionResponse(obj: ChimeCreateProxySessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProxySession': toJson_ChimeProxySession(obj.proxySession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateRoomRequest
 */
export interface ChimeCreateRoomRequest {
  /**
   * @schema ChimeCreateRoomRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeCreateRoomRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateRoomRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'ChimeCreateRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateRoomRequest(obj: ChimeCreateRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateRoomResponse
 */
export interface ChimeCreateRoomResponse {
  /**
   * @schema ChimeCreateRoomResponse#Room
   */
  readonly room?: ChimeRoom;

}

/**
 * Converts an object of type 'ChimeCreateRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateRoomResponse(obj: ChimeCreateRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Room': toJson_ChimeRoom(obj.room),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateRoomMembershipRequest
 */
export interface ChimeCreateRoomMembershipRequest {
  /**
   * @schema ChimeCreateRoomMembershipRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeCreateRoomMembershipRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeCreateRoomMembershipRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeCreateRoomMembershipRequest#Role
   */
  readonly role?: string;

}

/**
 * Converts an object of type 'ChimeCreateRoomMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateRoomMembershipRequest(obj: ChimeCreateRoomMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'MemberId': obj.memberId,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateRoomMembershipResponse
 */
export interface ChimeCreateRoomMembershipResponse {
  /**
   * @schema ChimeCreateRoomMembershipResponse#RoomMembership
   */
  readonly roomMembership?: ChimeRoomMembership;

}

/**
 * Converts an object of type 'ChimeCreateRoomMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateRoomMembershipResponse(obj: ChimeCreateRoomMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomMembership': toJson_ChimeRoomMembership(obj.roomMembership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateSipMediaApplicationRequest
 */
export interface ChimeCreateSipMediaApplicationRequest {
  /**
   * @schema ChimeCreateSipMediaApplicationRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationRequest#Endpoints
   */
  readonly endpoints?: ChimeSipMediaApplicationEndpoint[];

}

/**
 * Converts an object of type 'ChimeCreateSipMediaApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateSipMediaApplicationRequest(obj: ChimeCreateSipMediaApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsRegion': obj.awsRegion,
    'Name': obj.name,
    'Endpoints': obj.endpoints?.map(y => toJson_ChimeSipMediaApplicationEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateSipMediaApplicationResponse
 */
export interface ChimeCreateSipMediaApplicationResponse {
  /**
   * @schema ChimeCreateSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: ChimeSipMediaApplication;

}

/**
 * Converts an object of type 'ChimeCreateSipMediaApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateSipMediaApplicationResponse(obj: ChimeCreateSipMediaApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplication': toJson_ChimeSipMediaApplication(obj.sipMediaApplication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateSipMediaApplicationCallRequest
 */
export interface ChimeCreateSipMediaApplicationCallRequest {
  /**
   * @schema ChimeCreateSipMediaApplicationCallRequest#FromPhoneNumber
   */
  readonly fromPhoneNumber?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationCallRequest#ToPhoneNumber
   */
  readonly toPhoneNumber?: string;

  /**
   * @schema ChimeCreateSipMediaApplicationCallRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

}

/**
 * Converts an object of type 'ChimeCreateSipMediaApplicationCallRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateSipMediaApplicationCallRequest(obj: ChimeCreateSipMediaApplicationCallRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromPhoneNumber': obj.fromPhoneNumber,
    'ToPhoneNumber': obj.toPhoneNumber,
    'SipMediaApplicationId': obj.sipMediaApplicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateSipMediaApplicationCallResponse
 */
export interface ChimeCreateSipMediaApplicationCallResponse {
  /**
   * @schema ChimeCreateSipMediaApplicationCallResponse#SipMediaApplicationCall
   */
  readonly sipMediaApplicationCall?: ChimeSipMediaApplicationCall;

}

/**
 * Converts an object of type 'ChimeCreateSipMediaApplicationCallResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateSipMediaApplicationCallResponse(obj: ChimeCreateSipMediaApplicationCallResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationCall': toJson_ChimeSipMediaApplicationCall(obj.sipMediaApplicationCall),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateSipRuleRequest
 */
export interface ChimeCreateSipRuleRequest {
  /**
   * @schema ChimeCreateSipRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateSipRuleRequest#TriggerType
   */
  readonly triggerType?: string;

  /**
   * @schema ChimeCreateSipRuleRequest#TriggerValue
   */
  readonly triggerValue?: string;

  /**
   * @schema ChimeCreateSipRuleRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeCreateSipRuleRequest#TargetApplications
   */
  readonly targetApplications?: ChimeSipRuleTargetApplication[];

}

/**
 * Converts an object of type 'ChimeCreateSipRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateSipRuleRequest(obj: ChimeCreateSipRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'TriggerType': obj.triggerType,
    'TriggerValue': obj.triggerValue,
    'Disabled': obj.disabled,
    'TargetApplications': obj.targetApplications?.map(y => toJson_ChimeSipRuleTargetApplication(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateSipRuleResponse
 */
export interface ChimeCreateSipRuleResponse {
  /**
   * @schema ChimeCreateSipRuleResponse#SipRule
   */
  readonly sipRule?: ChimeSipRule;

}

/**
 * Converts an object of type 'ChimeCreateSipRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateSipRuleResponse(obj: ChimeCreateSipRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRule': toJson_ChimeSipRule(obj.sipRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateUserRequest
 */
export interface ChimeCreateUserRequest {
  /**
   * @schema ChimeCreateUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeCreateUserRequest#Username
   */
  readonly username?: string;

  /**
   * @schema ChimeCreateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema ChimeCreateUserRequest#UserType
   */
  readonly userType?: string;

}

/**
 * Converts an object of type 'ChimeCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateUserRequest(obj: ChimeCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Username': obj.username,
    'Email': obj.email,
    'UserType': obj.userType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateUserResponse
 */
export interface ChimeCreateUserResponse {
  /**
   * @schema ChimeCreateUserResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * Converts an object of type 'ChimeCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateUserResponse(obj: ChimeCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_ChimeUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateVoiceConnectorRequest
 */
export interface ChimeCreateVoiceConnectorRequest {
  /**
   * @schema ChimeCreateVoiceConnectorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateVoiceConnectorRequest#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeCreateVoiceConnectorRequest#RequireEncryption
   */
  readonly requireEncryption?: boolean;

}

/**
 * Converts an object of type 'ChimeCreateVoiceConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateVoiceConnectorRequest(obj: ChimeCreateVoiceConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'AwsRegion': obj.awsRegion,
    'RequireEncryption': obj.requireEncryption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateVoiceConnectorResponse
 */
export interface ChimeCreateVoiceConnectorResponse {
  /**
   * @schema ChimeCreateVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnector;

}

/**
 * Converts an object of type 'ChimeCreateVoiceConnectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateVoiceConnectorResponse(obj: ChimeCreateVoiceConnectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnector': toJson_ChimeVoiceConnector(obj.voiceConnector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateVoiceConnectorGroupRequest
 */
export interface ChimeCreateVoiceConnectorGroupRequest {
  /**
   * @schema ChimeCreateVoiceConnectorGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeCreateVoiceConnectorGroupRequest#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: ChimeVoiceConnectorItem[];

}

/**
 * Converts an object of type 'ChimeCreateVoiceConnectorGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateVoiceConnectorGroupRequest(obj: ChimeCreateVoiceConnectorGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'VoiceConnectorItems': obj.voiceConnectorItems?.map(y => toJson_ChimeVoiceConnectorItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateVoiceConnectorGroupResponse
 */
export interface ChimeCreateVoiceConnectorGroupResponse {
  /**
   * @schema ChimeCreateVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: ChimeVoiceConnectorGroup;

}

/**
 * Converts an object of type 'ChimeCreateVoiceConnectorGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateVoiceConnectorGroupResponse(obj: ChimeCreateVoiceConnectorGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroup': toJson_ChimeVoiceConnectorGroup(obj.voiceConnectorGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAccountRequest
 */
export interface ChimeDeleteAccountRequest {
  /**
   * @schema ChimeDeleteAccountRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAccountRequest(obj: ChimeDeleteAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAccountResponse
 */
export interface ChimeDeleteAccountResponse {
}

/**
 * Converts an object of type 'ChimeDeleteAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAccountResponse(obj: ChimeDeleteAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAppInstanceRequest
 */
export interface ChimeDeleteAppInstanceRequest {
  /**
   * @schema ChimeDeleteAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeDeleteAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAppInstanceRequest(obj: ChimeDeleteAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAppInstanceAdminRequest
 */
export interface ChimeDeleteAppInstanceAdminRequest {
  /**
   * @schema ChimeDeleteAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn?: string;

  /**
   * @schema ChimeDeleteAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeDeleteAppInstanceAdminRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAppInstanceAdminRequest(obj: ChimeDeleteAppInstanceAdminRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdminArn': obj.appInstanceAdminArn,
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAppInstanceStreamingConfigurationsRequest
 */
export interface ChimeDeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema ChimeDeleteAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeDeleteAppInstanceStreamingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAppInstanceStreamingConfigurationsRequest(obj: ChimeDeleteAppInstanceStreamingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAppInstanceUserRequest
 */
export interface ChimeDeleteAppInstanceUserRequest {
  /**
   * @schema ChimeDeleteAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeDeleteAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAppInstanceUserRequest(obj: ChimeDeleteAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteAttendeeRequest
 */
export interface ChimeDeleteAttendeeRequest {
  /**
   * @schema ChimeDeleteAttendeeRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeDeleteAttendeeRequest#AttendeeId
   */
  readonly attendeeId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteAttendeeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteAttendeeRequest(obj: ChimeDeleteAttendeeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'AttendeeId': obj.attendeeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteChannelRequest
 */
export interface ChimeDeleteChannelRequest {
  /**
   * @schema ChimeDeleteChannelRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDeleteChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteChannelRequest(obj: ChimeDeleteChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteChannelBanRequest
 */
export interface ChimeDeleteChannelBanRequest {
  /**
   * @schema ChimeDeleteChannelBanRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDeleteChannelBanRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeDeleteChannelBanRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDeleteChannelBanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteChannelBanRequest(obj: ChimeDeleteChannelBanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MemberArn': obj.memberArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteChannelMembershipRequest
 */
export interface ChimeDeleteChannelMembershipRequest {
  /**
   * @schema ChimeDeleteChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDeleteChannelMembershipRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeDeleteChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDeleteChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteChannelMembershipRequest(obj: ChimeDeleteChannelMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MemberArn': obj.memberArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteChannelMessageRequest
 */
export interface ChimeDeleteChannelMessageRequest {
  /**
   * @schema ChimeDeleteChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDeleteChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeDeleteChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDeleteChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteChannelMessageRequest(obj: ChimeDeleteChannelMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteChannelModeratorRequest
 */
export interface ChimeDeleteChannelModeratorRequest {
  /**
   * @schema ChimeDeleteChannelModeratorRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDeleteChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn?: string;

  /**
   * @schema ChimeDeleteChannelModeratorRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDeleteChannelModeratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteChannelModeratorRequest(obj: ChimeDeleteChannelModeratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelModeratorArn': obj.channelModeratorArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteEventsConfigurationRequest
 */
export interface ChimeDeleteEventsConfigurationRequest {
  /**
   * @schema ChimeDeleteEventsConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeDeleteEventsConfigurationRequest#BotId
   */
  readonly botId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteEventsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteEventsConfigurationRequest(obj: ChimeDeleteEventsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BotId': obj.botId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteMediaCapturePipelineRequest
 */
export interface ChimeDeleteMediaCapturePipelineRequest {
  /**
   * @schema ChimeDeleteMediaCapturePipelineRequest#MediaPipelineId
   */
  readonly mediaPipelineId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteMediaCapturePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteMediaCapturePipelineRequest(obj: ChimeDeleteMediaCapturePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaPipelineId': obj.mediaPipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteMeetingRequest
 */
export interface ChimeDeleteMeetingRequest {
  /**
   * @schema ChimeDeleteMeetingRequest#MeetingId
   */
  readonly meetingId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteMeetingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteMeetingRequest(obj: ChimeDeleteMeetingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeletePhoneNumberRequest
 */
export interface ChimeDeletePhoneNumberRequest {
  /**
   * @schema ChimeDeletePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId?: string;

}

/**
 * Converts an object of type 'ChimeDeletePhoneNumberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeletePhoneNumberRequest(obj: ChimeDeletePhoneNumberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteProxySessionRequest
 */
export interface ChimeDeleteProxySessionRequest {
  /**
   * @schema ChimeDeleteProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeDeleteProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteProxySessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteProxySessionRequest(obj: ChimeDeleteProxySessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'ProxySessionId': obj.proxySessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteRoomRequest
 */
export interface ChimeDeleteRoomRequest {
  /**
   * @schema ChimeDeleteRoomRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeDeleteRoomRequest#RoomId
   */
  readonly roomId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteRoomRequest(obj: ChimeDeleteRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteRoomMembershipRequest
 */
export interface ChimeDeleteRoomMembershipRequest {
  /**
   * @schema ChimeDeleteRoomMembershipRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeDeleteRoomMembershipRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeDeleteRoomMembershipRequest#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteRoomMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteRoomMembershipRequest(obj: ChimeDeleteRoomMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteSipMediaApplicationRequest
 */
export interface ChimeDeleteSipMediaApplicationRequest {
  /**
   * @schema ChimeDeleteSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteSipMediaApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteSipMediaApplicationRequest(obj: ChimeDeleteSipMediaApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteSipRuleRequest
 */
export interface ChimeDeleteSipRuleRequest {
  /**
   * @schema ChimeDeleteSipRuleRequest#SipRuleId
   */
  readonly sipRuleId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteSipRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteSipRuleRequest(obj: ChimeDeleteSipRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRuleId': obj.sipRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorRequest
 */
export interface ChimeDeleteVoiceConnectorRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorRequest(obj: ChimeDeleteVoiceConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest(obj: ChimeDeleteVoiceConnectorEmergencyCallingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorGroupRequest
 */
export interface ChimeDeleteVoiceConnectorGroupRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorGroupRequest(obj: ChimeDeleteVoiceConnectorGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroupId': obj.voiceConnectorGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorOriginationRequest
 */
export interface ChimeDeleteVoiceConnectorOriginationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorOriginationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorOriginationRequest(obj: ChimeDeleteVoiceConnectorOriginationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorProxyRequest
 */
export interface ChimeDeleteVoiceConnectorProxyRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorProxyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorProxyRequest(obj: ChimeDeleteVoiceConnectorProxyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorStreamingConfigurationRequest
 */
export interface ChimeDeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorStreamingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorStreamingConfigurationRequest(obj: ChimeDeleteVoiceConnectorStreamingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorTerminationRequest
 */
export interface ChimeDeleteVoiceConnectorTerminationRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorTerminationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorTerminationRequest(obj: ChimeDeleteVoiceConnectorTerminationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDeleteVoiceConnectorTerminationCredentialsRequest
 */
export interface ChimeDeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ChimeDeleteVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeDeleteVoiceConnectorTerminationCredentialsRequest#Usernames
   */
  readonly usernames?: string[];

}

/**
 * Converts an object of type 'ChimeDeleteVoiceConnectorTerminationCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDeleteVoiceConnectorTerminationCredentialsRequest(obj: ChimeDeleteVoiceConnectorTerminationCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Usernames': obj.usernames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeAppInstanceRequest
 */
export interface ChimeDescribeAppInstanceRequest {
  /**
   * @schema ChimeDescribeAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeDescribeAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeAppInstanceRequest(obj: ChimeDescribeAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeAppInstanceResponse
 */
export interface ChimeDescribeAppInstanceResponse {
  /**
   * @schema ChimeDescribeAppInstanceResponse#AppInstance
   */
  readonly appInstance?: ChimeAppInstance;

}

/**
 * Converts an object of type 'ChimeDescribeAppInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeAppInstanceResponse(obj: ChimeDescribeAppInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstance': toJson_ChimeAppInstance(obj.appInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeAppInstanceAdminRequest
 */
export interface ChimeDescribeAppInstanceAdminRequest {
  /**
   * @schema ChimeDescribeAppInstanceAdminRequest#AppInstanceAdminArn
   */
  readonly appInstanceAdminArn?: string;

  /**
   * @schema ChimeDescribeAppInstanceAdminRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeDescribeAppInstanceAdminRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeAppInstanceAdminRequest(obj: ChimeDescribeAppInstanceAdminRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdminArn': obj.appInstanceAdminArn,
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeAppInstanceAdminResponse
 */
export interface ChimeDescribeAppInstanceAdminResponse {
  /**
   * @schema ChimeDescribeAppInstanceAdminResponse#AppInstanceAdmin
   */
  readonly appInstanceAdmin?: ChimeAppInstanceAdmin;

}

/**
 * Converts an object of type 'ChimeDescribeAppInstanceAdminResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeAppInstanceAdminResponse(obj: ChimeDescribeAppInstanceAdminResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceAdmin': toJson_ChimeAppInstanceAdmin(obj.appInstanceAdmin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeAppInstanceUserRequest
 */
export interface ChimeDescribeAppInstanceUserRequest {
  /**
   * @schema ChimeDescribeAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeDescribeAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeAppInstanceUserRequest(obj: ChimeDescribeAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeAppInstanceUserResponse
 */
export interface ChimeDescribeAppInstanceUserResponse {
  /**
   * @schema ChimeDescribeAppInstanceUserResponse#AppInstanceUser
   */
  readonly appInstanceUser?: ChimeAppInstanceUser;

}

/**
 * Converts an object of type 'ChimeDescribeAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeAppInstanceUserResponse(obj: ChimeDescribeAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUser': toJson_ChimeAppInstanceUser(obj.appInstanceUser),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelRequest
 */
export interface ChimeDescribeChannelRequest {
  /**
   * @schema ChimeDescribeChannelRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDescribeChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDescribeChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelRequest(obj: ChimeDescribeChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelResponse
 */
export interface ChimeDescribeChannelResponse {
  /**
   * @schema ChimeDescribeChannelResponse#Channel
   */
  readonly channel?: ChimeChannel;

}

/**
 * Converts an object of type 'ChimeDescribeChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelResponse(obj: ChimeDescribeChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_ChimeChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelBanRequest
 */
export interface ChimeDescribeChannelBanRequest {
  /**
   * @schema ChimeDescribeChannelBanRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDescribeChannelBanRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeDescribeChannelBanRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDescribeChannelBanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelBanRequest(obj: ChimeDescribeChannelBanRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MemberArn': obj.memberArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelBanResponse
 */
export interface ChimeDescribeChannelBanResponse {
  /**
   * @schema ChimeDescribeChannelBanResponse#ChannelBan
   */
  readonly channelBan?: ChimeChannelBan;

}

/**
 * Converts an object of type 'ChimeDescribeChannelBanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelBanResponse(obj: ChimeDescribeChannelBanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelBan': toJson_ChimeChannelBan(obj.channelBan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelMembershipRequest
 */
export interface ChimeDescribeChannelMembershipRequest {
  /**
   * @schema ChimeDescribeChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDescribeChannelMembershipRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeDescribeChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDescribeChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelMembershipRequest(obj: ChimeDescribeChannelMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MemberArn': obj.memberArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelMembershipResponse
 */
export interface ChimeDescribeChannelMembershipResponse {
  /**
   * @schema ChimeDescribeChannelMembershipResponse#ChannelMembership
   */
  readonly channelMembership?: ChimeChannelMembership;

}

/**
 * Converts an object of type 'ChimeDescribeChannelMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelMembershipResponse(obj: ChimeDescribeChannelMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMembership': toJson_ChimeChannelMembership(obj.channelMembership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest
 */
export interface ChimeDescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDescribeChannelMembershipForAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelMembershipForAppInstanceUserRequest(obj: ChimeDescribeChannelMembershipForAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelMembershipForAppInstanceUserResponse
 */
export interface ChimeDescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @schema ChimeDescribeChannelMembershipForAppInstanceUserResponse#ChannelMembership
   */
  readonly channelMembership?: ChimeChannelMembershipForAppInstanceUserSummary;

}

/**
 * Converts an object of type 'ChimeDescribeChannelMembershipForAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelMembershipForAppInstanceUserResponse(obj: ChimeDescribeChannelMembershipForAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMembership': toJson_ChimeChannelMembershipForAppInstanceUserSummary(obj.channelMembership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest
 */
export interface ChimeDescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDescribeChannelModeratedByAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelModeratedByAppInstanceUserRequest(obj: ChimeDescribeChannelModeratedByAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelModeratedByAppInstanceUserResponse
 */
export interface ChimeDescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @schema ChimeDescribeChannelModeratedByAppInstanceUserResponse#Channel
   */
  readonly channel?: ChimeChannelModeratedByAppInstanceUserSummary;

}

/**
 * Converts an object of type 'ChimeDescribeChannelModeratedByAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelModeratedByAppInstanceUserResponse(obj: ChimeDescribeChannelModeratedByAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_ChimeChannelModeratedByAppInstanceUserSummary(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelModeratorRequest
 */
export interface ChimeDescribeChannelModeratorRequest {
  /**
   * @schema ChimeDescribeChannelModeratorRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeDescribeChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn?: string;

  /**
   * @schema ChimeDescribeChannelModeratorRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeDescribeChannelModeratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelModeratorRequest(obj: ChimeDescribeChannelModeratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelModeratorArn': obj.channelModeratorArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDescribeChannelModeratorResponse
 */
export interface ChimeDescribeChannelModeratorResponse {
  /**
   * @schema ChimeDescribeChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChimeChannelModerator;

}

/**
 * Converts an object of type 'ChimeDescribeChannelModeratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDescribeChannelModeratorResponse(obj: ChimeDescribeChannelModeratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelModerator': toJson_ChimeChannelModerator(obj.channelModerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociatePhoneNumberFromUserRequest
 */
export interface ChimeDisassociatePhoneNumberFromUserRequest {
  /**
   * @schema ChimeDisassociatePhoneNumberFromUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeDisassociatePhoneNumberFromUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ChimeDisassociatePhoneNumberFromUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociatePhoneNumberFromUserRequest(obj: ChimeDisassociatePhoneNumberFromUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociatePhoneNumberFromUserResponse
 */
export interface ChimeDisassociatePhoneNumberFromUserResponse {
}

/**
 * Converts an object of type 'ChimeDisassociatePhoneNumberFromUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociatePhoneNumberFromUserResponse(obj: ChimeDisassociatePhoneNumberFromUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

}

/**
 * Converts an object of type 'ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest(obj: ChimeDisassociatePhoneNumbersFromVoiceConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'E164PhoneNumbers': obj.e164PhoneNumbers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * Converts an object of type 'ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse(obj: ChimeDisassociatePhoneNumbersFromVoiceConnectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberErrors': obj.phoneNumberErrors?.map(y => toJson_ChimePhoneNumberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

}

/**
 * Converts an object of type 'ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest(obj: ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroupId': obj.voiceConnectorGroupId,
    'E164PhoneNumbers': obj.e164PhoneNumbers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse
 */
export interface ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @schema ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse#PhoneNumberErrors
   */
  readonly phoneNumberErrors?: ChimePhoneNumberError[];

}

/**
 * Converts an object of type 'ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse(obj: ChimeDisassociatePhoneNumbersFromVoiceConnectorGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberErrors': obj.phoneNumberErrors?.map(y => toJson_ChimePhoneNumberError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociateSigninDelegateGroupsFromAccountRequest
 */
export interface ChimeDisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @schema ChimeDisassociateSigninDelegateGroupsFromAccountRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeDisassociateSigninDelegateGroupsFromAccountRequest#GroupNames
   */
  readonly groupNames?: string[];

}

/**
 * Converts an object of type 'ChimeDisassociateSigninDelegateGroupsFromAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociateSigninDelegateGroupsFromAccountRequest(obj: ChimeDisassociateSigninDelegateGroupsFromAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'GroupNames': obj.groupNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDisassociateSigninDelegateGroupsFromAccountResponse
 */
export interface ChimeDisassociateSigninDelegateGroupsFromAccountResponse {
}

/**
 * Converts an object of type 'ChimeDisassociateSigninDelegateGroupsFromAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDisassociateSigninDelegateGroupsFromAccountResponse(obj: ChimeDisassociateSigninDelegateGroupsFromAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAccountRequest
 */
export interface ChimeGetAccountRequest {
  /**
   * @schema ChimeGetAccountRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ChimeGetAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAccountRequest(obj: ChimeGetAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAccountResponse
 */
export interface ChimeGetAccountResponse {
  /**
   * @schema ChimeGetAccountResponse#Account
   */
  readonly account?: ChimeAccount;

}

/**
 * Converts an object of type 'ChimeGetAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAccountResponse(obj: ChimeGetAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': toJson_ChimeAccount(obj.account),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAccountSettingsRequest
 */
export interface ChimeGetAccountSettingsRequest {
  /**
   * @schema ChimeGetAccountSettingsRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ChimeGetAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAccountSettingsRequest(obj: ChimeGetAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAccountSettingsResponse
 */
export interface ChimeGetAccountSettingsResponse {
  /**
   * @schema ChimeGetAccountSettingsResponse#AccountSettings
   */
  readonly accountSettings?: ChimeAccountSettings;

}

/**
 * Converts an object of type 'ChimeGetAccountSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAccountSettingsResponse(obj: ChimeGetAccountSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountSettings': toJson_ChimeAccountSettings(obj.accountSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAppInstanceRetentionSettingsRequest
 */
export interface ChimeGetAppInstanceRetentionSettingsRequest {
  /**
   * @schema ChimeGetAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeGetAppInstanceRetentionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAppInstanceRetentionSettingsRequest(obj: ChimeGetAppInstanceRetentionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAppInstanceRetentionSettingsResponse
 */
export interface ChimeGetAppInstanceRetentionSettingsResponse {
  /**
   * @schema ChimeGetAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeAppInstanceRetentionSettings;

  /**
   * @schema ChimeGetAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeGetAppInstanceRetentionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAppInstanceRetentionSettingsResponse(obj: ChimeGetAppInstanceRetentionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceRetentionSettings': toJson_ChimeAppInstanceRetentionSettings(obj.appInstanceRetentionSettings),
    'InitiateDeletionTimestamp': obj.initiateDeletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAppInstanceStreamingConfigurationsRequest
 */
export interface ChimeGetAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema ChimeGetAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeGetAppInstanceStreamingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAppInstanceStreamingConfigurationsRequest(obj: ChimeGetAppInstanceStreamingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAppInstanceStreamingConfigurationsResponse
 */
export interface ChimeGetAppInstanceStreamingConfigurationsResponse {
  /**
   * @schema ChimeGetAppInstanceStreamingConfigurationsResponse#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: ChimeAppInstanceStreamingConfiguration[];

}

/**
 * Converts an object of type 'ChimeGetAppInstanceStreamingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAppInstanceStreamingConfigurationsResponse(obj: ChimeGetAppInstanceStreamingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceStreamingConfigurations': obj.appInstanceStreamingConfigurations?.map(y => toJson_ChimeAppInstanceStreamingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAttendeeRequest
 */
export interface ChimeGetAttendeeRequest {
  /**
   * @schema ChimeGetAttendeeRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeGetAttendeeRequest#AttendeeId
   */
  readonly attendeeId?: string;

}

/**
 * Converts an object of type 'ChimeGetAttendeeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAttendeeRequest(obj: ChimeGetAttendeeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'AttendeeId': obj.attendeeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetAttendeeResponse
 */
export interface ChimeGetAttendeeResponse {
  /**
   * @schema ChimeGetAttendeeResponse#Attendee
   */
  readonly attendee?: ChimeAttendee;

}

/**
 * Converts an object of type 'ChimeGetAttendeeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetAttendeeResponse(obj: ChimeGetAttendeeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attendee': toJson_ChimeAttendee(obj.attendee),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetBotRequest
 */
export interface ChimeGetBotRequest {
  /**
   * @schema ChimeGetBotRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeGetBotRequest#BotId
   */
  readonly botId?: string;

}

/**
 * Converts an object of type 'ChimeGetBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetBotRequest(obj: ChimeGetBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BotId': obj.botId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetBotResponse
 */
export interface ChimeGetBotResponse {
  /**
   * @schema ChimeGetBotResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * Converts an object of type 'ChimeGetBotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetBotResponse(obj: ChimeGetBotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bot': toJson_ChimeBot(obj.bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetChannelMessageRequest
 */
export interface ChimeGetChannelMessageRequest {
  /**
   * @schema ChimeGetChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeGetChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeGetChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeGetChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetChannelMessageRequest(obj: ChimeGetChannelMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetChannelMessageResponse
 */
export interface ChimeGetChannelMessageResponse {
  /**
   * @schema ChimeGetChannelMessageResponse#ChannelMessage
   */
  readonly channelMessage?: ChimeChannelMessage;

}

/**
 * Converts an object of type 'ChimeGetChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetChannelMessageResponse(obj: ChimeGetChannelMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMessage': toJson_ChimeChannelMessage(obj.channelMessage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetEventsConfigurationRequest
 */
export interface ChimeGetEventsConfigurationRequest {
  /**
   * @schema ChimeGetEventsConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeGetEventsConfigurationRequest#BotId
   */
  readonly botId?: string;

}

/**
 * Converts an object of type 'ChimeGetEventsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetEventsConfigurationRequest(obj: ChimeGetEventsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BotId': obj.botId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetEventsConfigurationResponse
 */
export interface ChimeGetEventsConfigurationResponse {
  /**
   * @schema ChimeGetEventsConfigurationResponse#EventsConfiguration
   */
  readonly eventsConfiguration?: ChimeEventsConfiguration;

}

/**
 * Converts an object of type 'ChimeGetEventsConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetEventsConfigurationResponse(obj: ChimeGetEventsConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventsConfiguration': toJson_ChimeEventsConfiguration(obj.eventsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetGlobalSettingsResponse
 */
export interface ChimeGetGlobalSettingsResponse {
  /**
   * @schema ChimeGetGlobalSettingsResponse#BusinessCalling
   */
  readonly businessCalling?: ChimeBusinessCallingSettings;

  /**
   * @schema ChimeGetGlobalSettingsResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnectorSettings;

}

/**
 * Converts an object of type 'ChimeGetGlobalSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetGlobalSettingsResponse(obj: ChimeGetGlobalSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BusinessCalling': toJson_ChimeBusinessCallingSettings(obj.businessCalling),
    'VoiceConnector': toJson_ChimeVoiceConnectorSettings(obj.voiceConnector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetMediaCapturePipelineRequest
 */
export interface ChimeGetMediaCapturePipelineRequest {
  /**
   * @schema ChimeGetMediaCapturePipelineRequest#MediaPipelineId
   */
  readonly mediaPipelineId?: string;

}

/**
 * Converts an object of type 'ChimeGetMediaCapturePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetMediaCapturePipelineRequest(obj: ChimeGetMediaCapturePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaPipelineId': obj.mediaPipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetMediaCapturePipelineResponse
 */
export interface ChimeGetMediaCapturePipelineResponse {
  /**
   * @schema ChimeGetMediaCapturePipelineResponse#MediaCapturePipeline
   */
  readonly mediaCapturePipeline?: ChimeMediaCapturePipeline;

}

/**
 * Converts an object of type 'ChimeGetMediaCapturePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetMediaCapturePipelineResponse(obj: ChimeGetMediaCapturePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaCapturePipeline': toJson_ChimeMediaCapturePipeline(obj.mediaCapturePipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetMeetingRequest
 */
export interface ChimeGetMeetingRequest {
  /**
   * @schema ChimeGetMeetingRequest#MeetingId
   */
  readonly meetingId?: string;

}

/**
 * Converts an object of type 'ChimeGetMeetingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetMeetingRequest(obj: ChimeGetMeetingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetMeetingResponse
 */
export interface ChimeGetMeetingResponse {
  /**
   * @schema ChimeGetMeetingResponse#Meeting
   */
  readonly meeting?: ChimeMeeting;

}

/**
 * Converts an object of type 'ChimeGetMeetingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetMeetingResponse(obj: ChimeGetMeetingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Meeting': toJson_ChimeMeeting(obj.meeting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetMessagingSessionEndpointRequest
 */
export interface ChimeGetMessagingSessionEndpointRequest {
}

/**
 * Converts an object of type 'ChimeGetMessagingSessionEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetMessagingSessionEndpointRequest(obj: ChimeGetMessagingSessionEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetMessagingSessionEndpointResponse
 */
export interface ChimeGetMessagingSessionEndpointResponse {
  /**
   * @schema ChimeGetMessagingSessionEndpointResponse#Endpoint
   */
  readonly endpoint?: ChimeMessagingSessionEndpoint;

}

/**
 * Converts an object of type 'ChimeGetMessagingSessionEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetMessagingSessionEndpointResponse(obj: ChimeGetMessagingSessionEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': toJson_ChimeMessagingSessionEndpoint(obj.endpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetPhoneNumberRequest
 */
export interface ChimeGetPhoneNumberRequest {
  /**
   * @schema ChimeGetPhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId?: string;

}

/**
 * Converts an object of type 'ChimeGetPhoneNumberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetPhoneNumberRequest(obj: ChimeGetPhoneNumberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetPhoneNumberResponse
 */
export interface ChimeGetPhoneNumberResponse {
  /**
   * @schema ChimeGetPhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: ChimePhoneNumber;

}

/**
 * Converts an object of type 'ChimeGetPhoneNumberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetPhoneNumberResponse(obj: ChimeGetPhoneNumberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': toJson_ChimePhoneNumber(obj.phoneNumber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetPhoneNumberOrderRequest
 */
export interface ChimeGetPhoneNumberOrderRequest {
  /**
   * @schema ChimeGetPhoneNumberOrderRequest#PhoneNumberOrderId
   */
  readonly phoneNumberOrderId?: string;

}

/**
 * Converts an object of type 'ChimeGetPhoneNumberOrderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetPhoneNumberOrderRequest(obj: ChimeGetPhoneNumberOrderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberOrderId': obj.phoneNumberOrderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetPhoneNumberOrderResponse
 */
export interface ChimeGetPhoneNumberOrderResponse {
  /**
   * @schema ChimeGetPhoneNumberOrderResponse#PhoneNumberOrder
   */
  readonly phoneNumberOrder?: ChimePhoneNumberOrder;

}

/**
 * Converts an object of type 'ChimeGetPhoneNumberOrderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetPhoneNumberOrderResponse(obj: ChimeGetPhoneNumberOrderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberOrder': toJson_ChimePhoneNumberOrder(obj.phoneNumberOrder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetPhoneNumberSettingsResponse
 */
export interface ChimeGetPhoneNumberSettingsResponse {
  /**
   * @schema ChimeGetPhoneNumberSettingsResponse#CallingName
   */
  readonly callingName?: string;

  /**
   * @schema ChimeGetPhoneNumberSettingsResponse#CallingNameUpdatedTimestamp
   */
  readonly callingNameUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeGetPhoneNumberSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetPhoneNumberSettingsResponse(obj: ChimeGetPhoneNumberSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallingName': obj.callingName,
    'CallingNameUpdatedTimestamp': obj.callingNameUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetProxySessionRequest
 */
export interface ChimeGetProxySessionRequest {
  /**
   * @schema ChimeGetProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeGetProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId?: string;

}

/**
 * Converts an object of type 'ChimeGetProxySessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetProxySessionRequest(obj: ChimeGetProxySessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'ProxySessionId': obj.proxySessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetProxySessionResponse
 */
export interface ChimeGetProxySessionResponse {
  /**
   * @schema ChimeGetProxySessionResponse#ProxySession
   */
  readonly proxySession?: ChimeProxySession;

}

/**
 * Converts an object of type 'ChimeGetProxySessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetProxySessionResponse(obj: ChimeGetProxySessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProxySession': toJson_ChimeProxySession(obj.proxySession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetRetentionSettingsRequest
 */
export interface ChimeGetRetentionSettingsRequest {
  /**
   * @schema ChimeGetRetentionSettingsRequest#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ChimeGetRetentionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetRetentionSettingsRequest(obj: ChimeGetRetentionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetRetentionSettingsResponse
 */
export interface ChimeGetRetentionSettingsResponse {
  /**
   * @schema ChimeGetRetentionSettingsResponse#RetentionSettings
   */
  readonly retentionSettings?: ChimeRetentionSettings;

  /**
   * @schema ChimeGetRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeGetRetentionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetRetentionSettingsResponse(obj: ChimeGetRetentionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetentionSettings': toJson_ChimeRetentionSettings(obj.retentionSettings),
    'InitiateDeletionTimestamp': obj.initiateDeletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetRoomRequest
 */
export interface ChimeGetRoomRequest {
  /**
   * @schema ChimeGetRoomRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeGetRoomRequest#RoomId
   */
  readonly roomId?: string;

}

/**
 * Converts an object of type 'ChimeGetRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetRoomRequest(obj: ChimeGetRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetRoomResponse
 */
export interface ChimeGetRoomResponse {
  /**
   * @schema ChimeGetRoomResponse#Room
   */
  readonly room?: ChimeRoom;

}

/**
 * Converts an object of type 'ChimeGetRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetRoomResponse(obj: ChimeGetRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Room': toJson_ChimeRoom(obj.room),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetSipMediaApplicationRequest
 */
export interface ChimeGetSipMediaApplicationRequest {
  /**
   * @schema ChimeGetSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

}

/**
 * Converts an object of type 'ChimeGetSipMediaApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetSipMediaApplicationRequest(obj: ChimeGetSipMediaApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetSipMediaApplicationResponse
 */
export interface ChimeGetSipMediaApplicationResponse {
  /**
   * @schema ChimeGetSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: ChimeSipMediaApplication;

}

/**
 * Converts an object of type 'ChimeGetSipMediaApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetSipMediaApplicationResponse(obj: ChimeGetSipMediaApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplication': toJson_ChimeSipMediaApplication(obj.sipMediaApplication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetSipMediaApplicationLoggingConfigurationRequest
 */
export interface ChimeGetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @schema ChimeGetSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

}

/**
 * Converts an object of type 'ChimeGetSipMediaApplicationLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetSipMediaApplicationLoggingConfigurationRequest(obj: ChimeGetSipMediaApplicationLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetSipMediaApplicationLoggingConfigurationResponse
 */
export interface ChimeGetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @schema ChimeGetSipMediaApplicationLoggingConfigurationResponse#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: ChimeSipMediaApplicationLoggingConfiguration;

}

/**
 * Converts an object of type 'ChimeGetSipMediaApplicationLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetSipMediaApplicationLoggingConfigurationResponse(obj: ChimeGetSipMediaApplicationLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationLoggingConfiguration': toJson_ChimeSipMediaApplicationLoggingConfiguration(obj.sipMediaApplicationLoggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetSipRuleRequest
 */
export interface ChimeGetSipRuleRequest {
  /**
   * @schema ChimeGetSipRuleRequest#SipRuleId
   */
  readonly sipRuleId?: string;

}

/**
 * Converts an object of type 'ChimeGetSipRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetSipRuleRequest(obj: ChimeGetSipRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRuleId': obj.sipRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetSipRuleResponse
 */
export interface ChimeGetSipRuleResponse {
  /**
   * @schema ChimeGetSipRuleResponse#SipRule
   */
  readonly sipRule?: ChimeSipRule;

}

/**
 * Converts an object of type 'ChimeGetSipRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetSipRuleResponse(obj: ChimeGetSipRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRule': toJson_ChimeSipRule(obj.sipRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetUserRequest
 */
export interface ChimeGetUserRequest {
  /**
   * @schema ChimeGetUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeGetUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ChimeGetUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetUserRequest(obj: ChimeGetUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetUserResponse
 */
export interface ChimeGetUserResponse {
  /**
   * @schema ChimeGetUserResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * Converts an object of type 'ChimeGetUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetUserResponse(obj: ChimeGetUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_ChimeUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetUserSettingsRequest
 */
export interface ChimeGetUserSettingsRequest {
  /**
   * @schema ChimeGetUserSettingsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeGetUserSettingsRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ChimeGetUserSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetUserSettingsRequest(obj: ChimeGetUserSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetUserSettingsResponse
 */
export interface ChimeGetUserSettingsResponse {
  /**
   * @schema ChimeGetUserSettingsResponse#UserSettings
   */
  readonly userSettings?: ChimeUserSettings;

}

/**
 * Converts an object of type 'ChimeGetUserSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetUserSettingsResponse(obj: ChimeGetUserSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserSettings': toJson_ChimeUserSettings(obj.userSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorRequest
 */
export interface ChimeGetVoiceConnectorRequest {
  /**
   * @schema ChimeGetVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorRequest(obj: ChimeGetVoiceConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorResponse
 */
export interface ChimeGetVoiceConnectorResponse {
  /**
   * @schema ChimeGetVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnector;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorResponse(obj: ChimeGetVoiceConnectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnector': toJson_ChimeVoiceConnector(obj.voiceConnector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest(obj: ChimeGetVoiceConnectorEmergencyCallingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse
 */
export interface ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @schema ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: ChimeEmergencyCallingConfiguration;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse(obj: ChimeGetVoiceConnectorEmergencyCallingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmergencyCallingConfiguration': toJson_ChimeEmergencyCallingConfiguration(obj.emergencyCallingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorGroupRequest
 */
export interface ChimeGetVoiceConnectorGroupRequest {
  /**
   * @schema ChimeGetVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorGroupRequest(obj: ChimeGetVoiceConnectorGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroupId': obj.voiceConnectorGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorGroupResponse
 */
export interface ChimeGetVoiceConnectorGroupResponse {
  /**
   * @schema ChimeGetVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: ChimeVoiceConnectorGroup;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorGroupResponse(obj: ChimeGetVoiceConnectorGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroup': toJson_ChimeVoiceConnectorGroup(obj.voiceConnectorGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorLoggingConfigurationRequest
 */
export interface ChimeGetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @schema ChimeGetVoiceConnectorLoggingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorLoggingConfigurationRequest(obj: ChimeGetVoiceConnectorLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorLoggingConfigurationResponse
 */
export interface ChimeGetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @schema ChimeGetVoiceConnectorLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: ChimeLoggingConfiguration;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorLoggingConfigurationResponse(obj: ChimeGetVoiceConnectorLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_ChimeLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorOriginationRequest
 */
export interface ChimeGetVoiceConnectorOriginationRequest {
  /**
   * @schema ChimeGetVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorOriginationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorOriginationRequest(obj: ChimeGetVoiceConnectorOriginationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorOriginationResponse
 */
export interface ChimeGetVoiceConnectorOriginationResponse {
  /**
   * @schema ChimeGetVoiceConnectorOriginationResponse#Origination
   */
  readonly origination?: ChimeOrigination;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorOriginationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorOriginationResponse(obj: ChimeGetVoiceConnectorOriginationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Origination': toJson_ChimeOrigination(obj.origination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorProxyRequest
 */
export interface ChimeGetVoiceConnectorProxyRequest {
  /**
   * @schema ChimeGetVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorProxyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorProxyRequest(obj: ChimeGetVoiceConnectorProxyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorProxyResponse
 */
export interface ChimeGetVoiceConnectorProxyResponse {
  /**
   * @schema ChimeGetVoiceConnectorProxyResponse#Proxy
   */
  readonly proxy?: ChimeProxy;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorProxyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorProxyResponse(obj: ChimeGetVoiceConnectorProxyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Proxy': toJson_ChimeProxy(obj.proxy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorStreamingConfigurationRequest
 */
export interface ChimeGetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema ChimeGetVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorStreamingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorStreamingConfigurationRequest(obj: ChimeGetVoiceConnectorStreamingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorStreamingConfigurationResponse
 */
export interface ChimeGetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @schema ChimeGetVoiceConnectorStreamingConfigurationResponse#StreamingConfiguration
   */
  readonly streamingConfiguration?: ChimeStreamingConfiguration;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorStreamingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorStreamingConfigurationResponse(obj: ChimeGetVoiceConnectorStreamingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingConfiguration': toJson_ChimeStreamingConfiguration(obj.streamingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorTerminationRequest
 */
export interface ChimeGetVoiceConnectorTerminationRequest {
  /**
   * @schema ChimeGetVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorTerminationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorTerminationRequest(obj: ChimeGetVoiceConnectorTerminationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorTerminationResponse
 */
export interface ChimeGetVoiceConnectorTerminationResponse {
  /**
   * @schema ChimeGetVoiceConnectorTerminationResponse#Termination
   */
  readonly termination?: ChimeTermination;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorTerminationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorTerminationResponse(obj: ChimeGetVoiceConnectorTerminationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Termination': toJson_ChimeTermination(obj.termination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorTerminationHealthRequest
 */
export interface ChimeGetVoiceConnectorTerminationHealthRequest {
  /**
   * @schema ChimeGetVoiceConnectorTerminationHealthRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorTerminationHealthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorTerminationHealthRequest(obj: ChimeGetVoiceConnectorTerminationHealthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGetVoiceConnectorTerminationHealthResponse
 */
export interface ChimeGetVoiceConnectorTerminationHealthResponse {
  /**
   * @schema ChimeGetVoiceConnectorTerminationHealthResponse#TerminationHealth
   */
  readonly terminationHealth?: ChimeTerminationHealth;

}

/**
 * Converts an object of type 'ChimeGetVoiceConnectorTerminationHealthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGetVoiceConnectorTerminationHealthResponse(obj: ChimeGetVoiceConnectorTerminationHealthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TerminationHealth': toJson_ChimeTerminationHealth(obj.terminationHealth),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeInviteUsersRequest
 */
export interface ChimeInviteUsersRequest {
  /**
   * @schema ChimeInviteUsersRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeInviteUsersRequest#UserEmailList
   */
  readonly userEmailList?: string[];

  /**
   * @schema ChimeInviteUsersRequest#UserType
   */
  readonly userType?: string;

}

/**
 * Converts an object of type 'ChimeInviteUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeInviteUsersRequest(obj: ChimeInviteUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserEmailList': obj.userEmailList?.map(y => y),
    'UserType': obj.userType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeInviteUsersResponse
 */
export interface ChimeInviteUsersResponse {
  /**
   * @schema ChimeInviteUsersResponse#Invites
   */
  readonly invites?: ChimeInvite[];

}

/**
 * Converts an object of type 'ChimeInviteUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeInviteUsersResponse(obj: ChimeInviteUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invites': obj.invites?.map(y => toJson_ChimeInvite(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAccountsRequest
 */
export interface ChimeListAccountsRequest {
  /**
   * @schema ChimeListAccountsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeListAccountsRequest#UserEmail
   */
  readonly userEmail?: string;

  /**
   * @schema ChimeListAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAccountsRequest(obj: ChimeListAccountsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'UserEmail': obj.userEmail,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAccountsResponse
 */
export interface ChimeListAccountsResponse {
  /**
   * @schema ChimeListAccountsResponse#Accounts
   */
  readonly accounts?: ChimeAccount[];

  /**
   * @schema ChimeListAccountsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAccountsResponse(obj: ChimeListAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accounts': obj.accounts?.map(y => toJson_ChimeAccount(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAppInstanceAdminsRequest
 */
export interface ChimeListAppInstanceAdminsRequest {
  /**
   * @schema ChimeListAppInstanceAdminsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListAppInstanceAdminsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListAppInstanceAdminsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAppInstanceAdminsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAppInstanceAdminsRequest(obj: ChimeListAppInstanceAdminsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAppInstanceAdminsResponse
 */
export interface ChimeListAppInstanceAdminsResponse {
  /**
   * @schema ChimeListAppInstanceAdminsResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListAppInstanceAdminsResponse#AppInstanceAdmins
   */
  readonly appInstanceAdmins?: ChimeAppInstanceAdminSummary[];

  /**
   * @schema ChimeListAppInstanceAdminsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAppInstanceAdminsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAppInstanceAdminsResponse(obj: ChimeListAppInstanceAdminsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceAdmins': obj.appInstanceAdmins?.map(y => toJson_ChimeAppInstanceAdminSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAppInstanceUsersRequest
 */
export interface ChimeListAppInstanceUsersRequest {
  /**
   * @schema ChimeListAppInstanceUsersRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListAppInstanceUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListAppInstanceUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAppInstanceUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAppInstanceUsersRequest(obj: ChimeListAppInstanceUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAppInstanceUsersResponse
 */
export interface ChimeListAppInstanceUsersResponse {
  /**
   * @schema ChimeListAppInstanceUsersResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListAppInstanceUsersResponse#AppInstanceUsers
   */
  readonly appInstanceUsers?: ChimeAppInstanceUserSummary[];

  /**
   * @schema ChimeListAppInstanceUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAppInstanceUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAppInstanceUsersResponse(obj: ChimeListAppInstanceUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceUsers': obj.appInstanceUsers?.map(y => toJson_ChimeAppInstanceUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAppInstancesRequest
 */
export interface ChimeListAppInstancesRequest {
  /**
   * @schema ChimeListAppInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListAppInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAppInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAppInstancesRequest(obj: ChimeListAppInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAppInstancesResponse
 */
export interface ChimeListAppInstancesResponse {
  /**
   * @schema ChimeListAppInstancesResponse#AppInstances
   */
  readonly appInstances?: ChimeAppInstanceSummary[];

  /**
   * @schema ChimeListAppInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAppInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAppInstancesResponse(obj: ChimeListAppInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstances': obj.appInstances?.map(y => toJson_ChimeAppInstanceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAttendeeTagsRequest
 */
export interface ChimeListAttendeeTagsRequest {
  /**
   * @schema ChimeListAttendeeTagsRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeListAttendeeTagsRequest#AttendeeId
   */
  readonly attendeeId?: string;

}

/**
 * Converts an object of type 'ChimeListAttendeeTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAttendeeTagsRequest(obj: ChimeListAttendeeTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'AttendeeId': obj.attendeeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAttendeeTagsResponse
 */
export interface ChimeListAttendeeTagsResponse {
  /**
   * @schema ChimeListAttendeeTagsResponse#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeListAttendeeTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAttendeeTagsResponse(obj: ChimeListAttendeeTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAttendeesRequest
 */
export interface ChimeListAttendeesRequest {
  /**
   * @schema ChimeListAttendeesRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeListAttendeesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListAttendeesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListAttendeesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAttendeesRequest(obj: ChimeListAttendeesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListAttendeesResponse
 */
export interface ChimeListAttendeesResponse {
  /**
   * @schema ChimeListAttendeesResponse#Attendees
   */
  readonly attendees?: ChimeAttendee[];

  /**
   * @schema ChimeListAttendeesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListAttendeesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListAttendeesResponse(obj: ChimeListAttendeesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attendees': obj.attendees?.map(y => toJson_ChimeAttendee(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListBotsRequest
 */
export interface ChimeListBotsRequest {
  /**
   * @schema ChimeListBotsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeListBotsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListBotsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListBotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListBotsRequest(obj: ChimeListBotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListBotsResponse
 */
export interface ChimeListBotsResponse {
  /**
   * @schema ChimeListBotsResponse#Bots
   */
  readonly bots?: ChimeBot[];

  /**
   * @schema ChimeListBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListBotsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListBotsResponse(obj: ChimeListBotsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bots': obj.bots?.map(y => toJson_ChimeBot(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelBansRequest
 */
export interface ChimeListChannelBansRequest {
  /**
   * @schema ChimeListChannelBansRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelBansRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelBansRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelBansRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelBansRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelBansRequest(obj: ChimeListChannelBansRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelBansResponse
 */
export interface ChimeListChannelBansResponse {
  /**
   * @schema ChimeListChannelBansResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelBansResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelBansResponse#ChannelBans
   */
  readonly channelBans?: ChimeChannelBanSummary[];

}

/**
 * Converts an object of type 'ChimeListChannelBansResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelBansResponse(obj: ChimeListChannelBansResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'NextToken': obj.nextToken,
    'ChannelBans': obj.channelBans?.map(y => toJson_ChimeChannelBanSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelMembershipsRequest
 */
export interface ChimeListChannelMembershipsRequest {
  /**
   * @schema ChimeListChannelMembershipsRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelMembershipsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeListChannelMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelMembershipsRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelMembershipsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelMembershipsRequest(obj: ChimeListChannelMembershipsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Type': obj.type,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelMembershipsResponse
 */
export interface ChimeListChannelMembershipsResponse {
  /**
   * @schema ChimeListChannelMembershipsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelMembershipsResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChimeChannelMembershipSummary[];

  /**
   * @schema ChimeListChannelMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListChannelMembershipsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelMembershipsResponse(obj: ChimeListChannelMembershipsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelMemberships': obj.channelMemberships?.map(y => toJson_ChimeChannelMembershipSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelMembershipsForAppInstanceUserRequest
 */
export interface ChimeListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelMembershipsForAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelMembershipsForAppInstanceUserRequest(obj: ChimeListChannelMembershipsForAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelMembershipsForAppInstanceUserResponse
 */
export interface ChimeListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChimeChannelMembershipForAppInstanceUserSummary[];

  /**
   * @schema ChimeListChannelMembershipsForAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListChannelMembershipsForAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelMembershipsForAppInstanceUserResponse(obj: ChimeListChannelMembershipsForAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMemberships': obj.channelMemberships?.map(y => toJson_ChimeChannelMembershipForAppInstanceUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelMessagesRequest
 */
export interface ChimeListChannelMessagesRequest {
  /**
   * @schema ChimeListChannelMessagesRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelMessagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelMessagesRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelMessagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelMessagesRequest(obj: ChimeListChannelMessagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'SortOrder': obj.sortOrder,
    'NotBefore': obj.notBefore,
    'NotAfter': obj.notAfter,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelMessagesResponse
 */
export interface ChimeListChannelMessagesResponse {
  /**
   * @schema ChimeListChannelMessagesResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelMessagesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelMessagesResponse#ChannelMessages
   */
  readonly channelMessages?: ChimeChannelMessageSummary[];

}

/**
 * Converts an object of type 'ChimeListChannelMessagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelMessagesResponse(obj: ChimeListChannelMessagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'NextToken': obj.nextToken,
    'ChannelMessages': obj.channelMessages?.map(y => toJson_ChimeChannelMessageSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelModeratorsRequest
 */
export interface ChimeListChannelModeratorsRequest {
  /**
   * @schema ChimeListChannelModeratorsRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelModeratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelModeratorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelModeratorsRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelModeratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelModeratorsRequest(obj: ChimeListChannelModeratorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelModeratorsResponse
 */
export interface ChimeListChannelModeratorsResponse {
  /**
   * @schema ChimeListChannelModeratorsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeListChannelModeratorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelModeratorsResponse#ChannelModerators
   */
  readonly channelModerators?: ChimeChannelModeratorSummary[];

}

/**
 * Converts an object of type 'ChimeListChannelModeratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelModeratorsResponse(obj: ChimeListChannelModeratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'NextToken': obj.nextToken,
    'ChannelModerators': obj.channelModerators?.map(y => toJson_ChimeChannelModeratorSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelsRequest
 */
export interface ChimeListChannelsRequest {
  /**
   * @schema ChimeListChannelsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeListChannelsRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelsRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelsRequest(obj: ChimeListChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Privacy': obj.privacy,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelsResponse
 */
export interface ChimeListChannelsResponse {
  /**
   * @schema ChimeListChannelsResponse#Channels
   */
  readonly channels?: ChimeChannelSummary[];

  /**
   * @schema ChimeListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelsResponse(obj: ChimeListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_ChimeChannelSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelsModeratedByAppInstanceUserRequest
 */
export interface ChimeListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeListChannelsModeratedByAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelsModeratedByAppInstanceUserRequest(obj: ChimeListChannelsModeratedByAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListChannelsModeratedByAppInstanceUserResponse
 */
export interface ChimeListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserResponse#Channels
   */
  readonly channels?: ChimeChannelModeratedByAppInstanceUserSummary[];

  /**
   * @schema ChimeListChannelsModeratedByAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListChannelsModeratedByAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListChannelsModeratedByAppInstanceUserResponse(obj: ChimeListChannelsModeratedByAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_ChimeChannelModeratedByAppInstanceUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListMediaCapturePipelinesRequest
 */
export interface ChimeListMediaCapturePipelinesRequest {
  /**
   * @schema ChimeListMediaCapturePipelinesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListMediaCapturePipelinesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListMediaCapturePipelinesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListMediaCapturePipelinesRequest(obj: ChimeListMediaCapturePipelinesRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeListMediaCapturePipelinesResponse
 */
export interface ChimeListMediaCapturePipelinesResponse {
  /**
   * @schema ChimeListMediaCapturePipelinesResponse#MediaCapturePipelines
   */
  readonly mediaCapturePipelines?: ChimeMediaCapturePipeline[];

  /**
   * @schema ChimeListMediaCapturePipelinesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListMediaCapturePipelinesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListMediaCapturePipelinesResponse(obj: ChimeListMediaCapturePipelinesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaCapturePipelines': obj.mediaCapturePipelines?.map(y => toJson_ChimeMediaCapturePipeline(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListMeetingTagsRequest
 */
export interface ChimeListMeetingTagsRequest {
  /**
   * @schema ChimeListMeetingTagsRequest#MeetingId
   */
  readonly meetingId?: string;

}

/**
 * Converts an object of type 'ChimeListMeetingTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListMeetingTagsRequest(obj: ChimeListMeetingTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListMeetingTagsResponse
 */
export interface ChimeListMeetingTagsResponse {
  /**
   * @schema ChimeListMeetingTagsResponse#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeListMeetingTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListMeetingTagsResponse(obj: ChimeListMeetingTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListMeetingsRequest
 */
export interface ChimeListMeetingsRequest {
  /**
   * @schema ChimeListMeetingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListMeetingsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListMeetingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListMeetingsRequest(obj: ChimeListMeetingsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeListMeetingsResponse
 */
export interface ChimeListMeetingsResponse {
  /**
   * @schema ChimeListMeetingsResponse#Meetings
   */
  readonly meetings?: ChimeMeeting[];

  /**
   * @schema ChimeListMeetingsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListMeetingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListMeetingsResponse(obj: ChimeListMeetingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Meetings': obj.meetings?.map(y => toJson_ChimeMeeting(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListPhoneNumberOrdersRequest
 */
export interface ChimeListPhoneNumberOrdersRequest {
  /**
   * @schema ChimeListPhoneNumberOrdersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListPhoneNumberOrdersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListPhoneNumberOrdersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListPhoneNumberOrdersRequest(obj: ChimeListPhoneNumberOrdersRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeListPhoneNumberOrdersResponse
 */
export interface ChimeListPhoneNumberOrdersResponse {
  /**
   * @schema ChimeListPhoneNumberOrdersResponse#PhoneNumberOrders
   */
  readonly phoneNumberOrders?: ChimePhoneNumberOrder[];

  /**
   * @schema ChimeListPhoneNumberOrdersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListPhoneNumberOrdersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListPhoneNumberOrdersResponse(obj: ChimeListPhoneNumberOrdersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberOrders': obj.phoneNumberOrders?.map(y => toJson_ChimePhoneNumberOrder(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListPhoneNumbersRequest
 */
export interface ChimeListPhoneNumbersRequest {
  /**
   * @schema ChimeListPhoneNumbersRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#FilterName
   */
  readonly filterName?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#FilterValue
   */
  readonly filterValue?: string;

  /**
   * @schema ChimeListPhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListPhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListPhoneNumbersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListPhoneNumbersRequest(obj: ChimeListPhoneNumbersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'ProductType': obj.productType,
    'FilterName': obj.filterName,
    'FilterValue': obj.filterValue,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListPhoneNumbersResponse
 */
export interface ChimeListPhoneNumbersResponse {
  /**
   * @schema ChimeListPhoneNumbersResponse#PhoneNumbers
   */
  readonly phoneNumbers?: ChimePhoneNumber[];

  /**
   * @schema ChimeListPhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListPhoneNumbersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListPhoneNumbersResponse(obj: ChimeListPhoneNumbersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumbers': obj.phoneNumbers?.map(y => toJson_ChimePhoneNumber(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListProxySessionsRequest
 */
export interface ChimeListProxySessionsRequest {
  /**
   * @schema ChimeListProxySessionsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeListProxySessionsRequest#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeListProxySessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListProxySessionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListProxySessionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListProxySessionsRequest(obj: ChimeListProxySessionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Status': obj.status,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListProxySessionsResponse
 */
export interface ChimeListProxySessionsResponse {
  /**
   * @schema ChimeListProxySessionsResponse#ProxySessions
   */
  readonly proxySessions?: ChimeProxySession[];

  /**
   * @schema ChimeListProxySessionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListProxySessionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListProxySessionsResponse(obj: ChimeListProxySessionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProxySessions': obj.proxySessions?.map(y => toJson_ChimeProxySession(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListRoomMembershipsRequest
 */
export interface ChimeListRoomMembershipsRequest {
  /**
   * @schema ChimeListRoomMembershipsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeListRoomMembershipsRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeListRoomMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListRoomMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListRoomMembershipsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListRoomMembershipsRequest(obj: ChimeListRoomMembershipsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListRoomMembershipsResponse
 */
export interface ChimeListRoomMembershipsResponse {
  /**
   * @schema ChimeListRoomMembershipsResponse#RoomMemberships
   */
  readonly roomMemberships?: ChimeRoomMembership[];

  /**
   * @schema ChimeListRoomMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListRoomMembershipsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListRoomMembershipsResponse(obj: ChimeListRoomMembershipsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomMemberships': obj.roomMemberships?.map(y => toJson_ChimeRoomMembership(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListRoomsRequest
 */
export interface ChimeListRoomsRequest {
  /**
   * @schema ChimeListRoomsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeListRoomsRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeListRoomsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListRoomsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListRoomsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListRoomsRequest(obj: ChimeListRoomsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'MemberId': obj.memberId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListRoomsResponse
 */
export interface ChimeListRoomsResponse {
  /**
   * @schema ChimeListRoomsResponse#Rooms
   */
  readonly rooms?: ChimeRoom[];

  /**
   * @schema ChimeListRoomsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListRoomsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListRoomsResponse(obj: ChimeListRoomsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rooms': obj.rooms?.map(y => toJson_ChimeRoom(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListSipMediaApplicationsRequest
 */
export interface ChimeListSipMediaApplicationsRequest {
  /**
   * @schema ChimeListSipMediaApplicationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListSipMediaApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListSipMediaApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListSipMediaApplicationsRequest(obj: ChimeListSipMediaApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListSipMediaApplicationsResponse
 */
export interface ChimeListSipMediaApplicationsResponse {
  /**
   * @schema ChimeListSipMediaApplicationsResponse#SipMediaApplications
   */
  readonly sipMediaApplications?: ChimeSipMediaApplication[];

  /**
   * @schema ChimeListSipMediaApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListSipMediaApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListSipMediaApplicationsResponse(obj: ChimeListSipMediaApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplications': obj.sipMediaApplications?.map(y => toJson_ChimeSipMediaApplication(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListSipRulesRequest
 */
export interface ChimeListSipRulesRequest {
  /**
   * @schema ChimeListSipRulesRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeListSipRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListSipRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListSipRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListSipRulesRequest(obj: ChimeListSipRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListSipRulesResponse
 */
export interface ChimeListSipRulesResponse {
  /**
   * @schema ChimeListSipRulesResponse#SipRules
   */
  readonly sipRules?: ChimeSipRule[];

  /**
   * @schema ChimeListSipRulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListSipRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListSipRulesResponse(obj: ChimeListSipRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRules': obj.sipRules?.map(y => toJson_ChimeSipRule(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListSupportedPhoneNumberCountriesRequest
 */
export interface ChimeListSupportedPhoneNumberCountriesRequest {
  /**
   * @schema ChimeListSupportedPhoneNumberCountriesRequest#ProductType
   */
  readonly productType?: string;

}

/**
 * Converts an object of type 'ChimeListSupportedPhoneNumberCountriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListSupportedPhoneNumberCountriesRequest(obj: ChimeListSupportedPhoneNumberCountriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductType': obj.productType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListSupportedPhoneNumberCountriesResponse
 */
export interface ChimeListSupportedPhoneNumberCountriesResponse {
  /**
   * @schema ChimeListSupportedPhoneNumberCountriesResponse#PhoneNumberCountries
   */
  readonly phoneNumberCountries?: ChimePhoneNumberCountry[];

}

/**
 * Converts an object of type 'ChimeListSupportedPhoneNumberCountriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListSupportedPhoneNumberCountriesResponse(obj: ChimeListSupportedPhoneNumberCountriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberCountries': obj.phoneNumberCountries?.map(y => toJson_ChimePhoneNumberCountry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListTagsForResourceRequest
 */
export interface ChimeListTagsForResourceRequest {
  /**
   * @schema ChimeListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ChimeListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListTagsForResourceRequest(obj: ChimeListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListTagsForResourceResponse
 */
export interface ChimeListTagsForResourceResponse {
  /**
   * @schema ChimeListTagsForResourceResponse#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListTagsForResourceResponse(obj: ChimeListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListUsersRequest
 */
export interface ChimeListUsersRequest {
  /**
   * @schema ChimeListUsersRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeListUsersRequest#UserEmail
   */
  readonly userEmail?: string;

  /**
   * @schema ChimeListUsersRequest#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeListUsersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListUsersRequest(obj: ChimeListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserEmail': obj.userEmail,
    'UserType': obj.userType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListUsersResponse
 */
export interface ChimeListUsersResponse {
  /**
   * @schema ChimeListUsersResponse#Users
   */
  readonly users?: ChimeUser[];

  /**
   * @schema ChimeListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListUsersResponse(obj: ChimeListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Users': obj.users?.map(y => toJson_ChimeUser(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListVoiceConnectorGroupsRequest
 */
export interface ChimeListVoiceConnectorGroupsRequest {
  /**
   * @schema ChimeListVoiceConnectorGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListVoiceConnectorGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListVoiceConnectorGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListVoiceConnectorGroupsRequest(obj: ChimeListVoiceConnectorGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeListVoiceConnectorGroupsResponse
 */
export interface ChimeListVoiceConnectorGroupsResponse {
  /**
   * @schema ChimeListVoiceConnectorGroupsResponse#VoiceConnectorGroups
   */
  readonly voiceConnectorGroups?: ChimeVoiceConnectorGroup[];

  /**
   * @schema ChimeListVoiceConnectorGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListVoiceConnectorGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListVoiceConnectorGroupsResponse(obj: ChimeListVoiceConnectorGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroups': obj.voiceConnectorGroups?.map(y => toJson_ChimeVoiceConnectorGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListVoiceConnectorTerminationCredentialsRequest
 */
export interface ChimeListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ChimeListVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

}

/**
 * Converts an object of type 'ChimeListVoiceConnectorTerminationCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListVoiceConnectorTerminationCredentialsRequest(obj: ChimeListVoiceConnectorTerminationCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListVoiceConnectorTerminationCredentialsResponse
 */
export interface ChimeListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @schema ChimeListVoiceConnectorTerminationCredentialsResponse#Usernames
   */
  readonly usernames?: string[];

}

/**
 * Converts an object of type 'ChimeListVoiceConnectorTerminationCredentialsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListVoiceConnectorTerminationCredentialsResponse(obj: ChimeListVoiceConnectorTerminationCredentialsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Usernames': obj.usernames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeListVoiceConnectorsRequest
 */
export interface ChimeListVoiceConnectorsRequest {
  /**
   * @schema ChimeListVoiceConnectorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeListVoiceConnectorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ChimeListVoiceConnectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListVoiceConnectorsRequest(obj: ChimeListVoiceConnectorsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeListVoiceConnectorsResponse
 */
export interface ChimeListVoiceConnectorsResponse {
  /**
   * @schema ChimeListVoiceConnectorsResponse#VoiceConnectors
   */
  readonly voiceConnectors?: ChimeVoiceConnector[];

  /**
   * @schema ChimeListVoiceConnectorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeListVoiceConnectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeListVoiceConnectorsResponse(obj: ChimeListVoiceConnectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectors': obj.voiceConnectors?.map(y => toJson_ChimeVoiceConnector(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeLogoutUserRequest
 */
export interface ChimeLogoutUserRequest {
  /**
   * @schema ChimeLogoutUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeLogoutUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ChimeLogoutUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeLogoutUserRequest(obj: ChimeLogoutUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeLogoutUserResponse
 */
export interface ChimeLogoutUserResponse {
}

/**
 * Converts an object of type 'ChimeLogoutUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeLogoutUserResponse(obj: ChimeLogoutUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutAppInstanceRetentionSettingsRequest
 */
export interface ChimePutAppInstanceRetentionSettingsRequest {
  /**
   * @schema ChimePutAppInstanceRetentionSettingsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimePutAppInstanceRetentionSettingsRequest#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeAppInstanceRetentionSettings;

}

/**
 * Converts an object of type 'ChimePutAppInstanceRetentionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutAppInstanceRetentionSettingsRequest(obj: ChimePutAppInstanceRetentionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceRetentionSettings': toJson_ChimeAppInstanceRetentionSettings(obj.appInstanceRetentionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutAppInstanceRetentionSettingsResponse
 */
export interface ChimePutAppInstanceRetentionSettingsResponse {
  /**
   * @schema ChimePutAppInstanceRetentionSettingsResponse#AppInstanceRetentionSettings
   */
  readonly appInstanceRetentionSettings?: ChimeAppInstanceRetentionSettings;

  /**
   * @schema ChimePutAppInstanceRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimePutAppInstanceRetentionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutAppInstanceRetentionSettingsResponse(obj: ChimePutAppInstanceRetentionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceRetentionSettings': toJson_ChimeAppInstanceRetentionSettings(obj.appInstanceRetentionSettings),
    'InitiateDeletionTimestamp': obj.initiateDeletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutAppInstanceStreamingConfigurationsRequest
 */
export interface ChimePutAppInstanceStreamingConfigurationsRequest {
  /**
   * @schema ChimePutAppInstanceStreamingConfigurationsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimePutAppInstanceStreamingConfigurationsRequest#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: ChimeAppInstanceStreamingConfiguration[];

}

/**
 * Converts an object of type 'ChimePutAppInstanceStreamingConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutAppInstanceStreamingConfigurationsRequest(obj: ChimePutAppInstanceStreamingConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'AppInstanceStreamingConfigurations': obj.appInstanceStreamingConfigurations?.map(y => toJson_ChimeAppInstanceStreamingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutAppInstanceStreamingConfigurationsResponse
 */
export interface ChimePutAppInstanceStreamingConfigurationsResponse {
  /**
   * @schema ChimePutAppInstanceStreamingConfigurationsResponse#AppInstanceStreamingConfigurations
   */
  readonly appInstanceStreamingConfigurations?: ChimeAppInstanceStreamingConfiguration[];

}

/**
 * Converts an object of type 'ChimePutAppInstanceStreamingConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutAppInstanceStreamingConfigurationsResponse(obj: ChimePutAppInstanceStreamingConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceStreamingConfigurations': obj.appInstanceStreamingConfigurations?.map(y => toJson_ChimeAppInstanceStreamingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutEventsConfigurationRequest
 */
export interface ChimePutEventsConfigurationRequest {
  /**
   * @schema ChimePutEventsConfigurationRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimePutEventsConfigurationRequest#BotId
   */
  readonly botId?: string;

  /**
   * @schema ChimePutEventsConfigurationRequest#OutboundEventsHTTPSEndpoint
   */
  readonly outboundEventsHttpsEndpoint?: string;

  /**
   * @schema ChimePutEventsConfigurationRequest#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * Converts an object of type 'ChimePutEventsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutEventsConfigurationRequest(obj: ChimePutEventsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BotId': obj.botId,
    'OutboundEventsHTTPSEndpoint': obj.outboundEventsHttpsEndpoint,
    'LambdaFunctionArn': obj.lambdaFunctionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutEventsConfigurationResponse
 */
export interface ChimePutEventsConfigurationResponse {
  /**
   * @schema ChimePutEventsConfigurationResponse#EventsConfiguration
   */
  readonly eventsConfiguration?: ChimeEventsConfiguration;

}

/**
 * Converts an object of type 'ChimePutEventsConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutEventsConfigurationResponse(obj: ChimePutEventsConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventsConfiguration': toJson_ChimeEventsConfiguration(obj.eventsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutRetentionSettingsRequest
 */
export interface ChimePutRetentionSettingsRequest {
  /**
   * @schema ChimePutRetentionSettingsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimePutRetentionSettingsRequest#RetentionSettings
   */
  readonly retentionSettings?: ChimeRetentionSettings;

}

/**
 * Converts an object of type 'ChimePutRetentionSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutRetentionSettingsRequest(obj: ChimePutRetentionSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RetentionSettings': toJson_ChimeRetentionSettings(obj.retentionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutRetentionSettingsResponse
 */
export interface ChimePutRetentionSettingsResponse {
  /**
   * @schema ChimePutRetentionSettingsResponse#RetentionSettings
   */
  readonly retentionSettings?: ChimeRetentionSettings;

  /**
   * @schema ChimePutRetentionSettingsResponse#InitiateDeletionTimestamp
   */
  readonly initiateDeletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimePutRetentionSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutRetentionSettingsResponse(obj: ChimePutRetentionSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetentionSettings': toJson_ChimeRetentionSettings(obj.retentionSettings),
    'InitiateDeletionTimestamp': obj.initiateDeletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutSipMediaApplicationLoggingConfigurationRequest
 */
export interface ChimePutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @schema ChimePutSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimePutSipMediaApplicationLoggingConfigurationRequest#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: ChimeSipMediaApplicationLoggingConfiguration;

}

/**
 * Converts an object of type 'ChimePutSipMediaApplicationLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutSipMediaApplicationLoggingConfigurationRequest(obj: ChimePutSipMediaApplicationLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
    'SipMediaApplicationLoggingConfiguration': toJson_ChimeSipMediaApplicationLoggingConfiguration(obj.sipMediaApplicationLoggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutSipMediaApplicationLoggingConfigurationResponse
 */
export interface ChimePutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @schema ChimePutSipMediaApplicationLoggingConfigurationResponse#SipMediaApplicationLoggingConfiguration
   */
  readonly sipMediaApplicationLoggingConfiguration?: ChimeSipMediaApplicationLoggingConfiguration;

}

/**
 * Converts an object of type 'ChimePutSipMediaApplicationLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutSipMediaApplicationLoggingConfigurationResponse(obj: ChimePutSipMediaApplicationLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationLoggingConfiguration': toJson_ChimeSipMediaApplicationLoggingConfiguration(obj.sipMediaApplicationLoggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationRequest
 */
export interface ChimePutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationRequest#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: ChimeEmergencyCallingConfiguration;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorEmergencyCallingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorEmergencyCallingConfigurationRequest(obj: ChimePutVoiceConnectorEmergencyCallingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'EmergencyCallingConfiguration': toJson_ChimeEmergencyCallingConfiguration(obj.emergencyCallingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationResponse
 */
export interface ChimePutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @schema ChimePutVoiceConnectorEmergencyCallingConfigurationResponse#EmergencyCallingConfiguration
   */
  readonly emergencyCallingConfiguration?: ChimeEmergencyCallingConfiguration;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorEmergencyCallingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorEmergencyCallingConfigurationResponse(obj: ChimePutVoiceConnectorEmergencyCallingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmergencyCallingConfiguration': toJson_ChimeEmergencyCallingConfiguration(obj.emergencyCallingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorLoggingConfigurationRequest
 */
export interface ChimePutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @schema ChimePutVoiceConnectorLoggingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorLoggingConfigurationRequest#LoggingConfiguration
   */
  readonly loggingConfiguration?: ChimeLoggingConfiguration;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorLoggingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorLoggingConfigurationRequest(obj: ChimePutVoiceConnectorLoggingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'LoggingConfiguration': toJson_ChimeLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorLoggingConfigurationResponse
 */
export interface ChimePutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @schema ChimePutVoiceConnectorLoggingConfigurationResponse#LoggingConfiguration
   */
  readonly loggingConfiguration?: ChimeLoggingConfiguration;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorLoggingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorLoggingConfigurationResponse(obj: ChimePutVoiceConnectorLoggingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingConfiguration': toJson_ChimeLoggingConfiguration(obj.loggingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorOriginationRequest
 */
export interface ChimePutVoiceConnectorOriginationRequest {
  /**
   * @schema ChimePutVoiceConnectorOriginationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorOriginationRequest#Origination
   */
  readonly origination?: ChimeOrigination;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorOriginationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorOriginationRequest(obj: ChimePutVoiceConnectorOriginationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Origination': toJson_ChimeOrigination(obj.origination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorOriginationResponse
 */
export interface ChimePutVoiceConnectorOriginationResponse {
  /**
   * @schema ChimePutVoiceConnectorOriginationResponse#Origination
   */
  readonly origination?: ChimeOrigination;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorOriginationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorOriginationResponse(obj: ChimePutVoiceConnectorOriginationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Origination': toJson_ChimeOrigination(obj.origination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorProxyRequest
 */
export interface ChimePutVoiceConnectorProxyRequest {
  /**
   * @schema ChimePutVoiceConnectorProxyRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#DefaultSessionExpiryMinutes
   */
  readonly defaultSessionExpiryMinutes?: number;

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#PhoneNumberPoolCountries
   */
  readonly phoneNumberPoolCountries?: string[];

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#FallBackPhoneNumber
   */
  readonly fallBackPhoneNumber?: string;

  /**
   * @schema ChimePutVoiceConnectorProxyRequest#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorProxyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorProxyRequest(obj: ChimePutVoiceConnectorProxyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'DefaultSessionExpiryMinutes': obj.defaultSessionExpiryMinutes,
    'PhoneNumberPoolCountries': obj.phoneNumberPoolCountries?.map(y => y),
    'FallBackPhoneNumber': obj.fallBackPhoneNumber,
    'Disabled': obj.disabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorProxyResponse
 */
export interface ChimePutVoiceConnectorProxyResponse {
  /**
   * @schema ChimePutVoiceConnectorProxyResponse#Proxy
   */
  readonly proxy?: ChimeProxy;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorProxyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorProxyResponse(obj: ChimePutVoiceConnectorProxyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Proxy': toJson_ChimeProxy(obj.proxy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorStreamingConfigurationRequest
 */
export interface ChimePutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @schema ChimePutVoiceConnectorStreamingConfigurationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorStreamingConfigurationRequest#StreamingConfiguration
   */
  readonly streamingConfiguration?: ChimeStreamingConfiguration;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorStreamingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorStreamingConfigurationRequest(obj: ChimePutVoiceConnectorStreamingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'StreamingConfiguration': toJson_ChimeStreamingConfiguration(obj.streamingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorStreamingConfigurationResponse
 */
export interface ChimePutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @schema ChimePutVoiceConnectorStreamingConfigurationResponse#StreamingConfiguration
   */
  readonly streamingConfiguration?: ChimeStreamingConfiguration;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorStreamingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorStreamingConfigurationResponse(obj: ChimePutVoiceConnectorStreamingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamingConfiguration': toJson_ChimeStreamingConfiguration(obj.streamingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorTerminationRequest
 */
export interface ChimePutVoiceConnectorTerminationRequest {
  /**
   * @schema ChimePutVoiceConnectorTerminationRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorTerminationRequest#Termination
   */
  readonly termination?: ChimeTermination;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorTerminationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorTerminationRequest(obj: ChimePutVoiceConnectorTerminationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Termination': toJson_ChimeTermination(obj.termination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorTerminationResponse
 */
export interface ChimePutVoiceConnectorTerminationResponse {
  /**
   * @schema ChimePutVoiceConnectorTerminationResponse#Termination
   */
  readonly termination?: ChimeTermination;

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorTerminationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorTerminationResponse(obj: ChimePutVoiceConnectorTerminationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Termination': toJson_ChimeTermination(obj.termination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePutVoiceConnectorTerminationCredentialsRequest
 */
export interface ChimePutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @schema ChimePutVoiceConnectorTerminationCredentialsRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimePutVoiceConnectorTerminationCredentialsRequest#Credentials
   */
  readonly credentials?: ChimeCredential[];

}

/**
 * Converts an object of type 'ChimePutVoiceConnectorTerminationCredentialsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePutVoiceConnectorTerminationCredentialsRequest(obj: ChimePutVoiceConnectorTerminationCredentialsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Credentials': obj.credentials?.map(y => toJson_ChimeCredential(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRedactChannelMessageRequest
 */
export interface ChimeRedactChannelMessageRequest {
  /**
   * @schema ChimeRedactChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeRedactChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeRedactChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeRedactChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRedactChannelMessageRequest(obj: ChimeRedactChannelMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRedactChannelMessageResponse
 */
export interface ChimeRedactChannelMessageResponse {
  /**
   * @schema ChimeRedactChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeRedactChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeRedactChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRedactChannelMessageResponse(obj: ChimeRedactChannelMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRedactConversationMessageRequest
 */
export interface ChimeRedactConversationMessageRequest {
  /**
   * @schema ChimeRedactConversationMessageRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeRedactConversationMessageRequest#ConversationId
   */
  readonly conversationId?: string;

  /**
   * @schema ChimeRedactConversationMessageRequest#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeRedactConversationMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRedactConversationMessageRequest(obj: ChimeRedactConversationMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'ConversationId': obj.conversationId,
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRedactConversationMessageResponse
 */
export interface ChimeRedactConversationMessageResponse {
}

/**
 * Converts an object of type 'ChimeRedactConversationMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRedactConversationMessageResponse(obj: ChimeRedactConversationMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRedactRoomMessageRequest
 */
export interface ChimeRedactRoomMessageRequest {
  /**
   * @schema ChimeRedactRoomMessageRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeRedactRoomMessageRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeRedactRoomMessageRequest#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeRedactRoomMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRedactRoomMessageRequest(obj: ChimeRedactRoomMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRedactRoomMessageResponse
 */
export interface ChimeRedactRoomMessageResponse {
}

/**
 * Converts an object of type 'ChimeRedactRoomMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRedactRoomMessageResponse(obj: ChimeRedactRoomMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRegenerateSecurityTokenRequest
 */
export interface ChimeRegenerateSecurityTokenRequest {
  /**
   * @schema ChimeRegenerateSecurityTokenRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeRegenerateSecurityTokenRequest#BotId
   */
  readonly botId?: string;

}

/**
 * Converts an object of type 'ChimeRegenerateSecurityTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRegenerateSecurityTokenRequest(obj: ChimeRegenerateSecurityTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BotId': obj.botId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRegenerateSecurityTokenResponse
 */
export interface ChimeRegenerateSecurityTokenResponse {
  /**
   * @schema ChimeRegenerateSecurityTokenResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * Converts an object of type 'ChimeRegenerateSecurityTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRegenerateSecurityTokenResponse(obj: ChimeRegenerateSecurityTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bot': toJson_ChimeBot(obj.bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeResetPersonalPinRequest
 */
export interface ChimeResetPersonalPinRequest {
  /**
   * @schema ChimeResetPersonalPinRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeResetPersonalPinRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ChimeResetPersonalPinRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeResetPersonalPinRequest(obj: ChimeResetPersonalPinRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeResetPersonalPinResponse
 */
export interface ChimeResetPersonalPinResponse {
  /**
   * @schema ChimeResetPersonalPinResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * Converts an object of type 'ChimeResetPersonalPinResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeResetPersonalPinResponse(obj: ChimeResetPersonalPinResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_ChimeUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRestorePhoneNumberRequest
 */
export interface ChimeRestorePhoneNumberRequest {
  /**
   * @schema ChimeRestorePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId?: string;

}

/**
 * Converts an object of type 'ChimeRestorePhoneNumberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRestorePhoneNumberRequest(obj: ChimeRestorePhoneNumberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRestorePhoneNumberResponse
 */
export interface ChimeRestorePhoneNumberResponse {
  /**
   * @schema ChimeRestorePhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: ChimePhoneNumber;

}

/**
 * Converts an object of type 'ChimeRestorePhoneNumberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRestorePhoneNumberResponse(obj: ChimeRestorePhoneNumberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': toJson_ChimePhoneNumber(obj.phoneNumber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSearchAvailablePhoneNumbersRequest
 */
export interface ChimeSearchAvailablePhoneNumbersRequest {
  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#AreaCode
   */
  readonly areaCode?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#City
   */
  readonly city?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#Country
   */
  readonly country?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#State
   */
  readonly state?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#TollFreePrefix
   */
  readonly tollFreePrefix?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#PhoneNumberType
   */
  readonly phoneNumberType?: string;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSearchAvailablePhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSearchAvailablePhoneNumbersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSearchAvailablePhoneNumbersRequest(obj: ChimeSearchAvailablePhoneNumbersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AreaCode': obj.areaCode,
    'City': obj.city,
    'Country': obj.country,
    'State': obj.state,
    'TollFreePrefix': obj.tollFreePrefix,
    'PhoneNumberType': obj.phoneNumberType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSearchAvailablePhoneNumbersResponse
 */
export interface ChimeSearchAvailablePhoneNumbersResponse {
  /**
   * @schema ChimeSearchAvailablePhoneNumbersResponse#E164PhoneNumbers
   */
  readonly e164PhoneNumbers?: string[];

  /**
   * @schema ChimeSearchAvailablePhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSearchAvailablePhoneNumbersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSearchAvailablePhoneNumbersResponse(obj: ChimeSearchAvailablePhoneNumbersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'E164PhoneNumbers': obj.e164PhoneNumbers?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSendChannelMessageRequest
 */
export interface ChimeSendChannelMessageRequest {
  /**
   * @schema ChimeSendChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Persistence
   */
  readonly persistence?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeSendChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSendChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSendChannelMessageRequest(obj: ChimeSendChannelMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Content': obj.content,
    'Type': obj.type,
    'Persistence': obj.persistence,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSendChannelMessageResponse
 */
export interface ChimeSendChannelMessageResponse {
  /**
   * @schema ChimeSendChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSendChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeSendChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSendChannelMessageResponse(obj: ChimeSendChannelMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeStartMeetingTranscriptionRequest
 */
export interface ChimeStartMeetingTranscriptionRequest {
  /**
   * @schema ChimeStartMeetingTranscriptionRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeStartMeetingTranscriptionRequest#TranscriptionConfiguration
   */
  readonly transcriptionConfiguration?: ChimeTranscriptionConfiguration;

}

/**
 * Converts an object of type 'ChimeStartMeetingTranscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeStartMeetingTranscriptionRequest(obj: ChimeStartMeetingTranscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'TranscriptionConfiguration': toJson_ChimeTranscriptionConfiguration(obj.transcriptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeStartMeetingTranscriptionResponse
 */
export interface ChimeStartMeetingTranscriptionResponse {
}

/**
 * Converts an object of type 'ChimeStartMeetingTranscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeStartMeetingTranscriptionResponse(obj: ChimeStartMeetingTranscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeStopMeetingTranscriptionRequest
 */
export interface ChimeStopMeetingTranscriptionRequest {
  /**
   * @schema ChimeStopMeetingTranscriptionRequest#MeetingId
   */
  readonly meetingId?: string;

}

/**
 * Converts an object of type 'ChimeStopMeetingTranscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeStopMeetingTranscriptionRequest(obj: ChimeStopMeetingTranscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeStopMeetingTranscriptionResponse
 */
export interface ChimeStopMeetingTranscriptionResponse {
}

/**
 * Converts an object of type 'ChimeStopMeetingTranscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeStopMeetingTranscriptionResponse(obj: ChimeStopMeetingTranscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTagAttendeeRequest
 */
export interface ChimeTagAttendeeRequest {
  /**
   * @schema ChimeTagAttendeeRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeTagAttendeeRequest#AttendeeId
   */
  readonly attendeeId?: string;

  /**
   * @schema ChimeTagAttendeeRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeTagAttendeeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTagAttendeeRequest(obj: ChimeTagAttendeeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'AttendeeId': obj.attendeeId,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTagMeetingRequest
 */
export interface ChimeTagMeetingRequest {
  /**
   * @schema ChimeTagMeetingRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeTagMeetingRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeTagMeetingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTagMeetingRequest(obj: ChimeTagMeetingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTagResourceRequest
 */
export interface ChimeTagResourceRequest {
  /**
   * @schema ChimeTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ChimeTagResourceRequest#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTagResourceRequest(obj: ChimeTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUntagAttendeeRequest
 */
export interface ChimeUntagAttendeeRequest {
  /**
   * @schema ChimeUntagAttendeeRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeUntagAttendeeRequest#AttendeeId
   */
  readonly attendeeId?: string;

  /**
   * @schema ChimeUntagAttendeeRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ChimeUntagAttendeeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUntagAttendeeRequest(obj: ChimeUntagAttendeeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'AttendeeId': obj.attendeeId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUntagMeetingRequest
 */
export interface ChimeUntagMeetingRequest {
  /**
   * @schema ChimeUntagMeetingRequest#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeUntagMeetingRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ChimeUntagMeetingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUntagMeetingRequest(obj: ChimeUntagMeetingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUntagResourceRequest
 */
export interface ChimeUntagResourceRequest {
  /**
   * @schema ChimeUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ChimeUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ChimeUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUntagResourceRequest(obj: ChimeUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeUpdateAccountRequest
 */
export interface ChimeUpdateAccountRequest {
  /**
   * @schema ChimeUpdateAccountRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateAccountRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateAccountRequest#DefaultLicense
   */
  readonly defaultLicense?: string;

}

/**
 * Converts an object of type 'ChimeUpdateAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAccountRequest(obj: ChimeUpdateAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Name': obj.name,
    'DefaultLicense': obj.defaultLicense,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAccountResponse
 */
export interface ChimeUpdateAccountResponse {
  /**
   * @schema ChimeUpdateAccountResponse#Account
   */
  readonly account?: ChimeAccount;

}

/**
 * Converts an object of type 'ChimeUpdateAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAccountResponse(obj: ChimeUpdateAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': toJson_ChimeAccount(obj.account),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAccountSettingsRequest
 */
export interface ChimeUpdateAccountSettingsRequest {
  /**
   * @schema ChimeUpdateAccountSettingsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateAccountSettingsRequest#AccountSettings
   */
  readonly accountSettings?: ChimeAccountSettings;

}

/**
 * Converts an object of type 'ChimeUpdateAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAccountSettingsRequest(obj: ChimeUpdateAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'AccountSettings': toJson_ChimeAccountSettings(obj.accountSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAccountSettingsResponse
 */
export interface ChimeUpdateAccountSettingsResponse {
}

/**
 * Converts an object of type 'ChimeUpdateAccountSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAccountSettingsResponse(obj: ChimeUpdateAccountSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAppInstanceRequest
 */
export interface ChimeUpdateAppInstanceRequest {
  /**
   * @schema ChimeUpdateAppInstanceRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeUpdateAppInstanceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateAppInstanceRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeUpdateAppInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAppInstanceRequest(obj: ChimeUpdateAppInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAppInstanceResponse
 */
export interface ChimeUpdateAppInstanceResponse {
  /**
   * @schema ChimeUpdateAppInstanceResponse#AppInstanceArn
   */
  readonly appInstanceArn?: string;

}

/**
 * Converts an object of type 'ChimeUpdateAppInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAppInstanceResponse(obj: ChimeUpdateAppInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAppInstanceUserRequest
 */
export interface ChimeUpdateAppInstanceUserRequest {
  /**
   * @schema ChimeUpdateAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeUpdateAppInstanceUserRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateAppInstanceUserRequest#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeUpdateAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAppInstanceUserRequest(obj: ChimeUpdateAppInstanceUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateAppInstanceUserResponse
 */
export interface ChimeUpdateAppInstanceUserResponse {
  /**
   * @schema ChimeUpdateAppInstanceUserResponse#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

}

/**
 * Converts an object of type 'ChimeUpdateAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateAppInstanceUserResponse(obj: ChimeUpdateAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateBotRequest
 */
export interface ChimeUpdateBotRequest {
  /**
   * @schema ChimeUpdateBotRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateBotRequest#BotId
   */
  readonly botId?: string;

  /**
   * @schema ChimeUpdateBotRequest#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * Converts an object of type 'ChimeUpdateBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateBotRequest(obj: ChimeUpdateBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BotId': obj.botId,
    'Disabled': obj.disabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateBotResponse
 */
export interface ChimeUpdateBotResponse {
  /**
   * @schema ChimeUpdateBotResponse#Bot
   */
  readonly bot?: ChimeBot;

}

/**
 * Converts an object of type 'ChimeUpdateBotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateBotResponse(obj: ChimeUpdateBotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bot': toJson_ChimeBot(obj.bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateChannelRequest
 */
export interface ChimeUpdateChannelRequest {
  /**
   * @schema ChimeUpdateChannelRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeUpdateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateChannelRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeUpdateChannelRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeUpdateChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateChannelRequest(obj: ChimeUpdateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Name': obj.name,
    'Mode': obj.mode,
    'Metadata': obj.metadata,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateChannelResponse
 */
export interface ChimeUpdateChannelResponse {
  /**
   * @schema ChimeUpdateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeUpdateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateChannelResponse(obj: ChimeUpdateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateChannelMessageRequest
 */
export interface ChimeUpdateChannelMessageRequest {
  /**
   * @schema ChimeUpdateChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeUpdateChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeUpdateChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateChannelMessageRequest(obj: ChimeUpdateChannelMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
    'Content': obj.content,
    'Metadata': obj.metadata,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateChannelMessageResponse
 */
export interface ChimeUpdateChannelMessageResponse {
  /**
   * @schema ChimeUpdateChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeUpdateChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeUpdateChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateChannelMessageResponse(obj: ChimeUpdateChannelMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateChannelReadMarkerRequest
 */
export interface ChimeUpdateChannelReadMarkerRequest {
  /**
   * @schema ChimeUpdateChannelReadMarkerRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeUpdateChannelReadMarkerRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeUpdateChannelReadMarkerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateChannelReadMarkerRequest(obj: ChimeUpdateChannelReadMarkerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateChannelReadMarkerResponse
 */
export interface ChimeUpdateChannelReadMarkerResponse {
  /**
   * @schema ChimeUpdateChannelReadMarkerResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeUpdateChannelReadMarkerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateChannelReadMarkerResponse(obj: ChimeUpdateChannelReadMarkerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateGlobalSettingsRequest
 */
export interface ChimeUpdateGlobalSettingsRequest {
  /**
   * @schema ChimeUpdateGlobalSettingsRequest#BusinessCalling
   */
  readonly businessCalling?: ChimeBusinessCallingSettings;

  /**
   * @schema ChimeUpdateGlobalSettingsRequest#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnectorSettings;

}

/**
 * Converts an object of type 'ChimeUpdateGlobalSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateGlobalSettingsRequest(obj: ChimeUpdateGlobalSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BusinessCalling': toJson_ChimeBusinessCallingSettings(obj.businessCalling),
    'VoiceConnector': toJson_ChimeVoiceConnectorSettings(obj.voiceConnector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdatePhoneNumberRequest
 */
export interface ChimeUpdatePhoneNumberRequest {
  /**
   * @schema ChimeUpdatePhoneNumberRequest#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequest#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequest#CallingName
   */
  readonly callingName?: string;

}

/**
 * Converts an object of type 'ChimeUpdatePhoneNumberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdatePhoneNumberRequest(obj: ChimeUpdatePhoneNumberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
    'ProductType': obj.productType,
    'CallingName': obj.callingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdatePhoneNumberResponse
 */
export interface ChimeUpdatePhoneNumberResponse {
  /**
   * @schema ChimeUpdatePhoneNumberResponse#PhoneNumber
   */
  readonly phoneNumber?: ChimePhoneNumber;

}

/**
 * Converts an object of type 'ChimeUpdatePhoneNumberResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdatePhoneNumberResponse(obj: ChimeUpdatePhoneNumberResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': toJson_ChimePhoneNumber(obj.phoneNumber),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdatePhoneNumberSettingsRequest
 */
export interface ChimeUpdatePhoneNumberSettingsRequest {
  /**
   * @schema ChimeUpdatePhoneNumberSettingsRequest#CallingName
   */
  readonly callingName?: string;

}

/**
 * Converts an object of type 'ChimeUpdatePhoneNumberSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdatePhoneNumberSettingsRequest(obj: ChimeUpdatePhoneNumberSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallingName': obj.callingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateProxySessionRequest
 */
export interface ChimeUpdateProxySessionRequest {
  /**
   * @schema ChimeUpdateProxySessionRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeUpdateProxySessionRequest#ProxySessionId
   */
  readonly proxySessionId?: string;

  /**
   * @schema ChimeUpdateProxySessionRequest#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema ChimeUpdateProxySessionRequest#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

}

/**
 * Converts an object of type 'ChimeUpdateProxySessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateProxySessionRequest(obj: ChimeUpdateProxySessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'ProxySessionId': obj.proxySessionId,
    'Capabilities': obj.capabilities?.map(y => y),
    'ExpiryMinutes': obj.expiryMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateProxySessionResponse
 */
export interface ChimeUpdateProxySessionResponse {
  /**
   * @schema ChimeUpdateProxySessionResponse#ProxySession
   */
  readonly proxySession?: ChimeProxySession;

}

/**
 * Converts an object of type 'ChimeUpdateProxySessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateProxySessionResponse(obj: ChimeUpdateProxySessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProxySession': toJson_ChimeProxySession(obj.proxySession),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateRoomRequest
 */
export interface ChimeUpdateRoomRequest {
  /**
   * @schema ChimeUpdateRoomRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateRoomRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeUpdateRoomRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ChimeUpdateRoomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateRoomRequest(obj: ChimeUpdateRoomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateRoomResponse
 */
export interface ChimeUpdateRoomResponse {
  /**
   * @schema ChimeUpdateRoomResponse#Room
   */
  readonly room?: ChimeRoom;

}

/**
 * Converts an object of type 'ChimeUpdateRoomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateRoomResponse(obj: ChimeUpdateRoomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Room': toJson_ChimeRoom(obj.room),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateRoomMembershipRequest
 */
export interface ChimeUpdateRoomMembershipRequest {
  /**
   * @schema ChimeUpdateRoomMembershipRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateRoomMembershipRequest#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeUpdateRoomMembershipRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeUpdateRoomMembershipRequest#Role
   */
  readonly role?: string;

}

/**
 * Converts an object of type 'ChimeUpdateRoomMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateRoomMembershipRequest(obj: ChimeUpdateRoomMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RoomId': obj.roomId,
    'MemberId': obj.memberId,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateRoomMembershipResponse
 */
export interface ChimeUpdateRoomMembershipResponse {
  /**
   * @schema ChimeUpdateRoomMembershipResponse#RoomMembership
   */
  readonly roomMembership?: ChimeRoomMembership;

}

/**
 * Converts an object of type 'ChimeUpdateRoomMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateRoomMembershipResponse(obj: ChimeUpdateRoomMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomMembership': toJson_ChimeRoomMembership(obj.roomMembership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateSipMediaApplicationRequest
 */
export interface ChimeUpdateSipMediaApplicationRequest {
  /**
   * @schema ChimeUpdateSipMediaApplicationRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeUpdateSipMediaApplicationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateSipMediaApplicationRequest#Endpoints
   */
  readonly endpoints?: ChimeSipMediaApplicationEndpoint[];

}

/**
 * Converts an object of type 'ChimeUpdateSipMediaApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateSipMediaApplicationRequest(obj: ChimeUpdateSipMediaApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
    'Name': obj.name,
    'Endpoints': obj.endpoints?.map(y => toJson_ChimeSipMediaApplicationEndpoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateSipMediaApplicationResponse
 */
export interface ChimeUpdateSipMediaApplicationResponse {
  /**
   * @schema ChimeUpdateSipMediaApplicationResponse#SipMediaApplication
   */
  readonly sipMediaApplication?: ChimeSipMediaApplication;

}

/**
 * Converts an object of type 'ChimeUpdateSipMediaApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateSipMediaApplicationResponse(obj: ChimeUpdateSipMediaApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplication': toJson_ChimeSipMediaApplication(obj.sipMediaApplication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateSipMediaApplicationCallRequest
 */
export interface ChimeUpdateSipMediaApplicationCallRequest {
  /**
   * @schema ChimeUpdateSipMediaApplicationCallRequest#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeUpdateSipMediaApplicationCallRequest#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema ChimeUpdateSipMediaApplicationCallRequest#Arguments
   */
  readonly arguments?: { [key: string]: string };

}

/**
 * Converts an object of type 'ChimeUpdateSipMediaApplicationCallRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateSipMediaApplicationCallRequest(obj: ChimeUpdateSipMediaApplicationCallRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
    'TransactionId': obj.transactionId,
    'Arguments': ((obj.arguments) === undefined) ? undefined : (Object.entries(obj.arguments).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateSipMediaApplicationCallResponse
 */
export interface ChimeUpdateSipMediaApplicationCallResponse {
  /**
   * @schema ChimeUpdateSipMediaApplicationCallResponse#SipMediaApplicationCall
   */
  readonly sipMediaApplicationCall?: ChimeSipMediaApplicationCall;

}

/**
 * Converts an object of type 'ChimeUpdateSipMediaApplicationCallResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateSipMediaApplicationCallResponse(obj: ChimeUpdateSipMediaApplicationCallResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationCall': toJson_ChimeSipMediaApplicationCall(obj.sipMediaApplicationCall),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateSipRuleRequest
 */
export interface ChimeUpdateSipRuleRequest {
  /**
   * @schema ChimeUpdateSipRuleRequest#SipRuleId
   */
  readonly sipRuleId?: string;

  /**
   * @schema ChimeUpdateSipRuleRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateSipRuleRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeUpdateSipRuleRequest#TargetApplications
   */
  readonly targetApplications?: ChimeSipRuleTargetApplication[];

}

/**
 * Converts an object of type 'ChimeUpdateSipRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateSipRuleRequest(obj: ChimeUpdateSipRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRuleId': obj.sipRuleId,
    'Name': obj.name,
    'Disabled': obj.disabled,
    'TargetApplications': obj.targetApplications?.map(y => toJson_ChimeSipRuleTargetApplication(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateSipRuleResponse
 */
export interface ChimeUpdateSipRuleResponse {
  /**
   * @schema ChimeUpdateSipRuleResponse#SipRule
   */
  readonly sipRule?: ChimeSipRule;

}

/**
 * Converts an object of type 'ChimeUpdateSipRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateSipRuleResponse(obj: ChimeUpdateSipRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRule': toJson_ChimeSipRule(obj.sipRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateUserRequest
 */
export interface ChimeUpdateUserRequest {
  /**
   * @schema ChimeUpdateUserRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateUserRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeUpdateUserRequest#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ChimeUpdateUserRequest#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeUpdateUserRequest#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: ChimeAlexaForBusinessMetadata;

}

/**
 * Converts an object of type 'ChimeUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateUserRequest(obj: ChimeUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
    'LicenseType': obj.licenseType,
    'UserType': obj.userType,
    'AlexaForBusinessMetadata': toJson_ChimeAlexaForBusinessMetadata(obj.alexaForBusinessMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateUserResponse
 */
export interface ChimeUpdateUserResponse {
  /**
   * @schema ChimeUpdateUserResponse#User
   */
  readonly user?: ChimeUser;

}

/**
 * Converts an object of type 'ChimeUpdateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateUserResponse(obj: ChimeUpdateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_ChimeUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateUserSettingsRequest
 */
export interface ChimeUpdateUserSettingsRequest {
  /**
   * @schema ChimeUpdateUserSettingsRequest#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUpdateUserSettingsRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeUpdateUserSettingsRequest#UserSettings
   */
  readonly userSettings?: ChimeUserSettings;

}

/**
 * Converts an object of type 'ChimeUpdateUserSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateUserSettingsRequest(obj: ChimeUpdateUserSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'UserId': obj.userId,
    'UserSettings': toJson_ChimeUserSettings(obj.userSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateVoiceConnectorRequest
 */
export interface ChimeUpdateVoiceConnectorRequest {
  /**
   * @schema ChimeUpdateVoiceConnectorRequest#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeUpdateVoiceConnectorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateVoiceConnectorRequest#RequireEncryption
   */
  readonly requireEncryption?: boolean;

}

/**
 * Converts an object of type 'ChimeUpdateVoiceConnectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateVoiceConnectorRequest(obj: ChimeUpdateVoiceConnectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Name': obj.name,
    'RequireEncryption': obj.requireEncryption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateVoiceConnectorResponse
 */
export interface ChimeUpdateVoiceConnectorResponse {
  /**
   * @schema ChimeUpdateVoiceConnectorResponse#VoiceConnector
   */
  readonly voiceConnector?: ChimeVoiceConnector;

}

/**
 * Converts an object of type 'ChimeUpdateVoiceConnectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateVoiceConnectorResponse(obj: ChimeUpdateVoiceConnectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnector': toJson_ChimeVoiceConnector(obj.voiceConnector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateVoiceConnectorGroupRequest
 */
export interface ChimeUpdateVoiceConnectorGroupRequest {
  /**
   * @schema ChimeUpdateVoiceConnectorGroupRequest#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

  /**
   * @schema ChimeUpdateVoiceConnectorGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeUpdateVoiceConnectorGroupRequest#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: ChimeVoiceConnectorItem[];

}

/**
 * Converts an object of type 'ChimeUpdateVoiceConnectorGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateVoiceConnectorGroupRequest(obj: ChimeUpdateVoiceConnectorGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroupId': obj.voiceConnectorGroupId,
    'Name': obj.name,
    'VoiceConnectorItems': obj.voiceConnectorItems?.map(y => toJson_ChimeVoiceConnectorItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateVoiceConnectorGroupResponse
 */
export interface ChimeUpdateVoiceConnectorGroupResponse {
  /**
   * @schema ChimeUpdateVoiceConnectorGroupResponse#VoiceConnectorGroup
   */
  readonly voiceConnectorGroup?: ChimeVoiceConnectorGroup;

}

/**
 * Converts an object of type 'ChimeUpdateVoiceConnectorGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateVoiceConnectorGroupResponse(obj: ChimeUpdateVoiceConnectorGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroup': toJson_ChimeVoiceConnectorGroup(obj.voiceConnectorGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePhoneNumberError
 */
export interface ChimePhoneNumberError {
  /**
   * @schema ChimePhoneNumberError#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema ChimePhoneNumberError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimePhoneNumberError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ChimePhoneNumberError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePhoneNumberError(obj: ChimePhoneNumberError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSigninDelegateGroup
 */
export interface ChimeSigninDelegateGroup {
  /**
   * @schema ChimeSigninDelegateGroup#GroupName
   */
  readonly groupName?: string;

}

/**
 * Converts an object of type 'ChimeSigninDelegateGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSigninDelegateGroup(obj: ChimeSigninDelegateGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAttendeeRequestItem
 */
export interface ChimeCreateAttendeeRequestItem {
  /**
   * @schema ChimeCreateAttendeeRequestItem#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema ChimeCreateAttendeeRequestItem#Tags
   */
  readonly tags?: ChimeTag[];

}

/**
 * Converts an object of type 'ChimeCreateAttendeeRequestItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAttendeeRequestItem(obj: ChimeCreateAttendeeRequestItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExternalUserId': obj.externalUserId,
    'Tags': obj.tags?.map(y => toJson_ChimeTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAttendee
 */
export interface ChimeAttendee {
  /**
   * @schema ChimeAttendee#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema ChimeAttendee#AttendeeId
   */
  readonly attendeeId?: string;

  /**
   * @schema ChimeAttendee#JoinToken
   */
  readonly joinToken?: string;

}

/**
 * Converts an object of type 'ChimeAttendee' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAttendee(obj: ChimeAttendee | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExternalUserId': obj.externalUserId,
    'AttendeeId': obj.attendeeId,
    'JoinToken': obj.joinToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCreateAttendeeError
 */
export interface ChimeCreateAttendeeError {
  /**
   * @schema ChimeCreateAttendeeError#ExternalUserId
   */
  readonly externalUserId?: string;

  /**
   * @schema ChimeCreateAttendeeError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeCreateAttendeeError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ChimeCreateAttendeeError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCreateAttendeeError(obj: ChimeCreateAttendeeError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExternalUserId': obj.externalUserId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchChannelMemberships
 */
export interface ChimeBatchChannelMemberships {
  /**
   * @schema ChimeBatchChannelMemberships#InvitedBy
   */
  readonly invitedBy?: ChimeIdentity;

  /**
   * @schema ChimeBatchChannelMemberships#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeBatchChannelMemberships#Members
   */
  readonly members?: ChimeIdentity[];

  /**
   * @schema ChimeBatchChannelMemberships#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeBatchChannelMemberships' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchChannelMemberships(obj: ChimeBatchChannelMemberships | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitedBy': toJson_ChimeIdentity(obj.invitedBy),
    'Type': obj.type,
    'Members': obj.members?.map(y => toJson_ChimeIdentity(y)),
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBatchCreateChannelMembershipError
 */
export interface ChimeBatchCreateChannelMembershipError {
  /**
   * @schema ChimeBatchCreateChannelMembershipError#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeBatchCreateChannelMembershipError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeBatchCreateChannelMembershipError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ChimeBatchCreateChannelMembershipError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBatchCreateChannelMembershipError(obj: ChimeBatchCreateChannelMembershipError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberArn': obj.memberArn,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMembershipItem
 */
export interface ChimeMembershipItem {
  /**
   * @schema ChimeMembershipItem#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeMembershipItem#Role
   */
  readonly role?: string;

}

/**
 * Converts an object of type 'ChimeMembershipItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMembershipItem(obj: ChimeMembershipItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
    'Role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMemberError
 */
export interface ChimeMemberError {
  /**
   * @schema ChimeMemberError#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeMemberError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeMemberError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ChimeMemberError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMemberError(obj: ChimeMemberError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUserError
 */
export interface ChimeUserError {
  /**
   * @schema ChimeUserError#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeUserError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeUserError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ChimeUserError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUserError(obj: ChimeUserError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdatePhoneNumberRequestItem
 */
export interface ChimeUpdatePhoneNumberRequestItem {
  /**
   * @schema ChimeUpdatePhoneNumberRequestItem#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequestItem#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimeUpdatePhoneNumberRequestItem#CallingName
   */
  readonly callingName?: string;

}

/**
 * Converts an object of type 'ChimeUpdatePhoneNumberRequestItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdatePhoneNumberRequestItem(obj: ChimeUpdatePhoneNumberRequestItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
    'ProductType': obj.productType,
    'CallingName': obj.callingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUpdateUserRequestItem
 */
export interface ChimeUpdateUserRequestItem {
  /**
   * @schema ChimeUpdateUserRequestItem#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeUpdateUserRequestItem#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ChimeUpdateUserRequestItem#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeUpdateUserRequestItem#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: ChimeAlexaForBusinessMetadata;

}

/**
 * Converts an object of type 'ChimeUpdateUserRequestItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUpdateUserRequestItem(obj: ChimeUpdateUserRequestItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'LicenseType': obj.licenseType,
    'UserType': obj.userType,
    'AlexaForBusinessMetadata': toJson_ChimeAlexaForBusinessMetadata(obj.alexaForBusinessMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAccount
 */
export interface ChimeAccount {
  /**
   * @schema ChimeAccount#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema ChimeAccount#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeAccount#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAccount#AccountType
   */
  readonly accountType?: string;

  /**
   * @schema ChimeAccount#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeAccount#DefaultLicense
   */
  readonly defaultLicense?: string;

  /**
   * @schema ChimeAccount#SupportedLicenses
   */
  readonly supportedLicenses?: string[];

  /**
   * @schema ChimeAccount#AccountStatus
   */
  readonly accountStatus?: string;

  /**
   * @schema ChimeAccount#SigninDelegateGroups
   */
  readonly signinDelegateGroups?: ChimeSigninDelegateGroup[];

}

/**
 * Converts an object of type 'ChimeAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAccount(obj: ChimeAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AccountId': obj.accountId,
    'Name': obj.name,
    'AccountType': obj.accountType,
    'CreatedTimestamp': obj.createdTimestamp,
    'DefaultLicense': obj.defaultLicense,
    'SupportedLicenses': obj.supportedLicenses?.map(y => y),
    'AccountStatus': obj.accountStatus,
    'SigninDelegateGroups': obj.signinDelegateGroups?.map(y => toJson_ChimeSigninDelegateGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTag
 */
export interface ChimeTag {
  /**
   * @schema ChimeTag#Key
   */
  readonly key?: string;

  /**
   * @schema ChimeTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ChimeTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTag(obj: ChimeTag | undefined): Record<string, any> | undefined {
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
 * @schema ChimeIdentity
 */
export interface ChimeIdentity {
  /**
   * @schema ChimeIdentity#Arn
   */
  readonly arn?: string;

  /**
   * @schema ChimeIdentity#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ChimeIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeIdentity(obj: ChimeIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBot
 */
export interface ChimeBot {
  /**
   * @schema ChimeBot#BotId
   */
  readonly botId?: string;

  /**
   * @schema ChimeBot#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeBot#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ChimeBot#BotType
   */
  readonly botType?: string;

  /**
   * @schema ChimeBot#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeBot#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeBot#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ChimeBot#BotEmail
   */
  readonly botEmail?: string;

  /**
   * @schema ChimeBot#SecurityToken
   */
  readonly securityToken?: string;

}

/**
 * Converts an object of type 'ChimeBot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBot(obj: ChimeBot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BotId': obj.botId,
    'UserId': obj.userId,
    'DisplayName': obj.displayName,
    'BotType': obj.botType,
    'Disabled': obj.disabled,
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
    'BotEmail': obj.botEmail,
    'SecurityToken': obj.securityToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMediaCapturePipeline
 */
export interface ChimeMediaCapturePipeline {
  /**
   * @schema ChimeMediaCapturePipeline#MediaPipelineId
   */
  readonly mediaPipelineId?: string;

  /**
   * @schema ChimeMediaCapturePipeline#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ChimeMediaCapturePipeline#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema ChimeMediaCapturePipeline#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeMediaCapturePipeline#SinkType
   */
  readonly sinkType?: string;

  /**
   * @schema ChimeMediaCapturePipeline#SinkArn
   */
  readonly sinkArn?: string;

  /**
   * @schema ChimeMediaCapturePipeline#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeMediaCapturePipeline#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeMediaCapturePipeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMediaCapturePipeline(obj: ChimeMediaCapturePipeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MediaPipelineId': obj.mediaPipelineId,
    'SourceType': obj.sourceType,
    'SourceArn': obj.sourceArn,
    'Status': obj.status,
    'SinkType': obj.sinkType,
    'SinkArn': obj.sinkArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMeetingNotificationConfiguration
 */
export interface ChimeMeetingNotificationConfiguration {
  /**
   * @schema ChimeMeetingNotificationConfiguration#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema ChimeMeetingNotificationConfiguration#SqsQueueArn
   */
  readonly sqsQueueArn?: string;

}

/**
 * Converts an object of type 'ChimeMeetingNotificationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMeetingNotificationConfiguration(obj: ChimeMeetingNotificationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnsTopicArn': obj.snsTopicArn,
    'SqsQueueArn': obj.sqsQueueArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMeeting
 */
export interface ChimeMeeting {
  /**
   * @schema ChimeMeeting#MeetingId
   */
  readonly meetingId?: string;

  /**
   * @schema ChimeMeeting#ExternalMeetingId
   */
  readonly externalMeetingId?: string;

  /**
   * @schema ChimeMeeting#MediaPlacement
   */
  readonly mediaPlacement?: ChimeMediaPlacement;

  /**
   * @schema ChimeMeeting#MediaRegion
   */
  readonly mediaRegion?: string;

}

/**
 * Converts an object of type 'ChimeMeeting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMeeting(obj: ChimeMeeting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeetingId': obj.meetingId,
    'ExternalMeetingId': obj.externalMeetingId,
    'MediaPlacement': toJson_ChimeMediaPlacement(obj.mediaPlacement),
    'MediaRegion': obj.mediaRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePhoneNumberOrder
 */
export interface ChimePhoneNumberOrder {
  /**
   * @schema ChimePhoneNumberOrder#PhoneNumberOrderId
   */
  readonly phoneNumberOrderId?: string;

  /**
   * @schema ChimePhoneNumberOrder#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimePhoneNumberOrder#Status
   */
  readonly status?: string;

  /**
   * @schema ChimePhoneNumberOrder#OrderedPhoneNumbers
   */
  readonly orderedPhoneNumbers?: ChimeOrderedPhoneNumber[];

  /**
   * @schema ChimePhoneNumberOrder#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimePhoneNumberOrder#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimePhoneNumberOrder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePhoneNumberOrder(obj: ChimePhoneNumberOrder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberOrderId': obj.phoneNumberOrderId,
    'ProductType': obj.productType,
    'Status': obj.status,
    'OrderedPhoneNumbers': obj.orderedPhoneNumbers?.map(y => toJson_ChimeOrderedPhoneNumber(y)),
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeGeoMatchParams
 */
export interface ChimeGeoMatchParams {
  /**
   * @schema ChimeGeoMatchParams#Country
   */
  readonly country?: string;

  /**
   * @schema ChimeGeoMatchParams#AreaCode
   */
  readonly areaCode?: string;

}

/**
 * Converts an object of type 'ChimeGeoMatchParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeGeoMatchParams(obj: ChimeGeoMatchParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Country': obj.country,
    'AreaCode': obj.areaCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeProxySession
 */
export interface ChimeProxySession {
  /**
   * @schema ChimeProxySession#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeProxySession#ProxySessionId
   */
  readonly proxySessionId?: string;

  /**
   * @schema ChimeProxySession#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeProxySession#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeProxySession#ExpiryMinutes
   */
  readonly expiryMinutes?: number;

  /**
   * @schema ChimeProxySession#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema ChimeProxySession#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeProxySession#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ChimeProxySession#EndedTimestamp
   */
  readonly endedTimestamp?: string;

  /**
   * @schema ChimeProxySession#Participants
   */
  readonly participants?: ChimeParticipant[];

  /**
   * @schema ChimeProxySession#NumberSelectionBehavior
   */
  readonly numberSelectionBehavior?: string;

  /**
   * @schema ChimeProxySession#GeoMatchLevel
   */
  readonly geoMatchLevel?: string;

  /**
   * @schema ChimeProxySession#GeoMatchParams
   */
  readonly geoMatchParams?: ChimeGeoMatchParams;

}

/**
 * Converts an object of type 'ChimeProxySession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeProxySession(obj: ChimeProxySession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'ProxySessionId': obj.proxySessionId,
    'Name': obj.name,
    'Status': obj.status,
    'ExpiryMinutes': obj.expiryMinutes,
    'Capabilities': obj.capabilities?.map(y => y),
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
    'EndedTimestamp': obj.endedTimestamp,
    'Participants': obj.participants?.map(y => toJson_ChimeParticipant(y)),
    'NumberSelectionBehavior': obj.numberSelectionBehavior,
    'GeoMatchLevel': obj.geoMatchLevel,
    'GeoMatchParams': toJson_ChimeGeoMatchParams(obj.geoMatchParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRoom
 */
export interface ChimeRoom {
  /**
   * @schema ChimeRoom#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeRoom#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeRoom#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeRoom#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema ChimeRoom#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeRoom#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeRoom' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRoom(obj: ChimeRoom | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomId': obj.roomId,
    'Name': obj.name,
    'AccountId': obj.accountId,
    'CreatedBy': obj.createdBy,
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRoomMembership
 */
export interface ChimeRoomMembership {
  /**
   * @schema ChimeRoomMembership#RoomId
   */
  readonly roomId?: string;

  /**
   * @schema ChimeRoomMembership#Member
   */
  readonly member?: ChimeMember;

  /**
   * @schema ChimeRoomMembership#Role
   */
  readonly role?: string;

  /**
   * @schema ChimeRoomMembership#InvitedBy
   */
  readonly invitedBy?: string;

  /**
   * @schema ChimeRoomMembership#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeRoomMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRoomMembership(obj: ChimeRoomMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomId': obj.roomId,
    'Member': toJson_ChimeMember(obj.member),
    'Role': obj.role,
    'InvitedBy': obj.invitedBy,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSipMediaApplicationEndpoint
 */
export interface ChimeSipMediaApplicationEndpoint {
  /**
   * @schema ChimeSipMediaApplicationEndpoint#LambdaArn
   */
  readonly lambdaArn?: string;

}

/**
 * Converts an object of type 'ChimeSipMediaApplicationEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSipMediaApplicationEndpoint(obj: ChimeSipMediaApplicationEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LambdaArn': obj.lambdaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSipMediaApplication
 */
export interface ChimeSipMediaApplication {
  /**
   * @schema ChimeSipMediaApplication#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeSipMediaApplication#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeSipMediaApplication#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSipMediaApplication#Endpoints
   */
  readonly endpoints?: ChimeSipMediaApplicationEndpoint[];

  /**
   * @schema ChimeSipMediaApplication#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSipMediaApplication#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSipMediaApplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSipMediaApplication(obj: ChimeSipMediaApplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
    'AwsRegion': obj.awsRegion,
    'Name': obj.name,
    'Endpoints': obj.endpoints?.map(y => toJson_ChimeSipMediaApplicationEndpoint(y)),
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSipMediaApplicationCall
 */
export interface ChimeSipMediaApplicationCall {
  /**
   * @schema ChimeSipMediaApplicationCall#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * Converts an object of type 'ChimeSipMediaApplicationCall' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSipMediaApplicationCall(obj: ChimeSipMediaApplicationCall | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSipRuleTargetApplication
 */
export interface ChimeSipRuleTargetApplication {
  /**
   * @schema ChimeSipRuleTargetApplication#SipMediaApplicationId
   */
  readonly sipMediaApplicationId?: string;

  /**
   * @schema ChimeSipRuleTargetApplication#Priority
   */
  readonly priority?: number;

  /**
   * @schema ChimeSipRuleTargetApplication#AwsRegion
   */
  readonly awsRegion?: string;

}

/**
 * Converts an object of type 'ChimeSipRuleTargetApplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSipRuleTargetApplication(obj: ChimeSipRuleTargetApplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipMediaApplicationId': obj.sipMediaApplicationId,
    'Priority': obj.priority,
    'AwsRegion': obj.awsRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSipRule
 */
export interface ChimeSipRule {
  /**
   * @schema ChimeSipRule#SipRuleId
   */
  readonly sipRuleId?: string;

  /**
   * @schema ChimeSipRule#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSipRule#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeSipRule#TriggerType
   */
  readonly triggerType?: string;

  /**
   * @schema ChimeSipRule#TriggerValue
   */
  readonly triggerValue?: string;

  /**
   * @schema ChimeSipRule#TargetApplications
   */
  readonly targetApplications?: ChimeSipRuleTargetApplication[];

  /**
   * @schema ChimeSipRule#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSipRule#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSipRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSipRule(obj: ChimeSipRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SipRuleId': obj.sipRuleId,
    'Name': obj.name,
    'Disabled': obj.disabled,
    'TriggerType': obj.triggerType,
    'TriggerValue': obj.triggerValue,
    'TargetApplications': obj.targetApplications?.map(y => toJson_ChimeSipRuleTargetApplication(y)),
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUser
 */
export interface ChimeUser {
  /**
   * @schema ChimeUser#UserId
   */
  readonly userId?: string;

  /**
   * @schema ChimeUser#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ChimeUser#PrimaryEmail
   */
  readonly primaryEmail?: string;

  /**
   * @schema ChimeUser#PrimaryProvisionedNumber
   */
  readonly primaryProvisionedNumber?: string;

  /**
   * @schema ChimeUser#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ChimeUser#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ChimeUser#UserType
   */
  readonly userType?: string;

  /**
   * @schema ChimeUser#UserRegistrationStatus
   */
  readonly userRegistrationStatus?: string;

  /**
   * @schema ChimeUser#UserInvitationStatus
   */
  readonly userInvitationStatus?: string;

  /**
   * @schema ChimeUser#RegisteredOn
   */
  readonly registeredOn?: string;

  /**
   * @schema ChimeUser#InvitedOn
   */
  readonly invitedOn?: string;

  /**
   * @schema ChimeUser#AlexaForBusinessMetadata
   */
  readonly alexaForBusinessMetadata?: ChimeAlexaForBusinessMetadata;

  /**
   * @schema ChimeUser#PersonalPIN
   */
  readonly personalPin?: string;

}

/**
 * Converts an object of type 'ChimeUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUser(obj: ChimeUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'AccountId': obj.accountId,
    'PrimaryEmail': obj.primaryEmail,
    'PrimaryProvisionedNumber': obj.primaryProvisionedNumber,
    'DisplayName': obj.displayName,
    'LicenseType': obj.licenseType,
    'UserType': obj.userType,
    'UserRegistrationStatus': obj.userRegistrationStatus,
    'UserInvitationStatus': obj.userInvitationStatus,
    'RegisteredOn': obj.registeredOn,
    'InvitedOn': obj.invitedOn,
    'AlexaForBusinessMetadata': toJson_ChimeAlexaForBusinessMetadata(obj.alexaForBusinessMetadata),
    'PersonalPIN': obj.personalPin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeVoiceConnector
 */
export interface ChimeVoiceConnector {
  /**
   * @schema ChimeVoiceConnector#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeVoiceConnector#AwsRegion
   */
  readonly awsRegion?: string;

  /**
   * @schema ChimeVoiceConnector#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeVoiceConnector#OutboundHostName
   */
  readonly outboundHostName?: string;

  /**
   * @schema ChimeVoiceConnector#RequireEncryption
   */
  readonly requireEncryption?: boolean;

  /**
   * @schema ChimeVoiceConnector#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeVoiceConnector#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeVoiceConnector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeVoiceConnector(obj: ChimeVoiceConnector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'AwsRegion': obj.awsRegion,
    'Name': obj.name,
    'OutboundHostName': obj.outboundHostName,
    'RequireEncryption': obj.requireEncryption,
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeVoiceConnectorItem
 */
export interface ChimeVoiceConnectorItem {
  /**
   * @schema ChimeVoiceConnectorItem#VoiceConnectorId
   */
  readonly voiceConnectorId?: string;

  /**
   * @schema ChimeVoiceConnectorItem#Priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'ChimeVoiceConnectorItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeVoiceConnectorItem(obj: ChimeVoiceConnectorItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorId': obj.voiceConnectorId,
    'Priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeVoiceConnectorGroup
 */
export interface ChimeVoiceConnectorGroup {
  /**
   * @schema ChimeVoiceConnectorGroup#VoiceConnectorGroupId
   */
  readonly voiceConnectorGroupId?: string;

  /**
   * @schema ChimeVoiceConnectorGroup#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeVoiceConnectorGroup#VoiceConnectorItems
   */
  readonly voiceConnectorItems?: ChimeVoiceConnectorItem[];

  /**
   * @schema ChimeVoiceConnectorGroup#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeVoiceConnectorGroup#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeVoiceConnectorGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeVoiceConnectorGroup(obj: ChimeVoiceConnectorGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceConnectorGroupId': obj.voiceConnectorGroupId,
    'Name': obj.name,
    'VoiceConnectorItems': obj.voiceConnectorItems?.map(y => toJson_ChimeVoiceConnectorItem(y)),
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstance
 */
export interface ChimeAppInstance {
  /**
   * @schema ChimeAppInstance#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeAppInstance#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstance#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeAppInstance#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeAppInstance#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeAppInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstance(obj: ChimeAppInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceAdmin
 */
export interface ChimeAppInstanceAdmin {
  /**
   * @schema ChimeAppInstanceAdmin#Admin
   */
  readonly admin?: ChimeIdentity;

  /**
   * @schema ChimeAppInstanceAdmin#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeAppInstanceAdmin#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeAppInstanceAdmin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceAdmin(obj: ChimeAppInstanceAdmin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Admin': toJson_ChimeIdentity(obj.admin),
    'AppInstanceArn': obj.appInstanceArn,
    'CreatedTimestamp': obj.createdTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceUser
 */
export interface ChimeAppInstanceUser {
  /**
   * @schema ChimeAppInstanceUser#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeAppInstanceUser#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstanceUser#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeAppInstanceUser#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeAppInstanceUser#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeAppInstanceUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceUser(obj: ChimeAppInstanceUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'Name': obj.name,
    'CreatedTimestamp': obj.createdTimestamp,
    'Metadata': obj.metadata,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannel
 */
export interface ChimeChannel {
  /**
   * @schema ChimeChannel#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeChannel#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannel#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeChannel#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeChannel#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannel#CreatedBy
   */
  readonly createdBy?: ChimeIdentity;

  /**
   * @schema ChimeChannel#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannel#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

  /**
   * @schema ChimeChannel#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannel(obj: ChimeChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChannelArn': obj.channelArn,
    'Mode': obj.mode,
    'Privacy': obj.privacy,
    'Metadata': obj.metadata,
    'CreatedBy': toJson_ChimeIdentity(obj.createdBy),
    'CreatedTimestamp': obj.createdTimestamp,
    'LastMessageTimestamp': obj.lastMessageTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelBan
 */
export interface ChimeChannelBan {
  /**
   * @schema ChimeChannelBan#Member
   */
  readonly member?: ChimeIdentity;

  /**
   * @schema ChimeChannelBan#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelBan#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelBan#CreatedBy
   */
  readonly createdBy?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeChannelBan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelBan(obj: ChimeChannelBan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ChimeIdentity(obj.member),
    'ChannelArn': obj.channelArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'CreatedBy': toJson_ChimeIdentity(obj.createdBy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelMembership
 */
export interface ChimeChannelMembership {
  /**
   * @schema ChimeChannelMembership#InvitedBy
   */
  readonly invitedBy?: ChimeIdentity;

  /**
   * @schema ChimeChannelMembership#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeChannelMembership#Member
   */
  readonly member?: ChimeIdentity;

  /**
   * @schema ChimeChannelMembership#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelMembership#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelMembership#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeChannelMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelMembership(obj: ChimeChannelMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitedBy': toJson_ChimeIdentity(obj.invitedBy),
    'Type': obj.type,
    'Member': toJson_ChimeIdentity(obj.member),
    'ChannelArn': obj.channelArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelMembershipForAppInstanceUserSummary
 */
export interface ChimeChannelMembershipForAppInstanceUserSummary {
  /**
   * @schema ChimeChannelMembershipForAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChimeChannelSummary;

  /**
   * @schema ChimeChannelMembershipForAppInstanceUserSummary#AppInstanceUserMembershipSummary
   */
  readonly appInstanceUserMembershipSummary?: ChimeAppInstanceUserMembershipSummary;

}

/**
 * Converts an object of type 'ChimeChannelMembershipForAppInstanceUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelMembershipForAppInstanceUserSummary(obj: ChimeChannelMembershipForAppInstanceUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelSummary': toJson_ChimeChannelSummary(obj.channelSummary),
    'AppInstanceUserMembershipSummary': toJson_ChimeAppInstanceUserMembershipSummary(obj.appInstanceUserMembershipSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelModeratedByAppInstanceUserSummary
 */
export interface ChimeChannelModeratedByAppInstanceUserSummary {
  /**
   * @schema ChimeChannelModeratedByAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChimeChannelSummary;

}

/**
 * Converts an object of type 'ChimeChannelModeratedByAppInstanceUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelModeratedByAppInstanceUserSummary(obj: ChimeChannelModeratedByAppInstanceUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelSummary': toJson_ChimeChannelSummary(obj.channelSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelModerator
 */
export interface ChimeChannelModerator {
  /**
   * @schema ChimeChannelModerator#Moderator
   */
  readonly moderator?: ChimeIdentity;

  /**
   * @schema ChimeChannelModerator#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelModerator#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelModerator#CreatedBy
   */
  readonly createdBy?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeChannelModerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelModerator(obj: ChimeChannelModerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Moderator': toJson_ChimeIdentity(obj.moderator),
    'ChannelArn': obj.channelArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'CreatedBy': toJson_ChimeIdentity(obj.createdBy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAccountSettings
 */
export interface ChimeAccountSettings {
  /**
   * @schema ChimeAccountSettings#DisableRemoteControl
   */
  readonly disableRemoteControl?: boolean;

  /**
   * @schema ChimeAccountSettings#EnableDialOut
   */
  readonly enableDialOut?: boolean;

}

/**
 * Converts an object of type 'ChimeAccountSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAccountSettings(obj: ChimeAccountSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisableRemoteControl': obj.disableRemoteControl,
    'EnableDialOut': obj.enableDialOut,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceRetentionSettings
 */
export interface ChimeAppInstanceRetentionSettings {
  /**
   * @schema ChimeAppInstanceRetentionSettings#ChannelRetentionSettings
   */
  readonly channelRetentionSettings?: ChimeChannelRetentionSettings;

}

/**
 * Converts an object of type 'ChimeAppInstanceRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceRetentionSettings(obj: ChimeAppInstanceRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelRetentionSettings': toJson_ChimeChannelRetentionSettings(obj.channelRetentionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceStreamingConfiguration
 */
export interface ChimeAppInstanceStreamingConfiguration {
  /**
   * @schema ChimeAppInstanceStreamingConfiguration#AppInstanceDataType
   */
  readonly appInstanceDataType?: string;

  /**
   * @schema ChimeAppInstanceStreamingConfiguration#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ChimeAppInstanceStreamingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceStreamingConfiguration(obj: ChimeAppInstanceStreamingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceDataType': obj.appInstanceDataType,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelMessage
 */
export interface ChimeChannelMessage {
  /**
   * @schema ChimeChannelMessage#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelMessage#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeChannelMessage#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeChannelMessage#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannelMessage#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeChannelMessage#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelMessage#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChimeChannelMessage#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeChannelMessage#Sender
   */
  readonly sender?: ChimeIdentity;

  /**
   * @schema ChimeChannelMessage#Redacted
   */
  readonly redacted?: boolean;

  /**
   * @schema ChimeChannelMessage#Persistence
   */
  readonly persistence?: string;

}

/**
 * Converts an object of type 'ChimeChannelMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelMessage(obj: ChimeChannelMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'MessageId': obj.messageId,
    'Content': obj.content,
    'Metadata': obj.metadata,
    'Type': obj.type,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastEditedTimestamp': obj.lastEditedTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'Sender': toJson_ChimeIdentity(obj.sender),
    'Redacted': obj.redacted,
    'Persistence': obj.persistence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeEventsConfiguration
 */
export interface ChimeEventsConfiguration {
  /**
   * @schema ChimeEventsConfiguration#BotId
   */
  readonly botId?: string;

  /**
   * @schema ChimeEventsConfiguration#OutboundEventsHTTPSEndpoint
   */
  readonly outboundEventsHttpsEndpoint?: string;

  /**
   * @schema ChimeEventsConfiguration#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * Converts an object of type 'ChimeEventsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeEventsConfiguration(obj: ChimeEventsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BotId': obj.botId,
    'OutboundEventsHTTPSEndpoint': obj.outboundEventsHttpsEndpoint,
    'LambdaFunctionArn': obj.lambdaFunctionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeBusinessCallingSettings
 */
export interface ChimeBusinessCallingSettings {
  /**
   * @schema ChimeBusinessCallingSettings#CdrBucket
   */
  readonly cdrBucket?: string;

}

/**
 * Converts an object of type 'ChimeBusinessCallingSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeBusinessCallingSettings(obj: ChimeBusinessCallingSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CdrBucket': obj.cdrBucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeVoiceConnectorSettings
 */
export interface ChimeVoiceConnectorSettings {
  /**
   * @schema ChimeVoiceConnectorSettings#CdrBucket
   */
  readonly cdrBucket?: string;

}

/**
 * Converts an object of type 'ChimeVoiceConnectorSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeVoiceConnectorSettings(obj: ChimeVoiceConnectorSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CdrBucket': obj.cdrBucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMessagingSessionEndpoint
 */
export interface ChimeMessagingSessionEndpoint {
  /**
   * @schema ChimeMessagingSessionEndpoint#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'ChimeMessagingSessionEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMessagingSessionEndpoint(obj: ChimeMessagingSessionEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePhoneNumber
 */
export interface ChimePhoneNumber {
  /**
   * @schema ChimePhoneNumber#PhoneNumberId
   */
  readonly phoneNumberId?: string;

  /**
   * @schema ChimePhoneNumber#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

  /**
   * @schema ChimePhoneNumber#Country
   */
  readonly country?: string;

  /**
   * @schema ChimePhoneNumber#Type
   */
  readonly type?: string;

  /**
   * @schema ChimePhoneNumber#ProductType
   */
  readonly productType?: string;

  /**
   * @schema ChimePhoneNumber#Status
   */
  readonly status?: string;

  /**
   * @schema ChimePhoneNumber#Capabilities
   */
  readonly capabilities?: ChimePhoneNumberCapabilities;

  /**
   * @schema ChimePhoneNumber#Associations
   */
  readonly associations?: ChimePhoneNumberAssociation[];

  /**
   * @schema ChimePhoneNumber#CallingName
   */
  readonly callingName?: string;

  /**
   * @schema ChimePhoneNumber#CallingNameStatus
   */
  readonly callingNameStatus?: string;

  /**
   * @schema ChimePhoneNumber#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimePhoneNumber#UpdatedTimestamp
   */
  readonly updatedTimestamp?: string;

  /**
   * @schema ChimePhoneNumber#DeletionTimestamp
   */
  readonly deletionTimestamp?: string;

}

/**
 * Converts an object of type 'ChimePhoneNumber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePhoneNumber(obj: ChimePhoneNumber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberId': obj.phoneNumberId,
    'E164PhoneNumber': obj.e164PhoneNumber,
    'Country': obj.country,
    'Type': obj.type,
    'ProductType': obj.productType,
    'Status': obj.status,
    'Capabilities': toJson_ChimePhoneNumberCapabilities(obj.capabilities),
    'Associations': obj.associations?.map(y => toJson_ChimePhoneNumberAssociation(y)),
    'CallingName': obj.callingName,
    'CallingNameStatus': obj.callingNameStatus,
    'CreatedTimestamp': obj.createdTimestamp,
    'UpdatedTimestamp': obj.updatedTimestamp,
    'DeletionTimestamp': obj.deletionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRetentionSettings
 */
export interface ChimeRetentionSettings {
  /**
   * @schema ChimeRetentionSettings#RoomRetentionSettings
   */
  readonly roomRetentionSettings?: ChimeRoomRetentionSettings;

  /**
   * @schema ChimeRetentionSettings#ConversationRetentionSettings
   */
  readonly conversationRetentionSettings?: ChimeConversationRetentionSettings;

}

/**
 * Converts an object of type 'ChimeRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRetentionSettings(obj: ChimeRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoomRetentionSettings': toJson_ChimeRoomRetentionSettings(obj.roomRetentionSettings),
    'ConversationRetentionSettings': toJson_ChimeConversationRetentionSettings(obj.conversationRetentionSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSipMediaApplicationLoggingConfiguration
 */
export interface ChimeSipMediaApplicationLoggingConfiguration {
  /**
   * @schema ChimeSipMediaApplicationLoggingConfiguration#EnableSipMediaApplicationMessageLogs
   */
  readonly enableSipMediaApplicationMessageLogs?: boolean;

}

/**
 * Converts an object of type 'ChimeSipMediaApplicationLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSipMediaApplicationLoggingConfiguration(obj: ChimeSipMediaApplicationLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableSipMediaApplicationMessageLogs': obj.enableSipMediaApplicationMessageLogs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeUserSettings
 */
export interface ChimeUserSettings {
  /**
   * @schema ChimeUserSettings#Telephony
   */
  readonly telephony?: ChimeTelephonySettings;

}

/**
 * Converts an object of type 'ChimeUserSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeUserSettings(obj: ChimeUserSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Telephony': toJson_ChimeTelephonySettings(obj.telephony),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeEmergencyCallingConfiguration
 */
export interface ChimeEmergencyCallingConfiguration {
  /**
   * @schema ChimeEmergencyCallingConfiguration#DNIS
   */
  readonly dnis?: ChimeDnisEmergencyCallingConfiguration[];

}

/**
 * Converts an object of type 'ChimeEmergencyCallingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeEmergencyCallingConfiguration(obj: ChimeEmergencyCallingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DNIS': obj.dnis?.map(y => toJson_ChimeDnisEmergencyCallingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeLoggingConfiguration
 */
export interface ChimeLoggingConfiguration {
  /**
   * @schema ChimeLoggingConfiguration#EnableSIPLogs
   */
  readonly enableSipLogs?: boolean;

}

/**
 * Converts an object of type 'ChimeLoggingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeLoggingConfiguration(obj: ChimeLoggingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableSIPLogs': obj.enableSipLogs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeOrigination
 */
export interface ChimeOrigination {
  /**
   * @schema ChimeOrigination#Routes
   */
  readonly routes?: ChimeOriginationRoute[];

  /**
   * @schema ChimeOrigination#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * Converts an object of type 'ChimeOrigination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeOrigination(obj: ChimeOrigination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Routes': obj.routes?.map(y => toJson_ChimeOriginationRoute(y)),
    'Disabled': obj.disabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeProxy
 */
export interface ChimeProxy {
  /**
   * @schema ChimeProxy#DefaultSessionExpiryMinutes
   */
  readonly defaultSessionExpiryMinutes?: number;

  /**
   * @schema ChimeProxy#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeProxy#FallBackPhoneNumber
   */
  readonly fallBackPhoneNumber?: string;

  /**
   * @schema ChimeProxy#PhoneNumberCountries
   */
  readonly phoneNumberCountries?: string[];

}

/**
 * Converts an object of type 'ChimeProxy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeProxy(obj: ChimeProxy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultSessionExpiryMinutes': obj.defaultSessionExpiryMinutes,
    'Disabled': obj.disabled,
    'FallBackPhoneNumber': obj.fallBackPhoneNumber,
    'PhoneNumberCountries': obj.phoneNumberCountries?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeStreamingConfiguration
 */
export interface ChimeStreamingConfiguration {
  /**
   * @schema ChimeStreamingConfiguration#DataRetentionInHours
   */
  readonly dataRetentionInHours?: number;

  /**
   * @schema ChimeStreamingConfiguration#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema ChimeStreamingConfiguration#StreamingNotificationTargets
   */
  readonly streamingNotificationTargets?: ChimeStreamingNotificationTarget[];

}

/**
 * Converts an object of type 'ChimeStreamingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeStreamingConfiguration(obj: ChimeStreamingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataRetentionInHours': obj.dataRetentionInHours,
    'Disabled': obj.disabled,
    'StreamingNotificationTargets': obj.streamingNotificationTargets?.map(y => toJson_ChimeStreamingNotificationTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTermination
 */
export interface ChimeTermination {
  /**
   * @schema ChimeTermination#CpsLimit
   */
  readonly cpsLimit?: number;

  /**
   * @schema ChimeTermination#DefaultPhoneNumber
   */
  readonly defaultPhoneNumber?: string;

  /**
   * @schema ChimeTermination#CallingRegions
   */
  readonly callingRegions?: string[];

  /**
   * @schema ChimeTermination#CidrAllowedList
   */
  readonly cidrAllowedList?: string[];

  /**
   * @schema ChimeTermination#Disabled
   */
  readonly disabled?: boolean;

}

/**
 * Converts an object of type 'ChimeTermination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTermination(obj: ChimeTermination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CpsLimit': obj.cpsLimit,
    'DefaultPhoneNumber': obj.defaultPhoneNumber,
    'CallingRegions': obj.callingRegions?.map(y => y),
    'CidrAllowedList': obj.cidrAllowedList?.map(y => y),
    'Disabled': obj.disabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTerminationHealth
 */
export interface ChimeTerminationHealth {
  /**
   * @schema ChimeTerminationHealth#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema ChimeTerminationHealth#Source
   */
  readonly source?: string;

}

/**
 * Converts an object of type 'ChimeTerminationHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTerminationHealth(obj: ChimeTerminationHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Timestamp': obj.timestamp,
    'Source': obj.source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeInvite
 */
export interface ChimeInvite {
  /**
   * @schema ChimeInvite#InviteId
   */
  readonly inviteId?: string;

  /**
   * @schema ChimeInvite#Status
   */
  readonly status?: string;

  /**
   * @schema ChimeInvite#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema ChimeInvite#EmailStatus
   */
  readonly emailStatus?: string;

}

/**
 * Converts an object of type 'ChimeInvite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeInvite(obj: ChimeInvite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InviteId': obj.inviteId,
    'Status': obj.status,
    'EmailAddress': obj.emailAddress,
    'EmailStatus': obj.emailStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceAdminSummary
 */
export interface ChimeAppInstanceAdminSummary {
  /**
   * @schema ChimeAppInstanceAdminSummary#Admin
   */
  readonly admin?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeAppInstanceAdminSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceAdminSummary(obj: ChimeAppInstanceAdminSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Admin': toJson_ChimeIdentity(obj.admin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceUserSummary
 */
export interface ChimeAppInstanceUserSummary {
  /**
   * @schema ChimeAppInstanceUserSummary#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeAppInstanceUserSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstanceUserSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeAppInstanceUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceUserSummary(obj: ChimeAppInstanceUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceUserArn': obj.appInstanceUserArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceSummary
 */
export interface ChimeAppInstanceSummary {
  /**
   * @schema ChimeAppInstanceSummary#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeAppInstanceSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeAppInstanceSummary#Metadata
   */
  readonly metadata?: string;

}

/**
 * Converts an object of type 'ChimeAppInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceSummary(obj: ChimeAppInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelBanSummary
 */
export interface ChimeChannelBanSummary {
  /**
   * @schema ChimeChannelBanSummary#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeChannelBanSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelBanSummary(obj: ChimeChannelBanSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ChimeIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelMembershipSummary
 */
export interface ChimeChannelMembershipSummary {
  /**
   * @schema ChimeChannelMembershipSummary#Member
   */
  readonly member?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeChannelMembershipSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelMembershipSummary(obj: ChimeChannelMembershipSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ChimeIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelMessageSummary
 */
export interface ChimeChannelMessageSummary {
  /**
   * @schema ChimeChannelMessageSummary#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeChannelMessageSummary#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeChannelMessageSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannelMessageSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeChannelMessageSummary#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeChannelMessageSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeChannelMessageSummary#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChimeChannelMessageSummary#Sender
   */
  readonly sender?: ChimeIdentity;

  /**
   * @schema ChimeChannelMessageSummary#Redacted
   */
  readonly redacted?: boolean;

}

/**
 * Converts an object of type 'ChimeChannelMessageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelMessageSummary(obj: ChimeChannelMessageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
    'Content': obj.content,
    'Metadata': obj.metadata,
    'Type': obj.type,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LastEditedTimestamp': obj.lastEditedTimestamp,
    'Sender': toJson_ChimeIdentity(obj.sender),
    'Redacted': obj.redacted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelModeratorSummary
 */
export interface ChimeChannelModeratorSummary {
  /**
   * @schema ChimeChannelModeratorSummary#Moderator
   */
  readonly moderator?: ChimeIdentity;

}

/**
 * Converts an object of type 'ChimeChannelModeratorSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelModeratorSummary(obj: ChimeChannelModeratorSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Moderator': toJson_ChimeIdentity(obj.moderator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelSummary
 */
export interface ChimeChannelSummary {
  /**
   * @schema ChimeChannelSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeChannelSummary#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeChannelSummary#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeChannelSummary#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeChannelSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeChannelSummary#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeChannelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelSummary(obj: ChimeChannelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChannelArn': obj.channelArn,
    'Mode': obj.mode,
    'Privacy': obj.privacy,
    'Metadata': obj.metadata,
    'LastMessageTimestamp': obj.lastMessageTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePhoneNumberCountry
 */
export interface ChimePhoneNumberCountry {
  /**
   * @schema ChimePhoneNumberCountry#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema ChimePhoneNumberCountry#SupportedPhoneNumberTypes
   */
  readonly supportedPhoneNumberTypes?: string[];

}

/**
 * Converts an object of type 'ChimePhoneNumberCountry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePhoneNumberCountry(obj: ChimePhoneNumberCountry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountryCode': obj.countryCode,
    'SupportedPhoneNumberTypes': obj.supportedPhoneNumberTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeCredential
 */
export interface ChimeCredential {
  /**
   * @schema ChimeCredential#Username
   */
  readonly username?: string;

  /**
   * @schema ChimeCredential#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'ChimeCredential' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeCredential(obj: ChimeCredential | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTranscriptionConfiguration
 */
export interface ChimeTranscriptionConfiguration {
  /**
   * @schema ChimeTranscriptionConfiguration#EngineTranscribeSettings
   */
  readonly engineTranscribeSettings?: ChimeEngineTranscribeSettings;

  /**
   * @schema ChimeTranscriptionConfiguration#EngineTranscribeMedicalSettings
   */
  readonly engineTranscribeMedicalSettings?: ChimeEngineTranscribeMedicalSettings;

}

/**
 * Converts an object of type 'ChimeTranscriptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTranscriptionConfiguration(obj: ChimeTranscriptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EngineTranscribeSettings': toJson_ChimeEngineTranscribeSettings(obj.engineTranscribeSettings),
    'EngineTranscribeMedicalSettings': toJson_ChimeEngineTranscribeMedicalSettings(obj.engineTranscribeMedicalSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAlexaForBusinessMetadata
 */
export interface ChimeAlexaForBusinessMetadata {
  /**
   * @schema ChimeAlexaForBusinessMetadata#IsAlexaForBusinessEnabled
   */
  readonly isAlexaForBusinessEnabled?: boolean;

  /**
   * @schema ChimeAlexaForBusinessMetadata#AlexaForBusinessRoomArn
   */
  readonly alexaForBusinessRoomArn?: string;

}

/**
 * Converts an object of type 'ChimeAlexaForBusinessMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAlexaForBusinessMetadata(obj: ChimeAlexaForBusinessMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsAlexaForBusinessEnabled': obj.isAlexaForBusinessEnabled,
    'AlexaForBusinessRoomArn': obj.alexaForBusinessRoomArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMediaPlacement
 */
export interface ChimeMediaPlacement {
  /**
   * @schema ChimeMediaPlacement#AudioHostUrl
   */
  readonly audioHostUrl?: string;

  /**
   * @schema ChimeMediaPlacement#AudioFallbackUrl
   */
  readonly audioFallbackUrl?: string;

  /**
   * @schema ChimeMediaPlacement#ScreenDataUrl
   */
  readonly screenDataUrl?: string;

  /**
   * @schema ChimeMediaPlacement#ScreenSharingUrl
   */
  readonly screenSharingUrl?: string;

  /**
   * @schema ChimeMediaPlacement#ScreenViewingUrl
   */
  readonly screenViewingUrl?: string;

  /**
   * @schema ChimeMediaPlacement#SignalingUrl
   */
  readonly signalingUrl?: string;

  /**
   * @schema ChimeMediaPlacement#TurnControlUrl
   */
  readonly turnControlUrl?: string;

  /**
   * @schema ChimeMediaPlacement#EventIngestionUrl
   */
  readonly eventIngestionUrl?: string;

}

/**
 * Converts an object of type 'ChimeMediaPlacement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMediaPlacement(obj: ChimeMediaPlacement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioHostUrl': obj.audioHostUrl,
    'AudioFallbackUrl': obj.audioFallbackUrl,
    'ScreenDataUrl': obj.screenDataUrl,
    'ScreenSharingUrl': obj.screenSharingUrl,
    'ScreenViewingUrl': obj.screenViewingUrl,
    'SignalingUrl': obj.signalingUrl,
    'TurnControlUrl': obj.turnControlUrl,
    'EventIngestionUrl': obj.eventIngestionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeOrderedPhoneNumber
 */
export interface ChimeOrderedPhoneNumber {
  /**
   * @schema ChimeOrderedPhoneNumber#E164PhoneNumber
   */
  readonly e164PhoneNumber?: string;

  /**
   * @schema ChimeOrderedPhoneNumber#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ChimeOrderedPhoneNumber' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeOrderedPhoneNumber(obj: ChimeOrderedPhoneNumber | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'E164PhoneNumber': obj.e164PhoneNumber,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeParticipant
 */
export interface ChimeParticipant {
  /**
   * @schema ChimeParticipant#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ChimeParticipant#ProxyPhoneNumber
   */
  readonly proxyPhoneNumber?: string;

}

/**
 * Converts an object of type 'ChimeParticipant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeParticipant(obj: ChimeParticipant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': obj.phoneNumber,
    'ProxyPhoneNumber': obj.proxyPhoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeMember
 */
export interface ChimeMember {
  /**
   * @schema ChimeMember#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ChimeMember#MemberType
   */
  readonly memberType?: string;

  /**
   * @schema ChimeMember#Email
   */
  readonly email?: string;

  /**
   * @schema ChimeMember#FullName
   */
  readonly fullName?: string;

  /**
   * @schema ChimeMember#AccountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'ChimeMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeMember(obj: ChimeMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
    'MemberType': obj.memberType,
    'Email': obj.email,
    'FullName': obj.fullName,
    'AccountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeAppInstanceUserMembershipSummary
 */
export interface ChimeAppInstanceUserMembershipSummary {
  /**
   * @schema ChimeAppInstanceUserMembershipSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeAppInstanceUserMembershipSummary#ReadMarkerTimestamp
   */
  readonly readMarkerTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeAppInstanceUserMembershipSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeAppInstanceUserMembershipSummary(obj: ChimeAppInstanceUserMembershipSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ReadMarkerTimestamp': obj.readMarkerTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeChannelRetentionSettings
 */
export interface ChimeChannelRetentionSettings {
  /**
   * @schema ChimeChannelRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * Converts an object of type 'ChimeChannelRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeChannelRetentionSettings(obj: ChimeChannelRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetentionDays': obj.retentionDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePhoneNumberCapabilities
 */
export interface ChimePhoneNumberCapabilities {
  /**
   * @schema ChimePhoneNumberCapabilities#InboundCall
   */
  readonly inboundCall?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#OutboundCall
   */
  readonly outboundCall?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#InboundSMS
   */
  readonly inboundSms?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#OutboundSMS
   */
  readonly outboundSms?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#InboundMMS
   */
  readonly inboundMms?: boolean;

  /**
   * @schema ChimePhoneNumberCapabilities#OutboundMMS
   */
  readonly outboundMms?: boolean;

}

/**
 * Converts an object of type 'ChimePhoneNumberCapabilities' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePhoneNumberCapabilities(obj: ChimePhoneNumberCapabilities | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InboundCall': obj.inboundCall,
    'OutboundCall': obj.outboundCall,
    'InboundSMS': obj.inboundSms,
    'OutboundSMS': obj.outboundSms,
    'InboundMMS': obj.inboundMms,
    'OutboundMMS': obj.outboundMms,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimePhoneNumberAssociation
 */
export interface ChimePhoneNumberAssociation {
  /**
   * @schema ChimePhoneNumberAssociation#Value
   */
  readonly value?: string;

  /**
   * @schema ChimePhoneNumberAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema ChimePhoneNumberAssociation#AssociatedTimestamp
   */
  readonly associatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimePhoneNumberAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimePhoneNumberAssociation(obj: ChimePhoneNumberAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Name': obj.name,
    'AssociatedTimestamp': obj.associatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeRoomRetentionSettings
 */
export interface ChimeRoomRetentionSettings {
  /**
   * @schema ChimeRoomRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * Converts an object of type 'ChimeRoomRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeRoomRetentionSettings(obj: ChimeRoomRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetentionDays': obj.retentionDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeConversationRetentionSettings
 */
export interface ChimeConversationRetentionSettings {
  /**
   * @schema ChimeConversationRetentionSettings#RetentionDays
   */
  readonly retentionDays?: number;

}

/**
 * Converts an object of type 'ChimeConversationRetentionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeConversationRetentionSettings(obj: ChimeConversationRetentionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RetentionDays': obj.retentionDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeTelephonySettings
 */
export interface ChimeTelephonySettings {
  /**
   * @schema ChimeTelephonySettings#InboundCalling
   */
  readonly inboundCalling?: boolean;

  /**
   * @schema ChimeTelephonySettings#OutboundCalling
   */
  readonly outboundCalling?: boolean;

  /**
   * @schema ChimeTelephonySettings#SMS
   */
  readonly sms?: boolean;

}

/**
 * Converts an object of type 'ChimeTelephonySettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeTelephonySettings(obj: ChimeTelephonySettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InboundCalling': obj.inboundCalling,
    'OutboundCalling': obj.outboundCalling,
    'SMS': obj.sms,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeDnisEmergencyCallingConfiguration
 */
export interface ChimeDnisEmergencyCallingConfiguration {
  /**
   * @schema ChimeDnisEmergencyCallingConfiguration#EmergencyPhoneNumber
   */
  readonly emergencyPhoneNumber?: string;

  /**
   * @schema ChimeDnisEmergencyCallingConfiguration#TestPhoneNumber
   */
  readonly testPhoneNumber?: string;

  /**
   * @schema ChimeDnisEmergencyCallingConfiguration#CallingCountry
   */
  readonly callingCountry?: string;

}

/**
 * Converts an object of type 'ChimeDnisEmergencyCallingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeDnisEmergencyCallingConfiguration(obj: ChimeDnisEmergencyCallingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmergencyPhoneNumber': obj.emergencyPhoneNumber,
    'TestPhoneNumber': obj.testPhoneNumber,
    'CallingCountry': obj.callingCountry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeOriginationRoute
 */
export interface ChimeOriginationRoute {
  /**
   * @schema ChimeOriginationRoute#Host
   */
  readonly host?: string;

  /**
   * @schema ChimeOriginationRoute#Port
   */
  readonly port?: number;

  /**
   * @schema ChimeOriginationRoute#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema ChimeOriginationRoute#Priority
   */
  readonly priority?: number;

  /**
   * @schema ChimeOriginationRoute#Weight
   */
  readonly weight?: number;

}

/**
 * Converts an object of type 'ChimeOriginationRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeOriginationRoute(obj: ChimeOriginationRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Protocol': obj.protocol,
    'Priority': obj.priority,
    'Weight': obj.weight,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeStreamingNotificationTarget
 */
export interface ChimeStreamingNotificationTarget {
  /**
   * @schema ChimeStreamingNotificationTarget#NotificationTarget
   */
  readonly notificationTarget?: string;

}

/**
 * Converts an object of type 'ChimeStreamingNotificationTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeStreamingNotificationTarget(obj: ChimeStreamingNotificationTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NotificationTarget': obj.notificationTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeEngineTranscribeSettings
 */
export interface ChimeEngineTranscribeSettings {
  /**
   * @schema ChimeEngineTranscribeSettings#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ChimeEngineTranscribeSettings#VocabularyFilterMethod
   */
  readonly vocabularyFilterMethod?: string;

  /**
   * @schema ChimeEngineTranscribeSettings#VocabularyFilterName
   */
  readonly vocabularyFilterName?: string;

  /**
   * @schema ChimeEngineTranscribeSettings#VocabularyName
   */
  readonly vocabularyName?: string;

  /**
   * @schema ChimeEngineTranscribeSettings#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'ChimeEngineTranscribeSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeEngineTranscribeSettings(obj: ChimeEngineTranscribeSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LanguageCode': obj.languageCode,
    'VocabularyFilterMethod': obj.vocabularyFilterMethod,
    'VocabularyFilterName': obj.vocabularyFilterName,
    'VocabularyName': obj.vocabularyName,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeEngineTranscribeMedicalSettings
 */
export interface ChimeEngineTranscribeMedicalSettings {
  /**
   * @schema ChimeEngineTranscribeMedicalSettings#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ChimeEngineTranscribeMedicalSettings#Specialty
   */
  readonly specialty?: string;

  /**
   * @schema ChimeEngineTranscribeMedicalSettings#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeEngineTranscribeMedicalSettings#VocabularyName
   */
  readonly vocabularyName?: string;

  /**
   * @schema ChimeEngineTranscribeMedicalSettings#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'ChimeEngineTranscribeMedicalSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeEngineTranscribeMedicalSettings(obj: ChimeEngineTranscribeMedicalSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LanguageCode': obj.languageCode,
    'Specialty': obj.specialty,
    'Type': obj.type,
    'VocabularyName': obj.vocabularyName,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
