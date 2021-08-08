import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53ResolverClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateFirewallRuleGroup(input: shapes.Route53ResolverAssociateFirewallRuleGroupRequest): Route53ResolverResponsesAssociateFirewallRuleGroup {
    return new Route53ResolverResponsesAssociateFirewallRuleGroup(this, this.__resources, input);
  }

  public associateResolverEndpointIpAddress(input: shapes.Route53ResolverAssociateResolverEndpointIpAddressRequest): Route53ResolverResponsesAssociateResolverEndpointIpAddress {
    return new Route53ResolverResponsesAssociateResolverEndpointIpAddress(this, this.__resources, input);
  }

  public associateResolverQueryLogConfig(input: shapes.Route53ResolverAssociateResolverQueryLogConfigRequest): Route53ResolverResponsesAssociateResolverQueryLogConfig {
    return new Route53ResolverResponsesAssociateResolverQueryLogConfig(this, this.__resources, input);
  }

  public associateResolverRule(input: shapes.Route53ResolverAssociateResolverRuleRequest): Route53ResolverResponsesAssociateResolverRule {
    return new Route53ResolverResponsesAssociateResolverRule(this, this.__resources, input);
  }

  public createFirewallDomainList(input: shapes.Route53ResolverCreateFirewallDomainListRequest): Route53ResolverResponsesCreateFirewallDomainList {
    return new Route53ResolverResponsesCreateFirewallDomainList(this, this.__resources, input);
  }

  public createFirewallRule(input: shapes.Route53ResolverCreateFirewallRuleRequest): Route53ResolverResponsesCreateFirewallRule {
    return new Route53ResolverResponsesCreateFirewallRule(this, this.__resources, input);
  }

  public createFirewallRuleGroup(input: shapes.Route53ResolverCreateFirewallRuleGroupRequest): Route53ResolverResponsesCreateFirewallRuleGroup {
    return new Route53ResolverResponsesCreateFirewallRuleGroup(this, this.__resources, input);
  }

  public createResolverEndpoint(input: shapes.Route53ResolverCreateResolverEndpointRequest): Route53ResolverResponsesCreateResolverEndpoint {
    return new Route53ResolverResponsesCreateResolverEndpoint(this, this.__resources, input);
  }

  public createResolverQueryLogConfig(input: shapes.Route53ResolverCreateResolverQueryLogConfigRequest): Route53ResolverResponsesCreateResolverQueryLogConfig {
    return new Route53ResolverResponsesCreateResolverQueryLogConfig(this, this.__resources, input);
  }

  public createResolverRule(input: shapes.Route53ResolverCreateResolverRuleRequest): Route53ResolverResponsesCreateResolverRule {
    return new Route53ResolverResponsesCreateResolverRule(this, this.__resources, input);
  }

  public deleteFirewallDomainList(input: shapes.Route53ResolverDeleteFirewallDomainListRequest): Route53ResolverResponsesDeleteFirewallDomainList {
    return new Route53ResolverResponsesDeleteFirewallDomainList(this, this.__resources, input);
  }

  public deleteFirewallRule(input: shapes.Route53ResolverDeleteFirewallRuleRequest): Route53ResolverResponsesDeleteFirewallRule {
    return new Route53ResolverResponsesDeleteFirewallRule(this, this.__resources, input);
  }

  public deleteFirewallRuleGroup(input: shapes.Route53ResolverDeleteFirewallRuleGroupRequest): Route53ResolverResponsesDeleteFirewallRuleGroup {
    return new Route53ResolverResponsesDeleteFirewallRuleGroup(this, this.__resources, input);
  }

  public deleteResolverEndpoint(input: shapes.Route53ResolverDeleteResolverEndpointRequest): Route53ResolverResponsesDeleteResolverEndpoint {
    return new Route53ResolverResponsesDeleteResolverEndpoint(this, this.__resources, input);
  }

  public deleteResolverQueryLogConfig(input: shapes.Route53ResolverDeleteResolverQueryLogConfigRequest): Route53ResolverResponsesDeleteResolverQueryLogConfig {
    return new Route53ResolverResponsesDeleteResolverQueryLogConfig(this, this.__resources, input);
  }

  public deleteResolverRule(input: shapes.Route53ResolverDeleteResolverRuleRequest): Route53ResolverResponsesDeleteResolverRule {
    return new Route53ResolverResponsesDeleteResolverRule(this, this.__resources, input);
  }

  public disassociateFirewallRuleGroup(input: shapes.Route53ResolverDisassociateFirewallRuleGroupRequest): Route53ResolverResponsesDisassociateFirewallRuleGroup {
    return new Route53ResolverResponsesDisassociateFirewallRuleGroup(this, this.__resources, input);
  }

  public disassociateResolverEndpointIpAddress(input: shapes.Route53ResolverDisassociateResolverEndpointIpAddressRequest): Route53ResolverResponsesDisassociateResolverEndpointIpAddress {
    return new Route53ResolverResponsesDisassociateResolverEndpointIpAddress(this, this.__resources, input);
  }

  public disassociateResolverQueryLogConfig(input: shapes.Route53ResolverDisassociateResolverQueryLogConfigRequest): Route53ResolverResponsesDisassociateResolverQueryLogConfig {
    return new Route53ResolverResponsesDisassociateResolverQueryLogConfig(this, this.__resources, input);
  }

  public disassociateResolverRule(input: shapes.Route53ResolverDisassociateResolverRuleRequest): Route53ResolverResponsesDisassociateResolverRule {
    return new Route53ResolverResponsesDisassociateResolverRule(this, this.__resources, input);
  }

  public fetchFirewallConfig(input: shapes.Route53ResolverGetFirewallConfigRequest): Route53ResolverResponsesFetchFirewallConfig {
    return new Route53ResolverResponsesFetchFirewallConfig(this, this.__resources, input);
  }

  public fetchFirewallDomainList(input: shapes.Route53ResolverGetFirewallDomainListRequest): Route53ResolverResponsesFetchFirewallDomainList {
    return new Route53ResolverResponsesFetchFirewallDomainList(this, this.__resources, input);
  }

  public fetchFirewallRuleGroup(input: shapes.Route53ResolverGetFirewallRuleGroupRequest): Route53ResolverResponsesFetchFirewallRuleGroup {
    return new Route53ResolverResponsesFetchFirewallRuleGroup(this, this.__resources, input);
  }

  public fetchFirewallRuleGroupAssociation(input: shapes.Route53ResolverGetFirewallRuleGroupAssociationRequest): Route53ResolverResponsesFetchFirewallRuleGroupAssociation {
    return new Route53ResolverResponsesFetchFirewallRuleGroupAssociation(this, this.__resources, input);
  }

  public fetchFirewallRuleGroupPolicy(input: shapes.Route53ResolverGetFirewallRuleGroupPolicyRequest): Route53ResolverResponsesFetchFirewallRuleGroupPolicy {
    return new Route53ResolverResponsesFetchFirewallRuleGroupPolicy(this, this.__resources, input);
  }

  public fetchResolverDnssecConfig(input: shapes.Route53ResolverGetResolverDnssecConfigRequest): Route53ResolverResponsesFetchResolverDnssecConfig {
    return new Route53ResolverResponsesFetchResolverDnssecConfig(this, this.__resources, input);
  }

  public fetchResolverEndpoint(input: shapes.Route53ResolverGetResolverEndpointRequest): Route53ResolverResponsesFetchResolverEndpoint {
    return new Route53ResolverResponsesFetchResolverEndpoint(this, this.__resources, input);
  }

  public fetchResolverQueryLogConfig(input: shapes.Route53ResolverGetResolverQueryLogConfigRequest): Route53ResolverResponsesFetchResolverQueryLogConfig {
    return new Route53ResolverResponsesFetchResolverQueryLogConfig(this, this.__resources, input);
  }

  public fetchResolverQueryLogConfigAssociation(input: shapes.Route53ResolverGetResolverQueryLogConfigAssociationRequest): Route53ResolverResponsesFetchResolverQueryLogConfigAssociation {
    return new Route53ResolverResponsesFetchResolverQueryLogConfigAssociation(this, this.__resources, input);
  }

  public fetchResolverQueryLogConfigPolicy(input: shapes.Route53ResolverGetResolverQueryLogConfigPolicyRequest): Route53ResolverResponsesFetchResolverQueryLogConfigPolicy {
    return new Route53ResolverResponsesFetchResolverQueryLogConfigPolicy(this, this.__resources, input);
  }

  public fetchResolverRule(input: shapes.Route53ResolverGetResolverRuleRequest): Route53ResolverResponsesFetchResolverRule {
    return new Route53ResolverResponsesFetchResolverRule(this, this.__resources, input);
  }

  public fetchResolverRuleAssociation(input: shapes.Route53ResolverGetResolverRuleAssociationRequest): Route53ResolverResponsesFetchResolverRuleAssociation {
    return new Route53ResolverResponsesFetchResolverRuleAssociation(this, this.__resources, input);
  }

  public fetchResolverRulePolicy(input: shapes.Route53ResolverGetResolverRulePolicyRequest): Route53ResolverResponsesFetchResolverRulePolicy {
    return new Route53ResolverResponsesFetchResolverRulePolicy(this, this.__resources, input);
  }

  public importFirewallDomains(input: shapes.Route53ResolverImportFirewallDomainsRequest): Route53ResolverResponsesImportFirewallDomains {
    return new Route53ResolverResponsesImportFirewallDomains(this, this.__resources, input);
  }

  public listFirewallConfigs(input: shapes.Route53ResolverListFirewallConfigsRequest): Route53ResolverResponsesListFirewallConfigs {
    return new Route53ResolverResponsesListFirewallConfigs(this, this.__resources, input);
  }

  public listFirewallDomainLists(input: shapes.Route53ResolverListFirewallDomainListsRequest): Route53ResolverResponsesListFirewallDomainLists {
    return new Route53ResolverResponsesListFirewallDomainLists(this, this.__resources, input);
  }

  public listFirewallDomains(input: shapes.Route53ResolverListFirewallDomainsRequest): Route53ResolverResponsesListFirewallDomains {
    return new Route53ResolverResponsesListFirewallDomains(this, this.__resources, input);
  }

  public listFirewallRuleGroupAssociations(input: shapes.Route53ResolverListFirewallRuleGroupAssociationsRequest): Route53ResolverResponsesListFirewallRuleGroupAssociations {
    return new Route53ResolverResponsesListFirewallRuleGroupAssociations(this, this.__resources, input);
  }

  public listFirewallRuleGroups(input: shapes.Route53ResolverListFirewallRuleGroupsRequest): Route53ResolverResponsesListFirewallRuleGroups {
    return new Route53ResolverResponsesListFirewallRuleGroups(this, this.__resources, input);
  }

  public listFirewallRules(input: shapes.Route53ResolverListFirewallRulesRequest): Route53ResolverResponsesListFirewallRules {
    return new Route53ResolverResponsesListFirewallRules(this, this.__resources, input);
  }

  public listResolverDnssecConfigs(input: shapes.Route53ResolverListResolverDnssecConfigsRequest): Route53ResolverResponsesListResolverDnssecConfigs {
    return new Route53ResolverResponsesListResolverDnssecConfigs(this, this.__resources, input);
  }

  public listResolverEndpointIpAddresses(input: shapes.Route53ResolverListResolverEndpointIpAddressesRequest): Route53ResolverResponsesListResolverEndpointIpAddresses {
    return new Route53ResolverResponsesListResolverEndpointIpAddresses(this, this.__resources, input);
  }

  public listResolverEndpoints(input: shapes.Route53ResolverListResolverEndpointsRequest): Route53ResolverResponsesListResolverEndpoints {
    return new Route53ResolverResponsesListResolverEndpoints(this, this.__resources, input);
  }

  public listResolverQueryLogConfigAssociations(input: shapes.Route53ResolverListResolverQueryLogConfigAssociationsRequest): Route53ResolverResponsesListResolverQueryLogConfigAssociations {
    return new Route53ResolverResponsesListResolverQueryLogConfigAssociations(this, this.__resources, input);
  }

  public listResolverQueryLogConfigs(input: shapes.Route53ResolverListResolverQueryLogConfigsRequest): Route53ResolverResponsesListResolverQueryLogConfigs {
    return new Route53ResolverResponsesListResolverQueryLogConfigs(this, this.__resources, input);
  }

  public listResolverRuleAssociations(input: shapes.Route53ResolverListResolverRuleAssociationsRequest): Route53ResolverResponsesListResolverRuleAssociations {
    return new Route53ResolverResponsesListResolverRuleAssociations(this, this.__resources, input);
  }

  public listResolverRules(input: shapes.Route53ResolverListResolverRulesRequest): Route53ResolverResponsesListResolverRules {
    return new Route53ResolverResponsesListResolverRules(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.Route53ResolverListTagsForResourceRequest): Route53ResolverResponsesListTagsForResource {
    return new Route53ResolverResponsesListTagsForResource(this, this.__resources, input);
  }

  public putFirewallRuleGroupPolicy(input: shapes.Route53ResolverPutFirewallRuleGroupPolicyRequest): Route53ResolverResponsesPutFirewallRuleGroupPolicy {
    return new Route53ResolverResponsesPutFirewallRuleGroupPolicy(this, this.__resources, input);
  }

  public putResolverQueryLogConfigPolicy(input: shapes.Route53ResolverPutResolverQueryLogConfigPolicyRequest): Route53ResolverResponsesPutResolverQueryLogConfigPolicy {
    return new Route53ResolverResponsesPutResolverQueryLogConfigPolicy(this, this.__resources, input);
  }

  public putResolverRulePolicy(input: shapes.Route53ResolverPutResolverRulePolicyRequest): Route53ResolverResponsesPutResolverRulePolicy {
    return new Route53ResolverResponsesPutResolverRulePolicy(this, this.__resources, input);
  }

  public tagResource(input: shapes.Route53ResolverTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.Route53ResolverUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateFirewallConfig(input: shapes.Route53ResolverUpdateFirewallConfigRequest): Route53ResolverResponsesUpdateFirewallConfig {
    return new Route53ResolverResponsesUpdateFirewallConfig(this, this.__resources, input);
  }

  public updateFirewallDomains(input: shapes.Route53ResolverUpdateFirewallDomainsRequest): Route53ResolverResponsesUpdateFirewallDomains {
    return new Route53ResolverResponsesUpdateFirewallDomains(this, this.__resources, input);
  }

  public updateFirewallRule(input: shapes.Route53ResolverUpdateFirewallRuleRequest): Route53ResolverResponsesUpdateFirewallRule {
    return new Route53ResolverResponsesUpdateFirewallRule(this, this.__resources, input);
  }

  public updateFirewallRuleGroupAssociation(input: shapes.Route53ResolverUpdateFirewallRuleGroupAssociationRequest): Route53ResolverResponsesUpdateFirewallRuleGroupAssociation {
    return new Route53ResolverResponsesUpdateFirewallRuleGroupAssociation(this, this.__resources, input);
  }

  public updateResolverDnssecConfig(input: shapes.Route53ResolverUpdateResolverDnssecConfigRequest): Route53ResolverResponsesUpdateResolverDnssecConfig {
    return new Route53ResolverResponsesUpdateResolverDnssecConfig(this, this.__resources, input);
  }

  public updateResolverEndpoint(input: shapes.Route53ResolverUpdateResolverEndpointRequest): Route53ResolverResponsesUpdateResolverEndpoint {
    return new Route53ResolverResponsesUpdateResolverEndpoint(this, this.__resources, input);
  }

  public updateResolverRule(input: shapes.Route53ResolverUpdateResolverRuleRequest): Route53ResolverResponsesUpdateResolverRule {
    return new Route53ResolverResponsesUpdateResolverRule(this, this.__resources, input);
  }

}

export class Route53ResolverResponsesAssociateFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateFirewallRuleGroupRequest) {
  }

  public get firewallRuleGroupAssociation(): Route53ResolverResponsesAssociateFirewallRuleGroupFirewallRuleGroupAssociation {
    return new Route53ResolverResponsesAssociateFirewallRuleGroupFirewallRuleGroupAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesAssociateFirewallRuleGroupFirewallRuleGroupAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateFirewallRuleGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Id'),
        outputPath: 'FirewallRuleGroupAssociation.Id',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Id', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Arn'),
        outputPath: 'FirewallRuleGroupAssociation.Arn',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Arn', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Arn') as unknown as string;
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.FirewallRuleGroupId'),
        outputPath: 'FirewallRuleGroupAssociation.FirewallRuleGroupId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.FirewallRuleGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.VpcId'),
        outputPath: 'FirewallRuleGroupAssociation.VpcId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.VpcId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.VpcId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Name'),
        outputPath: 'FirewallRuleGroupAssociation.Name',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Name', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Priority'),
        outputPath: 'FirewallRuleGroupAssociation.Priority',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Priority', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Priority') as unknown as number;
  }

  public get mutationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.MutationProtection'),
        outputPath: 'FirewallRuleGroupAssociation.MutationProtection',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.MutationProtection', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.MutationProtection') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.ManagedOwnerName'),
        outputPath: 'FirewallRuleGroupAssociation.ManagedOwnerName',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.ManagedOwnerName', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ManagedOwnerName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Status'),
        outputPath: 'FirewallRuleGroupAssociation.Status',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.Status', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.StatusMessage'),
        outputPath: 'FirewallRuleGroupAssociation.StatusMessage',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.StatusMessage') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreatorRequestId'),
        outputPath: 'FirewallRuleGroupAssociation.CreatorRequestId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreationTime'),
        outputPath: 'FirewallRuleGroupAssociation.CreationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.ModificationTime'),
        outputPath: 'FirewallRuleGroupAssociation.ModificationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Name: this.__input.name,
          MutationProtection: this.__input.mutationProtection,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFirewallRuleGroup.FirewallRuleGroupAssociation.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesAssociateResolverEndpointIpAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateResolverEndpointIpAddressRequest) {
  }

  public get resolverEndpoint(): Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint {
    return new Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateResolverEndpointIpAddressRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.Id'),
        outputPath: 'ResolverEndpoint.Id',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Id', props);
    return resource.getResponseField('ResolverEndpoint.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.CreatorRequestId'),
        outputPath: 'ResolverEndpoint.CreatorRequestId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.CreatorRequestId', props);
    return resource.getResponseField('ResolverEndpoint.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.Arn'),
        outputPath: 'ResolverEndpoint.Arn',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Arn', props);
    return resource.getResponseField('ResolverEndpoint.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.Name'),
        outputPath: 'ResolverEndpoint.Name',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Name', props);
    return resource.getResponseField('ResolverEndpoint.Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.SecurityGroupIds'),
        outputPath: 'ResolverEndpoint.SecurityGroupIds',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('ResolverEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get direction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.Direction'),
        outputPath: 'ResolverEndpoint.Direction',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Direction', props);
    return resource.getResponseField('ResolverEndpoint.Direction') as unknown as string;
  }

  public get ipAddressCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.IpAddressCount'),
        outputPath: 'ResolverEndpoint.IpAddressCount',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.IpAddressCount', props);
    return resource.getResponseField('ResolverEndpoint.IpAddressCount') as unknown as number;
  }

  public get hostVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.HostVPCId'),
        outputPath: 'ResolverEndpoint.HostVPCId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.HostVPCId', props);
    return resource.getResponseField('ResolverEndpoint.HostVPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.Status'),
        outputPath: 'ResolverEndpoint.Status',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Status', props);
    return resource.getResponseField('ResolverEndpoint.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.StatusMessage'),
        outputPath: 'ResolverEndpoint.StatusMessage',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.StatusMessage', props);
    return resource.getResponseField('ResolverEndpoint.StatusMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.CreationTime'),
        outputPath: 'ResolverEndpoint.CreationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.CreationTime', props);
    return resource.getResponseField('ResolverEndpoint.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverEndpointIpAddress.ResolverEndpoint.ModificationTime'),
        outputPath: 'ResolverEndpoint.ModificationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesAssociateResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateResolverQueryLogConfigRequest) {
  }

  public get resolverQueryLogConfigAssociation(): Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation {
    return new Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateResolverQueryLogConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Id'),
        outputPath: 'ResolverQueryLogConfigAssociation.Id',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Id', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Id') as unknown as string;
  }

  public get resolverQueryLogConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId'),
        outputPath: 'ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResourceId'),
        outputPath: 'ResolverQueryLogConfigAssociation.ResourceId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResourceId', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ResourceId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Status'),
        outputPath: 'ResolverQueryLogConfigAssociation.Status',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Status', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Status') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Error'),
        outputPath: 'ResolverQueryLogConfigAssociation.Error',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Error', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Error') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ErrorMessage'),
        outputPath: 'ResolverQueryLogConfigAssociation.ErrorMessage',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ErrorMessage', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ErrorMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.CreationTime'),
        outputPath: 'ResolverQueryLogConfigAssociation.CreationTime',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.CreationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesAssociateResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateResolverRuleRequest) {
  }

  public get resolverRuleAssociation(): Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation {
    return new Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverAssociateResolverRuleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverRule.ResolverRuleAssociation.Id'),
        outputPath: 'ResolverRuleAssociation.Id',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Name: this.__input.name,
          VPCId: this.__input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverRule.ResolverRuleAssociation.Id', props);
    return resource.getResponseField('ResolverRuleAssociation.Id') as unknown as string;
  }

  public get resolverRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverRule.ResolverRuleAssociation.ResolverRuleId'),
        outputPath: 'ResolverRuleAssociation.ResolverRuleId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Name: this.__input.name,
          VPCId: this.__input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverRule.ResolverRuleAssociation.ResolverRuleId', props);
    return resource.getResponseField('ResolverRuleAssociation.ResolverRuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverRule.ResolverRuleAssociation.Name'),
        outputPath: 'ResolverRuleAssociation.Name',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Name: this.__input.name,
          VPCId: this.__input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverRule.ResolverRuleAssociation.Name', props);
    return resource.getResponseField('ResolverRuleAssociation.Name') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverRule.ResolverRuleAssociation.VPCId'),
        outputPath: 'ResolverRuleAssociation.VPCId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Name: this.__input.name,
          VPCId: this.__input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverRule.ResolverRuleAssociation.VPCId', props);
    return resource.getResponseField('ResolverRuleAssociation.VPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverRule.ResolverRuleAssociation.Status'),
        outputPath: 'ResolverRuleAssociation.Status',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Name: this.__input.name,
          VPCId: this.__input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverRule.ResolverRuleAssociation.Status', props);
    return resource.getResponseField('ResolverRuleAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.AssociateResolverRule.ResolverRuleAssociation.StatusMessage'),
        outputPath: 'ResolverRuleAssociation.StatusMessage',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Name: this.__input.name,
          VPCId: this.__input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResolverRule.ResolverRuleAssociation.StatusMessage', props);
    return resource.getResponseField('ResolverRuleAssociation.StatusMessage') as unknown as string;
  }

}

