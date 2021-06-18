import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class NetworkFirewallClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateFirewallPolicy(input: shapes.NetworkFirewallAssociateFirewallPolicyRequest): NetworkFirewallAssociateFirewallPolicy {
    return new NetworkFirewallAssociateFirewallPolicy(this, 'AssociateFirewallPolicy', this.__resources, input);
  }

  public associateSubnets(input: shapes.NetworkFirewallAssociateSubnetsRequest): NetworkFirewallAssociateSubnets {
    return new NetworkFirewallAssociateSubnets(this, 'AssociateSubnets', this.__resources, input);
  }

  public createFirewall(input: shapes.NetworkFirewallCreateFirewallRequest): NetworkFirewallCreateFirewall {
    return new NetworkFirewallCreateFirewall(this, 'CreateFirewall', this.__resources, input);
  }

  public createFirewallPolicy(input: shapes.NetworkFirewallCreateFirewallPolicyRequest): NetworkFirewallCreateFirewallPolicy {
    return new NetworkFirewallCreateFirewallPolicy(this, 'CreateFirewallPolicy', this.__resources, input);
  }

  public createRuleGroup(input: shapes.NetworkFirewallCreateRuleGroupRequest): NetworkFirewallCreateRuleGroup {
    return new NetworkFirewallCreateRuleGroup(this, 'CreateRuleGroup', this.__resources, input);
  }

  public deleteFirewall(input: shapes.NetworkFirewallDeleteFirewallRequest): NetworkFirewallDeleteFirewall {
    return new NetworkFirewallDeleteFirewall(this, 'DeleteFirewall', this.__resources, input);
  }

  public deleteFirewallPolicy(input: shapes.NetworkFirewallDeleteFirewallPolicyRequest): NetworkFirewallDeleteFirewallPolicy {
    return new NetworkFirewallDeleteFirewallPolicy(this, 'DeleteFirewallPolicy', this.__resources, input);
  }

  public deleteResourcePolicy(input: shapes.NetworkFirewallDeleteResourcePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteResourcePolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcePolicy', props);
  }

  public deleteRuleGroup(input: shapes.NetworkFirewallDeleteRuleGroupRequest): NetworkFirewallDeleteRuleGroup {
    return new NetworkFirewallDeleteRuleGroup(this, 'DeleteRuleGroup', this.__resources, input);
  }

  public describeFirewall(input: shapes.NetworkFirewallDescribeFirewallRequest): NetworkFirewallDescribeFirewall {
    return new NetworkFirewallDescribeFirewall(this, 'DescribeFirewall', this.__resources, input);
  }

  public describeFirewallPolicy(input: shapes.NetworkFirewallDescribeFirewallPolicyRequest): NetworkFirewallDescribeFirewallPolicy {
    return new NetworkFirewallDescribeFirewallPolicy(this, 'DescribeFirewallPolicy', this.__resources, input);
  }

  public describeLoggingConfiguration(input: shapes.NetworkFirewallDescribeLoggingConfigurationRequest): NetworkFirewallDescribeLoggingConfiguration {
    return new NetworkFirewallDescribeLoggingConfiguration(this, 'DescribeLoggingConfiguration', this.__resources, input);
  }

  public describeResourcePolicy(input: shapes.NetworkFirewallDescribeResourcePolicyRequest): NetworkFirewallDescribeResourcePolicy {
    return new NetworkFirewallDescribeResourcePolicy(this, 'DescribeResourcePolicy', this.__resources, input);
  }

  public describeRuleGroup(input: shapes.NetworkFirewallDescribeRuleGroupRequest): NetworkFirewallDescribeRuleGroup {
    return new NetworkFirewallDescribeRuleGroup(this, 'DescribeRuleGroup', this.__resources, input);
  }

  public disassociateSubnets(input: shapes.NetworkFirewallDisassociateSubnetsRequest): NetworkFirewallDisassociateSubnets {
    return new NetworkFirewallDisassociateSubnets(this, 'DisassociateSubnets', this.__resources, input);
  }

  public listFirewallPolicies(input: shapes.NetworkFirewallListFirewallPoliciesRequest): NetworkFirewallListFirewallPolicies {
    return new NetworkFirewallListFirewallPolicies(this, 'ListFirewallPolicies', this.__resources, input);
  }

  public listFirewalls(input: shapes.NetworkFirewallListFirewallsRequest): NetworkFirewallListFirewalls {
    return new NetworkFirewallListFirewalls(this, 'ListFirewalls', this.__resources, input);
  }

  public listRuleGroups(input: shapes.NetworkFirewallListRuleGroupsRequest): NetworkFirewallListRuleGroups {
    return new NetworkFirewallListRuleGroups(this, 'ListRuleGroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.NetworkFirewallListTagsForResourceRequest): NetworkFirewallListTagsForResource {
    return new NetworkFirewallListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putResourcePolicy(input: shapes.NetworkFirewallPutResourcePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.PutResourcePolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutResourcePolicy', props);
  }

  public tagResource(input: shapes.NetworkFirewallTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.NetworkFirewallUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateFirewallDeleteProtection(input: shapes.NetworkFirewallUpdateFirewallDeleteProtectionRequest): NetworkFirewallUpdateFirewallDeleteProtection {
    return new NetworkFirewallUpdateFirewallDeleteProtection(this, 'UpdateFirewallDeleteProtection', this.__resources, input);
  }

  public updateFirewallDescription(input: shapes.NetworkFirewallUpdateFirewallDescriptionRequest): NetworkFirewallUpdateFirewallDescription {
    return new NetworkFirewallUpdateFirewallDescription(this, 'UpdateFirewallDescription', this.__resources, input);
  }

  public updateFirewallPolicy(input: shapes.NetworkFirewallUpdateFirewallPolicyRequest): NetworkFirewallUpdateFirewallPolicy {
    return new NetworkFirewallUpdateFirewallPolicy(this, 'UpdateFirewallPolicy', this.__resources, input);
  }

  public updateFirewallPolicyChangeProtection(input: shapes.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest): NetworkFirewallUpdateFirewallPolicyChangeProtection {
    return new NetworkFirewallUpdateFirewallPolicyChangeProtection(this, 'UpdateFirewallPolicyChangeProtection', this.__resources, input);
  }

  public updateLoggingConfiguration(input: shapes.NetworkFirewallUpdateLoggingConfigurationRequest): NetworkFirewallUpdateLoggingConfiguration {
    return new NetworkFirewallUpdateLoggingConfiguration(this, 'UpdateLoggingConfiguration', this.__resources, input);
  }

  public updateRuleGroup(input: shapes.NetworkFirewallUpdateRuleGroupRequest): NetworkFirewallUpdateRuleGroup {
    return new NetworkFirewallUpdateRuleGroup(this, 'UpdateRuleGroup', this.__resources, input);
  }

  public updateSubnetChangeProtection(input: shapes.NetworkFirewallUpdateSubnetChangeProtectionRequest): NetworkFirewallUpdateSubnetChangeProtection {
    return new NetworkFirewallUpdateSubnetChangeProtection(this, 'UpdateSubnetChangeProtection', this.__resources, input);
  }

}

export class NetworkFirewallAssociateFirewallPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallAssociateFirewallPolicyRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateFirewallPolicy.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateFirewallPolicy.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateFirewallPolicy.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateFirewallPolicy.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateFirewallPolicy.FirewallPolicyArn'),
        outputPath: 'FirewallPolicyArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateFirewallPolicy.FirewallPolicyArn', props);
    return resource.getResponseField('FirewallPolicyArn') as unknown as string;
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateFirewallPolicy.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallAssociateSubnets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallAssociateSubnetsRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateSubnets.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetMappings: this.input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateSubnets.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateSubnets.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetMappings: this.input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateSubnets.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get subnetMappings(): shapes.NetworkFirewallSubnetMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateSubnets.SubnetMappings'),
        outputPath: 'SubnetMappings',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetMappings: this.input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateSubnets.SubnetMappings', props);
    return resource.getResponseField('SubnetMappings') as unknown as shapes.NetworkFirewallSubnetMapping[];
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.AssociateSubnets.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetMappings: this.input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateSubnets.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallCreateFirewall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateFirewallRequest) {
    super(scope, id);
  }

  public get firewall(): NetworkFirewallCreateFirewallFirewall {
    return new NetworkFirewallCreateFirewallFirewall(this, 'Firewall', this.__resources, this.input);
  }

  public get firewallStatus(): NetworkFirewallCreateFirewallFirewallStatus {
    return new NetworkFirewallCreateFirewallFirewallStatus(this, 'FirewallStatus', this.__resources, this.input);
  }

}

