/**
 * @schema ManagedBlockchainCreateMemberInput
 */
export interface ManagedBlockchainCreateMemberInput {
  /**
   * @schema ManagedBlockchainCreateMemberInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ManagedBlockchainCreateMemberInput#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema ManagedBlockchainCreateMemberInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainCreateMemberInput#MemberConfiguration
   */
  readonly memberConfiguration?: ManagedBlockchainMemberConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainCreateMemberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateMemberInput(obj: ManagedBlockchainCreateMemberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'InvitationId': obj.invitationId,
    'NetworkId': obj.networkId,
    'MemberConfiguration': toJson_ManagedBlockchainMemberConfiguration(obj.memberConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateMemberOutput
 */
export interface ManagedBlockchainCreateMemberOutput {
  /**
   * @schema ManagedBlockchainCreateMemberOutput#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainCreateMemberOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateMemberOutput(obj: ManagedBlockchainCreateMemberOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateNetworkInput
 */
export interface ManagedBlockchainCreateNetworkInput {
  /**
   * @schema ManagedBlockchainCreateNetworkInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Framework
   */
  readonly framework?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#FrameworkVersion
   */
  readonly frameworkVersion?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#FrameworkConfiguration
   */
  readonly frameworkConfiguration?: ManagedBlockchainNetworkFrameworkConfiguration;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#VotingPolicy
   */
  readonly votingPolicy?: ManagedBlockchainVotingPolicy;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#MemberConfiguration
   */
  readonly memberConfiguration?: ManagedBlockchainMemberConfiguration;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ManagedBlockchainCreateNetworkInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateNetworkInput(obj: ManagedBlockchainCreateNetworkInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'Name': obj.name,
    'Description': obj.description,
    'Framework': obj.framework,
    'FrameworkVersion': obj.frameworkVersion,
    'FrameworkConfiguration': toJson_ManagedBlockchainNetworkFrameworkConfiguration(obj.frameworkConfiguration),
    'VotingPolicy': toJson_ManagedBlockchainVotingPolicy(obj.votingPolicy),
    'MemberConfiguration': toJson_ManagedBlockchainMemberConfiguration(obj.memberConfiguration),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateNetworkOutput
 */
export interface ManagedBlockchainCreateNetworkOutput {
  /**
   * @schema ManagedBlockchainCreateNetworkOutput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkOutput#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainCreateNetworkOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateNetworkOutput(obj: ManagedBlockchainCreateNetworkOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateNodeInput
 */
export interface ManagedBlockchainCreateNodeInput {
  /**
   * @schema ManagedBlockchainCreateNodeInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ManagedBlockchainCreateNodeInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainCreateNodeInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainCreateNodeInput#NodeConfiguration
   */
  readonly nodeConfiguration?: ManagedBlockchainNodeConfiguration;

  /**
   * @schema ManagedBlockchainCreateNodeInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ManagedBlockchainCreateNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateNodeInput(obj: ManagedBlockchainCreateNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'NodeConfiguration': toJson_ManagedBlockchainNodeConfiguration(obj.nodeConfiguration),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateNodeOutput
 */
export interface ManagedBlockchainCreateNodeOutput {
  /**
   * @schema ManagedBlockchainCreateNodeOutput#NodeId
   */
  readonly nodeId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainCreateNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateNodeOutput(obj: ManagedBlockchainCreateNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NodeId': obj.nodeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateProposalInput
 */
export interface ManagedBlockchainCreateProposalInput {
  /**
   * @schema ManagedBlockchainCreateProposalInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#Actions
   */
  readonly actions?: ManagedBlockchainProposalActions;

  /**
   * @schema ManagedBlockchainCreateProposalInput#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ManagedBlockchainCreateProposalInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateProposalInput(obj: ManagedBlockchainCreateProposalInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestToken': obj.clientRequestToken,
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'Actions': toJson_ManagedBlockchainProposalActions(obj.actions),
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainCreateProposalOutput
 */
export interface ManagedBlockchainCreateProposalOutput {
  /**
   * @schema ManagedBlockchainCreateProposalOutput#ProposalId
   */
  readonly proposalId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainCreateProposalOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainCreateProposalOutput(obj: ManagedBlockchainCreateProposalOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProposalId': obj.proposalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainDeleteMemberInput
 */
export interface ManagedBlockchainDeleteMemberInput {
  /**
   * @schema ManagedBlockchainDeleteMemberInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainDeleteMemberInput#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainDeleteMemberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainDeleteMemberInput(obj: ManagedBlockchainDeleteMemberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainDeleteMemberOutput
 */
export interface ManagedBlockchainDeleteMemberOutput {
}

/**
 * Converts an object of type 'ManagedBlockchainDeleteMemberOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainDeleteMemberOutput(obj: ManagedBlockchainDeleteMemberOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainDeleteNodeInput
 */
export interface ManagedBlockchainDeleteNodeInput {
  /**
   * @schema ManagedBlockchainDeleteNodeInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainDeleteNodeInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainDeleteNodeInput#NodeId
   */
  readonly nodeId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainDeleteNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainDeleteNodeInput(obj: ManagedBlockchainDeleteNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'NodeId': obj.nodeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainDeleteNodeOutput
 */
export interface ManagedBlockchainDeleteNodeOutput {
}

/**
 * Converts an object of type 'ManagedBlockchainDeleteNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainDeleteNodeOutput(obj: ManagedBlockchainDeleteNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetMemberInput
 */
export interface ManagedBlockchainGetMemberInput {
  /**
   * @schema ManagedBlockchainGetMemberInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainGetMemberInput#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainGetMemberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetMemberInput(obj: ManagedBlockchainGetMemberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetMemberOutput
 */
export interface ManagedBlockchainGetMemberOutput {
  /**
   * @schema ManagedBlockchainGetMemberOutput#Member
   */
  readonly member?: ManagedBlockchainMember;

}

/**
 * Converts an object of type 'ManagedBlockchainGetMemberOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetMemberOutput(obj: ManagedBlockchainGetMemberOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Member': toJson_ManagedBlockchainMember(obj.member),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetNetworkInput
 */
export interface ManagedBlockchainGetNetworkInput {
  /**
   * @schema ManagedBlockchainGetNetworkInput#NetworkId
   */
  readonly networkId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainGetNetworkInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetNetworkInput(obj: ManagedBlockchainGetNetworkInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetNetworkOutput
 */
export interface ManagedBlockchainGetNetworkOutput {
  /**
   * @schema ManagedBlockchainGetNetworkOutput#Network
   */
  readonly network?: ManagedBlockchainNetwork;

}

/**
 * Converts an object of type 'ManagedBlockchainGetNetworkOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetNetworkOutput(obj: ManagedBlockchainGetNetworkOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Network': toJson_ManagedBlockchainNetwork(obj.network),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetNodeInput
 */
export interface ManagedBlockchainGetNodeInput {
  /**
   * @schema ManagedBlockchainGetNodeInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainGetNodeInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainGetNodeInput#NodeId
   */
  readonly nodeId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainGetNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetNodeInput(obj: ManagedBlockchainGetNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'NodeId': obj.nodeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetNodeOutput
 */
export interface ManagedBlockchainGetNodeOutput {
  /**
   * @schema ManagedBlockchainGetNodeOutput#Node
   */
  readonly node?: ManagedBlockchainNode;

}

/**
 * Converts an object of type 'ManagedBlockchainGetNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetNodeOutput(obj: ManagedBlockchainGetNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Node': toJson_ManagedBlockchainNode(obj.node),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetProposalInput
 */
export interface ManagedBlockchainGetProposalInput {
  /**
   * @schema ManagedBlockchainGetProposalInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainGetProposalInput#ProposalId
   */
  readonly proposalId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainGetProposalInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetProposalInput(obj: ManagedBlockchainGetProposalInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'ProposalId': obj.proposalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainGetProposalOutput
 */
export interface ManagedBlockchainGetProposalOutput {
  /**
   * @schema ManagedBlockchainGetProposalOutput#Proposal
   */
  readonly proposal?: ManagedBlockchainProposal;

}

/**
 * Converts an object of type 'ManagedBlockchainGetProposalOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainGetProposalOutput(obj: ManagedBlockchainGetProposalOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Proposal': toJson_ManagedBlockchainProposal(obj.proposal),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListInvitationsInput
 */
export interface ManagedBlockchainListInvitationsInput {
  /**
   * @schema ManagedBlockchainListInvitationsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ManagedBlockchainListInvitationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListInvitationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListInvitationsInput(obj: ManagedBlockchainListInvitationsInput | undefined): Record<string, any> | undefined {
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
 * @schema ManagedBlockchainListInvitationsOutput
 */
export interface ManagedBlockchainListInvitationsOutput {
  /**
   * @schema ManagedBlockchainListInvitationsOutput#Invitations
   */
  readonly invitations?: ManagedBlockchainInvitation[];

  /**
   * @schema ManagedBlockchainListInvitationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListInvitationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListInvitationsOutput(obj: ManagedBlockchainListInvitationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invitations': obj.invitations?.map(y => toJson_ManagedBlockchainInvitation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListMembersInput
 */
export interface ManagedBlockchainListMembersInput {
  /**
   * @schema ManagedBlockchainListMembersInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainListMembersInput#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainListMembersInput#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainListMembersInput#IsOwned
   */
  readonly isOwned?: boolean;

  /**
   * @schema ManagedBlockchainListMembersInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ManagedBlockchainListMembersInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListMembersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListMembersInput(obj: ManagedBlockchainListMembersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'Name': obj.name,
    'Status': obj.status,
    'IsOwned': obj.isOwned,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListMembersOutput
 */
export interface ManagedBlockchainListMembersOutput {
  /**
   * @schema ManagedBlockchainListMembersOutput#Members
   */
  readonly members?: ManagedBlockchainMemberSummary[];

  /**
   * @schema ManagedBlockchainListMembersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListMembersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListMembersOutput(obj: ManagedBlockchainListMembersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Members': obj.members?.map(y => toJson_ManagedBlockchainMemberSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListNetworksInput
 */
export interface ManagedBlockchainListNetworksInput {
  /**
   * @schema ManagedBlockchainListNetworksInput#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainListNetworksInput#Framework
   */
  readonly framework?: string;

  /**
   * @schema ManagedBlockchainListNetworksInput#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainListNetworksInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ManagedBlockchainListNetworksInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListNetworksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListNetworksInput(obj: ManagedBlockchainListNetworksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Framework': obj.framework,
    'Status': obj.status,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListNetworksOutput
 */
export interface ManagedBlockchainListNetworksOutput {
  /**
   * @schema ManagedBlockchainListNetworksOutput#Networks
   */
  readonly networks?: ManagedBlockchainNetworkSummary[];

  /**
   * @schema ManagedBlockchainListNetworksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListNetworksOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListNetworksOutput(obj: ManagedBlockchainListNetworksOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Networks': obj.networks?.map(y => toJson_ManagedBlockchainNetworkSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListNodesInput
 */
export interface ManagedBlockchainListNodesInput {
  /**
   * @schema ManagedBlockchainListNodesInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainListNodesInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainListNodesInput#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainListNodesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ManagedBlockchainListNodesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListNodesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListNodesInput(obj: ManagedBlockchainListNodesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'Status': obj.status,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListNodesOutput
 */
export interface ManagedBlockchainListNodesOutput {
  /**
   * @schema ManagedBlockchainListNodesOutput#Nodes
   */
  readonly nodes?: ManagedBlockchainNodeSummary[];

  /**
   * @schema ManagedBlockchainListNodesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListNodesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListNodesOutput(obj: ManagedBlockchainListNodesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Nodes': obj.nodes?.map(y => toJson_ManagedBlockchainNodeSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListProposalVotesInput
 */
export interface ManagedBlockchainListProposalVotesInput {
  /**
   * @schema ManagedBlockchainListProposalVotesInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainListProposalVotesInput#ProposalId
   */
  readonly proposalId?: string;

  /**
   * @schema ManagedBlockchainListProposalVotesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ManagedBlockchainListProposalVotesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListProposalVotesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListProposalVotesInput(obj: ManagedBlockchainListProposalVotesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'ProposalId': obj.proposalId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListProposalVotesOutput
 */
export interface ManagedBlockchainListProposalVotesOutput {
  /**
   * @schema ManagedBlockchainListProposalVotesOutput#ProposalVotes
   */
  readonly proposalVotes?: ManagedBlockchainVoteSummary[];

  /**
   * @schema ManagedBlockchainListProposalVotesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListProposalVotesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListProposalVotesOutput(obj: ManagedBlockchainListProposalVotesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProposalVotes': obj.proposalVotes?.map(y => toJson_ManagedBlockchainVoteSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListProposalsInput
 */
export interface ManagedBlockchainListProposalsInput {
  /**
   * @schema ManagedBlockchainListProposalsInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainListProposalsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ManagedBlockchainListProposalsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListProposalsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListProposalsInput(obj: ManagedBlockchainListProposalsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListProposalsOutput
 */
export interface ManagedBlockchainListProposalsOutput {
  /**
   * @schema ManagedBlockchainListProposalsOutput#Proposals
   */
  readonly proposals?: ManagedBlockchainProposalSummary[];

  /**
   * @schema ManagedBlockchainListProposalsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListProposalsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListProposalsOutput(obj: ManagedBlockchainListProposalsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Proposals': obj.proposals?.map(y => toJson_ManagedBlockchainProposalSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListTagsForResourceRequest
 */
export interface ManagedBlockchainListTagsForResourceRequest {
  /**
   * @schema ManagedBlockchainListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListTagsForResourceRequest(obj: ManagedBlockchainListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainListTagsForResourceResponse
 */
export interface ManagedBlockchainListTagsForResourceResponse {
  /**
   * @schema ManagedBlockchainListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ManagedBlockchainListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainListTagsForResourceResponse(obj: ManagedBlockchainListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainRejectInvitationInput
 */
export interface ManagedBlockchainRejectInvitationInput {
  /**
   * @schema ManagedBlockchainRejectInvitationInput#InvitationId
   */
  readonly invitationId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainRejectInvitationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainRejectInvitationInput(obj: ManagedBlockchainRejectInvitationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitationId': obj.invitationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainRejectInvitationOutput
 */
export interface ManagedBlockchainRejectInvitationOutput {
}

/**
 * Converts an object of type 'ManagedBlockchainRejectInvitationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainRejectInvitationOutput(obj: ManagedBlockchainRejectInvitationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainTagResourceRequest
 */
export interface ManagedBlockchainTagResourceRequest {
  /**
   * @schema ManagedBlockchainTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ManagedBlockchainTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ManagedBlockchainTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainTagResourceRequest(obj: ManagedBlockchainTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainTagResourceResponse
 */
export interface ManagedBlockchainTagResourceResponse {
}

/**
 * Converts an object of type 'ManagedBlockchainTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainTagResourceResponse(obj: ManagedBlockchainTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainUntagResourceRequest
 */
export interface ManagedBlockchainUntagResourceRequest {
  /**
   * @schema ManagedBlockchainUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ManagedBlockchainUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ManagedBlockchainUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainUntagResourceRequest(obj: ManagedBlockchainUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ManagedBlockchainUntagResourceResponse
 */
export interface ManagedBlockchainUntagResourceResponse {
}

/**
 * Converts an object of type 'ManagedBlockchainUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainUntagResourceResponse(obj: ManagedBlockchainUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainUpdateMemberInput
 */
export interface ManagedBlockchainUpdateMemberInput {
  /**
   * @schema ManagedBlockchainUpdateMemberInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainUpdateMemberInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainUpdateMemberInput#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainMemberLogPublishingConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainUpdateMemberInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainUpdateMemberInput(obj: ManagedBlockchainUpdateMemberInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'LogPublishingConfiguration': toJson_ManagedBlockchainMemberLogPublishingConfiguration(obj.logPublishingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainUpdateMemberOutput
 */
export interface ManagedBlockchainUpdateMemberOutput {
}

/**
 * Converts an object of type 'ManagedBlockchainUpdateMemberOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainUpdateMemberOutput(obj: ManagedBlockchainUpdateMemberOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainUpdateNodeInput
 */
export interface ManagedBlockchainUpdateNodeInput {
  /**
   * @schema ManagedBlockchainUpdateNodeInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainUpdateNodeInput#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainUpdateNodeInput#NodeId
   */
  readonly nodeId?: string;

  /**
   * @schema ManagedBlockchainUpdateNodeInput#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainNodeLogPublishingConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainUpdateNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainUpdateNodeInput(obj: ManagedBlockchainUpdateNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'NodeId': obj.nodeId,
    'LogPublishingConfiguration': toJson_ManagedBlockchainNodeLogPublishingConfiguration(obj.logPublishingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainUpdateNodeOutput
 */
export interface ManagedBlockchainUpdateNodeOutput {
}

/**
 * Converts an object of type 'ManagedBlockchainUpdateNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainUpdateNodeOutput(obj: ManagedBlockchainUpdateNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainVoteOnProposalInput
 */
export interface ManagedBlockchainVoteOnProposalInput {
  /**
   * @schema ManagedBlockchainVoteOnProposalInput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainVoteOnProposalInput#ProposalId
   */
  readonly proposalId?: string;

  /**
   * @schema ManagedBlockchainVoteOnProposalInput#VoterMemberId
   */
  readonly voterMemberId?: string;

  /**
   * @schema ManagedBlockchainVoteOnProposalInput#Vote
   */
  readonly vote?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainVoteOnProposalInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainVoteOnProposalInput(obj: ManagedBlockchainVoteOnProposalInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'ProposalId': obj.proposalId,
    'VoterMemberId': obj.voterMemberId,
    'Vote': obj.vote,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainVoteOnProposalOutput
 */
export interface ManagedBlockchainVoteOnProposalOutput {
}

/**
 * Converts an object of type 'ManagedBlockchainVoteOnProposalOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainVoteOnProposalOutput(obj: ManagedBlockchainVoteOnProposalOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberConfiguration
 */
export interface ManagedBlockchainMemberConfiguration {
  /**
   * @schema ManagedBlockchainMemberConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainMemberConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainMemberConfiguration#FrameworkConfiguration
   */
  readonly frameworkConfiguration?: ManagedBlockchainMemberFrameworkConfiguration;

  /**
   * @schema ManagedBlockchainMemberConfiguration#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainMemberLogPublishingConfiguration;

  /**
   * @schema ManagedBlockchainMemberConfiguration#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ManagedBlockchainMemberConfiguration#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberConfiguration(obj: ManagedBlockchainMemberConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'FrameworkConfiguration': toJson_ManagedBlockchainMemberFrameworkConfiguration(obj.frameworkConfiguration),
    'LogPublishingConfiguration': toJson_ManagedBlockchainMemberLogPublishingConfiguration(obj.logPublishingConfiguration),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetworkFrameworkConfiguration
 */
export interface ManagedBlockchainNetworkFrameworkConfiguration {
  /**
   * @schema ManagedBlockchainNetworkFrameworkConfiguration#Fabric
   */
  readonly fabric?: ManagedBlockchainNetworkFabricConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainNetworkFrameworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetworkFrameworkConfiguration(obj: ManagedBlockchainNetworkFrameworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainNetworkFabricConfiguration(obj.fabric),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainVotingPolicy
 */
export interface ManagedBlockchainVotingPolicy {
  /**
   * @schema ManagedBlockchainVotingPolicy#ApprovalThresholdPolicy
   */
  readonly approvalThresholdPolicy?: ManagedBlockchainApprovalThresholdPolicy;

}

/**
 * Converts an object of type 'ManagedBlockchainVotingPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainVotingPolicy(obj: ManagedBlockchainVotingPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApprovalThresholdPolicy': toJson_ManagedBlockchainApprovalThresholdPolicy(obj.approvalThresholdPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeConfiguration
 */
export interface ManagedBlockchainNodeConfiguration {
  /**
   * @schema ManagedBlockchainNodeConfiguration#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ManagedBlockchainNodeConfiguration#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ManagedBlockchainNodeConfiguration#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainNodeLogPublishingConfiguration;

  /**
   * @schema ManagedBlockchainNodeConfiguration#StateDB
   */
  readonly stateDb?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeConfiguration(obj: ManagedBlockchainNodeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceType': obj.instanceType,
    'AvailabilityZone': obj.availabilityZone,
    'LogPublishingConfiguration': toJson_ManagedBlockchainNodeLogPublishingConfiguration(obj.logPublishingConfiguration),
    'StateDB': obj.stateDb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainProposalActions
 */
export interface ManagedBlockchainProposalActions {
  /**
   * @schema ManagedBlockchainProposalActions#Invitations
   */
  readonly invitations?: ManagedBlockchainInviteAction[];

  /**
   * @schema ManagedBlockchainProposalActions#Removals
   */
  readonly removals?: ManagedBlockchainRemoveAction[];

}

/**
 * Converts an object of type 'ManagedBlockchainProposalActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainProposalActions(obj: ManagedBlockchainProposalActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Invitations': obj.invitations?.map(y => toJson_ManagedBlockchainInviteAction(y)),
    'Removals': obj.removals?.map(y => toJson_ManagedBlockchainRemoveAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMember
 */
export interface ManagedBlockchainMember {
  /**
   * @schema ManagedBlockchainMember#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainMember#Id
   */
  readonly id?: string;

  /**
   * @schema ManagedBlockchainMember#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainMember#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainMember#FrameworkAttributes
   */
  readonly frameworkAttributes?: ManagedBlockchainMemberFrameworkAttributes;

  /**
   * @schema ManagedBlockchainMember#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainMemberLogPublishingConfiguration;

  /**
   * @schema ManagedBlockchainMember#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainMember#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ManagedBlockchainMember#Arn
   */
  readonly arn?: string;

  /**
   * @schema ManagedBlockchainMember#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMember(obj: ManagedBlockchainMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'FrameworkAttributes': toJson_ManagedBlockchainMemberFrameworkAttributes(obj.frameworkAttributes),
    'LogPublishingConfiguration': toJson_ManagedBlockchainMemberLogPublishingConfiguration(obj.logPublishingConfiguration),
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Arn': obj.arn,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetwork
 */
export interface ManagedBlockchainNetwork {
  /**
   * @schema ManagedBlockchainNetwork#Id
   */
  readonly id?: string;

  /**
   * @schema ManagedBlockchainNetwork#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainNetwork#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainNetwork#Framework
   */
  readonly framework?: string;

  /**
   * @schema ManagedBlockchainNetwork#FrameworkVersion
   */
  readonly frameworkVersion?: string;

  /**
   * @schema ManagedBlockchainNetwork#FrameworkAttributes
   */
  readonly frameworkAttributes?: ManagedBlockchainNetworkFrameworkAttributes;

  /**
   * @schema ManagedBlockchainNetwork#VpcEndpointServiceName
   */
  readonly vpcEndpointServiceName?: string;

  /**
   * @schema ManagedBlockchainNetwork#VotingPolicy
   */
  readonly votingPolicy?: ManagedBlockchainVotingPolicy;

  /**
   * @schema ManagedBlockchainNetwork#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainNetwork#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainNetwork#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ManagedBlockchainNetwork#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNetwork' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetwork(obj: ManagedBlockchainNetwork | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'Framework': obj.framework,
    'FrameworkVersion': obj.frameworkVersion,
    'FrameworkAttributes': toJson_ManagedBlockchainNetworkFrameworkAttributes(obj.frameworkAttributes),
    'VpcEndpointServiceName': obj.vpcEndpointServiceName,
    'VotingPolicy': toJson_ManagedBlockchainVotingPolicy(obj.votingPolicy),
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNode
 */
export interface ManagedBlockchainNode {
  /**
   * @schema ManagedBlockchainNode#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainNode#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema ManagedBlockchainNode#Id
   */
  readonly id?: string;

  /**
   * @schema ManagedBlockchainNode#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ManagedBlockchainNode#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ManagedBlockchainNode#FrameworkAttributes
   */
  readonly frameworkAttributes?: ManagedBlockchainNodeFrameworkAttributes;

  /**
   * @schema ManagedBlockchainNode#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainNodeLogPublishingConfiguration;

  /**
   * @schema ManagedBlockchainNode#StateDB
   */
  readonly stateDb?: string;

  /**
   * @schema ManagedBlockchainNode#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainNode#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainNode#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ManagedBlockchainNode#Arn
   */
  readonly arn?: string;

  /**
   * @schema ManagedBlockchainNode#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNode(obj: ManagedBlockchainNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'MemberId': obj.memberId,
    'Id': obj.id,
    'InstanceType': obj.instanceType,
    'AvailabilityZone': obj.availabilityZone,
    'FrameworkAttributes': toJson_ManagedBlockchainNodeFrameworkAttributes(obj.frameworkAttributes),
    'LogPublishingConfiguration': toJson_ManagedBlockchainNodeLogPublishingConfiguration(obj.logPublishingConfiguration),
    'StateDB': obj.stateDb,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Arn': obj.arn,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainProposal
 */
export interface ManagedBlockchainProposal {
  /**
   * @schema ManagedBlockchainProposal#ProposalId
   */
  readonly proposalId?: string;

  /**
   * @schema ManagedBlockchainProposal#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema ManagedBlockchainProposal#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainProposal#Actions
   */
  readonly actions?: ManagedBlockchainProposalActions;

  /**
   * @schema ManagedBlockchainProposal#ProposedByMemberId
   */
  readonly proposedByMemberId?: string;

  /**
   * @schema ManagedBlockchainProposal#ProposedByMemberName
   */
  readonly proposedByMemberName?: string;

  /**
   * @schema ManagedBlockchainProposal#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainProposal#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainProposal#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema ManagedBlockchainProposal#YesVoteCount
   */
  readonly yesVoteCount?: number;

  /**
   * @schema ManagedBlockchainProposal#NoVoteCount
   */
  readonly noVoteCount?: number;

  /**
   * @schema ManagedBlockchainProposal#OutstandingVoteCount
   */
  readonly outstandingVoteCount?: number;

  /**
   * @schema ManagedBlockchainProposal#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ManagedBlockchainProposal#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainProposal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainProposal(obj: ManagedBlockchainProposal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProposalId': obj.proposalId,
    'NetworkId': obj.networkId,
    'Description': obj.description,
    'Actions': toJson_ManagedBlockchainProposalActions(obj.actions),
    'ProposedByMemberId': obj.proposedByMemberId,
    'ProposedByMemberName': obj.proposedByMemberName,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'ExpirationDate': obj.expirationDate,
    'YesVoteCount': obj.yesVoteCount,
    'NoVoteCount': obj.noVoteCount,
    'OutstandingVoteCount': obj.outstandingVoteCount,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainInvitation
 */
export interface ManagedBlockchainInvitation {
  /**
   * @schema ManagedBlockchainInvitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema ManagedBlockchainInvitation#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainInvitation#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema ManagedBlockchainInvitation#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainInvitation#NetworkSummary
   */
  readonly networkSummary?: ManagedBlockchainNetworkSummary;

  /**
   * @schema ManagedBlockchainInvitation#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainInvitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainInvitation(obj: ManagedBlockchainInvitation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvitationId': obj.invitationId,
    'CreationDate': obj.creationDate,
    'ExpirationDate': obj.expirationDate,
    'Status': obj.status,
    'NetworkSummary': toJson_ManagedBlockchainNetworkSummary(obj.networkSummary),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberSummary
 */
export interface ManagedBlockchainMemberSummary {
  /**
   * @schema ManagedBlockchainMemberSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ManagedBlockchainMemberSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainMemberSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainMemberSummary#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainMemberSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainMemberSummary#IsOwned
   */
  readonly isOwned?: boolean;

  /**
   * @schema ManagedBlockchainMemberSummary#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberSummary(obj: ManagedBlockchainMemberSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'IsOwned': obj.isOwned,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetworkSummary
 */
export interface ManagedBlockchainNetworkSummary {
  /**
   * @schema ManagedBlockchainNetworkSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#Framework
   */
  readonly framework?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#FrameworkVersion
   */
  readonly frameworkVersion?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainNetworkSummary#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNetworkSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetworkSummary(obj: ManagedBlockchainNetworkSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'Framework': obj.framework,
    'FrameworkVersion': obj.frameworkVersion,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeSummary
 */
export interface ManagedBlockchainNodeSummary {
  /**
   * @schema ManagedBlockchainNodeSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ManagedBlockchainNodeSummary#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainNodeSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainNodeSummary#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ManagedBlockchainNodeSummary#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ManagedBlockchainNodeSummary#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeSummary(obj: ManagedBlockchainNodeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'AvailabilityZone': obj.availabilityZone,
    'InstanceType': obj.instanceType,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainVoteSummary
 */
export interface ManagedBlockchainVoteSummary {
  /**
   * @schema ManagedBlockchainVoteSummary#Vote
   */
  readonly vote?: string;

  /**
   * @schema ManagedBlockchainVoteSummary#MemberName
   */
  readonly memberName?: string;

  /**
   * @schema ManagedBlockchainVoteSummary#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainVoteSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainVoteSummary(obj: ManagedBlockchainVoteSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Vote': obj.vote,
    'MemberName': obj.memberName,
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainProposalSummary
 */
export interface ManagedBlockchainProposalSummary {
  /**
   * @schema ManagedBlockchainProposalSummary#ProposalId
   */
  readonly proposalId?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#ProposedByMemberId
   */
  readonly proposedByMemberId?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#ProposedByMemberName
   */
  readonly proposedByMemberName?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#Status
   */
  readonly status?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema ManagedBlockchainProposalSummary#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainProposalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainProposalSummary(obj: ManagedBlockchainProposalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProposalId': obj.proposalId,
    'Description': obj.description,
    'ProposedByMemberId': obj.proposedByMemberId,
    'ProposedByMemberName': obj.proposedByMemberName,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'ExpirationDate': obj.expirationDate,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberLogPublishingConfiguration
 */
export interface ManagedBlockchainMemberLogPublishingConfiguration {
  /**
   * @schema ManagedBlockchainMemberLogPublishingConfiguration#Fabric
   */
  readonly fabric?: ManagedBlockchainMemberFabricLogPublishingConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberLogPublishingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberLogPublishingConfiguration(obj: ManagedBlockchainMemberLogPublishingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainMemberFabricLogPublishingConfiguration(obj.fabric),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeLogPublishingConfiguration
 */
export interface ManagedBlockchainNodeLogPublishingConfiguration {
  /**
   * @schema ManagedBlockchainNodeLogPublishingConfiguration#Fabric
   */
  readonly fabric?: ManagedBlockchainNodeFabricLogPublishingConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeLogPublishingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeLogPublishingConfiguration(obj: ManagedBlockchainNodeLogPublishingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainNodeFabricLogPublishingConfiguration(obj.fabric),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberFrameworkConfiguration
 */
export interface ManagedBlockchainMemberFrameworkConfiguration {
  /**
   * @schema ManagedBlockchainMemberFrameworkConfiguration#Fabric
   */
  readonly fabric?: ManagedBlockchainMemberFabricConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberFrameworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberFrameworkConfiguration(obj: ManagedBlockchainMemberFrameworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainMemberFabricConfiguration(obj.fabric),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetworkFabricConfiguration
 */
export interface ManagedBlockchainNetworkFabricConfiguration {
  /**
   * @schema ManagedBlockchainNetworkFabricConfiguration#Edition
   */
  readonly edition?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNetworkFabricConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetworkFabricConfiguration(obj: ManagedBlockchainNetworkFabricConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Edition': obj.edition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainApprovalThresholdPolicy
 */
export interface ManagedBlockchainApprovalThresholdPolicy {
  /**
   * @schema ManagedBlockchainApprovalThresholdPolicy#ThresholdPercentage
   */
  readonly thresholdPercentage?: number;

  /**
   * @schema ManagedBlockchainApprovalThresholdPolicy#ProposalDurationInHours
   */
  readonly proposalDurationInHours?: number;

  /**
   * @schema ManagedBlockchainApprovalThresholdPolicy#ThresholdComparator
   */
  readonly thresholdComparator?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainApprovalThresholdPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainApprovalThresholdPolicy(obj: ManagedBlockchainApprovalThresholdPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThresholdPercentage': obj.thresholdPercentage,
    'ProposalDurationInHours': obj.proposalDurationInHours,
    'ThresholdComparator': obj.thresholdComparator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainInviteAction
 */
export interface ManagedBlockchainInviteAction {
  /**
   * @schema ManagedBlockchainInviteAction#Principal
   */
  readonly principal?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainInviteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainInviteAction(obj: ManagedBlockchainInviteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principal': obj.principal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainRemoveAction
 */
export interface ManagedBlockchainRemoveAction {
  /**
   * @schema ManagedBlockchainRemoveAction#MemberId
   */
  readonly memberId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainRemoveAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainRemoveAction(obj: ManagedBlockchainRemoveAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberFrameworkAttributes
 */
export interface ManagedBlockchainMemberFrameworkAttributes {
  /**
   * @schema ManagedBlockchainMemberFrameworkAttributes#Fabric
   */
  readonly fabric?: ManagedBlockchainMemberFabricAttributes;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberFrameworkAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberFrameworkAttributes(obj: ManagedBlockchainMemberFrameworkAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainMemberFabricAttributes(obj.fabric),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetworkFrameworkAttributes
 */
export interface ManagedBlockchainNetworkFrameworkAttributes {
  /**
   * @schema ManagedBlockchainNetworkFrameworkAttributes#Fabric
   */
  readonly fabric?: ManagedBlockchainNetworkFabricAttributes;

  /**
   * @schema ManagedBlockchainNetworkFrameworkAttributes#Ethereum
   */
  readonly ethereum?: ManagedBlockchainNetworkEthereumAttributes;

}

/**
 * Converts an object of type 'ManagedBlockchainNetworkFrameworkAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetworkFrameworkAttributes(obj: ManagedBlockchainNetworkFrameworkAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainNetworkFabricAttributes(obj.fabric),
    'Ethereum': toJson_ManagedBlockchainNetworkEthereumAttributes(obj.ethereum),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeFrameworkAttributes
 */
export interface ManagedBlockchainNodeFrameworkAttributes {
  /**
   * @schema ManagedBlockchainNodeFrameworkAttributes#Fabric
   */
  readonly fabric?: ManagedBlockchainNodeFabricAttributes;

  /**
   * @schema ManagedBlockchainNodeFrameworkAttributes#Ethereum
   */
  readonly ethereum?: ManagedBlockchainNodeEthereumAttributes;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeFrameworkAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeFrameworkAttributes(obj: ManagedBlockchainNodeFrameworkAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fabric': toJson_ManagedBlockchainNodeFabricAttributes(obj.fabric),
    'Ethereum': toJson_ManagedBlockchainNodeEthereumAttributes(obj.ethereum),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberFabricLogPublishingConfiguration
 */
export interface ManagedBlockchainMemberFabricLogPublishingConfiguration {
  /**
   * @schema ManagedBlockchainMemberFabricLogPublishingConfiguration#CaLogs
   */
  readonly caLogs?: ManagedBlockchainLogConfigurations;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberFabricLogPublishingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberFabricLogPublishingConfiguration(obj: ManagedBlockchainMemberFabricLogPublishingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaLogs': toJson_ManagedBlockchainLogConfigurations(obj.caLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeFabricLogPublishingConfiguration
 */
export interface ManagedBlockchainNodeFabricLogPublishingConfiguration {
  /**
   * @schema ManagedBlockchainNodeFabricLogPublishingConfiguration#ChaincodeLogs
   */
  readonly chaincodeLogs?: ManagedBlockchainLogConfigurations;

  /**
   * @schema ManagedBlockchainNodeFabricLogPublishingConfiguration#PeerLogs
   */
  readonly peerLogs?: ManagedBlockchainLogConfigurations;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeFabricLogPublishingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeFabricLogPublishingConfiguration(obj: ManagedBlockchainNodeFabricLogPublishingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChaincodeLogs': toJson_ManagedBlockchainLogConfigurations(obj.chaincodeLogs),
    'PeerLogs': toJson_ManagedBlockchainLogConfigurations(obj.peerLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberFabricConfiguration
 */
export interface ManagedBlockchainMemberFabricConfiguration {
  /**
   * @schema ManagedBlockchainMemberFabricConfiguration#AdminUsername
   */
  readonly adminUsername?: string;

  /**
   * @schema ManagedBlockchainMemberFabricConfiguration#AdminPassword
   */
  readonly adminPassword?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberFabricConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberFabricConfiguration(obj: ManagedBlockchainMemberFabricConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminUsername': obj.adminUsername,
    'AdminPassword': obj.adminPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainMemberFabricAttributes
 */
export interface ManagedBlockchainMemberFabricAttributes {
  /**
   * @schema ManagedBlockchainMemberFabricAttributes#AdminUsername
   */
  readonly adminUsername?: string;

  /**
   * @schema ManagedBlockchainMemberFabricAttributes#CaEndpoint
   */
  readonly caEndpoint?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainMemberFabricAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainMemberFabricAttributes(obj: ManagedBlockchainMemberFabricAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdminUsername': obj.adminUsername,
    'CaEndpoint': obj.caEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetworkFabricAttributes
 */
export interface ManagedBlockchainNetworkFabricAttributes {
  /**
   * @schema ManagedBlockchainNetworkFabricAttributes#OrderingServiceEndpoint
   */
  readonly orderingServiceEndpoint?: string;

  /**
   * @schema ManagedBlockchainNetworkFabricAttributes#Edition
   */
  readonly edition?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNetworkFabricAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetworkFabricAttributes(obj: ManagedBlockchainNetworkFabricAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderingServiceEndpoint': obj.orderingServiceEndpoint,
    'Edition': obj.edition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNetworkEthereumAttributes
 */
export interface ManagedBlockchainNetworkEthereumAttributes {
  /**
   * @schema ManagedBlockchainNetworkEthereumAttributes#ChainId
   */
  readonly chainId?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNetworkEthereumAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNetworkEthereumAttributes(obj: ManagedBlockchainNetworkEthereumAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChainId': obj.chainId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeFabricAttributes
 */
export interface ManagedBlockchainNodeFabricAttributes {
  /**
   * @schema ManagedBlockchainNodeFabricAttributes#PeerEndpoint
   */
  readonly peerEndpoint?: string;

  /**
   * @schema ManagedBlockchainNodeFabricAttributes#PeerEventEndpoint
   */
  readonly peerEventEndpoint?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeFabricAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeFabricAttributes(obj: ManagedBlockchainNodeFabricAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PeerEndpoint': obj.peerEndpoint,
    'PeerEventEndpoint': obj.peerEventEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainNodeEthereumAttributes
 */
export interface ManagedBlockchainNodeEthereumAttributes {
  /**
   * @schema ManagedBlockchainNodeEthereumAttributes#HttpEndpoint
   */
  readonly httpEndpoint?: string;

  /**
   * @schema ManagedBlockchainNodeEthereumAttributes#WebSocketEndpoint
   */
  readonly webSocketEndpoint?: string;

}

/**
 * Converts an object of type 'ManagedBlockchainNodeEthereumAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainNodeEthereumAttributes(obj: ManagedBlockchainNodeEthereumAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpEndpoint': obj.httpEndpoint,
    'WebSocketEndpoint': obj.webSocketEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainLogConfigurations
 */
export interface ManagedBlockchainLogConfigurations {
  /**
   * @schema ManagedBlockchainLogConfigurations#Cloudwatch
   */
  readonly cloudwatch?: ManagedBlockchainLogConfiguration;

}

/**
 * Converts an object of type 'ManagedBlockchainLogConfigurations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainLogConfigurations(obj: ManagedBlockchainLogConfigurations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cloudwatch': toJson_ManagedBlockchainLogConfiguration(obj.cloudwatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ManagedBlockchainLogConfiguration
 */
export interface ManagedBlockchainLogConfiguration {
  /**
   * @schema ManagedBlockchainLogConfiguration#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'ManagedBlockchainLogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedBlockchainLogConfiguration(obj: ManagedBlockchainLogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
