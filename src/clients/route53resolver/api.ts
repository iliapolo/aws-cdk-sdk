import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53ResolverClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateResolverEndpointIpAddress(input: shapes.Route53ResolverAssociateResolverEndpointIpAddressRequest): Route53ResolverAssociateResolverEndpointIpAddress {
    return new Route53ResolverAssociateResolverEndpointIpAddress(this, 'AssociateResolverEndpointIpAddress', this.__resources, input);
  }

  public associateResolverQueryLogConfig(input: shapes.Route53ResolverAssociateResolverQueryLogConfigRequest): Route53ResolverAssociateResolverQueryLogConfig {
    return new Route53ResolverAssociateResolverQueryLogConfig(this, 'AssociateResolverQueryLogConfig', this.__resources, input);
  }

  public associateResolverRule(input: shapes.Route53ResolverAssociateResolverRuleRequest): Route53ResolverAssociateResolverRule {
    return new Route53ResolverAssociateResolverRule(this, 'AssociateResolverRule', this.__resources, input);
  }

  public createResolverEndpoint(input: shapes.Route53ResolverCreateResolverEndpointRequest): Route53ResolverCreateResolverEndpoint {
    return new Route53ResolverCreateResolverEndpoint(this, 'CreateResolverEndpoint', this.__resources, input);
  }

  public createResolverQueryLogConfig(input: shapes.Route53ResolverCreateResolverQueryLogConfigRequest): Route53ResolverCreateResolverQueryLogConfig {
    return new Route53ResolverCreateResolverQueryLogConfig(this, 'CreateResolverQueryLogConfig', this.__resources, input);
  }

  public createResolverRule(input: shapes.Route53ResolverCreateResolverRuleRequest): Route53ResolverCreateResolverRule {
    return new Route53ResolverCreateResolverRule(this, 'CreateResolverRule', this.__resources, input);
  }

  public deleteResolverEndpoint(input: shapes.Route53ResolverDeleteResolverEndpointRequest): Route53ResolverDeleteResolverEndpoint {
    return new Route53ResolverDeleteResolverEndpoint(this, 'DeleteResolverEndpoint', this.__resources, input);
  }

  public deleteResolverQueryLogConfig(input: shapes.Route53ResolverDeleteResolverQueryLogConfigRequest): Route53ResolverDeleteResolverQueryLogConfig {
    return new Route53ResolverDeleteResolverQueryLogConfig(this, 'DeleteResolverQueryLogConfig', this.__resources, input);
  }

  public deleteResolverRule(input: shapes.Route53ResolverDeleteResolverRuleRequest): Route53ResolverDeleteResolverRule {
    return new Route53ResolverDeleteResolverRule(this, 'DeleteResolverRule', this.__resources, input);
  }

  public disassociateResolverEndpointIpAddress(input: shapes.Route53ResolverDisassociateResolverEndpointIpAddressRequest): Route53ResolverDisassociateResolverEndpointIpAddress {
    return new Route53ResolverDisassociateResolverEndpointIpAddress(this, 'DisassociateResolverEndpointIpAddress', this.__resources, input);
  }

  public disassociateResolverQueryLogConfig(input: shapes.Route53ResolverDisassociateResolverQueryLogConfigRequest): Route53ResolverDisassociateResolverQueryLogConfig {
    return new Route53ResolverDisassociateResolverQueryLogConfig(this, 'DisassociateResolverQueryLogConfig', this.__resources, input);
  }

  public disassociateResolverRule(input: shapes.Route53ResolverDisassociateResolverRuleRequest): Route53ResolverDisassociateResolverRule {
    return new Route53ResolverDisassociateResolverRule(this, 'DisassociateResolverRule', this.__resources, input);
  }

  public fetchResolverEndpoint(input: shapes.Route53ResolverGetResolverEndpointRequest): Route53ResolverFetchResolverEndpoint {
    return new Route53ResolverFetchResolverEndpoint(this, 'FetchResolverEndpoint', this.__resources, input);
  }

  public fetchResolverQueryLogConfig(input: shapes.Route53ResolverGetResolverQueryLogConfigRequest): Route53ResolverFetchResolverQueryLogConfig {
    return new Route53ResolverFetchResolverQueryLogConfig(this, 'FetchResolverQueryLogConfig', this.__resources, input);
  }

  public fetchResolverQueryLogConfigAssociation(input: shapes.Route53ResolverGetResolverQueryLogConfigAssociationRequest): Route53ResolverFetchResolverQueryLogConfigAssociation {
    return new Route53ResolverFetchResolverQueryLogConfigAssociation(this, 'FetchResolverQueryLogConfigAssociation', this.__resources, input);
  }

  public fetchResolverQueryLogConfigPolicy(input: shapes.Route53ResolverGetResolverQueryLogConfigPolicyRequest): Route53ResolverFetchResolverQueryLogConfigPolicy {
    return new Route53ResolverFetchResolverQueryLogConfigPolicy(this, 'FetchResolverQueryLogConfigPolicy', this.__resources, input);
  }

  public fetchResolverRule(input: shapes.Route53ResolverGetResolverRuleRequest): Route53ResolverFetchResolverRule {
    return new Route53ResolverFetchResolverRule(this, 'FetchResolverRule', this.__resources, input);
  }

  public fetchResolverRuleAssociation(input: shapes.Route53ResolverGetResolverRuleAssociationRequest): Route53ResolverFetchResolverRuleAssociation {
    return new Route53ResolverFetchResolverRuleAssociation(this, 'FetchResolverRuleAssociation', this.__resources, input);
  }

  public fetchResolverRulePolicy(input: shapes.Route53ResolverGetResolverRulePolicyRequest): Route53ResolverFetchResolverRulePolicy {
    return new Route53ResolverFetchResolverRulePolicy(this, 'FetchResolverRulePolicy', this.__resources, input);
  }

  public listResolverEndpointIpAddresses(input: shapes.Route53ResolverListResolverEndpointIpAddressesRequest): Route53ResolverListResolverEndpointIpAddresses {
    return new Route53ResolverListResolverEndpointIpAddresses(this, 'ListResolverEndpointIpAddresses', this.__resources, input);
  }

  public listResolverEndpoints(input: shapes.Route53ResolverListResolverEndpointsRequest): Route53ResolverListResolverEndpoints {
    return new Route53ResolverListResolverEndpoints(this, 'ListResolverEndpoints', this.__resources, input);
  }

  public listResolverQueryLogConfigAssociations(input: shapes.Route53ResolverListResolverQueryLogConfigAssociationsRequest): Route53ResolverListResolverQueryLogConfigAssociations {
    return new Route53ResolverListResolverQueryLogConfigAssociations(this, 'ListResolverQueryLogConfigAssociations', this.__resources, input);
  }

  public listResolverQueryLogConfigs(input: shapes.Route53ResolverListResolverQueryLogConfigsRequest): Route53ResolverListResolverQueryLogConfigs {
    return new Route53ResolverListResolverQueryLogConfigs(this, 'ListResolverQueryLogConfigs', this.__resources, input);
  }

  public listResolverRuleAssociations(input: shapes.Route53ResolverListResolverRuleAssociationsRequest): Route53ResolverListResolverRuleAssociations {
    return new Route53ResolverListResolverRuleAssociations(this, 'ListResolverRuleAssociations', this.__resources, input);
  }

  public listResolverRules(input: shapes.Route53ResolverListResolverRulesRequest): Route53ResolverListResolverRules {
    return new Route53ResolverListResolverRules(this, 'ListResolverRules', this.__resources, input);
  }

  public listTagsForResource(input: shapes.Route53ResolverListTagsForResourceRequest): Route53ResolverListTagsForResource {
    return new Route53ResolverListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putResolverQueryLogConfigPolicy(input: shapes.Route53ResolverPutResolverQueryLogConfigPolicyRequest): Route53ResolverPutResolverQueryLogConfigPolicy {
    return new Route53ResolverPutResolverQueryLogConfigPolicy(this, 'PutResolverQueryLogConfigPolicy', this.__resources, input);
  }

  public putResolverRulePolicy(input: shapes.Route53ResolverPutResolverRulePolicyRequest): Route53ResolverPutResolverRulePolicy {
    return new Route53ResolverPutResolverRulePolicy(this, 'PutResolverRulePolicy', this.__resources, input);
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

  public updateResolverEndpoint(input: shapes.Route53ResolverUpdateResolverEndpointRequest): Route53ResolverUpdateResolverEndpoint {
    return new Route53ResolverUpdateResolverEndpoint(this, 'UpdateResolverEndpoint', this.__resources, input);
  }

  public updateResolverRule(input: shapes.Route53ResolverUpdateResolverRuleRequest): Route53ResolverUpdateResolverRule {
    return new Route53ResolverUpdateResolverRule(this, 'UpdateResolverRule', this.__resources, input);
  }

}

export class Route53ResolverAssociateResolverEndpointIpAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverAssociateResolverEndpointIpAddressRequest) {
    super(scope, id);
  }

  public get resolverEndpoint(): Route53ResolverAssociateResolverEndpointIpAddressResolverEndpoint {
    return new Route53ResolverAssociateResolverEndpointIpAddressResolverEndpoint(this, 'ResolverEndpoint', this.__resources, this.input);
  }

}

