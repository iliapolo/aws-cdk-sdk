import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WafClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createByteMatchSet(input: shapes.WafCreateByteMatchSetRequest): WAFResponsesCreateByteMatchSet {
    return new WAFResponsesCreateByteMatchSet(this, this.__resources, input);
  }

  public createGeoMatchSet(input: shapes.WafCreateGeoMatchSetRequest): WAFResponsesCreateGeoMatchSet {
    return new WAFResponsesCreateGeoMatchSet(this, this.__resources, input);
  }

  public createIpSet(input: shapes.WafCreateIpSetRequest): WAFResponsesCreateIpSet {
    return new WAFResponsesCreateIpSet(this, this.__resources, input);
  }

  public createRateBasedRule(input: shapes.WafCreateRateBasedRuleRequest): WAFResponsesCreateRateBasedRule {
    return new WAFResponsesCreateRateBasedRule(this, this.__resources, input);
  }

  public createRegexMatchSet(input: shapes.WafCreateRegexMatchSetRequest): WAFResponsesCreateRegexMatchSet {
    return new WAFResponsesCreateRegexMatchSet(this, this.__resources, input);
  }

  public createRegexPatternSet(input: shapes.WafCreateRegexPatternSetRequest): WAFResponsesCreateRegexPatternSet {
    return new WAFResponsesCreateRegexPatternSet(this, this.__resources, input);
  }

  public createRule(input: shapes.WafCreateRuleRequest): WAFResponsesCreateRule {
    return new WAFResponsesCreateRule(this, this.__resources, input);
  }

  public createRuleGroup(input: shapes.WafCreateRuleGroupRequest): WAFResponsesCreateRuleGroup {
    return new WAFResponsesCreateRuleGroup(this, this.__resources, input);
  }

  public createSizeConstraintSet(input: shapes.WafCreateSizeConstraintSetRequest): WAFResponsesCreateSizeConstraintSet {
    return new WAFResponsesCreateSizeConstraintSet(this, this.__resources, input);
  }

  public createSqlInjectionMatchSet(input: shapes.WafCreateSqlInjectionMatchSetRequest): WAFResponsesCreateSqlInjectionMatchSet {
    return new WAFResponsesCreateSqlInjectionMatchSet(this, this.__resources, input);
  }

  public createWebAcl(input: shapes.WafCreateWebAclRequest): WAFResponsesCreateWebAcl {
    return new WAFResponsesCreateWebAcl(this, this.__resources, input);
  }

  public createWebAclMigrationStack(input: shapes.WafCreateWebAclMigrationStackRequest): WAFResponsesCreateWebAclMigrationStack {
    return new WAFResponsesCreateWebAclMigrationStack(this, this.__resources, input);
  }

  public createXssMatchSet(input: shapes.WafCreateXssMatchSetRequest): WAFResponsesCreateXssMatchSet {
    return new WAFResponsesCreateXssMatchSet(this, this.__resources, input);
  }

  public deleteByteMatchSet(input: shapes.WafDeleteByteMatchSetRequest): WAFResponsesDeleteByteMatchSet {
    return new WAFResponsesDeleteByteMatchSet(this, this.__resources, input);
  }

  public deleteGeoMatchSet(input: shapes.WafDeleteGeoMatchSetRequest): WAFResponsesDeleteGeoMatchSet {
    return new WAFResponsesDeleteGeoMatchSet(this, this.__resources, input);
  }

  public deleteIpSet(input: shapes.WafDeleteIpSetRequest): WAFResponsesDeleteIpSet {
    return new WAFResponsesDeleteIpSet(this, this.__resources, input);
  }

  public deleteLoggingConfiguration(input: shapes.WafDeleteLoggingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoggingConfiguration',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteLoggingConfiguration'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLoggingConfiguration', props);
  }

  public deletePermissionPolicy(input: shapes.WafDeletePermissionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePermissionPolicy',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeletePermissionPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePermissionPolicy', props);
  }

  public deleteRateBasedRule(input: shapes.WafDeleteRateBasedRuleRequest): WAFResponsesDeleteRateBasedRule {
    return new WAFResponsesDeleteRateBasedRule(this, this.__resources, input);
  }

  public deleteRegexMatchSet(input: shapes.WafDeleteRegexMatchSetRequest): WAFResponsesDeleteRegexMatchSet {
    return new WAFResponsesDeleteRegexMatchSet(this, this.__resources, input);
  }

  public deleteRegexPatternSet(input: shapes.WafDeleteRegexPatternSetRequest): WAFResponsesDeleteRegexPatternSet {
    return new WAFResponsesDeleteRegexPatternSet(this, this.__resources, input);
  }

  public deleteRule(input: shapes.WafDeleteRuleRequest): WAFResponsesDeleteRule {
    return new WAFResponsesDeleteRule(this, this.__resources, input);
  }

  public deleteRuleGroup(input: shapes.WafDeleteRuleGroupRequest): WAFResponsesDeleteRuleGroup {
    return new WAFResponsesDeleteRuleGroup(this, this.__resources, input);
  }

  public deleteSizeConstraintSet(input: shapes.WafDeleteSizeConstraintSetRequest): WAFResponsesDeleteSizeConstraintSet {
    return new WAFResponsesDeleteSizeConstraintSet(this, this.__resources, input);
  }

  public deleteSqlInjectionMatchSet(input: shapes.WafDeleteSqlInjectionMatchSetRequest): WAFResponsesDeleteSqlInjectionMatchSet {
    return new WAFResponsesDeleteSqlInjectionMatchSet(this, this.__resources, input);
  }

  public deleteWebAcl(input: shapes.WafDeleteWebAclRequest): WAFResponsesDeleteWebAcl {
    return new WAFResponsesDeleteWebAcl(this, this.__resources, input);
  }

  public deleteXssMatchSet(input: shapes.WafDeleteXssMatchSetRequest): WAFResponsesDeleteXssMatchSet {
    return new WAFResponsesDeleteXssMatchSet(this, this.__resources, input);
  }

  public fetchByteMatchSet(input: shapes.WafGetByteMatchSetRequest): WAFResponsesFetchByteMatchSet {
    return new WAFResponsesFetchByteMatchSet(this, this.__resources, input);
  }

  public fetchChangeToken(): WAFResponsesFetchChangeToken {
    return new WAFResponsesFetchChangeToken(this, this.__resources);
  }

  public fetchChangeTokenStatus(input: shapes.WafGetChangeTokenStatusRequest): WAFResponsesFetchChangeTokenStatus {
    return new WAFResponsesFetchChangeTokenStatus(this, this.__resources, input);
  }

  public fetchGeoMatchSet(input: shapes.WafGetGeoMatchSetRequest): WAFResponsesFetchGeoMatchSet {
    return new WAFResponsesFetchGeoMatchSet(this, this.__resources, input);
  }

  public fetchIpSet(input: shapes.WafGetIpSetRequest): WAFResponsesFetchIpSet {
    return new WAFResponsesFetchIpSet(this, this.__resources, input);
  }

  public fetchLoggingConfiguration(input: shapes.WafGetLoggingConfigurationRequest): WAFResponsesFetchLoggingConfiguration {
    return new WAFResponsesFetchLoggingConfiguration(this, this.__resources, input);
  }

  public fetchPermissionPolicy(input: shapes.WafGetPermissionPolicyRequest): WAFResponsesFetchPermissionPolicy {
    return new WAFResponsesFetchPermissionPolicy(this, this.__resources, input);
  }

  public fetchRateBasedRule(input: shapes.WafGetRateBasedRuleRequest): WAFResponsesFetchRateBasedRule {
    return new WAFResponsesFetchRateBasedRule(this, this.__resources, input);
  }

  public fetchRateBasedRuleManagedKeys(input: shapes.WafGetRateBasedRuleManagedKeysRequest): WAFResponsesFetchRateBasedRuleManagedKeys {
    return new WAFResponsesFetchRateBasedRuleManagedKeys(this, this.__resources, input);
  }

  public fetchRegexMatchSet(input: shapes.WafGetRegexMatchSetRequest): WAFResponsesFetchRegexMatchSet {
    return new WAFResponsesFetchRegexMatchSet(this, this.__resources, input);
  }

  public fetchRegexPatternSet(input: shapes.WafGetRegexPatternSetRequest): WAFResponsesFetchRegexPatternSet {
    return new WAFResponsesFetchRegexPatternSet(this, this.__resources, input);
  }

  public fetchRule(input: shapes.WafGetRuleRequest): WAFResponsesFetchRule {
    return new WAFResponsesFetchRule(this, this.__resources, input);
  }

  public fetchRuleGroup(input: shapes.WafGetRuleGroupRequest): WAFResponsesFetchRuleGroup {
    return new WAFResponsesFetchRuleGroup(this, this.__resources, input);
  }

  public fetchSampledRequests(input: shapes.WafGetSampledRequestsRequest): WAFResponsesFetchSampledRequests {
    return new WAFResponsesFetchSampledRequests(this, this.__resources, input);
  }

  public fetchSizeConstraintSet(input: shapes.WafGetSizeConstraintSetRequest): WAFResponsesFetchSizeConstraintSet {
    return new WAFResponsesFetchSizeConstraintSet(this, this.__resources, input);
  }

  public fetchSqlInjectionMatchSet(input: shapes.WafGetSqlInjectionMatchSetRequest): WAFResponsesFetchSqlInjectionMatchSet {
    return new WAFResponsesFetchSqlInjectionMatchSet(this, this.__resources, input);
  }

  public fetchWebAcl(input: shapes.WafGetWebAclRequest): WAFResponsesFetchWebAcl {
    return new WAFResponsesFetchWebAcl(this, this.__resources, input);
  }

  public fetchXssMatchSet(input: shapes.WafGetXssMatchSetRequest): WAFResponsesFetchXssMatchSet {
    return new WAFResponsesFetchXssMatchSet(this, this.__resources, input);
  }

  public listActivatedRulesInRuleGroup(input: shapes.WafListActivatedRulesInRuleGroupRequest): WAFResponsesListActivatedRulesInRuleGroup {
    return new WAFResponsesListActivatedRulesInRuleGroup(this, this.__resources, input);
  }

  public listByteMatchSets(input: shapes.WafListByteMatchSetsRequest): WAFResponsesListByteMatchSets {
    return new WAFResponsesListByteMatchSets(this, this.__resources, input);
  }

  public listGeoMatchSets(input: shapes.WafListGeoMatchSetsRequest): WAFResponsesListGeoMatchSets {
    return new WAFResponsesListGeoMatchSets(this, this.__resources, input);
  }

  public listIpSets(input: shapes.WafListIpSetsRequest): WAFResponsesListIpSets {
    return new WAFResponsesListIpSets(this, this.__resources, input);
  }

  public listLoggingConfigurations(input: shapes.WafListLoggingConfigurationsRequest): WAFResponsesListLoggingConfigurations {
    return new WAFResponsesListLoggingConfigurations(this, this.__resources, input);
  }

  public listRateBasedRules(input: shapes.WafListRateBasedRulesRequest): WAFResponsesListRateBasedRules {
    return new WAFResponsesListRateBasedRules(this, this.__resources, input);
  }

  public listRegexMatchSets(input: shapes.WafListRegexMatchSetsRequest): WAFResponsesListRegexMatchSets {
    return new WAFResponsesListRegexMatchSets(this, this.__resources, input);
  }

  public listRegexPatternSets(input: shapes.WafListRegexPatternSetsRequest): WAFResponsesListRegexPatternSets {
    return new WAFResponsesListRegexPatternSets(this, this.__resources, input);
  }

  public listRuleGroups(input: shapes.WafListRuleGroupsRequest): WAFResponsesListRuleGroups {
    return new WAFResponsesListRuleGroups(this, this.__resources, input);
  }

  public listRules(input: shapes.WafListRulesRequest): WAFResponsesListRules {
    return new WAFResponsesListRules(this, this.__resources, input);
  }

  public listSizeConstraintSets(input: shapes.WafListSizeConstraintSetsRequest): WAFResponsesListSizeConstraintSets {
    return new WAFResponsesListSizeConstraintSets(this, this.__resources, input);
  }

  public listSqlInjectionMatchSets(input: shapes.WafListSqlInjectionMatchSetsRequest): WAFResponsesListSqlInjectionMatchSets {
    return new WAFResponsesListSqlInjectionMatchSets(this, this.__resources, input);
  }

  public listSubscribedRuleGroups(input: shapes.WafListSubscribedRuleGroupsRequest): WAFResponsesListSubscribedRuleGroups {
    return new WAFResponsesListSubscribedRuleGroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.WafListTagsForResourceRequest): WAFResponsesListTagsForResource {
    return new WAFResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWebAcLs(input: shapes.WafListWebAcLsRequest): WAFResponsesListWebAcLs {
    return new WAFResponsesListWebAcLs(this, this.__resources, input);
  }

  public listXssMatchSets(input: shapes.WafListXssMatchSetsRequest): WAFResponsesListXssMatchSets {
    return new WAFResponsesListXssMatchSets(this, this.__resources, input);
  }

  public putLoggingConfiguration(input: shapes.WafPutLoggingConfigurationRequest): WAFResponsesPutLoggingConfiguration {
    return new WAFResponsesPutLoggingConfiguration(this, this.__resources, input);
  }

  public putPermissionPolicy(input: shapes.WafPutPermissionPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putPermissionPolicy',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.PutPermissionPolicy'),
        parameters: {
          ResourceArn: input.resourceArn,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutPermissionPolicy', props);
  }

  public tagResource(input: shapes.WafTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.WafUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateByteMatchSet(input: shapes.WafUpdateByteMatchSetRequest): WAFResponsesUpdateByteMatchSet {
    return new WAFResponsesUpdateByteMatchSet(this, this.__resources, input);
  }

  public updateGeoMatchSet(input: shapes.WafUpdateGeoMatchSetRequest): WAFResponsesUpdateGeoMatchSet {
    return new WAFResponsesUpdateGeoMatchSet(this, this.__resources, input);
  }

  public updateIpSet(input: shapes.WafUpdateIpSetRequest): WAFResponsesUpdateIpSet {
    return new WAFResponsesUpdateIpSet(this, this.__resources, input);
  }

  public updateRateBasedRule(input: shapes.WafUpdateRateBasedRuleRequest): WAFResponsesUpdateRateBasedRule {
    return new WAFResponsesUpdateRateBasedRule(this, this.__resources, input);
  }

  public updateRegexMatchSet(input: shapes.WafUpdateRegexMatchSetRequest): WAFResponsesUpdateRegexMatchSet {
    return new WAFResponsesUpdateRegexMatchSet(this, this.__resources, input);
  }

  public updateRegexPatternSet(input: shapes.WafUpdateRegexPatternSetRequest): WAFResponsesUpdateRegexPatternSet {
    return new WAFResponsesUpdateRegexPatternSet(this, this.__resources, input);
  }

  public updateRule(input: shapes.WafUpdateRuleRequest): WAFResponsesUpdateRule {
    return new WAFResponsesUpdateRule(this, this.__resources, input);
  }

  public updateRuleGroup(input: shapes.WafUpdateRuleGroupRequest): WAFResponsesUpdateRuleGroup {
    return new WAFResponsesUpdateRuleGroup(this, this.__resources, input);
  }

  public updateSizeConstraintSet(input: shapes.WafUpdateSizeConstraintSetRequest): WAFResponsesUpdateSizeConstraintSet {
    return new WAFResponsesUpdateSizeConstraintSet(this, this.__resources, input);
  }

  public updateSqlInjectionMatchSet(input: shapes.WafUpdateSqlInjectionMatchSetRequest): WAFResponsesUpdateSqlInjectionMatchSet {
    return new WAFResponsesUpdateSqlInjectionMatchSet(this, this.__resources, input);
  }

  public updateWebAcl(input: shapes.WafUpdateWebAclRequest): WAFResponsesUpdateWebAcl {
    return new WAFResponsesUpdateWebAcl(this, this.__resources, input);
  }

  public updateXssMatchSet(input: shapes.WafUpdateXssMatchSetRequest): WAFResponsesUpdateXssMatchSet {
    return new WAFResponsesUpdateXssMatchSet(this, this.__resources, input);
  }

}

export class WAFResponsesCreateByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateByteMatchSetRequest) {
  }

  public get byteMatchSet(): WAFResponsesCreateByteMatchSetByteMatchSet {
    return new WAFResponsesCreateByteMatchSetByteMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateByteMatchSet.ChangeToken'),
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

export class WAFResponsesCreateByteMatchSetByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateByteMatchSetRequest) {
  }

  public get byteMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateByteMatchSet.ByteMatchSet.ByteMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateByteMatchSet.ByteMatchSet.Name'),
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

  public get byteMatchTuples(): shapes.WafByteMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateByteMatchSet.ByteMatchSet.ByteMatchTuples'),
        outputPath: 'ByteMatchSet.ByteMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafByteMatchTuple[];
  }

}

