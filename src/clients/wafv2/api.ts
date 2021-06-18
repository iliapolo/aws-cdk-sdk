import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Wafv2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateWebAcl(input: shapes.Wafv2AssociateWebAclRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.AssociateWebACL'),
        parameters: {
          WebACLArn: input.webAclArn,
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateWebACL', props);
  }

  public checkCapacity(input: shapes.Wafv2CheckCapacityRequest): WAFV2CheckCapacity {
    return new WAFV2CheckCapacity(this, 'CheckCapacity', this.__resources, input);
  }

  public createIpSet(input: shapes.Wafv2CreateIpSetRequest): WAFV2CreateIpSet {
    return new WAFV2CreateIpSet(this, 'CreateIpSet', this.__resources, input);
  }

  public createRegexPatternSet(input: shapes.Wafv2CreateRegexPatternSetRequest): WAFV2CreateRegexPatternSet {
    return new WAFV2CreateRegexPatternSet(this, 'CreateRegexPatternSet', this.__resources, input);
  }

  public createRuleGroup(input: shapes.Wafv2CreateRuleGroupRequest): WAFV2CreateRuleGroup {
    return new WAFV2CreateRuleGroup(this, 'CreateRuleGroup', this.__resources, input);
  }

  public createWebAcl(input: shapes.Wafv2CreateWebAclRequest): WAFV2CreateWebAcl {
    return new WAFV2CreateWebAcl(this, 'CreateWebAcl', this.__resources, input);
  }

  public deleteFirewallManagerRuleGroups(input: shapes.Wafv2DeleteFirewallManagerRuleGroupsRequest): WAFV2DeleteFirewallManagerRuleGroups {
    return new WAFV2DeleteFirewallManagerRuleGroups(this, 'DeleteFirewallManagerRuleGroups', this.__resources, input);
  }

  public deleteIpSet(input: shapes.Wafv2DeleteIpSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeleteIPSet'),
        parameters: {
          Name: input.name,
          Scope: input.scope,
          Id: input.id,
          LockToken: input.lockToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIPSet', props);
  }

  public deleteLoggingConfiguration(input: shapes.Wafv2DeleteLoggingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeleteLoggingConfiguration'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLoggingConfiguration', props);
  }

  public deletePermissionPolicy(input: shapes.Wafv2DeletePermissionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePermissionPolicy',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeletePermissionPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePermissionPolicy', props);
  }

  public deleteRegexPatternSet(input: shapes.Wafv2DeleteRegexPatternSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeleteRegexPatternSet'),
        parameters: {
          Name: input.name,
          Scope: input.scope,
          Id: input.id,
          LockToken: input.lockToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRegexPatternSet', props);
  }

  public deleteRuleGroup(input: shapes.Wafv2DeleteRuleGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeleteRuleGroup'),
        parameters: {
          Name: input.name,
          Scope: input.scope,
          Id: input.id,
          LockToken: input.lockToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRuleGroup', props);
  }

  public deleteWebAcl(input: shapes.Wafv2DeleteWebAclRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeleteWebACL'),
        parameters: {
          Name: input.name,
          Scope: input.scope,
          Id: input.id,
          LockToken: input.lockToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWebACL', props);
  }

  public describeManagedRuleGroup(input: shapes.Wafv2DescribeManagedRuleGroupRequest): WAFV2DescribeManagedRuleGroup {
    return new WAFV2DescribeManagedRuleGroup(this, 'DescribeManagedRuleGroup', this.__resources, input);
  }

  public disassociateWebAcl(input: shapes.Wafv2DisassociateWebAclRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DisassociateWebACL'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWebACL', props);
  }

  public fetchIpSet(input: shapes.Wafv2GetIpSetRequest): WAFV2FetchIpSet {
    return new WAFV2FetchIpSet(this, 'FetchIpSet', this.__resources, input);
  }

  public fetchLoggingConfiguration(input: shapes.Wafv2GetLoggingConfigurationRequest): WAFV2FetchLoggingConfiguration {
    return new WAFV2FetchLoggingConfiguration(this, 'FetchLoggingConfiguration', this.__resources, input);
  }

  public fetchPermissionPolicy(input: shapes.Wafv2GetPermissionPolicyRequest): WAFV2FetchPermissionPolicy {
    return new WAFV2FetchPermissionPolicy(this, 'FetchPermissionPolicy', this.__resources, input);
  }

  public fetchRateBasedStatementManagedKeys(input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest): WAFV2FetchRateBasedStatementManagedKeys {
    return new WAFV2FetchRateBasedStatementManagedKeys(this, 'FetchRateBasedStatementManagedKeys', this.__resources, input);
  }

  public fetchRegexPatternSet(input: shapes.Wafv2GetRegexPatternSetRequest): WAFV2FetchRegexPatternSet {
    return new WAFV2FetchRegexPatternSet(this, 'FetchRegexPatternSet', this.__resources, input);
  }

  public fetchRuleGroup(input: shapes.Wafv2GetRuleGroupRequest): WAFV2FetchRuleGroup {
    return new WAFV2FetchRuleGroup(this, 'FetchRuleGroup', this.__resources, input);
  }

  public fetchSampledRequests(input: shapes.Wafv2GetSampledRequestsRequest): WAFV2FetchSampledRequests {
    return new WAFV2FetchSampledRequests(this, 'FetchSampledRequests', this.__resources, input);
  }

  public fetchWebAcl(input: shapes.Wafv2GetWebAclRequest): WAFV2FetchWebAcl {
    return new WAFV2FetchWebAcl(this, 'FetchWebAcl', this.__resources, input);
  }

  public fetchWebAclForResource(input: shapes.Wafv2GetWebAclForResourceRequest): WAFV2FetchWebAclForResource {
    return new WAFV2FetchWebAclForResource(this, 'FetchWebAclForResource', this.__resources, input);
  }

  public listAvailableManagedRuleGroups(input: shapes.Wafv2ListAvailableManagedRuleGroupsRequest): WAFV2ListAvailableManagedRuleGroups {
    return new WAFV2ListAvailableManagedRuleGroups(this, 'ListAvailableManagedRuleGroups', this.__resources, input);
  }

  public listIpSets(input: shapes.Wafv2ListIpSetsRequest): WAFV2ListIpSets {
    return new WAFV2ListIpSets(this, 'ListIpSets', this.__resources, input);
  }

  public listLoggingConfigurations(input: shapes.Wafv2ListLoggingConfigurationsRequest): WAFV2ListLoggingConfigurations {
    return new WAFV2ListLoggingConfigurations(this, 'ListLoggingConfigurations', this.__resources, input);
  }

  public listRegexPatternSets(input: shapes.Wafv2ListRegexPatternSetsRequest): WAFV2ListRegexPatternSets {
    return new WAFV2ListRegexPatternSets(this, 'ListRegexPatternSets', this.__resources, input);
  }

  public listResourcesForWebAcl(input: shapes.Wafv2ListResourcesForWebAclRequest): WAFV2ListResourcesForWebAcl {
    return new WAFV2ListResourcesForWebAcl(this, 'ListResourcesForWebAcl', this.__resources, input);
  }

  public listRuleGroups(input: shapes.Wafv2ListRuleGroupsRequest): WAFV2ListRuleGroups {
    return new WAFV2ListRuleGroups(this, 'ListRuleGroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.Wafv2ListTagsForResourceRequest): WAFV2ListTagsForResource {
    return new WAFV2ListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWebAcLs(input: shapes.Wafv2ListWebAcLsRequest): WAFV2ListWebAcLs {
    return new WAFV2ListWebAcLs(this, 'ListWebAcLs', this.__resources, input);
  }

  public putLoggingConfiguration(input: shapes.Wafv2PutLoggingConfigurationRequest): WAFV2PutLoggingConfiguration {
    return new WAFV2PutLoggingConfiguration(this, 'PutLoggingConfiguration', this.__resources, input);
  }

  public putPermissionPolicy(input: shapes.Wafv2PutPermissionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPermissionPolicy',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.PutPermissionPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPermissionPolicy', props);
  }

  public tagResource(input: shapes.Wafv2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.Wafv2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateIpSet(input: shapes.Wafv2UpdateIpSetRequest): WAFV2UpdateIpSet {
    return new WAFV2UpdateIpSet(this, 'UpdateIpSet', this.__resources, input);
  }

  public updateRegexPatternSet(input: shapes.Wafv2UpdateRegexPatternSetRequest): WAFV2UpdateRegexPatternSet {
    return new WAFV2UpdateRegexPatternSet(this, 'UpdateRegexPatternSet', this.__resources, input);
  }

  public updateRuleGroup(input: shapes.Wafv2UpdateRuleGroupRequest): WAFV2UpdateRuleGroup {
    return new WAFV2UpdateRuleGroup(this, 'UpdateRuleGroup', this.__resources, input);
  }

  public updateWebAcl(input: shapes.Wafv2UpdateWebAclRequest): WAFV2UpdateWebAcl {
    return new WAFV2UpdateWebAcl(this, 'UpdateWebAcl', this.__resources, input);
  }

}

export class WAFV2CheckCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CheckCapacityRequest) {
    super(scope, id);
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkCapacity',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CheckCapacity.Capacity'),
        outputPath: 'Capacity',
        parameters: {
          Scope: this.__input.scope,
          Rules: this.__input.rules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckCapacity.Capacity', props);
    return resource.getResponseField('Capacity') as unknown as number;
  }

}

export class WAFV2CreateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateIpSetRequest) {
    super(scope, id);
  }

  public get summary(): WAFV2CreateIpSetSummary {
    return new WAFV2CreateIpSetSummary(this, 'Summary', this.__resources, this.__input);
  }

}

