import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class FinspacedataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createChangeset(input: shapes.FinspacedataCreateChangesetRequest): FinspacedataResponsesCreateChangeset {
    return new FinspacedataResponsesCreateChangeset(this, this.__resources, input);
  }

  public fetchProgrammaticAccessCredentials(input: shapes.FinspacedataGetProgrammaticAccessCredentialsRequest): FinspacedataResponsesFetchProgrammaticAccessCredentials {
    return new FinspacedataResponsesFetchProgrammaticAccessCredentials(this, this.__resources, input);
  }

  public fetchWorkingLocation(input: shapes.FinspacedataGetWorkingLocationRequest): FinspacedataResponsesFetchWorkingLocation {
    return new FinspacedataResponsesFetchWorkingLocation(this, this.__resources, input);
  }

}

export class FinspacedataResponsesCreateChangeset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspacedataCreateChangesetRequest) {
  }

  public get changeset(): FinspacedataResponsesCreateChangesetChangeset {
    return new FinspacedataResponsesCreateChangesetChangeset(this.__scope, this.__resources, this.__input);
  }

}

export class FinspacedataResponsesCreateChangesetChangeset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspacedataCreateChangesetRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.id'),
        outputPath: 'changeset.id',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.id', props);
    return resource.getResponseField('changeset.id') as unknown as string;
  }

  public get changesetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.changesetArn'),
        outputPath: 'changeset.changesetArn',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.changesetArn', props);
    return resource.getResponseField('changeset.changesetArn') as unknown as string;
  }

  public get datasetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.datasetId'),
        outputPath: 'changeset.datasetId',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.datasetId', props);
    return resource.getResponseField('changeset.datasetId') as unknown as string;
  }

  public get changeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.changeType'),
        outputPath: 'changeset.changeType',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.changeType', props);
    return resource.getResponseField('changeset.changeType') as unknown as string;
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.sourceType'),
        outputPath: 'changeset.sourceType',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.sourceType', props);
    return resource.getResponseField('changeset.sourceType') as unknown as string;
  }

  public get sourceParams(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.sourceParams'),
        outputPath: 'changeset.sourceParams',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.sourceParams', props);
    return resource.getResponseField('changeset.sourceParams') as unknown as Record<string, string>;
  }

  public get formatType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.formatType'),
        outputPath: 'changeset.formatType',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.formatType', props);
    return resource.getResponseField('changeset.formatType') as unknown as string;
  }

  public get formatParams(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.formatParams'),
        outputPath: 'changeset.formatParams',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.formatParams', props);
    return resource.getResponseField('changeset.formatParams') as unknown as Record<string, string>;
  }

  public get createTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.createTimestamp'),
        outputPath: 'changeset.createTimestamp',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.createTimestamp', props);
    return resource.getResponseField('changeset.createTimestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.status'),
        outputPath: 'changeset.status',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.status', props);
    return resource.getResponseField('changeset.status') as unknown as string;
  }

  public get errorInfo(): FinspacedataResponsesCreateChangesetChangesetErrorInfo {
    return new FinspacedataResponsesCreateChangesetChangesetErrorInfo(this.__scope, this.__resources, this.__input);
  }

  public get changesetLabels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.changesetLabels'),
        outputPath: 'changeset.changesetLabels',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.changesetLabels', props);
    return resource.getResponseField('changeset.changesetLabels') as unknown as Record<string, string>;
  }

  public get updatesChangesetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.updatesChangesetId'),
        outputPath: 'changeset.updatesChangesetId',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.updatesChangesetId', props);
    return resource.getResponseField('changeset.updatesChangesetId') as unknown as string;
  }

  public get updatedByChangesetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.updatedByChangesetId'),
        outputPath: 'changeset.updatedByChangesetId',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.updatedByChangesetId', props);
    return resource.getResponseField('changeset.updatedByChangesetId') as unknown as string;
  }

}