export class Route53ResolverAssociateResolverEndpointIpAddressResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverAssociateResolverEndpointIpAddressRequest) {
    super(scope, id);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Id', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.CreatorRequestId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Arn', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Name', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.SecurityGroupIds', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Direction', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.IpAddressCount', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.HostVPCId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.Status', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.StatusMessage', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.CreationTime', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverEndpointIpAddress.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverAssociateResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverAssociateResolverQueryLogConfigRequest) {
    super(scope, id);
  }

  public get resolverQueryLogConfigAssociation(): Route53ResolverAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation {
    return new Route53ResolverAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation(this, 'ResolverQueryLogConfigAssociation', this.__resources, this.input);
  }

}

export class Route53ResolverAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverAssociateResolverQueryLogConfigRequest) {
    super(scope, id);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Id', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResourceId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Status', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Error', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ErrorMessage', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.CreationTime') as unknown as string;
  }

}

export class Route53ResolverAssociateResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverAssociateResolverRuleRequest) {
    super(scope, id);
  }

  public get resolverRuleAssociation(): Route53ResolverAssociateResolverRuleResolverRuleAssociation {
    return new Route53ResolverAssociateResolverRuleResolverRuleAssociation(this, 'ResolverRuleAssociation', this.__resources, this.input);
  }

}