export class WAFV2CreateIpSetSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateIpSetRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateIPSet.Summary.Name'),
        outputPath: 'Summary.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          IPAddressVersion: this.__input.ipAddressVersion,
          Addresses: this.__input.addresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.Summary.Name', props);
    return resource.getResponseField('Summary.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateIPSet.Summary.Id'),
        outputPath: 'Summary.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          IPAddressVersion: this.__input.ipAddressVersion,
          Addresses: this.__input.addresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.Summary.Id', props);
    return resource.getResponseField('Summary.Id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateIPSet.Summary.Description'),
        outputPath: 'Summary.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          IPAddressVersion: this.__input.ipAddressVersion,
          Addresses: this.__input.addresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.Summary.Description', props);
    return resource.getResponseField('Summary.Description') as unknown as string;
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateIPSet.Summary.LockToken'),
        outputPath: 'Summary.LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          IPAddressVersion: this.__input.ipAddressVersion,
          Addresses: this.__input.addresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.Summary.LockToken', props);
    return resource.getResponseField('Summary.LockToken') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateIPSet.Summary.ARN'),
        outputPath: 'Summary.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          IPAddressVersion: this.__input.ipAddressVersion,
          Addresses: this.__input.addresses,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2CreateRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRegexPatternSetRequest) {
    super(scope, id);
  }

  public get summary(): WAFV2CreateRegexPatternSetSummary {
    return new WAFV2CreateRegexPatternSetSummary(this, 'Summary', this.__resources, this.__input);
  }

}