export class FinspacedataResponsesCreateChangesetChangesetErrorInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspacedataCreateChangesetRequest) {
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.errorInfo.errorMessage'),
        outputPath: 'changeset.errorInfo.errorMessage',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.errorInfo.errorMessage', props);
    return resource.getResponseField('changeset.errorInfo.errorMessage') as unknown as string;
  }

  public get errorCategory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeset',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.CreateChangeset.changeset.errorInfo.errorCategory'),
        outputPath: 'changeset.errorInfo.errorCategory',
        parameters: {
          datasetId: this.__input.datasetId,
          changeType: this.__input.changeType,
          sourceType: this.__input.sourceType,
          sourceParams: this.__input.sourceParams,
          formatType: this.__input.formatType,
          formatParams: this.__input.formatParams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeset.changeset.errorInfo.errorCategory', props);
    return resource.getResponseField('changeset.errorInfo.errorCategory') as unknown as string;
  }

}

export class FinspacedataResponsesFetchProgrammaticAccessCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspacedataGetProgrammaticAccessCredentialsRequest) {
  }

  public get credentials(): FinspacedataResponsesFetchProgrammaticAccessCredentialsCredentials {
    return new FinspacedataResponsesFetchProgrammaticAccessCredentialsCredentials(this.__scope, this.__resources, this.__input);
  }

  public get durationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProgrammaticAccessCredentials',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetProgrammaticAccessCredentials.durationInMinutes'),
        outputPath: 'durationInMinutes',
        parameters: {
          durationInMinutes: this.__input.durationInMinutes,
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProgrammaticAccessCredentials.durationInMinutes', props);
    return resource.getResponseField('durationInMinutes') as unknown as number;
  }

}

export class FinspacedataResponsesFetchProgrammaticAccessCredentialsCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspacedataGetProgrammaticAccessCredentialsRequest) {
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProgrammaticAccessCredentials',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetProgrammaticAccessCredentials.credentials.accessKeyId'),
        outputPath: 'credentials.accessKeyId',
        parameters: {
          durationInMinutes: this.__input.durationInMinutes,
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProgrammaticAccessCredentials.credentials.accessKeyId', props);
    return resource.getResponseField('credentials.accessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProgrammaticAccessCredentials',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetProgrammaticAccessCredentials.credentials.secretAccessKey'),
        outputPath: 'credentials.secretAccessKey',
        parameters: {
          durationInMinutes: this.__input.durationInMinutes,
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProgrammaticAccessCredentials.credentials.secretAccessKey', props);
    return resource.getResponseField('credentials.secretAccessKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProgrammaticAccessCredentials',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetProgrammaticAccessCredentials.credentials.sessionToken'),
        outputPath: 'credentials.sessionToken',
        parameters: {
          durationInMinutes: this.__input.durationInMinutes,
          environmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProgrammaticAccessCredentials.credentials.sessionToken', props);
    return resource.getResponseField('credentials.sessionToken') as unknown as string;
  }

}

export class FinspacedataResponsesFetchWorkingLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.FinspacedataGetWorkingLocationRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkingLocation',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetWorkingLocation.s3Uri'),
        outputPath: 's3Uri',
        parameters: {
          locationType: this.__input.locationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkingLocation.s3Uri', props);
    return resource.getResponseField('s3Uri') as unknown as string;
  }

  public get s3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkingLocation',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetWorkingLocation.s3Path'),
        outputPath: 's3Path',
        parameters: {
          locationType: this.__input.locationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkingLocation.s3Path', props);
    return resource.getResponseField('s3Path') as unknown as string;
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkingLocation',
        service: 'Finspacedata',
        physicalResourceId: cr.PhysicalResourceId.of('Finspacedata.GetWorkingLocation.s3Bucket'),
        outputPath: 's3Bucket',
        parameters: {
          locationType: this.__input.locationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkingLocation.s3Bucket', props);
    return resource.getResponseField('s3Bucket') as unknown as string;
  }

}

