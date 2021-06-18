import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SupportClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addAttachmentsToSet(input: shapes.SupportAddAttachmentsToSetRequest): SupportAddAttachmentsToSet {
    return new SupportAddAttachmentsToSet(this, 'AddAttachmentsToSet', this.__resources, input);
  }

  public addCommunicationToCase(input: shapes.SupportAddCommunicationToCaseRequest): SupportAddCommunicationToCase {
    return new SupportAddCommunicationToCase(this, 'AddCommunicationToCase', this.__resources, input);
  }

  public createCase(input: shapes.SupportCreateCaseRequest): SupportCreateCase {
    return new SupportCreateCase(this, 'CreateCase', this.__resources, input);
  }

  public describeAttachment(input: shapes.SupportDescribeAttachmentRequest): SupportDescribeAttachment {
    return new SupportDescribeAttachment(this, 'DescribeAttachment', this.__resources, input);
  }

  public describeCases(input: shapes.SupportDescribeCasesRequest): SupportDescribeCases {
    return new SupportDescribeCases(this, 'DescribeCases', this.__resources, input);
  }

  public describeCommunications(input: shapes.SupportDescribeCommunicationsRequest): SupportDescribeCommunications {
    return new SupportDescribeCommunications(this, 'DescribeCommunications', this.__resources, input);
  }

  public describeServices(input: shapes.SupportDescribeServicesRequest): SupportDescribeServices {
    return new SupportDescribeServices(this, 'DescribeServices', this.__resources, input);
  }

  public describeSeverityLevels(input: shapes.SupportDescribeSeverityLevelsRequest): SupportDescribeSeverityLevels {
    return new SupportDescribeSeverityLevels(this, 'DescribeSeverityLevels', this.__resources, input);
  }

  public describeTrustedAdvisorCheckRefreshStatuses(input: shapes.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest): SupportDescribeTrustedAdvisorCheckRefreshStatuses {
    return new SupportDescribeTrustedAdvisorCheckRefreshStatuses(this, 'DescribeTrustedAdvisorCheckRefreshStatuses', this.__resources, input);
  }

  public describeTrustedAdvisorCheckResult(input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest): SupportDescribeTrustedAdvisorCheckResult {
    return new SupportDescribeTrustedAdvisorCheckResult(this, 'DescribeTrustedAdvisorCheckResult', this.__resources, input);
  }

  public describeTrustedAdvisorCheckSummaries(input: shapes.SupportDescribeTrustedAdvisorCheckSummariesRequest): SupportDescribeTrustedAdvisorCheckSummaries {
    return new SupportDescribeTrustedAdvisorCheckSummaries(this, 'DescribeTrustedAdvisorCheckSummaries', this.__resources, input);
  }

  public describeTrustedAdvisorChecks(input: shapes.SupportDescribeTrustedAdvisorChecksRequest): SupportDescribeTrustedAdvisorChecks {
    return new SupportDescribeTrustedAdvisorChecks(this, 'DescribeTrustedAdvisorChecks', this.__resources, input);
  }

  public refreshTrustedAdvisorCheck(input: shapes.SupportRefreshTrustedAdvisorCheckRequest): SupportRefreshTrustedAdvisorCheck {
    return new SupportRefreshTrustedAdvisorCheck(this, 'RefreshTrustedAdvisorCheck', this.__resources, input);
  }

  public resolveCase(input: shapes.SupportResolveCaseRequest): SupportResolveCase {
    return new SupportResolveCase(this, 'ResolveCase', this.__resources, input);
  }

}

export class SupportAddAttachmentsToSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportAddAttachmentsToSetRequest) {
    super(scope, id);
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
          attachmentSetId: this.input.attachmentSetId,
          attachments: this.input.attachments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddAttachmentsToSet.attachmentSetId', props);
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
          attachmentSetId: this.input.attachmentSetId,
          attachments: this.input.attachments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddAttachmentsToSet.expiryTime', props);
    return resource.getResponseField('expiryTime') as unknown as string;
  }

}

export class SupportAddCommunicationToCase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportAddCommunicationToCaseRequest) {
    super(scope, id);
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
          caseId: this.input.caseId,
          communicationBody: this.input.communicationBody,
          ccEmailAddresses: this.input.ccEmailAddresses,
          attachmentSetId: this.input.attachmentSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddCommunicationToCase.result', props);
    return resource.getResponseField('result') as unknown as boolean;
  }

}

export class SupportCreateCase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportCreateCaseRequest) {
    super(scope, id);
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
          subject: this.input.subject,
          serviceCode: this.input.serviceCode,
          severityCode: this.input.severityCode,
          categoryCode: this.input.categoryCode,
          communicationBody: this.input.communicationBody,
          ccEmailAddresses: this.input.ccEmailAddresses,
          language: this.input.language,
          issueType: this.input.issueType,
          attachmentSetId: this.input.attachmentSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCase.caseId', props);
    return resource.getResponseField('caseId') as unknown as string;
  }

}

export class SupportDescribeAttachment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeAttachmentRequest) {
    super(scope, id);
  }

  public get attachment(): SupportDescribeAttachmentAttachment {
    return new SupportDescribeAttachmentAttachment(this, 'Attachment', this.__resources, this.input);
  }

}

export class SupportDescribeAttachmentAttachment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeAttachmentRequest) {
    super(scope, id);
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
          attachmentId: this.input.attachmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttachment.attachment.fileName', props);
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
          attachmentId: this.input.attachmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttachment.attachment.data', props);
    return resource.getResponseField('attachment.data') as unknown as any;
  }

}

