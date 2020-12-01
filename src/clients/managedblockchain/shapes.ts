/**
 * @schema CreateMemberInput
 */
export interface CreateMemberInput {
  /**
   * @schema CreateMemberInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateMemberInput#InvitationId
   */
  readonly invitationId: string;

  /**
   * @schema CreateMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema CreateMemberInput#MemberConfiguration
   */
  readonly memberConfiguration: MemberConfiguration;

}

/**
 * @schema CreateMemberOutput
 */
export interface CreateMemberOutput {
  /**
   * @schema CreateMemberOutput#MemberId
   */
  readonly memberId?: string;

}

/**
 * @schema CreateNetworkInput
 */
export interface CreateNetworkInput {
  /**
   * @schema CreateNetworkInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateNetworkInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateNetworkInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateNetworkInput#Framework
   */
  readonly framework: string;

  /**
   * @schema CreateNetworkInput#FrameworkVersion
   */
  readonly frameworkVersion: string;

  /**
   * @schema CreateNetworkInput#FrameworkConfiguration
   */
  readonly frameworkConfiguration?: NetworkFrameworkConfiguration;

  /**
   * @schema CreateNetworkInput#VotingPolicy
   */
  readonly votingPolicy: VotingPolicy;

  /**
   * @schema CreateNetworkInput#MemberConfiguration
   */
  readonly memberConfiguration: MemberConfiguration;

}

/**
 * @schema CreateNetworkOutput
 */
export interface CreateNetworkOutput {
  /**
   * @schema CreateNetworkOutput#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema CreateNetworkOutput#MemberId
   */
  readonly memberId?: string;

}

/**
 * @schema CreateNodeInput
 */
export interface CreateNodeInput {
  /**
   * @schema CreateNodeInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema CreateNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema CreateNodeInput#NodeConfiguration
   */
  readonly nodeConfiguration: NodeConfiguration;

}

/**
 * @schema CreateNodeOutput
 */
export interface CreateNodeOutput {
  /**
   * @schema CreateNodeOutput#NodeId
   */
  readonly nodeId?: string;

}

/**
 * @schema CreateProposalInput
 */
export interface CreateProposalInput {
  /**
   * @schema CreateProposalInput#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateProposalInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema CreateProposalInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema CreateProposalInput#Actions
   */
  readonly actions: ProposalActions;

  /**
   * @schema CreateProposalInput#Description
   */
  readonly description?: string;

}

/**
 * @schema CreateProposalOutput
 */
export interface CreateProposalOutput {
  /**
   * @schema CreateProposalOutput#ProposalId
   */
  readonly proposalId?: string;

}

/**
 * @schema DeleteMemberInput
 */
export interface DeleteMemberInput {
  /**
   * @schema DeleteMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema DeleteMemberInput#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema DeleteMemberOutput
 */
export interface DeleteMemberOutput {
}

/**
 * @schema DeleteNodeInput
 */
export interface DeleteNodeInput {
  /**
   * @schema DeleteNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema DeleteNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema DeleteNodeInput#NodeId
   */
  readonly nodeId: string;

}

/**
 * @schema DeleteNodeOutput
 */
export interface DeleteNodeOutput {
}

/**
 * @schema GetMemberInput
 */
export interface GetMemberInput {
  /**
   * @schema GetMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema GetMemberInput#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema GetMemberOutput
 */
export interface GetMemberOutput {
  /**
   * @schema GetMemberOutput#Member
   */
  readonly member?: Member;

}

/**
 * @schema GetNetworkInput
 */
export interface GetNetworkInput {
  /**
   * @schema GetNetworkInput#NetworkId
   */
  readonly networkId: string;

}

/**
 * @schema GetNetworkOutput
 */
export interface GetNetworkOutput {
  /**
   * @schema GetNetworkOutput#Network
   */
  readonly network?: Network;

}

/**
 * @schema GetNodeInput
 */
export interface GetNodeInput {
  /**
   * @schema GetNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema GetNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema GetNodeInput#NodeId
   */
  readonly nodeId: string;

}

/**
 * @schema GetNodeOutput
 */
export interface GetNodeOutput {
  /**
   * @schema GetNodeOutput#Node
   */
  readonly node?: Node;

}

/**
 * @schema GetProposalInput
 */
export interface GetProposalInput {
  /**
   * @schema GetProposalInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema GetProposalInput#ProposalId
   */
  readonly proposalId: string;

}

/**
 * @schema GetProposalOutput
 */
export interface GetProposalOutput {
  /**
   * @schema GetProposalOutput#Proposal
   */
  readonly proposal?: Proposal;

}

/**
 * @schema ListInvitationsInput
 */
export interface ListInvitationsInput {
  /**
   * @schema ListInvitationsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListInvitationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInvitationsOutput
 */
export interface ListInvitationsOutput {
  /**
   * @schema ListInvitationsOutput#Invitations
   */
  readonly invitations?: Invitation[];

