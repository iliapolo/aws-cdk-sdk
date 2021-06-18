import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class QldbClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJournalKinesisStream(input: shapes.QldbCancelJournalKinesisStreamRequest): QLDBCancelJournalKinesisStream {
    return new QLDBCancelJournalKinesisStream(this, 'CancelJournalKinesisStream', this.__resources, input);
  }

  public createLedger(input: shapes.QldbCreateLedgerRequest): QLDBCreateLedger {
    return new QLDBCreateLedger(this, 'CreateLedger', this.__resources, input);
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

  public describeJournalKinesisStream(input: shapes.QldbDescribeJournalKinesisStreamRequest): QLDBDescribeJournalKinesisStream {
    return new QLDBDescribeJournalKinesisStream(this, 'DescribeJournalKinesisStream', this.__resources, input);
  }

  public describeJournalS3Export(input: shapes.QldbDescribeJournalS3ExportRequest): QLDBDescribeJournalS3Export {
    return new QLDBDescribeJournalS3Export(this, 'DescribeJournalS3Export', this.__resources, input);
  }

  public describeLedger(input: shapes.QldbDescribeLedgerRequest): QLDBDescribeLedger {
    return new QLDBDescribeLedger(this, 'DescribeLedger', this.__resources, input);
  }

  public exportJournalToS3(input: shapes.QldbExportJournalToS3Request): QLDBExportJournalToS3 {
    return new QLDBExportJournalToS3(this, 'ExportJournalToS3', this.__resources, input);
  }

  public fetchBlock(input: shapes.QldbGetBlockRequest): QLDBFetchBlock {
    return new QLDBFetchBlock(this, 'FetchBlock', this.__resources, input);
  }

  public fetchDigest(input: shapes.QldbGetDigestRequest): QLDBFetchDigest {
    return new QLDBFetchDigest(this, 'FetchDigest', this.__resources, input);
  }

  public fetchRevision(input: shapes.QldbGetRevisionRequest): QLDBFetchRevision {
    return new QLDBFetchRevision(this, 'FetchRevision', this.__resources, input);
  }

  public listJournalKinesisStreamsForLedger(input: shapes.QldbListJournalKinesisStreamsForLedgerRequest): QLDBListJournalKinesisStreamsForLedger {
    return new QLDBListJournalKinesisStreamsForLedger(this, 'ListJournalKinesisStreamsForLedger', this.__resources, input);
  }

  public listJournalS3Exports(input: shapes.QldbListJournalS3ExportsRequest): QLDBListJournalS3Exports {
    return new QLDBListJournalS3Exports(this, 'ListJournalS3Exports', this.__resources, input);
  }

  public listJournalS3ExportsForLedger(input: shapes.QldbListJournalS3ExportsForLedgerRequest): QLDBListJournalS3ExportsForLedger {
    return new QLDBListJournalS3ExportsForLedger(this, 'ListJournalS3ExportsForLedger', this.__resources, input);
  }

  public listLedgers(input: shapes.QldbListLedgersRequest): QLDBListLedgers {
    return new QLDBListLedgers(this, 'ListLedgers', this.__resources, input);
  }

  public listTagsForResource(input: shapes.QldbListTagsForResourceRequest): QLDBListTagsForResource {
    return new QLDBListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public streamJournalToKinesis(input: shapes.QldbStreamJournalToKinesisRequest): QLDBStreamJournalToKinesis {
    return new QLDBStreamJournalToKinesis(this, 'StreamJournalToKinesis', this.__resources, input);
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

  public updateLedger(input: shapes.QldbUpdateLedgerRequest): QLDBUpdateLedger {
    return new QLDBUpdateLedger(this, 'UpdateLedger', this.__resources, input);
  }

}

export class QLDBCancelJournalKinesisStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbCancelJournalKinesisStreamRequest) {
    super(scope, id);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelJournalKinesisStream.StreamId', props);
    return resource.getResponseField('StreamId') as unknown as string;
  }

}

export class QLDBCreateLedger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbCreateLedgerRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Tags: this.input.tags,
          PermissionsMode: this.input.permissionsMode,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLedger.Name', props);
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
          Name: this.input.name,
          Tags: this.input.tags,
          PermissionsMode: this.input.permissionsMode,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLedger.Arn', props);
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
          Name: this.input.name,
          Tags: this.input.tags,
          PermissionsMode: this.input.permissionsMode,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLedger.State', props);
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
          Name: this.input.name,
          Tags: this.input.tags,
          PermissionsMode: this.input.permissionsMode,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLedger.CreationDateTime', props);
    return resource.getResponseField('CreationDateTime') as unknown as string;
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
          Name: this.input.name,
          Tags: this.input.tags,
          PermissionsMode: this.input.permissionsMode,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLedger.DeletionProtection', props);
    return resource.getResponseField('DeletionProtection') as unknown as boolean;
  }

}

export class QLDBDescribeJournalKinesisStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalKinesisStreamRequest) {
    super(scope, id);
  }

  public get stream(): QLDBDescribeJournalKinesisStreamStream {
    return new QLDBDescribeJournalKinesisStreamStream(this, 'Stream', this.__resources, this.input);
  }

}

export class QLDBDescribeJournalKinesisStreamStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalKinesisStreamRequest) {
    super(scope, id);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.LedgerName', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.CreationTime', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.InclusiveStartTime', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.ExclusiveEndTime', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.RoleArn', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.StreamId', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.Arn', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.Status', props);
    return resource.getResponseField('Stream.Status') as unknown as string;
  }

  public get kinesisConfiguration(): QLDBDescribeJournalKinesisStreamStreamKinesisConfiguration {
    return new QLDBDescribeJournalKinesisStreamStreamKinesisConfiguration(this, 'KinesisConfiguration', this.__resources, this.input);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.ErrorCause', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.StreamName', props);
    return resource.getResponseField('Stream.StreamName') as unknown as string;
  }

}

export class QLDBDescribeJournalKinesisStreamStreamKinesisConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalKinesisStreamRequest) {
    super(scope, id);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.KinesisConfiguration.StreamArn', props);
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
          LedgerName: this.input.ledgerName,
          StreamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalKinesisStream.Stream.KinesisConfiguration.AggregationEnabled', props);
    return resource.getResponseField('Stream.KinesisConfiguration.AggregationEnabled') as unknown as boolean;
  }

}

export class QLDBDescribeJournalS3Export extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalS3ExportRequest) {
    super(scope, id);
  }

  public get exportDescription(): QLDBDescribeJournalS3ExportExportDescription {
    return new QLDBDescribeJournalS3ExportExportDescription(this, 'ExportDescription', this.__resources, this.input);
  }

}

export class QLDBDescribeJournalS3ExportExportDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalS3ExportRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.LedgerName', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.ExportId', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.ExportCreationTime', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.Status', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.InclusiveStartTime', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.ExclusiveEndTime', props);
    return resource.getResponseField('ExportDescription.ExclusiveEndTime') as unknown as string;
  }

  public get s3ExportConfiguration(): QLDBDescribeJournalS3ExportExportDescriptionS3ExportConfiguration {
    return new QLDBDescribeJournalS3ExportExportDescriptionS3ExportConfiguration(this, 'S3ExportConfiguration', this.__resources, this.input);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.RoleArn', props);
    return resource.getResponseField('ExportDescription.RoleArn') as unknown as string;
  }

}

export class QLDBDescribeJournalS3ExportExportDescriptionS3ExportConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalS3ExportRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.Bucket', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.Prefix', props);
    return resource.getResponseField('ExportDescription.S3ExportConfiguration.Prefix') as unknown as string;
  }

  public get encryptionConfiguration(): QLDBDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration {
    return new QLDBDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration(this, 'EncryptionConfiguration', this.__resources, this.input);
  }

}

export class QLDBDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeJournalS3ExportRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.EncryptionConfiguration.ObjectEncryptionType', props);
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
          Name: this.input.name,
          ExportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJournalS3Export.ExportDescription.S3ExportConfiguration.EncryptionConfiguration.KmsKeyArn', props);
    return resource.getResponseField('ExportDescription.S3ExportConfiguration.EncryptionConfiguration.KmsKeyArn') as unknown as string;
  }

}

export class QLDBDescribeLedger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbDescribeLedgerRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLedger.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLedger.Arn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLedger.State', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLedger.CreationDateTime', props);
    return resource.getResponseField('CreationDateTime') as unknown as string;
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLedger.DeletionProtection', props);
    return resource.getResponseField('DeletionProtection') as unknown as boolean;
  }

}

export class QLDBExportJournalToS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbExportJournalToS3Request) {
    super(scope, id);
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
          Name: this.input.name,
          InclusiveStartTime: this.input.inclusiveStartTime,
          ExclusiveEndTime: this.input.exclusiveEndTime,
          S3ExportConfiguration: {
            Bucket: this.input.s3ExportConfiguration.bucket,
            Prefix: this.input.s3ExportConfiguration.prefix,
            EncryptionConfiguration: {
              ObjectEncryptionType: this.input.s3ExportConfiguration.encryptionConfiguration.objectEncryptionType,
              KmsKeyArn: this.input.s3ExportConfiguration.encryptionConfiguration.kmsKeyArn,
            },
          },
          RoleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportJournalToS3.ExportId', props);
    return resource.getResponseField('ExportId') as unknown as string;
  }

}

