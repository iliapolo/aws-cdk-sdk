import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WafClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createByteMatchSet(input: shapes.WafCreateByteMatchSetRequest): WAFCreateByteMatchSet {
    return new WAFCreateByteMatchSet(this, 'CreateByteMatchSet', this.__resources, input);
  }

  public createGeoMatchSet(input: shapes.WafCreateGeoMatchSetRequest): WAFCreateGeoMatchSet {
    return new WAFCreateGeoMatchSet(this, 'CreateGeoMatchSet', this.__resources, input);
  }

  public createIpSet(input: shapes.WafCreateIpSetRequest): WAFCreateIpSet {
    return new WAFCreateIpSet(this, 'CreateIpSet', this.__resources, input);
  }

  public createRateBasedRule(input: shapes.WafCreateRateBasedRuleRequest): WAFCreateRateBasedRule {
    return new WAFCreateRateBasedRule(this, 'CreateRateBasedRule', this.__resources, input);
  }

  public createRegexMatchSet(input: shapes.WafCreateRegexMatchSetRequest): WAFCreateRegexMatchSet {
    return new WAFCreateRegexMatchSet(this, 'CreateRegexMatchSet', this.__resources, input);
  }

  public createRegexPatternSet(input: shapes.WafCreateRegexPatternSetRequest): WAFCreateRegexPatternSet {
    return new WAFCreateRegexPatternSet(this, 'CreateRegexPatternSet', this.__resources, input);
  }

  public createRule(input: shapes.WafCreateRuleRequest): WAFCreateRule {
    return new WAFCreateRule(this, 'CreateRule', this.__resources, input);
  }

  public createRuleGroup(input: shapes.WafCreateRuleGroupRequest): WAFCreateRuleGroup {
    return new WAFCreateRuleGroup(this, 'CreateRuleGroup', this.__resources, input);
  }

  public createSizeConstraintSet(input: shapes.WafCreateSizeConstraintSetRequest): WAFCreateSizeConstraintSet {
    return new WAFCreateSizeConstraintSet(this, 'CreateSizeConstraintSet', this.__resources, input);
  }

  public createSqlInjectionMatchSet(input: shapes.WafCreateSqlInjectionMatchSetRequest): WAFCreateSqlInjectionMatchSet {
    return new WAFCreateSqlInjectionMatchSet(this, 'CreateSqlInjectionMatchSet', this.__resources, input);
  }

  public createWebAcl(input: shapes.WafCreateWebAclRequest): WAFCreateWebAcl {
    return new WAFCreateWebAcl(this, 'CreateWebAcl', this.__resources, input);
  }

  public createWebAclMigrationStack(input: shapes.WafCreateWebAclMigrationStackRequest): WAFCreateWebAclMigrationStack {
    return new WAFCreateWebAclMigrationStack(this, 'CreateWebAclMigrationStack', this.__resources, input);
  }

  public createXssMatchSet(input: shapes.WafCreateXssMatchSetRequest): WAFCreateXssMatchSet {
    return new WAFCreateXssMatchSet(this, 'CreateXssMatchSet', this.__resources, input);
  }

  public deleteByteMatchSet(input: shapes.WafDeleteByteMatchSetRequest): WAFDeleteByteMatchSet {
    return new WAFDeleteByteMatchSet(this, 'DeleteByteMatchSet', this.__resources, input);
  }

  public deleteGeoMatchSet(input: shapes.WafDeleteGeoMatchSetRequest): WAFDeleteGeoMatchSet {
    return new WAFDeleteGeoMatchSet(this, 'DeleteGeoMatchSet', this.__resources, input);
  }

  public deleteIpSet(input: shapes.WafDeleteIpSetRequest): WAFDeleteIpSet {
    return new WAFDeleteIpSet(this, 'DeleteIpSet', this.__resources, input);
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

  public deleteRateBasedRule(input: shapes.WafDeleteRateBasedRuleRequest): WAFDeleteRateBasedRule {
    return new WAFDeleteRateBasedRule(this, 'DeleteRateBasedRule', this.__resources, input);
  }

  public deleteRegexMatchSet(input: shapes.WafDeleteRegexMatchSetRequest): WAFDeleteRegexMatchSet {
    return new WAFDeleteRegexMatchSet(this, 'DeleteRegexMatchSet', this.__resources, input);
  }

  public deleteRegexPatternSet(input: shapes.WafDeleteRegexPatternSetRequest): WAFDeleteRegexPatternSet {
    return new WAFDeleteRegexPatternSet(this, 'DeleteRegexPatternSet', this.__resources, input);
  }

  public deleteRule(input: shapes.WafDeleteRuleRequest): WAFDeleteRule {
    return new WAFDeleteRule(this, 'DeleteRule', this.__resources, input);
  }

  public deleteRuleGroup(input: shapes.WafDeleteRuleGroupRequest): WAFDeleteRuleGroup {
    return new WAFDeleteRuleGroup(this, 'DeleteRuleGroup', this.__resources, input);
  }

  public deleteSizeConstraintSet(input: shapes.WafDeleteSizeConstraintSetRequest): WAFDeleteSizeConstraintSet {
    return new WAFDeleteSizeConstraintSet(this, 'DeleteSizeConstraintSet', this.__resources, input);
  }

  public deleteSqlInjectionMatchSet(input: shapes.WafDeleteSqlInjectionMatchSetRequest): WAFDeleteSqlInjectionMatchSet {
    return new WAFDeleteSqlInjectionMatchSet(this, 'DeleteSqlInjectionMatchSet', this.__resources, input);
  }

  public deleteWebAcl(input: shapes.WafDeleteWebAclRequest): WAFDeleteWebAcl {
    return new WAFDeleteWebAcl(this, 'DeleteWebAcl', this.__resources, input);
  }

  public deleteXssMatchSet(input: shapes.WafDeleteXssMatchSetRequest): WAFDeleteXssMatchSet {
    return new WAFDeleteXssMatchSet(this, 'DeleteXssMatchSet', this.__resources, input);
  }

  public fetchByteMatchSet(input: shapes.WafGetByteMatchSetRequest): WAFFetchByteMatchSet {
    return new WAFFetchByteMatchSet(this, 'FetchByteMatchSet', this.__resources, input);
  }

  public fetchChangeToken(): WAFFetchChangeToken {
    return new WAFFetchChangeToken(this, 'FetchChangeToken', this.__resources);
  }

  public fetchChangeTokenStatus(input: shapes.WafGetChangeTokenStatusRequest): WAFFetchChangeTokenStatus {
    return new WAFFetchChangeTokenStatus(this, 'FetchChangeTokenStatus', this.__resources, input);
  }

  public fetchGeoMatchSet(input: shapes.WafGetGeoMatchSetRequest): WAFFetchGeoMatchSet {
    return new WAFFetchGeoMatchSet(this, 'FetchGeoMatchSet', this.__resources, input);
  }

  public fetchIpSet(input: shapes.WafGetIpSetRequest): WAFFetchIpSet {
    return new WAFFetchIpSet(this, 'FetchIpSet', this.__resources, input);
  }

  public fetchLoggingConfiguration(input: shapes.WafGetLoggingConfigurationRequest): WAFFetchLoggingConfiguration {
    return new WAFFetchLoggingConfiguration(this, 'FetchLoggingConfiguration', this.__resources, input);
  }

  public fetchPermissionPolicy(input: shapes.WafGetPermissionPolicyRequest): WAFFetchPermissionPolicy {
    return new WAFFetchPermissionPolicy(this, 'FetchPermissionPolicy', this.__resources, input);
  }

  public fetchRateBasedRule(input: shapes.WafGetRateBasedRuleRequest): WAFFetchRateBasedRule {
    return new WAFFetchRateBasedRule(this, 'FetchRateBasedRule', this.__resources, input);
  }

  public fetchRateBasedRuleManagedKeys(input: shapes.WafGetRateBasedRuleManagedKeysRequest): WAFFetchRateBasedRuleManagedKeys {
    return new WAFFetchRateBasedRuleManagedKeys(this, 'FetchRateBasedRuleManagedKeys', this.__resources, input);
  }

  public fetchRegexMatchSet(input: shapes.WafGetRegexMatchSetRequest): WAFFetchRegexMatchSet {
    return new WAFFetchRegexMatchSet(this, 'FetchRegexMatchSet', this.__resources, input);
  }

  public fetchRegexPatternSet(input: shapes.WafGetRegexPatternSetRequest): WAFFetchRegexPatternSet {
    return new WAFFetchRegexPatternSet(this, 'FetchRegexPatternSet', this.__resources, input);
  }

  public fetchRule(input: shapes.WafGetRuleRequest): WAFFetchRule {
    return new WAFFetchRule(this, 'FetchRule', this.__resources, input);
  }

  public fetchRuleGroup(input: shapes.WafGetRuleGroupRequest): WAFFetchRuleGroup {
    return new WAFFetchRuleGroup(this, 'FetchRuleGroup', this.__resources, input);
  }

  public fetchSampledRequests(input: shapes.WafGetSampledRequestsRequest): WAFFetchSampledRequests {
    return new WAFFetchSampledRequests(this, 'FetchSampledRequests', this.__resources, input);
  }

  public fetchSizeConstraintSet(input: shapes.WafGetSizeConstraintSetRequest): WAFFetchSizeConstraintSet {
    return new WAFFetchSizeConstraintSet(this, 'FetchSizeConstraintSet', this.__resources, input);
  }

  public fetchSqlInjectionMatchSet(input: shapes.WafGetSqlInjectionMatchSetRequest): WAFFetchSqlInjectionMatchSet {
    return new WAFFetchSqlInjectionMatchSet(this, 'FetchSqlInjectionMatchSet', this.__resources, input);
  }

  public fetchWebAcl(input: shapes.WafGetWebAclRequest): WAFFetchWebAcl {
    return new WAFFetchWebAcl(this, 'FetchWebAcl', this.__resources, input);
  }

  public fetchXssMatchSet(input: shapes.WafGetXssMatchSetRequest): WAFFetchXssMatchSet {
    return new WAFFetchXssMatchSet(this, 'FetchXssMatchSet', this.__resources, input);
  }

  public listActivatedRulesInRuleGroup(input: shapes.WafListActivatedRulesInRuleGroupRequest): WAFListActivatedRulesInRuleGroup {
    return new WAFListActivatedRulesInRuleGroup(this, 'ListActivatedRulesInRuleGroup', this.__resources, input);
  }

  public listByteMatchSets(input: shapes.WafListByteMatchSetsRequest): WAFListByteMatchSets {
    return new WAFListByteMatchSets(this, 'ListByteMatchSets', this.__resources, input);
  }

  public listGeoMatchSets(input: shapes.WafListGeoMatchSetsRequest): WAFListGeoMatchSets {
    return new WAFListGeoMatchSets(this, 'ListGeoMatchSets', this.__resources, input);
  }

  public listIpSets(input: shapes.WafListIpSetsRequest): WAFListIpSets {
    return new WAFListIpSets(this, 'ListIpSets', this.__resources, input);
  }

  public listLoggingConfigurations(input: shapes.WafListLoggingConfigurationsRequest): WAFListLoggingConfigurations {
    return new WAFListLoggingConfigurations(this, 'ListLoggingConfigurations', this.__resources, input);
  }

  public listRateBasedRules(input: shapes.WafListRateBasedRulesRequest): WAFListRateBasedRules {
    return new WAFListRateBasedRules(this, 'ListRateBasedRules', this.__resources, input);
  }

  public listRegexMatchSets(input: shapes.WafListRegexMatchSetsRequest): WAFListRegexMatchSets {
    return new WAFListRegexMatchSets(this, 'ListRegexMatchSets', this.__resources, input);
  }

  public listRegexPatternSets(input: shapes.WafListRegexPatternSetsRequest): WAFListRegexPatternSets {
    return new WAFListRegexPatternSets(this, 'ListRegexPatternSets', this.__resources, input);
  }

  public listRuleGroups(input: shapes.WafListRuleGroupsRequest): WAFListRuleGroups {
    return new WAFListRuleGroups(this, 'ListRuleGroups', this.__resources, input);
  }

  public listRules(input: shapes.WafListRulesRequest): WAFListRules {
    return new WAFListRules(this, 'ListRules', this.__resources, input);
  }

  public listSizeConstraintSets(input: shapes.WafListSizeConstraintSetsRequest): WAFListSizeConstraintSets {
    return new WAFListSizeConstraintSets(this, 'ListSizeConstraintSets', this.__resources, input);
  }

  public listSqlInjectionMatchSets(input: shapes.WafListSqlInjectionMatchSetsRequest): WAFListSqlInjectionMatchSets {
    return new WAFListSqlInjectionMatchSets(this, 'ListSqlInjectionMatchSets', this.__resources, input);
  }

  public listSubscribedRuleGroups(input: shapes.WafListSubscribedRuleGroupsRequest): WAFListSubscribedRuleGroups {
    return new WAFListSubscribedRuleGroups(this, 'ListSubscribedRuleGroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.WafListTagsForResourceRequest): WAFListTagsForResource {
    return new WAFListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWebAcLs(input: shapes.WafListWebAcLsRequest): WAFListWebAcLs {
    return new WAFListWebAcLs(this, 'ListWebAcLs', this.__resources, input);
  }

  public listXssMatchSets(input: shapes.WafListXssMatchSetsRequest): WAFListXssMatchSets {
    return new WAFListXssMatchSets(this, 'ListXssMatchSets', this.__resources, input);
  }

  public putLoggingConfiguration(input: shapes.WafPutLoggingConfigurationRequest): WAFPutLoggingConfiguration {
    return new WAFPutLoggingConfiguration(this, 'PutLoggingConfiguration', this.__resources, input);
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

  public updateByteMatchSet(input: shapes.WafUpdateByteMatchSetRequest): WAFUpdateByteMatchSet {
    return new WAFUpdateByteMatchSet(this, 'UpdateByteMatchSet', this.__resources, input);
  }

  public updateGeoMatchSet(input: shapes.WafUpdateGeoMatchSetRequest): WAFUpdateGeoMatchSet {
    return new WAFUpdateGeoMatchSet(this, 'UpdateGeoMatchSet', this.__resources, input);
  }

  public updateIpSet(input: shapes.WafUpdateIpSetRequest): WAFUpdateIpSet {
    return new WAFUpdateIpSet(this, 'UpdateIpSet', this.__resources, input);
  }

  public updateRateBasedRule(input: shapes.WafUpdateRateBasedRuleRequest): WAFUpdateRateBasedRule {
    return new WAFUpdateRateBasedRule(this, 'UpdateRateBasedRule', this.__resources, input);
  }

  public updateRegexMatchSet(input: shapes.WafUpdateRegexMatchSetRequest): WAFUpdateRegexMatchSet {
    return new WAFUpdateRegexMatchSet(this, 'UpdateRegexMatchSet', this.__resources, input);
  }

  public updateRegexPatternSet(input: shapes.WafUpdateRegexPatternSetRequest): WAFUpdateRegexPatternSet {
    return new WAFUpdateRegexPatternSet(this, 'UpdateRegexPatternSet', this.__resources, input);
  }

  public updateRule(input: shapes.WafUpdateRuleRequest): WAFUpdateRule {
    return new WAFUpdateRule(this, 'UpdateRule', this.__resources, input);
  }

  public updateRuleGroup(input: shapes.WafUpdateRuleGroupRequest): WAFUpdateRuleGroup {
    return new WAFUpdateRuleGroup(this, 'UpdateRuleGroup', this.__resources, input);
  }

  public updateSizeConstraintSet(input: shapes.WafUpdateSizeConstraintSetRequest): WAFUpdateSizeConstraintSet {
    return new WAFUpdateSizeConstraintSet(this, 'UpdateSizeConstraintSet', this.__resources, input);
  }

  public updateSqlInjectionMatchSet(input: shapes.WafUpdateSqlInjectionMatchSetRequest): WAFUpdateSqlInjectionMatchSet {
    return new WAFUpdateSqlInjectionMatchSet(this, 'UpdateSqlInjectionMatchSet', this.__resources, input);
  }

  public updateWebAcl(input: shapes.WafUpdateWebAclRequest): WAFUpdateWebAcl {
    return new WAFUpdateWebAcl(this, 'UpdateWebAcl', this.__resources, input);
  }

  public updateXssMatchSet(input: shapes.WafUpdateXssMatchSetRequest): WAFUpdateXssMatchSet {
    return new WAFUpdateXssMatchSet(this, 'UpdateXssMatchSet', this.__resources, input);
  }

}

export class WAFCreateByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateByteMatchSetRequest) {
    super(scope, id);
  }

  public get byteMatchSet(): WAFCreateByteMatchSetByteMatchSet {
    return new WAFCreateByteMatchSetByteMatchSet(this, 'ByteMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateByteMatchSetByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateByteMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateByteMatchSet.ByteMatchSet.Name'),
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

  public get byteMatchTuples(): shapes.WafByteMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createByteMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateByteMatchSet.ByteMatchSet.ByteMatchTuples'),
        outputPath: 'ByteMatchSet.ByteMatchTuples',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafByteMatchTuple[];
  }

}

export class WAFCreateGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateGeoMatchSetRequest) {
    super(scope, id);
  }

  public get geoMatchSet(): WAFCreateGeoMatchSetGeoMatchSet {
    return new WAFCreateGeoMatchSetGeoMatchSet(this, 'GeoMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateGeoMatchSetGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateGeoMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateGeoMatchSet.GeoMatchSet.Name'),
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

  public get geoMatchConstraints(): shapes.WafGeoMatchConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeoMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints'),
        outputPath: 'GeoMatchSet.GeoMatchConstraints',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafGeoMatchConstraint[];
  }

}

