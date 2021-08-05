import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTEventsDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchPutMessage(input: shapes.IoTEventsDataBatchPutMessageRequest): IoTEventsDataResponsesBatchPutMessage {
    return new IoTEventsDataResponsesBatchPutMessage(this, this.__resources, input);
  }

  public batchUpdateDetector(input: shapes.IoTEventsDataBatchUpdateDetectorRequest): IoTEventsDataResponsesBatchUpdateDetector {
    return new IoTEventsDataResponsesBatchUpdateDetector(this, this.__resources, input);
  }

  public describeDetector(input: shapes.IoTEventsDataDescribeDetectorRequest): IoTEventsDataResponsesDescribeDetector {
    return new IoTEventsDataResponsesDescribeDetector(this, this.__resources, input);
  }

  public listDetectors(input: shapes.IoTEventsDataListDetectorsRequest): IoTEventsDataResponsesListDetectors {
    return new IoTEventsDataResponsesListDetectors(this, this.__resources, input);
  }

}

export class IoTEventsDataResponsesBatchPutMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchPutMessageRequest) {
  }

  public get batchPutMessageErrorEntries(): shapes.IoTEventsDataBatchPutMessageErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutMessage',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchPutMessage.BatchPutMessageErrorEntries'),
        outputPath: 'BatchPutMessageErrorEntries',
        parameters: {
          messages: this.__input.messages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutMessage.BatchPutMessageErrorEntries', props);
    return resource.getResponseField('BatchPutMessageErrorEntries') as unknown as shapes.IoTEventsDataBatchPutMessageErrorEntry[];
  }

}

export class IoTEventsDataResponsesBatchUpdateDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataBatchUpdateDetectorRequest) {
  }

  public get batchUpdateDetectorErrorEntries(): shapes.IoTEventsDataBatchUpdateDetectorErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.BatchUpdateDetector.batchUpdateDetectorErrorEntries'),
        outputPath: 'batchUpdateDetectorErrorEntries',
        parameters: {
          detectors: this.__input.detectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateDetector.batchUpdateDetectorErrorEntries', props);
    return resource.getResponseField('batchUpdateDetectorErrorEntries') as unknown as shapes.IoTEventsDataBatchUpdateDetectorErrorEntry[];
  }

}

export class IoTEventsDataResponsesDescribeDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeDetectorRequest) {
  }

  public get detector(): IoTEventsDataResponsesDescribeDetectorDetector {
    return new IoTEventsDataResponsesDescribeDetectorDetector(this.__scope, this.__resources, this.__input);
  }

}

export class IoTEventsDataResponsesDescribeDetectorDetector {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeDetectorRequest) {
  }

  public get detectorModelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.detectorModelName'),
        outputPath: 'detector.detectorModelName',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.detectorModelName', props);
    return resource.getResponseField('detector.detectorModelName') as unknown as string;
  }

  public get keyValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.keyValue'),
        outputPath: 'detector.keyValue',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.keyValue', props);
    return resource.getResponseField('detector.keyValue') as unknown as string;
  }

  public get detectorModelVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.detectorModelVersion'),
        outputPath: 'detector.detectorModelVersion',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.detectorModelVersion', props);
    return resource.getResponseField('detector.detectorModelVersion') as unknown as string;
  }

  public get state(): IoTEventsDataResponsesDescribeDetectorDetectorState {
    return new IoTEventsDataResponsesDescribeDetectorDetectorState(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.creationTime'),
        outputPath: 'detector.creationTime',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.creationTime', props);
    return resource.getResponseField('detector.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.lastUpdateTime'),
        outputPath: 'detector.lastUpdateTime',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.lastUpdateTime', props);
    return resource.getResponseField('detector.lastUpdateTime') as unknown as string;
  }

}

export class IoTEventsDataResponsesDescribeDetectorDetectorState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataDescribeDetectorRequest) {
  }

  public get stateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.state.stateName'),
        outputPath: 'detector.state.stateName',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.state.stateName', props);
    return resource.getResponseField('detector.state.stateName') as unknown as string;
  }

  public get variables(): shapes.IoTEventsDataVariable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.state.variables'),
        outputPath: 'detector.state.variables',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.state.variables', props);
    return resource.getResponseField('detector.state.variables') as unknown as shapes.IoTEventsDataVariable[];
  }

  public get timers(): shapes.IoTEventsDataTimer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDetector',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.DescribeDetector.detector.state.timers'),
        outputPath: 'detector.state.timers',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          keyValue: this.__input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDetector.detector.state.timers', props);
    return resource.getResponseField('detector.state.timers') as unknown as shapes.IoTEventsDataTimer[];
  }

}

export class IoTEventsDataResponsesListDetectors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTEventsDataListDetectorsRequest) {
  }

  public get detectorSummaries(): shapes.IoTEventsDataDetectorSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectors',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.ListDetectors.detectorSummaries'),
        outputPath: 'detectorSummaries',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          stateName: this.__input.stateName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectors.detectorSummaries', props);
    return resource.getResponseField('detectorSummaries') as unknown as shapes.IoTEventsDataDetectorSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDetectors',
        service: 'IoTEventsData',
        physicalResourceId: cr.PhysicalResourceId.of('IoTEventsData.ListDetectors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          detectorModelName: this.__input.detectorModelName,
          stateName: this.__input.stateName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDetectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

