import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class QldbClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJournalKinesisStream(input: shapes.QldbCancelJournalKinesisStreamRequest): QLDBResponsesCancelJournalKinesisStream {
    return new QLDBResponsesCancelJournalKinesisStream(this, this.__resources, input);
  }

  public createLedger(input: shapes.QldbCreateLedgerRequest): QLDBResponsesCreateLedger {
    return new QLDBResponsesCreateLedger(this, this.__resources, input);
  }

  public deleteLedger(input: shapes.QldbDeleteLedgerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DeleteLedger'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLedger', props);
  }

  public describeJournalKinesisStream(input: shapes.QldbDescribeJournalKinesisStreamRequest): QLDBResponsesDescribeJournalKinesisStream {
    return new QLDBResponsesDescribeJournalKinesisStream(this, this.__resources, input);
  }

  public describeJournalS3Export(input: shapes.QldbDescribeJournalS3ExportRequest): QLDBResponsesDescribeJournalS3Export {
    return new QLDBResponsesDescribeJournalS3Export(this, this.__resources, input);
  }

  public describeLedger(input: shapes.QldbDescribeLedgerRequest): QLDBResponsesDescribeLedger {
    return new QLDBResponsesDescribeLedger(this, this.__resources, input);
  }

  public exportJournalToS3(input: shapes.QldbExportJournalToS3Request): QLDBResponsesExportJournalToS3 {
    return new QLDBResponsesExportJournalToS3(this, this.__resources, input);
  }

  public fetchBlock(input: shapes.QldbGetBlockRequest): QLDBResponsesFetchBlock {
    return new QLDBResponsesFetchBlock(this, this.__resources, input);
  }

  public fetchDigest(input: shapes.QldbGetDigestRequest): QLDBResponsesFetchDigest {
    return new QLDBResponsesFetchDigest(this, this.__resources, input);
  }

  public fetchRevision(input: shapes.QldbGetRevisionRequest): QLDBResponsesFetchRevision {
    return new QLDBResponsesFetchRevision(this, this.__resources, input);
  }

  public listJournalKinesisStreamsForLedger(input: shapes.QldbListJournalKinesisStreamsForLedgerRequest): QLDBResponsesListJournalKinesisStreamsForLedger {
    return new QLDBResponsesListJournalKinesisStreamsForLedger(this, this.__resources, input);
  }

  public listJournalS3Exports(input: shapes.QldbListJournalS3ExportsRequest): QLDBResponsesListJournalS3Exports {
    return new QLDBResponsesListJournalS3Exports(this, this.__resources, input);
  }

  public listJournalS3ExportsForLedger(input: shapes.QldbListJournalS3ExportsForLedgerRequest): QLDBResponsesListJournalS3ExportsForLedger {
    return new QLDBResponsesListJournalS3ExportsForLedger(this, this.__resources, input);
  }

  public listLedgers(input: shapes.QldbListLedgersRequest): QLDBResponsesListLedgers {
    return new QLDBResponsesListLedgers(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.QldbListTagsForResourceRequest): QLDBResponsesListTagsForResource {
    return new QLDBResponsesListTagsForResource(this, this.__resources, input);
  }

  public streamJournalToKinesis(input: shapes.QldbStreamJournalToKinesisRequest): QLDBResponsesStreamJournalToKinesis {
    return new QLDBResponsesStreamJournalToKinesis(this, this.__resources, input);
  }

  public tagResource(input: shapes.QldbTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.QldbUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateLedger(input: shapes.QldbUpdateLedgerRequest): QLDBResponsesUpdateLedger {
    return new QLDBResponsesUpdateLedger(this, this.__resources, input);
  }

  public updateLedgerPermissionsMode(input: shapes.QldbUpdateLedgerPermissionsModeRequest): QLDBResponsesUpdateLedgerPermissionsMode {
    return new QLDBResponsesUpdateLedgerPermissionsMode(this, this.__resources, input);
  }

}

export class QLDBResponsesCancelJournalKinesisStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbCancelJournalKinesisStreamRequest) {
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CancelJournalKinesisStream.StreamId'),
        outputPath: 'StreamId',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJournalKinesisStream.StreamId', props);
    return resource.getResponseField('StreamId') as unknown as string;
  }

}

