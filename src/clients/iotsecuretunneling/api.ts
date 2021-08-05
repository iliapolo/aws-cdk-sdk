import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTSecureTunnelingClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public closeTunnel(input: shapes.IoTSecureTunnelingCloseTunnelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.CloseTunnel'),
        parameters: {
          tunnelId: input.tunnelId,
          delete: input.delete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CloseTunnel', props);
  }

  public describeTunnel(input: shapes.IoTSecureTunnelingDescribeTunnelRequest): IoTSecureTunnelingResponsesDescribeTunnel {
    return new IoTSecureTunnelingResponsesDescribeTunnel(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTSecureTunnelingListTagsForResourceRequest): IoTSecureTunnelingResponsesListTagsForResource {
    return new IoTSecureTunnelingResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTunnels(input: shapes.IoTSecureTunnelingListTunnelsRequest): IoTSecureTunnelingResponsesListTunnels {
    return new IoTSecureTunnelingResponsesListTunnels(this, this.__resources, input);
  }

  public openTunnel(input: shapes.IoTSecureTunnelingOpenTunnelRequest): IoTSecureTunnelingResponsesOpenTunnel {
    return new IoTSecureTunnelingResponsesOpenTunnel(this, this.__resources, input);
  }

  public tagResource(input: shapes.IoTSecureTunnelingTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IoTSecureTunnelingUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class IoTSecureTunnelingResponsesDescribeTunnel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
  }

  public get tunnel(): IoTSecureTunnelingResponsesDescribeTunnelTunnel {
    return new IoTSecureTunnelingResponsesDescribeTunnelTunnel(this.__scope, this.__resources, this.__input);
  }

}

export class IoTSecureTunnelingResponsesDescribeTunnelTunnel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
  }

  public get tunnelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.tunnelId'),
        outputPath: 'tunnel.tunnelId',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.tunnelId', props);
    return resource.getResponseField('tunnel.tunnelId') as unknown as string;
  }

  public get tunnelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.tunnelArn'),
        outputPath: 'tunnel.tunnelArn',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.tunnelArn', props);
    return resource.getResponseField('tunnel.tunnelArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.status'),
        outputPath: 'tunnel.status',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.status', props);
    return resource.getResponseField('tunnel.status') as unknown as string;
  }

  public get sourceConnectionState(): IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState {
    return new IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState(this.__scope, this.__resources, this.__input);
  }

  public get destinationConnectionState(): IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState {
    return new IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState(this.__scope, this.__resources, this.__input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.description'),
        outputPath: 'tunnel.description',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.description', props);
    return resource.getResponseField('tunnel.description') as unknown as string;
  }

  public get destinationConfig(): IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig {
    return new IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig(this.__scope, this.__resources, this.__input);
  }

  public get timeoutConfig(): IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig {
    return new IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.IoTSecureTunnelingTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.tags'),
        outputPath: 'tunnel.tags',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.tags', props);
    return resource.getResponseField('tunnel.tags') as unknown as shapes.IoTSecureTunnelingTag[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.createdAt'),
        outputPath: 'tunnel.createdAt',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.createdAt', props);
    return resource.getResponseField('tunnel.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.lastUpdatedAt'),
        outputPath: 'tunnel.lastUpdatedAt',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.lastUpdatedAt', props);
    return resource.getResponseField('tunnel.lastUpdatedAt') as unknown as string;
  }

}

export class IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.sourceConnectionState.status'),
        outputPath: 'tunnel.sourceConnectionState.status',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.sourceConnectionState.status', props);
    return resource.getResponseField('tunnel.sourceConnectionState.status') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.sourceConnectionState.lastUpdatedAt'),
        outputPath: 'tunnel.sourceConnectionState.lastUpdatedAt',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.sourceConnectionState.lastUpdatedAt', props);
    return resource.getResponseField('tunnel.sourceConnectionState.lastUpdatedAt') as unknown as string;
  }

}

