import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ManagedBlockchainClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createMember(input: shapes.ManagedBlockchainCreateMemberInput): ManagedBlockchainCreateMember {
    return new ManagedBlockchainCreateMember(this, 'CreateMember', this.__resources, input);
  }

  public createNetwork(input: shapes.ManagedBlockchainCreateNetworkInput): ManagedBlockchainCreateNetwork {
    return new ManagedBlockchainCreateNetwork(this, 'CreateNetwork', this.__resources, input);
  }

  public createNode(input: shapes.ManagedBlockchainCreateNodeInput): ManagedBlockchainCreateNode {
    return new ManagedBlockchainCreateNode(this, 'CreateNode', this.__resources, input);
  }

  public createProposal(input: shapes.ManagedBlockchainCreateProposalInput): ManagedBlockchainCreateProposal {
    return new ManagedBlockchainCreateProposal(this, 'CreateProposal', this.__resources, input);
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

  public fetchMember(input: shapes.ManagedBlockchainGetMemberInput): ManagedBlockchainFetchMember {
    return new ManagedBlockchainFetchMember(this, 'FetchMember', this.__resources, input);
  }

  public fetchNetwork(input: shapes.ManagedBlockchainGetNetworkInput): ManagedBlockchainFetchNetwork {
    return new ManagedBlockchainFetchNetwork(this, 'FetchNetwork', this.__resources, input);
  }

  public fetchNode(input: shapes.ManagedBlockchainGetNodeInput): ManagedBlockchainFetchNode {
    return new ManagedBlockchainFetchNode(this, 'FetchNode', this.__resources, input);
  }

  public fetchProposal(input: shapes.ManagedBlockchainGetProposalInput): ManagedBlockchainFetchProposal {
    return new ManagedBlockchainFetchProposal(this, 'FetchProposal', this.__resources, input);
  }

  public listInvitations(input: shapes.ManagedBlockchainListInvitationsInput): ManagedBlockchainListInvitations {
    return new ManagedBlockchainListInvitations(this, 'ListInvitations', this.__resources, input);
  }

  public listMembers(input: shapes.ManagedBlockchainListMembersInput): ManagedBlockchainListMembers {
    return new ManagedBlockchainListMembers(this, 'ListMembers', this.__resources, input);
  }

  public listNetworks(input: shapes.ManagedBlockchainListNetworksInput): ManagedBlockchainListNetworks {
    return new ManagedBlockchainListNetworks(this, 'ListNetworks', this.__resources, input);
  }

  public listNodes(input: shapes.ManagedBlockchainListNodesInput): ManagedBlockchainListNodes {
    return new ManagedBlockchainListNodes(this, 'ListNodes', this.__resources, input);
  }

  public listProposalVotes(input: shapes.ManagedBlockchainListProposalVotesInput): ManagedBlockchainListProposalVotes {
    return new ManagedBlockchainListProposalVotes(this, 'ListProposalVotes', this.__resources, input);
  }

  public listProposals(input: shapes.ManagedBlockchainListProposalsInput): ManagedBlockchainListProposals {
    return new ManagedBlockchainListProposals(this, 'ListProposals', this.__resources, input);
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

export class ManagedBlockchainCreateMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainCreateMemberInput) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          InvitationId: this.input.invitationId,
          NetworkId: this.input.networkId,
          MemberConfiguration: {
            Name: this.input.memberConfiguration.name,
            Description: this.input.memberConfiguration.description,
            FrameworkConfiguration: {
              Fabric: {
                AdminUsername: this.input.memberConfiguration.frameworkConfiguration.fabric?.adminUsername,
                AdminPassword: this.input.memberConfiguration.frameworkConfiguration.fabric?.adminPassword,
              },
            },
            LogPublishingConfiguration: {
              Fabric: {
                CaLogs: {
                  Cloudwatch: {
                    Enabled: this.input.memberConfiguration.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMember.MemberId', props);
    return resource.getResponseField('MemberId') as unknown as string;
  }

}

export class ManagedBlockchainCreateNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainCreateNetworkInput) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          Name: this.input.name,
          Description: this.input.description,
          Framework: this.input.framework,
          FrameworkVersion: this.input.frameworkVersion,
          FrameworkConfiguration: {
            Fabric: {
              Edition: this.input.frameworkConfiguration?.fabric?.edition,
            },
          },
          VotingPolicy: {
            ApprovalThresholdPolicy: {
              ThresholdPercentage: this.input.votingPolicy.approvalThresholdPolicy?.thresholdPercentage,
              ProposalDurationInHours: this.input.votingPolicy.approvalThresholdPolicy?.proposalDurationInHours,
              ThresholdComparator: this.input.votingPolicy.approvalThresholdPolicy?.thresholdComparator,
            },
          },
          MemberConfiguration: {
            Name: this.input.memberConfiguration.name,
            Description: this.input.memberConfiguration.description,
            FrameworkConfiguration: {
              Fabric: {
                AdminUsername: this.input.memberConfiguration.frameworkConfiguration.fabric?.adminUsername,
                AdminPassword: this.input.memberConfiguration.frameworkConfiguration.fabric?.adminPassword,
              },
            },
            LogPublishingConfiguration: {
              Fabric: {
                CaLogs: {
                  Cloudwatch: {
                    Enabled: this.input.memberConfiguration.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetwork.NetworkId', props);
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
          ClientRequestToken: this.input.clientRequestToken,
          Name: this.input.name,
          Description: this.input.description,
          Framework: this.input.framework,
          FrameworkVersion: this.input.frameworkVersion,
          FrameworkConfiguration: {
            Fabric: {
              Edition: this.input.frameworkConfiguration?.fabric?.edition,
            },
          },
          VotingPolicy: {
            ApprovalThresholdPolicy: {
              ThresholdPercentage: this.input.votingPolicy.approvalThresholdPolicy?.thresholdPercentage,
              ProposalDurationInHours: this.input.votingPolicy.approvalThresholdPolicy?.proposalDurationInHours,
              ThresholdComparator: this.input.votingPolicy.approvalThresholdPolicy?.thresholdComparator,
            },
          },
          MemberConfiguration: {
            Name: this.input.memberConfiguration.name,
            Description: this.input.memberConfiguration.description,
            FrameworkConfiguration: {
              Fabric: {
                AdminUsername: this.input.memberConfiguration.frameworkConfiguration.fabric?.adminUsername,
                AdminPassword: this.input.memberConfiguration.frameworkConfiguration.fabric?.adminPassword,
              },
            },
            LogPublishingConfiguration: {
              Fabric: {
                CaLogs: {
                  Cloudwatch: {
                    Enabled: this.input.memberConfiguration.logPublishingConfiguration?.fabric?.caLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetwork.MemberId', props);
    return resource.getResponseField('MemberId') as unknown as string;
  }

}

export class ManagedBlockchainCreateNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainCreateNodeInput) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeConfiguration: {
            InstanceType: this.input.nodeConfiguration.instanceType,
            AvailabilityZone: this.input.nodeConfiguration.availabilityZone,
            LogPublishingConfiguration: {
              Fabric: {
                ChaincodeLogs: {
                  Cloudwatch: {
                    Enabled: this.input.nodeConfiguration.logPublishingConfiguration?.fabric?.chaincodeLogs?.cloudwatch?.enabled,
                  },
                },
                PeerLogs: {
                  Cloudwatch: {
                    Enabled: this.input.nodeConfiguration.logPublishingConfiguration?.fabric?.peerLogs?.cloudwatch?.enabled,
                  },
                },
              },
            },
            StateDB: this.input.nodeConfiguration.stateDb,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNode.NodeId', props);
    return resource.getResponseField('NodeId') as unknown as string;
  }

}

export class ManagedBlockchainCreateProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainCreateProposalInput) {
    super(scope, id);
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
          ClientRequestToken: this.input.clientRequestToken,
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          Actions: {
            Invitations: this.input.actions.invitations,
            Removals: this.input.actions.removals,
          },
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProposal.ProposalId', props);
    return resource.getResponseField('ProposalId') as unknown as string;
  }

}

export class ManagedBlockchainFetchMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
  }

  public get member(): ManagedBlockchainFetchMemberMember {
    return new ManagedBlockchainFetchMemberMember(this, 'Member', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchMemberMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.NetworkId', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.Id', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.Name', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.Description', props);
    return resource.getResponseField('Member.Description') as unknown as string;
  }

  public get frameworkAttributes(): ManagedBlockchainFetchMemberMemberFrameworkAttributes {
    return new ManagedBlockchainFetchMemberMemberFrameworkAttributes(this, 'FrameworkAttributes', this.__resources, this.input);
  }

  public get logPublishingConfiguration(): ManagedBlockchainFetchMemberMemberLogPublishingConfiguration {
    return new ManagedBlockchainFetchMemberMemberLogPublishingConfiguration(this, 'LogPublishingConfiguration', this.__resources, this.input);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.Status', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.CreationDate', props);
    return resource.getResponseField('Member.CreationDate') as unknown as string;
  }

}

export class ManagedBlockchainFetchMemberMemberFrameworkAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
  }

  public get fabric(): ManagedBlockchainFetchMemberMemberFrameworkAttributesFabric {
    return new ManagedBlockchainFetchMemberMemberFrameworkAttributesFabric(this, 'Fabric', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchMemberMemberFrameworkAttributesFabric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.FrameworkAttributes.Fabric.AdminUsername', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.FrameworkAttributes.Fabric.CaEndpoint', props);
    return resource.getResponseField('Member.FrameworkAttributes.Fabric.CaEndpoint') as unknown as string;
  }

}

export class ManagedBlockchainFetchMemberMemberLogPublishingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
  }

  public get fabric(): ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabric {
    return new ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabric(this, 'Fabric', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
  }

  public get caLogs(): ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabricCaLogs {
    return new ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabricCaLogs(this, 'CaLogs', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabricCaLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
  }

  public get cloudwatch(): ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch {
    return new ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch(this, 'Cloudwatch', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetMemberInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMember.Member.LogPublishingConfiguration.Fabric.CaLogs.Cloudwatch.Enabled', props);
    return resource.getResponseField('Member.LogPublishingConfiguration.Fabric.CaLogs.Cloudwatch.Enabled') as unknown as boolean;
  }

}

export class ManagedBlockchainFetchNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNetworkInput) {
    super(scope, id);
  }

  public get network(): ManagedBlockchainFetchNetworkNetwork {
    return new ManagedBlockchainFetchNetworkNetwork(this, 'Network', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNetworkNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNetworkInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.Id', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.Name', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.Description', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.Framework', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.FrameworkVersion', props);
    return resource.getResponseField('Network.FrameworkVersion') as unknown as string;
  }

  public get frameworkAttributes(): ManagedBlockchainFetchNetworkNetworkFrameworkAttributes {
    return new ManagedBlockchainFetchNetworkNetworkFrameworkAttributes(this, 'FrameworkAttributes', this.__resources, this.input);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.VpcEndpointServiceName', props);
    return resource.getResponseField('Network.VpcEndpointServiceName') as unknown as string;
  }

  public get votingPolicy(): ManagedBlockchainFetchNetworkNetworkVotingPolicy {
    return new ManagedBlockchainFetchNetworkNetworkVotingPolicy(this, 'VotingPolicy', this.__resources, this.input);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.Status', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.CreationDate', props);
    return resource.getResponseField('Network.CreationDate') as unknown as string;
  }

}

export class ManagedBlockchainFetchNetworkNetworkFrameworkAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNetworkInput) {
    super(scope, id);
  }

  public get fabric(): ManagedBlockchainFetchNetworkNetworkFrameworkAttributesFabric {
    return new ManagedBlockchainFetchNetworkNetworkFrameworkAttributesFabric(this, 'Fabric', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNetworkNetworkFrameworkAttributesFabric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNetworkInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.FrameworkAttributes.Fabric.OrderingServiceEndpoint', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.FrameworkAttributes.Fabric.Edition', props);
    return resource.getResponseField('Network.FrameworkAttributes.Fabric.Edition') as unknown as string;
  }

}

