import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class NetworkFirewallClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateFirewallPolicy(input: shapes.NetworkFirewallAssociateFirewallPolicyRequest): NetworkFirewallResponsesAssociateFirewallPolicy {
    return new NetworkFirewallResponsesAssociateFirewallPolicy(this, this.__resources, input);
  }

  public associateSubnets(input: shapes.NetworkFirewallAssociateSubnetsRequest): NetworkFirewallResponsesAssociateSubnets {
    return new NetworkFirewallResponsesAssociateSubnets(this, this.__resources, input);
  }

  public createFirewall(input: shapes.NetworkFirewallCreateFirewallRequest): NetworkFirewallResponsesCreateFirewall {
    return new NetworkFirewallResponsesCreateFirewall(this, this.__resources, input);
  }

  public createFirewallPolicy(input: shapes.NetworkFirewallCreateFirewallPolicyRequest): NetworkFirewallResponsesCreateFirewallPolicy {
    return new NetworkFirewallResponsesCreateFirewallPolicy(this, this.__resources, input);
  }

  public createRuleGroup(input: shapes.NetworkFirewallCreateRuleGroupRequest): NetworkFirewallResponsesCreateRuleGroup {
    return new NetworkFirewallResponsesCreateRuleGroup(this, this.__resources, input);
  }

  public deleteFirewall(input: shapes.NetworkFirewallDeleteFirewallRequest): NetworkFirewallResponsesDeleteFirewall {
    return new NetworkFirewallResponsesDeleteFirewall(this, this.__resources, input);
  }

  public deleteFirewallPolicy(input: shapes.NetworkFirewallDeleteFirewallPolicyRequest): NetworkFirewallResponsesDeleteFirewallPolicy {
    return new NetworkFirewallResponsesDeleteFirewallPolicy(this, this.__resources, input);
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

  public deleteRuleGroup(input: shapes.NetworkFirewallDeleteRuleGroupRequest): NetworkFirewallResponsesDeleteRuleGroup {
    return new NetworkFirewallResponsesDeleteRuleGroup(this, this.__resources, input);
  }

  public describeFirewall(input: shapes.NetworkFirewallDescribeFirewallRequest): NetworkFirewallResponsesDescribeFirewall {
    return new NetworkFirewallResponsesDescribeFirewall(this, this.__resources, input);
  }

  public describeFirewallPolicy(input: shapes.NetworkFirewallDescribeFirewallPolicyRequest): NetworkFirewallResponsesDescribeFirewallPolicy {
    return new NetworkFirewallResponsesDescribeFirewallPolicy(this, this.__resources, input);
  }

  public describeLoggingConfiguration(input: shapes.NetworkFirewallDescribeLoggingConfigurationRequest): NetworkFirewallResponsesDescribeLoggingConfiguration {
    return new NetworkFirewallResponsesDescribeLoggingConfiguration(this, this.__resources, input);
  }

  public describeResourcePolicy(input: shapes.NetworkFirewallDescribeResourcePolicyRequest): NetworkFirewallResponsesDescribeResourcePolicy {
    return new NetworkFirewallResponsesDescribeResourcePolicy(this, this.__resources, input);
  }

  public describeRuleGroup(input: shapes.NetworkFirewallDescribeRuleGroupRequest): NetworkFirewallResponsesDescribeRuleGroup {
    return new NetworkFirewallResponsesDescribeRuleGroup(this, this.__resources, input);
  }

  public disassociateSubnets(input: shapes.NetworkFirewallDisassociateSubnetsRequest): NetworkFirewallResponsesDisassociateSubnets {
    return new NetworkFirewallResponsesDisassociateSubnets(this, this.__resources, input);
  }

  public listFirewallPolicies(input: shapes.NetworkFirewallListFirewallPoliciesRequest): NetworkFirewallResponsesListFirewallPolicies {
    return new NetworkFirewallResponsesListFirewallPolicies(this, this.__resources, input);
  }

  public listFirewalls(input: shapes.NetworkFirewallListFirewallsRequest): NetworkFirewallResponsesListFirewalls {
    return new NetworkFirewallResponsesListFirewalls(this, this.__resources, input);
  }

  public listRuleGroups(input: shapes.NetworkFirewallListRuleGroupsRequest): NetworkFirewallResponsesListRuleGroups {
    return new NetworkFirewallResponsesListRuleGroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.NetworkFirewallListTagsForResourceRequest): NetworkFirewallResponsesListTagsForResource {
    return new NetworkFirewallResponsesListTagsForResource(this, this.__resources, input);
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

  public updateFirewallDeleteProtection(input: shapes.NetworkFirewallUpdateFirewallDeleteProtectionRequest): NetworkFirewallResponsesUpdateFirewallDeleteProtection {
    return new NetworkFirewallResponsesUpdateFirewallDeleteProtection(this, this.__resources, input);
  }

  public updateFirewallDescription(input: shapes.NetworkFirewallUpdateFirewallDescriptionRequest): NetworkFirewallResponsesUpdateFirewallDescription {
    return new NetworkFirewallResponsesUpdateFirewallDescription(this, this.__resources, input);
  }

  public updateFirewallPolicy(input: shapes.NetworkFirewallUpdateFirewallPolicyRequest): NetworkFirewallResponsesUpdateFirewallPolicy {
    return new NetworkFirewallResponsesUpdateFirewallPolicy(this, this.__resources, input);
  }

  public updateFirewallPolicyChangeProtection(input: shapes.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest): NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection {
    return new NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection(this, this.__resources, input);
  }

  public updateLoggingConfiguration(input: shapes.NetworkFirewallUpdateLoggingConfigurationRequest): NetworkFirewallResponsesUpdateLoggingConfiguration {
    return new NetworkFirewallResponsesUpdateLoggingConfiguration(this, this.__resources, input);
  }

  public updateRuleGroup(input: shapes.NetworkFirewallUpdateRuleGroupRequest): NetworkFirewallResponsesUpdateRuleGroup {
    return new NetworkFirewallResponsesUpdateRuleGroup(this, this.__resources, input);
  }

  public updateSubnetChangeProtection(input: shapes.NetworkFirewallUpdateSubnetChangeProtectionRequest): NetworkFirewallResponsesUpdateSubnetChangeProtection {
    return new NetworkFirewallResponsesUpdateSubnetChangeProtection(this, this.__resources, input);
  }

}

export class NetworkFirewallResponsesAssociateFirewallPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallAssociateFirewallPolicyRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallPolicy.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallPolicy.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallPolicy.FirewallPolicyArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallResponsesAssociateSubnets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallAssociateSubnetsRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetMappings: this.__input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateSubnets.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetMappings: this.__input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateSubnets.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetMappings: this.__input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateSubnets.SubnetMappings', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetMappings: this.__input.subnetMappings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateSubnets.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallResponsesCreateFirewall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateFirewallRequest) {
  }

  public get firewall(): NetworkFirewallResponsesCreateFirewallFirewall {
    return new NetworkFirewallResponsesCreateFirewallFirewall(this.__scope, this.__resources, this.__input);
  }

  public get firewallStatus(): NetworkFirewallResponsesCreateFirewallFirewallStatus {
    return new NetworkFirewallResponsesCreateFirewallFirewallStatus(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesCreateFirewallFirewall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.FirewallName', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.FirewallArn', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.FirewallPolicyArn', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.VpcId', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.SubnetMappings', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.DeleteProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.SubnetChangeProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.FirewallPolicyChangeProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.Description', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.FirewallId', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.Firewall.Tags', props);
    return resource.getResponseField('Firewall.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesCreateFirewallFirewallStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.FirewallStatus.Status', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.FirewallStatus.ConfigurationSyncStateSummary', props);
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
          FirewallName: this.__input.firewallName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          VpcId: this.__input.vpcId,
          SubnetMappings: this.__input.subnetMappings,
          DeleteProtection: this.__input.deleteProtection,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewall.FirewallStatus.SyncStates', props);
    return resource.getResponseField('FirewallStatus.SyncStates') as unknown as Record<string, shapes.NetworkFirewallSyncState>;
  }

}

