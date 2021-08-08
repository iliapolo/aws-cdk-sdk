import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApplicationCostProfilerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteReportDefinition(input: shapes.ApplicationCostProfilerDeleteReportDefinitionRequest): ApplicationCostProfilerResponsesDeleteReportDefinition {
    return new ApplicationCostProfilerResponsesDeleteReportDefinition(this, this.__resources, input);
  }

  public fetchReportDefinition(input: shapes.ApplicationCostProfilerGetReportDefinitionRequest): ApplicationCostProfilerResponsesFetchReportDefinition {
    return new ApplicationCostProfilerResponsesFetchReportDefinition(this, this.__resources, input);
  }

  public importApplicationUsage(input: shapes.ApplicationCostProfilerImportApplicationUsageRequest): ApplicationCostProfilerResponsesImportApplicationUsage {
    return new ApplicationCostProfilerResponsesImportApplicationUsage(this, this.__resources, input);
  }

  public listReportDefinitions(input: shapes.ApplicationCostProfilerListReportDefinitionsRequest): ApplicationCostProfilerResponsesListReportDefinitions {
    return new ApplicationCostProfilerResponsesListReportDefinitions(this, this.__resources, input);
  }

  public putReportDefinition(input: shapes.ApplicationCostProfilerPutReportDefinitionRequest): ApplicationCostProfilerResponsesPutReportDefinition {
    return new ApplicationCostProfilerResponsesPutReportDefinition(this, this.__resources, input);
  }

  public updateReportDefinition(input: shapes.ApplicationCostProfilerUpdateReportDefinitionRequest): ApplicationCostProfilerResponsesUpdateReportDefinition {
    return new ApplicationCostProfilerResponsesUpdateReportDefinition(this, this.__resources, input);
  }

}

export class ApplicationCostProfilerResponsesDeleteReportDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerDeleteReportDefinitionRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.DeleteReportDefinition.reportId'),
        outputPath: 'reportId',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReportDefinition.reportId', props);
    return resource.getResponseField('reportId') as unknown as string;
  }

}

export class ApplicationCostProfilerResponsesFetchReportDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerGetReportDefinitionRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.reportId'),
        outputPath: 'reportId',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.reportId', props);
    return resource.getResponseField('reportId') as unknown as string;
  }

  public get reportDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.reportDescription'),
        outputPath: 'reportDescription',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.reportDescription', props);
    return resource.getResponseField('reportDescription') as unknown as string;
  }

  public get reportFrequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.reportFrequency'),
        outputPath: 'reportFrequency',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.reportFrequency', props);
    return resource.getResponseField('reportFrequency') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.format'),
        outputPath: 'format',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.format', props);
    return resource.getResponseField('format') as unknown as string;
  }

  public get destinationS3Location(): ApplicationCostProfilerResponsesFetchReportDefinitionDestinationS3Location {
    return new ApplicationCostProfilerResponsesFetchReportDefinitionDestinationS3Location(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.lastUpdated'),
        outputPath: 'lastUpdated',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.lastUpdated', props);
    return resource.getResponseField('lastUpdated') as unknown as string;
  }

}

export class ApplicationCostProfilerResponsesFetchReportDefinitionDestinationS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerGetReportDefinitionRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.destinationS3Location.bucket'),
        outputPath: 'destinationS3Location.bucket',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.destinationS3Location.bucket', props);
    return resource.getResponseField('destinationS3Location.bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.GetReportDefinition.destinationS3Location.prefix'),
        outputPath: 'destinationS3Location.prefix',
        parameters: {
          reportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetReportDefinition.destinationS3Location.prefix', props);
    return resource.getResponseField('destinationS3Location.prefix') as unknown as string;
  }

}

export class ApplicationCostProfilerResponsesImportApplicationUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerImportApplicationUsageRequest) {
  }

  public get importId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importApplicationUsage',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.ImportApplicationUsage.importId'),
        outputPath: 'importId',
        parameters: {
          sourceS3Location: {
            bucket: this.__input.sourceS3Location.bucket,
            key: this.__input.sourceS3Location.key,
            region: this.__input.sourceS3Location.region,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportApplicationUsage.importId', props);
    return resource.getResponseField('importId') as unknown as string;
  }

}

export class ApplicationCostProfilerResponsesListReportDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerListReportDefinitionsRequest) {
  }

  public get reportDefinitions(): shapes.ApplicationCostProfilerReportDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReportDefinitions',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.ListReportDefinitions.reportDefinitions'),
        outputPath: 'reportDefinitions',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReportDefinitions.reportDefinitions', props);
    return resource.getResponseField('reportDefinitions') as unknown as shapes.ApplicationCostProfilerReportDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReportDefinitions',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.ListReportDefinitions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReportDefinitions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ApplicationCostProfilerResponsesPutReportDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerPutReportDefinitionRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.PutReportDefinition.reportId'),
        outputPath: 'reportId',
        parameters: {
          reportId: this.__input.reportId,
          reportDescription: this.__input.reportDescription,
          reportFrequency: this.__input.reportFrequency,
          format: this.__input.format,
          destinationS3Location: {
            bucket: this.__input.destinationS3Location.bucket,
            prefix: this.__input.destinationS3Location.prefix,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutReportDefinition.reportId', props);
    return resource.getResponseField('reportId') as unknown as string;
  }

}

export class ApplicationCostProfilerResponsesUpdateReportDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationCostProfilerUpdateReportDefinitionRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateReportDefinition',
        service: 'ApplicationCostProfiler',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationCostProfiler.UpdateReportDefinition.reportId'),
        outputPath: 'reportId',
        parameters: {
          reportId: this.__input.reportId,
          reportDescription: this.__input.reportDescription,
          reportFrequency: this.__input.reportFrequency,
          format: this.__input.format,
          destinationS3Location: {
            bucket: this.__input.destinationS3Location.bucket,
            prefix: this.__input.destinationS3Location.prefix,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateReportDefinition.reportId', props);
    return resource.getResponseField('reportId') as unknown as string;
  }

}