export class QLDBResponsesCreateLedger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbCreateLedgerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.State'),
        outputPath: 'State',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.CreationDateTime'),
        outputPath: 'CreationDateTime',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.CreationDateTime', props);
    return resource.getResponseField('CreationDateTime') as unknown as string;
  }

  public get permissionsMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.PermissionsMode'),
        outputPath: 'PermissionsMode',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.PermissionsMode', props);
    return resource.getResponseField('PermissionsMode') as unknown as string;
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.DeletionProtection'),
        outputPath: 'DeletionProtection',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.DeletionProtection', props);
    return resource.getResponseField('DeletionProtection') as unknown as boolean;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.CreateLedger.KmsKeyArn'),
        outputPath: 'KmsKeyArn',
        parameters: {
          Name: this.__input.name,
          Tags: this.__input.tags,
          PermissionsMode: this.__input.permissionsMode,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLedger.KmsKeyArn', props);
    return resource.getResponseField('KmsKeyArn') as unknown as string;
  }

}

export class QLDBResponsesDescribeJournalKinesisStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalKinesisStreamRequest) {
  }

  public get stream(): QLDBResponsesDescribeJournalKinesisStreamStream {
    return new QLDBResponsesDescribeJournalKinesisStreamStream(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesDescribeJournalKinesisStreamStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalKinesisStreamRequest) {
  }

  public get ledgerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.LedgerName'),
        outputPath: 'Stream.LedgerName',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.LedgerName', props);
    return resource.getResponseField('Stream.LedgerName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.CreationTime'),
        outputPath: 'Stream.CreationTime',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.CreationTime', props);
    return resource.getResponseField('Stream.CreationTime') as unknown as string;
  }

  public get inclusiveStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.InclusiveStartTime'),
        outputPath: 'Stream.InclusiveStartTime',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.InclusiveStartTime', props);
    return resource.getResponseField('Stream.InclusiveStartTime') as unknown as string;
  }

  public get exclusiveEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.ExclusiveEndTime'),
        outputPath: 'Stream.ExclusiveEndTime',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.ExclusiveEndTime', props);
    return resource.getResponseField('Stream.ExclusiveEndTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.RoleArn'),
        outputPath: 'Stream.RoleArn',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.RoleArn', props);
    return resource.getResponseField('Stream.RoleArn') as unknown as string;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.StreamId'),
        outputPath: 'Stream.StreamId',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.StreamId', props);
    return resource.getResponseField('Stream.StreamId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.Arn'),
        outputPath: 'Stream.Arn',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.Arn', props);
    return resource.getResponseField('Stream.Arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.Status'),
        outputPath: 'Stream.Status',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.Status', props);
    return resource.getResponseField('Stream.Status') as unknown as string;
  }

  public get kinesisConfiguration(): QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration {
    return new QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get errorCause(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.ErrorCause'),
        outputPath: 'Stream.ErrorCause',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.ErrorCause', props);
    return resource.getResponseField('Stream.ErrorCause') as unknown as string;
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.StreamName'),
        outputPath: 'Stream.StreamName',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.StreamName', props);
    return resource.getResponseField('Stream.StreamName') as unknown as string;
  }

}

export class QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalKinesisStreamRequest) {
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.KinesisConfiguration.StreamArn'),
        outputPath: 'Stream.KinesisConfiguration.StreamArn',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.KinesisConfiguration.StreamArn', props);
    return resource.getResponseField('Stream.KinesisConfiguration.StreamArn') as unknown as string;
  }

  public get aggregationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalKinesisStream',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalKinesisStream.Stream.KinesisConfiguration.AggregationEnabled'),
        outputPath: 'Stream.KinesisConfiguration.AggregationEnabled',
        parameters: {
          LedgerName: this.__input.ledgerName,
          StreamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalKinesisStream.Stream.KinesisConfiguration.AggregationEnabled', props);
    return resource.getResponseField('Stream.KinesisConfiguration.AggregationEnabled') as unknown as boolean;
  }

}