export class Route53ResolverAssociateResolverRuleResolverRuleAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverAssociateResolverRuleRequest) {
    super(scope, id);
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
          ResolverRuleId: this.input.resolverRuleId,
          Name: this.input.name,
          VPCId: this.input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverRule.ResolverRuleAssociation.Id', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Name: this.input.name,
          VPCId: this.input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverRule.ResolverRuleAssociation.ResolverRuleId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Name: this.input.name,
          VPCId: this.input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverRule.ResolverRuleAssociation.Name', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Name: this.input.name,
          VPCId: this.input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverRule.ResolverRuleAssociation.VPCId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Name: this.input.name,
          VPCId: this.input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverRule.ResolverRuleAssociation.Status', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Name: this.input.name,
          VPCId: this.input.vpcId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResolverRule.ResolverRuleAssociation.StatusMessage', props);
    return resource.getResponseField('ResolverRuleAssociation.StatusMessage') as unknown as string;
  }

}

export class Route53ResolverCreateResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverCreateResolverEndpointRequest) {
    super(scope, id);
  }

  public get resolverEndpoint(): Route53ResolverCreateResolverEndpointResolverEndpoint {
    return new Route53ResolverCreateResolverEndpointResolverEndpoint(this, 'ResolverEndpoint', this.__resources, this.input);
  }

}

export class Route53ResolverCreateResolverEndpointResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverCreateResolverEndpointRequest) {
    super(scope, id);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.Id', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.Arn', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.Name', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.Direction', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.HostVPCId', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.Status', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.StatusMessage', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.CreationTime', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          SecurityGroupIds: this.input.securityGroupIds,
          Direction: this.input.direction,
          IpAddresses: this.input.ipAddresses,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverCreateResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverCreateResolverQueryLogConfigRequest) {
    super(scope, id);
  }

  public get resolverQueryLogConfig(): Route53ResolverCreateResolverQueryLogConfigResolverQueryLogConfig {
    return new Route53ResolverCreateResolverQueryLogConfigResolverQueryLogConfig(this, 'ResolverQueryLogConfig', this.__resources, this.input);
  }

}

export class Route53ResolverCreateResolverQueryLogConfigResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverCreateResolverQueryLogConfigRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Id', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Status', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Arn', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.Name', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId', props);
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
          Name: this.input.name,
          DestinationArn: this.input.destinationArn,
          CreatorRequestId: this.input.creatorRequestId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreationTime') as unknown as string;
  }

}

export class Route53ResolverCreateResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverCreateResolverRuleRequest) {
    super(scope, id);
  }

  public get resolverRule(): Route53ResolverCreateResolverRuleResolverRule {
    return new Route53ResolverCreateResolverRuleResolverRule(this, 'ResolverRule', this.__resources, this.input);
  }

}

export class Route53ResolverCreateResolverRuleResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverCreateResolverRuleRequest) {
    super(scope, id);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.Id', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.CreatorRequestId', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.Arn', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.DomainName', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.Status', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.StatusMessage', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.RuleType', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.Name', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.TargetIps', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.ResolverEndpointId', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.OwnerId', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.ShareStatus', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.CreationTime', props);
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
          CreatorRequestId: this.input.creatorRequestId,
          Name: this.input.name,
          RuleType: this.input.ruleType,
          DomainName: this.input.domainName,
          TargetIps: this.input.targetIps,
          ResolverEndpointId: this.input.resolverEndpointId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverDeleteResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDeleteResolverEndpointRequest) {
    super(scope, id);
  }

  public get resolverEndpoint(): Route53ResolverDeleteResolverEndpointResolverEndpoint {
    return new Route53ResolverDeleteResolverEndpointResolverEndpoint(this, 'ResolverEndpoint', this.__resources, this.input);
  }

}

export class Route53ResolverDeleteResolverEndpointResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDeleteResolverEndpointRequest) {
    super(scope, id);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.Id', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.Arn', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.Name', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.Direction', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.HostVPCId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.Status', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.StatusMessage', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.CreationTime', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverDeleteResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDeleteResolverQueryLogConfigRequest) {
    super(scope, id);
  }

  public get resolverQueryLogConfig(): Route53ResolverDeleteResolverQueryLogConfigResolverQueryLogConfig {
    return new Route53ResolverDeleteResolverQueryLogConfigResolverQueryLogConfig(this, 'ResolverQueryLogConfig', this.__resources, this.input);
  }

}

export class Route53ResolverDeleteResolverQueryLogConfigResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDeleteResolverQueryLogConfigRequest) {
    super(scope, id);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Id', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Status', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Arn', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.Name', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreationTime') as unknown as string;
  }

}

export class Route53ResolverDeleteResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDeleteResolverRuleRequest) {
    super(scope, id);
  }

  public get resolverRule(): Route53ResolverDeleteResolverRuleResolverRule {
    return new Route53ResolverDeleteResolverRuleResolverRule(this, 'ResolverRule', this.__resources, this.input);
  }

}

export class Route53ResolverDeleteResolverRuleResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDeleteResolverRuleRequest) {
    super(scope, id);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.Id', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.CreatorRequestId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.Arn', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.DomainName', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.Status', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.StatusMessage', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.RuleType', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.Name', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.TargetIps', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.ResolverEndpointId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.OwnerId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.ShareStatus', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.CreationTime', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverDisassociateResolverEndpointIpAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDisassociateResolverEndpointIpAddressRequest) {
    super(scope, id);
  }

  public get resolverEndpoint(): Route53ResolverDisassociateResolverEndpointIpAddressResolverEndpoint {
    return new Route53ResolverDisassociateResolverEndpointIpAddressResolverEndpoint(this, 'ResolverEndpoint', this.__resources, this.input);
  }

}

