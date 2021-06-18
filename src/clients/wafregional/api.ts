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

  public createByteMatchSet(input: shapes.WafRegionalCreateByteMatchSetRequest): WAFRegionalCreateByteMatchSet {
    return new WAFRegionalCreateByteMatchSet(this, 'CreateByteMatchSet', this.__resources, input);
  }

  public createGeoMatchSet(input: shapes.WafRegionalCreateGeoMatchSetRequest): WAFRegionalCreateGeoMatchSet {
    return new WAFRegionalCreateGeoMatchSet(this, 'CreateGeoMatchSet', this.__resources, input);
  }

  public createIpSet(input: shapes.WafRegionalCreateIpSetRequest): WAFRegionalCreateIpSet {
    return new WAFRegionalCreateIpSet(this, 'CreateIpSet', this.__resources, input);
  }

  public createRateBasedRule(input: shapes.WafRegionalCreateRateBasedRuleRequest): WAFRegionalCreateRateBasedRule {
    return new WAFRegionalCreateRateBasedRule(this, 'CreateRateBasedRule', this.__resources, input);
  }

  public createRegexMatchSet(input: shapes.WafRegionalCreateRegexMatchSetRequest): WAFRegionalCreateRegexMatchSet {
    return new WAFRegionalCreateRegexMatchSet(this, 'CreateRegexMatchSet', this.__resources, input);
  }

  public createRegexPatternSet(input: shapes.WafRegionalCreateRegexPatternSetRequest): WAFRegionalCreateRegexPatternSet {
    return new WAFRegionalCreateRegexPatternSet(this, 'CreateRegexPatternSet', this.__resources, input);
  }

  public createRule(input: shapes.WafRegionalCreateRuleRequest): WAFRegionalCreateRule {
    return new WAFRegionalCreateRule(this, 'CreateRule', this.__resources, input);
  }

  public createRuleGroup(input: shapes.WafRegionalCreateRuleGroupRequest): WAFRegionalCreateRuleGroup {
    return new WAFRegionalCreateRuleGroup(this, 'CreateRuleGroup', this.__resources, input);
  }

  public createSizeConstraintSet(input: shapes.WafRegionalCreateSizeConstraintSetRequest): WAFRegionalCreateSizeConstraintSet {
    return new WAFRegionalCreateSizeConstraintSet(this, 'CreateSizeConstraintSet', this.__resources, input);
  }

  public createSqlInjectionMatchSet(input: shapes.WafRegionalCreateSqlInjectionMatchSetRequest): WAFRegionalCreateSqlInjectionMatchSet {
    return new WAFRegionalCreateSqlInjectionMatchSet(this, 'CreateSqlInjectionMatchSet', this.__resources, input);
  }

  public createWebAcl(input: shapes.WafRegionalCreateWebAclRequest): WAFRegionalCreateWebAcl {
    return new WAFRegionalCreateWebAcl(this, 'CreateWebAcl', this.__resources, input);
  }

  public createWebAclMigrationStack(input: shapes.WafRegionalCreateWebAclMigrationStackRequest): WAFRegionalCreateWebAclMigrationStack {
    return new WAFRegionalCreateWebAclMigrationStack(this, 'CreateWebAclMigrationStack', this.__resources, input);
  }

  public createXssMatchSet(input: shapes.WafRegionalCreateXssMatchSetRequest): WAFRegionalCreateXssMatchSet {
    return new WAFRegionalCreateXssMatchSet(this, 'CreateXssMatchSet', this.__resources, input);
  }

  public deleteByteMatchSet(input: shapes.WafRegionalDeleteByteMatchSetRequest): WAFRegionalDeleteByteMatchSet {
    return new WAFRegionalDeleteByteMatchSet(this, 'DeleteByteMatchSet', this.__resources, input);
  }

  public deleteGeoMatchSet(input: shapes.WafRegionalDeleteGeoMatchSetRequest): WAFRegionalDeleteGeoMatchSet {
    return new WAFRegionalDeleteGeoMatchSet(this, 'DeleteGeoMatchSet', this.__resources, input);
  }

  public deleteIpSet(input: shapes.WafRegionalDeleteIpSetRequest): WAFRegionalDeleteIpSet {
    return new WAFRegionalDeleteIpSet(this, 'DeleteIpSet', this.__resources, input);
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

  public deleteRateBasedRule(input: shapes.WafRegionalDeleteRateBasedRuleRequest): WAFRegionalDeleteRateBasedRule {
    return new WAFRegionalDeleteRateBasedRule(this, 'DeleteRateBasedRule', this.__resources, input);
  }

  public deleteRegexMatchSet(input: shapes.WafRegionalDeleteRegexMatchSetRequest): WAFRegionalDeleteRegexMatchSet {
    return new WAFRegionalDeleteRegexMatchSet(this, 'DeleteRegexMatchSet', this.__resources, input);
  }

  public deleteRegexPatternSet(input: shapes.WafRegionalDeleteRegexPatternSetRequest): WAFRegionalDeleteRegexPatternSet {
    return new WAFRegionalDeleteRegexPatternSet(this, 'DeleteRegexPatternSet', this.__resources, input);
  }

  public deleteRule(input: shapes.WafRegionalDeleteRuleRequest): WAFRegionalDeleteRule {
    return new WAFRegionalDeleteRule(this, 'DeleteRule', this.__resources, input);
  }

  public deleteRuleGroup(input: shapes.WafRegionalDeleteRuleGroupRequest): WAFRegionalDeleteRuleGroup {
    return new WAFRegionalDeleteRuleGroup(this, 'DeleteRuleGroup', this.__resources, input);
  }

  public deleteSizeConstraintSet(input: shapes.WafRegionalDeleteSizeConstraintSetRequest): WAFRegionalDeleteSizeConstraintSet {
    return new WAFRegionalDeleteSizeConstraintSet(this, 'DeleteSizeConstraintSet', this.__resources, input);
  }

  public deleteSqlInjectionMatchSet(input: shapes.WafRegionalDeleteSqlInjectionMatchSetRequest): WAFRegionalDeleteSqlInjectionMatchSet {
    return new WAFRegionalDeleteSqlInjectionMatchSet(this, 'DeleteSqlInjectionMatchSet', this.__resources, input);
  }

  public deleteWebAcl(input: shapes.WafRegionalDeleteWebAclRequest): WAFRegionalDeleteWebAcl {
    return new WAFRegionalDeleteWebAcl(this, 'DeleteWebAcl', this.__resources, input);
  }

  public deleteXssMatchSet(input: shapes.WafRegionalDeleteXssMatchSetRequest): WAFRegionalDeleteXssMatchSet {
    return new WAFRegionalDeleteXssMatchSet(this, 'DeleteXssMatchSet', this.__resources, input);
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

  public fetchByteMatchSet(input: shapes.WafRegionalGetByteMatchSetRequest): WAFRegionalFetchByteMatchSet {
    return new WAFRegionalFetchByteMatchSet(this, 'FetchByteMatchSet', this.__resources, input);
  }

  public fetchChangeToken(): WAFRegionalFetchChangeToken {
    return new WAFRegionalFetchChangeToken(this, 'FetchChangeToken', this.__resources);
  }

  public fetchChangeTokenStatus(input: shapes.WafRegionalGetChangeTokenStatusRequest): WAFRegionalFetchChangeTokenStatus {
    return new WAFRegionalFetchChangeTokenStatus(this, 'FetchChangeTokenStatus', this.__resources, input);
  }

  public fetchGeoMatchSet(input: shapes.WafRegionalGetGeoMatchSetRequest): WAFRegionalFetchGeoMatchSet {
    return new WAFRegionalFetchGeoMatchSet(this, 'FetchGeoMatchSet', this.__resources, input);
  }

  public fetchIpSet(input: shapes.WafRegionalGetIpSetRequest): WAFRegionalFetchIpSet {
    return new WAFRegionalFetchIpSet(this, 'FetchIpSet', this.__resources, input);
  }

  public fetchLoggingConfiguration(input: shapes.WafRegionalGetLoggingConfigurationRequest): WAFRegionalFetchLoggingConfiguration {
    return new WAFRegionalFetchLoggingConfiguration(this, 'FetchLoggingConfiguration', this.__resources, input);
  }

  public fetchPermissionPolicy(input: shapes.WafRegionalGetPermissionPolicyRequest): WAFRegionalFetchPermissionPolicy {
    return new WAFRegionalFetchPermissionPolicy(this, 'FetchPermissionPolicy', this.__resources, input);
  }

  public fetchRateBasedRule(input: shapes.WafRegionalGetRateBasedRuleRequest): WAFRegionalFetchRateBasedRule {
    return new WAFRegionalFetchRateBasedRule(this, 'FetchRateBasedRule', this.__resources, input);
  }

  public fetchRateBasedRuleManagedKeys(input: shapes.WafRegionalGetRateBasedRuleManagedKeysRequest): WAFRegionalFetchRateBasedRuleManagedKeys {
    return new WAFRegionalFetchRateBasedRuleManagedKeys(this, 'FetchRateBasedRuleManagedKeys', this.__resources, input);
  }

  public fetchRegexMatchSet(input: shapes.WafRegionalGetRegexMatchSetRequest): WAFRegionalFetchRegexMatchSet {
    return new WAFRegionalFetchRegexMatchSet(this, 'FetchRegexMatchSet', this.__resources, input);
  }

  public fetchRegexPatternSet(input: shapes.WafRegionalGetRegexPatternSetRequest): WAFRegionalFetchRegexPatternSet {
    return new WAFRegionalFetchRegexPatternSet(this, 'FetchRegexPatternSet', this.__resources, input);
  }

  public fetchRule(input: shapes.WafRegionalGetRuleRequest): WAFRegionalFetchRule {
    return new WAFRegionalFetchRule(this, 'FetchRule', this.__resources, input);
  }

  public fetchRuleGroup(input: shapes.WafRegionalGetRuleGroupRequest): WAFRegionalFetchRuleGroup {
    return new WAFRegionalFetchRuleGroup(this, 'FetchRuleGroup', this.__resources, input);
  }

  public fetchSampledRequests(input: shapes.WafRegionalGetSampledRequestsRequest): WAFRegionalFetchSampledRequests {
    return new WAFRegionalFetchSampledRequests(this, 'FetchSampledRequests', this.__resources, input);
  }

  public fetchSizeConstraintSet(input: shapes.WafRegionalGetSizeConstraintSetRequest): WAFRegionalFetchSizeConstraintSet {
    return new WAFRegionalFetchSizeConstraintSet(this, 'FetchSizeConstraintSet', this.__resources, input);
  }

  public fetchSqlInjectionMatchSet(input: shapes.WafRegionalGetSqlInjectionMatchSetRequest): WAFRegionalFetchSqlInjectionMatchSet {
    return new WAFRegionalFetchSqlInjectionMatchSet(this, 'FetchSqlInjectionMatchSet', this.__resources, input);
  }

  public fetchWebAcl(input: shapes.WafRegionalGetWebAclRequest): WAFRegionalFetchWebAcl {
    return new WAFRegionalFetchWebAcl(this, 'FetchWebAcl', this.__resources, input);
  }

  public fetchWebAclForResource(input: shapes.WafRegionalGetWebAclForResourceRequest): WAFRegionalFetchWebAclForResource {
    return new WAFRegionalFetchWebAclForResource(this, 'FetchWebAclForResource', this.__resources, input);
  }

  public fetchXssMatchSet(input: shapes.WafRegionalGetXssMatchSetRequest): WAFRegionalFetchXssMatchSet {
    return new WAFRegionalFetchXssMatchSet(this, 'FetchXssMatchSet', this.__resources, input);
  }

  public listActivatedRulesInRuleGroup(input: shapes.WafRegionalListActivatedRulesInRuleGroupRequest): WAFRegionalListActivatedRulesInRuleGroup {
    return new WAFRegionalListActivatedRulesInRuleGroup(this, 'ListActivatedRulesInRuleGroup', this.__resources, input);
  }

  public listByteMatchSets(input: shapes.WafRegionalListByteMatchSetsRequest): WAFRegionalListByteMatchSets {
    return new WAFRegionalListByteMatchSets(this, 'ListByteMatchSets', this.__resources, input);
  }

  public listGeoMatchSets(input: shapes.WafRegionalListGeoMatchSetsRequest): WAFRegionalListGeoMatchSets {
    return new WAFRegionalListGeoMatchSets(this, 'ListGeoMatchSets', this.__resources, input);
  }

  public listIpSets(input: shapes.WafRegionalListIpSetsRequest): WAFRegionalListIpSets {
    return new WAFRegionalListIpSets(this, 'ListIpSets', this.__resources, input);
  }

  public listLoggingConfigurations(input: shapes.WafRegionalListLoggingConfigurationsRequest): WAFRegionalListLoggingConfigurations {
    return new WAFRegionalListLoggingConfigurations(this, 'ListLoggingConfigurations', this.__resources, input);
  }

  public listRateBasedRules(input: shapes.WafRegionalListRateBasedRulesRequest): WAFRegionalListRateBasedRules {
    return new WAFRegionalListRateBasedRules(this, 'ListRateBasedRules', this.__resources, input);
  }

  public listRegexMatchSets(input: shapes.WafRegionalListRegexMatchSetsRequest): WAFRegionalListRegexMatchSets {
    return new WAFRegionalListRegexMatchSets(this, 'ListRegexMatchSets', this.__resources, input);
  }

  public listRegexPatternSets(input: shapes.WafRegionalListRegexPatternSetsRequest): WAFRegionalListRegexPatternSets {
    return new WAFRegionalListRegexPatternSets(this, 'ListRegexPatternSets', this.__resources, input);
  }

  public listResourcesForWebAcl(input: shapes.WafRegionalListResourcesForWebAclRequest): WAFRegionalListResourcesForWebAcl {
    return new WAFRegionalListResourcesForWebAcl(this, 'ListResourcesForWebAcl', this.__resources, input);
  }

  public listRuleGroups(input: shapes.WafRegionalListRuleGroupsRequest): WAFRegionalListRuleGroups {
    return new WAFRegionalListRuleGroups(this, 'ListRuleGroups', this.__resources, input);
  }

  public listRules(input: shapes.WafRegionalListRulesRequest): WAFRegionalListRules {
    return new WAFRegionalListRules(this, 'ListRules', this.__resources, input);
  }

  public listSizeConstraintSets(input: shapes.WafRegionalListSizeConstraintSetsRequest): WAFRegionalListSizeConstraintSets {
    return new WAFRegionalListSizeConstraintSets(this, 'ListSizeConstraintSets', this.__resources, input);
  }

  public listSqlInjectionMatchSets(input: shapes.WafRegionalListSqlInjectionMatchSetsRequest): WAFRegionalListSqlInjectionMatchSets {
    return new WAFRegionalListSqlInjectionMatchSets(this, 'ListSqlInjectionMatchSets', this.__resources, input);
  }

  public listSubscribedRuleGroups(input: shapes.WafRegionalListSubscribedRuleGroupsRequest): WAFRegionalListSubscribedRuleGroups {
    return new WAFRegionalListSubscribedRuleGroups(this, 'ListSubscribedRuleGroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.WafRegionalListTagsForResourceRequest): WAFRegionalListTagsForResource {
    return new WAFRegionalListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWebAcLs(input: shapes.WafRegionalListWebAcLsRequest): WAFRegionalListWebAcLs {
    return new WAFRegionalListWebAcLs(this, 'ListWebAcLs', this.__resources, input);
  }

  public listXssMatchSets(input: shapes.WafRegionalListXssMatchSetsRequest): WAFRegionalListXssMatchSets {
    return new WAFRegionalListXssMatchSets(this, 'ListXssMatchSets', this.__resources, input);
  }

  public putLoggingConfiguration(input: shapes.WafRegionalPutLoggingConfigurationRequest): WAFRegionalPutLoggingConfiguration {
    return new WAFRegionalPutLoggingConfiguration(this, 'PutLoggingConfiguration', this.__resources, input);
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

  public updateByteMatchSet(input: shapes.WafRegionalUpdateByteMatchSetRequest): WAFRegionalUpdateByteMatchSet {
    return new WAFRegionalUpdateByteMatchSet(this, 'UpdateByteMatchSet', this.__resources, input);
  }

  public updateGeoMatchSet(input: shapes.WafRegionalUpdateGeoMatchSetRequest): WAFRegionalUpdateGeoMatchSet {
    return new WAFRegionalUpdateGeoMatchSet(this, 'UpdateGeoMatchSet', this.__resources, input);
  }

  public updateIpSet(input: shapes.WafRegionalUpdateIpSetRequest): WAFRegionalUpdateIpSet {
    return new WAFRegionalUpdateIpSet(this, 'UpdateIpSet', this.__resources, input);
  }

  public updateRateBasedRule(input: shapes.WafRegionalUpdateRateBasedRuleRequest): WAFRegionalUpdateRateBasedRule {
    return new WAFRegionalUpdateRateBasedRule(this, 'UpdateRateBasedRule', this.__resources, input);
  }

  public updateRegexMatchSet(input: shapes.WafRegionalUpdateRegexMatchSetRequest): WAFRegionalUpdateRegexMatchSet {
    return new WAFRegionalUpdateRegexMatchSet(this, 'UpdateRegexMatchSet', this.__resources, input);
  }

  public updateRegexPatternSet(input: shapes.WafRegionalUpdateRegexPatternSetRequest): WAFRegionalUpdateRegexPatternSet {
    return new WAFRegionalUpdateRegexPatternSet(this, 'UpdateRegexPatternSet', this.__resources, input);
  }

  public updateRule(input: shapes.WafRegionalUpdateRuleRequest): WAFRegionalUpdateRule {
    return new WAFRegionalUpdateRule(this, 'UpdateRule', this.__resources, input);
  }

  public updateRuleGroup(input: shapes.WafRegionalUpdateRuleGroupRequest): WAFRegionalUpdateRuleGroup {
    return new WAFRegionalUpdateRuleGroup(this, 'UpdateRuleGroup', this.__resources, input);
  }

  public updateSizeConstraintSet(input: shapes.WafRegionalUpdateSizeConstraintSetRequest): WAFRegionalUpdateSizeConstraintSet {
    return new WAFRegionalUpdateSizeConstraintSet(this, 'UpdateSizeConstraintSet', this.__resources, input);
  }

  public updateSqlInjectionMatchSet(input: shapes.WafRegionalUpdateSqlInjectionMatchSetRequest): WAFRegionalUpdateSqlInjectionMatchSet {
    return new WAFRegionalUpdateSqlInjectionMatchSet(this, 'UpdateSqlInjectionMatchSet', this.__resources, input);
  }

  public updateWebAcl(input: shapes.WafRegionalUpdateWebAclRequest): WAFRegionalUpdateWebAcl {
    return new WAFRegionalUpdateWebAcl(this, 'UpdateWebAcl', this.__resources, input);
  }

  public updateXssMatchSet(input: shapes.WafRegionalUpdateXssMatchSetRequest): WAFRegionalUpdateXssMatchSet {
    return new WAFRegionalUpdateXssMatchSet(this, 'UpdateXssMatchSet', this.__resources, input);
  }

}

export class WAFRegionalCreateByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateByteMatchSetRequest) {
    super(scope, id);
  }

  public get byteMatchSet(): WAFRegionalCreateByteMatchSetByteMatchSet {
    return new WAFRegionalCreateByteMatchSetByteMatchSet(this, 'ByteMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateByteMatchSetByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateByteMatchSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateByteMatchSet.ByteMatchSet.ByteMatchSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateByteMatchSet.ByteMatchSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafRegionalByteMatchTuple[];
  }

}

export class WAFRegionalCreateGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateGeoMatchSetRequest) {
    super(scope, id);
  }

  public get geoMatchSet(): WAFRegionalCreateGeoMatchSetGeoMatchSet {
    return new WAFRegionalCreateGeoMatchSetGeoMatchSet(this, 'GeoMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateGeoMatchSetGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateGeoMatchSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGeoMatchSet.GeoMatchSet.GeoMatchSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGeoMatchSet.GeoMatchSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafRegionalGeoMatchConstraint[];
  }

}

export class WAFRegionalCreateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateIpSetRequest) {
    super(scope, id);
  }

  public get ipSet(): WAFRegionalCreateIpSetIpSet {
    return new WAFRegionalCreateIpSetIpSet(this, 'IpSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateIpSetIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateIpSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.IPSet.IPSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.IPSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafRegionalIpSetDescriptor[];
  }

}

export class WAFRegionalCreateRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRateBasedRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFRegionalCreateRateBasedRuleRule {
    return new WAFRegionalCreateRateBasedRuleRule(this, 'Rule', this.__resources, this.input);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateRateBasedRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRateBasedRuleRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.Rule.RuleId', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.Rule.Name', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.Rule.MetricName', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.Rule.MatchPredicates', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.Rule.RateKey', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          RateKey: this.input.rateKey,
          RateLimit: this.input.rateLimit,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRateBasedRule.Rule.RateLimit', props);
    return resource.getResponseField('Rule.RateLimit') as unknown as number;
  }

}

