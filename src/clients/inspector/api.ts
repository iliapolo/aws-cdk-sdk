import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class InspectorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addAttributesToFindings(input: shapes.InspectorAddAttributesToFindingsRequest): InspectorAddAttributesToFindings {
    return new InspectorAddAttributesToFindings(this, 'AddAttributesToFindings', this.__resources, input);
  }

  public createAssessmentTarget(input: shapes.InspectorCreateAssessmentTargetRequest): InspectorCreateAssessmentTarget {
    return new InspectorCreateAssessmentTarget(this, 'CreateAssessmentTarget', this.__resources, input);
  }

  public createAssessmentTemplate(input: shapes.InspectorCreateAssessmentTemplateRequest): InspectorCreateAssessmentTemplate {
    return new InspectorCreateAssessmentTemplate(this, 'CreateAssessmentTemplate', this.__resources, input);
  }

  public createExclusionsPreview(input: shapes.InspectorCreateExclusionsPreviewRequest): InspectorCreateExclusionsPreview {
    return new InspectorCreateExclusionsPreview(this, 'CreateExclusionsPreview', this.__resources, input);
  }

  public createResourceGroup(input: shapes.InspectorCreateResourceGroupRequest): InspectorCreateResourceGroup {
    return new InspectorCreateResourceGroup(this, 'CreateResourceGroup', this.__resources, input);
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

  public describeAssessmentRuns(input: shapes.InspectorDescribeAssessmentRunsRequest): InspectorDescribeAssessmentRuns {
    return new InspectorDescribeAssessmentRuns(this, 'DescribeAssessmentRuns', this.__resources, input);
  }

  public describeAssessmentTargets(input: shapes.InspectorDescribeAssessmentTargetsRequest): InspectorDescribeAssessmentTargets {
    return new InspectorDescribeAssessmentTargets(this, 'DescribeAssessmentTargets', this.__resources, input);
  }

  public describeAssessmentTemplates(input: shapes.InspectorDescribeAssessmentTemplatesRequest): InspectorDescribeAssessmentTemplates {
    return new InspectorDescribeAssessmentTemplates(this, 'DescribeAssessmentTemplates', this.__resources, input);
  }

  public describeCrossAccountAccessRole(): InspectorDescribeCrossAccountAccessRole {
    return new InspectorDescribeCrossAccountAccessRole(this, 'DescribeCrossAccountAccessRole', this.__resources);
  }

  public describeExclusions(input: shapes.InspectorDescribeExclusionsRequest): InspectorDescribeExclusions {
    return new InspectorDescribeExclusions(this, 'DescribeExclusions', this.__resources, input);
  }

  public describeFindings(input: shapes.InspectorDescribeFindingsRequest): InspectorDescribeFindings {
    return new InspectorDescribeFindings(this, 'DescribeFindings', this.__resources, input);
  }

  public describeResourceGroups(input: shapes.InspectorDescribeResourceGroupsRequest): InspectorDescribeResourceGroups {
    return new InspectorDescribeResourceGroups(this, 'DescribeResourceGroups', this.__resources, input);
  }

  public describeRulesPackages(input: shapes.InspectorDescribeRulesPackagesRequest): InspectorDescribeRulesPackages {
    return new InspectorDescribeRulesPackages(this, 'DescribeRulesPackages', this.__resources, input);
  }

  public fetchAssessmentReport(input: shapes.InspectorGetAssessmentReportRequest): InspectorFetchAssessmentReport {
    return new InspectorFetchAssessmentReport(this, 'FetchAssessmentReport', this.__resources, input);
  }

  public fetchExclusionsPreview(input: shapes.InspectorGetExclusionsPreviewRequest): InspectorFetchExclusionsPreview {
    return new InspectorFetchExclusionsPreview(this, 'FetchExclusionsPreview', this.__resources, input);
  }

  public fetchTelemetryMetadata(input: shapes.InspectorGetTelemetryMetadataRequest): InspectorFetchTelemetryMetadata {
    return new InspectorFetchTelemetryMetadata(this, 'FetchTelemetryMetadata', this.__resources, input);
  }

  public listAssessmentRunAgents(input: shapes.InspectorListAssessmentRunAgentsRequest): InspectorListAssessmentRunAgents {
    return new InspectorListAssessmentRunAgents(this, 'ListAssessmentRunAgents', this.__resources, input);
  }

  public listAssessmentRuns(input: shapes.InspectorListAssessmentRunsRequest): InspectorListAssessmentRuns {
    return new InspectorListAssessmentRuns(this, 'ListAssessmentRuns', this.__resources, input);
  }

  public listAssessmentTargets(input: shapes.InspectorListAssessmentTargetsRequest): InspectorListAssessmentTargets {
    return new InspectorListAssessmentTargets(this, 'ListAssessmentTargets', this.__resources, input);
  }

  public listAssessmentTemplates(input: shapes.InspectorListAssessmentTemplatesRequest): InspectorListAssessmentTemplates {
    return new InspectorListAssessmentTemplates(this, 'ListAssessmentTemplates', this.__resources, input);
  }

  public listEventSubscriptions(input: shapes.InspectorListEventSubscriptionsRequest): InspectorListEventSubscriptions {
    return new InspectorListEventSubscriptions(this, 'ListEventSubscriptions', this.__resources, input);
  }

  public listExclusions(input: shapes.InspectorListExclusionsRequest): InspectorListExclusions {
    return new InspectorListExclusions(this, 'ListExclusions', this.__resources, input);
  }

  public listFindings(input: shapes.InspectorListFindingsRequest): InspectorListFindings {
    return new InspectorListFindings(this, 'ListFindings', this.__resources, input);
  }

  public listRulesPackages(input: shapes.InspectorListRulesPackagesRequest): InspectorListRulesPackages {
    return new InspectorListRulesPackages(this, 'ListRulesPackages', this.__resources, input);
  }

  public listTagsForResource(input: shapes.InspectorListTagsForResourceRequest): InspectorListTagsForResource {
    return new InspectorListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public previewAgents(input: shapes.InspectorPreviewAgentsRequest): InspectorPreviewAgents {
    return new InspectorPreviewAgents(this, 'PreviewAgents', this.__resources, input);
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

  public removeAttributesFromFindings(input: shapes.InspectorRemoveAttributesFromFindingsRequest): InspectorRemoveAttributesFromFindings {
    return new InspectorRemoveAttributesFromFindings(this, 'RemoveAttributesFromFindings', this.__resources, input);
  }

  public setTagsForResource(input: shapes.InspectorSetTagsForResourceRequest): void {
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

  public startAssessmentRun(input: shapes.InspectorStartAssessmentRunRequest): InspectorStartAssessmentRun {
    return new InspectorStartAssessmentRun(this, 'StartAssessmentRun', this.__resources, input);
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

export class InspectorAddAttributesToFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorAddAttributesToFindingsRequest) {
    super(scope, id);
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
          findingArns: this.input.findingArns,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddAttributesToFindings.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorCreateAssessmentTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorCreateAssessmentTargetRequest) {
    super(scope, id);
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
          assessmentTargetName: this.input.assessmentTargetName,
          resourceGroupArn: this.input.resourceGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssessmentTarget.assessmentTargetArn', props);
    return resource.getResponseField('assessmentTargetArn') as unknown as string;
  }

}

export class InspectorCreateAssessmentTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorCreateAssessmentTemplateRequest) {
    super(scope, id);
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
          assessmentTargetArn: this.input.assessmentTargetArn,
          assessmentTemplateName: this.input.assessmentTemplateName,
          durationInSeconds: this.input.durationInSeconds,
          rulesPackageArns: this.input.rulesPackageArns,
          userAttributesForFindings: this.input.userAttributesForFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssessmentTemplate.assessmentTemplateArn', props);
    return resource.getResponseField('assessmentTemplateArn') as unknown as string;
  }

}

export class InspectorCreateExclusionsPreview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorCreateExclusionsPreviewRequest) {
    super(scope, id);
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
          assessmentTemplateArn: this.input.assessmentTemplateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateExclusionsPreview.previewToken', props);
    return resource.getResponseField('previewToken') as unknown as string;
  }

}