export class QLDBResponsesDescribeJournalS3Export {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalS3ExportRequest) {
  }

  public get exportDescription(): QLDBResponsesDescribeJournalS3ExportExportDescription {
    return new QLDBResponsesDescribeJournalS3ExportExportDescription(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesDescribeJournalS3ExportExportDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalS3ExportRequest) {
  }

  public get ledgerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.LedgerName'),
        outputPath: 'ExportDescription.LedgerName',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.LedgerName', props);
    return resource.getResponseField('ExportDescription.LedgerName') as unknown as string;
  }

  public get exportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.ExportId'),
        outputPath: 'ExportDescription.ExportId',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.ExportId', props);
    return resource.getResponseField('ExportDescription.ExportId') as unknown as string;
  }

  public get exportCreationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.ExportCreationTime'),
        outputPath: 'ExportDescription.ExportCreationTime',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.ExportCreationTime', props);
    return resource.getResponseField('ExportDescription.ExportCreationTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.Status'),
        outputPath: 'ExportDescription.Status',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.Status', props);
    return resource.getResponseField('ExportDescription.Status') as unknown as string;
  }

  public get inclusiveStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.InclusiveStartTime'),
        outputPath: 'ExportDescription.InclusiveStartTime',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.InclusiveStartTime', props);
    return resource.getResponseField('ExportDescription.InclusiveStartTime') as unknown as string;
  }

  public get exclusiveEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.ExclusiveEndTime'),
        outputPath: 'ExportDescription.ExclusiveEndTime',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.ExclusiveEndTime', props);
    return resource.getResponseField('ExportDescription.ExclusiveEndTime') as unknown as string;
  }

  public get s3ExportConfiguration(): QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration {
    return new QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.RoleArn'),
        outputPath: 'ExportDescription.RoleArn',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.RoleArn', props);
    return resource.getResponseField('ExportDescription.RoleArn') as unknown as string;
  }

}

export class QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalS3ExportRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.Bucket'),
        outputPath: 'ExportDescription.S3ExportConfiguration.Bucket',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.Bucket', props);
    return resource.getResponseField('ExportDescription.S3ExportConfiguration.Bucket') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.Prefix'),
        outputPath: 'ExportDescription.S3ExportConfiguration.Prefix',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.Prefix', props);
    return resource.getResponseField('ExportDescription.S3ExportConfiguration.Prefix') as unknown as string;
  }

  public get encryptionConfiguration(): QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration {
    return new QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeJournalS3ExportRequest) {
  }

  public get objectEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.EncryptionConfiguration.ObjectEncryptionType'),
        outputPath: 'ExportDescription.S3ExportConfiguration.EncryptionConfiguration.ObjectEncryptionType',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.EncryptionConfiguration.ObjectEncryptionType', props);
    return resource.getResponseField('ExportDescription.S3ExportConfiguration.EncryptionConfiguration.ObjectEncryptionType') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJournalS3Export',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.EncryptionConfiguration.KmsKeyArn'),
        outputPath: 'ExportDescription.S3ExportConfiguration.EncryptionConfiguration.KmsKeyArn',
        parameters: {
          Name: this.__input.name,
          ExportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.EncryptionConfiguration.KmsKeyArn', props);
    return resource.getResponseField('ExportDescription.S3ExportConfiguration.EncryptionConfiguration.KmsKeyArn') as unknown as string;
  }

}