export class WAFRegionalCreateRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRegexMatchSetRequest) {
    super(scope, id);
  }

  public get regexMatchSet(): WAFRegionalCreateRegexMatchSetRegexMatchSet {
    return new WAFRegionalCreateRegexMatchSetRegexMatchSet(this, 'RegexMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateRegexMatchSetRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRegexMatchSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexMatchSet.RegexMatchSet.RegexMatchSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexMatchSet.RegexMatchSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegionalRegexMatchTuple[];
  }

}

export class WAFRegionalCreateRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRegexPatternSetRequest) {
    super(scope, id);
  }

  public get regexPatternSet(): WAFRegionalCreateRegexPatternSetRegexPatternSet {
    return new WAFRegionalCreateRegexPatternSetRegexPatternSet(this, 'RegexPatternSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateRegexPatternSetRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRegexPatternSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.RegexPatternSet.RegexPatternSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.RegexPatternSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.RegexPatternSet.RegexPatternStrings', props);
    return resource.getResponseField('RegexPatternSet.RegexPatternStrings') as unknown as string[];
  }

}

export class WAFRegionalCreateRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFRegionalCreateRuleRule {
    return new WAFRegionalCreateRuleRule(this, 'Rule', this.__resources, this.input);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRuleRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.Rule.RuleId', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.Rule.Name', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.Rule.MetricName', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRule.Rule.Predicates', props);
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafRegionalPredicate[];
  }

}

