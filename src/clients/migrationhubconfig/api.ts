import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MigrationHubConfigClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createHomeRegionControl(input: shapes.MigrationHubConfigCreateHomeRegionControlRequest): MigrationHubConfigResponsesCreateHomeRegionControl {
    return new MigrationHubConfigResponsesCreateHomeRegionControl(this, this.__resources, input);
  }

  public describeHomeRegionControls(input: shapes.MigrationHubConfigDescribeHomeRegionControlsRequest): MigrationHubConfigResponsesDescribeHomeRegionControls {
    return new MigrationHubConfigResponsesDescribeHomeRegionControls(this, this.__resources, input);
  }

  public fetchHomeRegion(): MigrationHubConfigResponsesFetchHomeRegion {
    return new MigrationHubConfigResponsesFetchHomeRegion(this, this.__resources);
  }

}

export class MigrationHubConfigResponsesCreateHomeRegionControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MigrationHubConfigCreateHomeRegionControlRequest) {
  }

  public get homeRegionControl(): MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl {
    return new MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl(this.__scope, this.__resources, this.__input);
  }

}

export class MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MigrationHubConfigCreateHomeRegionControlRequest) {
  }

  public get controlId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHomeRegionControl',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.CreateHomeRegionControl.HomeRegionControl.ControlId'),
        outputPath: 'HomeRegionControl.ControlId',
        parameters: {
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target.type,
            Id: this.__input.target.id,
          },
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHomeRegionControl.HomeRegionControl.ControlId', props);
    return resource.getResponseField('HomeRegionControl.ControlId') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHomeRegionControl',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.CreateHomeRegionControl.HomeRegionControl.HomeRegion'),
        outputPath: 'HomeRegionControl.HomeRegion',
        parameters: {
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target.type,
            Id: this.__input.target.id,
          },
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHomeRegionControl.HomeRegionControl.HomeRegion', props);
    return resource.getResponseField('HomeRegionControl.HomeRegion') as unknown as string;
  }

  public get target(): MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget {
    return new MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget(this.__scope, this.__resources, this.__input);
  }

  public get requestedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHomeRegionControl',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.CreateHomeRegionControl.HomeRegionControl.RequestedTime'),
        outputPath: 'HomeRegionControl.RequestedTime',
        parameters: {
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target.type,
            Id: this.__input.target.id,
          },
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHomeRegionControl.HomeRegionControl.RequestedTime', props);
    return resource.getResponseField('HomeRegionControl.RequestedTime') as unknown as string;
  }

}

export class MigrationHubConfigResponsesCreateHomeRegionControlHomeRegionControlTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MigrationHubConfigCreateHomeRegionControlRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHomeRegionControl',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.CreateHomeRegionControl.HomeRegionControl.Target.Type'),
        outputPath: 'HomeRegionControl.Target.Type',
        parameters: {
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target.type,
            Id: this.__input.target.id,
          },
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHomeRegionControl.HomeRegionControl.Target.Type', props);
    return resource.getResponseField('HomeRegionControl.Target.Type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHomeRegionControl',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.CreateHomeRegionControl.HomeRegionControl.Target.Id'),
        outputPath: 'HomeRegionControl.Target.Id',
        parameters: {
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target.type,
            Id: this.__input.target.id,
          },
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHomeRegionControl.HomeRegionControl.Target.Id', props);
    return resource.getResponseField('HomeRegionControl.Target.Id') as unknown as string;
  }

}

export class MigrationHubConfigResponsesDescribeHomeRegionControls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MigrationHubConfigDescribeHomeRegionControlsRequest) {
  }

  public get homeRegionControls(): shapes.MigrationHubConfigHomeRegionControl[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHomeRegionControls',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.DescribeHomeRegionControls.HomeRegionControls'),
        outputPath: 'HomeRegionControls',
        parameters: {
          ControlId: this.__input.controlId,
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target?.type,
            Id: this.__input.target?.id,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHomeRegionControls.HomeRegionControls', props);
    return resource.getResponseField('HomeRegionControls') as unknown as shapes.MigrationHubConfigHomeRegionControl[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHomeRegionControls',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.DescribeHomeRegionControls.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ControlId: this.__input.controlId,
          HomeRegion: this.__input.homeRegion,
          Target: {
            Type: this.__input.target?.type,
            Id: this.__input.target?.id,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHomeRegionControls.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MigrationHubConfigResponsesFetchHomeRegion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHomeRegion',
        service: 'MigrationHubConfig',
        physicalResourceId: cr.PhysicalResourceId.of('MigrationHubConfig.GetHomeRegion.HomeRegion'),
        outputPath: 'HomeRegion',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHomeRegion.HomeRegion', props);
    return resource.getResponseField('HomeRegion') as unknown as string;
  }

}