export class QLDBResponsesDescribeLedger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeLedgerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.State'),
        outputPath: 'State',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.CreationDateTime'),
        outputPath: 'CreationDateTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.CreationDateTime', props);
    return resource.getResponseField('CreationDateTime') as unknown as string;
  }

  public get permissionsMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.PermissionsMode'),
        outputPath: 'PermissionsMode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.PermissionsMode', props);
    return resource.getResponseField('PermissionsMode') as unknown as string;
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.DeletionProtection'),
        outputPath: 'DeletionProtection',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.DeletionProtection', props);
    return resource.getResponseField('DeletionProtection') as unknown as boolean;
  }

  public get encryptionDescription(): QLDBResponsesDescribeLedgerEncryptionDescription {
    return new QLDBResponsesDescribeLedgerEncryptionDescription(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesDescribeLedgerEncryptionDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbDescribeLedgerRequest) {
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.EncryptionDescription.KmsKeyArn'),
        outputPath: 'EncryptionDescription.KmsKeyArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.EncryptionDescription.KmsKeyArn', props);
    return resource.getResponseField('EncryptionDescription.KmsKeyArn') as unknown as string;
  }

  public get encryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.EncryptionDescription.EncryptionStatus'),
        outputPath: 'EncryptionDescription.EncryptionStatus',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.EncryptionDescription.EncryptionStatus', props);
    return resource.getResponseField('EncryptionDescription.EncryptionStatus') as unknown as string;
  }

  public get inaccessibleKmsKeyDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.DescribeLedger.EncryptionDescription.InaccessibleKmsKeyDateTime'),
        outputPath: 'EncryptionDescription.InaccessibleKmsKeyDateTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLedger.EncryptionDescription.InaccessibleKmsKeyDateTime', props);
    return resource.getResponseField('EncryptionDescription.InaccessibleKmsKeyDateTime') as unknown as string;
  }

}

export class QLDBResponsesExportJournalToS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbExportJournalToS3Request) {
  }

  public get exportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportJournalToS3',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ExportJournalToS3.ExportId'),
        outputPath: 'ExportId',
        parameters: {
          Name: this.__input.name,
          InclusiveStartTime: this.__input.inclusiveStartTime,
          ExclusiveEndTime: this.__input.exclusiveEndTime,
          S3ExportConfiguration: {
            Bucket: this.__input.s3ExportConfiguration.bucket,
            Prefix: this.__input.s3ExportConfiguration.prefix,
            EncryptionConfiguration: {
              ObjectEncryptionType: this.__input.s3ExportConfiguration.encryptionConfiguration.objectEncryptionType,
              KmsKeyArn: this.__input.s3ExportConfiguration.encryptionConfiguration.kmsKeyArn,
            },
          },
          RoleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportJournalToS3.ExportId', props);
    return resource.getResponseField('ExportId') as unknown as string;
  }

}

export class QLDBResponsesFetchBlock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetBlockRequest) {
  }

  public get block(): QLDBResponsesFetchBlockBlock {
    return new QLDBResponsesFetchBlockBlock(this.__scope, this.__resources, this.__input);
  }

  public get proof(): QLDBResponsesFetchBlockProof {
    return new QLDBResponsesFetchBlockProof(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesFetchBlockBlock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetBlockRequest) {
  }

  public get ionText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlock',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.GetBlock.Block.IonText'),
        outputPath: 'Block.IonText',
        parameters: {
          Name: this.__input.name,
          BlockAddress: {
            IonText: this.__input.blockAddress.ionText,
          },
          DigestTipAddress: {
            IonText: this.__input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlock.Block.IonText', props);
    return resource.getResponseField('Block.IonText') as unknown as string;
  }

}

export class QLDBResponsesFetchBlockProof {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetBlockRequest) {
  }

  public get ionText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlock',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.GetBlock.Proof.IonText'),
        outputPath: 'Proof.IonText',
        parameters: {
          Name: this.__input.name,
          BlockAddress: {
            IonText: this.__input.blockAddress.ionText,
          },
          DigestTipAddress: {
            IonText: this.__input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlock.Proof.IonText', props);
    return resource.getResponseField('Proof.IonText') as unknown as string;
  }

}

