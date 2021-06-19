import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class InspectorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addAttributesToFindings(input: shapes.InspectorAddAttributesToFindingsRequest): InspectorResponsesAddAttributesToFindings {
    return new InspectorResponsesAddAttributesToFindings(this, this.__resources, input);
  }

  public createAssessmentTarget(input: shapes.InspectorCreateAssessmentTargetRequest): InspectorResponsesCreateAssessmentTarget {
    return new InspectorResponsesCreateAssessmentTarget(this, this.__resources, input);
  }

  public createAssessmentTemplate(input: shapes.InspectorCreateAssessmentTemplateRequest): InspectorResponsesCreateAssessmentTemplate {
    return new InspectorResponsesCreateAssessmentTemplate(this, this.__resources, input);
  }

  public createExclusionsPreview(input: shapes.InspectorCreateExclusionsPreviewRequest): InspectorResponsesCreateExclusionsPreview {
    return new InspectorResponsesCreateExclusionsPreview(this, this.__resources, input);
  }

  public createResourceGroup(input: shapes.InspectorCreateResourceGroupRequest): InspectorResponsesCreateResourceGroup {
    return new InspectorResponsesCreateResourceGroup(this, this.__resources, input);
  }

  public deleteAssessmentRun(input: shapes.InspectorDeleteAssessmentRunRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssessmentRun',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DeleteAssessmentRun'),
        parameters: {
          assessmentRunArn: input.assessmentRunArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssessmentRun', props);
  }

  public deleteAssessmentTarget(input: shapes.InspectorDeleteAssessmentTargetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssessmentTarget',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DeleteAssessmentTarget'),
        parameters: {
          assessmentTargetArn: input.assessmentTargetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssessmentTarget', props);
  }

  public deleteAssessmentTemplate(input: shapes.InspectorDeleteAssessmentTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssessmentTemplate',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DeleteAssessmentTemplate'),
        parameters: {
          assessmentTemplateArn: input.assessmentTemplateArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssessmentTemplate', props);
  }

  public describeAssessmentRuns(input: shapes.InspectorDescribeAssessmentRunsRequest): InspectorResponsesDescribeAssessmentRuns {
    return new InspectorResponsesDescribeAssessmentRuns(this, this.__resources, input);
  }

  public describeAssessmentTargets(input: shapes.InspectorDescribeAssessmentTargetsRequest): InspectorResponsesDescribeAssessmentTargets {
    return new InspectorResponsesDescribeAssessmentTargets(this, this.__resources, input);
  }

  public describeAssessmentTemplates(input: shapes.InspectorDescribeAssessmentTemplatesRequest): InspectorResponsesDescribeAssessmentTemplates {
    return new InspectorResponsesDescribeAssessmentTemplates(this, this.__resources, input);
  }

  public describeCrossAccountAccessRole(): InspectorResponsesDescribeCrossAccountAccessRole {
    return new InspectorResponsesDescribeCrossAccountAccessRole(this, this.__resources);
  }

  public describeExclusions(input: shapes.InspectorDescribeExclusionsRequest): InspectorResponsesDescribeExclusions {
    return new InspectorResponsesDescribeExclusions(this, this.__resources, input);
  }

  public describeFindings(input: shapes.InspectorDescribeFindingsRequest): InspectorResponsesDescribeFindings {
    return new InspectorResponsesDescribeFindings(this, this.__resources, input);
  }

  public describeResourceGroups(input: shapes.InspectorDescribeResourceGroupsRequest): InspectorResponsesDescribeResourceGroups {
    return new InspectorResponsesDescribeResourceGroups(this, this.__resources, input);
  }

  public describeRulesPackages(input: shapes.InspectorDescribeRulesPackagesRequest): InspectorResponsesDescribeRulesPackages {
    return new InspectorResponsesDescribeRulesPackages(this, this.__resources, input);
  }

  public fetchAssessmentReport(input: shapes.InspectorGetAssessmentReportRequest): InspectorResponsesFetchAssessmentReport {
    return new InspectorResponsesFetchAssessmentReport(this, this.__resources, input);
  }

  public fetchExclusionsPreview(input: shapes.InspectorGetExclusionsPreviewRequest): InspectorResponsesFetchExclusionsPreview {
    return new InspectorResponsesFetchExclusionsPreview(this, this.__resources, input);
  }

  public fetchTelemetryMetadata(input: shapes.InspectorGetTelemetryMetadataRequest): InspectorResponsesFetchTelemetryMetadata {
    return new InspectorResponsesFetchTelemetryMetadata(this, this.__resources, input);
  }

  public listAssessmentRunAgents(input: shapes.InspectorListAssessmentRunAgentsRequest): InspectorResponsesListAssessmentRunAgents {
    return new InspectorResponsesListAssessmentRunAgents(this, this.__resources, input);
  }

  public listAssessmentRuns(input: shapes.InspectorListAssessmentRunsRequest): InspectorResponsesListAssessmentRuns {
    return new InspectorResponsesListAssessmentRuns(this, this.__resources, input);
  }

  public listAssessmentTargets(input: shapes.InspectorListAssessmentTargetsRequest): InspectorResponsesListAssessmentTargets {
    return new InspectorResponsesListAssessmentTargets(this, this.__resources, input);
  }

  public listAssessmentTemplates(input: shapes.InspectorListAssessmentTemplatesRequest): InspectorResponsesListAssessmentTemplates {
    return new InspectorResponsesListAssessmentTemplates(this, this.__resources, input);
  }

  public listEventSubscriptions(input: shapes.InspectorListEventSubscriptionsRequest): InspectorResponsesListEventSubscriptions {
    return new InspectorResponsesListEventSubscriptions(this, this.__resources, input);
  }

  public listExclusions(input: shapes.InspectorListExclusionsRequest): InspectorResponsesListExclusions {
    return new InspectorResponsesListExclusions(this, this.__resources, input);
  }

  public listFindings(input: shapes.InspectorListFindingsRequest): InspectorResponsesListFindings {
    return new InspectorResponsesListFindings(this, this.__resources, input);
  }

  public listRulesPackages(input: shapes.InspectorListRulesPackagesRequest): InspectorResponsesListRulesPackages {
    return new InspectorResponsesListRulesPackages(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.InspectorListTagsForResourceRequest): InspectorResponsesListTagsForResource {
    return new InspectorResponsesListTagsForResource(this, this.__resources, input);
  }

  public previewAgents(input: shapes.InspectorPreviewAgentsRequest): InspectorResponsesPreviewAgents {
    return new InspectorResponsesPreviewAgents(this, this.__resources, input);
  }

  public registerCrossAccountAccessRole(input: shapes.InspectorRegisterCrossAccountAccessRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCrossAccountAccessRole',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.RegisterCrossAccountAccessRole'),
        parameters: {
          roleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterCrossAccountAccessRole', props);
  }

  public removeAttributesFromFindings(input: shapes.InspectorRemoveAttributesFromFindingsRequest): InspectorResponsesRemoveAttributesFromFindings {
    return new InspectorResponsesRemoveAttributesFromFindings(this, this.__resources, input);
  }

  public putTagsForResource(input: shapes.InspectorSetTagsForResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setTagsForResource',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.SetTagsForResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetTagsForResource', props);
  }

  public startAssessmentRun(input: shapes.InspectorStartAssessmentRunRequest): InspectorResponsesStartAssessmentRun {
    return new InspectorResponsesStartAssessmentRun(this, this.__resources, input);
  }

  public stopAssessmentRun(input: shapes.InspectorStopAssessmentRunRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopAssessmentRun',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.StopAssessmentRun'),
        parameters: {
          assessmentRunArn: input.assessmentRunArn,
          stopAction: input.stopAction,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopAssessmentRun', props);
  }

  public subscribeToEvent(input: shapes.InspectorSubscribeToEventRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'subscribeToEvent',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.SubscribeToEvent'),
        parameters: {
          resourceArn: input.resourceArn,
          event: input.event,
          topicArn: input.topicArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SubscribeToEvent', props);
  }

  public unsubscribeFromEvent(input: shapes.InspectorUnsubscribeFromEventRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unsubscribeFromEvent',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.UnsubscribeFromEvent'),
        parameters: {
          resourceArn: input.resourceArn,
          event: input.event,
          topicArn: input.topicArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnsubscribeFromEvent', props);
  }

  public updateAssessmentTarget(input: shapes.InspectorUpdateAssessmentTargetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentTarget',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.UpdateAssessmentTarget'),
        parameters: {
          assessmentTargetArn: input.assessmentTargetArn,
          assessmentTargetName: input.assessmentTargetName,
          resourceGroupArn: input.resourceGroupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAssessmentTarget', props);
  }

}

export class InspectorResponsesAddAttributesToFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorAddAttributesToFindingsRequest) {
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addAttributesToFindings',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.AddAttributesToFindings.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          findingArns: this.__input.findingArns,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddAttributesToFindings.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesCreateAssessmentTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorCreateAssessmentTargetRequest) {
  }

  public get assessmentTargetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentTarget',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.CreateAssessmentTarget.assessmentTargetArn'),
        outputPath: 'assessmentTargetArn',
        parameters: {
          assessmentTargetName: this.__input.assessmentTargetName,
          resourceGroupArn: this.__input.resourceGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentTarget.assessmentTargetArn', props);
    return resource.getResponseField('assessmentTargetArn') as unknown as string;
  }

}

export class InspectorResponsesCreateAssessmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorCreateAssessmentTemplateRequest) {
  }

  public get assessmentTemplateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentTemplate',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.CreateAssessmentTemplate.assessmentTemplateArn'),
        outputPath: 'assessmentTemplateArn',
        parameters: {
          assessmentTargetArn: this.__input.assessmentTargetArn,
          assessmentTemplateName: this.__input.assessmentTemplateName,
          durationInSeconds: this.__input.durationInSeconds,
          rulesPackageArns: this.__input.rulesPackageArns,
          userAttributesForFindings: this.__input.userAttributesForFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentTemplate.assessmentTemplateArn', props);
    return resource.getResponseField('assessmentTemplateArn') as unknown as string;
  }

}

export class InspectorResponsesCreateExclusionsPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorCreateExclusionsPreviewRequest) {
  }

  public get previewToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExclusionsPreview',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.CreateExclusionsPreview.previewToken'),
        outputPath: 'previewToken',
        parameters: {
          assessmentTemplateArn: this.__input.assessmentTemplateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExclusionsPreview.previewToken', props);
    return resource.getResponseField('previewToken') as unknown as string;
  }

}

export class InspectorResponsesCreateResourceGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorCreateResourceGroupRequest) {
  }

  public get resourceGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceGroup',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.CreateResourceGroup.resourceGroupArn'),
        outputPath: 'resourceGroupArn',
        parameters: {
          resourceGroupTags: this.__input.resourceGroupTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceGroup.resourceGroupArn', props);
    return resource.getResponseField('resourceGroupArn') as unknown as string;
  }

}

export class InspectorResponsesDescribeAssessmentRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeAssessmentRunsRequest) {
  }

  public get assessmentRuns(): shapes.InspectorAssessmentRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssessmentRuns',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeAssessmentRuns.assessmentRuns'),
        outputPath: 'assessmentRuns',
        parameters: {
          assessmentRunArns: this.__input.assessmentRunArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssessmentRuns.assessmentRuns', props);
    return resource.getResponseField('assessmentRuns') as unknown as shapes.InspectorAssessmentRun[];
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssessmentRuns',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeAssessmentRuns.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          assessmentRunArns: this.__input.assessmentRunArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssessmentRuns.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesDescribeAssessmentTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeAssessmentTargetsRequest) {
  }

  public get assessmentTargets(): shapes.InspectorAssessmentTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssessmentTargets',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeAssessmentTargets.assessmentTargets'),
        outputPath: 'assessmentTargets',
        parameters: {
          assessmentTargetArns: this.__input.assessmentTargetArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssessmentTargets.assessmentTargets', props);
    return resource.getResponseField('assessmentTargets') as unknown as shapes.InspectorAssessmentTarget[];
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssessmentTargets',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeAssessmentTargets.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          assessmentTargetArns: this.__input.assessmentTargetArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssessmentTargets.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesDescribeAssessmentTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeAssessmentTemplatesRequest) {
  }

  public get assessmentTemplates(): shapes.InspectorAssessmentTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssessmentTemplates',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeAssessmentTemplates.assessmentTemplates'),
        outputPath: 'assessmentTemplates',
        parameters: {
          assessmentTemplateArns: this.__input.assessmentTemplateArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssessmentTemplates.assessmentTemplates', props);
    return resource.getResponseField('assessmentTemplates') as unknown as shapes.InspectorAssessmentTemplate[];
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssessmentTemplates',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeAssessmentTemplates.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          assessmentTemplateArns: this.__input.assessmentTemplateArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssessmentTemplates.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesDescribeCrossAccountAccessRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCrossAccountAccessRole',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeCrossAccountAccessRole.roleArn'),
        outputPath: 'roleArn',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCrossAccountAccessRole.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get valid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCrossAccountAccessRole',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeCrossAccountAccessRole.valid'),
        outputPath: 'valid',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCrossAccountAccessRole.valid', props);
    return resource.getResponseField('valid') as unknown as boolean;
  }

  public get registeredAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCrossAccountAccessRole',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeCrossAccountAccessRole.registeredAt'),
        outputPath: 'registeredAt',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCrossAccountAccessRole.registeredAt', props);
    return resource.getResponseField('registeredAt') as unknown as string;
  }

}