  /**
   * @schema ListInvitationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMembersInput
 */
export interface ListMembersInput {
  /**
   * @schema ListMembersInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ListMembersInput#Name
   */
  readonly name?: string;

  /**
   * @schema ListMembersInput#Status
   */
  readonly status?: string;

  /**
   * @schema ListMembersInput#IsOwned
   */
  readonly isOwned?: boolean;

  /**
   * @schema ListMembersInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMembersInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMembersOutput
 */
export interface ListMembersOutput {
  /**
   * @schema ListMembersOutput#Members
   */
  readonly members?: MemberSummary[];

  /**
   * @schema ListMembersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNetworksInput
 */
export interface ListNetworksInput {
  /**
   * @schema ListNetworksInput#Name
   */
  readonly name?: string;

  /**
   * @schema ListNetworksInput#Framework
   */
  readonly framework?: string;

  /**
   * @schema ListNetworksInput#Status
   */
  readonly status?: string;

  /**
   * @schema ListNetworksInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNetworksInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNetworksOutput
 */
export interface ListNetworksOutput {
  /**
   * @schema ListNetworksOutput#Networks
   */
  readonly networks?: NetworkSummary[];

  /**
   * @schema ListNetworksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNodesInput
 */
export interface ListNodesInput {
  /**
   * @schema ListNodesInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ListNodesInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema ListNodesInput#Status
   */
  readonly status?: string;

  /**
   * @schema ListNodesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNodesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNodesOutput
 */
export interface ListNodesOutput {
  /**
   * @schema ListNodesOutput#Nodes
   */
  readonly nodes?: NodeSummary[];

  /**
   * @schema ListNodesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProposalVotesInput
 */
export interface ListProposalVotesInput {
  /**
   * @schema ListProposalVotesInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ListProposalVotesInput#ProposalId
   */
  readonly proposalId: string;

  /**
   * @schema ListProposalVotesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProposalVotesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProposalVotesOutput
 */
export interface ListProposalVotesOutput {
  /**
   * @schema ListProposalVotesOutput#ProposalVotes
   */
  readonly proposalVotes?: VoteSummary[];

  /**
   * @schema ListProposalVotesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProposalsInput
 */
export interface ListProposalsInput {
  /**
   * @schema ListProposalsInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema ListProposalsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProposalsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProposalsOutput
 */
export interface ListProposalsOutput {
  /**
   * @schema ListProposalsOutput#Proposals
   */
  readonly proposals?: ProposalSummary[];

  /**
   * @schema ListProposalsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RejectInvitationInput
 */
export interface RejectInvitationInput {
  /**
   * @schema RejectInvitationInput#InvitationId
   */
  readonly invitationId: string;

}

/**
 * @schema RejectInvitationOutput
 */
export interface RejectInvitationOutput {
}

/**
 * @schema UpdateMemberInput
 */
export interface UpdateMemberInput {
  /**
   * @schema UpdateMemberInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema UpdateMemberInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema UpdateMemberInput#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: MemberLogPublishingConfiguration;

}

/**
 * @schema UpdateMemberOutput
 */
export interface UpdateMemberOutput {
}

/**
 * @schema UpdateNodeInput
 */
export interface UpdateNodeInput {
  /**
   * @schema UpdateNodeInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema UpdateNodeInput#MemberId
   */
  readonly memberId: string;

  /**
   * @schema UpdateNodeInput#NodeId
   */
  readonly nodeId: string;

  /**
   * @schema UpdateNodeInput#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: NodeLogPublishingConfiguration;

}

/**
 * @schema UpdateNodeOutput
 */
export interface UpdateNodeOutput {
}

/**
 * @schema VoteOnProposalInput
 */
export interface VoteOnProposalInput {
  /**
   * @schema VoteOnProposalInput#NetworkId
   */
  readonly networkId: string;