export class WAFResponsesCreateGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateGeoMatchSetRequest) {
  }

  public get geoMatchSet(): WAFResponsesCreateGeoMatchSetGeoMatchSet {
    return new WAFResponsesCreateGeoMatchSetGeoMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateGeoMatchSet.ChangeToken'),
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

export class WAFResponsesCreateGeoMatchSetGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateGeoMatchSetRequest) {
  }

  public get geoMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateGeoMatchSet.GeoMatchSet.GeoMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateGeoMatchSet.GeoMatchSet.Name'),
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

  public get geoMatchConstraints(): shapes.WafGeoMatchConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints'),
        outputPath: 'GeoMatchSet.GeoMatchConstraints',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafGeoMatchConstraint[];
  }

}

export class WAFResponsesCreateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateIpSetRequest) {
  }

  public get ipSet(): WAFResponsesCreateIpSetIpSet {
    return new WAFResponsesCreateIpSetIpSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateIPSet.ChangeToken'),
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

export class WAFResponsesCreateIpSetIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateIpSetRequest) {
  }

  public get ipSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateIPSet.IPSet.IPSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateIPSet.IPSet.Name'),
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

  public get ipSetDescriptors(): shapes.WafipSetDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateIPSet.IPSet.IPSetDescriptors'),
        outputPath: 'IPSet.IPSetDescriptors',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafipSetDescriptor[];
  }

}