export class NetworkFirewallResponsesCreateFirewallPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateFirewallPolicyRequest) {
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallPolicyResponse(): NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesCreateFirewallPolicyFirewallPolicyResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateFirewallPolicyRequest) {
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.FirewallPolicyResponse.Description', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesCreateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get ruleGroupResponse(): NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse {
    return new NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesCreateRuleGroupRuleGroupResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallCreateRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.RuleGroupArn', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.RuleGroupName', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.RuleGroupId', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.Description', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.Type', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.Capacity', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          Capacity: this.__input.capacity,
          Tags: this.__input.tags,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDeleteFirewall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteFirewallRequest) {
  }

  public get firewall(): NetworkFirewallResponsesDeleteFirewallFirewall {
    return new NetworkFirewallResponsesDeleteFirewallFirewall(this.__scope, this.__resources, this.__input);
  }

  public get firewallStatus(): NetworkFirewallResponsesDeleteFirewallFirewallStatus {
    return new NetworkFirewallResponsesDeleteFirewallFirewallStatus(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDeleteFirewallFirewall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.FirewallName', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.FirewallArn', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.FirewallPolicyArn', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.VpcId', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.SubnetMappings', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.DeleteProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.SubnetChangeProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.FirewallPolicyChangeProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.Description', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.FirewallId', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.Firewall.Tags', props);
    return resource.getResponseField('Firewall.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDeleteFirewallFirewallStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.FirewallStatus.Status', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.FirewallStatus.ConfigurationSyncStateSummary', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewall.FirewallStatus.SyncStates', props);
    return resource.getResponseField('FirewallStatus.SyncStates') as unknown as Record<string, shapes.NetworkFirewallSyncState>;
  }

}