  /**
   * @schema VoteOnProposalInput#ProposalId
   */
  readonly proposalId: string;

  /**
   * @schema VoteOnProposalInput#VoterMemberId
   */
  readonly voterMemberId: string;

  /**
   * @schema VoteOnProposalInput#Vote
   */
  readonly vote: string;

}

/**
 * @schema VoteOnProposalOutput
 */
export interface VoteOnProposalOutput {
}

/**
 * @schema MemberConfiguration
 */
export interface MemberConfiguration {
  /**
   * @schema MemberConfiguration#Name
   */
  readonly name: string;

  /**
   * @schema MemberConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema MemberConfiguration#FrameworkConfiguration
   */
  readonly frameworkConfiguration: MemberFrameworkConfiguration;

  /**
   * @schema MemberConfiguration#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: MemberLogPublishingConfiguration;

}

/**
 * @schema NetworkFrameworkConfiguration
 */
export interface NetworkFrameworkConfiguration {
  /**
   * @schema NetworkFrameworkConfiguration#Fabric
   */
  readonly fabric?: NetworkFabricConfiguration;

}

/**
 * @schema VotingPolicy
 */
export interface VotingPolicy {
  /**
   * @schema VotingPolicy#ApprovalThresholdPolicy
   */
  readonly approvalThresholdPolicy?: ApprovalThresholdPolicy;

}

/**
 * @schema NodeConfiguration
 */
export interface NodeConfiguration {
  /**
   * @schema NodeConfiguration#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema NodeConfiguration#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema NodeConfiguration#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: NodeLogPublishingConfiguration;

  /**
   * @schema NodeConfiguration#StateDB
   */
  readonly stateDb?: string;

}

/**
 * @schema ProposalActions
 */
export interface ProposalActions {
  /**
   * @schema ProposalActions#Invitations
   */
  readonly invitations?: InviteAction[];

  /**
   * @schema ProposalActions#Removals
   */
  readonly removals?: RemoveAction[];

}

/**
 * @schema Member
 */
export interface Member {
  /**
   * @schema Member#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema Member#Id
   */
  readonly id?: string;

  /**
   * @schema Member#Name
   */
  readonly name?: string;

  /**
   * @schema Member#Description
   */
  readonly description?: string;

  /**
   * @schema Member#FrameworkAttributes
   */
  readonly frameworkAttributes?: MemberFrameworkAttributes;

  /**
   * @schema Member#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: MemberLogPublishingConfiguration;

  /**
   * @schema Member#Status
   */
  readonly status?: string;

  /**
   * @schema Member#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema Network
 */
export interface Network {
  /**
   * @schema Network#Id
   */
  readonly id?: string;

  /**
   * @schema Network#Name
   */
  readonly name?: string;

  /**
   * @schema Network#Description
   */
  readonly description?: string;

  /**
   * @schema Network#Framework
   */
  readonly framework?: string;

  /**
   * @schema Network#FrameworkVersion
   */
  readonly frameworkVersion?: string;

  /**
   * @schema Network#FrameworkAttributes
   */
  readonly frameworkAttributes?: NetworkFrameworkAttributes;

  /**
   * @schema Network#VpcEndpointServiceName
   */
  readonly vpcEndpointServiceName?: string;

  /**
   * @schema Network#VotingPolicy
   */
  readonly votingPolicy?: VotingPolicy;

  /**
   * @schema Network#Status
   */
  readonly status?: string;

  /**
   * @schema Network#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema Node
 */
export interface Node {
  /**
   * @schema Node#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema Node#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema Node#Id
   */
  readonly id?: string;

  /**
   * @schema Node#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Node#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Node#FrameworkAttributes
   */
  readonly frameworkAttributes?: NodeFrameworkAttributes;

  /**
   * @schema Node#LogPublishingConfiguration
   */
  readonly logPublishingConfiguration?: NodeLogPublishingConfiguration;

  /**
   * @schema Node#StateDB
   */
  readonly stateDb?: string;

  /**
   * @schema Node#Status
   */
  readonly status?: string;

  /**
   * @schema Node#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema Proposal
 */
export interface Proposal {
  /**
   * @schema Proposal#ProposalId
   */
  readonly proposalId?: string;

