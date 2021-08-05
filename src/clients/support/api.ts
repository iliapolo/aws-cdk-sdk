import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SupportClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addAttachmentsToSet(input: shapes.SupportAddAttachmentsToSetRequest): SupportResponsesAddAttachmentsToSet {
    return new SupportResponsesAddAttachmentsToSet(this, this.__resources, input);
  }

  public addCommunicationToCase(input: shapes.SupportAddCommunicationToCaseRequest): SupportResponsesAddCommunicationToCase {
    return new SupportResponsesAddCommunicationToCase(this, this.__resources, input);
  }

  public createCase(input: shapes.SupportCreateCaseRequest): SupportResponsesCreateCase {
    return new SupportResponsesCreateCase(this, this.__resources, input);
  }

  public describeAttachment(input: shapes.SupportDescribeAttachmentRequest): SupportResponsesDescribeAttachment {
    return new SupportResponsesDescribeAttachment(this, this.__resources, input);
  }

  public describeCases(input: shapes.SupportDescribeCasesRequest): SupportResponsesDescribeCases {
    return new SupportResponsesDescribeCases(this, this.__resources, input);
  }

  public describeCommunications(input: shapes.SupportDescribeCommunicationsRequest): SupportResponsesDescribeCommunications {
    return new SupportResponsesDescribeCommunications(this, this.__resources, input);
  }

  public describeServices(input: shapes.SupportDescribeServicesRequest): SupportResponsesDescribeServices {
    return new SupportResponsesDescribeServices(this, this.__resources, input);
  }

  public describeSeverityLevels(input: shapes.SupportDescribeSeverityLevelsRequest): SupportResponsesDescribeSeverityLevels {
    return new SupportResponsesDescribeSeverityLevels(this, this.__resources, input);
  }

  public describeTrustedAdvisorCheckRefreshStatuses(input: shapes.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest): SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses {
    return new SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses(this, this.__resources, input);
  }

  public describeTrustedAdvisorCheckResult(input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest): SupportResponsesDescribeTrustedAdvisorCheckResult {
    return new SupportResponsesDescribeTrustedAdvisorCheckResult(this, this.__resources, input);
  }

  public describeTrustedAdvisorCheckSummaries(input: shapes.SupportDescribeTrustedAdvisorCheckSummariesRequest): SupportResponsesDescribeTrustedAdvisorCheckSummaries {
    return new SupportResponsesDescribeTrustedAdvisorCheckSummaries(this, this.__resources, input);
  }

  public describeTrustedAdvisorChecks(input: shapes.SupportDescribeTrustedAdvisorChecksRequest): SupportResponsesDescribeTrustedAdvisorChecks {
    return new SupportResponsesDescribeTrustedAdvisorChecks(this, this.__resources, input);
  }

  public refreshTrustedAdvisorCheck(input: shapes.SupportRefreshTrustedAdvisorCheckRequest): SupportResponsesRefreshTrustedAdvisorCheck {
    return new SupportResponsesRefreshTrustedAdvisorCheck(this, this.__resources, input);
  }

  public resolveCase(input: shapes.SupportResolveCaseRequest): SupportResponsesResolveCase {
    return new SupportResponsesResolveCase(this, this.__resources, input);
  }

}

export class SupportResponsesAddAttachmentsToSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportAddAttachmentsToSetRequest) {
  }

  public get attachmentSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addAttachmentsToSet',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.AddAttachmentsToSet.attachmentSetId'),
        outputPath: 'attachmentSetId',
        parameters: {
          attachmentSetId: this.__input.attachmentSetId,
          attachments: this.__input.attachments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddAttachmentsToSet.attachmentSetId', props);
    return resource.getResponseField('attachmentSetId') as unknown as string;
  }

  public get expiryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addAttachmentsToSet',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.AddAttachmentsToSet.expiryTime'),
        outputPath: 'expiryTime',
        parameters: {
          attachmentSetId: this.__input.attachmentSetId,
          attachments: this.__input.attachments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddAttachmentsToSet.expiryTime', props);
    return resource.getResponseField('expiryTime') as unknown as string;
  }

}