export class WAFCreateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateIpSetRequest) {
    super(scope, id);
  }

  public get ipSet(): WAFCreateIpSetIpSet {
    return new WAFCreateIpSetIpSet(this, 'IpSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateIpSetIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateIpSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateIPSet.IPSet.Name'),
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

  public get ipSetDescriptors(): shapes.WafipSetDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateIPSet.IPSet.IPSetDescriptors'),
        outputPath: 'IPSet.IPSetDescriptors',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafipSetDescriptor[];
  }

}

export class WAFCreateRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRateBasedRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFCreateRateBasedRuleRule {
    return new WAFCreateRateBasedRuleRule(this, 'Rule', this.__resources, this.input);
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

export class WAFCreateRateBasedRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRateBasedRuleRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.MetricName'),
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

  public get matchPredicates(): shapes.WafPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRateBasedRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.MatchPredicates'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRateBasedRule.Rule.RateLimit'),
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

export class WAFCreateRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRegexMatchSetRequest) {
    super(scope, id);
  }

  public get regexMatchSet(): WAFCreateRegexMatchSetRegexMatchSet {
    return new WAFCreateRegexMatchSetRegexMatchSet(this, 'RegexMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateRegexMatchSetRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRegexMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexMatchSet.RegexMatchSet.Name'),
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

  public get regexMatchTuples(): shapes.WafRegexMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegexMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples'),
        outputPath: 'RegexMatchSet.RegexMatchTuples',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegexMatchTuple[];
  }

}

