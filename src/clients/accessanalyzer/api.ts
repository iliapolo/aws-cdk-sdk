import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AccessAnalyzerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public applyArchiveRule(input: shapes.AccessAnalyzerApplyArchiveRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ApplyArchiveRule'),
        parameters: {
          analyzerArn: input.analyzerArn,
          clientToken: input.clientToken,
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ApplyArchiveRule', props);
  }

  public cancelPolicyGeneration(input: shapes.AccessAnalyzerCancelPolicyGenerationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelPolicyGeneration',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.CancelPolicyGeneration'),
        parameters: {
          jobId: input.jobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelPolicyGeneration', props);
  }

  public createAccessPreview(input: shapes.AccessAnalyzerCreateAccessPreviewRequest): AccessAnalyzerResponsesCreateAccessPreview {
    return new AccessAnalyzerResponsesCreateAccessPreview(this, this.__resources, input);
  }

  public createAnalyzer(input: shapes.AccessAnalyzerCreateAnalyzerRequest): AccessAnalyzerResponsesCreateAnalyzer {
    return new AccessAnalyzerResponsesCreateAnalyzer(this, this.__resources, input);
  }

  public createArchiveRule(input: shapes.AccessAnalyzerCreateArchiveRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.CreateArchiveRule'),
        parameters: {
          analyzerName: input.analyzerName,
          clientToken: input.clientToken,
          filter: input.filter,
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateArchiveRule', props);
  }

  public deleteAnalyzer(input: shapes.AccessAnalyzerDeleteAnalyzerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.DeleteAnalyzer'),
        parameters: {
          analyzerName: input.analyzerName,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAnalyzer', props);
  }

  public deleteArchiveRule(input: shapes.AccessAnalyzerDeleteArchiveRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.DeleteArchiveRule'),
        parameters: {
          analyzerName: input.analyzerName,
          clientToken: input.clientToken,
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteArchiveRule', props);
  }

  public fetchAccessPreview(input: shapes.AccessAnalyzerGetAccessPreviewRequest): AccessAnalyzerResponsesFetchAccessPreview {
    return new AccessAnalyzerResponsesFetchAccessPreview(this, this.__resources, input);
  }

  public fetchAnalyzedResource(input: shapes.AccessAnalyzerGetAnalyzedResourceRequest): AccessAnalyzerResponsesFetchAnalyzedResource {
    return new AccessAnalyzerResponsesFetchAnalyzedResource(this, this.__resources, input);
  }

  public fetchAnalyzer(input: shapes.AccessAnalyzerGetAnalyzerRequest): AccessAnalyzerResponsesFetchAnalyzer {
    return new AccessAnalyzerResponsesFetchAnalyzer(this, this.__resources, input);
  }

  public fetchArchiveRule(input: shapes.AccessAnalyzerGetArchiveRuleRequest): AccessAnalyzerResponsesFetchArchiveRule {
    return new AccessAnalyzerResponsesFetchArchiveRule(this, this.__resources, input);
  }

  public fetchFinding(input: shapes.AccessAnalyzerGetFindingRequest): AccessAnalyzerResponsesFetchFinding {
    return new AccessAnalyzerResponsesFetchFinding(this, this.__resources, input);
  }

  public fetchGeneratedPolicy(input: shapes.AccessAnalyzerGetGeneratedPolicyRequest): AccessAnalyzerResponsesFetchGeneratedPolicy {
    return new AccessAnalyzerResponsesFetchGeneratedPolicy(this, this.__resources, input);
  }

  public listAccessPreviewFindings(input: shapes.AccessAnalyzerListAccessPreviewFindingsRequest): AccessAnalyzerResponsesListAccessPreviewFindings {
    return new AccessAnalyzerResponsesListAccessPreviewFindings(this, this.__resources, input);
  }

  public listAccessPreviews(input: shapes.AccessAnalyzerListAccessPreviewsRequest): AccessAnalyzerResponsesListAccessPreviews {
    return new AccessAnalyzerResponsesListAccessPreviews(this, this.__resources, input);
  }

  public listAnalyzedResources(input: shapes.AccessAnalyzerListAnalyzedResourcesRequest): AccessAnalyzerResponsesListAnalyzedResources {
    return new AccessAnalyzerResponsesListAnalyzedResources(this, this.__resources, input);
  }

  public listAnalyzers(input: shapes.AccessAnalyzerListAnalyzersRequest): AccessAnalyzerResponsesListAnalyzers {
    return new AccessAnalyzerResponsesListAnalyzers(this, this.__resources, input);
  }

  public listArchiveRules(input: shapes.AccessAnalyzerListArchiveRulesRequest): AccessAnalyzerResponsesListArchiveRules {
    return new AccessAnalyzerResponsesListArchiveRules(this, this.__resources, input);
  }

  public listFindings(input: shapes.AccessAnalyzerListFindingsRequest): AccessAnalyzerResponsesListFindings {
    return new AccessAnalyzerResponsesListFindings(this, this.__resources, input);
  }

  public listPolicyGenerations(input: shapes.AccessAnalyzerListPolicyGenerationsRequest): AccessAnalyzerResponsesListPolicyGenerations {
    return new AccessAnalyzerResponsesListPolicyGenerations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AccessAnalyzerListTagsForResourceRequest): AccessAnalyzerResponsesListTagsForResource {
    return new AccessAnalyzerResponsesListTagsForResource(this, this.__resources, input);
  }

  public startPolicyGeneration(input: shapes.AccessAnalyzerStartPolicyGenerationRequest): AccessAnalyzerResponsesStartPolicyGeneration {
    return new AccessAnalyzerResponsesStartPolicyGeneration(this, this.__resources, input);
  }

  public startResourceScan(input: shapes.AccessAnalyzerStartResourceScanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startResourceScan',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.StartResourceScan'),
        parameters: {
          analyzerArn: input.analyzerArn,
          resourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartResourceScan', props);
  }

  public tagResource(input: shapes.AccessAnalyzerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AccessAnalyzerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateArchiveRule(input: shapes.AccessAnalyzerUpdateArchiveRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.UpdateArchiveRule'),
        parameters: {
          analyzerName: input.analyzerName,
          clientToken: input.clientToken,
          filter: input.filter,
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateArchiveRule', props);
  }

  public updateFindings(input: shapes.AccessAnalyzerUpdateFindingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFindings',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.UpdateFindings'),
        parameters: {
          analyzerArn: input.analyzerArn,
          clientToken: input.clientToken,
          ids: input.ids,
          resourceArn: input.resourceArn,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFindings', props);
  }

  public validatePolicy(input: shapes.AccessAnalyzerValidatePolicyRequest): AccessAnalyzerResponsesValidatePolicy {
    return new AccessAnalyzerResponsesValidatePolicy(this, this.__resources, input);
  }

}

export class AccessAnalyzerResponsesCreateAccessPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerCreateAccessPreviewRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.CreateAccessPreview.id'),
        outputPath: 'id',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          clientToken: this.__input.clientToken,
          configurations: this.__input.configurations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccessPreview.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

}

export class AccessAnalyzerResponsesCreateAnalyzer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerCreateAnalyzerRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.CreateAnalyzer.arn'),
        outputPath: 'arn',
        parameters: {
          analyzerName: this.__input.analyzerName,
          archiveRules: this.__input.archiveRules,
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnalyzer.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchAccessPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAccessPreviewRequest) {
  }

  public get accessPreview(): AccessAnalyzerResponsesFetchAccessPreviewAccessPreview {
    return new AccessAnalyzerResponsesFetchAccessPreviewAccessPreview(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchAccessPreviewAccessPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAccessPreviewRequest) {
  }

  public get analyzerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAccessPreview.accessPreview.analyzerArn'),
        outputPath: 'accessPreview.analyzerArn',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPreview.accessPreview.analyzerArn', props);
    return resource.getResponseField('accessPreview.analyzerArn') as unknown as string;
  }

  public get configurations(): Record<string, shapes.AccessAnalyzerConfiguration> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAccessPreview.accessPreview.configurations'),
        outputPath: 'accessPreview.configurations',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPreview.accessPreview.configurations', props);
    return resource.getResponseField('accessPreview.configurations') as unknown as Record<string, shapes.AccessAnalyzerConfiguration>;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAccessPreview.accessPreview.createdAt'),
        outputPath: 'accessPreview.createdAt',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPreview.accessPreview.createdAt', props);
    return resource.getResponseField('accessPreview.createdAt') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAccessPreview.accessPreview.id'),
        outputPath: 'accessPreview.id',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPreview.accessPreview.id', props);
    return resource.getResponseField('accessPreview.id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAccessPreview.accessPreview.status'),
        outputPath: 'accessPreview.status',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPreview.accessPreview.status', props);
    return resource.getResponseField('accessPreview.status') as unknown as string;
  }

  public get statusReason(): AccessAnalyzerResponsesFetchAccessPreviewAccessPreviewStatusReason {
    return new AccessAnalyzerResponsesFetchAccessPreviewAccessPreviewStatusReason(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchAccessPreviewAccessPreviewStatusReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAccessPreviewRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessPreview',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAccessPreview.accessPreview.statusReason.code'),
        outputPath: 'accessPreview.statusReason.code',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessPreview.accessPreview.statusReason.code', props);
    return resource.getResponseField('accessPreview.statusReason.code') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchAnalyzedResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAnalyzedResourceRequest) {
  }

  public get resource(): AccessAnalyzerResponsesFetchAnalyzedResourceResource {
    return new AccessAnalyzerResponsesFetchAnalyzedResourceResource(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchAnalyzedResourceResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAnalyzedResourceRequest) {
  }

  public get actions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.actions'),
        outputPath: 'resource.actions',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.actions', props);
    return resource.getResponseField('resource.actions') as unknown as string[];
  }

  public get analyzedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.analyzedAt'),
        outputPath: 'resource.analyzedAt',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.analyzedAt', props);
    return resource.getResponseField('resource.analyzedAt') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.createdAt'),
        outputPath: 'resource.createdAt',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.createdAt', props);
    return resource.getResponseField('resource.createdAt') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.error'),
        outputPath: 'resource.error',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.error', props);
    return resource.getResponseField('resource.error') as unknown as string;
  }

  public get isPublic(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.isPublic'),
        outputPath: 'resource.isPublic',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.isPublic', props);
    return resource.getResponseField('resource.isPublic') as unknown as boolean;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.resourceArn'),
        outputPath: 'resource.resourceArn',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.resourceArn', props);
    return resource.getResponseField('resource.resourceArn') as unknown as string;
  }

  public get resourceOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.resourceOwnerAccount'),
        outputPath: 'resource.resourceOwnerAccount',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.resourceOwnerAccount', props);
    return resource.getResponseField('resource.resourceOwnerAccount') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.resourceType'),
        outputPath: 'resource.resourceType',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.resourceType', props);
    return resource.getResponseField('resource.resourceType') as unknown as string;
  }

  public get sharedVia(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.sharedVia'),
        outputPath: 'resource.sharedVia',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.sharedVia', props);
    return resource.getResponseField('resource.sharedVia') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.status'),
        outputPath: 'resource.status',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.status', props);
    return resource.getResponseField('resource.status') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzedResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzedResource.resource.updatedAt'),
        outputPath: 'resource.updatedAt',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzedResource.resource.updatedAt', props);
    return resource.getResponseField('resource.updatedAt') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchAnalyzer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAnalyzerRequest) {
  }

  public get analyzer(): AccessAnalyzerResponsesFetchAnalyzerAnalyzer {
    return new AccessAnalyzerResponsesFetchAnalyzerAnalyzer(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchAnalyzerAnalyzer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAnalyzerRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.arn'),
        outputPath: 'analyzer.arn',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.arn', props);
    return resource.getResponseField('analyzer.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.createdAt'),
        outputPath: 'analyzer.createdAt',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.createdAt', props);
    return resource.getResponseField('analyzer.createdAt') as unknown as string;
  }

  public get lastResourceAnalyzed(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.lastResourceAnalyzed'),
        outputPath: 'analyzer.lastResourceAnalyzed',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.lastResourceAnalyzed', props);
    return resource.getResponseField('analyzer.lastResourceAnalyzed') as unknown as string;
  }

  public get lastResourceAnalyzedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.lastResourceAnalyzedAt'),
        outputPath: 'analyzer.lastResourceAnalyzedAt',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.lastResourceAnalyzedAt', props);
    return resource.getResponseField('analyzer.lastResourceAnalyzedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.name'),
        outputPath: 'analyzer.name',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.name', props);
    return resource.getResponseField('analyzer.name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.status'),
        outputPath: 'analyzer.status',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.status', props);
    return resource.getResponseField('analyzer.status') as unknown as string;
  }

  public get statusReason(): AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason {
    return new AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.tags'),
        outputPath: 'analyzer.tags',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.tags', props);
    return resource.getResponseField('analyzer.tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.type'),
        outputPath: 'analyzer.type',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.type', props);
    return resource.getResponseField('analyzer.type') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetAnalyzerRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAnalyzer',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetAnalyzer.analyzer.statusReason.code'),
        outputPath: 'analyzer.statusReason.code',
        parameters: {
          analyzerName: this.__input.analyzerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAnalyzer.analyzer.statusReason.code', props);
    return resource.getResponseField('analyzer.statusReason.code') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchArchiveRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetArchiveRuleRequest) {
  }

  public get archiveRule(): AccessAnalyzerResponsesFetchArchiveRuleArchiveRule {
    return new AccessAnalyzerResponsesFetchArchiveRuleArchiveRule(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchArchiveRuleArchiveRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetArchiveRuleRequest) {
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetArchiveRule.archiveRule.createdAt'),
        outputPath: 'archiveRule.createdAt',
        parameters: {
          analyzerName: this.__input.analyzerName,
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchiveRule.archiveRule.createdAt', props);
    return resource.getResponseField('archiveRule.createdAt') as unknown as string;
  }

  public get filter(): Record<string, shapes.AccessAnalyzerCriterion> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetArchiveRule.archiveRule.filter'),
        outputPath: 'archiveRule.filter',
        parameters: {
          analyzerName: this.__input.analyzerName,
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchiveRule.archiveRule.filter', props);
    return resource.getResponseField('archiveRule.filter') as unknown as Record<string, shapes.AccessAnalyzerCriterion>;
  }

  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetArchiveRule.archiveRule.ruleName'),
        outputPath: 'archiveRule.ruleName',
        parameters: {
          analyzerName: this.__input.analyzerName,
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchiveRule.archiveRule.ruleName', props);
    return resource.getResponseField('archiveRule.ruleName') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getArchiveRule',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetArchiveRule.archiveRule.updatedAt'),
        outputPath: 'archiveRule.updatedAt',
        parameters: {
          analyzerName: this.__input.analyzerName,
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetArchiveRule.archiveRule.updatedAt', props);
    return resource.getResponseField('archiveRule.updatedAt') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchFinding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetFindingRequest) {
  }

  public get finding(): AccessAnalyzerResponsesFetchFindingFinding {
    return new AccessAnalyzerResponsesFetchFindingFinding(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchFindingFinding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetFindingRequest) {
  }

  public get action(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.action'),
        outputPath: 'finding.action',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.action', props);
    return resource.getResponseField('finding.action') as unknown as string[];
  }

  public get analyzedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.analyzedAt'),
        outputPath: 'finding.analyzedAt',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.analyzedAt', props);
    return resource.getResponseField('finding.analyzedAt') as unknown as string;
  }

  public get condition(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.condition'),
        outputPath: 'finding.condition',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.condition', props);
    return resource.getResponseField('finding.condition') as unknown as Record<string, string>;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.createdAt'),
        outputPath: 'finding.createdAt',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.createdAt', props);
    return resource.getResponseField('finding.createdAt') as unknown as string;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.error'),
        outputPath: 'finding.error',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.error', props);
    return resource.getResponseField('finding.error') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.id'),
        outputPath: 'finding.id',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.id', props);
    return resource.getResponseField('finding.id') as unknown as string;
  }

  public get isPublic(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.isPublic'),
        outputPath: 'finding.isPublic',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.isPublic', props);
    return resource.getResponseField('finding.isPublic') as unknown as boolean;
  }

  public get principal(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.principal'),
        outputPath: 'finding.principal',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.principal', props);
    return resource.getResponseField('finding.principal') as unknown as Record<string, string>;
  }

  public get resource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.resource'),
        outputPath: 'finding.resource',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.resource', props);
    return resource.getResponseField('finding.resource') as unknown as string;
  }

  public get resourceOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.resourceOwnerAccount'),
        outputPath: 'finding.resourceOwnerAccount',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.resourceOwnerAccount', props);
    return resource.getResponseField('finding.resourceOwnerAccount') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.resourceType'),
        outputPath: 'finding.resourceType',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.resourceType', props);
    return resource.getResponseField('finding.resourceType') as unknown as string;
  }

  public get sources(): shapes.AccessAnalyzerFindingSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.sources'),
        outputPath: 'finding.sources',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.sources', props);
    return resource.getResponseField('finding.sources') as unknown as shapes.AccessAnalyzerFindingSource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.status'),
        outputPath: 'finding.status',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.status', props);
    return resource.getResponseField('finding.status') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFinding',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetFinding.finding.updatedAt'),
        outputPath: 'finding.updatedAt',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFinding.finding.updatedAt', props);
    return resource.getResponseField('finding.updatedAt') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchGeneratedPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetGeneratedPolicyRequest) {
  }

  public get generatedPolicyResult(): AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResult {
    return new AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResult(this.__scope, this.__resources, this.__input);
  }

  public get jobDetails(): AccessAnalyzerResponsesFetchGeneratedPolicyJobDetails {
    return new AccessAnalyzerResponsesFetchGeneratedPolicyJobDetails(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetGeneratedPolicyRequest) {
  }

  public get generatedPolicies(): shapes.AccessAnalyzerGeneratedPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.generatedPolicyResult.generatedPolicies'),
        outputPath: 'generatedPolicyResult.generatedPolicies',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.generatedPolicyResult.generatedPolicies', props);
    return resource.getResponseField('generatedPolicyResult.generatedPolicies') as unknown as shapes.AccessAnalyzerGeneratedPolicy[];
  }

  public get properties(): AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResultProperties {
    return new AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResultProperties(this.__scope, this.__resources, this.__input);
  }

}