export class SupportResponsesAddCommunicationToCase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportAddCommunicationToCaseRequest) {
  }

  public get result(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addCommunicationToCase',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.AddCommunicationToCase.result'),
        outputPath: 'result',
        parameters: {
          caseId: this.__input.caseId,
          communicationBody: this.__input.communicationBody,
          ccEmailAddresses: this.__input.ccEmailAddresses,
          attachmentSetId: this.__input.attachmentSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddCommunicationToCase.result', props);
    return resource.getResponseField('result') as unknown as boolean;
  }

}

export class SupportResponsesCreateCase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportCreateCaseRequest) {
  }

  public get caseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCase',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.CreateCase.caseId'),
        outputPath: 'caseId',
        parameters: {
          subject: this.__input.subject,
          serviceCode: this.__input.serviceCode,
          severityCode: this.__input.severityCode,
          categoryCode: this.__input.categoryCode,
          communicationBody: this.__input.communicationBody,
          ccEmailAddresses: this.__input.ccEmailAddresses,
          language: this.__input.language,
          issueType: this.__input.issueType,
          attachmentSetId: this.__input.attachmentSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCase.caseId', props);
    return resource.getResponseField('caseId') as unknown as string;
  }

}

export class SupportResponsesDescribeAttachment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeAttachmentRequest) {
  }

  public get attachment(): SupportResponsesDescribeAttachmentAttachment {
    return new SupportResponsesDescribeAttachmentAttachment(this.__scope, this.__resources, this.__input);
  }

}

export class SupportResponsesDescribeAttachmentAttachment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeAttachmentRequest) {
  }

  public get fileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttachment',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeAttachment.attachment.fileName'),
        outputPath: 'attachment.fileName',
        parameters: {
          attachmentId: this.__input.attachmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttachment.attachment.fileName', props);
    return resource.getResponseField('attachment.fileName') as unknown as string;
  }

  public get data(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttachment',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeAttachment.attachment.data'),
        outputPath: 'attachment.data',
        parameters: {
          attachmentId: this.__input.attachmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAttachment.attachment.data', props);
    return resource.getResponseField('attachment.data') as unknown as any;
  }

}

export class SupportResponsesDescribeCases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeCasesRequest) {
  }

  public get cases(): shapes.SupportCaseDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCases',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeCases.cases'),
        outputPath: 'cases',
        parameters: {
          caseIdList: this.__input.caseIdList,
          displayId: this.__input.displayId,
          afterTime: this.__input.afterTime,
          beforeTime: this.__input.beforeTime,
          includeResolvedCases: this.__input.includeResolvedCases,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          language: this.__input.language,
          includeCommunications: this.__input.includeCommunications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCases.cases', props);
    return resource.getResponseField('cases') as unknown as shapes.SupportCaseDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCases',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeCases.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          caseIdList: this.__input.caseIdList,
          displayId: this.__input.displayId,
          afterTime: this.__input.afterTime,
          beforeTime: this.__input.beforeTime,
          includeResolvedCases: this.__input.includeResolvedCases,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          language: this.__input.language,
          includeCommunications: this.__input.includeCommunications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCases.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SupportResponsesDescribeCommunications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeCommunicationsRequest) {
  }

  public get communications(): shapes.SupportCommunication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCommunications',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeCommunications.communications'),
        outputPath: 'communications',
        parameters: {
          caseId: this.__input.caseId,
          beforeTime: this.__input.beforeTime,
          afterTime: this.__input.afterTime,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCommunications.communications', props);
    return resource.getResponseField('communications') as unknown as shapes.SupportCommunication[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCommunications',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeCommunications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          caseId: this.__input.caseId,
          beforeTime: this.__input.beforeTime,
          afterTime: this.__input.afterTime,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCommunications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SupportResponsesDescribeServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeServicesRequest) {
  }

  public get services(): shapes.SupportService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServices',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeServices.services'),
        outputPath: 'services',
        parameters: {
          serviceCodeList: this.__input.serviceCodeList,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServices.services', props);
    return resource.getResponseField('services') as unknown as shapes.SupportService[];
  }

}