export class WAFResponsesCreateRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRateBasedRuleRequest) {
  }

  public get rule(): WAFResponsesCreateRateBasedRuleRule {
    return new WAFResponsesCreateRateBasedRuleRule(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.ChangeToken'),
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

export class WAFResponsesCreateRateBasedRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRateBasedRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.RuleId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.MetricName'),
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

  public get matchPredicates(): shapes.WafPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.MatchPredicates'),
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
    return resource.getResponseField('Rule.MatchPredicates') as unknown as shapes.WafPredicate[];
  }

  public get rateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.RateKey'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.RateLimit'),
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

export class WAFResponsesCreateRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRegexMatchSetRequest) {
  }

  public get regexMatchSet(): WAFResponsesCreateRegexMatchSetRegexMatchSet {
    return new WAFResponsesCreateRegexMatchSetRegexMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexMatchSet.ChangeToken'),
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

export class WAFResponsesCreateRegexMatchSetRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRegexMatchSetRequest) {
  }

  public get regexMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexMatchSet.RegexMatchSet.RegexMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexMatchSet.RegexMatchSet.Name'),
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

  public get regexMatchTuples(): shapes.WafRegexMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples'),
        outputPath: 'RegexMatchSet.RegexMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegexMatchTuple[];
  }

}

export class WAFResponsesCreateRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRegexPatternSetRequest) {
  }

  public get regexPatternSet(): WAFResponsesCreateRegexPatternSetRegexPatternSet {
    return new WAFResponsesCreateRegexPatternSetRegexPatternSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexPatternSet.ChangeToken'),
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

export class WAFResponsesCreateRegexPatternSetRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRegexPatternSetRequest) {
  }

  public get regexPatternSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexPatternSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexPatternSet.RegexPatternSet.RegexPatternSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexPatternSet.RegexPatternSet.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexPatternSet.RegexPatternSet.RegexPatternStrings'),
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