export class WAFV2CreateRegexPatternSetSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRegexPatternSetRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRegexPatternSet.Summary.Name'),
        outputPath: 'Summary.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          RegularExpressionList: this.__input.regularExpressionList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.Summary.Name', props);
    return resource.getResponseField('Summary.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRegexPatternSet.Summary.Id'),
        outputPath: 'Summary.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          RegularExpressionList: this.__input.regularExpressionList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.Summary.Id', props);
    return resource.getResponseField('Summary.Id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRegexPatternSet.Summary.Description'),
        outputPath: 'Summary.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          RegularExpressionList: this.__input.regularExpressionList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.Summary.Description', props);
    return resource.getResponseField('Summary.Description') as unknown as string;
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRegexPatternSet.Summary.LockToken'),
        outputPath: 'Summary.LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          RegularExpressionList: this.__input.regularExpressionList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.Summary.LockToken', props);
    return resource.getResponseField('Summary.LockToken') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRegexPatternSet.Summary.ARN'),
        outputPath: 'Summary.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Description: this.__input.description,
          RegularExpressionList: this.__input.regularExpressionList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2CreateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRuleGroupRequest) {
    super(scope, id);
  }

  public get summary(): WAFV2CreateRuleGroupSummary {
    return new WAFV2CreateRuleGroupSummary(this, 'Summary', this.__resources, this.__input);
  }

}

export class WAFV2CreateRuleGroupSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRuleGroupRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRuleGroup.Summary.Name'),
        outputPath: 'Summary.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Capacity: this.__input.capacity,
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.Summary.Name', props);
    return resource.getResponseField('Summary.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRuleGroup.Summary.Id'),
        outputPath: 'Summary.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Capacity: this.__input.capacity,
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.Summary.Id', props);
    return resource.getResponseField('Summary.Id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRuleGroup.Summary.Description'),
        outputPath: 'Summary.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Capacity: this.__input.capacity,
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.Summary.Description', props);
    return resource.getResponseField('Summary.Description') as unknown as string;
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRuleGroup.Summary.LockToken'),
        outputPath: 'Summary.LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Capacity: this.__input.capacity,
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.Summary.LockToken', props);
    return resource.getResponseField('Summary.LockToken') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateRuleGroup.Summary.ARN'),
        outputPath: 'Summary.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Capacity: this.__input.capacity,
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2CreateWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateWebAclRequest) {
    super(scope, id);
  }

  public get summary(): WAFV2CreateWebAclSummary {
    return new WAFV2CreateWebAclSummary(this, 'Summary', this.__resources, this.__input);
  }

}

export class WAFV2CreateWebAclSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateWebAclRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateWebACL.Summary.Name'),
        outputPath: 'Summary.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          DefaultAction: {
            Block: {
            },
            Allow: {
            },
          },
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.Summary.Name', props);
    return resource.getResponseField('Summary.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateWebACL.Summary.Id'),
        outputPath: 'Summary.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          DefaultAction: {
            Block: {
            },
            Allow: {
            },
          },
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.Summary.Id', props);
    return resource.getResponseField('Summary.Id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateWebACL.Summary.Description'),
        outputPath: 'Summary.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          DefaultAction: {
            Block: {
            },
            Allow: {
            },
          },
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.Summary.Description', props);
    return resource.getResponseField('Summary.Description') as unknown as string;
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateWebACL.Summary.LockToken'),
        outputPath: 'Summary.LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          DefaultAction: {
            Block: {
            },
            Allow: {
            },
          },
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.Summary.LockToken', props);
    return resource.getResponseField('Summary.LockToken') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.CreateWebACL.Summary.ARN'),
        outputPath: 'Summary.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          DefaultAction: {
            Block: {
            },
            Allow: {
            },
          },
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2DeleteFirewallManagerRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2DeleteFirewallManagerRuleGroupsRequest) {
    super(scope, id);
  }

  public get nextWebAclLockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFirewallManagerRuleGroups',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DeleteFirewallManagerRuleGroups.NextWebACLLockToken'),
        outputPath: 'NextWebACLLockToken',
        parameters: {
          WebACLArn: this.__input.webAclArn,
          WebACLLockToken: this.__input.webAclLockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFirewallManagerRuleGroups.NextWebACLLockToken', props);
    return resource.getResponseField('NextWebACLLockToken') as unknown as string;
  }

}

export class WAFV2DescribeManagedRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2DescribeManagedRuleGroupRequest) {
    super(scope, id);
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DescribeManagedRuleGroup.Capacity'),
        outputPath: 'Capacity',
        parameters: {
          VendorName: this.__input.vendorName,
          Name: this.__input.name,
          Scope: this.__input.scope,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeManagedRuleGroup.Capacity', props);
    return resource.getResponseField('Capacity') as unknown as number;
  }

  public get rules(): shapes.Wafv2RuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.DescribeManagedRuleGroup.Rules'),
        outputPath: 'Rules',
        parameters: {
          VendorName: this.__input.vendorName,
          Name: this.__input.name,
          Scope: this.__input.scope,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeManagedRuleGroup.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.Wafv2RuleSummary[];
  }

}

export class WAFV2FetchIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetIpSetRequest) {
    super(scope, id);
  }

  public get ipSet(): WAFV2FetchIpSetIpSet {
    return new WAFV2FetchIpSetIpSet(this, 'IpSet', this.__resources, this.__input);
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.LockToken'),
        outputPath: 'LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2FetchIpSetIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetIpSetRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.IPSet.Name'),
        outputPath: 'IPSet.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.Name', props);
    return resource.getResponseField('IPSet.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.IPSet.Id'),
        outputPath: 'IPSet.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.Id', props);
    return resource.getResponseField('IPSet.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.IPSet.ARN'),
        outputPath: 'IPSet.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.ARN', props);
    return resource.getResponseField('IPSet.ARN') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.IPSet.Description'),
        outputPath: 'IPSet.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.Description', props);
    return resource.getResponseField('IPSet.Description') as unknown as string;
  }

  public get ipAddressVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.IPSet.IPAddressVersion'),
        outputPath: 'IPSet.IPAddressVersion',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.IPAddressVersion', props);
    return resource.getResponseField('IPSet.IPAddressVersion') as unknown as string;
  }

  public get addresses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetIPSet.IPSet.Addresses'),
        outputPath: 'IPSet.Addresses',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.Addresses', props);
    return resource.getResponseField('IPSet.Addresses') as unknown as string[];
  }

}