export class SupportResponsesDescribeSeverityLevels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeSeverityLevelsRequest) {
  }

  public get severityLevels(): shapes.SupportSeverityLevel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSeverityLevels',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeSeverityLevels.severityLevels'),
        outputPath: 'severityLevels',
        parameters: {
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSeverityLevels.severityLevels', props);
    return resource.getResponseField('severityLevels') as unknown as shapes.SupportSeverityLevel[];
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest) {
  }

  public get statuses(): shapes.SupportTrustedAdvisorCheckRefreshStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckRefreshStatuses',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckRefreshStatuses.statuses'),
        outputPath: 'statuses',
        parameters: {
          checkIds: this.__input.checkIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckRefreshStatuses.statuses', props);
    return resource.getResponseField('statuses') as unknown as shapes.SupportTrustedAdvisorCheckRefreshStatus[];
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
  }

  public get result(): SupportResponsesDescribeTrustedAdvisorCheckResultResult {
    return new SupportResponsesDescribeTrustedAdvisorCheckResultResult(this.__scope, this.__resources, this.__input);
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckResultResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
  }

  public get checkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.checkId'),
        outputPath: 'result.checkId',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.checkId', props);
    return resource.getResponseField('result.checkId') as unknown as string;
  }

  public get timestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.timestamp'),
        outputPath: 'result.timestamp',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.timestamp', props);
    return resource.getResponseField('result.timestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.status'),
        outputPath: 'result.status',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.status', props);
    return resource.getResponseField('result.status') as unknown as string;
  }

  public get resourcesSummary(): SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary {
    return new SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary(this.__scope, this.__resources, this.__input);
  }

  public get categorySpecificSummary(): SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary {
    return new SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary(this.__scope, this.__resources, this.__input);
  }

  public get flaggedResources(): shapes.SupportTrustedAdvisorResourceDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.flaggedResources'),
        outputPath: 'result.flaggedResources',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.flaggedResources', props);
    return resource.getResponseField('result.flaggedResources') as unknown as shapes.SupportTrustedAdvisorResourceDetail[];
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
  }

  public get resourcesProcessed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesProcessed'),
        outputPath: 'result.resourcesSummary.resourcesProcessed',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesProcessed', props);
    return resource.getResponseField('result.resourcesSummary.resourcesProcessed') as unknown as number;
  }

  public get resourcesFlagged(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesFlagged'),
        outputPath: 'result.resourcesSummary.resourcesFlagged',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesFlagged', props);
    return resource.getResponseField('result.resourcesSummary.resourcesFlagged') as unknown as number;
  }

  public get resourcesIgnored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesIgnored'),
        outputPath: 'result.resourcesSummary.resourcesIgnored',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesIgnored', props);
    return resource.getResponseField('result.resourcesSummary.resourcesIgnored') as unknown as number;
  }

  public get resourcesSuppressed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesSuppressed'),
        outputPath: 'result.resourcesSummary.resourcesSuppressed',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesSuppressed', props);
    return resource.getResponseField('result.resourcesSummary.resourcesSuppressed') as unknown as number;
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
  }

  public get costOptimizing(): SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing {
    return new SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing(this.__scope, this.__resources, this.__input);
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
  }

  public get estimatedMonthlySavings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.categorySpecificSummary.costOptimizing.estimatedMonthlySavings'),
        outputPath: 'result.categorySpecificSummary.costOptimizing.estimatedMonthlySavings',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.categorySpecificSummary.costOptimizing.estimatedMonthlySavings', props);
    return resource.getResponseField('result.categorySpecificSummary.costOptimizing.estimatedMonthlySavings') as unknown as number;
  }

  public get estimatedPercentMonthlySavings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckResult',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckResult.result.categorySpecificSummary.costOptimizing.estimatedPercentMonthlySavings'),
        outputPath: 'result.categorySpecificSummary.costOptimizing.estimatedPercentMonthlySavings',
        parameters: {
          checkId: this.__input.checkId,
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckResult.result.categorySpecificSummary.costOptimizing.estimatedPercentMonthlySavings', props);
    return resource.getResponseField('result.categorySpecificSummary.costOptimizing.estimatedPercentMonthlySavings') as unknown as number;
  }

}

