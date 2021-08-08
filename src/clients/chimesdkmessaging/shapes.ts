/**
 * @schema ChimeSdkMessagingBatchCreateChannelMembershipRequest
 */
export interface ChimeSdkMessagingBatchCreateChannelMembershipRequest {
  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipRequest#MemberArns
   */
  readonly memberArns?: string[];

  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingBatchCreateChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingBatchCreateChannelMembershipRequest(obj: ChimeSdkMessagingBatchCreateChannelMembershipRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingBatchCreateChannelMembershipResponse
 */
export interface ChimeSdkMessagingBatchCreateChannelMembershipResponse {
  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipResponse#BatchChannelMemberships
   */
  readonly batchChannelMemberships?: ChimeSdkMessagingBatchChannelMemberships;

  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipResponse#Errors
   */
  readonly errors?: ChimeSdkMessagingBatchCreateChannelMembershipError[];

}

/**
 * Converts an object of type 'ChimeSdkMessagingBatchCreateChannelMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingBatchCreateChannelMembershipResponse(obj: ChimeSdkMessagingBatchCreateChannelMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchChannelMemberships': toJson_ChimeSdkMessagingBatchChannelMemberships(obj.batchChannelMemberships),
    'Errors': obj.errors?.map(y => toJson_ChimeSdkMessagingBatchCreateChannelMembershipError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingCreateChannelRequest
 */
export interface ChimeSdkMessagingCreateChannelRequest {
  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#Tags
   */
  readonly tags?: ChimeSdkMessagingTag[];

  /**
   * @schema ChimeSdkMessagingCreateChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelRequest(obj: ChimeSdkMessagingCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppInstanceArn': obj.appInstanceArn,
    'Name': obj.name,
    'Mode': obj.mode,
    'Privacy': obj.privacy,
    'Metadata': obj.metadata,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ChimeSdkMessagingTag(y)),
    'ChimeBearer': obj.chimeBearer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingCreateChannelResponse
 */
export interface ChimeSdkMessagingCreateChannelResponse {
  /**
   * @schema ChimeSdkMessagingCreateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelResponse(obj: ChimeSdkMessagingCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingCreateChannelBanRequest
 */
export interface ChimeSdkMessagingCreateChannelBanRequest {
  /**
   * @schema ChimeSdkMessagingCreateChannelBanRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelBanRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelBanRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelBanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelBanRequest(obj: ChimeSdkMessagingCreateChannelBanRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingCreateChannelBanResponse
 */
export interface ChimeSdkMessagingCreateChannelBanResponse {
  /**
   * @schema ChimeSdkMessagingCreateChannelBanResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelBanResponse#Member
   */
  readonly member?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelBanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelBanResponse(obj: ChimeSdkMessagingCreateChannelBanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Member': toJson_ChimeSdkMessagingIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingCreateChannelMembershipRequest
 */
export interface ChimeSdkMessagingCreateChannelMembershipRequest {
  /**
   * @schema ChimeSdkMessagingCreateChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelMembershipRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelMembershipRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelMembershipRequest(obj: ChimeSdkMessagingCreateChannelMembershipRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingCreateChannelMembershipResponse
 */
export interface ChimeSdkMessagingCreateChannelMembershipResponse {
  /**
   * @schema ChimeSdkMessagingCreateChannelMembershipResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelMembershipResponse#Member
   */
  readonly member?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelMembershipResponse(obj: ChimeSdkMessagingCreateChannelMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'Member': toJson_ChimeSdkMessagingIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingCreateChannelModeratorRequest
 */
export interface ChimeSdkMessagingCreateChannelModeratorRequest {
  /**
   * @schema ChimeSdkMessagingCreateChannelModeratorRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelModeratorRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelModeratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelModeratorRequest(obj: ChimeSdkMessagingCreateChannelModeratorRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingCreateChannelModeratorResponse
 */
export interface ChimeSdkMessagingCreateChannelModeratorResponse {
  /**
   * @schema ChimeSdkMessagingCreateChannelModeratorResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingCreateChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingCreateChannelModeratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingCreateChannelModeratorResponse(obj: ChimeSdkMessagingCreateChannelModeratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelModerator': toJson_ChimeSdkMessagingIdentity(obj.channelModerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingDeleteChannelRequest
 */
export interface ChimeSdkMessagingDeleteChannelRequest {
  /**
   * @schema ChimeSdkMessagingDeleteChannelRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDeleteChannelRequest(obj: ChimeSdkMessagingDeleteChannelRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDeleteChannelBanRequest
 */
export interface ChimeSdkMessagingDeleteChannelBanRequest {
  /**
   * @schema ChimeSdkMessagingDeleteChannelBanRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelBanRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelBanRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDeleteChannelBanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDeleteChannelBanRequest(obj: ChimeSdkMessagingDeleteChannelBanRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDeleteChannelMembershipRequest
 */
export interface ChimeSdkMessagingDeleteChannelMembershipRequest {
  /**
   * @schema ChimeSdkMessagingDeleteChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelMembershipRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDeleteChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDeleteChannelMembershipRequest(obj: ChimeSdkMessagingDeleteChannelMembershipRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDeleteChannelMessageRequest
 */
export interface ChimeSdkMessagingDeleteChannelMessageRequest {
  /**
   * @schema ChimeSdkMessagingDeleteChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDeleteChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDeleteChannelMessageRequest(obj: ChimeSdkMessagingDeleteChannelMessageRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDeleteChannelModeratorRequest
 */
export interface ChimeSdkMessagingDeleteChannelModeratorRequest {
  /**
   * @schema ChimeSdkMessagingDeleteChannelModeratorRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn?: string;

  /**
   * @schema ChimeSdkMessagingDeleteChannelModeratorRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDeleteChannelModeratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDeleteChannelModeratorRequest(obj: ChimeSdkMessagingDeleteChannelModeratorRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelRequest
 */
export interface ChimeSdkMessagingDescribeChannelRequest {
  /**
   * @schema ChimeSdkMessagingDescribeChannelRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelRequest(obj: ChimeSdkMessagingDescribeChannelRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelResponse
 */
export interface ChimeSdkMessagingDescribeChannelResponse {
  /**
   * @schema ChimeSdkMessagingDescribeChannelResponse#Channel
   */
  readonly channel?: ChimeSdkMessagingChannel;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelResponse(obj: ChimeSdkMessagingDescribeChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_ChimeSdkMessagingChannel(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingDescribeChannelBanRequest
 */
export interface ChimeSdkMessagingDescribeChannelBanRequest {
  /**
   * @schema ChimeSdkMessagingDescribeChannelBanRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelBanRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelBanRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelBanRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelBanRequest(obj: ChimeSdkMessagingDescribeChannelBanRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelBanResponse
 */
export interface ChimeSdkMessagingDescribeChannelBanResponse {
  /**
   * @schema ChimeSdkMessagingDescribeChannelBanResponse#ChannelBan
   */
  readonly channelBan?: ChimeSdkMessagingChannelBan;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelBanResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelBanResponse(obj: ChimeSdkMessagingDescribeChannelBanResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelBan': toJson_ChimeSdkMessagingChannelBan(obj.channelBan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingDescribeChannelMembershipRequest
 */
export interface ChimeSdkMessagingDescribeChannelMembershipRequest {
  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipRequest#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelMembershipRequest(obj: ChimeSdkMessagingDescribeChannelMembershipRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelMembershipResponse
 */
export interface ChimeSdkMessagingDescribeChannelMembershipResponse {
  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipResponse#ChannelMembership
   */
  readonly channelMembership?: ChimeSdkMessagingChannelMembership;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelMembershipResponse(obj: ChimeSdkMessagingDescribeChannelMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMembership': toJson_ChimeSdkMessagingChannelMembership(obj.channelMembership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest
 */
export interface ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest(obj: ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserResponse
 */
export interface ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @schema ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserResponse#ChannelMembership
   */
  readonly channelMembership?: ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserResponse(obj: ChimeSdkMessagingDescribeChannelMembershipForAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMembership': toJson_ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary(obj.channelMembership),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest
 */
export interface ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest(obj: ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserResponse
 */
export interface ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserResponse#Channel
   */
  readonly channel?: ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserResponse(obj: ChimeSdkMessagingDescribeChannelModeratedByAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': toJson_ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary(obj.channel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingDescribeChannelModeratorRequest
 */
export interface ChimeSdkMessagingDescribeChannelModeratorRequest {
  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratorRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratorRequest#ChannelModeratorArn
   */
  readonly channelModeratorArn?: string;

  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratorRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelModeratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelModeratorRequest(obj: ChimeSdkMessagingDescribeChannelModeratorRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingDescribeChannelModeratorResponse
 */
export interface ChimeSdkMessagingDescribeChannelModeratorResponse {
  /**
   * @schema ChimeSdkMessagingDescribeChannelModeratorResponse#ChannelModerator
   */
  readonly channelModerator?: ChimeSdkMessagingChannelModerator;

}

/**
 * Converts an object of type 'ChimeSdkMessagingDescribeChannelModeratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingDescribeChannelModeratorResponse(obj: ChimeSdkMessagingDescribeChannelModeratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelModerator': toJson_ChimeSdkMessagingChannelModerator(obj.channelModerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingGetChannelMessageRequest
 */
export interface ChimeSdkMessagingGetChannelMessageRequest {
  /**
   * @schema ChimeSdkMessagingGetChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingGetChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeSdkMessagingGetChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingGetChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingGetChannelMessageRequest(obj: ChimeSdkMessagingGetChannelMessageRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingGetChannelMessageResponse
 */
export interface ChimeSdkMessagingGetChannelMessageResponse {
  /**
   * @schema ChimeSdkMessagingGetChannelMessageResponse#ChannelMessage
   */
  readonly channelMessage?: ChimeSdkMessagingChannelMessage;

}

/**
 * Converts an object of type 'ChimeSdkMessagingGetChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingGetChannelMessageResponse(obj: ChimeSdkMessagingGetChannelMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMessage': toJson_ChimeSdkMessagingChannelMessage(obj.channelMessage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingGetMessagingSessionEndpointRequest
 */
export interface ChimeSdkMessagingGetMessagingSessionEndpointRequest {
}

/**
 * Converts an object of type 'ChimeSdkMessagingGetMessagingSessionEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingGetMessagingSessionEndpointRequest(obj: ChimeSdkMessagingGetMessagingSessionEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingGetMessagingSessionEndpointResponse
 */
export interface ChimeSdkMessagingGetMessagingSessionEndpointResponse {
  /**
   * @schema ChimeSdkMessagingGetMessagingSessionEndpointResponse#Endpoint
   */
  readonly endpoint?: ChimeSdkMessagingMessagingSessionEndpoint;

}

/**
 * Converts an object of type 'ChimeSdkMessagingGetMessagingSessionEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingGetMessagingSessionEndpointResponse(obj: ChimeSdkMessagingGetMessagingSessionEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': toJson_ChimeSdkMessagingMessagingSessionEndpoint(obj.endpoint),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelBansRequest
 */
export interface ChimeSdkMessagingListChannelBansRequest {
  /**
   * @schema ChimeSdkMessagingListChannelBansRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelBansRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelBansRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelBansRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelBansRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelBansRequest(obj: ChimeSdkMessagingListChannelBansRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelBansResponse
 */
export interface ChimeSdkMessagingListChannelBansResponse {
  /**
   * @schema ChimeSdkMessagingListChannelBansResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelBansResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelBansResponse#ChannelBans
   */
  readonly channelBans?: ChimeSdkMessagingChannelBanSummary[];

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelBansResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelBansResponse(obj: ChimeSdkMessagingListChannelBansResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'NextToken': obj.nextToken,
    'ChannelBans': obj.channelBans?.map(y => toJson_ChimeSdkMessagingChannelBanSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelMembershipsRequest
 */
export interface ChimeSdkMessagingListChannelMembershipsRequest {
  /**
   * @schema ChimeSdkMessagingListChannelMembershipsRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelMembershipsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelMembershipsRequest(obj: ChimeSdkMessagingListChannelMembershipsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelMembershipsResponse
 */
export interface ChimeSdkMessagingListChannelMembershipsResponse {
  /**
   * @schema ChimeSdkMessagingListChannelMembershipsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChimeSdkMessagingChannelMembershipSummary[];

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelMembershipsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelMembershipsResponse(obj: ChimeSdkMessagingListChannelMembershipsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'ChannelMemberships': obj.channelMemberships?.map(y => toJson_ChimeSdkMessagingChannelMembershipSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest
 */
export interface ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest(obj: ChimeSdkMessagingListChannelMembershipsForAppInstanceUserRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse
 */
export interface ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse#ChannelMemberships
   */
  readonly channelMemberships?: ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary[];

  /**
   * @schema ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse(obj: ChimeSdkMessagingListChannelMembershipsForAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMemberships': obj.channelMemberships?.map(y => toJson_ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelMessagesRequest
 */
export interface ChimeSdkMessagingListChannelMessagesRequest {
  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelMessagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelMessagesRequest(obj: ChimeSdkMessagingListChannelMessagesRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelMessagesResponse
 */
export interface ChimeSdkMessagingListChannelMessagesResponse {
  /**
   * @schema ChimeSdkMessagingListChannelMessagesResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelMessagesResponse#ChannelMessages
   */
  readonly channelMessages?: ChimeSdkMessagingChannelMessageSummary[];

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelMessagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelMessagesResponse(obj: ChimeSdkMessagingListChannelMessagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'NextToken': obj.nextToken,
    'ChannelMessages': obj.channelMessages?.map(y => toJson_ChimeSdkMessagingChannelMessageSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelModeratorsRequest
 */
export interface ChimeSdkMessagingListChannelModeratorsRequest {
  /**
   * @schema ChimeSdkMessagingListChannelModeratorsRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelModeratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelModeratorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelModeratorsRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelModeratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelModeratorsRequest(obj: ChimeSdkMessagingListChannelModeratorsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelModeratorsResponse
 */
export interface ChimeSdkMessagingListChannelModeratorsResponse {
  /**
   * @schema ChimeSdkMessagingListChannelModeratorsResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelModeratorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelModeratorsResponse#ChannelModerators
   */
  readonly channelModerators?: ChimeSdkMessagingChannelModeratorSummary[];

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelModeratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelModeratorsResponse(obj: ChimeSdkMessagingListChannelModeratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
    'NextToken': obj.nextToken,
    'ChannelModerators': obj.channelModerators?.map(y => toJson_ChimeSdkMessagingChannelModeratorSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelsRequest
 */
export interface ChimeSdkMessagingListChannelsRequest {
  /**
   * @schema ChimeSdkMessagingListChannelsRequest#AppInstanceArn
   */
  readonly appInstanceArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelsRequest#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeSdkMessagingListChannelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelsRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelsRequest(obj: ChimeSdkMessagingListChannelsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelsResponse
 */
export interface ChimeSdkMessagingListChannelsResponse {
  /**
   * @schema ChimeSdkMessagingListChannelsResponse#Channels
   */
  readonly channels?: ChimeSdkMessagingChannelSummary[];

  /**
   * @schema ChimeSdkMessagingListChannelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelsResponse(obj: ChimeSdkMessagingListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_ChimeSdkMessagingChannelSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest
 */
export interface ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest#AppInstanceUserArn
   */
  readonly appInstanceUserArn?: string;

  /**
   * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest(obj: ChimeSdkMessagingListChannelsModeratedByAppInstanceUserRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse
 */
export interface ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse#Channels
   */
  readonly channels?: ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary[];

  /**
   * @schema ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse(obj: ChimeSdkMessagingListChannelsModeratedByAppInstanceUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels?.map(y => toJson_ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingRedactChannelMessageRequest
 */
export interface ChimeSdkMessagingRedactChannelMessageRequest {
  /**
   * @schema ChimeSdkMessagingRedactChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingRedactChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeSdkMessagingRedactChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingRedactChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingRedactChannelMessageRequest(obj: ChimeSdkMessagingRedactChannelMessageRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingRedactChannelMessageResponse
 */
export interface ChimeSdkMessagingRedactChannelMessageResponse {
  /**
   * @schema ChimeSdkMessagingRedactChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingRedactChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingRedactChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingRedactChannelMessageResponse(obj: ChimeSdkMessagingRedactChannelMessageResponse | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingSendChannelMessageRequest
 */
export interface ChimeSdkMessagingSendChannelMessageRequest {
  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#Persistence
   */
  readonly persistence?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingSendChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingSendChannelMessageRequest(obj: ChimeSdkMessagingSendChannelMessageRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingSendChannelMessageResponse
 */
export interface ChimeSdkMessagingSendChannelMessageResponse {
  /**
   * @schema ChimeSdkMessagingSendChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingSendChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingSendChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingSendChannelMessageResponse(obj: ChimeSdkMessagingSendChannelMessageResponse | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingUpdateChannelRequest
 */
export interface ChimeSdkMessagingUpdateChannelRequest {
  /**
   * @schema ChimeSdkMessagingUpdateChannelRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingUpdateChannelRequest(obj: ChimeSdkMessagingUpdateChannelRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingUpdateChannelResponse
 */
export interface ChimeSdkMessagingUpdateChannelResponse {
  /**
   * @schema ChimeSdkMessagingUpdateChannelResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingUpdateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingUpdateChannelResponse(obj: ChimeSdkMessagingUpdateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingUpdateChannelMessageRequest
 */
export interface ChimeSdkMessagingUpdateChannelMessageRequest {
  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageRequest#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingUpdateChannelMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingUpdateChannelMessageRequest(obj: ChimeSdkMessagingUpdateChannelMessageRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingUpdateChannelMessageResponse
 */
export interface ChimeSdkMessagingUpdateChannelMessageResponse {
  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageResponse#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelMessageResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingUpdateChannelMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingUpdateChannelMessageResponse(obj: ChimeSdkMessagingUpdateChannelMessageResponse | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingUpdateChannelReadMarkerRequest
 */
export interface ChimeSdkMessagingUpdateChannelReadMarkerRequest {
  /**
   * @schema ChimeSdkMessagingUpdateChannelReadMarkerRequest#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingUpdateChannelReadMarkerRequest#ChimeBearer
   */
  readonly chimeBearer?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingUpdateChannelReadMarkerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingUpdateChannelReadMarkerRequest(obj: ChimeSdkMessagingUpdateChannelReadMarkerRequest | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingUpdateChannelReadMarkerResponse
 */
export interface ChimeSdkMessagingUpdateChannelReadMarkerResponse {
  /**
   * @schema ChimeSdkMessagingUpdateChannelReadMarkerResponse#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingUpdateChannelReadMarkerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingUpdateChannelReadMarkerResponse(obj: ChimeSdkMessagingUpdateChannelReadMarkerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingBatchChannelMemberships
 */
export interface ChimeSdkMessagingBatchChannelMemberships {
  /**
   * @schema ChimeSdkMessagingBatchChannelMemberships#InvitedBy
   */
  readonly invitedBy?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingBatchChannelMemberships#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingBatchChannelMemberships#Members
   */
  readonly members?: ChimeSdkMessagingIdentity[];

  /**
   * @schema ChimeSdkMessagingBatchChannelMemberships#ChannelArn
   */
  readonly channelArn?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingBatchChannelMemberships' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingBatchChannelMemberships(obj: ChimeSdkMessagingBatchChannelMemberships | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitedBy': toJson_ChimeSdkMessagingIdentity(obj.invitedBy),
    'Type': obj.type,
    'Members': obj.members?.map(y => toJson_ChimeSdkMessagingIdentity(y)),
    'ChannelArn': obj.channelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingBatchCreateChannelMembershipError
 */
export interface ChimeSdkMessagingBatchCreateChannelMembershipError {
  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipError#MemberArn
   */
  readonly memberArn?: string;

  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ChimeSdkMessagingBatchCreateChannelMembershipError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingBatchCreateChannelMembershipError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingBatchCreateChannelMembershipError(obj: ChimeSdkMessagingBatchCreateChannelMembershipError | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingTag
 */
export interface ChimeSdkMessagingTag {
  /**
   * @schema ChimeSdkMessagingTag#Key
   */
  readonly key?: string;

  /**
   * @schema ChimeSdkMessagingTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingTag(obj: ChimeSdkMessagingTag | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingIdentity
 */
export interface ChimeSdkMessagingIdentity {
  /**
   * @schema ChimeSdkMessagingIdentity#Arn
   */
  readonly arn?: string;

  /**
   * @schema ChimeSdkMessagingIdentity#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingIdentity(obj: ChimeSdkMessagingIdentity | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingChannel
 */
export interface ChimeSdkMessagingChannel {
  /**
   * @schema ChimeSdkMessagingChannel#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkMessagingChannel#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingChannel#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeSdkMessagingChannel#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeSdkMessagingChannel#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingChannel#CreatedBy
   */
  readonly createdBy?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannel#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannel#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannel#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannel(obj: ChimeSdkMessagingChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ChannelArn': obj.channelArn,
    'Mode': obj.mode,
    'Privacy': obj.privacy,
    'Metadata': obj.metadata,
    'CreatedBy': toJson_ChimeSdkMessagingIdentity(obj.createdBy),
    'CreatedTimestamp': obj.createdTimestamp,
    'LastMessageTimestamp': obj.lastMessageTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelBan
 */
export interface ChimeSdkMessagingChannelBan {
  /**
   * @schema ChimeSdkMessagingChannelBan#Member
   */
  readonly member?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannelBan#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingChannelBan#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelBan#CreatedBy
   */
  readonly createdBy?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelBan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelBan(obj: ChimeSdkMessagingChannelBan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ChimeSdkMessagingIdentity(obj.member),
    'ChannelArn': obj.channelArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'CreatedBy': toJson_ChimeSdkMessagingIdentity(obj.createdBy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelMembership
 */
export interface ChimeSdkMessagingChannelMembership {
  /**
   * @schema ChimeSdkMessagingChannelMembership#InvitedBy
   */
  readonly invitedBy?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannelMembership#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingChannelMembership#Member
   */
  readonly member?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannelMembership#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingChannelMembership#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMembership#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelMembership' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelMembership(obj: ChimeSdkMessagingChannelMembership | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitedBy': toJson_ChimeSdkMessagingIdentity(obj.invitedBy),
    'Type': obj.type,
    'Member': toJson_ChimeSdkMessagingIdentity(obj.member),
    'ChannelArn': obj.channelArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary
 */
export interface ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary {
  /**
   * @schema ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChimeSdkMessagingChannelSummary;

  /**
   * @schema ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary#AppInstanceUserMembershipSummary
   */
  readonly appInstanceUserMembershipSummary?: ChimeSdkMessagingAppInstanceUserMembershipSummary;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary(obj: ChimeSdkMessagingChannelMembershipForAppInstanceUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelSummary': toJson_ChimeSdkMessagingChannelSummary(obj.channelSummary),
    'AppInstanceUserMembershipSummary': toJson_ChimeSdkMessagingAppInstanceUserMembershipSummary(obj.appInstanceUserMembershipSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary
 */
export interface ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary {
  /**
   * @schema ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary#ChannelSummary
   */
  readonly channelSummary?: ChimeSdkMessagingChannelSummary;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary(obj: ChimeSdkMessagingChannelModeratedByAppInstanceUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelSummary': toJson_ChimeSdkMessagingChannelSummary(obj.channelSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelModerator
 */
export interface ChimeSdkMessagingChannelModerator {
  /**
   * @schema ChimeSdkMessagingChannelModerator#Moderator
   */
  readonly moderator?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannelModerator#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingChannelModerator#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelModerator#CreatedBy
   */
  readonly createdBy?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelModerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelModerator(obj: ChimeSdkMessagingChannelModerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Moderator': toJson_ChimeSdkMessagingIdentity(obj.moderator),
    'ChannelArn': obj.channelArn,
    'CreatedTimestamp': obj.createdTimestamp,
    'CreatedBy': toJson_ChimeSdkMessagingIdentity(obj.createdBy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelMessage
 */
export interface ChimeSdkMessagingChannelMessage {
  /**
   * @schema ChimeSdkMessagingChannelMessage#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessage#Sender
   */
  readonly sender?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannelMessage#Redacted
   */
  readonly redacted?: boolean;

  /**
   * @schema ChimeSdkMessagingChannelMessage#Persistence
   */
  readonly persistence?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelMessage(obj: ChimeSdkMessagingChannelMessage | undefined): Record<string, any> | undefined {
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
    'Sender': toJson_ChimeSdkMessagingIdentity(obj.sender),
    'Redacted': obj.redacted,
    'Persistence': obj.persistence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingMessagingSessionEndpoint
 */
export interface ChimeSdkMessagingMessagingSessionEndpoint {
  /**
   * @schema ChimeSdkMessagingMessagingSessionEndpoint#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingMessagingSessionEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingMessagingSessionEndpoint(obj: ChimeSdkMessagingMessagingSessionEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelBanSummary
 */
export interface ChimeSdkMessagingChannelBanSummary {
  /**
   * @schema ChimeSdkMessagingChannelBanSummary#Member
   */
  readonly member?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelBanSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelBanSummary(obj: ChimeSdkMessagingChannelBanSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ChimeSdkMessagingIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelMembershipSummary
 */
export interface ChimeSdkMessagingChannelMembershipSummary {
  /**
   * @schema ChimeSdkMessagingChannelMembershipSummary#Member
   */
  readonly member?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelMembershipSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelMembershipSummary(obj: ChimeSdkMessagingChannelMembershipSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ChimeSdkMessagingIdentity(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelMessageSummary
 */
export interface ChimeSdkMessagingChannelMessageSummary {
  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#Content
   */
  readonly content?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#CreatedTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#LastEditedTimestamp
   */
  readonly lastEditedTimestamp?: string;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#Sender
   */
  readonly sender?: ChimeSdkMessagingIdentity;

  /**
   * @schema ChimeSdkMessagingChannelMessageSummary#Redacted
   */
  readonly redacted?: boolean;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelMessageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelMessageSummary(obj: ChimeSdkMessagingChannelMessageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
    'Content': obj.content,
    'Metadata': obj.metadata,
    'Type': obj.type,
    'CreatedTimestamp': obj.createdTimestamp,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'LastEditedTimestamp': obj.lastEditedTimestamp,
    'Sender': toJson_ChimeSdkMessagingIdentity(obj.sender),
    'Redacted': obj.redacted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelModeratorSummary
 */
export interface ChimeSdkMessagingChannelModeratorSummary {
  /**
   * @schema ChimeSdkMessagingChannelModeratorSummary#Moderator
   */
  readonly moderator?: ChimeSdkMessagingIdentity;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelModeratorSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelModeratorSummary(obj: ChimeSdkMessagingChannelModeratorSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Moderator': toJson_ChimeSdkMessagingIdentity(obj.moderator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ChimeSdkMessagingChannelSummary
 */
export interface ChimeSdkMessagingChannelSummary {
  /**
   * @schema ChimeSdkMessagingChannelSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ChimeSdkMessagingChannelSummary#ChannelArn
   */
  readonly channelArn?: string;

  /**
   * @schema ChimeSdkMessagingChannelSummary#Mode
   */
  readonly mode?: string;

  /**
   * @schema ChimeSdkMessagingChannelSummary#Privacy
   */
  readonly privacy?: string;

  /**
   * @schema ChimeSdkMessagingChannelSummary#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema ChimeSdkMessagingChannelSummary#LastMessageTimestamp
   */
  readonly lastMessageTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingChannelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingChannelSummary(obj: ChimeSdkMessagingChannelSummary | undefined): Record<string, any> | undefined {
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
 * @schema ChimeSdkMessagingAppInstanceUserMembershipSummary
 */
export interface ChimeSdkMessagingAppInstanceUserMembershipSummary {
  /**
   * @schema ChimeSdkMessagingAppInstanceUserMembershipSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ChimeSdkMessagingAppInstanceUserMembershipSummary#ReadMarkerTimestamp
   */
  readonly readMarkerTimestamp?: string;

}

/**
 * Converts an object of type 'ChimeSdkMessagingAppInstanceUserMembershipSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ChimeSdkMessagingAppInstanceUserMembershipSummary(obj: ChimeSdkMessagingAppInstanceUserMembershipSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ReadMarkerTimestamp': obj.readMarkerTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
