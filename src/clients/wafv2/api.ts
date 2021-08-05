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

  public checkCapacity(input: shapes.Wafv2CheckCapacityRequest): WAFV2ResponsesCheckCapacity {
    return new WAFV2ResponsesCheckCapacity(this, this.__resources, input);
  }

  public createIpSet(input: shapes.Wafv2CreateIpSetRequest): WAFV2ResponsesCreateIpSet {
    return new WAFV2ResponsesCreateIpSet(this, this.__resources, input);
  }

  public createRegexPatternSet(input: shapes.Wafv2CreateRegexPatternSetRequest): WAFV2ResponsesCreateRegexPatternSet {
    return new WAFV2ResponsesCreateRegexPatternSet(this, this.__resources, input);
  }

  public createRuleGroup(input: shapes.Wafv2CreateRuleGroupRequest): WAFV2ResponsesCreateRuleGroup {
    return new WAFV2ResponsesCreateRuleGroup(this, this.__resources, input);
  }

  public createWebAcl(input: shapes.Wafv2CreateWebAclRequest): WAFV2ResponsesCreateWebAcl {
    return new WAFV2ResponsesCreateWebAcl(this, this.__resources, input);
  }

  public deleteFirewallManagerRuleGroups(input: shapes.Wafv2DeleteFirewallManagerRuleGroupsRequest): WAFV2ResponsesDeleteFirewallManagerRuleGroups {
    return new WAFV2ResponsesDeleteFirewallManagerRuleGroups(this, this.__resources, input);
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

  public describeManagedRuleGroup(input: shapes.Wafv2DescribeManagedRuleGroupRequest): WAFV2ResponsesDescribeManagedRuleGroup {
    return new WAFV2ResponsesDescribeManagedRuleGroup(this, this.__resources, input);
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

  public fetchIpSet(input: shapes.Wafv2GetIpSetRequest): WAFV2ResponsesFetchIpSet {
    return new WAFV2ResponsesFetchIpSet(this, this.__resources, input);
  }

  public fetchLoggingConfiguration(input: shapes.Wafv2GetLoggingConfigurationRequest): WAFV2ResponsesFetchLoggingConfiguration {
    return new WAFV2ResponsesFetchLoggingConfiguration(this, this.__resources, input);
  }

  public fetchPermissionPolicy(input: shapes.Wafv2GetPermissionPolicyRequest): WAFV2ResponsesFetchPermissionPolicy {
    return new WAFV2ResponsesFetchPermissionPolicy(this, this.__resources, input);
  }

  public fetchRateBasedStatementManagedKeys(input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest): WAFV2ResponsesFetchRateBasedStatementManagedKeys {
    return new WAFV2ResponsesFetchRateBasedStatementManagedKeys(this, this.__resources, input);
  }

  public fetchRegexPatternSet(input: shapes.Wafv2GetRegexPatternSetRequest): WAFV2ResponsesFetchRegexPatternSet {
    return new WAFV2ResponsesFetchRegexPatternSet(this, this.__resources, input);
  }

  public fetchRuleGroup(input: shapes.Wafv2GetRuleGroupRequest): WAFV2ResponsesFetchRuleGroup {
    return new WAFV2ResponsesFetchRuleGroup(this, this.__resources, input);
  }

  public fetchSampledRequests(input: shapes.Wafv2GetSampledRequestsRequest): WAFV2ResponsesFetchSampledRequests {
    return new WAFV2ResponsesFetchSampledRequests(this, this.__resources, input);
  }

  public fetchWebAcl(input: shapes.Wafv2GetWebAclRequest): WAFV2ResponsesFetchWebAcl {
    return new WAFV2ResponsesFetchWebAcl(this, this.__resources, input);
  }

  public fetchWebAclForResource(input: shapes.Wafv2GetWebAclForResourceRequest): WAFV2ResponsesFetchWebAclForResource {
    return new WAFV2ResponsesFetchWebAclForResource(this, this.__resources, input);
  }

  public listAvailableManagedRuleGroups(input: shapes.Wafv2ListAvailableManagedRuleGroupsRequest): WAFV2ResponsesListAvailableManagedRuleGroups {
    return new WAFV2ResponsesListAvailableManagedRuleGroups(this, this.__resources, input);
  }

  public listIpSets(input: shapes.Wafv2ListIpSetsRequest): WAFV2ResponsesListIpSets {
    return new WAFV2ResponsesListIpSets(this, this.__resources, input);
  }

  public listLoggingConfigurations(input: shapes.Wafv2ListLoggingConfigurationsRequest): WAFV2ResponsesListLoggingConfigurations {
    return new WAFV2ResponsesListLoggingConfigurations(this, this.__resources, input);
  }

  public listRegexPatternSets(input: shapes.Wafv2ListRegexPatternSetsRequest): WAFV2ResponsesListRegexPatternSets {
    return new WAFV2ResponsesListRegexPatternSets(this, this.__resources, input);
  }

  public listResourcesForWebAcl(input: shapes.Wafv2ListResourcesForWebAclRequest): WAFV2ResponsesListResourcesForWebAcl {
    return new WAFV2ResponsesListResourcesForWebAcl(this, this.__resources, input);
  }

  public listRuleGroups(input: shapes.Wafv2ListRuleGroupsRequest): WAFV2ResponsesListRuleGroups {
    return new WAFV2ResponsesListRuleGroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.Wafv2ListTagsForResourceRequest): WAFV2ResponsesListTagsForResource {
    return new WAFV2ResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWebAcLs(input: shapes.Wafv2ListWebAcLsRequest): WAFV2ResponsesListWebAcLs {
    return new WAFV2ResponsesListWebAcLs(this, this.__resources, input);
  }

  public putLoggingConfiguration(input: shapes.Wafv2PutLoggingConfigurationRequest): WAFV2ResponsesPutLoggingConfiguration {
    return new WAFV2ResponsesPutLoggingConfiguration(this, this.__resources, input);
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

  public updateIpSet(input: shapes.Wafv2UpdateIpSetRequest): WAFV2ResponsesUpdateIpSet {
    return new WAFV2ResponsesUpdateIpSet(this, this.__resources, input);
  }

  public updateRegexPatternSet(input: shapes.Wafv2UpdateRegexPatternSetRequest): WAFV2ResponsesUpdateRegexPatternSet {
    return new WAFV2ResponsesUpdateRegexPatternSet(this, this.__resources, input);
  }

  public updateRuleGroup(input: shapes.Wafv2UpdateRuleGroupRequest): WAFV2ResponsesUpdateRuleGroup {
    return new WAFV2ResponsesUpdateRuleGroup(this, this.__resources, input);
  }

  public updateWebAcl(input: shapes.Wafv2UpdateWebAclRequest): WAFV2ResponsesUpdateWebAcl {
    return new WAFV2ResponsesUpdateWebAcl(this, this.__resources, input);
  }

}

export class WAFV2ResponsesCheckCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CheckCapacityRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckCapacity.Capacity', props);
    return resource.getResponseField('Capacity') as unknown as number;
  }

}

export class WAFV2ResponsesCreateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateIpSetRequest) {
  }

  public get summary(): WAFV2ResponsesCreateIpSetSummary {
    return new WAFV2ResponsesCreateIpSetSummary(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesCreateIpSetSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateIpSetRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.Summary.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.Summary.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.Summary.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.Summary.LockToken', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2ResponsesCreateRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRegexPatternSetRequest) {
  }

  public get summary(): WAFV2ResponsesCreateRegexPatternSetSummary {
    return new WAFV2ResponsesCreateRegexPatternSetSummary(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesCreateRegexPatternSetSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRegexPatternSetRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.Summary.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.Summary.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.Summary.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.Summary.LockToken', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2ResponsesCreateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRuleGroupRequest) {
  }

  public get summary(): WAFV2ResponsesCreateRuleGroupSummary {
    return new WAFV2ResponsesCreateRuleGroupSummary(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesCreateRuleGroupSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateRuleGroupRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.Summary.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.Summary.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.Summary.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.Summary.LockToken', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2ResponsesCreateWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateWebAclRequest) {
  }

  public get summary(): WAFV2ResponsesCreateWebAclSummary {
    return new WAFV2ResponsesCreateWebAclSummary(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesCreateWebAclSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2CreateWebAclRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.Summary.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.Summary.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.Summary.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.Summary.LockToken', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.Summary.ARN', props);
    return resource.getResponseField('Summary.ARN') as unknown as string;
  }

}

export class WAFV2ResponsesDeleteFirewallManagerRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2DeleteFirewallManagerRuleGroupsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFirewallManagerRuleGroups.NextWebACLLockToken', props);
    return resource.getResponseField('NextWebACLLockToken') as unknown as string;
  }

}

export class WAFV2ResponsesDescribeManagedRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2DescribeManagedRuleGroupRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedRuleGroup.Capacity', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedRuleGroup.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.Wafv2RuleSummary[];
  }

}

export class WAFV2ResponsesFetchIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetIpSetRequest) {
  }

  public get ipSet(): WAFV2ResponsesFetchIpSetIpSet {
    return new WAFV2ResponsesFetchIpSetIpSet(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2ResponsesFetchIpSetIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetIpSetRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.ARN', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.IPAddressVersion', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.Addresses', props);
    return resource.getResponseField('IPSet.Addresses') as unknown as string[];
  }

}

export class WAFV2ResponsesFetchLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration {
    return new WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesFetchLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetLoggingConfigurationRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.ResourceArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.ManagedByFirewallManager', props);
    return resource.getResponseField('LoggingConfiguration.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2ResponsesFetchPermissionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetPermissionPolicyRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermissionPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class WAFV2ResponsesFetchRateBasedStatementManagedKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest) {
  }

  public get managedKeysIpv4(): WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4 {
    return new WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4(this.__scope, this.__resources, this.__input);
  }

  public get managedKeysIpv6(): WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6 {
    return new WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv4 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV4.IPAddressVersion', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV4.Addresses', props);
    return resource.getResponseField('ManagedKeysIPV4.Addresses') as unknown as string[];
  }

}

