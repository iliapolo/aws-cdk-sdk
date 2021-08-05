/**
 * @schema ManagedBlockchainCreateMemberInput
 */
export interface ManagedBlockchainCreateMemberInput {
  /**
   * @schema ManagedBlockchainCreateMemberInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ManagedBlockchainCreateMemberInput#InvitationId
   */
  readonly invitationId: string;

  /**
   * @schema ManagedBlockchainCreateMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainCreateMemberInput#MemberConfiguration
   */
  readonly memberConfiguration: ManagedBlockchainMemberConfiguration;

}

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
 * @schema ManagedBlockchainCreateNetworkInput
 */
export interface ManagedBlockchainCreateNetworkInput {
  /**
   * @schema ManagedBlockchainCreateNetworkInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Name
   */
  readonly name: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#Framework
   */
  readonly framework: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#FrameworkVersion
   */
  readonly frameworkVersion: string;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#FrameworkConfiguration
   */
  readonly frameworkConfiguration?: ManagedBlockchainNetworkFrameworkConfiguration;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#VotingPolicy
   */
  readonly votingPolicy: ManagedBlockchainVotingPolicy;

  /**
   * @schema ManagedBlockchainCreateNetworkInput#MemberConfiguration
   */
  readonly memberConfiguration: ManagedBlockchainMemberConfiguration;

}

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
 * @schema ManagedBlockchainCreateNodeInput
 */
export interface ManagedBlockchainCreateNodeInput {
  /**
   * @schema ManagedBlockchainCreateNodeInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ManagedBlockchainCreateNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainCreateNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ManagedBlockchainCreateNodeInput#NodeConfiguration
   */
  readonly nodeConfiguration: ManagedBlockchainNodeConfiguration;

}

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
 * @schema ManagedBlockchainCreateProposalInput
 */
export interface ManagedBlockchainCreateProposalInput {
  /**
   * @schema ManagedBlockchainCreateProposalInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ManagedBlockchainCreateProposalInput#Actions
   */
  readonly actions: ManagedBlockchainProposalActions;

  /**
   * @schema ManagedBlockchainCreateProposalInput#Description
   */
  readonly description?: string;

}

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
 * @schema ManagedBlockchainDeleteMemberInput
 */
export interface ManagedBlockchainDeleteMemberInput {
  /**
   * @schema ManagedBlockchainDeleteMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainDeleteMemberInput#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema ManagedBlockchainDeleteMemberOutput
 */
export interface ManagedBlockchainDeleteMemberOutput {
}

/**
 * @schema ManagedBlockchainDeleteNodeInput
 */
export interface ManagedBlockchainDeleteNodeInput {
  /**
   * @schema ManagedBlockchainDeleteNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainDeleteNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ManagedBlockchainDeleteNodeInput#NodeId
   */
  readonly nodeId: string;

}

/**
 * @schema ManagedBlockchainDeleteNodeOutput
 */
export interface ManagedBlockchainDeleteNodeOutput {
}

/**
 * @schema ManagedBlockchainGetMemberInput
 */
export interface ManagedBlockchainGetMemberInput {
  /**
   * @schema ManagedBlockchainGetMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainGetMemberInput#MemberId
   */
  readonly memberId: string;

}

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
 * @schema ManagedBlockchainGetNetworkInput
 */
export interface ManagedBlockchainGetNetworkInput {
  /**
   * @schema ManagedBlockchainGetNetworkInput#NetworkId
   */
  readonly networkId: string;

}

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
 * @schema ManagedBlockchainGetNodeInput
 */
export interface ManagedBlockchainGetNodeInput {
  /**
   * @schema ManagedBlockchainGetNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainGetNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ManagedBlockchainGetNodeInput#NodeId
   */
  readonly nodeId: string;

}

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
 * @schema ManagedBlockchainGetProposalInput
 */
export interface ManagedBlockchainGetProposalInput {
  /**
   * @schema ManagedBlockchainGetProposalInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainGetProposalInput#ProposalId
   */
  readonly proposalId: string;

}

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
 * @schema ManagedBlockchainListMembersInput
 */
export interface ManagedBlockchainListMembersInput {
  /**
   * @schema ManagedBlockchainListMembersInput#NetworkId
   */
  readonly networkId: string;

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
 * @schema ManagedBlockchainListNodesInput
 */
export interface ManagedBlockchainListNodesInput {
  /**
   * @schema ManagedBlockchainListNodesInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainListNodesInput#MemberId
   */
  readonly memberId: string;

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
 * @schema ManagedBlockchainListProposalVotesInput
 */
export interface ManagedBlockchainListProposalVotesInput {
  /**
   * @schema ManagedBlockchainListProposalVotesInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainListProposalVotesInput#ProposalId
   */
  readonly proposalId: string;

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
 * @schema ManagedBlockchainListProposalsInput
 */
export interface ManagedBlockchainListProposalsInput {
  /**
   * @schema ManagedBlockchainListProposalsInput#NetworkId
   */
  readonly networkId: string;

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
 * @schema ManagedBlockchainRejectInvitationInput
 */
export interface ManagedBlockchainRejectInvitationInput {
  /**
   * @schema ManagedBlockchainRejectInvitationInput#InvitationId
   */
  readonly invitationId: string;

}

/**
 * @schema ManagedBlockchainRejectInvitationOutput
 */
export interface ManagedBlockchainRejectInvitationOutput {
}

/**
 * @schema ManagedBlockchainUpdateMemberInput
 */
export interface ManagedBlockchainUpdateMemberInput {
  /**
   * @schema ManagedBlockchainUpdateMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainUpdateMemberInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ManagedBlockchainUpdateMemberInput#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainMemberLogPublishingConfiguration;

}

/**
 * @schema ManagedBlockchainUpdateMemberOutput
 */
export interface ManagedBlockchainUpdateMemberOutput {
}

/**
 * @schema ManagedBlockchainUpdateNodeInput
 */
export interface ManagedBlockchainUpdateNodeInput {
  /**
   * @schema ManagedBlockchainUpdateNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainUpdateNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ManagedBlockchainUpdateNodeInput#NodeId
   */
  readonly nodeId: string;

