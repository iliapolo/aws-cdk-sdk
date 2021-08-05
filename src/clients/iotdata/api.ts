import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IotDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteThingShadow(input: shapes.IotDataDeleteThingShadowRequest): IotDataResponsesDeleteThingShadow {
    return new IotDataResponsesDeleteThingShadow(this, this.__resources, input);
  }

  public fetchThingShadow(input: shapes.IotDataGetThingShadowRequest): IotDataResponsesFetchThingShadow {
    return new IotDataResponsesFetchThingShadow(this, this.__resources, input);
  }

  public listNamedShadowsForThing(input: shapes.IotDataListNamedShadowsForThingRequest): IotDataResponsesListNamedShadowsForThing {
    return new IotDataResponsesListNamedShadowsForThing(this, this.__resources, input);
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

  public updateThingShadow(input: shapes.IotDataUpdateThingShadowRequest): IotDataResponsesUpdateThingShadow {
    return new IotDataResponsesUpdateThingShadow(this, this.__resources, input);
  }

}

export class IotDataResponsesDeleteThingShadow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDataDeleteThingShadowRequest) {
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
          thingName: this.__input.thingName,
          shadowName: this.__input.shadowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteThingShadow.payload', props);
    return resource.getResponseField('payload') as unknown as any;
  }

}

export class IotDataResponsesFetchThingShadow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDataGetThingShadowRequest) {
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
          thingName: this.__input.thingName,
          shadowName: this.__input.shadowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetThingShadow.payload', props);
    return resource.getResponseField('payload') as unknown as any;
  }

}

export class IotDataResponsesListNamedShadowsForThing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDataListNamedShadowsForThingRequest) {
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
          thingName: this.__input.thingName,
          nextToken: this.__input.nextToken,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamedShadowsForThing.results', props);
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
          thingName: this.__input.thingName,
          nextToken: this.__input.nextToken,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamedShadowsForThing.nextToken', props);
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
          thingName: this.__input.thingName,
          nextToken: this.__input.nextToken,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamedShadowsForThing.timestamp', props);
    return resource.getResponseField('timestamp') as unknown as number;
  }

}

export class IotDataResponsesUpdateThingShadow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDataUpdateThingShadowRequest) {
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
          thingName: this.__input.thingName,
          shadowName: this.__input.shadowName,
          payload: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThingShadow.payload', props);
    return resource.getResponseField('payload') as unknown as any;
  }

}