export class ManagedBlockchainFetchNetworkNetworkVotingPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNetworkInput) {
    super(scope, id);
  }

  public get approvalThresholdPolicy(): ManagedBlockchainFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy {
    return new ManagedBlockchainFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy(this, 'ApprovalThresholdPolicy', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNetworkInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdPercentage', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ProposalDurationInHours', props);
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
          NetworkId: this.input.networkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetwork.Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdComparator', props);
    return resource.getResponseField('Network.VotingPolicy.ApprovalThresholdPolicy.ThresholdComparator') as unknown as string;
  }

}

export class ManagedBlockchainFetchNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
  }

  public get node(): ManagedBlockchainFetchNodeNode {
    return new ManagedBlockchainFetchNodeNode(this, 'Node', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNodeNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.NetworkId', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.MemberId', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.Id', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.InstanceType', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.AvailabilityZone', props);
    return resource.getResponseField('Node.AvailabilityZone') as unknown as string;
  }

  public get frameworkAttributes(): ManagedBlockchainFetchNodeNodeFrameworkAttributes {
    return new ManagedBlockchainFetchNodeNodeFrameworkAttributes(this, 'FrameworkAttributes', this.__resources, this.input);
  }

  public get logPublishingConfiguration(): ManagedBlockchainFetchNodeNodeLogPublishingConfiguration {
    return new ManagedBlockchainFetchNodeNodeLogPublishingConfiguration(this, 'LogPublishingConfiguration', this.__resources, this.input);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.StateDB', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.Status', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.CreationDate', props);
    return resource.getResponseField('Node.CreationDate') as unknown as string;
  }

}