export class Route53ResolverDisassociateResolverEndpointIpAddressResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDisassociateResolverEndpointIpAddressRequest) {
    super(scope, id);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Id', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.CreatorRequestId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Arn', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Name', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.SecurityGroupIds', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Direction', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.IpAddressCount', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.HostVPCId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.Status', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.StatusMessage', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.CreationTime', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          IpAddress: {
            IpId: this.input.ipAddress.ipId,
            SubnetId: this.input.ipAddress.subnetId,
            Ip: this.input.ipAddress.ip,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverEndpointIpAddress.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverDisassociateResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDisassociateResolverQueryLogConfigRequest) {
    super(scope, id);
  }

  public get resolverQueryLogConfigAssociation(): Route53ResolverDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation {
    return new Route53ResolverDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation(this, 'ResolverQueryLogConfigAssociation', this.__resources, this.input);
  }

}

export class Route53ResolverDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDisassociateResolverQueryLogConfigRequest) {
    super(scope, id);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Id', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ResourceId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Status', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.Error', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.ErrorMessage', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverQueryLogConfig.ResolverQueryLogConfigAssociation.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.CreationTime') as unknown as string;
  }

}

export class Route53ResolverDisassociateResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDisassociateResolverRuleRequest) {
    super(scope, id);
  }

  public get resolverRuleAssociation(): Route53ResolverDisassociateResolverRuleResolverRuleAssociation {
    return new Route53ResolverDisassociateResolverRuleResolverRuleAssociation(this, 'ResolverRuleAssociation', this.__resources, this.input);
  }

}

export class Route53ResolverDisassociateResolverRuleResolverRuleAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverDisassociateResolverRuleRequest) {
    super(scope, id);
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
          VPCId: this.input.vpcId,
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverRule.ResolverRuleAssociation.Id', props);
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
          VPCId: this.input.vpcId,
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverRule.ResolverRuleAssociation.ResolverRuleId', props);
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
          VPCId: this.input.vpcId,
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverRule.ResolverRuleAssociation.Name', props);
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
          VPCId: this.input.vpcId,
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverRule.ResolverRuleAssociation.VPCId', props);
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
          VPCId: this.input.vpcId,
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverRule.ResolverRuleAssociation.Status', props);
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
          VPCId: this.input.vpcId,
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResolverRule.ResolverRuleAssociation.StatusMessage', props);
    return resource.getResponseField('ResolverRuleAssociation.StatusMessage') as unknown as string;
  }

}

export class Route53ResolverFetchResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverEndpointRequest) {
    super(scope, id);
  }

  public get resolverEndpoint(): Route53ResolverFetchResolverEndpointResolverEndpoint {
    return new Route53ResolverFetchResolverEndpointResolverEndpoint(this, 'ResolverEndpoint', this.__resources, this.input);
  }

}

export class Route53ResolverFetchResolverEndpointResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverEndpointRequest) {
    super(scope, id);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.Id', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.Arn', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.Name', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.Direction', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.HostVPCId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.Status', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.StatusMessage', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.CreationTime', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverFetchResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverQueryLogConfigRequest) {
    super(scope, id);
  }

  public get resolverQueryLogConfig(): Route53ResolverFetchResolverQueryLogConfigResolverQueryLogConfig {
    return new Route53ResolverFetchResolverQueryLogConfigResolverQueryLogConfig(this, 'ResolverQueryLogConfig', this.__resources, this.input);
  }

}

export class Route53ResolverFetchResolverQueryLogConfigResolverQueryLogConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverQueryLogConfigRequest) {
    super(scope, id);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Id', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.OwnerId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Status', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.ShareStatus', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.AssociationCount', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Arn', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.Name', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.DestinationArn', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.CreatorRequestId', props);
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
          ResolverQueryLogConfigId: this.input.resolverQueryLogConfigId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfig.ResolverQueryLogConfig.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfig.CreationTime') as unknown as string;
  }

}