export class WAFCreateRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRegexPatternSetRequest) {
    super(scope, id);
  }

  public get regexPatternSet(): WAFCreateRegexPatternSetRegexPatternSet {
    return new WAFCreateRegexPatternSetRegexPatternSet(this, 'RegexPatternSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateRegexPatternSetRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRegexPatternSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexPatternSet.RegexPatternSet.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRegexPatternSet.RegexPatternSet.RegexPatternStrings'),
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

export class WAFCreateRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFCreateRuleRule {
    return new WAFCreateRuleRule(this, 'Rule', this.__resources, this.input);
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

export class WAFCreateRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRuleRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.MetricName'),
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

  public get predicates(): shapes.WafPredicate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRule',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRule.Rule.Predicates'),
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
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafPredicate[];
  }

}

export class WAFCreateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroup(): WAFCreateRuleGroupRuleGroup {
    return new WAFCreateRuleGroupRuleGroup(this, 'RuleGroup', this.__resources, this.input);
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

export class WAFCreateRuleGroupRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateRuleGroupRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRuleGroup.RuleGroup.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateRuleGroup.RuleGroup.MetricName'),
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

export class WAFCreateSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateSizeConstraintSetRequest) {
    super(scope, id);
  }

  public get sizeConstraintSet(): WAFCreateSizeConstraintSetSizeConstraintSet {
    return new WAFCreateSizeConstraintSetSizeConstraintSet(this, 'SizeConstraintSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateSizeConstraintSetSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateSizeConstraintSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSizeConstraintSet.SizeConstraintSet.Name'),
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

  public get sizeConstraints(): shapes.WafSizeConstraint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSizeConstraintSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints'),
        outputPath: 'SizeConstraintSet.SizeConstraints',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafSizeConstraint[];
  }

}

