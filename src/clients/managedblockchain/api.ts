import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ManagedBlockchainClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createMember(input: shapes.ManagedBlockchainCreateMemberInput): ManagedBlockchainResponsesCreateMember {
    return new ManagedBlockchainResponsesCreateMember(this, this.__resources, input);
  }

  public createNetwork(input: shapes.ManagedBlockchainCreateNetworkInput): ManagedBlockchainResponsesCreateNetwork {
    return new ManagedBlockchainResponsesCreateNetwork(this, this.__resources, input);
  }

  public createNode(input: shapes.ManagedBlockchainCreateNodeInput): ManagedBlockchainResponsesCreateNode {
    return new ManagedBlockchainResponsesCreateNode(this, this.__resources, input);
  }

  public createProposal(input: shapes.ManagedBlockchainCreateProposalInput): ManagedBlockchainResponsesCreateProposal {
    return new ManagedBlockchainResponsesCreateProposal(this, this.__resources, input);
  }

  public deleteMember(input: shapes.ManagedBlockchainDeleteMemberInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.DeleteMember'),
        parameters: {
          NetworkId: input.networkId,
          MemberId: input.memberId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMember', props);
  }

  public deleteNode(input: shapes.ManagedBlockchainDeleteNodeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.DeleteNode'),
        parameters: {
          NetworkId: input.networkId,
          MemberId: input.memberId,
          NodeId: input.nodeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNode', props);
  }

  public fetchMember(input: shapes.ManagedBlockchainGetMemberInput): ManagedBlockchainResponsesFetchMember {
    return new ManagedBlockchainResponsesFetchMember(this, this.__resources, input);
  }

  public fetchNetwork(input: shapes.ManagedBlockchainGetNetworkInput): ManagedBlockchainResponsesFetchNetwork {
    return new ManagedBlockchainResponsesFetchNetwork(this, this.__resources, input);
  }

  public fetchNode(input: shapes.ManagedBlockchainGetNodeInput): ManagedBlockchainResponsesFetchNode {
    return new ManagedBlockchainResponsesFetchNode(this, this.__resources, input);
  }

  public fetchProposal(input: shapes.ManagedBlockchainGetProposalInput): ManagedBlockchainResponsesFetchProposal {
    return new ManagedBlockchainResponsesFetchProposal(this, this.__resources, input);
  }

  public listInvitations(input: shapes.ManagedBlockchainListInvitationsInput): ManagedBlockchainResponsesListInvitations {
    return new ManagedBlockchainResponsesListInvitations(this, this.__resources, input);
  }

  public listMembers(input: shapes.ManagedBlockchainListMembersInput): ManagedBlockchainResponsesListMembers {
    return new ManagedBlockchainResponsesListMembers(this, this.__resources, input);
  }

  public listNetworks(input: shapes.ManagedBlockchainListNetworksInput): ManagedBlockchainResponsesListNetworks {
    return new ManagedBlockchainResponsesListNetworks(this, this.__resources, input);
  }

  public listNodes(input: shapes.ManagedBlockchainListNodesInput): ManagedBlockchainResponsesListNodes {
    return new ManagedBlockchainResponsesListNodes(this, this.__resources, input);
  }

  public listProposalVotes(input: shapes.ManagedBlockchainListProposalVotesInput): ManagedBlockchainResponsesListProposalVotes {
    return new ManagedBlockchainResponsesListProposalVotes(this, this.__resources, input);
  }

  public listProposals(input: shapes.ManagedBlockchainListProposalsInput): ManagedBlockchainResponsesListProposals {
    return new ManagedBlockchainResponsesListProposals(this, this.__resources, input);
  }

  public rejectInvitation(input: shapes.ManagedBlockchainRejectInvitationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectInvitation',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.RejectInvitation'),
        parameters: {
          InvitationId: input.invitationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RejectInvitation', props);
  }

  public updateMember(input: shapes.ManagedBlockchainUpdateMemberInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.UpdateMember'),
        parameters: {
          NetworkId: input.networkId,
          MemberId: input.memberId,
          LogPublishingConfiguration: {
            Fabric: {
              CaLogs: {
                Cloudwatch: {
                  Enabled: input.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                },
              },
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMember', props);
  }

  public updateNode(input: shapes.ManagedBlockchainUpdateNodeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.UpdateNode'),
        parameters: {
          NetworkId: input.networkId,
          MemberId: input.memberId,
          NodeId: input.nodeId,
          LogPublishingConfiguration: {
            Fabric: {
              ChaincodeLogs: {
                Cloudwatch: {
                  Enabled: input.logPublishingConfiguration?.fabric?.chaincodeLogs?.cloudwatch?.enabled,
                },
              },
              PeerLogs: {
                Cloudwatch: {
                  Enabled: input.logPublishingConfiguration?.fabric?.peerLogs?.cloudwatch?.enabled,
                },
              },
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateNode', props);
  }

  public voteOnProposal(input: shapes.ManagedBlockchainVoteOnProposalInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'voteOnProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.VoteOnProposal'),
        parameters: {
          NetworkId: input.networkId,
          ProposalId: input.proposalId,
          VoterMemberId: input.voterMemberId,
          Vote: input.vote,
        },
      },
    };
    new cr.AwsCustomResource(this, 'VoteOnProposal', props);
  }

}

export class ManagedBlockchainResponsesCreateMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainCreateMemberInput) {
  }

  public get memberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.CreateMember.MemberId'),
        outputPath: 'MemberId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          InvitationId: this.__input.invitationId,
          NetworkId: this.__input.networkId,
          MemberConfiguration: {
            Name: this.__input.memberConfiguration.name,
            Description: this.__input.memberConfiguration.description,
            FrameworkConfiguration: {
              Fabric: {
                AdminUsername: this.__input.memberConfiguration.frameworkConfiguration.fabric?.adminUsername,
                AdminPassword: this.__input.memberConfiguration.frameworkConfiguration.fabric?.adminPassword,
              },
            },
            LogPublishingConfiguration: {
              Fabric: {
                CaLogs: {
                  Cloudwatch: {
                    Enabled: this.__input.memberConfiguration.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMember.MemberId', props);
    return resource.getResponseField('MemberId') as unknown as string;
  }

}

export class ManagedBlockchainResponsesCreateNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainCreateNetworkInput) {
  }

  public get networkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.CreateNetwork.NetworkId'),
        outputPath: 'NetworkId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          Name: this.__input.name,
          Description: this.__input.description,
          Framework: this.__input.framework,
          FrameworkVersion: this.__input.frameworkVersion,
          FrameworkConfiguration: {
            Fabric: {
              Edition: this.__input.frameworkConfiguration?.fabric?.edition,
            },
          },
          VotingPolicy: {
            ApprovalThresholdPolicy: {
              ThresholdPercentage: this.__input.votingPolicy.approvalThresholdPolicy?.thresholdPercentage,
              ProposalDurationInHours: this.__input.votingPolicy.approvalThresholdPolicy?.proposalDurationInHours,
              ThresholdComparator: this.__input.votingPolicy.approvalThresholdPolicy?.thresholdComparator,
            },
          },
          MemberConfiguration: {
            Name: this.__input.memberConfiguration.name,
            Description: this.__input.memberConfiguration.description,
            FrameworkConfiguration: {
              Fabric: {
                AdminUsername: this.__input.memberConfiguration.frameworkConfiguration.fabric?.adminUsername,
                AdminPassword: this.__input.memberConfiguration.frameworkConfiguration.fabric?.adminPassword,
              },
            },
            LogPublishingConfiguration: {
              Fabric: {
                CaLogs: {
                  Cloudwatch: {
                    Enabled: this.__input.memberConfiguration.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetwork.NetworkId', props);
    return resource.getResponseField('NetworkId') as unknown as string;
  }

  public get memberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.CreateNetwork.MemberId'),
        outputPath: 'MemberId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          Name: this.__input.name,
          Description: this.__input.description,
          Framework: this.__input.framework,
          FrameworkVersion: this.__input.frameworkVersion,
          FrameworkConfiguration: {
            Fabric: {
              Edition: this.__input.frameworkConfiguration?.fabric?.edition,
            },
          },
          VotingPolicy: {
            ApprovalThresholdPolicy: {
              ThresholdPercentage: this.__input.votingPolicy.approvalThresholdPolicy?.thresholdPercentage,
              ProposalDurationInHours: this.__input.votingPolicy.approvalThresholdPolicy?.proposalDurationInHours,
              ThresholdComparator: this.__input.votingPolicy.approvalThresholdPolicy?.thresholdComparator,
            },
          },
          MemberConfiguration: {
            Name: this.__input.memberConfiguration.name,
            Description: this.__input.memberConfiguration.description,
            FrameworkConfiguration: {
              Fabric: {
                AdminUsername: this.__input.memberConfiguration.frameworkConfiguration.fabric?.adminUsername,
                AdminPassword: this.__input.memberConfiguration.frameworkConfiguration.fabric?.adminPassword,
              },
            },
            LogPublishingConfiguration: {
              Fabric: {
                CaLogs: {
                  Cloudwatch: {
                    Enabled: this.__input.memberConfiguration.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetwork.MemberId', props);
    return resource.getResponseField('MemberId') as unknown as string;
  }

}

export class ManagedBlockchainResponsesCreateNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainCreateNodeInput) {
  }

  public get nodeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.CreateNode.NodeId'),
        outputPath: 'NodeId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeConfiguration: {
            InstanceType: this.__input.nodeConfiguration.instanceType,
            AvailabilityZone: this.__input.nodeConfiguration.availabilityZone,
            LogPublishingConfiguration: {
              Fabric: {
                ChaincodeLogs: {
                  Cloudwatch: {
                    Enabled: this.__input.nodeConfiguration.logPublishingConfiguration?.fabric?.chaincodeLogs?.cloudwatch?.enabled,
                  },
                },
                PeerLogs: {
                  Cloudwatch: {
                    Enabled: this.__input.nodeConfiguration.logPublishingConfiguration?.fabric?.peerLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
            StateDB: this.__input.nodeConfiguration.stateDb,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNode.NodeId', props);
    return resource.getResponseField('NodeId') as unknown as string;
  }

}

export class ManagedBlockchainResponsesCreateProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainCreateProposalInput) {
  }

  public get proposalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.CreateProposal.ProposalId'),
        outputPath: 'ProposalId',
        parameters: {
          ClientRequestToken: this.__input.clientRequestToken,
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          Actions: {
            Invitations: this.__input.actions.invitations,
            Removals: this.__input.actions.removals,
          },
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProposal.ProposalId', props);
    return resource.getResponseField('ProposalId') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get member(): ManagedBlockchainResponsesFetchMemberMember {
    return new ManagedBlockchainResponsesFetchMemberMember(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchMemberMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get networkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.NetworkId'),
        outputPath: 'Member.NetworkId',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.NetworkId', props);
    return resource.getResponseField('Member.NetworkId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.Id'),
        outputPath: 'Member.Id',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.Id', props);
    return resource.getResponseField('Member.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.Name'),
        outputPath: 'Member.Name',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.Name', props);
    return resource.getResponseField('Member.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.Description'),
        outputPath: 'Member.Description',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.Description', props);
    return resource.getResponseField('Member.Description') as unknown as string;
  }

  public get frameworkAttributes(): ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes {
    return new ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes(this.__scope, this.__resources, this.__input);
  }

  public get logPublishingConfiguration(): ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration {
    return new ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.Status'),
        outputPath: 'Member.Status',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.Status', props);
    return resource.getResponseField('Member.Status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.CreationDate'),
        outputPath: 'Member.CreationDate',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.CreationDate', props);
    return resource.getResponseField('Member.CreationDate') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get fabric(): ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric {
    return new ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get adminUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.FrameworkAttributes.Fabric.AdminUsername'),
        outputPath: 'Member.FrameworkAttributes.Fabric.AdminUsername',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.FrameworkAttributes.Fabric.AdminUsername', props);
    return resource.getResponseField('Member.FrameworkAttributes.Fabric.AdminUsername') as unknown as string;
  }

  public get caEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.FrameworkAttributes.Fabric.CaEndpoint'),
        outputPath: 'Member.FrameworkAttributes.Fabric.CaEndpoint',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.FrameworkAttributes.Fabric.CaEndpoint', props);
    return resource.getResponseField('Member.FrameworkAttributes.Fabric.CaEndpoint') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get fabric(): ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric {
    return new ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get caLogs(): ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs {
    return new ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get cloudwatch(): ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch {
    return new ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetMemberInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMember',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetMember.Member.LogPublishingConfiguration.Fabric.CaLogs.Cloudwatch.Enabled'),
        outputPath: 'Member.LogPublishingConfiguration.Fabric.CaLogs.Cloudwatch.Enabled',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMember.Member.LogPublishingConfiguration.Fabric.CaLogs.Cloudwatch.Enabled', props);
    return resource.getResponseField('Member.LogPublishingConfiguration.Fabric.CaLogs.Cloudwatch.Enabled') as unknown as boolean;
  }

}

export class ManagedBlockchainResponsesFetchNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNetworkInput) {
  }

  public get network(): ManagedBlockchainResponsesFetchNetworkNetwork {
    return new ManagedBlockchainResponsesFetchNetworkNetwork(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNetworkNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNetworkInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.Id'),
        outputPath: 'Network.Id',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.Id', props);
    return resource.getResponseField('Network.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.Name'),
        outputPath: 'Network.Name',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.Name', props);
    return resource.getResponseField('Network.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.Description'),
        outputPath: 'Network.Description',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.Description', props);
    return resource.getResponseField('Network.Description') as unknown as string;
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.Framework'),
        outputPath: 'Network.Framework',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.Framework', props);
    return resource.getResponseField('Network.Framework') as unknown as string;
  }

  public get frameworkVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.FrameworkVersion'),
        outputPath: 'Network.FrameworkVersion',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.FrameworkVersion', props);
    return resource.getResponseField('Network.FrameworkVersion') as unknown as string;
  }

  public get frameworkAttributes(): ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes {
    return new ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes(this.__scope, this.__resources, this.__input);
  }

  public get vpcEndpointServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.VpcEndpointServiceName'),
        outputPath: 'Network.VpcEndpointServiceName',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.VpcEndpointServiceName', props);
    return resource.getResponseField('Network.VpcEndpointServiceName') as unknown as string;
  }

  public get votingPolicy(): ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy {
    return new ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.Status'),
        outputPath: 'Network.Status',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.Status', props);
    return resource.getResponseField('Network.Status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.CreationDate'),
        outputPath: 'Network.CreationDate',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.CreationDate', props);
    return resource.getResponseField('Network.CreationDate') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNetworkInput) {
  }

  public get fabric(): ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric {
    return new ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNetworkInput) {
  }

  public get orderingServiceEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.FrameworkAttributes.Fabric.OrderingServiceEndpoint'),
        outputPath: 'Network.FrameworkAttributes.Fabric.OrderingServiceEndpoint',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.FrameworkAttributes.Fabric.OrderingServiceEndpoint', props);
    return resource.getResponseField('Network.FrameworkAttributes.Fabric.OrderingServiceEndpoint') as unknown as string;
  }

  public get edition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.FrameworkAttributes.Fabric.Edition'),
        outputPath: 'Network.FrameworkAttributes.Fabric.Edition',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.FrameworkAttributes.Fabric.Edition', props);
    return resource.getResponseField('Network.FrameworkAttributes.Fabric.Edition') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNetworkInput) {
  }

  public get approvalThresholdPolicy(): ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy {
    return new ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNetworkInput) {
  }

  public get thresholdPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdPercentage'),
        outputPath: 'Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdPercentage',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdPercentage', props);
    return resource.getResponseField('Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdPercentage') as unknown as number;
  }

  public get proposalDurationInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ProposalDurationInHours'),
        outputPath: 'Network.VotingPolicy.ApprovalThresholdPolicy.ProposalDurationInHours',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ProposalDurationInHours', props);
    return resource.getResponseField('Network.VotingPolicy.ApprovalThresholdPolicy.ProposalDurationInHours') as unknown as number;
  }

  public get thresholdComparator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetwork',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdComparator'),
        outputPath: 'Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdComparator',
        parameters: {
          NetworkId: this.__input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdComparator', props);
    return resource.getResponseField('Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdComparator') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get node(): ManagedBlockchainResponsesFetchNodeNode {
    return new ManagedBlockchainResponsesFetchNodeNode(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNodeNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get networkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.NetworkId'),
        outputPath: 'Node.NetworkId',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.NetworkId', props);
    return resource.getResponseField('Node.NetworkId') as unknown as string;
  }

  public get memberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.MemberId'),
        outputPath: 'Node.MemberId',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.MemberId', props);
    return resource.getResponseField('Node.MemberId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.Id'),
        outputPath: 'Node.Id',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.Id', props);
    return resource.getResponseField('Node.Id') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.InstanceType'),
        outputPath: 'Node.InstanceType',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.InstanceType', props);
    return resource.getResponseField('Node.InstanceType') as unknown as string;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.AvailabilityZone'),
        outputPath: 'Node.AvailabilityZone',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.AvailabilityZone', props);
    return resource.getResponseField('Node.AvailabilityZone') as unknown as string;
  }

  public get frameworkAttributes(): ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes {
    return new ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes(this.__scope, this.__resources, this.__input);
  }

  public get logPublishingConfiguration(): ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration {
    return new ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get stateDb(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.StateDB'),
        outputPath: 'Node.StateDB',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.StateDB', props);
    return resource.getResponseField('Node.StateDB') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.Status'),
        outputPath: 'Node.Status',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.Status', props);
    return resource.getResponseField('Node.Status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.CreationDate'),
        outputPath: 'Node.CreationDate',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.CreationDate', props);
    return resource.getResponseField('Node.CreationDate') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get fabric(): ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric {
    return new ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get peerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.FrameworkAttributes.Fabric.PeerEndpoint'),
        outputPath: 'Node.FrameworkAttributes.Fabric.PeerEndpoint',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.FrameworkAttributes.Fabric.PeerEndpoint', props);
    return resource.getResponseField('Node.FrameworkAttributes.Fabric.PeerEndpoint') as unknown as string;
  }

  public get peerEventEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.FrameworkAttributes.Fabric.PeerEventEndpoint'),
        outputPath: 'Node.FrameworkAttributes.Fabric.PeerEventEndpoint',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.FrameworkAttributes.Fabric.PeerEventEndpoint', props);
    return resource.getResponseField('Node.FrameworkAttributes.Fabric.PeerEventEndpoint') as unknown as string;
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get fabric(): ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric {
    return new ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get chaincodeLogs(): ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs {
    return new ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs(this.__scope, this.__resources, this.__input);
  }

  public get peerLogs(): ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs {
    return new ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get cloudwatch(): ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch {
    return new ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.LogPublishingConfiguration.Fabric.ChaincodeLogs.Cloudwatch.Enabled'),
        outputPath: 'Node.LogPublishingConfiguration.Fabric.ChaincodeLogs.Cloudwatch.Enabled',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.LogPublishingConfiguration.Fabric.ChaincodeLogs.Cloudwatch.Enabled', props);
    return resource.getResponseField('Node.LogPublishingConfiguration.Fabric.ChaincodeLogs.Cloudwatch.Enabled') as unknown as boolean;
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get cloudwatch(): ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch {
    return new ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetNodeInput) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNode',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetNode.Node.LogPublishingConfiguration.Fabric.PeerLogs.Cloudwatch.Enabled'),
        outputPath: 'Node.LogPublishingConfiguration.Fabric.PeerLogs.Cloudwatch.Enabled',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNode.Node.LogPublishingConfiguration.Fabric.PeerLogs.Cloudwatch.Enabled', props);
    return resource.getResponseField('Node.LogPublishingConfiguration.Fabric.PeerLogs.Cloudwatch.Enabled') as unknown as boolean;
  }

}

export class ManagedBlockchainResponsesFetchProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetProposalInput) {
  }

  public get proposal(): ManagedBlockchainResponsesFetchProposalProposal {
    return new ManagedBlockchainResponsesFetchProposalProposal(this.__scope, this.__resources, this.__input);
  }

}

export class ManagedBlockchainResponsesFetchProposalProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetProposalInput) {
  }

  public get proposalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.ProposalId'),
        outputPath: 'Proposal.ProposalId',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.ProposalId', props);
    return resource.getResponseField('Proposal.ProposalId') as unknown as string;
  }

  public get networkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.NetworkId'),
        outputPath: 'Proposal.NetworkId',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.NetworkId', props);
    return resource.getResponseField('Proposal.NetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.Description'),
        outputPath: 'Proposal.Description',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.Description', props);
    return resource.getResponseField('Proposal.Description') as unknown as string;
  }

  public get actions(): ManagedBlockchainResponsesFetchProposalProposalActions {
    return new ManagedBlockchainResponsesFetchProposalProposalActions(this.__scope, this.__resources, this.__input);
  }

  public get proposedByMemberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.ProposedByMemberId'),
        outputPath: 'Proposal.ProposedByMemberId',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.ProposedByMemberId', props);
    return resource.getResponseField('Proposal.ProposedByMemberId') as unknown as string;
  }

  public get proposedByMemberName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.ProposedByMemberName'),
        outputPath: 'Proposal.ProposedByMemberName',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.ProposedByMemberName', props);
    return resource.getResponseField('Proposal.ProposedByMemberName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.Status'),
        outputPath: 'Proposal.Status',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.Status', props);
    return resource.getResponseField('Proposal.Status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.CreationDate'),
        outputPath: 'Proposal.CreationDate',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.CreationDate', props);
    return resource.getResponseField('Proposal.CreationDate') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.ExpirationDate'),
        outputPath: 'Proposal.ExpirationDate',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.ExpirationDate', props);
    return resource.getResponseField('Proposal.ExpirationDate') as unknown as string;
  }

  public get yesVoteCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.YesVoteCount'),
        outputPath: 'Proposal.YesVoteCount',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.YesVoteCount', props);
    return resource.getResponseField('Proposal.YesVoteCount') as unknown as number;
  }

  public get noVoteCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.NoVoteCount'),
        outputPath: 'Proposal.NoVoteCount',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.NoVoteCount', props);
    return resource.getResponseField('Proposal.NoVoteCount') as unknown as number;
  }

  public get outstandingVoteCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.OutstandingVoteCount'),
        outputPath: 'Proposal.OutstandingVoteCount',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.OutstandingVoteCount', props);
    return resource.getResponseField('Proposal.OutstandingVoteCount') as unknown as number;
  }

}