export class InspectorCreateResourceGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorCreateResourceGroupRequest) {
    super(scope, id);
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
          resourceGroupTags: this.input.resourceGroupTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateResourceGroup.resourceGroupArn', props);
    return resource.getResponseField('resourceGroupArn') as unknown as string;
  }

}

export class InspectorDescribeAssessmentRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeAssessmentRunsRequest) {
    super(scope, id);
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
          assessmentRunArns: this.input.assessmentRunArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssessmentRuns.assessmentRuns', props);
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
          assessmentRunArns: this.input.assessmentRunArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssessmentRuns.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorDescribeAssessmentTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeAssessmentTargetsRequest) {
    super(scope, id);
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
          assessmentTargetArns: this.input.assessmentTargetArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssessmentTargets.assessmentTargets', props);
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
          assessmentTargetArns: this.input.assessmentTargetArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssessmentTargets.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorDescribeAssessmentTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeAssessmentTemplatesRequest) {
    super(scope, id);
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
          assessmentTemplateArns: this.input.assessmentTemplateArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssessmentTemplates.assessmentTemplates', props);
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
          assessmentTemplateArns: this.input.assessmentTemplateArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssessmentTemplates.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorDescribeCrossAccountAccessRole extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCrossAccountAccessRole.roleArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCrossAccountAccessRole.valid', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeCrossAccountAccessRole.registeredAt', props);
    return resource.getResponseField('registeredAt') as unknown as string;
  }

}