  /**
   * @schema ManagedBlockchainUpdateNodeInput#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainNodeLogPublishingConfiguration;

}

/**
 * @schema ManagedBlockchainUpdateNodeOutput
 */
export interface ManagedBlockchainUpdateNodeOutput {
}

/**
 * @schema ManagedBlockchainVoteOnProposalInput
 */
export interface ManagedBlockchainVoteOnProposalInput {
  /**
   * @schema ManagedBlockchainVoteOnProposalInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ManagedBlockchainVoteOnProposalInput#ProposalId
   */
  readonly proposalId: string;

  /**
   * @schema ManagedBlockchainVoteOnProposalInput#VoterMemberId
   */
  readonly voterMemberId: string;

  /**
   * @schema ManagedBlockchainVoteOnProposalInput#Vote
   */
  readonly vote: string;

}

/**
 * @schema ManagedBlockchainVoteOnProposalOutput
 */
export interface ManagedBlockchainVoteOnProposalOutput {
}

/**
 * @schema ManagedBlockchainMemberConfiguration
 */
export interface ManagedBlockchainMemberConfiguration {
  /**
   * @schema ManagedBlockchainMemberConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema ManagedBlockchainMemberConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema ManagedBlockchainMemberConfiguration#FrameworkConfiguration
   */
  readonly frameworkConfiguration: ManagedBlockchainMemberFrameworkConfiguration;

  /**
   * @schema ManagedBlockchainMemberConfiguration#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: ManagedBlockchainMemberLogPublishingConfiguration;

}

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
 * @schema ManagedBlockchainVotingPolicy
 */
export interface ManagedBlockchainVotingPolicy {
  /**
   * @schema ManagedBlockchainVotingPolicy#ApprovalThresholdPolicy
   */
  readonly approvalThresholdPolicy?: ManagedBlockchainApprovalThresholdPolicy;

}

/**
 * @schema ManagedBlockchainNodeConfiguration
 */
export interface ManagedBlockchainNodeConfiguration {
  /**
   * @schema ManagedBlockchainNodeConfiguration#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema ManagedBlockchainNodeConfiguration#AvailabilityZone
   */
  readonly availabilityZone: string;

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

}

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

}

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

}

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

}

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

}

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

}

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

}

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

}

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

}

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
 * @schema ManagedBlockchainNodeLogPublishingConfiguration
 */
export interface ManagedBlockchainNodeLogPublishingConfiguration {
  /**
   * @schema ManagedBlockchainNodeLogPublishingConfiguration#Fabric
   */
  readonly fabric?: ManagedBlockchainNodeFabricLogPublishingConfiguration;

}

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
 * @schema ManagedBlockchainNetworkFabricConfiguration
 */
export interface ManagedBlockchainNetworkFabricConfiguration {
  /**
   * @schema ManagedBlockchainNetworkFabricConfiguration#Edition
   */
  readonly edition: string;

}

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
 * @schema ManagedBlockchainInviteAction
 */
export interface ManagedBlockchainInviteAction {
  /**
   * @schema ManagedBlockchainInviteAction#Principal
   */
  readonly principal: string;

}

/**
 * @schema ManagedBlockchainRemoveAction
 */
export interface ManagedBlockchainRemoveAction {
  /**
   * @schema ManagedBlockchainRemoveAction#MemberId
   */
  readonly memberId: string;

}

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
 * @schema ManagedBlockchainNetworkFrameworkAttributes
 */
export interface ManagedBlockchainNetworkFrameworkAttributes {
  /**
   * @schema ManagedBlockchainNetworkFrameworkAttributes#Fabric
   */
  readonly fabric?: ManagedBlockchainNetworkFabricAttributes;

}

/**
 * @schema ManagedBlockchainNodeFrameworkAttributes
 */
export interface ManagedBlockchainNodeFrameworkAttributes {
  /**
   * @schema ManagedBlockchainNodeFrameworkAttributes#Fabric
   */
  readonly fabric?: ManagedBlockchainNodeFabricAttributes;

}

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
 * @schema ManagedBlockchainMemberFabricConfiguration
 */
export interface ManagedBlockchainMemberFabricConfiguration {
  /**
   * @schema ManagedBlockchainMemberFabricConfiguration#AdminUsername
   */
  readonly adminUsername: string;

  /**
   * @schema ManagedBlockchainMemberFabricConfiguration#AdminPassword
   */
  readonly adminPassword: string;

}

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
 * @schema ManagedBlockchainLogConfigurations
 */
export interface ManagedBlockchainLogConfigurations {
  /**
   * @schema ManagedBlockchainLogConfigurations#Cloudwatch
   */
  readonly cloudwatch?: ManagedBlockchainLogConfiguration;

}

/**
 * @schema ManagedBlockchainLogConfiguration
 */
export interface ManagedBlockchainLogConfiguration {
  /**
   * @schema ManagedBlockchainLogConfiguration#Enabled
   */
  readonly enabled?: boolean;

}