export class Route53ResolverResponsesCreateFirewallDomainList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateFirewallDomainListRequest) {
  }

  public get firewallDomainList(): Route53ResolverResponsesCreateFirewallDomainListFirewallDomainList {
    return new Route53ResolverResponsesCreateFirewallDomainListFirewallDomainList(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesCreateFirewallDomainListFirewallDomainList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateFirewallDomainListRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.Id'),
        outputPath: 'FirewallDomainList.Id',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.Id', props);
    return resource.getResponseField('FirewallDomainList.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.Arn'),
        outputPath: 'FirewallDomainList.Arn',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.Arn', props);
    return resource.getResponseField('FirewallDomainList.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.Name'),
        outputPath: 'FirewallDomainList.Name',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.Name', props);
    return resource.getResponseField('FirewallDomainList.Name') as unknown as string;
  }

  public get domainCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.DomainCount'),
        outputPath: 'FirewallDomainList.DomainCount',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.DomainCount', props);
    return resource.getResponseField('FirewallDomainList.DomainCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.Status'),
        outputPath: 'FirewallDomainList.Status',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.Status', props);
    return resource.getResponseField('FirewallDomainList.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.StatusMessage'),
        outputPath: 'FirewallDomainList.StatusMessage',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.StatusMessage', props);
    return resource.getResponseField('FirewallDomainList.StatusMessage') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.ManagedOwnerName'),
        outputPath: 'FirewallDomainList.ManagedOwnerName',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.ManagedOwnerName', props);
    return resource.getResponseField('FirewallDomainList.ManagedOwnerName') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.CreatorRequestId'),
        outputPath: 'FirewallDomainList.CreatorRequestId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.CreatorRequestId', props);
    return resource.getResponseField('FirewallDomainList.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.CreationTime'),
        outputPath: 'FirewallDomainList.CreationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.CreationTime', props);
    return resource.getResponseField('FirewallDomainList.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallDomainList.FirewallDomainList.ModificationTime'),
        outputPath: 'FirewallDomainList.ModificationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallDomainList.FirewallDomainList.ModificationTime', props);
    return resource.getResponseField('FirewallDomainList.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesCreateFirewallRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateFirewallRuleRequest) {
  }

  public get firewallRule(): Route53ResolverResponsesCreateFirewallRuleFirewallRule {
    return new Route53ResolverResponsesCreateFirewallRuleFirewallRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesCreateFirewallRuleFirewallRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateFirewallRuleRequest) {
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.FirewallRuleGroupId'),
        outputPath: 'FirewallRule.FirewallRuleGroupId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRule.FirewallRuleGroupId') as unknown as string;
  }

  public get firewallDomainListId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.FirewallDomainListId'),
        outputPath: 'FirewallRule.FirewallDomainListId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.FirewallDomainListId', props);
    return resource.getResponseField('FirewallRule.FirewallDomainListId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.Name'),
        outputPath: 'FirewallRule.Name',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.Name', props);
    return resource.getResponseField('FirewallRule.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.Priority'),
        outputPath: 'FirewallRule.Priority',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.Priority', props);
    return resource.getResponseField('FirewallRule.Priority') as unknown as number;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.Action'),
        outputPath: 'FirewallRule.Action',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.Action', props);
    return resource.getResponseField('FirewallRule.Action') as unknown as string;
  }

  public get blockResponse(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.BlockResponse'),
        outputPath: 'FirewallRule.BlockResponse',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.BlockResponse', props);
    return resource.getResponseField('FirewallRule.BlockResponse') as unknown as string;
  }

  public get blockOverrideDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.BlockOverrideDomain'),
        outputPath: 'FirewallRule.BlockOverrideDomain',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.BlockOverrideDomain', props);
    return resource.getResponseField('FirewallRule.BlockOverrideDomain') as unknown as string;
  }

  public get blockOverrideDnsType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.BlockOverrideDnsType'),
        outputPath: 'FirewallRule.BlockOverrideDnsType',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.BlockOverrideDnsType', props);
    return resource.getResponseField('FirewallRule.BlockOverrideDnsType') as unknown as string;
  }

  public get blockOverrideTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.BlockOverrideTtl'),
        outputPath: 'FirewallRule.BlockOverrideTtl',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.BlockOverrideTtl', props);
    return resource.getResponseField('FirewallRule.BlockOverrideTtl') as unknown as number;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.CreatorRequestId'),
        outputPath: 'FirewallRule.CreatorRequestId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.CreatorRequestId', props);
    return resource.getResponseField('FirewallRule.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.CreationTime'),
        outputPath: 'FirewallRule.CreationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.CreationTime', props);
    return resource.getResponseField('FirewallRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRule.FirewallRule.ModificationTime'),
        outputPath: 'FirewallRule.ModificationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRule.FirewallRule.ModificationTime', props);
    return resource.getResponseField('FirewallRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesCreateFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateFirewallRuleGroupRequest) {
  }

  public get firewallRuleGroup(): Route53ResolverResponsesCreateFirewallRuleGroupFirewallRuleGroup {
    return new Route53ResolverResponsesCreateFirewallRuleGroupFirewallRuleGroup(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesCreateFirewallRuleGroupFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateFirewallRuleGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.Id'),
        outputPath: 'FirewallRuleGroup.Id',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.Id', props);
    return resource.getResponseField('FirewallRuleGroup.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.Arn'),
        outputPath: 'FirewallRuleGroup.Arn',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.Arn', props);
    return resource.getResponseField('FirewallRuleGroup.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.Name'),
        outputPath: 'FirewallRuleGroup.Name',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.Name', props);
    return resource.getResponseField('FirewallRuleGroup.Name') as unknown as string;
  }

  public get ruleCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.RuleCount'),
        outputPath: 'FirewallRuleGroup.RuleCount',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.RuleCount', props);
    return resource.getResponseField('FirewallRuleGroup.RuleCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.Status'),
        outputPath: 'FirewallRuleGroup.Status',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.Status', props);
    return resource.getResponseField('FirewallRuleGroup.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.StatusMessage'),
        outputPath: 'FirewallRuleGroup.StatusMessage',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroup.StatusMessage') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.OwnerId'),
        outputPath: 'FirewallRuleGroup.OwnerId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.OwnerId', props);
    return resource.getResponseField('FirewallRuleGroup.OwnerId') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.CreatorRequestId'),
        outputPath: 'FirewallRuleGroup.CreatorRequestId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroup.CreatorRequestId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.ShareStatus'),
        outputPath: 'FirewallRuleGroup.ShareStatus',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.ShareStatus', props);
    return resource.getResponseField('FirewallRuleGroup.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.CreationTime'),
        outputPath: 'FirewallRuleGroup.CreationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroup.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateFirewallRuleGroup.FirewallRuleGroup.ModificationTime'),
        outputPath: 'FirewallRuleGroup.ModificationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFirewallRuleGroup.FirewallRuleGroup.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroup.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesCreateResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateResolverEndpointRequest) {
  }

  public get resolverEndpoint(): Route53ResolverResponsesCreateResolverEndpointResolverEndpoint {
    return new Route53ResolverResponsesCreateResolverEndpointResolverEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesCreateResolverEndpointResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateResolverEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.Id'),
        outputPath: 'ResolverEndpoint.Id',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.Id', props);
    return resource.getResponseField('ResolverEndpoint.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.CreatorRequestId'),
        outputPath: 'ResolverEndpoint.CreatorRequestId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
    return resource.getResponseField('ResolverEndpoint.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.Arn'),
        outputPath: 'ResolverEndpoint.Arn',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.Arn', props);
    return resource.getResponseField('ResolverEndpoint.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.Name'),
        outputPath: 'ResolverEndpoint.Name',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.Name', props);
    return resource.getResponseField('ResolverEndpoint.Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.SecurityGroupIds'),
        outputPath: 'ResolverEndpoint.SecurityGroupIds',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('ResolverEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get direction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.Direction'),
        outputPath: 'ResolverEndpoint.Direction',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.Direction', props);
    return resource.getResponseField('ResolverEndpoint.Direction') as unknown as string;
  }

  public get ipAddressCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.IpAddressCount'),
        outputPath: 'ResolverEndpoint.IpAddressCount',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
    return resource.getResponseField('ResolverEndpoint.IpAddressCount') as unknown as number;
  }

  public get hostVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.HostVPCId'),
        outputPath: 'ResolverEndpoint.HostVPCId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.HostVPCId', props);
    return resource.getResponseField('ResolverEndpoint.HostVPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.Status'),
        outputPath: 'ResolverEndpoint.Status',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.Status', props);
    return resource.getResponseField('ResolverEndpoint.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.StatusMessage'),
        outputPath: 'ResolverEndpoint.StatusMessage',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.StatusMessage', props);
    return resource.getResponseField('ResolverEndpoint.StatusMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.CreationTime'),
        outputPath: 'ResolverEndpoint.CreationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.CreationTime', props);
    return resource.getResponseField('ResolverEndpoint.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverEndpoint.ResolverEndpoint.ModificationTime'),
        outputPath: 'ResolverEndpoint.ModificationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          SecurityGroupIds: this.__input.securityGroupIds,
          Direction: this.__input.direction,
          IpAddresses: this.__input.ipAddresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesCreateResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateResolverQueryLogConfigRequest) {
  }

  public get resolverQueryLogConfig(): Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig {
    return new Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateResolverQueryLogConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.Id'),
        outputPath: 'ResolverQueryLogConfig.Id',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Id', props);
    return resource.getResponseField('ResolverQueryLogConfig.Id') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId'),
        outputPath: 'ResolverQueryLogConfig.OwnerId',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId', props);
    return resource.getResponseField('ResolverQueryLogConfig.OwnerId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.Status'),
        outputPath: 'ResolverQueryLogConfig.Status',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Status', props);
    return resource.getResponseField('ResolverQueryLogConfig.Status') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus'),
        outputPath: 'ResolverQueryLogConfig.ShareStatus',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus', props);
    return resource.getResponseField('ResolverQueryLogConfig.ShareStatus') as unknown as string;
  }

  public get associationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount'),
        outputPath: 'ResolverQueryLogConfig.AssociationCount',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount', props);
    return resource.getResponseField('ResolverQueryLogConfig.AssociationCount') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.Arn'),
        outputPath: 'ResolverQueryLogConfig.Arn',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Arn', props);
    return resource.getResponseField('ResolverQueryLogConfig.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.Name'),
        outputPath: 'ResolverQueryLogConfig.Name',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Name', props);
    return resource.getResponseField('ResolverQueryLogConfig.Name') as unknown as string;
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn'),
        outputPath: 'ResolverQueryLogConfig.DestinationArn',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn', props);
    return resource.getResponseField('ResolverQueryLogConfig.DestinationArn') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId'),
        outputPath: 'ResolverQueryLogConfig.CreatorRequestId',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime'),
        outputPath: 'ResolverQueryLogConfig.CreationTime',
        parameters: {
          Name: this.__input.name,
          DestinationArn: this.__input.destinationArn,
          CreatorRequestId: this.__input.creatorRequestId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesCreateResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateResolverRuleRequest) {
  }

  public get resolverRule(): Route53ResolverResponsesCreateResolverRuleResolverRule {
    return new Route53ResolverResponsesCreateResolverRuleResolverRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesCreateResolverRuleResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverCreateResolverRuleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.Id'),
        outputPath: 'ResolverRule.Id',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.Id', props);
    return resource.getResponseField('ResolverRule.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.CreatorRequestId'),
        outputPath: 'ResolverRule.CreatorRequestId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.CreatorRequestId', props);
    return resource.getResponseField('ResolverRule.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.Arn'),
        outputPath: 'ResolverRule.Arn',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.Arn', props);
    return resource.getResponseField('ResolverRule.Arn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.DomainName'),
        outputPath: 'ResolverRule.DomainName',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.DomainName', props);
    return resource.getResponseField('ResolverRule.DomainName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.Status'),
        outputPath: 'ResolverRule.Status',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.Status', props);
    return resource.getResponseField('ResolverRule.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.StatusMessage'),
        outputPath: 'ResolverRule.StatusMessage',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.StatusMessage', props);
    return resource.getResponseField('ResolverRule.StatusMessage') as unknown as string;
  }

  public get ruleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.RuleType'),
        outputPath: 'ResolverRule.RuleType',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.RuleType', props);
    return resource.getResponseField('ResolverRule.RuleType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.Name'),
        outputPath: 'ResolverRule.Name',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.Name', props);
    return resource.getResponseField('ResolverRule.Name') as unknown as string;
  }

  public get targetIps(): shapes.Route53ResolverTargetAddress[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.TargetIps'),
        outputPath: 'ResolverRule.TargetIps',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.TargetIps', props);
    return resource.getResponseField('ResolverRule.TargetIps') as unknown as shapes.Route53ResolverTargetAddress[];
  }

  public get resolverEndpointId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.ResolverEndpointId'),
        outputPath: 'ResolverRule.ResolverEndpointId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.ResolverEndpointId', props);
    return resource.getResponseField('ResolverRule.ResolverEndpointId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.OwnerId'),
        outputPath: 'ResolverRule.OwnerId',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.OwnerId', props);
    return resource.getResponseField('ResolverRule.OwnerId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.ShareStatus'),
        outputPath: 'ResolverRule.ShareStatus',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.ShareStatus', props);
    return resource.getResponseField('ResolverRule.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.CreationTime'),
        outputPath: 'ResolverRule.CreationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.CreationTime', props);
    return resource.getResponseField('ResolverRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.CreateResolverRule.ResolverRule.ModificationTime'),
        outputPath: 'ResolverRule.ModificationTime',
        parameters: {
          CreatorRequestId: this.__input.creatorRequestId,
          Name: this.__input.name,
          RuleType: this.__input.ruleType,
          DomainName: this.__input.domainName,
          TargetIps: this.__input.targetIps,
          ResolverEndpointId: this.__input.resolverEndpointId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDeleteFirewallDomainList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteFirewallDomainListRequest) {
  }

  public get firewallDomainList(): Route53ResolverResponsesDeleteFirewallDomainListFirewallDomainList {
    return new Route53ResolverResponsesDeleteFirewallDomainListFirewallDomainList(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDeleteFirewallDomainListFirewallDomainList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteFirewallDomainListRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.Id'),
        outputPath: 'FirewallDomainList.Id',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.Id', props);
    return resource.getResponseField('FirewallDomainList.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.Arn'),
        outputPath: 'FirewallDomainList.Arn',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.Arn', props);
    return resource.getResponseField('FirewallDomainList.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.Name'),
        outputPath: 'FirewallDomainList.Name',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.Name', props);
    return resource.getResponseField('FirewallDomainList.Name') as unknown as string;
  }

  public get domainCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.DomainCount'),
        outputPath: 'FirewallDomainList.DomainCount',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.DomainCount', props);
    return resource.getResponseField('FirewallDomainList.DomainCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.Status'),
        outputPath: 'FirewallDomainList.Status',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.Status', props);
    return resource.getResponseField('FirewallDomainList.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.StatusMessage'),
        outputPath: 'FirewallDomainList.StatusMessage',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.StatusMessage', props);
    return resource.getResponseField('FirewallDomainList.StatusMessage') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.ManagedOwnerName'),
        outputPath: 'FirewallDomainList.ManagedOwnerName',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.ManagedOwnerName', props);
    return resource.getResponseField('FirewallDomainList.ManagedOwnerName') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.CreatorRequestId'),
        outputPath: 'FirewallDomainList.CreatorRequestId',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.CreatorRequestId', props);
    return resource.getResponseField('FirewallDomainList.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.CreationTime'),
        outputPath: 'FirewallDomainList.CreationTime',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.CreationTime', props);
    return resource.getResponseField('FirewallDomainList.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallDomainList.FirewallDomainList.ModificationTime'),
        outputPath: 'FirewallDomainList.ModificationTime',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallDomainList.FirewallDomainList.ModificationTime', props);
    return resource.getResponseField('FirewallDomainList.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDeleteFirewallRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteFirewallRuleRequest) {
  }

  public get firewallRule(): Route53ResolverResponsesDeleteFirewallRuleFirewallRule {
    return new Route53ResolverResponsesDeleteFirewallRuleFirewallRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDeleteFirewallRuleFirewallRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteFirewallRuleRequest) {
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.FirewallRuleGroupId'),
        outputPath: 'FirewallRule.FirewallRuleGroupId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRule.FirewallRuleGroupId') as unknown as string;
  }

  public get firewallDomainListId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.FirewallDomainListId'),
        outputPath: 'FirewallRule.FirewallDomainListId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.FirewallDomainListId', props);
    return resource.getResponseField('FirewallRule.FirewallDomainListId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.Name'),
        outputPath: 'FirewallRule.Name',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.Name', props);
    return resource.getResponseField('FirewallRule.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.Priority'),
        outputPath: 'FirewallRule.Priority',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.Priority', props);
    return resource.getResponseField('FirewallRule.Priority') as unknown as number;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.Action'),
        outputPath: 'FirewallRule.Action',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.Action', props);
    return resource.getResponseField('FirewallRule.Action') as unknown as string;
  }

  public get blockResponse(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.BlockResponse'),
        outputPath: 'FirewallRule.BlockResponse',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.BlockResponse', props);
    return resource.getResponseField('FirewallRule.BlockResponse') as unknown as string;
  }

  public get blockOverrideDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.BlockOverrideDomain'),
        outputPath: 'FirewallRule.BlockOverrideDomain',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.BlockOverrideDomain', props);
    return resource.getResponseField('FirewallRule.BlockOverrideDomain') as unknown as string;
  }

  public get blockOverrideDnsType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.BlockOverrideDnsType'),
        outputPath: 'FirewallRule.BlockOverrideDnsType',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.BlockOverrideDnsType', props);
    return resource.getResponseField('FirewallRule.BlockOverrideDnsType') as unknown as string;
  }

  public get blockOverrideTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.BlockOverrideTtl'),
        outputPath: 'FirewallRule.BlockOverrideTtl',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.BlockOverrideTtl', props);
    return resource.getResponseField('FirewallRule.BlockOverrideTtl') as unknown as number;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.CreatorRequestId'),
        outputPath: 'FirewallRule.CreatorRequestId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.CreatorRequestId', props);
    return resource.getResponseField('FirewallRule.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.CreationTime'),
        outputPath: 'FirewallRule.CreationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.CreationTime', props);
    return resource.getResponseField('FirewallRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRule.FirewallRule.ModificationTime'),
        outputPath: 'FirewallRule.ModificationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRule.FirewallRule.ModificationTime', props);
    return resource.getResponseField('FirewallRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDeleteFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteFirewallRuleGroupRequest) {
  }

  public get firewallRuleGroup(): Route53ResolverResponsesDeleteFirewallRuleGroupFirewallRuleGroup {
    return new Route53ResolverResponsesDeleteFirewallRuleGroupFirewallRuleGroup(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDeleteFirewallRuleGroupFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteFirewallRuleGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.Id'),
        outputPath: 'FirewallRuleGroup.Id',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.Id', props);
    return resource.getResponseField('FirewallRuleGroup.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.Arn'),
        outputPath: 'FirewallRuleGroup.Arn',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.Arn', props);
    return resource.getResponseField('FirewallRuleGroup.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.Name'),
        outputPath: 'FirewallRuleGroup.Name',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.Name', props);
    return resource.getResponseField('FirewallRuleGroup.Name') as unknown as string;
  }

  public get ruleCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.RuleCount'),
        outputPath: 'FirewallRuleGroup.RuleCount',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.RuleCount', props);
    return resource.getResponseField('FirewallRuleGroup.RuleCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.Status'),
        outputPath: 'FirewallRuleGroup.Status',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.Status', props);
    return resource.getResponseField('FirewallRuleGroup.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.StatusMessage'),
        outputPath: 'FirewallRuleGroup.StatusMessage',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroup.StatusMessage') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.OwnerId'),
        outputPath: 'FirewallRuleGroup.OwnerId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.OwnerId', props);
    return resource.getResponseField('FirewallRuleGroup.OwnerId') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.CreatorRequestId'),
        outputPath: 'FirewallRuleGroup.CreatorRequestId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroup.CreatorRequestId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.ShareStatus'),
        outputPath: 'FirewallRuleGroup.ShareStatus',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.ShareStatus', props);
    return resource.getResponseField('FirewallRuleGroup.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.CreationTime'),
        outputPath: 'FirewallRuleGroup.CreationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroup.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteFirewallRuleGroup.FirewallRuleGroup.ModificationTime'),
        outputPath: 'FirewallRuleGroup.ModificationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallRuleGroup.FirewallRuleGroup.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroup.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDeleteResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteResolverEndpointRequest) {
  }

  public get resolverEndpoint(): Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint {
    return new Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteResolverEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.Id'),
        outputPath: 'ResolverEndpoint.Id',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.Id', props);
    return resource.getResponseField('ResolverEndpoint.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.CreatorRequestId'),
        outputPath: 'ResolverEndpoint.CreatorRequestId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
    return resource.getResponseField('ResolverEndpoint.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.Arn'),
        outputPath: 'ResolverEndpoint.Arn',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.Arn', props);
    return resource.getResponseField('ResolverEndpoint.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.Name'),
        outputPath: 'ResolverEndpoint.Name',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.Name', props);
    return resource.getResponseField('ResolverEndpoint.Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.SecurityGroupIds'),
        outputPath: 'ResolverEndpoint.SecurityGroupIds',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('ResolverEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get direction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.Direction'),
        outputPath: 'ResolverEndpoint.Direction',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.Direction', props);
    return resource.getResponseField('ResolverEndpoint.Direction') as unknown as string;
  }

  public get ipAddressCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.IpAddressCount'),
        outputPath: 'ResolverEndpoint.IpAddressCount',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
    return resource.getResponseField('ResolverEndpoint.IpAddressCount') as unknown as number;
  }

  public get hostVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.HostVPCId'),
        outputPath: 'ResolverEndpoint.HostVPCId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.HostVPCId', props);
    return resource.getResponseField('ResolverEndpoint.HostVPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.Status'),
        outputPath: 'ResolverEndpoint.Status',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.Status', props);
    return resource.getResponseField('ResolverEndpoint.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.StatusMessage'),
        outputPath: 'ResolverEndpoint.StatusMessage',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.StatusMessage', props);
    return resource.getResponseField('ResolverEndpoint.StatusMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.CreationTime'),
        outputPath: 'ResolverEndpoint.CreationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.CreationTime', props);
    return resource.getResponseField('ResolverEndpoint.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverEndpoint.ResolverEndpoint.ModificationTime'),
        outputPath: 'ResolverEndpoint.ModificationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDeleteResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteResolverQueryLogConfigRequest) {
  }

  public get resolverQueryLogConfig(): Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig {
    return new Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteResolverQueryLogConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Id'),
        outputPath: 'ResolverQueryLogConfig.Id',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Id', props);
    return resource.getResponseField('ResolverQueryLogConfig.Id') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId'),
        outputPath: 'ResolverQueryLogConfig.OwnerId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId', props);
    return resource.getResponseField('ResolverQueryLogConfig.OwnerId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Status'),
        outputPath: 'ResolverQueryLogConfig.Status',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Status', props);
    return resource.getResponseField('ResolverQueryLogConfig.Status') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus'),
        outputPath: 'ResolverQueryLogConfig.ShareStatus',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus', props);
    return resource.getResponseField('ResolverQueryLogConfig.ShareStatus') as unknown as string;
  }

  public get associationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount'),
        outputPath: 'ResolverQueryLogConfig.AssociationCount',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount', props);
    return resource.getResponseField('ResolverQueryLogConfig.AssociationCount') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Arn'),
        outputPath: 'ResolverQueryLogConfig.Arn',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Arn', props);
    return resource.getResponseField('ResolverQueryLogConfig.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Name'),
        outputPath: 'ResolverQueryLogConfig.Name',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Name', props);
    return resource.getResponseField('ResolverQueryLogConfig.Name') as unknown as string;
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn'),
        outputPath: 'ResolverQueryLogConfig.DestinationArn',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn', props);
    return resource.getResponseField('ResolverQueryLogConfig.DestinationArn') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId'),
        outputPath: 'ResolverQueryLogConfig.CreatorRequestId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime'),
        outputPath: 'ResolverQueryLogConfig.CreationTime',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDeleteResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteResolverRuleRequest) {
  }

  public get resolverRule(): Route53ResolverResponsesDeleteResolverRuleResolverRule {
    return new Route53ResolverResponsesDeleteResolverRuleResolverRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDeleteResolverRuleResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDeleteResolverRuleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.Id'),
        outputPath: 'ResolverRule.Id',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.Id', props);
    return resource.getResponseField('ResolverRule.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.CreatorRequestId'),
        outputPath: 'ResolverRule.CreatorRequestId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.CreatorRequestId', props);
    return resource.getResponseField('ResolverRule.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.Arn'),
        outputPath: 'ResolverRule.Arn',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.Arn', props);
    return resource.getResponseField('ResolverRule.Arn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.DomainName'),
        outputPath: 'ResolverRule.DomainName',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.DomainName', props);
    return resource.getResponseField('ResolverRule.DomainName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.Status'),
        outputPath: 'ResolverRule.Status',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.Status', props);
    return resource.getResponseField('ResolverRule.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.StatusMessage'),
        outputPath: 'ResolverRule.StatusMessage',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.StatusMessage', props);
    return resource.getResponseField('ResolverRule.StatusMessage') as unknown as string;
  }

  public get ruleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.RuleType'),
        outputPath: 'ResolverRule.RuleType',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.RuleType', props);
    return resource.getResponseField('ResolverRule.RuleType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.Name'),
        outputPath: 'ResolverRule.Name',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.Name', props);
    return resource.getResponseField('ResolverRule.Name') as unknown as string;
  }

  public get targetIps(): shapes.Route53ResolverTargetAddress[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.TargetIps'),
        outputPath: 'ResolverRule.TargetIps',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.TargetIps', props);
    return resource.getResponseField('ResolverRule.TargetIps') as unknown as shapes.Route53ResolverTargetAddress[];
  }

  public get resolverEndpointId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.ResolverEndpointId'),
        outputPath: 'ResolverRule.ResolverEndpointId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.ResolverEndpointId', props);
    return resource.getResponseField('ResolverRule.ResolverEndpointId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.OwnerId'),
        outputPath: 'ResolverRule.OwnerId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.OwnerId', props);
    return resource.getResponseField('ResolverRule.OwnerId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.ShareStatus'),
        outputPath: 'ResolverRule.ShareStatus',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.ShareStatus', props);
    return resource.getResponseField('ResolverRule.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.CreationTime'),
        outputPath: 'ResolverRule.CreationTime',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.CreationTime', props);
    return resource.getResponseField('ResolverRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DeleteResolverRule.ResolverRule.ModificationTime'),
        outputPath: 'ResolverRule.ModificationTime',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDisassociateFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateFirewallRuleGroupRequest) {
  }

  public get firewallRuleGroupAssociation(): Route53ResolverResponsesDisassociateFirewallRuleGroupFirewallRuleGroupAssociation {
    return new Route53ResolverResponsesDisassociateFirewallRuleGroupFirewallRuleGroupAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDisassociateFirewallRuleGroupFirewallRuleGroupAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateFirewallRuleGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Id'),
        outputPath: 'FirewallRuleGroupAssociation.Id',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Id', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Arn'),
        outputPath: 'FirewallRuleGroupAssociation.Arn',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Arn', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Arn') as unknown as string;
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.FirewallRuleGroupId'),
        outputPath: 'FirewallRuleGroupAssociation.FirewallRuleGroupId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.FirewallRuleGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.VpcId'),
        outputPath: 'FirewallRuleGroupAssociation.VpcId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.VpcId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.VpcId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Name'),
        outputPath: 'FirewallRuleGroupAssociation.Name',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Name', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Priority'),
        outputPath: 'FirewallRuleGroupAssociation.Priority',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Priority', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Priority') as unknown as number;
  }

  public get mutationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.MutationProtection'),
        outputPath: 'FirewallRuleGroupAssociation.MutationProtection',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.MutationProtection', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.MutationProtection') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.ManagedOwnerName'),
        outputPath: 'FirewallRuleGroupAssociation.ManagedOwnerName',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.ManagedOwnerName', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ManagedOwnerName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Status'),
        outputPath: 'FirewallRuleGroupAssociation.Status',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.Status', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.StatusMessage'),
        outputPath: 'FirewallRuleGroupAssociation.StatusMessage',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.StatusMessage') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreatorRequestId'),
        outputPath: 'FirewallRuleGroupAssociation.CreatorRequestId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreationTime'),
        outputPath: 'FirewallRuleGroupAssociation.CreationTime',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.ModificationTime'),
        outputPath: 'FirewallRuleGroupAssociation.ModificationTime',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFirewallRuleGroup.FirewallRuleGroupAssociation.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDisassociateResolverEndpointIpAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateResolverEndpointIpAddressRequest) {
  }

  public get resolverEndpoint(): Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint {
    return new Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateResolverEndpointIpAddressRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.Id'),
        outputPath: 'ResolverEndpoint.Id',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Id', props);
    return resource.getResponseField('ResolverEndpoint.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.CreatorRequestId'),
        outputPath: 'ResolverEndpoint.CreatorRequestId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.CreatorRequestId', props);
    return resource.getResponseField('ResolverEndpoint.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.Arn'),
        outputPath: 'ResolverEndpoint.Arn',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Arn', props);
    return resource.getResponseField('ResolverEndpoint.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.Name'),
        outputPath: 'ResolverEndpoint.Name',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Name', props);
    return resource.getResponseField('ResolverEndpoint.Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.SecurityGroupIds'),
        outputPath: 'ResolverEndpoint.SecurityGroupIds',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('ResolverEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get direction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.Direction'),
        outputPath: 'ResolverEndpoint.Direction',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Direction', props);
    return resource.getResponseField('ResolverEndpoint.Direction') as unknown as string;
  }

  public get ipAddressCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.IpAddressCount'),
        outputPath: 'ResolverEndpoint.IpAddressCount',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.IpAddressCount', props);
    return resource.getResponseField('ResolverEndpoint.IpAddressCount') as unknown as number;
  }

  public get hostVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.HostVPCId'),
        outputPath: 'ResolverEndpoint.HostVPCId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.HostVPCId', props);
    return resource.getResponseField('ResolverEndpoint.HostVPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.Status'),
        outputPath: 'ResolverEndpoint.Status',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Status', props);
    return resource.getResponseField('ResolverEndpoint.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.StatusMessage'),
        outputPath: 'ResolverEndpoint.StatusMessage',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.StatusMessage', props);
    return resource.getResponseField('ResolverEndpoint.StatusMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.CreationTime'),
        outputPath: 'ResolverEndpoint.CreationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.CreationTime', props);
    return resource.getResponseField('ResolverEndpoint.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverEndpointIpAddress',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverEndpointIpAddress.ResolverEndpoint.ModificationTime'),
        outputPath: 'ResolverEndpoint.ModificationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          IpAddress: {
            IpId: this.__input.ipAddress.ipId,
            SubnetId: this.__input.ipAddress.subnetId,
            Ip: this.__input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDisassociateResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateResolverQueryLogConfigRequest) {
  }

  public get resolverQueryLogConfigAssociation(): Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation {
    return new Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateResolverQueryLogConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Id'),
        outputPath: 'ResolverQueryLogConfigAssociation.Id',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Id', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Id') as unknown as string;
  }

  public get resolverQueryLogConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId'),
        outputPath: 'ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResourceId'),
        outputPath: 'ResolverQueryLogConfigAssociation.ResourceId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResourceId', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ResourceId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Status'),
        outputPath: 'ResolverQueryLogConfigAssociation.Status',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Status', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Status') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Error'),
        outputPath: 'ResolverQueryLogConfigAssociation.Error',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Error', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Error') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ErrorMessage'),
        outputPath: 'ResolverQueryLogConfigAssociation.ErrorMessage',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ErrorMessage', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ErrorMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.CreationTime'),
        outputPath: 'ResolverQueryLogConfigAssociation.CreationTime',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.CreationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesDisassociateResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateResolverRuleRequest) {
  }

  public get resolverRuleAssociation(): Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation {
    return new Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverDisassociateResolverRuleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverRule.ResolverRuleAssociation.Id'),
        outputPath: 'ResolverRuleAssociation.Id',
        parameters: {
          VPCId: this.__input.vpcId,
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverRule.ResolverRuleAssociation.Id', props);
    return resource.getResponseField('ResolverRuleAssociation.Id') as unknown as string;
  }

  public get resolverRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverRule.ResolverRuleAssociation.ResolverRuleId'),
        outputPath: 'ResolverRuleAssociation.ResolverRuleId',
        parameters: {
          VPCId: this.__input.vpcId,
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverRule.ResolverRuleAssociation.ResolverRuleId', props);
    return resource.getResponseField('ResolverRuleAssociation.ResolverRuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverRule.ResolverRuleAssociation.Name'),
        outputPath: 'ResolverRuleAssociation.Name',
        parameters: {
          VPCId: this.__input.vpcId,
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverRule.ResolverRuleAssociation.Name', props);
    return resource.getResponseField('ResolverRuleAssociation.Name') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverRule.ResolverRuleAssociation.VPCId'),
        outputPath: 'ResolverRuleAssociation.VPCId',
        parameters: {
          VPCId: this.__input.vpcId,
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverRule.ResolverRuleAssociation.VPCId', props);
    return resource.getResponseField('ResolverRuleAssociation.VPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverRule.ResolverRuleAssociation.Status'),
        outputPath: 'ResolverRuleAssociation.Status',
        parameters: {
          VPCId: this.__input.vpcId,
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverRule.ResolverRuleAssociation.Status', props);
    return resource.getResponseField('ResolverRuleAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.DisassociateResolverRule.ResolverRuleAssociation.StatusMessage'),
        outputPath: 'ResolverRuleAssociation.StatusMessage',
        parameters: {
          VPCId: this.__input.vpcId,
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResolverRule.ResolverRuleAssociation.StatusMessage', props);
    return resource.getResponseField('ResolverRuleAssociation.StatusMessage') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchFirewallConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallConfigRequest) {
  }

  public get firewallConfig(): Route53ResolverResponsesFetchFirewallConfigFirewallConfig {
    return new Route53ResolverResponsesFetchFirewallConfigFirewallConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchFirewallConfigFirewallConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallConfig.FirewallConfig.Id'),
        outputPath: 'FirewallConfig.Id',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallConfig.FirewallConfig.Id', props);
    return resource.getResponseField('FirewallConfig.Id') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallConfig.FirewallConfig.ResourceId'),
        outputPath: 'FirewallConfig.ResourceId',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallConfig.FirewallConfig.ResourceId', props);
    return resource.getResponseField('FirewallConfig.ResourceId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallConfig.FirewallConfig.OwnerId'),
        outputPath: 'FirewallConfig.OwnerId',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallConfig.FirewallConfig.OwnerId', props);
    return resource.getResponseField('FirewallConfig.OwnerId') as unknown as string;
  }

  public get firewallFailOpen(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallConfig.FirewallConfig.FirewallFailOpen'),
        outputPath: 'FirewallConfig.FirewallFailOpen',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallConfig.FirewallConfig.FirewallFailOpen', props);
    return resource.getResponseField('FirewallConfig.FirewallFailOpen') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchFirewallDomainList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallDomainListRequest) {
  }

  public get firewallDomainList(): Route53ResolverResponsesFetchFirewallDomainListFirewallDomainList {
    return new Route53ResolverResponsesFetchFirewallDomainListFirewallDomainList(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchFirewallDomainListFirewallDomainList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallDomainListRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.Id'),
        outputPath: 'FirewallDomainList.Id',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.Id', props);
    return resource.getResponseField('FirewallDomainList.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.Arn'),
        outputPath: 'FirewallDomainList.Arn',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.Arn', props);
    return resource.getResponseField('FirewallDomainList.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.Name'),
        outputPath: 'FirewallDomainList.Name',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.Name', props);
    return resource.getResponseField('FirewallDomainList.Name') as unknown as string;
  }

  public get domainCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.DomainCount'),
        outputPath: 'FirewallDomainList.DomainCount',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.DomainCount', props);
    return resource.getResponseField('FirewallDomainList.DomainCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.Status'),
        outputPath: 'FirewallDomainList.Status',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.Status', props);
    return resource.getResponseField('FirewallDomainList.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.StatusMessage'),
        outputPath: 'FirewallDomainList.StatusMessage',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.StatusMessage', props);
    return resource.getResponseField('FirewallDomainList.StatusMessage') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.ManagedOwnerName'),
        outputPath: 'FirewallDomainList.ManagedOwnerName',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.ManagedOwnerName', props);
    return resource.getResponseField('FirewallDomainList.ManagedOwnerName') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.CreatorRequestId'),
        outputPath: 'FirewallDomainList.CreatorRequestId',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.CreatorRequestId', props);
    return resource.getResponseField('FirewallDomainList.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.CreationTime'),
        outputPath: 'FirewallDomainList.CreationTime',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.CreationTime', props);
    return resource.getResponseField('FirewallDomainList.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallDomainList',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallDomainList.FirewallDomainList.ModificationTime'),
        outputPath: 'FirewallDomainList.ModificationTime',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallDomainList.FirewallDomainList.ModificationTime', props);
    return resource.getResponseField('FirewallDomainList.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallRuleGroupRequest) {
  }

  public get firewallRuleGroup(): Route53ResolverResponsesFetchFirewallRuleGroupFirewallRuleGroup {
    return new Route53ResolverResponsesFetchFirewallRuleGroupFirewallRuleGroup(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchFirewallRuleGroupFirewallRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallRuleGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.Id'),
        outputPath: 'FirewallRuleGroup.Id',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.Id', props);
    return resource.getResponseField('FirewallRuleGroup.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.Arn'),
        outputPath: 'FirewallRuleGroup.Arn',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.Arn', props);
    return resource.getResponseField('FirewallRuleGroup.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.Name'),
        outputPath: 'FirewallRuleGroup.Name',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.Name', props);
    return resource.getResponseField('FirewallRuleGroup.Name') as unknown as string;
  }

  public get ruleCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.RuleCount'),
        outputPath: 'FirewallRuleGroup.RuleCount',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.RuleCount', props);
    return resource.getResponseField('FirewallRuleGroup.RuleCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.Status'),
        outputPath: 'FirewallRuleGroup.Status',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.Status', props);
    return resource.getResponseField('FirewallRuleGroup.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.StatusMessage'),
        outputPath: 'FirewallRuleGroup.StatusMessage',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroup.StatusMessage') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.OwnerId'),
        outputPath: 'FirewallRuleGroup.OwnerId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.OwnerId', props);
    return resource.getResponseField('FirewallRuleGroup.OwnerId') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.CreatorRequestId'),
        outputPath: 'FirewallRuleGroup.CreatorRequestId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroup.CreatorRequestId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.ShareStatus'),
        outputPath: 'FirewallRuleGroup.ShareStatus',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.ShareStatus', props);
    return resource.getResponseField('FirewallRuleGroup.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.CreationTime'),
        outputPath: 'FirewallRuleGroup.CreationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroup.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroup',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroup.FirewallRuleGroup.ModificationTime'),
        outputPath: 'FirewallRuleGroup.ModificationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroup.FirewallRuleGroup.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroup.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchFirewallRuleGroupAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallRuleGroupAssociationRequest) {
  }

  public get firewallRuleGroupAssociation(): Route53ResolverResponsesFetchFirewallRuleGroupAssociationFirewallRuleGroupAssociation {
    return new Route53ResolverResponsesFetchFirewallRuleGroupAssociationFirewallRuleGroupAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchFirewallRuleGroupAssociationFirewallRuleGroupAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallRuleGroupAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Id'),
        outputPath: 'FirewallRuleGroupAssociation.Id',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Id', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Arn'),
        outputPath: 'FirewallRuleGroupAssociation.Arn',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Arn', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Arn') as unknown as string;
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.FirewallRuleGroupId'),
        outputPath: 'FirewallRuleGroupAssociation.FirewallRuleGroupId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.FirewallRuleGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.VpcId'),
        outputPath: 'FirewallRuleGroupAssociation.VpcId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.VpcId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.VpcId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Name'),
        outputPath: 'FirewallRuleGroupAssociation.Name',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Name', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Priority'),
        outputPath: 'FirewallRuleGroupAssociation.Priority',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Priority', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Priority') as unknown as number;
  }

  public get mutationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.MutationProtection'),
        outputPath: 'FirewallRuleGroupAssociation.MutationProtection',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.MutationProtection', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.MutationProtection') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ManagedOwnerName'),
        outputPath: 'FirewallRuleGroupAssociation.ManagedOwnerName',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ManagedOwnerName', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ManagedOwnerName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Status'),
        outputPath: 'FirewallRuleGroupAssociation.Status',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Status', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.StatusMessage'),
        outputPath: 'FirewallRuleGroupAssociation.StatusMessage',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.StatusMessage') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreatorRequestId'),
        outputPath: 'FirewallRuleGroupAssociation.CreatorRequestId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreationTime'),
        outputPath: 'FirewallRuleGroupAssociation.CreationTime',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ModificationTime'),
        outputPath: 'FirewallRuleGroupAssociation.ModificationTime',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchFirewallRuleGroupPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetFirewallRuleGroupPolicyRequest) {
  }

  public get firewallRuleGroupPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFirewallRuleGroupPolicy',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetFirewallRuleGroupPolicy.FirewallRuleGroupPolicy'),
        outputPath: 'FirewallRuleGroupPolicy',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFirewallRuleGroupPolicy.FirewallRuleGroupPolicy', props);
    return resource.getResponseField('FirewallRuleGroupPolicy') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverDnssecConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverDnssecConfigRequest) {
  }

  public get resolverDnssecConfig(): Route53ResolverResponsesFetchResolverDnssecConfigResolverDnssecConfig {
    return new Route53ResolverResponsesFetchResolverDnssecConfigResolverDnssecConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchResolverDnssecConfigResolverDnssecConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverDnssecConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverDnssecConfig.ResolverDNSSECConfig.Id'),
        outputPath: 'ResolverDNSSECConfig.Id',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverDnssecConfig.ResolverDNSSECConfig.Id', props);
    return resource.getResponseField('ResolverDNSSECConfig.Id') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverDnssecConfig.ResolverDNSSECConfig.OwnerId'),
        outputPath: 'ResolverDNSSECConfig.OwnerId',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverDnssecConfig.ResolverDNSSECConfig.OwnerId', props);
    return resource.getResponseField('ResolverDNSSECConfig.OwnerId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverDnssecConfig.ResolverDNSSECConfig.ResourceId'),
        outputPath: 'ResolverDNSSECConfig.ResourceId',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverDnssecConfig.ResolverDNSSECConfig.ResourceId', props);
    return resource.getResponseField('ResolverDNSSECConfig.ResourceId') as unknown as string;
  }

  public get validationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverDnssecConfig.ResolverDNSSECConfig.ValidationStatus'),
        outputPath: 'ResolverDNSSECConfig.ValidationStatus',
        parameters: {
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverDnssecConfig.ResolverDNSSECConfig.ValidationStatus', props);
    return resource.getResponseField('ResolverDNSSECConfig.ValidationStatus') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverEndpointRequest) {
  }

  public get resolverEndpoint(): Route53ResolverResponsesFetchResolverEndpointResolverEndpoint {
    return new Route53ResolverResponsesFetchResolverEndpointResolverEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchResolverEndpointResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.Id'),
        outputPath: 'ResolverEndpoint.Id',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.Id', props);
    return resource.getResponseField('ResolverEndpoint.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.CreatorRequestId'),
        outputPath: 'ResolverEndpoint.CreatorRequestId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
    return resource.getResponseField('ResolverEndpoint.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.Arn'),
        outputPath: 'ResolverEndpoint.Arn',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.Arn', props);
    return resource.getResponseField('ResolverEndpoint.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.Name'),
        outputPath: 'ResolverEndpoint.Name',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.Name', props);
    return resource.getResponseField('ResolverEndpoint.Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.SecurityGroupIds'),
        outputPath: 'ResolverEndpoint.SecurityGroupIds',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('ResolverEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get direction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.Direction'),
        outputPath: 'ResolverEndpoint.Direction',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.Direction', props);
    return resource.getResponseField('ResolverEndpoint.Direction') as unknown as string;
  }

  public get ipAddressCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.IpAddressCount'),
        outputPath: 'ResolverEndpoint.IpAddressCount',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
    return resource.getResponseField('ResolverEndpoint.IpAddressCount') as unknown as number;
  }

  public get hostVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.HostVPCId'),
        outputPath: 'ResolverEndpoint.HostVPCId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.HostVPCId', props);
    return resource.getResponseField('ResolverEndpoint.HostVPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.Status'),
        outputPath: 'ResolverEndpoint.Status',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.Status', props);
    return resource.getResponseField('ResolverEndpoint.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.StatusMessage'),
        outputPath: 'ResolverEndpoint.StatusMessage',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.StatusMessage', props);
    return resource.getResponseField('ResolverEndpoint.StatusMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.CreationTime'),
        outputPath: 'ResolverEndpoint.CreationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.CreationTime', props);
    return resource.getResponseField('ResolverEndpoint.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverEndpoint.ResolverEndpoint.ModificationTime'),
        outputPath: 'ResolverEndpoint.ModificationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverQueryLogConfigRequest) {
  }

  public get resolverQueryLogConfig(): Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig {
    return new Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverQueryLogConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.Id'),
        outputPath: 'ResolverQueryLogConfig.Id',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Id', props);
    return resource.getResponseField('ResolverQueryLogConfig.Id') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId'),
        outputPath: 'ResolverQueryLogConfig.OwnerId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId', props);
    return resource.getResponseField('ResolverQueryLogConfig.OwnerId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.Status'),
        outputPath: 'ResolverQueryLogConfig.Status',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Status', props);
    return resource.getResponseField('ResolverQueryLogConfig.Status') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus'),
        outputPath: 'ResolverQueryLogConfig.ShareStatus',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus', props);
    return resource.getResponseField('ResolverQueryLogConfig.ShareStatus') as unknown as string;
  }

  public get associationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount'),
        outputPath: 'ResolverQueryLogConfig.AssociationCount',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount', props);
    return resource.getResponseField('ResolverQueryLogConfig.AssociationCount') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.Arn'),
        outputPath: 'ResolverQueryLogConfig.Arn',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Arn', props);
    return resource.getResponseField('ResolverQueryLogConfig.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.Name'),
        outputPath: 'ResolverQueryLogConfig.Name',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Name', props);
    return resource.getResponseField('ResolverQueryLogConfig.Name') as unknown as string;
  }

  public get destinationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn'),
        outputPath: 'ResolverQueryLogConfig.DestinationArn',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn', props);
    return resource.getResponseField('ResolverQueryLogConfig.DestinationArn') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId'),
        outputPath: 'ResolverQueryLogConfig.CreatorRequestId',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime'),
        outputPath: 'ResolverQueryLogConfig.CreationTime',
        parameters: {
          ResolverQueryLogConfigId: this.__input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverQueryLogConfigAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverQueryLogConfigAssociationRequest) {
  }

  public get resolverQueryLogConfigAssociation(): Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation {
    return new Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverQueryLogConfigAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Id'),
        outputPath: 'ResolverQueryLogConfigAssociation.Id',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Id', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Id') as unknown as string;
  }

  public get resolverQueryLogConfigId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId'),
        outputPath: 'ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ResourceId'),
        outputPath: 'ResolverQueryLogConfigAssociation.ResourceId',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ResourceId', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ResourceId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Status'),
        outputPath: 'ResolverQueryLogConfigAssociation.Status',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Status', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Status') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Error'),
        outputPath: 'ResolverQueryLogConfigAssociation.Error',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Error', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.Error') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ErrorMessage'),
        outputPath: 'ResolverQueryLogConfigAssociation.ErrorMessage',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ErrorMessage', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.ErrorMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.CreationTime'),
        outputPath: 'ResolverQueryLogConfigAssociation.CreationTime',
        parameters: {
          ResolverQueryLogConfigAssociationId: this.__input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.CreationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverQueryLogConfigPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverQueryLogConfigPolicyRequest) {
  }

  public get resolverQueryLogConfigPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverQueryLogConfigPolicy',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverQueryLogConfigPolicy.ResolverQueryLogConfigPolicy'),
        outputPath: 'ResolverQueryLogConfigPolicy',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverQueryLogConfigPolicy.ResolverQueryLogConfigPolicy', props);
    return resource.getResponseField('ResolverQueryLogConfigPolicy') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverRuleRequest) {
  }

  public get resolverRule(): Route53ResolverResponsesFetchResolverRuleResolverRule {
    return new Route53ResolverResponsesFetchResolverRuleResolverRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchResolverRuleResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverRuleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.Id'),
        outputPath: 'ResolverRule.Id',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.Id', props);
    return resource.getResponseField('ResolverRule.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.CreatorRequestId'),
        outputPath: 'ResolverRule.CreatorRequestId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.CreatorRequestId', props);
    return resource.getResponseField('ResolverRule.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.Arn'),
        outputPath: 'ResolverRule.Arn',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.Arn', props);
    return resource.getResponseField('ResolverRule.Arn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.DomainName'),
        outputPath: 'ResolverRule.DomainName',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.DomainName', props);
    return resource.getResponseField('ResolverRule.DomainName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.Status'),
        outputPath: 'ResolverRule.Status',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.Status', props);
    return resource.getResponseField('ResolverRule.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.StatusMessage'),
        outputPath: 'ResolverRule.StatusMessage',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.StatusMessage', props);
    return resource.getResponseField('ResolverRule.StatusMessage') as unknown as string;
  }

  public get ruleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.RuleType'),
        outputPath: 'ResolverRule.RuleType',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.RuleType', props);
    return resource.getResponseField('ResolverRule.RuleType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.Name'),
        outputPath: 'ResolverRule.Name',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.Name', props);
    return resource.getResponseField('ResolverRule.Name') as unknown as string;
  }

  public get targetIps(): shapes.Route53ResolverTargetAddress[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.TargetIps'),
        outputPath: 'ResolverRule.TargetIps',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.TargetIps', props);
    return resource.getResponseField('ResolverRule.TargetIps') as unknown as shapes.Route53ResolverTargetAddress[];
  }

  public get resolverEndpointId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.ResolverEndpointId'),
        outputPath: 'ResolverRule.ResolverEndpointId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.ResolverEndpointId', props);
    return resource.getResponseField('ResolverRule.ResolverEndpointId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.OwnerId'),
        outputPath: 'ResolverRule.OwnerId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.OwnerId', props);
    return resource.getResponseField('ResolverRule.OwnerId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.ShareStatus'),
        outputPath: 'ResolverRule.ShareStatus',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.ShareStatus', props);
    return resource.getResponseField('ResolverRule.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.CreationTime'),
        outputPath: 'ResolverRule.CreationTime',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.CreationTime', props);
    return resource.getResponseField('ResolverRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRule.ResolverRule.ModificationTime'),
        outputPath: 'ResolverRule.ModificationTime',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverRuleAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverRuleAssociationRequest) {
  }

  public get resolverRuleAssociation(): Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation {
    return new Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverRuleAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRuleAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRuleAssociation.ResolverRuleAssociation.Id'),
        outputPath: 'ResolverRuleAssociation.Id',
        parameters: {
          ResolverRuleAssociationId: this.__input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRuleAssociation.ResolverRuleAssociation.Id', props);
    return resource.getResponseField('ResolverRuleAssociation.Id') as unknown as string;
  }

  public get resolverRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRuleAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRuleAssociation.ResolverRuleAssociation.ResolverRuleId'),
        outputPath: 'ResolverRuleAssociation.ResolverRuleId',
        parameters: {
          ResolverRuleAssociationId: this.__input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRuleAssociation.ResolverRuleAssociation.ResolverRuleId', props);
    return resource.getResponseField('ResolverRuleAssociation.ResolverRuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRuleAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRuleAssociation.ResolverRuleAssociation.Name'),
        outputPath: 'ResolverRuleAssociation.Name',
        parameters: {
          ResolverRuleAssociationId: this.__input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRuleAssociation.ResolverRuleAssociation.Name', props);
    return resource.getResponseField('ResolverRuleAssociation.Name') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRuleAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRuleAssociation.ResolverRuleAssociation.VPCId'),
        outputPath: 'ResolverRuleAssociation.VPCId',
        parameters: {
          ResolverRuleAssociationId: this.__input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRuleAssociation.ResolverRuleAssociation.VPCId', props);
    return resource.getResponseField('ResolverRuleAssociation.VPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRuleAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRuleAssociation.ResolverRuleAssociation.Status'),
        outputPath: 'ResolverRuleAssociation.Status',
        parameters: {
          ResolverRuleAssociationId: this.__input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRuleAssociation.ResolverRuleAssociation.Status', props);
    return resource.getResponseField('ResolverRuleAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRuleAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRuleAssociation.ResolverRuleAssociation.StatusMessage'),
        outputPath: 'ResolverRuleAssociation.StatusMessage',
        parameters: {
          ResolverRuleAssociationId: this.__input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRuleAssociation.ResolverRuleAssociation.StatusMessage', props);
    return resource.getResponseField('ResolverRuleAssociation.StatusMessage') as unknown as string;
  }

}

export class Route53ResolverResponsesFetchResolverRulePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverGetResolverRulePolicyRequest) {
  }

  public get resolverRulePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResolverRulePolicy',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.GetResolverRulePolicy.ResolverRulePolicy'),
        outputPath: 'ResolverRulePolicy',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResolverRulePolicy.ResolverRulePolicy', props);
    return resource.getResponseField('ResolverRulePolicy') as unknown as string;
  }

}

export class Route53ResolverResponsesImportFirewallDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverImportFirewallDomainsRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ImportFirewallDomains.Id'),
        outputPath: 'Id',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          DomainFileUrl: this.__input.domainFileUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportFirewallDomains.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ImportFirewallDomains.Name'),
        outputPath: 'Name',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          DomainFileUrl: this.__input.domainFileUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportFirewallDomains.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ImportFirewallDomains.Status'),
        outputPath: 'Status',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          DomainFileUrl: this.__input.domainFileUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportFirewallDomains.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ImportFirewallDomains.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          DomainFileUrl: this.__input.domainFileUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportFirewallDomains.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

}

export class Route53ResolverResponsesListFirewallConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListFirewallConfigsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewallConfigs(): shapes.Route53ResolverFirewallConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallConfigs.FirewallConfigs'),
        outputPath: 'FirewallConfigs',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallConfigs.FirewallConfigs', props);
    return resource.getResponseField('FirewallConfigs') as unknown as shapes.Route53ResolverFirewallConfig[];
  }

}

export class Route53ResolverResponsesListFirewallDomainLists {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListFirewallDomainListsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallDomainLists',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallDomainLists.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallDomainLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewallDomainLists(): shapes.Route53ResolverFirewallDomainListMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallDomainLists',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallDomainLists.FirewallDomainLists'),
        outputPath: 'FirewallDomainLists',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallDomainLists.FirewallDomainLists', props);
    return resource.getResponseField('FirewallDomainLists') as unknown as shapes.Route53ResolverFirewallDomainListMetadata[];
  }

}

export class Route53ResolverResponsesListFirewallDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListFirewallDomainsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallDomains.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get domains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallDomains.Domains'),
        outputPath: 'Domains',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallDomains.Domains', props);
    return resource.getResponseField('Domains') as unknown as string[];
  }

}

export class Route53ResolverResponsesListFirewallRuleGroupAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListFirewallRuleGroupAssociationsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallRuleGroupAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallRuleGroupAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Status: this.__input.status,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallRuleGroupAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewallRuleGroupAssociations(): shapes.Route53ResolverFirewallRuleGroupAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallRuleGroupAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallRuleGroupAssociations.FirewallRuleGroupAssociations'),
        outputPath: 'FirewallRuleGroupAssociations',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          VpcId: this.__input.vpcId,
          Priority: this.__input.priority,
          Status: this.__input.status,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallRuleGroupAssociations.FirewallRuleGroupAssociations', props);
    return resource.getResponseField('FirewallRuleGroupAssociations') as unknown as shapes.Route53ResolverFirewallRuleGroupAssociation[];
  }

}

export class Route53ResolverResponsesListFirewallRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListFirewallRuleGroupsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallRuleGroups',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallRuleGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallRuleGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewallRuleGroups(): shapes.Route53ResolverFirewallRuleGroupMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallRuleGroups',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallRuleGroups.FirewallRuleGroups'),
        outputPath: 'FirewallRuleGroups',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallRuleGroups.FirewallRuleGroups', props);
    return resource.getResponseField('FirewallRuleGroups') as unknown as shapes.Route53ResolverFirewallRuleGroupMetadata[];
  }

}

export class Route53ResolverResponsesListFirewallRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListFirewallRulesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallRules',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get firewallRules(): shapes.Route53ResolverFirewallRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFirewallRules',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListFirewallRules.FirewallRules'),
        outputPath: 'FirewallRules',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFirewallRules.FirewallRules', props);
    return resource.getResponseField('FirewallRules') as unknown as shapes.Route53ResolverFirewallRule[];
  }

}

export class Route53ResolverResponsesListResolverDnssecConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverDnssecConfigsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverDnssecConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverDnssecConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverDnssecConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get resolverDnssecConfigs(): shapes.Route53ResolverResolverDnssecConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverDnssecConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverDnssecConfigs.ResolverDnssecConfigs'),
        outputPath: 'ResolverDnssecConfigs',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverDnssecConfigs.ResolverDnssecConfigs', props);
    return resource.getResponseField('ResolverDnssecConfigs') as unknown as shapes.Route53ResolverResolverDnssecConfig[];
  }

}

export class Route53ResolverResponsesListResolverEndpointIpAddresses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverEndpointIpAddressesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverEndpointIpAddresses',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverEndpointIpAddresses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverEndpointIpAddresses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverEndpointIpAddresses',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverEndpointIpAddresses.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverEndpointIpAddresses.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get ipAddresses(): shapes.Route53ResolverIpAddressResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverEndpointIpAddresses',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverEndpointIpAddresses.IpAddresses'),
        outputPath: 'IpAddresses',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverEndpointIpAddresses.IpAddresses', props);
    return resource.getResponseField('IpAddresses') as unknown as shapes.Route53ResolverIpAddressResponse[];
  }

}

export class Route53ResolverResponsesListResolverEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverEndpointsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverEndpoints',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverEndpoints',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverEndpoints.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverEndpoints.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get resolverEndpoints(): shapes.Route53ResolverResolverEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverEndpoints',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverEndpoints.ResolverEndpoints'),
        outputPath: 'ResolverEndpoints',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverEndpoints.ResolverEndpoints', props);
    return resource.getResponseField('ResolverEndpoints') as unknown as shapes.Route53ResolverResolverEndpoint[];
  }

}

export class Route53ResolverResponsesListResolverQueryLogConfigAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverQueryLogConfigAssociationsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigAssociations.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigAssociations.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

  public get totalFilteredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigAssociations.TotalFilteredCount'),
        outputPath: 'TotalFilteredCount',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigAssociations.TotalFilteredCount', props);
    return resource.getResponseField('TotalFilteredCount') as unknown as number;
  }

  public get resolverQueryLogConfigAssociations(): shapes.Route53ResolverResolverQueryLogConfigAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigAssociations.ResolverQueryLogConfigAssociations'),
        outputPath: 'ResolverQueryLogConfigAssociations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigAssociations.ResolverQueryLogConfigAssociations', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociations') as unknown as shapes.Route53ResolverResolverQueryLogConfigAssociation[];
  }

}

