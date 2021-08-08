import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53RecoveryClusterClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchRoutingControlState(input: shapes.Route53RecoveryClusterGetRoutingControlStateRequest): Route53RecoveryClusterResponsesFetchRoutingControlState {
    return new Route53RecoveryClusterResponsesFetchRoutingControlState(this, this.__resources, input);
  }

  public updateRoutingControlState(input: shapes.Route53RecoveryClusterUpdateRoutingControlStateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingControlState',
        service: 'Route53RecoveryCluster',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryCluster.UpdateRoutingControlState'),
        parameters: {
          RoutingControlArn: input.routingControlArn,
          RoutingControlState: input.routingControlState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoutingControlState', props);
  }

  public updateRoutingControlStates(input: shapes.Route53RecoveryClusterUpdateRoutingControlStatesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingControlStates',
        service: 'Route53RecoveryCluster',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryCluster.UpdateRoutingControlStates'),
        parameters: {
          UpdateRoutingControlStateEntries: input.updateRoutingControlStateEntries,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoutingControlStates', props);
  }

}

export class Route53RecoveryClusterResponsesFetchRoutingControlState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryClusterGetRoutingControlStateRequest) {
  }

  public get routingControlArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoutingControlState',
        service: 'Route53RecoveryCluster',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryCluster.GetRoutingControlState.RoutingControlArn'),
        outputPath: 'RoutingControlArn',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoutingControlState.RoutingControlArn', props);
    return resource.getResponseField('RoutingControlArn') as unknown as string;
  }

  public get routingControlState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoutingControlState',
        service: 'Route53RecoveryCluster',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryCluster.GetRoutingControlState.RoutingControlState'),
        outputPath: 'RoutingControlState',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoutingControlState.RoutingControlState', props);
    return resource.getResponseField('RoutingControlState') as unknown as string;
  }

}

