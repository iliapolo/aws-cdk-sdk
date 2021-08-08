import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTFleetHubClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApplication(input: shapes.IoTFleetHubCreateApplicationRequest): IoTFleetHubResponsesCreateApplication {
    return new IoTFleetHubResponsesCreateApplication(this, this.__resources, input);
  }

  public deleteApplication(input: shapes.IoTFleetHubDeleteApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DeleteApplication'),
        parameters: {
          applicationId: input.applicationId,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public describeApplication(input: shapes.IoTFleetHubDescribeApplicationRequest): IoTFleetHubResponsesDescribeApplication {
    return new IoTFleetHubResponsesDescribeApplication(this, this.__resources, input);
  }

  public listApplications(input: shapes.IoTFleetHubListApplicationsRequest): IoTFleetHubResponsesListApplications {
    return new IoTFleetHubResponsesListApplications(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTFleetHubListTagsForResourceRequest): IoTFleetHubResponsesListTagsForResource {
    return new IoTFleetHubResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.IoTFleetHubTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IoTFleetHubUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApplication(input: shapes.IoTFleetHubUpdateApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.UpdateApplication'),
        parameters: {
          applicationId: input.applicationId,
          applicationName: input.applicationName,
          applicationDescription: input.applicationDescription,
          clientToken: input.clientToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateApplication', props);
  }

}

export class IoTFleetHubResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTFleetHubCreateApplicationRequest) {
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.CreateApplication.applicationId'),
        outputPath: 'applicationId',
        parameters: {
          applicationName: this.__input.applicationName,
          applicationDescription: this.__input.applicationDescription,
          clientToken: this.__input.clientToken,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.applicationId', props);
    return resource.getResponseField('applicationId') as unknown as string;
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.CreateApplication.applicationArn'),
        outputPath: 'applicationArn',
        parameters: {
          applicationName: this.__input.applicationName,
          applicationDescription: this.__input.applicationDescription,
          clientToken: this.__input.clientToken,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.applicationArn', props);
    return resource.getResponseField('applicationArn') as unknown as string;
  }

}

export class IoTFleetHubResponsesDescribeApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTFleetHubDescribeApplicationRequest) {
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationId'),
        outputPath: 'applicationId',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationId', props);
    return resource.getResponseField('applicationId') as unknown as string;
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationArn'),
        outputPath: 'applicationArn',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationArn', props);
    return resource.getResponseField('applicationArn') as unknown as string;
  }

  public get applicationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationName'),
        outputPath: 'applicationName',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationName', props);
    return resource.getResponseField('applicationName') as unknown as string;
  }

  public get applicationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationDescription'),
        outputPath: 'applicationDescription',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationDescription', props);
    return resource.getResponseField('applicationDescription') as unknown as string;
  }

  public get applicationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationUrl'),
        outputPath: 'applicationUrl',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationUrl', props);
    return resource.getResponseField('applicationUrl') as unknown as string;
  }

  public get applicationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationState'),
        outputPath: 'applicationState',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationState', props);
    return resource.getResponseField('applicationState') as unknown as string;
  }

  public get applicationCreationDate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationCreationDate'),
        outputPath: 'applicationCreationDate',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationCreationDate', props);
    return resource.getResponseField('applicationCreationDate') as unknown as number;
  }

  public get applicationLastUpdateDate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.applicationLastUpdateDate'),
        outputPath: 'applicationLastUpdateDate',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.applicationLastUpdateDate', props);
    return resource.getResponseField('applicationLastUpdateDate') as unknown as number;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.roleArn'),
        outputPath: 'roleArn',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get ssoClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.ssoClientId'),
        outputPath: 'ssoClientId',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ssoClientId', props);
    return resource.getResponseField('ssoClientId') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.errorMessage'),
        outputPath: 'errorMessage',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.errorMessage', props);
    return resource.getResponseField('errorMessage') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.DescribeApplication.tags'),
        outputPath: 'tags',
        parameters: {
          applicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class IoTFleetHubResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTFleetHubListApplicationsRequest) {
  }

  public get applicationSummaries(): shapes.IoTFleetHubApplicationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.ListApplications.applicationSummaries'),
        outputPath: 'applicationSummaries',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.applicationSummaries', props);
    return resource.getResponseField('applicationSummaries') as unknown as shapes.IoTFleetHubApplicationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.ListApplications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTFleetHubResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTFleetHubListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTFleetHub',
        physicalResourceId: cr.PhysicalResourceId.of('IoTFleetHub.ListTagsForResource.tags'),
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