export class Route53ResolverResponsesListResolverQueryLogConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverQueryLogConfigsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigs.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigs.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

  public get totalFilteredCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigs.TotalFilteredCount'),
        outputPath: 'TotalFilteredCount',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigs.TotalFilteredCount', props);
    return resource.getResponseField('TotalFilteredCount') as unknown as number;
  }

  public get resolverQueryLogConfigs(): shapes.Route53ResolverResolverQueryLogConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverQueryLogConfigs',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverQueryLogConfigs.ResolverQueryLogConfigs'),
        outputPath: 'ResolverQueryLogConfigs',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverQueryLogConfigs.ResolverQueryLogConfigs', props);
    return resource.getResponseField('ResolverQueryLogConfigs') as unknown as shapes.Route53ResolverResolverQueryLogConfig[];
  }

}

export class Route53ResolverResponsesListResolverRuleAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverRuleAssociationsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverRuleAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverRuleAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverRuleAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverRuleAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverRuleAssociations.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverRuleAssociations.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get resolverRuleAssociations(): shapes.Route53ResolverResolverRuleAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverRuleAssociations',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverRuleAssociations.ResolverRuleAssociations'),
        outputPath: 'ResolverRuleAssociations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverRuleAssociations.ResolverRuleAssociations', props);
    return resource.getResponseField('ResolverRuleAssociations') as unknown as shapes.Route53ResolverResolverRuleAssociation[];
  }

}

export class Route53ResolverResponsesListResolverRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListResolverRulesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverRules',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverRules',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverRules.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverRules.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get resolverRules(): shapes.Route53ResolverResolverRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResolverRules',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListResolverRules.ResolverRules'),
        outputPath: 'ResolverRules',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResolverRules.ResolverRules', props);
    return resource.getResponseField('ResolverRules') as unknown as shapes.Route53ResolverResolverRule[];
  }

}

export class Route53ResolverResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverListTagsForResourceRequest) {
  }

  public get tags(): shapes.Route53ResolverTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Route53ResolverTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53ResolverResponsesPutFirewallRuleGroupPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverPutFirewallRuleGroupPolicyRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putFirewallRuleGroupPolicy',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.PutFirewallRuleGroupPolicy.ReturnValue'),
        outputPath: 'ReturnValue',
        parameters: {
          Arn: this.__input.arn,
          FirewallRuleGroupPolicy: this.__input.firewallRuleGroupPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutFirewallRuleGroupPolicy.ReturnValue', props);
    return resource.getResponseField('ReturnValue') as unknown as boolean;
  }

}

export class Route53ResolverResponsesPutResolverQueryLogConfigPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverPutResolverQueryLogConfigPolicyRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResolverQueryLogConfigPolicy',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.PutResolverQueryLogConfigPolicy.ReturnValue'),
        outputPath: 'ReturnValue',
        parameters: {
          Arn: this.__input.arn,
          ResolverQueryLogConfigPolicy: this.__input.resolverQueryLogConfigPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResolverQueryLogConfigPolicy.ReturnValue', props);
    return resource.getResponseField('ReturnValue') as unknown as boolean;
  }

}

export class Route53ResolverResponsesPutResolverRulePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverPutResolverRulePolicyRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResolverRulePolicy',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.PutResolverRulePolicy.ReturnValue'),
        outputPath: 'ReturnValue',
        parameters: {
          Arn: this.__input.arn,
          ResolverRulePolicy: this.__input.resolverRulePolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResolverRulePolicy.ReturnValue', props);
    return resource.getResponseField('ReturnValue') as unknown as boolean;
  }

}