export class WAFCreateSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateSqlInjectionMatchSetRequest) {
    super(scope, id);
  }

  public get sqlInjectionMatchSet(): WAFCreateSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFCreateSqlInjectionMatchSetSqlInjectionMatchSet(this, 'SqlInjectionMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateSqlInjectionMatchSetSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateSqlInjectionMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.Name'),
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

  public get sqlInjectionMatchTuples(): shapes.WafSqlInjectionMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSqlInjectionMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples'),
        outputPath: 'SqlInjectionMatchSet.SqlInjectionMatchTuples',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafSqlInjectionMatchTuple[];
  }

}

export class WAFCreateWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateWebAclRequest) {
    super(scope, id);
  }

  public get webAcl(): WAFCreateWebAclWebAcl {
    return new WAFCreateWebAclWebAcl(this, 'WebAcl', this.__resources, this.input);
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

export class WAFCreateWebAclWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateWebAclRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateWebACL.WebACL.MetricName'),
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

  public get defaultAction(): WAFCreateWebAclWebAclDefaultAction {
    return new WAFCreateWebAclWebAclDefaultAction(this, 'DefaultAction', this.__resources, this.input);
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

export class WAFCreateWebAclWebAclDefaultAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateWebAclRequest) {
    super(scope, id);
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

export class WAFCreateWebAclMigrationStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateWebAclMigrationStackRequest) {
    super(scope, id);
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

export class WAFCreateXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateXssMatchSetRequest) {
    super(scope, id);
  }

  public get xssMatchSet(): WAFCreateXssMatchSetXssMatchSet {
    return new WAFCreateXssMatchSetXssMatchSet(this, 'XssMatchSet', this.__resources, this.input);
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
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFCreateXssMatchSetXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafCreateXssMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateXssMatchSet.XssMatchSet.Name'),
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

  public get xssMatchTuples(): shapes.WafXssMatchTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createXssMatchSet',
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.CreateXssMatchSet.XssMatchSet.XssMatchTuples'),
        outputPath: 'XssMatchSet.XssMatchTuples',
        parameters: {
          Name: this.input.name,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafXssMatchTuple[];
  }

}

export class WAFDeleteByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteByteMatchSetRequest) {
    super(scope, id);
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
          ByteMatchSetId: this.input.byteMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteByteMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteGeoMatchSetRequest) {
    super(scope, id);
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
          GeoMatchSetId: this.input.geoMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGeoMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteIpSetRequest) {
    super(scope, id);
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
          IPSetId: this.input.ipSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIPSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteRateBasedRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRateBasedRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteRegexMatchSetRequest) {
    super(scope, id);
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
          RegexMatchSetId: this.input.regexMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegexMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteRegexPatternSetRequest) {
    super(scope, id);
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
          RegexPatternSetId: this.input.regexPatternSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegexPatternSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteRuleRequest) {
    super(scope, id);
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
          RuleId: this.input.ruleId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRule.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteRuleGroupRequest) {
    super(scope, id);
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
          RuleGroupId: this.input.ruleGroupId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRuleGroup.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteSizeConstraintSetRequest) {
    super(scope, id);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSizeConstraintSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteSqlInjectionMatchSetRequest) {
    super(scope, id);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSqlInjectionMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWebACL.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFDeleteXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafDeleteXssMatchSetRequest) {
    super(scope, id);
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
          XssMatchSetId: this.input.xssMatchSetId,
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteXssMatchSet.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFFetchByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetByteMatchSetRequest) {
    super(scope, id);
  }

  public get byteMatchSet(): WAFFetchByteMatchSetByteMatchSet {
    return new WAFFetchByteMatchSetByteMatchSet(this, 'ByteMatchSet', this.__resources, this.input);
  }

}

export class WAFFetchByteMatchSetByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetByteMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetByteMatchSet.ByteMatchSet.Name'),
        outputPath: 'ByteMatchSet.Name',
        parameters: {
          ByteMatchSetId: this.input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetByteMatchSet.ByteMatchSet.Name', props);
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
          ByteMatchSetId: this.input.byteMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetByteMatchSet.ByteMatchSet.ByteMatchTuples', props);
    return resource.getResponseField('ByteMatchSet.ByteMatchTuples') as unknown as shapes.WafByteMatchTuple[];
  }

}

export class WAFFetchChangeToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetChangeToken.ChangeToken', props);
    return resource.getResponseField('ChangeToken') as unknown as string;
  }

}

export class WAFFetchChangeTokenStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetChangeTokenStatusRequest) {
    super(scope, id);
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
          ChangeToken: this.input.changeToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetChangeTokenStatus.ChangeTokenStatus', props);
    return resource.getResponseField('ChangeTokenStatus') as unknown as string;
  }

}

export class WAFFetchGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetGeoMatchSetRequest) {
    super(scope, id);
  }

  public get geoMatchSet(): WAFFetchGeoMatchSetGeoMatchSet {
    return new WAFFetchGeoMatchSetGeoMatchSet(this, 'GeoMatchSet', this.__resources, this.input);
  }

}

export class WAFFetchGeoMatchSetGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetGeoMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetGeoMatchSet.GeoMatchSet.Name'),
        outputPath: 'GeoMatchSet.Name',
        parameters: {
          GeoMatchSetId: this.input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoMatchSet.GeoMatchSet.Name', props);
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
          GeoMatchSetId: this.input.geoMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGeoMatchSet.GeoMatchSet.GeoMatchConstraints', props);
    return resource.getResponseField('GeoMatchSet.GeoMatchConstraints') as unknown as shapes.WafGeoMatchConstraint[];
  }

}

export class WAFFetchIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetIpSetRequest) {
    super(scope, id);
  }

  public get ipSet(): WAFFetchIpSetIpSet {
    return new WAFFetchIpSetIpSet(this, 'IpSet', this.__resources, this.input);
  }

}

export class WAFFetchIpSetIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetIpSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetIPSet.IPSet.Name'),
        outputPath: 'IPSet.Name',
        parameters: {
          IPSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.Name', props);
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
          IPSetId: this.input.ipSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIPSet.IPSet.IPSetDescriptors', props);
    return resource.getResponseField('IPSet.IPSetDescriptors') as unknown as shapes.WafipSetDescriptor[];
  }

}

export class WAFFetchLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): WAFFetchLoggingConfigurationLoggingConfiguration {
    return new WAFFetchLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class WAFFetchLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetLoggingConfigurationRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
        outputPath: 'LoggingConfiguration.LogDestinationConfigs',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafFieldToMatch[];
  }

}

export class WAFFetchPermissionPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetPermissionPolicyRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPermissionPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class WAFFetchRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRateBasedRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFFetchRateBasedRuleRule {
    return new WAFFetchRateBasedRuleRule(this, 'Rule', this.__resources, this.input);
  }

}

export class WAFFetchRateBasedRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRateBasedRuleRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.MetricName', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRateBasedRule.Rule.MatchPredicates', props);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRule.Rule.RateLimit'),
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

export class WAFFetchRateBasedRuleManagedKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRateBasedRuleManagedKeysRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRateBasedRuleManagedKeys.NextMarker'),
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

export class WAFFetchRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRegexMatchSetRequest) {
    super(scope, id);
  }

  public get regexMatchSet(): WAFFetchRegexMatchSetRegexMatchSet {
    return new WAFFetchRegexMatchSetRegexMatchSet(this, 'RegexMatchSet', this.__resources, this.input);
  }

}

export class WAFFetchRegexMatchSetRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRegexMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexMatchSet.RegexMatchSet.Name'),
        outputPath: 'RegexMatchSet.Name',
        parameters: {
          RegexMatchSetId: this.input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexMatchSet.RegexMatchSet.Name', props);
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
          RegexMatchSetId: this.input.regexMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegexMatchSet.RegexMatchSet.RegexMatchTuples', props);
    return resource.getResponseField('RegexMatchSet.RegexMatchTuples') as unknown as shapes.WafRegexMatchTuple[];
  }

}

export class WAFFetchRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRegexPatternSetRequest) {
    super(scope, id);
  }

  public get regexPatternSet(): WAFFetchRegexPatternSetRegexPatternSet {
    return new WAFFetchRegexPatternSetRegexPatternSet(this, 'RegexPatternSet', this.__resources, this.input);
  }

}

export class WAFFetchRegexPatternSetRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRegexPatternSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexPatternSet.RegexPatternSet.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRegexPatternSet.RegexPatternSet.RegexPatternStrings'),
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

export class WAFFetchRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRuleRequest) {
    super(scope, id);
  }

  public get rule(): WAFFetchRuleRule {
    return new WAFFetchRuleRule(this, 'Rule', this.__resources, this.input);
  }

}

export class WAFFetchRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRuleRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRule.Rule.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRule.Rule.MetricName'),
        outputPath: 'Rule.MetricName',
        parameters: {
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRule.Rule.MetricName', props);
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
          RuleId: this.input.ruleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRule.Rule.Predicates', props);
    return resource.getResponseField('Rule.Predicates') as unknown as shapes.WafPredicate[];
  }

}

export class WAFFetchRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRuleGroupRequest) {
    super(scope, id);
  }

  public get ruleGroup(): WAFFetchRuleGroupRuleGroup {
    return new WAFFetchRuleGroupRuleGroup(this, 'RuleGroup', this.__resources, this.input);
  }

}

export class WAFFetchRuleGroupRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetRuleGroupRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRuleGroup.RuleGroup.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetRuleGroup.RuleGroup.MetricName'),
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

export class WAFFetchSampledRequests extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetSampledRequestsRequest) {
    super(scope, id);
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

  public get timeWindow(): WAFFetchSampledRequestsTimeWindow {
    return new WAFFetchSampledRequestsTimeWindow(this, 'TimeWindow', this.__resources, this.input);
  }

}

export class WAFFetchSampledRequestsTimeWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetSampledRequestsRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSampledRequests.TimeWindow.EndTime'),
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

export class WAFFetchSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetSizeConstraintSetRequest) {
    super(scope, id);
  }

  public get sizeConstraintSet(): WAFFetchSizeConstraintSetSizeConstraintSet {
    return new WAFFetchSizeConstraintSetSizeConstraintSet(this, 'SizeConstraintSet', this.__resources, this.input);
  }

}

export class WAFFetchSizeConstraintSetSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetSizeConstraintSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSizeConstraintSet.SizeConstraintSet.Name'),
        outputPath: 'SizeConstraintSet.Name',
        parameters: {
          SizeConstraintSetId: this.input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSizeConstraintSet.SizeConstraintSet.Name', props);
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
          SizeConstraintSetId: this.input.sizeConstraintSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSizeConstraintSet.SizeConstraintSet.SizeConstraints', props);
    return resource.getResponseField('SizeConstraintSet.SizeConstraints') as unknown as shapes.WafSizeConstraint[];
  }

}

export class WAFFetchSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetSqlInjectionMatchSetRequest) {
    super(scope, id);
  }

  public get sqlInjectionMatchSet(): WAFFetchSqlInjectionMatchSetSqlInjectionMatchSet {
    return new WAFFetchSqlInjectionMatchSetSqlInjectionMatchSet(this, 'SqlInjectionMatchSet', this.__resources, this.input);
  }

}

export class WAFFetchSqlInjectionMatchSetSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetSqlInjectionMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name'),
        outputPath: 'SqlInjectionMatchSet.Name',
        parameters: {
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.Name', props);
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
          SqlInjectionMatchSetId: this.input.sqlInjectionMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSqlInjectionMatchSet.SqlInjectionMatchSet.SqlInjectionMatchTuples', props);
    return resource.getResponseField('SqlInjectionMatchSet.SqlInjectionMatchTuples') as unknown as shapes.WafSqlInjectionMatchTuple[];
  }

}

export class WAFFetchWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetWebAclRequest) {
    super(scope, id);
  }

  public get webAcl(): WAFFetchWebAclWebAcl {
    return new WAFFetchWebAclWebAcl(this, 'WebAcl', this.__resources, this.input);
  }

}

export class WAFFetchWebAclWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetWebAclRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.Name'),
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetWebACL.WebACL.MetricName'),
        outputPath: 'WebACL.MetricName',
        parameters: {
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.MetricName', props);
    return resource.getResponseField('WebACL.MetricName') as unknown as string;
  }

  public get defaultAction(): WAFFetchWebAclWebAclDefaultAction {
    return new WAFFetchWebAclWebAclDefaultAction(this, 'DefaultAction', this.__resources, this.input);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.Rules', props);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.WebACLArn', props);
    return resource.getResponseField('WebACL.WebACLArn') as unknown as string;
  }

}

export class WAFFetchWebAclWebAclDefaultAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetWebAclRequest) {
    super(scope, id);
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
          WebACLId: this.input.webAclId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWebACL.WebACL.DefaultAction.Type', props);
    return resource.getResponseField('WebACL.DefaultAction.Type') as unknown as string;
  }

}

export class WAFFetchXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetXssMatchSetRequest) {
    super(scope, id);
  }

  public get xssMatchSet(): WAFFetchXssMatchSetXssMatchSet {
    return new WAFFetchXssMatchSetXssMatchSet(this, 'XssMatchSet', this.__resources, this.input);
  }

}

export class WAFFetchXssMatchSetXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafGetXssMatchSetRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.GetXssMatchSet.XssMatchSet.Name'),
        outputPath: 'XssMatchSet.Name',
        parameters: {
          XssMatchSetId: this.input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetXssMatchSet.XssMatchSet.Name', props);
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
          XssMatchSetId: this.input.xssMatchSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetXssMatchSet.XssMatchSet.XssMatchTuples', props);
    return resource.getResponseField('XssMatchSet.XssMatchTuples') as unknown as shapes.WafXssMatchTuple[];
  }

}

export class WAFListActivatedRulesInRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListActivatedRulesInRuleGroupRequest) {
    super(scope, id);
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
          RuleGroupId: this.input.ruleGroupId,
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActivatedRulesInRuleGroup.NextMarker', props);
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
          RuleGroupId: this.input.ruleGroupId,
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActivatedRulesInRuleGroup.ActivatedRules', props);
    return resource.getResponseField('ActivatedRules') as unknown as shapes.WafActivatedRule[];
  }

}

export class WAFListByteMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListByteMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListByteMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListByteMatchSets.ByteMatchSets', props);
    return resource.getResponseField('ByteMatchSets') as unknown as shapes.WafByteMatchSetSummary[];
  }

}

export class WAFListGeoMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListGeoMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGeoMatchSets.GeoMatchSets', props);
    return resource.getResponseField('GeoMatchSets') as unknown as shapes.WafGeoMatchSetSummary[];
  }

}

export class WAFListIpSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListIpSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIPSets.IPSets', props);
    return resource.getResponseField('IPSets') as unknown as shapes.WafipSetSummary[];
  }

}

export class WAFListLoggingConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListLoggingConfigurationsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggingConfigurations.LoggingConfigurations', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLoggingConfigurations.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

}