export class AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResultProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetGeneratedPolicyRequest) {
  }

  public get cloudTrailProperties(): AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResultPropertiesCloudTrailProperties {
    return new AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResultPropertiesCloudTrailProperties(this.__scope, this.__resources, this.__input);
  }

  public get isComplete(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.generatedPolicyResult.properties.isComplete'),
        outputPath: 'generatedPolicyResult.properties.isComplete',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.generatedPolicyResult.properties.isComplete', props);
    return resource.getResponseField('generatedPolicyResult.properties.isComplete') as unknown as boolean;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.generatedPolicyResult.properties.principalArn'),
        outputPath: 'generatedPolicyResult.properties.principalArn',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.generatedPolicyResult.properties.principalArn', props);
    return resource.getResponseField('generatedPolicyResult.properties.principalArn') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchGeneratedPolicyGeneratedPolicyResultPropertiesCloudTrailProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetGeneratedPolicyRequest) {
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.generatedPolicyResult.properties.cloudTrailProperties.endTime'),
        outputPath: 'generatedPolicyResult.properties.cloudTrailProperties.endTime',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.generatedPolicyResult.properties.cloudTrailProperties.endTime', props);
    return resource.getResponseField('generatedPolicyResult.properties.cloudTrailProperties.endTime') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.generatedPolicyResult.properties.cloudTrailProperties.startTime'),
        outputPath: 'generatedPolicyResult.properties.cloudTrailProperties.startTime',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.generatedPolicyResult.properties.cloudTrailProperties.startTime', props);
    return resource.getResponseField('generatedPolicyResult.properties.cloudTrailProperties.startTime') as unknown as string;
  }

  public get trailProperties(): shapes.AccessAnalyzerTrailProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.generatedPolicyResult.properties.cloudTrailProperties.trailProperties'),
        outputPath: 'generatedPolicyResult.properties.cloudTrailProperties.trailProperties',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.generatedPolicyResult.properties.cloudTrailProperties.trailProperties', props);
    return resource.getResponseField('generatedPolicyResult.properties.cloudTrailProperties.trailProperties') as unknown as shapes.AccessAnalyzerTrailProperties[];
  }

}