export class QLDBFetchBlock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetBlockRequest) {
    super(scope, id);
  }

  public get block(): QLDBFetchBlockBlock {
    return new QLDBFetchBlockBlock(this, 'Block', this.__resources, this.input);
  }

  public get proof(): QLDBFetchBlockProof {
    return new QLDBFetchBlockProof(this, 'Proof', this.__resources, this.input);
  }

}

export class QLDBFetchBlockBlock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetBlockRequest) {
    super(scope, id);
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
          Name: this.input.name,
          BlockAddress: {
            IonText: this.input.blockAddress.ionText,
          },
          DigestTipAddress: {
            IonText: this.input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlock.Block.IonText', props);
    return resource.getResponseField('Block.IonText') as unknown as string;
  }

}

export class QLDBFetchBlockProof extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetBlockRequest) {
    super(scope, id);
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
          Name: this.input.name,
          BlockAddress: {
            IonText: this.input.blockAddress.ionText,
          },
          DigestTipAddress: {
            IonText: this.input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlock.Proof.IonText', props);
    return resource.getResponseField('Proof.IonText') as unknown as string;
  }

}

export class QLDBFetchDigest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetDigestRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDigest.Digest', props);
    return resource.getResponseField('Digest') as unknown as any;
  }

  public get digestTipAddress(): QLDBFetchDigestDigestTipAddress {
    return new QLDBFetchDigestDigestTipAddress(this, 'DigestTipAddress', this.__resources, this.input);
  }

}

export class QLDBFetchDigestDigestTipAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetDigestRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDigest.DigestTipAddress.IonText', props);
    return resource.getResponseField('DigestTipAddress.IonText') as unknown as string;
  }

}

export class QLDBFetchRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetRevisionRequest) {
    super(scope, id);
  }

  public get proof(): QLDBFetchRevisionProof {
    return new QLDBFetchRevisionProof(this, 'Proof', this.__resources, this.input);
  }

  public get revision(): QLDBFetchRevisionRevision {
    return new QLDBFetchRevisionRevision(this, 'Revision', this.__resources, this.input);
  }

}

export class QLDBFetchRevisionProof extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetRevisionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          BlockAddress: {
            IonText: this.input.blockAddress.ionText,
          },
          DocumentId: this.input.documentId,
          DigestTipAddress: {
            IonText: this.input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Proof.IonText', props);
    return resource.getResponseField('Proof.IonText') as unknown as string;
  }

}

export class QLDBFetchRevisionRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbGetRevisionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          BlockAddress: {
            IonText: this.input.blockAddress.ionText,
          },
          DocumentId: this.input.documentId,
          DigestTipAddress: {
            IonText: this.input.digestTipAddress?.ionText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRevision.Revision.IonText', props);
    return resource.getResponseField('Revision.IonText') as unknown as string;
  }

}

export class QLDBListJournalKinesisStreamsForLedger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbListJournalKinesisStreamsForLedgerRequest) {
    super(scope, id);
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
          LedgerName: this.input.ledgerName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJournalKinesisStreamsForLedger.Streams', props);
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
          LedgerName: this.input.ledgerName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJournalKinesisStreamsForLedger.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBListJournalS3Exports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbListJournalS3ExportsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJournalS3Exports.JournalS3Exports', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJournalS3Exports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBListJournalS3ExportsForLedger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbListJournalS3ExportsForLedgerRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJournalS3ExportsForLedger.JournalS3Exports', props);
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
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJournalS3ExportsForLedger.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBListLedgers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbListLedgersRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLedgers.Ledgers', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLedgers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QLDBListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class QLDBStreamJournalToKinesis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbStreamJournalToKinesisRequest) {
    super(scope, id);
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
          LedgerName: this.input.ledgerName,
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
          InclusiveStartTime: this.input.inclusiveStartTime,
          ExclusiveEndTime: this.input.exclusiveEndTime,
          KinesisConfiguration: {
            StreamArn: this.input.kinesisConfiguration.streamArn,
            AggregationEnabled: this.input.kinesisConfiguration.aggregationEnabled,
          },
          StreamName: this.input.streamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StreamJournalToKinesis.StreamId', props);
    return resource.getResponseField('StreamId') as unknown as string;
  }

}

export class QLDBUpdateLedger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbUpdateLedgerRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLedger.Name', props);
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
          Name: this.input.name,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLedger.Arn', props);
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
          Name: this.input.name,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLedger.State', props);
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
          Name: this.input.name,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLedger.CreationDateTime', props);
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
          Name: this.input.name,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLedger.DeletionProtection', props);
    return resource.getResponseField('DeletionProtection') as unknown as boolean;
  }

}