export class WAFResponsesCreateRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRuleRequest) {
  }

  public get rule(): WAFResponsesCreateRuleRule {
    return new WAFResponsesCreateRuleRule(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.ChangeToken'),
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

export class WAFResponsesCreateRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.RuleId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.MetricName'),
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

  public get predicates(): shapes.WafPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.Predicates'),
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
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafPredicate[];
  }

}

export class WAFResponsesCreateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRuleGroupRequest) {
  }

  public get ruleGroup(): WAFResponsesCreateRuleGroupRuleGroup {
    return new WAFResponsesCreateRuleGroupRuleGroup(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRuleGroup.ChangeToken'),
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

export class WAFResponsesCreateRuleGroupRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateRuleGroupRequest) {
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRuleGroup.RuleGroup.RuleGroupId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRuleGroup.RuleGroup.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRuleGroup.RuleGroup.MetricName'),
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

export class WAFResponsesCreateSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateSizeConstraintSetRequest) {
  }

  public get sizeConstraintSet(): WAFResponsesCreateSizeConstraintSetSizeConstraintSet {
    return new WAFResponsesCreateSizeConstraintSetSizeConstraintSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSizeConstraintSet.ChangeToken'),
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

export class WAFResponsesCreateSizeConstraintSetSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateSizeConstraintSetRequest) {
  }

  public get sizeConstraintSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSizeConstraintSet.SizeConstraintSet.Name'),
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

  public get sizeConstraints(): shapes.WafSizeConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints'),
        outputPath: 'SizeConstraintSet.SizeConstraints',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafSizeConstraint[];
  }

}

export class WAFResponsesCreateSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSet(): WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSqlInjectionMatchSet.ChangeToken'),
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

export class WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.Name'),
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

  public get sqlInjectionMatchTuples(): shapes.WafSqlInjectionMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafSqlInjectionMatchTuple[];
  }

}

export class WAFResponsesCreateWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateWebAclRequest) {
  }

  public get webAcl(): WAFResponsesCreateWebAclWebAcl {
    return new WAFResponsesCreateWebAclWebAcl(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.ChangeToken'),
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

export class WAFResponsesCreateWebAclWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateWebAclRequest) {
  }

  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.WebACLId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.MetricName'),
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

  public get defaultAction(): WAFResponsesCreateWebAclWebAclDefaultAction {
    return new WAFResponsesCreateWebAclWebAclDefaultAction(this.__scope, this.__resources, this.__input);
  }

  public get rules(): shapes.WafActivatedRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.Rules'),
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
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.WafActivatedRule[];
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.WebACLArn'),
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

export class WAFResponsesCreateWebAclWebAclDefaultAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateWebAclRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.DefaultAction.Type'),
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

export class WAFResponsesCreateWebAclMigrationStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateWebAclMigrationStackRequest) {
  }

  public get s3ObjectUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWebAclMigrationStack',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACLMigrationStack.S3ObjectUrl'),
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

