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

  public listTagsForResource(input: shapes.AccessAnalyzerListTagsForResourceRequest): AccessAnalyzerResponsesListTagsForResource {
    return new AccessAnalyzerResponsesListTagsForResource(this, this.__resources, input);
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