export class NetworkFirewallResponsesDeleteFirewallPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteFirewallPolicyRequest) {
  }

  public get firewallPolicyResponse(): NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDeleteFirewallPolicyFirewallPolicyResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteFirewallPolicyRequest) {
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallPolicy.FirewallPolicyResponse.Description', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDeleteRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteRuleGroupRequest) {
  }

  public get ruleGroupResponse(): NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse {
    return new NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDeleteRuleGroupRuleGroupResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDeleteRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupArn', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupName', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupId', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.Description', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.Type', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.Capacity', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDescribeFirewall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewall(): NetworkFirewallResponsesDescribeFirewallFirewall {
    return new NetworkFirewallResponsesDescribeFirewallFirewall(this.__scope, this.__resources, this.__input);
  }

  public get firewallStatus(): NetworkFirewallResponsesDescribeFirewallFirewallStatus {
    return new NetworkFirewallResponsesDescribeFirewallFirewallStatus(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDescribeFirewallFirewall {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.FirewallName', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.FirewallArn', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.FirewallPolicyArn', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.VpcId', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.SubnetMappings', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.DeleteProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.SubnetChangeProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.FirewallPolicyChangeProtection', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.Description', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.FirewallId', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.Firewall.Tags', props);
    return resource.getResponseField('Firewall.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDescribeFirewallFirewallStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeFirewallRequest) {
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.FirewallStatus.Status', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.FirewallStatus.ConfigurationSyncStateSummary', props);
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
          FirewallName: this.__input.firewallName,
          FirewallArn: this.__input.firewallArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewall.FirewallStatus.SyncStates', props);
    return resource.getResponseField('FirewallStatus.SyncStates') as unknown as Record<string, shapes.NetworkFirewallSyncState>;
  }

}

export class NetworkFirewallResponsesDescribeFirewallPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeFirewallPolicyRequest) {
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallPolicyResponse(): NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse(this.__scope, this.__resources, this.__input);
  }

  public get firewallPolicy(): NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy {
    return new NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicyResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeFirewallPolicyRequest) {
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicyResponse.Description', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDescribeFirewallPolicyFirewallPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeFirewallPolicyRequest) {
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicy.StatelessRuleGroupReferences', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicy.StatelessDefaultActions', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicy.StatelessFragmentDefaultActions', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicy.StatelessCustomActions', props);
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
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFirewallPolicy.FirewallPolicy.StatefulRuleGroupReferences', props);
    return resource.getResponseField('FirewallPolicy.StatefulRuleGroupReferences') as unknown as shapes.NetworkFirewallStatefulRuleGroupReference[];
  }

}

export class NetworkFirewallResponsesDescribeLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeLoggingConfigurationRequest) {
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
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingConfiguration.FirewallArn', props);
    return resource.getResponseField('FirewallArn') as unknown as string;
  }

  public get loggingConfiguration(): NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration {
    return new NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDescribeLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeLoggingConfigurationRequest) {
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
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as shapes.NetworkFirewallLogDestinationConfig[];
  }

}

export class NetworkFirewallResponsesDescribeResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeResourcePolicyRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourcePolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class NetworkFirewallResponsesDescribeRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get ruleGroup(): NetworkFirewallResponsesDescribeRuleGroupRuleGroup {
    return new NetworkFirewallResponsesDescribeRuleGroupRuleGroup(this.__scope, this.__resources, this.__input);
  }

  public get ruleGroupResponse(): NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse {
    return new NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDescribeRuleGroupRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
  }

  public get ruleVariables(): NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables {
    return new NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables(this.__scope, this.__resources, this.__input);
  }

  public get rulesSource(): NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource {
    return new NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDescribeRuleGroupRuleGroupRuleVariables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RuleVariables.IPSets', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RuleVariables.PortSets', props);
    return resource.getResponseField('RuleGroup.RuleVariables.PortSets') as unknown as Record<string, shapes.NetworkFirewallPortSet>;
  }

}

export class NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesString', props);
    return resource.getResponseField('RuleGroup.RulesSource.RulesString') as unknown as string;
  }

  public get rulesSourceList(): NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList {
    return new NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList(this.__scope, this.__resources, this.__input);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.StatefulRules', props);
    return resource.getResponseField('RuleGroup.RulesSource.StatefulRules') as unknown as shapes.NetworkFirewallStatefulRule[];
  }

  public get statelessRulesAndCustomActions(): NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    return new NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceRulesSourceList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.Targets', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.TargetTypes', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.RulesSourceList.GeneratedRulesType', props);
    return resource.getResponseField('RuleGroup.RulesSource.RulesSourceList.GeneratedRulesType') as unknown as string;
  }

}

export class NetworkFirewallResponsesDescribeRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.StatelessRulesAndCustomActions.StatelessRules', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroup.RulesSource.StatelessRulesAndCustomActions.CustomActions', props);
    return resource.getResponseField('RuleGroup.RulesSource.StatelessRulesAndCustomActions.CustomActions') as unknown as shapes.NetworkFirewallCustomAction[];
  }

}

export class NetworkFirewallResponsesDescribeRuleGroupRuleGroupResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDescribeRuleGroupRequest) {
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupArn', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupName', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupId', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.Description', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.Type', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.Capacity', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
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
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroupArn: this.__input.ruleGroupArn,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesDisassociateSubnets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallDisassociateSubnetsRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateSubnets.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateSubnets.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateSubnets.SubnetMappings', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateSubnets.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallResponsesListFirewallPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallListFirewallPoliciesRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallPolicies.NextToken', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallPolicies.FirewallPolicies', props);
    return resource.getResponseField('FirewallPolicies') as unknown as shapes.NetworkFirewallFirewallPolicyMetadata[];
  }

}

export class NetworkFirewallResponsesListFirewalls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallListFirewallsRequest) {
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
          NextToken: this.__input.nextToken,
          VpcIds: this.__input.vpcIds,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewalls.NextToken', props);
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
          NextToken: this.__input.nextToken,
          VpcIds: this.__input.vpcIds,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewalls.Firewalls', props);
    return resource.getResponseField('Firewalls') as unknown as shapes.NetworkFirewallFirewallMetadata[];
  }

}

export class NetworkFirewallResponsesListRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallListRuleGroupsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.NextToken', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.NetworkFirewallRuleGroupMetadata[];
  }

}

export class NetworkFirewallResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallListTagsForResourceRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesUpdateFirewallDeleteProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateFirewallDeleteProtectionRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          DeleteProtection: this.__input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDeleteProtection.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          DeleteProtection: this.__input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDeleteProtection.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          DeleteProtection: this.__input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDeleteProtection.DeleteProtection', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          DeleteProtection: this.__input.deleteProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDeleteProtection.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallResponsesUpdateFirewallDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateFirewallDescriptionRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDescription.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDescription.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDescription.Description', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDescription.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

}