export class WAFV2FetchLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): WAFV2FetchLoggingConfigurationLoggingConfiguration {
    return new WAFV2FetchLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.__input);
  }

}

export class WAFV2FetchLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetLoggingConfiguration.LoggingConfiguration.ResourceArn'),
        outputPath: 'LoggingConfiguration.ResourceArn',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.ResourceArn', props);
    return resource.getResponseField('LoggingConfiguration.ResourceArn') as unknown as string;
  }

  public get logDestinationConfigs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as string[];
  }

  public get redactedFields(): shapes.Wafv2FieldToMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetLoggingConfiguration.LoggingConfiguration.RedactedFields'),
        outputPath: 'LoggingConfiguration.RedactedFields',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.Wafv2FieldToMatch[];
  }

  public get managedByFirewallManager(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetLoggingConfiguration.LoggingConfiguration.ManagedByFirewallManager'),
        outputPath: 'LoggingConfiguration.ManagedByFirewallManager',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.ManagedByFirewallManager', props);
    return resource.getResponseField('LoggingConfiguration.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2FetchPermissionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetPermissionPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermissionPolicy',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetPermissionPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermissionPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class WAFV2FetchRateBasedStatementManagedKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest) {
    super(scope, id);
  }

  public get managedKeysIpv4(): WAFV2FetchRateBasedStatementManagedKeysManagedKeysIpv4 {
    return new WAFV2FetchRateBasedStatementManagedKeysManagedKeysIpv4(this, 'ManagedKeysIpv4', this.__resources, this.__input);
  }

  public get managedKeysIpv6(): WAFV2FetchRateBasedStatementManagedKeysManagedKeysIpv6 {
    return new WAFV2FetchRateBasedStatementManagedKeysManagedKeysIpv6(this, 'ManagedKeysIpv6', this.__resources, this.__input);
  }

}

export class WAFV2FetchRateBasedStatementManagedKeysManagedKeysIpv4 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest) {
    super(scope, id);
  }

  public get ipAddressVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedStatementManagedKeys',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRateBasedStatementManagedKeys.ManagedKeysIPV4.IPAddressVersion'),
        outputPath: 'ManagedKeysIPV4.IPAddressVersion',
        parameters: {
          Scope: this.__input.scope,
          WebACLName: this.__input.webAclName,
          WebACLId: this.__input.webAclId,
          RuleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV4.IPAddressVersion', props);
    return resource.getResponseField('ManagedKeysIPV4.IPAddressVersion') as unknown as string;
  }

  public get addresses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedStatementManagedKeys',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRateBasedStatementManagedKeys.ManagedKeysIPV4.Addresses'),
        outputPath: 'ManagedKeysIPV4.Addresses',
        parameters: {
          Scope: this.__input.scope,
          WebACLName: this.__input.webAclName,
          WebACLId: this.__input.webAclId,
          RuleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV4.Addresses', props);
    return resource.getResponseField('ManagedKeysIPV4.Addresses') as unknown as string[];
  }

}

export class WAFV2FetchRateBasedStatementManagedKeysManagedKeysIpv6 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest) {
    super(scope, id);
  }

  public get ipAddressVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedStatementManagedKeys',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRateBasedStatementManagedKeys.ManagedKeysIPV6.IPAddressVersion'),
        outputPath: 'ManagedKeysIPV6.IPAddressVersion',
        parameters: {
          Scope: this.__input.scope,
          WebACLName: this.__input.webAclName,
          WebACLId: this.__input.webAclId,
          RuleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV6.IPAddressVersion', props);
    return resource.getResponseField('ManagedKeysIPV6.IPAddressVersion') as unknown as string;
  }

  public get addresses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedStatementManagedKeys',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRateBasedStatementManagedKeys.ManagedKeysIPV6.Addresses'),
        outputPath: 'ManagedKeysIPV6.Addresses',
        parameters: {
          Scope: this.__input.scope,
          WebACLName: this.__input.webAclName,
          WebACLId: this.__input.webAclId,
          RuleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV6.Addresses', props);
    return resource.getResponseField('ManagedKeysIPV6.Addresses') as unknown as string[];
  }

}

export class WAFV2FetchRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRegexPatternSetRequest) {
    super(scope, id);
  }

  public get regexPatternSet(): WAFV2FetchRegexPatternSetRegexPatternSet {
    return new WAFV2FetchRegexPatternSetRegexPatternSet(this, 'RegexPatternSet', this.__resources, this.__input);
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRegexPatternSet.LockToken'),
        outputPath: 'LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2FetchRegexPatternSetRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRegexPatternSetRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRegexPatternSet.RegexPatternSet.Name'),
        outputPath: 'RegexPatternSet.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.Name', props);
    return resource.getResponseField('RegexPatternSet.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRegexPatternSet.RegexPatternSet.Id'),
        outputPath: 'RegexPatternSet.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.Id', props);
    return resource.getResponseField('RegexPatternSet.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRegexPatternSet.RegexPatternSet.ARN'),
        outputPath: 'RegexPatternSet.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.ARN', props);
    return resource.getResponseField('RegexPatternSet.ARN') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRegexPatternSet.RegexPatternSet.Description'),
        outputPath: 'RegexPatternSet.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.Description', props);
    return resource.getResponseField('RegexPatternSet.Description') as unknown as string;
  }

  public get regularExpressionList(): shapes.Wafv2Regex[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRegexPatternSet.RegexPatternSet.RegularExpressionList'),
        outputPath: 'RegexPatternSet.RegularExpressionList',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.RegularExpressionList', props);
    return resource.getResponseField('RegexPatternSet.RegularExpressionList') as unknown as shapes.Wafv2Regex[];
  }

}

