import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MigrationHubConfigClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createHomeRegionControl(input: shapes.MigrationHubConfigCreateHomeRegionControlRequest): MigrationHubConfigCreateHomeRegionControl {
    return new MigrationHubConfigCreateHomeRegionControl(this, 'CreateHomeRegionControl', this.__resources, input);
  }

  public describeHomeRegionControls(input: shapes.MigrationHubConfigDescribeHomeRegionControlsRequest): MigrationHubConfigDescribeHomeRegionControls {
    return new MigrationHubConfigDescribeHomeRegionControls(this, 'DescribeHomeRegionControls', this.__resources, input);
  }

  public fetchHomeRegion(): MigrationHubConfigFetchHomeRegion {
    return new MigrationHubConfigFetchHomeRegion(this, 'FetchHomeRegion', this.__resources);
  }

}

export class MigrationHubConfigCreateHomeRegionControl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MigrationHubConfigCreateHomeRegionControlRequest) {
    super(scope, id);
  }

  public get homeRegionControl(): MigrationHubConfigCreateHomeRegionControlHomeRegionControl {
    return new MigrationHubConfigCreateHomeRegionControlHomeRegionControl(this, 'HomeRegionControl', this.__resources, this.input);
  }

}

export class MigrationHubConfigCreateHomeRegionControlHomeRegionControl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MigrationHubConfigCreateHomeRegionControlRequest) {
    super(scope, id);
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
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target.type,
            Id: this.input.target.id,
          },
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHomeRegionControl.HomeRegionControl.ControlId', props);
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
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target.type,
            Id: this.input.target.id,
          },
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHomeRegionControl.HomeRegionControl.HomeRegion', props);
    return resource.getResponseField('HomeRegionControl.HomeRegion') as unknown as string;
  }

  public get target(): MigrationHubConfigCreateHomeRegionControlHomeRegionControlTarget {
    return new MigrationHubConfigCreateHomeRegionControlHomeRegionControlTarget(this, 'Target', this.__resources, this.input);
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
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target.type,
            Id: this.input.target.id,
          },
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHomeRegionControl.HomeRegionControl.RequestedTime', props);
    return resource.getResponseField('HomeRegionControl.RequestedTime') as unknown as string;
  }

}

export class MigrationHubConfigCreateHomeRegionControlHomeRegionControlTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MigrationHubConfigCreateHomeRegionControlRequest) {
    super(scope, id);
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
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target.type,
            Id: this.input.target.id,
          },
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHomeRegionControl.HomeRegionControl.Target.Type', props);
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
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target.type,
            Id: this.input.target.id,
          },
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHomeRegionControl.HomeRegionControl.Target.Id', props);
    return resource.getResponseField('HomeRegionControl.Target.Id') as unknown as string;
  }

}

export class MigrationHubConfigDescribeHomeRegionControls extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MigrationHubConfigDescribeHomeRegionControlsRequest) {
    super(scope, id);
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
          ControlId: this.input.controlId,
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target?.type,
            Id: this.input.target?.id,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHomeRegionControls.HomeRegionControls', props);
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
          ControlId: this.input.controlId,
          HomeRegion: this.input.homeRegion,
          Target: {
            Type: this.input.target?.type,
            Id: this.input.target?.id,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHomeRegionControls.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MigrationHubConfigFetchHomeRegion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetHomeRegion.HomeRegion', props);
    return resource.getResponseField('HomeRegion') as unknown as string;
  }

}