export class NetworkFirewallCreateFirewallFirewall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateFirewallRequest) {
    super(scope, id);
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.FirewallName'),
        outputPath: 'Firewall.FirewallName',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.FirewallName', props);
    return resource.getResponseField('Firewall.FirewallName') as unknown as string;
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.FirewallArn'),
        outputPath: 'Firewall.FirewallArn',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.FirewallArn', props);
    return resource.getResponseField('Firewall.FirewallArn') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.FirewallPolicyArn'),
        outputPath: 'Firewall.FirewallPolicyArn',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.FirewallPolicyArn', props);
    return resource.getResponseField('Firewall.FirewallPolicyArn') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.VpcId'),
        outputPath: 'Firewall.VpcId',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.VpcId', props);
    return resource.getResponseField('Firewall.VpcId') as unknown as string;
  }

  public get subnetMappings(): shapes.NetworkFirewallSubnetMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.SubnetMappings'),
        outputPath: 'Firewall.SubnetMappings',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.SubnetMappings', props);
    return resource.getResponseField('Firewall.SubnetMappings') as unknown as shapes.NetworkFirewallSubnetMapping[];
  }

  public get deleteProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.DeleteProtection'),
        outputPath: 'Firewall.DeleteProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.DeleteProtection', props);
    return resource.getResponseField('Firewall.DeleteProtection') as unknown as boolean;
  }

  public get subnetChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.SubnetChangeProtection'),
        outputPath: 'Firewall.SubnetChangeProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.SubnetChangeProtection', props);
    return resource.getResponseField('Firewall.SubnetChangeProtection') as unknown as boolean;
  }

  public get firewallPolicyChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.FirewallPolicyChangeProtection'),
        outputPath: 'Firewall.FirewallPolicyChangeProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.FirewallPolicyChangeProtection', props);
    return resource.getResponseField('Firewall.FirewallPolicyChangeProtection') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.Description'),
        outputPath: 'Firewall.Description',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.Description', props);
    return resource.getResponseField('Firewall.Description') as unknown as string;
  }

  public get firewallId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.FirewallId'),
        outputPath: 'Firewall.FirewallId',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.FirewallId', props);
    return resource.getResponseField('Firewall.FirewallId') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.Firewall.Tags'),
        outputPath: 'Firewall.Tags',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.Firewall.Tags', props);
    return resource.getResponseField('Firewall.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallCreateFirewallFirewallStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateFirewallRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.FirewallStatus.Status'),
        outputPath: 'FirewallStatus.Status',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.FirewallStatus.Status', props);
    return resource.getResponseField('FirewallStatus.Status') as unknown as string;
  }

  public get configurationSyncStateSummary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.FirewallStatus.ConfigurationSyncStateSummary'),
        outputPath: 'FirewallStatus.ConfigurationSyncStateSummary',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.FirewallStatus.ConfigurationSyncStateSummary', props);
    return resource.getResponseField('FirewallStatus.ConfigurationSyncStateSummary') as unknown as string;
  }

  public get syncStates(): Record<string, shapes.NetworkFirewallSyncState> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewall.FirewallStatus.SyncStates'),
        outputPath: 'FirewallStatus.SyncStates',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          VpcId: this.input.vpcId,
          SubnetMappings: this.input.subnetMappings,
          DeleteProtection: this.input.deleteProtection,
          SubnetChangeProtection: this.input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewall.FirewallStatus.SyncStates', props);
    return resource.getResponseField('FirewallStatus.SyncStates') as unknown as Record<string, shapes.NetworkFirewallSyncState>;
  }

}

export class NetworkFirewallCreateFirewallPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateFirewallPolicyRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallPolicyResponse(): NetworkFirewallCreateFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallCreateFirewallPolicyFirewallPolicyResponse(this, 'FirewallPolicyResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallCreateFirewallPolicyFirewallPolicyResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateFirewallPolicyRequest) {
    super(scope, id);
  }

  public get firewallPolicyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyName',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyName') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyArn',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyArn') as unknown as string;
  }

  public get firewallPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyId',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.FirewallPolicyResponse.Description'),
        outputPath: 'FirewallPolicyResponse.Description',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.FirewallPolicyResponse.Description', props);
    return resource.getResponseField('FirewallPolicyResponse.Description') as unknown as string;
  }

  public get firewallPolicyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyStatus',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateFirewallPolicy.FirewallPolicyResponse.Tags'),
        outputPath: 'FirewallPolicyResponse.Tags',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallCreateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateRuleGroupRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get ruleGroupResponse(): NetworkFirewallCreateRuleGroupRuleGroupResponse {
    return new NetworkFirewallCreateRuleGroupRuleGroupResponse(this, 'RuleGroupResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallCreateRuleGroupRuleGroupResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallCreateRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.RuleGroupArn'),
        outputPath: 'RuleGroupResponse.RuleGroupArn',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.RuleGroupArn', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupArn') as unknown as string;
  }

  public get ruleGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.RuleGroupName'),
        outputPath: 'RuleGroupResponse.RuleGroupName',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.RuleGroupName', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupName') as unknown as string;
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.RuleGroupId'),
        outputPath: 'RuleGroupResponse.RuleGroupId',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.RuleGroupId', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.Description'),
        outputPath: 'RuleGroupResponse.Description',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.Description', props);
    return resource.getResponseField('RuleGroupResponse.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.Type'),
        outputPath: 'RuleGroupResponse.Type',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.Type', props);
    return resource.getResponseField('RuleGroupResponse.Type') as unknown as string;
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.Capacity'),
        outputPath: 'RuleGroupResponse.Capacity',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.Capacity', props);
    return resource.getResponseField('RuleGroupResponse.Capacity') as unknown as number;
  }

  public get ruleGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.RuleGroupStatus'),
        outputPath: 'RuleGroupResponse.RuleGroupStatus',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.CreateRuleGroup.RuleGroupResponse.Tags'),
        outputPath: 'RuleGroupResponse.Tags',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          Capacity: this.input.capacity,
          Tags: this.input.tags,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDeleteFirewall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteFirewallRequest) {
    super(scope, id);
  }

  public get firewall(): NetworkFirewallDeleteFirewallFirewall {
    return new NetworkFirewallDeleteFirewallFirewall(this, 'Firewall', this.__resources, this.input);
  }

  public get firewallStatus(): NetworkFirewallDeleteFirewallFirewallStatus {
    return new NetworkFirewallDeleteFirewallFirewallStatus(this, 'FirewallStatus', this.__resources, this.input);
  }

}

