import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CurClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteReportDefinition(input: shapes.CurDeleteReportDefinitionRequest): CURDeleteReportDefinition {
    return new CURDeleteReportDefinition(this, 'DeleteReportDefinition', this.__resources, input);
  }

  public describeReportDefinitions(input: shapes.CurDescribeReportDefinitionsRequest): CURDescribeReportDefinitions {
    return new CURDescribeReportDefinitions(this, 'DescribeReportDefinitions', this.__resources, input);
  }

  public modifyReportDefinition(input: shapes.CurModifyReportDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReportDefinition',
        service: 'CUR',
        physicalResourceId: cr.PhysicalResourceId.of('CUR.ModifyReportDefinition'),
        parameters: {
          ReportName: input.reportName,
          ReportDefinition: {
            ReportName: input.reportDefinition.reportName,
            TimeUnit: input.reportDefinition.timeUnit,
            Format: input.reportDefinition.format,
            Compression: input.reportDefinition.compression,
            AdditionalSchemaElements: input.reportDefinition.additionalSchemaElements,
            S3Bucket: input.reportDefinition.s3Bucket,
            S3Prefix: input.reportDefinition.s3Prefix,
            S3Region: input.reportDefinition.s3Region,
            AdditionalArtifacts: input.reportDefinition.additionalArtifacts,
            RefreshClosedReports: input.reportDefinition.refreshClosedReports,
            ReportVersioning: input.reportDefinition.reportVersioning,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyReportDefinition', props);
  }

  public putReportDefinition(input: shapes.CurPutReportDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putReportDefinition',
        service: 'CUR',
        physicalResourceId: cr.PhysicalResourceId.of('CUR.PutReportDefinition'),
        parameters: {
          ReportDefinition: {
            ReportName: input.reportDefinition.reportName,
            TimeUnit: input.reportDefinition.timeUnit,
            Format: input.reportDefinition.format,
            Compression: input.reportDefinition.compression,
            AdditionalSchemaElements: input.reportDefinition.additionalSchemaElements,
            S3Bucket: input.reportDefinition.s3Bucket,
            S3Prefix: input.reportDefinition.s3Prefix,
            S3Region: input.reportDefinition.s3Region,
            AdditionalArtifacts: input.reportDefinition.additionalArtifacts,
            RefreshClosedReports: input.reportDefinition.refreshClosedReports,
            ReportVersioning: input.reportDefinition.reportVersioning,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutReportDefinition', props);
  }

}

export class CURDeleteReportDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CurDeleteReportDefinitionRequest) {
    super(scope, id);
  }

  public get responseMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReportDefinition',
        service: 'CUR',
        physicalResourceId: cr.PhysicalResourceId.of('CUR.DeleteReportDefinition.ResponseMessage'),
        outputPath: 'ResponseMessage',
        parameters: {
          ReportName: this.input.reportName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReportDefinition.ResponseMessage', props);
    return resource.getResponseField('ResponseMessage') as unknown as string;
  }

}

export class CURDescribeReportDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CurDescribeReportDefinitionsRequest) {
    super(scope, id);
  }

  public get reportDefinitions(): shapes.CurReportDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportDefinitions',
        service: 'CUR',
        physicalResourceId: cr.PhysicalResourceId.of('CUR.DescribeReportDefinitions.ReportDefinitions'),
        outputPath: 'ReportDefinitions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReportDefinitions.ReportDefinitions', props);
    return resource.getResponseField('ReportDefinitions') as unknown as shapes.CurReportDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportDefinitions',
        service: 'CUR',
        physicalResourceId: cr.PhysicalResourceId.of('CUR.DescribeReportDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReportDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