export class ManagedBlockchainFetchNodeNodeFrameworkAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
  }

  public get fabric(): ManagedBlockchainFetchNodeNodeFrameworkAttributesFabric {
    return new ManagedBlockchainFetchNodeNodeFrameworkAttributesFabric(this, 'Fabric', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNodeNodeFrameworkAttributesFabric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.FrameworkAttributes.Fabric.PeerEndpoint', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.FrameworkAttributes.Fabric.PeerEventEndpoint', props);
    return resource.getResponseField('Node.FrameworkAttributes.Fabric.PeerEventEndpoint') as unknown as string;
  }

}

export class ManagedBlockchainFetchNodeNodeLogPublishingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
  }

  public get fabric(): ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabric {
    return new ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabric(this, 'Fabric', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
  }

  public get chaincodeLogs(): ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs {
    return new ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs(this, 'ChaincodeLogs', this.__resources, this.input);
  }

  public get peerLogs(): ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricPeerLogs {
    return new ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricPeerLogs(this, 'PeerLogs', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
  }

  public get cloudwatch(): ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch {
    return new ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch(this, 'Cloudwatch', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.LogPublishingConfiguration.Fabric.ChaincodeLogs.Cloudwatch.Enabled', props);
    return resource.getResponseField('Node.LogPublishingConfiguration.Fabric.ChaincodeLogs.Cloudwatch.Enabled') as unknown as boolean;
  }

}

export class ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricPeerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
  }

  public get cloudwatch(): ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch {
    return new ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch(this, 'Cloudwatch', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetNodeInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNode.Node.LogPublishingConfiguration.Fabric.PeerLogs.Cloudwatch.Enabled', props);
    return resource.getResponseField('Node.LogPublishingConfiguration.Fabric.PeerLogs.Cloudwatch.Enabled') as unknown as boolean;
  }

}

export class ManagedBlockchainFetchProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetProposalInput) {
    super(scope, id);
  }

  public get proposal(): ManagedBlockchainFetchProposalProposal {
    return new ManagedBlockchainFetchProposalProposal(this, 'Proposal', this.__resources, this.input);
  }

}

export class ManagedBlockchainFetchProposalProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetProposalInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.ProposalId', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.NetworkId', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.Description', props);
    return resource.getResponseField('Proposal.Description') as unknown as string;
  }

  public get actions(): ManagedBlockchainFetchProposalProposalActions {
    return new ManagedBlockchainFetchProposalProposalActions(this, 'Actions', this.__resources, this.input);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.ProposedByMemberId', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.ProposedByMemberName', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.Status', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.CreationDate', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.ExpirationDate', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.YesVoteCount', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.NoVoteCount', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.OutstandingVoteCount', props);
    return resource.getResponseField('Proposal.OutstandingVoteCount') as unknown as number;
  }

}

export class ManagedBlockchainFetchProposalProposalActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainGetProposalInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.Actions.Invitations', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProposal.Proposal.Actions.Removals', props);
    return resource.getResponseField('Proposal.Actions.Removals') as unknown as shapes.ManagedBlockchainRemoveAction[];
  }

}

export class ManagedBlockchainListInvitations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainListInvitationsInput) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.Invitations', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInvitations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainListMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainListMembersInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          Name: this.input.name,
          Status: this.input.status,
          IsOwned: this.input.isOwned,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.Members', props);
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
          NetworkId: this.input.networkId,
          Name: this.input.name,
          Status: this.input.status,
          IsOwned: this.input.isOwned,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainListNetworks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainListNetworksInput) {
    super(scope, id);
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
          Name: this.input.name,
          Framework: this.input.framework,
          Status: this.input.status,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNetworks.Networks', props);
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
          Name: this.input.name,
          Framework: this.input.framework,
          Status: this.input.status,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNetworks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainListNodes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainListNodesInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          Status: this.input.status,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNodes.Nodes', props);
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
          NetworkId: this.input.networkId,
          MemberId: this.input.memberId,
          Status: this.input.status,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNodes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainListProposalVotes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainListProposalVotesInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProposalVotes.ProposalVotes', props);
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
          NetworkId: this.input.networkId,
          ProposalId: this.input.proposalId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProposalVotes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ManagedBlockchainListProposals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ManagedBlockchainListProposalsInput) {
    super(scope, id);
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
          NetworkId: this.input.networkId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProposals.Proposals', props);
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
          NetworkId: this.input.networkId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProposals.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