export class NetworkFirewallDeleteFirewallFirewall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteFirewallRequest) {
    super(scope, id);
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.FirewallName'),
        outputPath: 'Firewall.FirewallName',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.FirewallName', props);
    return resource.getResponseField('Firewall.FirewallName') as unknown as string;
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.FirewallArn'),
        outputPath: 'Firewall.FirewallArn',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.FirewallArn', props);
    return resource.getResponseField('Firewall.FirewallArn') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.FirewallPolicyArn'),
        outputPath: 'Firewall.FirewallPolicyArn',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.FirewallPolicyArn', props);
    return resource.getResponseField('Firewall.FirewallPolicyArn') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.VpcId'),
        outputPath: 'Firewall.VpcId',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.VpcId', props);
    return resource.getResponseField('Firewall.VpcId') as unknown as string;
  }

  public get subnetMappings(): shapes.NetworkFirewallSubnetMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.SubnetMappings'),
        outputPath: 'Firewall.SubnetMappings',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.SubnetMappings', props);
    return resource.getResponseField('Firewall.SubnetMappings') as unknown as shapes.NetworkFirewallSubnetMapping[];
  }

  public get deleteProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.DeleteProtection'),
        outputPath: 'Firewall.DeleteProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.DeleteProtection', props);
    return resource.getResponseField('Firewall.DeleteProtection') as unknown as boolean;
  }

  public get subnetChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.SubnetChangeProtection'),
        outputPath: 'Firewall.SubnetChangeProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.SubnetChangeProtection', props);
    return resource.getResponseField('Firewall.SubnetChangeProtection') as unknown as boolean;
  }

  public get firewallPolicyChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.FirewallPolicyChangeProtection'),
        outputPath: 'Firewall.FirewallPolicyChangeProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.FirewallPolicyChangeProtection', props);
    return resource.getResponseField('Firewall.FirewallPolicyChangeProtection') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.Description'),
        outputPath: 'Firewall.Description',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.Description', props);
    return resource.getResponseField('Firewall.Description') as unknown as string;
  }

  public get firewallId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.FirewallId'),
        outputPath: 'Firewall.FirewallId',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.FirewallId', props);
    return resource.getResponseField('Firewall.FirewallId') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.Firewall.Tags'),
        outputPath: 'Firewall.Tags',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.Firewall.Tags', props);
    return resource.getResponseField('Firewall.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDeleteFirewallFirewallStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteFirewallRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.FirewallStatus.Status'),
        outputPath: 'FirewallStatus.Status',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.FirewallStatus.Status', props);
    return resource.getResponseField('FirewallStatus.Status') as unknown as string;
  }

  public get configurationSyncStateSummary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.FirewallStatus.ConfigurationSyncStateSummary'),
        outputPath: 'FirewallStatus.ConfigurationSyncStateSummary',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.FirewallStatus.ConfigurationSyncStateSummary', props);
    return resource.getResponseField('FirewallStatus.ConfigurationSyncStateSummary') as unknown as string;
  }

  public get syncStates(): Record<string, shapes.NetworkFirewallSyncState> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewall.FirewallStatus.SyncStates'),
        outputPath: 'FirewallStatus.SyncStates',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewall.FirewallStatus.SyncStates', props);
    return resource.getResponseField('FirewallStatus.SyncStates') as unknown as Record<string, shapes.NetworkFirewallSyncState>;
  }

}

export class NetworkFirewallDeleteFirewallPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteFirewallPolicyRequest) {
    super(scope, id);
  }

  public get firewallPolicyResponse(): NetworkFirewallDeleteFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallDeleteFirewallPolicyFirewallPolicyResponse(this, 'FirewallPolicyResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallDeleteFirewallPolicyFirewallPolicyResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteFirewallPolicyRequest) {
    super(scope, id);
  }

  public get firewallPolicyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyName',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyName') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyArn',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyArn') as unknown as string;
  }

  public get firewallPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyId',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewallPolicy.FirewallPolicyResponse.Description'),
        outputPath: 'FirewallPolicyResponse.Description',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallPolicy.FirewallPolicyResponse.Description', props);
    return resource.getResponseField('FirewallPolicyResponse.Description') as unknown as string;
  }

  public get firewallPolicyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyStatus',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteFirewallPolicy.FirewallPolicyResponse.Tags'),
        outputPath: 'FirewallPolicyResponse.Tags',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDeleteRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroupResponse(): NetworkFirewallDeleteRuleGroupRuleGroupResponse {
    return new NetworkFirewallDeleteRuleGroupRuleGroupResponse(this, 'RuleGroupResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallDeleteRuleGroupRuleGroupResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDeleteRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.RuleGroupArn'),
        outputPath: 'RuleGroupResponse.RuleGroupArn',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupArn', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupArn') as unknown as string;
  }

  public get ruleGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.RuleGroupName'),
        outputPath: 'RuleGroupResponse.RuleGroupName',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupName', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupName') as unknown as string;
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.RuleGroupId'),
        outputPath: 'RuleGroupResponse.RuleGroupId',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupId', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.Description'),
        outputPath: 'RuleGroupResponse.Description',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.Description', props);
    return resource.getResponseField('RuleGroupResponse.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.Type'),
        outputPath: 'RuleGroupResponse.Type',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.Type', props);
    return resource.getResponseField('RuleGroupResponse.Type') as unknown as string;
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.Capacity'),
        outputPath: 'RuleGroupResponse.Capacity',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.Capacity', props);
    return resource.getResponseField('RuleGroupResponse.Capacity') as unknown as number;
  }

  public get ruleGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.RuleGroupStatus'),
        outputPath: 'RuleGroupResponse.RuleGroupStatus',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DeleteRuleGroup.RuleGroupResponse.Tags'),
        outputPath: 'RuleGroupResponse.Tags',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDescribeFirewall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeFirewallRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewall(): NetworkFirewallDescribeFirewallFirewall {
    return new NetworkFirewallDescribeFirewallFirewall(this, 'Firewall', this.__resources, this.input);
  }

  public get firewallStatus(): NetworkFirewallDescribeFirewallFirewallStatus {
    return new NetworkFirewallDescribeFirewallFirewallStatus(this, 'FirewallStatus', this.__resources, this.input);
  }

}