export class Route53ResolverFetchResolverQueryLogConfigAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverQueryLogConfigAssociationRequest) {
    super(scope, id);
  }

  public get resolverQueryLogConfigAssociation(): Route53ResolverFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation {
    return new Route53ResolverFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation(this, 'ResolverQueryLogConfigAssociation', this.__resources, this.input);
  }

}

export class Route53ResolverFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverQueryLogConfigAssociationRequest) {
    super(scope, id);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Id', props);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ResolverQueryLogConfigId', props);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ResourceId', props);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Status', props);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.Error', props);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.ErrorMessage', props);
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
          ResolverQueryLogConfigAssociationId: this.input.resolverQueryLogConfigAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigAssociation.ResolverQueryLogConfigAssociation.CreationTime', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociation.CreationTime') as unknown as string;
  }

}

export class Route53ResolverFetchResolverQueryLogConfigPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverQueryLogConfigPolicyRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverQueryLogConfigPolicy.ResolverQueryLogConfigPolicy', props);
    return resource.getResponseField('ResolverQueryLogConfigPolicy') as unknown as string;
  }

}

export class Route53ResolverFetchResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverRuleRequest) {
    super(scope, id);
  }

  public get resolverRule(): Route53ResolverFetchResolverRuleResolverRule {
    return new Route53ResolverFetchResolverRuleResolverRule(this, 'ResolverRule', this.__resources, this.input);
  }

}

export class Route53ResolverFetchResolverRuleResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverRuleRequest) {
    super(scope, id);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.Id', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.CreatorRequestId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.Arn', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.DomainName', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.Status', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.StatusMessage', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.RuleType', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.Name', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.TargetIps', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.ResolverEndpointId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.OwnerId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.ShareStatus', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.CreationTime', props);
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
          ResolverRuleId: this.input.resolverRuleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverFetchResolverRuleAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverRuleAssociationRequest) {
    super(scope, id);
  }

  public get resolverRuleAssociation(): Route53ResolverFetchResolverRuleAssociationResolverRuleAssociation {
    return new Route53ResolverFetchResolverRuleAssociationResolverRuleAssociation(this, 'ResolverRuleAssociation', this.__resources, this.input);
  }

}

export class Route53ResolverFetchResolverRuleAssociationResolverRuleAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverRuleAssociationRequest) {
    super(scope, id);
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
          ResolverRuleAssociationId: this.input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRuleAssociation.ResolverRuleAssociation.Id', props);
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
          ResolverRuleAssociationId: this.input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRuleAssociation.ResolverRuleAssociation.ResolverRuleId', props);
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
          ResolverRuleAssociationId: this.input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRuleAssociation.ResolverRuleAssociation.Name', props);
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
          ResolverRuleAssociationId: this.input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRuleAssociation.ResolverRuleAssociation.VPCId', props);
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
          ResolverRuleAssociationId: this.input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRuleAssociation.ResolverRuleAssociation.Status', props);
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
          ResolverRuleAssociationId: this.input.resolverRuleAssociationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRuleAssociation.ResolverRuleAssociation.StatusMessage', props);
    return resource.getResponseField('ResolverRuleAssociation.StatusMessage') as unknown as string;
  }

}

export class Route53ResolverFetchResolverRulePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverGetResolverRulePolicyRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResolverRulePolicy.ResolverRulePolicy', props);
    return resource.getResponseField('ResolverRulePolicy') as unknown as string;
  }

}

export class Route53ResolverListResolverEndpointIpAddresses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListResolverEndpointIpAddressesRequest) {
    super(scope, id);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverEndpointIpAddresses.NextToken', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverEndpointIpAddresses.MaxResults', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverEndpointIpAddresses.IpAddresses', props);
    return resource.getResponseField('IpAddresses') as unknown as shapes.Route53ResolverIpAddressResponse[];
  }

}

export class Route53ResolverListResolverEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListResolverEndpointsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverEndpoints.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverEndpoints.MaxResults', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverEndpoints.ResolverEndpoints', props);
    return resource.getResponseField('ResolverEndpoints') as unknown as shapes.Route53ResolverResolverEndpoint[];
  }

}