export class WAFV2FetchRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroup(): WAFV2FetchRuleGroupRuleGroup {
    return new WAFV2FetchRuleGroupRuleGroup(this, 'RuleGroup', this.__resources, this.__input);
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.LockToken'),
        outputPath: 'LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2FetchRuleGroupRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRuleGroupRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.Name'),
        outputPath: 'RuleGroup.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.Name', props);
    return resource.getResponseField('RuleGroup.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.Id'),
        outputPath: 'RuleGroup.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.Id', props);
    return resource.getResponseField('RuleGroup.Id') as unknown as string;
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.Capacity'),
        outputPath: 'RuleGroup.Capacity',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.Capacity', props);
    return resource.getResponseField('RuleGroup.Capacity') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.ARN'),
        outputPath: 'RuleGroup.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.ARN', props);
    return resource.getResponseField('RuleGroup.ARN') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.Description'),
        outputPath: 'RuleGroup.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.Description', props);
    return resource.getResponseField('RuleGroup.Description') as unknown as string;
  }

  public get rules(): shapes.Wafv2Rule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.Rules'),
        outputPath: 'RuleGroup.Rules',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.Rules', props);
    return resource.getResponseField('RuleGroup.Rules') as unknown as shapes.Wafv2Rule[];
  }

  public get visibilityConfig(): WAFV2FetchRuleGroupRuleGroupVisibilityConfig {
    return new WAFV2FetchRuleGroupRuleGroupVisibilityConfig(this, 'VisibilityConfig', this.__resources, this.__input);
  }

}

export class WAFV2FetchRuleGroupRuleGroupVisibilityConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRuleGroupRequest) {
    super(scope, id);
  }

  public get sampledRequestsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.VisibilityConfig.SampledRequestsEnabled'),
        outputPath: 'RuleGroup.VisibilityConfig.SampledRequestsEnabled',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.VisibilityConfig.SampledRequestsEnabled', props);
    return resource.getResponseField('RuleGroup.VisibilityConfig.SampledRequestsEnabled') as unknown as boolean;
  }

  public get cloudWatchMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.VisibilityConfig.CloudWatchMetricsEnabled'),
        outputPath: 'RuleGroup.VisibilityConfig.CloudWatchMetricsEnabled',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.VisibilityConfig.CloudWatchMetricsEnabled', props);
    return resource.getResponseField('RuleGroup.VisibilityConfig.CloudWatchMetricsEnabled') as unknown as boolean;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetRuleGroup.RuleGroup.VisibilityConfig.MetricName'),
        outputPath: 'RuleGroup.VisibilityConfig.MetricName',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.VisibilityConfig.MetricName', props);
    return resource.getResponseField('RuleGroup.VisibilityConfig.MetricName') as unknown as string;
  }

}

export class WAFV2FetchSampledRequests extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetSampledRequestsRequest) {
    super(scope, id);
  }

  public get sampledRequests(): shapes.Wafv2SampledHttpRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetSampledRequests.SampledRequests'),
        outputPath: 'SampledRequests',
        parameters: {
          WebAclArn: this.__input.webAclArn,
          RuleMetricName: this.__input.ruleMetricName,
          Scope: this.__input.scope,
          TimeWindow: {
            StartTime: this.__input.timeWindow.startTime,
            EndTime: this.__input.timeWindow.endTime,
          },
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.SampledRequests', props);
    return resource.getResponseField('SampledRequests') as unknown as shapes.Wafv2SampledHttpRequest[];
  }

  public get populationSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetSampledRequests.PopulationSize'),
        outputPath: 'PopulationSize',
        parameters: {
          WebAclArn: this.__input.webAclArn,
          RuleMetricName: this.__input.ruleMetricName,
          Scope: this.__input.scope,
          TimeWindow: {
            StartTime: this.__input.timeWindow.startTime,
            EndTime: this.__input.timeWindow.endTime,
          },
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.PopulationSize', props);
    return resource.getResponseField('PopulationSize') as unknown as number;
  }

  public get timeWindow(): WAFV2FetchSampledRequestsTimeWindow {
    return new WAFV2FetchSampledRequestsTimeWindow(this, 'TimeWindow', this.__resources, this.__input);
  }

}

export class WAFV2FetchSampledRequestsTimeWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetSampledRequestsRequest) {
    super(scope, id);
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetSampledRequests.TimeWindow.StartTime'),
        outputPath: 'TimeWindow.StartTime',
        parameters: {
          WebAclArn: this.__input.webAclArn,
          RuleMetricName: this.__input.ruleMetricName,
          Scope: this.__input.scope,
          TimeWindow: {
            StartTime: this.__input.timeWindow.startTime,
            EndTime: this.__input.timeWindow.endTime,
          },
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.TimeWindow.StartTime', props);
    return resource.getResponseField('TimeWindow.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetSampledRequests.TimeWindow.EndTime'),
        outputPath: 'TimeWindow.EndTime',
        parameters: {
          WebAclArn: this.__input.webAclArn,
          RuleMetricName: this.__input.ruleMetricName,
          Scope: this.__input.scope,
          TimeWindow: {
            StartTime: this.__input.timeWindow.startTime,
            EndTime: this.__input.timeWindow.endTime,
          },
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.TimeWindow.EndTime', props);
    return resource.getResponseField('TimeWindow.EndTime') as unknown as string;
  }

}

export class WAFV2FetchWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
    super(scope, id);
  }

  public get webAcl(): WAFV2FetchWebAclWebAcl {
    return new WAFV2FetchWebAclWebAcl(this, 'WebAcl', this.__resources, this.__input);
  }

  public get lockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.LockToken'),
        outputPath: 'LockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2FetchWebAclWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.Name'),
        outputPath: 'WebACL.Name',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Name', props);
    return resource.getResponseField('WebACL.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.Id'),
        outputPath: 'WebACL.Id',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Id', props);
    return resource.getResponseField('WebACL.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.ARN'),
        outputPath: 'WebACL.ARN',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.ARN', props);
    return resource.getResponseField('WebACL.ARN') as unknown as string;
  }

  public get defaultAction(): WAFV2FetchWebAclWebAclDefaultAction {
    return new WAFV2FetchWebAclWebAclDefaultAction(this, 'DefaultAction', this.__resources, this.__input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.Description'),
        outputPath: 'WebACL.Description',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Description', props);
    return resource.getResponseField('WebACL.Description') as unknown as string;
  }

  public get rules(): shapes.Wafv2Rule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.Rules'),
        outputPath: 'WebACL.Rules',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.Wafv2Rule[];
  }

  public get visibilityConfig(): WAFV2FetchWebAclWebAclVisibilityConfig {
    return new WAFV2FetchWebAclWebAclVisibilityConfig(this, 'VisibilityConfig', this.__resources, this.__input);
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.Capacity'),
        outputPath: 'WebACL.Capacity',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Capacity', props);
    return resource.getResponseField('WebACL.Capacity') as unknown as number;
  }

  public get preProcessFirewallManagerRuleGroups(): shapes.Wafv2FirewallManagerRuleGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.PreProcessFirewallManagerRuleGroups'),
        outputPath: 'WebACL.PreProcessFirewallManagerRuleGroups',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.PreProcessFirewallManagerRuleGroups', props);
    return resource.getResponseField('WebACL.PreProcessFirewallManagerRuleGroups') as unknown as shapes.Wafv2FirewallManagerRuleGroup[];
  }

  public get postProcessFirewallManagerRuleGroups(): shapes.Wafv2FirewallManagerRuleGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.PostProcessFirewallManagerRuleGroups'),
        outputPath: 'WebACL.PostProcessFirewallManagerRuleGroups',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.PostProcessFirewallManagerRuleGroups', props);
    return resource.getResponseField('WebACL.PostProcessFirewallManagerRuleGroups') as unknown as shapes.Wafv2FirewallManagerRuleGroup[];
  }

  public get managedByFirewallManager(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.ManagedByFirewallManager'),
        outputPath: 'WebACL.ManagedByFirewallManager',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.ManagedByFirewallManager', props);
    return resource.getResponseField('WebACL.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2FetchWebAclWebAclDefaultAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
    super(scope, id);
  }

  public get block(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.DefaultAction.Block'),
        outputPath: 'WebACL.DefaultAction.Block',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.DefaultAction.Block', props);
    return resource.getResponseField('WebACL.DefaultAction.Block') as unknown as any;
  }

  public get allow(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.DefaultAction.Allow'),
        outputPath: 'WebACL.DefaultAction.Allow',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.DefaultAction.Allow', props);
    return resource.getResponseField('WebACL.DefaultAction.Allow') as unknown as any;
  }

}

export class WAFV2FetchWebAclWebAclVisibilityConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
    super(scope, id);
  }

  public get sampledRequestsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.VisibilityConfig.SampledRequestsEnabled'),
        outputPath: 'WebACL.VisibilityConfig.SampledRequestsEnabled',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.VisibilityConfig.SampledRequestsEnabled', props);
    return resource.getResponseField('WebACL.VisibilityConfig.SampledRequestsEnabled') as unknown as boolean;
  }

  public get cloudWatchMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.VisibilityConfig.CloudWatchMetricsEnabled'),
        outputPath: 'WebACL.VisibilityConfig.CloudWatchMetricsEnabled',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.VisibilityConfig.CloudWatchMetricsEnabled', props);
    return resource.getResponseField('WebACL.VisibilityConfig.CloudWatchMetricsEnabled') as unknown as boolean;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACL.WebACL.VisibilityConfig.MetricName'),
        outputPath: 'WebACL.VisibilityConfig.MetricName',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.VisibilityConfig.MetricName', props);
    return resource.getResponseField('WebACL.VisibilityConfig.MetricName') as unknown as string;
  }

}

export class WAFV2FetchWebAclForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
    super(scope, id);
  }

  public get webAcl(): WAFV2FetchWebAclForResourceWebAcl {
    return new WAFV2FetchWebAclForResourceWebAcl(this, 'WebAcl', this.__resources, this.__input);
  }

}