export class QLDBResponsesFetchDigest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetDigestRequest) {
  }

  public get digest(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDigest',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.GetDigest.Digest'),
        outputPath: 'Digest',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDigest.Digest', props);
    return resource.getResponseField('Digest') as unknown as any;
  }

  public get digestTipAddress(): QLDBResponsesFetchDigestDigestTipAddress {
    return new QLDBResponsesFetchDigestDigestTipAddress(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesFetchDigestDigestTipAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetDigestRequest) {
  }

  public get ionText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDigest',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.GetDigest.DigestTipAddress.IonText'),
        outputPath: 'DigestTipAddress.IonText',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDigest.DigestTipAddress.IonText', props);
    return resource.getResponseField('DigestTipAddress.IonText') as unknown as string;
  }

}

export class QLDBResponsesFetchRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetRevisionRequest) {
  }

  public get proof(): QLDBResponsesFetchRevisionProof {
    return new QLDBResponsesFetchRevisionProof(this.__scope, this.__resources, this.__input);
  }

  public get revision(): QLDBResponsesFetchRevisionRevision {
    return new QLDBResponsesFetchRevisionRevision(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesFetchRevisionProof {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetRevisionRequest) {
  }

  public get ionText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.GetRevision.Proof.IonText'),
        outputPath: 'Proof.IonText',
        parameters: {
          Name: this.__input.name,
          BlockAddress: {
            IonText: this.__input.blockAddress.ionText,
          },
          DocumentId: this.__input.documentId,
          DigestTipAddress: {
            IonText: this.__input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Proof.IonText', props);
    return resource.getResponseField('Proof.IonText') as unknown as string;
  }

}

export class QLDBResponsesFetchRevisionRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbGetRevisionRequest) {
  }

  public get ionText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRevision',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.GetRevision.Revision.IonText'),
        outputPath: 'Revision.IonText',
        parameters: {
          Name: this.__input.name,
          BlockAddress: {
            IonText: this.__input.blockAddress.ionText,
          },
          DocumentId: this.__input.documentId,
          DigestTipAddress: {
            IonText: this.__input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRevision.Revision.IonText', props);
    return resource.getResponseField('Revision.IonText') as unknown as string;
  }

}

export class QLDBResponsesListJournalKinesisStreamsForLedger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbListJournalKinesisStreamsForLedgerRequest) {
  }

  public get streams(): shapes.QldbJournalKinesisStreamDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJournalKinesisStreamsForLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListJournalKinesisStreamsForLedger.Streams'),
        outputPath: 'Streams',
        parameters: {
          LedgerName: this.__input.ledgerName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJournalKinesisStreamsForLedger.Streams', props);
    return resource.getResponseField('Streams') as unknown as shapes.QldbJournalKinesisStreamDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJournalKinesisStreamsForLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListJournalKinesisStreamsForLedger.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LedgerName: this.__input.ledgerName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJournalKinesisStreamsForLedger.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBResponsesListJournalS3Exports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbListJournalS3ExportsRequest) {
  }

  public get journalS3Exports(): shapes.QldbJournalS3ExportDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJournalS3Exports',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListJournalS3Exports.JournalS3Exports'),
        outputPath: 'JournalS3Exports',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJournalS3Exports.JournalS3Exports', props);
    return resource.getResponseField('JournalS3Exports') as unknown as shapes.QldbJournalS3ExportDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJournalS3Exports',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListJournalS3Exports.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJournalS3Exports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBResponsesListJournalS3ExportsForLedger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbListJournalS3ExportsForLedgerRequest) {
  }

  public get journalS3Exports(): shapes.QldbJournalS3ExportDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJournalS3ExportsForLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListJournalS3ExportsForLedger.JournalS3Exports'),
        outputPath: 'JournalS3Exports',
        parameters: {
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJournalS3ExportsForLedger.JournalS3Exports', props);
    return resource.getResponseField('JournalS3Exports') as unknown as shapes.QldbJournalS3ExportDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJournalS3ExportsForLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListJournalS3ExportsForLedger.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJournalS3ExportsForLedger.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBResponsesListLedgers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbListLedgersRequest) {
  }

  public get ledgers(): shapes.QldbLedgerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLedgers',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListLedgers.Ledgers'),
        outputPath: 'Ledgers',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLedgers.Ledgers', props);
    return resource.getResponseField('Ledgers') as unknown as shapes.QldbLedgerSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLedgers',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListLedgers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLedgers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class QLDBResponsesStreamJournalToKinesis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbStreamJournalToKinesisRequest) {
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'streamJournalToKinesis',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.StreamJournalToKinesis.StreamId'),
        outputPath: 'StreamId',
        parameters: {
          LedgerName: this.__input.ledgerName,
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          InclusiveStartTime: this.__input.inclusiveStartTime,
          ExclusiveEndTime: this.__input.exclusiveEndTime,
          KinesisConfiguration: {
            StreamArn: this.__input.kinesisConfiguration.streamArn,
            AggregationEnabled: this.__input.kinesisConfiguration.aggregationEnabled,
          },
          StreamName: this.__input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StreamJournalToKinesis.StreamId', props);
    return resource.getResponseField('StreamId') as unknown as string;
  }

}