export class NetworkFirewallDescribeFirewallFirewall extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeFirewallRequest) {
    super(scope, id);
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.FirewallName'),
        outputPath: 'Firewall.FirewallName',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.FirewallName', props);
    return resource.getResponseField('Firewall.FirewallName') as unknown as string;
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.FirewallArn'),
        outputPath: 'Firewall.FirewallArn',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.FirewallArn', props);
    return resource.getResponseField('Firewall.FirewallArn') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.FirewallPolicyArn'),
        outputPath: 'Firewall.FirewallPolicyArn',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.FirewallPolicyArn', props);
    return resource.getResponseField('Firewall.FirewallPolicyArn') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.VpcId'),
        outputPath: 'Firewall.VpcId',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.VpcId', props);
    return resource.getResponseField('Firewall.VpcId') as unknown as string;
  }

  public get subnetMappings(): shapes.NetworkFirewallSubnetMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.SubnetMappings'),
        outputPath: 'Firewall.SubnetMappings',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.SubnetMappings', props);
    return resource.getResponseField('Firewall.SubnetMappings') as unknown as shapes.NetworkFirewallSubnetMapping[];
  }

  public get deleteProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.DeleteProtection'),
        outputPath: 'Firewall.DeleteProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.DeleteProtection', props);
    return resource.getResponseField('Firewall.DeleteProtection') as unknown as boolean;
  }

  public get subnetChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.SubnetChangeProtection'),
        outputPath: 'Firewall.SubnetChangeProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.SubnetChangeProtection', props);
    return resource.getResponseField('Firewall.SubnetChangeProtection') as unknown as boolean;
  }

  public get firewallPolicyChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.FirewallPolicyChangeProtection'),
        outputPath: 'Firewall.FirewallPolicyChangeProtection',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.FirewallPolicyChangeProtection', props);
    return resource.getResponseField('Firewall.FirewallPolicyChangeProtection') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.Description'),
        outputPath: 'Firewall.Description',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.Description', props);
    return resource.getResponseField('Firewall.Description') as unknown as string;
  }

  public get firewallId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.FirewallId'),
        outputPath: 'Firewall.FirewallId',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.FirewallId', props);
    return resource.getResponseField('Firewall.FirewallId') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.Firewall.Tags'),
        outputPath: 'Firewall.Tags',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.Firewall.Tags', props);
    return resource.getResponseField('Firewall.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDescribeFirewallFirewallStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeFirewallRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.FirewallStatus.Status'),
        outputPath: 'FirewallStatus.Status',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.FirewallStatus.Status', props);
    return resource.getResponseField('FirewallStatus.Status') as unknown as string;
  }

  public get configurationSyncStateSummary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.FirewallStatus.ConfigurationSyncStateSummary'),
        outputPath: 'FirewallStatus.ConfigurationSyncStateSummary',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.FirewallStatus.ConfigurationSyncStateSummary', props);
    return resource.getResponseField('FirewallStatus.ConfigurationSyncStateSummary') as unknown as string;
  }

  public get syncStates(): Record<string, shapes.NetworkFirewallSyncState> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewall',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewall.FirewallStatus.SyncStates'),
        outputPath: 'FirewallStatus.SyncStates',
        parameters: {
          FirewallName: this.input.firewallName,
          FirewallArn: this.input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewall.FirewallStatus.SyncStates', props);
    return resource.getResponseField('FirewallStatus.SyncStates') as unknown as Record<string, shapes.NetworkFirewallSyncState>;
  }

}

export class NetworkFirewallDescribeFirewallPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeFirewallPolicyRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallPolicyResponse(): NetworkFirewallDescribeFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallDescribeFirewallPolicyFirewallPolicyResponse(this, 'FirewallPolicyResponse', this.__resources, this.input);
  }

  public get firewallPolicy(): NetworkFirewallDescribeFirewallPolicyFirewallPolicy {
    return new NetworkFirewallDescribeFirewallPolicyFirewallPolicy(this, 'FirewallPolicy', this.__resources, this.input);
  }

}

export class NetworkFirewallDescribeFirewallPolicyFirewallPolicyResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeFirewallPolicyRequest) {
    super(scope, id);
  }

  public get firewallPolicyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyName',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyName') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyArn',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyArn') as unknown as string;
  }

  public get firewallPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyId',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicyResponse.Description'),
        outputPath: 'FirewallPolicyResponse.Description',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicyResponse.Description', props);
    return resource.getResponseField('FirewallPolicyResponse.Description') as unknown as string;
  }

  public get firewallPolicyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyStatus',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicyResponse.Tags'),
        outputPath: 'FirewallPolicyResponse.Tags',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDescribeFirewallPolicyFirewallPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeFirewallPolicyRequest) {
    super(scope, id);
  }

  public get statelessRuleGroupReferences(): shapes.NetworkFirewallStatelessRuleGroupReference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicy.StatelessRuleGroupReferences'),
        outputPath: 'FirewallPolicy.StatelessRuleGroupReferences',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicy.StatelessRuleGroupReferences', props);
    return resource.getResponseField('FirewallPolicy.StatelessRuleGroupReferences') as unknown as shapes.NetworkFirewallStatelessRuleGroupReference[];
  }

  public get statelessDefaultActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicy.StatelessDefaultActions'),
        outputPath: 'FirewallPolicy.StatelessDefaultActions',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicy.StatelessDefaultActions', props);
    return resource.getResponseField('FirewallPolicy.StatelessDefaultActions') as unknown as string[];
  }

  public get statelessFragmentDefaultActions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicy.StatelessFragmentDefaultActions'),
        outputPath: 'FirewallPolicy.StatelessFragmentDefaultActions',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicy.StatelessFragmentDefaultActions', props);
    return resource.getResponseField('FirewallPolicy.StatelessFragmentDefaultActions') as unknown as string[];
  }

  public get statelessCustomActions(): shapes.NetworkFirewallCustomAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicy.StatelessCustomActions'),
        outputPath: 'FirewallPolicy.StatelessCustomActions',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicy.StatelessCustomActions', props);
    return resource.getResponseField('FirewallPolicy.StatelessCustomActions') as unknown as shapes.NetworkFirewallCustomAction[];
  }

  public get statefulRuleGroupReferences(): shapes.NetworkFirewallStatefulRuleGroupReference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeFirewallPolicy.FirewallPolicy.StatefulRuleGroupReferences'),
        outputPath: 'FirewallPolicy.StatefulRuleGroupReferences',
        parameters: {
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicyArn: this.input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFirewallPolicy.FirewallPolicy.StatefulRuleGroupReferences', props);
    return resource.getResponseField('FirewallPolicy.StatefulRuleGroupReferences') as unknown as shapes.NetworkFirewallStatefulRuleGroupReference[];
  }

}

export class NetworkFirewallDescribeLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingConfiguration',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeLoggingConfiguration.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingConfiguration.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get loggingConfiguration(): NetworkFirewallDescribeLoggingConfigurationLoggingConfiguration {
    return new NetworkFirewallDescribeLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class NetworkFirewallDescribeLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get logDestinationConfigs(): shapes.NetworkFirewallLogDestinationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingConfiguration',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as shapes.NetworkFirewallLogDestinationConfig[];
  }

}

export class NetworkFirewallDescribeResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeResourcePolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourcePolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeResourcePolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResourcePolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class NetworkFirewallDescribeRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get ruleGroup(): NetworkFirewallDescribeRuleGroupRuleGroup {
    return new NetworkFirewallDescribeRuleGroupRuleGroup(this, 'RuleGroup', this.__resources, this.input);
  }

  public get ruleGroupResponse(): NetworkFirewallDescribeRuleGroupRuleGroupResponse {
    return new NetworkFirewallDescribeRuleGroupRuleGroupResponse(this, 'RuleGroupResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallDescribeRuleGroupRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleVariables(): NetworkFirewallDescribeRuleGroupRuleGroupRuleVariables {
    return new NetworkFirewallDescribeRuleGroupRuleGroupRuleVariables(this, 'RuleVariables', this.__resources, this.input);
  }

  public get rulesSource(): NetworkFirewallDescribeRuleGroupRuleGroupRulesSource {
    return new NetworkFirewallDescribeRuleGroupRuleGroupRulesSource(this, 'RulesSource', this.__resources, this.input);
  }

}

export class NetworkFirewallDescribeRuleGroupRuleGroupRuleVariables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get ipSets(): Record<string, shapes.NetworkFirewallIpSet> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RuleVariables.IPSets'),
        outputPath: 'RuleGroup.RuleVariables.IPSets',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RuleVariables.IPSets', props);
    return resource.getResponseField('RuleGroup.RuleVariables.IPSets') as unknown as Record<string, shapes.NetworkFirewallIpSet>;
  }

  public get portSets(): Record<string, shapes.NetworkFirewallPortSet> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RuleVariables.PortSets'),
        outputPath: 'RuleGroup.RuleVariables.PortSets',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RuleVariables.PortSets', props);
    return resource.getResponseField('RuleGroup.RuleVariables.PortSets') as unknown as Record<string, shapes.NetworkFirewallPortSet>;
  }

}

export class NetworkFirewallDescribeRuleGroupRuleGroupRulesSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get rulesString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.RulesString'),
        outputPath: 'RuleGroup.RulesSource.RulesString',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesString', props);
    return resource.getResponseField('RuleGroup.RulesSource.RulesString') as unknown as string;
  }

  public get rulesSourceList(): NetworkFirewallDescribeRuleGroupRuleGroupRulesSourceRulesSourceList {
    return new NetworkFirewallDescribeRuleGroupRuleGroupRulesSourceRulesSourceList(this, 'RulesSourceList', this.__resources, this.input);
  }

  public get statefulRules(): shapes.NetworkFirewallStatefulRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.StatefulRules'),
        outputPath: 'RuleGroup.RulesSource.StatefulRules',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.StatefulRules', props);
    return resource.getResponseField('RuleGroup.RulesSource.StatefulRules') as unknown as shapes.NetworkFirewallStatefulRule[];
  }

  public get statelessRulesAndCustomActions(): NetworkFirewallDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    return new NetworkFirewallDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions(this, 'StatelessRulesAndCustomActions', this.__resources, this.input);
  }

}

export class NetworkFirewallDescribeRuleGroupRuleGroupRulesSourceRulesSourceList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get targets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.Targets'),
        outputPath: 'RuleGroup.RulesSource.RulesSourceList.Targets',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.Targets', props);
    return resource.getResponseField('RuleGroup.RulesSource.RulesSourceList.Targets') as unknown as string[];
  }

  public get targetTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.TargetTypes'),
        outputPath: 'RuleGroup.RulesSource.RulesSourceList.TargetTypes',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.TargetTypes', props);
    return resource.getResponseField('RuleGroup.RulesSource.RulesSourceList.TargetTypes') as unknown as string[];
  }

  public get generatedRulesType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.GeneratedRulesType'),
        outputPath: 'RuleGroup.RulesSource.RulesSourceList.GeneratedRulesType',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.GeneratedRulesType', props);
    return resource.getResponseField('RuleGroup.RulesSource.RulesSourceList.GeneratedRulesType') as unknown as string;
  }

}