export class WAFResponsesCreateXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateXssMatchSetRequest) {
  }

  public get xssMatchSet(): WAFResponsesCreateXssMatchSetXssMatchSet {
    return new WAFResponsesCreateXssMatchSetXssMatchSet(this.__scope, this.__resources, this.__input);
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateXssMatchSet.ChangeToken'),
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

export class WAFResponsesCreateXssMatchSetXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafCreateXssMatchSetRequest) {
  }

  public get xssMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateXssMatchSet.XssMatchSet.XssMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateXssMatchSet.XssMatchSet.Name'),
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

  public get xssMatchTuples(): shapes.WafXssMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateXssMatchSet.XssMatchSet.XssMatchTuples'),
        outputPath: 'XssMatchSet.XssMatchTuples',
        parameters: {
          Name: this.__input.name,
          ChangeToken: this.__input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafXssMatchTuple[];
  }

}

export class WAFResponsesDeleteByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteByteMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteByteMatchSet.ChangeToken'),
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

export class WAFResponsesDeleteGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteGeoMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteGeoMatchSet.ChangeToken'),
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

export class WAFResponsesDeleteIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteIpSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteIPSet.ChangeToken'),
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

export class WAFResponsesDeleteRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteRateBasedRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteRateBasedRule.ChangeToken'),
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

export class WAFResponsesDeleteRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteRegexMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteRegexMatchSet.ChangeToken'),
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

export class WAFResponsesDeleteRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteRegexPatternSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegexPatternSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteRegexPatternSet.ChangeToken'),
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

export class WAFResponsesDeleteRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteRule.ChangeToken'),
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

export class WAFResponsesDeleteRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteRuleGroupRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteRuleGroup.ChangeToken'),
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

export class WAFResponsesDeleteSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteSizeConstraintSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteSizeConstraintSet.ChangeToken'),
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

export class WAFResponsesDeleteSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteSqlInjectionMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteSqlInjectionMatchSet.ChangeToken'),
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

export class WAFResponsesDeleteWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteWebAclRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteWebACL.ChangeToken'),
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

export class WAFResponsesDeleteXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafDeleteXssMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.DeleteXssMatchSet.ChangeToken'),
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

export class WAFResponsesFetchByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetByteMatchSetRequest) {
  }

  public get byteMatchSet(): WAFResponsesFetchByteMatchSetByteMatchSet {
    return new WAFResponsesFetchByteMatchSetByteMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchByteMatchSetByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetByteMatchSetRequest) {
  }

  public get byteMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetByteMatchSet.ByteMatchSet.ByteMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetByteMatchSet.ByteMatchSet.Name'),
        outputPath: 'ByteMatchSet.Name',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetByteMatchSet.ByteMatchSet.Name', props);
    return resource.getResponseField('ByteMatchSet.Name') as unknown as string;
  }

  public get byteMatchTuples(): shapes.WafByteMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetByteMatchSet.ByteMatchSet.ByteMatchTuples'),
        outputPath: 'ByteMatchSet.ByteMatchTuples',
        parameters: {
          ByteMatchSetId: this.__input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafByteMatchTuple[];
  }

}

export class WAFResponsesFetchChangeToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChangeToken',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetChangeToken.ChangeToken'),
        outputPath: 'ChangeToken',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChangeToken.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFResponsesFetchChangeTokenStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetChangeTokenStatusRequest) {
  }

  public get changeTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChangeTokenStatus',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetChangeTokenStatus.ChangeTokenStatus'),
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

export class WAFResponsesFetchGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetGeoMatchSetRequest) {
  }

  public get geoMatchSet(): WAFResponsesFetchGeoMatchSetGeoMatchSet {
    return new WAFResponsesFetchGeoMatchSetGeoMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchGeoMatchSetGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetGeoMatchSetRequest) {
  }

  public get geoMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetGeoMatchSet.GeoMatchSet.GeoMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetGeoMatchSet.GeoMatchSet.Name'),
        outputPath: 'GeoMatchSet.Name',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoMatchSet.GeoMatchSet.Name', props);
    return resource.getResponseField('GeoMatchSet.Name') as unknown as string;
  }

  public get geoMatchConstraints(): shapes.WafGeoMatchConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetGeoMatchSet.GeoMatchSet.GeoMatchConstraints'),
        outputPath: 'GeoMatchSet.GeoMatchConstraints',
        parameters: {
          GeoMatchSetId: this.__input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafGeoMatchConstraint[];
  }

}

export class WAFResponsesFetchIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetIpSetRequest) {
  }

  public get ipSet(): WAFResponsesFetchIpSetIpSet {
    return new WAFResponsesFetchIpSetIpSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchIpSetIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetIpSetRequest) {
  }

  public get ipSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetIPSet.IPSet.IPSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetIPSet.IPSet.Name'),
        outputPath: 'IPSet.Name',
        parameters: {
          IPSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.Name', props);
    return resource.getResponseField('IPSet.Name') as unknown as string;
  }

  public get ipSetDescriptors(): shapes.WafipSetDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetIPSet.IPSet.IPSetDescriptors'),
        outputPath: 'IPSet.IPSetDescriptors',
        parameters: {
          IPSetId: this.__input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafipSetDescriptor[];
  }

}

export class WAFResponsesFetchLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): WAFResponsesFetchLoggingConfigurationLoggingConfiguration {
    return new WAFResponsesFetchLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetLoggingConfigurationRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetLoggingConfiguration.LoggingConfiguration.ResourceArn'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
    return resource.getResponseField('LoggingConfiguration.LogDestinationConfigs') as unknown as string[];
  }

  public get redactedFields(): shapes.WafFieldToMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingConfiguration',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetLoggingConfiguration.LoggingConfiguration.RedactedFields'),
        outputPath: 'LoggingConfiguration.RedactedFields',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafFieldToMatch[];
  }

}

export class WAFResponsesFetchPermissionPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetPermissionPolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermissionPolicy',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetPermissionPolicy.Policy'),
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

export class WAFResponsesFetchRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRateBasedRuleRequest) {
  }

  public get rule(): WAFResponsesFetchRateBasedRuleRule {
    return new WAFResponsesFetchRateBasedRuleRule(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchRateBasedRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRateBasedRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.RuleId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.MetricName', props);
    return resource.getResponseField('Rule.MetricName') as unknown as string;
  }

  public get matchPredicates(): shapes.WafPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.MatchPredicates'),
        outputPath: 'Rule.MatchPredicates',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRateBasedRule.Rule.MatchPredicates', props);
    return resource.getResponseField('Rule.MatchPredicates') as unknown as shapes.WafPredicate[];
  }

  public get rateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.RateKey'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.RateLimit'),
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

export class WAFResponsesFetchRateBasedRuleManagedKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRateBasedRuleManagedKeysRequest) {
  }

  public get managedKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRateBasedRuleManagedKeys',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRuleManagedKeys.ManagedKeys'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRuleManagedKeys.NextMarker'),
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

export class WAFResponsesFetchRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRegexMatchSetRequest) {
  }

  public get regexMatchSet(): WAFResponsesFetchRegexMatchSetRegexMatchSet {
    return new WAFResponsesFetchRegexMatchSetRegexMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchRegexMatchSetRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRegexMatchSetRequest) {
  }

  public get regexMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexMatchSet.RegexMatchSet.RegexMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexMatchSet.RegexMatchSet.Name'),
        outputPath: 'RegexMatchSet.Name',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexMatchSet.RegexMatchSet.Name', props);
    return resource.getResponseField('RegexMatchSet.Name') as unknown as string;
  }

  public get regexMatchTuples(): shapes.WafRegexMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexMatchSet.RegexMatchSet.RegexMatchTuples'),
        outputPath: 'RegexMatchSet.RegexMatchTuples',
        parameters: {
          RegexMatchSetId: this.__input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegexMatchTuple[];
  }

}

export class WAFResponsesFetchRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRegexPatternSetRequest) {
  }

  public get regexPatternSet(): WAFResponsesFetchRegexPatternSetRegexPatternSet {
    return new WAFResponsesFetchRegexPatternSetRegexPatternSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchRegexPatternSetRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRegexPatternSetRequest) {
  }

  public get regexPatternSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegexPatternSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexPatternSet.RegexPatternSet.RegexPatternSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexPatternSet.RegexPatternSet.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexPatternSet.RegexPatternSet.RegexPatternStrings'),
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

export class WAFResponsesFetchRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRuleRequest) {
  }

  public get rule(): WAFResponsesFetchRuleRule {
    return new WAFResponsesFetchRuleRule(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRuleRequest) {
  }

  public get ruleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRule.Rule.RuleId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRule.Rule.MetricName', props);
    return resource.getResponseField('Rule.MetricName') as unknown as string;
  }

  public get predicates(): shapes.WafPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRule.Rule.Predicates'),
        outputPath: 'Rule.Predicates',
        parameters: {
          RuleId: this.__input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRule.Rule.Predicates', props);
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafPredicate[];
  }

}

export class WAFResponsesFetchRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRuleGroupRequest) {
  }

  public get ruleGroup(): WAFResponsesFetchRuleGroupRuleGroup {
    return new WAFResponsesFetchRuleGroupRuleGroup(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchRuleGroupRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetRuleGroupRequest) {
  }

  public get ruleGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRuleGroup.RuleGroup.RuleGroupId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRuleGroup.RuleGroup.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRuleGroup.RuleGroup.MetricName'),
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

export class WAFResponsesFetchSampledRequests {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetSampledRequestsRequest) {
  }

  public get sampledRequests(): shapes.WafSampledHttpRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSampledRequests.SampledRequests'),
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
    return resource.getResponseField('SampledRequests') as unknown as shapes.WafSampledHttpRequest[];
  }

  public get populationSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSampledRequests.PopulationSize'),
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

  public get timeWindow(): WAFResponsesFetchSampledRequestsTimeWindow {
    return new WAFResponsesFetchSampledRequestsTimeWindow(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchSampledRequestsTimeWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetSampledRequestsRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSampledRequests',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSampledRequests.TimeWindow.StartTime'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSampledRequests.TimeWindow.EndTime'),
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

export class WAFResponsesFetchSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetSizeConstraintSetRequest) {
  }

  public get sizeConstraintSet(): WAFResponsesFetchSizeConstraintSetSizeConstraintSet {
    return new WAFResponsesFetchSizeConstraintSetSizeConstraintSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchSizeConstraintSetSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetSizeConstraintSetRequest) {
  }

  public get sizeConstraintSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSizeConstraintSet.SizeConstraintSet.SizeConstraintSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSizeConstraintSet.SizeConstraintSet.Name'),
        outputPath: 'SizeConstraintSet.Name',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSizeConstraintSet.SizeConstraintSet.Name', props);
    return resource.getResponseField('SizeConstraintSet.Name') as unknown as string;
  }

  public get sizeConstraints(): shapes.WafSizeConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSizeConstraintSet.SizeConstraintSet.SizeConstraints'),
        outputPath: 'SizeConstraintSet.SizeConstraints',
        parameters: {
          SizeConstraintSetId: this.__input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafSizeConstraint[];
  }

}

export class WAFResponsesFetchSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSet(): WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetSqlInjectionMatchSetRequest) {
  }

  public get sqlInjectionMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name'),
        outputPath: 'SqlInjectionMatchSet.Name',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name', props);
    return resource.getResponseField('SqlInjectionMatchSet.Name') as unknown as string;
  }

  public get sqlInjectionMatchTuples(): shapes.WafSqlInjectionMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchTuples',
        parameters: {
          SqlInjectionMatchSetId: this.__input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafSqlInjectionMatchTuple[];
  }

}