export class WAFRegionalCreateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroup(): WAFRegionalCreateRuleGroupRuleGroup {
    return new WAFRegionalCreateRuleGroupRuleGroup(this, 'RuleGroup', this.__resources, this.input);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateRuleGroupRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateRuleGroupRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroup.RuleGroupId', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroup.Name', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRuleGroup.RuleGroup.MetricName', props);
    return resource.getResponseField('RuleGroup.MetricName') as unknown as string;
  }

}

export class WAFRegionalCreateSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateSizeConstraintSetRequest) {
    super(scope, id);
  }

  public get sizeConstraintSet(): WAFRegionalCreateSizeConstraintSetSizeConstraintSet {
    return new WAFRegionalCreateSizeConstraintSetSizeConstraintSet(this, 'SizeConstraintSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateSizeConstraintSetSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateSizeConstraintSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSizeConstraintSet.SizeConstraintSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafRegionalSizeConstraint[];
  }

}

export class WAFRegionalCreateSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateSqlInjectionMatchSetRequest) {
    super(scope, id);
  }

  public get sqlInjectionMatchSet(): WAFRegionalCreateSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFRegionalCreateSqlInjectionMatchSetSqlInjectionMatchSet(this, 'SqlInjectionMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateSqlInjectionMatchSetSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateSqlInjectionMatchSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafRegionalSqlInjectionMatchTuple[];
  }

}