export class SupportResponsesDescribeTrustedAdvisorCheckSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorCheckSummariesRequest) {
  }

  public get summaries(): shapes.SupportTrustedAdvisorCheckSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorCheckSummaries',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorCheckSummaries.summaries'),
        outputPath: 'summaries',
        parameters: {
          checkIds: this.__input.checkIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorCheckSummaries.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.SupportTrustedAdvisorCheckSummary[];
  }

}

export class SupportResponsesDescribeTrustedAdvisorChecks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportDescribeTrustedAdvisorChecksRequest) {
  }

  public get checks(): shapes.SupportTrustedAdvisorCheckDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrustedAdvisorChecks',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.DescribeTrustedAdvisorChecks.checks'),
        outputPath: 'checks',
        parameters: {
          language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrustedAdvisorChecks.checks', props);
    return resource.getResponseField('checks') as unknown as shapes.SupportTrustedAdvisorCheckDescription[];
  }

}

export class SupportResponsesRefreshTrustedAdvisorCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportRefreshTrustedAdvisorCheckRequest) {
  }

  public get status(): SupportResponsesRefreshTrustedAdvisorCheckStatus {
    return new SupportResponsesRefreshTrustedAdvisorCheckStatus(this.__scope, this.__resources, this.__input);
  }

}

export class SupportResponsesRefreshTrustedAdvisorCheckStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportRefreshTrustedAdvisorCheckRequest) {
  }

  public get checkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'refreshTrustedAdvisorCheck',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.RefreshTrustedAdvisorCheck.status.checkId'),
        outputPath: 'status.checkId',
        parameters: {
          checkId: this.__input.checkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RefreshTrustedAdvisorCheck.status.checkId', props);
    return resource.getResponseField('status.checkId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'refreshTrustedAdvisorCheck',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.RefreshTrustedAdvisorCheck.status.status'),
        outputPath: 'status.status',
        parameters: {
          checkId: this.__input.checkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RefreshTrustedAdvisorCheck.status.status', props);
    return resource.getResponseField('status.status') as unknown as string;
  }

  public get millisUntilNextRefreshable(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'refreshTrustedAdvisorCheck',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.RefreshTrustedAdvisorCheck.status.millisUntilNextRefreshable'),
        outputPath: 'status.millisUntilNextRefreshable',
        parameters: {
          checkId: this.__input.checkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RefreshTrustedAdvisorCheck.status.millisUntilNextRefreshable', props);
    return resource.getResponseField('status.millisUntilNextRefreshable') as unknown as number;
  }

}

export class SupportResponsesResolveCase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SupportResolveCaseRequest) {
  }

  public get initialCaseStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveCase',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.ResolveCase.initialCaseStatus'),
        outputPath: 'initialCaseStatus',
        parameters: {
          caseId: this.__input.caseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveCase.initialCaseStatus', props);
    return resource.getResponseField('initialCaseStatus') as unknown as string;
  }

  public get finalCaseStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveCase',
        service: 'Support',
        physicalResourceId: cr.PhysicalResourceId.of('Support.ResolveCase.finalCaseStatus'),
        outputPath: 'finalCaseStatus',
        parameters: {
          caseId: this.__input.caseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveCase.finalCaseStatus', props);
    return resource.getResponseField('finalCaseStatus') as unknown as string;
  }

}