export class InspectorDescribeExclusions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeExclusionsRequest) {
    super(scope, id);
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
          exclusionArns: this.input.exclusionArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExclusions.exclusions', props);
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
          exclusionArns: this.input.exclusionArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExclusions.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorDescribeFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeFindingsRequest) {
    super(scope, id);
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
          findingArns: this.input.findingArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFindings.findings', props);
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
          findingArns: this.input.findingArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFindings.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorDescribeResourceGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeResourceGroupsRequest) {
    super(scope, id);
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
          resourceGroupArns: this.input.resourceGroupArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResourceGroups.resourceGroups', props);
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
          resourceGroupArns: this.input.resourceGroupArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResourceGroups.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorDescribeRulesPackages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorDescribeRulesPackagesRequest) {
    super(scope, id);
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
          rulesPackageArns: this.input.rulesPackageArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRulesPackages.rulesPackages', props);
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
          rulesPackageArns: this.input.rulesPackageArns,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRulesPackages.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorFetchAssessmentReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorGetAssessmentReportRequest) {
    super(scope, id);
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
          assessmentRunArn: this.input.assessmentRunArn,
          reportFileFormat: this.input.reportFileFormat,
          reportType: this.input.reportType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssessmentReport.status', props);
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
          assessmentRunArn: this.input.assessmentRunArn,
          reportFileFormat: this.input.reportFileFormat,
          reportType: this.input.reportType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAssessmentReport.url', props);
    return resource.getResponseField('url') as unknown as string;
  }

}

export class InspectorFetchExclusionsPreview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorGetExclusionsPreviewRequest) {
    super(scope, id);
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
          assessmentTemplateArn: this.input.assessmentTemplateArn,
          previewToken: this.input.previewToken,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExclusionsPreview.previewStatus', props);
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
          assessmentTemplateArn: this.input.assessmentTemplateArn,
          previewToken: this.input.previewToken,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExclusionsPreview.exclusionPreviews', props);
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
          assessmentTemplateArn: this.input.assessmentTemplateArn,
          previewToken: this.input.previewToken,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          locale: this.input.locale,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExclusionsPreview.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorFetchTelemetryMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorGetTelemetryMetadataRequest) {
    super(scope, id);
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
          assessmentRunArn: this.input.assessmentRunArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTelemetryMetadata.telemetryMetadata', props);
    return resource.getResponseField('telemetryMetadata') as unknown as shapes.InspectorTelemetryMetadata[];
  }

}