export class WAFV2FetchWebAclForResourceWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.Name'),
        outputPath: 'WebACL.Name',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.Name', props);
    return resource.getResponseField('WebACL.Name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.Id'),
        outputPath: 'WebACL.Id',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.Id', props);
    return resource.getResponseField('WebACL.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.ARN'),
        outputPath: 'WebACL.ARN',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.ARN', props);
    return resource.getResponseField('WebACL.ARN') as unknown as string;
  }

  public get defaultAction(): WAFV2FetchWebAclForResourceWebAclDefaultAction {
    return new WAFV2FetchWebAclForResourceWebAclDefaultAction(this, 'DefaultAction', this.__resources, this.__input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.Description'),
        outputPath: 'WebACL.Description',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.Description', props);
    return resource.getResponseField('WebACL.Description') as unknown as string;
  }

  public get rules(): shapes.Wafv2Rule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.Rules'),
        outputPath: 'WebACL.Rules',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.Wafv2Rule[];
  }

  public get visibilityConfig(): WAFV2FetchWebAclForResourceWebAclVisibilityConfig {
    return new WAFV2FetchWebAclForResourceWebAclVisibilityConfig(this, 'VisibilityConfig', this.__resources, this.__input);
  }

  public get capacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.Capacity'),
        outputPath: 'WebACL.Capacity',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.Capacity', props);
    return resource.getResponseField('WebACL.Capacity') as unknown as number;
  }

  public get preProcessFirewallManagerRuleGroups(): shapes.Wafv2FirewallManagerRuleGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.PreProcessFirewallManagerRuleGroups'),
        outputPath: 'WebACL.PreProcessFirewallManagerRuleGroups',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.PreProcessFirewallManagerRuleGroups', props);
    return resource.getResponseField('WebACL.PreProcessFirewallManagerRuleGroups') as unknown as shapes.Wafv2FirewallManagerRuleGroup[];
  }

  public get postProcessFirewallManagerRuleGroups(): shapes.Wafv2FirewallManagerRuleGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.PostProcessFirewallManagerRuleGroups'),
        outputPath: 'WebACL.PostProcessFirewallManagerRuleGroups',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.PostProcessFirewallManagerRuleGroups', props);
    return resource.getResponseField('WebACL.PostProcessFirewallManagerRuleGroups') as unknown as shapes.Wafv2FirewallManagerRuleGroup[];
  }

  public get managedByFirewallManager(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.ManagedByFirewallManager'),
        outputPath: 'WebACL.ManagedByFirewallManager',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.ManagedByFirewallManager', props);
    return resource.getResponseField('WebACL.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2FetchWebAclForResourceWebAclDefaultAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
    super(scope, id);
  }

  public get block(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.DefaultAction.Block'),
        outputPath: 'WebACL.DefaultAction.Block',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.DefaultAction.Block', props);
    return resource.getResponseField('WebACL.DefaultAction.Block') as unknown as any;
  }

  public get allow(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.DefaultAction.Allow'),
        outputPath: 'WebACL.DefaultAction.Allow',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.DefaultAction.Allow', props);
    return resource.getResponseField('WebACL.DefaultAction.Allow') as unknown as any;
  }

}

export class WAFV2FetchWebAclForResourceWebAclVisibilityConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
    super(scope, id);
  }

  public get sampledRequestsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.VisibilityConfig.SampledRequestsEnabled'),
        outputPath: 'WebACL.VisibilityConfig.SampledRequestsEnabled',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.VisibilityConfig.SampledRequestsEnabled', props);
    return resource.getResponseField('WebACL.VisibilityConfig.SampledRequestsEnabled') as unknown as boolean;
  }

  public get cloudWatchMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.VisibilityConfig.CloudWatchMetricsEnabled'),
        outputPath: 'WebACL.VisibilityConfig.CloudWatchMetricsEnabled',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.VisibilityConfig.CloudWatchMetricsEnabled', props);
    return resource.getResponseField('WebACL.VisibilityConfig.CloudWatchMetricsEnabled') as unknown as boolean;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.GetWebACLForResource.WebACL.VisibilityConfig.MetricName'),
        outputPath: 'WebACL.VisibilityConfig.MetricName',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACL.VisibilityConfig.MetricName', props);
    return resource.getResponseField('WebACL.VisibilityConfig.MetricName') as unknown as string;
  }

}

export class WAFV2ListAvailableManagedRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListAvailableManagedRuleGroupsRequest) {
    super(scope, id);
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableManagedRuleGroups',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListAvailableManagedRuleGroups.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAvailableManagedRuleGroups.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get managedRuleGroups(): shapes.Wafv2ManagedRuleGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableManagedRuleGroups',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListAvailableManagedRuleGroups.ManagedRuleGroups'),
        outputPath: 'ManagedRuleGroups',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAvailableManagedRuleGroups.ManagedRuleGroups', props);
    return resource.getResponseField('ManagedRuleGroups') as unknown as shapes.Wafv2ManagedRuleGroupSummary[];
  }

}

export class WAFV2ListIpSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListIpSetsRequest) {
    super(scope, id);
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListIPSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get ipSets(): shapes.Wafv2IpSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListIPSets.IPSets'),
        outputPath: 'IPSets',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.IPSets', props);
    return resource.getResponseField('IPSets') as unknown as shapes.Wafv2IpSetSummary[];
  }

}

export class WAFV2ListLoggingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListLoggingConfigurationsRequest) {
    super(scope, id);
  }

  public get loggingConfigurations(): shapes.Wafv2LoggingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggingConfigurations',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListLoggingConfigurations.LoggingConfigurations'),
        outputPath: 'LoggingConfigurations',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggingConfigurations.LoggingConfigurations', props);
    return resource.getResponseField('LoggingConfigurations') as unknown as shapes.Wafv2LoggingConfiguration[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggingConfigurations',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListLoggingConfigurations.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggingConfigurations.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFV2ListRegexPatternSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListRegexPatternSetsRequest) {
    super(scope, id);
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexPatternSets',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListRegexPatternSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexPatternSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get regexPatternSets(): shapes.Wafv2RegexPatternSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexPatternSets',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListRegexPatternSets.RegexPatternSets'),
        outputPath: 'RegexPatternSets',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexPatternSets.RegexPatternSets', props);
    return resource.getResponseField('RegexPatternSets') as unknown as shapes.Wafv2RegexPatternSetSummary[];
  }

}