export class NetworkFirewallDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get statelessRules(): shapes.NetworkFirewallStatelessRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.StatelessRulesAndCustomActions.StatelessRules'),
        outputPath: 'RuleGroup.RulesSource.StatelessRulesAndCustomActions.StatelessRules',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.StatelessRulesAndCustomActions.StatelessRules', props);
    return resource.getResponseField('RuleGroup.RulesSource.StatelessRulesAndCustomActions.StatelessRules') as unknown as shapes.NetworkFirewallStatelessRule[];
  }

  public get customActions(): shapes.NetworkFirewallCustomAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroup.RulesSource.StatelessRulesAndCustomActions.CustomActions'),
        outputPath: 'RuleGroup.RulesSource.StatelessRulesAndCustomActions.CustomActions',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroup.RulesSource.StatelessRulesAndCustomActions.CustomActions', props);
    return resource.getResponseField('RuleGroup.RulesSource.StatelessRulesAndCustomActions.CustomActions') as unknown as shapes.NetworkFirewallCustomAction[];
  }

}

export class NetworkFirewallDescribeRuleGroupRuleGroupResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.RuleGroupArn'),
        outputPath: 'RuleGroupResponse.RuleGroupArn',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupArn', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupArn') as unknown as string;
  }

  public get ruleGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.RuleGroupName'),
        outputPath: 'RuleGroupResponse.RuleGroupName',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupName', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupName') as unknown as string;
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.RuleGroupId'),
        outputPath: 'RuleGroupResponse.RuleGroupId',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupId', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.Description'),
        outputPath: 'RuleGroupResponse.Description',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.Description', props);
    return resource.getResponseField('RuleGroupResponse.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.Type'),
        outputPath: 'RuleGroupResponse.Type',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.Type', props);
    return resource.getResponseField('RuleGroupResponse.Type') as unknown as string;
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.Capacity'),
        outputPath: 'RuleGroupResponse.Capacity',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.Capacity', props);
    return resource.getResponseField('RuleGroupResponse.Capacity') as unknown as number;
  }

  public get ruleGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.RuleGroupStatus'),
        outputPath: 'RuleGroupResponse.RuleGroupStatus',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DescribeRuleGroup.RuleGroupResponse.Tags'),
        outputPath: 'RuleGroupResponse.Tags',
        parameters: {
          RuleGroupName: this.input.ruleGroupName,
          RuleGroupArn: this.input.ruleGroupArn,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallDisassociateSubnets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallDisassociateSubnetsRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DisassociateSubnets.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateSubnets.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DisassociateSubnets.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateSubnets.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get subnetMappings(): shapes.NetworkFirewallSubnetMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DisassociateSubnets.SubnetMappings'),
        outputPath: 'SubnetMappings',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateSubnets.SubnetMappings', props);
    return resource.getResponseField('SubnetMappings') as unknown as shapes.NetworkFirewallSubnetMapping[];
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSubnets',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.DisassociateSubnets.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateSubnets.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallListFirewallPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallListFirewallPoliciesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallPolicies',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListFirewallPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFirewallPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewallPolicies(): shapes.NetworkFirewallFirewallPolicyMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallPolicies',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListFirewallPolicies.FirewallPolicies'),
        outputPath: 'FirewallPolicies',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFirewallPolicies.FirewallPolicies', props);
    return resource.getResponseField('FirewallPolicies') as unknown as shapes.NetworkFirewallFirewallPolicyMetadata[];
  }

}

export class NetworkFirewallListFirewalls extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallListFirewallsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewalls',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListFirewalls.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          VpcIds: this.input.vpcIds,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFirewalls.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewalls(): shapes.NetworkFirewallFirewallMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewalls',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListFirewalls.Firewalls'),
        outputPath: 'Firewalls',
        parameters: {
          NextToken: this.input.nextToken,
          VpcIds: this.input.vpcIds,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFirewalls.Firewalls', props);
    return resource.getResponseField('Firewalls') as unknown as shapes.NetworkFirewallFirewallMetadata[];
  }

}

export class NetworkFirewallListRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallListRuleGroupsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListRuleGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get ruleGroups(): shapes.NetworkFirewallRuleGroupMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListRuleGroups.RuleGroups'),
        outputPath: 'RuleGroups',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.NetworkFirewallRuleGroupMetadata[];
  }

}