  /**
   * @schema Proposal#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema Proposal#Description
   */
  readonly description?: string;

  /**
   * @schema Proposal#Actions
   */
  readonly actions?: ProposalActions;

  /**
   * @schema Proposal#ProposedByMemberId
   */
  readonly proposedByMemberId?: string;

  /**
   * @schema Proposal#ProposedByMemberName
   */
  readonly proposedByMemberName?: string;

  /**
   * @schema Proposal#Status
   */
  readonly status?: string;

  /**
   * @schema Proposal#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Proposal#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema Proposal#YesVoteCount
   */
  readonly yesVoteCount?: number;

  /**
   * @schema Proposal#NoVoteCount
   */
  readonly noVoteCount?: number;

  /**
   * @schema Proposal#OutstandingVoteCount
   */
  readonly outstandingVoteCount?: number;

}

/**
 * @schema Invitation
 */
export interface Invitation {
  /**
   * @schema Invitation#InvitationId
   */
  readonly invitationId?: string;

  /**
   * @schema Invitation#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Invitation#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema Invitation#Status
   */
  readonly status?: string;

  /**
   * @schema Invitation#NetworkSummary
   */
  readonly networkSummary?: NetworkSummary;

}

/**
 * @schema MemberSummary
 */
export interface MemberSummary {
  /**
   * @schema MemberSummary#Id
   */
  readonly id?: string;

  /**
   * @schema MemberSummary#Name
   */
  readonly name?: string;

  /**
   * @schema MemberSummary#Description
   */
  readonly description?: string;

  /**
   * @schema MemberSummary#Status
   */
  readonly status?: string;

  /**
   * @schema MemberSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema MemberSummary#IsOwned
   */
  readonly isOwned?: boolean;

}

/**
 * @schema NetworkSummary
 */
export interface NetworkSummary {
  /**
   * @schema NetworkSummary#Id
   */
  readonly id?: string;

  /**
   * @schema NetworkSummary#Name
   */
  readonly name?: string;

  /**
   * @schema NetworkSummary#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkSummary#Framework
   */
  readonly framework?: string;

  /**
   * @schema NetworkSummary#FrameworkVersion
   */
  readonly frameworkVersion?: string;

  /**
   * @schema NetworkSummary#Status
   */
  readonly status?: string;

  /**
   * @schema NetworkSummary#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema NodeSummary
 */
export interface NodeSummary {
  /**
   * @schema NodeSummary#Id
   */
  readonly id?: string;

  /**
   * @schema NodeSummary#Status
   */
  readonly status?: string;

  /**
   * @schema NodeSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema NodeSummary#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NodeSummary#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema VoteSummary
 */
export interface VoteSummary {
  /**
   * @schema VoteSummary#Vote
   */
  readonly vote?: string;

  /**
   * @schema VoteSummary#MemberName
   */
  readonly memberName?: string;

  /**
   * @schema VoteSummary#MemberId
   */
  readonly memberId?: string;

}

/**
 * @schema ProposalSummary
 */
export interface ProposalSummary {
  /**
   * @schema ProposalSummary#ProposalId
   */
  readonly proposalId?: string;

  /**
   * @schema ProposalSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ProposalSummary#ProposedByMemberId
   */
  readonly proposedByMemberId?: string;

  /**
   * @schema ProposalSummary#ProposedByMemberName
   */
  readonly proposedByMemberName?: string;

  /**
   * @schema ProposalSummary#Status
   */
  readonly status?: string;

  /**
   * @schema ProposalSummary#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ProposalSummary#ExpirationDate
   */
  readonly expirationDate?: string;

}

/**
 * @schema MemberLogPublishingConfiguration
 */
export interface MemberLogPublishingConfiguration {
  /**
   * @schema MemberLogPublishingConfiguration#Fabric
   */
  readonly fabric?: MemberFabricLogPublishingConfiguration;

}

/**
 * @schema NodeLogPublishingConfiguration
 */
export interface NodeLogPublishingConfiguration {
  /**
   * @schema NodeLogPublishingConfiguration#Fabric
   */
  readonly fabric?: NodeFabricLogPublishingConfiguration;

}

/**
 * @schema MemberFrameworkConfiguration
 */
export interface MemberFrameworkConfiguration {
  /**
   * @schema MemberFrameworkConfiguration#Fabric
   */
  readonly fabric?: MemberFabricConfiguration;

}

/**
 * @schema NetworkFabricConfiguration
 */
export interface NetworkFabricConfiguration {
  /**
   * @schema NetworkFabricConfiguration#Edition
   */
  readonly edition: string;

}

/**
 * @schema ApprovalThresholdPolicy
 */
export interface ApprovalThresholdPolicy {
  /**
   * @schema ApprovalThresholdPolicy#ThresholdPercentage
   */
  readonly thresholdPercentage?: number;