export class InspectorListAssessmentRunAgents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListAssessmentRunAgentsRequest) {
    super(scope, id);
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
          assessmentRunArn: this.input.assessmentRunArn,
          filter: {
            agentHealths: this.input.filter?.agentHealths,
            agentHealthCodes: this.input.filter?.agentHealthCodes,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentRunAgents.assessmentRunAgents', props);
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
          assessmentRunArn: this.input.assessmentRunArn,
          filter: {
            agentHealths: this.input.filter?.agentHealths,
            agentHealthCodes: this.input.filter?.agentHealthCodes,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentRunAgents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListAssessmentRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListAssessmentRunsRequest) {
    super(scope, id);
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
          assessmentTemplateArns: this.input.assessmentTemplateArns,
          filter: {
            namePattern: this.input.filter?.namePattern,
            states: this.input.filter?.states,
            durationRange: {
              minSeconds: this.input.filter?.durationRange?.minSeconds,
              maxSeconds: this.input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.input.filter?.rulesPackageArns,
            startTimeRange: {
              beginDate: this.input.filter?.startTimeRange?.beginDate,
              endDate: this.input.filter?.startTimeRange?.endDate,
            },
            completionTimeRange: {
              beginDate: this.input.filter?.completionTimeRange?.beginDate,
              endDate: this.input.filter?.completionTimeRange?.endDate,
            },
            stateChangeTimeRange: {
              beginDate: this.input.filter?.stateChangeTimeRange?.beginDate,
              endDate: this.input.filter?.stateChangeTimeRange?.endDate,
            },
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentRuns.assessmentRunArns', props);
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
          assessmentTemplateArns: this.input.assessmentTemplateArns,
          filter: {
            namePattern: this.input.filter?.namePattern,
            states: this.input.filter?.states,
            durationRange: {
              minSeconds: this.input.filter?.durationRange?.minSeconds,
              maxSeconds: this.input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.input.filter?.rulesPackageArns,
            startTimeRange: {
              beginDate: this.input.filter?.startTimeRange?.beginDate,
              endDate: this.input.filter?.startTimeRange?.endDate,
            },
            completionTimeRange: {
              beginDate: this.input.filter?.completionTimeRange?.beginDate,
              endDate: this.input.filter?.completionTimeRange?.endDate,
            },
            stateChangeTimeRange: {
              beginDate: this.input.filter?.stateChangeTimeRange?.beginDate,
              endDate: this.input.filter?.stateChangeTimeRange?.endDate,
            },
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListAssessmentTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListAssessmentTargetsRequest) {
    super(scope, id);
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
            assessmentTargetNamePattern: this.input.filter?.assessmentTargetNamePattern,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentTargets.assessmentTargetArns', props);
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
            assessmentTargetNamePattern: this.input.filter?.assessmentTargetNamePattern,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentTargets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListAssessmentTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListAssessmentTemplatesRequest) {
    super(scope, id);
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
          assessmentTargetArns: this.input.assessmentTargetArns,
          filter: {
            namePattern: this.input.filter?.namePattern,
            durationRange: {
              minSeconds: this.input.filter?.durationRange?.minSeconds,
              maxSeconds: this.input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.input.filter?.rulesPackageArns,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentTemplates.assessmentTemplateArns', props);
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
          assessmentTargetArns: this.input.assessmentTargetArns,
          filter: {
            namePattern: this.input.filter?.namePattern,
            durationRange: {
              minSeconds: this.input.filter?.durationRange?.minSeconds,
              maxSeconds: this.input.filter?.durationRange?.maxSeconds,
            },
            rulesPackageArns: this.input.filter?.rulesPackageArns,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssessmentTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListEventSubscriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListEventSubscriptionsRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventSubscriptions.subscriptions', props);
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
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventSubscriptions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListExclusions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListExclusionsRequest) {
    super(scope, id);
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
          assessmentRunArn: this.input.assessmentRunArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExclusions.exclusionArns', props);
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
          assessmentRunArn: this.input.assessmentRunArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExclusions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListFindingsRequest) {
    super(scope, id);
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
          assessmentRunArns: this.input.assessmentRunArns,
          filter: {
            agentIds: this.input.filter?.agentIds,
            autoScalingGroups: this.input.filter?.autoScalingGroups,
            ruleNames: this.input.filter?.ruleNames,
            severities: this.input.filter?.severities,
            rulesPackageArns: this.input.filter?.rulesPackageArns,
            attributes: this.input.filter?.attributes,
            userAttributes: this.input.filter?.userAttributes,
            creationTimeRange: {
              beginDate: this.input.filter?.creationTimeRange?.beginDate,
              endDate: this.input.filter?.creationTimeRange?.endDate,
            },
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindings.findingArns', props);
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
          assessmentRunArns: this.input.assessmentRunArns,
          filter: {
            agentIds: this.input.filter?.agentIds,
            autoScalingGroups: this.input.filter?.autoScalingGroups,
            ruleNames: this.input.filter?.ruleNames,
            severities: this.input.filter?.severities,
            rulesPackageArns: this.input.filter?.rulesPackageArns,
            attributes: this.input.filter?.attributes,
            userAttributes: this.input.filter?.userAttributes,
            creationTimeRange: {
              beginDate: this.input.filter?.creationTimeRange?.beginDate,
              endDate: this.input.filter?.creationTimeRange?.endDate,
            },
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListRulesPackages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListRulesPackagesRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRulesPackages.rulesPackageArns', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRulesPackages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.InspectorTag[];
  }

}

export class InspectorPreviewAgents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorPreviewAgentsRequest) {
    super(scope, id);
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
          previewAgentsArn: this.input.previewAgentsArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PreviewAgents.agentPreviews', props);
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
          previewAgentsArn: this.input.previewAgentsArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PreviewAgents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class InspectorRemoveAttributesFromFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorRemoveAttributesFromFindingsRequest) {
    super(scope, id);
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
          findingArns: this.input.findingArns,
          attributeKeys: this.input.attributeKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveAttributesFromFindings.failedItems', props);
    return resource.getResponseField('failedItems') as unknown as Record<string, shapes.InspectorFailedItemDetails>;
  }

}

export class InspectorStartAssessmentRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.InspectorStartAssessmentRunRequest) {
    super(scope, id);
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
          assessmentTemplateArn: this.input.assessmentTemplateArn,
          assessmentRunName: this.input.assessmentRunName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartAssessmentRun.assessmentRunArn', props);
    return resource.getResponseField('assessmentRunArn') as unknown as string;
  }

}