export class NetworkFirewallListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallListTagsForResourceRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallUpdateFirewallDeleteProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateFirewallDeleteProtectionRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDeleteProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDeleteProtection.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          DeleteProtection: this.input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDeleteProtection.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDeleteProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDeleteProtection.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          DeleteProtection: this.input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDeleteProtection.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get deleteProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDeleteProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDeleteProtection.DeleteProtection'),
        outputPath: 'DeleteProtection',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          DeleteProtection: this.input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDeleteProtection.DeleteProtection', props);
    return resource.getResponseField('DeleteProtection') as unknown as boolean;
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDeleteProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDeleteProtection.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          DeleteProtection: this.input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDeleteProtection.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallUpdateFirewallDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateFirewallDescriptionRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDescription',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDescription.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDescription.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDescription',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDescription.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDescription.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDescription',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDescription.Description'),
        outputPath: 'Description',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDescription.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDescription',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallDescription.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallDescription.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallUpdateFirewallPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateFirewallPolicyRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallPolicyResponse(): NetworkFirewallUpdateFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallUpdateFirewallPolicyFirewallPolicyResponse(this, 'FirewallPolicyResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallUpdateFirewallPolicyFirewallPolicyResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateFirewallPolicyRequest) {
    super(scope, id);
  }

  public get firewallPolicyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyName') as unknown as string;
  }

  public get firewallPolicyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyArn') as unknown as string;
  }

  public get firewallPolicyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyId',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.FirewallPolicyResponse.Description'),
        outputPath: 'FirewallPolicyResponse.Description',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.FirewallPolicyResponse.Description', props);
    return resource.getResponseField('FirewallPolicyResponse.Description') as unknown as string;
  }

  public get firewallPolicyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus'),
        outputPath: 'FirewallPolicyResponse.FirewallPolicyStatus',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
    return resource.getResponseField('FirewallPolicyResponse.FirewallPolicyStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicy',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicy.FirewallPolicyResponse.Tags'),
        outputPath: 'FirewallPolicyResponse.Tags',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallPolicyArn: this.input.firewallPolicyArn,
          FirewallPolicyName: this.input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallUpdateFirewallPolicyChangeProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicyChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicyChangeProtection.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicyChangeProtection.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicyChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicyChangeProtection.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicyChangeProtection.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicyChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicyChangeProtection.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicyChangeProtection.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get firewallPolicyChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallPolicyChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateFirewallPolicyChangeProtection.FirewallPolicyChangeProtection'),
        outputPath: 'FirewallPolicyChangeProtection',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          FirewallPolicyChangeProtection: this.input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFirewallPolicyChangeProtection.FirewallPolicyChangeProtection', props);
    return resource.getResponseField('FirewallPolicyChangeProtection') as unknown as boolean;
  }

}

export class NetworkFirewallUpdateLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLoggingConfiguration',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateLoggingConfiguration.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          LoggingConfiguration: {
            LogDestinationConfigs: this.input.loggingConfiguration?.logDestinationConfigs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLoggingConfiguration.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLoggingConfiguration',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateLoggingConfiguration.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          LoggingConfiguration: {
            LogDestinationConfigs: this.input.loggingConfiguration?.logDestinationConfigs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLoggingConfiguration.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get loggingConfiguration(): NetworkFirewallUpdateLoggingConfigurationLoggingConfiguration {
    return new NetworkFirewallUpdateLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class NetworkFirewallUpdateLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get logDestinationConfigs(): shapes.NetworkFirewallLogDestinationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLoggingConfiguration',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          LoggingConfiguration: {
            LogDestinationConfigs: this.input.loggingConfiguration?.logDestinationConfigs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as shapes.NetworkFirewallLogDestinationConfig[];
  }

}

export class NetworkFirewallUpdateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateRuleGroupRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get ruleGroupResponse(): NetworkFirewallUpdateRuleGroupRuleGroupResponse {
    return new NetworkFirewallUpdateRuleGroupRuleGroupResponse(this, 'RuleGroupResponse', this.__resources, this.input);
  }

}

export class NetworkFirewallUpdateRuleGroupRuleGroupResponse extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.RuleGroupArn'),
        outputPath: 'RuleGroupResponse.RuleGroupArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupArn', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupArn') as unknown as string;
  }

  public get ruleGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.RuleGroupName'),
        outputPath: 'RuleGroupResponse.RuleGroupName',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupName', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupName') as unknown as string;
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.RuleGroupId'),
        outputPath: 'RuleGroupResponse.RuleGroupId',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupId', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.Description'),
        outputPath: 'RuleGroupResponse.Description',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.Description', props);
    return resource.getResponseField('RuleGroupResponse.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.Type'),
        outputPath: 'RuleGroupResponse.Type',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.Type', props);
    return resource.getResponseField('RuleGroupResponse.Type') as unknown as string;
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.Capacity'),
        outputPath: 'RuleGroupResponse.Capacity',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.Capacity', props);
    return resource.getResponseField('RuleGroupResponse.Capacity') as unknown as number;
  }

  public get ruleGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.RuleGroupStatus'),
        outputPath: 'RuleGroupResponse.RuleGroupStatus',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
    return resource.getResponseField('RuleGroupResponse.RuleGroupStatus') as unknown as string;
  }

  public get tags(): shapes.NetworkFirewallTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateRuleGroup.RuleGroupResponse.Tags'),
        outputPath: 'RuleGroupResponse.Tags',
        parameters: {
          UpdateToken: this.input.updateToken,
          RuleGroupArn: this.input.ruleGroupArn,
          RuleGroupName: this.input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.input.rules,
          Type: this.input.type,
          Description: this.input.description,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallUpdateSubnetChangeProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkFirewallUpdateSubnetChangeProtectionRequest) {
    super(scope, id);
  }

  public get updateToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateSubnetChangeProtection.UpdateToken'),
        outputPath: 'UpdateToken',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetChangeProtection: this.input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetChangeProtection.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateSubnetChangeProtection.FirewallArn'),
        outputPath: 'FirewallArn',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetChangeProtection: this.input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetChangeProtection.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get firewallName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateSubnetChangeProtection.FirewallName'),
        outputPath: 'FirewallName',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetChangeProtection: this.input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetChangeProtection.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get subnetChangeProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetChangeProtection',
        service: 'NetworkFirewall',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkFirewall.UpdateSubnetChangeProtection.SubnetChangeProtection'),
        outputPath: 'SubnetChangeProtection',
        parameters: {
          UpdateToken: this.input.updateToken,
          FirewallArn: this.input.firewallArn,
          FirewallName: this.input.firewallName,
          SubnetChangeProtection: this.input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetChangeProtection.SubnetChangeProtection', props);
    return resource.getResponseField('SubnetChangeProtection') as unknown as boolean;
  }

}

