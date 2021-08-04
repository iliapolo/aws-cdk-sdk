import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WafRegionalClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateWebAcl(input: shapes.WafRegionalAssociateWebAclRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.AssociateWebACL'),
        parameters: {
          WebACLId: input.webAclId,
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateWebACL', props);
  }

  public createByteMatchSet(input: shapes.WafRegionalCreateByteMatchSetRequest): WAFRegionalResponsesCreateByteMatchSet {
    return new WAFRegionalResponsesCreateByteMatchSet(this, this.__resources, input);
  }

  public createGeoMatchSet(input: shapes.WafRegionalCreateGeoMatchSetRequest): WAFRegionalResponsesCreateGeoMatchSet {
    return new WAFRegionalResponsesCreateGeoMatchSet(this, this.__resources, input);
  }

  public createIpSet(input: shapes.WafRegionalCreateIpSetRequest): WAFRegionalResponsesCreateIpSet {
    return new WAFRegionalResponsesCreateIpSet(this, this.__resources, input);
  }

  public createRateBasedRule(input: shapes.WafRegionalCreateRateBasedRuleRequest): WAFRegionalResponsesCreateRateBasedRule {
    return new WAFRegionalResponsesCreateRateBasedRule(this, this.__resources, input);
  }

  public createRegexMatchSet(input: shapes.WafRegionalCreateRegexMatchSetRequest): WAFRegionalResponsesCreateRegexMatchSet {
    return new WAFRegionalResponsesCreateRegexMatchSet(this, this.__resources, input);
  }

  public createRegexPatternSet(input: shapes.WafRegionalCreateRegexPatternSetRequest): WAFRegionalResponsesCreateRegexPatternSet {
    return new WAFRegionalResponsesCreateRegexPatternSet(this, this.__resources, input);
  }

  public createRule(input: shapes.WafRegionalCreateRuleRequest): WAFRegionalResponsesCreateRule {
    return new WAFRegionalResponsesCreateRule(this, this.__resources, input);
  }

  public createRuleGroup(input: shapes.WafRegionalCreateRuleGroupRequest): WAFRegionalResponsesCreateRuleGroup {
    return new WAFRegionalResponsesCreateRuleGroup(this, this.__resources, input);
  }

  public createSizeConstraintSet(input: shapes.WafRegionalCreateSizeConstraintSetRequest): WAFRegionalResponsesCreateSizeConstraintSet {
    return new WAFRegionalResponsesCreateSizeConstraintSet(this, this.__resources, input);
  }

  public createSqlInjectionMatchSet(input: shapes.WafRegionalCreateSqlInjectionMatchSetRequest): WAFRegionalResponsesCreateSqlInjectionMatchSet {
    return new WAFRegionalResponsesCreateSqlInjectionMatchSet(this, this.__resources, input);
  }

  public createWebAcl(input: shapes.WafRegionalCreateWebAclRequest): WAFRegionalResponsesCreateWebAcl {
    return new WAFRegionalResponsesCreateWebAcl(this, this.__resources, input);
  }

  public createWebAclMigrationStack(input: shapes.WafRegionalCreateWebAclMigrationStackRequest): WAFRegionalResponsesCreateWebAclMigrationStack {
    return new WAFRegionalResponsesCreateWebAclMigrationStack(this, this.__resources, input);
  }

  public createXssMatchSet(input: shapes.WafRegionalCreateXssMatchSetRequest): WAFRegionalResponsesCreateXssMatchSet {
    return new WAFRegionalResponsesCreateXssMatchSet(this, this.__resources, input);
  }

  public deleteByteMatchSet(input: shapes.WafRegionalDeleteByteMatchSetRequest): WAFRegionalResponsesDeleteByteMatchSet {
    return new WAFRegionalResponsesDeleteByteMatchSet(this, this.__resources, input);
  }

  public deleteGeoMatchSet(input: shapes.WafRegionalDeleteGeoMatchSetRequest): WAFRegionalResponsesDeleteGeoMatchSet {
    return new WAFRegionalResponsesDeleteGeoMatchSet(this, this.__resources, input);
  }

  public deleteIpSet(input: shapes.WafRegionalDeleteIpSetRequest): WAFRegionalResponsesDeleteIpSet {
    return new WAFRegionalResponsesDeleteIpSet(this, this.__resources, input);
  }

  public deleteLoggingConfiguration(input: shapes.WafRegionalDeleteLoggingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoggingConfiguration',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteLoggingConfiguration'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLoggingConfiguration', props);
  }

  public deletePermissionPolicy(input: shapes.WafRegionalDeletePermissionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePermissionPolicy',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeletePermissionPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePermissionPolicy', props);
  }

  public deleteRateBasedRule(input: shapes.WafRegionalDeleteRateBasedRuleRequest): WAFRegionalResponsesDeleteRateBasedRule {
    return new WAFRegionalResponsesDeleteRateBasedRule(this, this.__resources, input);
  }

  public deleteRegexMatchSet(input: shapes.WafRegionalDeleteRegexMatchSetRequest): WAFRegionalResponsesDeleteRegexMatchSet {
    return new WAFRegionalResponsesDeleteRegexMatchSet(this, this.__resources, input);
  }

  public deleteRegexPatternSet(input: shapes.WafRegionalDeleteRegexPatternSetRequest): WAFRegionalResponsesDeleteRegexPatternSet {
    return new WAFRegionalResponsesDeleteRegexPatternSet(this, this.__resources, input);
  }

  public deleteRule(input: shapes.WafRegionalDeleteRuleRequest): WAFRegionalResponsesDeleteRule {
    return new WAFRegionalResponsesDeleteRule(this, this.__resources, input);
  }

  public deleteRuleGroup(input: shapes.WafRegionalDeleteRuleGroupRequest): WAFRegionalResponsesDeleteRuleGroup {
    return new WAFRegionalResponsesDeleteRuleGroup(this, this.__resources, input);
  }

  public deleteSizeConstraintSet(input: shapes.WafRegionalDeleteSizeConstraintSetRequest): WAFRegionalResponsesDeleteSizeConstraintSet {
    return new WAFRegionalResponsesDeleteSizeConstraintSet(this, this.__resources, input);
  }

  public deleteSqlInjectionMatchSet(input: shapes.WafRegionalDeleteSqlInjectionMatchSetRequest): WAFRegionalResponsesDeleteSqlInjectionMatchSet {
    return new WAFRegionalResponsesDeleteSqlInjectionMatchSet(this, this.__resources, input);
  }

  public deleteWebAcl(input: shapes.WafRegionalDeleteWebAclRequest): WAFRegionalResponsesDeleteWebAcl {
    return new WAFRegionalResponsesDeleteWebAcl(this, this.__resources, input);
  }

  public deleteXssMatchSet(input: shapes.WafRegionalDeleteXssMatchSetRequest): WAFRegionalResponsesDeleteXssMatchSet {
    return new WAFRegionalResponsesDeleteXssMatchSet(this, this.__resources, input);
  }

  public disassociateWebAcl(input: shapes.WafRegionalDisassociateWebAclRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DisassociateWebACL'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWebACL', props);
  }

  public fetchByteMatchSet(input: shapes.WafRegionalGetByteMatchSetRequest): WAFRegionalResponsesFetchByteMatchSet {
    return new WAFRegionalResponsesFetchByteMatchSet(this, this.__resources, input);
  }

  public fetchChangeToken(): WAFRegionalResponsesFetchChangeToken {
    return new WAFRegionalResponsesFetchChangeToken(this, this.__resources);
  }

  public fetchChangeTokenStatus(input: shapes.WafRegionalGetChangeTokenStatusRequest): WAFRegionalResponsesFetchChangeTokenStatus {
    return new WAFRegionalResponsesFetchChangeTokenStatus(this, this.__resources, input);
  }

  public fetchGeoMatchSet(input: shapes.WafRegionalGetGeoMatchSetRequest): WAFRegionalResponsesFetchGeoMatchSet {
    return new WAFRegionalResponsesFetchGeoMatchSet(this, this.__resources, input);
  }

  public fetchIpSet(input: shapes.WafRegionalGetIpSetRequest): WAFRegionalResponsesFetchIpSet {
    return new WAFRegionalResponsesFetchIpSet(this, this.__resources, input);
  }

  public fetchLoggingConfiguration(input: shapes.WafRegionalGetLoggingConfigurationRequest): WAFRegionalResponsesFetchLoggingConfiguration {
    return new WAFRegionalResponsesFetchLoggingConfiguration(this, this.__resources, input);
  }

  public fetchPermissionPolicy(input: shapes.WafRegionalGetPermissionPolicyRequest): WAFRegionalResponsesFetchPermissionPolicy {
    return new WAFRegionalResponsesFetchPermissionPolicy(this, this.__resources, input);
  }

  public fetchRateBasedRule(input: shapes.WafRegionalGetRateBasedRuleRequest): WAFRegionalResponsesFetchRateBasedRule {
    return new WAFRegionalResponsesFetchRateBasedRule(this, this.__resources, input);
  }

  public fetchRateBasedRuleManagedKeys(input: shapes.WafRegionalGetRateBasedRuleManagedKeysRequest): WAFRegionalResponsesFetchRateBasedRuleManagedKeys {
    return new WAFRegionalResponsesFetchRateBasedRuleManagedKeys(this, this.__resources, input);
  }

  public fetchRegexMatchSet(input: shapes.WafRegionalGetRegexMatchSetRequest): WAFRegionalResponsesFetchRegexMatchSet {
    return new WAFRegionalResponsesFetchRegexMatchSet(this, this.__resources, input);
  }

  public fetchRegexPatternSet(input: shapes.WafRegionalGetRegexPatternSetRequest): WAFRegionalResponsesFetchRegexPatternSet {
    return new WAFRegionalResponsesFetchRegexPatternSet(this, this.__resources, input);
  }

  public fetchRule(input: shapes.WafRegionalGetRuleRequest): WAFRegionalResponsesFetchRule {
    return new WAFRegionalResponsesFetchRule(this, this.__resources, input);
  }

  public fetchRuleGroup(input: shapes.WafRegionalGetRuleGroupRequest): WAFRegionalResponsesFetchRuleGroup {
    return new WAFRegionalResponsesFetchRuleGroup(this, this.__resources, input);
  }

  public fetchSampledRequests(input: shapes.WafRegionalGetSampledRequestsRequest): WAFRegionalResponsesFetchSampledRequests {
    return new WAFRegionalResponsesFetchSampledRequests(this, this.__resources, input);
  }

  public fetchSizeConstraintSet(input: shapes.WafRegionalGetSizeConstraintSetRequest): WAFRegionalResponsesFetchSizeConstraintSet {
    return new WAFRegionalResponsesFetchSizeConstraintSet(this, this.__resources, input);
  }

  public fetchSqlInjectionMatchSet(input: shapes.WafRegionalGetSqlInjectionMatchSetRequest): WAFRegionalResponsesFetchSqlInjectionMatchSet {
    return new WAFRegionalResponsesFetchSqlInjectionMatchSet(this, this.__resources, input);
  }

  public fetchWebAcl(input: shapes.WafRegionalGetWebAclRequest): WAFRegionalResponsesFetchWebAcl {
    return new WAFRegionalResponsesFetchWebAcl(this, this.__resources, input);
  }

  public fetchWebAclForResource(input: shapes.WafRegionalGetWebAclForResourceRequest): WAFRegionalResponsesFetchWebAclForResource {
    return new WAFRegionalResponsesFetchWebAclForResource(this, this.__resources, input);
  }

  public fetchXssMatchSet(input: shapes.WafRegionalGetXssMatchSetRequest): WAFRegionalResponsesFetchXssMatchSet {
    return new WAFRegionalResponsesFetchXssMatchSet(this, this.__resources, input);
  }

  public listActivatedRulesInRuleGroup(input: shapes.WafRegionalListActivatedRulesInRuleGroupRequest): WAFRegionalResponsesListActivatedRulesInRuleGroup {
    return new WAFRegionalResponsesListActivatedRulesInRuleGroup(this, this.__resources, input);
  }

  public listByteMatchSets(input: shapes.WafRegionalListByteMatchSetsRequest): WAFRegionalResponsesListByteMatchSets {
    return new WAFRegionalResponsesListByteMatchSets(this, this.__resources, input);
  }

  public listGeoMatchSets(input: shapes.WafRegionalListGeoMatchSetsRequest): WAFRegionalResponsesListGeoMatchSets {
    return new WAFRegionalResponsesListGeoMatchSets(this, this.__resources, input);
  }

  public listIpSets(input: shapes.WafRegionalListIpSetsRequest): WAFRegionalResponsesListIpSets {
    return new WAFRegionalResponsesListIpSets(this, this.__resources, input);
  }

  public listLoggingConfigurations(input: shapes.WafRegionalListLoggingConfigurationsRequest): WAFRegionalResponsesListLoggingConfigurations {
    return new WAFRegionalResponsesListLoggingConfigurations(this, this.__resources, input);
  }

  public listRateBasedRules(input: shapes.WafRegionalListRateBasedRulesRequest): WAFRegionalResponsesListRateBasedRules {
    return new WAFRegionalResponsesListRateBasedRules(this, this.__resources, input);
  }

  public listRegexMatchSets(input: shapes.WafRegionalListRegexMatchSetsRequest): WAFRegionalResponsesListRegexMatchSets {
    return new WAFRegionalResponsesListRegexMatchSets(this, this.__resources, input);
  }

  public listRegexPatternSets(input: shapes.WafRegionalListRegexPatternSetsRequest): WAFRegionalResponsesListRegexPatternSets {
    return new WAFRegionalResponsesListRegexPatternSets(this, this.__resources, input);
  }

  public listResourcesForWebAcl(input: shapes.WafRegionalListResourcesForWebAclRequest): WAFRegionalResponsesListResourcesForWebAcl {
    return new WAFRegionalResponsesListResourcesForWebAcl(this, this.__resources, input);
  }

  public listRuleGroups(input: shapes.WafRegionalListRuleGroupsRequest): WAFRegionalResponsesListRuleGroups {
    return new WAFRegionalResponsesListRuleGroups(this, this.__resources, input);
  }

  public listRules(input: shapes.WafRegionalListRulesRequest): WAFRegionalResponsesListRules {
    return new WAFRegionalResponsesListRules(this, this.__resources, input);
  }

  public listSizeConstraintSets(input: shapes.WafRegionalListSizeConstraintSetsRequest): WAFRegionalResponsesListSizeConstraintSets {
    return new WAFRegionalResponsesListSizeConstraintSets(this, this.__resources, input);
  }

  public listSqlInjectionMatchSets(input: shapes.WafRegionalListSqlInjectionMatchSetsRequest): WAFRegionalResponsesListSqlInjectionMatchSets {
    return new WAFRegionalResponsesListSqlInjectionMatchSets(this, this.__resources, input);
  }

  public listSubscribedRuleGroups(input: shapes.WafRegionalListSubscribedRuleGroupsRequest): WAFRegionalResponsesListSubscribedRuleGroups {
    return new WAFRegionalResponsesListSubscribedRuleGroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.WafRegionalListTagsForResourceRequest): WAFRegionalResponsesListTagsForResource {
    return new WAFRegionalResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWebAcLs(input: shapes.WafRegionalListWebAcLsRequest): WAFRegionalResponsesListWebAcLs {
    return new WAFRegionalResponsesListWebAcLs(this, this.__resources, input);
  }

  public listXssMatchSets(input: shapes.WafRegionalListXssMatchSetsRequest): WAFRegionalResponsesListXssMatchSets {
    return new WAFRegionalResponsesListXssMatchSets(this, this.__resources, input);
  }

  public putLoggingConfiguration(input: shapes.WafRegionalPutLoggingConfigurationRequest): WAFRegionalResponsesPutLoggingConfiguration {
    return new WAFRegionalResponsesPutLoggingConfiguration(this, this.__resources, input);
  }

  public putPermissionPolicy(input: shapes.WafRegionalPutPermissionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPermissionPolicy',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.PutPermissionPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPermissionPolicy', props);
  }

  public tagResource(input: shapes.WafRegionalTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.WafRegionalUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateByteMatchSet(input: shapes.WafRegionalUpdateByteMatchSetRequest): WAFRegionalResponsesUpdateByteMatchSet {
    return new WAFRegionalResponsesUpdateByteMatchSet(this, this.__resources, input);
  }

  public updateGeoMatchSet(input: shapes.WafRegionalUpdateGeoMatchSetRequest): WAFRegionalResponsesUpdateGeoMatchSet {
    return new WAFRegionalResponsesUpdateGeoMatchSet(this, this.__resources, input);
  }

  public updateIpSet(input: shapes.WafRegionalUpdateIpSetRequest): WAFRegionalResponsesUpdateIpSet {
    return new WAFRegionalResponsesUpdateIpSet(this, this.__resources, input);
  }

  public updateRateBasedRule(input: shapes.WafRegionalUpdateRateBasedRuleRequest): WAFRegionalResponsesUpdateRateBasedRule {
    return new WAFRegionalResponsesUpdateRateBasedRule(this, this.__resources, input);
  }

  public updateRegexMatchSet(input: shapes.WafRegionalUpdateRegexMatchSetRequest): WAFRegionalResponsesUpdateRegexMatchSet {
    return new WAFRegionalResponsesUpdateRegexMatchSet(this, this.__resources, input);
  }

  public updateRegexPatternSet(input: shapes.WafRegionalUpdateRegexPatternSetRequest): WAFRegionalResponsesUpdateRegexPatternSet {
    return new WAFRegionalResponsesUpdateRegexPatternSet(this, this.__resources, input);
  }

  public updateRule(input: shapes.WafRegionalUpdateRuleRequest): WAFRegionalResponsesUpdateRule {
    return new WAFRegionalResponsesUpdateRule(this, this.__resources, input);
  }

  public updateRuleGroup(input: shapes.WafRegionalUpdateRuleGroupRequest): WAFRegionalResponsesUpdateRuleGroup {
    return new WAFRegionalResponsesUpdateRuleGroup(this, this.__resources, input);
  }

  public updateSizeConstraintSet(input: shapes.WafRegionalUpdateSizeConstraintSetRequest): WAFRegionalResponsesUpdateSizeConstraintSet {
    return new WAFRegionalResponsesUpdateSizeConstraintSet(this, this.__resources, input);
  }

  public updateSqlInjectionMatchSet(input: shapes.WafRegionalUpdateSqlInjectionMatchSetRequest): WAFRegionalResponsesUpdateSqlInjectionMatchSet {
    return new WAFRegionalResponsesUpdateSqlInjectionMatchSet(this, this.__resources, input);
  }

  public updateWebAcl(input: shapes.WafRegionalUpdateWebAclRequest): WAFRegionalResponsesUpdateWebAcl {
    return new WAFRegionalResponsesUpdateWebAcl(this, this.__resources, input);
  }

  public updateXssMatchSet(input: shapes.WafRegionalUpdateXssMatchSetRequest): WAFRegionalResponsesUpdateXssMatchSet {
    return new WAFRegionalResponsesUpdateXssMatchSet(this, this.__resources, input);
  }

}

export class WAFRegionalResponsesCreateByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateByteMatchSetRequest) {
  }

  public get byteMatchSet(): WAFRegionalResponsesCreateByteMatchSetByteMatchSet {
    return new WAFRegionalResponsesCreateByteMatchSetByteMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateByteMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateByteMatchSetByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateByteMatchSetRequest) {
  }

  public get byteMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateByteMatchSet.ByteMatchSet.ByteMatchSetId'),
        outputPath: 'ByteMatchSet.ByteMatchSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateByteMatchSet.ByteMatchSet.ByteMatchSetId', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateByteMatchSet.ByteMatchSet.Name'),
        outputPath: 'ByteMatchSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateByteMatchSet.ByteMatchSet.Name', props);
    return resource.getResponseField('ByteMatchSet.Name') as unknown as string;
  }

  public get byteMatchTuples(): shapes.WafRegionalByteMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateByteMatchSet.ByteMatchSet.ByteMatchTuples'),
        outputPath: 'ByteMatchSet.ByteMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafRegionalByteMatchTuple[];
  }

}

export class WAFRegionalResponsesCreateGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateGeoMatchSetRequest) {
  }

  public get geoMatchSet(): WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet {
    return new WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateGeoMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateGeoMatchSetRequest) {
  }

  public get geoMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateGeoMatchSet.GeoMatchSet.GeoMatchSetId'),
        outputPath: 'GeoMatchSet.GeoMatchSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeoMatchSet.GeoMatchSet.GeoMatchSetId', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateGeoMatchSet.GeoMatchSet.Name'),
        outputPath: 'GeoMatchSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeoMatchSet.GeoMatchSet.Name', props);
    return resource.getResponseField('GeoMatchSet.Name') as unknown as string;
  }

  public get geoMatchConstraints(): shapes.WafRegionalGeoMatchConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints'),
        outputPath: 'GeoMatchSet.GeoMatchConstraints',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafRegionalGeoMatchConstraint[];
  }

}

export class WAFRegionalResponsesCreateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateIpSetRequest) {
  }

  public get ipSet(): WAFRegionalResponsesCreateIpSetIpSet {
    return new WAFRegionalResponsesCreateIpSetIpSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateIPSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateIpSetIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateIpSetRequest) {
  }

  public get ipSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateIPSet.IPSet.IPSetId'),
        outputPath: 'IPSet.IPSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.IPSet.IPSetId', props);
    return resource.getResponseField('IPSet.IPSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateIPSet.IPSet.Name'),
        outputPath: 'IPSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.IPSet.Name', props);
    return resource.getResponseField('IPSet.Name') as unknown as string;
  }

  public get ipSetDescriptors(): shapes.WafRegionalIpSetDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateIPSet.IPSet.IPSetDescriptors'),
        outputPath: 'IPSet.IPSetDescriptors',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafRegionalIpSetDescriptor[];
  }

}

export class WAFRegionalResponsesCreateRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRateBasedRuleRequest) {
  }

  public get rule(): WAFRegionalResponsesCreateRateBasedRuleRule {
    return new WAFRegionalResponsesCreateRateBasedRuleRule(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateRateBasedRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRateBasedRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.Rule.RuleId'),
        outputPath: 'Rule.RuleId',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.Rule.RuleId', props);
    return resource.getResponseField('Rule.RuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.Rule.Name'),
        outputPath: 'Rule.Name',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.Rule.Name', props);
    return resource.getResponseField('Rule.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.Rule.MetricName', props);
    return resource.getResponseField('Rule.MetricName') as unknown as string;
  }

  public get matchPredicates(): shapes.WafRegionalPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.Rule.MatchPredicates'),
        outputPath: 'Rule.MatchPredicates',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.Rule.MatchPredicates', props);
    return resource.getResponseField('Rule.MatchPredicates') as unknown as shapes.WafRegionalPredicate[];
  }

  public get rateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.Rule.RateKey'),
        outputPath: 'Rule.RateKey',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.Rule.RateKey', props);
    return resource.getResponseField('Rule.RateKey') as unknown as string;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRateBasedRule.Rule.RateLimit'),
        outputPath: 'Rule.RateLimit',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          RateKey: this.__input.rateKey,
          RateLimit: this.__input.rateLimit,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRateBasedRule.Rule.RateLimit', props);
    return resource.getResponseField('Rule.RateLimit') as unknown as number;
  }

}

export class WAFRegionalResponsesCreateRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRegexMatchSetRequest) {
  }

  public get regexMatchSet(): WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet {
    return new WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRegexMatchSetRequest) {
  }

  public get regexMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexMatchSet.RegexMatchSet.RegexMatchSetId'),
        outputPath: 'RegexMatchSet.RegexMatchSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexMatchSet.RegexMatchSet.RegexMatchSetId', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexMatchSet.RegexMatchSet.Name'),
        outputPath: 'RegexMatchSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexMatchSet.RegexMatchSet.Name', props);
    return resource.getResponseField('RegexMatchSet.Name') as unknown as string;
  }

  public get regexMatchTuples(): shapes.WafRegionalRegexMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples'),
        outputPath: 'RegexMatchSet.RegexMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegionalRegexMatchTuple[];
  }

}

export class WAFRegionalResponsesCreateRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRegexPatternSetRequest) {
  }

  public get regexPatternSet(): WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet {
    return new WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexPatternSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRegexPatternSetRequest) {
  }

  public get regexPatternSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexPatternSet.RegexPatternSet.RegexPatternSetId'),
        outputPath: 'RegexPatternSet.RegexPatternSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.RegexPatternSet.RegexPatternSetId', props);
    return resource.getResponseField('RegexPatternSet.RegexPatternSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexPatternSet.RegexPatternSet.Name'),
        outputPath: 'RegexPatternSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.RegexPatternSet.Name', props);
    return resource.getResponseField('RegexPatternSet.Name') as unknown as string;
  }

  public get regexPatternStrings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRegexPatternSet.RegexPatternSet.RegexPatternStrings'),
        outputPath: 'RegexPatternSet.RegexPatternStrings',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexPatternSet.RegexPatternSet.RegexPatternStrings', props);
    return resource.getResponseField('RegexPatternSet.RegexPatternStrings') as unknown as string[];
  }

}

export class WAFRegionalResponsesCreateRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRuleRequest) {
  }

  public get rule(): WAFRegionalResponsesCreateRuleRule {
    return new WAFRegionalResponsesCreateRuleRule(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRule.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRule.Rule.RuleId'),
        outputPath: 'Rule.RuleId',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.Rule.RuleId', props);
    return resource.getResponseField('Rule.RuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRule.Rule.Name'),
        outputPath: 'Rule.Name',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.Rule.Name', props);
    return resource.getResponseField('Rule.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.Rule.MetricName', props);
    return resource.getResponseField('Rule.MetricName') as unknown as string;
  }

  public get predicates(): shapes.WafRegionalPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRule.Rule.Predicates'),
        outputPath: 'Rule.Predicates',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRule.Rule.Predicates', props);
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafRegionalPredicate[];
  }

}

export class WAFRegionalResponsesCreateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRuleGroupRequest) {
  }

  public get ruleGroup(): WAFRegionalResponsesCreateRuleGroupRuleGroup {
    return new WAFRegionalResponsesCreateRuleGroupRuleGroup(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRuleGroup.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateRuleGroupRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateRuleGroupRequest) {
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRuleGroup.RuleGroup.RuleGroupId'),
        outputPath: 'RuleGroup.RuleGroupId',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroup.RuleGroupId', props);
    return resource.getResponseField('RuleGroup.RuleGroupId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRuleGroup.RuleGroup.Name'),
        outputPath: 'RuleGroup.Name',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroup.Name', props);
    return resource.getResponseField('RuleGroup.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateRuleGroup.RuleGroup.MetricName'),
        outputPath: 'RuleGroup.MetricName',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRuleGroup.RuleGroup.MetricName', props);
    return resource.getResponseField('RuleGroup.MetricName') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateSizeConstraintSetRequest) {
  }

  public get sizeConstraintSet(): WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet {
    return new WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSizeConstraintSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateSizeConstraintSetRequest) {
  }

  public get sizeConstraintSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId'),
        outputPath: 'SizeConstraintSet.SizeConstraintSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraintSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSizeConstraintSet.SizeConstraintSet.Name'),
        outputPath: 'SizeConstraintSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSizeConstraintSet.SizeConstraintSet.Name', props);
    return resource.getResponseField('SizeConstraintSet.Name') as unknown as string;
  }

  public get sizeConstraints(): shapes.WafRegionalSizeConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints'),
        outputPath: 'SizeConstraintSet.SizeConstraints',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafRegionalSizeConstraint[];
  }

}

export class WAFRegionalResponsesCreateSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSet(): WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSqlInjectionMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.Name'),
        outputPath: 'SqlInjectionMatchSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.Name', props);
    return resource.getResponseField('SqlInjectionMatchSet.Name') as unknown as string;
  }

  public get sqlInjectionMatchTuples(): shapes.WafRegionalSqlInjectionMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafRegionalSqlInjectionMatchTuple[];
  }

}

export class WAFRegionalResponsesCreateWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateWebAclRequest) {
  }

  public get webAcl(): WAFRegionalResponsesCreateWebAclWebAcl {
    return new WAFRegionalResponsesCreateWebAclWebAcl(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateWebAclWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateWebAclRequest) {
  }

  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.WebACL.WebACLId'),
        outputPath: 'WebACL.WebACLId',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.WebACL.WebACLId', props);
    return resource.getResponseField('WebACL.WebACLId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.WebACL.Name'),
        outputPath: 'WebACL.Name',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.WebACL.Name', props);
    return resource.getResponseField('WebACL.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.WebACL.MetricName'),
        outputPath: 'WebACL.MetricName',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.WebACL.MetricName', props);
    return resource.getResponseField('WebACL.MetricName') as unknown as string;
  }

  public get defaultAction(): WAFRegionalResponsesCreateWebAclWebAclDefaultAction {
    return new WAFRegionalResponsesCreateWebAclWebAclDefaultAction(this.__scope, this.__resources, this.__input);
  }

  public get rules(): shapes.WafRegionalActivatedRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.WebACL.Rules'),
        outputPath: 'WebACL.Rules',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.WafRegionalActivatedRule[];
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.WebACL.WebACLArn'),
        outputPath: 'WebACL.WebACLArn',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.WebACL.WebACLArn', props);
    return resource.getResponseField('WebACL.WebACLArn') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateWebAclWebAclDefaultAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateWebAclRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACL.WebACL.DefaultAction.Type'),
        outputPath: 'WebACL.DefaultAction.Type',
        parameters: {
          Name: this.__input.name,
          MetricName: this.__input.metricName,
          DefaultAction: {
            Type: this.__input.defaultAction.type,
          },
          ChangeToken: this.__input.changeToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACL.WebACL.DefaultAction.Type', props);
    return resource.getResponseField('WebACL.DefaultAction.Type') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateWebAclMigrationStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateWebAclMigrationStackRequest) {
  }

  public get s3ObjectUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAclMigrationStack',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateWebACLMigrationStack.S3ObjectUrl'),
        outputPath: 'S3ObjectUrl',
        parameters: {
          WebACLId: this.__input.webAclId,
          S3BucketName: this.__input.s3BucketName,
          IgnoreUnsupportedType: this.__input.ignoreUnsupportedType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWebACLMigrationStack.S3ObjectUrl', props);
    return resource.getResponseField('S3ObjectUrl') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateXssMatchSetRequest) {
  }

  public get xssMatchSet(): WAFRegionalResponsesCreateXssMatchSetXssMatchSet {
    return new WAFRegionalResponsesCreateXssMatchSetXssMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateXssMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesCreateXssMatchSetXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalCreateXssMatchSetRequest) {
  }

  public get xssMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateXssMatchSet.XssMatchSet.XssMatchSetId'),
        outputPath: 'XssMatchSet.XssMatchSetId',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateXssMatchSet.XssMatchSet.XssMatchSetId', props);
    return resource.getResponseField('XssMatchSet.XssMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateXssMatchSet.XssMatchSet.Name'),
        outputPath: 'XssMatchSet.Name',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateXssMatchSet.XssMatchSet.Name', props);
    return resource.getResponseField('XssMatchSet.Name') as unknown as string;
  }

  public get xssMatchTuples(): shapes.WafRegionalXssMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.CreateXssMatchSet.XssMatchSet.XssMatchTuples'),
        outputPath: 'XssMatchSet.XssMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafRegionalXssMatchTuple[];
  }

}

export class WAFRegionalResponsesDeleteByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteByteMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteByteMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteGeoMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteGeoMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteIpSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteIPSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          IPSetId: this.__input.ipSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteRateBasedRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteRateBasedRule.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RuleId: this.__input.ruleId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteRegexMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteRegexMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteRegexPatternSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteRegexPatternSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RegexPatternSetId: this.__input.regexPatternSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteRule.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RuleId: this.__input.ruleId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteRuleGroupRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteRuleGroup.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteSizeConstraintSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteSizeConstraintSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteSqlInjectionMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteSqlInjectionMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteWebAclRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteWebACL.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          WebACLId: this.__input.webAclId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesDeleteXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalDeleteXssMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.DeleteXssMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetByteMatchSetRequest) {
  }

  public get byteMatchSet(): WAFRegionalResponsesFetchByteMatchSetByteMatchSet {
    return new WAFRegionalResponsesFetchByteMatchSetByteMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchByteMatchSetByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetByteMatchSetRequest) {
  }

  public get byteMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetByteMatchSet.ByteMatchSet.ByteMatchSetId'),
        outputPath: 'ByteMatchSet.ByteMatchSetId',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetByteMatchSet.ByteMatchSet.ByteMatchSetId', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetByteMatchSet.ByteMatchSet.Name'),
        outputPath: 'ByteMatchSet.Name',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetByteMatchSet.ByteMatchSet.Name', props);
    return resource.getResponseField('ByteMatchSet.Name') as unknown as string;
  }

  public get byteMatchTuples(): shapes.WafRegionalByteMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetByteMatchSet.ByteMatchSet.ByteMatchTuples'),
        outputPath: 'ByteMatchSet.ByteMatchTuples',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafRegionalByteMatchTuple[];
  }

}

export class WAFRegionalResponsesFetchChangeToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChangeToken',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetChangeToken.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChangeToken.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchChangeTokenStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetChangeTokenStatusRequest) {
  }

  public get changeTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChangeTokenStatus',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetChangeTokenStatus.ChangeTokenStatus'),
        outputPath: 'ChangeTokenStatus',
        parameters: {
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChangeTokenStatus.ChangeTokenStatus', props);
    return resource.getResponseField('ChangeTokenStatus') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetGeoMatchSetRequest) {
  }

  public get geoMatchSet(): WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet {
    return new WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetGeoMatchSetRequest) {
  }

  public get geoMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetGeoMatchSet.GeoMatchSet.GeoMatchSetId'),
        outputPath: 'GeoMatchSet.GeoMatchSetId',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoMatchSet.GeoMatchSet.GeoMatchSetId', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetGeoMatchSet.GeoMatchSet.Name'),
        outputPath: 'GeoMatchSet.Name',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoMatchSet.GeoMatchSet.Name', props);
    return resource.getResponseField('GeoMatchSet.Name') as unknown as string;
  }

  public get geoMatchConstraints(): shapes.WafRegionalGeoMatchConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetGeoMatchSet.GeoMatchSet.GeoMatchConstraints'),
        outputPath: 'GeoMatchSet.GeoMatchConstraints',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafRegionalGeoMatchConstraint[];
  }

}

export class WAFRegionalResponsesFetchIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetIpSetRequest) {
  }

  public get ipSet(): WAFRegionalResponsesFetchIpSetIpSet {
    return new WAFRegionalResponsesFetchIpSetIpSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchIpSetIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetIpSetRequest) {
  }

  public get ipSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetIPSet.IPSet.IPSetId'),
        outputPath: 'IPSet.IPSetId',
        parameters: {
          IPSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.IPSetId', props);
    return resource.getResponseField('IPSet.IPSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetIPSet.IPSet.Name'),
        outputPath: 'IPSet.Name',
        parameters: {
          IPSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.Name', props);
    return resource.getResponseField('IPSet.Name') as unknown as string;
  }

  public get ipSetDescriptors(): shapes.WafRegionalIpSetDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetIPSet.IPSet.IPSetDescriptors'),
        outputPath: 'IPSet.IPSetDescriptors',
        parameters: {
          IPSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafRegionalIpSetDescriptor[];
  }

}

export class WAFRegionalResponsesFetchLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration {
    return new WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetLoggingConfigurationRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetLoggingConfiguration.LoggingConfiguration.ResourceArn'),
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
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as string[];
  }

  public get redactedFields(): shapes.WafRegionalFieldToMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetLoggingConfiguration.LoggingConfiguration.RedactedFields'),
        outputPath: 'LoggingConfiguration.RedactedFields',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafRegionalFieldToMatch[];
  }

}

export class WAFRegionalResponsesFetchPermissionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetPermissionPolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermissionPolicy',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetPermissionPolicy.Policy'),
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

export class WAFRegionalResponsesFetchRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRateBasedRuleRequest) {
  }

  public get rule(): WAFRegionalResponsesFetchRateBasedRuleRule {
    return new WAFRegionalResponsesFetchRateBasedRuleRule(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchRateBasedRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRateBasedRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRule.Rule.RuleId'),
        outputPath: 'Rule.RuleId',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.RuleId', props);
    return resource.getResponseField('Rule.RuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRule.Rule.Name'),
        outputPath: 'Rule.Name',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.Name', props);
    return resource.getResponseField('Rule.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.MetricName', props);
    return resource.getResponseField('Rule.MetricName') as unknown as string;
  }

  public get matchPredicates(): shapes.WafRegionalPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRule.Rule.MatchPredicates'),
        outputPath: 'Rule.MatchPredicates',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.MatchPredicates', props);
    return resource.getResponseField('Rule.MatchPredicates') as unknown as shapes.WafRegionalPredicate[];
  }

  public get rateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRule.Rule.RateKey'),
        outputPath: 'Rule.RateKey',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.RateKey', props);
    return resource.getResponseField('Rule.RateKey') as unknown as string;
  }

  public get rateLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRule.Rule.RateLimit'),
        outputPath: 'Rule.RateLimit',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.RateLimit', props);
    return resource.getResponseField('Rule.RateLimit') as unknown as number;
  }

}

export class WAFRegionalResponsesFetchRateBasedRuleManagedKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRateBasedRuleManagedKeysRequest) {
  }

  public get managedKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRuleManagedKeys',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRuleManagedKeys.ManagedKeys'),
        outputPath: 'ManagedKeys',
        parameters: {
          RuleId: this.__input.ruleId,
          NextMarker: this.__input.nextMarker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRuleManagedKeys.ManagedKeys', props);
    return resource.getResponseField('ManagedKeys') as unknown as string[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRuleManagedKeys',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRateBasedRuleManagedKeys.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          RuleId: this.__input.ruleId,
          NextMarker: this.__input.nextMarker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRuleManagedKeys.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRegexMatchSetRequest) {
  }

  public get regexMatchSet(): WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet {
    return new WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRegexMatchSetRequest) {
  }

  public get regexMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRegexMatchSet.RegexMatchSet.RegexMatchSetId'),
        outputPath: 'RegexMatchSet.RegexMatchSetId',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexMatchSet.RegexMatchSet.RegexMatchSetId', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRegexMatchSet.RegexMatchSet.Name'),
        outputPath: 'RegexMatchSet.Name',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexMatchSet.RegexMatchSet.Name', props);
    return resource.getResponseField('RegexMatchSet.Name') as unknown as string;
  }

  public get regexMatchTuples(): shapes.WafRegionalRegexMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRegexMatchSet.RegexMatchSet.RegexMatchTuples'),
        outputPath: 'RegexMatchSet.RegexMatchTuples',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegionalRegexMatchTuple[];
  }

}

export class WAFRegionalResponsesFetchRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRegexPatternSetRequest) {
  }

  public get regexPatternSet(): WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet {
    return new WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRegexPatternSetRequest) {
  }

  public get regexPatternSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRegexPatternSet.RegexPatternSet.RegexPatternSetId'),
        outputPath: 'RegexPatternSet.RegexPatternSetId',
        parameters: {
          RegexPatternSetId: this.__input.regexPatternSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.RegexPatternSetId', props);
    return resource.getResponseField('RegexPatternSet.RegexPatternSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRegexPatternSet.RegexPatternSet.Name'),
        outputPath: 'RegexPatternSet.Name',
        parameters: {
          RegexPatternSetId: this.__input.regexPatternSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.Name', props);
    return resource.getResponseField('RegexPatternSet.Name') as unknown as string;
  }

  public get regexPatternStrings(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRegexPatternSet.RegexPatternSet.RegexPatternStrings'),
        outputPath: 'RegexPatternSet.RegexPatternStrings',
        parameters: {
          RegexPatternSetId: this.__input.regexPatternSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexPatternSet.RegexPatternSet.RegexPatternStrings', props);
    return resource.getResponseField('RegexPatternSet.RegexPatternStrings') as unknown as string[];
  }

}

export class WAFRegionalResponsesFetchRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRuleRequest) {
  }

  public get rule(): WAFRegionalResponsesFetchRuleRule {
    return new WAFRegionalResponsesFetchRuleRule(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRule.Rule.RuleId'),
        outputPath: 'Rule.RuleId',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRule.Rule.RuleId', props);
    return resource.getResponseField('Rule.RuleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRule.Rule.Name'),
        outputPath: 'Rule.Name',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRule.Rule.Name', props);
    return resource.getResponseField('Rule.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRule.Rule.MetricName', props);
    return resource.getResponseField('Rule.MetricName') as unknown as string;
  }

  public get predicates(): shapes.WafRegionalPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRule.Rule.Predicates'),
        outputPath: 'Rule.Predicates',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRule.Rule.Predicates', props);
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafRegionalPredicate[];
  }

}

export class WAFRegionalResponsesFetchRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRuleGroupRequest) {
  }

  public get ruleGroup(): WAFRegionalResponsesFetchRuleGroupRuleGroup {
    return new WAFRegionalResponsesFetchRuleGroupRuleGroup(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchRuleGroupRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetRuleGroupRequest) {
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRuleGroup.RuleGroup.RuleGroupId'),
        outputPath: 'RuleGroup.RuleGroupId',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.RuleGroupId', props);
    return resource.getResponseField('RuleGroup.RuleGroupId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRuleGroup.RuleGroup.Name'),
        outputPath: 'RuleGroup.Name',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.Name', props);
    return resource.getResponseField('RuleGroup.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetRuleGroup.RuleGroup.MetricName'),
        outputPath: 'RuleGroup.MetricName',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRuleGroup.RuleGroup.MetricName', props);
    return resource.getResponseField('RuleGroup.MetricName') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchSampledRequests {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetSampledRequestsRequest) {
  }

  public get sampledRequests(): shapes.WafRegionalSampledHttpRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSampledRequests.SampledRequests'),
        outputPath: 'SampledRequests',
        parameters: {
          WebAclId: this.__input.webAclId,
          RuleId: this.__input.ruleId,
          TimeWindow: {
            StartTime: this.__input.timeWindow.startTime,
            EndTime: this.__input.timeWindow.endTime,
          },
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSampledRequests.SampledRequests', props);
    return resource.getResponseField('SampledRequests') as unknown as shapes.WafRegionalSampledHttpRequest[];
  }

  public get populationSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSampledRequests.PopulationSize'),
        outputPath: 'PopulationSize',
        parameters: {
          WebAclId: this.__input.webAclId,
          RuleId: this.__input.ruleId,
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

  public get timeWindow(): WAFRegionalResponsesFetchSampledRequestsTimeWindow {
    return new WAFRegionalResponsesFetchSampledRequestsTimeWindow(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchSampledRequestsTimeWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetSampledRequestsRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSampledRequests.TimeWindow.StartTime'),
        outputPath: 'TimeWindow.StartTime',
        parameters: {
          WebAclId: this.__input.webAclId,
          RuleId: this.__input.ruleId,
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
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSampledRequests.TimeWindow.EndTime'),
        outputPath: 'TimeWindow.EndTime',
        parameters: {
          WebAclId: this.__input.webAclId,
          RuleId: this.__input.ruleId,
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

export class WAFRegionalResponsesFetchSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetSizeConstraintSetRequest) {
  }

  public get sizeConstraintSet(): WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet {
    return new WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetSizeConstraintSetRequest) {
  }

  public get sizeConstraintSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId'),
        outputPath: 'SizeConstraintSet.SizeConstraintSetId',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraintSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSizeConstraintSet.SizeConstraintSet.Name'),
        outputPath: 'SizeConstraintSet.Name',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSizeConstraintSet.SizeConstraintSet.Name', props);
    return resource.getResponseField('SizeConstraintSet.Name') as unknown as string;
  }

  public get sizeConstraints(): shapes.WafRegionalSizeConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSizeConstraintSet.SizeConstraintSet.SizeConstraints'),
        outputPath: 'SizeConstraintSet.SizeConstraints',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafRegionalSizeConstraint[];
  }

}

export class WAFRegionalResponsesFetchSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSet(): WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchSetId',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name'),
        outputPath: 'SqlInjectionMatchSet.Name',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name', props);
    return resource.getResponseField('SqlInjectionMatchSet.Name') as unknown as string;
  }

  public get sqlInjectionMatchTuples(): shapes.WafRegionalSqlInjectionMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchTuples',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafRegionalSqlInjectionMatchTuple[];
  }

}

export class WAFRegionalResponsesFetchWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetWebAclRequest) {
  }

  public get webAcl(): WAFRegionalResponsesFetchWebAclWebAcl {
    return new WAFRegionalResponsesFetchWebAclWebAcl(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchWebAclWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetWebAclRequest) {
  }

  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACL.WebACL.WebACLId'),
        outputPath: 'WebACL.WebACLId',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.WebACLId', props);
    return resource.getResponseField('WebACL.WebACLId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACL.WebACL.Name'),
        outputPath: 'WebACL.Name',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Name', props);
    return resource.getResponseField('WebACL.Name') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACL.WebACL.MetricName'),
        outputPath: 'WebACL.MetricName',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.MetricName', props);
    return resource.getResponseField('WebACL.MetricName') as unknown as string;
  }

  public get defaultAction(): WAFRegionalResponsesFetchWebAclWebAclDefaultAction {
    return new WAFRegionalResponsesFetchWebAclWebAclDefaultAction(this.__scope, this.__resources, this.__input);
  }

  public get rules(): shapes.WafRegionalActivatedRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACL.WebACL.Rules'),
        outputPath: 'WebACL.Rules',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.WafRegionalActivatedRule[];
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACL.WebACL.WebACLArn'),
        outputPath: 'WebACL.WebACLArn',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.WebACLArn', props);
    return resource.getResponseField('WebACL.WebACLArn') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchWebAclWebAclDefaultAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetWebAclRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACL.WebACL.DefaultAction.Type'),
        outputPath: 'WebACL.DefaultAction.Type',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.DefaultAction.Type', props);
    return resource.getResponseField('WebACL.DefaultAction.Type') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchWebAclForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetWebAclForResourceRequest) {
  }

  public get webAclSummary(): WAFRegionalResponsesFetchWebAclForResourceWebAclSummary {
    return new WAFRegionalResponsesFetchWebAclForResourceWebAclSummary(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchWebAclForResourceWebAclSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetWebAclForResourceRequest) {
  }

  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACLForResource.WebACLSummary.WebACLId'),
        outputPath: 'WebACLSummary.WebACLId',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACLSummary.WebACLId', props);
    return resource.getResponseField('WebACLSummary.WebACLId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAclForResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetWebACLForResource.WebACLSummary.Name'),
        outputPath: 'WebACLSummary.Name',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACLForResource.WebACLSummary.Name', props);
    return resource.getResponseField('WebACLSummary.Name') as unknown as string;
  }

}

export class WAFRegionalResponsesFetchXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetXssMatchSetRequest) {
  }

  public get xssMatchSet(): WAFRegionalResponsesFetchXssMatchSetXssMatchSet {
    return new WAFRegionalResponsesFetchXssMatchSetXssMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesFetchXssMatchSetXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalGetXssMatchSetRequest) {
  }

  public get xssMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetXssMatchSet.XssMatchSet.XssMatchSetId'),
        outputPath: 'XssMatchSet.XssMatchSetId',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetXssMatchSet.XssMatchSet.XssMatchSetId', props);
    return resource.getResponseField('XssMatchSet.XssMatchSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetXssMatchSet.XssMatchSet.Name'),
        outputPath: 'XssMatchSet.Name',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetXssMatchSet.XssMatchSet.Name', props);
    return resource.getResponseField('XssMatchSet.Name') as unknown as string;
  }

  public get xssMatchTuples(): shapes.WafRegionalXssMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetXssMatchSet.XssMatchSet.XssMatchTuples'),
        outputPath: 'XssMatchSet.XssMatchTuples',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafRegionalXssMatchTuple[];
  }

}

export class WAFRegionalResponsesListActivatedRulesInRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListActivatedRulesInRuleGroupRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActivatedRulesInRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListActivatedRulesInRuleGroup.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActivatedRulesInRuleGroup.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get activatedRules(): shapes.WafRegionalActivatedRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActivatedRulesInRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListActivatedRulesInRuleGroup.ActivatedRules'),
        outputPath: 'ActivatedRules',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActivatedRulesInRuleGroup.ActivatedRules', props);
    return resource.getResponseField('ActivatedRules') as unknown as shapes.WafRegionalActivatedRule[];
  }

}

export class WAFRegionalResponsesListByteMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListByteMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listByteMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListByteMatchSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListByteMatchSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get byteMatchSets(): shapes.WafRegionalByteMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listByteMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListByteMatchSets.ByteMatchSets'),
        outputPath: 'ByteMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListByteMatchSets.ByteMatchSets', props);
    return resource.getResponseField('ByteMatchSets') as unknown as shapes.WafRegionalByteMatchSetSummary[];
  }

}

export class WAFRegionalResponsesListGeoMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListGeoMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListGeoMatchSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoMatchSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get geoMatchSets(): shapes.WafRegionalGeoMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListGeoMatchSets.GeoMatchSets'),
        outputPath: 'GeoMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoMatchSets.GeoMatchSets', props);
    return resource.getResponseField('GeoMatchSets') as unknown as shapes.WafRegionalGeoMatchSetSummary[];
  }

}

export class WAFRegionalResponsesListIpSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListIpSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListIPSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get ipSets(): shapes.WafRegionalIpSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListIPSets.IPSets'),
        outputPath: 'IPSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.IPSets', props);
    return resource.getResponseField('IPSets') as unknown as shapes.WafRegionalIpSetSummary[];
  }

}

export class WAFRegionalResponsesListLoggingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListLoggingConfigurationsRequest) {
  }

  public get loggingConfigurations(): shapes.WafRegionalLoggingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggingConfigurations',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListLoggingConfigurations.LoggingConfigurations'),
        outputPath: 'LoggingConfigurations',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggingConfigurations.LoggingConfigurations', props);
    return resource.getResponseField('LoggingConfigurations') as unknown as shapes.WafRegionalLoggingConfiguration[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggingConfigurations',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListLoggingConfigurations.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggingConfigurations.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFRegionalResponsesListRateBasedRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListRateBasedRulesRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRateBasedRules',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRateBasedRules.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRateBasedRules.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get rules(): shapes.WafRegionalRuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRateBasedRules',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRateBasedRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRateBasedRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRegionalRuleSummary[];
  }

}

export class WAFRegionalResponsesListRegexMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListRegexMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRegexMatchSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexMatchSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get regexMatchSets(): shapes.WafRegionalRegexMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRegexMatchSets.RegexMatchSets'),
        outputPath: 'RegexMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexMatchSets.RegexMatchSets', props);
    return resource.getResponseField('RegexMatchSets') as unknown as shapes.WafRegionalRegexMatchSetSummary[];
  }

}

export class WAFRegionalResponsesListRegexPatternSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListRegexPatternSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexPatternSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRegexPatternSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexPatternSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get regexPatternSets(): shapes.WafRegionalRegexPatternSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexPatternSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRegexPatternSets.RegexPatternSets'),
        outputPath: 'RegexPatternSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexPatternSets.RegexPatternSets', props);
    return resource.getResponseField('RegexPatternSets') as unknown as shapes.WafRegionalRegexPatternSetSummary[];
  }

}

export class WAFRegionalResponsesListResourcesForWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListResourcesForWebAclRequest) {
  }

  public get resourceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesForWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListResourcesForWebACL.ResourceArns'),
        outputPath: 'ResourceArns',
        parameters: {
          WebACLId: this.__input.webAclId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourcesForWebACL.ResourceArns', props);
    return resource.getResponseField('ResourceArns') as unknown as string[];
  }

}

export class WAFRegionalResponsesListRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListRuleGroupsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRuleGroups.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get ruleGroups(): shapes.WafRegionalRuleGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRuleGroups.RuleGroups'),
        outputPath: 'RuleGroups',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafRegionalRuleGroupSummary[];
  }

}

export class WAFRegionalResponsesListRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListRulesRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRules.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get rules(): shapes.WafRegionalRuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRegionalRuleSummary[];
  }

}

export class WAFRegionalResponsesListSizeConstraintSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListSizeConstraintSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSizeConstraintSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListSizeConstraintSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSizeConstraintSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get sizeConstraintSets(): shapes.WafRegionalSizeConstraintSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSizeConstraintSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListSizeConstraintSets.SizeConstraintSets'),
        outputPath: 'SizeConstraintSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSizeConstraintSets.SizeConstraintSets', props);
    return resource.getResponseField('SizeConstraintSets') as unknown as shapes.WafRegionalSizeConstraintSetSummary[];
  }

}

export class WAFRegionalResponsesListSqlInjectionMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListSqlInjectionMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSqlInjectionMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListSqlInjectionMatchSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSqlInjectionMatchSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get sqlInjectionMatchSets(): shapes.WafRegionalSqlInjectionMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSqlInjectionMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListSqlInjectionMatchSets.SqlInjectionMatchSets'),
        outputPath: 'SqlInjectionMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSqlInjectionMatchSets.SqlInjectionMatchSets', props);
    return resource.getResponseField('SqlInjectionMatchSets') as unknown as shapes.WafRegionalSqlInjectionMatchSetSummary[];
  }

}

export class WAFRegionalResponsesListSubscribedRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListSubscribedRuleGroupsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscribedRuleGroups',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListSubscribedRuleGroups.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscribedRuleGroups.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get ruleGroups(): shapes.WafRegionalSubscribedRuleGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscribedRuleGroups',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListSubscribedRuleGroups.RuleGroups'),
        outputPath: 'RuleGroups',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscribedRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafRegionalSubscribedRuleGroupSummary[];
  }

}

export class WAFRegionalResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListTagsForResourceRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListTagsForResource.NextMarker'),
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

  public get tagInfoForResource(): WAFRegionalResponsesListTagsForResourceTagInfoForResource {
    return new WAFRegionalResponsesListTagsForResourceTagInfoForResource(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesListTagsForResourceTagInfoForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListTagsForResourceRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListTagsForResource.TagInfoForResource.ResourceARN'),
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

  public get tagList(): shapes.WafRegionalTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListTagsForResource.TagInfoForResource.TagList'),
        outputPath: 'TagInfoForResource.TagList',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagInfoForResource.TagList', props);
    return resource.getResponseField('TagInfoForResource.TagList') as unknown as shapes.WafRegionalTag[];
  }

}

export class WAFRegionalResponsesListWebAcLs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListWebAcLsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebAcLs',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListWebACLs.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebACLs.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get webAcLs(): shapes.WafRegionalWebAclSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebAcLs',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListWebACLs.WebACLs'),
        outputPath: 'WebACLs',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebACLs.WebACLs', props);
    return resource.getResponseField('WebACLs') as unknown as shapes.WafRegionalWebAclSummary[];
  }

}

export class WAFRegionalResponsesListXssMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalListXssMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listXssMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListXssMatchSets.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListXssMatchSets.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get xssMatchSets(): shapes.WafRegionalXssMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listXssMatchSets',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.ListXssMatchSets.XssMatchSets'),
        outputPath: 'XssMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListXssMatchSets.XssMatchSets', props);
    return resource.getResponseField('XssMatchSets') as unknown as shapes.WafRegionalXssMatchSetSummary[];
  }

}

export class WAFRegionalResponsesPutLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalPutLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration {
    return new WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalPutLoggingConfigurationRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.PutLoggingConfiguration.LoggingConfiguration.ResourceArn'),
        outputPath: 'LoggingConfiguration.ResourceArn',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
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
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as string[];
  }

  public get redactedFields(): shapes.WafRegionalFieldToMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.PutLoggingConfiguration.LoggingConfiguration.RedactedFields'),
        outputPath: 'LoggingConfiguration.RedactedFields',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.__input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.__input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.__input.loggingConfiguration.redactedFields,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafRegionalFieldToMatch[];
  }

}

export class WAFRegionalResponsesUpdateByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateByteMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateByteMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateByteMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateGeoMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGeoMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateGeoMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateIpSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIpSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateIPSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          IPSetId: this.__input.ipSetId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateRateBasedRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRateBasedRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateRateBasedRule.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RuleId: this.__input.ruleId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
          RateLimit: this.__input.rateLimit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateRegexMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegexMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateRegexMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
          Updates: this.__input.updates,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateRegexPatternSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegexPatternSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateRegexPatternSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RegexPatternSetId: this.__input.regexPatternSetId,
          Updates: this.__input.updates,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRule',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateRule.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RuleId: this.__input.ruleId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateRuleGroupRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateRuleGroup.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
          Updates: this.__input.updates,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateSizeConstraintSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSizeConstraintSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateSizeConstraintSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateSqlInjectionMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSqlInjectionMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateSqlInjectionMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateWebAclRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebAcl',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateWebACL.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          WebACLId: this.__input.webAclId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
          DefaultAction: {
            Type: this.__input.defaultAction?.type,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalResponsesUpdateXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafRegionalUpdateXssMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateXssMatchSet',
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.UpdateXssMatchSet.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
          ChangeToken: this.__input.changeToken,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