export class ManagedBlockchainResponsesFetchProposalProposalActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainGetProposalInput) {
  }

  public get invitations(): shapes.ManagedBlockchainInviteAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.Actions.Invitations'),
        outputPath: 'Proposal.Actions.Invitations',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.Actions.Invitations', props);
    return resource.getResponseField('Proposal.Actions.Invitations') as unknown as shapes.ManagedBlockchainInviteAction[];
  }

  public get removals(): shapes.ManagedBlockchainRemoveAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProposal',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.GetProposal.Proposal.Actions.Removals'),
        outputPath: 'Proposal.Actions.Removals',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProposal.Proposal.Actions.Removals', props);
    return resource.getResponseField('Proposal.Actions.Removals') as unknown as shapes.ManagedBlockchainRemoveAction[];
  }

}

export class ManagedBlockchainResponsesListInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainListInvitationsInput) {
  }

  public get invitations(): shapes.ManagedBlockchainInvitation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListInvitations.Invitations'),
        outputPath: 'Invitations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.Invitations', props);
    return resource.getResponseField('Invitations') as unknown as shapes.ManagedBlockchainInvitation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInvitations',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListInvitations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainResponsesListMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainListMembersInput) {
  }

  public get members(): shapes.ManagedBlockchainMemberSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListMembers.Members'),
        outputPath: 'Members',
        parameters: {
          NetworkId: this.__input.networkId,
          Name: this.__input.name,
          Status: this.__input.status,
          IsOwned: this.__input.isOwned,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.Members', props);
    return resource.getResponseField('Members') as unknown as shapes.ManagedBlockchainMemberSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMembers',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListMembers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NetworkId: this.__input.networkId,
          Name: this.__input.name,
          Status: this.__input.status,
          IsOwned: this.__input.isOwned,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainResponsesListNetworks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainListNetworksInput) {
  }

  public get networks(): shapes.ManagedBlockchainNetworkSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNetworks',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListNetworks.Networks'),
        outputPath: 'Networks',
        parameters: {
          Name: this.__input.name,
          Framework: this.__input.framework,
          Status: this.__input.status,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNetworks.Networks', props);
    return resource.getResponseField('Networks') as unknown as shapes.ManagedBlockchainNetworkSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNetworks',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListNetworks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          Framework: this.__input.framework,
          Status: this.__input.status,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNetworks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainResponsesListNodes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainListNodesInput) {
  }

  public get nodes(): shapes.ManagedBlockchainNodeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNodes',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListNodes.Nodes'),
        outputPath: 'Nodes',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          Status: this.__input.status,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNodes.Nodes', props);
    return resource.getResponseField('Nodes') as unknown as shapes.ManagedBlockchainNodeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNodes',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListNodes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NetworkId: this.__input.networkId,
          MemberId: this.__input.memberId,
          Status: this.__input.status,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNodes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainResponsesListProposalVotes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainListProposalVotesInput) {
  }

  public get proposalVotes(): shapes.ManagedBlockchainVoteSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProposalVotes',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListProposalVotes.ProposalVotes'),
        outputPath: 'ProposalVotes',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProposalVotes.ProposalVotes', props);
    return resource.getResponseField('ProposalVotes') as unknown as shapes.ManagedBlockchainVoteSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProposalVotes',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListProposalVotes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NetworkId: this.__input.networkId,
          ProposalId: this.__input.proposalId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProposalVotes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainResponsesListProposals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ManagedBlockchainListProposalsInput) {
  }

  public get proposals(): shapes.ManagedBlockchainProposalSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProposals',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListProposals.Proposals'),
        outputPath: 'Proposals',
        parameters: {
          NetworkId: this.__input.networkId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProposals.Proposals', props);
    return resource.getResponseField('Proposals') as unknown as shapes.ManagedBlockchainProposalSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProposals',
        service: 'ManagedBlockchain',
        physicalResourceId: cr.PhysicalResourceId.of('ManagedBlockchain.ListProposals.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NetworkId: this.__input.networkId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProposals.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