export class WAFListRateBasedRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListRateBasedRulesRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRateBasedRules.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRateBasedRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRuleSummary[];
  }

}

export class WAFListRegexMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListRegexMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexMatchSets.RegexMatchSets', props);
    return resource.getResponseField('RegexMatchSets') as unknown as shapes.WafRegexMatchSetSummary[];
  }

}

export class WAFListRegexPatternSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListRegexPatternSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexPatternSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegexPatternSets.RegexPatternSets', props);
    return resource.getResponseField('RegexPatternSets') as unknown as shapes.WafRegexPatternSetSummary[];
  }

}

export class WAFListRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListRuleGroupsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafRuleGroupSummary[];
  }

}

export class WAFListRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListRulesRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRules.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRules.Rules', props);
    return resource.getResponseField('Rules') as unknown as shapes.WafRuleSummary[];
  }

}

export class WAFListSizeConstraintSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListSizeConstraintSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSizeConstraintSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSizeConstraintSets.SizeConstraintSets', props);
    return resource.getResponseField('SizeConstraintSets') as unknown as shapes.WafSizeConstraintSetSummary[];
  }

}

export class WAFListSqlInjectionMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListSqlInjectionMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSqlInjectionMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSqlInjectionMatchSets.SqlInjectionMatchSets', props);
    return resource.getResponseField('SqlInjectionMatchSets') as unknown as shapes.WafSqlInjectionMatchSetSummary[];
  }

}

export class WAFListSubscribedRuleGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListSubscribedRuleGroupsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscribedRuleGroups.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscribedRuleGroups.RuleGroups', props);
    return resource.getResponseField('RuleGroups') as unknown as shapes.WafSubscribedRuleGroupSummary[];
  }

}

export class WAFListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListTagsForResourceRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get tagInfoForResource(): WAFListTagsForResourceTagInfoForResource {
    return new WAFListTagsForResourceTagInfoForResource(this, 'TagInfoForResource', this.__resources, this.input);
  }

}

export class WAFListTagsForResourceTagInfoForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListTagsForResourceRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagInfoForResource.ResourceARN', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagInfoForResource.TagList', props);
    return resource.getResponseField('TagInfoForResource.TagList') as unknown as shapes.WafTag[];
  }

}

export class WAFListWebAcLs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListWebAcLsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebACLs.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebACLs.WebACLs', props);
    return resource.getResponseField('WebACLs') as unknown as shapes.WafWebAclSummary[];
  }

}

export class WAFListXssMatchSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafListXssMatchSetsRequest) {
    super(scope, id);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListXssMatchSets.NextMarker', props);
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
          NextMarker: this.input.nextMarker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListXssMatchSets.XssMatchSets', props);
    return resource.getResponseField('XssMatchSets') as unknown as shapes.WafXssMatchSetSummary[];
  }

}

export class WAFPutLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafPutLoggingConfigurationRequest) {
    super(scope, id);
  }

  public get loggingConfiguration(): WAFPutLoggingConfigurationLoggingConfiguration {
    return new WAFPutLoggingConfigurationLoggingConfiguration(this, 'LoggingConfiguration', this.__resources, this.input);
  }

}

export class WAFPutLoggingConfigurationLoggingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafPutLoggingConfigurationRequest) {
    super(scope, id);
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
        service: 'WAF',
        physicalResourceId: cr.PhysicalResourceId.of('WAF.PutLoggingConfiguration.LoggingConfiguration.LogDestinationConfigs'),
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
            ResourceArn: this.input.loggingConfiguration.resourceArn,
            LogDestinationConfigs: this.input.loggingConfiguration.logDestinationConfigs,
            RedactedFields: this.input.loggingConfiguration.redactedFields,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLoggingConfiguration.LoggingConfiguration.RedactedFields', props);
    return resource.getResponseField('LoggingConfiguration.RedactedFields') as unknown as shapes.WafFieldToMatch[];
  }

}

export class WAFUpdateByteMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateByteMatchSetRequest) {
    super(scope, id);
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

export class WAFUpdateGeoMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateGeoMatchSetRequest) {
    super(scope, id);
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

export class WAFUpdateIpSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateIpSetRequest) {
    super(scope, id);
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

export class WAFUpdateRateBasedRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateRateBasedRuleRequest) {
    super(scope, id);
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

export class WAFUpdateRegexMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateRegexMatchSetRequest) {
    super(scope, id);
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

export class WAFUpdateRegexPatternSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateRegexPatternSetRequest) {
    super(scope, id);
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

export class WAFUpdateRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateRuleRequest) {
    super(scope, id);
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

export class WAFUpdateRuleGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateRuleGroupRequest) {
    super(scope, id);
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

export class WAFUpdateSizeConstraintSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateSizeConstraintSetRequest) {
    super(scope, id);
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

export class WAFUpdateSqlInjectionMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateSqlInjectionMatchSetRequest) {
    super(scope, id);
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

export class WAFUpdateWebAcl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateWebAclRequest) {
    super(scope, id);
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

export class WAFUpdateXssMatchSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WafUpdateXssMatchSetRequest) {
    super(scope, id);
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