export class QLDBResponsesUpdateLedger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbUpdateLedgerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.State'),
        outputPath: 'State',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.CreationDateTime'),
        outputPath: 'CreationDateTime',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.CreationDateTime', props);
    return resource.getResponseField('CreationDateTime') as unknown as string;
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.DeletionProtection'),
        outputPath: 'DeletionProtection',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.DeletionProtection', props);
    return resource.getResponseField('DeletionProtection') as unknown as boolean;
  }

  public get encryptionDescription(): QLDBResponsesUpdateLedgerEncryptionDescription {
    return new QLDBResponsesUpdateLedgerEncryptionDescription(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBResponsesUpdateLedgerEncryptionDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbUpdateLedgerRequest) {
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.EncryptionDescription.KmsKeyArn'),
        outputPath: 'EncryptionDescription.KmsKeyArn',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.EncryptionDescription.KmsKeyArn', props);
    return resource.getResponseField('EncryptionDescription.KmsKeyArn') as unknown as string;
  }

  public get encryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.EncryptionDescription.EncryptionStatus'),
        outputPath: 'EncryptionDescription.EncryptionStatus',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.EncryptionDescription.EncryptionStatus', props);
    return resource.getResponseField('EncryptionDescription.EncryptionStatus') as unknown as string;
  }

  public get inaccessibleKmsKeyDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedger',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedger.EncryptionDescription.InaccessibleKmsKeyDateTime'),
        outputPath: 'EncryptionDescription.InaccessibleKmsKeyDateTime',
        parameters: {
          Name: this.__input.name,
          DeletionProtection: this.__input.deletionProtection,
          KmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedger.EncryptionDescription.InaccessibleKmsKeyDateTime', props);
    return resource.getResponseField('EncryptionDescription.InaccessibleKmsKeyDateTime') as unknown as string;
  }

}

export class QLDBResponsesUpdateLedgerPermissionsMode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbUpdateLedgerPermissionsModeRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedgerPermissionsMode',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedgerPermissionsMode.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          PermissionsMode: this.__input.permissionsMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedgerPermissionsMode.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedgerPermissionsMode',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedgerPermissionsMode.Arn'),
        outputPath: 'Arn',
        parameters: {
          Name: this.__input.name,
          PermissionsMode: this.__input.permissionsMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedgerPermissionsMode.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get permissionsMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLedgerPermissionsMode',
        service: 'QLDB',
        physicalResourceId: cr.PhysicalResourceId.of('QLDB.UpdateLedgerPermissionsMode.PermissionsMode'),
        outputPath: 'PermissionsMode',
        parameters: {
          Name: this.__input.name,
          PermissionsMode: this.__input.permissionsMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLedgerPermissionsMode.PermissionsMode', props);
    return resource.getResponseField('PermissionsMode') as unknown as string;
  }

}