export class Route53ResolverResponsesUpdateFirewallConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallConfigRequest) {
  }

  public get firewallConfig(): Route53ResolverResponsesUpdateFirewallConfigFirewallConfig {
    return new Route53ResolverResponsesUpdateFirewallConfigFirewallConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesUpdateFirewallConfigFirewallConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallConfig.FirewallConfig.Id'),
        outputPath: 'FirewallConfig.Id',
        parameters: {
          ResourceId: this.__input.resourceId,
          FirewallFailOpen: this.__input.firewallFailOpen,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallConfig.FirewallConfig.Id', props);
    return resource.getResponseField('FirewallConfig.Id') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallConfig.FirewallConfig.ResourceId'),
        outputPath: 'FirewallConfig.ResourceId',
        parameters: {
          ResourceId: this.__input.resourceId,
          FirewallFailOpen: this.__input.firewallFailOpen,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallConfig.FirewallConfig.ResourceId', props);
    return resource.getResponseField('FirewallConfig.ResourceId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallConfig.FirewallConfig.OwnerId'),
        outputPath: 'FirewallConfig.OwnerId',
        parameters: {
          ResourceId: this.__input.resourceId,
          FirewallFailOpen: this.__input.firewallFailOpen,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallConfig.FirewallConfig.OwnerId', props);
    return resource.getResponseField('FirewallConfig.OwnerId') as unknown as string;
  }

  public get firewallFailOpen(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallConfig.FirewallConfig.FirewallFailOpen'),
        outputPath: 'FirewallConfig.FirewallFailOpen',
        parameters: {
          ResourceId: this.__input.resourceId,
          FirewallFailOpen: this.__input.firewallFailOpen,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallConfig.FirewallConfig.FirewallFailOpen', props);
    return resource.getResponseField('FirewallConfig.FirewallFailOpen') as unknown as string;
  }

}

export class Route53ResolverResponsesUpdateFirewallDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallDomainsRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallDomains.Id'),
        outputPath: 'Id',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          Domains: this.__input.domains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDomains.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallDomains.Name'),
        outputPath: 'Name',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          Domains: this.__input.domains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDomains.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallDomains.Status'),
        outputPath: 'Status',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          Domains: this.__input.domains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDomains.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallDomains',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallDomains.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          FirewallDomainListId: this.__input.firewallDomainListId,
          Operation: this.__input.operation,
          Domains: this.__input.domains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallDomains.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

}

export class Route53ResolverResponsesUpdateFirewallRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallRuleRequest) {
  }

  public get firewallRule(): Route53ResolverResponsesUpdateFirewallRuleFirewallRule {
    return new Route53ResolverResponsesUpdateFirewallRuleFirewallRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesUpdateFirewallRuleFirewallRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallRuleRequest) {
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.FirewallRuleGroupId'),
        outputPath: 'FirewallRule.FirewallRuleGroupId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRule.FirewallRuleGroupId') as unknown as string;
  }

  public get firewallDomainListId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.FirewallDomainListId'),
        outputPath: 'FirewallRule.FirewallDomainListId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.FirewallDomainListId', props);
    return resource.getResponseField('FirewallRule.FirewallDomainListId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.Name'),
        outputPath: 'FirewallRule.Name',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.Name', props);
    return resource.getResponseField('FirewallRule.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.Priority'),
        outputPath: 'FirewallRule.Priority',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.Priority', props);
    return resource.getResponseField('FirewallRule.Priority') as unknown as number;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.Action'),
        outputPath: 'FirewallRule.Action',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.Action', props);
    return resource.getResponseField('FirewallRule.Action') as unknown as string;
  }

  public get blockResponse(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.BlockResponse'),
        outputPath: 'FirewallRule.BlockResponse',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.BlockResponse', props);
    return resource.getResponseField('FirewallRule.BlockResponse') as unknown as string;
  }

  public get blockOverrideDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.BlockOverrideDomain'),
        outputPath: 'FirewallRule.BlockOverrideDomain',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.BlockOverrideDomain', props);
    return resource.getResponseField('FirewallRule.BlockOverrideDomain') as unknown as string;
  }

  public get blockOverrideDnsType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.BlockOverrideDnsType'),
        outputPath: 'FirewallRule.BlockOverrideDnsType',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.BlockOverrideDnsType', props);
    return resource.getResponseField('FirewallRule.BlockOverrideDnsType') as unknown as string;
  }

  public get blockOverrideTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.BlockOverrideTtl'),
        outputPath: 'FirewallRule.BlockOverrideTtl',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.BlockOverrideTtl', props);
    return resource.getResponseField('FirewallRule.BlockOverrideTtl') as unknown as number;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.CreatorRequestId'),
        outputPath: 'FirewallRule.CreatorRequestId',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.CreatorRequestId', props);
    return resource.getResponseField('FirewallRule.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.CreationTime'),
        outputPath: 'FirewallRule.CreationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.CreationTime', props);
    return resource.getResponseField('FirewallRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRule.FirewallRule.ModificationTime'),
        outputPath: 'FirewallRule.ModificationTime',
        parameters: {
          FirewallRuleGroupId: this.__input.firewallRuleGroupId,
          FirewallDomainListId: this.__input.firewallDomainListId,
          Priority: this.__input.priority,
          Action: this.__input.action,
          BlockResponse: this.__input.blockResponse,
          BlockOverrideDomain: this.__input.blockOverrideDomain,
          BlockOverrideDnsType: this.__input.blockOverrideDnsType,
          BlockOverrideTtl: this.__input.blockOverrideTtl,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRule.FirewallRule.ModificationTime', props);
    return resource.getResponseField('FirewallRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesUpdateFirewallRuleGroupAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallRuleGroupAssociationRequest) {
  }

  public get firewallRuleGroupAssociation(): Route53ResolverResponsesUpdateFirewallRuleGroupAssociationFirewallRuleGroupAssociation {
    return new Route53ResolverResponsesUpdateFirewallRuleGroupAssociationFirewallRuleGroupAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesUpdateFirewallRuleGroupAssociationFirewallRuleGroupAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateFirewallRuleGroupAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Id'),
        outputPath: 'FirewallRuleGroupAssociation.Id',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Id', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Arn'),
        outputPath: 'FirewallRuleGroupAssociation.Arn',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Arn', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Arn') as unknown as string;
  }

  public get firewallRuleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.FirewallRuleGroupId'),
        outputPath: 'FirewallRuleGroupAssociation.FirewallRuleGroupId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.FirewallRuleGroupId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.FirewallRuleGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.VpcId'),
        outputPath: 'FirewallRuleGroupAssociation.VpcId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.VpcId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.VpcId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Name'),
        outputPath: 'FirewallRuleGroupAssociation.Name',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Name', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Name') as unknown as string;
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Priority'),
        outputPath: 'FirewallRuleGroupAssociation.Priority',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Priority', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Priority') as unknown as number;
  }

  public get mutationProtection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.MutationProtection'),
        outputPath: 'FirewallRuleGroupAssociation.MutationProtection',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.MutationProtection', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.MutationProtection') as unknown as string;
  }

  public get managedOwnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ManagedOwnerName'),
        outputPath: 'FirewallRuleGroupAssociation.ManagedOwnerName',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ManagedOwnerName', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ManagedOwnerName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Status'),
        outputPath: 'FirewallRuleGroupAssociation.Status',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.Status', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.StatusMessage'),
        outputPath: 'FirewallRuleGroupAssociation.StatusMessage',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.StatusMessage', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.StatusMessage') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreatorRequestId'),
        outputPath: 'FirewallRuleGroupAssociation.CreatorRequestId',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreatorRequestId', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreatorRequestId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreationTime'),
        outputPath: 'FirewallRuleGroupAssociation.CreationTime',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.CreationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFirewallRuleGroupAssociation',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ModificationTime'),
        outputPath: 'FirewallRuleGroupAssociation.ModificationTime',
        parameters: {
          FirewallRuleGroupAssociationId: this.__input.firewallRuleGroupAssociationId,
          Priority: this.__input.priority,
          MutationProtection: this.__input.mutationProtection,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFirewallRuleGroupAssociation.FirewallRuleGroupAssociation.ModificationTime', props);
    return resource.getResponseField('FirewallRuleGroupAssociation.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesUpdateResolverDnssecConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateResolverDnssecConfigRequest) {
  }

  public get resolverDnssecConfig(): Route53ResolverResponsesUpdateResolverDnssecConfigResolverDnssecConfig {
    return new Route53ResolverResponsesUpdateResolverDnssecConfigResolverDnssecConfig(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesUpdateResolverDnssecConfigResolverDnssecConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateResolverDnssecConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverDnssecConfig.ResolverDNSSECConfig.Id'),
        outputPath: 'ResolverDNSSECConfig.Id',
        parameters: {
          ResourceId: this.__input.resourceId,
          Validation: this.__input.validation,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverDnssecConfig.ResolverDNSSECConfig.Id', props);
    return resource.getResponseField('ResolverDNSSECConfig.Id') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverDnssecConfig.ResolverDNSSECConfig.OwnerId'),
        outputPath: 'ResolverDNSSECConfig.OwnerId',
        parameters: {
          ResourceId: this.__input.resourceId,
          Validation: this.__input.validation,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverDnssecConfig.ResolverDNSSECConfig.OwnerId', props);
    return resource.getResponseField('ResolverDNSSECConfig.OwnerId') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverDnssecConfig.ResolverDNSSECConfig.ResourceId'),
        outputPath: 'ResolverDNSSECConfig.ResourceId',
        parameters: {
          ResourceId: this.__input.resourceId,
          Validation: this.__input.validation,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverDnssecConfig.ResolverDNSSECConfig.ResourceId', props);
    return resource.getResponseField('ResolverDNSSECConfig.ResourceId') as unknown as string;
  }

  public get validationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverDnssecConfig',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverDnssecConfig.ResolverDNSSECConfig.ValidationStatus'),
        outputPath: 'ResolverDNSSECConfig.ValidationStatus',
        parameters: {
          ResourceId: this.__input.resourceId,
          Validation: this.__input.validation,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverDnssecConfig.ResolverDNSSECConfig.ValidationStatus', props);
    return resource.getResponseField('ResolverDNSSECConfig.ValidationStatus') as unknown as string;
  }

}

export class Route53ResolverResponsesUpdateResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateResolverEndpointRequest) {
  }

  public get resolverEndpoint(): Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint {
    return new Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateResolverEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.Id'),
        outputPath: 'ResolverEndpoint.Id',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.Id', props);
    return resource.getResponseField('ResolverEndpoint.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.CreatorRequestId'),
        outputPath: 'ResolverEndpoint.CreatorRequestId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
    return resource.getResponseField('ResolverEndpoint.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.Arn'),
        outputPath: 'ResolverEndpoint.Arn',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.Arn', props);
    return resource.getResponseField('ResolverEndpoint.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.Name'),
        outputPath: 'ResolverEndpoint.Name',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.Name', props);
    return resource.getResponseField('ResolverEndpoint.Name') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.SecurityGroupIds'),
        outputPath: 'ResolverEndpoint.SecurityGroupIds',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('ResolverEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get direction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.Direction'),
        outputPath: 'ResolverEndpoint.Direction',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.Direction', props);
    return resource.getResponseField('ResolverEndpoint.Direction') as unknown as string;
  }

  public get ipAddressCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.IpAddressCount'),
        outputPath: 'ResolverEndpoint.IpAddressCount',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
    return resource.getResponseField('ResolverEndpoint.IpAddressCount') as unknown as number;
  }

  public get hostVpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.HostVPCId'),
        outputPath: 'ResolverEndpoint.HostVPCId',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.HostVPCId', props);
    return resource.getResponseField('ResolverEndpoint.HostVPCId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.Status'),
        outputPath: 'ResolverEndpoint.Status',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.Status', props);
    return resource.getResponseField('ResolverEndpoint.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.StatusMessage'),
        outputPath: 'ResolverEndpoint.StatusMessage',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.StatusMessage', props);
    return resource.getResponseField('ResolverEndpoint.StatusMessage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.CreationTime'),
        outputPath: 'ResolverEndpoint.CreationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.CreationTime', props);
    return resource.getResponseField('ResolverEndpoint.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverEndpoint',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverEndpoint.ResolverEndpoint.ModificationTime'),
        outputPath: 'ResolverEndpoint.ModificationTime',
        parameters: {
          ResolverEndpointId: this.__input.resolverEndpointId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverResponsesUpdateResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateResolverRuleRequest) {
  }

  public get resolverRule(): Route53ResolverResponsesUpdateResolverRuleResolverRule {
    return new Route53ResolverResponsesUpdateResolverRuleResolverRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53ResolverResponsesUpdateResolverRuleResolverRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53ResolverUpdateResolverRuleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.Id'),
        outputPath: 'ResolverRule.Id',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.Id', props);
    return resource.getResponseField('ResolverRule.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.CreatorRequestId'),
        outputPath: 'ResolverRule.CreatorRequestId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.CreatorRequestId', props);
    return resource.getResponseField('ResolverRule.CreatorRequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.Arn'),
        outputPath: 'ResolverRule.Arn',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.Arn', props);
    return resource.getResponseField('ResolverRule.Arn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.DomainName'),
        outputPath: 'ResolverRule.DomainName',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.DomainName', props);
    return resource.getResponseField('ResolverRule.DomainName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.Status'),
        outputPath: 'ResolverRule.Status',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.Status', props);
    return resource.getResponseField('ResolverRule.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.StatusMessage'),
        outputPath: 'ResolverRule.StatusMessage',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.StatusMessage', props);
    return resource.getResponseField('ResolverRule.StatusMessage') as unknown as string;
  }

  public get ruleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.RuleType'),
        outputPath: 'ResolverRule.RuleType',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.RuleType', props);
    return resource.getResponseField('ResolverRule.RuleType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.Name'),
        outputPath: 'ResolverRule.Name',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.Name', props);
    return resource.getResponseField('ResolverRule.Name') as unknown as string;
  }

  public get targetIps(): shapes.Route53ResolverTargetAddress[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.TargetIps'),
        outputPath: 'ResolverRule.TargetIps',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.TargetIps', props);
    return resource.getResponseField('ResolverRule.TargetIps') as unknown as shapes.Route53ResolverTargetAddress[];
  }

  public get resolverEndpointId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.ResolverEndpointId'),
        outputPath: 'ResolverRule.ResolverEndpointId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.ResolverEndpointId', props);
    return resource.getResponseField('ResolverRule.ResolverEndpointId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.OwnerId'),
        outputPath: 'ResolverRule.OwnerId',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.OwnerId', props);
    return resource.getResponseField('ResolverRule.OwnerId') as unknown as string;
  }

  public get shareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.ShareStatus'),
        outputPath: 'ResolverRule.ShareStatus',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.ShareStatus', props);
    return resource.getResponseField('ResolverRule.ShareStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.CreationTime'),
        outputPath: 'ResolverRule.CreationTime',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.CreationTime', props);
    return resource.getResponseField('ResolverRule.CreationTime') as unknown as string;
  }

  public get modificationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResolverRule',
        service: 'Route53Resolver',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Resolver.UpdateResolverRule.ResolverRule.ModificationTime'),
        outputPath: 'ResolverRule.ModificationTime',
        parameters: {
          ResolverRuleId: this.__input.resolverRuleId,
          Config: {
            Name: this.__input.config.name,
            TargetIps: this.__input.config.targetIps,
            ResolverEndpointId: this.__input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