export class WAFRegionalCreateWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateWebAclRequest) {
    super(scope, id);
  }

  public get webAcl(): WAFRegionalCreateWebAclWebAcl {
    return new WAFRegionalCreateWebAclWebAcl(this, 'WebAcl', this.__resources, this.input);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateWebAclWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateWebAclRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.WebACL.WebACLId', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.WebACL.Name', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.WebACL.MetricName', props);
    return resource.getResponseField('WebACL.MetricName') as unknown as string;
  }

  public get defaultAction(): WAFRegionalCreateWebAclWebAclDefaultAction {
    return new WAFRegionalCreateWebAclWebAclDefaultAction(this, 'DefaultAction', this.__resources, this.input);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.WebACL.Rules', props);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.WebACL.WebACLArn', props);
    return resource.getResponseField('WebACL.WebACLArn') as unknown as string;
  }

}

export class WAFRegionalCreateWebAclWebAclDefaultAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateWebAclRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MetricName: this.input.metricName,
          DefaultAction: {
            Type: this.input.defaultAction.type,
          },
          ChangeToken: this.input.changeToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACL.WebACL.DefaultAction.Type', props);
    return resource.getResponseField('WebACL.DefaultAction.Type') as unknown as string;
  }

}

export class WAFRegionalCreateWebAclMigrationStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateWebAclMigrationStackRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
          S3BucketName: this.input.s3BucketName,
          IgnoreUnsupportedType: this.input.ignoreUnsupportedType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWebACLMigrationStack.S3ObjectUrl', props);
    return resource.getResponseField('S3ObjectUrl') as unknown as string;
  }

}