export class WAFResponsesFetchWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetWebAclRequest) {
  }

  public get webAcl(): WAFResponsesFetchWebAclWebAcl {
    return new WAFResponsesFetchWebAclWebAcl(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchWebAclWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetWebAclRequest) {
  }

  public get webAclId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.WebACLId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.MetricName'),
        outputPath: 'WebACL.MetricName',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.MetricName', props);
    return resource.getResponseField('WebACL.MetricName') as unknown as string;
  }

  public get defaultAction(): WAFResponsesFetchWebAclWebAclDefaultAction {
    return new WAFResponsesFetchWebAclWebAclDefaultAction(this.__scope, this.__resources, this.__input);
  }

  public get rules(): shapes.WafActivatedRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.Rules'),
        outputPath: 'WebACL.Rules',
        parameters: {
          WebACLId: this.__input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWebACL.WebACL.Rules', props);
    return resource.getResponseField('WebACL.Rules') as unknown as shapes.WafActivatedRule[];
  }

  public get webAclArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.WebACLArn'),
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

export class WAFResponsesFetchWebAclWebAclDefaultAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetWebAclRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.DefaultAction.Type'),
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

export class WAFResponsesFetchXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetXssMatchSetRequest) {
  }

  public get xssMatchSet(): WAFResponsesFetchXssMatchSetXssMatchSet {
    return new WAFResponsesFetchXssMatchSetXssMatchSet(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesFetchXssMatchSetXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafGetXssMatchSetRequest) {
  }

  public get xssMatchSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetXssMatchSet.XssMatchSet.XssMatchSetId'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetXssMatchSet.XssMatchSet.Name'),
        outputPath: 'XssMatchSet.Name',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetXssMatchSet.XssMatchSet.Name', props);
    return resource.getResponseField('XssMatchSet.Name') as unknown as string;
  }

  public get xssMatchTuples(): shapes.WafXssMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetXssMatchSet.XssMatchSet.XssMatchTuples'),
        outputPath: 'XssMatchSet.XssMatchTuples',
        parameters: {
          XssMatchSetId: this.__input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafXssMatchTuple[];
  }

}

export class WAFResponsesListActivatedRulesInRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListActivatedRulesInRuleGroupRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActivatedRulesInRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListActivatedRulesInRuleGroup.NextMarker'),
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

  public get activatedRules(): shapes.WafActivatedRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActivatedRulesInRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListActivatedRulesInRuleGroup.ActivatedRules'),
        outputPath: 'ActivatedRules',
        parameters: {
          RuleGroupId: this.__input.ruleGroupId,
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActivatedRulesInRuleGroup.ActivatedRules', props);
    return resource.getResponseField('ActivatedRules') as unknown as shapes.WafActivatedRule[];
  }

}

export class WAFResponsesListByteMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListByteMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listByteMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListByteMatchSets.NextMarker'),
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

  public get byteMatchSets(): shapes.WafByteMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listByteMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListByteMatchSets.ByteMatchSets'),
        outputPath: 'ByteMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListByteMatchSets.ByteMatchSets', props);
    return resource.getResponseField('ByteMatchSets') as unknown as shapes.WafByteMatchSetSummary[];
  }

}

export class WAFResponsesListGeoMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListGeoMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListGeoMatchSets.NextMarker'),
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

  public get geoMatchSets(): shapes.WafGeoMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeoMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListGeoMatchSets.GeoMatchSets'),
        outputPath: 'GeoMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeoMatchSets.GeoMatchSets', props);
    return resource.getResponseField('GeoMatchSets') as unknown as shapes.WafGeoMatchSetSummary[];
  }

}

export class WAFResponsesListIpSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListIpSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListIPSets.NextMarker'),
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

  public get ipSets(): shapes.WafipSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIpSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListIPSets.IPSets'),
        outputPath: 'IPSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIPSets.IPSets', props);
    return resource.getResponseField('IPSets') as unknown as shapes.WafipSetSummary[];
  }

}

export class WAFResponsesListLoggingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListLoggingConfigurationsRequest) {
  }

  public get loggingConfigurations(): shapes.WafLoggingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggingConfigurations',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListLoggingConfigurations.LoggingConfigurations'),
        outputPath: 'LoggingConfigurations',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLoggingConfigurations.LoggingConfigurations', props);
    return resource.getResponseField('LoggingConfigurations') as unknown as shapes.WafLoggingConfiguration[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLoggingConfigurations',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListLoggingConfigurations.NextMarker'),
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

export class WAFResponsesListRateBasedRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListRateBasedRulesRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRateBasedRules',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRateBasedRules.NextMarker'),
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

  public get rules(): shapes.WafRuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRateBasedRules',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRateBasedRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRateBasedRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRuleSummary[];
  }

}

export class WAFResponsesListRegexMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListRegexMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRegexMatchSets.NextMarker'),
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

  public get regexMatchSets(): shapes.WafRegexMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRegexMatchSets.RegexMatchSets'),
        outputPath: 'RegexMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexMatchSets.RegexMatchSets', props);
    return resource.getResponseField('RegexMatchSets') as unknown as shapes.WafRegexMatchSetSummary[];
  }

}

export class WAFResponsesListRegexPatternSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListRegexPatternSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexPatternSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRegexPatternSets.NextMarker'),
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

  public get regexPatternSets(): shapes.WafRegexPatternSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegexPatternSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRegexPatternSets.RegexPatternSets'),
        outputPath: 'RegexPatternSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegexPatternSets.RegexPatternSets', props);
    return resource.getResponseField('RegexPatternSets') as unknown as shapes.WafRegexPatternSetSummary[];
  }

}

