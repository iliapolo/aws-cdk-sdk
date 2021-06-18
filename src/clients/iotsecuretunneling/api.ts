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

  public describeTunnel(input: shapes.IoTSecureTunnelingDescribeTunnelRequest): IoTSecureTunnelingDescribeTunnel {
    return new IoTSecureTunnelingDescribeTunnel(this, 'DescribeTunnel', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTSecureTunnelingListTagsForResourceRequest): IoTSecureTunnelingListTagsForResource {
    return new IoTSecureTunnelingListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTunnels(input: shapes.IoTSecureTunnelingListTunnelsRequest): IoTSecureTunnelingListTunnels {
    return new IoTSecureTunnelingListTunnels(this, 'ListTunnels', this.__resources, input);
  }

  public openTunnel(input: shapes.IoTSecureTunnelingOpenTunnelRequest): IoTSecureTunnelingOpenTunnel {
    return new IoTSecureTunnelingOpenTunnel(this, 'OpenTunnel', this.__resources, input);
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

export class IoTSecureTunnelingDescribeTunnel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
    super(scope, id);
  }

  public get tunnel(): IoTSecureTunnelingDescribeTunnelTunnel {
    return new IoTSecureTunnelingDescribeTunnelTunnel(this, 'Tunnel', this.__resources, this.input);
  }

}

export class IoTSecureTunnelingDescribeTunnelTunnel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
    super(scope, id);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.tunnelId', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.tunnelArn', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.status', props);
    return resource.getResponseField('tunnel.status') as unknown as string;
  }

  public get sourceConnectionState(): IoTSecureTunnelingDescribeTunnelTunnelSourceConnectionState {
    return new IoTSecureTunnelingDescribeTunnelTunnelSourceConnectionState(this, 'SourceConnectionState', this.__resources, this.input);
  }

  public get destinationConnectionState(): IoTSecureTunnelingDescribeTunnelTunnelDestinationConnectionState {
    return new IoTSecureTunnelingDescribeTunnelTunnelDestinationConnectionState(this, 'DestinationConnectionState', this.__resources, this.input);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.description', props);
    return resource.getResponseField('tunnel.description') as unknown as string;
  }

  public get destinationConfig(): IoTSecureTunnelingDescribeTunnelTunnelDestinationConfig {
    return new IoTSecureTunnelingDescribeTunnelTunnelDestinationConfig(this, 'DestinationConfig', this.__resources, this.input);
  }

  public get timeoutConfig(): IoTSecureTunnelingDescribeTunnelTunnelTimeoutConfig {
    return new IoTSecureTunnelingDescribeTunnelTunnelTimeoutConfig(this, 'TimeoutConfig', this.__resources, this.input);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.tags', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.createdAt', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.lastUpdatedAt', props);
    return resource.getResponseField('tunnel.lastUpdatedAt') as unknown as string;
  }

}

export class IoTSecureTunnelingDescribeTunnelTunnelSourceConnectionState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
    super(scope, id);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.sourceConnectionState.status', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.sourceConnectionState.lastUpdatedAt', props);
    return resource.getResponseField('tunnel.sourceConnectionState.lastUpdatedAt') as unknown as string;
  }

}

export class IoTSecureTunnelingDescribeTunnelTunnelDestinationConnectionState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
    super(scope, id);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.destinationConnectionState.status', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.destinationConnectionState.lastUpdatedAt', props);
    return resource.getResponseField('tunnel.destinationConnectionState.lastUpdatedAt') as unknown as string;
  }

}

export class IoTSecureTunnelingDescribeTunnelTunnelDestinationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
    super(scope, id);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.destinationConfig.thingName', props);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.destinationConfig.services', props);
    return resource.getResponseField('tunnel.destinationConfig.services') as unknown as string[];
  }

}

export class IoTSecureTunnelingDescribeTunnelTunnelTimeoutConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingDescribeTunnelRequest) {
    super(scope, id);
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
          tunnelId: this.input.tunnelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTunnel.tunnel.timeoutConfig.maxLifetimeTimeoutMinutes', props);
    return resource.getResponseField('tunnel.timeoutConfig.maxLifetimeTimeoutMinutes') as unknown as number;
  }

}

export class IoTSecureTunnelingListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTSecureTunnelingTag[];
  }

}

export class IoTSecureTunnelingListTunnels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingListTunnelsRequest) {
    super(scope, id);
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
          thingName: this.input.thingName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTunnels.tunnelSummaries', props);
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
          thingName: this.input.thingName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTunnels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTSecureTunnelingOpenTunnel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTSecureTunnelingOpenTunnelRequest) {
    super(scope, id);
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
          description: this.input.description,
          tags: this.input.tags,
          destinationConfig: {
            thingName: this.input.destinationConfig?.thingName,
            services: this.input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenTunnel.tunnelId', props);
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
          description: this.input.description,
          tags: this.input.tags,
          destinationConfig: {
            thingName: this.input.destinationConfig?.thingName,
            services: this.input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenTunnel.tunnelArn', props);
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
          description: this.input.description,
          tags: this.input.tags,
          destinationConfig: {
            thingName: this.input.destinationConfig?.thingName,
            services: this.input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenTunnel.sourceAccessToken', props);
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
          description: this.input.description,
          tags: this.input.tags,
          destinationConfig: {
            thingName: this.input.destinationConfig?.thingName,
            services: this.input.destinationConfig?.services,
          },
          timeoutConfig: {
            maxLifetimeTimeoutMinutes: this.input.timeoutConfig?.maxLifetimeTimeoutMinutes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenTunnel.destinationAccessToken', props);
    return resource.getResponseField('destinationAccessToken') as unknown as string;
  }

}