export class WAFRegionalCreateXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateXssMatchSetRequest) {
    super(scope, id);
  }

  public get xssMatchSet(): WAFRegionalCreateXssMatchSetXssMatchSet {
    return new WAFRegionalCreateXssMatchSetXssMatchSet(this, 'XssMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalCreateXssMatchSetXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalCreateXssMatchSetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateXssMatchSet.XssMatchSet.XssMatchSetId', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateXssMatchSet.XssMatchSet.Name', props);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafRegionalXssMatchTuple[];
  }

}

export class WAFRegionalDeleteByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteByteMatchSetRequest) {
    super(scope, id);
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
          ByteMatchSetId: this.input.byteMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteGeoMatchSetRequest) {
    super(scope, id);
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
          GeoMatchSetId: this.input.geoMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteIpSetRequest) {
    super(scope, id);
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
          IPSetId: this.input.ipSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteRateBasedRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteRegexMatchSetRequest) {
    super(scope, id);
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
          RegexMatchSetId: this.input.regexMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteRegexPatternSetRequest) {
    super(scope, id);
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
          RegexPatternSetId: this.input.regexPatternSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteRuleGroupRequest) {
    super(scope, id);
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
          RuleGroupId: this.input.ruleGroupId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteSizeConstraintSetRequest) {
    super(scope, id);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteSqlInjectionMatchSetRequest) {
    super(scope, id);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalDeleteXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalDeleteXssMatchSetRequest) {
    super(scope, id);
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
          XssMatchSetId: this.input.xssMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalFetchByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetByteMatchSetRequest) {
    super(scope, id);
  }

  public get byteMatchSet(): WAFRegionalFetchByteMatchSetByteMatchSet {
    return new WAFRegionalFetchByteMatchSetByteMatchSet(this, 'ByteMatchSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchByteMatchSetByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetByteMatchSetRequest) {
    super(scope, id);
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
          ByteMatchSetId: this.input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetByteMatchSet.ByteMatchSet.ByteMatchSetId', props);
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
          ByteMatchSetId: this.input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetByteMatchSet.ByteMatchSet.Name', props);
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
          ByteMatchSetId: this.input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafRegionalByteMatchTuple[];
  }

}

export class WAFRegionalFetchChangeToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetChangeToken.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalFetchChangeTokenStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetChangeTokenStatusRequest) {
    super(scope, id);
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
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChangeTokenStatus.ChangeTokenStatus', props);
    return resource.getResponseField('ChangeTokenStatus') as unknown as string;
  }

}

export class WAFRegionalFetchGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetGeoMatchSetRequest) {
    super(scope, id);
  }

  public get geoMatchSet(): WAFRegionalFetchGeoMatchSetGeoMatchSet {
    return new WAFRegionalFetchGeoMatchSetGeoMatchSet(this, 'GeoMatchSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchGeoMatchSetGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetGeoMatchSetRequest) {
    super(scope, id);
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
          GeoMatchSetId: this.input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoMatchSet.GeoMatchSet.GeoMatchSetId', props);
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
          GeoMatchSetId: this.input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoMatchSet.GeoMatchSet.Name', props);
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
          GeoMatchSetId: this.input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafRegionalGeoMatchConstraint[];
  }

}

export class WAFRegionalFetchIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetIpSetRequest) {
    super(scope, id);
  }

  public get ipSet(): WAFRegionalFetchIpSetIpSet {
    return new WAFRegionalFetchIpSetIpSet(this, 'IpSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchIpSetIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetIpSetRequest) {
    super(scope, id);
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
          IPSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.IPSetId', props);
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
          IPSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.Name', props);
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
          IPSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafRegionalIpSetDescriptor[];
  }

}

export class WAFRegionalFetchLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): WAFRegionalFetchLoggingConfigurationLoggingConfiguration {
    return new WAFRegionalFetchLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class WAFRegionalFetchLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetLoggingConfigurationRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
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
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafRegionalFieldToMatch[];
  }

}

export class WAFRegionalFetchPermissionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetPermissionPolicyRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermissionPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class WAFRegionalFetchRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRateBasedRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFRegionalFetchRateBasedRuleRule {
    return new WAFRegionalFetchRateBasedRuleRule(this, 'Rule', this.__resources, this.input);
  }

}

export class WAFRegionalFetchRateBasedRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRateBasedRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.RuleId', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.Name', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.MetricName', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.MatchPredicates', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.RateKey', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.RateLimit', props);
    return resource.getResponseField('Rule.RateLimit') as unknown as number;
  }

}

export class WAFRegionalFetchRateBasedRuleManagedKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRateBasedRuleManagedKeysRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          NextMarker: this.input.nextMarker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRuleManagedKeys.ManagedKeys', props);
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
          RuleId: this.input.ruleId,
          NextMarker: this.input.nextMarker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRuleManagedKeys.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFRegionalFetchRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRegexMatchSetRequest) {
    super(scope, id);
  }

  public get regexMatchSet(): WAFRegionalFetchRegexMatchSetRegexMatchSet {
    return new WAFRegionalFetchRegexMatchSetRegexMatchSet(this, 'RegexMatchSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchRegexMatchSetRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRegexMatchSetRequest) {
    super(scope, id);
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
          RegexMatchSetId: this.input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexMatchSet.RegexMatchSet.RegexMatchSetId', props);
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
          RegexMatchSetId: this.input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexMatchSet.RegexMatchSet.Name', props);
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
          RegexMatchSetId: this.input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegionalRegexMatchTuple[];
  }

}

export class WAFRegionalFetchRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRegexPatternSetRequest) {
    super(scope, id);
  }

  public get regexPatternSet(): WAFRegionalFetchRegexPatternSetRegexPatternSet {
    return new WAFRegionalFetchRegexPatternSetRegexPatternSet(this, 'RegexPatternSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchRegexPatternSetRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRegexPatternSetRequest) {
    super(scope, id);
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
          RegexPatternSetId: this.input.regexPatternSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.RegexPatternSetId', props);
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
          RegexPatternSetId: this.input.regexPatternSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.Name', props);
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
          RegexPatternSetId: this.input.regexPatternSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexPatternSet.RegexPatternSet.RegexPatternStrings', props);
    return resource.getResponseField('RegexPatternSet.RegexPatternStrings') as unknown as string[];
  }

}

export class WAFRegionalFetchRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFRegionalFetchRuleRule {
    return new WAFRegionalFetchRuleRule(this, 'Rule', this.__resources, this.input);
  }

}

export class WAFRegionalFetchRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRule.Rule.RuleId', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRule.Rule.Name', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRule.Rule.MetricName', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRule.Rule.Predicates', props);
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafRegionalPredicate[];
  }

}

export class WAFRegionalFetchRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroup(): WAFRegionalFetchRuleGroupRuleGroup {
    return new WAFRegionalFetchRuleGroupRuleGroup(this, 'RuleGroup', this.__resources, this.input);
  }

}

export class WAFRegionalFetchRuleGroupRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetRuleGroupRequest) {
    super(scope, id);
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
          RuleGroupId: this.input.ruleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.RuleGroupId', props);
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
          RuleGroupId: this.input.ruleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.Name', props);
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
          RuleGroupId: this.input.ruleGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRuleGroup.RuleGroup.MetricName', props);
    return resource.getResponseField('RuleGroup.MetricName') as unknown as string;
  }

}