export class SupportDescribeCases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeCasesRequest) {
    super(scope, id);
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
          caseIdList: this.input.caseIdList,
          displayId: this.input.displayId,
          afterTime: this.input.afterTime,
          beforeTime: this.input.beforeTime,
          includeResolvedCases: this.input.includeResolvedCases,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          language: this.input.language,
          includeCommunications: this.input.includeCommunications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCases.cases', props);
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
          caseIdList: this.input.caseIdList,
          displayId: this.input.displayId,
          afterTime: this.input.afterTime,
          beforeTime: this.input.beforeTime,
          includeResolvedCases: this.input.includeResolvedCases,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          language: this.input.language,
          includeCommunications: this.input.includeCommunications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCases.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SupportDescribeCommunications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeCommunicationsRequest) {
    super(scope, id);
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
          caseId: this.input.caseId,
          beforeTime: this.input.beforeTime,
          afterTime: this.input.afterTime,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCommunications.communications', props);
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
          caseId: this.input.caseId,
          beforeTime: this.input.beforeTime,
          afterTime: this.input.afterTime,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCommunications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SupportDescribeServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeServicesRequest) {
    super(scope, id);
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
          serviceCodeList: this.input.serviceCodeList,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServices.services', props);
    return resource.getResponseField('services') as unknown as shapes.SupportService[];
  }

}

export class SupportDescribeSeverityLevels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeSeverityLevelsRequest) {
    super(scope, id);
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
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSeverityLevels.severityLevels', props);
    return resource.getResponseField('severityLevels') as unknown as shapes.SupportSeverityLevel[];
  }

}

export class SupportDescribeTrustedAdvisorCheckRefreshStatuses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest) {
    super(scope, id);
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
          checkIds: this.input.checkIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckRefreshStatuses.statuses', props);
    return resource.getResponseField('statuses') as unknown as shapes.SupportTrustedAdvisorCheckRefreshStatus[];
  }

}

export class SupportDescribeTrustedAdvisorCheckResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
    super(scope, id);
  }

  public get result(): SupportDescribeTrustedAdvisorCheckResultResult {
    return new SupportDescribeTrustedAdvisorCheckResultResult(this, 'Result', this.__resources, this.input);
  }

}

export class SupportDescribeTrustedAdvisorCheckResultResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
    super(scope, id);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.checkId', props);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.timestamp', props);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.status', props);
    return resource.getResponseField('result.status') as unknown as string;
  }

  public get resourcesSummary(): SupportDescribeTrustedAdvisorCheckResultResultResourcesSummary {
    return new SupportDescribeTrustedAdvisorCheckResultResultResourcesSummary(this, 'ResourcesSummary', this.__resources, this.input);
  }

  public get categorySpecificSummary(): SupportDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary {
    return new SupportDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary(this, 'CategorySpecificSummary', this.__resources, this.input);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.flaggedResources', props);
    return resource.getResponseField('result.flaggedResources') as unknown as shapes.SupportTrustedAdvisorResourceDetail[];
  }

}

export class SupportDescribeTrustedAdvisorCheckResultResultResourcesSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
    super(scope, id);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesProcessed', props);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesFlagged', props);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesIgnored', props);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.resourcesSummary.resourcesSuppressed', props);
    return resource.getResponseField('result.resourcesSummary.resourcesSuppressed') as unknown as number;
  }

}

export class SupportDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
    super(scope, id);
  }

  public get costOptimizing(): SupportDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing {
    return new SupportDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing(this, 'CostOptimizing', this.__resources, this.input);
  }

}

export class SupportDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckResultRequest) {
    super(scope, id);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.categorySpecificSummary.costOptimizing.estimatedMonthlySavings', props);
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
          checkId: this.input.checkId,
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckResult.result.categorySpecificSummary.costOptimizing.estimatedPercentMonthlySavings', props);
    return resource.getResponseField('result.categorySpecificSummary.costOptimizing.estimatedPercentMonthlySavings') as unknown as number;
  }

}

export class SupportDescribeTrustedAdvisorCheckSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorCheckSummariesRequest) {
    super(scope, id);
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
          checkIds: this.input.checkIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorCheckSummaries.summaries', props);
    return resource.getResponseField('summaries') as unknown as shapes.SupportTrustedAdvisorCheckSummary[];
  }

}

export class SupportDescribeTrustedAdvisorChecks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportDescribeTrustedAdvisorChecksRequest) {
    super(scope, id);
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
          language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrustedAdvisorChecks.checks', props);
    return resource.getResponseField('checks') as unknown as shapes.SupportTrustedAdvisorCheckDescription[];
  }

}

export class SupportRefreshTrustedAdvisorCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportRefreshTrustedAdvisorCheckRequest) {
    super(scope, id);
  }

  public get status(): SupportRefreshTrustedAdvisorCheckStatus {
    return new SupportRefreshTrustedAdvisorCheckStatus(this, 'Status', this.__resources, this.input);
  }

}

export class SupportRefreshTrustedAdvisorCheckStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportRefreshTrustedAdvisorCheckRequest) {
    super(scope, id);
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
          checkId: this.input.checkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RefreshTrustedAdvisorCheck.status.checkId', props);
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
          checkId: this.input.checkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RefreshTrustedAdvisorCheck.status.status', props);
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
          checkId: this.input.checkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RefreshTrustedAdvisorCheck.status.millisUntilNextRefreshable', props);
    return resource.getResponseField('status.millisUntilNextRefreshable') as unknown as number;
  }

}

export class SupportResolveCase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SupportResolveCaseRequest) {
    super(scope, id);
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
          caseId: this.input.caseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResolveCase.initialCaseStatus', props);
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
          caseId: this.input.caseId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResolveCase.finalCaseStatus', props);
    return resource.getResponseField('finalCaseStatus') as unknown as string;
  }

}