export class WAFResponsesListRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListRuleGroupsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRuleGroups.NextMarker'),
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

  public get ruleGroups(): shapes.WafRuleGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuleGroups',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRuleGroups.RuleGroups'),
        outputPath: 'RuleGroups',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafRuleGroupSummary[];
  }

}

export class WAFResponsesListRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListRulesRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRules.NextMarker'),
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

  public get rules(): shapes.WafRuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRules',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListRules.Rules'),
        outputPath: 'Rules',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRuleSummary[];
  }

}

export class WAFResponsesListSizeConstraintSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListSizeConstraintSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSizeConstraintSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListSizeConstraintSets.NextMarker'),
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

  public get sizeConstraintSets(): shapes.WafSizeConstraintSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSizeConstraintSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListSizeConstraintSets.SizeConstraintSets'),
        outputPath: 'SizeConstraintSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSizeConstraintSets.SizeConstraintSets', props);
    return resource.getResponseField('SizeConstraintSets') as unknown as shapes.WafSizeConstraintSetSummary[];
  }

}

export class WAFResponsesListSqlInjectionMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListSqlInjectionMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSqlInjectionMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListSqlInjectionMatchSets.NextMarker'),
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

  public get sqlInjectionMatchSets(): shapes.WafSqlInjectionMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSqlInjectionMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListSqlInjectionMatchSets.SqlInjectionMatchSets'),
        outputPath: 'SqlInjectionMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSqlInjectionMatchSets.SqlInjectionMatchSets', props);
    return resource.getResponseField('SqlInjectionMatchSets') as unknown as shapes.WafSqlInjectionMatchSetSummary[];
  }

}

export class WAFResponsesListSubscribedRuleGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListSubscribedRuleGroupsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscribedRuleGroups',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListSubscribedRuleGroups.NextMarker'),
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

  public get ruleGroups(): shapes.WafSubscribedRuleGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscribedRuleGroups',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListSubscribedRuleGroups.RuleGroups'),
        outputPath: 'RuleGroups',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscribedRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafSubscribedRuleGroupSummary[];
  }

}

export class WAFResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListTagsForResourceRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListTagsForResource.NextMarker'),
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

  public get tagInfoForResource(): WAFResponsesListTagsForResourceTagInfoForResource {
    return new WAFResponsesListTagsForResourceTagInfoForResource(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesListTagsForResourceTagInfoForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListTagsForResourceRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListTagsForResource.TagInfoForResource.ResourceARN'),
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

  public get tagList(): shapes.WafTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListTagsForResource.TagInfoForResource.TagList'),
        outputPath: 'TagInfoForResource.TagList',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagInfoForResource.TagList', props);
    return resource.getResponseField('TagInfoForResource.TagList') as unknown as shapes.WafTag[];
  }

}

export class WAFResponsesListWebAcLs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListWebAcLsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebAcLs',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListWebACLs.NextMarker'),
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

  public get webAcLs(): shapes.WafWebAclSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebAcLs',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListWebACLs.WebACLs'),
        outputPath: 'WebACLs',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebACLs.WebACLs', props);
    return resource.getResponseField('WebACLs') as unknown as shapes.WafWebAclSummary[];
  }

}

export class WAFResponsesListXssMatchSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafListXssMatchSetsRequest) {
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listXssMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListXssMatchSets.NextMarker'),
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

  public get xssMatchSets(): shapes.WafXssMatchSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listXssMatchSets',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.ListXssMatchSets.XssMatchSets'),
        outputPath: 'XssMatchSets',
        parameters: {
          NextMarker: this.__input.nextMarker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListXssMatchSets.XssMatchSets', props);
    return resource.getResponseField('XssMatchSets') as unknown as shapes.WafXssMatchSetSummary[];
  }

}

export class WAFResponsesPutLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafPutLoggingConfigurationRequest) {
  }

  public get loggingConfiguration(): WAFResponsesPutLoggingConfigurationLoggingConfiguration {
    return new WAFResponsesPutLoggingConfigurationLoggingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class WAFResponsesPutLoggingConfigurationLoggingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafPutLoggingConfigurationRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.PutLoggingConfiguration.LoggingConfiguration.ResourceArn'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
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

  public get redactedFields(): shapes.WafFieldToMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingConfiguration',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.PutLoggingConfiguration.LoggingConfiguration.RedactedFields'),
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
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafFieldToMatch[];
  }

}

export class WAFResponsesUpdateByteMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateByteMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateByteMatchSet.ChangeToken'),
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

export class WAFResponsesUpdateGeoMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateGeoMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateGeoMatchSet.ChangeToken'),
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

export class WAFResponsesUpdateIpSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateIpSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateIPSet.ChangeToken'),
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

export class WAFResponsesUpdateRateBasedRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateRateBasedRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateRateBasedRule.ChangeToken'),
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

export class WAFResponsesUpdateRegexMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateRegexMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateRegexMatchSet.ChangeToken'),
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

export class WAFResponsesUpdateRegexPatternSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateRegexPatternSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegexPatternSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateRegexPatternSet.ChangeToken'),
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

export class WAFResponsesUpdateRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateRuleRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateRule.ChangeToken'),
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

export class WAFResponsesUpdateRuleGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateRuleGroupRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRuleGroup',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateRuleGroup.ChangeToken'),
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

export class WAFResponsesUpdateSizeConstraintSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateSizeConstraintSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateSizeConstraintSet.ChangeToken'),
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

export class WAFResponsesUpdateSqlInjectionMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateSqlInjectionMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateSqlInjectionMatchSet.ChangeToken'),
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

export class WAFResponsesUpdateWebAcl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateWebAclRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWebAcl',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateWebACL.ChangeToken'),
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

export class WAFResponsesUpdateXssMatchSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WafUpdateXssMatchSetRequest) {
  }

  public get changeToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.UpdateXssMatchSet.ChangeToken'),
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