export class InspectorResponsesDescribeExclusions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeExclusionsRequest) {
  }

  public get exclusions(): Record<string, shapes.InspectorExclusion> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExclusions',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeExclusions.exclusions'),
        outputPath: 'exclusions',
        parameters: {
          exclusionArns: this.__input.exclusionArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExclusions.exclusions', props);
    return resource.getResponseField('exclusions') as unknown as Record<string, shapes.InspectorExclusion>;
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExclusions',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeExclusions.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          exclusionArns: this.__input.exclusionArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExclusions.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesDescribeFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeFindingsRequest) {
  }

  public get findings(): shapes.InspectorFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFindings',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeFindings.findings'),
        outputPath: 'findings',
        parameters: {
          findingArns: this.__input.findingArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.InspectorFinding[];
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFindings',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeFindings.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          findingArns: this.__input.findingArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFindings.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesDescribeResourceGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeResourceGroupsRequest) {
  }

  public get resourceGroups(): shapes.InspectorResourceGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourceGroups',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeResourceGroups.resourceGroups'),
        outputPath: 'resourceGroups',
        parameters: {
          resourceGroupArns: this.__input.resourceGroupArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourceGroups.resourceGroups', props);
    return resource.getResponseField('resourceGroups') as unknown as shapes.InspectorResourceGroup[];
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResourceGroups',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeResourceGroups.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          resourceGroupArns: this.__input.resourceGroupArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResourceGroups.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesDescribeRulesPackages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorDescribeRulesPackagesRequest) {
  }

  public get rulesPackages(): shapes.InspectorRulesPackage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRulesPackages',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeRulesPackages.rulesPackages'),
        outputPath: 'rulesPackages',
        parameters: {
          rulesPackageArns: this.__input.rulesPackageArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRulesPackages.rulesPackages', props);
    return resource.getResponseField('rulesPackages') as unknown as shapes.InspectorRulesPackage[];
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRulesPackages',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.DescribeRulesPackages.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          rulesPackageArns: this.__input.rulesPackageArns,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRulesPackages.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesFetchAssessmentReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorGetAssessmentReportRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentReport',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.GetAssessmentReport.status'),
        outputPath: 'status',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
          reportFileFormat: this.__input.reportFileFormat,
          reportType: this.__input.reportType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentReport.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentReport',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.GetAssessmentReport.url'),
        outputPath: 'url',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
          reportFileFormat: this.__input.reportFileFormat,
          reportType: this.__input.reportType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentReport.url', props);
    return resource.getResponseField('url') as unknown as string;
  }

}

export class InspectorResponsesFetchExclusionsPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorGetExclusionsPreviewRequest) {
  }

  public get previewStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExclusionsPreview',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.GetExclusionsPreview.previewStatus'),
        outputPath: 'previewStatus',
        parameters: {
          assessmentTemplateArn: this.__input.assessmentTemplateArn,
          previewToken: this.__input.previewToken,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExclusionsPreview.previewStatus', props);
    return resource.getResponseField('previewStatus') as unknown as string;
  }

  public get exclusionPreviews(): shapes.InspectorExclusionPreview[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExclusionsPreview',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.GetExclusionsPreview.exclusionPreviews'),
        outputPath: 'exclusionPreviews',
        parameters: {
          assessmentTemplateArn: this.__input.assessmentTemplateArn,
          previewToken: this.__input.previewToken,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExclusionsPreview.exclusionPreviews', props);
    return resource.getResponseField('exclusionPreviews') as unknown as shapes.InspectorExclusionPreview[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExclusionsPreview',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.GetExclusionsPreview.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentTemplateArn: this.__input.assessmentTemplateArn,
          previewToken: this.__input.previewToken,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          locale: this.__input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExclusionsPreview.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesFetchTelemetryMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorGetTelemetryMetadataRequest) {
  }

  public get telemetryMetadata(): shapes.InspectorTelemetryMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTelemetryMetadata',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.GetTelemetryMetadata.telemetryMetadata'),
        outputPath: 'telemetryMetadata',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTelemetryMetadata.telemetryMetadata', props);
    return resource.getResponseField('telemetryMetadata') as unknown as shapes.InspectorTelemetryMetadata[];
  }

}