  /**
   * @schema ApprovalThresholdPolicy#ProposalDurationInHours
   */
  readonly proposalDurationInHours?: number;

  /**
   * @schema ApprovalThresholdPolicy#ThresholdComparator
   */
  readonly thresholdComparator?: string;

}

/**
 * @schema InviteAction
 */
export interface InviteAction {
  /**
   * @schema InviteAction#Principal
   */
  readonly principal: string;

}

/**
 * @schema RemoveAction
 */
export interface RemoveAction {
  /**
   * @schema RemoveAction#MemberId
   */
  readonly memberId: string;

}

/**
 * @schema MemberFrameworkAttributes
 */
export interface MemberFrameworkAttributes {
  /**
   * @schema MemberFrameworkAttributes#Fabric
   */
  readonly fabric?: MemberFabricAttributes;

}

/**
 * @schema NetworkFrameworkAttributes
 */
export interface NetworkFrameworkAttributes {
  /**
   * @schema NetworkFrameworkAttributes#Fabric
   */
  readonly fabric?: NetworkFabricAttributes;

}

/**
 * @schema NodeFrameworkAttributes
 */
export interface NodeFrameworkAttributes {
  /**
   * @schema NodeFrameworkAttributes#Fabric
   */
  readonly fabric?: NodeFabricAttributes;

}

/**
 * @schema MemberFabricLogPublishingConfiguration
 */
export interface MemberFabricLogPublishingConfiguration {
  /**
   * @schema MemberFabricLogPublishingConfiguration#CaLogs
   */
  readonly caLogs?: LogConfigurations;

}

/**
 * @schema NodeFabricLogPublishingConfiguration
 */
export interface NodeFabricLogPublishingConfiguration {
  /**
   * @schema NodeFabricLogPublishingConfiguration#ChaincodeLogs
   */
  readonly chaincodeLogs?: LogConfigurations;

  /**
   * @schema NodeFabricLogPublishingConfiguration#PeerLogs
   */
  readonly peerLogs?: LogConfigurations;

}

/**
 * @schema MemberFabricConfiguration
 */
export interface MemberFabricConfiguration {
  /**
   * @schema MemberFabricConfiguration#AdminUsername
   */
  readonly adminUsername: string;

  /**
   * @schema MemberFabricConfiguration#AdminPassword
   */
  readonly adminPassword: string;

}

/**
 * @schema MemberFabricAttributes
 */
export interface MemberFabricAttributes {
  /**
   * @schema MemberFabricAttributes#AdminUsername
   */
  readonly adminUsername?: string;

  /**
   * @schema MemberFabricAttributes#CaEndpoint
   */
  readonly caEndpoint?: string;

}

/**
 * @schema NetworkFabricAttributes
 */
export interface NetworkFabricAttributes {
  /**
   * @schema NetworkFabricAttributes#OrderingServiceEndpoint
   */
  readonly orderingServiceEndpoint?: string;

  /**
   * @schema NetworkFabricAttributes#Edition
   */
  readonly edition?: string;

}

/**
 * @schema NodeFabricAttributes
 */
export interface NodeFabricAttributes {
  /**
   * @schema NodeFabricAttributes#PeerEndpoint
   */
  readonly peerEndpoint?: string;

  /**
   * @schema NodeFabricAttributes#PeerEventEndpoint
   */
  readonly peerEventEndpoint?: string;

}

/**
 * @schema LogConfigurations
 */
export interface LogConfigurations {
  /**
   * @schema LogConfigurations#Cloudwatch
   */
  readonly cloudwatch?: LogConfiguration;

}

/**
 * @schema LogConfiguration
 */
export interface LogConfiguration {
  /**
   * @schema LogConfiguration#Enabled
   */
  readonly enabled?: boolean;

}
