import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SageMakerFeatureStoreRuntimeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetRecord(input: shapes.SageMakerFeatureStoreRuntimeBatchGetRecordRequest): SageMakerFeatureStoreRuntimeResponsesBatchGetRecord {
    return new SageMakerFeatureStoreRuntimeResponsesBatchGetRecord(this, this.__resources, input);
  }

  public deleteRecord(input: shapes.SageMakerFeatureStoreRuntimeDeleteRecordRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRecord',
        service: 'SageMakerFeatureStoreRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('SageMakerFeatureStoreRuntime.DeleteRecord'),
        parameters: {
          FeatureGroupName: input.featureGroupName,
          RecordIdentifierValueAsString: input.recordIdentifierValueAsString,
          EventTime: input.eventTime,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRecord', props);
  }

  public fetchRecord(input: shapes.SageMakerFeatureStoreRuntimeGetRecordRequest): SageMakerFeatureStoreRuntimeResponsesFetchRecord {
    return new SageMakerFeatureStoreRuntimeResponsesFetchRecord(this, this.__resources, input);
  }

  public putRecord(input: shapes.SageMakerFeatureStoreRuntimePutRecordRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecord',
        service: 'SageMakerFeatureStoreRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('SageMakerFeatureStoreRuntime.PutRecord'),
        parameters: {
          FeatureGroupName: input.featureGroupName,
          Record: input.record,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutRecord', props);
  }

}

export class SageMakerFeatureStoreRuntimeResponsesBatchGetRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerFeatureStoreRuntimeBatchGetRecordRequest) {
  }

  public get records(): shapes.SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetRecord',
        service: 'SageMakerFeatureStoreRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('SageMakerFeatureStoreRuntime.BatchGetRecord.Records'),
        outputPath: 'Records',
        parameters: {
          Identifiers: this.__input.identifiers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetRecord.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail[];
  }

  public get errors(): shapes.SageMakerFeatureStoreRuntimeBatchGetRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetRecord',
        service: 'SageMakerFeatureStoreRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('SageMakerFeatureStoreRuntime.BatchGetRecord.Errors'),
        outputPath: 'Errors',
        parameters: {
          Identifiers: this.__input.identifiers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetRecord.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.SageMakerFeatureStoreRuntimeBatchGetRecordError[];
  }

  public get unprocessedIdentifiers(): shapes.SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetRecord',
        service: 'SageMakerFeatureStoreRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('SageMakerFeatureStoreRuntime.BatchGetRecord.UnprocessedIdentifiers'),
        outputPath: 'UnprocessedIdentifiers',
        parameters: {
          Identifiers: this.__input.identifiers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetRecord.UnprocessedIdentifiers', props);
    return resource.getResponseField('UnprocessedIdentifiers') as unknown as shapes.SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier[];
  }

}

export class SageMakerFeatureStoreRuntimeResponsesFetchRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerFeatureStoreRuntimeGetRecordRequest) {
  }

  public get record(): shapes.SageMakerFeatureStoreRuntimeFeatureValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecord',
        service: 'SageMakerFeatureStoreRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('SageMakerFeatureStoreRuntime.GetRecord.Record'),
        outputPath: 'Record',
        parameters: {
          FeatureGroupName: this.__input.featureGroupName,
          RecordIdentifierValueAsString: this.__input.recordIdentifierValueAsString,
          FeatureNames: this.__input.featureNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecord.Record', props);
    return resource.getResponseField('Record') as unknown as shapes.SageMakerFeatureStoreRuntimeFeatureValue[];
  }

}