export class Route53ResolverListResolverQueryLogConfigAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListResolverQueryLogConfigAssociationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigAssociations.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigAssociations.TotalCount', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigAssociations.TotalFilteredCount', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigAssociations.ResolverQueryLogConfigAssociations', props);
    return resource.getResponseField('ResolverQueryLogConfigAssociations') as unknown as shapes.Route53ResolverResolverQueryLogConfigAssociation[];
  }

}

export class Route53ResolverListResolverQueryLogConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListResolverQueryLogConfigsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigs.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigs.TotalCount', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigs.TotalFilteredCount', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverQueryLogConfigs.ResolverQueryLogConfigs', props);
    return resource.getResponseField('ResolverQueryLogConfigs') as unknown as shapes.Route53ResolverResolverQueryLogConfig[];
  }

}

export class Route53ResolverListResolverRuleAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListResolverRuleAssociationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverRuleAssociations.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverRuleAssociations.MaxResults', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverRuleAssociations.ResolverRuleAssociations', props);
    return resource.getResponseField('ResolverRuleAssociations') as unknown as shapes.Route53ResolverResolverRuleAssociation[];
  }

}

export class Route53ResolverListResolverRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListResolverRulesRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverRules.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverRules.MaxResults', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResolverRules.ResolverRules', props);
    return resource.getResponseField('ResolverRules') as unknown as shapes.Route53ResolverResolverRule[];
  }

}

export class Route53ResolverListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53ResolverPutResolverQueryLogConfigPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverPutResolverQueryLogConfigPolicyRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          ResolverQueryLogConfigPolicy: this.input.resolverQueryLogConfigPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResolverQueryLogConfigPolicy.ReturnValue', props);
    return resource.getResponseField('ReturnValue') as unknown as boolean;
  }

}

export class Route53ResolverPutResolverRulePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverPutResolverRulePolicyRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          ResolverRulePolicy: this.input.resolverRulePolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResolverRulePolicy.ReturnValue', props);
    return resource.getResponseField('ReturnValue') as unknown as boolean;
  }

}

export class Route53ResolverUpdateResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverUpdateResolverEndpointRequest) {
    super(scope, id);
  }

  public get resolverEndpoint(): Route53ResolverUpdateResolverEndpointResolverEndpoint {
    return new Route53ResolverUpdateResolverEndpointResolverEndpoint(this, 'ResolverEndpoint', this.__resources, this.input);
  }

}

export class Route53ResolverUpdateResolverEndpointResolverEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverUpdateResolverEndpointRequest) {
    super(scope, id);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.Id', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.CreatorRequestId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.Arn', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.Name', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.SecurityGroupIds', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.Direction', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.IpAddressCount', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.HostVPCId', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.Status', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.StatusMessage', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.CreationTime', props);
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
          ResolverEndpointId: this.input.resolverEndpointId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverEndpoint.ResolverEndpoint.ModificationTime', props);
    return resource.getResponseField('ResolverEndpoint.ModificationTime') as unknown as string;
  }

}

export class Route53ResolverUpdateResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverUpdateResolverRuleRequest) {
    super(scope, id);
  }

  public get resolverRule(): Route53ResolverUpdateResolverRuleResolverRule {
    return new Route53ResolverUpdateResolverRuleResolverRule(this, 'ResolverRule', this.__resources, this.input);
  }

}

export class Route53ResolverUpdateResolverRuleResolverRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53ResolverUpdateResolverRuleRequest) {
    super(scope, id);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.Id', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.CreatorRequestId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.Arn', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.DomainName', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.Status', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.StatusMessage', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.RuleType', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.Name', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.TargetIps', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.ResolverEndpointId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.OwnerId', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.ShareStatus', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.CreationTime', props);
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
          ResolverRuleId: this.input.resolverRuleId,
          Config: {
            Name: this.input.config.name,
            TargetIps: this.input.config.targetIps,
            ResolverEndpointId: this.input.config.resolverEndpointId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateResolverRule.ResolverRule.ModificationTime', props);
    return resource.getResponseField('ResolverRule.ModificationTime') as unknown as string;
  }

}

