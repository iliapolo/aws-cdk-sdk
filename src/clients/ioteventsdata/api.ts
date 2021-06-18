import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTEventsDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchPutMessage(input: shapes.IoTEventsDataBatchPutMessageRequest): IoTEventsDataBatchPutMessage {
    return new IoTEventsDataBatchPutMessage(this, 'BatchPutMessage', this.__resources, input);
  }

  public batchUpdateDetector(input: shapes.IoTEventsDataBatchUpdateDetectorRequest): IoTEventsDataBatchUpdateDetector {
    return new IoTEventsDataBatchUpdateDetector(this, 'BatchUpdateDetector', this.__resources, input);
  }

  public describeDetector(input: shapes.IoTEventsDataDescribeDetectorRequest): IoTEventsDataDescribeDetector {
    return new IoTEventsDataDescribeDetector(this, 'DescribeDetector', this.__resources, input);
  }

  public listDetectors(input: shapes.IoTEventsDataListDetectorsRequest): IoTEventsDataListDetectors {
    return new IoTEventsDataListDetectors(this, 'ListDetectors', this.__resources, input);
  }

}

export class IoTEventsDataBatchPutMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDataBatchPutMessageRequest) {
    super(scope, id);
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
          messages: this.input.messages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchPutMessage.BatchPutMessageErrorEntries', props);
    return resource.getResponseField('BatchPutMessageErrorEntries') as unknown as shapes.IoTEventsDataBatchPutMessageErrorEntry[];
  }

}

export class IoTEventsDataBatchUpdateDetector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDataBatchUpdateDetectorRequest) {
    super(scope, id);
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
          detectors: this.input.detectors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUpdateDetector.batchUpdateDetectorErrorEntries', props);
    return resource.getResponseField('batchUpdateDetectorErrorEntries') as unknown as shapes.IoTEventsDataBatchUpdateDetectorErrorEntry[];
  }

}

export class IoTEventsDataDescribeDetector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDataDescribeDetectorRequest) {
    super(scope, id);
  }

  public get detector(): IoTEventsDataDescribeDetectorDetector {
    return new IoTEventsDataDescribeDetectorDetector(this, 'Detector', this.__resources, this.input);
  }

}

export class IoTEventsDataDescribeDetectorDetector extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDataDescribeDetectorRequest) {
    super(scope, id);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.detectorModelName', props);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.keyValue', props);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.detectorModelVersion', props);
    return resource.getResponseField('detector.detectorModelVersion') as unknown as string;
  }

  public get state(): IoTEventsDataDescribeDetectorDetectorState {
    return new IoTEventsDataDescribeDetectorDetectorState(this, 'State', this.__resources, this.input);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.creationTime', props);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.lastUpdateTime', props);
    return resource.getResponseField('detector.lastUpdateTime') as unknown as string;
  }

}

export class IoTEventsDataDescribeDetectorDetectorState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDataDescribeDetectorRequest) {
    super(scope, id);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.state.stateName', props);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.state.variables', props);
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
          detectorModelName: this.input.detectorModelName,
          keyValue: this.input.keyValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDetector.detector.state.timers', props);
    return resource.getResponseField('detector.state.timers') as unknown as shapes.IoTEventsDataTimer[];
  }

}

export class IoTEventsDataListDetectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTEventsDataListDetectorsRequest) {
    super(scope, id);
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
          detectorModelName: this.input.detectorModelName,
          stateName: this.input.stateName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectors.detectorSummaries', props);
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
          detectorModelName: this.input.detectorModelName,
          stateName: this.input.stateName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDetectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