export class IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.destinationConnectionState.status'),
        outputPath: 'tunnel.destinationConnectionState.status',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.destinationConnectionState.status', props);
    return resource.getResponseField('tunnel.destinationConnectionState.status') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.destinationConnectionState.lastUpdatedAt'),
        outputPath: 'tunnel.destinationConnectionState.lastUpdatedAt',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.destinationConnectionState.lastUpdatedAt', props);
    return resource.getResponseField('tunnel.destinationConnectionState.lastUpdatedAt') as unknown as string;
  }

}

export class IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
  }

  public get thingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.destinationConfig.thingName'),
        outputPath: 'tunnel.destinationConfig.thingName',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.destinationConfig.thingName', props);
    return resource.getResponseField('tunnel.destinationConfig.thingName') as unknown as string;
  }

  public get services(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.destinationConfig.services'),
        outputPath: 'tunnel.destinationConfig.services',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.destinationConfig.services', props);
    return resource.getResponseField('tunnel.destinationConfig.services') as unknown as string[];
  }

}

export class IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
  }

  public get maxLifetimeTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.DescribeTunnel.tunnel.timeoutConfig.maxLifetimeTimeoutMinutes'),
        outputPath: 'tunnel.timeoutConfig.maxLifetimeTimeoutMinutes',
        parameters: {
          tunnelId: this.__input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTunnel.tunnel.timeoutConfig.maxLifetimeTimeoutMinutes', props);
    return resource.getResponseField('tunnel.timeoutConfig.maxLifetimeTimeoutMinutes') as unknown as number;
  }

}

export class IoTSecureTunnelingResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingListTagsForResourceRequest) {
  }

  public get tags(): shapes.IoTSecureTunnelingTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTSecureTunnelingTag[];
  }

}

export class IoTSecureTunnelingResponsesListTunnels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingListTunnelsRequest) {
  }

  public get tunnelSummaries(): shapes.IoTSecureTunnelingTunnelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTunnels',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.ListTunnels.tunnelSummaries'),
        outputPath: 'tunnelSummaries',
        parameters: {
          thingName: this.__input.thingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTunnels.tunnelSummaries', props);
    return resource.getResponseField('tunnelSummaries') as unknown as shapes.IoTSecureTunnelingTunnelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTunnels',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.ListTunnels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingName: this.__input.thingName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTunnels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSecureTunnelingResponsesOpenTunnel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTSecureTunnelingOpenTunnelRequest) {
  }

  public get tunnelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.OpenTunnel.tunnelId'),
        outputPath: 'tunnelId',
        parameters: {
          description: this.__input.description,
          tags: this.__input.tags,
          destinationConfig: {
            thingName: this.__input.destinationConfig?.thingName,
            services: this.__input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.__input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenTunnel.tunnelId', props);
    return resource.getResponseField('tunnelId') as unknown as string;
  }

  public get tunnelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.OpenTunnel.tunnelArn'),
        outputPath: 'tunnelArn',
        parameters: {
          description: this.__input.description,
          tags: this.__input.tags,
          destinationConfig: {
            thingName: this.__input.destinationConfig?.thingName,
            services: this.__input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.__input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenTunnel.tunnelArn', props);
    return resource.getResponseField('tunnelArn') as unknown as string;
  }

  public get sourceAccessToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.OpenTunnel.sourceAccessToken'),
        outputPath: 'sourceAccessToken',
        parameters: {
          description: this.__input.description,
          tags: this.__input.tags,
          destinationConfig: {
            thingName: this.__input.destinationConfig?.thingName,
            services: this.__input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.__input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenTunnel.sourceAccessToken', props);
    return resource.getResponseField('sourceAccessToken') as unknown as string;
  }

  public get destinationAccessToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openTunnel',
        service: 'IoTSecureTunneling',
        physicalResourceId: cr.PhysicalResourceId.of('IoTSecureTunneling.OpenTunnel.destinationAccessToken'),
        outputPath: 'destinationAccessToken',
        parameters: {
          description: this.__input.description,
          tags: this.__input.tags,
          destinationConfig: {
            thingName: this.__input.destinationConfig?.thingName,
            services: this.__input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.__input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenTunnel.destinationAccessToken', props);
    return resource.getResponseField('destinationAccessToken') as unknown as string;
  }

}