export class AccessAnalyzerResponsesFetchGeneratedPolicyJobDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetGeneratedPolicyRequest) {
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.jobDetails.completedOn'),
        outputPath: 'jobDetails.completedOn',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.jobDetails.completedOn', props);
    return resource.getResponseField('jobDetails.completedOn') as unknown as string;
  }

  public get jobError(): AccessAnalyzerResponsesFetchGeneratedPolicyJobDetailsJobError {
    return new AccessAnalyzerResponsesFetchGeneratedPolicyJobDetailsJobError(this.__scope, this.__resources, this.__input);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.jobDetails.jobId'),
        outputPath: 'jobDetails.jobId',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.jobDetails.jobId', props);
    return resource.getResponseField('jobDetails.jobId') as unknown as string;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.jobDetails.startedOn'),
        outputPath: 'jobDetails.startedOn',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.jobDetails.startedOn', props);
    return resource.getResponseField('jobDetails.startedOn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.jobDetails.status'),
        outputPath: 'jobDetails.status',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.jobDetails.status', props);
    return resource.getResponseField('jobDetails.status') as unknown as string;
  }

}

export class AccessAnalyzerResponsesFetchGeneratedPolicyJobDetailsJobError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerGetGeneratedPolicyRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.jobDetails.jobError.code'),
        outputPath: 'jobDetails.jobError.code',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.jobDetails.jobError.code', props);
    return resource.getResponseField('jobDetails.jobError.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeneratedPolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.GetGeneratedPolicy.jobDetails.jobError.message'),
        outputPath: 'jobDetails.jobError.message',
        parameters: {
          includeResourcePlaceholders: this.__input.includeResourcePlaceholders,
          includeServiceLevelTemplate: this.__input.includeServiceLevelTemplate,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeneratedPolicy.jobDetails.jobError.message', props);
    return resource.getResponseField('jobDetails.jobError.message') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListAccessPreviewFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListAccessPreviewFindingsRequest) {
  }

  public get findings(): shapes.AccessAnalyzerAccessPreviewFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPreviewFindings',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAccessPreviewFindings.findings'),
        outputPath: 'findings',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
          filter: this.__input.filter,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPreviewFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.AccessAnalyzerAccessPreviewFinding[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPreviewFindings',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAccessPreviewFindings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          accessPreviewId: this.__input.accessPreviewId,
          analyzerArn: this.__input.analyzerArn,
          filter: this.__input.filter,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPreviewFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListAccessPreviews {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListAccessPreviewsRequest) {
  }

  public get accessPreviews(): shapes.AccessAnalyzerAccessPreviewSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPreviews',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAccessPreviews.accessPreviews'),
        outputPath: 'accessPreviews',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPreviews.accessPreviews', props);
    return resource.getResponseField('accessPreviews') as unknown as shapes.AccessAnalyzerAccessPreviewSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccessPreviews',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAccessPreviews.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccessPreviews.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListAnalyzedResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListAnalyzedResourcesRequest) {
  }

  public get analyzedResources(): shapes.AccessAnalyzerAnalyzedResourceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyzedResources',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAnalyzedResources.analyzedResources'),
        outputPath: 'analyzedResources',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          resourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyzedResources.analyzedResources', props);
    return resource.getResponseField('analyzedResources') as unknown as shapes.AccessAnalyzerAnalyzedResourceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyzedResources',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAnalyzedResources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          resourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyzedResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListAnalyzers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListAnalyzersRequest) {
  }

  public get analyzers(): shapes.AccessAnalyzerAnalyzerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyzers',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAnalyzers.analyzers'),
        outputPath: 'analyzers',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyzers.analyzers', props);
    return resource.getResponseField('analyzers') as unknown as shapes.AccessAnalyzerAnalyzerSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyzers',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListAnalyzers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyzers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListArchiveRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListArchiveRulesRequest) {
  }

  public get archiveRules(): shapes.AccessAnalyzerArchiveRuleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArchiveRules',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListArchiveRules.archiveRules'),
        outputPath: 'archiveRules',
        parameters: {
          analyzerName: this.__input.analyzerName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArchiveRules.archiveRules', props);
    return resource.getResponseField('archiveRules') as unknown as shapes.AccessAnalyzerArchiveRuleSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArchiveRules',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListArchiveRules.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          analyzerName: this.__input.analyzerName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArchiveRules.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListFindingsRequest) {
  }

  public get findings(): shapes.AccessAnalyzerFindingSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListFindings.findings'),
        outputPath: 'findings',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          filter: this.__input.filter,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sort: {
            attributeName: this.__input.sort?.attributeName,
            orderBy: this.__input.sort?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.AccessAnalyzerFindingSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListFindings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          analyzerArn: this.__input.analyzerArn,
          filter: this.__input.filter,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          sort: {
            attributeName: this.__input.sort?.attributeName,
            orderBy: this.__input.sort?.orderBy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AccessAnalyzerResponsesListPolicyGenerations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListPolicyGenerationsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyGenerations',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListPolicyGenerations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyGenerations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get policyGenerations(): shapes.AccessAnalyzerPolicyGeneration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyGenerations',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListPolicyGenerations.policyGenerations'),
        outputPath: 'policyGenerations',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          principalArn: this.__input.principalArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyGenerations.policyGenerations', props);
    return resource.getResponseField('policyGenerations') as unknown as shapes.AccessAnalyzerPolicyGeneration[];
  }

}