export class InspectorResponsesListAssessmentRunAgents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListAssessmentRunAgentsRequest) {
  }

  public get assessmentRunAgents(): shapes.InspectorAssessmentRunAgent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentRunAgents',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentRunAgents.assessmentRunAgents'),
        outputPath: 'assessmentRunAgents',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
          filter: {
            agentHealths: this.__input.filter?.agentHealths,
            agentHealthCodes: this.__input.filter?.agentHealthCodes,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentRunAgents.assessmentRunAgents', props);
    return resource.getResponseField('assessmentRunAgents') as unknown as shapes.InspectorAssessmentRunAgent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentRunAgents',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentRunAgents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
          filter: {
            agentHealths: this.__input.filter?.agentHealths,
            agentHealthCodes: this.__input.filter?.agentHealthCodes,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentRunAgents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListAssessmentRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListAssessmentRunsRequest) {
  }

  public get assessmentRunArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentRuns',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentRuns.assessmentRunArns'),
        outputPath: 'assessmentRunArns',
        parameters: {
          assessmentTemplateArns: this.__input.assessmentTemplateArns,
          filter: {
            namePattern: this.__input.filter?.namePattern,
            states: this.__input.filter?.states,
            durationRange: {
              minSeconds: this.__input.filter?.durationRange?.minSeconds,
              maxSeconds: this.__input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.__input.filter?.rulesPackageArns,
            startTimeRange: {
              beginDate: this.__input.filter?.startTimeRange?.beginDate,
              endDate: this.__input.filter?.startTimeRange?.endDate,
            },
            completionTimeRange: {
              beginDate: this.__input.filter?.completionTimeRange?.beginDate,
              endDate: this.__input.filter?.completionTimeRange?.endDate,
            },
            stateChangeTimeRange: {
              beginDate: this.__input.filter?.stateChangeTimeRange?.beginDate,
              endDate: this.__input.filter?.stateChangeTimeRange?.endDate,
            },
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentRuns.assessmentRunArns', props);
    return resource.getResponseField('assessmentRunArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentRuns',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentRuns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentTemplateArns: this.__input.assessmentTemplateArns,
          filter: {
            namePattern: this.__input.filter?.namePattern,
            states: this.__input.filter?.states,
            durationRange: {
              minSeconds: this.__input.filter?.durationRange?.minSeconds,
              maxSeconds: this.__input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.__input.filter?.rulesPackageArns,
            startTimeRange: {
              beginDate: this.__input.filter?.startTimeRange?.beginDate,
              endDate: this.__input.filter?.startTimeRange?.endDate,
            },
            completionTimeRange: {
              beginDate: this.__input.filter?.completionTimeRange?.beginDate,
              endDate: this.__input.filter?.completionTimeRange?.endDate,
            },
            stateChangeTimeRange: {
              beginDate: this.__input.filter?.stateChangeTimeRange?.beginDate,
              endDate: this.__input.filter?.stateChangeTimeRange?.endDate,
            },
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListAssessmentTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListAssessmentTargetsRequest) {
  }

  public get assessmentTargetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentTargets',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentTargets.assessmentTargetArns'),
        outputPath: 'assessmentTargetArns',
        parameters: {
          filter: {
            assessmentTargetNamePattern: this.__input.filter?.assessmentTargetNamePattern,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentTargets.assessmentTargetArns', props);
    return resource.getResponseField('assessmentTargetArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentTargets',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentTargets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filter: {
            assessmentTargetNamePattern: this.__input.filter?.assessmentTargetNamePattern,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentTargets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListAssessmentTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListAssessmentTemplatesRequest) {
  }

  public get assessmentTemplateArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentTemplates',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentTemplates.assessmentTemplateArns'),
        outputPath: 'assessmentTemplateArns',
        parameters: {
          assessmentTargetArns: this.__input.assessmentTargetArns,
          filter: {
            namePattern: this.__input.filter?.namePattern,
            durationRange: {
              minSeconds: this.__input.filter?.durationRange?.minSeconds,
              maxSeconds: this.__input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.__input.filter?.rulesPackageArns,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentTemplates.assessmentTemplateArns', props);
    return resource.getResponseField('assessmentTemplateArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentTemplates',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListAssessmentTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentTargetArns: this.__input.assessmentTargetArns,
          filter: {
            namePattern: this.__input.filter?.namePattern,
            durationRange: {
              minSeconds: this.__input.filter?.durationRange?.minSeconds,
              maxSeconds: this.__input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.__input.filter?.rulesPackageArns,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListEventSubscriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListEventSubscriptionsRequest) {
  }

  public get subscriptions(): shapes.InspectorSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventSubscriptions',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListEventSubscriptions.subscriptions'),
        outputPath: 'subscriptions',
        parameters: {
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventSubscriptions.subscriptions', props);
    return resource.getResponseField('subscriptions') as unknown as shapes.InspectorSubscription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventSubscriptions',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListEventSubscriptions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventSubscriptions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListExclusions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListExclusionsRequest) {
  }

  public get exclusionArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExclusions',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListExclusions.exclusionArns'),
        outputPath: 'exclusionArns',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExclusions.exclusionArns', props);
    return resource.getResponseField('exclusionArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExclusions',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListExclusions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentRunArn: this.__input.assessmentRunArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExclusions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListFindingsRequest) {
  }

  public get findingArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListFindings.findingArns'),
        outputPath: 'findingArns',
        parameters: {
          assessmentRunArns: this.__input.assessmentRunArns,
          filter: {
            agentIds: this.__input.filter?.agentIds,
            autoScalingGroups: this.__input.filter?.autoScalingGroups,
            ruleNames: this.__input.filter?.ruleNames,
            severities: this.__input.filter?.severities,
            rulesPackageArns: this.__input.filter?.rulesPackageArns,
            attributes: this.__input.filter?.attributes,
            userAttributes: this.__input.filter?.userAttributes,
            creationTimeRange: {
              beginDate: this.__input.filter?.creationTimeRange?.beginDate,
              endDate: this.__input.filter?.creationTimeRange?.endDate,
            },
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.findingArns', props);
    return resource.getResponseField('findingArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFindings',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListFindings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentRunArns: this.__input.assessmentRunArns,
          filter: {
            agentIds: this.__input.filter?.agentIds,
            autoScalingGroups: this.__input.filter?.autoScalingGroups,
            ruleNames: this.__input.filter?.ruleNames,
            severities: this.__input.filter?.severities,
            rulesPackageArns: this.__input.filter?.rulesPackageArns,
            attributes: this.__input.filter?.attributes,
            userAttributes: this.__input.filter?.userAttributes,
            creationTimeRange: {
              beginDate: this.__input.filter?.creationTimeRange?.beginDate,
              endDate: this.__input.filter?.creationTimeRange?.endDate,
            },
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListRulesPackages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListRulesPackagesRequest) {
  }

  public get rulesPackageArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRulesPackages',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListRulesPackages.rulesPackageArns'),
        outputPath: 'rulesPackageArns',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRulesPackages.rulesPackageArns', props);
    return resource.getResponseField('rulesPackageArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRulesPackages',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListRulesPackages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRulesPackages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorListTagsForResourceRequest) {
  }

  public get tags(): shapes.InspectorTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.InspectorTag[];
  }

}

export class InspectorResponsesPreviewAgents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorPreviewAgentsRequest) {
  }

  public get agentPreviews(): shapes.InspectorAgentPreview[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'previewAgents',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.PreviewAgents.agentPreviews'),
        outputPath: 'agentPreviews',
        parameters: {
          previewAgentsArn: this.__input.previewAgentsArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PreviewAgents.agentPreviews', props);
    return resource.getResponseField('agentPreviews') as unknown as shapes.InspectorAgentPreview[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'previewAgents',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.PreviewAgents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          previewAgentsArn: this.__input.previewAgentsArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PreviewAgents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorResponsesRemoveAttributesFromFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorRemoveAttributesFromFindingsRequest) {
  }

  public get failedItems(): Record<string, shapes.InspectorFailedItemDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeAttributesFromFindings',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.RemoveAttributesFromFindings.failedItems'),
        outputPath: 'failedItems',
        parameters: {
          findingArns: this.__input.findingArns,
          attributeKeys: this.__input.attributeKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveAttributesFromFindings.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorResponsesStartAssessmentRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.InspectorStartAssessmentRunRequest) {
  }

  public get assessmentRunArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAssessmentRun',
        service: 'Inspector',
        physicalResourceId: cr.PhysicalResourceId.of('Inspector.StartAssessmentRun.assessmentRunArn'),
        outputPath: 'assessmentRunArn',
        parameters: {
          assessmentTemplateArn: this.__input.assessmentTemplateArn,
          assessmentRunName: this.__input.assessmentRunName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartAssessmentRun.assessmentRunArn', props);
    return resource.getResponseField('assessmentRunArn') as unknown as string;
  }

}