export class NetworkFirewallResponsesUpdateFirewallPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateFirewallPolicyRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get firewallPolicyResponse(): NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse {
    return new NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesUpdateFirewallPolicyFirewallPolicyResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateFirewallPolicyRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyId', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.FirewallPolicyResponse.Description', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.FirewallPolicyResponse.FirewallPolicyStatus', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallPolicyArn: this.__input.firewallPolicyArn,
          FirewallPolicyName: this.__input.firewallPolicyName,
          FirewallPolicy: {
            StatelessRuleGroupReferences: this.__input.firewallPolicy.statelessRuleGroupReferences,
            StatelessDefaultActions: this.__input.firewallPolicy.statelessDefaultActions,
            StatelessFragmentDefaultActions: this.__input.firewallPolicy.statelessFragmentDefaultActions,
            StatelessCustomActions: this.__input.firewallPolicy.statelessCustomActions,
            StatefulRuleGroupReferences: this.__input.firewallPolicy.statefulRuleGroupReferences,
          },
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicy.FirewallPolicyResponse.Tags', props);
    return resource.getResponseField('FirewallPolicyResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesUpdateFirewallPolicyChangeProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateFirewallPolicyChangeProtectionRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicyChangeProtection.UpdateToken', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicyChangeProtection.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicyChangeProtection.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          FirewallPolicyChangeProtection: this.__input.firewallPolicyChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallPolicyChangeProtection.FirewallPolicyChangeProtection', props);
    return resource.getResponseField('FirewallPolicyChangeProtection') as unknown as boolean;
  }

}

export class NetworkFirewallResponsesUpdateLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateLoggingConfigurationRequest) {
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
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          LoggingConfiguration: {
            LogDestinationConfigs: this.__input.loggingConfiguration?.logDestinationConfigs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLoggingConfiguration.FirewallArn', props);
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
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          LoggingConfiguration: {
            LogDestinationConfigs: this.__input.loggingConfiguration?.logDestinationConfigs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLoggingConfiguration.FirewallName', props);
    return resource.getResponseField('FirewallName') as unknown as string;
  }

  public get loggingConfiguration(): NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration {
    return new NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesUpdateLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateLoggingConfigurationRequest) {
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
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          LoggingConfiguration: {
            LogDestinationConfigs: this.__input.loggingConfiguration?.logDestinationConfigs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as shapes.NetworkFirewallLogDestinationConfig[];
  }

}

export class NetworkFirewallResponsesUpdateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateRuleGroupRequest) {
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.UpdateToken', props);
    return resource.getResponseField('UpdateToken') as unknown as string;
  }

  public get ruleGroupResponse(): NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse {
    return new NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkFirewallResponsesUpdateRuleGroupRuleGroupResponse {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateRuleGroupRequest) {
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupArn', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupName', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupId', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.Description', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.Type', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.Capacity', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.RuleGroupStatus', props);
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
          UpdateToken: this.__input.updateToken,
          RuleGroupArn: this.__input.ruleGroupArn,
          RuleGroupName: this.__input.ruleGroupName,
          RuleGroup: {
            RuleVariables: {
              IPSets: this.__input.ruleGroup?.ruleVariables?.ipSets,
              PortSets: this.__input.ruleGroup?.ruleVariables?.portSets,
            },
            RulesSource: {
              RulesString: this.__input.ruleGroup?.rulesSource.rulesString,
              RulesSourceList: {
                Targets: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targets,
                TargetTypes: this.__input.ruleGroup?.rulesSource.rulesSourceList?.targetTypes,
                GeneratedRulesType: this.__input.ruleGroup?.rulesSource.rulesSourceList?.generatedRulesType,
              },
              StatefulRules: this.__input.ruleGroup?.rulesSource.statefulRules,
              StatelessRulesAndCustomActions: {
                StatelessRules: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.statelessRules,
                CustomActions: this.__input.ruleGroup?.rulesSource.statelessRulesAndCustomActions?.customActions,
              },
            },
          },
          Rules: this.__input.rules,
          Type: this.__input.type,
          Description: this.__input.description,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.RuleGroupResponse.Tags', props);
    return resource.getResponseField('RuleGroupResponse.Tags') as unknown as shapes.NetworkFirewallTag[];
  }

}

export class NetworkFirewallResponsesUpdateSubnetChangeProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkFirewallUpdateSubnetChangeProtectionRequest) {
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetChangeProtection.UpdateToken', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetChangeProtection.FirewallArn', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetChangeProtection.FirewallName', props);
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
          UpdateToken: this.__input.updateToken,
          FirewallArn: this.__input.firewallArn,
          FirewallName: this.__input.firewallName,
          SubnetChangeProtection: this.__input.subnetChangeProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetChangeProtection.SubnetChangeProtection', props);
    return resource.getResponseField('SubnetChangeProtection') as unknown as boolean;
  }

}