export class AccessAnalyzerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AccessAnalyzerResponsesStartPolicyGeneration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerStartPolicyGenerationRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPolicyGeneration',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.StartPolicyGeneration.jobId'),
        outputPath: 'jobId',
        parameters: {
          clientToken: this.__input.clientToken,
          cloudTrailDetails: {
            accessRole: this.__input.cloudTrailDetails?.accessRole,
            endTime: this.__input.cloudTrailDetails?.endTime,
            startTime: this.__input.cloudTrailDetails?.startTime,
            trails: this.__input.cloudTrailDetails?.trails,
          },
          policyGenerationDetails: {
            principalArn: this.__input.policyGenerationDetails.principalArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPolicyGeneration.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

}

export class AccessAnalyzerResponsesValidatePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AccessAnalyzerValidatePolicyRequest) {
  }

  public get findings(): shapes.AccessAnalyzerValidatePolicyFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validatePolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ValidatePolicy.findings'),
        outputPath: 'findings',
        parameters: {
          locale: this.__input.locale,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          policyDocument: this.__input.policyDocument,
          policyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidatePolicy.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.AccessAnalyzerValidatePolicyFinding[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validatePolicy',
        service: 'AccessAnalyzer',
        physicalResourceId: cr.PhysicalResourceId.of('AccessAnalyzer.ValidatePolicy.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          locale: this.__input.locale,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          policyDocument: this.__input.policyDocument,
          policyType: this.__input.policyType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidatePolicy.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

