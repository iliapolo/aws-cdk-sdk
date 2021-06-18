import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IotDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteThingShadow(input: shapes.IotDataDeleteThingShadowRequest): IotDataDeleteThingShadow {
    return new IotDataDeleteThingShadow(this, 'DeleteThingShadow', this.__resources, input);
  }

  public fetchThingShadow(input: shapes.IotDataGetThingShadowRequest): IotDataFetchThingShadow {
    return new IotDataFetchThingShadow(this, 'FetchThingShadow', this.__resources, input);
  }

  public listNamedShadowsForThing(input: shapes.IotDataListNamedShadowsForThingRequest): IotDataListNamedShadowsForThing {
    return new IotDataListNamedShadowsForThing(this, 'ListNamedShadowsForThing', this.__resources, input);
  }

  public publish(input: shapes.IotDataPublishRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publish',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.Publish'),
        parameters: {
          topic: input.topic,
          qos: input.qos,
          payload: {
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'Publish', props);
  }

  public updateThingShadow(input: shapes.IotDataUpdateThingShadowRequest): IotDataUpdateThingShadow {
    return new IotDataUpdateThingShadow(this, 'UpdateThingShadow', this.__resources, input);
  }

}

export class IotDataDeleteThingShadow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDataDeleteThingShadowRequest) {
    super(scope, id);
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThingShadow',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.DeleteThingShadow.payload'),
        outputPath: 'payload',
        parameters: {
          thingName: this.input.thingName,
          shadowName: this.input.shadowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteThingShadow.payload', props);
    return resource.getResponseField('payload') as unknown as any;
  }

}

export class IotDataFetchThingShadow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDataGetThingShadowRequest) {
    super(scope, id);
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getThingShadow',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.GetThingShadow.payload'),
        outputPath: 'payload',
        parameters: {
          thingName: this.input.thingName,
          shadowName: this.input.shadowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetThingShadow.payload', props);
    return resource.getResponseField('payload') as unknown as any;
  }

}

export class IotDataListNamedShadowsForThing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDataListNamedShadowsForThingRequest) {
    super(scope, id);
  }

  public get results(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamedShadowsForThing',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.ListNamedShadowsForThing.results'),
        outputPath: 'results',
        parameters: {
          thingName: this.input.thingName,
          nextToken: this.input.nextToken,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamedShadowsForThing.results', props);
    return resource.getResponseField('results') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamedShadowsForThing',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.ListNamedShadowsForThing.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingName: this.input.thingName,
          nextToken: this.input.nextToken,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamedShadowsForThing.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get timestamp(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamedShadowsForThing',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.ListNamedShadowsForThing.timestamp'),
        outputPath: 'timestamp',
        parameters: {
          thingName: this.input.thingName,
          nextToken: this.input.nextToken,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamedShadowsForThing.timestamp', props);
    return resource.getResponseField('timestamp') as unknown as number;
  }

}

export class IotDataUpdateThingShadow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDataUpdateThingShadowRequest) {
    super(scope, id);
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThingShadow',
        service: 'IotData',
        physicalResourceId: cr.PhysicalResourceId.of('IotData.UpdateThingShadow.payload'),
        outputPath: 'payload',
        parameters: {
          thingName: this.input.thingName,
          shadowName: this.input.shadowName,
          payload: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThingShadow.payload', props);
    return resource.getResponseField('payload') as unknown as any;
  }

}