export class WAFRegionalFetchSampledRequests extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetSampledRequestsRequest) {
    super(scope, id);
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
          WebAclId: this.input.webAclId,
          RuleId: this.input.ruleId,
          TimeWindow: {
            StartTime: this.input.timeWindow.startTime,
            EndTime: this.input.timeWindow.endTime,
          },
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.SampledRequests', props);
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
          WebAclId: this.input.webAclId,
          RuleId: this.input.ruleId,
          TimeWindow: {
            StartTime: this.input.timeWindow.startTime,
            EndTime: this.input.timeWindow.endTime,
          },
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.PopulationSize', props);
    return resource.getResponseField('PopulationSize') as unknown as number;
  }

  public get timeWindow(): WAFRegionalFetchSampledRequestsTimeWindow {
    return new WAFRegionalFetchSampledRequestsTimeWindow(this, 'TimeWindow', this.__resources, this.input);
  }

}

export class WAFRegionalFetchSampledRequestsTimeWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetSampledRequestsRequest) {
    super(scope, id);
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
          WebAclId: this.input.webAclId,
          RuleId: this.input.ruleId,
          TimeWindow: {
            StartTime: this.input.timeWindow.startTime,
            EndTime: this.input.timeWindow.endTime,
          },
          MaxItems: this.input.maxItems,
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
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.GetSampledRequests.TimeWindow.EndTime'),
        outputPath: 'TimeWindow.EndTime',
        parameters: {
          WebAclId: this.input.webAclId,
          RuleId: this.input.ruleId,
          TimeWindow: {
            StartTime: this.input.timeWindow.startTime,
            EndTime: this.input.timeWindow.endTime,
          },
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSampledRequests.TimeWindow.EndTime', props);
    return resource.getResponseField('TimeWindow.EndTime') as unknown as string;
  }

}

export class WAFRegionalFetchSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetSizeConstraintSetRequest) {
    super(scope, id);
  }

  public get sizeConstraintSet(): WAFRegionalFetchSizeConstraintSetSizeConstraintSet {
    return new WAFRegionalFetchSizeConstraintSetSizeConstraintSet(this, 'SizeConstraintSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchSizeConstraintSetSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetSizeConstraintSetRequest) {
    super(scope, id);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId', props);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSizeConstraintSet.SizeConstraintSet.Name', props);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafRegionalSizeConstraint[];
  }

}

export class WAFRegionalFetchSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetSqlInjectionMatchSetRequest) {
    super(scope, id);
  }

  public get sqlInjectionMatchSet(): WAFRegionalFetchSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFRegionalFetchSqlInjectionMatchSetSqlInjectionMatchSet(this, 'SqlInjectionMatchSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchSqlInjectionMatchSetSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetSqlInjectionMatchSetRequest) {
    super(scope, id);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId', props);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name', props);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafRegionalSqlInjectionMatchTuple[];
  }

}

export class WAFRegionalFetchWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetWebAclRequest) {
    super(scope, id);
  }

  public get webAcl(): WAFRegionalFetchWebAclWebAcl {
    return new WAFRegionalFetchWebAclWebAcl(this, 'WebAcl', this.__resources, this.input);
  }

}

export class WAFRegionalFetchWebAclWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.WebACLId', props);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Name', props);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.MetricName', props);
    return resource.getResponseField('WebACL.MetricName') as unknown as string;
  }

  public get defaultAction(): WAFRegionalFetchWebAclWebAclDefaultAction {
    return new WAFRegionalFetchWebAclWebAclDefaultAction(this, 'DefaultAction', this.__resources, this.input);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Rules', props);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.WebACLArn', props);
    return resource.getResponseField('WebACL.WebACLArn') as unknown as string;
  }

}

export class WAFRegionalFetchWebAclWebAclDefaultAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.DefaultAction.Type', props);
    return resource.getResponseField('WebACL.DefaultAction.Type') as unknown as string;
  }

}

export class WAFRegionalFetchWebAclForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetWebAclForResourceRequest) {
    super(scope, id);
  }

  public get webAclSummary(): WAFRegionalFetchWebAclForResourceWebAclSummary {
    return new WAFRegionalFetchWebAclForResourceWebAclSummary(this, 'WebAclSummary', this.__resources, this.input);
  }

}

export class WAFRegionalFetchWebAclForResourceWebAclSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetWebAclForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACLSummary.WebACLId', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACLForResource.WebACLSummary.Name', props);
    return resource.getResponseField('WebACLSummary.Name') as unknown as string;
  }

}

export class WAFRegionalFetchXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetXssMatchSetRequest) {
    super(scope, id);
  }

  public get xssMatchSet(): WAFRegionalFetchXssMatchSetXssMatchSet {
    return new WAFRegionalFetchXssMatchSetXssMatchSet(this, 'XssMatchSet', this.__resources, this.input);
  }

}

export class WAFRegionalFetchXssMatchSetXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalGetXssMatchSetRequest) {
    super(scope, id);
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
          XssMatchSetId: this.input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetXssMatchSet.XssMatchSet.XssMatchSetId', props);
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
          XssMatchSetId: this.input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetXssMatchSet.XssMatchSet.Name', props);
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
          XssMatchSetId: this.input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafRegionalXssMatchTuple[];
  }

}

export class WAFRegionalListActivatedRulesInRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListActivatedRulesInRuleGroupRequest) {
    super(scope, id);
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
          RuleGroupId: this.input.ruleGroupId,
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActivatedRulesInRuleGroup.NextMarker', props);
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
          RuleGroupId: this.input.ruleGroupId,
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActivatedRulesInRuleGroup.ActivatedRules', props);
    return resource.getResponseField('ActivatedRules') as unknown as shapes.WafRegionalActivatedRule[];
  }

}

export class WAFRegionalListByteMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListByteMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListByteMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListByteMatchSets.ByteMatchSets', props);
    return resource.getResponseField('ByteMatchSets') as unknown as shapes.WafRegionalByteMatchSetSummary[];
  }

}