export class WAFV2ListResourcesForWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListResourcesForWebAclRequest) {
    super(scope, id);
  }

  public get resourceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesForWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListResourcesForWebACL.ResourceArns'),
        outputPath: 'ResourceArns',
        parameters: {
          WebACLArn: this.__input.webAclArn,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourcesForWebACL.ResourceArns', props);
    return resource.getResponseField('ResourceArns') as unknown as string[];
  }

}

export class WAFV2ListRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListRuleGroupsRequest) {
    super(scope, id);
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListRuleGroups.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get ruleGroups(): shapes.Wafv2RuleGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListRuleGroups.RuleGroups'),
        outputPath: 'RuleGroups',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.Wafv2RuleGroupSummary[];
  }

}

export class WAFV2ListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListTagsForResourceRequest) {
    super(scope, id);
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListTagsForResource.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get tagInfoForResource(): WAFV2ListTagsForResourceTagInfoForResource {
    return new WAFV2ListTagsForResourceTagInfoForResource(this, 'TagInfoForResource', this.__resources, this.__input);
  }

}

export class WAFV2ListTagsForResourceTagInfoForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListTagsForResourceRequest) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListTagsForResource.TagInfoForResource.ResourceARN'),
        outputPath: 'TagInfoForResource.ResourceARN',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagInfoForResource.ResourceARN', props);
    return resource.getResponseField('TagInfoForResource.ResourceARN') as unknown as string;
  }

  public get tagList(): shapes.Wafv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListTagsForResource.TagInfoForResource.TagList'),
        outputPath: 'TagInfoForResource.TagList',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagInfoForResource.TagList', props);
    return resource.getResponseField('TagInfoForResource.TagList') as unknown as shapes.Wafv2Tag[];
  }

}

export class WAFV2ListWebAcLs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListWebAcLsRequest) {
    super(scope, id);
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebAcLs',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListWebACLs.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebACLs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get webAcLs(): shapes.Wafv2WebAclSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebAcLs',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.ListWebACLs.WebACLs'),
        outputPath: 'WebACLs',
        parameters: {
          Scope: this.__input.scope,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebACLs.WebACLs', props);
    return resource.getResponseField('WebACLs') as unknown as shapes.Wafv2WebAclSummary[];
  }

}

export class WAFV2PutLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2PutLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): WAFV2PutLoggingConfigurationLoggingConfiguration {
    return new WAFV2PutLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.__input);
  }

}

export class WAFV2PutLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2PutLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.PutLoggingConfiguration.LoggingConfiguration.ResourceArn'),
        outputPath: 'LoggingConfiguration.ResourceArn',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
            ManagedByFirewallManager: this.__input.loggingConfiguration.managedByFirewallManager,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.ResourceArn', props);
    return resource.getResponseField('LoggingConfiguration.ResourceArn') as unknown as string;
  }

  public get logDestinationConfigs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
            ManagedByFirewallManager: this.__input.loggingConfiguration.managedByFirewallManager,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as string[];
  }

  public get redactedFields(): shapes.Wafv2FieldToMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.PutLoggingConfiguration.LoggingConfiguration.RedactedFields'),
        outputPath: 'LoggingConfiguration.RedactedFields',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
            ManagedByFirewallManager: this.__input.loggingConfiguration.managedByFirewallManager,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.Wafv2FieldToMatch[];
  }

  public get managedByFirewallManager(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.PutLoggingConfiguration.LoggingConfiguration.ManagedByFirewallManager'),
        outputPath: 'LoggingConfiguration.ManagedByFirewallManager',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
            ManagedByFirewallManager: this.__input.loggingConfiguration.managedByFirewallManager,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.ManagedByFirewallManager', props);
    return resource.getResponseField('LoggingConfiguration.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2UpdateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateIpSetRequest) {
    super(scope, id);
  }

  public get nextLockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIpSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.UpdateIPSet.NextLockToken'),
        outputPath: 'NextLockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
          Description: this.__input.description,
          Addresses: this.__input.addresses,
          LockToken: this.__input.lockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIPSet.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

export class WAFV2UpdateRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateRegexPatternSetRequest) {
    super(scope, id);
  }

  public get nextLockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegexPatternSet',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.UpdateRegexPatternSet.NextLockToken'),
        outputPath: 'NextLockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
          Description: this.__input.description,
          RegularExpressionList: this.__input.regularExpressionList,
          LockToken: this.__input.lockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegexPatternSet.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

export class WAFV2UpdateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateRuleGroupRequest) {
    super(scope, id);
  }

  public get nextLockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.UpdateRuleGroup.NextLockToken'),
        outputPath: 'NextLockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          LockToken: this.__input.lockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

export class WAFV2UpdateWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateWebAclRequest) {
    super(scope, id);
  }

  public get nextLockToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebAcl',
        service: 'WAFV2',
        physicalResourceId: cr.PhysicalResourceId.of('WAFV2.UpdateWebACL.NextLockToken'),
        outputPath: 'NextLockToken',
        parameters: {
          Name: this.__input.name,
          Scope: this.__input.scope,
          Id: this.__input.id,
          DefaultAction: {
            Block: {
            },
            Allow: {
            },
          },
          Description: this.__input.description,
          Rules: this.__input.rules,
          VisibilityConfig: {
            SampledRequestsEnabled: this.__input.visibilityConfig.sampledRequestsEnabled,
            CloudWatchMetricsEnabled: this.__input.visibilityConfig.cloudWatchMetricsEnabled,
            MetricName: this.__input.visibilityConfig.metricName,
          },
          LockToken: this.__input.lockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebACL.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