export class WAFV2ResponsesFetchRateBasedStatementManagedKeysManagedKeysIpv6 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRateBasedStatementManagedKeysRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV6.IPAddressVersion', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedStatementManagedKeys.ManagedKeysIPV6.Addresses', props);
    return resource.getResponseField('ManagedKeysIPV6.Addresses') as unknown as string[];
  }

}

export class WAFV2ResponsesFetchRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRegexPatternSetRequest) {
  }

  public get regexPatternSet(): WAFV2ResponsesFetchRegexPatternSetRegexPatternSet {
    return new WAFV2ResponsesFetchRegexPatternSetRegexPatternSet(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2ResponsesFetchRegexPatternSetRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRegexPatternSetRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.ARN', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.RegularExpressionList', props);
    return resource.getResponseField('RegexPatternSet.RegularExpressionList') as unknown as shapes.Wafv2Regex[];
  }

}

export class WAFV2ResponsesFetchRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRuleGroupRequest) {
  }

  public get ruleGroup(): WAFV2ResponsesFetchRuleGroupRuleGroup {
    return new WAFV2ResponsesFetchRuleGroupRuleGroup(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2ResponsesFetchRuleGroupRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRuleGroupRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.Capacity', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.ARN', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.Rules', props);
    return resource.getResponseField('RuleGroup.Rules') as unknown as shapes.Wafv2Rule[];
  }

  public get visibilityConfig(): WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig {
    return new WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesFetchRuleGroupRuleGroupVisibilityConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetRuleGroupRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.VisibilityConfig.SampledRequestsEnabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.VisibilityConfig.CloudWatchMetricsEnabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.VisibilityConfig.MetricName', props);
    return resource.getResponseField('RuleGroup.VisibilityConfig.MetricName') as unknown as string;
  }

}

export class WAFV2ResponsesFetchSampledRequests {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetSampledRequestsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampledRequests.SampledRequests', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampledRequests.PopulationSize', props);
    return resource.getResponseField('PopulationSize') as unknown as number;
  }

  public get timeWindow(): WAFV2ResponsesFetchSampledRequestsTimeWindow {
    return new WAFV2ResponsesFetchSampledRequestsTimeWindow(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesFetchSampledRequestsTimeWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetSampledRequestsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampledRequests.TimeWindow.StartTime', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampledRequests.TimeWindow.EndTime', props);
    return resource.getResponseField('TimeWindow.EndTime') as unknown as string;
  }

}

export class WAFV2ResponsesFetchWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
  }

  public get webAcl(): WAFV2ResponsesFetchWebAclWebAcl {
    return new WAFV2ResponsesFetchWebAclWebAcl(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.LockToken', props);
    return resource.getResponseField('LockToken') as unknown as string;
  }

}

export class WAFV2ResponsesFetchWebAclWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.ARN', props);
    return resource.getResponseField('WebACL.ARN') as unknown as string;
  }

  public get defaultAction(): WAFV2ResponsesFetchWebAclWebAclDefaultAction {
    return new WAFV2ResponsesFetchWebAclWebAclDefaultAction(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.Wafv2Rule[];
  }

  public get visibilityConfig(): WAFV2ResponsesFetchWebAclWebAclVisibilityConfig {
    return new WAFV2ResponsesFetchWebAclWebAclVisibilityConfig(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Capacity', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.PreProcessFirewallManagerRuleGroups', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.PostProcessFirewallManagerRuleGroups', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.ManagedByFirewallManager', props);
    return resource.getResponseField('WebACL.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2ResponsesFetchWebAclWebAclDefaultAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.DefaultAction.Block', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.DefaultAction.Allow', props);
    return resource.getResponseField('WebACL.DefaultAction.Allow') as unknown as any;
  }

}

export class WAFV2ResponsesFetchWebAclWebAclVisibilityConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.VisibilityConfig.SampledRequestsEnabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.VisibilityConfig.CloudWatchMetricsEnabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.VisibilityConfig.MetricName', props);
    return resource.getResponseField('WebACL.VisibilityConfig.MetricName') as unknown as string;
  }

}

export class WAFV2ResponsesFetchWebAclForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
  }

  public get webAcl(): WAFV2ResponsesFetchWebAclForResourceWebAcl {
    return new WAFV2ResponsesFetchWebAclForResourceWebAcl(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesFetchWebAclForResourceWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.Id', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.ARN', props);
    return resource.getResponseField('WebACL.ARN') as unknown as string;
  }

  public get defaultAction(): WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction {
    return new WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.Description', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.Wafv2Rule[];
  }

  public get visibilityConfig(): WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig {
    return new WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig(this.__scope, this.__resources, this.__input);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.Capacity', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.PreProcessFirewallManagerRuleGroups', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.PostProcessFirewallManagerRuleGroups', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.ManagedByFirewallManager', props);
    return resource.getResponseField('WebACL.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2ResponsesFetchWebAclForResourceWebAclDefaultAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.DefaultAction.Block', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.DefaultAction.Allow', props);
    return resource.getResponseField('WebACL.DefaultAction.Allow') as unknown as any;
  }

}

export class WAFV2ResponsesFetchWebAclForResourceWebAclVisibilityConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2GetWebAclForResourceRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.VisibilityConfig.SampledRequestsEnabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.VisibilityConfig.CloudWatchMetricsEnabled', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACL.VisibilityConfig.MetricName', props);
    return resource.getResponseField('WebACL.VisibilityConfig.MetricName') as unknown as string;
  }

}

export class WAFV2ResponsesListAvailableManagedRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListAvailableManagedRuleGroupsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableManagedRuleGroups.NextMarker', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableManagedRuleGroups.ManagedRuleGroups', props);
    return resource.getResponseField('ManagedRuleGroups') as unknown as shapes.Wafv2ManagedRuleGroupSummary[];
  }

}

export class WAFV2ResponsesListIpSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListIpSetsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.NextMarker', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.IPSets', props);
    return resource.getResponseField('IPSets') as unknown as shapes.Wafv2IpSetSummary[];
  }

}

export class WAFV2ResponsesListLoggingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListLoggingConfigurationsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggingConfigurations.LoggingConfigurations', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggingConfigurations.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFV2ResponsesListRegexPatternSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListRegexPatternSetsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexPatternSets.NextMarker', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexPatternSets.RegexPatternSets', props);
    return resource.getResponseField('RegexPatternSets') as unknown as shapes.Wafv2RegexPatternSetSummary[];
  }

}

export class WAFV2ResponsesListResourcesForWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListResourcesForWebAclRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourcesForWebACL.ResourceArns', props);
    return resource.getResponseField('ResourceArns') as unknown as string[];
  }

}

export class WAFV2ResponsesListRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListRuleGroupsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.NextMarker', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.Wafv2RuleGroupSummary[];
  }

}

export class WAFV2ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListTagsForResourceRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get tagInfoForResource(): WAFV2ResponsesListTagsForResourceTagInfoForResource {
    return new WAFV2ResponsesListTagsForResourceTagInfoForResource(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesListTagsForResourceTagInfoForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListTagsForResourceRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagInfoForResource.ResourceARN', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagInfoForResource.TagList', props);
    return resource.getResponseField('TagInfoForResource.TagList') as unknown as shapes.Wafv2Tag[];
  }

}

export class WAFV2ResponsesListWebAcLs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2ListWebAcLsRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebACLs.NextMarker', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebACLs.WebACLs', props);
    return resource.getResponseField('WebACLs') as unknown as shapes.Wafv2WebAclSummary[];
  }

}

export class WAFV2ResponsesPutLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2PutLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration {
    return new WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class WAFV2ResponsesPutLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2PutLoggingConfigurationRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLoggingConfiguration.LoggingConfiguration.ResourceArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLoggingConfiguration.LoggingConfiguration.ManagedByFirewallManager', props);
    return resource.getResponseField('LoggingConfiguration.ManagedByFirewallManager') as unknown as boolean;
  }

}

export class WAFV2ResponsesUpdateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateIpSetRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIPSet.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

export class WAFV2ResponsesUpdateRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateRegexPatternSetRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegexPatternSet.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

export class WAFV2ResponsesUpdateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateRuleGroupRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

export class WAFV2ResponsesUpdateWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Wafv2UpdateWebAclRequest) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebACL.NextLockToken', props);
    return resource.getResponseField('NextLockToken') as unknown as string;
  }

}