export class WAFRegionalListGeoMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListGeoMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoMatchSets.GeoMatchSets', props);
    return resource.getResponseField('GeoMatchSets') as unknown as shapes.WafRegionalGeoMatchSetSummary[];
  }

}

export class WAFRegionalListIpSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListIpSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.IPSets', props);
    return resource.getResponseField('IPSets') as unknown as shapes.WafRegionalIpSetSummary[];
  }

}

export class WAFRegionalListLoggingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListLoggingConfigurationsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggingConfigurations.LoggingConfigurations', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggingConfigurations.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFRegionalListRateBasedRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListRateBasedRulesRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRateBasedRules.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRateBasedRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRegionalRuleSummary[];
  }

}

export class WAFRegionalListRegexMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListRegexMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexMatchSets.RegexMatchSets', props);
    return resource.getResponseField('RegexMatchSets') as unknown as shapes.WafRegionalRegexMatchSetSummary[];
  }

}

export class WAFRegionalListRegexPatternSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListRegexPatternSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexPatternSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexPatternSets.RegexPatternSets', props);
    return resource.getResponseField('RegexPatternSets') as unknown as shapes.WafRegionalRegexPatternSetSummary[];
  }

}

export class WAFRegionalListResourcesForWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListResourcesForWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourcesForWebACL.ResourceArns', props);
    return resource.getResponseField('ResourceArns') as unknown as string[];
  }

}

export class WAFRegionalListRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListRuleGroupsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafRegionalRuleGroupSummary[];
  }

}

export class WAFRegionalListRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListRulesRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRules.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRegionalRuleSummary[];
  }

}

export class WAFRegionalListSizeConstraintSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListSizeConstraintSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSizeConstraintSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSizeConstraintSets.SizeConstraintSets', props);
    return resource.getResponseField('SizeConstraintSets') as unknown as shapes.WafRegionalSizeConstraintSetSummary[];
  }

}

export class WAFRegionalListSqlInjectionMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListSqlInjectionMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSqlInjectionMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSqlInjectionMatchSets.SqlInjectionMatchSets', props);
    return resource.getResponseField('SqlInjectionMatchSets') as unknown as shapes.WafRegionalSqlInjectionMatchSetSummary[];
  }

}

export class WAFRegionalListSubscribedRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListSubscribedRuleGroupsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscribedRuleGroups.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscribedRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafRegionalSubscribedRuleGroupSummary[];
  }

}

export class WAFRegionalListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListTagsForResourceRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get tagInfoForResource(): WAFRegionalListTagsForResourceTagInfoForResource {
    return new WAFRegionalListTagsForResourceTagInfoForResource(this, 'TagInfoForResource', this.__resources, this.input);
  }

}

export class WAFRegionalListTagsForResourceTagInfoForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListTagsForResourceRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagInfoForResource.ResourceARN', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagInfoForResource.TagList', props);
    return resource.getResponseField('TagInfoForResource.TagList') as unknown as shapes.WafRegionalTag[];
  }

}

export class WAFRegionalListWebAcLs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListWebAcLsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebACLs.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebACLs.WebACLs', props);
    return resource.getResponseField('WebACLs') as unknown as shapes.WafRegionalWebAclSummary[];
  }

}

export class WAFRegionalListXssMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalListXssMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListXssMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListXssMatchSets.XssMatchSets', props);
    return resource.getResponseField('XssMatchSets') as unknown as shapes.WafRegionalXssMatchSetSummary[];
  }

}

export class WAFRegionalPutLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalPutLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): WAFRegionalPutLoggingConfigurationLoggingConfiguration {
    return new WAFRegionalPutLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class WAFRegionalPutLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalPutLoggingConfigurationRequest) {
    super(scope, id);
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
            ResourceArn: this.input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.input.loggingConfiguration.redactedFields,
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
        service: 'WAFRegional',
        physicalResourceId: cr.PhysicalResourceId.of('WAFRegional.PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          LoggingConfiguration: {
            ResourceArn: this.input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.input.loggingConfiguration.redactedFields,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
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
            ResourceArn: this.input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.input.loggingConfiguration.redactedFields,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafRegionalFieldToMatch[];
  }

}

export class WAFRegionalUpdateByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateByteMatchSetRequest) {
    super(scope, id);
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
          ByteMatchSetId: this.input.byteMatchSetId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateGeoMatchSetRequest) {
    super(scope, id);
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
          GeoMatchSetId: this.input.geoMatchSetId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateIpSetRequest) {
    super(scope, id);
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
          IPSetId: this.input.ipSetId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateRateBasedRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
          RateLimit: this.input.rateLimit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateRegexMatchSetRequest) {
    super(scope, id);
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
          RegexMatchSetId: this.input.regexMatchSetId,
          Updates: this.input.updates,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateRegexPatternSetRequest) {
    super(scope, id);
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
          RegexPatternSetId: this.input.regexPatternSetId,
          Updates: this.input.updates,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateRuleGroupRequest) {
    super(scope, id);
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
          RuleGroupId: this.input.ruleGroupId,
          Updates: this.input.updates,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateSizeConstraintSetRequest) {
    super(scope, id);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateSqlInjectionMatchSetRequest) {
    super(scope, id);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
          DefaultAction: {
            Type: this.input.defaultAction?.type,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFRegionalUpdateXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafRegionalUpdateXssMatchSetRequest) {
    super(scope, id);
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
          XssMatchSetId: this.input.xssMatchSetId,
          ChangeToken: this.input.changeToken,
          Updates: this.input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

